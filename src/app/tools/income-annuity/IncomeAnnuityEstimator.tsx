'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'

// ─────────────────────────── PAYOUT RATE TABLE ───────────────────────────
// Base rates per $100K premium - Life with 10-Year Guarantee
// Source: Illustrative, based on Q1 2026 industry averages

interface RateEntry {
 age: number
 male: number
 female: number
}

const BASE_RATES: RateEntry[] = [
 { age: 55, male: 0.058, female: 0.0555 },
 { age: 60, male: 0.0635, female: 0.0605 },
 { age: 65, male: 0.0715, female: 0.068 },
 { age: 70, male: 0.082, female: 0.0775 },
 { age: 75, male: 0.0965, female: 0.091 },
 { age: 80, male: 0.115, female: 0.108 },
 { age: 85, male: 0.14, female: 0.131 },
]

// Adjustment factors by payout option
const OPTION_FACTORS: Record<string, number> = {
 life_only: 1.06,
 life_5yr: 1.02,
 life_10yr: 1.0,
 life_20yr: 0.92,
}

const OPTION_LABELS: Record<string, string> = {
 life_only: 'Life Only',
 life_5yr: 'Life with 5-Year Guarantee',
 life_10yr: 'Life with 10-Year Guarantee',
 life_20yr: 'Life with 20-Year Guarantee',
}

const OPTION_KEYS = ['life_only', 'life_5yr', 'life_10yr', 'life_20yr']

// ─────────────────────────── MATH ───────────────────────────

function interpolateRate(age: number, gender: 'male' | 'female'): number {
 // Clamp
 if (age <= 55) return BASE_RATES[0][gender]
 if (age >= 85) return BASE_RATES[BASE_RATES.length - 1][gender]

 // Find surrounding entries
 let low = BASE_RATES[0]
 let high = BASE_RATES[1]
 for (let i = 0; i < BASE_RATES.length - 1; i++) {
 if (age >= BASE_RATES[i].age && age <= BASE_RATES[i + 1].age) {
 low = BASE_RATES[i]
 high = BASE_RATES[i + 1]
 break
 }
 }

 const fraction = (age - low.age) / (high.age - low.age)
 return low[gender] + fraction * (high[gender] - low[gender])
}

function getPayoutRate(
 age: number,
 gender: 'male' | 'female',
 option: string
): number {
 const baseRate = interpolateRate(age, gender)
 const factor = OPTION_FACTORS[option] || 1.0
 return baseRate * factor
}

function calculateIncome(
 premium: number,
 age: number,
 gender: 'male' | 'female',
 option: string
) {
 const rate = getPayoutRate(age, gender, option)
 const annual = premium * rate
 const monthly = annual / 12
 return { monthly, annual, rate }
}

// ─────────────────────────── HELPERS ───────────────────────────

function formatCurrencyFull(num: number): string {
 return '$' + Math.round(num).toLocaleString('en-US')
}

function formatInputCurrency(num: number): string {
 return '$' + num.toLocaleString('en-US')
}

function formatRate(rate: number): string {
 return (rate * 100).toFixed(2) + '%'
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

// ─────────────────────────── COMPONENT ───────────────────────────

export default function IncomeAnnuityEstimator() {
 const [premium, setPremium] = useState(250000)
 const [age, setAge] = useState(65)
 const [gender, setGender] = useState<'male' | 'female'>('male')
 const [option, setOption] = useState('life_10yr')

 const results = calculateIncome(premium, age, gender, option)
 const animMonthly = useAnimatedNumber(Math.round(results.monthly))
 const animAnnual = useAnimatedNumber(Math.round(results.annual))

 // Calculate all options for bar chart comparison
 const allOptions = OPTION_KEYS.map((key) => {
 const r = calculateIncome(premium, age, gender, key)
 return { key, label: OPTION_LABELS[key], monthly: r.monthly, rate: r.rate }
 })
 const maxMonthly = Math.max(...allOptions.map((o) => o.monthly), 1)

 const premiumPct = ((premium - 25000) / (5000000 - 25000)) * 100

 const getGuaranteeClause = () => {
 switch (option) {
 case 'life_5yr':
  return ', with payments guaranteed for at least 5 years'
 case 'life_10yr':
  return ', with payments guaranteed for at least 10 years'
 case 'life_20yr':
  return ', with payments guaranteed for at least 20 years'
 default:
  return ''
 }
 }

 const isValid = premium >= 25000

 // Bar colors - site teal palette
 const barColors: Record<string, string> = {
 life_only: '#155f69',
 life_5yr: '#1d7682',
 life_10yr: '#2a9dab',
 life_20yr: '#4db8c4',
 }

 return (
 <div className="px-5 py-10 max-w-[1060px] mx-auto">
 {/* Main layout */}
 <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-8 items-start">
  {/* ────── INPUT PANEL ────── */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 lg:sticky lg:top-[100px]">
  {/* Premium */}
  <div className="mb-6">
  <div className="flex items-center justify-between mb-2">
   <div className="flex items-center gap-1.5">
   <label className="font-sans text-[14px] font-semibold text-[#333333]">
   How much would you invest?
   </label>
   <TooltipButton text="The lump sum you'd use to purchase a guaranteed income stream." />
   </div>
   <span className="font-sans text-[14px] font-semibold text-[#1d7682]">
   {formatInputCurrency(premium)}
   </span>
  </div>
  <input
   type="range"
   min={25000}
   max={5000000}
   step={5000}
   value={premium}
   onChange={(e) => setPremium(Number(e.target.value))}
   className="w-full h-2 rounded-full appearance-none cursor-pointer"
   style={{
   background: `linear-gradient(to right, #1d7682 0%, #1d7682 ${premiumPct}%, #E2E8F0 ${premiumPct}%, #E2E8F0 100%)`,
   }}
   aria-label="Investment amount"
   aria-valuenow={premium}
   aria-valuemin={25000}
   aria-valuemax={5000000}
  />
  <div className="flex justify-between mt-1">
   <span className="font-sans text-[11px] text-[#94A3B8]">$25,000</span>
   <span className="font-sans text-[11px] text-[#94A3B8]">$5,000,000</span>
  </div>
  </div>

  {/* Age */}
  <div className="mb-6">
  <div className="flex items-center justify-between mb-2">
   <div className="flex items-center gap-1.5">
   <label className="font-sans text-[14px] font-semibold text-[#333333]">
   Your current age
   </label>
   <TooltipButton text="Income payouts are higher at older ages because payments are spread over a shorter expected lifetime." />
   </div>
  </div>
  <div className="flex items-center gap-3">
   <button
   onClick={() => setAge((a) => Math.max(55, a - 1))}
   className="w-10 h-10 rounded-lg border-2 border-[#E2E8F0] bg-white text-[#333333] font-bold text-[18px] flex items-center justify-center hover:border-[#1d7682] transition-colors"
   aria-label="Decrease age"
   >
   &minus;
   </button>
   <div className="flex-1 text-center">
   <span className="font-sans text-[28px] font-bold text-[#1d7682]">
   {age}
   </span>
   </div>
   <button
   onClick={() => setAge((a) => Math.min(85, a + 1))}
   className="w-10 h-10 rounded-lg border-2 border-[#E2E8F0] bg-white text-[#333333] font-bold text-[18px] flex items-center justify-center hover:border-[#1d7682] transition-colors"
   aria-label="Increase age"
   >
   +
   </button>
  </div>
  <div className="flex justify-between mt-1">
   <span className="font-sans text-[11px] text-[#94A3B8]">Age 55</span>
   <span className="font-sans text-[11px] text-[#94A3B8]">Age 85</span>
  </div>
  </div>

  {/* Gender */}
  <div className="mb-6">
  <div className="flex items-center gap-1.5 mb-2">
   <label className="font-sans text-[14px] font-semibold text-[#333333]">
   Gender
   </label>
   <TooltipButton text="Payout rates differ by gender due to actuarial life expectancy differences." />
  </div>
  <div className="grid grid-cols-2 gap-2">
   <button
   onClick={() => setGender('male')}
   className={`py-3 rounded-[8px] font-sans text-[14px] font-semibold transition-all duration-200 border-2 ${
   gender === 'male'
    ? 'bg-[#1d7682] text-white border-[#1d7682]'
    : 'bg-white text-[#333333] border-[#E2E8F0] hover:border-[#1d7682]'
   }`}
   >
   Male
   </button>
   <button
   onClick={() => setGender('female')}
   className={`py-3 rounded-[8px] font-sans text-[14px] font-semibold transition-all duration-200 border-2 ${
   gender === 'female'
    ? 'bg-[#1d7682] text-white border-[#1d7682]'
    : 'bg-white text-[#333333] border-[#E2E8F0] hover:border-[#1d7682]'
   }`}
   >
   Female
   </button>
  </div>
  </div>

  {/* Payout option */}
  <div className="mb-2">
  <div className="flex items-center gap-1.5 mb-2">
   <label className="font-sans text-[14px] font-semibold text-[#333333]">
   Payout type
   </label>
   <TooltipButton text="Life Only pays the most but stops at death. Guarantee options ensure payments for a minimum number of years even if you pass away sooner." />
  </div>
  <select
   value={option}
   onChange={(e) => setOption(e.target.value)}
   className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] bg-white focus:outline-none focus:border-[#1d7682] transition-colors"
   aria-label="Payout type"
  >
   {OPTION_KEYS.map((key) => (
   <option key={key} value={key}>
   {OPTION_LABELS[key]}
   </option>
   ))}
  </select>
  </div>
  </div>

  {/* ────── OUTPUT PANEL ────── */}
  <div>
  {/* Hero number */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-8 text-center mb-6">
  {isValid ? (
   <>
   <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-[#5b6a71] mb-2">
   Estimated Monthly Income
   </p>
   <p className="font-sans text-[48px] md:text-[60px] font-extrabold text-[#1d7682] leading-none">
   {formatCurrencyFull(animMonthly)}
   <span className="text-[24px] md:text-[28px] font-bold text-[#5b6a71]">
    /mo
   </span>
   </p>
   <p className="font-sans text-[18px] font-semibold text-[#333333] mt-3">
   {formatCurrencyFull(animAnnual)} per year
   </p>
   <p className="font-sans text-[13px] text-[#5b6a71] mt-1">
   {formatRate(results.rate)} effective payout rate
   </p>
   </>
  ) : (
   <p className="font-sans text-[16px] text-[#5b6a71]">
   Minimum premium is $25,000. Adjust the slider above.
   </p>
  )}
  </div>

  {/* Interpretation text */}
  {isValid && (
  <div className="bg-[#F7F4EE] rounded-[12px] p-6 mb-6">
   <p className="font-sans text-[15px] text-[#333333] leading-relaxed italic">
   Based on a {formatInputCurrency(premium)} investment at age{' '}
   {age}, you could receive approximately{' '}
   {formatCurrencyFull(Math.round(results.monthly))}/month in
   guaranteed income for life{getGuaranteeClause()}.
   </p>
  </div>
  )}

  {/* ────── COMPARISON BAR CHART ────── */}
  {isValid && (
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 mb-6">
   <h3 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#333333] mb-5">
   Compare Payout Options
   </h3>
   <div
   className="space-y-4"
   aria-label="Horizontal bar chart comparing monthly income across payout options"
   >
   {allOptions.map((opt) => {
   const pct = maxMonthly > 0 ? (opt.monthly / maxMonthly) * 100 : 0
   const isSelected = opt.key === option
   return (
    <div key={opt.key}>
    <div className="flex justify-between items-center mb-1.5">
    <span
     className={`font-sans text-[13px] ${
     isSelected
     ? 'font-bold text-[#1d7682]'
     : 'font-medium text-[#333333]'
     }`}
    >
     {opt.label}
     {isSelected && (
     <span className="text-[10px] ml-1.5 bg-[#1d7682] text-white px-1.5 py-0.5 rounded-full font-semibold uppercase">
     Selected
     </span>
     )}
    </span>
    <span className="font-sans text-[13px] font-semibold text-[#5b6a71]">
     {formatCurrencyFull(Math.round(opt.monthly))}/mo
    </span>
    </div>
    <div className="h-7 bg-[#F1F5F9] rounded-[6px] overflow-hidden">
    <div
     className="h-full rounded-[6px] transition-all duration-500 ease-out"
     style={{
     width: `${Math.max(pct, 2)}%`,
     backgroundColor: barColors[opt.key],
     boxShadow: isSelected
     ? `0 0 0 2px #1d7682, inset 0 0 0 0 transparent`
     : 'none',
     }}
    />
    </div>
    </div>
   )
   })}
   </div>
   <p className="font-sans text-[11px] text-[#94A3B8] mt-4">
   Life Only pays the highest income. Longer guarantee periods
   reduce monthly payments but protect your beneficiaries.
   </p>
  </div>
  )}

  {/* ────── CTA ────── */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-8 mb-6 text-center">
  <h3 className="font-serif text-[22px] md:text-[26px] font-bold text-[#333333]">
   Want to explore if an income annuity fits your retirement plan?
  </h3>
  <p className="font-sans text-[15px] text-[#5b6a71] mt-2 max-w-[480px] mx-auto">
   A Farther advisor can help you evaluate annuity options alongside
   your full financial picture.
  </p>
  <Link
   href="/schedule-consultation"
   className="inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[16px] px-8 py-3.5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 mt-5 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2"
  >
   Schedule a Virtual Meeting
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
  </div>
 </div>

 {/* ────── DISCLAIMERS ────── */}
 <div className="mt-10 max-w-[900px] mx-auto">
  <CalculatorDisclaimer
   toolName="annuity income"
   variant="default"
   resultSummary={`At ${age}, a ${formatCurrencyFull(premium)} premium pencils to ${formatCurrencyFull(Math.round(results.monthly))}/month for life. The right move depends on the rest of your retirement income.`}
   ctaLabel="Pressure-test this annuity decision with Jay →"
   additionalContext="Payout rates shown are hypothetical and based on industry averages as of Q1 2026. They do not represent any specific annuity product, are not guaranteed, and are not an offer to sell or solicitation to purchase any annuity. Actual quotes will vary based on the insurance carrier, current interest rates, product features, and underwriting. Annuities are insurance products and may involve surrender charges, fees, and other limitations. Farther Finance Inc. is a registered investment adviser with the SEC; registration does not imply a certain level of skill or training. See our Form ADV Part 2A on the disclosures page."
  />
 </div>
 </div>
 )
}

// ─────────────────────────── TOOLTIP BUTTON ───────────────────────────

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
  <span className="absolute left-6 top-0 z-20 w-[220px] bg-white border border-[#E2E8F0] rounded-lg shadow-lg p-3 font-sans text-[12px] text-[#64748B] leading-relaxed">
  {text}
  </span>
 )}
 </span>
 )
}
