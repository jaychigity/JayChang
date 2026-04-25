'use client'

import { useState, useMemo, useId } from 'react'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'

// ─────────────────── TYPES ───────────────────

interface Goal {
  id: string
  age: number
  amount: number
  label: string
}

interface CFInputs {
  currentAge: number
  retirementAge: number
  lifeExpectancy: number
  filingStatus: 'single' | 'married'
  // Working years
  annualSalary: number
  salaryGrowth: number      // % per year
  savingsRate: number       // % of salary
  // Retirement income
  portfolioValue: number
  portfolioGrowthRate: number
  annualWithdrawal: number
  ssMonthly: number
  ssClaimAge: number
  pensionMonthly: number
  pensionStartAge: number
  // Expenses
  annualExpenses: number
  inflationRate: number
  // Taxes
  effectiveTaxRate: number
  // Goals
  goals: Goal[]
}

interface CashFlowRow {
  year: number
  age: number
  isRetirement: boolean
  // Inflows
  incomeInflows: number
  plannedDistribution: number
  otherInflows: number
  totalInflows: number
  // Outflows
  expenses: number
  goalsAmount: number
  taxPayment: number
  plannedSaving: number
  totalOutflows: number
  // Summary
  netFlows: number
  portfolioBalance: number
}

// ─────────────────── CALCULATION ───────────────────

function buildCashFlow(inputs: CFInputs): CashFlowRow[] {
  const rows: CashFlowRow[] = []
  const currentYear = new Date().getFullYear()
  let portfolio = inputs.portfolioValue

  for (let age = inputs.currentAge; age <= inputs.lifeExpectancy; age++) {
    const year = currentYear + (age - inputs.currentAge)
    const yearsElapsed = age - inputs.currentAge
    const isRetirement = age >= inputs.retirementAge

    // Salary grows during working years
    const salary = isRetirement
      ? 0
      : inputs.annualSalary * Math.pow(1 + inputs.salaryGrowth / 100, yearsElapsed)

    // Expenses grow with inflation every year
    const expenses =
      inputs.annualExpenses * Math.pow(1 + inputs.inflationRate / 100, yearsElapsed)

    // Social Security
    const ssAnnual =
      age >= inputs.ssClaimAge && inputs.ssMonthly > 0
        ? inputs.ssMonthly * 12
        : 0

    // Pension
    const pensionAnnual =
      age >= inputs.pensionStartAge && inputs.pensionMonthly > 0
        ? inputs.pensionMonthly * 12
        : 0

    const otherInflows = ssAnnual + pensionAnnual

    // Portfolio withdrawal — only in retirement and only if portfolio has funds
    const plannedDistribution = isRetirement
      ? Math.min(inputs.annualWithdrawal, Math.max(0, portfolio))
      : 0

    const incomeInflows = salary
    const totalInflows = incomeInflows + plannedDistribution + otherInflows

    // One-time goals this year
    const goalsAmount = inputs.goals
      .filter(g => g.age === age)
      .reduce((sum, g) => sum + g.amount, 0)

    // Tax: effective rate on taxable income
    // In retirement, SS is ~85% taxable; portfolio draw is partially taxable
    const taxableBase = isRetirement
      ? ssAnnual * 0.85 + pensionAnnual + plannedDistribution * 0.75
      : incomeInflows
    const taxPayment = taxableBase * (inputs.effectiveTaxRate / 100)

    // Savings only while working
    const plannedSaving = isRetirement ? 0 : salary * (inputs.savingsRate / 100)

    const totalOutflows = expenses + goalsAmount + taxPayment + plannedSaving
    const netFlows = totalInflows - totalOutflows

    // Update portfolio balance
    if (isRetirement) {
      portfolio = Math.max(
        0,
        portfolio * (1 + inputs.portfolioGrowthRate / 100) - plannedDistribution
      )
    } else {
      portfolio =
        portfolio * (1 + inputs.portfolioGrowthRate / 100) + plannedSaving
    }

    rows.push({
      year,
      age,
      isRetirement,
      incomeInflows,
      plannedDistribution,
      otherInflows,
      totalInflows,
      expenses,
      goalsAmount,
      taxPayment,
      plannedSaving,
      totalOutflows,
      netFlows,
      portfolioBalance: portfolio,
    })
  }

  return rows
}

// ─────────────────── FORMAT HELPERS ───────────────────

function tbl(n: number): string {
  if (n === 0) return '—'
  const abs = Math.round(Math.abs(n))
  return n < 0 ? `(${abs.toLocaleString()})` : abs.toLocaleString()
}

function fmtFull(n: number): string {
  return '$' + Math.round(n).toLocaleString()
}

// ─────────────────── SUB-COMPONENTS ───────────────────

interface SliderProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  display: string
  onChange: (v: number) => void
  hint?: string
}

function Slider({ label, value, min, max, step, display, onChange, hint }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="mb-4">
      <div className="flex justify-between items-baseline mb-[6px]">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5b6a71]">
          {label}
        </span>
        <span className="font-sans text-[13px] font-bold text-[#1d7682] tabular-nums">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        style={{ '--fill': `${pct}%` } as React.CSSProperties}
        onChange={e => onChange(Number(e.target.value))}
        className="cf-slider w-full"
      />
      {hint && <p className="font-sans text-[10px] text-[#a0b0b6] mt-0.5">{hint}</p>}
    </div>
  )
}

interface SumCardProps {
  label: string
  value: string
  color?: string
  sub?: string
}

function SumCard({ label, value, color = '#333333', sub }: SumCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[#e8e4dc] p-4">
      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#5b6a71] mb-1">
        {label}
      </p>
      <p className="font-serif tabular-nums leading-none" style={{ fontSize: 22, color }}>
        {value}
      </p>
      {sub && <p className="font-sans text-[10px] text-[#a0b0b6] mt-1">{sub}</p>}
    </div>
  )
}

// ─────────────────── DEFAULTS ───────────────────

const DEFAULTS: CFInputs = {
  currentAge: 45,
  retirementAge: 65,
  lifeExpectancy: 90,
  filingStatus: 'married',
  annualSalary: 180000,
  salaryGrowth: 3,
  savingsRate: 15,
  portfolioValue: 800000,
  portfolioGrowthRate: 6,
  annualWithdrawal: 72000,
  ssMonthly: 2800,
  ssClaimAge: 67,
  pensionMonthly: 0,
  pensionStartAge: 65,
  annualExpenses: 90000,
  inflationRate: 2.5,
  effectiveTaxRate: 22,
  goals: [],
}

// ─────────────────── MAIN COMPONENT ───────────────────

export default function CashFlowPlanner() {
  const uid = useId()
  const [inputs, setInputs] = useState<CFInputs>(DEFAULTS)
  const [goalCounter, setGoalCounter] = useState(1)

  const rows = useMemo(() => buildCashFlow(inputs), [inputs])

  const set = (key: keyof Omit<CFInputs, 'goals' | 'filingStatus'>) =>
    (val: number) => setInputs(prev => ({ ...prev, [key]: val }))

  const addGoal = () => {
    const id = `${uid}-${goalCounter}`
    setGoalCounter(c => c + 1)
    setInputs(prev => ({
      ...prev,
      goals: [
        ...prev.goals,
        { id, age: prev.retirementAge, amount: 50000, label: 'Special expense' },
      ],
    }))
  }

  const removeGoal = (id: string) =>
    setInputs(prev => ({ ...prev, goals: prev.goals.filter(g => g.id !== id) }))

  const updateGoal = (id: string, field: keyof Omit<Goal, 'id'>, value: number | string) =>
    setInputs(prev => ({
      ...prev,
      goals: prev.goals.map(g => g.id === id ? { ...g, [field]: value } : g),
    }))

  // Summary stats
  const finalRow = rows[rows.length - 1]
  const retirementRows = rows.filter(r => r.isRetirement)
  const depletionRow = retirementRows.find(r => r.portfolioBalance === 0)
  const totalLifetimeInflows = rows.reduce((s, r) => s + r.totalInflows, 0)
  const totalLifetimeOutflows = rows.reduce((s, r) => s + r.totalOutflows, 0)
  const peakPortfolio = Math.max(...rows.map(r => r.portfolioBalance))

  // Table header cell style helpers
  const thGroup = "font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-center py-2 px-2"
  const th = "font-sans text-[10px] font-semibold text-[#5b6a71] text-right py-2 px-2 whitespace-nowrap align-bottom cursor-default bg-[#F7F4EE]"
  const thLeft = "font-sans text-[10px] font-semibold text-[#5b6a71] text-center py-2 px-2 align-bottom bg-[#F7F4EE]"
  const td = "font-sans text-[12px] text-right tabular-nums py-[7px] px-2 whitespace-nowrap"
  const tdCenter = "font-sans text-[12px] text-center tabular-nums py-[7px] px-2"
  const tdBold = "font-sans text-[12px] font-bold text-right tabular-nums py-[7px] px-2 whitespace-nowrap"

  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

          {/* ─── INPUTS PANEL ─── */}
          <div className="w-full lg:w-[288px] flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-[#e8e4dc] p-5 lg:sticky lg:top-[88px] max-h-[calc(100vh-100px)] overflow-y-auto">

              {/* Personal */}
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-3">
                Personal
              </p>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {([
                  { label: 'Age Now', key: 'currentAge', min: 20, max: 75 },
                  { label: 'Retire At', key: 'retirementAge', min: 45, max: 80 },
                  { label: 'To Age', key: 'lifeExpectancy', min: 70, max: 100 },
                ] as const).map(({ label, key, min, max }) => (
                  <div key={key}>
                    <label className="font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5b6a71] block mb-1">
                      {label}
                    </label>
                    <input
                      type="number"
                      min={min} max={max}
                      value={inputs[key]}
                      onChange={e => setInputs(prev => ({ ...prev, [key]: Math.max(min, Math.min(max, Number(e.target.value))) }))}
                      className="w-full border border-[#e8e4dc] rounded-lg px-2 py-1.5 font-sans text-[13px] text-center text-[#333333] focus:outline-none focus:border-[#1d7682]"
                    />
                  </div>
                ))}
              </div>

              <div className="h-px bg-[#e8e4dc] my-4" />

              {/* Income */}
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-3">
                Income (Working Years)
              </p>

              <Slider label="Annual Salary" value={inputs.annualSalary}
                min={0} max={500000} step={5000}
                display={fmtFull(inputs.annualSalary)}
                onChange={set('annualSalary')} />
              <Slider label="Salary Growth" value={inputs.salaryGrowth}
                min={0} max={8} step={0.5}
                display={`${inputs.salaryGrowth}%`}
                onChange={set('salaryGrowth')} />
              <Slider label="Savings Rate" value={inputs.savingsRate}
                min={0} max={50} step={1}
                display={`${inputs.savingsRate}%`}
                onChange={set('savingsRate')}
                hint="% of salary going to savings" />

              <div className="h-px bg-[#e8e4dc] my-4" />

              {/* Portfolio */}
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-3">
                Portfolio &amp; Withdrawals
              </p>

              <Slider label="Current Portfolio" value={inputs.portfolioValue}
                min={0} max={5000000} step={25000}
                display={fmtFull(inputs.portfolioValue)}
                onChange={set('portfolioValue')} />
              <Slider label="Portfolio Growth Rate" value={inputs.portfolioGrowthRate}
                min={1} max={12} step={0.5}
                display={`${inputs.portfolioGrowthRate}%`}
                onChange={set('portfolioGrowthRate')} />
              <Slider label="Annual Withdrawal" value={inputs.annualWithdrawal}
                min={0} max={300000} step={2500}
                display={fmtFull(inputs.annualWithdrawal)}
                onChange={set('annualWithdrawal')}
                hint="Starting amount, inflation-adjusted" />

              <div className="h-px bg-[#e8e4dc] my-4" />

              {/* Retirement Income */}
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-3">
                Retirement Income
              </p>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5b6a71] block mb-1">
                    SS Monthly
                  </label>
                  <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#5b6a71] text-[12px]">$</span>
                    <input
                      type="number" min={0} max={5000} step={100}
                      value={inputs.ssMonthly}
                      onChange={e => setInputs(prev => ({ ...prev, ssMonthly: Number(e.target.value) }))}
                      className="w-full border border-[#e8e4dc] rounded-lg pl-5 pr-2 py-1.5 font-sans text-[13px] text-right text-[#333333] focus:outline-none focus:border-[#1d7682]"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5b6a71] block mb-1">
                    SS Claim Age
                  </label>
                  <input
                    type="number" min={62} max={70}
                    value={inputs.ssClaimAge}
                    onChange={e => setInputs(prev => ({ ...prev, ssClaimAge: Number(e.target.value) }))}
                    className="w-full border border-[#e8e4dc] rounded-lg px-2 py-1.5 font-sans text-[13px] text-center text-[#333333] focus:outline-none focus:border-[#1d7682]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-2">
                <div>
                  <label className="font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5b6a71] block mb-1">
                    Pension Monthly
                  </label>
                  <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#5b6a71] text-[12px]">$</span>
                    <input
                      type="number" min={0} max={20000} step={100}
                      value={inputs.pensionMonthly}
                      onChange={e => setInputs(prev => ({ ...prev, pensionMonthly: Number(e.target.value) }))}
                      className="w-full border border-[#e8e4dc] rounded-lg pl-5 pr-2 py-1.5 font-sans text-[13px] text-right text-[#333333] focus:outline-none focus:border-[#1d7682]"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5b6a71] block mb-1">
                    Pension Start
                  </label>
                  <input
                    type="number" min={50} max={75}
                    value={inputs.pensionStartAge}
                    onChange={e => setInputs(prev => ({ ...prev, pensionStartAge: Number(e.target.value) }))}
                    className="w-full border border-[#e8e4dc] rounded-lg px-2 py-1.5 font-sans text-[13px] text-center text-[#333333] focus:outline-none focus:border-[#1d7682]"
                  />
                </div>
              </div>

              <div className="h-px bg-[#e8e4dc] my-4" />

              {/* Expenses */}
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-3">
                Expenses
              </p>

              <Slider label="Annual Living Expenses" value={inputs.annualExpenses}
                min={20000} max={500000} step={5000}
                display={fmtFull(inputs.annualExpenses)}
                onChange={set('annualExpenses')} />
              <Slider label="Inflation Rate" value={inputs.inflationRate}
                min={0} max={6} step={0.5}
                display={`${inputs.inflationRate}%`}
                onChange={set('inflationRate')} />
              <Slider label="Effective Tax Rate" value={inputs.effectiveTaxRate}
                min={5} max={45} step={1}
                display={`${inputs.effectiveTaxRate}%`}
                onChange={set('effectiveTaxRate')} />

              <div className="h-px bg-[#e8e4dc] my-4" />

              {/* Goals */}
              <div className="flex items-center justify-between mb-3">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71]">
                  Special Expenses
                </p>
                <button
                  onClick={addGoal}
                  className="font-sans text-[11px] font-semibold text-[#1d7682] hover:text-[#2a9dab] transition-colors"
                >
                  + Add
                </button>
              </div>

              {inputs.goals.length === 0 && (
                <p className="font-sans text-[11px] text-[#a0b0b6] mb-2">
                  Add one-time expenses like a home purchase, college, or travel.
                </p>
              )}

              {inputs.goals.map(g => (
                <div key={g.id} className="bg-[#FAFAF8] border border-[#e8e4dc] rounded-lg p-2.5 mb-2">
                  <div className="flex gap-1.5 mb-1.5">
                    <input
                      type="text"
                      placeholder="Label"
                      value={g.label}
                      onChange={e => updateGoal(g.id, 'label', e.target.value)}
                      className="flex-1 border border-[#e8e4dc] rounded px-2 py-1 font-sans text-[11px] text-[#333333] focus:outline-none focus:border-[#1d7682]"
                    />
                    <button
                      onClick={() => removeGoal(g.id)}
                      className="text-[#e05252] hover:text-[#c03030] font-sans text-[13px] px-1.5"
                      aria-label="Remove goal"
                    >
                      ×
                    </button>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="flex-1">
                      <label className="font-sans text-[9px] uppercase tracking-[0.08em] text-[#a0b0b6] block mb-0.5">Age</label>
                      <input
                        type="number" min={inputs.currentAge} max={inputs.lifeExpectancy}
                        value={g.age}
                        onChange={e => updateGoal(g.id, 'age', Number(e.target.value))}
                        className="w-full border border-[#e8e4dc] rounded px-2 py-1 font-sans text-[11px] text-center text-[#333333] focus:outline-none focus:border-[#1d7682]"
                      />
                    </div>
                    <div className="flex-[2]">
                      <label className="font-sans text-[9px] uppercase tracking-[0.08em] text-[#a0b0b6] block mb-0.5">Amount</label>
                      <div className="relative">
                        <span className="absolute left-1.5 top-1/2 -translate-y-1/2 text-[#5b6a71] text-[11px]">$</span>
                        <input
                          type="number" min={0} step={1000}
                          value={g.amount}
                          onChange={e => updateGoal(g.id, 'amount', Number(e.target.value))}
                          className="w-full border border-[#e8e4dc] rounded pl-4 pr-2 py-1 font-sans text-[11px] text-right text-[#333333] focus:outline-none focus:border-[#1d7682]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── MAIN CONTENT ─── */}
          <div className="flex-1 min-w-0">

            {/* Summary stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              <SumCard
                label="Peak Portfolio"
                value={fmtFull(peakPortfolio)}
                color="#1d7682"
                sub="highest balance projected"
              />
              <SumCard
                label="Portfolio at End"
                value={fmtFull(finalRow?.portfolioBalance ?? 0)}
                color={finalRow?.portfolioBalance > 0 ? '#4bc49a' : '#e05252'}
                sub={`at age ${inputs.lifeExpectancy}`}
              />
              <SumCard
                label={depletionRow ? 'Portfolio Runs Out' : 'Fully Funded'}
                value={depletionRow ? `Age ${depletionRow.age}` : `To ${inputs.lifeExpectancy}`}
                color={depletionRow ? '#e05252' : '#4bc49a'}
                sub={depletionRow ? 'portfolio depleted before end' : 'portfolio sustains full horizon'}
              />
              <SumCard
                label="Net Lifetime Flows"
                value={fmtFull(totalLifetimeInflows - totalLifetimeOutflows)}
                color={totalLifetimeInflows >= totalLifetimeOutflows ? '#4bc49a' : '#e05252'}
                sub="total inflows minus outflows"
              />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-[#e8e4dc] overflow-hidden">
              <div className="px-5 py-4 border-b border-[#e8e4dc] flex items-center justify-between flex-wrap gap-2">
                <div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#1d7682]">
                    Year-by-Year Projection &middot; Ages {inputs.currentAge}–{inputs.lifeExpectancy}
                  </p>
                  <h3 className="font-serif text-[18px] text-[#333333] mt-0.5">Cash Flow Summary</h3>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#f0f9fa' }} />
                    <span className="font-sans text-[11px] text-[#5b6a71]">Retirement years</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#fff5f5' }} />
                    <span className="font-sans text-[11px] text-[#5b6a71]">Portfolio depleted</span>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto" style={{ maxHeight: 520 }}>
                <table className="text-sm border-collapse" style={{ minWidth: 980 }}>
                  <thead className="sticky top-0 z-10">
                    {/* Group header row */}
                    <tr>
                      <th colSpan={2} className="bg-[#F7F4EE] border-b border-[#e8e4dc]" />
                      <th
                        colSpan={4}
                        className={`${thGroup} bg-[#e8f4f6] text-[#1d7682] border-b border-[#e8e4dc] border-r border-[#c5e0e4]`}
                      >
                        Cash Inflows
                      </th>
                      <th
                        colSpan={4}
                        className={`${thGroup} bg-[#fef4ec] text-[#c07a30] border-b border-[#e8e4dc] border-r border-[#f0d9c0]`}
                      >
                        Cash Outflows
                      </th>
                      <th colSpan={2} className="bg-[#F7F4EE] border-b border-[#e8e4dc]" />
                    </tr>
                    {/* Column header row */}
                    <tr className="bg-[#F7F4EE] border-b border-[#e8e4dc]">
                      <th className={`${thLeft} border-r border-[#e8e4dc] w-[52px]`}>Year</th>
                      <th className={`${thLeft} border-r border-[#e8e4dc] w-[40px]`}>Age</th>
                      {/* Inflows */}
                      <th className={`${th} border-r border-[#e8e4dc]`}>Income<br />Inflows</th>
                      <th className={`${th} border-r border-[#e8e4dc]`}>Portfolio<br />Draw</th>
                      <th className={`${th} border-r border-[#e8e4dc]`}>SS &amp; Pension<br />/ Other</th>
                      <th className={`${th} border-r border-[#c5e0e4] font-bold text-[#1d7682]`}>Total<br />Inflows</th>
                      {/* Outflows */}
                      <th className={`${th} border-r border-[#e8e4dc]`}>Living<br />Expenses</th>
                      <th className={`${th} border-r border-[#e8e4dc]`}>Goals &amp;<br />One-time</th>
                      <th className={`${th} border-r border-[#e8e4dc]`}>Tax<br />Payment</th>
                      <th className={`${th} border-r border-[#f0d9c0] font-normal`}>Planned<br />Savings</th>
                      <th className={`${th} border-r border-[#e8e4dc] font-bold text-[#c07a30]`}>Total<br />Outflows</th>
                      {/* Summary */}
                      <th className={`${th} border-r border-[#e8e4dc] font-bold text-[#333333] min-w-[90px]`}>Net<br />Flows</th>
                      <th className={`${th} text-[#333333]`}>Portfolio<br />Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, idx) => {
                      const isDepletion = row.portfolioBalance === 0 && row.isRetirement && row.plannedDistribution === 0
                      const rowBg =
                        isDepletion
                          ? '#fff5f5'
                          : row.isRetirement
                          ? '#f6fcfd'
                          : idx % 2 === 0 ? '#ffffff' : '#FAFAF8'
                      const netColor = row.netFlows >= 0 ? '#333333' : '#e05252'

                      return (
                        <tr
                          key={row.year}
                          style={{ backgroundColor: rowBg }}
                          className="border-b border-[#f0ece5] hover:brightness-[0.97] transition-all"
                        >
                          <td className={`${tdCenter} font-semibold text-[#333333] border-r border-[#e8e4dc]`}>
                            {row.year}
                          </td>
                          <td className={`${tdCenter} border-r border-[#e8e4dc] ${row.age === inputs.retirementAge ? 'font-bold text-[#1d7682]' : 'text-[#5b6a71]'}`}>
                            {row.age}
                            {row.age === inputs.retirementAge && (
                              <span className="ml-0.5 text-[8px] text-[#1d7682] font-bold">RET</span>
                            )}
                          </td>
                          {/* Inflows */}
                          <td className={`${td} border-r border-[#e8e4dc] text-[#333333]`}>{tbl(row.incomeInflows)}</td>
                          <td className={`${td} border-r border-[#e8e4dc] ${row.plannedDistribution > 0 ? 'text-[#2a9dab]' : 'text-[#c5c0b8]'}`}>{tbl(row.plannedDistribution)}</td>
                          <td className={`${td} border-r border-[#e8e4dc] ${row.otherInflows > 0 ? 'text-[#333333]' : 'text-[#c5c0b8]'}`}>{tbl(row.otherInflows)}</td>
                          <td className={`${tdBold} border-r border-[#c5e0e4] text-[#1d7682]`}>{tbl(row.totalInflows)}</td>
                          {/* Outflows */}
                          <td className={`${td} border-r border-[#e8e4dc] text-[#333333]`}>{tbl(row.expenses)}</td>
                          <td className={`${td} border-r border-[#e8e4dc] ${row.goalsAmount > 0 ? 'text-[#c07a30] font-semibold' : 'text-[#c5c0b8]'}`}>{tbl(row.goalsAmount)}</td>
                          <td className={`${td} border-r border-[#e8e4dc] text-[#5b6a71]`}>{tbl(row.taxPayment)}</td>
                          <td className={`${td} border-r border-[#f0d9c0] ${row.plannedSaving > 0 ? 'text-[#4bc49a]' : 'text-[#c5c0b8]'}`}>{tbl(row.plannedSaving)}</td>
                          <td className={`${tdBold} border-r border-[#e8e4dc] text-[#c07a30]`}>{tbl(row.totalOutflows)}</td>
                          {/* Net */}
                          <td
                            className={`${tdBold} border-r border-[#e8e4dc]`}
                            style={{ color: netColor }}
                          >
                            {row.netFlows >= 0 ? tbl(row.netFlows) : `(${Math.round(Math.abs(row.netFlows)).toLocaleString()})`}
                          </td>
                          {/* Portfolio */}
                          <td
                            className={`${tdBold}`}
                            style={{
                              color: row.portfolioBalance === 0
                                ? '#e05252'
                                : row.portfolioBalance === peakPortfolio
                                ? '#4bc49a'
                                : '#333333'
                            }}
                          >
                            {tbl(row.portfolioBalance)}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              {/* Table footnote */}
              <div className="px-5 py-3 border-t border-[#e8e4dc] bg-[#FAFAF8]">
                <p className="font-sans text-[11px] text-[#a0b0b6]">
                  All values in nominal dollars. Expenses grow at your stated inflation rate.
                  Tax is estimated using your effective rate applied to taxable income.
                  Social Security and pension begin at their stated ages regardless of retirement date.
                  Numbers rounded to nearest dollar.
                </p>
              </div>
            </div>

            <CalculatorDisclaimer toolName="cash flow" />
          </div>
        </div>
      </div>

      {/* Slider styles */}
      <style jsx global>{`
        .cf-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          background: linear-gradient(
            to right,
            #1d7682 var(--fill, 0%),
            #e8e4dc var(--fill, 0%)
          );
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
          display: block;
          margin: 3px 0;
        }
        .cf-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          border: 2.5px solid #1d7682;
          box-shadow: 0 1px 4px rgba(0,0,0,0.16);
          cursor: pointer;
          transition: transform 0.1s ease;
        }
        .cf-slider::-webkit-slider-thumb:hover { transform: scale(1.15); }
        .cf-slider::-moz-range-track {
          background: #e8e4dc;
          height: 4px;
          border-radius: 9999px;
        }
        .cf-slider::-moz-range-progress {
          background: #1d7682;
          height: 4px;
          border-radius: 9999px;
        }
        .cf-slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          border: 2.5px solid #1d7682;
          box-shadow: 0 1px 4px rgba(0,0,0,0.16);
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
