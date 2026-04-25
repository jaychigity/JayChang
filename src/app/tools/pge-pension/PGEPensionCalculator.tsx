'use client'

import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'

// ─── Types ───────────────────────────────────────────────────────────────────

type Tab = 'planSelector' | 'finalPay' | 'cashBalance' | 'earlyRetirement' | 'rmsa' | 'match401k'
type EmployeeType = 'union' | 'management' | 'unsure'
type HireEra = 'pre2013' | 'post2013' | 'unsure'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(n: number, decimals = 0) {
  return n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}
function fmtDollar(n: number) {
  return '$' + fmt(Math.round(n))
}
function fmtPct(n: number) {
  return n.toFixed(1) + '%'
}

// ─── Styling constants ────────────────────────────────────────────────────────

const inputCls =
  'w-full px-3 py-2 border border-[#E2E8F0] rounded-lg text-[#333333] bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1d7682]/20 focus:border-[#1d7682]'
const labelCls = 'block font-sans text-[13px] font-medium text-[#5b6a71] mb-1'
const sectionCls = 'bg-white rounded-[10px] border border-[#E8E6E1] p-5 mb-4'
const resultBoxCls = 'bg-[#1d7682]/10 border border-[#1d7682]/20 rounded-[10px] p-5 mb-4'
const resultNumCls = 'font-serif text-[32px] font-bold text-[#1d7682] leading-none'
const resultLabelCls = 'font-sans text-[12px] text-[#5b6a71] mt-1'
const noteBoxCls = 'bg-[#F7F4EE] border border-[#E2E8F0] rounded-[8px] p-4 mb-4'

// ─── Plan Selector ────────────────────────────────────────────────────────────

function PlanSelectorPanel({ onSelectTab }: { onSelectTab: (t: Tab) => void }) {
  const [empType, setEmpType] = useState<EmployeeType | null>(null)
  const [hireEra, setHireEra] = useState<HireEra | null>(null)

  const recommendation: { tab: Tab; label: string; description: string } | null =
    empType && hireEra && empType !== 'unsure' && hireEra !== 'unsure'
      ? hireEra === 'pre2013'
        ? {
            tab: 'finalPay',
            label: 'Final Pay Pension',
            description:
              'Employees hired before January 1, 2013 are typically in the Final Pay plan: a traditional defined benefit formula based on your years of service and final pay. If you made an irrevocable election in 2013 to switch to Cash Balance, use the Cash Balance tab instead. You can verify your plan at mypgebenefits.com or by calling 1-800-700-0057.',
          }
        : {
            tab: 'cashBalance',
            label: 'Cash Balance Pension',
            description:
              'Employees hired on or after January 1, 2013 are in the Cash Balance plan. Your account grows through annual pay credits (5–10% of salary based on age+service points) plus quarterly interest credits tied to the 30-year Treasury rate. The Cash Balance plan offers a lump sum option at retirement that the Final Pay plan generally does not.',
          }
      : empType === 'unsure' || hireEra === 'unsure'
      ? {
          tab: 'cashBalance',
          label: 'Cash Balance (default)',
          description:
            'Not sure? The Cash Balance plan is the most common plan for current PG&E employees. Start here and verify your plan type at mypgebenefits.com.',
        }
      : null

  return (
    <div className="max-w-[720px] mx-auto">
      <div className={noteBoxCls}>
        <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
          PG&amp;E has two pension formulas. Which one you&apos;re in depends primarily on your hire date and whether you
          made an election in 2013. Answer two questions below and we&apos;ll point you to the right calculator.
        </p>
      </div>

      {/* Q1 */}
      <div className={sectionCls}>
        <p className="font-sans text-[13px] font-semibold text-[#333333] mb-3">
          1. Are you union or management?
        </p>
        <div className="flex flex-wrap gap-2">
          {([
            { v: 'union', l: 'Union (IBEW / ESC Local 20)' },
            { v: 'management', l: 'Management / A&T' },
            { v: 'unsure', l: "Not sure" },
          ] as { v: EmployeeType; l: string }[]).map(({ v, l }) => (
            <button
              key={v}
              onClick={() => setEmpType(v)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                empType === v
                  ? 'bg-[#1d7682] text-white'
                  : 'bg-white text-[#5b6a71] border border-[#E2E8F0] hover:border-[#1d7682]'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Q2 */}
      {empType && empType !== 'unsure' && (
        <div className={sectionCls}>
          <p className="font-sans text-[13px] font-semibold text-[#333333] mb-3">
            2. When were you hired by PG&amp;E?
          </p>
          <div className="flex flex-wrap gap-2">
            {([
              { v: 'pre2013', l: 'Before January 1, 2013' },
              { v: 'post2013', l: 'January 2013 or later' },
              { v: 'unsure', l: "Not sure" },
            ] as { v: HireEra; l: string }[]).map(({ v, l }) => (
              <button
                key={v}
                onClick={() => setHireEra(v)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                  hireEra === v
                    ? 'bg-[#1d7682] text-white'
                    : 'bg-white text-[#5b6a71] border border-[#E2E8F0] hover:border-[#1d7682]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Shortcut */}
      {!recommendation && !empType && (
        <button
          onClick={() => { setEmpType('unsure'); setHireEra('unsure') }}
          className="font-sans text-[13px] text-[#1d7682] underline hover:opacity-70"
        >
          Skip: use Cash Balance as default →
        </button>
      )}

      {/* Result */}
      {recommendation && (
        <div className="bg-[#F0F7F8] border border-[#1d7682]/30 rounded-[10px] p-5 mt-2">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#1d7682] mb-1">
            {hireEra === 'unsure' || empType === 'unsure' ? 'Default starting point' : 'Recommended for you'}
          </p>
          <p className="font-serif text-[17px] font-semibold text-[#333333] mb-2">{recommendation.label}</p>
          <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed mb-4">{recommendation.description}</p>
          <button
            onClick={() => onSelectTab(recommendation.tab)}
            className="inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Open this calculator →
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Final Pay Calculator ─────────────────────────────────────────────────────

function FinalPayCalculator() {
  const [empType, setEmpType] = useState<'union' | 'management'>('union')
  const [years, setYears] = useState(25)
  const [finalPay, setFinalPay] = useState(80000)
  const [retirementAge, setRetirementAge] = useState(60)
  const [multiplier, setMultiplier] = useState(1.6)

  // Monthly final pay
  const monthlyFinalPay = empType === 'union' ? finalPay / 12 : finalPay / 12

  // Raw monthly benefit (no reduction)
  const rawMonthly = (multiplier / 100) * years * (finalPay / 12)

  // Early retirement reduction
  // 26% at age 55, 0% at age 62 (linear); 30+ years service = no reduction
  let reductionPct = 0
  if (years >= 30 || retirementAge >= 62) {
    reductionPct = 0
  } else if (retirementAge < 55) {
    reductionPct = 100 // not eligible shown as warning
  } else {
    reductionPct = 26 * (62 - retirementAge) / 7
  }

  const factor = retirementAge < 55 ? 0 : (1 - reductionPct / 100)
  const adjustedMonthly = rawMonthly * factor
  const adjustedAnnual = adjustedMonthly * 12

  return (
    <div className="max-w-[720px] mx-auto">
      <div className={noteBoxCls}>
        <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
          <strong className="text-[#333333]">Important:</strong> PG&amp;E does not publicly disclose the exact pension multiplier.
          This calculator uses an estimated default of 1.6% per year of service, typical for large utility DB plans.{' '}
          <strong className="text-[#333333]">Verify your actual rate</strong> by reviewing your Benefits Statement at{' '}
          <span className="text-[#1d7682]">mypgebenefits.com</span> or calling PG&amp;E&apos;s pension center at{' '}
          <span className="text-[#1d7682]">1-800-700-0057</span>.
        </p>
      </div>

      <div className={sectionCls}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Employee Type</label>
            <select value={empType} onChange={e => setEmpType(e.target.value as 'union' | 'management')} className={inputCls}>
              <option value="union">Union (IBEW / ESC Local 20)</option>
              <option value="management">Management / A&T</option>
            </select>
            <p className="font-sans text-[11px] text-[#5b6a71] mt-1">
              {empType === 'union'
                ? 'Final pay = your last 30 days of base pay'
                : 'Final pay = highest 36-consecutive-month average'}
            </p>
          </div>
          <div>
            <label className={labelCls}>Pension Multiplier (%)</label>
            <input
              type="number"
              value={multiplier}
              min={1.0}
              max={2.5}
              step={0.1}
              onChange={e => setMultiplier(parseFloat(e.target.value) || 1.6)}
              className={inputCls}
            />
            <p className="font-sans text-[11px] text-[#5b6a71] mt-1">Default 1.6%, adjust once you confirm your actual rate</p>
          </div>
          <div>
            <label className={labelCls}>Years of Credited Service</label>
            <input
              type="number"
              value={years}
              min={1}
              max={45}
              onChange={e => setYears(parseInt(e.target.value) || 0)}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>
              {empType === 'union' ? 'Final Monthly Base Pay ($)' : 'Highest Annual Average Pay ($)'}
            </label>
            <input
              type="number"
              value={finalPay}
              min={20000}
              step={1000}
              onChange={e => setFinalPay(parseInt(e.target.value) || 0)}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Planned Retirement Age</label>
            <input
              type="number"
              value={retirementAge}
              min={50}
              max={70}
              onChange={e => setRetirementAge(parseInt(e.target.value) || 65)}
              className={inputCls}
            />
          </div>
        </div>
      </div>

      {retirementAge < 55 ? (
        <div className="bg-amber-50 border border-amber-200 rounded-[10px] p-5 mb-4">
          <p className="font-sans text-[14px] font-semibold text-amber-800 mb-1">Not Yet Eligible for Early Retirement</p>
          <p className="font-sans text-[13px] text-amber-700">
            PG&amp;E&apos;s minimum early retirement age is 55. Increase the retirement age to 55 or higher to see an estimate.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className={resultBoxCls + ' mb-0'}>
              <p className={resultNumCls}>{fmtDollar(adjustedMonthly)}</p>
              <p className={resultLabelCls}>Estimated monthly benefit</p>
            </div>
            <div className={resultBoxCls + ' mb-0'}>
              <p className={resultNumCls}>{fmtDollar(adjustedAnnual)}</p>
              <p className={resultLabelCls}>Estimated annual benefit</p>
            </div>
            <div className={resultBoxCls + ' mb-0'}>
              <p className={resultNumCls}>{fmtPct(reductionPct)}</p>
              <p className={resultLabelCls}>
                {reductionPct === 0 ? 'No reduction (full benefit)' : 'Early retirement reduction'}
              </p>
            </div>
          </div>

          {reductionPct > 0 && (
            <div className={noteBoxCls}>
              <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
                <strong className="text-[#333333]">Unreduced benefit:</strong> {fmtDollar(rawMonthly)}/month.
                Retiring at age {retirementAge} reduces this by {fmtPct(reductionPct)}.{' '}
                {years >= 30
                  ? 'With 30+ years of service, this reduction is waived.'
                  : `The reduction reaches 0% at age 62${years < 30 ? ` or when you reach 30 years of service (${30 - years} more year${30 - years !== 1 ? 's' : ''})` : ''}.`}
              </p>
            </div>
          )}

          <div className={sectionCls}>
            <p className="font-sans text-[13px] font-semibold text-[#333333] mb-3">
              Reduction schedule by retirement age
            </p>
            <div className="overflow-x-auto">
              <table className="w-full font-sans text-[13px]">
                <thead>
                  <tr className="border-b border-[#E2E8F0]">
                    <th className="text-left py-2 pr-4 text-[#5b6a71] font-medium">Retirement age</th>
                    <th className="text-left py-2 pr-4 text-[#5b6a71] font-medium">Reduction</th>
                    <th className="text-left py-2 text-[#5b6a71] font-medium">Monthly benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {[55, 57, 58, 59, 60, 61, 62, 65].map(age => {
                    let red = 0
                    if (years < 30 && age < 62) {
                      red = 26 * (62 - age) / 7
                    }
                    const mo = rawMonthly * (1 - red / 100)
                    return (
                      <tr key={age} className={`border-b border-[#F1F5F9] ${age === retirementAge ? 'bg-[#1d7682]/5' : ''}`}>
                        <td className="py-2 pr-4 text-[#333333] font-medium">{age === retirementAge ? `→ ${age}` : age}</td>
                        <td className="py-2 pr-4 text-[#333333]">{red === 0 ? '—' : fmtPct(red)}</td>
                        <td className="py-2 text-[#1d7682] font-semibold">{fmtDollar(mo)}/mo</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// ─── Cash Balance Calculator ──────────────────────────────────────────────────

function getPayCreditRate(points: number): number {
  if (points < 40) return 5
  if (points < 50) return 6
  if (points < 60) return 7
  if (points < 70) return 8
  if (points < 80) return 9
  return 10
}

function monthlyAnnuityFactor(retirementAge: number, discountRate = 0.05): number {
  const lifeExpectancy = 87
  const n = Math.max(lifeExpectancy - retirementAge, 10)
  const r = discountRate / 12
  return r / (1 - Math.pow(1 + r, -(n * 12)))
}

function CashBalanceCalculator() {
  const [currentAge, setCurrentAge] = useState(45)
  const [yearsService, setYearsService] = useState(10)
  const [currentBalance, setCurrentBalance] = useState(0)
  const [annualSalary, setAnnualSalary] = useState(90000)
  const [salaryGrowth, setSalaryGrowth] = useState(2)
  const [retirementAge, setRetirementAge] = useState(62)
  const [interestRate, setInterestRate] = useState(4.5)

  const yearsToRetirement = Math.max(retirementAge - currentAge, 0)

  // Project balance year by year
  let balance = currentBalance
  let salary = annualSalary
  const yearlyData: { age: number; credit: number; balance: number; points: number; rate: number }[] = []

  for (let y = 0; y < yearsToRetirement; y++) {
    const age = currentAge + y
    const service = yearsService + y
    const points = age + service
    const rate = getPayCreditRate(points)
    const payCredit = salary * (rate / 100)
    balance = (balance + payCredit) * Math.pow(1 + interestRate / 100, 1)
    salary = salary * (1 + salaryGrowth / 100)
    yearlyData.push({ age, credit: payCredit, balance, points, rate })
  }

  const lumpSum = balance
  const annuityFactor = monthlyAnnuityFactor(retirementAge)
  const monthlyAnnuity = lumpSum * annuityFactor
  const annualAnnuity = monthlyAnnuity * 12

  return (
    <div className="max-w-[720px] mx-auto">
      <div className={noteBoxCls}>
        <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
          The Cash Balance plan accrues pay credits of 5–10% of salary annually based on your age+service points,
          plus quarterly interest credits tied to the <strong className="text-[#333333]">30-year Treasury rate</strong>.
          At retirement, you can take the full balance as a lump sum (rollable to an IRA) or convert to a lifetime annuity.
        </p>
      </div>

      <div className={sectionCls}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Current Age</label>
            <input type="number" value={currentAge} min={22} max={64}
              onChange={e => setCurrentAge(parseInt(e.target.value) || 45)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Years of PG&amp;E Service</label>
            <input type="number" value={yearsService} min={0} max={42}
              onChange={e => setYearsService(parseInt(e.target.value) || 0)} className={inputCls} />
            <p className="font-sans text-[11px] text-[#5b6a71] mt-1">
              Age+Service points today: <strong>{currentAge + yearsService}</strong> → {getPayCreditRate(currentAge + yearsService)}% pay credit
            </p>
          </div>
          <div>
            <label className={labelCls}>Current Account Balance ($)</label>
            <input type="number" value={currentBalance} min={0} step={1000}
              onChange={e => setCurrentBalance(parseInt(e.target.value) || 0)} className={inputCls} />
            <p className="font-sans text-[11px] text-[#5b6a71] mt-1">Find this in your NetBenefits account. Use 0 if unknown.</p>
          </div>
          <div>
            <label className={labelCls}>Annual Base Salary ($)</label>
            <input type="number" value={annualSalary} min={30000} step={1000}
              onChange={e => setAnnualSalary(parseInt(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Annual Salary Growth (%)</label>
            <input type="number" value={salaryGrowth} min={0} max={10} step={0.5}
              onChange={e => setSalaryGrowth(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Planned Retirement Age</label>
            <input type="number" value={retirementAge} min={55} max={70}
              onChange={e => setRetirementAge(parseInt(e.target.value) || 62)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Interest Credit Rate (%), 30-yr Treasury estimate</label>
            <input type="number" value={interestRate} min={1} max={10} step={0.25}
              onChange={e => setInterestRate(parseFloat(e.target.value) || 4.5)} className={inputCls} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className={resultBoxCls + ' mb-0'}>
          <p className={resultNumCls}>{fmtDollar(lumpSum)}</p>
          <p className={resultLabelCls}>Projected lump sum at age {retirementAge}</p>
        </div>
        <div className={resultBoxCls + ' mb-0'}>
          <p className={resultNumCls}>{fmtDollar(monthlyAnnuity)}</p>
          <p className={resultLabelCls}>Equivalent monthly annuity</p>
        </div>
        <div className={resultBoxCls + ' mb-0'}>
          <p className={resultNumCls}>{fmtDollar(annualAnnuity)}</p>
          <p className={resultLabelCls}>Annual annuity income</p>
        </div>
      </div>

      {/* Pay credit rate table */}
      <div className={sectionCls}>
        <p className="font-sans text-[13px] font-semibold text-[#333333] mb-3">Pay credit rate by age+service points</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {[
            { range: '< 40', rate: '5%' },
            { range: '40–49', rate: '6%' },
            { range: '50–59', rate: '7%' },
            { range: '60–69', rate: '8%' },
            { range: '70–79', rate: '9%' },
            { range: '80+', rate: '10%' },
          ].map(({ range, rate }) => {
            const pts = currentAge + yearsService
            const isActive =
              (range === '< 40' && pts < 40) ||
              (range === '40–49' && pts >= 40 && pts < 50) ||
              (range === '50–59' && pts >= 50 && pts < 60) ||
              (range === '60–69' && pts >= 60 && pts < 70) ||
              (range === '70–79' && pts >= 70 && pts < 80) ||
              (range === '80+' && pts >= 80)
            return (
              <div key={range} className={`rounded-lg p-3 text-center ${isActive ? 'bg-[#1d7682] text-white' : 'bg-[#F7F4EE] text-[#333333]'}`}>
                <p className="font-sans text-[11px] opacity-75">{range} pts</p>
                <p className="font-serif text-[18px] font-bold">{rate}</p>
              </div>
            )
          })}
        </div>
        <p className="font-sans text-[11px] text-[#5b6a71] mt-2">
          Your current points: <strong>{currentAge + yearsService}</strong> (highlighted above). Points = age + years of service.
        </p>
      </div>

      {/* Projection table — show every 5 years */}
      {yearlyData.length > 0 && (
        <div className={sectionCls}>
          <p className="font-sans text-[13px] font-semibold text-[#333333] mb-3">Account growth projection</p>
          <div className="overflow-x-auto">
            <table className="w-full font-sans text-[13px]">
              <thead>
                <tr className="border-b border-[#E2E8F0]">
                  <th className="text-left py-2 pr-3 text-[#5b6a71] font-medium">Age</th>
                  <th className="text-left py-2 pr-3 text-[#5b6a71] font-medium">Points</th>
                  <th className="text-left py-2 pr-3 text-[#5b6a71] font-medium">Pay credit</th>
                  <th className="text-left py-2 text-[#5b6a71] font-medium">Balance</th>
                </tr>
              </thead>
              <tbody>
                {yearlyData
                  .filter((_, i) => i % 5 === 4 || i === yearlyData.length - 1)
                  .map(row => (
                    <tr key={row.age} className="border-b border-[#F1F5F9]">
                      <td className="py-2 pr-3 text-[#333333] font-medium">{row.age + 1}</td>
                      <td className="py-2 pr-3 text-[#333333]">{row.points + 1}</td>
                      <td className="py-2 pr-3 text-[#333333]">{row.rate}%</td>
                      <td className="py-2 text-[#1d7682] font-semibold">{fmtDollar(row.balance)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Early Retirement Calculator ──────────────────────────────────────────────

function EarlyRetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(50)
  const [yearsService, setYearsService] = useState(20)
  const [pensionType, setPensionType] = useState<'finalPay' | 'cashBalance'>('finalPay')

  const points = currentAge + yearsService
  const isEligibleNow = currentAge >= 55

  // Years until age 55
  const yearsTo55 = Math.max(55 - currentAge, 0)
  const serviceAt55 = yearsService + yearsTo55
  const ageAt30Years = Math.max(55, currentAge + (30 - yearsService))

  // Build retirement age scenarios
  const scenarios = Array.from({ length: 11 }, (_, i) => {
    const age = 55 + i
    const svc = yearsService + Math.max(age - currentAge, 0)
    let reductionPct = 0
    if (svc >= 30 || age >= 62) {
      reductionPct = 0
    } else {
      reductionPct = 26 * (62 - age) / 7
    }
    const eligible = age >= 55
    return { age, service: svc, reductionPct, eligible }
  })

  return (
    <div className="max-w-[720px] mx-auto">
      <div className={noteBoxCls}>
        <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
          PG&amp;E&apos;s minimum early retirement age is <strong className="text-[#333333]">55</strong>.
          The reduction for retiring before age 62 phases down linearly, reaching 0% at age 62 or when you complete{' '}
          <strong className="text-[#333333]">30 years of credited service</strong>, whichever comes first.
        </p>
      </div>

      <div className={sectionCls}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Current Age</label>
            <input type="number" value={currentAge} min={30} max={70}
              onChange={e => setCurrentAge(parseInt(e.target.value) || 50)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Years of PG&amp;E Service</label>
            <input type="number" value={yearsService} min={0} max={45}
              onChange={e => setYearsService(parseInt(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Pension Type</label>
            <select value={pensionType} onChange={e => setPensionType(e.target.value as 'finalPay' | 'cashBalance')} className={inputCls}>
              <option value="finalPay">Final Pay</option>
              <option value="cashBalance">Cash Balance</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className={resultBoxCls + ' mb-0'}>
          <p className={resultNumCls}>{points}</p>
          <p className={resultLabelCls}>Current age+service points</p>
        </div>
        <div className={resultBoxCls + ' mb-0'}>
          <p className={resultNumCls}>{isEligibleNow ? 'Now' : `Age ${55}`}</p>
          <p className={resultLabelCls}>Earliest retirement eligibility</p>
        </div>
        <div className={resultBoxCls + ' mb-0'}>
          <p className={resultNumCls}>{yearsService >= 30 ? 'Now' : ageAt30Years <= 62 ? `Age ${ageAt30Years}` : 'Age 62'}</p>
          <p className={resultLabelCls}>Age for unreduced benefit</p>
        </div>
      </div>

      {!isEligibleNow && (
        <div className={noteBoxCls}>
          <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
            At your current age of {currentAge}, you&apos;re {55 - currentAge} year{55 - currentAge !== 1 ? 's' : ''} away from
            minimum early retirement eligibility. At age 55 you&apos;ll have approximately {serviceAt55} years of service.
          </p>
        </div>
      )}

      <div className={sectionCls}>
        <p className="font-sans text-[13px] font-semibold text-[#333333] mb-3">
          Reduction by retirement age{' '}
          <span className="text-[#5b6a71] font-normal">(assuming service continues to accumulate)</span>
        </p>
        <div className="overflow-x-auto">
          <table className="w-full font-sans text-[13px]">
            <thead>
              <tr className="border-b border-[#E2E8F0]">
                <th className="text-left py-2 pr-3 text-[#5b6a71] font-medium">Age</th>
                <th className="text-left py-2 pr-3 text-[#5b6a71] font-medium">Service yrs</th>
                <th className="text-left py-2 pr-3 text-[#5b6a71] font-medium">Reduction</th>
                <th className="text-left py-2 text-[#5b6a71] font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map(s => (
                <tr key={s.age} className={`border-b border-[#F1F5F9] ${s.age === currentAge ? 'bg-[#1d7682]/5' : ''}`}>
                  <td className="py-2 pr-3 font-medium text-[#333333]">{s.age}</td>
                  <td className="py-2 pr-3 text-[#333333]">{s.service}</td>
                  <td className="py-2 pr-3 text-[#333333]">
                    {s.reductionPct === 0 ? '—' : fmtPct(s.reductionPct)}
                  </td>
                  <td className="py-2">
                    {s.reductionPct === 0 ? (
                      <span className="text-[#1d7682] font-semibold">Full benefit ✓</span>
                    ) : (
                      <span className="text-[#5b6a71]">{fmtPct(100 - s.reductionPct)} of full</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-sans text-[11px] text-[#5b6a71] mt-2">
          {pensionType === 'cashBalance'
            ? 'Cash Balance accounts continue earning pay and interest credits even if you leave, so retiring early costs you less than with Final Pay.'
            : 'Final Pay accruals stop when you leave. Retiring early both reduces your years of service and applies the early retirement factor.'}
        </p>
      </div>
    </div>
  )
}

// ─── RMSA Estimator ───────────────────────────────────────────────────────────

function RMSAEstimator() {
  const [currentAge, setCurrentAge] = useState(48)
  const [yearsService, setYearsService] = useState(15)
  const [retirementAge, setRetirementAge] = useState(60)
  const [monthlyPremium, setMonthlyPremium] = useState(800)
  const [premiumInflation, setPremiumInflation] = useState(5)

  // Estimate RMSA balance at retirement
  // PG&E contributes ~$7,500/yr before 20 yrs service, ~$10,000/yr after
  // Pre-retirement interest rate: ~8% (from 2009 union proposal)
  const preRetirementRate = 0.08

  let rmsaBalance = 0
  for (let y = 0; y < (retirementAge - currentAge); y++) {
    const svcAtYear = yearsService + y
    const annualContrib = svcAtYear < 20 ? 7500 : 10000
    rmsaBalance = (rmsaBalance + annualContrib) * (1 + preRetirementRate)
  }

  const balanceAtRetirement = rmsaBalance

  // Post-retirement depletion
  // Assume 4% post-retirement interest (conservative)
  const postRetirementRate = 0.04
  let deplBalance = balanceAtRetirement
  let yearsOfCoverage = 0
  let yearlyPremium = monthlyPremium * 12
  for (let y = 0; y < 30; y++) {
    if (deplBalance <= 0) break
    yearlyPremium = monthlyPremium * 12 * Math.pow(1 + premiumInflation / 100, y)
    deplBalance = deplBalance * (1 + postRetirementRate) - yearlyPremium
    if (deplBalance > 0) yearsOfCoverage = y + 1
  }

  const depletionAge = retirementAge + yearsOfCoverage
  const gapToMedicare = Math.max(65 - depletionAge, 0)

  const eligible = retirementAge >= 55 && yearsService + (retirementAge - currentAge) >= 10

  return (
    <div className="max-w-[720px] mx-auto">
      <div className="bg-amber-50 border border-amber-200 rounded-[10px] p-4 mb-4">
        <p className="font-sans text-[13px] text-amber-800 leading-relaxed">
          <strong>Estimated figures only.</strong> RMSA contribution amounts ($7,500/$10,000 tiers) and the 8%
          pre-retirement crediting rate are based on publicly available 2009 union contract proposal documents.
          Your actual plan terms may differ. Verify your RMSA balance and contribution schedule at{' '}
          <span className="font-semibold">mypgebenefits.com</span>.
        </p>
      </div>

      {!eligible && (
        <div className="bg-amber-50 border border-amber-200 rounded-[10px] p-4 mb-4">
          <p className="font-sans text-[13px] text-amber-800">
            RMSA requires retirement at or after age 55 with at least 10 years of service. Adjust the inputs to see an estimate.
          </p>
        </div>
      )}

      <div className={sectionCls}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Current Age</label>
            <input type="number" value={currentAge} min={30} max={64}
              onChange={e => setCurrentAge(parseInt(e.target.value) || 48)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Years of PG&amp;E Service</label>
            <input type="number" value={yearsService} min={0} max={45}
              onChange={e => setYearsService(parseInt(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Planned Retirement Age</label>
            <input type="number" value={retirementAge} min={55} max={70}
              onChange={e => setRetirementAge(parseInt(e.target.value) || 60)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Estimated Monthly Premium at Retirement ($)</label>
            <input type="number" value={monthlyPremium} min={100} step={50}
              onChange={e => setMonthlyPremium(parseInt(e.target.value) || 800)} className={inputCls} />
            <p className="font-sans text-[11px] text-[#5b6a71] mt-1">Your share of PG&amp;E retiree medical premium</p>
          </div>
          <div>
            <label className={labelCls}>Annual Premium Inflation (%)</label>
            <input type="number" value={premiumInflation} min={0} max={15} step={0.5}
              onChange={e => setPremiumInflation(parseFloat(e.target.value) || 5)} className={inputCls} />
          </div>
        </div>
      </div>

      {eligible && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className={resultBoxCls + ' mb-0'}>
              <p className={resultNumCls}>{fmtDollar(balanceAtRetirement)}</p>
              <p className={resultLabelCls}>Est. RMSA balance at retirement</p>
            </div>
            <div className={resultBoxCls + ' mb-0'}>
              <p className={resultNumCls}>{yearsOfCoverage} yrs</p>
              <p className={resultLabelCls}>Years of coverage provided</p>
            </div>
            <div className={`${resultBoxCls} mb-0 ${gapToMedicare > 0 ? 'bg-amber-50 border-amber-200' : ''}`}>
              <p className={`${resultNumCls} ${gapToMedicare > 0 ? 'text-amber-700' : ''}`}>
                {gapToMedicare > 0 ? `${gapToMedicare} yr gap` : 'Covered to 65+'}
              </p>
              <p className={resultLabelCls}>
                {gapToMedicare > 0
                  ? `RMSA depletes at age ${depletionAge}, ${gapToMedicare} yrs before Medicare`
                  : 'RMSA covers to Medicare eligibility'}
              </p>
            </div>
          </div>

          {gapToMedicare > 0 && (
            <div className={noteBoxCls}>
              <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
                <strong className="text-[#333333]">Planning note:</strong> Your RMSA is estimated to run out at age {depletionAge},
                leaving a {gapToMedicare}-year gap before Medicare kicks in at 65. Out-of-pocket coverage for those years will
                need to come from personal savings or other sources. This gap is one of the most important reasons to plan your
                retirement age carefully.
              </p>
            </div>
          )}
        </>
      )}

      <div className={sectionCls}>
        <p className="font-sans text-[13px] font-semibold text-[#333333] mb-2">How the RMSA works</p>
        <div className="space-y-2 text-[#5b6a71] font-sans text-[13px] leading-relaxed">
          <p>• PG&amp;E starts contributing to your RMSA when you turn <strong className="text-[#333333]">45</strong>.</p>
          <p>• Annual contributions increase once you reach <strong className="text-[#333333]">20 years of service</strong>.</p>
          <p>• The account earns interest while you work (estimated at ~8%).</p>
          <p>• You can access it at retirement at age 55+ with 10+ years of service.</p>
          <p>• It can only be used for <strong className="text-[#333333]">PG&amp;E-sponsored retiree medical premiums</strong>, not out-of-pocket costs or non-PG&amp;E coverage.</p>
          <p>• Once depleted, it&apos;s gone. There&apos;s no way to add more.</p>
        </div>
      </div>
    </div>
  )
}

// ─── 401(k) Match Optimizer ───────────────────────────────────────────────────

function Match401kCalculator() {
  const [pensionPlan, setPensionPlan] = useState<'finalPay' | 'cashBalance'>('finalPay')
  const [empType, setEmpType] = useState<'union' | 'management'>('management')
  const [salary, setSalary] = useState(120000)
  const [contribRate, setContribRate] = useState(6)

  // Match structure based on plan + employment type
  const matchRate = pensionPlan === 'cashBalance' ? 0.75 : empType === 'management' ? 0.75 : 0.60
  const matchCap = pensionPlan === 'cashBalance' ? 0.08 : 0.06
  const additionalContrib = pensionPlan === 'cashBalance' ? 0.024 : 0

  const maxMatchableDollars = salary * matchCap
  const maxEmployerMatch = maxMatchableDollars * matchRate
  const additionalEmployerContrib = salary * additionalContrib
  const totalMaxEmployerContrib = maxEmployerMatch + additionalEmployerContrib

  const actualContribDollars = salary * Math.min(contribRate / 100, matchCap)
  const actualMatch = actualContribDollars * matchRate
  const totalActualEmployerContrib = actualMatch + additionalEmployerContrib

  const annualGap = totalMaxEmployerContrib - totalActualEmployerContrib
  const twentyYearValue = annualGap * ((Math.pow(1.07, 20) - 1) / 0.07) // 7% growth

  // IRS limit hit
  const irsLimit = 23500 // 2026
  const payPeriodsToLimit = Math.ceil(irsLimit / (salary * contribRate / 100) * 52)
  const hitsMidYear = salary * (contribRate / 100) > irsLimit && contribRate > 0

  return (
    <div className="max-w-[720px] mx-auto">
      <div className={noteBoxCls}>
        <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
          PG&amp;E&apos;s match structure differs by pension plan type and employment category. Cash Balance participants
          get a higher match cap <em>and</em> an additional 2.4% employer contribution on top. Many employees leave significant
          match dollars behind by not contributing up to the cap or by missing the{' '}
          <strong className="text-[#333333]">spillover election</strong>.
        </p>
      </div>

      <div className={sectionCls}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Pension Plan Type</label>
            <select value={pensionPlan} onChange={e => setPensionPlan(e.target.value as 'finalPay' | 'cashBalance')} className={inputCls}>
              <option value="finalPay">Final Pay (hired before 2013)</option>
              <option value="cashBalance">Cash Balance (hired 2013+)</option>
            </select>
          </div>
          {pensionPlan === 'finalPay' && (
            <div>
              <label className={labelCls}>Employment Type</label>
              <select value={empType} onChange={e => setEmpType(e.target.value as 'union' | 'management')} className={inputCls}>
                <option value="management">Management / A&T</option>
                <option value="union">Union (IBEW / ESC)</option>
              </select>
            </div>
          )}
          <div>
            <label className={labelCls}>Annual Base Salary ($)</label>
            <input type="number" value={salary} min={30000} step={1000}
              onChange={e => setSalary(parseInt(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Your Current Contribution Rate (%)</label>
            <input type="number" value={contribRate} min={0} max={50} step={0.5}
              onChange={e => setContribRate(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
        </div>
      </div>

      {/* Your plan summary */}
      <div className={sectionCls + ' bg-[#F0F7F8]'}>
        <p className="font-sans text-[13px] font-semibold text-[#1d7682] mb-2">Your match structure</p>
        <p className="font-sans text-[13px] text-[#333333]">
          PG&amp;E matches <strong>{(matchRate * 100).toFixed(0)}%</strong> of your contributions up to{' '}
          <strong>{(matchCap * 100).toFixed(0)}%</strong> of salary.
          {pensionPlan === 'cashBalance' && (
            <> PG&amp;E also contributes an additional <strong>2.4%</strong> of your salary regardless of your contribution rate.</>
          )}
        </p>
        <p className="font-sans text-[13px] text-[#5b6a71] mt-1">
          To capture the full match, contribute at least <strong>{(matchCap * 100).toFixed(0)}%</strong> of your salary
          ({fmtDollar(maxMatchableDollars)}/year).
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className={resultBoxCls + ' mb-0'}>
          <p className={resultNumCls}>{fmtDollar(totalActualEmployerContrib)}</p>
          <p className={resultLabelCls}>Current annual employer contribution</p>
        </div>
        <div className={resultBoxCls + ' mb-0'}>
          <p className={resultNumCls}>{fmtDollar(totalMaxEmployerContrib)}</p>
          <p className={resultLabelCls}>Maximum possible employer contribution</p>
        </div>
        <div className={`${resultBoxCls} mb-0 ${annualGap > 0 ? 'bg-amber-50 border-amber-200' : ''}`}>
          <p className={`${resultNumCls} ${annualGap > 0 ? 'text-amber-700' : ''}`}>{fmtDollar(annualGap)}</p>
          <p className={resultLabelCls}>
            {annualGap > 0 ? 'Annual match left on the table' : 'Capturing full match ✓'}
          </p>
        </div>
      </div>

      {annualGap > 0 && (
        <div className={noteBoxCls}>
          <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
            That {fmtDollar(annualGap)}/year gap compounds to approximately{' '}
            <strong className="text-[#333333]">{fmtDollar(twentyYearValue)}</strong> over 20 years (assuming 7% annual
            growth). Increasing your contribution rate to {(matchCap * 100).toFixed(0)}% of salary would capture it.
          </p>
        </div>
      )}

      {/* Spillover section */}
      <div className={sectionCls}>
        <p className="font-sans text-[13px] font-semibold text-[#333333] mb-2">The spillover election</p>
        <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed mb-3">
          If your pre-tax contributions hit the IRS annual limit ({fmtDollar(irsLimit)} in 2026) mid-year, your employer
          match stops unless you&apos;ve set up the <strong className="text-[#333333]">after-tax spillover election</strong>.
          With the spillover in place, your contributions automatically continue as after-tax contributions, and PG&amp;E keeps
          matching. Without it, you forfeit the rest of the year&apos;s match.
        </p>
        <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
          After-tax spillover contributions may also be eligible for rollout to a Roth IRA under the{' '}
          <strong className="text-[#333333]">mega backdoor Roth strategy</strong>, one of the most powerful but underused
          savings tools available to PG&amp;E employees.
        </p>
      </div>
    </div>
  )
}

// ─── Tab Bar ──────────────────────────────────────────────────────────────────

const TABS: { id: Tab; label: string }[] = [
  { id: 'planSelector', label: 'Which Plan Am I In?' },
  { id: 'finalPay', label: 'Final Pay Pension' },
  { id: 'cashBalance', label: 'Cash Balance' },
  { id: 'earlyRetirement', label: 'Early Retirement' },
  { id: 'rmsa', label: 'RMSA Estimator' },
  { id: 'match401k', label: '401(k) Match' },
]

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function PGEPensionCalculator() {
  const [activeTab, setActiveTab] = useState<Tab>('planSelector')

  return (
    <div className="max-w-[960px] mx-auto px-[20px] md:px-[40px] py-[40px]">
      {/* Tab Bar */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-[14px] py-[8px] rounded-full font-sans text-[13px] font-medium whitespace-nowrap transition-all flex-shrink-0 ${
              activeTab === tab.id
                ? 'bg-[#1d7682] text-white shadow-sm'
                : 'bg-white text-[#5b6a71] border border-[#E2E8F0] hover:border-[#1d7682]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Panel */}
      {activeTab === 'planSelector' && <PlanSelectorPanel onSelectTab={setActiveTab} />}
      {activeTab === 'finalPay' && <FinalPayCalculator />}
      {activeTab === 'cashBalance' && <CashBalanceCalculator />}
      {activeTab === 'earlyRetirement' && <EarlyRetirementCalculator />}
      {activeTab === 'rmsa' && <RMSAEstimator />}
      {activeTab === 'match401k' && <Match401kCalculator />}

      {/* Disclaimer */}
      <div className="mt-10">
        <CalculatorDisclaimer
          toolName="PG&E pension and benefits"
          additionalContext="The Final Pay pension multiplier is not publicly disclosed by PG&E. This calculator defaults to an estimated 1.6% per year of service. Verify your actual rate at mypgebenefits.com or by calling 1-800-700-0057. RMSA contribution amounts and crediting rates are estimated from publicly available sources; actual plan terms may differ."
        />
      </div>
    </div>
  )
}
