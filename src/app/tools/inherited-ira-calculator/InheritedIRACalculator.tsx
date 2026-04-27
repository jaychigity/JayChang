'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'
import {
  TAX_YEAR,
  FEDERAL_BRACKETS_SINGLE,
  FEDERAL_BRACKETS_MFJ,
  STANDARD_DEDUCTION_SINGLE,
  STANDARD_DEDUCTION_MFJ,
} from '@/lib/tax-constants-2026'

/* ═══════════════════════════════════════════════════════════════════════
   IRS Single Life Expectancy Table (Appendix B, Publication 590-B)
   Used for beneficiary RMDs — updated for 2022+ final regulations.
   ═══════════════════════════════════════════════════════════════════════ */
const SINGLE_LIFE_TABLE: Record<number, number> = {
  0: 84.6, 1: 83.7, 2: 82.7, 3: 81.7, 4: 80.8, 5: 79.8, 6: 78.8, 7: 77.8,
  8: 76.8, 9: 75.8, 10: 74.8, 11: 73.9, 12: 72.9, 13: 71.9, 14: 70.9,
  15: 69.9, 16: 69.0, 17: 68.0, 18: 67.0, 19: 66.0, 20: 65.0, 21: 64.1,
  22: 63.1, 23: 62.1, 24: 61.1, 25: 60.2, 26: 59.2, 27: 58.2, 28: 57.3,
  29: 56.3, 30: 55.3, 31: 54.4, 32: 53.4, 33: 52.4, 34: 51.5, 35: 50.5,
  36: 49.6, 37: 48.6, 38: 47.7, 39: 46.7, 40: 45.7, 41: 44.8, 42: 43.8,
  43: 42.9, 44: 41.9, 45: 41.0, 46: 40.0, 47: 39.0, 48: 38.1, 49: 37.1,
  50: 36.2, 51: 35.3, 52: 34.3, 53: 33.4, 54: 32.5, 55: 31.6, 56: 30.6,
  57: 29.8, 58: 28.9, 59: 28.0, 60: 27.1, 61: 26.2, 62: 25.4, 63: 24.5,
  64: 23.7, 65: 22.9, 66: 22.0, 67: 21.2, 68: 20.4, 69: 19.6, 70: 18.8,
  71: 18.0, 72: 17.2, 73: 16.4, 74: 15.6, 75: 14.8, 76: 14.1, 77: 13.3,
  78: 12.6, 79: 11.9, 80: 11.2, 81: 10.5, 82: 9.9, 83: 9.3, 84: 8.7,
  85: 8.1, 86: 7.5, 87: 7.0, 88: 6.5, 89: 6.1, 90: 5.7, 91: 5.3,
  92: 4.9, 93: 4.6, 94: 4.3, 95: 4.0, 96: 3.7, 97: 3.4, 98: 3.2,
  99: 3.0, 100: 2.8, 101: 2.6, 102: 2.5, 103: 2.3, 104: 2.2, 105: 2.1,
  106: 1.9, 107: 1.8, 108: 1.7, 109: 1.5, 110: 1.4, 111: 1.3, 112: 1.2,
  113: 1.1, 114: 1.0, 115: 0.9, 116: 0.8, 117: 0.7, 118: 0.6, 119: 0.5, 120: 0.5,
}

function getLifeExpectancy(age: number): number {
  if (age < 0) return 84.6
  if (age > 120) return 0.5
  return SINGLE_LIFE_TABLE[age] ?? 0.5
}

/* ═══════════════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════════════ */
type AccountType = 'traditional' | 'roth'
type BeneficiaryType = 'spouse' | 'minor-child' | 'disabled' | 'close-in-age' | 'non-edb'
type FilingStatus = 'single' | 'mfj'
type Strategy = 'even' | 'front-load' | 'back-load' | 'rmd-only'

interface YearRow {
  year: number
  age: number
  startBalance: number
  rmd: number
  withdrawal: number
  taxableAmount: number
  federalTax: number
  stateTax: number
  totalTax: number
  afterTax: number
  endBalance: number
}

/* ═══════════════════════════════════════════════════════════════════════
   Tax Helpers
   ═══════════════════════════════════════════════════════════════════════ */
function computeFederalTax(taxableIncome: number, filing: FilingStatus): number {
  const brackets = filing === 'mfj' ? FEDERAL_BRACKETS_MFJ : FEDERAL_BRACKETS_SINGLE
  let tax = 0
  let prev = 0
  for (const b of brackets) {
    if (taxableIncome <= b.upTo) {
      tax += (taxableIncome - prev) * b.rate
      return tax
    }
    tax += (b.upTo - prev) * b.rate
    prev = b.upTo
  }
  tax += (taxableIncome - prev) * 0.37
  return tax
}

function getMarginalRate(taxableIncome: number, filing: FilingStatus): number {
  const brackets = filing === 'mfj' ? FEDERAL_BRACKETS_MFJ : FEDERAL_BRACKETS_SINGLE
  for (const b of brackets) {
    if (taxableIncome <= b.upTo) return b.rate
  }
  return 0.37
}

const STATE_TAX_RATES: Record<string, number> = {
  'none': 0,
  'az': 0.025,
  'ca': 0.093,
  'nv': 0,
  'other-low': 0.03,
  'other-mid': 0.05,
  'other-high': 0.08,
}

/* ═══════════════════════════════════════════════════════════════════════
   RBD (Required Beginning Date) Logic
   ═══════════════════════════════════════════════════════════════════════ */
const RMD_START_AGE = 73 // SECURE 2.0: RBD is April 1 after turning 73

function ownerPastRBD(ageAtDeath: number): boolean {
  return ageAtDeath >= RMD_START_AGE
}

/* ═══════════════════════════════════════════════════════════════════════
   Distribution Engine
   ═══════════════════════════════════════════════════════════════════════ */
function buildSchedule(
  balance: number,
  accountType: AccountType,
  beneficiaryType: BeneficiaryType,
  beneficiaryAge: number,
  ownerAgeAtDeath: number,
  yearOfDeath: number,
  growthRate: number,
  otherIncome: number,
  filing: FilingStatus,
  stateTaxKey: string,
  strategy: Strategy,
): YearRow[] {
  const rows: YearRow[] = []
  const stateTaxRate = STATE_TAX_RATES[stateTaxKey] ?? 0
  const stdDeduction = filing === 'mfj' ? STANDARD_DEDUCTION_MFJ : STANDARD_DEDUCTION_SINGLE
  const pastRBD = ownerPastRBD(ownerAgeAtDeath)

  // Determine distribution window
  let windowYears: number
  let useLifeExpectancy = false

  if (beneficiaryType === 'spouse') {
    // Spouse — use life expectancy (stretch), recalculated annually
    useLifeExpectancy = true
    windowYears = Math.max(Math.round(getLifeExpectancy(beneficiaryAge + 1)), 1)
  } else if (beneficiaryType === 'disabled' || beneficiaryType === 'close-in-age') {
    // EDB — life expectancy stretch
    useLifeExpectancy = true
    windowYears = Math.max(Math.round(getLifeExpectancy(beneficiaryAge + 1)), 1)
  } else if (beneficiaryType === 'minor-child') {
    // Minor child: stretch until age 21, then 10-year rule
    const yearsUntil21 = Math.max(21 - beneficiaryAge, 0)
    windowYears = yearsUntil21 + 10
    useLifeExpectancy = false // simplified: use life expectancy until 21, then 10-year
  } else {
    // Non-EDB: 10-year rule
    windowYears = 10
  }

  const startYear = yearOfDeath + 1
  let currentBalance = balance

  for (let i = 0; i < windowYears; i++) {
    const year = startYear + i
    const age = beneficiaryAge + 1 + i
    const isLastYear = i === windowYears - 1
    const startBalance = currentBalance
    if (startBalance <= 0) break

    // Calculate minimum RMD for this year
    let minRMD = 0
    if (useLifeExpectancy) {
      // Life expectancy method
      const le = getLifeExpectancy(age)
      if (le > 0) minRMD = startBalance / le
    } else if (beneficiaryType === 'minor-child') {
      const yearsUntil21 = Math.max(21 - beneficiaryAge, 0)
      if (i < yearsUntil21) {
        // Life expectancy stretch while minor
        const le = getLifeExpectancy(age)
        if (le > 0) minRMD = startBalance / le
      } else if (!isLastYear && pastRBD) {
        // 10-year window after reaching majority, annual RMDs if owner past RBD
        const remainingYears = windowYears - i
        minRMD = startBalance / remainingYears
      }
    } else {
      // Non-EDB 10-year rule
      if (isLastYear) {
        minRMD = startBalance // Must empty in year 10
      } else if (pastRBD) {
        // Annual RMDs required if owner died after RBD
        const le = getLifeExpectancy(age)
        if (le > 0) minRMD = startBalance / le
      }
    }

    if (isLastYear) {
      minRMD = startBalance // Must empty account in final year
    }

    // Determine withdrawal based on strategy
    let withdrawal = 0
    const remainingYears = windowYears - i

    switch (strategy) {
      case 'even':
        withdrawal = Math.max(startBalance / remainingYears, minRMD)
        break
      case 'front-load': {
        // Take more early: 2x even in first half, minimum in second half
        const halfPoint = Math.ceil(windowYears / 2)
        if (i < halfPoint) {
          const frontLoadShare = startBalance / Math.max(halfPoint - i, 1) * 0.8
          withdrawal = Math.max(frontLoadShare, minRMD)
        } else {
          withdrawal = Math.max(minRMD, startBalance / remainingYears)
        }
        break
      }
      case 'back-load':
        // Take minimum early, larger amounts later
        if (isLastYear) {
          withdrawal = startBalance
        } else if (minRMD > 0) {
          withdrawal = minRMD
        } else {
          // No required RMD — take nothing
          withdrawal = 0
        }
        break
      case 'rmd-only':
        withdrawal = isLastYear ? startBalance : minRMD
        break
    }

    // Cap at balance
    withdrawal = Math.min(withdrawal, startBalance)
    withdrawal = Math.max(withdrawal, 0)

    // Tax calculation
    const taxableAmount = accountType === 'roth' ? 0 : withdrawal
    const totalTaxableIncome = otherIncome + taxableAmount
    const taxableAfterDeduction = Math.max(totalTaxableIncome - stdDeduction, 0)
    const baselineTaxable = Math.max(otherIncome - stdDeduction, 0)

    const totalFederalTax = computeFederalTax(taxableAfterDeduction, filing)
    const baselineFederalTax = computeFederalTax(baselineTaxable, filing)
    const federalTax = Math.max(totalFederalTax - baselineFederalTax, 0)

    const stateTax = taxableAmount * stateTaxRate
    const totalTax = federalTax + stateTax
    const afterTax = withdrawal - totalTax

    const endBalance = (startBalance - withdrawal) * (1 + growthRate)

    rows.push({
      year,
      age,
      startBalance,
      rmd: minRMD,
      withdrawal,
      taxableAmount,
      federalTax,
      stateTax,
      totalTax,
      afterTax,
      endBalance: Math.max(endBalance, 0),
    })

    currentBalance = Math.max(endBalance, 0)
  }

  return rows
}

/* ═══════════════════════════════════════════════════════════════════════
   Format Helpers
   ═══════════════════════════════════════════════════════════════════════ */
const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const pct = (n: number) => `${(n * 100).toFixed(1)}%`

/* ═══════════════════════════════════════════════════════════════════════
   Beneficiary Info Cards
   ═══════════════════════════════════════════════════════════════════════ */
const BENEFICIARY_INFO: Record<BeneficiaryType, { label: string; icon: string; description: string; rule: string }> = {
  'spouse': {
    label: 'Surviving Spouse',
    icon: '💍',
    description: 'You were married to the original IRA owner at the time of their death.',
    rule: 'As a spouse, you have the most options: roll it into your own IRA, keep it as an inherited IRA with stretch distributions based on your life expectancy, or disclaim it. You are not subject to the 10-year rule.',
  },
  'minor-child': {
    label: 'Minor Child of the Owner',
    icon: '👶',
    description: 'You are under 21 and are the biological or legally adopted child of the deceased owner.',
    rule: 'Minor children can stretch distributions using life expectancy until they reach the age of majority (21). After that, the 10-year rule kicks in. The remaining balance must be distributed within 10 years of turning 21.',
  },
  'disabled': {
    label: 'Disabled or Chronically Ill',
    icon: '♿',
    description: 'You meet the IRS definition of disabled (IRC §72(m)(7)) or chronically ill (IRC §7702B(c)(2)).',
    rule: 'Disabled and chronically ill beneficiaries can use the life expectancy (stretch) method, taking annual distributions based on the IRS Single Life Expectancy Table. You are not subject to the 10-year rule.',
  },
  'close-in-age': {
    label: 'Not More Than 10 Years Younger',
    icon: '👥',
    description: 'You are not more than 10 years younger than the deceased IRA owner (e.g., a sibling, partner, or friend close in age).',
    rule: 'Because you are close in age to the owner, you qualify for the life expectancy stretch method. Annual RMDs are based on your age using the IRS Single Life Expectancy Table.',
  },
  'non-edb': {
    label: 'Non-Eligible Designated Beneficiary',
    icon: '👤',
    description: 'Adult children, grandchildren, friends, or any other individual who does not qualify as an Eligible Designated Beneficiary.',
    rule: 'You are subject to the 10-year rule: the entire inherited IRA must be emptied by December 31 of the 10th year after the owner\'s death. If the owner had already started RMDs (age 73+), you must also take annual distributions in years 1-9.',
  },
}

const STRATEGY_INFO: Record<Strategy, { label: string; description: string }> = {
  'even': { label: 'Even Distribution', description: 'Spread withdrawals equally across your distribution window. Keeps your tax bracket consistent year over year.' },
  'front-load': { label: 'Front-Load', description: 'Take larger withdrawals early. Useful if you expect your income (and tax bracket) to rise in future years.' },
  'back-load': { label: 'Back-Load (Defer)', description: 'Take the minimum required and defer the rest. Maximizes tax-deferred growth but may push you into a higher bracket in later years.' },
  'rmd-only': { label: 'Minimum RMD Only', description: 'Take only what the IRS requires each year, with the remaining balance due in the final year. Similar to back-load but strictly follows RMD minimums.' },
}

/* ═══════════════════════════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════════════════════════ */
export default function InheritedIRACalculator() {
  // Step tracking
  const [step, setStep] = useState(1)

  // Step 1: Account details
  const [balance, setBalance] = useState(500000)
  const [accountType, setAccountType] = useState<AccountType>('traditional')
  const [yearOfDeath, setYearOfDeath] = useState(TAX_YEAR)
  const [ownerBirthYear, setOwnerBirthYear] = useState(TAX_YEAR - 78)

  // Step 2: Beneficiary
  const [beneficiaryType, setBeneficiaryType] = useState<BeneficiaryType>('non-edb')
  const [beneficiaryBirthYear, setBeneficiaryBirthYear] = useState(TAX_YEAR - 45)

  // Derived ages
  const ownerAgeAtDeath = yearOfDeath - ownerBirthYear
  const beneficiaryAge = TAX_YEAR - beneficiaryBirthYear

  // Step 3: Tax situation
  const [filing, setFiling] = useState<FilingStatus>('single')
  const [otherIncome, setOtherIncome] = useState(85000)
  const [stateTaxKey, setStateTaxKey] = useState('az')
  const [growthRate, setGrowthRate] = useState(0.06)

  // Step 4: Strategy
  const [strategy, setStrategy] = useState<Strategy>('even')

  // Computed results
  const schedule = useMemo(() => {
    return buildSchedule(
      balance, accountType, beneficiaryType, beneficiaryAge,
      ownerAgeAtDeath, yearOfDeath, growthRate, otherIncome,
      filing, stateTaxKey, strategy
    )
  }, [balance, accountType, beneficiaryType, beneficiaryAge, ownerAgeAtDeath, yearOfDeath, growthRate, otherIncome, filing, stateTaxKey, strategy])

  // Strategy comparison
  const strategies: Strategy[] = ['even', 'front-load', 'back-load', 'rmd-only']
  const comparison = useMemo(() => {
    return strategies.map(s => {
      const sched = buildSchedule(
        balance, accountType, beneficiaryType, beneficiaryAge,
        ownerAgeAtDeath, yearOfDeath, growthRate, otherIncome,
        filing, stateTaxKey, s
      )
      const totalWithdrawn = sched.reduce((sum, r) => sum + r.withdrawal, 0)
      const totalTax = sched.reduce((sum, r) => sum + r.totalTax, 0)
      const totalAfterTax = sched.reduce((sum, r) => sum + r.afterTax, 0)
      const maxBracket = Math.max(...sched.map(r => {
        const taxable = Math.max(otherIncome + r.taxableAmount - (filing === 'mfj' ? STANDARD_DEDUCTION_MFJ : STANDARD_DEDUCTION_SINGLE), 0)
        return getMarginalRate(taxable, filing)
      }))
      return { strategy: s, totalWithdrawn, totalTax, totalAfterTax, maxBracket, rows: sched.length }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balance, accountType, beneficiaryType, beneficiaryAge, ownerAgeAtDeath, yearOfDeath, growthRate, otherIncome, filing, stateTaxKey])

  const totalWithdrawn = schedule.reduce((s, r) => s + r.withdrawal, 0)
  const totalTax = schedule.reduce((s, r) => s + r.totalTax, 0)
  const totalAfterTax = schedule.reduce((s, r) => s + r.afterTax, 0)
  const effectiveRate = totalWithdrawn > 0 ? totalTax / totalWithdrawn : 0
  const pastRBD = ownerPastRBD(ownerAgeAtDeath)
  const benInfo = BENEFICIARY_INFO[beneficiaryType]

  const isEDB = beneficiaryType !== 'non-edb'

  /* ─── Shared styles ─── */
  const cardStyle = 'bg-white rounded-xl border border-[#E2E8F0] p-6'
  const labelStyle = 'font-sans text-[13px] font-semibold text-[#333] uppercase tracking-[0.05em] mb-2 block'
  const inputStyle = 'w-full border-2 border-[#E2E8F0] rounded-lg px-4 py-3 font-sans text-[16px] text-[#333] focus:border-[#1d7682] focus:outline-none transition-colors'
  const btnActive = 'bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white border-transparent shadow-md'
  const btnInactive = 'bg-white text-[#333] border-[#E2E8F0] hover:border-[#1d7682]/50'

  return (
    <div className="max-w-[960px] mx-auto px-5 md:px-10 py-12 md:py-16">

      {/* ══════════════════ STEP INDICATOR ══════════════════ */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {[1, 2, 3, 4].map(s => (
          <button
            key={s}
            onClick={() => setStep(s)}
            className={`font-sans text-[13px] font-semibold px-4 py-2 rounded-full border-2 transition-all ${
              step === s ? btnActive : step > s ? 'bg-[#1d7682]/10 text-[#1d7682] border-[#1d7682]/30' : btnInactive
            }`}
          >
            {s === 1 && 'Account'}
            {s === 2 && 'Beneficiary'}
            {s === 3 && 'Tax Situation'}
            {s === 4 && 'Results'}
          </button>
        ))}
      </div>

      {/* ══════════════════ STEP 1: ACCOUNT DETAILS ══════════════════ */}
      {step === 1 && (
        <div className="space-y-6">
          <div className={cardStyle}>
            <h2 className="font-serif text-[24px] md:text-[28px] text-[#333] mb-2">
              About the Inherited IRA
            </h2>
            <p className="font-sans text-[14px] text-[#5b6a71] mb-6 leading-relaxed">
              Tell us about the IRA you inherited. These details determine which IRS rules apply to your distributions.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Balance */}
              <div>
                <label className={labelStyle}>Inherited IRA Balance</label>
                <input
                  type="text"
                  className={inputStyle}
                  value={balance ? `$${balance.toLocaleString()}` : ''}
                  onChange={e => {
                    const v = parseInt(e.target.value.replace(/[^0-9]/g, ''))
                    setBalance(isNaN(v) ? 0 : v)
                  }}
                />
                <p className="font-sans text-[12px] text-[#94A3B8] mt-1">Current account value</p>
              </div>

              {/* Account Type */}
              <div>
                <label className={labelStyle}>Account Type</label>
                <div className="flex gap-3">
                  {(['traditional', 'roth'] as const).map(t => (
                    <button
                      key={t}
                      onClick={() => setAccountType(t)}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 font-sans text-[14px] font-semibold transition-all ${
                        accountType === t ? btnActive : btnInactive
                      }`}
                    >
                      {t === 'traditional' ? 'Traditional IRA' : 'Roth IRA'}
                    </button>
                  ))}
                </div>
                <p className="font-sans text-[12px] text-[#94A3B8] mt-1">
                  {accountType === 'roth'
                    ? 'Roth: Distributions are tax-free, but you still must follow the distribution timeline.'
                    : 'Traditional: Distributions are taxed as ordinary income in the year you withdraw.'}
                </p>
              </div>

              {/* Year of Death */}
              <div>
                <label className={labelStyle}>Year the Owner Passed Away</label>
                <input
                  type="number"
                  className={inputStyle}
                  value={yearOfDeath}
                  min={2020}
                  max={TAX_YEAR}
                  onChange={e => setYearOfDeath(parseInt(e.target.value) || TAX_YEAR)}
                />
                <p className="font-sans text-[12px] text-[#94A3B8] mt-1">
                  SECURE Act rules apply to deaths after December 31, 2019
                </p>
              </div>

              {/* Owner Birth Year */}
              <div>
                <label className={labelStyle}>Owner&apos;s Year of Birth</label>
                <input
                  type="number"
                  className={inputStyle}
                  value={ownerBirthYear}
                  min={1900}
                  max={yearOfDeath}
                  onChange={e => setOwnerBirthYear(parseInt(e.target.value) || (TAX_YEAR - 78))}
                />
                <p className="font-sans text-[12px] text-[#5b6a71] mt-1">
                  Age at death: <strong>{ownerAgeAtDeath}</strong>
                </p>
                <p className="font-sans text-[12px] text-[#94A3B8] mt-1">
                  {pastRBD
                    ? '⚠️ Owner was 73+: they had reached their Required Beginning Date (RBD). This means annual RMDs are required for most non-spouse beneficiaries.'
                    : '✓ Owner was under 73: they had NOT started Required Minimum Distributions. Non-EDB beneficiaries may have more flexibility in distribution timing.'}
                </p>
              </div>
            </div>
          </div>

          {/* RBD Explainer */}
          <div className="bg-[#1d7682]/5 rounded-xl border border-[#1d7682]/20 p-5">
            <h3 className="font-sans text-[14px] font-bold text-[#1d7682] mb-2">
              Why does the owner&apos;s age matter?
            </h3>
            <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
              Under SECURE 2.0, IRA owners must begin taking Required Minimum Distributions (RMDs) at age 73. If the owner died <strong>after</strong> reaching this age, most non-spouse beneficiaries must take annual RMDs during the 10-year window. If the owner died <strong>before</strong> age 73, non-spouse beneficiaries can choose when to withdraw, as long as the account is emptied by year 10.
            </p>
          </div>

          <button
            onClick={() => setStep(2)}
            className="w-full py-4 rounded-full font-sans text-[15px] font-semibold bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white shadow-md hover:shadow-lg transition-all"
          >
            Next: Your Beneficiary Type →
          </button>
        </div>
      )}

      {/* ══════════════════ STEP 2: BENEFICIARY TYPE ══════════════════ */}
      {step === 2 && (
        <div className="space-y-6">
          <div className={cardStyle}>
            <h2 className="font-serif text-[24px] md:text-[28px] text-[#333] mb-2">
              What Is Your Relationship to the Owner?
            </h2>
            <p className="font-sans text-[14px] text-[#5b6a71] mb-6 leading-relaxed">
              Your relationship determines which distribution rules apply. The IRS classifies beneficiaries into &ldquo;Eligible Designated Beneficiaries&rdquo; (EDBs) who get special treatment, and everyone else who falls under the 10-year rule.
            </p>

            <div className="space-y-3">
              {(Object.entries(BENEFICIARY_INFO) as [BeneficiaryType, typeof benInfo][]).map(([key, info]) => (
                <button
                  key={key}
                  onClick={() => setBeneficiaryType(key)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    beneficiaryType === key
                      ? 'border-[#1d7682] bg-[#1d7682]/5'
                      : 'border-[#E2E8F0] hover:border-[#1d7682]/40 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[24px]">{info.icon}</span>
                    <div>
                      <p className="font-sans text-[15px] font-semibold text-[#333]">
                        {info.label}
                        {key !== 'non-edb' && (
                          <span className="ml-2 text-[11px] font-bold text-[#1d7682] bg-[#1d7682]/10 px-2 py-0.5 rounded-full uppercase">
                            EDB
                          </span>
                        )}
                      </p>
                      <p className="font-sans text-[13px] text-[#5b6a71] mt-1">{info.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Rule explanation for selected type */}
          <div className="bg-[#1d7682]/5 rounded-xl border border-[#1d7682]/20 p-5">
            <h3 className="font-sans text-[14px] font-bold text-[#1d7682] mb-2">
              Your Rule: {benInfo.label}
            </h3>
            <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
              {benInfo.rule}
            </p>
          </div>

          {/* Beneficiary Birth Year */}
          <div className={cardStyle}>
            <label className={labelStyle}>Your Year of Birth</label>
            <input
              type="number"
              className={`${inputStyle} max-w-[200px]`}
              value={beneficiaryBirthYear}
              min={1900}
              max={TAX_YEAR}
              onChange={e => setBeneficiaryBirthYear(parseInt(e.target.value) || (TAX_YEAR - 45))}
            />
            <p className="font-sans text-[12px] text-[#5b6a71] mt-1">
              Current age: <strong>{beneficiaryAge}</strong>
            </p>
            {beneficiaryType === 'minor-child' && beneficiaryAge >= 21 && (
              <p className="font-sans text-[12px] text-[#8B2E2E] mt-1 font-semibold">
                You&apos;re 21 or older, the 10-year rule applies now. You may want to select &ldquo;Non-Eligible Designated Beneficiary&rdquo; instead.
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(1)}
              className="flex-1 py-4 rounded-full font-sans text-[15px] font-semibold border-2 border-[#E2E8F0] text-[#333] hover:border-[#1d7682]/50 transition-all"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="flex-1 py-4 rounded-full font-sans text-[15px] font-semibold bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white shadow-md hover:shadow-lg transition-all"
            >
              Next: Tax Situation →
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════ STEP 3: TAX SITUATION ══════════════════ */}
      {step === 3 && (
        <div className="space-y-6">
          <div className={cardStyle}>
            <h2 className="font-serif text-[24px] md:text-[28px] text-[#333] mb-2">
              Your Income &amp; Tax Situation
            </h2>
            <p className="font-sans text-[14px] text-[#5b6a71] mb-6 leading-relaxed">
              {accountType === 'roth'
                ? 'Since this is a Roth inherited IRA, distributions are tax-free. We still use your income to show context, but taxes won\'t apply to withdrawals.'
                : 'Your other income determines which tax bracket inherited IRA distributions will fall into. This is critical for choosing the right withdrawal strategy.'}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Filing Status */}
              <div>
                <label className={labelStyle}>Filing Status</label>
                <div className="flex gap-3">
                  {(['single', 'mfj'] as const).map(f => (
                    <button
                      key={f}
                      onClick={() => setFiling(f)}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 font-sans text-[14px] font-semibold transition-all ${
                        filing === f ? btnActive : btnInactive
                      }`}
                    >
                      {f === 'single' ? 'Single' : 'Married Filing Jointly'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Other Income */}
              <div>
                <label className={labelStyle}>Annual Other Income</label>
                <input
                  type="text"
                  className={inputStyle}
                  value={otherIncome ? `$${otherIncome.toLocaleString()}` : ''}
                  onChange={e => {
                    const v = parseInt(e.target.value.replace(/[^0-9]/g, ''))
                    setOtherIncome(isNaN(v) ? 0 : v)
                  }}
                />
                <p className="font-sans text-[12px] text-[#94A3B8] mt-1">W-2, Social Security, pensions, other retirement income, before IRA distributions</p>
              </div>

              {/* State Tax */}
              <div>
                <label className={labelStyle}>State Income Tax</label>
                <select
                  className={inputStyle}
                  value={stateTaxKey}
                  onChange={e => setStateTaxKey(e.target.value)}
                >
                  <option value="none">No state income tax</option>
                  <option value="nv">Nevada (0%)</option>
                  <option value="az">Arizona (2.5%)</option>
                  <option value="other-low">Low state tax (~3%)</option>
                  <option value="other-mid">Medium state tax (~5%)</option>
                  <option value="other-high">High state tax (~8%)</option>
                  <option value="ca">California (~9.3%)</option>
                </select>
              </div>

              {/* Growth Rate */}
              <div>
                <label className={labelStyle}>Expected Annual Growth</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={0}
                    max={12}
                    step={0.5}
                    value={growthRate * 100}
                    onChange={e => setGrowthRate(parseFloat(e.target.value) / 100)}
                    className="flex-1 accent-[#1d7682]"
                  />
                  <span className="font-sans text-[16px] font-semibold text-[#333] w-[50px] text-right">
                    {(growthRate * 100).toFixed(1)}%
                  </span>
                </div>
                <p className="font-sans text-[12px] text-[#94A3B8] mt-1">Assumed growth of the inherited IRA balance while invested</p>
              </div>
            </div>
          </div>

          {/* Tax Bracket Preview */}
          {accountType === 'traditional' && (
            <div className="bg-[#1d7682]/5 rounded-xl border border-[#1d7682]/20 p-5">
              <h3 className="font-sans text-[14px] font-bold text-[#1d7682] mb-2">
                Your Current Marginal Bracket
              </h3>
              <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
                Based on {fmt(otherIncome)} in other income ({filing === 'mfj' ? 'married filing jointly' : 'single'}), your current marginal federal rate is{' '}
                <strong className="text-[#333]">
                  {pct(getMarginalRate(Math.max(otherIncome - (filing === 'mfj' ? STANDARD_DEDUCTION_MFJ : STANDARD_DEDUCTION_SINGLE), 0), filing))}
                </strong>.
                Every dollar of inherited IRA withdrawal stacks on top of this income. Choosing the right withdrawal strategy can keep you out of higher brackets.
              </p>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={() => setStep(2)}
              className="flex-1 py-4 rounded-full font-sans text-[15px] font-semibold border-2 border-[#E2E8F0] text-[#333] hover:border-[#1d7682]/50 transition-all"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="flex-1 py-4 rounded-full font-sans text-[15px] font-semibold bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white shadow-md hover:shadow-lg transition-all"
            >
              See My Results →
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════ STEP 4: RESULTS ══════════════════ */}
      {step === 4 && (
        <div className="space-y-8">
          {/* Classification Summary */}
          <div className={cardStyle}>
            <div className="flex items-start gap-4 mb-4">
              <span className="text-[36px]">{benInfo.icon}</span>
              <div>
                <h2 className="font-serif text-[24px] md:text-[28px] text-[#333]">
                  Your Inherited IRA Rules
                </h2>
                <p className="font-sans text-[14px] text-[#5b6a71] mt-1">
                  {benInfo.label} · {accountType === 'roth' ? 'Roth IRA' : 'Traditional IRA'} · Owner died {yearOfDeath} at age {ownerAgeAtDeath}
                </p>
              </div>
            </div>

            <div className="bg-[#FAFAF8] rounded-lg p-4 mb-4">
              <p className="font-sans text-[14px] text-[#333] leading-relaxed">
                <strong>What you need to know:</strong> {benInfo.rule}
              </p>
              {pastRBD && beneficiaryType === 'non-edb' && (
                <p className="font-sans text-[13px] text-[#8B2E2E] mt-2 font-semibold">
                  ⚠️ Because the owner was {ownerAgeAtDeath} (past the Required Beginning Date of 73), you must take annual RMDs in years 1-9 AND empty the account by year 10.
                </p>
              )}
              {!pastRBD && beneficiaryType === 'non-edb' && (
                <p className="font-sans text-[13px] text-[#2E5D4B] mt-2 font-semibold">
                  ✓ Because the owner was under 73, you have flexibility in when you take distributions, as long as the account is fully distributed by the end of year 10.
                </p>
              )}
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#FAFAF8] rounded-lg p-4 text-center">
                <p className="font-sans text-[11px] text-[#94A3B8] uppercase tracking-wider font-semibold">Distribution Window</p>
                <p className="font-serif text-[28px] text-[#333] font-bold">{schedule.length}</p>
                <p className="font-sans text-[12px] text-[#5b6a71]">years</p>
              </div>
              <div className="bg-[#FAFAF8] rounded-lg p-4 text-center">
                <p className="font-sans text-[11px] text-[#94A3B8] uppercase tracking-wider font-semibold">Total Distributed</p>
                <p className="font-serif text-[28px] text-[#333] font-bold">{fmt(totalWithdrawn)}</p>
                <p className="font-sans text-[12px] text-[#5b6a71]">with growth</p>
              </div>
              <div className="bg-[#FAFAF8] rounded-lg p-4 text-center">
                <p className="font-sans text-[11px] text-[#94A3B8] uppercase tracking-wider font-semibold">Total Taxes</p>
                <p className="font-serif text-[28px] text-[#8B2E2E] font-bold">{fmt(totalTax)}</p>
                <p className="font-sans text-[12px] text-[#5b6a71]">{pct(effectiveRate)} effective</p>
              </div>
              <div className="bg-[#FAFAF8] rounded-lg p-4 text-center">
                <p className="font-sans text-[11px] text-[#94A3B8] uppercase tracking-wider font-semibold">After-Tax Total</p>
                <p className="font-serif text-[28px] text-[#2E5D4B] font-bold">{fmt(totalAfterTax)}</p>
                <p className="font-sans text-[12px] text-[#5b6a71]">net proceeds</p>
              </div>
            </div>
          </div>

          {/* Strategy Selector */}
          <div className={cardStyle}>
            <h3 className="font-serif text-[22px] text-[#333] mb-2">Distribution Strategy</h3>
            <p className="font-sans text-[13px] text-[#5b6a71] mb-4">
              Choose how you want to spread your withdrawals across the distribution window. Each strategy has different tax implications.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {strategies.map(s => (
                <button
                  key={s}
                  onClick={() => setStrategy(s)}
                  className={`py-3 px-3 rounded-lg border-2 font-sans text-[13px] font-semibold transition-all ${
                    strategy === s ? btnActive : btnInactive
                  }`}
                >
                  {STRATEGY_INFO[s].label}
                </button>
              ))}
            </div>
            <p className="font-sans text-[12px] text-[#94A3B8] mt-3 italic">
              {STRATEGY_INFO[strategy].description}
            </p>
          </div>

          {/* Strategy Comparison Table */}
          <div className={cardStyle}>
            <h3 className="font-serif text-[22px] text-[#333] mb-4">Strategy Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full font-sans text-[13px]">
                <thead>
                  <tr className="border-b-2 border-[#E2E8F0]">
                    <th className="text-left py-3 pr-4 text-[#94A3B8] font-semibold uppercase tracking-wider text-[11px]">Strategy</th>
                    <th className="text-right py-3 px-3 text-[#94A3B8] font-semibold uppercase tracking-wider text-[11px]">Total Distributed</th>
                    <th className="text-right py-3 px-3 text-[#94A3B8] font-semibold uppercase tracking-wider text-[11px]">Total Taxes</th>
                    <th className="text-right py-3 px-3 text-[#94A3B8] font-semibold uppercase tracking-wider text-[11px]">After-Tax</th>
                    <th className="text-right py-3 pl-3 text-[#94A3B8] font-semibold uppercase tracking-wider text-[11px]">Max Bracket</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(c => {
                    const best = Math.max(...comparison.map(x => x.totalAfterTax))
                    return (
                      <tr
                        key={c.strategy}
                        className={`border-b border-[#E2E8F0] ${c.strategy === strategy ? 'bg-[#1d7682]/5' : ''}`}
                      >
                        <td className="py-3 pr-4 font-semibold text-[#333]">
                          {STRATEGY_INFO[c.strategy].label}
                          {c.totalAfterTax === best && (
                            <span className="ml-2 text-[10px] font-bold text-[#2E5D4B] bg-[#2E5D4B]/10 px-2 py-0.5 rounded-full uppercase">Best</span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right text-[#333]">{fmt(c.totalWithdrawn)}</td>
                        <td className="py-3 px-3 text-right text-[#8B2E2E]">{fmt(c.totalTax)}</td>
                        <td className="py-3 px-3 text-right text-[#2E5D4B] font-semibold">{fmt(c.totalAfterTax)}</td>
                        <td className="py-3 pl-3 text-right text-[#333]">{pct(c.maxBracket)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Year-by-Year Schedule */}
          <div className={cardStyle}>
            <h3 className="font-serif text-[22px] text-[#333] mb-1">
              Year-by-Year Distribution Schedule
            </h3>
            <p className="font-sans text-[12px] text-[#94A3B8] mb-4">
              Strategy: {STRATEGY_INFO[strategy].label} · {accountType === 'roth' ? 'Roth (tax-free)' : 'Traditional (taxable)'}
            </p>
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full font-sans text-[12px] md:text-[13px] min-w-[700px]">
                <thead>
                  <tr className="border-b-2 border-[#E2E8F0]">
                    <th className="text-left py-2 pr-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">Year</th>
                    <th className="text-center py-2 px-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">Age</th>
                    <th className="text-right py-2 px-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">Start Balance</th>
                    <th className="text-right py-2 px-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">Min RMD</th>
                    <th className="text-right py-2 px-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">Withdrawal</th>
                    <th className="text-right py-2 px-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">Fed Tax</th>
                    <th className="text-right py-2 px-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">State Tax</th>
                    <th className="text-right py-2 px-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">After Tax</th>
                    <th className="text-right py-2 pl-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">End Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, i) => (
                    <tr key={row.year} className={`border-b border-[#E2E8F0] ${i === schedule.length - 1 ? 'bg-[#FAFAF8] font-semibold' : ''}`}>
                      <td className="py-2 pr-2 text-[#333]">{row.year}</td>
                      <td className="py-2 px-2 text-center text-[#5b6a71]">{row.age}</td>
                      <td className="py-2 px-2 text-right text-[#333]">{fmt(row.startBalance)}</td>
                      <td className="py-2 px-2 text-right text-[#94A3B8]">{row.rmd > 0 ? fmt(row.rmd) : '—'}</td>
                      <td className="py-2 px-2 text-right text-[#1d7682] font-semibold">{fmt(row.withdrawal)}</td>
                      <td className="py-2 px-2 text-right text-[#8B2E2E]">{row.federalTax > 0 ? fmt(row.federalTax) : '—'}</td>
                      <td className="py-2 px-2 text-right text-[#8B2E2E]">{row.stateTax > 0 ? fmt(row.stateTax) : '—'}</td>
                      <td className="py-2 px-2 text-right text-[#2E5D4B]">{fmt(row.afterTax)}</td>
                      <td className="py-2 pl-2 text-right text-[#333]">{fmt(row.endBalance)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-[#1d7682]/30 font-semibold">
                    <td className="py-3 pr-2 text-[#333]" colSpan={4}>Total</td>
                    <td className="py-3 px-2 text-right text-[#1d7682]">{fmt(totalWithdrawn)}</td>
                    <td className="py-3 px-2 text-right text-[#8B2E2E]">{fmt(schedule.reduce((s, r) => s + r.federalTax, 0))}</td>
                    <td className="py-3 px-2 text-right text-[#8B2E2E]">{fmt(schedule.reduce((s, r) => s + r.stateTax, 0))}</td>
                    <td className="py-3 px-2 text-right text-[#2E5D4B]">{fmt(totalAfterTax)}</td>
                    <td className="py-3 pl-2 text-right text-[#333]">$0</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Distribution Timeline Visual */}
          <div className={cardStyle}>
            <h3 className="font-serif text-[22px] text-[#333] mb-4">Distribution Timeline</h3>
            <div className="space-y-2">
              {schedule.map(row => {
                const maxWithdrawal = Math.max(...schedule.map(r => r.withdrawal))
                const widthPct = maxWithdrawal > 0 ? (row.withdrawal / maxWithdrawal) * 100 : 0
                const taxPct = row.withdrawal > 0 ? (row.totalTax / row.withdrawal) * 100 : 0
                return (
                  <div key={row.year} className="flex items-center gap-3">
                    <span className="font-sans text-[12px] text-[#94A3B8] w-[40px] text-right flex-shrink-0">{row.year}</span>
                    <div className="flex-1 h-[28px] bg-[#F0F0F0] rounded-md overflow-hidden relative">
                      <div
                        className="h-full rounded-md flex items-center"
                        style={{
                          width: `${Math.max(widthPct, 2)}%`,
                          background: `linear-gradient(to right, #2E5D4B ${100 - taxPct}%, #8B2E2E ${100 - taxPct}%)`,
                        }}
                      />
                      <span className="absolute inset-0 flex items-center px-3 font-sans text-[11px] font-semibold text-white drop-shadow-sm">
                        {widthPct > 15 && fmt(row.withdrawal)}
                      </span>
                    </div>
                    <span className="font-sans text-[11px] text-[#5b6a71] w-[70px] text-right flex-shrink-0">
                      {fmt(row.afterTax)}
                    </span>
                  </div>
                )
              })}
              <div className="flex items-center gap-4 mt-3 justify-center font-sans text-[11px] text-[#94A3B8]">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-[#2E5D4B] inline-block" /> After-tax</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-[#8B2E2E] inline-block" /> Taxes</span>
              </div>
            </div>
          </div>

          {/* Rules Reference */}
          <div className={cardStyle}>
            <h3 className="font-serif text-[22px] text-[#333] mb-4">
              Inherited IRA Rules at a Glance
            </h3>
            <div className="space-y-4 font-sans text-[13px] text-[#5b6a71] leading-relaxed">
              <div>
                <h4 className="font-semibold text-[#333] text-[14px] mb-1">The 10-Year Rule (SECURE Act)</h4>
                <p>Most non-spouse beneficiaries who inherit an IRA after 2019 must withdraw the entire balance by December 31 of the 10th year after the owner&apos;s death. There are no annual minimums unless the owner had already started RMDs (age 73+).</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#333] text-[14px] mb-1">Eligible Designated Beneficiaries (EDBs)</h4>
                <p>Five groups get special treatment and can &ldquo;stretch&rdquo; distributions over their life expectancy: surviving spouses, minor children of the owner, disabled individuals, chronically ill individuals, and beneficiaries not more than 10 years younger than the owner.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#333] text-[14px] mb-1">Owner&apos;s Required Beginning Date (RBD)</h4>
                <p>If the original owner died at age 73 or older (after their RBD under SECURE 2.0), non-EDB beneficiaries must take annual RMDs in years 1-9, with the remaining balance due in year 10. If the owner died before 73, non-EDBs have full flexibility on timing within the 10-year window.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#333] text-[14px] mb-1">Roth Inherited IRAs</h4>
                <p>The same distribution timeline rules apply, but distributions from an inherited Roth IRA are tax-free. This makes the back-loading strategy especially attractive for Roth accounts, as you maximize years of tax-free growth.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#333] text-[14px] mb-1">Penalties for Missing RMDs</h4>
                <p>The penalty for missing a required distribution is 25% of the amount you should have taken (reduced from 50% by SECURE 2.0). If you correct the error within 2 years, the penalty drops to 10%.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#333] text-[14px] mb-1">Spouse Special Options</h4>
                <p>Surviving spouses have unique flexibility: roll the inherited IRA into your own IRA (restarting the RMD clock based on your age), keep it as an inherited IRA with stretch distributions, or disclaim it. Each option has different tax implications depending on your age and income.</p>
              </div>
            </div>
          </div>

          {/* Disclosure + CTA */}
          <CalculatorDisclaimer
            toolName="inherited IRA"
            variant="default"
            resultSummary={`Over your ${schedule.length}-year distribution window, you're projected to withdraw ${fmt(totalWithdrawn)} and pay ${fmt(totalTax)} in taxes, leaving ${fmt(totalAfterTax)} after tax. The right distribution strategy depends on your bracket, your other income, and what comes after this account.`}
            ctaLabel="Plan a tax-aware distribution strategy with Jay →"
            additionalContext={`RMD calculations use the ${TAX_YEAR} IRS Single Life Expectancy Table. State tax estimates are approximate.`}
          />

          {/* Back to inputs */}
          <div className="flex gap-4">
            <button
              onClick={() => setStep(3)}
              className="flex-1 py-4 rounded-full font-sans text-[15px] font-semibold border-2 border-[#E2E8F0] text-[#333] hover:border-[#1d7682]/50 transition-all"
            >
              ← Adjust Inputs
            </button>
            <button
              onClick={() => setStep(1)}
              className="flex-1 py-4 rounded-full font-sans text-[15px] font-semibold border-2 border-[#E2E8F0] text-[#333] hover:border-[#1d7682]/50 transition-all"
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
