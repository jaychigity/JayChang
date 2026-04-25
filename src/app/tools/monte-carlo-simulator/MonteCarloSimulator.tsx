'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'

// ─────────────────── MATH ───────────────────

function normalRandom(mean: number, std: number): number {
  let u = 0, v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  return mean + std * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

function runSimulations(
  startBalance: number,
  monthlyContrib: number,
  monthlyWithdrawal: number,
  returnPct: number,
  volPct: number,
  years: number,
  n: number
): number[][] {
  const r = returnPct / 100
  const vol = volPct / 100
  const netAnnual = (monthlyContrib - monthlyWithdrawal) * 12

  return Array.from({ length: n }, () => {
    const path = [startBalance]
    let value = startBalance
    for (let y = 0; y < years; y++) {
      const ret = normalRandom(r, vol)
      value = Math.max(0, value * (1 + ret) + netAnnual)
      path.push(value)
    }
    return path
  })
}

function pctAt(paths: number[][], year: number, p: number): number {
  const vals = paths.map(path => path[year]).sort((a, b) => a - b)
  return vals[Math.min(Math.floor((p / 100) * vals.length), vals.length - 1)]
}

function buildPercentiles(paths: number[][], years: number): Record<number, number[]> {
  const pts = [10, 25, 50, 75, 90]
  const out: Record<number, number[]> = {}
  pts.forEach(p => { out[p] = [] })
  for (let y = 0; y <= years; y++) {
    pts.forEach(p => out[p].push(pctAt(paths, y, p)))
  }
  return out
}

// ─────────────────── FORMAT ───────────────────

function fmtAxis(v: number): string {
  if (v >= 1e6) return `$${(v / 1e6).toFixed(1)}M`
  if (v >= 1e3) return `$${(v / 1e3).toFixed(0)}K`
  return `$${v.toFixed(0)}`
}

function fmtFull(v: number): string {
  return '$' + Math.round(v).toLocaleString()
}

// ─────────────────── CANVAS ───────────────────

const PCT_STYLES: { p: number; color: string; width: number }[] = [
  { p: 10, color: '#e05252', width: 2 },
  { p: 25, color: '#e8a45a', width: 1.5 },
  { p: 50, color: '#1d7682', width: 3.5 },
  { p: 75, color: '#2a9dab', width: 1.5 },
  { p: 90, color: '#4bc49a', width: 2 },
]

// Zones drawn between percentile pairs — lower, upper, fill color
const ZONE_FILLS: [number, number, string][] = [
  [75, 90, 'rgba(75,196,154,0.13)'],
  [50, 75, 'rgba(42,157,171,0.11)'],
  [25, 50, 'rgba(29,118,130,0.09)'],
  [10, 25, 'rgba(232,164,90,0.12)'],
]

// Right-edge labels matching each percentile line
const RIGHT_LABELS: { p: number; color: string; label: string }[] = [
  { p: 90, color: '#4bc49a', label: 'P90' },
  { p: 75, color: '#2a9dab', label: 'P75' },
  { p: 50, color: '#1d7682', label: 'Med' },
  { p: 25, color: '#e8a45a', label: 'P25' },
  { p: 10, color: '#e05252', label: 'P10' },
]

function drawChart(
  canvas: HTMLCanvasElement,
  paths: number[][],
  pcts: Record<number, number[]>,
  years: number
) {
  const ctx = canvas.getContext('2d')
  if (!ctx || paths.length === 0) return

  const dpr = window.devicePixelRatio || 1
  const W = canvas.offsetWidth
  const H = canvas.offsetHeight
  if (W === 0 || H === 0) return

  canvas.width = W * dpr
  canvas.height = H * dpr
  ctx.scale(dpr, dpr)

  const PAD = { l: 72, r: 40, t: 22, b: 46 }
  const cW = W - PAD.l - PAD.r
  const cH = H - PAD.t - PAD.b

  const maxVal = pctAt(paths, years, 95) * 1.1
  const minVal = 0

  const xS = (yr: number) => PAD.l + (yr / years) * cW
  const yS = (v: number) => PAD.t + cH - Math.min(1, Math.max(0, (v - minVal) / (maxVal - minVal))) * cH

  // ── Background
  ctx.fillStyle = '#F7F4EE'
  ctx.fillRect(0, 0, W, H)

  // ── Grid
  const ROWS = 5
  for (let i = 0; i <= ROWS; i++) {
    const y = yS((i / ROWS) * maxVal)
    ctx.beginPath()
    ctx.strokeStyle = i === 0 ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0.06)'
    ctx.lineWidth = 1
    ctx.moveTo(PAD.l, y)
    ctx.lineTo(W - PAD.r, y)
    ctx.stroke()
  }
  const xTick = Math.max(1, Math.ceil(years / 8))
  for (let yr = 0; yr <= years; yr += xTick) {
    ctx.beginPath()
    ctx.strokeStyle = 'rgba(0,0,0,0.06)'
    ctx.lineWidth = 1
    ctx.moveTo(xS(yr), PAD.t)
    ctx.lineTo(xS(yr), PAD.t + cH)
    ctx.stroke()
  }

  // ── Filled zones between percentile bands
  for (const [lower, upper, fill] of ZONE_FILLS) {
    const upperData = pcts[upper]
    const lowerData = pcts[lower]
    if (!upperData || !lowerData) continue

    ctx.beginPath()
    // Trace upper line left to right
    upperData.forEach((val, yr) => {
      yr === 0 ? ctx.moveTo(xS(yr), yS(val)) : ctx.lineTo(xS(yr), yS(val))
    })
    // Trace lower line right to left to close the shape
    for (let yr = years; yr >= 0; yr--) {
      ctx.lineTo(xS(yr), yS(lowerData[yr]))
    }
    ctx.closePath()
    ctx.fillStyle = fill
    ctx.fill()
  }

  // ── Individual background simulation paths (sampled)
  const sample = paths.length > 300
    ? paths.filter((_, i) => i % Math.ceil(paths.length / 260) === 0)
    : paths

  ctx.globalAlpha = 0.038
  ctx.lineWidth = 0.9
  ctx.strokeStyle = '#1d7682'
  for (const path of sample) {
    ctx.beginPath()
    for (let yr = 0; yr <= years; yr++) {
      yr === 0 ? ctx.moveTo(xS(yr), yS(path[yr])) : ctx.lineTo(xS(yr), yS(path[yr]))
    }
    ctx.stroke()
  }
  ctx.globalAlpha = 1

  // ── Percentile lines (on top of fills and paths)
  for (const { p, color, width } of PCT_STYLES) {
    const data = pcts[p]
    if (!data) continue

    // Glow under median
    if (p === 50) {
      ctx.beginPath()
      ctx.strokeStyle = `${color}22`
      ctx.lineWidth = 14
      ctx.lineJoin = 'round'
      data.forEach((v, yr) => {
        yr === 0 ? ctx.moveTo(xS(yr), yS(v)) : ctx.lineTo(xS(yr), yS(v))
      })
      ctx.stroke()
    }

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.lineJoin = 'round'
    data.forEach((v, yr) => {
      yr === 0 ? ctx.moveTo(xS(yr), yS(v)) : ctx.lineTo(xS(yr), yS(v))
    })
    ctx.stroke()
  }

  // ── Right-edge percentile labels
  ctx.font = `bold 10px -apple-system, BlinkMacSystemFont, 'Inter', sans-serif`
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'

  const usedYPositions: number[] = []
  for (const { p, color, label } of RIGHT_LABELS) {
    const data = pcts[p]
    if (!data) continue
    let y = yS(data[years])
    // Nudge if too close to another label
    for (const used of usedYPositions) {
      if (Math.abs(y - used) < 14) y = used + (y > used ? 14 : -14)
    }
    // Keep inside chart bounds
    y = Math.max(PAD.t + 6, Math.min(PAD.t + cH - 6, y))
    usedYPositions.push(y)

    ctx.fillStyle = color
    ctx.fillText(label, W - PAD.r + 5, y)
  }

  // ── Y-axis labels
  ctx.fillStyle = '#7a8d94'
  ctx.font = `11px -apple-system, BlinkMacSystemFont, 'Inter', sans-serif`
  ctx.textAlign = 'right'
  ctx.textBaseline = 'middle'
  for (let i = 0; i <= ROWS; i++) {
    const v = (i / ROWS) * maxVal
    ctx.fillText(fmtAxis(v), PAD.l - 7, yS(v))
  }

  // ── X-axis labels
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'
  for (let yr = 0; yr <= years; yr += xTick) {
    ctx.fillText(yr === 0 ? 'Today' : `Yr ${yr}`, xS(yr), PAD.t + cH + 10)
  }

  // ── Axis lines
  ctx.strokeStyle = '#C5C0B8'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(PAD.l, PAD.t)
  ctx.lineTo(PAD.l, PAD.t + cH)
  ctx.lineTo(W - PAD.r, PAD.t + cH)
  ctx.stroke()
}

// ─────────────────── SUB-COMPONENTS ───────────────────

interface SliderProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  display: string
  onChange: (v: number) => void
  hint?: string
}

function Slider({ label, value, min, max, step, display, onChange, hint }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="mb-[18px]">
      <div className="flex justify-between items-baseline mb-[7px]">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5b6a71]">
          {label}
        </span>
        <span className="font-sans text-[14px] font-bold text-[#1d7682] tabular-nums">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ '--fill': `${pct}%` } as React.CSSProperties}
        onChange={e => onChange(Number(e.target.value))}
        className="mc-slider w-full"
      />
      {hint && (
        <p className="font-sans text-[11px] text-[#a0b0b6] mt-1">{hint}</p>
      )}
    </div>
  )
}

interface StatProps {
  label: string
  value: string
  sub: string
  color: string
  featured?: boolean
}

function Stat({ label, value, sub, color, featured }: StatProps) {
  return (
    <div
      className={`bg-white rounded-xl p-4 sm:p-5 border ${
        featured ? 'border-[#1d7682]/40 shadow-sm' : 'border-[#e8e4dc]'
      }`}
    >
      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#5b6a71] mb-2">
        {label}
      </p>
      <p className="font-serif leading-none mb-1.5 tabular-nums" style={{ fontSize: 24, color }}>
        {value}
      </p>
      <p className="font-sans text-[11px] text-[#a0b0b6]">{sub}</p>
    </div>
  )
}

// Plan success rate card — donut ring + threshold gauge
function SurvivalStat({ rate }: { rate: number }) {
  const color =
    rate >= 90 ? '#4bc49a' :
    rate >= 80 ? '#2a9dab' :
    rate >= 70 ? '#e8a45a' :
    '#e05252'

  const tier =
    rate >= 90 ? 'Excellent' :
    rate >= 80 ? 'On target' :
    rate >= 70 ? 'Minimum range' :
    'Below minimum'

  // SVG donut math
  const R = 54           // outer radius
  const SW = 11          // stroke width
  const r = R - SW / 2  // center radius of stroke
  const circ = 2 * Math.PI * r
  const offset = circ - (Math.min(100, rate) / 100) * circ

  // Arc color: gradient for good scores, solid amber/red for low
  const arcColor =
    rate >= 70 ? 'url(#mc-donut-grad)' :
    rate >= 50 ? '#e8a45a' :
    '#e05252'

  const trackGradient =
    'linear-gradient(to right, #e05252 0%, #e05252 70%, #e8a45a 70%, #e8a45a 80%, #2a9dab 80%, #2a9dab 90%, #4bc49a 90%, #4bc49a 100%)'

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#e8e4dc] col-span-2 lg:col-span-1">
      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#5b6a71] mb-3">
        Plan Success Rate
      </p>

      {/* Donut chart — centered */}
      <div className="flex justify-center mb-3">
        <svg
          width={R * 2}
          height={R * 2}
          viewBox={`0 0 ${R * 2} ${R * 2}`}
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="mc-donut-grad" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a9dab" />
              <stop offset="55%" stopColor="#1d7682" />
              <stop offset="100%" stopColor="#4bc49a" />
            </linearGradient>
          </defs>

          {/* Track ring */}
          <circle
            cx={R} cy={R} r={r}
            fill="none"
            stroke="#e8e4dc"
            strokeWidth={SW}
          />

          {/* Progress arc */}
          <circle
            cx={R} cy={R} r={r}
            fill="none"
            stroke={arcColor}
            strokeWidth={SW}
            strokeLinecap="round"
            strokeDasharray={`${circ} ${circ}`}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${R} ${R})`}
            style={{ transition: 'stroke-dashoffset 0.75s cubic-bezier(0.4,0,0.2,1)' }}
          />

          {/* Center: big percentage */}
          <text
            x={R} y={R - 7}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="22"
            fontWeight="700"
            fill={color}
            fontFamily="'Georgia', 'Times New Roman', serif"
          >
            {rate}%
          </text>

          {/* Center: sub-label */}
          <text
            x={R} y={R + 10}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fill="#7a8d94"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            Probability of
          </text>
          <text
            x={R} y={R + 22}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fill="#7a8d94"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            success
          </text>
        </svg>
      </div>

      {/* Tier label */}
      <p
        className="font-sans text-[12px] font-semibold text-center mb-3"
        style={{ color }}
      >
        {tier}
      </p>

      {/* Threshold gauge bar */}
      <div className="relative mb-1">
        <div
          className="h-[6px] w-full rounded-full"
          style={{ background: trackGradient, opacity: 0.28 }}
        />
        <div
          className="absolute top-0 left-0 h-[6px] rounded-full"
          style={{
            width: `${Math.min(100, rate)}%`,
            background: trackGradient,
            transition: 'width 0.6s ease',
          }}
        />
        {[70, 80, 90].map(mark => (
          <div
            key={mark}
            className="absolute top-0 h-[6px] w-[2px]"
            style={{ left: `${mark}%`, backgroundColor: 'rgba(255,255,255,0.9)', zIndex: 2 }}
          />
        ))}
        <div
          className="absolute top-1/2 w-[12px] h-[12px] rounded-full border-2 border-white shadow"
          style={{
            left: `${Math.min(98, Math.max(2, rate))}%`,
            transform: 'translateX(-50%) translateY(-50%)',
            backgroundColor: color,
            transition: 'left 0.6s ease',
            zIndex: 3,
          }}
        />
      </div>

      {/* Threshold labels */}
      <div className="relative h-4 mb-2">
        {[
          { pos: 70, label: '70%' },
          { pos: 80, label: '80%' },
          { pos: 90, label: '90%' },
        ].map(({ pos, label }) => (
          <span
            key={pos}
            className="absolute font-sans text-[9px] text-[#a0b0b6] whitespace-nowrap"
            style={{ left: `${pos}%`, transform: 'translateX(-50%)', top: 2 }}
          >
            {label}
          </span>
        ))}
      </div>

      <p className="font-sans text-[9px] text-[#b0bec5] text-center leading-relaxed">
        Min: 70% &middot; Target: 80%+ &middot; Ideal: 90%+
      </p>
    </div>
  )
}

// ─────────────────── MAIN ───────────────────

const DEFAULTS = {
  startBalance: 500000,
  monthlyContrib: 1500,
  monthlyWithdrawal: 0,
  annualReturn: 7,
  volatility: 15,
  years: 25,
  numSims: 500 as 200 | 500 | 1000,
}

export default function MonteCarloSimulator() {
  const [v, setV] = useState(DEFAULTS)
  const [paths, setPaths] = useState<number[][]>([])
  const [pcts, setPcts] = useState<Record<number, number[]>>({})
  const [seed, setSeed] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const set = (key: keyof typeof DEFAULTS) => (val: number) =>
    setV(prev => ({ ...prev, [key]: val }))

  // Run simulations on input change
  useEffect(() => {
    const newPaths = runSimulations(
      v.startBalance,
      v.monthlyContrib,
      v.monthlyWithdrawal,
      v.annualReturn,
      v.volatility,
      v.years,
      v.numSims
    )
    setPaths(newPaths)
    setPcts(buildPercentiles(newPaths, v.years))
  }, [v, seed])

  // Draw canvas
  const draw = useCallback(() => {
    if (canvasRef.current && paths.length > 0) {
      drawChart(canvasRef.current, paths, pcts, v.years)
    }
  }, [paths, pcts, v.years])

  useEffect(() => { draw() }, [draw])

  // Redraw on resize
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ro = new ResizeObserver(() => draw())
    ro.observe(canvas)
    return () => ro.disconnect()
  }, [draw])

  // Derived stats
  const median = pcts[50]?.[v.years] ?? 0
  const p90val = pcts[90]?.[v.years] ?? 0
  const p10val = pcts[10]?.[v.years] ?? 0

  const growthPct =
    paths.length > 0
      ? Math.round(
          (paths.filter(p => p[v.years] > v.startBalance).length / paths.length) * 100
        )
      : 0

  const survivalPct =
    v.monthlyWithdrawal > v.monthlyContrib && paths.length > 0
      ? Math.round(
          (paths.filter(p => p[v.years] > 0).length / paths.length) * 100
        )
      : null

  const netAnnual = (v.monthlyContrib - v.monthlyWithdrawal) * 12
  const totalNet = netAnnual * v.years
  const investmentGain = Math.max(0, median - v.startBalance - totalNet)
  const isRetirementMode = v.monthlyWithdrawal > v.monthlyContrib

  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

          {/* ─── INPUTS PANEL ─── */}
          <div className="w-full lg:w-[296px] flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-[#e8e4dc] p-5 lg:sticky lg:top-[88px]">

              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-4">
                Portfolio Setup
              </p>

              <Slider
                label="Starting Balance"
                value={v.startBalance}
                min={0} max={5000000} step={25000}
                display={fmtFull(v.startBalance)}
                onChange={set('startBalance')}
              />
              <Slider
                label="Monthly Contribution"
                value={v.monthlyContrib}
                min={0} max={10000} step={100}
                display={`$${v.monthlyContrib.toLocaleString()}`}
                onChange={set('monthlyContrib')}
              />
              <Slider
                label="Monthly Withdrawal"
                value={v.monthlyWithdrawal}
                min={0} max={20000} step={100}
                display={`$${v.monthlyWithdrawal.toLocaleString()}`}
                onChange={set('monthlyWithdrawal')}
                hint={
                  v.monthlyWithdrawal === 0
                    ? 'Set above $0 for retirement mode'
                    : isRetirementMode
                    ? 'Net draw from portfolio'
                    : undefined
                }
              />

              <div className="h-px bg-[#e8e4dc] my-4" />

              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-4">
                Market Assumptions
              </p>

              <Slider
                label="Expected Annual Return"
                value={v.annualReturn}
                min={1} max={15} step={0.5}
                display={`${v.annualReturn}%`}
                onChange={set('annualReturn')}
              />
              <Slider
                label="Annual Volatility"
                value={v.volatility}
                min={3} max={35} step={0.5}
                display={`${v.volatility}%`}
                onChange={set('volatility')}
                hint="Diversified portfolio: 12-18%"
              />
              <Slider
                label="Time Horizon"
                value={v.years}
                min={5} max={40} step={1}
                display={`${v.years} years`}
                onChange={set('years')}
              />

              <div className="h-px bg-[#e8e4dc] my-4" />

              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-2">
                Simulations
              </p>
              <div className="flex gap-2 mb-4">
                {([200, 500, 1000] as const).map(n => (
                  <button
                    key={n}
                    onClick={() => setV(p => ({ ...p, numSims: n }))}
                    className={`flex-1 py-[7px] rounded-full font-sans text-[12px] font-semibold transition-all ${
                      v.numSims === n
                        ? 'bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white shadow-sm'
                        : 'bg-[#F7F4EE] text-[#5b6a71] hover:bg-[#ede9e2] border border-[#e8e4dc]'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setSeed(s => s + 1)}
                className="w-full py-[10px] rounded-full border border-[#C5C0B8] bg-[#F7F4EE] hover:bg-[#ede9e2] text-[#333333] font-sans text-[13px] font-semibold transition-all flex items-center justify-center gap-1.5"
              >
                <span style={{ fontSize: 16 }}>↺</span> Re-run Simulations
              </button>
            </div>
          </div>

          {/* ─── CHART + STATS ─── */}
          <div className="flex-1 min-w-0">

            {/* Chart card */}
            <div className="bg-white rounded-xl shadow-sm border border-[#e8e4dc] overflow-hidden">

              {/* Header + legend */}
              <div className="px-5 pt-5 pb-3 flex flex-wrap items-start justify-between gap-3 border-b border-[#e8e4dc]">
                <div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#1d7682]">
                    {v.numSims.toLocaleString()} simulations &middot; {v.years}-year horizon
                  </p>
                  <h3 className="font-serif text-[20px] text-[#333333] mt-1 leading-tight">
                    {isRetirementMode ? 'Retirement Drawdown Scenarios' : 'Portfolio Growth Scenarios'}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-0.5">
                  {[
                    { color: '#4bc49a', label: 'P90 zone', band: true },
                    { color: '#2a9dab', label: 'P75 zone', band: true },
                    { color: '#1d7682', label: 'Median', band: false },
                    { color: '#e8a45a', label: 'P25 zone', band: true },
                    { color: '#e05252', label: 'P10 zone', band: true },
                  ].map(({ color, label, band }) => (
                    <div key={label} className="flex items-center gap-1.5">
                      {band ? (
                        <span
                          className="block rounded flex-shrink-0"
                          style={{ width: 18, height: 10, backgroundColor: color, opacity: 0.55 }}
                        />
                      ) : (
                        <span
                          className="block rounded-full flex-shrink-0"
                          style={{ width: 18, height: 3, backgroundColor: color }}
                        />
                      )}
                      <span className="font-sans text-[11px] text-[#5b6a71]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Canvas */}
              <div className="w-full" style={{ height: 420 }}>
                <canvas ref={canvasRef} className="w-full h-full block" />
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
              <Stat
                label="Median Outcome"
                value={fmtFull(median)}
                sub={`after ${v.years} years`}
                color="#1d7682"
                featured
              />

              {survivalPct !== null ? (
                <SurvivalStat rate={survivalPct} />
              ) : (
                <Stat
                  label="Growth Probability"
                  value={`${growthPct}%`}
                  sub="end above starting balance"
                  color="#2a9dab"
                />
              )}

              <Stat
                label="Great Scenario"
                value={fmtFull(p90val)}
                sub="90th percentile"
                color="#4bc49a"
              />
              <Stat
                label="Tough Scenario"
                value={fmtFull(p10val)}
                sub="10th percentile"
                color="#e05252"
              />
            </div>

            {/* Context */}
            <div className="mt-4 bg-white rounded-xl border border-[#e8e4dc] p-5">
              <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed">
                {isRetirementMode ? (
                  <>
                    At a net withdrawal of{' '}
                    <strong className="text-[#333333]">
                      ${(v.monthlyWithdrawal - v.monthlyContrib).toLocaleString()}/month
                    </strong>
                    , the median scenario ends at{' '}
                    <strong className="text-[#333333]">{fmtFull(median)}</strong> after {v.years} years.{' '}
                    {survivalPct !== null && (
                      <>
                        {survivalPct >= 80
                          ? `${survivalPct}% of simulations stayed fully funded — on target by most planning standards.`
                          : survivalPct >= 70
                          ? `${survivalPct}% of simulations stayed funded — at the lower edge of what most financial planning software considers acceptable.`
                          : `Only ${survivalPct}% of simulations stayed funded through year ${v.years}. Most planning software flags anything below 70% as a concern worth addressing.`
                        }{' '}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {totalNet > 0 && (
                      <>
                        You contribute a total of{' '}
                        <strong className="text-[#333333]">{fmtFull(totalNet)}</strong> over {v.years} years.{' '}
                        The median simulation adds{' '}
                        <strong className="text-[#333333]">{fmtFull(investmentGain)}</strong> in investment growth on top of that.{' '}
                      </>
                    )}
                  </>
                )}
                The spread between the 90th and 10th percentile at year {v.years} is{' '}
                <strong className="text-[#333333]">{fmtFull(p90val - p10val)}</strong>, showing how much the sequence of returns matters over time.
              </p>
            </div>

            <CalculatorDisclaimer toolName="Monte Carlo simulation" />
          </div>
        </div>
      </div>

      {/* Slider styles */}
      <style jsx global>{`
        .mc-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          background: linear-gradient(
            to right,
            #1d7682 var(--fill, 0%),
            #e8e4dc var(--fill, 0%)
          );
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
          display: block;
          margin: 4px 0;
        }
        .mc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          border: 2.5px solid #1d7682;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.18);
          cursor: pointer;
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        .mc-slider::-webkit-slider-thumb:hover {
          transform: scale(1.18);
          box-shadow: 0 2px 8px rgba(29, 118, 130, 0.35);
        }
        .mc-slider::-moz-range-track {
          background: #e8e4dc;
          height: 4px;
          border-radius: 9999px;
        }
        .mc-slider::-moz-range-progress {
          background: #1d7682;
          height: 4px;
          border-radius: 9999px;
        }
        .mc-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          border: 2.5px solid #1d7682;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.18);
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
