'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'

// ─────────────────── TYPES ───────────────────

type QuestionType = 'single' | 'multi' | 'slider'

interface QuestionOption {
 label: string
 value: string
 points: number
}

interface Question {
 id: string
 question: string
 subtext: string
 type: QuestionType
 options?: QuestionOption[]
 tooltip: string
 // slider-specific
 sliderMin?: number
 sliderMax?: number
 sliderStep?: number
 sliderDefault?: number
 sliderLabels?: { value: number; label: string }[]
 sliderPointMap?: { threshold: number; points: number }[]
 color: string
 categoryLabel: string
}

interface Flag {
 heading: string
 text: string
 severity: 'warning' | 'critical'
}

interface CalcResults {
 baseScore: number
 finalScore: number
 tier: 'low' | 'moderate' | 'high' | 'critical'
 tierLabel: string
 tierColor: string
 tierDescription: string
 flags: Flag[]
 breakdown: { category: string; points: number; color: string }[]
 multipliers: string[]
}

// ─────────────────── QUESTIONS ───────────────────

const questions: Question[] = [
 {
 id: 'multiState',
 question: 'Do you own property in more than one state?',
 subtext: 'Include homes, land, and investment properties.',
 type: 'single',
 options: [
 { label: '1 state', value: '1', points: 0 },
 { label: '2 states', value: '2', points: 4 },
 { label: '3 states', value: '3', points: 7 },
 { label: '4+ states', value: '4+', points: 10 },
 ],
 tooltip: 'Each additional state can trigger a separate probate process.',
 color: '#64748B',
 categoryLabel: 'Multi-State Property',
 },
 {
 id: 'business',
 question: 'Do you own a business?',
 subtext: 'Include any entity you have an ownership stake in.',
 type: 'single',
 options: [
 { label: 'No', value: 'none', points: 0 },
 { label: 'Sole Prop / LLC', value: 'llc', points: 3 },
 { label: 'S-Corp / Partnership', value: 'scorp', points: 6 },
 { label: 'C-Corp', value: 'ccorp', points: 8 },
 { label: 'Multiple Entities', value: 'multiple', points: 12 },
 ],
 tooltip: 'Business succession is one of the most overlooked estate issues.',
 color: '#1E3A5F',
 categoryLabel: 'Business Ownership',
 },
 {
 id: 'blendedFamily',
 question: 'Is yours a blended family?',
 subtext: 'Prior marriages, stepchildren, or complex family dynamics.',
 type: 'single',
 options: [
 { label: 'No', value: 'no', points: 0 },
 { label: 'Yes, one prior marriage', value: 'one', points: 6 },
 { label: 'Yes, multiple prior marriages', value: 'multiple', points: 10 },
 ],
 tooltip: 'Blended families need special trust provisions to protect all parties.',
 color: '#7C3AED',
 categoryLabel: 'Blended Family',
 },
 {
 id: 'estateValue',
 question: 'What is your approximate total estate value?',
 subtext:
 'Include everything: real estate, investments, retirement, insurance death benefits, business value.',
 type: 'slider',
 sliderMin: 0,
 sliderMax: 50000000,
 sliderStep: 500000,
 sliderDefault: 3000000,
 sliderLabels: [
 { value: 0, label: '$0' },
 { value: 5000000, label: '$5M' },
 { value: 15000000, label: '$15M' },
 { value: 30000000, label: '$30M' },
 { value: 50000000, label: '$50M+' },
 ],
 sliderPointMap: [
 { threshold: 30000000, points: 14 },
 { threshold: 15000000, points: 9 },
 { threshold: 10000000, points: 6 },
 { threshold: 5000000, points: 3 },
 { threshold: 0, points: 0 },
 ],
 tooltip: 'The 2026 federal estate tax exemption is $15M per person ($30M per couple).',
 color: '#D97706',
 categoryLabel: 'Estate Value',
 },
 {
 id: 'trusts',
 question: 'What trust structures do you currently have?',
 subtext: "Select all that apply. Not sure? Select 'None.'",
 type: 'multi',
 options: [
 { label: 'None', value: 'none', points: 5 },
 { label: 'Revocable Living Trust', value: 'rlt', points: 0 },
 { label: 'Irrevocable Trust', value: 'irrevocable', points: 0 },
 { label: 'ILIT', value: 'ilit', points: 0 },
 { label: 'GRAT / GRUT', value: 'grat', points: 0 },
 { label: 'SLAT', value: 'slat', points: 0 },
 { label: 'Charitable Trust', value: 'charitable', points: 0 },
 { label: 'Special Needs Trust', value: 'snt', points: 0 },
 ],
 tooltip: 'Trust structures help avoid probate and provide tax efficiency.',
 color: '#0D9488',
 categoryLabel: 'Trust Structures',
 },
 {
 id: 'charitable',
 question: 'Do you have charitable giving goals?',
 subtext: 'Beyond occasional donations.',
 type: 'single',
 options: [
 { label: 'None', value: 'none', points: 0 },
 { label: 'Informal giving', value: 'informal', points: 1 },
 { label: 'Planning structured giving', value: 'structured', points: 4 },
 { label: 'Have a DAF or Foundation', value: 'daf', points: 6 },
 ],
 tooltip: 'Charitable vehicles can significantly reduce estate tax exposure.',
 color: '#16A34A',
 categoryLabel: 'Charitable Goals',
 },
 {
 id: 'lastReview',
 question: 'When was your estate plan last reviewed by a professional?',
 subtext: 'When did an attorney or advisor last update your documents?',
 type: 'single',
 options: [
 { label: 'Within the last year', value: 'recent', points: 0 },
 { label: '1-3 years ago', value: '1-3', points: 2 },
 { label: '3-5 years ago', value: '3-5', points: 5 },
 { label: '5+ years ago', value: '5+', points: 8 },
 { label: 'Never had a formal plan', value: 'never', points: 12 },
 ],
 tooltip: 'Estate law changed significantly in 2025 with the OBBBA.',
 color: '#EA580C',
 categoryLabel: 'Last Review',
 },
 {
 id: 'specialAssets',
 question: 'Do you hold any of these special asset types?',
 subtext: 'Select all that apply.',
 type: 'multi',
 options: [
 { label: 'None', value: 'none', points: 0 },
 { label: 'Real estate investments', value: 'realestate', points: 0 },
 { label: 'Art / collectibles', value: 'art', points: 0 },
 { label: 'Crypto / digital assets', value: 'crypto', points: 0 },
 { label: 'Private equity / VC', value: 'pe', points: 0 },
 { label: 'Concentrated stock position', value: 'stock', points: 0 },
 { label: 'Mineral / oil / gas rights', value: 'mineral', points: 0 },
 ],
 tooltip: 'Hard-to-value or illiquid assets create unique estate challenges.',
 color: '#4F46E5',
 categoryLabel: 'Special Assets',
 },
 {
 id: 'international',
 question: 'Do you have international estate considerations?',
 subtext: 'Foreign property, non-citizen spouse, or beneficiaries abroad.',
 type: 'single',
 options: [
 { label: 'None', value: 'none', points: 0 },
 { label: 'One factor', value: 'one', points: 5 },
 { label: 'Multiple factors', value: 'multiple', points: 10 },
 ],
 tooltip: 'International estates may involve foreign tax treaties and reporting requirements.',
 color: '#E11D48',
 categoryLabel: 'International',
 },
]

// ─────────────────── SCORING ENGINE ───────────────────

function getTrustPoints(selected: string[]): number {
 if (selected.includes('none') || selected.length === 0) return 5
 if (selected.length === 1) return 2
 if (selected.length <= 3) return 4
 return 8
}

function getSpecialAssetPoints(selected: string[]): number {
 if (selected.includes('none') || selected.length === 0) return 0
 if (selected.length === 1) return 3
 if (selected.length <= 3) return 6
 return 10
}

function getSliderPoints(
 value: number,
 pointMap: { threshold: number; points: number }[]
): number {
 for (const entry of pointMap) {
 if (value >= entry.threshold) return entry.points
 }
 return 0
}

function calculateScore(answers: Record<string, string | string[] | number>): CalcResults {
 const breakdown: { category: string; points: number; color: string }[] = []
 let baseScore = 0

 for (const q of questions) {
 let points = 0
 const answer = answers[q.id]

 if (q.id === 'trusts') {
 points = getTrustPoints((answer as string[]) || [])
 } else if (q.id === 'specialAssets') {
 points = getSpecialAssetPoints((answer as string[]) || [])
 } else if (q.type === 'slider') {
 points = getSliderPoints(answer as number, q.sliderPointMap!)
 } else {
 const selected = q.options?.find((o) => o.value === answer)
 points = selected?.points ?? 0
 }

 breakdown.push({ category: q.categoryLabel, points, color: q.color })
 baseScore += points
 }

 // Apply multipliers
 let finalScore = baseScore
 const multipliers: string[] = []
 const trusts = (answers.trusts as string[]) || []
 const hasTrusts = trusts.length > 0 && !trusts.includes('none')
 const hasRLT = trusts.includes('rlt')
 const blended = answers.blendedFamily as string
 const estateVal = answers.estateValue as number
 const lastReview = answers.lastReview as string
 const business = answers.business as string
 const intl = answers.international as string
 const multiState = answers.multiState as string

 // Blended family + no trusts
 if (blended && blended !== 'no' && !hasTrusts) {
 finalScore *= 1.25
 multipliers.push('Blended family without trust structure')
 }

 // High estate + stale review
 if (estateVal > 15000000 && (lastReview === '5+' || lastReview === 'never')) {
 finalScore *= 1.2
 multipliers.push('Taxable estate with outdated planning')
 }

 // Multi-state without RLT
 if (
 (multiState === '3' || multiState === '4+') &&
 !hasRLT
 ) {
 finalScore *= 1.15
 multipliers.push('Multi-state property without revocable living trust')
 }

 // Business + never reviewed
 if (business && business !== 'none' && lastReview === 'never') {
 finalScore *= 1.3
 multipliers.push('Business with no formal estate plan')
 }

 // International + no trusts
 if (intl && intl !== 'none' && !hasTrusts) {
 finalScore *= 1.2
 multipliers.push('International exposure without trust structure')
 }

 finalScore = Math.round(finalScore)

 // Determine tier
 let tier: CalcResults['tier']
 let tierLabel: string
 let tierColor: string
 let tierDescription: string

 if (finalScore < 15) {
 tier = 'low'
 tierLabel = 'Low Complexity'
 tierColor = '#10B981'
 tierDescription =
 'Based on your answers, your estate situation has relatively few complexity factors. However, even straightforward estates benefit from periodic professional review - especially given recent changes to federal estate tax law.'
 } else if (finalScore < 30) {
 tier = 'moderate'
 tierLabel = 'Moderate Complexity'
 tierColor = '#F59E0B'
 const topFactors = [...breakdown]
 .sort((a, b) => b.points - a.points)
 .filter((f) => f.points > 0)
 .slice(0, 3)
 .map((f) => f.category.toLowerCase())
 tierDescription = `Your estate has ${breakdown.filter((b) => b.points > 0).length} notable complexity factors, including ${topFactors.join(', ')}. These create planning opportunities that a coordinated strategy can address.`
 } else if (finalScore < 50) {
 tier = 'high'
 tierLabel = 'High Complexity'
 tierColor = '#F97316'
 const topTwo = [...breakdown]
 .sort((a, b) => b.points - a.points)
 .filter((f) => f.points > 0)
 .slice(0, 2)
 .map((f) => f.category.toLowerCase())
 tierDescription = `Your estate involves ${breakdown.filter((b) => b.points > 0).length} significant complexity factors. The interaction between ${topTwo[0] || 'your factors'}${topTwo[1] ? ` and ${topTwo[1]}` : ''} is particularly important to address. Without coordinated planning, your heirs may face avoidable taxes, probate delays, or legal disputes.`
 } else {
 tier = 'critical'
 tierLabel = 'Critical Complexity'
 tierColor = '#EF4444'
 tierDescription = `Your estate situation is among the most complex profiles I see. You have ${breakdown.filter((b) => b.points > 0).length} major factors that require coordinated planning across legal, tax, and financial disciplines. The good news: comprehensive planning can dramatically simplify what your family will face.`
 }

 // Generate flags
 const flags: Flag[] = []

 if (estateVal > 15000000) {
 flags.push({
 heading: 'Estate Tax Exposure',
 text: 'Your estate may exceed the 2026 federal exemption of $15M per person ($30M per couple). Federal estate tax at 40% applies to amounts above the exemption.',
 severity: tier === 'critical' ? 'critical' : 'warning',
 })
 }

 if (
 (multiState === '2' || multiState === '3' || multiState === '4+') &&
 !hasRLT
 ) {
 flags.push({
 heading: 'Multi-State Probate Risk',
 text: 'Property in multiple states without a trust means your estate faces ancillary probate in each state - increasing costs and delays.',
 severity: 'warning',
 })
 }

 if (lastReview === '5+' || lastReview === 'never') {
 flags.push({
 heading: 'Outdated Estate Plan',
 text: 'The estate tax landscape changed significantly with the OBBBA in 2025. Your plan may not reflect the new $15M exemption or other law changes.',
 severity: lastReview === 'never' ? 'critical' : 'warning',
 })
 }

 if (blended && blended !== 'no' && !hasTrusts) {
 flags.push({
 heading: 'Blended Family Risk',
 text: 'Blended families without trust structures have elevated risk of inheritance disputes and unintended disinheritance.',
 severity: 'critical',
 })
 }

 if (business && business !== 'none' && !hasTrusts) {
 flags.push({
 heading: 'Business Succession Gap',
 text: 'Business assets without succession planning can force a liquidation sale or costly probate process.',
 severity: 'critical',
 })
 }

 const specialAssets = (answers.specialAssets as string[]) || []
 if (specialAssets.includes('stock')) {
 flags.push({
 heading: 'Concentrated Stock Risk',
 text: 'Concentrated stock positions create liquidity and diversification risk for your estate.',
 severity: 'warning',
 })
 }

 const charitable = answers.charitable as string
 if (
 (charitable === 'structured' || charitable === 'daf') &&
 !trusts.includes('charitable')
 ) {
 flags.push({
 heading: 'Charitable Planning Gap',
 text: 'Structured charitable giving without a dedicated vehicle (CRT, DAF, foundation) may miss significant tax benefits.',
 severity: 'warning',
 })
 }

 return {
 baseScore,
 finalScore,
 tier,
 tierLabel,
 tierColor,
 tierDescription,
 flags,
 breakdown,
 multipliers,
 }
}

// ─────────────────── HELPERS ───────────────────

function fmtCurrency(n: number): string {
 if (n >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M'
 if (n >= 1e3) return '$' + Math.round(n / 1000) + 'K'
 return '$' + n.toLocaleString()
}

// ─────────────────── COMPONENT ───────────────────

export default function EstateComplexityAssessment() {
 const [step, setStep] = useState(0)
 const [answers, setAnswers] = useState<Record<string, string | string[] | number>>({
 estateValue: 3000000,
 })
 const [results, setResults] = useState<CalcResults | null>(null)
 const [screen, setScreen] = useState<'quiz' | 'results'>('quiz')
 const [slideDir, setSlideDir] = useState<'left' | 'right'>('left')
 const [transitioning, setTransitioning] = useState(false)
 const [animatedScore, setAnimatedScore] = useState(0)
 const [gaugeAnimated, setGaugeAnimated] = useState(false)
 const [tooltipOpen, setTooltipOpen] = useState(false)
 const [contactInfo, setContactInfo] = useState({
 firstName: '',
 lastName: '',
 email: '',
 phone: '',
 wantsCall: false,
 })
 const [contactErrors, setContactErrors] = useState<Record<string, string>>({})
 const [formSubmitted, setFormSubmitted] = useState(false)
 const [submitting, setSubmitting] = useState(false)
 const resultsRef = useRef<HTMLDivElement>(null)

 const q = questions[step]
 const totalSteps = questions.length

 const setAnswer = (val: string | string[] | number) => {
 setAnswers((prev) => ({ ...prev, [q.id]: val }))
 }

 const handleSingleSelect = (value: string) => {
 setAnswer(value)
 // Auto-advance after short delay
 setTimeout(() => {
 if (step < totalSteps - 1) {
  setSlideDir('left')
  setTransitioning(true)
  setTimeout(() => {
  setStep((s) => s + 1)
  setTransitioning(false)
  setTooltipOpen(false)
  }, 200)
 }
 }, 250)
 }

 const handleMultiSelect = (value: string) => {
 const current = (answers[q.id] as string[]) || []
 if (value === 'none') {
 setAnswer(['none'])
 } else {
 const withoutNone = current.filter((v) => v !== 'none')
 if (withoutNone.includes(value)) {
  const next = withoutNone.filter((v) => v !== value)
  setAnswer(next.length === 0 ? ['none'] : next)
 } else {
  setAnswer([...withoutNone, value])
 }
 }
 }

 const canProceed = (): boolean => {
 const answer = answers[q.id]
 if (q.type === 'slider') return true
 if (q.type === 'multi') return Array.isArray(answer) && answer.length > 0
 return answer !== undefined && answer !== ''
 }

 const nextStep = () => {
 if (!canProceed()) return
 if (step < totalSteps - 1) {
 setSlideDir('left')
 setTransitioning(true)
 setTimeout(() => {
  setStep((s) => s + 1)
  setTransitioning(false)
  setTooltipOpen(false)
 }, 200)
 } else {
 // Calculate and show results
 const calc = calculateScore(answers)
 setResults(calc)
 setScreen('results')

 // Animate score
 const target = Math.min(calc.finalScore, 92)
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
  setTimeout(() => setGaugeAnimated(true), 100)
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
  score: results?.finalScore,
  tier: results?.tier,
  flags: results?.flags.map((f) => f.heading),
  answers,
  breakdown: results?.breakdown,
  multipliers: results?.multipliers,
  reportHtml: resultsRef.current?.innerHTML || '',
  timestamp: new Date().toISOString(),
  source: 'estate-complexity',
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
 const currentAnswer = answers[q.id]

 return (
 <div className="min-h-[80vh] flex flex-col px-5 py-8 max-w-[600px] mx-auto">
  {/* Progress */}
  <div className="mb-2">
  <div className="flex justify-between items-center mb-2">
  <span className="font-sans text-[12px] font-semibold text-[#5b6a71]">
   Question {step + 1} of {totalSteps}
  </span>
  <span className="font-sans text-[12px] text-[#94A3B8]">
   Estate Complexity Assessment
  </span>
  </div>
  <div className="h-[5px] bg-[#E2E8F0] rounded-full overflow-hidden">
  <div
   className="h-full bg-[#1d7682] rounded-full transition-all duration-400 ease-out"
   style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
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
  <div className="flex items-start gap-2 mb-2">
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
  <p className="font-sans text-[14px] text-[#5b6a71] mb-6">{q.subtext}</p>

  {tooltipOpen && (
  <div className="mb-6 p-4 bg-[#F0F7FF] border border-[#3B82F6]/20 rounded-[8px] font-sans text-[14px] text-[#1E293B] leading-relaxed">
   {q.tooltip}
  </div>
  )}

  {/* Single Select */}
  {q.type === 'single' && (
  <div className="space-y-3">
   {q.options?.map((opt) => {
   const isSelected = currentAnswer === opt.value
   return (
   <button
    key={opt.value}
    onClick={() => handleSingleSelect(opt.value)}
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
    <span>{opt.label}</span>
    </div>
   </button>
   )
   })}
  </div>
  )}

  {/* Multi Select */}
  {q.type === 'multi' && (
  <div className="flex flex-wrap gap-2">
   {q.options?.map((opt) => {
   const selected = (currentAnswer as string[]) || []
   const isSelected = selected.includes(opt.value)
   return (
   <button
    key={opt.value}
    onClick={() => handleMultiSelect(opt.value)}
    className={`px-4 py-2.5 rounded-full border-2 font-sans text-[14px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-1 ${
    isSelected
    ? 'border-[#1d7682] bg-[#1d7682]/10 text-[#1d7682] font-semibold'
    : 'border-[#E2E8F0] bg-white text-[#5b6a71] hover:border-[#1d7682]/40'
    }`}
    role="checkbox"
    aria-checked={isSelected}
   >
    {isSelected && (
    <span className="mr-1.5">&#10003;</span>
    )}
    {opt.label}
   </button>
   )
   })}
  </div>
  )}

  {/* Slider */}
  {q.type === 'slider' && (
  <div>
   <div className="text-center mb-4">
   <span className="font-sans text-[36px] font-bold text-[#1d7682]">
   {fmtCurrency((currentAnswer as number) ?? q.sliderDefault!)}
   </span>
   </div>
   <input
   type="range"
   min={q.sliderMin}
   max={q.sliderMax}
   step={q.sliderStep}
   value={(currentAnswer as number) ?? q.sliderDefault!}
   onChange={(e) => setAnswer(Number(e.target.value))}
   className="w-full h-2 rounded-full appearance-none cursor-pointer"
   style={{
   background: `linear-gradient(to right, #1d7682 0%, #1d7682 ${
    ((((currentAnswer as number) ?? q.sliderDefault!) - q.sliderMin!) /
    (q.sliderMax! - q.sliderMin!)) *
    100
   }%, #E2E8F0 ${
    ((((currentAnswer as number) ?? q.sliderDefault!) - q.sliderMin!) /
    (q.sliderMax! - q.sliderMin!)) *
    100
   }%, #E2E8F0 100%)`,
   }}
   aria-label={q.question}
   aria-valuenow={(currentAnswer as number) ?? q.sliderDefault!}
   aria-valuemin={q.sliderMin}
   aria-valuemax={q.sliderMax}
   />
   <div className="flex justify-between mt-1">
   <span className="font-sans text-[11px] text-[#94A3B8]">$0</span>
   <span className="font-sans text-[11px] text-[#94A3B8]">$50M+</span>
   </div>
   {/* Exemption reference marker */}
   <div className="mt-3 flex items-center gap-2">
   <div className="w-2 h-2 bg-[#F59E0B] rounded-full" />
   <span className="font-sans text-[11px] text-[#5b6a71]">
   2026 federal exemption: $15M/person ($30M/couple)
   </span>
   </div>
  </div>
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
  {(q.type === 'multi' || q.type === 'slider') && (
  <button
   onClick={nextStep}
   disabled={!canProceed()}
   className={`font-sans text-[15px] font-semibold px-8 py-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2 ${
   canProceed()
   ? 'bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white hover:from-[#238a97] hover:to-[#155f69] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)]'
   : 'bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed'
   }`}
  >
   {step === totalSteps - 1 ? 'See My Score' : 'Next'} &rarr;
  </button>
  )}
  </div>
 </div>
 )
 }

 // ─────────────────── RESULTS SCREEN ───────────────────
 if (screen === 'results' && results) {
 const maxScore = 92
 const scorePct = Math.min(results.finalScore / maxScore, 1)
 // Gauge: semicircle with 4 zones
 const gaugeRadius = 120
 const gaugeStroke = 18
 const halfCircumference = Math.PI * gaugeRadius
 const needleAngle = -90 + scorePct * 180

 const totalBarPoints = results.breakdown.reduce((s, b) => s + b.points, 0)

 return (
 <div className="px-5 py-12 max-w-[680px] mx-auto" ref={resultsRef}>
  {/* Gauge */}
  <div className="text-center mb-8">
  <svg
  width="280"
  height="170"
  viewBox="0 0 280 170"
  className="mx-auto"
  role="img"
  aria-label={`Estate complexity score: ${results.finalScore}, rated ${results.tierLabel}`}
  >
  {/* Background arc */}
  <path
   d="M 20 150 A 120 120 0 0 1 260 150"
   fill="none"
   stroke="#E2E8F0"
   strokeWidth={gaugeStroke}
   strokeLinecap="round"
  />
  {/* Green zone (0-14) = 0-15.2% */}
  <path
   d="M 20 150 A 120 120 0 0 1 260 150"
   fill="none"
   stroke="#10B981"
   strokeWidth={gaugeStroke}
   strokeLinecap="round"
   strokeDasharray={`${halfCircumference * 0.152} ${halfCircumference}`}
   opacity={0.25}
  />
  {/* Yellow zone (15-29) = 15.2%-31.5% */}
  <path
   d="M 20 150 A 120 120 0 0 1 260 150"
   fill="none"
   stroke="#F59E0B"
   strokeWidth={gaugeStroke}
   strokeDasharray={`${halfCircumference * 0.163} ${halfCircumference}`}
   strokeDashoffset={`${-halfCircumference * 0.152}`}
   opacity={0.25}
  />
  {/* Orange zone (30-49) = 31.5%-53.3% */}
  <path
   d="M 20 150 A 120 120 0 0 1 260 150"
   fill="none"
   stroke="#F97316"
   strokeWidth={gaugeStroke}
   strokeDasharray={`${halfCircumference * 0.218} ${halfCircumference}`}
   strokeDashoffset={`${-halfCircumference * 0.315}`}
   opacity={0.25}
  />
  {/* Red zone (50+) = 53.3%-100% */}
  <path
   d="M 20 150 A 120 120 0 0 1 260 150"
   fill="none"
   stroke="#EF4444"
   strokeWidth={gaugeStroke}
   strokeLinecap="round"
   strokeDasharray={`${halfCircumference * 0.467} ${halfCircumference}`}
   strokeDashoffset={`${-halfCircumference * 0.533}`}
   opacity={0.25}
  />
  {/* Needle */}
  <line
   x1="140"
   y1="150"
   x2="140"
   y2="45"
   stroke={results.tierColor}
   strokeWidth="3"
   strokeLinecap="round"
   style={{
   transformOrigin: '140px 150px',
   transform: `rotate(${gaugeAnimated ? needleAngle : -90}deg)`,
   transition: 'transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
   }}
  />
  {/* Center dot */}
  <circle cx="140" cy="150" r="6" fill={results.tierColor} />
  {/* Score text */}
  <text x="140" y="130" textAnchor="middle" fontSize="40" fontWeight="800" fill={results.tierColor}>
   {animatedScore}
  </text>
  </svg>

  <div className="mt-2">
  <span
   className="inline-block px-5 py-1.5 rounded-full font-sans text-[14px] font-semibold text-white"
   style={{ backgroundColor: results.tierColor }}
  >
   {results.tierLabel}
  </span>
  </div>
  <p className="font-sans text-[15px] text-[#5b6a71] mt-4 max-w-[520px] mx-auto leading-relaxed">
  {results.tierDescription}
  </p>
  </div>

  {/* Factor Breakdown Bar */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 mb-6">
  <h3 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#333333] mb-4">
  Complexity Factor Breakdown
  </h3>
  {/* Stacked bar */}
  {totalBarPoints > 0 && (
  <div className="h-8 rounded-[6px] overflow-hidden flex mb-4">
   {results.breakdown
   .filter((b) => b.points > 0)
   .map((b, i) => (
   <div
    key={i}
    className="h-full relative group"
    style={{
    width: `${(b.points / totalBarPoints) * 100}%`,
    backgroundColor: b.color,
    minWidth: '2px',
    }}
    title={`${b.category}: ${b.points} pts`}
   >
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#333333] text-white text-[11px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-sans">
    {b.category}: {b.points} pts
    </div>
   </div>
   ))}
  </div>
  )}
  {/* Legend */}
  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
  {results.breakdown
   .filter((b) => b.points > 0)
   .sort((a, b) => b.points - a.points)
   .map((b, i) => (
   <div key={i} className="flex items-center gap-1.5">
   <div
    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
    style={{ backgroundColor: b.color }}
   />
   <span className="font-sans text-[12px] text-[#5b6a71]">
    {b.category} ({b.points}pts)
   </span>
   </div>
   ))}
  </div>
  {results.multipliers.length > 0 && (
  <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
   <p className="font-sans text-[12px] font-semibold text-[#5b6a71] mb-1.5">
   Compounding risk factors detected:
   </p>
   {results.multipliers.map((m, i) => (
   <p key={i} className="font-sans text-[12px] text-[#5b6a71]">
   &bull; {m}
   </p>
   ))}
  </div>
  )}
  </div>

  {/* Flag Cards */}
  {results.flags.length > 0 && (
  <div className="space-y-3 mb-8">
  {results.flags.map((flag, i) => (
   <div
   key={i}
   className={`rounded-[12px] p-5 flex items-start gap-3 border ${
   flag.severity === 'critical'
    ? 'bg-[#FEF2F2] border-[#EF4444]/20'
    : 'bg-[#FFFBEB] border-[#F59E0B]/20'
   }`}
   >
   <span className="text-[18px] flex-shrink-0 mt-0.5">
   {flag.severity === 'critical' ? '\u{1F6A8}' : '\u26A0\uFE0F'}
   </span>
   <div>
   <p
    className={`font-sans text-[14px] font-semibold ${
    flag.severity === 'critical' ? 'text-[#991B1B]' : 'text-[#92400E]'
    }`}
   >
    {flag.heading}
   </p>
   <p
    className={`font-sans text-[13px] mt-1 ${
    flag.severity === 'critical' ? 'text-[#991B1B]/80' : 'text-[#92400E]/80'
    }`}
   >
    {flag.text}
   </p>
   </div>
   </div>
  ))}
  </div>
  )}

  {/* CTA Section */}
  <div className="bg-[#333333] rounded-[12px] p-8 mb-8">
  {!formSubmitted ? (
  <>
   <div className="text-center mb-6">
   <h3 className="font-serif text-[22px] md:text-[26px] font-bold text-[#F7F4EE]">
   Your Estate Readiness Report
   </h3>
   <p className="font-sans text-[14px] text-[#94A3B8] mt-3 max-w-[480px] mx-auto leading-relaxed">
   We&apos;ve prepared a detailed report based on your{' '}
   <span
    className="font-semibold"
    style={{ color: results.tierColor }}
   >
    {results.tierLabel.toLowerCase()}
   </span>{' '}
   profile, including:
   </p>
   <ul className="text-left max-w-[400px] mx-auto mt-3 space-y-1.5">
   {[
    `Breakdown of your ${results.breakdown.filter((b) => b.points > 0).length} complexity factors`,
    'Specific action items ranked by priority',
    'How recent law changes (2026 $15M exemption) affect your situation',
    'A checklist for your next estate planning conversation',
   ].map((item, i) => (
    <li key={i} className="flex items-start gap-2">
    <svg
    className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    >
    <polyline points="20 6 9 17 4 12" />
    </svg>
    <span className="font-sans text-[13px] text-[#94A3B8]">{item}</span>
    </li>
   ))}
   </ul>
   </div>
   <form onSubmit={handleContactSubmit} noValidate className="space-y-3 max-w-[420px] mx-auto">
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
   <div>
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
   </div>
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
   <label className="flex items-center gap-2 cursor-pointer py-1">
   <input
    type="checkbox"
    checked={contactInfo.wantsCall}
    onChange={(e) =>
    setContactInfo((p) => ({ ...p, wantsCall: e.target.checked }))
    }
    className="w-4 h-4 rounded border-[#4a4a4a] text-[#1d7682] focus:ring-[#1d7682]"
   />
   <span className="font-sans text-[13px] text-[#94A3B8]">
    I&apos;d like a Farther advisor to walk me through this report
   </span>
   </label>
   <p className="font-sans text-[11px] text-[#8a8a8a] text-center italic">
   By providing your information, you consent to being contacted by a Farther
   advisor. Your data is encrypted and will not be sold to third parties.
   </p>
   <button
   type="submit"
   disabled={submitting}
   className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[16px] py-4 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2 focus:ring-offset-[#333333] disabled:opacity-60"
   >
   {submitting ? 'Submitting...' : 'Get My Free Estate Report \u2192'}
   </button>
   </form>
  </>
  ) : (
  <div className="text-center py-4">
   <div className="w-14 h-14 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-4">
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
   <h4 className="font-serif text-[22px] font-bold text-[#F7F4EE]">
   Your Report Is on the Way!
   </h4>
   <p className="font-sans text-[14px] text-[#94A3B8] mt-2 max-w-[400px] mx-auto">
   Your Estate Readiness Report has been sent to your email. A Farther
   advisor will reach out within 24 hours to discuss your results.
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
  <CalculatorDisclaimer
   toolName="estate complexity"
   variant="default"
   resultSummary={results ? `Your estate scored ${results.finalScore}/100, ${results.tierLabel}. The higher the number, the more your plan rewards a coordinated team, attorney, CPA, and advisor working from the same playbook.` : undefined}
   ctaLabel="Sequence the estate work"
  />
 </div>
 )
 }

 return null
}
