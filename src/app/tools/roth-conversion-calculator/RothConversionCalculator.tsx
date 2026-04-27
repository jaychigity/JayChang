'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { TAX_YEAR, computeTax, getMarginalBracket } from '@/lib/tax-brackets'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'

// ─────────────────────────── CORE CALCULATION ───────────────────────────

const TAX_DRAG = 0.15 // 15% of returns for LTCG drag on taxable account

interface ConversionResult {
 taxCost: number
 effRate: number
 fvTraditional: number
 afterTaxTraditional: number
 fvRoth: number
 oppCost: number
 netRoth: number
 netBenefit: number
 betr: number
 currentBracket: number
 newBracket: number
 yearlyData: { year: number; traditional: number; roth: number }[]
}

function calculateConversion(
 conversion: number,
 income: number,
 filing: string,
 retirementRate: number,
 years: number,
 annualReturn: number
): ConversionResult {
 const taxCost = computeTax(income + conversion, filing) - computeTax(income, filing)
 const effRate = conversion > 0 ? taxCost / conversion : 0
 const currentBracket = getMarginalBracket(income, filing)
 const newBracket = getMarginalBracket(income + conversion, filing)

 const r = annualReturn / 100
 const tr = retirementRate / 100
 const rAfterTax = r * (1 - TAX_DRAG)

 // Scenario A: Keep Traditional
 const fvTraditional = conversion * Math.pow(1 + r, years)
 const afterTaxTraditional = fvTraditional * (1 - tr)

 // Scenario B: Convert to Roth
 const fvRoth = conversion * Math.pow(1 + r, years)
 const oppCost = taxCost * Math.pow(1 + rAfterTax, years)
 const netRoth = fvRoth - oppCost

 const netBenefit = netRoth - afterTaxTraditional

 // Break-even retirement tax rate
 const betr =
 conversion > 0 && years > 0
 ? (taxCost * Math.pow(1 + rAfterTax, years)) /
  (conversion * Math.pow(1 + r, years))
 : effRate

 // Yearly data for line chart
 const yearlyData: { year: number; traditional: number; roth: number }[] = []
 for (let y = 0; y <= years; y++) {
 const tradVal = conversion * Math.pow(1 + r, y) * (1 - tr)
 const rothVal =
 conversion * Math.pow(1 + r, y) -
 taxCost * Math.pow(1 + rAfterTax, y)
 yearlyData.push({ year: y, traditional: tradVal, roth: rothVal })
 }

 return {
 taxCost,
 effRate,
 fvTraditional,
 afterTaxTraditional,
 fvRoth,
 oppCost,
 netRoth,
 netBenefit,
 betr,
 currentBracket,
 newBracket,
 yearlyData,
 }
}

// ─────────────────────────── HELPERS ───────────────────────────

function formatCurrencyFull(num: number): string {
 const abs = Math.abs(Math.round(num))
 const formatted = '$' + abs.toLocaleString('en-US')
 return num < 0 ? '-' + formatted : formatted
}

function formatInputCurrency(num: number): string {
 return '$' + num.toLocaleString('en-US')
}

function formatPct(num: number, decimals = 1): string {
 return num.toFixed(decimals) + '%'
}

// ─────────────────────────── ANIMATED NUMBER ───────────────────────────

function useAnimatedNumber(target: number, duration = 600) {
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

// ─────────────────────────── TOOLTIP ───────────────────────────

function TooltipButton({ text }: { text: string }) {
 const [show, setShow] = useState(false)
 return (
 <span className="relative">
 <button
  onClick={() => setShow(!show)}
  onBlur={() => setTimeout(() => setShow(false), 200)}
  className="w-4 h-4 rounded-full bg-[#E2E8F0] text-[#64748B] text-[10px] font-bold flex items-center justify-center hover:bg-[#CBD5E1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1d7682]"
  aria-label={`Info: ${text}`}
 >
  i
 </button>
 {show && (
  <span className="absolute left-6 top-0 z-20 w-[240px] bg-white border border-[#E2E8F0] rounded-lg shadow-lg p-3 font-sans text-[12px] text-[#64748B] leading-relaxed">
  {text}
  </span>
 )}
 </span>
 )
}

// ─────────────────────────── SLIDER INPUT ───────────────────────────

interface SliderProps {
 label: string
 tooltip: string
 value: number
 min: number
 max: number
 step: number
 onChange: (v: number) => void
 format?: (v: number) => string
}

function SliderInput({ label, tooltip, value, min, max, step, onChange, format }: SliderProps) {
 const pct = ((value - min) / (max - min)) * 100
 const display = format ? format(value) : formatInputCurrency(value)
 return (
 <div className="mb-6">
 <div className="flex items-center justify-between mb-2">
  <div className="flex items-center gap-1.5">
  <label className="font-sans text-[14px] font-semibold text-[#333333]">{label}</label>
  <TooltipButton text={tooltip} />
  </div>
  <span className="font-sans text-[14px] font-semibold text-[#1d7682]">{display}</span>
 </div>
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
  <span className="font-sans text-[11px] text-[#94A3B8]">{format ? format(min) : formatInputCurrency(min)}</span>
  <span className="font-sans text-[11px] text-[#94A3B8]">{format ? format(max) : formatInputCurrency(max)}</span>
 </div>
 </div>
 )
}

// ─────────────────────────── MAIN COMPONENT ───────────────────────────

export default function RothConversionCalculator() {
 const [conversion, setConversion] = useState(200000)
 const [income, setIncome] = useState(150000)
 const [filing, setFiling] = useState('mfj')
 const [retirementRate, setRetirementRate] = useState(22)
 const [years, setYears] = useState(15)
 const [annualReturn, setAnnualReturn] = useState(7)

 const isValid = conversion >= 10000

 const results = isValid
 ? calculateConversion(conversion, income, filing, retirementRate, years, annualReturn)
 : null

 const animBenefit = useAnimatedNumber(results ? Math.round(results.netBenefit) : 0)
 const animTaxCost = useAnimatedNumber(results ? Math.round(results.taxCost) : 0)
 const animTraditional = useAnimatedNumber(results ? Math.round(results.afterTaxTraditional) : 0)
 const animRoth = useAnimatedNumber(results ? Math.round(results.netRoth) : 0)

 const isPositive = (results?.netBenefit ?? 0) >= 0

 // Bar chart scaling
 const barMax = results
 ? Math.max(results.afterTaxTraditional, results.netRoth, 1)
 : 1

 // Find crossover year
 const crossoverYear = results
 ? results.yearlyData.findIndex(
  (d, i) => i > 0 && d.roth >= d.traditional && results.yearlyData[i - 1].roth < results.yearlyData[i - 1].traditional
 )
 : -1

 // Line chart: simplified with CSS bars representing growth trajectory
 const chartYears = results ? results.yearlyData : []
 const lineMax = chartYears.length > 0
 ? Math.max(...chartYears.map((d) => Math.max(d.traditional, d.roth)), 1)
 : 1

 return (
 <div className="px-5 py-10 max-w-[1100px] mx-auto">
 {/* Main layout */}
 <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-8 items-start">
  {/* ────── INPUT PANEL ────── */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 lg:sticky lg:top-[100px]">
  <SliderInput
  label="Amount to convert"
  tooltip="The amount you'd move from your Traditional IRA to a Roth IRA. The entire amount is treated as taxable income in the year of conversion."
  value={conversion}
  min={10000}
  max={3000000}
  step={5000}
  onChange={setConversion}
  />
  <SliderInput
  label="Current taxable income"
  tooltip="Your adjusted gross income before the conversion - wages, investment income, Social Security, etc. The conversion amount will be added on top of this."
  value={income}
  min={0}
  max={2000000}
  step={1000}
  onChange={setIncome}
  />

  {/* Filing Status */}
  <div className="mb-6">
  <div className="flex items-center gap-1.5 mb-2">
   <label className="font-sans text-[14px] font-semibold text-[#333333]">Filing status</label>
   <TooltipButton text="Your federal tax filing status. This determines which tax brackets apply to the conversion." />
  </div>
  <div className="grid grid-cols-2 gap-2">
   {[
   { key: 'mfj', label: 'Married Filing Jointly' },
   { key: 'single', label: 'Single' },
   ].map((opt) => (
   <button
   key={opt.key}
   onClick={() => setFiling(opt.key)}
   className={`py-3 rounded-[8px] font-sans text-[13px] font-semibold transition-all duration-200 border-2 ${
    filing === opt.key
    ? 'bg-[#1d7682] text-white border-[#1d7682]'
    : 'bg-white text-[#333333] border-[#E2E8F0] hover:border-[#1d7682]'
   }`}
   >
   {opt.label}
   </button>
   ))}
  </div>
  </div>

  {/* Expected Retirement Tax Rate - bracket selector */}
  <div className="mb-6">
  <div className="flex items-center justify-between mb-2">
   <div className="flex items-center gap-1.5">
   <label className="font-sans text-[14px] font-semibold text-[#333333]">Expected retirement tax rate</label>
   <TooltipButton text="The federal tax bracket you expect to be in during retirement when withdrawing from Traditional IRA. If you're unsure, your current marginal rate is a reasonable starting point." />
   </div>
   <span className="font-sans text-[14px] font-semibold text-[#1d7682]">{retirementRate}%</span>
  </div>
  <div className="grid grid-cols-7 gap-1.5">
   {[10, 12, 22, 24, 32, 35, 37].map((rate) => (
   <button
    key={rate}
    onClick={() => setRetirementRate(rate)}
    className={`py-2.5 rounded-[8px] font-sans text-[13px] font-semibold transition-all duration-200 border-2 ${
    retirementRate === rate
    ? 'bg-[#1d7682] text-white border-[#1d7682]'
    : 'bg-white text-[#333333] border-[#E2E8F0] hover:border-[#1d7682]'
    }`}
   >
    {rate}%
   </button>
   ))}
  </div>
  </div>

  {/* Years stepper */}
  <div className="mb-6">
  <div className="flex items-center justify-between mb-2">
   <div className="flex items-center gap-1.5">
   <label className="font-sans text-[14px] font-semibold text-[#333333]">Years until withdrawal</label>
   <TooltipButton text="How long before you'll tap these funds. Longer time horizons generally favor conversion because of more years of tax-free growth." />
   </div>
  </div>
  <div className="flex items-center gap-3">
   <button
   onClick={() => setYears((y) => Math.max(1, y - 1))}
   className="w-10 h-10 rounded-lg border-2 border-[#E2E8F0] bg-white text-[#333333] font-bold text-[18px] flex items-center justify-center hover:border-[#1d7682] transition-colors"
   aria-label="Decrease years"
   >
   &minus;
   </button>
   <div className="flex-1 text-center">
   <span className="font-sans text-[28px] font-bold text-[#1d7682]">{years}</span>
   <span className="font-sans text-[14px] text-[#5b6a71] ml-1">years</span>
   </div>
   <button
   onClick={() => setYears((y) => Math.min(40, y + 1))}
   className="w-10 h-10 rounded-lg border-2 border-[#E2E8F0] bg-white text-[#333333] font-bold text-[18px] flex items-center justify-center hover:border-[#1d7682] transition-colors"
   aria-label="Increase years"
   >
   +
   </button>
  </div>
  </div>

  <SliderInput
  label="Expected annual return"
  tooltip="The average annual investment return you expect. A diversified portfolio has historically returned 7-10% before inflation."
  value={annualReturn}
  min={3}
  max={12}
  step={0.5}
  onChange={setAnnualReturn}
  format={(v) => v.toFixed(1) + '%'}
  />
  </div>

  {/* ────── OUTPUT PANEL ────── */}
  <div>
  {!isValid ? (
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-8 text-center">
   <p className="font-sans text-[16px] text-[#5b6a71]">
   Enter a conversion amount of at least $10,000.
   </p>
  </div>
  ) : results && (
  <>
   {/* Hero: Net Benefit */}
   <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-8 text-center mb-6" aria-live="polite">
   <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-[#5b6a71] mb-2">
   {isPositive ? 'Projected Net Benefit of Converting' : 'Projected Net Cost of Converting'}
   </p>
   <p
   className={`font-sans text-[44px] md:text-[56px] font-extrabold leading-none ${
    isPositive ? 'text-[#2E5D4B]' : 'text-[#8B2E2E]'
   }`}
   >
   {isPositive ? '+' : ''}{formatCurrencyFull(animBenefit)}
   </p>
   <p className="font-sans text-[14px] text-[#5b6a71] mt-2">
   after {years} years at {annualReturn.toFixed(1)}% annual return
   </p>
   </div>

   {/* Key Metrics Row */}
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
   <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-5 text-center">
   <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">Tax Cost of Conversion</p>
   <p className="font-sans text-[24px] font-bold text-[#333333]">{formatCurrencyFull(animTaxCost)}</p>
   <p className="font-sans text-[12px] text-[#5b6a71] mt-0.5">Eff. rate: {formatPct(results.effRate * 100)}</p>
   </div>
   <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-5 text-center">
   <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">Break-Even Retirement Rate</p>
   <p className="font-sans text-[24px] font-bold text-[#1d7682]">{formatPct(results.betr * 100)}</p>
   <p className="font-sans text-[12px] text-[#5b6a71] mt-0.5">Conversion wins above this</p>
   </div>
   <div className="bg-[#F7F4EE] rounded-[12px] border border-[#E2E8F0] p-5 text-center">
   <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">Bracket Impact</p>
   <p className="font-sans text-[18px] font-bold text-[#333333]">
    {results.currentBracket}% &rarr; {results.newBracket}%
   </p>
   <p className="font-sans text-[12px] text-[#5b6a71] mt-0.5">
    {results.currentBracket === results.newBracket
    ? 'Stays in same bracket'
    : `Pushes into ${results.newBracket}% bracket`}
   </p>
   </div>
   </div>

   {/* Side-by-Side Bar Chart */}
   <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 mb-6">
   <h3 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#333333] mb-5">
   After-Tax Value at Year {years}
   </h3>
   <div className="space-y-3">
   {/* Traditional */}
   <div>
    <div className="flex justify-between items-center mb-1.5">
    <span className="font-sans text-[13px] font-medium text-[#333333]">
    Keep Traditional IRA
    </span>
    <span className="font-sans text-[13px] font-semibold text-[#5b6a71]">
    {formatCurrencyFull(animTraditional)}
    </span>
    </div>
    <div className="h-7 bg-[#F1F5F9] rounded-[6px] overflow-hidden">
    <div
    className="h-full rounded-[6px] transition-all duration-500 ease-out bg-[#5b6a71]"
    style={{ width: `${(results.afterTaxTraditional / barMax) * 100}%` }}
    />
    </div>
   </div>
   {/* Roth */}
   <div>
    <div className="flex justify-between items-center mb-1.5">
    <span className="font-sans text-[13px] font-medium text-[#333333]">
    Convert to Roth IRA
    </span>
    <span className="font-sans text-[13px] font-semibold text-[#5b6a71]">
    {formatCurrencyFull(animRoth)}
    </span>
    </div>
    <div className="h-7 bg-[#F1F5F9] rounded-[6px] overflow-hidden">
    <div
    className="h-full rounded-[6px] transition-all duration-500 ease-out bg-[#1d7682]"
    style={{ width: `${(Math.max(results.netRoth, 0) / barMax) * 100}%` }}
    />
    </div>
   </div>
   </div>
   {/* Difference callout */}
   <div className={`mt-4 p-3 rounded-[8px] text-center ${isPositive ? 'bg-[#2E5D4B]/5' : 'bg-[#8B2E2E]/5'}`}>
   <p className={`font-sans text-[14px] font-bold ${isPositive ? 'text-[#2E5D4B]' : 'text-[#8B2E2E]'}`}>
    {isPositive ? 'Roth produces' : 'Traditional produces'}{' '}
    {formatCurrencyFull(Math.abs(results.netBenefit))} more after taxes
   </p>
   </div>
   </div>

   {/* Projected Growth Line Chart (CSS-based) */}
   <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 mb-6">
   <h3 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#333333] mb-2">
   Projected Growth Over Time
   </h3>
   <div className="flex flex-wrap gap-4 mb-4">
   <div className="flex items-center gap-1.5">
    <span className="w-3 h-0.5 bg-[#5b6a71] rounded" />
    <span className="font-sans text-[12px] text-[#5b6a71]">Traditional (after-tax)</span>
   </div>
   <div className="flex items-center gap-1.5">
    <span className="w-3 h-0.5 bg-[#1d7682] rounded" />
    <span className="font-sans text-[12px] text-[#5b6a71]">Roth (net of tax cost)</span>
   </div>
   </div>

   {/* Mini bar chart representation of growth trajectory */}
   <div className="relative" aria-label={`Projected growth chart over ${years} years`}>
   <div className="space-y-1.5">
    {chartYears
    .filter((_, i) => {
    // Show every year if ≤15, otherwise sample
    if (years <= 15) return true
    if (years <= 25) return i % 2 === 0 || i === years
    return i % 3 === 0 || i === years
    })
    .map((d) => {
    const tradPct = lineMax > 0 ? (Math.max(d.traditional, 0) / lineMax) * 100 : 0
    const rothPct = lineMax > 0 ? (Math.max(d.roth, 0) / lineMax) * 100 : 0
    return (
     <div key={d.year} className="flex items-center gap-2">
     <span className="font-sans text-[10px] text-[#94A3B8] w-[32px] text-right flex-shrink-0">
     Yr {d.year}
     </span>
     <div className="flex-1 space-y-0.5">
     <div className="h-2.5 bg-[#F1F5F9] rounded-[3px] overflow-hidden">
      <div
      className="h-full rounded-[3px] transition-all duration-500 bg-[#5b6a71]/60"
      style={{ width: `${Math.max(tradPct, 0.5)}%` }}
      />
     </div>
     <div className="h-2.5 bg-[#F1F5F9] rounded-[3px] overflow-hidden">
      <div
      className="h-full rounded-[3px] transition-all duration-500 bg-[#1d7682]"
      style={{ width: `${Math.max(rothPct, 0.5)}%` }}
      />
     </div>
     </div>
     </div>
    )
    })}
   </div>
   </div>

   {crossoverYear > 0 && (
   <p className="font-sans text-[12px] text-[#1d7682] font-semibold mt-3">
    Roth overtakes Traditional in Year {crossoverYear}
   </p>
   )}
   </div>

   {/* Dynamic Interpretation */}
   <div className="bg-[#F7F4EE] rounded-[12px] p-6 mb-6">
   <p className="font-sans text-[15px] text-[#333333] leading-relaxed italic">
   {isPositive ? (
    <>
    Converting {formatInputCurrency(conversion)} to a Roth IRA would cost{' '}
    {formatCurrencyFull(results.taxCost)} in taxes today (effective rate:{' '}
    {formatPct(results.effRate * 100)}), but after {years} years of tax-free growth
    at {annualReturn.toFixed(1)}%, your projected after-tax wealth would be{' '}
    {formatCurrencyFull(results.netBenefit)} higher than keeping the Traditional IRA.
    Conversion breaks even if your retirement tax rate is above{' '}
    {formatPct(results.betr * 100)}.
    </>
   ) : (
    <>
    Converting {formatInputCurrency(conversion)} to a Roth IRA would cost{' '}
    {formatCurrencyFull(results.taxCost)} in taxes today (effective rate:{' '}
    {formatPct(results.effRate * 100)}). Based on your inputs, keeping the
    Traditional IRA is projected to leave you{' '}
    {formatCurrencyFull(Math.abs(results.netBenefit))} more after taxes in{' '}
    {years} years. However, if your retirement tax rate rises above{' '}
    {formatPct(results.betr * 100)}, conversion would become beneficial.
    </>
   )}
   </p>
   </div>

   {/* CTA */}
   <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-8 mb-6 text-center">
   <h3 className="font-serif text-[22px] md:text-[26px] font-bold text-[#333333]">
   A conversion strategy is rarely one-size-fits-all
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-2 max-w-[500px] mx-auto">
   A Farther advisor can model multi-year conversion ladders, state tax
   impact, IRMAA thresholds, and RMD strategies - tailored to your
   complete financial picture.
   </p>
   <Link
   href="/schedule-consultation"
   className="inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[16px] px-8 py-3.5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 mt-5 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2"
   >
   Build My Roth Conversion Plan
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
   </Link>
   </div>
  </>
  )}
  </div>
 </div>

 {/* ────── DISCLAIMERS ────── */}
 <div className="mt-10 max-w-[900px] mx-auto">
  <CalculatorDisclaimer
   toolName="Roth conversion"
   variant="default"
   resultSummary={results
    ? (results.netBenefit >= 0
        ? `Converting ${formatCurrencyFull(conversion)} costs ${formatCurrencyFull(Math.round(results.taxCost))} in tax now and projects ${formatCurrencyFull(Math.round(results.netBenefit))} more after-tax wealth over ${years} years. The right size of conversion depends on your bracket window.`
        : `Converting ${formatCurrencyFull(conversion)} costs ${formatCurrencyFull(Math.round(results.taxCost))} in tax now but the math runs against you under these assumptions. A smaller, multi-year conversion plan often changes the answer.`)
    : undefined}
   ctaLabel="Plan a multi-year Roth strategy with Jay →"
   additionalContext={`Calculations use ${TAX_YEAR} federal income tax brackets and do not account for state and local taxes, deductions, credits, or other income sources not modeled here. Future tax law changes may significantly affect results. Tax-free Roth IRA withdrawals generally require the account to be open at least 5 years and the holder to be age 59½ or older; early withdrawals may be subject to taxes and a 10% penalty. Farther Finance Inc. is a registered investment adviser with the SEC; registration does not imply a certain level of skill or training. See our Form ADV Part 2A on the disclosures page.`}
  />
 </div>
 </div>
 )
}
