'use client'

import { useState, useRef, useCallback } from 'react'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'
import PlanSelector from './PlanSelector'
import {
  SS_WAGE_BASE,
  SEGMENT_RATE_1,
  SEGMENT_RATE_2,
  SEGMENT_RATE_3,
  LIMIT_401K_EMPLOYEE_DEFERRAL,
  LIMIT_401K_CATCHUP_50,
  LIMIT_401K_SUPER_CATCHUP_60_63,
  INTEREST_CREDIT_MINIMUM,
  BCB2_INTEREST_RATE,
  CURRENT_30YR_TREASURY,
} from '@/lib/tax-constants-2026'

/* ================================================================
   AT&T Pension & Retirement Calculator Suite
   Six calculators for union (CWA/IBEW) and management employees:
   1. Cash Balance Pension Estimator
   2. Union Pension Band Calculator
   3. Lump Sum vs Annuity Comparison
   4. Early Retirement Reduction Calculator
   5. AT&T 401(k) Projection
   6. Retirement Income Gap Analysis
   ================================================================ */

// ── AT&T Plan-Specific Constants ─────────────────────────────────

const CASH_BALANCE_PAY_CREDITS: { minAge: number; maxAge: number; basic: number; supplemental: number }[] = [
  { minAge: 0, maxAge: 29, basic: 0.03, supplemental: 0.06 },
  { minAge: 30, maxAge: 34, basic: 0.035, supplemental: 0.07 },
  { minAge: 35, maxAge: 39, basic: 0.0425, supplemental: 0.085 },
  { minAge: 40, maxAge: 44, basic: 0.05, supplemental: 0.10 },
  { minAge: 45, maxAge: 49, basic: 0.065, supplemental: 0.13 },
  { minAge: 50, maxAge: 54, basic: 0.08, supplemental: 0.16 },
  { minAge: 55, maxAge: 99, basic: 0.10, supplemental: 0.20 },
]

const PENSION_BANDS: { band: number; amount: number }[] = [
  { band: 101, amount: 42.00 },
  { band: 102, amount: 44.50 },
  { band: 103, amount: 47.00 },
  { band: 104, amount: 49.50 },
  { band: 105, amount: 52.00 },
  { band: 106, amount: 54.50 },
  { band: 107, amount: 57.00 },
  { band: 108, amount: 59.50 },
  { band: 109, amount: 62.00 },
  { band: 110, amount: 64.50 },
  { band: 111, amount: 67.00 },
  { band: 112, amount: 69.50 },
  { band: 113, amount: 72.00 },
  { band: 114, amount: 74.50 },
  { band: 115, amount: 77.00 },
  { band: 116, amount: 79.50 },
  { band: 117, amount: 82.00 },
  { band: 118, amount: 84.50 },
  { band: 119, amount: 87.00 },
  { band: 120, amount: 71.75 },
  { band: 121, amount: 92.00 },
  { band: 122, amount: 94.50 },
  { band: 123, amount: 97.00 },
  { band: 124, amount: 99.50 },
  { band: 125, amount: 102.00 },
]

// IRS Segment Rates — imported from @/lib/tax-constants-2026
const SEGMENT_RATES = {
  seg1: SEGMENT_RATE_1, // 1–5 years
  seg2: SEGMENT_RATE_2, // 6–20 years
  seg3: SEGMENT_RATE_3, // 21+ years
}

// INTEREST_CREDIT_MINIMUM, BCB2_INTEREST_RATE, CURRENT_30YR_TREASURY
// imported from @/lib/tax-constants-2026

const TABS = [
  { id: 'cashBalance', label: 'Cash Balance', shortLabel: 'Cash Bal' },
  { id: 'pensionBand', label: 'Pension Band', shortLabel: 'Pen Band' },
  { id: 'lumpVsAnnuity', label: 'Lump Sum vs Annuity', shortLabel: 'Lump/Ann' },
  { id: 'earlyRetirement', label: 'Early Retirement', shortLabel: 'Early Ret' },
  { id: 'mod75', label: 'Mod 75 Check', shortLabel: 'Mod 75' },
  { id: 'fourO1k', label: '401(k) Projection', shortLabel: '401(k)' },
  { id: 'incomeGap', label: 'Income Gap', shortLabel: 'Inc Gap' },
] as const

type TabId = (typeof TABS)[number]['id']

// ── Helpers ───────────────────────────────────────────────────────

function fmt(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US')
}

function fmtMo(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US') + '/mo'
}

function fmtPct(n: number): string {
  return (n * 100).toFixed(1) + '%'
}

function getPayCredits(age: number) {
  const bracket = CASH_BALANCE_PAY_CREDITS.find(b => age >= b.minAge && age <= b.maxAge)
  return bracket || CASH_BALANCE_PAY_CREDITS[0]
}

function getInterestCreditRate(isBCB2: boolean): number {
  if (isBCB2) return BCB2_INTEREST_RATE
  return Math.max(CURRENT_30YR_TREASURY, INTEREST_CREDIT_MINIMUM)
}

// Simplified lump sum present value using IRS segment rates
function calcLumpSum(monthlyBenefit: number, retirementAge: number): number {
  const lifeExpectancy = retirementAge <= 55 ? 30 : retirementAge <= 60 ? 25 : retirementAge <= 65 ? 20 : 15
  const annualBenefit = monthlyBenefit * 12
  let pv = 0
  for (let year = 1; year <= lifeExpectancy; year++) {
    const rate = year <= 5 ? SEGMENT_RATES.seg1 : year <= 20 ? SEGMENT_RATES.seg2 : SEGMENT_RATES.seg3
    pv += annualBenefit / Math.pow(1 + rate, year)
  }
  return pv
}

// Rule of 75 eligibility check
function meetsRuleOf75(age: number, yearsOfService: number): boolean {
  if (age >= 65 && yearsOfService >= 10) return true
  if (age >= 55 && yearsOfService >= 20) return true
  if (age >= 50 && yearsOfService >= 25) return true
  if (yearsOfService >= 30) return true
  return false
}

// Early retirement reduction factor
function earlyReductionFactor(retireAge: number, yearsOfService: number): number {
  if (retireAge >= 65) return 1
  if (retireAge >= 55) return 1 // No reduction at 55+ with Rule of 75 eligibility
  // Before 55
  const monthsBefore55 = (55 - retireAge) * 12
  if (yearsOfService >= 30) {
    return 1 - (0.0025 * monthsBefore55) // 0.25% per month = 3% per year
  }
  return 1 - (0.005 * monthsBefore55) // 0.50% per month = 6% per year
}

// ── Styling ───────────────────────────────────────────────────────

const inputBase =
  'border border-[#CBD5E1] bg-white rounded-[8px] py-[12px] px-[16px] font-sans text-[15px] text-[#333333] w-full transition-all duration-200 focus:border-[#1d7682] focus:outline-none focus:shadow-[0_0_0_3px_rgba(29,118,130,0.1)]'

const selectBase = `${inputBase} appearance-none bg-no-repeat bg-[length:16px_16px] bg-[position:right_16px_center]`

const chevronSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235b6a71' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`

const labelClass = 'font-sans text-[13px] font-medium text-[#333333] tracking-[0.03em] block mb-[6px]'

const resultCardClass = 'bg-white rounded-[12px] border border-[#E2E8F0] p-[24px]'

const metricClass = 'text-center'
const metricValue = 'font-sans text-[28px] md:text-[32px] font-bold'
const metricLabel = 'font-sans text-[12px] text-[#5b6a71] uppercase tracking-[0.08em] mt-[4px]'

// ── Component ─────────────────────────────────────────────────────

export default function ATTPensionCalculator() {
  const [activeTab, setActiveTab] = useState<TabId>('cashBalance')
  const resultsRef = useRef<HTMLDivElement>(null)

  const scrollToResults = useCallback(() => {
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }, [])

  return (
    <div className="max-w-[960px] mx-auto px-[20px] md:px-[40px] py-[48px] md:py-[64px]">
      {/* Plan Selector — helps users figure out which plan they're in before they start */}
      <PlanSelector
        onSelectTab={(tabId) => {
          if (TABS.some((t) => t.id === tabId)) {
            setActiveTab(tabId as TabId)
            setTimeout(() => {
              resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 100)
          }
        }}
      />

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-[6px] mb-[32px]">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-[14px] md:px-[18px] py-[9px] rounded-full font-sans text-[12px] md:text-[13px] font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-[#1d7682] text-white shadow-[0_2px_8px_rgba(29,118,130,0.3)]'
                : 'bg-white text-[#5b6a71] border border-[#E2E8F0] hover:border-[#1d7682] hover:text-[#1d7682]'
            }`}
          >
            <span className="hidden md:inline">{tab.label}</span>
            <span className="md:hidden">{tab.shortLabel}</span>
          </button>
        ))}
      </div>

      {/* Calculator Panels */}
      <div ref={resultsRef}>
        {activeTab === 'cashBalance' && <CashBalanceCalc onCalculate={scrollToResults} />}
        {activeTab === 'pensionBand' && <PensionBandCalc onCalculate={scrollToResults} />}
        {activeTab === 'lumpVsAnnuity' && <LumpVsAnnuityCalc onCalculate={scrollToResults} />}
        {activeTab === 'earlyRetirement' && <EarlyRetirementCalc onCalculate={scrollToResults} />}
        {activeTab === 'mod75' && <Mod75Calc onCalculate={scrollToResults} />}
        {activeTab === 'fourO1k' && <FourO1kCalc onCalculate={scrollToResults} />}
        {activeTab === 'incomeGap' && <IncomeGapCalc onCalculate={scrollToResults} />}
      </div>

      {/* Suite-level disclaimer — applies to all 6 calculator tabs */}
      <CalculatorDisclaimer
        toolName="AT&T pension"
        variant="default"
        additionalContext="IRS segment rates and mortality assumptions update monthly. Lump sum projections are sensitive to small rate changes — a value calculated today may differ meaningfully from your actual lump sum at retirement. Pension band amounts are approximate and vary by job title and contract year. Always verify with NetBenefits or AT&T HR before making decisions."
      />
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// 1. CASH BALANCE PENSION ESTIMATOR
// ═══════════════════════════════════════════════════════════════════

function CashBalanceCalc({ onCalculate }: { onCalculate: () => void }) {
  const [inputs, setInputs] = useState({
    currentAge: 45,
    retireAge: 62,
    salary: 120000,
    currentBalance: 50000,
    salaryGrowth: 3,
    isBCB2: false,
  })
  const [results, setResults] = useState<{
    projectedBalance: number
    monthlyAnnuity: number
    lumpSum: number
    totalPayCredits: number
    totalInterest: number
    yearByYear: { age: number; balance: number; payCredit: number; interestCredit: number }[]
  } | null>(null)

  function calculate() {
    const years = inputs.retireAge - inputs.currentAge
    if (years <= 0) return

    let balance = inputs.currentBalance
    let salary = inputs.salary
    let totalPayCredits = 0
    let totalInterest = 0
    const yearByYear: { age: number; balance: number; payCredit: number; interestCredit: number }[] = []
    const interestRate = getInterestCreditRate(inputs.isBCB2)

    for (let y = 0; y < years; y++) {
      const age = inputs.currentAge + y
      const credits = getPayCredits(age)

      const belowSSWB = Math.min(salary, SS_WAGE_BASE)
      const aboveSSWB = Math.max(0, salary - SS_WAGE_BASE)
      const payCredit = belowSSWB * credits.basic + aboveSSWB * credits.supplemental
      const interestCredit = balance * interestRate

      totalPayCredits += payCredit
      totalInterest += interestCredit
      balance += payCredit + interestCredit
      salary *= 1 + inputs.salaryGrowth / 100

      yearByYear.push({ age: age + 1, balance, payCredit, interestCredit })
    }

    // Simplified annuity factor: cash balance / factor based on age
    const annuityFactor = inputs.retireAge <= 55 ? 136.2 : inputs.retireAge <= 60 ? 155 : inputs.retireAge <= 65 ? 175 : 190
    const monthlyAnnuity = balance / annuityFactor
    const lumpSum = balance // Cash balance lump sum is approximately the account balance

    setResults({ projectedBalance: balance, monthlyAnnuity, lumpSum, totalPayCredits, totalInterest, yearByYear })
    onCalculate()
  }

  return (
    <div>
      <div className="mb-[24px]">
        <h2 className="font-serif text-[24px] md:text-[28px] text-[#333333] font-normal">Cash Balance Pension Estimator</h2>
        <p className="font-sans text-[14px] text-[#5b6a71] mt-[4px]">
          Project your AT&amp;T cash balance account growth using age-based pay credits and interest credits.
        </p>
      </div>

      <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-[24px] md:p-[32px] mb-[24px]">
        {/* Plan Type */}
        <div className="mb-[20px]">
          <p className={labelClass}>Plan Type</p>
          <div className="grid grid-cols-2 gap-[8px]">
            {[
              { val: false, label: 'Traditional Cash Balance' },
              { val: true, label: 'BCB2 (Union post-2009)' },
            ].map(opt => (
              <button
                key={String(opt.val)}
                onClick={() => setInputs(p => ({ ...p, isBCB2: opt.val }))}
                className={`py-[10px] px-[12px] rounded-[8px] border-2 font-sans text-[13px] font-medium transition-all ${
                  inputs.isBCB2 === opt.val
                    ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#1d7682]'
                    : 'border-[#E2E8F0] text-[#5b6a71] hover:border-[#1d7682]/40'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p className="font-sans text-[11px] text-[#5b6a71] mt-[4px]">
            Interest rate: {inputs.isBCB2 ? '4.50% fixed' : `${fmtPct(Math.max(CURRENT_30YR_TREASURY, INTEREST_CREDIT_MINIMUM))} (30-yr Treasury, 4% floor)`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[20px]">
          <div>
            <label className={labelClass}>Current Age</label>
            <input
              type="number"
              min={20} max={70}
              value={inputs.currentAge}
              onChange={e => setInputs(p => ({ ...p, currentAge: +e.target.value }))}
              className={inputBase}
            />
          </div>
          <div>
            <label className={labelClass}>Target Retirement Age</label>
            <input
              type="number"
              min={50} max={70}
              value={inputs.retireAge}
              onChange={e => setInputs(p => ({ ...p, retireAge: +e.target.value }))}
              className={inputBase}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[20px]">
          <div>
            <label className={labelClass}>Annual Salary</label>
            <input
              type="number"
              min={0}
              value={inputs.salary}
              onChange={e => setInputs(p => ({ ...p, salary: +e.target.value }))}
              className={inputBase}
            />
          </div>
          <div>
            <label className={labelClass}>Current Cash Balance Account</label>
            <input
              type="number"
              min={0}
              value={inputs.currentBalance}
              onChange={e => setInputs(p => ({ ...p, currentBalance: +e.target.value }))}
              className={inputBase}
            />
          </div>
        </div>

        <div className="mb-[24px]">
          <label className={labelClass}>Expected Annual Salary Growth (%)</label>
          <input
            type="number"
            min={0} max={10} step={0.5}
            value={inputs.salaryGrowth}
            onChange={e => setInputs(p => ({ ...p, salaryGrowth: +e.target.value }))}
            className={`${inputBase} max-w-[200px]`}
          />
        </div>

        <button onClick={calculate} className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white font-sans text-[15px] font-semibold py-[16px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[1px] transition-all duration-200">
          Calculate Cash Balance Pension
        </button>
      </div>

      {results && (
        <div className="space-y-[16px] animate-fade-in">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[12px]">
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} text-[#1d7682]`}>{fmt(results.projectedBalance)}</p>
                <p className={metricLabel}>Projected Balance</p>
              </div>
            </div>
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} text-[#2E5D4B]`}>{fmtMo(results.monthlyAnnuity)}</p>
                <p className={metricLabel}>Monthly Annuity</p>
              </div>
            </div>
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} text-[#1d7682]`}>{fmt(results.totalPayCredits)}</p>
                <p className={metricLabel}>Total Pay Credits</p>
              </div>
            </div>
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} text-[#5b6a71]`}>{fmt(results.totalInterest)}</p>
                <p className={metricLabel}>Total Interest</p>
              </div>
            </div>
          </div>

          {/* Pay Credit Schedule */}
          <div className={resultCardClass}>
            <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[12px] uppercase tracking-[0.05em]">AT&amp;T Pay Credit Schedule Applied</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] font-sans">
                <thead>
                  <tr className="text-left text-[#5b6a71] border-b border-[#E2E8F0]">
                    <th className="py-[8px] pr-[12px]">Age</th>
                    <th className="py-[8px] pr-[12px]">Basic Rate</th>
                    <th className="py-[8px] pr-[12px]">Supplemental Rate</th>
                    <th className="py-[8px]">Applies To</th>
                  </tr>
                </thead>
                <tbody>
                  {CASH_BALANCE_PAY_CREDITS.map((bracket) => (
                    <tr key={bracket.minAge} className={`border-b border-[#F1F5F9] ${inputs.currentAge >= bracket.minAge && inputs.currentAge <= bracket.maxAge ? 'bg-[#1d7682]/5 font-semibold' : ''}`}>
                      <td className="py-[6px] pr-[12px]">{bracket.maxAge === 99 ? `${bracket.minAge}+` : `${bracket.minAge}–${bracket.maxAge}`}</td>
                      <td className="py-[6px] pr-[12px]">{(bracket.basic * 100).toFixed(1)}%</td>
                      <td className="py-[6px] pr-[12px]">{(bracket.supplemental * 100).toFixed(1)}%</td>
                      <td className="py-[6px] text-[#5b6a71]">{bracket === CASH_BALANCE_PAY_CREDITS[0] ? `Up to ${fmt(SS_WAGE_BASE)} / above` : `Up to SSWB / above`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Growth Table */}
          <div className={resultCardClass}>
            <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[12px] uppercase tracking-[0.05em]">Year-by-Year Projection</h3>
            <div className="overflow-x-auto max-h-[300px] overflow-y-auto">
              <table className="w-full text-[13px] font-sans">
                <thead className="sticky top-0 bg-white">
                  <tr className="text-left text-[#5b6a71] border-b border-[#E2E8F0]">
                    <th className="py-[8px] pr-[12px]">Age</th>
                    <th className="py-[8px] pr-[12px]">Pay Credit</th>
                    <th className="py-[8px] pr-[12px]">Interest Credit</th>
                    <th className="py-[8px]">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {results.yearByYear.map(row => (
                    <tr key={row.age} className="border-b border-[#F1F5F9]">
                      <td className="py-[6px] pr-[12px] font-medium">{row.age}</td>
                      <td className="py-[6px] pr-[12px] text-[#1d7682]">{fmt(row.payCredit)}</td>
                      <td className="py-[6px] pr-[12px] text-[#5b6a71]">{fmt(row.interestCredit)}</td>
                      <td className="py-[6px] font-semibold">{fmt(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// 2. UNION PENSION BAND CALCULATOR
// ═══════════════════════════════════════════════════════════════════

function PensionBandCalc({ onCalculate }: { onCalculate: () => void }) {
  const [inputs, setInputs] = useState({
    pensionBand: 120,
    customBandAmount: 71.75,
    yearsOfService: 25,
    useCustom: false,
  })
  const [results, setResults] = useState<{
    monthlyBenefit: number
    annualBenefit: number
    bandAmount: number
    lumpSumEstimate: number
  } | null>(null)

  function calculate() {
    const bandEntry = PENSION_BANDS.find(b => b.band === inputs.pensionBand)
    const bandAmount = inputs.useCustom ? inputs.customBandAmount : (bandEntry?.amount || 71.75)
    const monthlyBenefit = bandAmount * inputs.yearsOfService
    const annualBenefit = monthlyBenefit * 12
    const lumpSumEstimate = calcLumpSum(monthlyBenefit, 65)

    setResults({ monthlyBenefit, annualBenefit, bandAmount, lumpSumEstimate })
    onCalculate()
  }

  return (
    <div>
      <div className="mb-[24px]">
        <h2 className="font-serif text-[24px] md:text-[28px] text-[#333333] font-normal">Union Pension Band Calculator</h2>
        <p className="font-sans text-[14px] text-[#5b6a71] mt-[4px]">
          CWA/IBEW craft employees: estimate your monthly pension based on your pension band and years of net credited service.
        </p>
      </div>

      <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-[24px] md:p-[32px] mb-[24px]">
        <div className="mb-[20px]">
          <p className={labelClass}>Input Method</p>
          <div className="grid grid-cols-2 gap-[8px]">
            <button
              onClick={() => setInputs(p => ({ ...p, useCustom: false }))}
              className={`py-[10px] px-[12px] rounded-[8px] border-2 font-sans text-[13px] font-medium transition-all ${
                !inputs.useCustom ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#1d7682]' : 'border-[#E2E8F0] text-[#5b6a71] hover:border-[#1d7682]/40'
              }`}
            >
              Select Pension Band
            </button>
            <button
              onClick={() => setInputs(p => ({ ...p, useCustom: true }))}
              className={`py-[10px] px-[12px] rounded-[8px] border-2 font-sans text-[13px] font-medium transition-all ${
                inputs.useCustom ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#1d7682]' : 'border-[#E2E8F0] text-[#5b6a71] hover:border-[#1d7682]/40'
              }`}
            >
              Enter Custom Amount
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[24px]">
          {!inputs.useCustom ? (
            <div>
              <label className={labelClass}>Pension Band</label>
              <select
                value={inputs.pensionBand}
                onChange={e => setInputs(p => ({ ...p, pensionBand: +e.target.value }))}
                className={selectBase}
                style={{ backgroundImage: chevronSvg }}
              >
                {PENSION_BANDS.map(b => (
                  <option key={b.band} value={b.band}>Band {b.band} — {fmt(b.amount)}/yr of service</option>
                ))}
              </select>
            </div>
          ) : (
            <div>
              <label className={labelClass}>Monthly Amount per Year of Service ($)</label>
              <input
                type="number"
                min={0} step={0.25}
                value={inputs.customBandAmount}
                onChange={e => setInputs(p => ({ ...p, customBandAmount: +e.target.value }))}
                className={inputBase}
              />
              <p className="font-sans text-[11px] text-[#5b6a71] mt-[4px]">Find this on your pension statement or SPD.</p>
            </div>
          )}
          <div>
            <label className={labelClass}>Years of Net Credited Service</label>
            <input
              type="number"
              min={0} max={50}
              value={inputs.yearsOfService}
              onChange={e => setInputs(p => ({ ...p, yearsOfService: +e.target.value }))}
              className={inputBase}
            />
          </div>
        </div>

        <button onClick={calculate} className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white font-sans text-[15px] font-semibold py-[16px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[1px] transition-all duration-200">
          Calculate Pension Band Benefit
        </button>
      </div>

      {results && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[12px] animate-fade-in">
          <div className={resultCardClass}>
            <div className={metricClass}>
              <p className={`${metricValue} text-[#1d7682]`}>{fmtMo(results.monthlyBenefit)}</p>
              <p className={metricLabel}>Monthly Pension</p>
            </div>
          </div>
          <div className={resultCardClass}>
            <div className={metricClass}>
              <p className={`${metricValue} text-[#2E5D4B]`}>{fmt(results.annualBenefit)}</p>
              <p className={metricLabel}>Annual Pension</p>
            </div>
          </div>
          <div className={resultCardClass}>
            <div className={metricClass}>
              <p className={`${metricValue} text-[#5b6a71]`}>{fmt(results.bandAmount)}</p>
              <p className={metricLabel}>Band Amount / Yr</p>
            </div>
          </div>
          <div className={resultCardClass}>
            <div className={metricClass}>
              <p className={`${metricValue} text-[#b8860b]`}>{fmt(results.lumpSumEstimate)}</p>
              <p className={metricLabel}>Est. Lump Sum (age 65)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// 3. LUMP SUM vs ANNUITY COMPARISON
// ═══════════════════════════════════════════════════════════════════

function LumpVsAnnuityCalc({ onCalculate }: { onCalculate: () => void }) {
  const [inputs, setInputs] = useState({
    monthlyAnnuity: 2500,
    retireAge: 62,
    investReturn: 6,
    taxRate: 22,
    survivorPct: 50,
    spouseAge: 60,
  })
  const [results, setResults] = useState<{
    lumpSum: number
    annuityTotal15: number
    annuityTotal20: number
    annuityTotal25: number
    breakEvenYears: number
    investedLumpAt15: number
    investedLumpAt20: number
    monthlyFromLump: number
    survivorAnnuity: number
  } | null>(null)

  function calculate() {
    const lumpSum = calcLumpSum(inputs.monthlyAnnuity, inputs.retireAge)
    const annualAnnuity = inputs.monthlyAnnuity * 12
    const afterTaxAnnuity = annualAnnuity * (1 - inputs.taxRate / 100)
    const afterTaxLump = lumpSum * (1 - inputs.taxRate / 100) // Assume rolled to IRA (no immediate tax), but model if taken

    const annuityTotal15 = afterTaxAnnuity * 15
    const annuityTotal20 = afterTaxAnnuity * 20
    const annuityTotal25 = afterTaxAnnuity * 25

    // Invest lump sum and draw equivalent of annuity — how long does it last?
    const r = inputs.investReturn / 100
    let balance = lumpSum // Assume IRA rollover, tax-deferred
    let year = 0
    while (balance > 0 && year < 40) {
      balance = balance * (1 + r) - annualAnnuity
      year++
    }
    const breakEvenYears = year

    // Lump sum invested for 15 and 20 years (no withdrawals)
    const investedLumpAt15 = lumpSum * Math.pow(1 + r, 15)
    const investedLumpAt20 = lumpSum * Math.pow(1 + r, 20)

    // Safe monthly withdrawal from lump sum (4% rule)
    const monthlyFromLump = (lumpSum * 0.04) / 12

    const survivorAnnuity = inputs.monthlyAnnuity * (inputs.survivorPct / 100)

    setResults({ lumpSum, annuityTotal15, annuityTotal20, annuityTotal25, breakEvenYears, investedLumpAt15, investedLumpAt20, monthlyFromLump, survivorAnnuity })
    onCalculate()
  }

  return (
    <div>
      <div className="mb-[24px]">
        <h2 className="font-serif text-[24px] md:text-[28px] text-[#333333] font-normal">Lump Sum vs Annuity Comparison</h2>
        <p className="font-sans text-[14px] text-[#5b6a71] mt-[4px]">
          Compare taking your AT&amp;T pension as a lump sum (IRA rollover) versus a monthly annuity. Uses current IRS segment rates.
        </p>
      </div>

      <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-[24px] md:p-[32px] mb-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[20px]">
          <div>
            <label className={labelClass}>Monthly Pension (Single Life Annuity)</label>
            <input type="number" min={0} value={inputs.monthlyAnnuity} onChange={e => setInputs(p => ({ ...p, monthlyAnnuity: +e.target.value }))} className={inputBase} />
          </div>
          <div>
            <label className={labelClass}>Retirement Age</label>
            <input type="number" min={50} max={70} value={inputs.retireAge} onChange={e => setInputs(p => ({ ...p, retireAge: +e.target.value }))} className={inputBase} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[20px]">
          <div>
            <label className={labelClass}>Expected Investment Return (%)</label>
            <input type="number" min={0} max={15} step={0.5} value={inputs.investReturn} onChange={e => setInputs(p => ({ ...p, investReturn: +e.target.value }))} className={inputBase} />
          </div>
          <div>
            <label className={labelClass}>Marginal Tax Rate (%)</label>
            <input type="number" min={0} max={50} value={inputs.taxRate} onChange={e => setInputs(p => ({ ...p, taxRate: +e.target.value }))} className={inputBase} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[24px]">
          <div>
            <label className={labelClass}>Survivor Benefit (%)</label>
            <div className="grid grid-cols-3 gap-[8px]">
              {[0, 50, 100].map(pct => (
                <button key={pct} onClick={() => setInputs(p => ({ ...p, survivorPct: pct }))} className={`py-[10px] rounded-[8px] border-2 font-sans text-[13px] font-medium transition-all ${inputs.survivorPct === pct ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#1d7682]' : 'border-[#E2E8F0] text-[#5b6a71] hover:border-[#1d7682]/40'}`}>
                  {pct === 0 ? 'Single Life' : `J&${pct}%`}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className={labelClass}>Spouse Age (if J&amp;S)</label>
            <input type="number" min={40} max={80} value={inputs.spouseAge} onChange={e => setInputs(p => ({ ...p, spouseAge: +e.target.value }))} className={inputBase} />
          </div>
        </div>

        <button onClick={calculate} className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white font-sans text-[15px] font-semibold py-[16px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[1px] transition-all duration-200">
          Compare Lump Sum vs Annuity
        </button>
      </div>

      {results && (
        <div className="space-y-[16px] animate-fade-in">
          {/* Side-by-side comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <div className={`${resultCardClass} border-l-4 border-l-[#1d7682]`}>
              <h3 className="font-sans text-[14px] font-semibold text-[#1d7682] mb-[16px] uppercase tracking-[0.05em]">Lump Sum</h3>
              <div className="space-y-[12px]">
                <div className="flex justify-between"><span className="text-[#5b6a71] text-[14px]">Estimated Lump Sum</span><span className="font-semibold text-[15px]">{fmt(results.lumpSum)}</span></div>
                <div className="flex justify-between"><span className="text-[#5b6a71] text-[14px]">Safe Monthly Draw (4% rule)</span><span className="font-semibold text-[15px]">{fmtMo(results.monthlyFromLump)}</span></div>
                <div className="flex justify-between"><span className="text-[#5b6a71] text-[14px]">Invested Value at 15 yrs</span><span className="font-semibold text-[15px]">{fmt(results.investedLumpAt15)}</span></div>
                <div className="flex justify-between"><span className="text-[#5b6a71] text-[14px]">Invested Value at 20 yrs</span><span className="font-semibold text-[15px]">{fmt(results.investedLumpAt20)}</span></div>
                <div className="flex justify-between"><span className="text-[#5b6a71] text-[14px]">Sustains annuity-level draw for</span><span className="font-semibold text-[15px] text-[#1d7682]">{results.breakEvenYears}+ years</span></div>
              </div>
            </div>
            <div className={`${resultCardClass} border-l-4 border-l-[#2E5D4B]`}>
              <h3 className="font-sans text-[14px] font-semibold text-[#2E5D4B] mb-[16px] uppercase tracking-[0.05em]">Annuity</h3>
              <div className="space-y-[12px]">
                <div className="flex justify-between"><span className="text-[#5b6a71] text-[14px]">Monthly Pension</span><span className="font-semibold text-[15px]">{fmtMo(inputs.monthlyAnnuity)}</span></div>
                <div className="flex justify-between"><span className="text-[#5b6a71] text-[14px]">Total at 15 years</span><span className="font-semibold text-[15px]">{fmt(results.annuityTotal15)}</span></div>
                <div className="flex justify-between"><span className="text-[#5b6a71] text-[14px]">Total at 20 years</span><span className="font-semibold text-[15px]">{fmt(results.annuityTotal20)}</span></div>
                <div className="flex justify-between"><span className="text-[#5b6a71] text-[14px]">Total at 25 years</span><span className="font-semibold text-[15px]">{fmt(results.annuityTotal25)}</span></div>
                {inputs.survivorPct > 0 && (
                  <div className="flex justify-between"><span className="text-[#5b6a71] text-[14px]">Survivor Benefit</span><span className="font-semibold text-[15px] text-[#2E5D4B]">{fmtMo(results.survivorAnnuity)}</span></div>
                )}
                <div className="flex justify-between"><span className="text-[#5b6a71] text-[14px]">Guaranteed</span><span className="font-semibold text-[15px] text-[#2E5D4B]">Lifetime</span></div>
              </div>
            </div>
          </div>

          {/* Segment Rates */}
          <div className={resultCardClass}>
            <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[12px] uppercase tracking-[0.05em]">Current IRS Segment Rates (Feb 2026)</h3>
            <div className="grid grid-cols-3 gap-[12px]">
              <div className="text-center"><p className="text-[18px] font-bold text-[#1d7682]">{(SEGMENT_RATES.seg1 * 100).toFixed(2)}%</p><p className="text-[11px] text-[#5b6a71]">Segment 1 (1-5 yr)</p></div>
              <div className="text-center"><p className="text-[18px] font-bold text-[#1d7682]">{(SEGMENT_RATES.seg2 * 100).toFixed(2)}%</p><p className="text-[11px] text-[#5b6a71]">Segment 2 (6-20 yr)</p></div>
              <div className="text-center"><p className="text-[18px] font-bold text-[#1d7682]">{(SEGMENT_RATES.seg3 * 100).toFixed(2)}%</p><p className="text-[11px] text-[#5b6a71]">Segment 3 (21+ yr)</p></div>
            </div>
            <p className="font-sans text-[11px] text-[#5b6a71] mt-[8px] text-center">Higher rates = smaller lump sum. These rates update annually.</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// 4. EARLY RETIREMENT REDUCTION CALCULATOR
// ═══════════════════════════════════════════════════════════════════

function EarlyRetirementCalc({ onCalculate }: { onCalculate: () => void }) {
  const [inputs, setInputs] = useState({
    currentAge: 52,
    yearsOfService: 28,
    monthlyBenefitAt65: 3000,
    employeeType: 'union' as 'union' | 'management',
  })
  const [results, setResults] = useState<{
    eligible: boolean
    ruleOf75: boolean
    ages: { age: number; factor: number; monthlyBenefit: number; annualBenefit: number; reduction: string }[]
  } | null>(null)

  function calculate() {
    const eligible = meetsRuleOf75(inputs.currentAge, inputs.yearsOfService)
    const ruleOf75 = eligible

    // Project for ages from current to 65
    const ages: { age: number; factor: number; monthlyBenefit: number; annualBenefit: number; reduction: string }[] = []
    const startAge = Math.max(inputs.currentAge, 50)
    const projectedServiceAtAge = (age: number) => inputs.yearsOfService + (age - inputs.currentAge)

    for (let age = startAge; age <= 65; age++) {
      const service = projectedServiceAtAge(age)
      const meetsRule = meetsRuleOf75(age, service)

      let factor: number
      if (age >= 65) {
        factor = 1
      } else if (age >= 55 && meetsRule) {
        factor = 1 // No reduction at 55+ with eligibility
      } else if (age < 55 && meetsRule) {
        // Union with 30+ years: reduced rate before 55
        if (inputs.employeeType === 'union' && service >= 30) {
          factor = 1 // Union 30+ yrs: no pre-55 reduction
        } else {
          factor = earlyReductionFactor(age, service)
        }
      } else {
        factor = earlyReductionFactor(age, service)
      }

      const monthlyBenefit = inputs.monthlyBenefitAt65 * factor
      const reduction = factor < 1 ? `-${((1 - factor) * 100).toFixed(1)}%` : 'None'

      ages.push({ age, factor, monthlyBenefit, annualBenefit: monthlyBenefit * 12, reduction })
    }

    setResults({ eligible, ruleOf75, ages })
    onCalculate()
  }

  return (
    <div>
      <div className="mb-[24px]">
        <h2 className="font-serif text-[24px] md:text-[28px] text-[#333333] font-normal">Early Retirement Reduction Calculator</h2>
        <p className="font-sans text-[14px] text-[#5b6a71] mt-[4px]">
          See how retiring early affects your AT&amp;T pension. Includes Modified Rule of 75 eligibility and reduction factors for union and management.
        </p>
      </div>

      <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-[24px] md:p-[32px] mb-[24px]">
        <div className="mb-[20px]">
          <p className={labelClass}>Employee Type</p>
          <div className="grid grid-cols-2 gap-[8px]">
            <button onClick={() => setInputs(p => ({ ...p, employeeType: 'union' }))} className={`py-[10px] px-[12px] rounded-[8px] border-2 font-sans text-[13px] font-medium transition-all ${inputs.employeeType === 'union' ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#1d7682]' : 'border-[#E2E8F0] text-[#5b6a71] hover:border-[#1d7682]/40'}`}>
              Union (CWA / IBEW)
            </button>
            <button onClick={() => setInputs(p => ({ ...p, employeeType: 'management' }))} className={`py-[10px] px-[12px] rounded-[8px] border-2 font-sans text-[13px] font-medium transition-all ${inputs.employeeType === 'management' ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#1d7682]' : 'border-[#E2E8F0] text-[#5b6a71] hover:border-[#1d7682]/40'}`}>
              Management (Non-Union)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mb-[24px]">
          <div>
            <label className={labelClass}>Current Age</label>
            <input type="number" min={40} max={70} value={inputs.currentAge} onChange={e => setInputs(p => ({ ...p, currentAge: +e.target.value }))} className={inputBase} />
          </div>
          <div>
            <label className={labelClass}>Years of Service</label>
            <input type="number" min={0} max={50} value={inputs.yearsOfService} onChange={e => setInputs(p => ({ ...p, yearsOfService: +e.target.value }))} className={inputBase} />
          </div>
          <div>
            <label className={labelClass}>Monthly Pension at Age 65</label>
            <input type="number" min={0} value={inputs.monthlyBenefitAt65} onChange={e => setInputs(p => ({ ...p, monthlyBenefitAt65: +e.target.value }))} className={inputBase} />
          </div>
        </div>

        <button onClick={calculate} className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white font-sans text-[15px] font-semibold py-[16px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[1px] transition-all duration-200">
          Calculate Early Retirement Options
        </button>
      </div>

      {results && (
        <div className="space-y-[16px] animate-fade-in">
          {/* Eligibility Banner */}
          <div className={`${resultCardClass} ${results.eligible ? 'border-l-4 border-l-[#2E5D4B]' : 'border-l-4 border-l-[#b8860b]'}`}>
            <div className="flex items-center gap-[12px]">
              <span className={`text-[24px] ${results.eligible ? 'text-[#2E5D4B]' : 'text-[#b8860b]'}`}>
                {results.eligible ? '\u2713' : '\u2717'}
              </span>
              <div>
                <p className="font-sans text-[16px] font-semibold text-[#333333]">
                  {results.eligible ? 'You currently meet the Modified Rule of 75' : 'Not yet eligible under Modified Rule of 75'}
                </p>
                <p className="font-sans text-[13px] text-[#5b6a71]">
                  Age {inputs.currentAge} + {inputs.yearsOfService} years of service = {inputs.currentAge + inputs.yearsOfService}
                </p>
              </div>
            </div>

            {/* Rule of 75 Grid */}
            <div className="mt-[16px] bg-[#FAFAF8] rounded-[8px] p-[16px]">
              <p className="font-sans text-[12px] font-semibold text-[#333333] mb-[8px] uppercase tracking-[0.05em]">Modified Rule of 75 Breakpoints</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[8px] text-[13px] font-sans">
                {[
                  { age: '65+', service: '10 yrs' },
                  { age: '55+', service: '20 yrs' },
                  { age: '50+', service: '25 yrs' },
                  { age: 'Any', service: '30 yrs' },
                ].map((rule, i) => (
                  <div key={i} className="bg-white rounded-[6px] p-[10px] text-center border border-[#E2E8F0]">
                    <p className="font-semibold text-[#1d7682]">Age {rule.age}</p>
                    <p className="text-[#5b6a71]">{rule.service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pre-55 Age Penalty Callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-[12px] p-[20px]">
            <p className="font-sans text-[13px] font-semibold text-amber-900 mb-[8px] uppercase tracking-[0.04em]">
              ⚠ Early Retirement Age Penalty — Before Age 55
            </p>
            <p className="font-sans text-[13px] text-amber-900 leading-relaxed mb-[8px]">
              The Modified Rule of 75 tells you <em>if</em> you can retire early. It does not eliminate the age penalty if you&apos;re under 55. These are two separate tests — both apply.
            </p>
            <ul className="font-sans text-[13px] text-amber-900 space-y-[4px]">
              <li>• <strong>Age 55 or older</strong> with Rule of 75: no reduction to your benefit.</li>
              <li>• <strong>Under age 55</strong>: 6% per year reduction for each year before 55 — even with Rule of 75 eligibility. Retiring at 52 = 18% permanent reduction.</li>
              {inputs.employeeType === 'union' && (
                <li>• <strong>Union (CWA/IBEW) with 30+ years of service</strong>: exempt from the age penalty — full service pension at any age.</li>
              )}
            </ul>
            <p className="font-sans text-[12px] text-amber-800 mt-[8px] italic">
              The table below reflects these penalties. Green rows = no reduction. Red percentages = permanent.
            </p>
          </div>

          {/* Age-by-age table */}
          <div className={resultCardClass}>
            <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[12px] uppercase tracking-[0.05em]">
              Pension at Each Retirement Age
              <span className="font-normal text-[#5b6a71] ml-[8px]">({inputs.employeeType === 'union' ? 'Union' : 'Management'})</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] font-sans">
                <thead>
                  <tr className="text-left text-[#5b6a71] border-b border-[#E2E8F0]">
                    <th className="py-[8px] pr-[12px]">Age</th>
                    <th className="py-[8px] pr-[12px]">Service</th>
                    <th className="py-[8px] pr-[12px]">Reduction</th>
                    <th className="py-[8px] pr-[12px]">Monthly</th>
                    <th className="py-[8px]">Annual</th>
                  </tr>
                </thead>
                <tbody>
                  {results.ages.map(row => (
                    <tr key={row.age} className={`border-b border-[#F1F5F9] ${row.reduction === 'None' ? 'bg-[#2E5D4B]/5' : ''}`}>
                      <td className="py-[8px] pr-[12px] font-medium">{row.age}</td>
                      <td className="py-[8px] pr-[12px]">{inputs.yearsOfService + (row.age - inputs.currentAge)} yrs</td>
                      <td className={`py-[8px] pr-[12px] font-medium ${row.reduction === 'None' ? 'text-[#2E5D4B]' : 'text-[#8B2E2E]'}`}>{row.reduction}</td>
                      <td className="py-[8px] pr-[12px] font-semibold">{fmtMo(row.monthlyBenefit)}</td>
                      <td className="py-[8px] font-semibold">{fmt(row.annualBenefit)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── 401(k) Growth Line Chart ──────────────────────────────────────

function FourO1kLineChart({
  yearByYear,
  startingBalance,
}: {
  yearByYear: { age: number; balance: number; contribution: number; match: number }[]
  startingBalance: number
}) {
  if (yearByYear.length < 2) return null

  const PAD_L = 64, PAD_R = 16, PAD_T = 16, PAD_B = 28
  const W = 520, H = 200
  const VBW = PAD_L + W + PAD_R
  const VBH = PAD_T + H + PAD_B

  const maxBal = Math.max(...yearByYear.map(d => d.balance))
  const minAge = yearByYear[0].age
  const maxAge = yearByYear[yearByYear.length - 1].age
  const ageRange = maxAge - minAge || 1

  const toX = (age: number) => PAD_L + ((age - minAge) / ageRange) * W
  const toY = (val: number) => PAD_T + H - (val / maxBal) * H

  const balPts = yearByYear.map(d => `${toX(d.age).toFixed(1)},${toY(d.balance).toFixed(1)}`).join(' ')

  let cumIn = startingBalance
  const moneyInPts = yearByYear.map(d => {
    cumIn += d.contribution + d.match
    return `${toX(d.age).toFixed(1)},${toY(cumIn).toFixed(1)}`
  }).join(' ')

  const first = yearByYear[0]
  const last = yearByYear[yearByYear.length - 1]
  const areaPath = [
    `M ${toX(first.age).toFixed(1)},${(PAD_T + H).toFixed(1)}`,
    ...yearByYear.map(d => `L ${toX(d.age).toFixed(1)},${toY(d.balance).toFixed(1)}`),
    `L ${toX(last.age).toFixed(1)},${(PAD_T + H).toFixed(1)}`,
    'Z',
  ].join(' ')

  function fmtAx(v: number) {
    if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(v % 1_000_000 === 0 ? 0 : 1)}M`
    if (v >= 1_000) return `$${Math.round(v / 1_000)}K`
    return `$${Math.round(v)}`
  }

  const xTicks = yearByYear.filter((d, i) =>
    i === 0 || i === yearByYear.length - 1 || d.age % 5 === 0
  )

  return (
    <div>
      <div className="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-sans text-[12px] text-[#5b6a71]">
        <div className="flex items-center gap-1.5">
          <svg width="24" height="8"><line x1="0" y1="4" x2="24" y2="4" stroke="#1d7682" strokeWidth="2.5" strokeLinecap="round" /></svg>
          Projected balance
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="24" height="8"><line x1="0" y1="4" x2="24" y2="4" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 3" /></svg>
          Total contributed + AT&amp;T match
        </div>
      </div>

      <svg viewBox={`0 0 ${VBW} ${VBH}`} className="w-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="attLineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d7682" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1d7682" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
          const y = PAD_T + H - pct * H
          return (
            <g key={i}>
              <line x1={PAD_L} y1={y} x2={PAD_L + W} y2={y} stroke="#E2E8F0" strokeWidth="1" />
              <text x={PAD_L - 6} y={y + 4} textAnchor="end" fontSize="10" fill="#9CA3AF" fontFamily="sans-serif">
                {fmtAx(maxBal * pct)}
              </text>
            </g>
          )
        })}

        <line x1={PAD_L} y1={PAD_T + H} x2={PAD_L + W} y2={PAD_T + H} stroke="#E2E8F0" strokeWidth="1" />

        {xTicks.map(d => (
          <text key={d.age} x={toX(d.age)} y={PAD_T + H + 16} textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="sans-serif">
            {d.age}
          </text>
        ))}

        <path d={areaPath} fill="url(#attLineGrad)" />
        <polyline points={moneyInPts} fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 3" />
        <polyline points={balPts} fill="none" stroke="#1d7682" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={toX(last.age)} cy={toY(last.balance)} r="4" fill="#1d7682" />
        <text x={toX(last.age) - 6} y={toY(last.balance) - 10} textAnchor="end" fontSize="11" fontWeight="600" fill="#1d7682" fontFamily="sans-serif">
          {fmtAx(last.balance)}
        </text>
      </svg>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// 5. AT&T 401(k) PROJECTION
// ═══════════════════════════════════════════════════════════════════

function FourO1kCalc({ onCalculate }: { onCalculate: () => void }) {
  const [inputs, setInputs] = useState({
    currentBalance: 250000,
    salary: 120000,
    contributionPct: 6,
    employeeType: 'management' as 'union' | 'management',
    currentAge: 45,
    retireAge: 62,
    annualReturn: 7,
    catchUp: false,
    superCatchUp: false,
  })
  const [results, setResults] = useState<{
    projectedBalance: number
    totalContributions: number
    totalMatch: number
    totalGrowth: number
    yearByYear: { age: number; contribution: number; match: number; balance: number }[]
  } | null>(null)

  function calculate() {
    const years = inputs.retireAge - inputs.currentAge
    if (years <= 0) return

    const annualLimit2026 = LIMIT_401K_EMPLOYEE_DEFERRAL
    const catchUpLimit = LIMIT_401K_CATCHUP_50
    const superCatchUpLimit = LIMIT_401K_SUPER_CATCHUP_60_63
    const matchRate = 0.80
    const matchablePct = inputs.employeeType === 'management' ? 0.06 : 0.06

    let balance = inputs.currentBalance
    let totalContributions = 0
    let totalMatch = 0
    const yearByYear: { age: number; contribution: number; match: number; balance: number }[] = []

    for (let y = 0; y < years; y++) {
      const age = inputs.currentAge + y
      const salary = inputs.salary

      // Calculate contribution
      let contribution = salary * (inputs.contributionPct / 100)
      let limit = annualLimit2026
      if (age >= 60 && age <= 63) {
        limit += superCatchUpLimit
      } else if (age >= 50) {
        limit += catchUpLimit
      }
      contribution = Math.min(contribution, limit)

      // Match: 80% on first 6% of pay
      const matchableContribution = Math.min(contribution, salary * matchablePct)
      const match = matchableContribution * matchRate

      totalContributions += contribution
      totalMatch += match
      balance = (balance + contribution + match) * (1 + inputs.annualReturn / 100)

      yearByYear.push({ age: age + 1, contribution, match, balance })
    }

    const totalGrowth = balance - inputs.currentBalance - totalContributions - totalMatch

    setResults({ projectedBalance: balance, totalContributions, totalMatch, totalGrowth, yearByYear })
    onCalculate()
  }

  return (
    <div>
      <div className="mb-[24px]">
        <h2 className="font-serif text-[24px] md:text-[28px] text-[#333333] font-normal">AT&amp;T 401(k) Projection</h2>
        <p className="font-sans text-[14px] text-[#5b6a71] mt-[4px]">
          Project your AT&amp;T 401(k) savings with the 80% employer match on basic contributions. Includes catch-up and super catch-up provisions.
        </p>
      </div>

      <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-[24px] md:p-[32px] mb-[24px]">
        <div className="mb-[20px]">
          <p className={labelClass}>Employee Type</p>
          <div className="grid grid-cols-2 gap-[8px]">
            <button onClick={() => setInputs(p => ({ ...p, employeeType: 'management' }))} className={`py-[10px] px-[12px] rounded-[8px] border-2 font-sans text-[13px] font-medium transition-all ${inputs.employeeType === 'management' ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#1d7682]' : 'border-[#E2E8F0] text-[#5b6a71] hover:border-[#1d7682]/40'}`}>
              Management
            </button>
            <button onClick={() => setInputs(p => ({ ...p, employeeType: 'union' }))} className={`py-[10px] px-[12px] rounded-[8px] border-2 font-sans text-[13px] font-medium transition-all ${inputs.employeeType === 'union' ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#1d7682]' : 'border-[#E2E8F0] text-[#5b6a71] hover:border-[#1d7682]/40'}`}>
              Union (CWA / IBEW)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[16px]">
          <div>
            <label className={labelClass}>Current 401(k) Balance</label>
            <input type="number" min={0} value={inputs.currentBalance} onChange={e => setInputs(p => ({ ...p, currentBalance: +e.target.value }))} className={inputBase} />
          </div>
          <div>
            <label className={labelClass}>Annual Salary</label>
            <input type="number" min={0} value={inputs.salary} onChange={e => setInputs(p => ({ ...p, salary: +e.target.value }))} className={inputBase} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mb-[16px]">
          <div>
            <label className={labelClass}>Your Contribution (%)</label>
            <input type="number" min={0} max={75} step={1} value={inputs.contributionPct} onChange={e => setInputs(p => ({ ...p, contributionPct: +e.target.value }))} className={inputBase} />
            <p className="font-sans text-[11px] text-[#5b6a71] mt-[2px]">Match applies to first 6%</p>
          </div>
          <div>
            <label className={labelClass}>Current Age</label>
            <input type="number" min={20} max={70} value={inputs.currentAge} onChange={e => setInputs(p => ({ ...p, currentAge: +e.target.value }))} className={inputBase} />
          </div>
          <div>
            <label className={labelClass}>Target Retirement Age</label>
            <input type="number" min={50} max={70} value={inputs.retireAge} onChange={e => setInputs(p => ({ ...p, retireAge: +e.target.value }))} className={inputBase} />
          </div>
        </div>

        <div className="mb-[24px]">
          <label className={labelClass}>Expected Annual Return (%)</label>
          <input type="number" min={0} max={15} step={0.5} value={inputs.annualReturn} onChange={e => setInputs(p => ({ ...p, annualReturn: +e.target.value }))} className={`${inputBase} max-w-[200px]`} />
        </div>

        <button onClick={calculate} className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white font-sans text-[15px] font-semibold py-[16px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[1px] transition-all duration-200">
          Project 401(k) Growth
        </button>
      </div>

      {results && (
        <div className="space-y-[16px] animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[12px]">
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} text-[#1d7682]`}>{fmt(results.projectedBalance)}</p>
                <p className={metricLabel}>Projected Balance</p>
              </div>
            </div>
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} text-[#2E5D4B]`}>{fmt(results.totalMatch)}</p>
                <p className={metricLabel}>Total AT&amp;T Match</p>
              </div>
            </div>
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} text-[#5b6a71]`}>{fmt(results.totalContributions)}</p>
                <p className={metricLabel}>Your Contributions</p>
              </div>
            </div>
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} text-[#b8860b]`}>{fmt(results.totalGrowth)}</p>
                <p className={metricLabel}>Investment Growth</p>
              </div>
            </div>
          </div>

          {/* Line chart */}
          <div className={resultCardClass}>
            <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[4px] uppercase tracking-[0.05em]">Balance Growth Over Time</h3>
            <p className="font-sans text-[12px] text-[#5b6a71] mb-[16px]">
              The gap between the two lines is investment growth — money you never contributed but earned through compounding.
            </p>
            <FourO1kLineChart yearByYear={results.yearByYear} startingBalance={inputs.currentBalance} />
          </div>

          {/* Match Info */}
          <div className={`${resultCardClass} bg-[#1d7682]/5`}>
            <p className="font-sans text-[14px] text-[#333333]">
              <strong>AT&amp;T Match:</strong> 80% of your basic contribution (first 6% of salary). Match is invested in AT&amp;T shares regardless of your investment selections.
              {inputs.currentAge >= 50 && <><br /><strong>Catch-Up Eligible:</strong> Age 50+ allows an additional $8,000/year. Ages 60-63 qualify for the super catch-up of $11,250/year.</>}
            </p>
          </div>

          {/* Growth Table */}
          <div className={resultCardClass}>
            <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[12px] uppercase tracking-[0.05em]">Year-by-Year Projection</h3>
            <div className="overflow-x-auto max-h-[300px] overflow-y-auto">
              <table className="w-full text-[13px] font-sans">
                <thead className="sticky top-0 bg-white">
                  <tr className="text-left text-[#5b6a71] border-b border-[#E2E8F0]">
                    <th className="py-[8px] pr-[12px]">Age</th>
                    <th className="py-[8px] pr-[12px]">Your Contribution</th>
                    <th className="py-[8px] pr-[12px]">AT&amp;T Match</th>
                    <th className="py-[8px]">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {results.yearByYear.map(row => (
                    <tr key={row.age} className="border-b border-[#F1F5F9]">
                      <td className="py-[6px] pr-[12px] font-medium">{row.age}</td>
                      <td className="py-[6px] pr-[12px]">{fmt(row.contribution)}</td>
                      <td className="py-[6px] pr-[12px] text-[#2E5D4B]">{fmt(row.match)}</td>
                      <td className="py-[6px] font-semibold">{fmt(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// 6. RETIREMENT INCOME GAP ANALYSIS
// ═══════════════════════════════════════════════════════════════════

function IncomeGapCalc({ onCalculate }: { onCalculate: () => void }) {
  const [inputs, setInputs] = useState({
    currentSalary: 120000,
    targetReplacementPct: 80,
    monthlyPension: 2500,
    monthlySocialSecurity: 2200,
    monthlyOtherIncome: 0,
    totalSavings: 500000,
    withdrawalRate: 4,
  })
  const [results, setResults] = useState<{
    targetMonthly: number
    totalMonthlyIncome: number
    monthlyGap: number
    annualGap: number
    savingsIncome: number
    coveragePct: number
    yearsOfSavings: number
  } | null>(null)

  function calculate() {
    const targetMonthly = (inputs.currentSalary * (inputs.targetReplacementPct / 100)) / 12
    const savingsIncome = (inputs.totalSavings * (inputs.withdrawalRate / 100)) / 12
    const totalMonthlyIncome = inputs.monthlyPension + inputs.monthlySocialSecurity + inputs.monthlyOtherIncome + savingsIncome
    const monthlyGap = targetMonthly - totalMonthlyIncome
    const annualGap = monthlyGap * 12
    const coveragePct = (totalMonthlyIncome / targetMonthly) * 100
    const yearsOfSavings = totalMonthlyIncome > 0 ? inputs.totalSavings / (savingsIncome * 12) : 0

    setResults({ targetMonthly, totalMonthlyIncome, monthlyGap, annualGap, savingsIncome, coveragePct, yearsOfSavings })
    onCalculate()
  }

  return (
    <div>
      <div className="mb-[24px]">
        <h2 className="font-serif text-[24px] md:text-[28px] text-[#333333] font-normal">Retirement Income Gap Analysis</h2>
        <p className="font-sans text-[14px] text-[#5b6a71] mt-[4px]">
          See if your AT&amp;T pension, 401(k), and Social Security cover the retirement income you need.
        </p>
      </div>

      <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-[24px] md:p-[32px] mb-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[16px]">
          <div>
            <label className={labelClass}>Current Annual Salary</label>
            <input type="number" min={0} value={inputs.currentSalary} onChange={e => setInputs(p => ({ ...p, currentSalary: +e.target.value }))} className={inputBase} />
          </div>
          <div>
            <label className={labelClass}>Target Income Replacement (%)</label>
            <input type="number" min={50} max={100} value={inputs.targetReplacementPct} onChange={e => setInputs(p => ({ ...p, targetReplacementPct: +e.target.value }))} className={inputBase} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mb-[16px]">
          <div>
            <label className={labelClass}>Monthly AT&amp;T Pension</label>
            <input type="number" min={0} value={inputs.monthlyPension} onChange={e => setInputs(p => ({ ...p, monthlyPension: +e.target.value }))} className={inputBase} />
          </div>
          <div>
            <label className={labelClass}>Monthly Social Security</label>
            <input type="number" min={0} value={inputs.monthlySocialSecurity} onChange={e => setInputs(p => ({ ...p, monthlySocialSecurity: +e.target.value }))} className={inputBase} />
          </div>
          <div>
            <label className={labelClass}>Other Monthly Income</label>
            <input type="number" min={0} value={inputs.monthlyOtherIncome} onChange={e => setInputs(p => ({ ...p, monthlyOtherIncome: +e.target.value }))} className={inputBase} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[24px]">
          <div>
            <label className={labelClass}>Total Retirement Savings (401k + IRA)</label>
            <input type="number" min={0} value={inputs.totalSavings} onChange={e => setInputs(p => ({ ...p, totalSavings: +e.target.value }))} className={inputBase} />
          </div>
          <div>
            <label className={labelClass}>Safe Withdrawal Rate (%)</label>
            <input type="number" min={2} max={6} step={0.5} value={inputs.withdrawalRate} onChange={e => setInputs(p => ({ ...p, withdrawalRate: +e.target.value }))} className={inputBase} />
          </div>
        </div>

        <button onClick={calculate} className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white font-sans text-[15px] font-semibold py-[16px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[1px] transition-all duration-200">
          Analyze Income Gap
        </button>
      </div>

      {results && (
        <div className="space-y-[16px] animate-fade-in">
          {/* Coverage meter */}
          <div className={`${resultCardClass} text-center`}>
            <p className={`font-sans text-[48px] font-bold ${results.coveragePct >= 100 ? 'text-[#2E5D4B]' : results.coveragePct >= 80 ? 'text-[#b8860b]' : 'text-[#8B2E2E]'}`}>
              {Math.round(results.coveragePct)}%
            </p>
            <p className={metricLabel}>Income Replacement Coverage</p>
            <div className="w-full bg-[#E2E8F0] rounded-full h-[12px] mt-[12px] overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${results.coveragePct >= 100 ? 'bg-[#2E5D4B]' : results.coveragePct >= 80 ? 'bg-[#b8860b]' : 'bg-[#8B2E2E]'}`}
                style={{ width: `${Math.min(results.coveragePct, 100)}%` }}
              />
            </div>
          </div>

          {/* Income Breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[12px]">
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} text-[#333333]`}>{fmtMo(results.targetMonthly)}</p>
                <p className={metricLabel}>Target Monthly</p>
              </div>
            </div>
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} text-[#1d7682]`}>{fmtMo(results.totalMonthlyIncome)}</p>
                <p className={metricLabel}>Total Income</p>
              </div>
            </div>
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} ${results.monthlyGap <= 0 ? 'text-[#2E5D4B]' : 'text-[#8B2E2E]'}`}>
                  {results.monthlyGap <= 0 ? '+' : '-'}{fmtMo(Math.abs(results.monthlyGap))}
                </p>
                <p className={metricLabel}>{results.monthlyGap <= 0 ? 'Monthly Surplus' : 'Monthly Gap'}</p>
              </div>
            </div>
          </div>

          {/* Income Sources Breakdown */}
          <div className={resultCardClass}>
            <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[16px] uppercase tracking-[0.05em]">Income Sources</h3>
            {[
              { label: 'AT&T Pension', value: inputs.monthlyPension, color: '#1d7682' },
              { label: 'Social Security', value: inputs.monthlySocialSecurity, color: '#2E5D4B' },
              { label: 'Savings Withdrawals', value: results.savingsIncome, color: '#b8860b' },
              ...(inputs.monthlyOtherIncome > 0 ? [{ label: 'Other Income', value: inputs.monthlyOtherIncome, color: '#5b6a71' }] : []),
            ].map(source => (
              <div key={source.label} className="mb-[12px]">
                <div className="flex justify-between mb-[4px]">
                  <span className="font-sans text-[13px] text-[#333333]">{source.label}</span>
                  <span className="font-sans text-[13px] font-semibold">{fmtMo(source.value)}</span>
                </div>
                <div className="w-full bg-[#E2E8F0] rounded-full h-[8px] overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${Math.min((source.value / results.targetMonthly) * 100, 100)}%`, backgroundColor: source.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// 7. MODIFIED RULE OF 75 ELIGIBILITY CHECK
// ═══════════════════════════════════════════════════════════════════

const MOD75_BREAKPOINTS = [
  { minAge: 65, minService: 10, anyAge: false },
  { minAge: 55, minService: 20, anyAge: false },
  { minAge: 50, minService: 25, anyAge: false },
  { minAge: 0,  minService: 30, anyAge: true  },
] as const

const MOD75_LABELS = [
  { ageLabel: '65+', serviceLabel: '10 years' },
  { ageLabel: '55+', serviceLabel: '20 years' },
  { ageLabel: '50+', serviceLabel: '25 years' },
  { ageLabel: 'Any', serviceLabel: '30 years' },
]

// Penalty table rows: ages 50–55
const PRE55_PENALTY_ROWS = [55, 54, 53, 52, 51, 50].map(age => ({
  age,
  yearsUnder55: age >= 55 ? 0 : 55 - age,
  penaltyPct: age >= 55 ? 0 : (55 - age) * 6,
  keepPct: age >= 55 ? 100 : 100 - (55 - age) * 6,
}))

function Mod75Calc({ onCalculate }: { onCalculate: () => void }) {
  const [inputs, setInputs] = useState({
    currentAge: 52,
    yearsOfService: 20,
    employeeType: 'union' as 'union' | 'management',
  })

  const [results, setResults] = useState<{
    isEligible: boolean
    metIdxs: number[]
    nextTarget: { idx: number; yearsNeeded: number; ageAt: number; serviceAt: number } | null
    pre55PenaltyPct: number
    penaltyFree: boolean
  } | null>(null)

  function calculate() {
    const { currentAge, yearsOfService, employeeType } = inputs

    const metIdxs: number[] = []
    MOD75_BREAKPOINTS.forEach((bp, i) => {
      const ageOk = bp.anyAge || currentAge >= bp.minAge
      const svcOk = yearsOfService >= bp.minService
      if (ageOk && svcOk) metIdxs.push(i)
    })
    const isEligible = metIdxs.length > 0

    // Closest unmet breakpoint (1 year of work = +1 age and +1 service)
    let nextTarget: { idx: number; yearsNeeded: number; ageAt: number; serviceAt: number } | null = null
    MOD75_BREAKPOINTS.forEach((bp, i) => {
      if (metIdxs.includes(i)) return
      const yearsToAge = bp.anyAge ? 0 : Math.max(0, bp.minAge - currentAge)
      const yearsToSvc = Math.max(0, bp.minService - yearsOfService)
      const yearsNeeded = Math.max(yearsToAge, yearsToSvc)
      if (nextTarget === null || yearsNeeded < nextTarget.yearsNeeded) {
        nextTarget = { idx: i, yearsNeeded, ageAt: currentAge + yearsNeeded, serviceAt: yearsOfService + yearsNeeded }
      }
    })

    const pre55PenaltyPct = currentAge < 55 ? (55 - currentAge) * 6 : 0
    const penaltyFree =
      (employeeType === 'union' && yearsOfService >= 30) ||
      (isEligible && currentAge >= 55)

    setResults({ isEligible, metIdxs, nextTarget, pre55PenaltyPct, penaltyFree })
    onCalculate()
  }

  return (
    <div>
      <div className="mb-[24px]">
        <h2 className="font-serif text-[24px] md:text-[28px] text-[#333333] font-normal">Modified Rule of 75 — Am I Eligible?</h2>
        <p className="font-sans text-[14px] text-[#5b6a71] mt-[4px]">
          Enter your current age and years of credited service to find out if you qualify for an AT&amp;T service pension — and exactly how close you are to each breakpoint.
        </p>
      </div>

      {/* "Not simple addition" warning — always visible */}
      <div className="bg-amber-50 border border-amber-200 rounded-[10px] p-[16px] mb-[24px]">
        <p className="font-sans text-[13px] text-amber-900 leading-relaxed">
          <strong>Common mistake:</strong> Mod 75 is <em>not</em> age + service = 75. You can only qualify at four specific breakpoints — each row must match straight across, no mixing. Age 53 + 22 years = 75, but does <em>not</em> qualify. You must hit one of the exact combinations in the table below.
        </p>
      </div>

      <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-[24px] md:p-[32px] mb-[24px]">
        <div className="mb-[20px]">
          <p className={labelClass}>Employee Type</p>
          <div className="grid grid-cols-2 gap-[8px]">
            {(['union', 'management'] as const).map(type => (
              <button
                key={type}
                onClick={() => setInputs(p => ({ ...p, employeeType: type }))}
                className={`py-[10px] px-[12px] rounded-[8px] border-2 font-sans text-[13px] font-medium transition-all ${
                  inputs.employeeType === type
                    ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#1d7682]'
                    : 'border-[#E2E8F0] text-[#5b6a71] hover:border-[#1d7682]/40'
                }`}
              >
                {type === 'union' ? 'Union (CWA / IBEW)' : 'Management'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[16px] mb-[24px]">
          <div>
            <label className={labelClass}>Current Age</label>
            <input
              type="number" min={40} max={75}
              value={inputs.currentAge}
              onChange={e => setInputs(p => ({ ...p, currentAge: +e.target.value }))}
              className={inputBase}
            />
          </div>
          <div>
            <label className={labelClass}>Years of Credited Service</label>
            <input
              type="number" min={0} max={50}
              value={inputs.yearsOfService}
              onChange={e => setInputs(p => ({ ...p, yearsOfService: +e.target.value }))}
              className={inputBase}
            />
          </div>
        </div>

        <button
          onClick={calculate}
          className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white font-sans text-[15px] font-semibold py-[16px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[1px] transition-all duration-200"
        >
          Check My Mod 75 Status
        </button>
      </div>

      {results && (
        <div className="space-y-[16px] animate-fade-in">

          {/* Big eligibility status */}
          <div className={`${resultCardClass} text-center py-[32px] ${results.isEligible ? 'bg-[#2E5D4B]/5 border-[#2E5D4B]/40' : 'bg-amber-50 border-amber-200'}`}>
            <div className={`text-[56px] leading-none mb-[8px] ${results.isEligible ? 'text-[#2E5D4B]' : 'text-amber-500'}`}>
              {results.isEligible ? '✓' : '✗'}
            </div>
            <p className={`font-serif text-[26px] font-semibold ${results.isEligible ? 'text-[#2E5D4B]' : 'text-[#333333]'}`}>
              {results.isEligible ? 'Mod 75 Eligible' : 'Not Yet Mod 75 Eligible'}
            </p>
            <p className="font-sans text-[14px] text-[#5b6a71] mt-[6px]">
              Age {inputs.currentAge} · {inputs.yearsOfService} years of service
            </p>
            {results.isEligible && (
              <p className="font-sans text-[13px] text-[#2E5D4B] mt-[4px] font-medium">
                You qualify for a service pension under the Modified Rule of 75.
              </p>
            )}
          </div>

          {/* Breakpoints table */}
          <div className={resultCardClass}>
            <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[4px] uppercase tracking-[0.05em]">
              The Four Breakpoints — Straight Across, No Diagonal
            </h3>
            <p className="font-sans text-[12px] text-[#5b6a71] mb-[14px]">
              You must meet <strong>both</strong> the age AND service requirement in the same row. Mixing rows does not count.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] font-sans">
                <thead>
                  <tr className="text-left text-[#5b6a71] border-b border-[#E2E8F0] text-[11px] uppercase tracking-[0.06em]">
                    <th className="py-[10px] pr-[12px]">Min Age</th>
                    <th className="py-[10px] pr-[12px]">Min Service</th>
                    <th className="py-[10px] pr-[12px]">Your Age</th>
                    <th className="py-[10px] pr-[12px]">Your Service</th>
                    <th className="py-[10px]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {MOD75_BREAKPOINTS.map((bp, i) => {
                    const met = results.metIdxs.includes(i)
                    const ageMet = bp.anyAge || inputs.currentAge >= bp.minAge
                    const svcMet = inputs.yearsOfService >= bp.minService
                    return (
                      <tr key={i} className={`border-b border-[#F1F5F9] ${met ? 'bg-[#2E5D4B]/5' : ''}`}>
                        <td className={`py-[10px] pr-[12px] font-bold text-[15px] ${ageMet ? 'text-[#2E5D4B]' : 'text-[#8B2E2E]'}`}>
                          {MOD75_LABELS[i].ageLabel}
                        </td>
                        <td className={`py-[10px] pr-[12px] font-bold text-[15px] ${svcMet ? 'text-[#2E5D4B]' : 'text-[#8B2E2E]'}`}>
                          {MOD75_LABELS[i].serviceLabel}
                        </td>
                        <td className={`py-[10px] pr-[12px] text-[14px] ${ageMet ? 'text-[#2E5D4B]' : 'text-[#5b6a71]'}`}>
                          {bp.anyAge ? '—' : inputs.currentAge}
                        </td>
                        <td className={`py-[10px] pr-[12px] text-[14px] ${svcMet ? 'text-[#2E5D4B]' : 'text-[#5b6a71]'}`}>
                          {inputs.yearsOfService}
                        </td>
                        <td className="py-[10px]">
                          <span className={`font-semibold text-[13px] ${met ? 'text-[#2E5D4B]' : 'text-[#8B2E2E]'}`}>
                            {met ? '✓ Qualifies' : '✗ Not yet'}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Next target */}
          {!results.isEligible && results.nextTarget !== null && (
            <div className={`${resultCardClass} border-l-4 border-l-[#1d7682]`}>
              <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[10px] uppercase tracking-[0.05em]">Closest Breakpoint</h3>
              <p className="font-sans text-[16px] text-[#333333] leading-relaxed">
                Work <strong>{results.nextTarget.yearsNeeded} more {results.nextTarget.yearsNeeded === 1 ? 'year' : 'years'}</strong> to reach the{' '}
                <strong>{MOD75_LABELS[results.nextTarget.idx].ageLabel} age · {MOD75_LABELS[results.nextTarget.idx].serviceLabel}</strong> breakpoint —
                at age <strong>{results.nextTarget.ageAt}</strong> with <strong>{results.nextTarget.serviceAt} years</strong> of service.
              </p>
              {results.nextTarget.yearsNeeded === 0 && (
                <p className="font-sans text-[13px] text-[#1d7682] mt-[6px] font-medium">You are right at the threshold — verify your exact credited service date with AT&amp;T HR or NetBenefits.</p>
              )}
            </div>
          )}

          {/* Age Penalty Section */}
          <div className={resultCardClass}>
            <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[10px] uppercase tracking-[0.05em]">Early Retirement Age Penalty</h3>
            <p className="font-sans text-[13px] text-[#5b6a71] mb-[14px] leading-relaxed">
              Mod 75 eligibility and the age penalty are two separate tests. Qualifying for a service pension does not automatically mean you receive the full benefit — you must also be 55 or older (or union with 30+ years) to avoid a reduction.
            </p>

            {results.penaltyFree ? (
              <div className="bg-[#2E5D4B]/5 border border-[#2E5D4B]/30 rounded-[8px] p-[14px]">
                <p className="font-sans text-[14px] font-semibold text-[#2E5D4B] mb-[4px]">✓ No age penalty applies to you.</p>
                <p className="font-sans text-[13px] text-[#2E5D4B]">
                  {inputs.currentAge >= 55 && results.isEligible
                    ? 'You meet the Modified Rule of 75 at age 55 or older — full benefit, no reduction.'
                    : 'Union employees with 30+ years of service receive a full service pension at any age with no age penalty.'}
                </p>
              </div>
            ) : (
              <div className="space-y-[14px]">
                {inputs.currentAge < 55 && (
                  <div className="bg-[#8B2E2E]/5 border border-[#8B2E2E]/20 rounded-[8px] p-[14px]">
                    <p className="font-sans text-[14px] font-semibold text-[#8B2E2E] mb-[4px]">
                      Age penalty: {results.pre55PenaltyPct.toFixed(0)}% reduction if you retire today
                    </p>
                    <p className="font-sans text-[13px] text-[#8B2E2E] leading-relaxed">
                      Retiring at age {inputs.currentAge} — {55 - inputs.currentAge} year{55 - inputs.currentAge !== 1 ? 's' : ''} before the age-55 threshold — triggers a permanent {results.pre55PenaltyPct.toFixed(0)}% reduction.
                      Your monthly benefit would be <strong>{(100 - results.pre55PenaltyPct).toFixed(0)}%</strong> of the unreduced amount.
                    </p>
                    {inputs.employeeType === 'union' && inputs.yearsOfService < 30 && (
                      <p className="font-sans text-[13px] text-[#5b6a71] mt-[6px]">
                        Union tip: reach 30 years of service and this penalty disappears entirely.
                        You need <strong>{30 - inputs.yearsOfService} more {30 - inputs.yearsOfService === 1 ? 'year' : 'years'}</strong>.
                      </p>
                    )}
                  </div>
                )}

                <div className="overflow-x-auto">
                  <p className="font-sans text-[12px] font-semibold text-[#333333] mb-[8px] uppercase tracking-[0.05em]">Age Penalty Schedule (non-union / under 30 years service)</p>
                  <table className="w-full text-[13px] font-sans">
                    <thead>
                      <tr className="text-left text-[#5b6a71] border-b border-[#E2E8F0] text-[11px] uppercase tracking-[0.06em]">
                        <th className="py-[8px] pr-[12px]">Retirement Age</th>
                        <th className="py-[8px] pr-[12px]">Yrs Under 55</th>
                        <th className="py-[8px] pr-[12px]">Age Penalty</th>
                        <th className="py-[8px]">Benefit You Keep</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PRE55_PENALTY_ROWS.map(row => (
                        <tr
                          key={row.age}
                          className={`border-b border-[#F1F5F9] ${row.age === inputs.currentAge ? 'bg-[#1d7682]/5 font-semibold' : ''}`}
                        >
                          <td className="py-[7px] pr-[12px]">Age {row.age}{row.age === inputs.currentAge ? ' ← you' : ''}</td>
                          <td className="py-[7px] pr-[12px] text-[#5b6a71]">{row.yearsUnder55 === 0 ? '—' : row.yearsUnder55}</td>
                          <td className={`py-[7px] pr-[12px] font-medium ${row.penaltyPct > 0 ? 'text-[#8B2E2E]' : 'text-[#2E5D4B]'}`}>
                            {row.penaltyPct === 0 ? 'None' : `-${row.penaltyPct}%`}
                          </td>
                          <td className={`py-[7px] font-semibold ${row.penaltyPct > 0 ? 'text-[#8B2E2E]' : 'text-[#2E5D4B]'}`}>
                            {row.keepPct}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {inputs.employeeType === 'union' && (
                  <p className="font-sans text-[12px] text-[#2E5D4B]">
                    ✓ Union with 30+ years of service: all rows above become 0% penalty — full benefit at any age.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Service Pension vs Vested Pension */}
          <div className={`${resultCardClass} bg-[#FAFAF8]`}>
            <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[10px] uppercase tracking-[0.05em]">Service Pension vs. Vested Pension</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] mb-[10px]">
              <div className="bg-[#2E5D4B]/5 rounded-[8px] p-[14px]">
                <p className="font-sans text-[13px] font-semibold text-[#2E5D4B] mb-[6px]">Service Pension</p>
                <p className="font-sans text-[12px] text-[#333333] leading-relaxed">
                  You are actively employed when you hit a Mod 75 breakpoint. This unlocks early retirement benefits at the reduced or unreduced rate based on your age.
                </p>
              </div>
              <div className="bg-[#8B2E2E]/5 rounded-[8px] p-[14px]">
                <p className="font-sans text-[13px] font-semibold text-[#8B2E2E] mb-[6px]">Vested Pension</p>
                <p className="font-sans text-[12px] text-[#333333] leading-relaxed">
                  You left AT&amp;T before hitting any Mod 75 breakpoint. Benefits are severely reduced. You cannot &ldquo;age into&rdquo; service pension eligibility after separating.
                </p>
              </div>
            </div>
            <p className="font-sans text-[12px] text-[#5b6a71] leading-relaxed">
              <strong>Critical:</strong> Leaving AT&amp;T even one month before you hit a breakpoint locks you into the vested pension calculation permanently — regardless of how old you become afterward. This is one of the most expensive timing mistakes AT&amp;T employees make near retirement.
            </p>
          </div>

        </div>
      )}
    </div>
  )
}
