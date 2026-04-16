'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'

// ─────────────────── TYPES & DATA ───────────────────

type QuestionType = 'slider' | 'dropdown' | 'currency' | 'radio'

interface Question {
 id: string
 question: string
 type: QuestionType
 tooltip: string
 min?: number
 max?: number
 step?: number
 defaultValue?: number | string
 placeholder?: string
 options?: string[]
 required?: boolean
}

const questions: Question[] = [
 {
 id: 'age',
 question: 'How old are you?',
 type: 'slider',
 min: 25,
 max: 80,
 step: 1,
 defaultValue: 50,
 tooltip: 'Your current age helps us project your savings timeline.',
 },
 {
 id: 'income',
 question: 'What is your annual household income?',
 type: 'dropdown',
 options: [
 '$100,000 - $249,999',
 '$250,000 - $499,999',
 '$500,000 - $999,999',
 '$1,000,000 - $2,499,999',
 '$2,500,000 - $4,999,999',
 '$5,000,000+',
 ],
 defaultValue: '$250,000 - $499,999',
 tooltip: 'Include all household earned income before taxes.',
 },
 {
 id: 'assets',
 question: 'What are your total investable assets today?',
 type: 'currency',
 placeholder: '$2,000,000',
 min: 0,
 max: 100000000,
 step: 10000,
 tooltip:
 'Include retirement accounts (401k, IRA), brokerage accounts, and cash savings. Exclude primary home equity and business value.',
 },
 {
 id: 'monthlySavings',
 question: 'How much do you save toward retirement each month?',
 type: 'currency',
 placeholder: '$5,000',
 min: 0,
 max: 500000,
 step: 500,
 tooltip:
 'Include 401(k) contributions, IRA contributions, and any other money earmarked for retirement.',
 },
 {
 id: 'retireAge',
 question: 'At what age do you want to retire?',
 type: 'slider',
 min: 45,
 max: 85,
 step: 1,
 defaultValue: 65,
 tooltip:
 "The age you'd like to stop working full-time and rely on your investments.",
 },
 {
 id: 'annualSpending',
 question:
 'How much do you expect to spend annually in retirement?',
 type: 'currency',
 placeholder: '$200,000',
 min: 10000,
 max: 10000000,
 step: 5000,
 tooltip:
 'Think about your desired lifestyle - travel, housing, healthcare, and daily living. A common benchmark is 70-80% of current income.',
 },
 {
 id: 'socialSecurity',
 question:
 'What is your estimated annual Social Security benefit?',
 type: 'currency',
 placeholder: '$40,000',
 min: 0,
 max: 120000,
 step: 1000,
 tooltip:
 'Check ssa.gov for your estimate. If unsure, $35,000-$50,000 is typical for high earners. Enter $0 if you prefer not to count on it.',
 required: false,
 },
 {
 id: 'business',
 question:
 'Do you own a business or have significant equity in a private company?',
 type: 'radio',
 options: ['Yes', 'No'],
 tooltip:
 'Business equity can be a major retirement asset, but it requires liquidity planning.',
 },
 {
 id: 'pension',
 question: 'Will you receive a pension in retirement?',
 type: 'radio',
 options: ['Yes', 'No', 'Not Sure'],
 tooltip:
 'Pensions provide guaranteed income and meaningfully improve retirement readiness.',
 },
 {
 id: 'advisor',
 question: 'Do you currently work with a financial advisor?',
 type: 'radio',
 options: [
 "Yes, and I'm satisfied",
 'Yes, but open to alternatives',
 'No, I manage my own investments',
 "No, but I'm looking for one",
 ],
 tooltip:
 "No judgment - we just want to understand your starting point.",
 },
]

const incomeMidpoints: Record<string, number> = {
 '$100,000 - $249,999': 175000,
 '$250,000 - $499,999': 375000,
 '$500,000 - $999,999': 750000,
 '$1,000,000 - $2,499,999': 1750000,
 '$2,500,000 - $4,999,999': 3750000,
 '$5,000,000+': 7500000,
}

// ─────────────────── CALCULATION ENGINE ───────────────────

function getAgeBenchmark(age: number): number {
 const benchmarks: [number, number][] = [
 [30, 1],
 [35, 2],
 [40, 3],
 [45, 4],
 [50, 6],
 [55, 7],
 [60, 8],
 [67, 10],
 ]
 if (age <= 30) return benchmarks[0][1]
 if (age >= 67) return benchmarks[benchmarks.length - 1][1]
 for (let i = 0; i < benchmarks.length - 1; i++) {
 if (age >= benchmarks[i][0] && age < benchmarks[i + 1][0]) {
 const ratio =
  (age - benchmarks[i][0]) /
  (benchmarks[i + 1][0] - benchmarks[i][0])
 return benchmarks[i][1] + ratio * (benchmarks[i + 1][1] - benchmarks[i][1])
 }
 }
 return 10
}

interface CalcResults {
 SCORE: number
 TOTAL_PROJECTED: number
 REQUIRED_NEST_EGG: number
 FUNDED_RATIO: number
 DOLLAR_GAP: number
 MONTHLY_GAP: number
 YTR: number
 savings_rate: number
 net_annual_need: number
 annual_pension: number
 advisor_impact: number
 B: number
 P: number
 savingsRatePoints: number
 benchmarkPoints: number
 fundedPoints: number
 timePoints: number
 bonusPoints: number
 SS: number
}

function calculateScore(answers: Record<string, string | number>): CalcResults {
 const A = Number(answers.age) || 50
 const I = incomeMidpoints[answers.income as string] || 375000
 const S = Number(answers.assets) || 0
 const M = Number(answers.monthlySavings) || 0
 const R = Number(answers.retireAge) || 65
 const E = Number(answers.annualSpending) || 0
 const SS = Number(answers.socialSecurity) || 0
 const B = answers.business === 'Yes' ? 1 : 0
 const P = answers.pension === 'Yes' ? 1 : 0

 const YTR = R - A

 // Future Value of Current Assets
 const FV_assets = S * Math.pow(1.07, YTR)

 // Future Value of Monthly Contributions
 const r_monthly = 0.07 / 12
 const n_months = YTR * 12
 const FV_contributions =
 n_months > 0
 ? M * ((Math.pow(1 + r_monthly, n_months) - 1) / r_monthly)
 : 0

 const TOTAL_PROJECTED = FV_assets + FV_contributions

 // Required Nest Egg
 const annual_pension = P * (I * 0.15)
 let net_annual_need = E - SS - annual_pension
 if (net_annual_need < 0) net_annual_need = 0
 const REQUIRED_NEST_EGG = net_annual_need > 0 ? net_annual_need / 0.04 : 0

 // Funded Ratio
 let FUNDED_RATIO =
 REQUIRED_NEST_EGG > 0 ? TOTAL_PROJECTED / REQUIRED_NEST_EGG : 1.5
 if (FUNDED_RATIO > 1.5) FUNDED_RATIO = 1.5

 // Savings Rate Score (0-20)
 const savings_rate = I > 0 ? (M * 12) / I : 0
 let savingsRatePoints: number
 if (savings_rate >= 0.2) savingsRatePoints = 20
 else if (savings_rate >= 0.15) savingsRatePoints = 16
 else if (savings_rate >= 0.1) savingsRatePoints = 12
 else if (savings_rate >= 0.05) savingsRatePoints = 8
 else savingsRatePoints = 4

 // Benchmark Score (0-25)
 const benchmarkMultiple = getAgeBenchmark(A)
 const BENCHMARK = benchmarkMultiple * I
 const BENCHMARK_RATIO = BENCHMARK > 0 ? S / BENCHMARK : 1.25
 let benchmarkPoints: number
 if (BENCHMARK_RATIO >= 1.25) benchmarkPoints = 25
 else if (BENCHMARK_RATIO >= 1.0) benchmarkPoints = 21
 else if (BENCHMARK_RATIO >= 0.75) benchmarkPoints = 16
 else if (BENCHMARK_RATIO >= 0.5) benchmarkPoints = 10
 else benchmarkPoints = 5

 // Funded Ratio Score (0-35)
 let fundedPoints: number
 if (FUNDED_RATIO >= 1.25) fundedPoints = 35
 else if (FUNDED_RATIO >= 1.0) fundedPoints = 30
 else if (FUNDED_RATIO >= 0.8) fundedPoints = 24
 else if (FUNDED_RATIO >= 0.6) fundedPoints = 18
 else if (FUNDED_RATIO >= 0.4) fundedPoints = 12
 else fundedPoints = 6

 // Time Horizon Bonus (0-10)
 let timePoints: number
 if (YTR >= 25) timePoints = 10
 else if (YTR >= 20) timePoints = 8
 else if (YTR >= 15) timePoints = 6
 else if (YTR >= 10) timePoints = 4
 else if (YTR >= 5) timePoints = 2
 else timePoints = 0

 // Bonus Factors (0-10)
 let bonusPoints = 0
 bonusPoints += B * 3
 bonusPoints += P * 4
 if (answers.advisor === "Yes, and I'm satisfied") bonusPoints += 3
 else if (answers.advisor === 'Yes, but open to alternatives')
 bonusPoints += 2
 else if (answers.advisor === "No, but I'm looking for one")
 bonusPoints += 1
 if (bonusPoints > 10) bonusPoints = 10

 const SCORE =
 savingsRatePoints +
 benchmarkPoints +
 fundedPoints +
 timePoints +
 bonusPoints

 const DOLLAR_GAP = Math.max(0, REQUIRED_NEST_EGG - TOTAL_PROJECTED)
 const MONTHLY_GAP =
 DOLLAR_GAP > 0 && n_months > 0
 ? DOLLAR_GAP /
  ((Math.pow(1 + r_monthly, n_months) - 1) / r_monthly)
 : 0

 const advisor_impact =
 TOTAL_PROJECTED * (Math.pow(1.015, YTR) - 1)

 return {
 SCORE,
 TOTAL_PROJECTED,
 REQUIRED_NEST_EGG,
 FUNDED_RATIO,
 DOLLAR_GAP,
 MONTHLY_GAP,
 YTR,
 savings_rate,
 net_annual_need,
 annual_pension,
 advisor_impact,
 B,
 P,
 savingsRatePoints,
 benchmarkPoints,
 fundedPoints,
 timePoints,
 bonusPoints,
 SS,
 }
}

// ─────────────────── HELPERS ───────────────────

function fmtCurrency(n: number): string {
 return '$' + Math.round(n).toLocaleString('en-US')
}

function fmtPct(d: number): string {
 return (d * 100).toFixed(1) + '%'
}

function parseCurrency(s: string): number {
 return Number(s.replace(/[^0-9.-]/g, '')) || 0
}

function formatInputVal(n: number): string {
 if (!n && n !== 0) return ''
 return '$' + n.toLocaleString('en-US')
}

// ─────────────────── COMPONENT ───────────────────

type Screen = 'quiz' | 'results'

export default function RetirementAssessment() {
 const [screen, setScreen] = useState<Screen>('quiz')
 const [step, setStep] = useState(0)
 const [answers, setAnswers] = useState<Record<string, string | number>>({
 age: 50,
 income: '$250,000 - $499,999',
 retireAge: 65,
 })
 const [errors, setErrors] = useState<Record<string, string>>({})
 const [results, setResults] = useState<CalcResults | null>(null)
 const [animatedScore, setAnimatedScore] = useState(0)
 const [ringAnimated, setRingAnimated] = useState(false)
 const [barsAnimated, setBarsAnimated] = useState(false)
 const [slideDir, setSlideDir] = useState<'left' | 'right'>('left')
 const [transitioning, setTransitioning] = useState(false)
 const [contactInfo, setContactInfo] = useState({
 firstName: '',
 lastName: '',
 email: '',
 phone: '',
 })
 const [contactErrors, setContactErrors] = useState<Record<string, string>>({})
 const [formSubmitted, setFormSubmitted] = useState(false)
 const [submitting, setSubmitting] = useState(false)
 const [tooltipOpen, setTooltipOpen] = useState(false)
 const resultsRef = useRef<HTMLDivElement>(null)

 const q = questions[step]

 const setAnswer = (val: string | number) => {
 setAnswers((prev) => ({ ...prev, [q.id]: val }))
 setErrors((prev) => ({ ...prev, [q.id]: '' }))
 }

 const validate = (): boolean => {
 const val = answers[q.id]
 const errs: Record<string, string> = {}

 if (q.id === 'retireAge') {
 const age = Number(answers.age) || 50
 const retireAge = Number(val)
 if (retireAge <= age) {
  errs[q.id] =
  'Retirement age must be later than your current age.'
  setErrors(errs)
  return false
 }
 }

 if (q.id === 'annualSpending') {
 if (!val || Number(val) <= 0) {
  errs[q.id] = 'Please enter your expected retirement spending.'
  setErrors(errs)
  return false
 }
 }

 // Required fields (skip socialSecurity which defaults to 0)
 if (q.id !== 'socialSecurity' && q.required !== false) {
 if (val === undefined || val === '' || val === null) {
  errs[q.id] = 'This field is required.'
  setErrors(errs)
  return false
 }
 }

 setErrors({})
 return true
 }

 const nextStep = () => {
 if (!validate()) return
 if (step < 9) {
 setSlideDir('left')
 setTransitioning(true)
 setTimeout(() => {
  setStep((s) => s + 1)
  setTransitioning(false)
  setTooltipOpen(false)
 }, 200)
 } else {
 // Default socialSecurity to 0 if empty
 const finalAnswers = { ...answers }
 if (!finalAnswers.socialSecurity) finalAnswers.socialSecurity = 0
 const calc = calculateScore(finalAnswers)
 setResults(calc)
 setScreen('results')

 // Animate score
 const target = Math.min(calc.SCORE, 100)
 const duration = 1500
 const startTime = performance.now()
 const animate = (now: number) => {
  const elapsed = now - startTime
  const progress = Math.min(elapsed / duration, 1)
  const eased = 1 - Math.pow(1 - progress, 3)
  setAnimatedScore(Math.round(eased * target))
  if (progress < 1) {
  requestAnimationFrame(animate)
  } else {
  setAnimatedScore(Math.round(target))
  setTimeout(() => setRingAnimated(true), 100)
  setTimeout(() => setBarsAnimated(true), 600)
  }
 }
 requestAnimationFrame(animate)
 }
 }

 const prevStep = () => {
 if (step > 0) {
 setSlideDir('right')
 setTransitioning(true)
 setTimeout(() => {
  setStep((s) => s - 1)
  setTransitioning(false)
  setTooltipOpen(false)
 }, 200)
 }
 }

 const handleContactSubmit = async (e: React.FormEvent) => {
 e.preventDefault()
 const errs: Record<string, string> = {}
 if (contactInfo.firstName.trim().length < 2) errs.firstName = 'Required'
 if (contactInfo.lastName.trim().length < 2) errs.lastName = 'Required'
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email))
 errs.email = 'Please enter a valid email'
 setContactErrors(errs)
 if (Object.keys(errs).length > 0) return

 setSubmitting(true)
 try {
 await fetch('/api/lead', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
  ...contactInfo,
  score: results?.SCORE,
  status:
   (results?.SCORE ?? 0) >= 75
   ? 'Green'
   : (results?.SCORE ?? 0) >= 50
   ? 'Yellow'
   : 'Red',
  answers,
  results,
  reportHtml: resultsRef.current?.innerHTML || '',
  timestamp: new Date().toISOString(),
  source: 'retirement-readiness',
  }),
 }).catch(() => {})
 } catch {
 // silently fail
 }
 setSubmitting(false)
 setFormSubmitted(true)
 }

 // ─────────────────── QUIZ SCREEN ───────────────────
 if (screen === 'quiz') {
 const currentVal = answers[q.id]
 const canProceed =
 q.id === 'socialSecurity'
  ? true
  : currentVal !== undefined && currentVal !== '' && currentVal !== null

 return (
 <div className="min-h-[80vh] flex flex-col px-5 py-8 max-w-[600px] mx-auto">
  {/* Progress bar */}
  <div className="mb-2">
  <div className="flex justify-between items-center mb-2">
  <span className="font-sans text-[12px] font-semibold text-[#5b6a71]">
   Step {step + 1} of 10
  </span>
  <span className="font-sans text-[12px] text-[#94A3B8]">
   Retirement Readiness Assessment
  </span>
  </div>
  <div className="h-[5px] bg-[#E2E8F0] rounded-full overflow-hidden">
  <div
   className="h-full bg-[#1d7682] rounded-full transition-all duration-400 ease-out"
   style={{ width: `${((step + 1) / 10) * 100}%` }}
  />
  </div>
  </div>

  {/* Question */}
  <div
  className="flex-1 flex flex-col justify-center py-8"
  style={{
  opacity: transitioning ? 0 : 1,
  transform: transitioning
   ? `translateX(${slideDir === 'left' ? '-20px' : '20px'})`
   : 'translateX(0)',
  transition: 'opacity 0.2s ease, transform 0.2s ease',
  }}
  >
  <div className="flex items-start gap-2 mb-6">
  <h2 className="font-sans text-[20px] md:text-[22px] font-semibold text-[#333333] leading-snug">
   {q.question}
  </h2>
  <button
   onClick={() => setTooltipOpen(!tooltipOpen)}
   onBlur={() => setTimeout(() => setTooltipOpen(false), 200)}
   className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#E2E8F0] text-[#64748B] text-[11px] font-bold flex items-center justify-center hover:bg-[#CBD5E1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1d7682]"
   aria-label="More information"
  >
   i
  </button>
  </div>
  {tooltipOpen && (
  <div className="mb-6 p-4 bg-[#F0F7FF] border border-[#3B82F6]/20 rounded-[8px] font-sans text-[14px] text-[#1E293B] leading-relaxed">
   {q.tooltip}
  </div>
  )}

  {/* Input rendering */}
  {q.type === 'slider' && (
  <div>
   <div className="text-center mb-4">
   <span className="font-sans text-[40px] font-bold text-[#1d7682]">
   {Number(currentVal) || q.defaultValue}
   </span>
   </div>
   <input
   type="range"
   min={q.min}
   max={q.max}
   step={q.step}
   value={Number(currentVal) || q.defaultValue}
   onChange={(e) => setAnswer(Number(e.target.value))}
   className="w-full h-2 rounded-full appearance-none cursor-pointer"
   style={{
   background: `linear-gradient(to right, #1d7682 0%, #1d7682 ${(((Number(currentVal) || Number(q.defaultValue)) - (q.min ?? 0)) / ((q.max ?? 100) - (q.min ?? 0))) * 100}%, #E2E8F0 ${(((Number(currentVal) || Number(q.defaultValue)) - (q.min ?? 0)) / ((q.max ?? 100) - (q.min ?? 0))) * 100}%, #E2E8F0 100%)`,
   }}
   aria-label={q.question}
   aria-valuenow={Number(currentVal) || Number(q.defaultValue)}
   aria-valuemin={q.min}
   aria-valuemax={q.max}
   />
   <div className="flex justify-between mt-1">
   <span className="font-sans text-[11px] text-[#94A3B8]">{q.min}</span>
   <span className="font-sans text-[11px] text-[#94A3B8]">{q.max}</span>
   </div>
  </div>
  )}

  {q.type === 'dropdown' && (
  <select
   value={(currentVal as string) || (q.defaultValue as string) || ''}
   onChange={(e) => setAnswer(e.target.value)}
   className="w-full px-4 py-3.5 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] bg-white focus:outline-none focus:border-[#1d7682] transition-colors"
   aria-label={q.question}
  >
   {q.options?.map((opt) => (
   <option key={opt} value={opt}>{opt}</option>
   ))}
  </select>
  )}

  {q.type === 'currency' && (
  <div>
   <input
   type="text"
   inputMode="numeric"
   placeholder={q.placeholder}
   value={currentVal !== undefined && currentVal !== '' ? formatInputVal(Number(currentVal)) : ''}
   onChange={(e) => {
   const raw = parseCurrency(e.target.value)
   if (raw >= 0 && raw <= (q.max ?? Infinity)) {
    setAnswer(raw)
   }
   }}
   className="w-full px-4 py-3.5 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[16px] text-[#333333] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
   aria-label={q.question}
   />
  </div>
  )}

  {q.type === 'radio' && (
  <div className="space-y-3">
   {q.options?.map((opt) => {
   const isSelected = currentVal === opt
   return (
   <button
    key={opt}
    onClick={() => {
    setAnswer(opt)
    // Auto-advance after short delay for radio
    setTimeout(() => {
    if (step < 9) {
     setSlideDir('left')
     setTransitioning(true)
     setTimeout(() => {
     setStep((s) => s + 1)
     setTransitioning(false)
     setTooltipOpen(false)
     }, 200)
    }
    }, 300)
    }}
    className={`w-full text-left px-5 py-4 rounded-[12px] border-2 transition-all duration-200 font-sans text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2 ${
    isSelected
    ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#333333]'
    : 'border-[#E2E8F0] bg-white text-[#1E293B] hover:border-[#1d7682]/40 hover:bg-[#F0F7FF]'
    }`}
    role="radio"
    aria-checked={isSelected}
   >
    <div className="flex items-center gap-3">
    <div
    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
     isSelected ? 'border-[#1d7682] bg-[#1d7682]' : 'border-[#CBD5E1]'
    }`}
    >
    {isSelected && (
     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
     <polyline points="20 6 9 17 4 12" />
     </svg>
    )}
    </div>
    <span>{opt}</span>
    </div>
   </button>
   )
   })}
  </div>
  )}

  {/* Error */}
  {errors[q.id] && (
  <p className="font-sans text-[13px] text-[#EF4444] mt-3" role="alert" aria-live="polite">
   {errors[q.id]}
  </p>
  )}
  </div>

  {/* Navigation */}
  <div className="flex items-center justify-between pt-6 border-t border-[#E2E8F0]">
  <button
  onClick={prevStep}
  disabled={step === 0}
  className={`font-sans text-[15px] font-medium rounded px-2 py-1 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1d7682] ${
   step === 0
   ? 'text-[#CBD5E1] cursor-not-allowed'
   : 'text-[#5b6a71] hover:text-[#333333]'
  }`}
  >
  &larr; Back
  </button>
  {q.type !== 'radio' && (
  <button
   onClick={nextStep}
   disabled={!canProceed}
   className={`font-sans text-[15px] font-semibold px-8 py-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2 ${
   canProceed
   ? 'bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white hover:from-[#238a97] hover:to-[#155f69] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)]'
   : 'bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed'
   }`}
  >
   {step === 9 ? 'See My Results' : 'Next'} &rarr;
  </button>
  )}
  </div>
 </div>
 )
 }

 // ─────────────────── RESULTS SCREEN ───────────────────
 if (screen === 'results' && results) {
 const score = results.SCORE
 const scoreColor =
 score >= 75 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444'
 const statusLabel =
 score >= 75
  ? 'On Track'
  : score >= 50
  ? 'Needs Attention'
  : 'At Risk'
 const statusDesc =
 score >= 75
  ? "Great news - your retirement plan is in strong shape. A few optimizations could help you build even more wealth and protect your legacy."
  : score >= 50
  ? "You've built a solid foundation, but there are meaningful gaps that could put your retirement lifestyle at risk. A personalized strategy can help close them."
  : "Your current trajectory may fall short of your retirement goals. The good news? With the right plan and guidance, there's still time to make significant progress."

 // SVG circle
 const radius = 90
 const circumference = 2 * Math.PI * radius
 const strokeOffset = ringAnimated
 ? circumference - (Math.min(score, 100) / 100) * circumference
 : circumference

 // Bar chart
 const maxBar = Math.max(results.TOTAL_PROJECTED, results.REQUIRED_NEST_EGG, 1)
 const projectedPct = (results.TOTAL_PROJECTED / maxBar) * 100
 const requiredPct = (results.REQUIRED_NEST_EGG / maxBar) * 100

 const showBusinessCard = results.B === 1
 const showAdvisorCard =
 answers.advisor === 'No, I manage my own investments' ||
 answers.advisor === "No, but I'm looking for one" ||
 answers.advisor === 'Yes, but open to alternatives'

 const annualGuaranteed = results.SS + results.annual_pension

 return (
 <div className="px-5 py-12 max-w-[680px] mx-auto" ref={resultsRef}>
  {/* Score Circle */}
  <div className="text-center mb-8">
  <svg
  width="200"
  height="200"
  viewBox="0 0 200 200"
  className="mx-auto"
  role="img"
  aria-label={`Retirement readiness score: ${score} out of 100, ${statusLabel}`}
  >
  <circle cx="100" cy="100" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="12" />
  <circle
   cx="100"
   cy="100"
   r={radius}
   fill="none"
   stroke={scoreColor}
   strokeWidth="12"
   strokeDasharray={circumference}
   strokeDashoffset={strokeOffset}
   strokeLinecap="round"
   transform="rotate(-90 100 100)"
   style={{ transition: 'stroke-dashoffset 1.5s ease' }}
  />
  <text x="100" y="95" textAnchor="middle" fontSize="64" fontWeight="800" fill={scoreColor}>
   {animatedScore}
  </text>
  <text x="100" y="120" textAnchor="middle" fontSize="16" fill="#6B7280">
   /100
  </text>
  </svg>

  <div className="mt-4">
  <span
   className="inline-block px-5 py-1.5 rounded-full font-sans text-[14px] font-semibold text-white"
   style={{ backgroundColor: scoreColor }}
  >
   {statusLabel}
  </span>
  </div>
  <p className="font-sans text-[15px] text-[#5b6a71] mt-4 max-w-[500px] mx-auto leading-relaxed">
  {statusDesc}
  </p>
  <p className="font-sans text-[11px] text-[#94A3B8] mt-2 italic">
  This score is an illustrative estimate, not a guarantee. Individual results will vary.
  </p>
  </div>

  {/* Bar Chart Comparison */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 mb-6">
  <h3 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#333333] mb-5">
  Projected vs. Required
  </h3>
  <div className="space-y-4">
  <div>
   <div className="flex justify-between items-center mb-1.5">
   <span className="font-sans text-[13px] font-medium text-[#333333]">
   Your Projected Assets
   </span>
   <span className="font-sans text-[13px] font-semibold" style={{ color: scoreColor }}>
   {fmtCurrency(results.TOTAL_PROJECTED)}
   </span>
   </div>
   <div className="h-7 bg-[#E2E8F0] rounded-[6px] overflow-hidden">
   <div
   className="h-full rounded-[6px] transition-all duration-1000 ease-out"
   style={{
    width: barsAnimated ? `${Math.max(projectedPct, 2)}%` : '0%',
    backgroundColor: scoreColor,
   }}
   />
   </div>
  </div>
  <div>
   <div className="flex justify-between items-center mb-1.5">
   <span className="font-sans text-[13px] font-medium text-[#333333]">
   What You&apos;ll Need
   </span>
   <span className="font-sans text-[13px] font-semibold text-[#374151]">
   {fmtCurrency(results.REQUIRED_NEST_EGG)}
   </span>
   </div>
   <div className="h-7 bg-[#E2E8F0] rounded-[6px] overflow-hidden">
   <div
   className="h-full rounded-[6px] transition-all duration-1000 ease-out"
   style={{
    width: barsAnimated ? `${Math.max(requiredPct, 2)}%` : '0%',
    backgroundColor: '#374151',
    transitionDelay: '200ms',
   }}
   />
   </div>
  </div>
  </div>
  </div>

  {/* Insight Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
  {/* Card 1: Savings Trajectory */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
  <div className="font-sans text-[13px] font-semibold uppercase tracking-[0.05em] text-[#1d7682] mb-2">
   Your Projected Retirement Assets
  </div>
  <p className="font-sans text-[14px] text-[#5b6a71] leading-relaxed">
   At your current pace, you&apos;re projected to have{' '}
   <strong className="text-[#333333]">{fmtCurrency(results.TOTAL_PROJECTED)}</strong> by
   age {answers.retireAge}. You&apos;ll need approximately{' '}
   <strong className="text-[#333333]">{fmtCurrency(results.REQUIRED_NEST_EGG)}</strong> to
   maintain your desired lifestyle.
   {results.DOLLAR_GAP > 0
   ? ` That's a gap of ${fmtCurrency(results.DOLLAR_GAP)}.`
   : " You're projected to have a surplus - excellent position for legacy planning."}
  </p>
  </div>

  {/* Card 2: Savings Rate */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
  <div className="font-sans text-[13px] font-semibold uppercase tracking-[0.05em] text-[#1d7682] mb-2">
   Your Savings Rate
  </div>
  <p className="font-sans text-[14px] text-[#5b6a71] leading-relaxed">
   You&apos;re saving <strong className="text-[#333333]">{fmtPct(results.savings_rate)}</strong>{' '}
   of your income.{' '}
   {results.savings_rate < 0.15
   ? 'Financial experts recommend at least 15-20% for high earners. Even a modest increase could dramatically improve your outlook.'
   : "This is a strong savings rate - you're outpacing most Americans."}
  </p>
  </div>

  {/* Card 3: Time Factor */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
  <div className="font-sans text-[13px] font-semibold uppercase tracking-[0.05em] text-[#1d7682] mb-2">
   Time Is Your Greatest Asset
  </div>
  <p className="font-sans text-[14px] text-[#5b6a71] leading-relaxed">
   You have <strong className="text-[#333333]">{results.YTR} years</strong> until your
   target retirement.{' '}
   {results.YTR >= 15
   ? "That's enough time for compounding to do heavy lifting - but only with the right strategy."
   : results.YTR >= 5
   ? 'With less than 15 years to go, every decision carries more weight. Optimization is critical.'
   : 'With retirement on the horizon, capital preservation and income planning should be top priorities.'}
  </p>
  </div>

  {/* Card 4: Income Gap */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
  <div className="font-sans text-[13px] font-semibold uppercase tracking-[0.05em] text-[#1d7682] mb-2">
   Annual Retirement Income Gap
  </div>
  <p className="font-sans text-[14px] text-[#5b6a71] leading-relaxed">
   Your desired spending is{' '}
   <strong className="text-[#333333]">{fmtCurrency(Number(answers.annualSpending))}/year</strong>.
   Social Security{results.annual_pension > 0 ? ' and pension' : ''} may cover{' '}
   <strong className="text-[#333333]">{fmtCurrency(annualGuaranteed)}/year</strong>,
   leaving{' '}
   <strong className="text-[#333333]">{fmtCurrency(results.net_annual_need)}/year</strong>{' '}
   that must come from your portfolio.
   {results.MONTHLY_GAP > 0 &&
   ` To close this gap, you'd need to save an additional ${fmtCurrency(results.MONTHLY_GAP)}/month starting today.`}
  </p>
  </div>

  {/* Card 5: Business Equity (conditional) */}
  {showBusinessCard && (
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
   <div className="font-sans text-[13px] font-semibold uppercase tracking-[0.05em] text-[#1d7682] mb-2">
   Business Equity Opportunity
   </div>
   <p className="font-sans text-[14px] text-[#5b6a71] leading-relaxed">
   Your business equity could significantly boost your retirement assets - but only
   with a proper liquidity and succession plan. Most business owners leave 40-60% of
   their wealth locked in their company.
   </p>
  </div>
  )}

  {/* Card 6: Advisor Impact (conditional) */}
  {showAdvisorCard && (
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
   <div className="font-sans text-[13px] font-semibold uppercase tracking-[0.05em] text-[#1d7682] mb-2">
   The Advisor Advantage
   </div>
   <p className="font-sans text-[14px] text-[#5b6a71] leading-relaxed">
   Studies show that working with a qualified financial advisor can add 1.5-3% in
   net annual returns through tax optimization, behavioral coaching, and strategic
   planning. Over {results.YTR} years, that could mean an additional{' '}
   <strong className="text-[#333333]">{fmtCurrency(results.advisor_impact)}</strong>{' '}
   in retirement assets.
   </p>
  </div>
  )}
  </div>

  {/* CTA Section */}
  <div className="bg-[#333333] rounded-[12px] p-8 mb-8">
  {!formSubmitted ? (
  <>
   <div className="text-center mb-6">
   <h3 className="font-serif text-[22px] md:text-[26px] font-bold text-[#F7F4EE]">
   Get Your Full Retirement Readiness Report
   </h3>
   <p className="font-sans text-[14px] text-[#94A3B8] mt-2 max-w-[460px] mx-auto">
   Receive a personalized PDF analysis with actionable strategies - plus a
   complimentary consultation with a Farther wealth advisor.
   </p>
   </div>
   <form onSubmit={handleContactSubmit} noValidate className="space-y-3">
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
   <div>
    <input
    type="text"
    placeholder="First Name"
    value={contactInfo.firstName}
    onChange={(e) =>
    setContactInfo((p) => ({ ...p, firstName: e.target.value }))
    }
    className="w-full px-4 py-3 border-2 border-[#4a4a4a] rounded-[8px] font-sans text-[15px] text-white placeholder-[#8a8a8a] bg-[#2a2a2a] focus:outline-none focus:border-[#1d7682] transition-colors"
    aria-label="First Name"
    />
    {contactErrors.firstName && (
    <p className="text-[12px] text-[#EF4444] mt-1">{contactErrors.firstName}</p>
    )}
   </div>
   <div>
    <input
    type="text"
    placeholder="Last Name"
    value={contactInfo.lastName}
    onChange={(e) =>
    setContactInfo((p) => ({ ...p, lastName: e.target.value }))
    }
    className="w-full px-4 py-3 border-2 border-[#4a4a4a] rounded-[8px] font-sans text-[15px] text-white placeholder-[#8a8a8a] bg-[#2a2a2a] focus:outline-none focus:border-[#1d7682] transition-colors"
    aria-label="Last Name"
    />
    {contactErrors.lastName && (
    <p className="text-[12px] text-[#EF4444] mt-1">{contactErrors.lastName}</p>
    )}
   </div>
   </div>
   <input
   type="email"
   placeholder="Email Address"
   value={contactInfo.email}
   onChange={(e) =>
    setContactInfo((p) => ({ ...p, email: e.target.value }))
   }
   className="w-full px-4 py-3 border-2 border-[#4a4a4a] rounded-[8px] font-sans text-[15px] text-white placeholder-[#8a8a8a] bg-[#2a2a2a] focus:outline-none focus:border-[#1d7682] transition-colors"
   aria-label="Email Address"
   />
   {contactErrors.email && (
   <p className="text-[12px] text-[#EF4444] mt-1">{contactErrors.email}</p>
   )}
   <input
   type="tel"
   placeholder="Phone (optional)"
   value={contactInfo.phone}
   onChange={(e) =>
    setContactInfo((p) => ({ ...p, phone: e.target.value }))
   }
   className="w-full px-4 py-3 border-2 border-[#4a4a4a] rounded-[8px] font-sans text-[15px] text-white placeholder-[#8a8a8a] bg-[#2a2a2a] focus:outline-none focus:border-[#1d7682] transition-colors"
   aria-label="Phone Number"
   />
   <p className="font-sans text-[11px] text-[#8a8a8a] text-center italic">
   By submitting this form, you consent to being contacted by a Farther wealth
   advisor regarding your retirement planning. You may opt out at any time.
   </p>
   <button
   type="submit"
   disabled={submitting}
   className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[17px] py-4 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2 focus:ring-offset-[#333333] disabled:opacity-60"
   >
   {submitting ? 'Submitting...' : 'Get My Free Report \u2192'}
   </button>
   </form>
  </>
  ) : (
  <div className="text-center py-4">
   <div className="w-14 h-14 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-4">
   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
   <polyline points="20 6 9 17 4 12" />
   </svg>
   </div>
   <h4 className="font-serif text-[22px] font-bold text-[#F7F4EE]">Thank You!</h4>
   <p className="font-sans text-[14px] text-[#94A3B8] mt-2 max-w-[400px] mx-auto">
   Your personalized retirement readiness report is on the way. A Farther advisor
   will reach out to discuss your results and next steps.
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

  {/* Disclaimer */}
  <CalculatorDisclaimer toolName="retirement savings" variant="default" />
 </div>
 )
 }

 return null
}
