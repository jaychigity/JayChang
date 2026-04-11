'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'

// ─────────────────── TYPES ───────────────────

type CompType = 'RSU' | 'ISO' | 'NQSO' | 'ESPP'

interface Inputs {
 compType: CompType
 totalShares: number
 grantPrice: number
 currentFMV: number
 vestStartDate: string
 fedTaxRate: number
}

interface Milestone {
 date: Date
 type: 'vest' | 'tax' | 'optimize' | 'deadline'
 label: string
 dollarImpact: number
 actionItem: string
 isPast: boolean
}

interface CalcResults {
 totalValue: number
 spread: number
 estimatedTax: number
 potentialSavings: number
 isUnderwater: boolean
 milestones: Milestone[]
 interpretation: string
 nextDeadline: Milestone | null
 compType: CompType
 // ESPP-specific
 discountValue?: number
 // ISO-specific
 amtPreference?: number
 amtEstimate?: number
}

// ─────────────────── CONSTANTS ───────────────────

const COMP_DESCRIPTIONS: Record<CompType, string> = {
 RSU: 'Restricted Stock Units - shares granted that vest over time',
 ISO: 'Incentive Stock Options - tax-advantaged options with AMT considerations',
 NQSO: 'Non-Qualified Stock Options - options taxed as ordinary income at exercise',
 ESPP: 'Employee Stock Purchase Plan - discounted share purchases',
}

const TAX_BRACKETS = [
 { label: '10%', value: 0.10 },
 { label: '12%', value: 0.12 },
 { label: '22%', value: 0.22 },
 { label: '24%', value: 0.24 },
 { label: '32%', value: 0.32 },
 { label: '35%', value: 0.35 },
 { label: '37%', value: 0.37 },
]

function getLTCGRate(fedRate: number): number {
 if (fedRate <= 0.12) return 0
 if (fedRate <= 0.35) return 0.15
 return 0.20
}

const AMT_RATE = 0.26
const ESPP_DISCOUNT = 0.15
const STATE_TAX_ESTIMATE = 0.05
const MEDICARE_TAX = 0.0145

// ─────────────────── HELPERS ───────────────────

function fmtCurrency(n: number): string {
 if (Math.abs(n) >= 1e6) {
 return '$' + (n / 1e6).toFixed(1) + 'M'
 }
 return '$' + Math.round(n).toLocaleString('en-US')
}

function fmtCurrencyFull(n: number): string {
 return '$' + Math.round(n).toLocaleString('en-US')
}

function parseCurrency(s: string): number {
 return Number(s.replace(/[^0-9.-]/g, '')) || 0
}

function formatInputVal(n: number | undefined): string {
 if (n === undefined || n === null) return ''
 if (n === 0) return '$0'
 return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 2 })
}

function addMonths(date: Date, months: number): Date {
 const d = new Date(date)
 d.setMonth(d.getMonth() + months)
 return d
}

function addYears(date: Date, years: number): Date {
 const d = new Date(date)
 d.setFullYear(d.getFullYear() + years)
 return d
}

function fmtDate(d: Date): string {
 return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

function fmtDateFull(d: Date): string {
 return d.toLocaleDateString('en-US', {
 month: 'short',
 day: 'numeric',
 year: 'numeric',
 })
}

function isPast(d: Date): boolean {
 return d < new Date()
}

function getDefaultVestStart(): string {
 const d = new Date()
 d.setFullYear(d.getFullYear() - 1)
 return d.toISOString().split('T')[0]
}

// ─────────────────── CALCULATION ENGINE ───────────────────

function generateVestingSchedule(
 startDate: Date,
 totalShares: number,
 vestMonths: number
): { date: Date; shares: number }[] {
 const events: { date: Date; shares: number }[] = []
 // 4-year schedule with 1-year cliff, then quarterly
 const cliffDate = addMonths(startDate, 12)
 const cliffShares = Math.floor(totalShares * (12 / vestMonths))
 events.push({ date: cliffDate, shares: cliffShares })

 const remainingShares = totalShares - cliffShares
 const remainingQuarters = Math.floor((vestMonths - 12) / 3)
 const perQuarter = remainingQuarters > 0 ? Math.floor(remainingShares / remainingQuarters) : 0

 let allocated = cliffShares
 for (let q = 1; q <= remainingQuarters; q++) {
 const isLast = q === remainingQuarters
 const shares = isLast ? totalShares - allocated : perQuarter
 events.push({
 date: addMonths(startDate, 12 + q * 3),
 shares,
 })
 allocated += shares
 }

 return events
}

function calculate(inputs: Inputs): CalcResults {
 const { compType, totalShares, grantPrice, currentFMV, vestStartDate, fedTaxRate } = inputs
 const ltcgRate = getLTCGRate(fedTaxRate)
 const effectiveGrantPrice = compType === 'RSU' ? 0 : grantPrice
 const spread = Math.max(0, (currentFMV - effectiveGrantPrice) * totalShares)
 const totalValue = currentFMV * totalShares
 const isUnderwater = compType !== 'RSU' && currentFMV < effectiveGrantPrice
 const startDate = new Date(vestStartDate + 'T00:00:00')
 const vestMonths = 48

 const milestones: Milestone[] = []
 const vestEvents = generateVestingSchedule(startDate, totalShares, vestMonths)

 let estimatedTax = 0
 let potentialSavings = 0
 let interpretation = ''
 let discountValue: number | undefined
 let amtPreference: number | undefined
 let amtEstimate: number | undefined

 // Grant date milestone
 milestones.push({
 date: startDate,
 type: 'vest',
 label: 'Grant date',
 dollarImpact: 0,
 actionItem: 'Your equity compensation grant begins.',
 isPast: isPast(startDate),
 })

 if (compType === 'RSU') {
 // RSU: taxed at vesting as ordinary income on FMV
 const taxPerShare = currentFMV * (fedTaxRate + STATE_TAX_ESTIMATE)

 for (const vest of vestEvents) {
 const vestVal = vest.shares * currentFMV
 const vestTax = vest.shares * taxPerShare

 milestones.push({
  date: vest.date,
  type: 'vest',
  label: `${vest.shares.toLocaleString()} shares vest`,
  dollarImpact: vestVal,
  actionItem: `${fmtCurrencyFull(vestVal)} in shares become yours.`,
  isPast: isPast(vest.date),
 })

 milestones.push({
  date: vest.date,
  type: 'tax',
  label: `Ordinary income tax due on vested shares`,
  dollarImpact: vestTax,
  actionItem: `Estimated ${fmtCurrencyFull(vestTax)} withheld for taxes at vesting.`,
  isPast: isPast(vest.date),
 })

 // LTCG eligibility 1 year after vesting
 const ltcgDate = addYears(vest.date, 1)
 milestones.push({
  date: ltcgDate,
  type: 'optimize',
  label: 'Long-term capital gains eligible',
  dollarImpact: 0,
  actionItem:
  'Shares held 1+ year from vesting qualify for lower LTCG rates on additional gains.',
  isPast: isPast(ltcgDate),
 })
 }

 estimatedTax = totalShares * taxPerShare
 const ltcgEquivalent = totalValue * ltcgRate
 potentialSavings = Math.max(0, totalValue * (fedTaxRate + STATE_TAX_ESTIMATE) - totalValue * ltcgRate)
 // The savings here is on *future appreciation* only; RSU vesting is always ordinary
 // Show savings as the differential if they hold for LTCG on future gains
 potentialSavings = Math.round(
 totalValue * 0.1 * ((fedTaxRate + STATE_TAX_ESTIMATE) - ltcgRate)
 ) // Assume 10% future appreciation scenario

 interpretation = `Your ${totalShares.toLocaleString()} RSUs are worth approximately ${fmtCurrencyFull(totalValue)} today. At vesting, you'll owe an estimated ${fmtCurrencyFull(estimatedTax)} in federal and state taxes. By holding shares for 12+ months after vesting, any additional gains would be taxed at the lower long-term capital gains rate (${(ltcgRate * 100).toFixed(0)}% vs. ${((fedTaxRate + STATE_TAX_ESTIMATE) * 100).toFixed(0)}%) - potentially saving you thousands.`
 } else if (compType === 'ISO') {
 // ISO: AMT at exercise, LTCG if qualifying disposition
 amtPreference = spread
 amtEstimate = spread * AMT_RATE

 for (const vest of vestEvents) {
 const vestSpread = vest.shares * (currentFMV - effectiveGrantPrice)

 milestones.push({
  date: vest.date,
  type: 'vest',
  label: `${vest.shares.toLocaleString()} ISOs vest - exercise window opens`,
  dollarImpact: vest.shares * currentFMV,
  actionItem: `You can now exercise ${vest.shares.toLocaleString()} options at ${fmtCurrencyFull(effectiveGrantPrice)}/share.`,
  isPast: isPast(vest.date),
 })

 if (vestSpread > 0) {
  milestones.push({
  date: vest.date,
  type: 'tax',
  label: 'AMT exposure if exercised',
  dollarImpact: vestSpread * AMT_RATE,
  actionItem: `Exercising creates ${fmtCurrencyFull(vestSpread)} AMT preference item. Estimated AMT: ${fmtCurrencyFull(vestSpread * AMT_RATE)}.`,
  isPast: isPast(vest.date),
  })
 }

 // Qualifying disposition: 2yr from grant AND 1yr from exercise
 const qdFromGrant = addYears(startDate, 2)
 const qdFromExercise = addYears(vest.date, 1)
 const qdDate = qdFromGrant > qdFromExercise ? qdFromGrant : qdFromExercise

 milestones.push({
  date: qdDate,
  type: 'optimize',
  label: 'Qualifying disposition eligible',
  dollarImpact: 0,
  actionItem:
  'If you exercised at vest, selling after this date qualifies the entire gain for long-term capital gains rates.',
  isPast: isPast(qdDate),
 })

 // AMT planning window - October of exercise year
 const amtPlanDate = new Date(vest.date.getFullYear(), 9, 1) // October
 if (amtPlanDate >= vest.date) {
  milestones.push({
  date: amtPlanDate,
  type: 'optimize',
  label: 'Year-end AMT planning window',
  dollarImpact: 0,
  actionItem:
  'Q4 is the ideal time to model your full-year AMT exposure and decide whether to exercise more shares this year or defer to next year.',
  isPast: isPast(amtPlanDate),
  })
 }
 }

 // 10-year expiration
 const expiryDate = addYears(startDate, 10)
 milestones.push({
 date: expiryDate,
 type: 'deadline',
 label: 'Options expire',
 dollarImpact: spread,
 actionItem: `All unexercised options expire worthless. Current spread value: ${fmtCurrencyFull(spread)}.`,
 isPast: isPast(expiryDate),
 })

 const ordinaryTax = spread * (fedTaxRate + STATE_TAX_ESTIMATE)
 const ltcgTax = spread * ltcgRate
 estimatedTax = ordinaryTax // disqualifying
 potentialSavings = Math.max(0, ordinaryTax - ltcgTax)

 interpretation = isUnderwater
 ? `Your ISOs are currently underwater (grant price ${fmtCurrencyFull(effectiveGrantPrice)} exceeds market price ${fmtCurrencyFull(currentFMV)}). No tax event occurs until the stock price exceeds your exercise price. The timeline below shows your vesting milestones and future optimization windows.`
 : `Exercising your ${totalShares.toLocaleString()} ISOs today would create an estimated ${fmtCurrencyFull(amtPreference!)} AMT preference item, potentially triggering approximately ${fmtCurrencyFull(amtEstimate!)} in Alternative Minimum Tax. By meeting the qualifying disposition holding period (2 years from grant + 1 year from exercise), your entire gain could be taxed at the ${(ltcgRate * 100).toFixed(0)}% LTCG rate instead of ${((fedTaxRate + STATE_TAX_ESTIMATE) * 100).toFixed(0)}% ordinary rate - a potential savings of up to ${fmtCurrencyFull(potentialSavings)}.`
 } else if (compType === 'NQSO') {
 // NQSO: ordinary income + FICA at exercise
 const effectiveTaxRate = fedTaxRate + STATE_TAX_ESTIMATE + MEDICARE_TAX

 for (const vest of vestEvents) {
 const vestSpread = vest.shares * Math.max(0, currentFMV - effectiveGrantPrice)

 milestones.push({
  date: vest.date,
  type: 'vest',
  label: `${vest.shares.toLocaleString()} NQSOs vest - exercise window opens`,
  dollarImpact: vest.shares * currentFMV,
  actionItem: `You can now exercise ${vest.shares.toLocaleString()} options at ${fmtCurrencyFull(effectiveGrantPrice)}/share.`,
  isPast: isPast(vest.date),
 })

 if (vestSpread > 0) {
  milestones.push({
  date: vest.date,
  type: 'tax',
  label: 'Ordinary income tax + FICA at exercise',
  dollarImpact: vestSpread * effectiveTaxRate,
  actionItem: `Exercising triggers ${fmtCurrencyFull(vestSpread)} in W-2 income. Estimated tax: ${fmtCurrencyFull(vestSpread * effectiveTaxRate)}.`,
  isPast: isPast(vest.date),
  })
 }

 // LTCG eligibility 1 year after exercise
 const ltcgDate = addYears(vest.date, 1)
 milestones.push({
  date: ltcgDate,
  type: 'optimize',
  label: 'LTCG eligible on post-exercise gains',
  dollarImpact: 0,
  actionItem:
  'Shares held 1+ year after exercise qualify for lower long-term capital gains rates on any additional appreciation.',
  isPast: isPast(ltcgDate),
 })
 }

 // 10-year expiration
 const expiryDate = addYears(startDate, 10)
 milestones.push({
 date: expiryDate,
 type: 'deadline',
 label: 'Options expire',
 dollarImpact: spread,
 actionItem: `All unexercised options expire worthless. Current spread value: ${fmtCurrencyFull(spread)}.`,
 isPast: isPast(expiryDate),
 })

 estimatedTax = spread * effectiveTaxRate
 // Savings from timing across tax years (estimated ~20% of tax if spread across 2 years)
 potentialSavings = Math.round(estimatedTax * 0.15)

 interpretation = isUnderwater
 ? `Your NQSOs are currently underwater (grant price ${fmtCurrencyFull(effectiveGrantPrice)} exceeds market price ${fmtCurrencyFull(currentFMV)}). No tax event occurs until the stock price exceeds your exercise price.`
 : `The moment you exercise your ${totalShares.toLocaleString()} NQSOs, you'll owe ordinary income tax plus Medicare tax on the ${fmtCurrencyFull(spread)} spread - an estimated ${fmtCurrencyFull(estimatedTax)}. Timing your exercise across tax years, or in a lower-income year, could reduce your bill. After exercising, holding shares 1+ year converts future gains to the lower LTCG rate.`
 } else {
 // ESPP
 const effectiveDiscount = effectiveGrantPrice * ESPP_DISCOUNT
 discountValue = effectiveDiscount * totalShares
 const purchasePrice = effectiveGrantPrice * (1 - ESPP_DISCOUNT)
 const purchaseDate = addMonths(startDate, 6) // typical 6-month offering

 milestones.push({
 date: startDate,
 type: 'vest',
 label: 'Offering period begins',
 dollarImpact: 0,
 actionItem: 'ESPP contributions start accumulating.',
 isPast: isPast(startDate),
 })

 milestones.push({
 date: purchaseDate,
 type: 'vest',
 label: `${totalShares.toLocaleString()} shares purchased at ${(ESPP_DISCOUNT * 100).toFixed(0)}% discount`,
 dollarImpact: discountValue,
 actionItem: `Shares purchased at ${fmtCurrencyFull(purchasePrice)}/share. Built-in discount value: ${fmtCurrencyFull(discountValue)}.`,
 isPast: isPast(purchaseDate),
 })

 // Disqualifying disposition warning
 milestones.push({
 date: purchaseDate,
 type: 'tax',
 label: 'Selling now = disqualifying disposition',
 dollarImpact: (currentFMV - purchasePrice) * totalShares * (fedTaxRate + STATE_TAX_ESTIMATE),
 actionItem: `Selling before qualifying dates means the full discount (${fmtCurrencyFull(discountValue)}) is taxed as W-2 ordinary income.`,
 isPast: isPast(purchaseDate),
 })

 // Qualifying disposition dates
 const qdFromOffering = addYears(startDate, 2)
 const qdFromPurchase = addYears(purchaseDate, 1)
 const qdDate = qdFromOffering > qdFromPurchase ? qdFromOffering : qdFromPurchase

 milestones.push({
 date: qdDate,
 type: 'optimize',
 label: 'Qualifying disposition eligible',
 dollarImpact: 0,
 actionItem: `After this date, only the discount portion (${fmtCurrencyFull(discountValue)}) is ordinary income. The remainder qualifies for long-term capital gains rates.`,
 isPast: isPast(qdDate),
 })

 const disqualifyingTax =
 (currentFMV - purchasePrice) * totalShares * (fedTaxRate + STATE_TAX_ESTIMATE)
 const qualifyingOrdinary = discountValue * (fedTaxRate + STATE_TAX_ESTIMATE)
 const qualifyingLTCG =
 Math.max(0, (currentFMV - effectiveGrantPrice) * totalShares - discountValue) * ltcgRate
 const qualifyingTotalTax = qualifyingOrdinary + qualifyingLTCG

 estimatedTax = disqualifyingTax
 potentialSavings = Math.max(0, disqualifyingTax - qualifyingTotalTax)

 const esppSpread = (currentFMV - purchasePrice) * totalShares
 interpretation =
 currentFMV < purchasePrice
  ? `Your ESPP shares are currently below the purchase price. However, your built-in ${(ESPP_DISCOUNT * 100).toFixed(0)}% discount still provides ${fmtCurrencyFull(discountValue)} in embedded value.`
  : `Your ESPP discount gives you a built-in advantage of ${fmtCurrencyFull(discountValue)}. Meeting the qualifying holding period (2 years from offering + 1 year from purchase) means only the discount portion is taxed as ordinary income - the remaining ${fmtCurrencyFull(Math.max(0, esppSpread - discountValue))} in gains qualifies for long-term capital gains rates. This could save you up to ${fmtCurrencyFull(potentialSavings)}.`
 }

 // Sort milestones by date
 milestones.sort((a, b) => a.date.getTime() - b.date.getTime())

 // Find next deadline
 const now = new Date()
 const nextDeadline =
 milestones.find((m) => m.date > now && (m.type === 'tax' || m.type === 'optimize' || m.type === 'deadline')) || null

 return {
 totalValue,
 spread,
 estimatedTax,
 potentialSavings,
 isUnderwater,
 milestones,
 interpretation,
 nextDeadline,
 compType,
 discountValue,
 amtPreference,
 amtEstimate,
 }
}

// ─────────────────── MILESTONE COLORS ───────────────────

const MILESTONE_STYLES: Record<
 Milestone['type'],
 { color: string; pastColor: string; label: string }
> = {
 vest: { color: '#10B981', pastColor: '#94A3B8', label: 'Vesting Event' },
 tax: { color: '#EF4444', pastColor: '#94A3B8', label: 'Tax Trigger' },
 optimize: { color: '#F59E0B', pastColor: '#94A3B8', label: 'Optimization Window' },
 deadline: { color: '#8B5CF6', pastColor: '#94A3B8', label: 'Deadline' },
}

// ─────────────────── COMPONENT ───────────────────

export default function EquityCompensationTool() {
 const [inputs, setInputs] = useState<Inputs>({
 compType: 'RSU',
 totalShares: 1000,
 grantPrice: 25,
 currentFMV: 75,
 vestStartDate: getDefaultVestStart(),
 fedTaxRate: 0.35,
 })
 const [results, setResults] = useState<CalcResults | null>(null)
 const [expandedMilestone, setExpandedMilestone] = useState<number | null>(null)
 const [contactInfo, setContactInfo] = useState({
 firstName: '',
 email: '',
 phone: '',
 wantsCall: false,
 })
 const [contactErrors, setContactErrors] = useState<Record<string, string>>({})
 const [formSubmitted, setFormSubmitted] = useState(false)
 const [submitting, setSubmitting] = useState(false)
 const [animatedValue, setAnimatedValue] = useState(0)
 const [showResults, setShowResults] = useState(false)
 const resultsRef = useRef<HTMLDivElement>(null)

 const updateField = useCallback(
 <K extends keyof Inputs>(key: K, val: Inputs[K]) => {
 setInputs((prev) => {
  const next = { ...prev, [key]: val }
  // Auto-zero grant price for RSUs
  if (key === 'compType' && val === 'RSU') {
  next.grantPrice = 0
  }
  if (key === 'compType' && val !== 'RSU' && prev.grantPrice === 0) {
  next.grantPrice = 25
  }
  return next
 })
 },
 []
 )

 const handleCalculate = useCallback(() => {
 if (inputs.totalShares <= 0) return
 const calc = calculate(inputs)
 setResults(calc)
 setShowResults(true)

 // Animate the total value
 const target = calc.totalValue
 const duration = 800
 const start = performance.now()
 const animate = (now: number) => {
 const elapsed = now - start
 const progress = Math.min(elapsed / duration, 1)
 const eased = 1 - Math.pow(1 - progress, 3)
 setAnimatedValue(Math.round(eased * target))
 if (progress < 1) requestAnimationFrame(animate)
 }
 requestAnimationFrame(animate)

 setTimeout(() => {
 resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
 }, 100)
 }, [inputs])

 // Recalculate on input change (debounced feel)
 useEffect(() => {
 if (showResults) {
 const calc = calculate(inputs)
 setResults(calc)
 setAnimatedValue(calc.totalValue)
 }
 }, [inputs, showResults])

 const handleContactSubmit = async (e: React.FormEvent) => {
 e.preventDefault()
 const errs: Record<string, string> = {}
 if (contactInfo.firstName.trim().length < 2) errs.firstName = 'Required'
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
  inputs,
  results: results
   ? {
   totalValue: results.totalValue,
   spread: results.spread,
   estimatedTax: results.estimatedTax,
   potentialSavings: results.potentialSavings,
   compType: results.compType,
   milestonesCount: results.milestones.length,
   nextDeadline: results.nextDeadline?.label,
   }
   : null,
  reportHtml: resultsRef.current?.innerHTML || '',
  timestamp: new Date().toISOString(),
  source: 'equity-compensation',
  }),
 }).catch(() => {})
 } catch {
 // silently fail
 }
 setSubmitting(false)
 setFormSubmitted(true)
 }

 const showGrantPrice = inputs.compType !== 'RSU'

 return (
 <div className="px-5 py-12 max-w-[960px] mx-auto">
 {/* Input Section */}
 <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 md:p-8 mb-8">
  <h2 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#333333] mb-6">
  Your Equity Details
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
  {/* Field 1: Comp Type */}
  <div className="md:col-span-2">
  <label className="font-sans text-[13px] font-medium text-[#333333] block mb-2">
   What type of equity compensation do you have?
  </label>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
   {(['RSU', 'ISO', 'NQSO', 'ESPP'] as CompType[]).map((t) => (
   <button
   key={t}
   onClick={() => updateField('compType', t)}
   className={`px-4 py-3 rounded-[8px] border-2 text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2 ${
    inputs.compType === t
    ? 'border-[#1d7682] bg-[#1d7682]/5'
    : 'border-[#E2E8F0] bg-white hover:border-[#1d7682]/40'
   }`}
   >
   <span
    className={`font-sans text-[15px] font-semibold block ${
    inputs.compType === t ? 'text-[#1d7682]' : 'text-[#333333]'
    }`}
   >
    {t}
   </span>
   </button>
   ))}
  </div>
  <p className="font-sans text-[12px] text-[#5b6a71] mt-1.5">
   {COMP_DESCRIPTIONS[inputs.compType]}
  </p>
  </div>

  {/* Field 2: Total Shares */}
  <div>
  <label
   htmlFor="totalShares"
   className="font-sans text-[13px] font-medium text-[#333333] block mb-1.5"
  >
   How many shares were granted?
  </label>
  <input
   id="totalShares"
   type="text"
   inputMode="numeric"
   value={inputs.totalShares > 0 ? inputs.totalShares.toLocaleString() : ''}
   onChange={(e) => {
   const n = Number(e.target.value.replace(/[^0-9]/g, ''))
   if (n >= 0 && n <= 1000000) updateField('totalShares', n)
   }}
   placeholder="1,000"
   className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
   aria-label="Total shares granted"
  />
  <p className="font-sans text-[11px] text-[#94A3B8] mt-1">
   Total shares in your grant, not just vested.
  </p>
  </div>

  {/* Field 3: Grant/Exercise Price */}
  <div>
  <label
   htmlFor="grantPrice"
   className="font-sans text-[13px] font-medium text-[#333333] block mb-1.5"
  >
   {inputs.compType === 'ESPP' ? 'Offering price per share' : 'Grant/exercise price per share'}
  </label>
  {showGrantPrice ? (
   <input
   id="grantPrice"
   type="text"
   inputMode="decimal"
   value={inputs.grantPrice > 0 ? formatInputVal(inputs.grantPrice) : ''}
   onChange={(e) => {
   const n = parseCurrency(e.target.value)
   if (n >= 0 && n <= 10000) updateField('grantPrice', n)
   }}
   placeholder="$25.00"
   className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
   aria-label="Grant price per share"
   />
  ) : (
   <div className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#94A3B8] bg-[#F8F9FA]">
   $0.00 - RSUs have no exercise price
   </div>
  )}
  </div>

  {/* Field 4: Current Share Price */}
  <div>
  <label
   htmlFor="currentFMV"
   className="font-sans text-[13px] font-medium text-[#333333] block mb-1.5"
  >
   Current stock price per share
  </label>
  <input
   id="currentFMV"
   type="text"
   inputMode="decimal"
   value={inputs.currentFMV > 0 ? formatInputVal(inputs.currentFMV) : ''}
   onChange={(e) => {
   const n = parseCurrency(e.target.value)
   if (n >= 0 && n <= 100000) updateField('currentFMV', n)
   }}
   placeholder="$75.00"
   className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
   aria-label="Current stock price"
  />
  <p className="font-sans text-[11px] text-[#94A3B8] mt-1">
   Today&apos;s market price or latest 409A valuation.
  </p>
  </div>

  {/* Field 5: Grant Start Date */}
  <div>
  <label
   htmlFor="vestStartDate"
   className="font-sans text-[13px] font-medium text-[#333333] block mb-1.5"
  >
   When did your grant start?
  </label>
  <input
   id="vestStartDate"
   type="date"
   value={inputs.vestStartDate}
   onChange={(e) => updateField('vestStartDate', e.target.value)}
   className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] focus:outline-none focus:border-[#1d7682] transition-colors"
   aria-label="Grant start date"
  />
  </div>

  {/* Field 6: Tax Bracket */}
  <div className="md:col-span-2">
  <label className="font-sans text-[13px] font-medium text-[#333333] block mb-1.5">
   Your estimated federal tax bracket
  </label>
  <div className="flex items-center gap-4">
   <input
   type="range"
   min={0}
   max={TAX_BRACKETS.length - 1}
   step={1}
   value={TAX_BRACKETS.findIndex((b) => b.value === inputs.fedTaxRate)}
   onChange={(e) =>
   updateField('fedTaxRate', TAX_BRACKETS[Number(e.target.value)].value)
   }
   className="flex-1 h-2 rounded-full appearance-none cursor-pointer"
   style={{
   background: `linear-gradient(to right, #1d7682 0%, #1d7682 ${
    (TAX_BRACKETS.findIndex((b) => b.value === inputs.fedTaxRate) /
    (TAX_BRACKETS.length - 1)) *
    100
   }%, #E2E8F0 ${
    (TAX_BRACKETS.findIndex((b) => b.value === inputs.fedTaxRate) /
    (TAX_BRACKETS.length - 1)) *
    100
   }%, #E2E8F0 100%)`,
   }}
   aria-label="Federal tax bracket"
   aria-valuenow={inputs.fedTaxRate * 100}
   />
   <span className="font-sans text-[20px] font-bold text-[#1d7682] min-w-[50px] text-right">
   {(inputs.fedTaxRate * 100).toFixed(0)}%
   </span>
  </div>
  <div className="flex justify-between mt-1">
   <span className="font-sans text-[11px] text-[#94A3B8]">10%</span>
   <span className="font-sans text-[11px] text-[#94A3B8]">37%</span>
  </div>
  </div>
  </div>

  {/* Calculate Button */}
  <div className="mt-8 text-center">
  <button
  onClick={handleCalculate}
  disabled={inputs.totalShares <= 0}
  className="bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[16px] px-10 py-4 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  >
  Analyze My Equity &rarr;
  </button>
  </div>
 </div>

 {/* ─── RESULTS ─── */}
 {showResults && results && (
  <div ref={resultsRef}>
  {/* Underwater Warning */}
  {results.isUnderwater && (
  <div className="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-[12px] p-5 mb-6 flex items-start gap-3">
   <span className="text-[20px] flex-shrink-0 mt-0.5">&#9888;</span>
   <div>
   <p className="font-sans text-[14px] font-semibold text-[#92400E]">
   Your options are currently underwater
   </p>
   <p className="font-sans text-[13px] text-[#92400E]/80 mt-1">
   The grant price ({fmtCurrencyFull(inputs.grantPrice)}) exceeds the current
   market price ({fmtCurrencyFull(inputs.currentFMV)}). No tax event occurs
   until the stock price recovers above your exercise price.
   </p>
   </div>
  </div>
  )}

  {/* Summary Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
   <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">
   Total Equity Value
   </p>
   <p className="font-sans text-[28px] font-bold text-[#333333]">
   {fmtCurrency(animatedValue)}
   </p>
  </div>
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
   <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">
   {results.compType === 'RSU'
   ? 'Unrealized Value'
   : results.compType === 'ESPP'
    ? 'Discount Value'
    : 'Unrealized Gain (Spread)'}
   </p>
   <p className="font-sans text-[28px] font-bold text-[#1d7682]">
   {fmtCurrency(
   results.compType === 'ESPP'
    ? results.discountValue || 0
    : results.compType === 'RSU'
    ? results.totalValue
    : results.spread
   )}
   </p>
  </div>
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
   <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">
   Estimated Tax if You Act Today
   </p>
   <p className="font-sans text-[28px] font-bold text-[#EF4444]">
   {fmtCurrency(results.estimatedTax)}
   </p>
  </div>
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
   <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">
   Potential Tax Savings
   </p>
   <p className="font-sans text-[28px] font-bold text-[#10B981]">
   {results.potentialSavings > 0
   ? `Up to ${fmtCurrency(results.potentialSavings)}`
   : ' - '}
   </p>
   <p className="font-sans text-[10px] text-[#94A3B8] mt-1">
   Estimated savings from optimal timing of exercise and sale decisions.
   </p>
  </div>
  </div>

  {/* Interpretation Text */}
  <div className="bg-[#F7F4EE] rounded-[12px] p-6 mb-8">
  <p className="font-sans text-[14px] text-[#333333] leading-relaxed">
   {results.interpretation}
  </p>
  </div>

  {/* Interactive Timeline */}
  <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 md:p-8 mb-8">
  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
   <h3 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#333333]">
   Your Equity Decision Timeline
   </h3>
   <div className="flex flex-wrap gap-3">
   {Object.entries(MILESTONE_STYLES).map(([key, style]) => (
   <div key={key} className="flex items-center gap-1.5">
    <div
    className="w-2.5 h-2.5 rounded-full"
    style={{ backgroundColor: style.color }}
    />
    <span className="font-sans text-[11px] text-[#5b6a71]">{style.label}</span>
   </div>
   ))}
   </div>
  </div>

  {/* Timeline */}
  <div className="relative pl-6 md:pl-8">
   {/* Vertical line */}
   <div className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-[2px] bg-[#E2E8F0]" />

   <div className="space-y-0">
   {results.milestones.map((m, i) => {
   const style = MILESTONE_STYLES[m.type]
   const dotColor = m.isPast ? style.pastColor : style.color
   const isExpanded = expandedMilestone === i

   return (
    <button
    key={i}
    onClick={() => setExpandedMilestone(isExpanded ? null : i)}
    className={`relative w-full text-left py-3 pl-6 pr-3 rounded-[8px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-1 ${
    isExpanded ? 'bg-[#F8F9FA]' : 'hover:bg-[#F8F9FA]/50'
    } ${m.isPast ? 'opacity-60' : ''}`}
    >
    {/* Dot */}
    <div
    className="absolute left-[-17px] md:left-[-21px] top-[18px] w-3 h-3 rounded-full border-2 border-white"
    style={{
     backgroundColor: dotColor,
     boxShadow: m.isPast ? 'none' : `0 0 0 3px ${dotColor}20`,
    }}
    />

    <div className="flex items-start justify-between gap-2">
    <div className="flex-1 min-w-0">
     <div className="flex items-center gap-2 flex-wrap">
     <span className="font-sans text-[11px] font-medium text-[#94A3B8]">
     {fmtDate(m.date)}
     {m.isPast && ' (past)'}
     </span>
     <span
     className="inline-block px-2 py-0.5 rounded font-sans text-[10px] font-semibold text-white"
     style={{ backgroundColor: dotColor }}
     >
     {style.label}
     </span>
     </div>
     <p className="font-sans text-[14px] font-medium text-[#333333] mt-0.5">
     {m.label}
     </p>
    </div>
    {m.dollarImpact > 0 && (
     <span
     className="font-sans text-[13px] font-semibold flex-shrink-0"
     style={{ color: m.type === 'tax' ? '#EF4444' : '#333333' }}
     >
     {fmtCurrency(m.dollarImpact)}
     </span>
    )}
    </div>

    {isExpanded && (
    <p className="font-sans text-[13px] text-[#5b6a71] mt-2 leading-relaxed">
     {m.actionItem}
    </p>
    )}
    </button>
   )
   })}
   </div>
  </div>

  {/* Next Deadline Callout */}
  {results.nextDeadline && (
   <div className="mt-6 p-4 bg-[#1d7682]/5 border border-[#1d7682]/15 rounded-[8px]">
   <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-[#1d7682] mb-1">
   Next Critical Date
   </p>
   <p className="font-sans text-[14px] font-medium text-[#333333]">
   {fmtDateFull(results.nextDeadline.date)} - {results.nextDeadline.label}
   </p>
   <p className="font-sans text-[12px] text-[#5b6a71] mt-0.5">
   {results.nextDeadline.actionItem}
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
    Your Equity Planning Brief Is Ready
   </h3>
   <p className="font-sans text-[14px] text-[#94A3B8] mt-2 max-w-[480px] mx-auto">
    Based on your inputs, we&apos;ve identified{' '}
    <span className="text-white font-semibold">
    {results.milestones.filter((m) => !m.isPast).length} upcoming decision
    points
    </span>
    {results.potentialSavings > 0 && (
    <>
    {' '}
    and up to{' '}
    <span className="text-[#10B981] font-semibold">
     {fmtCurrencyFull(results.potentialSavings)} in potential tax savings
    </span>
    </>
    )}
    . Get a personalized equity planning brief with specific action dates and
    optimization strategies.
   </p>
   </div>
   <form onSubmit={handleContactSubmit} noValidate className="space-y-3 max-w-[420px] mx-auto">
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
    I&apos;d like to schedule a 15-minute equity review call
    </span>
   </label>
   <p className="font-sans text-[11px] text-[#8a8a8a] text-center italic">
    By submitting, you consent to being contacted by a Farther advisor. Your
    information will not be sold to third parties.
   </p>
   <button
    type="submit"
    disabled={submitting}
    className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[16px] py-4 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2 focus:ring-offset-[#333333] disabled:opacity-60"
   >
    {submitting ? 'Submitting...' : 'Send My Equity Brief \u2192'}
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
   Your Brief Is on the Way!
   </h4>
   <p className="font-sans text-[14px] text-[#94A3B8] mt-2 max-w-[400px] mx-auto">
   A Farther advisor will follow up within 24 hours with your personalized
   equity planning brief and next-step recommendations.
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

  {/* Disclaimers */}
  <div className="border-t border-[#E2E8F0] pt-6 space-y-4">
  <p className="font-sans text-[12px] text-[#6B7280] leading-relaxed">
   <strong>Important Disclosure:</strong> This tool provides generalized estimates for
   educational and illustrative purposes only. It does not constitute tax, legal, or
   investment advice. Actual tax obligations depend on your complete financial
   situation, applicable federal and state tax laws, specific plan terms, and other
   factors not captured here. The Alternative Minimum Tax (AMT), state taxes, Medicare
   surtax (NIIT), and other provisions may significantly affect your results. Consult a
   qualified tax advisor and financial planner before making equity compensation
   decisions. Farther Finance Advisors LLC is an SEC-registered investment adviser.
   Registration does not imply a certain level of skill or training.
  </p>
  <p className="font-sans text-[11px] text-[#94A3B8] leading-relaxed">
   Calculations assume federal tax rates only and do not account for state income
   taxes, local taxes, or the 3.8% Net Investment Income Tax. Projected values assume
   no change in stock price from the current price entered. Past performance is not
   indicative of future results. This is not an offer to buy or sell securities.
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
 )}
 </div>
 )
}
