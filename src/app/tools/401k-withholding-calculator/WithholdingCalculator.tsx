'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'
import {
  TAX_YEAR,
  LIMIT_401K_EMPLOYEE_DEFERRAL,
  LIMIT_401K_CATCHUP_50,
  LIMIT_401K_SUPER_CATCHUP_60_63,
  LIMIT_415C_ANNUAL_ADDITIONS,
  FEDERAL_BRACKETS_SINGLE,
  FEDERAL_BRACKETS_MFJ,
  SS_WAGE_BASE,
  SS_TAX_RATE,
  MEDICARE_TAX_RATE,
  getMarginalRate as getMarginalRateFromBrackets,
} from '@/lib/tax-constants-2026'

const LIMITS = {
  year: TAX_YEAR,
  employeeDeferral: LIMIT_401K_EMPLOYEE_DEFERRAL,
  catchUp50: LIMIT_401K_CATCHUP_50,
  catchUp6063: LIMIT_401K_SUPER_CATCHUP_60_63,
  totalAnnualAdditions: LIMIT_415C_ANNUAL_ADDITIONS,
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

function formatPercent(value: number, decimals = 1) {
  return `${value.toFixed(decimals)}%`
}

function estimateFederalTax(annualTaxableIncome: number, filing: 'single' | 'mfj'): number {
  const brackets =
    filing === 'mfj'
      ? FEDERAL_BRACKETS_MFJ.map(b => [b.upTo, b.rate] as [number, number])
      : FEDERAL_BRACKETS_SINGLE.map(b => [b.upTo, b.rate] as [number, number])
  let tax = 0
  let prev = 0
  for (const [top, rate] of brackets) {
    if (annualTaxableIncome <= prev) break
    tax += (Math.min(annualTaxableIncome, top as number) - prev) * (rate as number)
    prev = top as number
  }
  return Math.max(tax, 0)
}

function Tooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      <button
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        style={{
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: '#1d7682',
          color: '#fff',
          fontSize: 11,
          fontWeight: 700,
          border: 'none',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontFamily: 'inherit',
        }}
        aria-label="More info"
      >
        ?
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 24,
            background: '#fff',
            border: '1px solid #E8E6E1',
            borderRadius: 10,
            padding: '12px 14px',
            fontSize: 13,
            color: '#5b6a71',
            width: 280,
            zIndex: 100,
            lineHeight: 1.6,
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          }}
        >
          {text}
        </div>
      )}
    </div>
  )
}

function LabelWithTooltip({ label, tooltip }: { label: string; tooltip?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
      <label className="block font-sans text-[13px] font-semibold text-[#333333]">{label}</label>
      {tooltip && <Tooltip text={tooltip} />}
    </div>
  )
}

function InfoCallout({
  color,
  title,
  body,
}: {
  color: 'teal' | 'amber' | 'red'
  title: string
  body: string
}) {
  const styles = {
    teal: { bg: '#edf7f8', border: '#1d7682', titleColor: '#1d7682', bodyColor: '#2a7d87' },
    amber: { bg: '#fffbf0', border: '#d97706', titleColor: '#b45309', bodyColor: '#92400e' },
    red: { bg: '#fff5f5', border: '#dc2626', titleColor: '#dc2626', bodyColor: '#991b1b' },
  }
  const s = styles[color]
  return (
    <div
      style={{
        background: s.bg,
        border: `1.5px solid ${s.border}`,
        borderRadius: 10,
        padding: '12px 16px',
        marginTop: 12,
      }}
    >
      <p style={{ fontSize: 13, fontWeight: 700, color: s.titleColor, marginBottom: 4 }}>{title}</p>
      <p style={{ fontSize: 13, color: s.bodyColor, lineHeight: 1.6 }}>{body}</p>
    </div>
  )
}

function StatCard({
  label,
  value,
  sub,
  highlight,
}: {
  label: string
  value: string
  sub?: string
  highlight?: boolean
}) {
  return (
    <div
      className="rounded-lg p-5 text-center"
      style={{ background: highlight ? '#1d7682' : '#F7F4EE' }}
    >
      <p
        className="text-[12px] font-semibold uppercase tracking-wider mb-2"
        style={{ color: highlight ? 'rgba(255,255,255,0.8)' : '#1d7682' }}
      >
        {label}
      </p>
      <p
        className="text-[32px] font-bold"
        style={{ color: highlight ? '#fff' : '#333333' }}
      >
        {value}
      </p>
      {sub && (
        <p
          className="text-[13px] mt-1"
          style={{ color: highlight ? 'rgba(255,255,255,0.7)' : '#5b6a71' }}
        >
          {sub}
        </p>
      )}
    </div>
  )
}

function PaystubRow({
  label,
  value,
  type = 'normal',
  bold,
}: {
  label: string
  value: string
  type?: 'normal' | 'deduct' | 'total' | 'add'
  bold?: boolean
}) {
  const colors = {
    normal: '#5b6a71',
    deduct: '#dc2626',
    total: '#333333',
    add: '#1d7682',
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 14px',
        borderBottom: type === 'total' ? 'none' : '1px solid #F0EDE8',
        background: type === 'total' ? '#F7F4EE' : '#fff',
        fontWeight: bold || type === 'total' ? 600 : 400,
        fontSize: 13,
        color: colors[type],
      }}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}

const payFrequencyLabel: Record<number, string> = {
  12: 'Monthly',
  24: 'Semi-monthly',
  26: 'Bi-weekly',
  52: 'Weekly',
}

// PG&E Retirement Savings Plan (RSP) match configurations
const PGE_MATCH_CONFIG = {
  'post-2013': {
    label: 'Hired 2013 or later (Cash Balance pension)',
    matchRate: 0.75,       // $0.75 per $1
    matchCap: 8,           // up to first 8% of pay
    effectiveMatch: 6,     // 75% × 8% = 6%
    description: 'PG&E puts in 75 cents for every dollar you save, up to the first 8% of your pay.',
    example: (salary: number) => {
      const contrib = Math.round(salary * 0.08)
      const match = Math.round(salary * 0.06)
      return `If you make ${salary.toLocaleString()} a year and save 8% (${contrib.toLocaleString()}), PG&E adds ${match.toLocaleString()} on top, that's your employer's match just for saving.`
    },
    tip: 'To capture every dollar of employer match, set your contribution to at least 8%. Anything less and you leave PG&E\'s match on the table.',
  },
  'pre-2013-management': {
    label: 'Hired before 2013: Management',
    matchRate: 0.75,
    matchCap: 6,
    effectiveMatch: 4.5,   // 75% × 6% = 4.5%
    description: 'PG&E puts in 75 cents for every dollar you save, up to the first 6% of your pay.',
    example: (salary: number) => {
      const contrib = Math.round(salary * 0.06)
      const match = Math.round(salary * 0.045)
      return `If you make ${salary.toLocaleString()} a year and save 6% (${contrib.toLocaleString()}), PG&E adds ${match.toLocaleString()} on top, employer match dollars, no strings attached.`
    },
    tip: 'You have the traditional Final Pay pension, which is more generous, but you still want to contribute at least 6% to grab your full match.',
  },
  'pre-2013-union': {
    label: 'Hired before 2013: Union (IBEW / ESC)',
    matchRate: 0.60,
    matchCap: 6,
    effectiveMatch: 3.6,   // 60% × 6% = 3.6%
    description: 'PG&E puts in 60 cents for every dollar you save, up to the first 6% of your pay.',
    example: (salary: number) => {
      const contrib = Math.round(salary * 0.06)
      const match = Math.round(salary * 0.036)
      return `If you make ${salary.toLocaleString()} a year and save 6% (${contrib.toLocaleString()}), PG&E adds ${match.toLocaleString()} on top, that's money you only get if you contribute enough.`
    },
    tip: 'Your union pension is strong, but this match is extra. Make sure you\'re putting in at least 6% so you don\'t miss out.',
  },
} as const

type PGEGroup = keyof typeof PGE_MATCH_CONFIG

// AT&T Retirement Savings Plan match configurations
const ATT_MATCH_CONFIG = {
  'management': {
    label: 'Management (non-bargained)',
    matchRate: 0.80,
    matchCap: 6,
    effectiveMatch: 4.8,   // 80% × 6% = 4.8%
    description: 'AT&T puts in 80 cents for every dollar you save, on the first 6% of your pay. That first 6% is called your "Basic" contribution, and anything above 6% is "Supplementary" and AT&T does not match it.',
    example: (salary: number) => {
      const contrib = Math.round(salary * 0.06)
      const match = Math.round(salary * 0.048)
      return `If you make ${salary.toLocaleString()} a year and save 6% (${contrib.toLocaleString()}), AT&T adds ${match.toLocaleString()} on top. That's your employer's match, but only if you contribute at least 6%.`
    },
    tip: 'Contribute at least 6% to get your full match. Saving more is great for your future, but AT&T won\'t match anything above 6%.',
  },
  'union': {
    label: 'Union / Bargained (CWA or IBEW)',
    matchRate: 0.80,
    matchCap: 6,
    effectiveMatch: 4.8,   // 80% × Basic (typically ~6% equivalent)
    description: 'AT&T puts in 80 cents for every dollar of your "Basic" contribution. For union employees, your Basic amount may be based on your wage scale or job title rather than a flat percentage, but the 80% match ratio is the same.',
    example: (salary: number) => {
      const contrib = Math.round(salary * 0.06)
      const match = Math.round(salary * 0.048)
      return `Using a standard 6% Basic rate: if you make ${salary.toLocaleString()} a year and save ${contrib.toLocaleString()}, AT&T adds about ${match.toLocaleString()}. Check your specific contract for your exact Basic amount.`
    },
    tip: 'Your "Basic" contribution amount is set by your union contract. Make sure you\'re contributing at least that much, and anything less means you\'re leaving match dollars on the table.',
  },
} as const

type ATTGroup = keyof typeof ATT_MATCH_CONFIG

export default function WithholdingCalculator() {
  const [salary, setSalary] = useState(150000)
  const [salaryInput, setSalaryInput] = useState('150,000')
  const [filingStatus, setFilingStatus] = useState<'single' | 'mfj'>('single')
  const [age, setAge] = useState(35)
  const [employerMatchPercent, setEmployerMatchPercent] = useState(4)
  const [employerMatchCap, setEmployerMatchCap] = useState(6)
  const [payFrequency, setPayFrequency] = useState(26)
  const [currentContribPct, setCurrentContribPct] = useState(6)
  const [otherPreTaxPerCheck, setOtherPreTaxPerCheck] = useState(200)

  // Company-specific state
  const [selectedCompany, setSelectedCompany] = useState<'general' | 'pge' | 'att'>('general')
  const [pgeGroup, setPgeGroup] = useState<PGEGroup>('post-2013')
  const [attGroup, setAttGroup] = useState<ATTGroup>('management')

  // Auto-populate match fields when a company group is selected
  useEffect(() => {
    if (selectedCompany === 'pge') {
      const config = PGE_MATCH_CONFIG[pgeGroup]
      setEmployerMatchPercent(config.effectiveMatch)
      setEmployerMatchCap(config.matchCap)
      setPayFrequency(26) // PG&E pays bi-weekly
    } else if (selectedCompany === 'att') {
      const config = ATT_MATCH_CONFIG[attGroup]
      setEmployerMatchPercent(config.effectiveMatch)
      setEmployerMatchCap(config.matchCap)
      setPayFrequency(26) // AT&T pays bi-weekly
    }
  }, [selectedCompany, pgeGroup, attGroup])
  const [midYearMode, setMidYearMode] = useState(false)
  const [alreadyContributed, setAlreadyContributed] = useState(5000)
  const [alreadyContributedInput, setAlreadyContributedInput] = useState('5,000')
  const [paychecksRemaining, setPaychecksRemaining] = useState(18)

  // Auto-calculate paychecks remaining based on today's date
  useEffect(() => {
    const now = new Date()
    const endOfYear = new Date(now.getFullYear(), 11, 31)
    const msRemaining = endOfYear.getTime() - now.getTime()
    const daysRemaining = msRemaining / (1000 * 60 * 60 * 24)
    const checksPerDay = payFrequency / 365
    setPaychecksRemaining(Math.max(1, Math.round(daysRemaining * checksPerDay)))
  }, [payFrequency])

  // Catch-up eligibility
  const isCatchUpEligible = age >= 50
  const isEnhancedCatchUp = age >= 60 && age <= 63
  const catchUpAmount = isEnhancedCatchUp
    ? LIMITS.catchUp6063
    : isCatchUpEligible
    ? LIMITS.catchUp50
    : 0
  const maxDeferral = LIMITS.employeeDeferral + catchUpAmount

  // Per paycheck
  const grossPerCheck = salary / payFrequency
  const maxContribPerCheck = maxDeferral / payFrequency
  const maxWithholdingPct = Math.min((maxDeferral / salary) * 100, 100)

  // Employer match
  const employerMatchContribution = Math.min(
    (salary * employerMatchPercent) / 100,
    (salary * employerMatchCap) / 100
  )

  // Spillover (mega backdoor)
  const totalWithMatch = maxDeferral + employerMatchContribution
  const spilloverRoom = Math.max(LIMITS.totalAnnualAdditions - totalWithMatch, 0)
  const spilloverPercent = (spilloverRoom / salary) * 100

  // Tax calculations
  const marginalRate = getMarginalRateFromBrackets(salary, filingStatus)
  const taxSavings = maxDeferral * marginalRate

  // FICA per paycheck (SS capped at wage base, Medicare uncapped)
  const ssWages = Math.min(salary, SS_WAGE_BASE)
  const ficaPerCheck = (ssWages / payFrequency) * SS_TAX_RATE + grossPerCheck * MEDICARE_TAX_RATE

  // Paycheck comparison: current vs max
  const curContribPerCheck = grossPerCheck * (currentContribPct / 100)
  const curTaxableAnnual = Math.max(salary - currentContribPct / 100 * salary - otherPreTaxPerCheck * payFrequency, 0)
  const curFedTaxPerCheck = estimateFederalTax(curTaxableAnnual, filingStatus) / payFrequency
  const curTakeHome = grossPerCheck - curContribPerCheck - otherPreTaxPerCheck - curFedTaxPerCheck - ficaPerCheck

  const maxTaxableAnnual = Math.max(salary - maxDeferral - otherPreTaxPerCheck * payFrequency, 0)
  const maxFedTaxPerCheck = estimateFederalTax(maxTaxableAnnual, filingStatus) / payFrequency
  const maxTakeHome = grossPerCheck - maxContribPerCheck - otherPreTaxPerCheck - maxFedTaxPerCheck - ficaPerCheck

  const takeHomeDiff = maxTakeHome - curTakeHome
  const contribDiff = maxContribPerCheck - curContribPerCheck
  const taxSavedPerCheck = curFedTaxPerCheck - maxFedTaxPerCheck

  // Mid-year calculations
  const remainingRoom = Math.max(maxDeferral - alreadyContributed, 0)
  const midYearContribPerCheck = paychecksRemaining > 0 ? remainingRoom / paychecksRemaining : 0
  const midYearPct = grossPerCheck > 0 ? (midYearContribPerCheck / grossPerCheck) * 100 : 0
  const onTrackContrib = curContribPerCheck * paychecksRemaining + alreadyContributed
  const projectedShortfall = Math.max(maxDeferral - onTrackContrib, 0)

  // Match warning
  const isLeavingMatchBehind = employerMatchCap > 0 && employerMatchPercent > 0 && currentContribPct < employerMatchCap
  const missedMatchAmount = isLeavingMatchBehind
    ? ((Math.min(employerMatchCap, employerMatchCap) - currentContribPct) / 100) * salary * (employerMatchPercent / 100)
    : 0

  const handleSalaryChange = (value: string) => {
    setSalaryInput(value)
    const num = parseInt(value.replace(/[^0-9]/g, ''), 10)
    if (!isNaN(num) && num > 0) setSalary(num)
  }

  const handleSalaryBlur = () => setSalaryInput(salary.toLocaleString())

  const handleAlreadyContribChange = (value: string) => {
    setAlreadyContributedInput(value)
    const num = parseInt(value.replace(/[^0-9]/g, ''), 10)
    if (!isNaN(num) && num >= 0) setAlreadyContributed(num)
  }

  const handleAlreadyContribBlur = () => setAlreadyContributedInput(alreadyContributed.toLocaleString())

  return (
    <div className="space-y-8">

      {/* Mid-Year Toggle Banner */}
      <div className="bg-white rounded-[12px] border border-[#E8E6E1] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-sans text-[15px] font-bold text-[#333333]">
            {midYearMode ? 'Mid-year catch-up mode' : 'Full year planning mode'}
          </p>
          <p className="text-[13px] text-[#5b6a71] mt-0.5">
            {midYearMode
              ? 'Showing what you need to contribute for the rest of the year to still max out.'
              : 'Planning how to maximize your 401(k) for the full calendar year.'}
          </p>
        </div>
        <button
          onClick={() => setMidYearMode(!midYearMode)}
          className="shrink-0 px-5 py-2.5 rounded-full border font-semibold text-[14px] transition-colors"
          style={{
            background: midYearMode ? '#1d7682' : 'transparent',
            color: midYearMode ? '#fff' : '#1d7682',
            border: '1.5px solid #1d7682',
          }}
        >
          {midYearMode ? 'Switch to full year' : "I'm mid-year, what do I need to set?"}
        </button>
      </div>

      {/* Company Selector */}
      <div className="bg-white rounded-[12px] border border-[#E8E6E1] p-5 md:p-8">
        <h2 className="font-sans text-[20px] font-bold text-[#333333] mb-2">Do you work for one of these companies?</h2>
        <p className="text-[14px] text-[#5b6a71] mb-5">
          Pick your employer and we'll fill in your exact match details, no guesswork needed.
        </p>

        <div className="flex flex-wrap gap-3 mb-2">
          <button
            onClick={() => {
              setSelectedCompany('general')
            }}
            className={`px-5 py-3 rounded-full border text-[14px] font-semibold transition-colors ${
              selectedCompany === 'general'
                ? 'bg-[#333333] text-white border-[#333333]'
                : 'bg-white text-[#333333] border-[#E8E6E1] hover:border-[#999]'
            }`}
          >
            Other / I'll enter my own
          </button>
          <button
            onClick={() => {
              setSelectedCompany('pge')
            }}
            className={`px-5 py-3 rounded-full border text-[14px] font-semibold transition-colors ${
              selectedCompany === 'pge'
                ? 'bg-[#1d7682] text-white border-[#1d7682]'
                : 'bg-white text-[#333333] border-[#E8E6E1] hover:border-[#1d7682]'
            }`}
          >
            PG&E
          </button>
          <button
            onClick={() => {
              setSelectedCompany('att')
            }}
            className={`px-5 py-3 rounded-full border text-[14px] font-semibold transition-colors ${
              selectedCompany === 'att'
                ? 'bg-[#1d7682] text-white border-[#1d7682]'
                : 'bg-white text-[#333333] border-[#E8E6E1] hover:border-[#1d7682]'
            }`}
          >
            AT&T
          </button>
        </div>

        {/* PG&E sub-selector */}
        {selectedCompany === 'pge' && (
          <div className="mt-5">
            <p className="font-sans text-[13px] font-semibold text-[#333333] mb-3">Which group are you in?</p>
            <div className="flex flex-col gap-2">
              {(Object.entries(PGE_MATCH_CONFIG) as [PGEGroup, typeof PGE_MATCH_CONFIG[PGEGroup]][]).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => setPgeGroup(key)}
                  className={`text-left px-4 py-3 rounded-lg border text-[14px] transition-colors ${
                    pgeGroup === key
                      ? 'bg-[#1d7682]/10 border-[#1d7682] text-[#333333] font-semibold'
                      : 'bg-white border-[#E8E6E1] text-[#5b6a71] hover:border-[#1d7682]'
                  }`}
                >
                  {config.label}
                </button>
              ))}
            </div>
            <p className="text-[12px] text-[#5b6a71] mt-3">
              Not sure? If you were hired in 2013 or later, pick the first option, that covers most current PG&E employees.
            </p>

            {/* PG&E Match Education Card */}
            <div className="mt-5 bg-[#edf7f8] rounded-lg p-5 border border-[#1d7682]/20">
              <p className="text-[15px] font-bold text-[#1d7682] mb-2">
                How your PG&E match works (in plain English)
              </p>
              <p className="text-[14px] text-[#333333] leading-relaxed mb-3">
                {PGE_MATCH_CONFIG[pgeGroup].description}
              </p>
              <div className="bg-white rounded-lg p-4 mb-3 border border-[#1d7682]/10">
                <p className="text-[12px] font-semibold text-[#1d7682] uppercase tracking-wider mb-1">Example with your salary</p>
                <p className="text-[14px] text-[#333333] leading-relaxed">
                  {PGE_MATCH_CONFIG[pgeGroup].example(salary)}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1d7682] text-lg leading-none mt-0.5">→</span>
                <p className="text-[14px] font-semibold text-[#1d7682] leading-relaxed">
                  {PGE_MATCH_CONFIG[pgeGroup].tip}
                </p>
              </div>
              {/* True-up warning */}
              <div className="mt-4 bg-[#fffbf0] border border-[#d97706] rounded-lg p-4">
                <p className="text-[14px] font-bold text-[#b45309] mb-1">
                  ⚠ Heads up: spread your contributions across the whole year
                </p>
                <p className="text-[13px] text-[#92400e] leading-relaxed mb-2">
                  PG&E does <span className="font-semibold">not</span> offer a "true-up" match. That means PG&E only matches what you put in <span className="font-semibold">each paycheck</span>. If you stop contributing partway through the year (because you hit the IRS limit early), PG&E stops matching too. You don't get that money back later.
                </p>
                <p className="text-[13px] text-[#92400e] leading-relaxed mb-2">
                  <span className="font-semibold">Example:</span> Say you earn $150,000 and contribute 30% to max out your 401(k) fast. You'd hit the limit around August. For the rest of the year, September through December, PG&E puts in $0 in match because you're no longer contributing. That could cost you thousands in match dollars.
                </p>
                <p className="text-[13px] text-[#92400e] leading-relaxed">
                  <span className="font-semibold">The fix:</span> Set your contribution percentage so you contribute a little bit every paycheck, all year long. This calculator helps you find that number. Use the "Set withholding to" percentage below, and your contributions will be spread evenly across all 26 paychecks.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-[#1d7682]/10">
                <p className="text-[13px] text-[#5b6a71] leading-relaxed">
                  <span className="font-semibold text-[#333333]">What's the difference between the groups?</span>{' '}
                  PG&E employees hired in 2013 or later are on the Cash Balance pension plan. The pension itself is smaller, so PG&E gives you a bigger 401(k) match to make up for it. Employees hired before 2013 have the traditional Final Pay pension (which pays more in retirement), so the 401(k) match is a little lower. Union members (IBEW/ESC) have their own match rate negotiated through their contract.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* AT&T sub-selector */}
        {selectedCompany === 'att' && (
          <div className="mt-5">
            <p className="font-sans text-[13px] font-semibold text-[#333333] mb-3">Which group are you in?</p>
            <div className="flex flex-col gap-2">
              {(Object.entries(ATT_MATCH_CONFIG) as [ATTGroup, typeof ATT_MATCH_CONFIG[ATTGroup]][]).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => setAttGroup(key)}
                  className={`text-left px-4 py-3 rounded-lg border text-[14px] transition-colors ${
                    attGroup === key
                      ? 'bg-[#1d7682]/10 border-[#1d7682] text-[#333333] font-semibold'
                      : 'bg-white border-[#E8E6E1] text-[#5b6a71] hover:border-[#1d7682]'
                  }`}
                >
                  {config.label}
                </button>
              ))}
            </div>
            <p className="text-[12px] text-[#5b6a71] mt-3">
              Not sure? Check your offer letter or HR portal, it will say "Management" or list your union (CWA / IBEW).
            </p>

            {/* AT&T Match Education Card */}
            <div className="mt-5 bg-[#edf7f8] rounded-lg p-5 border border-[#1d7682]/20">
              <p className="text-[15px] font-bold text-[#1d7682] mb-2">
                How your AT&T match works (in plain English)
              </p>
              <p className="text-[14px] text-[#333333] leading-relaxed mb-3">
                {ATT_MATCH_CONFIG[attGroup].description}
              </p>
              <div className="bg-white rounded-lg p-4 mb-3 border border-[#1d7682]/10">
                <p className="text-[12px] font-semibold text-[#1d7682] uppercase tracking-wider mb-1">Example with your salary</p>
                <p className="text-[14px] text-[#333333] leading-relaxed">
                  {ATT_MATCH_CONFIG[attGroup].example(salary)}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1d7682] text-lg leading-none mt-0.5">→</span>
                <p className="text-[14px] font-semibold text-[#1d7682] leading-relaxed">
                  {ATT_MATCH_CONFIG[attGroup].tip}
                </p>
              </div>

              {/* True-up warning */}
              <div className="mt-4 bg-[#fffbf0] border border-[#d97706] rounded-lg p-4">
                <p className="text-[14px] font-bold text-[#b45309] mb-1">
                  ⚠ Heads up: don't max out too early in the year
                </p>
                <p className="text-[13px] text-[#92400e] leading-relaxed mb-2">
                  AT&T calculates your match <span className="font-semibold">each pay period</span>. If you contribute too aggressively and hit the IRS limit by, say, August, AT&T stops matching for the rest of the year. For most AT&T employees, there is <span className="font-semibold">no "true-up"</span> to fix this. That lost match is gone forever.
                </p>
                <p className="text-[13px] text-[#92400e] leading-relaxed mb-2">
                  <span className="font-semibold">Example:</span> Say you earn $150,000 and set your contribution to 30% to max out fast. You'd hit the ${LIMITS.employeeDeferral.toLocaleString()} limit around August. From September through December, your contribution drops to $0, and so does AT&T's match. That's roughly 4 months of match dollars you'd never get back.
                </p>
                <p className="text-[13px] text-[#92400e] leading-relaxed">
                  <span className="font-semibold">The fix:</span> Pace your contributions so you're still putting in at least 6% on your very last paycheck of December. This calculator does the math for you. The "Set withholding to" percentage below spreads your contributions evenly across all 26 paychecks.
                </p>
              </div>

              {/* AT&T stock warning */}
              <div className="mt-4 bg-[#fffbf0] border border-[#d97706] rounded-lg p-4">
                <p className="text-[14px] font-bold text-[#b45309] mb-1">
                  ⚠ Check where your match money is going
                </p>
                <p className="text-[13px] text-[#92400e] leading-relaxed">
                  AT&T's matching contributions often land in <span className="font-semibold">AT&T company stock (ticker: T)</span> by default. You can move it into a diversified fund right away, but many employees don't realize this and end up with too much of their retirement in a single stock. Log in to your plan and check if your match is set to auto-sell into a target-date fund or other diversified option.
                </p>
              </div>

              {/* Vesting & key facts */}
              <div className="mt-4 bg-white rounded-lg p-4 border border-[#1d7682]/10">
                <p className="text-[12px] font-semibold text-[#1d7682] uppercase tracking-wider mb-2">Quick facts about AT&T's plan</p>
                <ul className="text-[13px] text-[#333333] leading-relaxed space-y-1.5">
                  <li><span className="font-semibold">Vesting:</span> 100% immediate. The match is yours from day one.</li>
                  <li><span className="font-semibold">Max effective match:</span> 4.8% of your eligible pay (80% × 6%).</li>
                  <li><span className="font-semibold">Catch-up (age 50+):</span> Extra {formatCurrency(LIMITS.catchUp50)}. If you earned over $145,000 last year, catch-up must go into Roth (after-tax) starting in 2026.</li>
                  <li><span className="font-semibold">Super catch-up (ages 60–63):</span> Extra {formatCurrency(LIMITS.catchUp6063)} under SECURE 2.0.</li>
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-[#1d7682]/10">
                <p className="text-[13px] text-[#5b6a71] leading-relaxed">
                  <span className="font-semibold text-[#333333]">Management vs. Union: what's different?</span>{' '}
                  Both groups get the same 80% match ratio. The main difference is how your "Basic" contribution is defined. For management employees, it's simply the first 6% of your salary. For union employees (CWA, IBEW), it may be a specific dollar amount tied to your wage scale or job title. Check your contract or HR portal for your exact Basic amount.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-[12px] border border-[#E8E6E1] p-6 md:p-8">
        <h2 className="font-sans text-[20px] font-bold text-[#333333] mb-6">Your information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Salary */}
          <div>
            <LabelWithTooltip label="Annual gross salary" />
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999] text-lg">$</span>
              <input
                type="text"
                value={salaryInput}
                onChange={(e) => handleSalaryChange(e.target.value)}
                onBlur={handleSalaryBlur}
                className="w-full pl-8 pr-4 py-3 border border-[#E8E6E1] rounded-lg text-[#333333] text-lg font-semibold focus:outline-none focus:border-[#1d7682] transition-colors"
              />
            </div>
            <input
              type="range"
              min={30000}
              max={1000000}
              step={5000}
              value={salary}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                setSalary(val)
                setSalaryInput(val.toLocaleString())
              }}
              className="w-full mt-3 accent-[#1d7682]"
            />
            <div className="flex justify-between text-[11px] text-[#999] mt-1">
              <span>$30k</span><span>$1M</span>
            </div>
          </div>

          {/* Age */}
          <div>
            <LabelWithTooltip
              label={`Age (end of ${LIMITS.year})`}
              tooltip="Your age determines whether you qualify for catch-up contributions. At 50+ you get an extra $7,500. At 60–63 (SECURE 2.0) you get an enhanced $11,250 instead."
            />
            <div className="text-lg font-semibold text-[#333333] mb-1">{age}</div>
            <input
              type="range"
              min={20}
              max={75}
              step={1}
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value))}
              className="w-full accent-[#1d7682]"
            />
            <div className="flex justify-between text-[11px] text-[#999] mt-1">
              <span>20</span><span>75</span>
            </div>

            {/* Catch-up callouts — auto-appear by age */}
            {isEnhancedCatchUp && (
              <InfoCallout
                color="teal"
                title={`You qualify for the SECURE 2.0 enhanced catch-up (+${formatCurrency(LIMITS.catchUp6063)})`}
                body={`Ages 60–63 can contribute an extra ${formatCurrency(LIMITS.catchUp6063)} in ${LIMITS.year}, more than the standard 50+ catch-up. Log in to your plan admin site and look for "catch-up contribution" or "additional deferral" to activate it. Note: if you earn over $145,000, this must go into a Roth account.`}
              />
            )}
            {isCatchUpEligible && !isEnhancedCatchUp && (
              <InfoCallout
                color="teal"
                title={`You qualify for catch-up contributions (+${formatCurrency(LIMITS.catchUp50)})`}
                body={`At 50+ you can contribute an extra ${formatCurrency(LIMITS.catchUp50)} above the standard limit in ${LIMITS.year}. To activate it, log into your plan admin site (Fidelity, Vanguard, Empower, etc.) and update your deferral election. Look for "catch-up" or "additional contribution": it may be a separate field from your regular deferral.`}
              />
            )}
          </div>

          {/* Filing Status */}
          <div>
            <LabelWithTooltip
              label="Filing status"
              tooltip="Used to estimate your federal tax bracket and paycheck impact. Married filing jointly has wider tax brackets, which can meaningfully affect your take-home pay calculation."
            />
            <div className="flex gap-3">
              {(['single', 'mfj'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setFilingStatus(s)}
                  className={`flex-1 py-3 rounded-lg border text-sm font-semibold transition-colors ${
                    filingStatus === s
                      ? 'bg-[#1d7682] text-white border-[#1d7682]'
                      : 'bg-white text-[#333333] border-[#E8E6E1] hover:border-[#1d7682]'
                  }`}
                >
                  {s === 'single' ? 'Single' : 'Married filing jointly'}
                </button>
              ))}
            </div>
          </div>

          {/* Pay Frequency */}
          <div>
            <LabelWithTooltip label="Pay frequency" />
            <select
              value={payFrequency}
              onChange={(e) => setPayFrequency(parseInt(e.target.value))}
              className="w-full py-3 px-4 border border-[#E8E6E1] rounded-lg text-[#333333] font-semibold focus:outline-none focus:border-[#1d7682] transition-colors"
            >
              <option value={52}>Weekly (52 paychecks)</option>
              <option value={26}>Bi-weekly (26 paychecks)</option>
              <option value={24}>Semi-monthly (24 paychecks)</option>
              <option value={12}>Monthly (12 paychecks)</option>
            </select>
          </div>

          {/* Employer Match Rate */}
          <div className={selectedCompany !== 'general' ? 'opacity-60 pointer-events-none' : ''}>
            <LabelWithTooltip
              label="Employer match rate"
              tooltip="The percentage your employer contributes for each dollar you put in. Example: a 4% match means for every $1 you contribute (up to the cap), your employer adds $0.04 per dollar. Pure employer match."
            />
            {selectedCompany !== 'general' && (
              <p className="text-[11px] text-[#1d7682] font-semibold mb-1">Auto-filled from your {selectedCompany === 'pge' ? 'PG&E' : 'AT&T'} plan</p>
            )}
            <div className="text-lg font-semibold text-[#333333] mb-1">{formatPercent(employerMatchPercent)}</div>
            <input
              type="range" min={0} max={10} step={0.5} value={employerMatchPercent}
              onChange={(e) => setEmployerMatchPercent(parseFloat(e.target.value))}
              className="w-full accent-[#1d7682]"
            />
            <div className="flex justify-between text-[11px] text-[#999] mt-1"><span>0%</span><span>10%</span></div>
          </div>

          {/* Match Cap */}
          <div className={selectedCompany !== 'general' ? 'opacity-60 pointer-events-none' : ''}>
            <LabelWithTooltip
              label="Match cap (% of salary you must contribute)"
              tooltip={`This is the ceiling on your contributions that your employer will match. Example: if the cap is 6% and your salary is $150,000, your employer matches on the first $9,000 you contribute. Contributing more than $9,000 won't increase the match. If your employer has no cap, or you're not sure, set this to 0%. Not all employers have a match cap.`}
            />
            {selectedCompany !== 'general' && (
              <p className="text-[11px] text-[#1d7682] font-semibold mb-1">Auto-filled from your {selectedCompany === 'pge' ? 'PG&E' : 'AT&T'} plan</p>
            )}
            <div className="text-lg font-semibold text-[#333333] mb-1">{formatPercent(employerMatchCap, 2)}</div>
            <input
              type="range" min={0} max={15} step={0.25} value={employerMatchCap}
              onChange={(e) => setEmployerMatchCap(parseFloat(e.target.value))}
              className="w-full accent-[#1d7682]"
            />
            <div className="flex justify-between text-[11px] text-[#999] mt-1">
              <span>0% (no cap)</span><span>15%</span>
            </div>
          </div>

          {/* Current Contribution % */}
          <div>
            <LabelWithTooltip
              label="Your current 401(k) contribution %"
              tooltip="What you're currently electing on your plan admin site. This lets us show the paycheck impact of maxing out vs. staying where you are, and whether you're capturing your full employer match."
            />
            <div className="text-lg font-semibold text-[#333333] mb-1">{formatPercent(currentContribPct)}</div>
            <input
              type="range" min={0} max={50} step={1} value={currentContribPct}
              onChange={(e) => setCurrentContribPct(parseInt(e.target.value))}
              className="w-full accent-[#1d7682]"
            />
            <div className="flex justify-between text-[11px] text-[#999] mt-1"><span>0%</span><span>50%</span></div>
          </div>

          {/* Other Pre-Tax Deductions */}
          <div>
            <LabelWithTooltip
              label="Other pre-tax deductions per paycheck"
              tooltip="Health insurance premiums, HSA, FSA, dental: these are also deducted pre-tax and reduce your taxable income just like your 401(k). Include them for a more accurate take-home estimate. Find this on your pay stub under 'pre-tax deductions.'"
            />
            <div className="text-lg font-semibold text-[#333333] mb-1">{formatCurrency(otherPreTaxPerCheck)}</div>
            <input
              type="range" min={0} max={1000} step={25} value={otherPreTaxPerCheck}
              onChange={(e) => setOtherPreTaxPerCheck(parseInt(e.target.value))}
              className="w-full accent-[#1d7682]"
            />
            <div className="flex justify-between text-[11px] text-[#999] mt-1">
              <span>$0</span><span>$1,000/paycheck</span>
            </div>
            <p className="text-[11px] text-[#999] mt-1">Health, dental, HSA, FSA, etc.</p>
          </div>
        </div>

        {/* Leaving match warning — inline, only when relevant */}
        {isLeavingMatchBehind && (
          <InfoCallout
            color="amber"
            title={`You may be leaving ${formatCurrency(missedMatchAmount)} in employer match on the table`}
            body={`Your employer matches up to ${formatPercent(employerMatchCap)} of your salary, but you're currently only contributing ${formatPercent(currentContribPct)}. To capture your full match, you need to contribute at least ${formatPercent(employerMatchCap)}, that's ${formatCurrency((employerMatchCap / 100) * salary)} per year. Capturing that match is the first thing to fix before worrying about maxing out.`}
          />
        )}
      </div>

      {/* Mid-Year Section — only shown when toggled */}
      {midYearMode && (
        <div className="bg-white rounded-[12px] border-2 border-[#1d7682] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-sans text-[20px] font-bold text-[#333333]">Mid-year catch-up</h2>
            <span className="text-[11px] font-semibold uppercase tracking-wider bg-[#1d7682] text-white px-3 py-1 rounded-full">Optional</span>
          </div>
          <p className="text-[14px] text-[#5b6a71] mb-6">
            Tell us how much you've already contributed this year and how many paychecks you have left. We'll calculate exactly what % to set starting today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Already Contributed */}
            <div>
              <LabelWithTooltip
                label="Amount already contributed this year"
                tooltip="Find this in your plan admin portal (Fidelity, Vanguard, Empower, etc.) under 'YTD contributions' or 'year-to-date deferrals.' This is your employee contribution only, not your employer match."
              />
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999] text-lg">$</span>
                <input
                  type="text"
                  value={alreadyContributedInput}
                  onChange={(e) => handleAlreadyContribChange(e.target.value)}
                  onBlur={handleAlreadyContribBlur}
                  className="w-full pl-8 pr-4 py-3 border border-[#E8E6E1] rounded-lg text-[#333333] text-lg font-semibold focus:outline-none focus:border-[#1d7682] transition-colors"
                />
              </div>
              <input
                type="range" min={0} max={maxDeferral} step={500} value={alreadyContributed}
                onChange={(e) => {
                  const val = parseInt(e.target.value)
                  setAlreadyContributed(val)
                  setAlreadyContributedInput(val.toLocaleString())
                }}
                className="w-full mt-3 accent-[#1d7682]"
              />
              <div className="flex justify-between text-[11px] text-[#999] mt-1">
                <span>$0</span><span>{formatCurrency(maxDeferral)}</span>
              </div>
            </div>

            {/* Paychecks Remaining */}
            <div>
              <LabelWithTooltip
                label="Paychecks remaining this year"
                tooltip="We've estimated this based on today's date and your pay frequency, but you can adjust it if your employer's pay periods don't align perfectly with the calendar year."
              />
              <div className="text-lg font-semibold text-[#333333] mb-1">{paychecksRemaining}</div>
              <input
                type="range" min={1} max={payFrequency} step={1} value={paychecksRemaining}
                onChange={(e) => setPaychecksRemaining(parseInt(e.target.value))}
                className="w-full accent-[#1d7682]"
              />
              <div className="flex justify-between text-[11px] text-[#999] mt-1">
                <span>1</span><span>{payFrequency} (full year)</span>
              </div>
              <p className="text-[11px] text-[#999] mt-1">Auto-estimated from today's date, adjust if needed</p>
            </div>
          </div>

          {/* Mid-year results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <StatCard
              label="Remaining room"
              value={formatCurrency(remainingRoom)}
              sub={`Out of ${formatCurrency(maxDeferral)} max`}
            />
            <StatCard
              label="Set your contribution to"
              value={formatPercent(midYearPct)}
              sub={`${formatCurrency(midYearContribPerCheck)}/paycheck`}
              highlight
            />
            <StatCard
              label="Paychecks to use it"
              value={String(paychecksRemaining)}
              sub={payFrequencyLabel[payFrequency] + ' remaining'}
            />
          </div>

          {alreadyContributed >= maxDeferral && (
            <InfoCallout
              color="teal"
              title="You've already hit your limit for the year"
              body={`You've contributed ${formatCurrency(alreadyContributed)}, which meets or exceeds the ${LIMITS.year} limit of ${formatCurrency(maxDeferral)}. Your plan should automatically stop deductions, but double-check your plan admin site to confirm.`}
            />
          )}

          {projectedShortfall > 500 && alreadyContributed < maxDeferral && (
            <InfoCallout
              color="amber"
              title={`At your current rate, you'll fall short by ~${formatCurrency(projectedShortfall)}`}
              body={`Based on your current ${formatPercent(currentContribPct)} contribution, you're on track to contribute ${formatCurrency(onTrackContrib)} by year end. To max out, update your deferral to ${formatPercent(midYearPct)} as soon as possible in your plan admin portal.`}
            />
          )}
        </div>
      )}

      {/* Paycheck Impact */}
      <div className="bg-white rounded-[12px] border border-[#E8E6E1] p-6 md:p-8">
        <h2 className="font-sans text-[20px] font-bold text-[#333333] mb-2">Paycheck impact</h2>
        <p className="text-[14px] text-[#5b6a71] mb-6">
          Here's exactly what changes on your {payFrequencyLabel[payFrequency].toLowerCase()} paycheck if you max out vs. staying at your current {formatPercent(currentContribPct)}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Current */}
          <div>
            <p className="text-[13px] font-semibold text-[#5b6a71] mb-3">
              Current contribution: {formatPercent(currentContribPct)}
            </p>
            <div className="rounded-lg overflow-hidden border border-[#E8E6E1]">
              <div className="bg-[#F7F4EE] px-4 py-2 text-[12px] font-semibold text-[#5b6a71] uppercase tracking-wider">
                {payFrequencyLabel[payFrequency]} paycheck
              </div>
              <PaystubRow label="Gross pay" value={formatCurrency(grossPerCheck)} />
              <PaystubRow label={`401(k) deduction (${formatPercent(currentContribPct)})`} value={`-${formatCurrency(curContribPerCheck)}`} type="deduct" />
              <PaystubRow label="Other pre-tax deductions" value={`-${formatCurrency(otherPreTaxPerCheck)}`} type="deduct" />
              <PaystubRow label="Est. federal income tax" value={`-${formatCurrency(curFedTaxPerCheck)}`} type="deduct" />
              <PaystubRow label="FICA (Social Security + Medicare)" value={`-${formatCurrency(ficaPerCheck)}`} type="deduct" />
              <PaystubRow label="Est. take-home pay" value={formatCurrency(curTakeHome)} type="total" bold />
            </div>
          </div>

          {/* Maxed */}
          <div>
            <p className="text-[13px] font-semibold text-[#1d7682] mb-3">
              Maxed out: {formatPercent(maxWithholdingPct)}
            </p>
            <div className="rounded-lg overflow-hidden border border-[#1d7682]">
              <div className="px-4 py-2 text-[12px] font-semibold uppercase tracking-wider" style={{ background: '#1d7682', color: '#fff' }}>
                {payFrequencyLabel[payFrequency]} paycheck
              </div>
              <PaystubRow label="Gross pay" value={formatCurrency(grossPerCheck)} />
              <PaystubRow label={`401(k) deduction (${formatPercent(maxWithholdingPct)})`} value={`-${formatCurrency(maxContribPerCheck)}`} type="deduct" />
              <PaystubRow label="Other pre-tax deductions" value={`-${formatCurrency(otherPreTaxPerCheck)}`} type="deduct" />
              <PaystubRow label="Est. federal income tax" value={`-${formatCurrency(maxFedTaxPerCheck)}`} type="deduct" />
              <PaystubRow label="FICA (Social Security + Medicare)" value={`-${formatCurrency(ficaPerCheck)}`} type="deduct" />
              <PaystubRow label="Est. take-home pay" value={formatCurrency(maxTakeHome)} type="total" bold />
            </div>
          </div>
        </div>

        {/* Impact summary cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6">
          <div className="rounded-lg p-2 sm:p-4 text-center" style={{ background: '#fff5f5', border: '1px solid #fecaca' }}>
            <p className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#dc2626] mb-1">Take-home difference</p>
            <p className="text-[16px] sm:text-[24px] font-bold text-[#dc2626]">{formatCurrency(takeHomeDiff)}<span className="text-[12px] sm:text-[16px]">/check</span></p>
            <p className="text-[10px] sm:text-[12px] text-[#991b1b] mt-1">{formatCurrency(takeHomeDiff * payFrequency)}/year</p>
          </div>
          <div className="rounded-lg p-2 sm:p-4 text-center" style={{ background: '#edf7f8', border: '1px solid #a5d8dd' }}>
            <p className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#1d7682] mb-1">Extra to retirement</p>
            <p className="text-[16px] sm:text-[24px] font-bold text-[#1d7682]">+{formatCurrency(contribDiff)}<span className="text-[12px] sm:text-[16px]">/check</span></p>
            <p className="text-[10px] sm:text-[12px] text-[#2a7d87] mt-1">+{formatCurrency(contribDiff * payFrequency)}/year</p>
          </div>
          <div className="rounded-lg p-2 sm:p-4 text-center" style={{ background: '#fffbf0', border: '1px solid #fcd34d' }}>
            <p className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#b45309] mb-1">Federal tax reduction</p>
            <p className="text-[16px] sm:text-[24px] font-bold text-[#b45309]">{formatCurrency(taxSavedPerCheck)}<span className="text-[12px] sm:text-[16px]">/check</span></p>
            <p className="text-[10px] sm:text-[12px] text-[#92400e] mt-1">{formatCurrency(taxSavedPerCheck * payFrequency)}/year</p>
          </div>
        </div>

        <div className="mt-4 bg-[#F7F4EE] rounded-lg p-4">
          <p className="text-[13px] text-[#5b6a71]">
            <span className="font-semibold text-[#333333]">Why is the take-home hit smaller than the contribution increase?</span>{' '}
            Because pre-tax 401(k) contributions reduce your taxable income, your federal tax bill goes down at the same time your contribution goes up. The real cost of maxing out is always less than it looks.
          </p>
        </div>
      </div>

      {/* Deferral Limits */}
      <div className="bg-white rounded-[12px] border border-[#E8E6E1] p-6 md:p-8">
        <h2 className="font-sans text-[20px] font-bold text-[#333333] mb-2">Employee deferral (pre-tax / Roth)</h2>
        <p className="text-[14px] text-[#5b6a71] mb-6">
          {LIMITS.year} elective deferral limit: {formatCurrency(LIMITS.employeeDeferral)}
          {catchUpAmount > 0 ? ` + ${formatCurrency(catchUpAmount)} catch-up = ${formatCurrency(maxDeferral)} total` : ''}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard label="Set withholding to" value={formatPercent(maxWithholdingPct)} sub="of gross pay" />
          <StatCard label="Max annual deferral" value={formatCurrency(maxDeferral)}
            sub={catchUpAmount > 0 ? `$${LIMITS.employeeDeferral.toLocaleString()} + $${catchUpAmount.toLocaleString()} catch-up` : 'Base limit'} />
          <StatCard label="Per paycheck" value={formatCurrency(maxContribPerCheck)} sub={`${payFrequencyLabel[payFrequency]} (${payFrequency}/yr)`} />
        </div>

        <div className="mt-6 bg-[#1d7682]/5 rounded-lg p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-[14px] font-semibold text-[#333333]">Estimated tax savings from pre-tax deferral</p>
              <p className="text-[13px] text-[#5b6a71]">Based on your {formatPercent(marginalRate * 100)} marginal federal bracket</p>
            </div>
            <p className="text-[28px] font-bold text-[#1d7682]">{formatCurrency(taxSavings)}</p>
          </div>
        </div>
      </div>

      {/* Employer Match */}
      <div className="bg-white rounded-[12px] border border-[#E8E6E1] p-6 md:p-8">
        <h2 className="font-sans text-[20px] font-bold text-[#333333] mb-2">Employer match</h2>
        <p className="text-[14px] text-[#5b6a71] mb-6">
          {formatPercent(employerMatchPercent)} match on the first {formatPercent(employerMatchCap)} of your salary
          {employerMatchCap > 0 && `. Contribute at least ${formatPercent(employerMatchCap)} to capture it all`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard label="Annual employer match" value={formatCurrency(employerMatchContribution)} sub="Employer match dollars" />
          <StatCard label="You + employer combined" value={formatCurrency(maxDeferral + employerMatchContribution)} sub="Total pre-tax + match" />
        </div>

        {employerMatchCap > 0 && (
          <div className="mt-4 bg-[#F7F4EE] rounded-lg p-4">
            <p className="text-[13px] text-[#5b6a71]">
              <span className="font-semibold text-[#333333]">How the match works: </span>
              Your employer contributes {formatPercent(employerMatchPercent)} for every 1% you put in, up to {formatPercent(employerMatchCap)} of your ${salary.toLocaleString()} salary.
              That means the most they'll ever match is {formatCurrency(employerMatchContribution)}, but only if you contribute at least {formatCurrency((employerMatchCap / 100) * salary)} yourself.
            </p>
          </div>
        )}
      </div>

      {/* Mega Backdoor Roth */}
      <div className="bg-white rounded-[12px] border border-[#E8E6E1] p-6 md:p-8">
        <h2 className="font-sans text-[20px] font-bold text-[#333333] mb-2">After-tax spillover (mega backdoor Roth)</h2>
        <p className="text-[14px] text-[#5b6a71] mb-6">
          The IRS allows total annual additions up to {formatCurrency(LIMITS.totalAnnualAdditions)} ({LIMITS.year} 415(c) limit).
          After your deferral and employer match, you may be able to contribute the remaining room as after-tax dollars and convert to Roth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard label="Spillover room" value={formatCurrency(spilloverRoom)} sub="Available for after-tax contributions" />
          <StatCard label="Spillover withholding" value={formatPercent(spilloverPercent)} sub="Additional % of gross pay" />
          <StatCard label="Per paycheck (spillover)" value={formatCurrency(spilloverRoom / payFrequency)} sub={`${payFrequencyLabel[payFrequency]} (${payFrequency}/yr)`} />
        </div>

        <div className="mt-4 bg-[#F7F4EE] rounded-lg p-4">
          <p className="text-[13px] text-[#5b6a71]">
            <span className="font-semibold text-[#333333]">Important:</span> Not all employer plans allow after-tax contributions or in-plan Roth conversions.
            Check with your plan administrator to confirm eligibility before counting on this strategy.
          </p>
        </div>
      </div>

      {/* Catch-Up Reference Table */}
      <div className="bg-white rounded-[12px] border border-[#E8E6E1] p-6 md:p-8">
        <h2 className="font-sans text-[20px] font-bold text-[#333333] mb-4">{LIMITS.year} catch-up contribution rules</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#E8E6E1]">
                <th className="py-3 pr-4 text-[13px] font-semibold text-[#333333]">Age group</th>
                <th className="py-3 pr-4 text-[13px] font-semibold text-[#333333]">Base deferral</th>
                <th className="py-3 pr-4 text-[13px] font-semibold text-[#333333]">Catch-up</th>
                <th className="py-3 text-[13px] font-semibold text-[#333333]">Total deferral</th>
              </tr>
            </thead>
            <tbody className="text-[14px] text-[#333333]">
              {[
                { label: 'Under 50', catchup: 0, highlighted: age < 50 },
                { label: 'Ages 50–59 & 64+', catchup: LIMITS.catchUp50, highlighted: isCatchUpEligible && !isEnhancedCatchUp },
                { label: 'Ages 60–63 (SECURE 2.0)', catchup: LIMITS.catchUp6063, highlighted: isEnhancedCatchUp, badge: true },
              ].map((row) => (
                <tr key={row.label} className={`border-b border-[#E8E6E1] ${row.highlighted ? 'bg-[#1d7682]/5' : ''}`}>
                  <td className="py-3 pr-4 font-semibold">
                    {row.label}
                    {row.badge && <span className="ml-2 text-[11px] bg-[#1d7682] text-white px-2 py-0.5 rounded-full">SECURE 2.0</span>}
                    {row.highlighted && <span className="ml-2 text-[11px] text-[#1d7682] font-semibold">← you</span>}
                  </td>
                  <td className="py-3 pr-4">{formatCurrency(LIMITS.employeeDeferral)}</td>
                  <td className="py-3 pr-4">{row.catchup > 0 ? formatCurrency(row.catchup) : <span className="text-[#999]">N/A</span>}</td>
                  <td className="py-3 font-semibold">{formatCurrency(LIMITS.employeeDeferral + row.catchup)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 bg-[#F7F4EE] rounded-lg p-4">
          <p className="text-[13px] text-[#5b6a71]">
            <span className="font-semibold text-[#333333]">SECURE 2.0 note:</span> Starting in 2026, participants ages 60–63 can make an enhanced catch-up of {formatCurrency(LIMITS.catchUp6063)}.
            For those earning over $145,000, catch-up contributions must be designated as Roth (after-tax).
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-[#333333] rounded-[12px] p-6 md:p-8 text-white">
        <h2 className="font-sans text-[20px] font-bold mb-6">Your {LIMITS.year} total contribution summary</h2>
        <div className="space-y-4">
          {[
            { label: 'Employee deferral (pre-tax / Roth)', value: formatCurrency(maxDeferral) },
            { label: 'Employer match', value: formatCurrency(employerMatchContribution) },
            { label: 'After-tax spillover (mega backdoor Roth)', value: formatCurrency(spilloverRoom) },
          ].map((row) => (
            <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-[15px] text-gray-300">{row.label}</span>
              <span className="text-[18px] font-bold">{row.value}</span>
            </div>
          ))}
          <div className="flex justify-between items-center py-3">
            <span className="text-[17px] font-semibold">Total annual contributions</span>
            <span className="text-[24px] font-bold text-[#1d7682]">{formatCurrency(maxDeferral + employerMatchContribution + spilloverRoom)}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-t border-white/10">
            <span className="text-[15px] text-gray-300">Combined withholding needed</span>
            <span className="text-[18px] font-bold">{formatPercent(maxWithholdingPct + spilloverPercent)}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-t border-white/10">
            <span className="text-[15px] text-gray-300">Estimated federal tax savings</span>
            <span className="text-[18px] font-bold text-[#1d7682]">{formatCurrency(taxSavings)}</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-4">
        <p className="text-[16px] text-[#333333] mb-4">
          Want help optimizing your 401(k) strategy as part of a comprehensive financial plan?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/schedule-consultation"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#1d7682] text-white font-semibold rounded-full hover:bg-[#165d66] transition-colors"
          >
            Schedule a conversation with Jay
          </Link>
          <Link href="/tools" className="text-[#1d7682] font-semibold hover:underline">
            Explore more tools
          </Link>
        </div>
      </div>

      {/* Disclosure */}
      <CalculatorDisclaimer
        toolName="401(k) withholding"
        variant="default"
        resultSummary={spilloverRoom > 0
          ? `On a ${formatCurrency(salary)} salary, you could be missing ${formatCurrency(spilloverRoom)} of mega backdoor Roth room this year. The actual answer depends on whether your plan allows after-tax contributions and in-plan Roth conversions.`
          : `On a ${formatCurrency(salary)} salary, your max elective deferral is ${formatCurrency(maxDeferral)}. The harder question is how this fits with RSU withholding gaps, deferred comp, and your full tax picture.`}
        ctaLabel="Pressure-test your contribution strategy with Jay →"
        additionalContext="Federal tax brackets shown are based on 2026 rates and may change with future legislation. Employer match calculations are estimates and may differ from your actual plan terms. Farther Finance Advisors LLC is an SEC-registered investment adviser. Registration does not imply a certain level of skill or training."
      />

    </div>
  )
}
