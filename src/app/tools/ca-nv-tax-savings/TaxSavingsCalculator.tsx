'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'

// ─────────────────────────── CA TAX BRACKETS 2026 ───────────────────────────

interface Bracket {
 ceiling: number
 rate: number
}

const CA_SINGLE: Bracket[] = [
 { ceiling: 10412, rate: 0.01 },
 { ceiling: 24684, rate: 0.02 },
 { ceiling: 38959, rate: 0.04 },
 { ceiling: 54081, rate: 0.06 },
 { ceiling: 68350, rate: 0.08 },
 { ceiling: 349137, rate: 0.093 },
 { ceiling: 418961, rate: 0.103 },
 { ceiling: 698271, rate: 0.113 },
 { ceiling: 1000000, rate: 0.123 },
 { ceiling: Infinity, rate: 0.133 },
]

const CA_MFJ: Bracket[] = [
 { ceiling: 20824, rate: 0.01 },
 { ceiling: 49368, rate: 0.02 },
 { ceiling: 77918, rate: 0.04 },
 { ceiling: 108162, rate: 0.06 },
 { ceiling: 136700, rate: 0.08 },
 { ceiling: 698274, rate: 0.093 },
 { ceiling: 837922, rate: 0.103 },
 { ceiling: 1396542, rate: 0.113 },
 { ceiling: 2000000, rate: 0.123 },
 { ceiling: Infinity, rate: 0.133 },
]

function getBrackets(filingStatus: string): Bracket[] {
 return filingStatus === 'single' ? CA_SINGLE : CA_MFJ
}

function calcCATax(income: number, filingStatus: string): number {
 if (income <= 0) return 0
 const brackets = getBrackets(filingStatus)
 let tax = 0
 let previousCeiling = 0
 for (const bracket of brackets) {
 if (income <= previousCeiling) break
 const taxableInBracket =
 Math.min(income, bracket.ceiling) - previousCeiling
 tax += taxableInBracket * bracket.rate
 previousCeiling = bracket.ceiling
 }
 return tax
}

// ─────────────────────────── AZ TAX ENGINE ───────────────────────────
// Arizona flat 2.5% on all income. Long-term capital gains get a 25% subtraction
// before the 2.5% rate is applied, yielding an effective 1.875% rate on LTCG.

function calcAZTax(w2: number, cg: number, rsu: number, re: number): number {
 const ordinaryIncome = w2 + rsu + re
 const capGainsAdjusted = cg * 0.75 // 25% AZ cap gains deduction
 return (ordinaryIncome + capGainsAdjusted) * 0.025
}

// ─────────────────────────── 5-YEAR CALC ───────────────────────────

function calcFiveYearSavings(
 w2: number,
 cg: number,
 rsu: number,
 re: number,
 reYear: number,
 filingStatus: string
) {
 const yearly = {
 ca: [] as number[],
 nv: [] as number[],
 az: [] as number[],
 }
 let cumulativeCA = 0
 let cumulativeAZ = 0

 for (let y = 1; y <= 5; y++) {
 const reThisYear = y === reYear ? re : 0
 const totalIncome = w2 + cg + rsu + reThisYear

 const caTax = calcCATax(totalIncome, filingStatus)
 const azTax = calcAZTax(w2, cg, rsu, reThisYear)

 yearly.ca.push(caTax)
 yearly.nv.push(0)
 yearly.az.push(azTax)

 cumulativeCA += caTax
 cumulativeAZ += azTax
 }

 return {
 yearly,
 cumulative: {
 ca: cumulativeCA,
 nv: 0,
 az: cumulativeAZ,
 saveVsNV: cumulativeCA,
 saveVsAZ: cumulativeCA - cumulativeAZ,
 },
 }
}

// ─────────────────────────── HELPERS ───────────────────────────

function formatCurrency(num: number): string {
 if (num >= 1000000) {
 const millions = num / 1000000
 return (
 '$' +
 millions.toLocaleString('en-US', {
  minimumFractionDigits: millions % 1 === 0 ? 0 : 1,
  maximumFractionDigits: 1,
 }) +
 'M'
 )
 }
 return '$' + Math.round(num).toLocaleString('en-US')
}

function formatCurrencyFull(num: number): string {
 return '$' + Math.round(num).toLocaleString('en-US')
}

function formatInputCurrency(num: number): string {
 return '$' + num.toLocaleString('en-US')
}

// ─────────────────────────── ANIMATED NUMBER ───────────────────────────

function useAnimatedNumber(target: number, duration = 800) {
 const [value, setValue] = useState(0)
 const animRef = useRef<number | null>(null)
 const prevRef = useRef(0)

 useEffect(() => {
 if (animRef.current) cancelAnimationFrame(animRef.current)
 const start = prevRef.current
 const startTime = performance.now()

 const animate = (now: number) => {
 const elapsed = now - startTime
 const progress = Math.min(elapsed / duration, 1)
 const eased = 1 - Math.pow(1 - progress, 3)
 const current = Math.round(start + (target - start) * eased)
 setValue(current)
 prevRef.current = current
 if (progress < 1) {
  animRef.current = requestAnimationFrame(animate)
 }
 }
 animRef.current = requestAnimationFrame(animate)

 return () => {
 if (animRef.current) cancelAnimationFrame(animRef.current)
 }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [target])

 return value
}

// ─────────────────────────── SLIDER INPUT ───────────────────────────

interface SliderInputProps {
 label: string
 tooltip: string
 value: number
 min: number
 max: number
 step: number
 onChange: (val: number) => void
}

function SliderInput({
 label,
 tooltip,
 value,
 min,
 max,
 step,
 onChange,
}: SliderInputProps) {
 const [showTooltip, setShowTooltip] = useState(false)
 const pct = ((value - min) / (max - min)) * 100

 return (
 <div className="mb-6">
 <div className="flex items-center justify-between mb-2">
  <div className="flex items-center gap-1.5">
  <label className="font-sans text-[14px] font-semibold text-[#333333]">
  {label}
  </label>
  <button
  onClick={() => setShowTooltip(!showTooltip)}
  onBlur={() =>
   setTimeout(() => setShowTooltip(false), 200)
  }
  className="w-4 h-4 rounded-full bg-[#E2E8F0] text-[#64748B] text-[10px] font-bold flex items-center justify-center hover:bg-[#CBD5E1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1d7682]"
  aria-label={`Info: ${tooltip}`}
  >
  i
  </button>
  </div>
  <span className="font-sans text-[14px] font-semibold text-[#1d7682]">
  {formatInputCurrency(value)}
  </span>
 </div>
 {showTooltip && (
  <p className="font-sans text-[12px] text-[#64748B] mb-2 leading-relaxed">
  {tooltip}
  </p>
 )}
 <input
  type="range"
  min={min}
  max={max}
  step={step}
  value={value}
  onChange={(e) => onChange(Number(e.target.value))}
  className="w-full h-2 rounded-full appearance-none cursor-pointer"
  style={{
  background: `linear-gradient(to right, #1d7682 0%, #1d7682 ${pct}%, #E2E8F0 ${pct}%, #E2E8F0 100%)`,
  }}
  aria-label={label}
  aria-valuenow={value}
  aria-valuemin={min}
  aria-valuemax={max}
 />
 <div className="flex justify-between mt-1">
  <span className="font-sans text-[11px] text-[#94A3B8]">
  {formatInputCurrency(min)}
  </span>
  <span className="font-sans text-[11px] text-[#94A3B8]">
  {formatInputCurrency(max)}
  </span>
 </div>
 </div>
 )
}

// ─────────────────────────── MAIN COMPONENT ───────────────────────────

export default function TaxSavingsCalculator() {
 const [filingStatus, setFilingStatus] = useState('mfj')
 const [w2, setW2] = useState(500000)
 const [cg, setCG] = useState(150000)
 const [rsu, setRSU] = useState(100000)
 const [re, setRE] = useState(500000)
 const [reYear, setREYear] = useState(1)
 const [showForm, setShowForm] = useState(false)
 const [formSubmitted, setFormSubmitted] = useState(false)
 const [contactInfo, setContactInfo] = useState({
 firstName: '',
 lastName: '',
 email: '',
 phone: '',
 })
 const [contactErrors, setContactErrors] = useState<
 Record<string, string>
 >({})
 const reportRef = useRef<HTMLDivElement>(null)

 const results = calcFiveYearSavings(w2, cg, rsu, re, reYear, filingStatus)

 // Animated hero numbers
 const animCA = useAnimatedNumber(results.cumulative.ca)
 const animAZ = useAnimatedNumber(results.cumulative.az)
 const animSaveNV = useAnimatedNumber(results.cumulative.saveVsNV)
 const animSaveAZ = useAnimatedNumber(results.cumulative.saveVsAZ)

 const allZero = results.cumulative.ca === 0

 // Bar chart max for scaling
 const allYearlyValues = [
 ...results.yearly.ca,
 ...results.yearly.az,
 ]
 const maxYearly = Math.max(...allYearlyValues, 1)

 const getDynamicText = () => {
 const nvSave = results.cumulative.saveVsNV
 const azSave = results.cumulative.saveVsAZ
 if (allZero)
 return 'Enter your income details above to see your potential savings.'

 let mainText = ''
 if (nvSave > 1000000)
 mainText = `California is charging you over ${formatCurrency(nvSave)} in state taxes over the next five years. That's generational wealth leaving your family.`
 else if (nvSave >= 500000)
 mainText = `You could redirect nearly ${formatCurrencyFull(nvSave)} from California's tax coffers into your family's wealth over just five years - enough to fully fund a child's education and then some.`
 else if (nvSave >= 100000)
 mainText = `State taxes at this income level add up. Over 5 years, the California vs. Nevada differential reaches ${formatCurrencyFull(nvSave)} - a meaningful number worth a conversation.`
 else
 mainText = 'While the tax savings may be modest at this income level, other factors like cost of living and estate planning should be considered.'

 const tradeoff = azSave > 0
 ? ` Nevada offers zero state income tax - the maximum possible savings. Arizona 2.5% flat tax still saves you ${formatCurrencyFull(azSave)} over California while offering proximity to California business markets, a growing financial hub in Phoenix-Scottsdale, and a lower cost of living.`
 : ''

 return mainText + tradeoff
 }

 const handleFormSubmit = async (e: React.FormEvent) => {
 e.preventDefault()
 const errors: Record<string, string> = {}
 if (contactInfo.firstName.trim().length < 2)
 errors.firstName = 'Required'
 if (contactInfo.lastName.trim().length < 2)
 errors.lastName = 'Required'
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email))
 errors.email = 'Please enter a valid email'
 setContactErrors(errors)
 if (Object.keys(errors).length > 0) return

 try {
 await fetch('/api/lead', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
  ...contactInfo,
  filingStatus,
  w2,
  cg,
  rsu,
  re,
  reYear,
  cumulativeSavingsNV: results.cumulative.saveVsNV,
  cumulativeSavingsAZ: results.cumulative.saveVsAZ,
  reportHtml: reportRef.current?.innerHTML || '',
  timestamp: new Date().toISOString(),
  source: 'ca-nv-az-tax-savings',
  }),
 }).catch(() => {})
 } catch {
 // silently fail
 }
 setFormSubmitted(true)
 }

 return (
 <div className="px-5 py-10 max-w-[1100px] mx-auto">
 {/* Main layout */}
 <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-8 items-start">
  {/* ────── INPUT PANEL ────── */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 lg:sticky lg:top-[100px]">
  {/* Filing status */}
  <div className="mb-6">
  <label className="block font-sans text-[14px] font-semibold text-[#333333] mb-2">
   Filing Status
  </label>
  <select
   value={filingStatus}
   onChange={(e) => setFilingStatus(e.target.value)}
   className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] bg-white focus:outline-none focus:border-[#1d7682] transition-colors"
   aria-label="Filing Status"
  >
   <option value="mfj">Married Filing Jointly</option>
   <option value="single">Single</option>
  </select>
  </div>

  <SliderInput
  label="Annual W-2 & Bonus Income"
  tooltip="Total annual earned compensation before deductions"
  value={w2}
  min={0}
  max={3000000}
  step={10000}
  onChange={setW2}
  />
  <SliderInput
  label="Annual Long-Term Capital Gains"
  tooltip="Gains from investments held longer than 12 months. California taxes these at ordinary income rates; Arizona gives a 25% deduction."
  value={cg}
  min={0}
  max={2000000}
  step={10000}
  onChange={setCG}
  />
  <SliderInput
  label="Annual RSU / Equity Vesting"
  tooltip="Fair market value of RSUs or stock options vesting each year. Note: California may still source-tax equity tied to CA work even after you move."
  value={rsu}
  min={0}
  max={2000000}
  step={10000}
  onChange={setRSU}
  />
  <SliderInput
  label="One-Time Real Estate Gain"
  tooltip="Net taxable gain after the primary residence exclusion ($250K single / $500K married filing jointly)"
  value={re}
  min={0}
  max={5000000}
  step={25000}
  onChange={setRE}
  />

  {/* RE sale year */}
  <div className="mb-2">
  <label className="block font-sans text-[14px] font-semibold text-[#333333] mb-2">
   Real Estate Sale Year
  </label>
  <select
   value={reYear}
   onChange={(e) => setREYear(Number(e.target.value))}
   className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] bg-white focus:outline-none focus:border-[#1d7682] transition-colors"
   aria-label="Real Estate Sale Year"
  >
   {[1, 2, 3, 4, 5].map((y) => (
   <option key={y} value={y}>
   Year {y}
   </option>
   ))}
  </select>
  </div>
  </div>

  {/* ────── RESULTS PANEL ────── */}
  <div ref={reportRef}>
  {/* 3-Card Hero Comparison */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
  {/* California Card */}
  <div className="bg-[#FEF2F2] rounded-[12px] border-l-4 border-l-[#DC2626] border border-[#FECACA] p-5">
   <div className="flex items-center gap-2 mb-1">
   <span className="w-3 h-3 rounded-full bg-[#DC2626] flex-shrink-0" />
   <h3 className="font-sans text-[15px] font-bold text-[#333333]">
   California
   </h3>
   </div>
   <p className="font-sans text-[12px] text-[#5b6a71] mb-3">
   If You Stay
   </p>
   <p className="font-sans text-[28px] md:text-[32px] font-extrabold text-[#DC2626] leading-none">
   {formatCurrencyFull(animCA)}
   </p>
   <p className="font-sans text-[11px] text-[#5b6a71] mt-1">
   5-Year State Tax Bill
   </p>
  </div>

  {/* Nevada Card */}
  <div className="bg-[#F0FDF9] rounded-[12px] border-l-4 border-l-[#0A6E5C] border border-[#A7F3D0] p-5 relative shadow-[0_0_20px_rgba(10,110,92,0.1)]">
   <div className="absolute -top-2.5 right-3">
   <span className="bg-[#0A6E5C] text-white font-sans text-[10px] font-bold uppercase tracking-[0.05em] px-2.5 py-1 rounded-full">
   Max Savings
   </span>
   </div>
   <div className="flex items-center gap-2 mb-1">
   <span className="w-3 h-3 rounded-full bg-[#0A6E5C] flex-shrink-0" />
   <h3 className="font-sans text-[15px] font-bold text-[#333333]">
   Nevada
   </h3>
   </div>
   <p className="font-sans text-[12px] text-[#5b6a71] mb-3">
   If You Move
   </p>
   <p className="font-sans text-[28px] md:text-[32px] font-extrabold text-[#0A6E5C] leading-none">
   $0
   </p>
   <p className="font-sans text-[11px] text-[#5b6a71] mt-1">
   5-Year State Tax Bill
   </p>
   <div className="mt-3 pt-3 border-t border-[#A7F3D0]">
   <p className="font-sans text-[13px] font-bold text-[#0A6E5C]">
   You save: {formatCurrencyFull(animSaveNV)}
   </p>
   <p className="font-sans text-[10px] text-[#5b6a71]">
   vs. California
   </p>
   </div>
  </div>

  {/* Arizona Card */}
  <div className="bg-[#FEFCE8] rounded-[12px] border-l-4 border-l-[#D4A843] border border-[#FDE68A] p-5">
   <div className="flex items-center gap-2 mb-1">
   <span className="w-3 h-3 rounded-full bg-[#D4A843] flex-shrink-0" />
   <h3 className="font-sans text-[15px] font-bold text-[#333333]">
   Arizona
   </h3>
   </div>
   <p className="font-sans text-[12px] text-[#5b6a71] mb-3">
   If You Move
   </p>
   <p className="font-sans text-[28px] md:text-[32px] font-extrabold text-[#92750D] leading-none">
   {formatCurrencyFull(animAZ)}
   </p>
   <p className="font-sans text-[11px] text-[#5b6a71] mt-1">
   5-Year State Tax Bill
   </p>
   <div className="mt-3 pt-3 border-t border-[#FDE68A]">
   <p className="font-sans text-[13px] font-bold text-[#92750D]">
   You save: {formatCurrencyFull(animSaveAZ)}
   </p>
   <p className="font-sans text-[10px] text-[#5b6a71]">
   vs. California
   </p>
   </div>
   <p className="font-sans text-[9px] text-[#94A3B8] mt-2">
   Rate shown: 2.5% (2026 enacted rate)
   </p>
  </div>
  </div>

  {/* ────── GROUPED BAR CHART ────── */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 mb-6">
  <h3 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#333333] mb-2">
   Year-by-Year Comparison
  </h3>
  {/* Legend */}
  <div className="flex flex-wrap gap-4 mb-5">
   <div className="flex items-center gap-1.5">
   <span className="w-3 h-3 rounded-sm bg-[#DC2626]" />
   <span className="font-sans text-[12px] text-[#5b6a71]">California</span>
   </div>
   <div className="flex items-center gap-1.5">
   <span className="w-3 h-3 rounded-sm bg-[#0A6E5C]" />
   <span className="font-sans text-[12px] text-[#5b6a71]">Nevada</span>
   </div>
   <div className="flex items-center gap-1.5">
   <span className="w-3 h-3 rounded-sm bg-[#D4A843]" />
   <span className="font-sans text-[12px] text-[#5b6a71]">Arizona</span>
   </div>
  </div>

  <div className="space-y-5" aria-label="Grouped bar chart comparing state taxes year by year">
   {[0, 1, 2, 3, 4].map((i) => {
   const caVal = results.yearly.ca[i]
   const azVal = results.yearly.az[i]
   const caPct = maxYearly > 0 ? (caVal / maxYearly) * 100 : 0
   const azPct = maxYearly > 0 ? (azVal / maxYearly) * 100 : 0
   const isREYear = i + 1 === reYear && re > 0

   return (
   <div key={i}>
    <div className="flex justify-between items-center mb-1.5">
    <span className="font-sans text-[13px] font-semibold text-[#333333]">
    Year {i + 1}
    {isREYear && (
     <span className="text-[11px] font-normal text-[#5b6a71] ml-1.5">
     (includes real estate sale)
     </span>
    )}
    </span>
    </div>
    {/* CA bar */}
    <div className="flex items-center gap-2 mb-1">
    <div className="h-5 flex-1 bg-[#F1F5F9] rounded-[4px] overflow-hidden">
    <div
     className="h-full rounded-[4px] transition-all duration-500 ease-out bg-[#DC2626]"
     style={{ width: `${Math.max(caPct, allZero ? 0 : 1)}%` }}
    />
    </div>
    <span className="font-sans text-[11px] font-semibold text-[#DC2626] w-[80px] text-right">
    {formatCurrencyFull(caVal)}
    </span>
    </div>
    {/* NV bar */}
    <div className="flex items-center gap-2 mb-1">
    <div className="h-5 flex-1 bg-[#F1F5F9] rounded-[4px] overflow-hidden">
    <div
     className="h-full rounded-[4px] bg-[#0A6E5C]"
     style={{ width: '0%' }}
    />
    </div>
    <span className="font-sans text-[11px] font-semibold text-[#0A6E5C] w-[80px] text-right">
    $0
    </span>
    </div>
    {/* AZ bar */}
    <div className="flex items-center gap-2">
    <div className="h-5 flex-1 bg-[#F1F5F9] rounded-[4px] overflow-hidden">
    <div
     className="h-full rounded-[4px] transition-all duration-500 ease-out bg-[#D4A843]"
     style={{ width: `${Math.max(azPct, allZero ? 0 : 1)}%` }}
    />
    </div>
    <span className="font-sans text-[11px] font-semibold text-[#92750D] w-[80px] text-right">
    {formatCurrencyFull(azVal)}
    </span>
    </div>
   </div>
   )
   })}
  </div>
  </div>

  {/* ────── DYNAMIC TEXT ────── */}
  <div className="bg-[#F7F4EE] rounded-[12px] p-6 mb-6">
  <p className="font-sans text-[15px] text-[#333333] leading-relaxed">
   {getDynamicText()}
  </p>
  </div>

  {/* ────── CTA GATE ────── */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-8 mb-6">
  {!formSubmitted ? (
   <>
   <div className="text-center mb-6">
   <h3 className="font-serif text-[22px] md:text-[26px] font-bold text-[#333333]">
    Ready to plan your move?
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-2">
    Download your{' '}
    <strong>
    Complete Relocation Tax Planning Checklist
    </strong>{' '}
    - covering residency rules, safe harbor
    timelines, clawback risks, entity restructuring,
    and more for both Nevada and Arizona.
   </p>
   </div>

   {!showForm ? (
   <div className="text-center">
    <button
    onClick={() => setShowForm(true)}
    className="inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[16px] px-8 py-3.5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2"
    >
    Download My Checklist
    <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    >
    <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
    </button>
   </div>
   ) : (
   <form
    onSubmit={handleFormSubmit}
    noValidate
    className="space-y-3"
   >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <div>
    <input
     type="text"
     placeholder="First Name"
     value={contactInfo.firstName}
     onChange={(e) =>
     setContactInfo((p) => ({
     ...p,
     firstName: e.target.value,
     }))
     }
     className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
     aria-label="First Name"
    />
    {contactErrors.firstName && (
     <p className="text-[12px] text-[#EF4444] mt-1">
     {contactErrors.firstName}
     </p>
    )}
    </div>
    <div>
    <input
     type="text"
     placeholder="Last Name"
     value={contactInfo.lastName}
     onChange={(e) =>
     setContactInfo((p) => ({
     ...p,
     lastName: e.target.value,
     }))
     }
     className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
     aria-label="Last Name"
    />
    {contactErrors.lastName && (
     <p className="text-[12px] text-[#EF4444] mt-1">
     {contactErrors.lastName}
     </p>
    )}
    </div>
    </div>
    <div>
    <input
    type="email"
    placeholder="Email Address"
    value={contactInfo.email}
    onChange={(e) =>
     setContactInfo((p) => ({
     ...p,
     email: e.target.value,
     }))
    }
    className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
    aria-label="Email Address"
    />
    {contactErrors.email && (
    <p className="text-[12px] text-[#EF4444] mt-1">
     {contactErrors.email}
    </p>
    )}
    </div>
    <div>
    <input
    type="tel"
    placeholder="Phone (optional)"
    value={contactInfo.phone}
    onChange={(e) =>
     setContactInfo((p) => ({
     ...p,
     phone: e.target.value,
     }))
    }
    className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
    aria-label="Phone Number"
    />
    </div>
    <button
    type="submit"
    className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[16px] py-3.5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2"
    >
    Download My Checklist &rarr;
    </button>
    <p className="font-sans text-[12px] text-[#64748B] text-center">
    By submitting this form, you consent to being
    contacted by a Farther advisor. Your
    information will be handled per our{' '}
    <Link
    href="/disclosures"
    className="underline hover:text-[#1d7682]"
    >
    Privacy Policy
    </Link>
    .
    </p>
   </form>
   )}
   </>
  ) : (
   <div className="text-center py-4">
   <div className="w-14 h-14 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-4">
   <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#10B981"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
   >
    <polyline points="20 6 9 17 4 12" />
   </svg>
   </div>
   <h4 className="font-serif text-[22px] font-bold text-[#333333]">
   Thank You!
   </h4>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-2 max-w-[400px] mx-auto">
   Your checklist is on the way. A Farther advisor
   will reach out within 24 hours to discuss your
   personalized relocation strategy.
   </p>
   <Link
   href="/schedule-consultation"
   className="inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[15px] px-6 py-3 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 mt-5"
   >
   Schedule a Conversation
   </Link>
   </div>
  )}
  </div>

  {/* High income note */}
  {w2 + cg + rsu + re > 10000000 && (
  <div className="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-[12px] p-4 mb-6">
   <p className="font-sans text-[13px] text-[#92400E]">
   For portfolios of this size, a personalized analysis
   is essential. These estimates provide directional
   guidance only.
   </p>
  </div>
  )}
  </div>
 </div>

 {/* ────── DISCLAIMER ────── */}
 <div className="mt-10 max-w-[900px] mx-auto">
  <CalculatorDisclaimer
   toolName="CA-to-NV tax savings"
   variant="default"
   additionalContext="California tax calculations use 2026 progressive brackets (1%-13.3%); Arizona uses the current enacted 2.5% flat rate with a 25% long-term capital gains subtraction; Nevada reflects $0 state income tax. California Franchise Tax Board sourcing rules may continue to tax certain income (RSU vesting, deferred comp, CA-sourced business income) even after you establish out-of-state residency. Farther Finance, Inc. does not provide tax or legal advice."
  />
 </div>
 </div>
 )
}
