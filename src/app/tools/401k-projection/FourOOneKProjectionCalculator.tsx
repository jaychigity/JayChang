'use client'

import { useState } from 'react'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'
import {
  LIMIT_401K_EMPLOYEE_DEFERRAL,
  LIMIT_401K_CATCHUP_50,
  LIMIT_401K_SUPER_CATCHUP_60_63,
} from '@/lib/tax-constants-2026'

/* ================================================================
   401(k) Projection Calculator — Company-agnostic
   Works with any employer match structure.
   ================================================================ */

// ── Common match presets ──────────────────────────────────────────
const MATCH_PRESETS = [
  { label: 'Custom', matchRate: 0, matchCap: 0 },
  { label: '50% on first 6% (common)', matchRate: 50, matchCap: 6 },
  { label: '75% on first 6%', matchRate: 75, matchCap: 6 },
  { label: '80% on first 6% (AT&T)', matchRate: 80, matchCap: 6 },
  { label: '100% on first 3%', matchRate: 100, matchCap: 3 },
  { label: '100% on first 4%', matchRate: 100, matchCap: 4 },
  { label: '100% on first 5%', matchRate: 100, matchCap: 5 },
  { label: '100% on first 6%', matchRate: 100, matchCap: 6 },
  { label: 'No employer match', matchRate: 0, matchCap: 0 },
]

// ── Helpers ───────────────────────────────────────────────────────

function fmt(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US')
}

function fmtMo(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US') + '/mo'
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

// ── Growth Line Chart ─────────────────────────────────────────────

function GrowthLineChart({
  yearByYear,
  startingBalance,
  noMatch,
}: {
  yearByYear: { age: number; balance: number; contribution: number; match: number }[]
  startingBalance: number
  noMatch: boolean
}) {
  if (yearByYear.length < 2) return null

  const PAD_L = 64
  const PAD_R = 16
  const PAD_T = 16
  const PAD_B = 28
  const W = 520
  const H = 200
  const VBW = PAD_L + W + PAD_R
  const VBH = PAD_T + H + PAD_B

  const maxBal = Math.max(...yearByYear.map(d => d.balance))
  const minAge = yearByYear[0].age
  const maxAge = yearByYear[yearByYear.length - 1].age
  const ageRange = maxAge - minAge || 1

  const toX = (age: number) => PAD_L + ((age - minAge) / ageRange) * W
  const toY = (val: number) => PAD_T + H - (val / maxBal) * H

  // Projected balance points
  const balPts = yearByYear.map(d => `${toX(d.age).toFixed(1)},${toY(d.balance).toFixed(1)}`).join(' ')

  // "Money in" line — cumulative starting + contributions + match
  let cumIn = startingBalance
  const moneyInPts = yearByYear.map(d => {
    cumIn += d.contribution + (noMatch ? 0 : d.match)
    return `${toX(d.age).toFixed(1)},${toY(cumIn).toFixed(1)}`
  }).join(' ')

  // Area fill path under balance line
  const first = yearByYear[0]
  const last = yearByYear[yearByYear.length - 1]
  const areaPath = [
    `M ${toX(first.age).toFixed(1)},${(PAD_T + H).toFixed(1)}`,
    ...yearByYear.map(d => `L ${toX(d.age).toFixed(1)},${toY(d.balance).toFixed(1)}`),
    `L ${toX(last.age).toFixed(1)},${(PAD_T + H).toFixed(1)}`,
    'Z',
  ].join(' ')

  // Y-axis grid
  const gridSteps = [0, 0.25, 0.5, 0.75, 1]
  function fmtAx(v: number) {
    if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(v % 1_000_000 === 0 ? 0 : 1)}M`
    if (v >= 1_000) return `$${Math.round(v / 1_000)}K`
    return `$${Math.round(v)}`
  }

  // X-axis age ticks (every 5 years + first/last)
  const xTicks = yearByYear.filter((d, i) =>
    i === 0 || i === yearByYear.length - 1 || d.age % 5 === 0
  )

  // Final balance label position
  const finalX = toX(last.age)
  const finalY = toY(last.balance)

  return (
    <div>
      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-1 mb-4 font-sans text-[12px] text-[#5b6a71]">
        <div className="flex items-center gap-1.5">
          <svg width="24" height="8"><line x1="0" y1="4" x2="24" y2="4" stroke="#1d7682" strokeWidth="2.5" strokeLinecap="round" /></svg>
          Projected balance
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="24" height="8"><line x1="0" y1="4" x2="24" y2="4" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 3" /></svg>
          {noMatch ? 'Total contributed' : 'Total contributed + match'}
        </div>
      </div>

      {/* SVG chart */}
      <svg viewBox={`0 0 ${VBW} ${VBH}`} className="w-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="lineGrad401k" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d7682" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1d7682" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Grid lines + Y labels */}
        {gridSteps.map((pct, i) => {
          const y = PAD_T + H - pct * H
          const val = maxBal * pct
          return (
            <g key={i}>
              <line x1={PAD_L} y1={y} x2={PAD_L + W} y2={y} stroke="#E2E8F0" strokeWidth="1" />
              <text x={PAD_L - 6} y={y + 4} textAnchor="end" fontSize="10" fill="#9CA3AF" fontFamily="sans-serif">
                {fmtAx(val)}
              </text>
            </g>
          )
        })}

        {/* X axis */}
        <line x1={PAD_L} y1={PAD_T + H} x2={PAD_L + W} y2={PAD_T + H} stroke="#E2E8F0" strokeWidth="1" />

        {/* X-axis labels */}
        {xTicks.map(d => (
          <text key={d.age} x={toX(d.age)} y={PAD_T + H + 16} textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="sans-serif">
            {d.age}
          </text>
        ))}

        {/* Area fill */}
        <path d={areaPath} fill="url(#lineGrad401k)" />

        {/* "Money in" dashed line */}
        <polyline points={moneyInPts} fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Balance line */}
        <polyline points={balPts} fill="none" stroke="#1d7682" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Endpoint dot + label */}
        <circle cx={finalX} cy={finalY} r="4" fill="#1d7682" />
        <text
          x={finalX - 6}
          y={finalY - 10}
          textAnchor="end"
          fontSize="11"
          fontWeight="600"
          fill="#1d7682"
          fontFamily="sans-serif"
        >
          {fmtAx(last.balance)}
        </text>
      </svg>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────

export default function FourOOneKProjectionCalculator() {
  const [preset, setPreset] = useState(0) // index into MATCH_PRESETS

  const [inputs, setInputs] = useState({
    currentBalance: 75000,
    salary: 120000,
    salaryGrowth: 2,
    contributionPct: 6,
    matchRate: 50,        // employer matches X% of your contribution
    matchCap: 6,          // up to first Y% of salary
    noMatch: false,
    currentAge: 40,
    retireAge: 65,
    annualReturn: 7,
    includeCatchUp: true,
  })

  const [results, setResults] = useState<{
    projectedBalance: number
    totalContributions: number
    totalMatch: number
    totalGrowth: number
    missedMatch: number
    fullMatchContribution: number
    balanceIfFullMatch: number
    safeWithdrawalMonthly: number
    yearByYear: {
      age: number
      salary: number
      contribution: number
      match: number
      balance: number
      limit: number
    }[]
  } | null>(null)

  function handlePresetChange(idx: number) {
    setPreset(idx)
    const p = MATCH_PRESETS[idx]
    if (p.label === 'No employer match') {
      setInputs(prev => ({ ...prev, matchRate: 0, matchCap: 0, noMatch: true }))
    } else if (p.label !== 'Custom') {
      setInputs(prev => ({ ...prev, matchRate: p.matchRate, matchCap: p.matchCap, noMatch: false }))
    } else {
      setInputs(prev => ({ ...prev, noMatch: false }))
    }
  }

  function getAnnualLimit(age: number): number {
    let limit = LIMIT_401K_EMPLOYEE_DEFERRAL
    if (age >= 60 && age <= 63) limit += LIMIT_401K_SUPER_CATCHUP_60_63
    else if (age >= 50) limit += LIMIT_401K_CATCHUP_50
    return limit
  }

  function calculate() {
    const years = inputs.retireAge - inputs.currentAge
    if (years <= 0) return

    let balance = inputs.currentBalance
    let salary = inputs.salary
    let totalContributions = 0
    let totalMatch = 0
    let totalMissedMatch = 0

    const yearByYear: { age: number; salary: number; contribution: number; match: number; balance: number; limit: number }[] = []

    for (let y = 0; y < years; y++) {
      const age = inputs.currentAge + y
      const limit = inputs.includeCatchUp ? getAnnualLimit(age) : LIMIT_401K_EMPLOYEE_DEFERRAL

      // Employee contribution (capped at IRS limit)
      const desiredContrib = salary * (inputs.contributionPct / 100)
      const contribution = Math.min(desiredContrib, limit)

      // Employer match
      let match = 0
      let missedMatch = 0
      if (!inputs.noMatch && inputs.matchCap > 0) {
        const matchableSalary = salary * (inputs.matchCap / 100)
        const matchableContrib = Math.min(contribution, matchableSalary)
        match = matchableContrib * (inputs.matchRate / 100)

        // What they'd get with full match contribution
        const fullMatchContrib = Math.min(matchableSalary, limit)
        const fullMatch = fullMatchContrib * (inputs.matchRate / 100)
        missedMatch = Math.max(0, fullMatch - match)
      }

      totalContributions += contribution
      totalMatch += match
      totalMissedMatch += missedMatch

      balance = (balance + contribution + match) * (1 + inputs.annualReturn / 100)
      salary *= 1 + inputs.salaryGrowth / 100

      yearByYear.push({ age: age + 1, salary, contribution, match, balance, limit })
    }

    const totalGrowth = balance - inputs.currentBalance - totalContributions - totalMatch

    // What balance would look like with full match captured
    let balanceIfFullMatch = inputs.currentBalance
    let salaryFM = inputs.salary
    for (let y = 0; y < years; y++) {
      const age = inputs.currentAge + y
      const limit = inputs.includeCatchUp ? getAnnualLimit(age) : LIMIT_401K_EMPLOYEE_DEFERRAL
      const matchableSalary = !inputs.noMatch ? salaryFM * (inputs.matchCap / 100) : 0
      const fullContrib = Math.min(matchableSalary, limit)
      const fullMatch = !inputs.noMatch ? fullContrib * (inputs.matchRate / 100) : 0
      const desiredContrib = salaryFM * (inputs.contributionPct / 100)
      const myContrib = Math.min(Math.max(desiredContrib, fullContrib), limit)
      balanceIfFullMatch = (balanceIfFullMatch + myContrib + fullMatch) * (1 + inputs.annualReturn / 100)
      salaryFM *= 1 + inputs.salaryGrowth / 100
    }

    // Full match contribution % needed
    const fullMatchContribution = inputs.noMatch ? 0 : inputs.matchCap

    const safeWithdrawalMonthly = (balance * 0.04) / 12

    setResults({
      projectedBalance: balance,
      totalContributions,
      totalMatch,
      totalGrowth,
      missedMatch: totalMissedMatch,
      fullMatchContribution,
      balanceIfFullMatch,
      safeWithdrawalMonthly,
      yearByYear,
    })
  }

  const needsMoreForFullMatch =
    !inputs.noMatch &&
    inputs.matchCap > 0 &&
    inputs.contributionPct < inputs.matchCap

  return (
    <div className="max-w-[960px] mx-auto px-[20px] md:px-[40px] py-[48px] md:py-[64px]">

      {/* Inputs */}
      <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-[24px] md:p-[32px] mb-[24px]">

        {/* Match Structure */}
        <div className="mb-[24px]">
          <p className={labelClass}>Employer Match Structure</p>
          <select
            value={preset}
            onChange={e => handlePresetChange(+e.target.value)}
            className={selectBase}
            style={{ backgroundImage: chevronSvg }}
          >
            {MATCH_PRESETS.map((p, i) => (
              <option key={i} value={i}>{p.label}</option>
            ))}
          </select>
          <p className="font-sans text-[11px] text-[#5b6a71] mt-[4px]">
            Check your summary plan description or benefits portal for your exact formula.
          </p>
        </div>

        {/* Custom match inputs — shown when preset is Custom or to confirm */}
        {!inputs.noMatch && (
          <div className="grid grid-cols-2 gap-[16px] mb-[24px] bg-[#FAFAF8] rounded-[10px] p-[16px]">
            <div>
              <label className={labelClass}>Employer Match Rate (%)</label>
              <input
                type="number" min={0} max={200} step={5}
                value={inputs.matchRate}
                onChange={e => { setPreset(0); setInputs(p => ({ ...p, matchRate: +e.target.value })) }}
                className={inputBase}
              />
              <p className="font-sans text-[11px] text-[#5b6a71] mt-[4px]">
                e.g. 50 = employer matches 50 cents per dollar you contribute
              </p>
            </div>
            <div>
              <label className={labelClass}>Match Cap (first X% of salary)</label>
              <input
                type="number" min={0} max={20} step={1}
                value={inputs.matchCap}
                onChange={e => { setPreset(0); setInputs(p => ({ ...p, matchCap: +e.target.value })) }}
                className={inputBase}
              />
              <p className="font-sans text-[11px] text-[#5b6a71] mt-[4px]">
                e.g. 6 = match applies to your first 6% of salary contributed
              </p>
            </div>
          </div>
        )}

        {/* Contribution warning */}
        {needsMoreForFullMatch && (
          <div className="bg-amber-50 border border-amber-200 rounded-[8px] p-[12px] mb-[20px]">
            <p className="font-sans text-[13px] text-amber-900">
              <strong>You may be leaving match on the table.</strong> Your employer matches up to {inputs.matchCap}% of salary, but you&apos;re currently contributing {inputs.contributionPct}%.
              Contributing at least {inputs.matchCap}% captures the full match.
            </p>
          </div>
        )}

        {/* Main inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[16px]">
          <div>
            <label className={labelClass}>Current 401(k) Balance</label>
            <input
              type="number" min={0}
              value={inputs.currentBalance}
              onChange={e => setInputs(p => ({ ...p, currentBalance: +e.target.value }))}
              className={inputBase}
            />
          </div>
          <div>
            <label className={labelClass}>Annual Salary</label>
            <input
              type="number" min={0}
              value={inputs.salary}
              onChange={e => setInputs(p => ({ ...p, salary: +e.target.value }))}
              className={inputBase}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[16px]">
          <div>
            <label className={labelClass}>Your Contribution (% of salary)</label>
            <input
              type="number" min={0} max={100} step={1}
              value={inputs.contributionPct}
              onChange={e => setInputs(p => ({ ...p, contributionPct: +e.target.value }))}
              className={inputBase}
            />
            {!inputs.noMatch && inputs.matchCap > 0 && (
              <p className="font-sans text-[11px] text-[#5b6a71] mt-[4px]">
                Contribute at least {inputs.matchCap}% to capture the full employer match.
              </p>
            )}
          </div>
          <div>
            <label className={labelClass}>Expected Annual Salary Growth (%)</label>
            <input
              type="number" min={0} max={10} step={0.5}
              value={inputs.salaryGrowth}
              onChange={e => setInputs(p => ({ ...p, salaryGrowth: +e.target.value }))}
              className={inputBase}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mb-[16px]">
          <div>
            <label className={labelClass}>Current Age</label>
            <input
              type="number" min={18} max={70}
              value={inputs.currentAge}
              onChange={e => setInputs(p => ({ ...p, currentAge: +e.target.value }))}
              className={inputBase}
            />
          </div>
          <div>
            <label className={labelClass}>Target Retirement Age</label>
            <input
              type="number" min={50} max={75}
              value={inputs.retireAge}
              onChange={e => setInputs(p => ({ ...p, retireAge: +e.target.value }))}
              className={inputBase}
            />
          </div>
          <div>
            <label className={labelClass}>Expected Annual Return (%)</label>
            <input
              type="number" min={0} max={15} step={0.5}
              value={inputs.annualReturn}
              onChange={e => setInputs(p => ({ ...p, annualReturn: +e.target.value }))}
              className={inputBase}
            />
          </div>
        </div>

        {/* Catch-up toggle */}
        <div className="mb-[28px]">
          <p className={labelClass}>Catch-Up Contributions (2026 IRS limits)</p>
          <div className="grid grid-cols-2 gap-[8px]">
            {[
              { val: true, label: 'Include (ages 50+ and 60–63)' },
              { val: false, label: 'Exclude' },
            ].map(opt => (
              <button
                key={String(opt.val)}
                onClick={() => setInputs(p => ({ ...p, includeCatchUp: opt.val }))}
                className={`py-[10px] px-[12px] rounded-[8px] border-2 font-sans text-[13px] font-medium transition-all ${
                  inputs.includeCatchUp === opt.val
                    ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#1d7682]'
                    : 'border-[#E2E8F0] text-[#5b6a71] hover:border-[#1d7682]/40'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p className="font-sans text-[11px] text-[#5b6a71] mt-[4px]">
            2026: $8,000 extra at 50+, $11,250 extra (super catch-up) at 60–63 per SECURE 2.0.
          </p>
        </div>

        <button
          onClick={calculate}
          className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white font-sans text-[15px] font-semibold py-[16px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[1px] transition-all duration-200"
        >
          Project My 401(k) Growth
        </button>
      </div>

      {results && (
        <div className="space-y-[16px]">

          {/* Summary metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[12px]">
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} text-[#1d7682]`}>{fmt(results.projectedBalance)}</p>
                <p className={metricLabel}>Projected Balance</p>
              </div>
            </div>
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} text-[#2E5D4B]`}>{fmtMo(results.safeWithdrawalMonthly)}</p>
                <p className={metricLabel}>Safe Withdrawal / mo</p>
              </div>
            </div>
            <div className={resultCardClass}>
              <div className={metricClass}>
                <p className={`${metricValue} text-[#2E5D4B]`}>{fmt(results.totalMatch)}</p>
                <p className={metricLabel}>Total Employer Match</p>
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
              The gap between the two lines is investment growth: money you never contributed but earned through compounding.
            </p>
            <GrowthLineChart
              yearByYear={results.yearByYear}
              startingBalance={inputs.currentBalance}
              noMatch={inputs.noMatch}
            />
          </div>

          {/* Build breakdown */}
          <div className={resultCardClass}>
            <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[16px] uppercase tracking-[0.05em]">How Your Balance Builds</h3>
            {[
              { label: 'Starting balance', value: inputs.currentBalance, color: '#5b6a71' },
              { label: 'Your contributions', value: results.totalContributions, color: '#1d7682' },
              { label: 'Employer match', value: results.totalMatch, color: '#2E5D4B' },
              { label: 'Investment growth', value: results.totalGrowth, color: '#b8860b' },
            ].map(row => (
              <div key={row.label} className="mb-[14px]">
                <div className="flex justify-between mb-[4px]">
                  <span className="font-sans text-[13px] text-[#333333]">{row.label}</span>
                  <span className="font-sans text-[13px] font-semibold">{fmt(row.value)}</span>
                </div>
                <div className="w-full bg-[#E2E8F0] rounded-full h-[8px] overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.min((row.value / results.projectedBalance) * 100, 100)}%`,
                      backgroundColor: row.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Missed match callout */}
          {!inputs.noMatch && results.missedMatch > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-[12px] p-[20px]">
              <h3 className="font-sans text-[14px] font-semibold text-amber-900 mb-[8px] uppercase tracking-[0.04em]">
                ⚠ Uncaptured Employer Match
              </h3>
              <p className="font-sans text-[14px] text-amber-900 leading-relaxed mb-[10px]">
                At your current contribution rate of <strong>{inputs.contributionPct}%</strong>, you&apos;re not capturing the full employer match.
                Bumping to <strong>{results.fullMatchContribution}%</strong> would capture an additional{' '}
                <strong>{fmt(results.missedMatch)}</strong> in employer contributions over your career,
                which compounds to a projected balance of <strong>{fmt(results.balanceIfFullMatch)}</strong> instead of <strong>{fmt(results.projectedBalance)}</strong>.
              </p>
              <p className="font-sans text-[13px] text-amber-800">
                Gap: <strong>{fmt(results.balanceIfFullMatch - results.projectedBalance)}</strong> at retirement from uncaptured match alone.
              </p>
            </div>
          )}

          {/* 2026 IRS limits reference */}
          <div className={`${resultCardClass} bg-[#FAFAF8]`}>
            <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[12px] uppercase tracking-[0.05em]">2026 IRS Contribution Limits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px] text-center">
              <div>
                <p className="font-sans text-[22px] font-bold text-[#1d7682]">{fmt(LIMIT_401K_EMPLOYEE_DEFERRAL)}</p>
                <p className="font-sans text-[12px] text-[#5b6a71] mt-[2px]">Under 50 annual limit</p>
              </div>
              <div>
                <p className="font-sans text-[22px] font-bold text-[#1d7682]">{fmt(LIMIT_401K_EMPLOYEE_DEFERRAL + LIMIT_401K_CATCHUP_50)}</p>
                <p className="font-sans text-[12px] text-[#5b6a71] mt-[2px]">Ages 50–59 (+ $8,000 catch-up)</p>
              </div>
              <div>
                <p className="font-sans text-[22px] font-bold text-[#1d7682]">{fmt(LIMIT_401K_EMPLOYEE_DEFERRAL + LIMIT_401K_SUPER_CATCHUP_60_63)}</p>
                <p className="font-sans text-[12px] text-[#5b6a71] mt-[2px]">Ages 60–63 (SECURE 2.0 super catch-up)</p>
              </div>
            </div>
          </div>

          {/* Year-by-year table */}
          <div className={resultCardClass}>
            <h3 className="font-sans text-[14px] font-semibold text-[#333333] mb-[12px] uppercase tracking-[0.05em]">Year-by-Year Projection</h3>
            <div className="overflow-x-auto max-h-[320px] overflow-y-auto">
              <table className="w-full text-[13px] font-sans">
                <thead className="sticky top-0 bg-white">
                  <tr className="text-left text-[#5b6a71] border-b border-[#E2E8F0]">
                    <th className="py-[8px] pr-[12px]">Age</th>
                    <th className="py-[8px] pr-[12px]">Your Contribution</th>
                    {!inputs.noMatch && <th className="py-[8px] pr-[12px]">Employer Match</th>}
                    <th className="py-[8px] pr-[12px]">IRS Limit</th>
                    <th className="py-[8px]">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {results.yearByYear.map(row => (
                    <tr key={row.age} className="border-b border-[#F1F5F9]">
                      <td className="py-[6px] pr-[12px] font-medium">{row.age}</td>
                      <td className="py-[6px] pr-[12px] text-[#1d7682]">{fmt(row.contribution)}</td>
                      {!inputs.noMatch && (
                        <td className="py-[6px] pr-[12px] text-[#2E5D4B]">{fmt(row.match)}</td>
                      )}
                      <td className="py-[6px] pr-[12px] text-[#5b6a71]">{fmt(row.limit)}</td>
                      <td className="py-[6px] font-semibold">{fmt(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-sans text-[11px] text-[#5b6a71] mt-[8px]">
              Safe withdrawal / mo at retirement (4% rule): <strong>{fmtMo(results.safeWithdrawalMonthly)}</strong>
            </p>
          </div>

        </div>
      )}

      <CalculatorDisclaimer
        toolName="401(k) projection"
        variant="default"
        resultSummary={results ? `Projected to ${fmt(results.projectedBalance)} by retirement, with about ${fmtMo(results.safeWithdrawalMonthly)}/month at a 4% safe withdrawal rate. Whether that funds the life you want is the harder question.` : undefined}
        ctaLabel="Connect this to your full plan"
        additionalContext="Projections assume a constant annual return and do not account for market volatility, fees, or changes in tax law. IRS contribution limits are updated annually. Always verify current limits at irs.gov before making contribution decisions."
      />
    </div>
  )
}
