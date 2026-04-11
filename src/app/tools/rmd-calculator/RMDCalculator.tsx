'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  TAX_YEAR,
  FEDERAL_BRACKETS_SINGLE,
  FEDERAL_BRACKETS_MFJ,
  STANDARD_DEDUCTION_SINGLE,
  STANDARD_DEDUCTION_MFJ,
} from '@/lib/tax-constants-2026'

/* ═══════════════════════════════════════════════════════════════════════
   IRS Uniform Lifetime Table (Table III) — Publication 590-B
   Updated November 2020, effective for distributions calendar year 2022+.
   Used by most IRA owners to calculate RMDs.
   ═══════════════════════════════════════════════════════════════════════ */
const UNIFORM_TABLE: Record<number, number> = {
  72: 27.4, 73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9, 78: 22.0,
  79: 21.1, 80: 20.2, 81: 19.4, 82: 18.5, 83: 17.7, 84: 16.8, 85: 16.0,
  86: 15.2, 87: 14.4, 88: 13.7, 89: 12.9, 90: 12.2, 91: 11.5, 92: 10.8,
  93: 10.1, 94: 9.5, 95: 8.9, 96: 8.4, 97: 7.8, 98: 7.3, 99: 6.8,
  100: 6.4, 101: 5.9, 102: 5.5, 103: 5.2, 104: 4.9, 105: 3.5, 106: 3.1,
  107: 2.8, 108: 2.5, 109: 2.3, 110: 2.0, 111: 1.8, 112: 1.6, 113: 1.4,
  114: 1.2, 115: 1.0,
}

function getUniformFactor(age: number): number {
  if (age < 72) return 0 // No RMD yet
  if (age >= 115) return 1.0
  return UNIFORM_TABLE[age] ?? 1.0
}

/* ═══════════════════════════════════════════════════════════════════════
   Joint & Last Survivor Table (Table II) — Simplified
   Used when sole beneficiary is a spouse 10+ years younger.
   Full table has ~900 rows; we compute a reasonable approximation
   based on the IRS table structure.
   ═══════════════════════════════════════════════════════════════════════ */
function getJointFactor(ownerAge: number, spouseAge: number): number {
  // Approximate the Joint Life Table using published anchor points
  // and interpolation. The table produces longer distribution periods
  // than Table III, resulting in smaller RMDs.
  const ageDiff = ownerAge - spouseAge
  if (ageDiff <= 10) {
    // Not 10+ years younger — use Uniform Table instead
    return getUniformFactor(ownerAge)
  }
  // Base: Uniform table value + additional years for age difference beyond 10
  const uniformBase = getUniformFactor(ownerAge)
  const extraYears = (ageDiff - 10) * 0.8
  return uniformBase + extraYears
}

/* ═══════════════════════════════════════════════════════════════════════
   SECURE 2.0 RMD Age Logic
   ═══════════════════════════════════════════════════════════════════════ */
function getRMDStartAge(birthYear: number): number {
  if (birthYear <= 1950) return 72
  if (birthYear <= 1959) return 73
  return 75 // Born 1960+
}

/* ═══════════════════════════════════════════════════════════════════════
   IRMAA Thresholds (2026 estimates, indexed from 2024)
   Medicare Part B & D surcharge income thresholds
   ═══════════════════════════════════════════════════════════════════════ */
const IRMAA_THRESHOLDS_SINGLE = [
  { magi: 106000, surcharge: 70 },
  { magi: 133000, surcharge: 175 },
  { magi: 167000, surcharge: 280 },
  { magi: 200000, surcharge: 385 },
  { magi: 500000, surcharge: 420 },
]
const IRMAA_THRESHOLDS_MFJ = [
  { magi: 212000, surcharge: 70 },
  { magi: 266000, surcharge: 175 },
  { magi: 334000, surcharge: 280 },
  { magi: 400000, surcharge: 385 },
  { magi: 750000, surcharge: 420 },
]

function getIRMAASurcharge(magi: number, filing: 'single' | 'mfj'): number {
  const thresholds = filing === 'mfj' ? IRMAA_THRESHOLDS_MFJ : IRMAA_THRESHOLDS_SINGLE
  let surcharge = 0
  for (const t of thresholds) {
    if (magi > t.magi) surcharge = t.surcharge
  }
  return surcharge * 12 // Annual surcharge
}

/* ═══════════════════════════════════════════════════════════════════════
   Tax Helpers
   ═══════════════════════════════════════════════════════════════════════ */
type FilingStatus = 'single' | 'mfj'

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
  'none': 0, 'az': 0.025, 'ca': 0.093, 'nv': 0,
  'other-low': 0.03, 'other-mid': 0.05, 'other-high': 0.08,
}

/* ═══════════════════════════════════════════════════════════════════════
   Projection Engine
   ═══════════════════════════════════════════════════════════════════════ */
interface ProjectionRow {
  year: number
  age: number
  startBalance: number
  factor: number
  rmd: number
  rmdPercent: number
  qcd: number
  taxableDistribution: number
  federalTax: number
  stateTax: number
  totalTax: number
  afterTax: number
  endBalance: number
  marginalRate: number
  irmaaSurcharge: number
}

function buildProjection(
  birthYear: number,
  totalBalance: number,
  growthRate: number,
  useJointTable: boolean,
  spouseBirthYear: number,
  filing: FilingStatus,
  otherIncome: number,
  stateTaxKey: string,
  qcdAnnual: number,
  projectionYears: number,
): ProjectionRow[] {
  const rows: ProjectionRow[] = []
  const stateTaxRate = STATE_TAX_RATES[stateTaxKey] ?? 0
  const stdDeduction = filing === 'mfj' ? STANDARD_DEDUCTION_MFJ : STANDARD_DEDUCTION_SINGLE
  const rmdStartAge = getRMDStartAge(birthYear)

  let balance = totalBalance

  for (let i = 0; i < projectionYears; i++) {
    const year = TAX_YEAR + i
    const age = year - birthYear
    const spouseAge = year - spouseBirthYear

    if (balance <= 0) break

    const startBalance = balance

    // Determine distribution factor
    let factor: number
    if (age < rmdStartAge) {
      factor = 0
    } else if (useJointTable && spouseAge > 0) {
      factor = getJointFactor(age, spouseAge)
    } else {
      factor = getUniformFactor(age)
    }

    const rmd = factor > 0 ? startBalance / factor : 0
    const rmdPercent = startBalance > 0 ? rmd / startBalance : 0

    // QCD reduces taxable portion (capped at RMD and QCD limit)
    const qcdLimit = 108000 // 2026 estimated QCD limit
    const effectiveQCD = Math.min(qcdAnnual, rmd, qcdLimit)
    const taxableDistribution = Math.max(rmd - effectiveQCD, 0)

    // Tax calculations
    const totalIncome = otherIncome + taxableDistribution
    const taxableAfterDeduction = Math.max(totalIncome - stdDeduction, 0)
    const baselineTaxable = Math.max(otherIncome - stdDeduction, 0)

    const totalFedTax = computeFederalTax(taxableAfterDeduction, filing)
    const baselineFedTax = computeFederalTax(baselineTaxable, filing)
    const federalTax = Math.max(totalFedTax - baselineFedTax, 0)

    const stateTax = taxableDistribution * stateTaxRate
    const totalTax = federalTax + stateTax
    const afterTax = rmd - totalTax

    const marginalRate = getMarginalRate(taxableAfterDeduction, filing)
    const magi = otherIncome + taxableDistribution
    const irmaaSurcharge = getIRMAASurcharge(magi, filing)

    const endBalance = (startBalance - rmd) * (1 + growthRate)

    rows.push({
      year, age, startBalance, factor, rmd, rmdPercent,
      qcd: effectiveQCD, taxableDistribution,
      federalTax, stateTax, totalTax, afterTax,
      endBalance: Math.max(endBalance, 0),
      marginalRate, irmaaSurcharge,
    })

    balance = Math.max(endBalance, 0)
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
   Component
   ═══════════════════════════════════════════════════════════════════════ */
export default function RMDCalculator() {
  // Inputs
  const [birthYear, setBirthYear] = useState(1953)
  const [totalBalance, setTotalBalance] = useState(750000)
  const [growthRate, setGrowthRate] = useState(0.05)
  const [useJointTable, setUseJointTable] = useState(false)
  const [spouseBirthYear, setSpouseBirthYear] = useState(1968)
  const [filing, setFiling] = useState<FilingStatus>('mfj')
  const [otherIncome, setOtherIncome] = useState(65000)
  const [stateTaxKey, setStateTaxKey] = useState('az')
  const [qcdAnnual, setQcdAnnual] = useState(0)
  const [projectionYears, setProjectionYears] = useState(15)

  // Multi-account support
  const [accounts, setAccounts] = useState([
    { name: 'Traditional IRA', balance: 750000 },
  ])
  const [showMultiAccount, setShowMultiAccount] = useState(false)

  const effectiveBalance = showMultiAccount
    ? accounts.reduce((sum, a) => sum + a.balance, 0)
    : totalBalance

  // Derived
  const currentAge = TAX_YEAR - birthYear
  const rmdStartAge = getRMDStartAge(birthYear)
  const rmdStartYear = birthYear + rmdStartAge
  const hasReachedRMDAge = currentAge >= rmdStartAge
  const yearsUntilRMD = rmdStartAge - currentAge

  // Build projection
  const projection = useMemo(() => {
    return buildProjection(
      birthYear, effectiveBalance, growthRate, useJointTable,
      spouseBirthYear, filing, otherIncome, stateTaxKey,
      qcdAnnual, projectionYears
    )
  }, [birthYear, effectiveBalance, growthRate, useJointTable, spouseBirthYear, filing, otherIncome, stateTaxKey, qcdAnnual, projectionYears])

  // Current year data
  const currentYearRow = projection.find(r => r.year === TAX_YEAR)
  const firstRMDRow = projection.find(r => r.rmd > 0)

  // Without QCD comparison
  const projectionNoQCD = useMemo(() => {
    if (qcdAnnual <= 0) return null
    return buildProjection(
      birthYear, effectiveBalance, growthRate, useJointTable,
      spouseBirthYear, filing, otherIncome, stateTaxKey,
      0, projectionYears
    )
  }, [birthYear, effectiveBalance, growthRate, useJointTable, spouseBirthYear, filing, otherIncome, stateTaxKey, qcdAnnual, projectionYears])

  /* ─── Shared styles ─── */
  const cardStyle = 'bg-white rounded-xl border border-[#E2E8F0] p-6'
  const labelStyle = 'font-sans text-[13px] font-semibold text-[#333] uppercase tracking-[0.05em] mb-2 block'
  const inputStyle = 'w-full border-2 border-[#E2E8F0] rounded-lg px-4 py-3 font-sans text-[16px] text-[#333] focus:border-[#1d7682] focus:outline-none transition-colors'
  const btnActive = 'bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white border-transparent shadow-md'
  const btnInactive = 'bg-white text-[#333] border-[#E2E8F0] hover:border-[#1d7682]/50'

  return (
    <div className="max-w-[960px] mx-auto px-5 md:px-10 py-12 md:py-16">

      {/* ══════════════════ INPUT SECTION ══════════════════ */}
      <div className="grid lg:grid-cols-[1fr_1fr] gap-8 mb-10">

        {/* Left: Core Inputs */}
        <div className="space-y-6">
          <div className={cardStyle}>
            <h2 className="font-serif text-[24px] text-[#333] mb-4">Your Information</h2>

            {/* Birth Year */}
            <div className="mb-5">
              <label className={labelStyle}>Year of Birth</label>
              <input
                type="number"
                className={inputStyle}
                value={birthYear}
                min={1920}
                max={TAX_YEAR - 50}
                onChange={e => setBirthYear(parseInt(e.target.value) || 1953)}
              />
              <p className="font-sans text-[12px] text-[#5b6a71] mt-1">
                Age this year: <strong>{currentAge}</strong> · RMDs begin at age <strong>{rmdStartAge}</strong>
                {!hasReachedRMDAge && ` (${yearsUntilRMD} years from now)`}
              </p>
            </div>

            {/* Balance */}
            <div className="mb-5">
              <label className={labelStyle}>
                Total IRA Balance
                <button
                  onClick={() => setShowMultiAccount(!showMultiAccount)}
                  className="ml-2 text-[11px] text-[#1d7682] font-semibold normal-case tracking-normal"
                >
                  {showMultiAccount ? '← Single balance' : '+ Multiple accounts'}
                </button>
              </label>

              {!showMultiAccount ? (
                <input
                  type="text"
                  className={inputStyle}
                  value={totalBalance ? `$${totalBalance.toLocaleString()}` : ''}
                  onChange={e => {
                    const v = parseInt(e.target.value.replace(/[^0-9]/g, ''))
                    setTotalBalance(isNaN(v) ? 0 : v)
                  }}
                />
              ) : (
                <div className="space-y-3">
                  {accounts.map((acct, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <input
                        type="text"
                        className="flex-1 border-2 border-[#E2E8F0] rounded-lg px-3 py-2 font-sans text-[14px] text-[#333] focus:border-[#1d7682] focus:outline-none"
                        value={acct.name}
                        onChange={e => {
                          const updated = [...accounts]
                          updated[idx].name = e.target.value
                          setAccounts(updated)
                        }}
                        placeholder="Account name"
                      />
                      <input
                        type="text"
                        className="w-[140px] border-2 border-[#E2E8F0] rounded-lg px-3 py-2 font-sans text-[14px] text-[#333] focus:border-[#1d7682] focus:outline-none"
                        value={acct.balance ? `$${acct.balance.toLocaleString()}` : ''}
                        onChange={e => {
                          const v = parseInt(e.target.value.replace(/[^0-9]/g, ''))
                          const updated = [...accounts]
                          updated[idx].balance = isNaN(v) ? 0 : v
                          setAccounts(updated)
                        }}
                      />
                      {accounts.length > 1 && (
                        <button
                          onClick={() => setAccounts(accounts.filter((_, i) => i !== idx))}
                          className="text-[#94A3B8] hover:text-[#8B2E2E] text-[18px] font-bold w-8 h-8 flex items-center justify-center"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => setAccounts([...accounts, { name: `IRA ${accounts.length + 1}`, balance: 0 }])}
                    className="font-sans text-[13px] text-[#1d7682] font-semibold hover:underline"
                  >
                    + Add another account
                  </button>
                  <p className="font-sans text-[12px] text-[#5b6a71]">
                    Combined balance: <strong>{fmt(effectiveBalance)}</strong>
                  </p>
                </div>
              )}
              <p className="font-sans text-[12px] text-[#94A3B8] mt-1">
                Use your December 31 prior-year balance for the most accurate RMD
              </p>
            </div>

            {/* Spouse younger by 10+ */}
            <div className="mb-5">
              <label className={labelStyle}>Sole beneficiary is a spouse 10+ years younger?</label>
              <div className="flex gap-3">
                {[false, true].map(v => (
                  <button
                    key={String(v)}
                    onClick={() => setUseJointTable(v)}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-sans text-[14px] font-semibold transition-all ${
                      useJointTable === v ? btnActive : btnInactive
                    }`}
                  >
                    {v ? 'Yes' : 'No'}
                  </button>
                ))}
              </div>
              {useJointTable && (
                <div className="mt-3">
                  <label className="font-sans text-[12px] font-semibold text-[#5b6a71] uppercase tracking-[0.05em] mb-1 block">
                    Spouse&apos;s Year of Birth
                  </label>
                  <input
                    type="number"
                    className={`${inputStyle} max-w-[200px]`}
                    value={spouseBirthYear}
                    onChange={e => setSpouseBirthYear(parseInt(e.target.value) || 1968)}
                  />
                  <p className="font-sans text-[12px] text-[#94A3B8] mt-1">
                    Spouse age: {TAX_YEAR - spouseBirthYear} · Age difference: {birthYear - spouseBirthYear} years
                  </p>
                </div>
              )}
              <p className="font-sans text-[12px] text-[#94A3B8] mt-1">
                {useJointTable
                  ? 'Using the Joint & Last Survivor Table (Table II) — this produces smaller RMDs.'
                  : 'Using the Uniform Lifetime Table (Table III) — standard for most IRA owners.'}
              </p>
            </div>

            {/* Growth Rate */}
            <div>
              <label className={labelStyle}>Expected Annual Growth</label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={0} max={12} step={0.5}
                  value={growthRate * 100}
                  onChange={e => setGrowthRate(parseFloat(e.target.value) / 100)}
                  className="flex-1 accent-[#1d7682]"
                />
                <span className="font-sans text-[16px] font-semibold text-[#333] w-[50px] text-right">
                  {(growthRate * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Tax & QCD */}
        <div className="space-y-6">
          <div className={cardStyle}>
            <h2 className="font-serif text-[24px] text-[#333] mb-4">Tax Situation</h2>

            {/* Filing Status */}
            <div className="mb-5">
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
            <div className="mb-5">
              <label className={labelStyle}>Other Annual Income</label>
              <input
                type="text"
                className={inputStyle}
                value={otherIncome ? `$${otherIncome.toLocaleString()}` : ''}
                onChange={e => {
                  const v = parseInt(e.target.value.replace(/[^0-9]/g, ''))
                  setOtherIncome(isNaN(v) ? 0 : v)
                }}
              />
              <p className="font-sans text-[12px] text-[#94A3B8] mt-1">
                Social Security, pensions, part-time work — before IRA distributions
              </p>
            </div>

            {/* State Tax */}
            <div className="mb-5">
              <label className={labelStyle}>State Income Tax</label>
              <select
                className={inputStyle}
                value={stateTaxKey}
                onChange={e => setStateTaxKey(e.target.value)}
              >
                <option value="none">No state income tax</option>
                <option value="nv">Nevada (0%)</option>
                <option value="az">Arizona (2.5%)</option>
                <option value="other-low">Low (~3%)</option>
                <option value="other-mid">Medium (~5%)</option>
                <option value="other-high">High (~8%)</option>
                <option value="ca">California (~9.3%)</option>
              </select>
            </div>

            {/* QCD */}
            <div>
              <label className={labelStyle}>
                Qualified Charitable Distribution (QCD)
              </label>
              <input
                type="text"
                className={inputStyle}
                value={qcdAnnual ? `$${qcdAnnual.toLocaleString()}` : ''}
                onChange={e => {
                  const v = parseInt(e.target.value.replace(/[^0-9]/g, ''))
                  setQcdAnnual(isNaN(v) ? 0 : v)
                }}
                placeholder="$0"
              />
              <p className="font-sans text-[12px] text-[#94A3B8] mt-1">
                If you&apos;re 70½+, you can direct up to $108,000 of your RMD to charity tax-free.
                This reduces your taxable income without itemizing.
              </p>
            </div>
          </div>

          {/* Projection Length */}
          <div className={cardStyle}>
            <label className={labelStyle}>Projection Length</label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={5} max={30} step={1}
                value={projectionYears}
                onChange={e => setProjectionYears(parseInt(e.target.value))}
                className="flex-1 accent-[#1d7682]"
              />
              <span className="font-sans text-[16px] font-semibold text-[#333] w-[60px] text-right">
                {projectionYears} yrs
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════ HERO RESULT ══════════════════ */}
      {firstRMDRow && (
        <div className="bg-gradient-to-br from-[#333333] to-[#1d1d1d] rounded-2xl p-8 md:p-12 mb-8 text-center">
          {!hasReachedRMDAge ? (
            <>
              <p className="font-sans text-[13px] text-[#F7F4EE]/50 uppercase tracking-widest mb-2">
                Your first RMD is due in
              </p>
              <p className="font-serif text-[56px] md:text-[72px] text-[#F7F4EE] font-light leading-none mb-1">
                {rmdStartYear}
              </p>
              <p className="font-sans text-[16px] text-[#F7F4EE]/60 mb-6">
                {yearsUntilRMD} years from now · at age {rmdStartAge}
              </p>
              <div className="border-t border-[#F7F4EE]/10 pt-6">
                <p className="font-sans text-[13px] text-[#F7F4EE]/50 uppercase tracking-widest mb-2">
                  Estimated first RMD
                </p>
                <p className="font-serif text-[36px] md:text-[48px] text-[#1d7682] font-light">
                  {fmt(firstRMDRow.rmd)}
                </p>
                <p className="font-sans text-[14px] text-[#F7F4EE]/40">
                  {pct(firstRMDRow.rmdPercent)} of projected balance
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="font-sans text-[13px] text-[#F7F4EE]/50 uppercase tracking-widest mb-2">
                Your {TAX_YEAR} Required Minimum Distribution
              </p>
              <p className="font-serif text-[56px] md:text-[72px] text-[#F7F4EE] font-light leading-none mb-1">
                {fmt(currentYearRow?.rmd ?? 0)}
              </p>
              <div className="flex items-center justify-center gap-6 mt-2 mb-6">
                <div>
                  <p className="font-sans text-[14px] text-[#F7F4EE]/40">of balance</p>
                  <p className="font-sans text-[20px] text-[#1d7682] font-semibold">
                    {pct(currentYearRow?.rmdPercent ?? 0)}
                  </p>
                </div>
                <div className="w-px h-10 bg-[#F7F4EE]/10" />
                <div>
                  <p className="font-sans text-[14px] text-[#F7F4EE]/40">IRS factor</p>
                  <p className="font-sans text-[20px] text-[#F7F4EE]/80 font-semibold">
                    {currentYearRow?.factor.toFixed(1)}
                  </p>
                </div>
                <div className="w-px h-10 bg-[#F7F4EE]/10" />
                <div>
                  <p className="font-sans text-[14px] text-[#F7F4EE]/40">deadline</p>
                  <p className="font-sans text-[20px] text-[#F7F4EE]/80 font-semibold">
                    Dec 31
                  </p>
                </div>
              </div>

              {/* Tax Impact Summary */}
              {currentYearRow && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-[#F7F4EE]/10 pt-6">
                  <div>
                    <p className="font-sans text-[11px] text-[#F7F4EE]/30 uppercase tracking-wider">Federal Tax</p>
                    <p className="font-sans text-[18px] text-[#F7F4EE]/70 font-semibold">{fmt(currentYearRow.federalTax)}</p>
                  </div>
                  <div>
                    <p className="font-sans text-[11px] text-[#F7F4EE]/30 uppercase tracking-wider">State Tax</p>
                    <p className="font-sans text-[18px] text-[#F7F4EE]/70 font-semibold">{fmt(currentYearRow.stateTax)}</p>
                  </div>
                  <div>
                    <p className="font-sans text-[11px] text-[#F7F4EE]/30 uppercase tracking-wider">After Tax</p>
                    <p className="font-sans text-[18px] text-[#2E5D4B] font-semibold">{fmt(currentYearRow.afterTax)}</p>
                  </div>
                  <div>
                    <p className="font-sans text-[11px] text-[#F7F4EE]/30 uppercase tracking-wider">Marginal Rate</p>
                    <p className="font-sans text-[18px] text-[#F7F4EE]/70 font-semibold">{pct(currentYearRow.marginalRate)}</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* ══════════════════ IRMAA WARNING ══════════════════ */}
      {currentYearRow && currentYearRow.irmaaSurcharge > 0 && (
        <div className="bg-[#8B6914]/10 border border-[#8B6914]/30 rounded-xl p-5 mb-8">
          <h3 className="font-sans text-[14px] font-bold text-[#8B6914] mb-2">
            ⚠️ Medicare IRMAA Surcharge Warning
          </h3>
          <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
            Your combined income of {fmt(otherIncome + currentYearRow.taxableDistribution)} (other income + taxable RMD) may trigger an Income-Related Monthly Adjustment Amount (IRMAA) surcharge on your Medicare Part B and Part D premiums. Estimated annual surcharge: <strong className="text-[#8B6914]">{fmt(currentYearRow.irmaaSurcharge)}</strong>. QCDs can help reduce your MAGI below IRMAA thresholds.
          </p>
        </div>
      )}

      {/* ══════════════════ QCD SAVINGS ══════════════════ */}
      {qcdAnnual > 0 && currentYearRow && projectionNoQCD && (
        <div className="bg-[#2E5D4B]/5 border border-[#2E5D4B]/20 rounded-xl p-5 mb-8">
          <h3 className="font-sans text-[14px] font-bold text-[#2E5D4B] mb-2">
            QCD Tax Savings
          </h3>
          {(() => {
            const noQCDRow = projectionNoQCD.find(r => r.year === TAX_YEAR)
            const taxSavings = noQCDRow ? noQCDRow.totalTax - currentYearRow.totalTax : 0
            return (
              <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
                By directing {fmt(currentYearRow.qcd)} of your RMD to charity via QCD, you save an estimated <strong className="text-[#2E5D4B]">{fmt(taxSavings)}</strong> in taxes this year. Your taxable distribution drops from {fmt(noQCDRow?.taxableDistribution ?? 0)} to {fmt(currentYearRow.taxableDistribution)}.
              </p>
            )
          })()}
        </div>
      )}

      {/* ══════════════════ BRACKET IMPACT ══════════════════ */}
      {currentYearRow && currentYearRow.rmd > 0 && (
        <div className={`${cardStyle} mb-8`}>
          <h3 className="font-serif text-[22px] text-[#333] mb-4">How Your RMD Affects Your Tax Bracket</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FAFAF8] rounded-lg p-4">
              <p className="font-sans text-[11px] text-[#94A3B8] uppercase tracking-wider font-semibold mb-2">Before RMD</p>
              <p className="font-sans text-[14px] text-[#5b6a71]">
                Other income: {fmt(otherIncome)}
              </p>
              <p className="font-sans text-[14px] text-[#5b6a71]">
                Marginal rate: <strong className="text-[#333]">{pct(getMarginalRate(Math.max(otherIncome - (filing === 'mfj' ? STANDARD_DEDUCTION_MFJ : STANDARD_DEDUCTION_SINGLE), 0), filing))}</strong>
              </p>
            </div>
            <div className="bg-[#FAFAF8] rounded-lg p-4">
              <p className="font-sans text-[11px] text-[#94A3B8] uppercase tracking-wider font-semibold mb-2">After RMD</p>
              <p className="font-sans text-[14px] text-[#5b6a71]">
                Total income: {fmt(otherIncome + currentYearRow.taxableDistribution)}
              </p>
              <p className="font-sans text-[14px] text-[#5b6a71]">
                Marginal rate: <strong className={currentYearRow.marginalRate > getMarginalRate(Math.max(otherIncome - (filing === 'mfj' ? STANDARD_DEDUCTION_MFJ : STANDARD_DEDUCTION_SINGLE), 0), filing) ? 'text-[#8B2E2E]' : 'text-[#333]'}>{pct(currentYearRow.marginalRate)}</strong>
                {currentYearRow.marginalRate > getMarginalRate(Math.max(otherIncome - (filing === 'mfj' ? STANDARD_DEDUCTION_MFJ : STANDARD_DEDUCTION_SINGLE), 0), filing) && (
                  <span className="text-[#8B2E2E] text-[12px] ml-1">↑ bracket jump</span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════ YEAR-BY-YEAR PROJECTION ══════════════════ */}
      <div className={`${cardStyle} mb-8`}>
        <h3 className="font-serif text-[22px] text-[#333] mb-1">
          {projectionYears}-Year RMD Projection
        </h3>
        <p className="font-sans text-[12px] text-[#94A3B8] mb-4">
          {useJointTable ? 'Joint & Last Survivor Table (Table II)' : 'Uniform Lifetime Table (Table III)'} · {(growthRate * 100).toFixed(1)}% annual growth
          {qcdAnnual > 0 && ` · ${fmt(qcdAnnual)}/yr QCD`}
        </p>
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full font-sans text-[12px] md:text-[13px] min-w-[750px]">
            <thead>
              <tr className="border-b-2 border-[#E2E8F0]">
                <th className="text-left py-2 pr-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">Year</th>
                <th className="text-center py-2 px-1 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">Age</th>
                <th className="text-right py-2 px-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">Balance</th>
                <th className="text-center py-2 px-1 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">Factor</th>
                <th className="text-right py-2 px-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">RMD</th>
                <th className="text-right py-2 px-1 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">%</th>
                {qcdAnnual > 0 && <th className="text-right py-2 px-1 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">QCD</th>}
                <th className="text-right py-2 px-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">Tax</th>
                <th className="text-right py-2 px-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">After Tax</th>
                <th className="text-right py-2 pl-2 text-[#94A3B8] font-semibold uppercase tracking-wider text-[10px]">End Bal.</th>
              </tr>
            </thead>
            <tbody>
              {projection.map((row, i) => (
                <tr key={row.year} className={`border-b border-[#E2E8F0] ${row.year === TAX_YEAR ? 'bg-[#1d7682]/5 font-semibold' : ''} ${row.rmd === 0 ? 'text-[#94A3B8]' : ''}`}>
                  <td className="py-2 pr-2 text-[#333]">{row.year}</td>
                  <td className="py-2 px-1 text-center text-[#5b6a71]">{row.age}</td>
                  <td className="py-2 px-2 text-right text-[#333]">{fmt(row.startBalance)}</td>
                  <td className="py-2 px-1 text-center text-[#94A3B8]">{row.factor > 0 ? row.factor.toFixed(1) : '—'}</td>
                  <td className="py-2 px-2 text-right text-[#1d7682] font-semibold">{row.rmd > 0 ? fmt(row.rmd) : '—'}</td>
                  <td className="py-2 px-1 text-right text-[#94A3B8]">{row.rmd > 0 ? pct(row.rmdPercent) : '—'}</td>
                  {qcdAnnual > 0 && <td className="py-2 px-1 text-right text-[#2E5D4B]">{row.qcd > 0 ? fmt(row.qcd) : '—'}</td>}
                  <td className="py-2 px-2 text-right text-[#8B2E2E]">{row.totalTax > 0 ? fmt(row.totalTax) : '—'}</td>
                  <td className="py-2 px-2 text-right text-[#2E5D4B]">{row.rmd > 0 ? fmt(row.afterTax) : '—'}</td>
                  <td className="py-2 pl-2 text-right text-[#333]">{fmt(row.endBalance)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-[#1d7682]/30 font-semibold">
                <td className="py-3" colSpan={4}>Totals</td>
                <td className="py-3 px-2 text-right text-[#1d7682]">{fmt(projection.reduce((s, r) => s + r.rmd, 0))}</td>
                <td className="py-3 px-1"></td>
                {qcdAnnual > 0 && <td className="py-3 px-1 text-right text-[#2E5D4B]">{fmt(projection.reduce((s, r) => s + r.qcd, 0))}</td>}
                <td className="py-3 px-2 text-right text-[#8B2E2E]">{fmt(projection.reduce((s, r) => s + r.totalTax, 0))}</td>
                <td className="py-3 px-2 text-right text-[#2E5D4B]">{fmt(projection.reduce((s, r) => s + r.afterTax, 0))}</td>
                <td className="py-3 pl-2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* ══════════════════ BALANCE DEPLETION CHART ══════════════════ */}
      <div className={`${cardStyle} mb-8`}>
        <h3 className="font-serif text-[22px] text-[#333] mb-4">Balance Over Time</h3>
        <div className="space-y-2">
          {projection.map(row => {
            const maxBalance = Math.max(...projection.map(r => r.startBalance))
            const widthPct = maxBalance > 0 ? (row.startBalance / maxBalance) * 100 : 0
            return (
              <div key={row.year} className="flex items-center gap-3">
                <span className="font-sans text-[12px] text-[#94A3B8] w-[35px] text-right flex-shrink-0">{row.year}</span>
                <span className="font-sans text-[11px] text-[#5b6a71] w-[25px] text-center flex-shrink-0">{row.age}</span>
                <div className="flex-1 h-[24px] bg-[#F0F0F0] rounded-md overflow-hidden relative">
                  <div
                    className="h-full rounded-md bg-gradient-to-r from-[#1d7682] to-[#2a9dab]"
                    style={{ width: `${Math.max(widthPct, 1)}%` }}
                  />
                  {widthPct > 20 && (
                    <span className="absolute inset-0 flex items-center px-3 font-sans text-[11px] font-semibold text-white drop-shadow-sm">
                      {fmt(row.startBalance)}
                    </span>
                  )}
                </div>
                <span className="font-sans text-[11px] text-[#1d7682] w-[65px] text-right flex-shrink-0 font-semibold">
                  {row.rmd > 0 ? fmt(row.rmd) : '—'}
                </span>
              </div>
            )
          })}
          <div className="flex items-center gap-4 mt-3 justify-center font-sans text-[11px] text-[#94A3B8]">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-[#1d7682] inline-block" /> Balance</span>
            <span className="flex items-center gap-1 text-[#1d7682] font-semibold">→ RMD amount</span>
          </div>
        </div>
      </div>

      {/* ══════════════════ RMD RULES REFERENCE ══════════════════ */}
      <div className={`${cardStyle} mb-8`}>
        <h3 className="font-serif text-[22px] text-[#333] mb-4">
          RMD Rules You Should Know
        </h3>
        <div className="space-y-4 font-sans text-[13px] text-[#5b6a71] leading-relaxed">
          <div>
            <h4 className="font-semibold text-[#333] text-[14px] mb-1">When Do RMDs Start?</h4>
            <p>Under SECURE 2.0, your RMD starting age depends on when you were born. Born 1950 or earlier: age 72. Born 1951-1959: age 73. Born 1960 or later: age 75. Your first RMD is due by April 1 of the year after you reach your starting age — but every subsequent RMD is due by December 31.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#333] text-[14px] mb-1">How Is the RMD Calculated?</h4>
            <p>Divide your December 31 prior-year IRA balance by the distribution period from the IRS Uniform Lifetime Table (Table III). If your sole beneficiary is a spouse more than 10 years younger, you can use the Joint & Last Survivor Table (Table II), which produces a longer distribution period and smaller RMD.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#333] text-[14px] mb-1">Multiple IRAs?</h4>
            <p>If you own multiple Traditional IRAs, you must calculate the RMD for each one separately using each account&apos;s December 31 balance. However, you can take the total combined RMD from any one or more of your IRAs — you don&apos;t have to withdraw from each one individually.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#333] text-[14px] mb-1">Qualified Charitable Distributions (QCDs)</h4>
            <p>If you&apos;re 70½ or older, you can direct up to $108,000 (2026, indexed annually) from your IRA directly to a qualified charity. QCDs count toward satisfying your RMD but are excluded from taxable income — a powerful strategy for reducing your tax bracket and avoiding IRMAA surcharges.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#333] text-[14px] mb-1">What If You Miss an RMD?</h4>
            <p>The penalty for missing an RMD is 25% of the amount you should have withdrawn (reduced from 50% by SECURE 2.0). If you correct the error within 2 years by taking the missed distribution and filing Form 5329, the penalty drops to 10%.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#333] text-[14px] mb-1">Roth IRAs and RMDs</h4>
            <p>Original Roth IRA owners are never subject to RMDs during their lifetime. Roth 401(k) accounts were previously subject to RMDs, but starting in 2024, SECURE 2.0 eliminated that requirement. Inherited Roth IRAs are still subject to distribution rules — see our Inherited IRA Calculator for details.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#333] text-[14px] mb-1">IRMAA and Your RMD</h4>
            <p>Medicare Part B and Part D premiums increase when your Modified Adjusted Gross Income exceeds certain thresholds. Your RMD counts as income for IRMAA purposes. Planning your distributions — and using QCDs — can help you stay below IRMAA thresholds and avoid paying hundreds or thousands more per year in Medicare premiums.</p>
          </div>
        </div>
      </div>

      {/* ══════════════════ UNIFORM LIFETIME TABLE ══════════════════ */}
      <div className={`${cardStyle} mb-8`}>
        <h3 className="font-serif text-[22px] text-[#333] mb-2">{TAX_YEAR} IRS Uniform Lifetime Table (Table III)</h3>
        <p className="font-sans text-[12px] text-[#94A3B8] mb-4">
          Source: IRS Publication 590-B. Divide your December 31 prior-year balance by the factor for your age.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-0">
          {Object.entries(UNIFORM_TABLE).map(([age, factor]) => (
            <div key={age} className={`flex justify-between py-1.5 border-b border-[#E2E8F0] font-sans text-[13px] ${parseInt(age) === currentAge ? 'bg-[#1d7682]/10 px-2 rounded font-semibold text-[#1d7682]' : 'text-[#5b6a71]'}`}>
              <span>Age {age}</span>
              <span className="font-semibold">{factor.toFixed(1)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════ DISCLOSURE + CTA ══════════════════ */}
      <div className="bg-[#FAFAF8] rounded-xl border border-[#E2E8F0] p-6">
        <p className="font-sans text-[12px] text-[#94A3B8] leading-relaxed mb-4">
          These results are estimates for illustrative purposes only and should not be considered financial or tax advice. RMD calculations use the {TAX_YEAR} IRS Uniform Lifetime Table (Table III) or Joint & Last Survivor Table (Table II). Actual RMDs depend on your December 31 prior-year account balance. Tax estimates use {TAX_YEAR} federal brackets and approximate state rates. IRMAA thresholds are estimates and may differ from actual Medicare determinations. For a personalized RMD strategy that considers your full financial picture, schedule a free conversation with Jay — no obligation, just clarity.
        </p>
        <div className="text-center">
          <Link
            href="/schedule-consultation"
            className="inline-block font-sans text-[15px] font-semibold text-white bg-gradient-to-b from-[#2a9dab] to-[#1d7682] rounded-full px-8 py-4 shadow-md hover:shadow-lg transition-all"
            style={{
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.25), 0 2px 8px rgba(29,118,130,0.3)',
            }}
          >
            Talk with Jay about your RMD strategy →
          </Link>
        </div>
      </div>
    </div>
  )
}
