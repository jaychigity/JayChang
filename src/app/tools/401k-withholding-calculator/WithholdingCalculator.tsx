'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
          {midYearMode ? 'Switch to full year' : "I'm mid-year — what do I need to set?"}
        </button>
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
                body={`Ages 60–63 can contribute an extra ${formatCurrency(LIMITS.catchUp6063)} in ${LIMITS.year} — more than the standard 50+ catch-up. Log in to your plan admin site and look for "catch-up contribution" or "additional deferral" to activate it. Note: if you earn over $145,000, this must go into a Roth account.`}
              />
            )}
            {isCatchUpEligible && !isEnhancedCatchUp && (
              <InfoCallout
                color="teal"
                title={`You qualify for catch-up contributions (+${formatCurrency(LIMITS.catchUp50)})`}
                body={`At 50+ you can contribute an extra ${formatCurrency(LIMITS.catchUp50)} above the standard limit in ${LIMITS.year}. To activate it, log into your plan admin site (Fidelity, Vanguard, Empower, etc.) and update your deferral election. Look for "catch-up" or "additional contribution" — it may be a separate field from your regular deferral.`}
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
          <div>
            <LabelWithTooltip
              label="Employer match rate"
              tooltip="The percentage your employer contributes for each dollar you put in. Example: a 4% match means for every $1 you contribute (up to the cap), your employer adds $0.04 per dollar — pure free money."
            />
            <div className="text-lg font-semibold text-[#333333] mb-1">{formatPercent(employerMatchPercent)}</div>
            <input
              type="range" min={0} max={10} step={0.5} value={employerMatchPercent}
              onChange={(e) => setEmployerMatchPercent(parseFloat(e.target.value))}
              className="w-full accent-[#1d7682]"
            />
            <div className="flex justify-between text-[11px] text-[#999] mt-1"><span>0%</span><span>10%</span></div>
          </div>

          {/* Match Cap */}
          <div>
            <LabelWithTooltip
              label="Match cap (% of salary you must contribute)"
              tooltip={`This is the ceiling on your contributions that your employer will match. Example: if the cap is 6% and your salary is $150,000, your employer matches on the first $9,000 you contribute — contributing more than $9,000 won't increase the match. If your employer has no cap, or you're not sure, set this to 0%. Not all employers have a match cap.`}
            />
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
              tooltip="What you're currently electing on your plan admin site. This lets us show the paycheck impact of maxing out vs. staying where you are — and whether you're capturing your full employer match."
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
              tooltip="Health insurance premiums, HSA, FSA, dental — these are also deducted pre-tax and reduce your taxable income just like your 401(k). Include them for a more accurate take-home estimate. Find this on your pay stub under 'pre-tax deductions.'"
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
            body={`Your employer matches up to ${formatPercent(employerMatchCap)} of your salary, but you're currently only contributing ${formatPercent(currentContribPct)}. To capture your full match, you need to contribute at least ${formatPercent(employerMatchCap)} — that's ${formatCurrency((employerMatchCap / 100) * salary)} per year. The match is free money; this is the first thing to fix before worrying about maxing out.`}
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
            Tell us how much you've already contributed this year and how many paychecks you have left — we'll calculate exactly what % to set starting today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Already Contributed */}
            <div>
              <LabelWithTooltip
                label="Amount already contributed this year"
                tooltip="Find this in your plan admin portal (Fidelity, Vanguard, Empower, etc.) under 'YTD contributions' or 'year-to-date deferrals.' This is your employee contribution only — not your employer match."
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
                tooltip="We've estimated this based on today's date and your pay frequency — but you can adjust it if your employer's pay periods don't align perfectly with the calendar year."
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
              <p className="text-[11px] text-[#999] mt-1">Auto-estimated from today's date — adjust if needed</p>
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
              body={`You've contributed ${formatCurrency(alreadyContributed)}, which meets or exceeds the ${LIMITS.year} limit of ${formatCurrency(maxDeferral)}. Your plan should automatically stop deductions — but double-check your plan admin site to confirm.`}
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
              Current contribution — {formatPercent(currentContribPct)}
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
              Maxed out — {formatPercent(maxWithholdingPct)}
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
            Because pre-tax 401(k) contributions reduce your taxable income — so your federal tax bill goes down at the same time your contribution goes up. The real cost of maxing out is always less than it looks.
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
          {employerMatchCap > 0 && ` — contribute at least ${formatPercent(employerMatchCap)} to capture it all`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard label="Annual employer match" value={formatCurrency(employerMatchContribution)} sub="Free money from your employer" />
          <StatCard label="You + employer combined" value={formatCurrency(maxDeferral + employerMatchContribution)} sub="Total pre-tax + match" />
        </div>

        {employerMatchCap > 0 && (
          <div className="mt-4 bg-[#F7F4EE] rounded-lg p-4">
            <p className="text-[13px] text-[#5b6a71]">
              <span className="font-semibold text-[#333333]">How the match works: </span>
              Your employer contributes {formatPercent(employerMatchPercent)} for every 1% you put in, up to {formatPercent(employerMatchCap)} of your ${salary.toLocaleString()} salary.
              That means the most they'll ever match is {formatCurrency(employerMatchContribution)} — but only if you contribute at least {formatCurrency((employerMatchCap / 100) * salary)} yourself.
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
      <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
        <p className="font-sans text-[11px] leading-relaxed text-[#5b6a71]">
          <strong>Important Disclosure:</strong> This calculator provides estimates for illustrative purposes only and does not constitute financial, tax, or investment advice. Actual results will depend on your specific compensation structure, employer plan rules, tax situation, and other factors not captured here. Federal tax brackets shown are based on 2026 rates and may change with future legislation. Employer match calculations are estimates and may differ from your actual plan terms. Consult a qualified financial advisor before making changes to your 401(k) withholding or contribution strategy. Farther Finance Advisors LLC is an SEC-registered investment adviser. Registration does not imply a certain level of skill or training.
        </p>
        <p className="font-sans text-[13px] text-[#333333] mt-4">
          For a personalized analysis of your situation, schedule a free conversation with Jay — no obligation, just clarity.
        </p>
        <a
          href="/schedule-consultation"
          className="inline-block mt-3 font-sans text-[14px] font-semibold text-[#F7F4EE] bg-gradient-to-b from-[#2a9dab] to-[#1d7682] px-6 py-3 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] transition-all duration-200 no-underline"
        >
          Talk with Jay about your results →
        </a>
      </div>

    </div>
  )
}
