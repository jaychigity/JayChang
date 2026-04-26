'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Link from 'next/link'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'

// ─────────────────────────── TYPES ───────────────────────────

interface InvestmentType {
  label: string
  returnRate: number
  dividendYield: number
  description: string
}

interface CorrectionType {
  label: string
  decline: number
  recoveryYears: number
}

interface YearData {
  year: number
  contributions: number
  dividends: number
  compoundGrowth: number
  totalValue: number
  correctedValue?: number
}

// ─────────────────────────── CONSTANTS ───────────────────────────

const INVESTMENT_TYPES: InvestmentType[] = [
  { label: 'Conservative (Bonds & CDs)', returnRate: 4.5, dividendYield: 3.0, description: 'Lower risk, steady income through bonds and certificates of deposit' },
  { label: 'Balanced (60/40)', returnRate: 7.5, dividendYield: 2.0, description: 'Traditional mix of 60% stocks and 40% bonds' },
  { label: 'Diversified Portfolio', returnRate: 8.5, dividendYield: 1.8, description: 'Broad market exposure across multiple asset classes' },
  { label: 'Growth (100% Equities)', returnRate: 10.3, dividendYield: 1.3, description: 'Full stock market exposure for maximum growth potential' },
  { label: 'Aggressive Growth', returnRate: 11.5, dividendYield: 0.8, description: 'High-growth sectors with higher volatility' },
  { label: 'Real Estate (REITs)', returnRate: 9.0, dividendYield: 3.5, description: 'Real estate investment trusts with high income yield' },
  { label: 'Dividend-Focused', returnRate: 8.0, dividendYield: 3.8, description: 'Emphasis on dividend-paying stocks for income generation' },
]

const CORRECTION_TYPES: CorrectionType[] = [
  { label: 'Dot-Com Crash (2000-02)', decline: -49.1, recoveryYears: 7 },
  { label: '2008 Financial Crisis', decline: -56.8, recoveryYears: 5.5 },
  { label: 'COVID-19 Crash (2020)', decline: -33.9, recoveryYears: 0.42 },
  { label: '2022 Bear Market', decline: -25.4, recoveryYears: 2 },
  { label: 'Average Correction', decline: -15.0, recoveryYears: 0.33 },
  { label: 'Severe Bear Market', decline: -35.0, recoveryYears: 3 },
]

interface Milestone {
  emoji: string
  name: string
  description: string
}

function getMilestone(value: number): Milestone {
  if (value < 5000) return { emoji: '☕', name: 'A Year of Daily Coffee', description: 'Enough to cover your daily caffeine habit for a full year' }
  if (value < 15000) return { emoji: '🏖️', name: 'A Dream Vacation', description: 'A luxury trip to your bucket-list destination' }
  if (value < 40000) return { emoji: '🚗', name: 'A New Car', description: 'A reliable new vehicle, fully paid off' }
  if (value < 100000) return { emoji: '🎓', name: "A Child's College Fund", description: 'A meaningful start toward higher education costs' }
  if (value < 250000) return { emoji: '🏡', name: 'A Down Payment on a Home', description: 'Enough for a strong down payment in most markets' }
  if (value < 500000) return { emoji: '🏠', name: 'A Vacation Home', description: 'Your own getaway property in a desirable location' }
  if (value < 1000000) return { emoji: '⛵', name: 'A Luxury Yacht Experience', description: 'Access to world-class boating and maritime luxury' }
  if (value < 2500000) return { emoji: '🏝️', name: 'Early Retirement', description: 'Financial freedom to retire on your own terms' }
  if (value < 5000000) return { emoji: '✈️', name: 'A Private Jet Membership', description: 'Fly private whenever and wherever you want' }
  if (value < 10000000) return { emoji: '🏰', name: 'A Legacy Estate', description: 'An iconic property to pass down through generations' }
  if (value < 25000000) return { emoji: '🌍', name: 'Philanthropic Impact', description: 'Create lasting change through meaningful giving' }
  return { emoji: '🚀', name: 'Generational Dynasty', description: 'Multi-generational wealth that transforms your family tree' }
}

// ─────────────────────────── HELPERS ───────────────────────────

function formatCurrency(num: number): string {
  if (num >= 1000000000) return '$' + (num / 1000000000).toFixed(2) + 'B'
  if (num >= 1000000) return '$' + (num / 1000000).toFixed(2) + 'M'
  if (num >= 1000) return '$' + (num / 1000).toFixed(1) + 'K'
  return '$' + Math.round(num).toLocaleString('en-US')
}

function formatCurrencyFull(num: number): string {
  const abs = Math.abs(Math.round(num))
  const formatted = '$' + abs.toLocaleString('en-US')
  return num < 0 ? '-' + formatted : formatted
}

function formatInputCurrency(num: number): string {
  return '$' + num.toLocaleString('en-US')
}

function parseCurrencyInput(val: string): number {
  return Number(val.replace(/[^0-9.-]/g, '')) || 0
}

// ─────────────────────────── ANIMATED NUMBER ───────────────────────────

function useAnimatedNumber(target: number, duration = 700) {
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
        <span className="absolute left-6 top-0 z-20 w-[260px] bg-white border border-[#E2E8F0] rounded-lg shadow-lg p-3 font-sans text-[12px] text-[#64748B] leading-relaxed">
          {text}
        </span>
      )}
    </span>
  )
}

// ─────────────────────────── CURRENCY INPUT ───────────────────────────

function CurrencyInput({
  label,
  tooltip,
  value,
  min,
  max,
  onChange,
}: {
  label: string
  tooltip: string
  value: number
  min: number
  max: number
  onChange: (v: number) => void
}) {
  const [inputValue, setInputValue] = useState(formatInputCurrency(value))
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    if (!focused) {
      setInputValue(formatInputCurrency(value))
    }
  }, [value, focused])

  const handleBlur = () => {
    setFocused(false)
    const parsed = parseCurrencyInput(inputValue)
    const clamped = Math.max(min, Math.min(max, parsed))
    onChange(clamped)
    setInputValue(formatInputCurrency(clamped))
  }

  return (
    <div className="mb-5">
      <div className="flex items-center gap-1.5 mb-2">
        <label className="font-sans text-[14px] font-semibold text-[#333333]">{label}</label>
        <TooltipButton text={tooltip} />
      </div>
      <input
        type="text"
        inputMode="numeric"
        value={inputValue}
        onFocus={() => {
          setFocused(true)
          setInputValue(String(value))
        }}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
        className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[16px] text-[#333333] focus:border-[#1d7682] focus:outline-none transition-colors"
        aria-label={label}
      />
      <div className="flex justify-between mt-1">
        <span className="font-sans text-[11px] text-[#94A3B8]">{formatInputCurrency(min)}</span>
        <span className="font-sans text-[11px] text-[#94A3B8]">{formatInputCurrency(max)}</span>
      </div>
    </div>
  )
}

// ─────────────────────────── CALCULATION ENGINE ───────────────────────────

function calculateTVM(
  startingInvestment: number,
  monthlyContribution: number,
  annualReturn: number,
  dividendYield: number,
  years: number,
  correctionEnabled: boolean,
  correctionType: CorrectionType | null,
  correctionYear: number,
): {
  yearData: YearData[]
  futureValue: number
  totalContributions: number
  totalDividends: number
  compoundGrowth: number
  growthMultiple: number
  correctedFV: number | null
  correctionDifference: number | null
} {
  const totalReturn = annualReturn / 100
  const monthlyRate = totalReturn / 12
  const divYield = dividendYield / 100

  // Year-by-year calculation
  const yearData: YearData[] = []
  let currentValue = startingInvestment
  let correctedCurrentValue = startingInvestment
  let totalContributions = startingInvestment
  let cumulativeDividends = 0

  // Year 0
  yearData.push({
    year: 0,
    contributions: startingInvestment,
    dividends: 0,
    compoundGrowth: 0,
    totalValue: startingInvestment,
    correctedValue: correctionEnabled ? startingInvestment : undefined,
  })

  for (let y = 1; y <= years; y++) {
    // Monthly compounding for this year
    for (let m = 0; m < 12; m++) {
      currentValue = currentValue * (1 + monthlyRate) + monthlyContribution
    }

    totalContributions += monthlyContribution * 12

    // Dividends for this year (based on average value during year)
    const avgValueThisYear = (yearData[y - 1].totalValue + currentValue) / 2
    const yearDividends = avgValueThisYear * divYield
    cumulativeDividends += yearDividends

    const compoundGrowth = currentValue - totalContributions - cumulativeDividends

    // Corrected path
    if (correctionEnabled && correctionType) {
      if (y < correctionYear) {
        // Before correction: grow normally
        for (let m = 0; m < 12; m++) {
          correctedCurrentValue = correctedCurrentValue * (1 + monthlyRate) + monthlyContribution
        }
      } else if (y === correctionYear) {
        // Apply correction
        for (let m = 0; m < 12; m++) {
          correctedCurrentValue = correctedCurrentValue * (1 + monthlyRate) + monthlyContribution
        }
        correctedCurrentValue = correctedCurrentValue * (1 + correctionType.decline / 100)
      } else {
        // After correction: resume normal growth
        for (let m = 0; m < 12; m++) {
          correctedCurrentValue = correctedCurrentValue * (1 + monthlyRate) + monthlyContribution
        }
      }
    }

    yearData.push({
      year: y,
      contributions: totalContributions,
      dividends: cumulativeDividends,
      compoundGrowth: Math.max(0, compoundGrowth),
      totalValue: currentValue,
      correctedValue: correctionEnabled ? correctedCurrentValue : undefined,
    })
  }

  const futureValue = currentValue
  const growthMultiple = totalContributions > 0 ? futureValue / totalContributions : 0
  const correctedFV = correctionEnabled ? correctedCurrentValue : null
  const correctionDifference = correctionEnabled ? futureValue - correctedCurrentValue : null

  return {
    yearData,
    futureValue,
    totalContributions,
    totalDividends: cumulativeDividends,
    compoundGrowth: Math.max(0, futureValue - totalContributions - cumulativeDividends),
    growthMultiple,
    correctedFV,
    correctionDifference,
  }
}

// ─────────────────────────── SVG STACKED AREA CHART ───────────────────────────

function StackedAreaChart({
  yearData,
  correctionEnabled,
  hoveredYear,
  setHoveredYear,
}: {
  yearData: YearData[]
  correctionEnabled: boolean
  hoveredYear: number | null
  setHoveredYear: (y: number | null) => void
}) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [dims, setDims] = useState({ width: 600, height: 320 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth
        setDims({ width: w, height: Math.min(320, Math.max(220, w * 0.45)) })
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const pad = { top: 20, right: 20, bottom: 40, left: 70 }
  const chartW = dims.width - pad.left - pad.right
  const chartH = dims.height - pad.top - pad.bottom

  if (yearData.length < 2) return null

  const maxYear = yearData[yearData.length - 1].year
  const maxValue = Math.max(...yearData.map((d) => d.totalValue), ...yearData.map((d) => d.correctedValue ?? 0)) * 1.1

  const xScale = (year: number) => pad.left + (year / maxYear) * chartW
  const yScale = (val: number) => pad.top + chartH - (val / maxValue) * chartH

  // Build stacked paths
  // Layer 1: Contributions (bottom)
  // Layer 2: Dividends (middle)
  // Layer 3: Compound Growth (top)

  const buildAreaPath = (topFn: (d: YearData) => number, bottomFn: (d: YearData) => number) => {
    let path = ''
    // Forward pass (top)
    yearData.forEach((d, i) => {
      const x = xScale(d.year)
      const y = yScale(topFn(d))
      path += i === 0 ? `M${x},${y}` : `L${x},${y}`
    })
    // Backward pass (bottom)
    for (let i = yearData.length - 1; i >= 0; i--) {
      const d = yearData[i]
      const x = xScale(d.year)
      const y = yScale(bottomFn(d))
      path += `L${x},${y}`
    }
    path += 'Z'
    return path
  }

  const contributionsPath = buildAreaPath(
    (d) => d.contributions,
    () => 0,
  )
  const dividendsPath = buildAreaPath(
    (d) => d.contributions + d.dividends,
    (d) => d.contributions,
  )
  const growthPath = buildAreaPath(
    (d) => d.totalValue,
    (d) => d.contributions + d.dividends,
  )

  // Corrected trajectory line
  let correctedLinePath = ''
  if (correctionEnabled) {
    yearData.forEach((d, i) => {
      if (d.correctedValue !== undefined) {
        const x = xScale(d.year)
        const y = yScale(d.correctedValue)
        correctedLinePath += i === 0 ? `M${x},${y}` : `L${x},${y}`
      }
    })
  }

  // Y-axis ticks
  const numTicks = 5
  const yTicks: number[] = []
  for (let i = 0; i <= numTicks; i++) {
    yTicks.push((maxValue / numTicks) * i)
  }

  // X-axis ticks
  const xTickInterval = maxYear <= 10 ? 1 : maxYear <= 20 ? 2 : 5
  const xTicks: number[] = []
  for (let x = 0; x <= maxYear; x += xTickInterval) {
    xTicks.push(x)
  }
  if (xTicks[xTicks.length - 1] !== maxYear) xTicks.push(maxYear)

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const yearFloat = ((mouseX - pad.left) / chartW) * maxYear
    const nearestYear = Math.round(Math.max(0, Math.min(maxYear, yearFloat)))
    setHoveredYear(nearestYear)
  }

  const hoveredData = hoveredYear !== null ? yearData.find((d) => d.year === hoveredYear) : null

  return (
    <div ref={containerRef} className="w-full">
      <svg
        ref={svgRef}
        width={dims.width}
        height={dims.height}
        viewBox={`0 0 ${dims.width} ${dims.height}`}
        className="w-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredYear(null)}
      >
        {/* Grid lines */}
        {yTicks.map((tick, i) => (
          <g key={i}>
            <line
              x1={pad.left}
              y1={yScale(tick)}
              x2={pad.left + chartW}
              y2={yScale(tick)}
              stroke="#E2E8F0"
              strokeWidth="1"
            />
            <text
              x={pad.left - 8}
              y={yScale(tick) + 4}
              textAnchor="end"
              className="font-sans"
              fill="#94A3B8"
              fontSize="10"
            >
              {formatCurrency(tick)}
            </text>
          </g>
        ))}

        {/* Stacked areas */}
        <path d={contributionsPath} fill="#A0AEC0" opacity="0.7" />
        <path d={dividendsPath} fill="#3182CE" opacity="0.6" />
        <path d={growthPath} fill="#38A169" opacity="0.6" />

        {/* Corrected trajectory */}
        {correctionEnabled && correctedLinePath && (
          <path
            d={correctedLinePath}
            fill="none"
            stroke="#E53E3E"
            strokeWidth="2.5"
            strokeDasharray="6,4"
            opacity="0.85"
          />
        )}

        {/* X-axis labels */}
        {xTicks.map((tick) => (
          <text
            key={tick}
            x={xScale(tick)}
            y={pad.top + chartH + 24}
            textAnchor="middle"
            className="font-sans"
            fill="#94A3B8"
            fontSize="10"
          >
            Yr {tick}
          </text>
        ))}

        {/* X-axis line */}
        <line
          x1={pad.left}
          y1={pad.top + chartH}
          x2={pad.left + chartW}
          y2={pad.top + chartH}
          stroke="#CBD5E1"
          strokeWidth="1"
        />

        {/* Hover line and tooltip */}
        {hoveredYear !== null && hoveredData && (
          <>
            <line
              x1={xScale(hoveredYear)}
              y1={pad.top}
              x2={xScale(hoveredYear)}
              y2={pad.top + chartH}
              stroke="#333333"
              strokeWidth="1"
              strokeDasharray="3,3"
              opacity="0.5"
            />
            <circle
              cx={xScale(hoveredYear)}
              cy={yScale(hoveredData.totalValue)}
              r="4"
              fill="#38A169"
              stroke="white"
              strokeWidth="2"
            />
            {hoveredData.correctedValue !== undefined && (
              <circle
                cx={xScale(hoveredYear)}
                cy={yScale(hoveredData.correctedValue)}
                r="4"
                fill="#E53E3E"
                stroke="white"
                strokeWidth="2"
              />
            )}
          </>
        )}
      </svg>

      {/* Hover tooltip (positioned below chart) */}
      {hoveredYear !== null && hoveredData && (
        <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-card p-3 mt-2">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span className="font-sans text-[12px] font-semibold text-[#333333]">Year {hoveredData.year}</span>
            <span className="font-sans text-[12px] text-[#333333]">
              Total: <span className="font-semibold">{formatCurrencyFull(hoveredData.totalValue)}</span>
            </span>
            <span className="font-sans text-[12px] text-[#A0AEC0]">
              Contributed: {formatCurrencyFull(hoveredData.contributions)}
            </span>
            <span className="font-sans text-[12px] text-[#3182CE]">
              Dividends: {formatCurrencyFull(hoveredData.dividends)}
            </span>
            <span className="font-sans text-[12px] text-[#38A169]">
              Growth: {formatCurrencyFull(hoveredData.compoundGrowth)}
            </span>
            {hoveredData.correctedValue !== undefined && (
              <span className="font-sans text-[12px] text-[#E53E3E]">
                With Correction: {formatCurrencyFull(hoveredData.correctedValue)}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ─────────────────────────── MAIN COMPONENT ───────────────────────────

export default function TVMCalculator() {
  // Inputs
  const [startingInvestment, setStartingInvestment] = useState(500000)
  const [monthlyContribution, setMonthlyContribution] = useState(2000)
  const [investmentTypeIdx, setInvestmentTypeIdx] = useState(2) // Diversified Portfolio
  const [timeHorizon, setTimeHorizon] = useState(20)
  const [correctionEnabled, setCorrectionEnabled] = useState(false)
  const [correctionTypeIdx, setCorrectionTypeIdx] = useState(1) // 2008 Crisis
  const [correctionYear, setCorrectionYear] = useState(5)

  // Chart hover
  const [hoveredYear, setHoveredYear] = useState<number | null>(null)

  const investmentType = INVESTMENT_TYPES[investmentTypeIdx]
  const correction = CORRECTION_TYPES[correctionTypeIdx]

  // Ensure correction year is within bounds
  useEffect(() => {
    if (correctionYear > timeHorizon) {
      setCorrectionYear(Math.max(1, Math.floor(timeHorizon / 2)))
    }
  }, [timeHorizon, correctionYear])

  // Calculate results
  const results = useMemo(() => {
    return calculateTVM(
      startingInvestment,
      monthlyContribution,
      investmentType.returnRate,
      investmentType.dividendYield,
      timeHorizon,
      correctionEnabled,
      correctionEnabled ? correction : null,
      correctionYear,
    )
  }, [startingInvestment, monthlyContribution, investmentType, timeHorizon, correctionEnabled, correction, correctionYear])

  // Animated values
  const animFV = useAnimatedNumber(Math.round(results.futureValue))
  const animContributions = useAnimatedNumber(Math.round(results.totalContributions))
  const animGrowth = useAnimatedNumber(Math.round(results.compoundGrowth))
  const animDividends = useAnimatedNumber(Math.round(results.totalDividends))
  const animMultiple = useAnimatedNumber(Math.round(results.growthMultiple * 10)) // store 10x for one decimal

  // Slider fill percentage helper
  const sliderPct = (val: number, min: number, max: number) => ((val - min) / (max - min)) * 100

  // Milestone years
  const milestoneYears = [1, 5, 10, 15, 20, 25, 30].filter((y) => y <= timeHorizon)

  return (
    <div className="px-5 py-10 max-w-[1200px] mx-auto">
      {/* Main two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 items-start">
        {/* ────── INPUT PANEL ────── */}
        <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 lg:sticky lg:top-[100px]">
          <h2 className="font-serif text-[22px] font-bold text-[#333333] mb-6">Your Investment Details</h2>

          {/* Starting Investment */}
          <CurrencyInput
            label="Starting Investment"
            tooltip="The lump sum you're investing today. This is your initial principal that begins compounding immediately."
            value={startingInvestment}
            min={1000}
            max={50000000}
            onChange={setStartingInvestment}
          />

          {/* Monthly Contribution */}
          <CurrencyInput
            label="Monthly Contribution"
            tooltip="The amount you'll add each month. Consistent contributions are one of the most powerful wealth-building habits."
            value={monthlyContribution}
            min={0}
            max={100000}
            onChange={setMonthlyContribution}
          />

          {/* Investment Type */}
          <div className="mb-5">
            <div className="flex items-center gap-1.5 mb-2">
              <label className="font-sans text-[14px] font-semibold text-[#333333]">Investment Type</label>
              <TooltipButton text="Select a portfolio style. Each has a different expected return and dividend yield based on historical performance." />
            </div>
            <select
              value={investmentTypeIdx}
              onChange={(e) => setInvestmentTypeIdx(Number(e.target.value))}
              className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[14px] text-[#333333] bg-white focus:border-[#1d7682] focus:outline-none transition-colors appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' fill='none' stroke='%235b6a71' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
              }}
              aria-label="Investment Type"
            >
              {INVESTMENT_TYPES.map((type, i) => (
                <option key={i} value={i}>
                  {type.label}
                </option>
              ))}
            </select>
            <div className="mt-2 flex gap-3">
              <span className="font-sans text-[11px] text-[#5b6a71]">
                Return: <span className="font-semibold text-[#1d7682]">{investmentType.returnRate}%</span>
              </span>
              <span className="font-sans text-[11px] text-[#5b6a71]">
                Dividend: <span className="font-semibold text-[#3182CE]">{investmentType.dividendYield}%</span>
              </span>
            </div>
            <p className="font-sans text-[11px] text-[#94A3B8] mt-1 leading-relaxed">
              {investmentType.description}
            </p>
            <p className="font-sans text-[10px] text-[#94A3B8] mt-2 italic leading-relaxed">
              Return rates are based on historical averages and are not guaranteed. Past performance does not predict future results.
            </p>
          </div>

          {/* Time Horizon Slider */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <label className="font-sans text-[14px] font-semibold text-[#333333]">Time Horizon</label>
                <TooltipButton text="How many years you plan to keep your money invested. Longer time horizons allow compound growth to work its magic." />
              </div>
              <span className="font-sans text-[14px] font-semibold text-[#1d7682]">{timeHorizon} years</span>
            </div>
            <input
              type="range"
              min={1}
              max={40}
              step={1}
              value={timeHorizon}
              onChange={(e) => setTimeHorizon(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #1d7682 0%, #1d7682 ${sliderPct(timeHorizon, 1, 40)}%, #E2E8F0 ${sliderPct(timeHorizon, 1, 40)}%, #E2E8F0 100%)`,
              }}
              aria-label="Time Horizon"
              aria-valuenow={timeHorizon}
              aria-valuemin={1}
              aria-valuemax={40}
            />
            <div className="flex justify-between mt-1">
              <span className="font-sans text-[11px] text-[#94A3B8]">1 year</span>
              <span className="font-sans text-[11px] text-[#94A3B8]">40 years</span>
            </div>
          </div>

          {/* Market Correction Toggle */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <label className="font-sans text-[14px] font-semibold text-[#333333]">Include Market Correction?</label>
                <TooltipButton text="Simulate how a market crash would affect your portfolio. See the impact of timing and severity on your long-term returns." />
              </div>
              <button
                onClick={() => setCorrectionEnabled(!correctionEnabled)}
                className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                  correctionEnabled ? 'bg-[#1d7682]' : 'bg-[#CBD5E1]'
                }`}
                role="switch"
                aria-checked={correctionEnabled}
                aria-label="Include market correction"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
                    correctionEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {correctionEnabled && (
              <div className="space-y-4 pt-2 pl-0 border-l-2 border-[#E2E8F0] ml-0">
                {/* Correction Type Dropdown */}
                <div>
                  <label className="font-sans text-[12px] font-semibold text-[#5b6a71] mb-1 block">Correction Type</label>
                  <select
                    value={correctionTypeIdx}
                    onChange={(e) => setCorrectionTypeIdx(Number(e.target.value))}
                    className="w-full px-3 py-2.5 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[13px] text-[#333333] bg-white focus:border-[#1d7682] focus:outline-none transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' fill='none' stroke='%235b6a71' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                    }}
                    aria-label="Correction Type"
                  >
                    {CORRECTION_TYPES.map((c, i) => (
                      <option key={i} value={i}>
                        {c.label} ({c.decline}%)
                      </option>
                    ))}
                  </select>
                  <p className="font-sans text-[11px] text-[#94A3B8] mt-1">
                    Recovery time: ~{correction.recoveryYears < 1 ? `${Math.round(correction.recoveryYears * 12)} months` : `${correction.recoveryYears} years`}
                  </p>
                </div>

                {/* Correction Timing Slider */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-sans text-[12px] font-semibold text-[#5b6a71]">Correction Timing</label>
                    <span className="font-sans text-[12px] font-semibold text-[#E53E3E]">Year {correctionYear}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={Math.max(1, timeHorizon)}
                    step={1}
                    value={Math.min(correctionYear, timeHorizon)}
                    onChange={(e) => setCorrectionYear(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #E53E3E 0%, #E53E3E ${sliderPct(correctionYear, 1, timeHorizon)}%, #E2E8F0 ${sliderPct(correctionYear, 1, timeHorizon)}%, #E2E8F0 100%)`,
                    }}
                    aria-label="Correction Timing"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="font-sans text-[11px] text-[#94A3B8]">Year 1</span>
                    <span className="font-sans text-[11px] text-[#94A3B8]">Year {timeHorizon}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ────── OUTPUT PANEL ────── */}
        <div>
          {/* Hero: Future Portfolio Value */}
          <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-8 text-center mb-6" aria-live="polite">
            <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-[#5b6a71] mb-2">
              Future Portfolio Value
            </p>
            <p className="font-sans text-[44px] md:text-[60px] font-extrabold leading-none text-[#1d7682]">
              {formatCurrencyFull(animFV)}
            </p>
            <p className="font-sans text-[14px] text-[#5b6a71] mt-2">
              after {timeHorizon} years with {investmentType.label}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-4 text-center">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">What You Put In</p>
              <p className="font-sans text-[20px] font-bold text-[#333333]">{formatCurrencyFull(animContributions)}</p>
            </div>
            <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-4 text-center">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">Compound Growth</p>
              <p className="font-sans text-[20px] font-bold text-[#38A169]">{formatCurrencyFull(animGrowth)}</p>
            </div>
            <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-4 text-center">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">Dividends Reinvested</p>
              <p className="font-sans text-[20px] font-bold text-[#3182CE]">{formatCurrencyFull(animDividends)}</p>
            </div>
            <div className="bg-[#F7F4EE] rounded-[12px] border border-[#E2E8F0] p-4 text-center">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">Growth Multiple</p>
              <p className="font-sans text-[20px] font-bold text-[#1d7682]">{(animMultiple / 10).toFixed(1)}x</p>
            </div>
          </div>

          {/* Correction Impact Panel */}
          {correctionEnabled && results.correctedFV !== null && results.correctionDifference !== null && (
            <div className="bg-white rounded-[12px] border border-[#E53E3E]/20 p-6 mb-6">
              <h3 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#333333] mb-4">
                Market Correction Impact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">Without Correction</p>
                  <p className="font-sans text-[20px] font-bold text-[#38A169]">{formatCurrencyFull(results.futureValue)}</p>
                </div>
                <div className="text-center">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">With {correction.label}</p>
                  <p className="font-sans text-[20px] font-bold text-[#E53E3E]">{formatCurrencyFull(results.correctedFV)}</p>
                </div>
                <div className="text-center">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.05em] text-[#5b6a71] mb-1">Difference</p>
                  <p className="font-sans text-[20px] font-bold text-[#E53E3E]">-{formatCurrencyFull(results.correctionDifference)}</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-[#F7F4EE] rounded-[8px]">
                <p className="font-sans text-[13px] text-[#333333] leading-relaxed italic">
                  {correctionYear <= 5
                    ? `An early correction in Year ${correctionYear} has more time to recover. Despite the ${correction.label} dropping the portfolio by ${Math.abs(correction.decline)}%, your continued contributions and ${timeHorizon - correctionYear} remaining years of compounding help absorb the impact.`
                    : correctionYear >= timeHorizon - 3
                    ? `A late correction in Year ${correctionYear} leaves little time to recover. The ${correction.label}${correction.recoveryYears > (timeHorizon - correctionYear) ? " wouldn't fully recover within your time horizon" : ` would need approximately ${correction.recoveryYears < 1 ? Math.round(correction.recoveryYears * 12) + ' months' : correction.recoveryYears + ' years'} to recover`}.`
                    : `A mid-timeline correction in Year ${correctionYear} via the ${correction.label} reduces your portfolio by ${Math.abs(correction.decline)}%. With ${timeHorizon - correctionYear} years remaining, ${correction.recoveryYears < (timeHorizon - correctionYear) ? 'you have enough time for a full recovery and resumed growth' : 'recovery may be tight within your time horizon'}.`}
                </p>
              </div>
            </div>
          )}

          {/* SVG Stacked Area Chart */}
          <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 mb-6">
            <h3 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#333333] mb-2">
              Portfolio Growth Over Time
            </h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#A0AEC0] opacity-70" />
                <span className="font-sans text-[12px] text-[#5b6a71]">Contributions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#3182CE] opacity-60" />
                <span className="font-sans text-[12px] text-[#5b6a71]">Dividends</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#38A169] opacity-60" />
                <span className="font-sans text-[12px] text-[#5b6a71]">Compound Growth</span>
              </div>
              {correctionEnabled && (
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 border-t-2 border-dashed border-[#E53E3E]" />
                  <span className="font-sans text-[12px] text-[#5b6a71]">With Correction</span>
                </div>
              )}
            </div>
            <StackedAreaChart
              yearData={results.yearData}
              correctionEnabled={correctionEnabled}
              hoveredYear={hoveredYear}
              setHoveredYear={setHoveredYear}
            />
          </div>
        </div>
      </div>

      {/* ────── MILESTONE TIMELINE ────── */}
      <div className="mt-10">
        <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-[#333333] text-center mb-2">
          What Your Money Becomes
        </h2>
        <p className="font-sans text-[16px] text-[#5b6a71] text-center mb-8 max-w-[600px] mx-auto">
          Watch your portfolio grow through meaningful milestones over time
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
          {milestoneYears.map((year, idx) => {
            const yearDataPoint = results.yearData.find((d) => d.year === year)
            if (!yearDataPoint) return null
            const value = yearDataPoint.totalValue
            const milestone = getMilestone(value)
            const isLast = idx === milestoneYears.length - 1

            return (
              <div
                key={year}
                className={`rounded-[12px] p-5 transition-all duration-300 ${
                  isLast
                    ? 'bg-gradient-to-br from-[#FFF9E6] to-[#FFF3CC] border-2 border-[#D4A843] shadow-card-hover'
                    : 'bg-white border border-[#E2E8F0] hover:shadow-card-hover'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[32px] leading-none">{milestone.emoji}</span>
                  <span
                    className={`font-sans text-[11px] font-semibold uppercase tracking-[0.1em] px-2 py-1 rounded-full ${
                      isLast
                        ? 'bg-[#D4A843]/20 text-[#8B6914]'
                        : 'bg-[#1d7682]/10 text-[#1d7682]'
                    }`}
                  >
                    Year {year}
                  </span>
                </div>
                <p
                  className={`font-sans text-[22px] font-bold leading-tight mb-1 ${
                    isLast ? 'text-[#8B6914]' : 'text-[#333333]'
                  }`}
                >
                  {formatCurrencyFull(value)}
                </p>
                <p
                  className={`font-sans text-[14px] font-semibold mb-1 ${
                    isLast ? 'text-[#8B6914]' : 'text-[#1d7682]'
                  }`}
                >
                  {milestone.name}
                </p>
                <p className="font-sans text-[12px] text-[#5b6a71] leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Dynamic narrative */}
        <div className="text-center mt-8 max-w-[700px] mx-auto">
          <p className="font-sans text-[15px] text-[#333333] leading-relaxed italic">
            {(() => {
              const finalValue = results.futureValue
              const finalMilestone = getMilestone(finalValue)
              return `Starting with ${formatCurrencyFull(startingInvestment)} and contributing ${formatCurrencyFull(monthlyContribution)} monthly, your portfolio grows to ${formatCurrencyFull(finalValue)} over ${timeHorizon} years, enough for ${finalMilestone.name.toLowerCase()}. Your money works ${(results.growthMultiple).toFixed(1)}x harder than you do.`
            })()}
          </p>
        </div>
      </div>

      {/* ────── CTA ────── */}
      <div className="mt-12 bg-white rounded-[12px] border border-[#E2E8F0] p-8 md:p-10 text-center max-w-[800px] mx-auto">
        <h3 className="font-serif text-[22px] md:text-[28px] font-bold text-[#333333]">
          See How a Personalized Strategy Protects &amp; Grows Your Wealth
        </h3>
        <p className="font-sans text-[15px] text-[#5b6a71] mt-3 max-w-[540px] mx-auto leading-relaxed">
          A Farther advisor can build a custom investment plan factoring in taxes, risk tolerance,
          estate planning, and your unique financial goals.
        </p>
        <a
          href="/schedule-consultation"
          className="inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[16px] px-8 py-3.5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 mt-6 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2"
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
        </a>
        <p className="font-sans text-[10px] text-[#94A3B8] mt-4 max-w-[400px] mx-auto leading-relaxed">
          Free, no-obligation consultation. No account minimums to get started with personalized advice.
        </p>
      </div>

      {/* ────── DISCLAIMERS ────── */}
      <div className="mt-10 max-w-[900px] mx-auto">
        <CalculatorDisclaimer
          toolName="time value of money"
          variant="default"
          additionalContext="Market correction scenarios are modeled as simplified single-event declines and do not capture duration, volatility, or partial recoveries. This tool does not account for taxes, inflation, investment fees, advisory fees, or other costs that would reduce actual returns. Farther Finance Inc. is a registered investment adviser with the SEC; registration does not imply a certain level of skill or training. See our Form ADV Part 2A on the disclosures page."
        />
      </div>
    </div>
  )
}
