'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'
import {
 questions,
 getTier,
 getCategoryTierColor,
 getCategoryGrade,
 categoryTeasers,
 recommendations,
 categoryMeanings,
 revenueOptions,
} from './data'

type Screen = 'welcome' | 'quiz' | 'score-reveal' | 'full-report'
type Category = 'financial' | 'operational' | 'tax' | 'succession'

interface Scores {
 financial: number
 operational: number
 tax: number
 succession: number
 total: number
}

interface ContactInfo {
 firstName: string
 lastName: string
 email: string
 phone: string
 revenue: string
}

const STORAGE_KEY = 'exit-scorecard-progress'

const categoryLabels: Record<Category, string> = {
 financial: 'Financial',
 operational: 'Operational',
 tax: 'Tax',
 succession: 'Succession',
}

function formatPhone(value: string): string {
 const digits = value.replace(/\D/g, '')
 if (digits.length <= 3) return digits
 if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
 return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
}

export default function ExitScorecard() {
 const [screen, setScreen] = useState<Screen>('welcome')
 const [currentQuestion, setCurrentQuestion] = useState(0)
 const [answers, setAnswers] = useState<Record<number, number>>({})
 const [scores, setScores] = useState<Scores | null>(null)
 const [contactInfo, setContactInfo] = useState<ContactInfo>({
 firstName: '',
 lastName: '',
 email: '',
 phone: '',
 revenue: '',
 })
 const [contactErrors, setContactErrors] = useState<
 Record<string, string>
 >({})
 const [showReport, setShowReport] = useState(false)
 const [animatedScore, setAnimatedScore] = useState(0)
 const [barsAnimated, setBarsAnimated] = useState(false)
 const [slideDirection, setSlideDirection] = useState<
 'left' | 'right'
 >('left')
 const [isTransitioning, setIsTransitioning] = useState(false)
 const [expandedCategories, setExpandedCategories] = useState<
 Record<string, boolean>
 >({
 financial: true,
 operational: true,
 tax: true,
 succession: true,
 })
 const [tooltipOpen, setTooltipOpen] = useState(false)
 const [submitting, setSubmitting] = useState(false)
 const reportRef = useRef<HTMLDivElement>(null)
 const scoreRevealRef = useRef<HTMLDivElement>(null)

 // Restore progress from sessionStorage
 useEffect(() => {
 try {
 const saved = sessionStorage.getItem(STORAGE_KEY)
 if (saved) {
  const data = JSON.parse(saved)
  if (data.answers) setAnswers(data.answers)
  if (typeof data.currentQuestion === 'number')
  setCurrentQuestion(data.currentQuestion)
  if (data.screen === 'quiz') setScreen('quiz')
 }
 } catch {
 // ignore
 }
 }, [])

 // Save progress to sessionStorage
 useEffect(() => {
 if (screen === 'quiz') {
 try {
  sessionStorage.setItem(
  STORAGE_KEY,
  JSON.stringify({ answers, currentQuestion, screen })
  )
 } catch {
  // ignore
 }
 }
 }, [answers, currentQuestion, screen])

 const calculateScores = useCallback((): Scores => {
 const fRaw =
 (answers[1] || 0) + (answers[2] || 0) + (answers[3] || 0)
 const oRaw = (answers[4] || 0) + (answers[5] || 0)
 const tRaw =
 (answers[6] || 0) + (answers[7] || 0) + (answers[8] || 0)
 const sRaw = (answers[9] || 0) + (answers[10] || 0)

 const financial = (fRaw / 30) * 25
 const operational = (oRaw / 20) * 25
 const tax = (tRaw / 30) * 25
 const succession = (sRaw / 20) * 25

 return {
 financial,
 operational,
 tax,
 succession,
 total: financial + operational + tax + succession,
 }
 }, [answers])

 const getWeakestCategory = (s: Scores): Category => {
 const cats: { key: Category; score: number }[] = [
 { key: 'financial', score: s.financial },
 { key: 'operational', score: s.operational },
 { key: 'tax', score: s.tax },
 { key: 'succession', score: s.succession },
 ]
 cats.sort((a, b) => a.score - b.score || a.key.localeCompare(b.key))
 return cats[0].key
 }

 const startQuiz = () => {
 setScreen('quiz')
 setCurrentQuestion(0)
 }

 const selectAnswer = (questionId: number, points: number) => {
 setAnswers((prev) => ({ ...prev, [questionId]: points }))
 }

 const nextQuestion = () => {
 if (currentQuestion < 9) {
 setSlideDirection('left')
 setIsTransitioning(true)
 setTimeout(() => {
  setCurrentQuestion((prev) => prev + 1)
  setIsTransitioning(false)
 }, 200)
 } else {
 const computed = calculateScores()
 setScores(computed)
 setScreen('score-reveal')
 // Animate score counter
 let current = 0
 const target = Math.round(computed.total * 100) / 100
 const duration = 1500
 const startTime = performance.now()
 const animate = (now: number) => {
  const elapsed = now - startTime
  const progress = Math.min(elapsed / duration, 1)
  const eased = 1 - Math.pow(1 - progress, 3)
  current = Math.round(eased * target)
  setAnimatedScore(current)
  if (progress < 1) {
  requestAnimationFrame(animate)
  } else {
  setAnimatedScore(Math.round(target))
  setTimeout(() => setBarsAnimated(true), 300)
  }
 }
 requestAnimationFrame(animate)
 try {
  sessionStorage.removeItem(STORAGE_KEY)
 } catch {
  // ignore
 }
 }
 }

 const prevQuestion = () => {
 if (currentQuestion > 0) {
 setSlideDirection('right')
 setIsTransitioning(true)
 setTimeout(() => {
  setCurrentQuestion((prev) => prev - 1)
  setIsTransitioning(false)
 }, 200)
 }
 }

 const validateContact = (): boolean => {
 const errors: Record<string, string> = {}
 if (contactInfo.firstName.trim().length < 2)
 errors.firstName = 'Required (min 2 characters)'
 if (contactInfo.lastName.trim().length < 2)
 errors.lastName = 'Required (min 2 characters)'
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email))
 errors.email = 'Please enter a valid email address'
 const phoneDigits = contactInfo.phone.replace(/\D/g, '')
 if (phoneDigits.length < 10)
 errors.phone = 'Please enter a valid phone number (10+ digits)'
 if (!contactInfo.revenue)
 errors.revenue = 'Please select a revenue range'
 setContactErrors(errors)
 return Object.keys(errors).length === 0
 }

 const handleContactSubmit = async (e: React.FormEvent) => {
 e.preventDefault()
 if (!validateContact() || !scores) return

 setSubmitting(true)
 try {
 await fetch('/api/lead', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
  ...contactInfo,
  scores,
  tier: getTier(scores.total).label,
  answers,
  reportHtml: reportRef.current?.innerHTML || '',
  timestamp: new Date().toISOString(),
  source: 'business-exit-scorecard',
  }),
 }).catch(() => {})
 } catch {
 // silently fail
 }
 setSubmitting(false)
 setShowReport(true)
 setTimeout(() => {
 reportRef.current?.scrollIntoView({ behavior: 'smooth' })
 }, 100)
 }

 const toggleCategory = (cat: string) => {
 setExpandedCategories((prev) => ({
 ...prev,
 [cat]: !prev[cat],
 }))
 }

 const getActionPlan = (s: Scores): string[] => {
 const cats: { key: Category; score: number }[] = [
 { key: 'financial', score: s.financial },
 { key: 'operational', score: s.operational },
 { key: 'tax', score: s.tax },
 { key: 'succession', score: s.succession },
 ]
 cats.sort((a, b) => a.score - b.score)

 const actions: string[] = []
 // Top rec from lowest 2 categories + 1 from third
 for (let i = 0; i < 3 && i < cats.length; i++) {
 const grade = getCategoryGrade(cats[i].score)
 const recs = recommendations[cats[i].key][grade]
 if (recs && recs[0]) actions.push(recs[0])
 }
 return actions
 }

 // Radar chart SVG
 const renderRadarChart = (s: Scores) => {
 const size = 280
 const center = size / 2
 const maxR = 110
 const categories: { key: Category; label: string }[] = [
 { key: 'financial', label: 'Financial' },
 { key: 'operational', label: 'Operational' },
 { key: 'tax', label: 'Tax' },
 { key: 'succession', label: 'Succession' },
 ]

 const angles = categories.map(
 (_, i) => (Math.PI / 2) + (2 * Math.PI * i) / 4
 )

 const gridLevels = [0.25, 0.5, 0.75, 1]

 const points = categories.map((cat, i) => {
 const ratio = s[cat.key] / 25
 const x = center + maxR * ratio * Math.cos(angles[i])
 const y = center - maxR * ratio * Math.sin(angles[i])
 return `${x},${y}`
 })

 return (
 <svg
  viewBox={`0 0 ${size} ${size}`}
  className="w-full max-w-[280px] mx-auto"
  role="img"
  aria-label="Radar chart showing scores across four categories"
 >
  {/* Grid */}
  {gridLevels.map((level) => (
  <polygon
  key={level}
  points={angles
   .map(
   (a) =>
   `${center + maxR * level * Math.cos(a)},${center - maxR * level * Math.sin(a)}`
   )
   .join(' ')}
  fill="none"
  stroke="#E2E8F0"
  strokeWidth="1"
  />
  ))}
  {/* Axes */}
  {angles.map((a, i) => (
  <line
  key={i}
  x1={center}
  y1={center}
  x2={center + maxR * Math.cos(a)}
  y2={center - maxR * Math.sin(a)}
  stroke="#E2E8F0"
  strokeWidth="1"
  />
  ))}
  {/* Data polygon */}
  <polygon
  points={points.join(' ')}
  fill="rgba(29,118,130,0.15)"
  stroke="#1d7682"
  strokeWidth="2"
  />
  {/* Data points */}
  {points.map((p, i) => {
  const [x, y] = p.split(',').map(Number)
  return (
  <circle
   key={i}
   cx={x}
   cy={y}
   r="4"
   fill="#1d7682"
  />
  )
  })}
  {/* Labels */}
  {categories.map((cat, i) => {
  const labelR = maxR + 24
  const x = center + labelR * Math.cos(angles[i])
  const y = center - labelR * Math.sin(angles[i])
  return (
  <text
   key={cat.key}
   x={x}
   y={y}
   textAnchor="middle"
   dominantBaseline="middle"
   className="fill-[#333333] text-[11px] font-sans font-semibold"
  >
   {cat.label}
  </text>
  )
  })}
 </svg>
 )
 }

 // ─────────────────────────── WELCOME SCREEN ───────────────────────────
 if (screen === 'welcome') {
 return (
 <div className="min-h-[80vh] flex items-center justify-center px-5">
  <div className="max-w-[600px] w-full text-center">
  {/* Icon */}
  <div className="mx-auto mb-8 w-20 h-20 rounded-full bg-[#1d7682]/10 flex items-center justify-center">
  <svg
   width="40"
   height="40"
   viewBox="0 0 24 24"
   fill="none"
   stroke="#1d7682"
   strokeWidth="1.5"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
  </div>

  <button
  onClick={startQuiz}
  className="mt-10 inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[17px] px-10 py-4 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2"
  aria-label="Start the exit readiness assessment"
  >
  Start My Assessment
  <svg
   width="18"
   height="18"
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

  <p className="font-sans text-[13px] text-[#94A3B8] mt-4">
  Takes about 60 seconds &bull; No login required &bull;
  Free and confidential
  </p>

  <p className="font-sans text-[12px] text-[#94A3B8] mt-12 max-w-[520px] mx-auto leading-relaxed">
  This Business Exit Readiness Scorecard is provided for
  educational and illustrative purposes only. It does not
  constitute financial, tax, legal, or investment advice,
  and should not be relied upon as a substitute for
  consultation with qualified professionals. Results are
  based solely on self-reported responses and do not
  account for the full complexity of your situation.
  </p>
  </div>
 </div>
 )
 }

 // ─────────────────────────── QUIZ SCREEN ───────────────────────────
 if (screen === 'quiz') {
 const q = questions[currentQuestion]
 const selectedPoints = answers[q.id]
 const canProceed = selectedPoints !== undefined

 return (
 <div className="min-h-[80vh] flex flex-col px-5 py-8 max-w-[680px] mx-auto">
  {/* Progress bar */}
  <div className="flex gap-1.5 mb-6" role="progressbar" aria-valuenow={currentQuestion + 1} aria-valuemin={1} aria-valuemax={10} aria-label={`Question ${currentQuestion + 1} of 10, Category: ${q.categoryLabel}`}>
  {Array.from({ length: 10 }).map((_, i) => (
  <div
   key={i}
   className="h-[5px] flex-1 rounded-full transition-colors duration-300"
   style={{
   backgroundColor:
   i <= currentQuestion ? '#1d7682' : '#E2E8F0',
   }}
  />
  ))}
  </div>

  {/* Category badge */}
  <div className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-[#1d7682] mb-6">
  {q.categoryLabel} - Question {q.categoryQuestionNumber} of{' '}
  {q.categoryQuestionTotal}
  </div>

  {/* Question */}
  <div className="mb-8">
  <div className="flex items-start gap-2">
  <h2 className="font-sans text-[20px] md:text-[24px] font-semibold text-[#333333] leading-snug">
   {q.text}
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
  <div className="mt-3 p-4 bg-[#F0F7FF] border border-[#3B82F6]/20 rounded-[8px] font-sans text-[14px] text-[#1E293B] leading-relaxed">
   {q.tooltip}
  </div>
  )}
  </div>

  {/* Options */}
  <div className="space-y-3 flex-1">
  {q.options.map((option, i) => {
  const isSelected = selectedPoints === option.points
  return (
   <button
   key={i}
   onClick={() => {
   selectAnswer(q.id, option.points)
   setTooltipOpen(false)
   }}
   className={`w-full text-left px-5 py-4 rounded-[12px] border-2 transition-all duration-200 font-sans text-[15px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2 ${
   isSelected
    ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#333333]'
    : 'border-[#E2E8F0] bg-white text-[#1E293B] hover:border-[#1d7682]/40 hover:bg-[#F0F7FF]'
   }`}
   style={{
   opacity: isTransitioning ? 0 : 1,
   transform: isTransitioning
    ? `translateX(${slideDirection === 'left' ? '-20px' : '20px'})`
    : 'translateX(0)',
   transition:
    'opacity 0.2s ease, transform 0.2s ease',
   }}
   role="radio"
   aria-checked={isSelected}
   >
   <div className="flex items-center gap-3">
   <div
    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
    isSelected
    ? 'border-[#1d7682] bg-[#1d7682]'
    : 'border-[#CBD5E1]'
    }`}
   >
    {isSelected && (
    <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    >
    <polyline points="20 6 9 17 4 12" />
    </svg>
    )}
   </div>
   <span>{option.label}</span>
   </div>
   </button>
  )
  })}
  </div>

  {/* Navigation */}
  <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E2E8F0]">
  <button
  onClick={prevQuestion}
  disabled={currentQuestion === 0}
  className={`font-sans text-[15px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#1d7682] rounded px-2 py-1 ${
   currentQuestion === 0
   ? 'text-[#CBD5E1] cursor-not-allowed'
   : 'text-[#5b6a71] hover:text-[#333333]'
  }`}
  aria-label="Go to previous question"
  >
  &larr; Back
  </button>
  <button
  onClick={nextQuestion}
  disabled={!canProceed}
  className={`font-sans text-[15px] font-semibold px-8 py-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2 ${
   canProceed
   ? 'bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white hover:from-[#238a97] hover:to-[#155f69] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)]'
   : 'bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed'
  }`}
  aria-label={
   currentQuestion === 9
   ? 'See your results'
   : 'Go to next question'
  }
  >
  {currentQuestion === 9 ? 'See My Results' : 'Next'}{' '}
  &rarr;
  </button>
  </div>
 </div>
 )
 }

 // ─────────────────────────── SCORE REVEAL ───────────────────────────
 if (screen === 'score-reveal' && scores) {
 const tier = getTier(scores.total)
 const weakest = getWeakestCategory(scores)
 const categoryOrder: Category[] = [
 'financial',
 'operational',
 'tax',
 'succession',
 ]

 return (
 <div className="px-5 py-12 max-w-[680px] mx-auto">
  <div ref={scoreRevealRef}>
  {/* Score */}
  <div className="text-center mb-10">
  <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-[#5b6a71] mb-3">
   Your Exit Readiness Score
  </p>
  <div
   className="font-sans text-[56px] md:text-[72px] font-extrabold leading-none"
   style={{ color: tier.color }}
   aria-live="polite"
  >
   {animatedScore}
   <span className="text-[28px] md:text-[36px] font-semibold text-[#94A3B8]">
   {' '}
   / 100
   </span>
  </div>
  <div
   className="inline-block mt-4 px-5 py-1.5 rounded-full font-sans text-[14px] font-semibold text-white"
   style={{ backgroundColor: tier.color }}
  >
   {tier.label}
  </div>
  </div>

  {/* Tier headline */}
  <div className="text-center mb-10">
  <h2 className="font-serif text-[24px] md:text-[30px] font-bold text-[#333333]">
   {tier.headline}
  </h2>
  <p className="font-sans text-[16px] text-[#5b6a71] mt-3 leading-relaxed">
   {tier.subtext}
  </p>
  </div>

  {/* Category bars */}
  <div className="space-y-5 mb-10">
  {categoryOrder.map((cat, i) => {
   const score = scores[cat]
   const pct = (score / 25) * 100
   const color = getCategoryTierColor(score)
   return (
   <div key={cat}>
   <div className="flex justify-between items-center mb-1.5">
    <span className="font-sans text-[14px] font-semibold text-[#333333]">
    {categoryLabels[cat]}
    </span>
    <span className="font-sans text-[14px] font-semibold text-[#5b6a71]">
    {score.toFixed(1)} / 25
    </span>
   </div>
   <div className="h-3 bg-[#E2E8F0] rounded-full overflow-hidden">
    <div
    className="h-full rounded-full transition-all duration-700 ease-out"
    style={{
    width: barsAnimated ? `${pct}%` : '0%',
    backgroundColor: color,
    transitionDelay: `${i * 200}ms`,
    }}
    />
   </div>
   </div>
   )
  })}
  </div>

  {/* Teaser insight */}
  <div className="bg-[#F7F4EE] rounded-[12px] p-6 mb-8">
  <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.05em] text-[#1d7682] mb-2">
   Area of Focus: {categoryLabels[weakest]}
  </p>
  <p className="font-sans text-[15px] text-[#333333] leading-relaxed">
   {categoryTeasers[weakest]}
  </p>
  </div>

  {/* Disclaimer 2 */}
  <p className="font-sans text-[13px] text-[#94A3B8] mb-10 leading-relaxed">
  Your score reflects general readiness indicators based on
  commonly accepted exit planning best practices. It is not
  a valuation, appraisal, or guarantee of exit success.
  Individual outcomes depend on numerous factors not
  captured in this assessment.
  </p>
  </div>

  {/* Contact capture gate */}
  {!showReport && (
  <div className="border-t-2 border-[#E2E8F0] pt-10">
  <div className="text-center mb-8">
   <h3 className="font-serif text-[24px] md:text-[28px] font-bold text-[#333333]">
   Unlock Your Full Exit Readiness Report
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-3">
   Get personalized recommendations for each category,
   plus a prioritized action plan - delivered instantly.
   </p>
  </div>

  <form
   onSubmit={handleContactSubmit}
   noValidate
   className="space-y-4"
  >
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
   <div>
   <input
    type="text"
    placeholder="First Name"
    value={contactInfo.firstName}
    onChange={(e) =>
    setContactInfo((prev) => ({
    ...prev,
    firstName: e.target.value,
    }))
    }
    className="w-full px-4 py-3.5 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
    aria-label="First Name"
   />
   {contactErrors.firstName && (
    <p className="font-sans text-[12px] text-[#EF4444] mt-1">
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
    setContactInfo((prev) => ({
    ...prev,
    lastName: e.target.value,
    }))
    }
    className="w-full px-4 py-3.5 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
    aria-label="Last Name"
   />
   {contactErrors.lastName && (
    <p className="font-sans text-[12px] text-[#EF4444] mt-1">
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
    setContactInfo((prev) => ({
    ...prev,
    email: e.target.value,
    }))
   }
   className="w-full px-4 py-3.5 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
   aria-label="Email Address"
   />
   {contactErrors.email && (
   <p className="font-sans text-[12px] text-[#EF4444] mt-1">
    {contactErrors.email}
   </p>
   )}
   </div>

   <div>
   <input
   type="tel"
   placeholder="(555) 123-4567"
   value={contactInfo.phone}
   onChange={(e) =>
    setContactInfo((prev) => ({
    ...prev,
    phone: formatPhone(e.target.value),
    }))
   }
   className="w-full px-4 py-3.5 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
   aria-label="Phone Number"
   />
   {contactErrors.phone && (
   <p className="font-sans text-[12px] text-[#EF4444] mt-1">
    {contactErrors.phone}
   </p>
   )}
   </div>

   <div>
   <select
   value={contactInfo.revenue}
   onChange={(e) =>
    setContactInfo((prev) => ({
    ...prev,
    revenue: e.target.value,
    }))
   }
   className={`w-full px-4 py-3.5 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] focus:outline-none focus:border-[#1d7682] transition-colors bg-white ${
    contactInfo.revenue
    ? 'text-[#1E293B]'
    : 'text-[#94A3B8]'
   }`}
   aria-label="Annual Business Revenue"
   >
   <option value="" disabled>
    Select Revenue Range
   </option>
   {revenueOptions.map((opt) => (
    <option key={opt} value={opt}>
    {opt}
    </option>
   ))}
   </select>
   {contactErrors.revenue && (
   <p className="font-sans text-[12px] text-[#EF4444] mt-1">
    {contactErrors.revenue}
   </p>
   )}
   </div>

   <button
   type="submit"
   disabled={submitting}
   className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[17px] py-4 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2 disabled:opacity-60"
   >
   {submitting
   ? 'Submitting...'
   : 'Get My Full Report \u2192'}
   </button>

   <p className="font-sans text-[12px] text-[#64748B] text-center leading-relaxed">
   Your information is secure and will only be used to
   deliver your report and connect you with an advisor.{' '}
   <Link
   href="/disclosures"
   className="underline hover:text-[#1d7682]"
   >
   View our Privacy Policy
   </Link>
   .
   </p>
  </form>
  </div>
  )}

  {/* ─────────────── FULL REPORT ─────────────── */}
  {showReport && scores && (
  <div ref={reportRef} className="border-t-2 border-[#E2E8F0] pt-10">
  {/* Section 1: Score Summary */}
  <div className="text-center mb-10">
   <h3 className="font-serif text-[28px] md:text-[34px] font-bold text-[#333333]">
   Your Full Exit Readiness Report
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-2">
   Prepared for {contactInfo.firstName}{' '}
   {contactInfo.lastName}
   </p>
  </div>

  {/* Radar chart */}
  <div className="mb-10">{renderRadarChart(scores)}</div>

  {/* Section 2: Category Deep Dives */}
  <div className="space-y-4 mb-10">
   {(
   ['financial', 'operational', 'tax', 'succession'] as Category[]
   ).map((cat) => {
   const score = scores[cat]
   const grade = getCategoryGrade(score)
   const isExpanded = expandedCategories[cat]
   const catColor = getCategoryTierColor(score)
   const recs = recommendations[cat][grade] || []
   const meaning = categoryMeanings[cat][grade] || ''

   return (
   <div
    key={cat}
    className="border border-[#E2E8F0] rounded-[12px] overflow-hidden bg-white"
   >
    <button
    onClick={() => toggleCategory(cat)}
    className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1d7682]"
    aria-expanded={isExpanded}
    aria-controls={`category-${cat}`}
    >
    <div className="flex items-center gap-3">
    <div
     className="w-3 h-3 rounded-full flex-shrink-0"
     style={{ backgroundColor: catColor }}
    />
    <span className="font-sans text-[16px] font-semibold text-[#333333]">
     {categoryLabels[cat]} Readiness
    </span>
    <span
     className="font-sans text-[13px] font-bold px-2 py-0.5 rounded text-white"
     style={{ backgroundColor: catColor }}
    >
     {grade}
    </span>
    </div>
    <div className="flex items-center gap-3">
    <span className="font-sans text-[14px] font-semibold text-[#5b6a71]">
     {score.toFixed(1)} / 25
    </span>
    <svg
     width="16"
     height="16"
     viewBox="0 0 24 24"
     fill="none"
     stroke="#94A3B8"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
     className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
    >
     <polyline points="6 9 12 15 18 9" />
    </svg>
    </div>
    </button>

    {isExpanded && (
    <div
    id={`category-${cat}`}
    className="px-6 pb-6 border-t border-[#E2E8F0]"
    >
    <div className="mt-5">
     <h4 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#1d7682] mb-2">
     What This Means
     </h4>
     <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed">
     {meaning}
     </p>
    </div>

    <div className="mt-5">
     <h4 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#1d7682] mb-3">
     Recommendations
     </h4>
     <ul className="space-y-2">
     {recs.map((rec, i) => (
     <li
      key={i}
      className="flex items-start gap-3"
     >
      <span className="mt-[7px] h-[6px] w-[6px] min-w-[6px] rounded-full bg-[#1d7682]" />
      <span className="font-sans text-[15px] text-[#5b6a71] leading-relaxed">
      {rec}
      </span>
     </li>
     ))}
     </ul>
    </div>

    {/* Tax disclaimer */}
    {cat === 'tax' && (
     <p className="font-sans text-[13px] text-[#94A3B8] mt-5 leading-relaxed">
     Tax strategies referenced (including
     QSBS, installment sales, and trust
     planning) are general concepts and may
     not apply to your specific situation.
     Tax laws change frequently. Always
     consult with a qualified tax
     professional before implementing any
     tax strategy.
     </p>
    )}
    </div>
    )}
   </div>
   )
   })}
  </div>

  {/* Section 3: Prioritized Action Plan */}
  <div className="bg-[#333333] rounded-[12px] p-8 mb-10">
   <h3 className="font-serif text-[22px] md:text-[26px] font-bold text-[#F7F4EE] mb-2">
   Your Top 3 Actions for the Next 90 Days
   </h3>
   <p className="font-sans text-[14px] text-[#94A3B8] mb-6">
   Based on your lowest-scoring categories, here is
   where to focus first.
   </p>
   <ol className="space-y-4">
   {getActionPlan(scores).map((action, i) => (
   <li key={i} className="flex items-start gap-4">
    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1d7682] text-white font-sans text-[14px] font-bold flex items-center justify-center">
    {i + 1}
    </span>
    <span className="font-sans text-[15px] text-[#E2E8F0] leading-relaxed">
    {action}
    </span>
   </li>
   ))}
   </ol>
  </div>

  {/* Section 4: CTA Block */}
  <div className="bg-[#F7F4EE] rounded-[12px] p-8 text-center mb-10">
   <h3 className="font-serif text-[24px] md:text-[28px] font-bold text-[#333333]">
   Ready to Build Your Exit Roadmap?
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-3 max-w-[480px] mx-auto leading-relaxed">
   A Farther advisor can help you turn this scorecard
   into a step-by-step exit strategy - personalized to
   your business, timeline, and goals.
   </p>
   <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
   <Link
   href="/schedule-consultation"
   className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[16px] px-8 py-3.5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200"
   >
   Schedule Your Free Exit Planning Consultation
   </Link>
   </div>
  </div>

  {/* Footer disclaimer */}
  <CalculatorDisclaimer toolName="business exit" variant="default" />
  </div>
  )}
 </div>
 )
 }

 return null
}
