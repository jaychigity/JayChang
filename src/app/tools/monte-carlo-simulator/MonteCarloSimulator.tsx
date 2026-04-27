'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'
import { loadProfile, saveProfile, hasProfile } from '@/lib/planner-store'

// ─────────────────── MATH ───────────────────

function normalRandom(mean: number, std: number): number {
  let u = 0, v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  return mean + std * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

interface SimInputs {
  startBalance: number
  monthlyContrib: number
  monthlyWithdrawal: number
  preReturn: number
  postReturn: number
  volatility: number
  accYears: number
  distYears: number
}

function runSimulations(inp: SimInputs, n: number): number[][] {
  const preR = inp.preReturn / 100
  const postR = inp.postReturn / 100
  const vol = inp.volatility / 100
  const contribAnnual = inp.monthlyContrib * 12
  const withdrawalAnnual = inp.monthlyWithdrawal * 12

  return Array.from({ length: n }, () => {
    const path = [inp.startBalance]
    let value = inp.startBalance
    for (let y = 0; y < inp.accYears; y++) {
      const ret = normalRandom(preR, vol)
      value = Math.max(0, value * (1 + ret) + contribAnnual)
      path.push(value)
    }
    for (let y = 0; y < inp.distYears; y++) {
      const ret = normalRandom(postR, vol)
      value = Math.max(0, value * (1 + ret) - withdrawalAnnual)
      path.push(value)
    }
    return path
  })
}

function pctAt(paths: number[][], year: number, p: number): number {
  const vals = paths.map(path => path[year]).sort((a, b) => a - b)
  return vals[Math.min(Math.floor((p / 100) * vals.length), vals.length - 1)]
}

function buildPercentiles(paths: number[][], totalYears: number): Record<number, number[]> {
  const pts = [10, 25, 50, 75, 90]
  const out: Record<number, number[]> = {}
  pts.forEach(p => { out[p] = [] })
  for (let y = 0; y <= totalYears; y++) {
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

const ZONE_FILLS: [number, number, string][] = [
  [75, 90, 'rgba(75,196,154,0.13)'],
  [50, 75, 'rgba(42,157,171,0.11)'],
  [25, 50, 'rgba(29,118,130,0.09)'],
  [10, 25, 'rgba(232,164,90,0.12)'],
]

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
  totalYears: number,
  retirementYear: number,
  currentAge: number
): number {
  const ctx = canvas.getContext('2d')
  if (!ctx || paths.length === 0) return 0

  const dpr = window.devicePixelRatio || 1
  const W = canvas.offsetWidth
  const H = canvas.offsetHeight
  if (W === 0 || H === 0) return 0

  canvas.width = W * dpr
  canvas.height = H * dpr
  ctx.scale(dpr, dpr)

  const PAD = { l: 72, r: 40, t: 28, b: 46 }
  const cW = W - PAD.l - PAD.r
  const cH = H - PAD.t - PAD.b

  const maxVal = pctAt(paths, totalYears, 95) * 1.1
  const xS = (yr: number) => PAD.l + (yr / totalYears) * cW
  const yS = (v: number) => PAD.t + cH - Math.min(1, Math.max(0, v / maxVal)) * cH

  // Background
  ctx.fillStyle = '#F7F4EE'
  ctx.fillRect(0, 0, W, H)

  // Retirement shaded region (right side)
  if (retirementYear > 0 && retirementYear < totalYears) {
    ctx.fillStyle = 'rgba(29,118,130,0.04)'
    ctx.fillRect(xS(retirementYear), PAD.t, cW - (xS(retirementYear) - PAD.l), cH)
  }

  // Grid
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
  const xTick = Math.max(1, Math.ceil(totalYears / 8))
  for (let yr = 0; yr <= totalYears; yr += xTick) {
    ctx.beginPath()
    ctx.strokeStyle = 'rgba(0,0,0,0.06)'
    ctx.lineWidth = 1
    ctx.moveTo(xS(yr), PAD.t)
    ctx.lineTo(xS(yr), PAD.t + cH)
    ctx.stroke()
  }

  // Retirement marker
  if (retirementYear > 0 && retirementYear < totalYears) {
    const rx = xS(retirementYear)
    ctx.save()
    ctx.strokeStyle = 'rgba(29,118,130,0.4)'
    ctx.lineWidth = 1.5
    ctx.setLineDash([5, 4])
    ctx.beginPath()
    ctx.moveTo(rx, PAD.t)
    ctx.lineTo(rx, PAD.t + cH)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle = '#1d7682'
    ctx.font = `bold 9px system-ui, -apple-system, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.fillText(`Retire · Age ${currentAge + retirementYear}`, rx, PAD.t + 3)
    ctx.restore()
  }

  // Zone fills
  for (const [lower, upper, fill] of ZONE_FILLS) {
    const upperData = pcts[upper]
    const lowerData = pcts[lower]
    if (!upperData || !lowerData) continue
    ctx.beginPath()
    upperData.forEach((val, yr) => {
      yr === 0 ? ctx.moveTo(xS(yr), yS(val)) : ctx.lineTo(xS(yr), yS(val))
    })
    for (let yr = totalYears; yr >= 0; yr--) {
      ctx.lineTo(xS(yr), yS(lowerData[yr]))
    }
    ctx.closePath()
    ctx.fillStyle = fill
    ctx.fill()
  }

  // Sample paths
  const sample = paths.length > 300
    ? paths.filter((_, i) => i % Math.ceil(paths.length / 260) === 0)
    : paths
  ctx.globalAlpha = 0.038
  ctx.lineWidth = 0.9
  ctx.strokeStyle = '#1d7682'
  for (const path of sample) {
    ctx.beginPath()
    for (let yr = 0; yr <= totalYears; yr++) {
      yr === 0 ? ctx.moveTo(xS(yr), yS(path[yr])) : ctx.lineTo(xS(yr), yS(path[yr]))
    }
    ctx.stroke()
  }
  ctx.globalAlpha = 1

  // Percentile lines
  for (const { p, color, width } of PCT_STYLES) {
    const data = pcts[p]
    if (!data) continue
    if (p === 50) {
      ctx.beginPath()
      ctx.strokeStyle = `${color}22`
      ctx.lineWidth = 14
      ctx.lineJoin = 'round'
      data.forEach((v, yr) => { yr === 0 ? ctx.moveTo(xS(yr), yS(v)) : ctx.lineTo(xS(yr), yS(v)) })
      ctx.stroke()
    }
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.lineJoin = 'round'
    data.forEach((v, yr) => { yr === 0 ? ctx.moveTo(xS(yr), yS(v)) : ctx.lineTo(xS(yr), yS(v)) })
    ctx.stroke()
  }

  // Right-edge labels
  ctx.font = `bold 10px -apple-system, BlinkMacSystemFont, 'Inter', sans-serif`
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  const usedY: number[] = []
  for (const { p, color, label } of RIGHT_LABELS) {
    const data = pcts[p]
    if (!data) continue
    let y = yS(data[totalYears])
    for (const used of usedY) {
      if (Math.abs(y - used) < 14) y = used + (y > used ? 14 : -14)
    }
    y = Math.max(PAD.t + 6, Math.min(PAD.t + cH - 6, y))
    usedY.push(y)
    ctx.fillStyle = color
    ctx.fillText(label, W - PAD.r + 5, y)
  }

  // Y-axis labels
  ctx.fillStyle = '#7a8d94'
  ctx.font = `11px -apple-system, BlinkMacSystemFont, 'Inter', sans-serif`
  ctx.textAlign = 'right'
  ctx.textBaseline = 'middle'
  for (let i = 0; i <= ROWS; i++) {
    ctx.fillText(fmtAxis((i / ROWS) * maxVal), PAD.l - 7, yS((i / ROWS) * maxVal))
  }

  // X-axis labels (age-based)
  ctx.fillStyle = '#7a8d94'
  ctx.font = `11px -apple-system, BlinkMacSystemFont, 'Inter', sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'
  for (let yr = 0; yr <= totalYears; yr += xTick) {
    const age = currentAge + yr
    ctx.fillText(yr === 0 ? `Age ${age}` : `${age}`, xS(yr), PAD.t + cH + 10)
  }

  // Axis lines
  ctx.strokeStyle = '#C5C0B8'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(PAD.l, PAD.t)
  ctx.lineTo(PAD.l, PAD.t + cH)
  ctx.lineTo(W - PAD.r, PAD.t + cH)
  ctx.stroke()

  return maxVal
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
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5b6a71]">{label}</span>
        <span className="font-sans text-[14px] font-bold text-[#1d7682] tabular-nums">{display}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        style={{ '--fill': `${pct}%` } as React.CSSProperties}
        onChange={e => onChange(Number(e.target.value))}
        className="mc-slider w-full"
      />
      {hint && <p className="font-sans text-[11px] text-[#a0b0b6] mt-1">{hint}</p>}
    </div>
  )
}

interface StatProps { label: string; value: string; sub: string; color: string; featured?: boolean }

function Stat({ label, value, sub, color, featured }: StatProps) {
  return (
    <div className={`bg-white rounded-xl p-4 sm:p-5 border ${featured ? 'border-[#1d7682]/40 shadow-sm' : 'border-[#e8e4dc]'}`}>
      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#5b6a71] mb-2">{label}</p>
      <p className="font-serif leading-none mb-1.5 tabular-nums" style={{ fontSize: 24, color }}>{value}</p>
      <p className="font-sans text-[11px] text-[#a0b0b6]">{sub}</p>
    </div>
  )
}

function SurvivalStat({ rate, lifeExpectancy }: { rate: number; lifeExpectancy: number }) {
  const color = rate >= 90 ? '#4bc49a' : rate >= 80 ? '#2a9dab' : rate >= 70 ? '#e8a45a' : '#e05252'
  const tier = rate >= 90 ? 'Excellent' : rate >= 80 ? 'On target' : rate >= 70 ? 'Minimum range' : 'Below minimum'
  const R = 54, SW = 11, r = R - SW / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (Math.min(100, rate) / 100) * circ
  const arcColor = rate >= 70 ? 'url(#mc-donut-grad)' : rate >= 50 ? '#e8a45a' : '#e05252'
  const trackGradient = 'linear-gradient(to right, #e05252 0%, #e05252 70%, #e8a45a 70%, #e8a45a 80%, #2a9dab 80%, #2a9dab 90%, #4bc49a 90%, #4bc49a 100%)'

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#e8e4dc] col-span-2 lg:col-span-1">
      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#5b6a71] mb-3">Plan Success Rate</p>
      <div className="flex justify-center mb-3">
        <svg width={R * 2} height={R * 2} viewBox={`0 0 ${R * 2} ${R * 2}`} style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="mc-donut-grad" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a9dab" />
              <stop offset="55%" stopColor="#1d7682" />
              <stop offset="100%" stopColor="#4bc49a" />
            </linearGradient>
          </defs>
          <circle cx={R} cy={R} r={r} fill="none" stroke="#e8e4dc" strokeWidth={SW} />
          <circle cx={R} cy={R} r={r} fill="none" stroke={arcColor} strokeWidth={SW} strokeLinecap="round"
            strokeDasharray={`${circ} ${circ}`} strokeDashoffset={offset}
            transform={`rotate(-90 ${R} ${R})`}
            style={{ transition: 'stroke-dashoffset 0.75s cubic-bezier(0.4,0,0.2,1)' }} />
          <text x={R} y={R - 7} textAnchor="middle" dominantBaseline="middle" fontSize="22" fontWeight="700" fill={color} fontFamily="'Georgia','Times New Roman',serif">{rate}%</text>
          <text x={R} y={R + 10} textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#7a8d94" fontFamily="system-ui,-apple-system,sans-serif">Probability of</text>
          <text x={R} y={R + 22} textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#7a8d94" fontFamily="system-ui,-apple-system,sans-serif">success</text>
        </svg>
      </div>
      <p className="font-sans text-[12px] font-semibold text-center mb-3" style={{ color }}>{tier}</p>
      <div className="relative mb-1">
        <div className="h-[6px] w-full rounded-full" style={{ background: trackGradient, opacity: 0.28 }} />
        <div className="absolute top-0 left-0 h-[6px] rounded-full" style={{ width: `${Math.min(100, rate)}%`, background: trackGradient, transition: 'width 0.6s ease' }} />
        {[70, 80, 90].map(mark => (
          <div key={mark} className="absolute top-0 h-[6px] w-[2px]" style={{ left: `${mark}%`, backgroundColor: 'rgba(255,255,255,0.9)', zIndex: 2 }} />
        ))}
        <div className="absolute top-1/2 w-[12px] h-[12px] rounded-full border-2 border-white shadow"
          style={{ left: `${Math.min(98, Math.max(2, rate))}%`, transform: 'translateX(-50%) translateY(-50%)', backgroundColor: color, transition: 'left 0.6s ease', zIndex: 3 }} />
      </div>
      <div className="relative h-4 mb-2">
        {[{ pos: 70, label: '70%' }, { pos: 80, label: '80%' }, { pos: 90, label: '90%' }].map(({ pos, label }) => (
          <span key={pos} className="absolute font-sans text-[9px] text-[#a0b0b6] whitespace-nowrap" style={{ left: `${pos}%`, transform: 'translateX(-50%)', top: 2 }}>{label}</span>
        ))}
      </div>
      <p className="font-sans text-[9px] text-[#b0bec5] text-center leading-relaxed">Min: 70% &middot; Target: 80%+ &middot; Ideal: 90%+</p>
      <p className="font-sans text-[10px] text-[#4a5a62] text-center leading-relaxed mt-2 border-t border-[#f0ece5] pt-2">
        <span className="font-semibold text-[#4bc49a]">Success</span> = money remaining at age {lifeExpectancy}.{' '}
        <span className="font-semibold text-[#e05252]">Failure</span> = portfolio runs out before then.
      </p>
    </div>
  )
}

// Speedometer confidence meter
function ConfidenceMeter({ pct }: { pct: number }) {
  const cx = 70, cy = 68, R = 52
  const clamp = Math.min(99.9, Math.max(0.1, pct))
  const endAngle = Math.PI * (1 - clamp / 100)
  const ex = cx + R * Math.cos(endAngle)
  const ey = cy - R * Math.sin(endAngle)
  // The active arc always sweeps ≤180° over the top of the semicircle — large-arc is always 0.
  // Setting it to 1 would send the arc the wrong way (down through the bottom).
  const needleAngle = Math.PI * (1 - Math.min(110, Math.max(0, pct)) / 100)
  const nx = cx + R * 0.68 * Math.cos(needleAngle)
  const ny = cy - R * 0.68 * Math.sin(needleAngle)
  const color = pct >= 100 ? '#4bc49a' : pct >= 75 ? '#2a9dab' : pct >= 50 ? '#e8a45a' : '#e05252'
  const SW = 9

  return (
    <div className="flex-shrink-0 text-center">
      <p className="font-sans text-[9px] font-bold uppercase tracking-[0.12em] text-[#5b6a71] mb-1">Confidence Meter</p>
      <svg width={140} height={88} viewBox="0 0 140 88">
        {/* Background arc — sweep=1 (clockwise/upward from left), large-arc=0 to avoid
            the degenerate case of two diametrically-opposite endpoints being ambiguous */}
        <path d={`M ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${cx + R} ${cy}`}
          fill="none" stroke="#e8e4dc" strokeWidth={SW} strokeLinecap="butt" />
        {/* Colored segment overlays */}
        {([
          [0, 50, '#e05252'],
          [50, 75, '#e8a45a'],
          [75, 90, '#2a9dab'],
          [90, 100, '#4bc49a'],
        ] as [number, number, string][]).map(([from, to, c]) => {
          const a1 = Math.PI * (1 - from / 100)
          const a2 = Math.PI * (1 - to / 100)
          const x1 = cx + R * Math.cos(a1), y1 = cy - R * Math.sin(a1)
          const x2 = cx + R * Math.cos(a2), y2 = cy - R * Math.sin(a2)
          return (
            <path key={from} d={`M ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2}`}
              fill="none" stroke={c} strokeWidth={SW} opacity={0.18} strokeLinecap="butt" />
          )
        })}
        {/* Active arc — large-arc always 0; any filled portion of the semicircle is ≤180° */}
        <path d={`M ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${ex} ${ey}`}
          fill="none" stroke={color} strokeWidth={SW} strokeLinecap="round" opacity={0.9} />
        {/* Needle */}
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#333333" strokeWidth={2.5} strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={4.5} fill="#333333" />
        {/* Labels */}
        <text x={cx - R - 2} y={cy + 16} textAnchor="middle" fontSize="8" fill="#a0b0b6" fontFamily="system-ui,sans-serif">Shortfall</text>
        <text x={cx + R + 2} y={cy + 16} textAnchor="middle" fontSize="8" fill="#a0b0b6" fontFamily="system-ui,sans-serif">Buffer</text>
        <text x={cx} y={cy - 16} textAnchor="middle" fontSize="15" fontWeight="700" fill={color} fontFamily="Georgia,serif">{Math.min(999, pct)}%</text>
        <text x={cx} y={cy - 1} textAnchor="middle" fontSize="8" fill="#7a8d94" fontFamily="system-ui,sans-serif">funded</text>
      </svg>
      <p className="font-sans text-[9px] text-[#a0b0b6]">Projected vs. goal requirement</p>
    </div>
  )
}

// ─────────────────── DEFAULTS ───────────────────

const DEFAULTS = {
  currentAge: 45,
  retirementAge: 65,
  lifeExpectancy: 90,
  startBalance: 500000,
  monthlyContrib: 2000,
  monthlyWithdrawal: 4000,
  preReturn: 7,
  postReturn: 5,
  volatility: 15,
  numSims: 1000 as 200 | 500 | 1000,
}

function mergeWithProfile() {
  const p = loadProfile()
  return {
    ...DEFAULTS,
    ...(p.currentAge != null && { currentAge: p.currentAge }),
    ...(p.retirementAge != null && { retirementAge: p.retirementAge }),
    ...(p.lifeExpectancy != null && { lifeExpectancy: p.lifeExpectancy }),
    ...(p.portfolioValue != null && { startBalance: p.portfolioValue }),
    ...(p.monthlyContrib != null && { monthlyContrib: p.monthlyContrib }),
    ...(p.monthlyWithdrawal != null && { monthlyWithdrawal: p.monthlyWithdrawal }),
  }
}

// ─────────────────── MAIN ───────────────────

export default function MonteCarloSimulator() {
  const [v, setV] = useState(() => mergeWithProfile())
  const [synced] = useState(() => hasProfile())
  const [paths, setPaths] = useState<number[][]>([])
  const [pcts, setPcts] = useState<Record<number, number[]>>({})
  const [seed, setSeed] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const maxValRef = useRef(0)
  const chartImageRef = useRef<ImageData | null>(null)
  const [hoverYear, setHoverYear] = useState<number | null>(null)
  const [hoverX, setHoverX] = useState(0)

  const set = (key: keyof typeof DEFAULTS) => (val: number) =>
    setV(prev => ({ ...prev, [key]: val }))

  // Sync shared fields back to session store on every change
  useEffect(() => {
    saveProfile({
      currentAge: v.currentAge,
      retirementAge: v.retirementAge,
      lifeExpectancy: v.lifeExpectancy,
      portfolioValue: v.startBalance,
      monthlyContrib: v.monthlyContrib,
      monthlyWithdrawal: v.monthlyWithdrawal,
    })
  }, [v.currentAge, v.retirementAge, v.lifeExpectancy, v.startBalance, v.monthlyContrib, v.monthlyWithdrawal])

  const accYears = Math.max(1, v.retirementAge - v.currentAge)
  const distYears = Math.max(1, v.lifeExpectancy - v.retirementAge)
  const totalYears = accYears + distYears

  useEffect(() => {
    const newPaths = runSimulations(
      { startBalance: v.startBalance, monthlyContrib: v.monthlyContrib, monthlyWithdrawal: v.monthlyWithdrawal, preReturn: v.preReturn, postReturn: v.postReturn, volatility: v.volatility, accYears, distYears },
      v.numSims
    )
    setPaths(newPaths)
    setPcts(buildPercentiles(newPaths, totalYears))
  }, [v, seed, accYears, distYears, totalYears])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || paths.length === 0) return
    const maxVal = drawChart(canvas, paths, pcts, totalYears, accYears, v.currentAge)
    maxValRef.current = maxVal
    setHoverYear(null)
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const dpr = window.devicePixelRatio || 1
      chartImageRef.current = ctx.getImageData(0, 0, Math.floor(canvas.offsetWidth * dpr), Math.floor(canvas.offsetHeight * dpr))
    }
  }, [paths, pcts, totalYears, accYears, v.currentAge])

  useEffect(() => { draw() }, [draw])

  const CPAD = useMemo(() => ({ l: 72, r: 40, t: 28, b: 46 }), [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current
    if (!canvas || !chartImageRef.current || paths.length === 0) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const W = canvas.offsetWidth, H = canvas.offsetHeight
    const cW = W - CPAD.l - CPAD.r
    if (x < CPAD.l - 4 || x > W - CPAD.r + 4) { setHoverYear(null); return }
    const frac = Math.min(1, Math.max(0, (x - CPAD.l) / cW))
    const yr = Math.round(frac * totalYears)
    const snappedX = CPAD.l + (yr / totalYears) * cW
    setHoverYear(yr); setHoverX(snappedX)
    const ctx = canvas.getContext('2d')
    if (!ctx || !chartImageRef.current) return
    const dpr = window.devicePixelRatio || 1
    ctx.putImageData(chartImageRef.current, 0, 0)
    ctx.save(); ctx.scale(dpr, dpr)
    ctx.strokeStyle = 'rgba(29,118,130,0.55)'; ctx.lineWidth = 1; ctx.setLineDash([4, 3])
    ctx.beginPath(); ctx.moveTo(snappedX, CPAD.t); ctx.lineTo(snappedX, H - CPAD.b); ctx.stroke()
    ctx.setLineDash([])
    const dotColors: Record<number, string> = { 10: '#e05252', 25: '#e8a45a', 50: '#1d7682', 75: '#2a9dab', 90: '#4bc49a' }
    const maxVal = maxValRef.current
    const cH = H - CPAD.t - CPAD.b
    const yS = (val: number) => CPAD.t + cH - Math.min(1, Math.max(0, val / maxVal)) * cH;
    [10, 25, 50, 75, 90].forEach(p => {
      const val = pcts[p]?.[yr]; if (val == null) return
      ctx.beginPath(); ctx.arc(snappedX, yS(val), p === 50 ? 6 : 4.5, 0, 2 * Math.PI)
      ctx.fillStyle = dotColors[p]; ctx.fill()
      ctx.strokeStyle = 'white'; ctx.lineWidth = 2; ctx.stroke()
    })
    ctx.restore()
  }, [paths, pcts, totalYears, CPAD])

  const handleMouseLeave = useCallback(() => {
    setHoverYear(null)
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (ctx && chartImageRef.current) ctx.putImageData(chartImageRef.current, 0, 0)
  }, [])

  const hoverData = useMemo(() => {
    if (hoverYear === null) return null
    return { year: hoverYear, age: v.currentAge + hoverYear, p90: pcts[90]?.[hoverYear] ?? 0, p75: pcts[75]?.[hoverYear] ?? 0, p50: pcts[50]?.[hoverYear] ?? 0, p25: pcts[25]?.[hoverYear] ?? 0, p10: pcts[10]?.[hoverYear] ?? 0 }
  }, [hoverYear, pcts, v.currentAge])

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ro = new ResizeObserver(() => draw()); ro.observe(canvas); return () => ro.disconnect()
  }, [draw])

  // ── Derived stats ──
  const projectedAtRetirement = pcts[50]?.[accYears] ?? 0
  const monthlyRate = v.postReturn / 100 / 12
  const distMonths = distYears * 12
  const goalRequired = monthlyRate > 0 && v.monthlyWithdrawal > 0
    ? v.monthlyWithdrawal * (1 - Math.pow(1 + monthlyRate, -distMonths)) / monthlyRate
    : v.monthlyWithdrawal * distMonths
  const fundingGap = goalRequired - projectedAtRetirement
  const isFunded = fundingGap <= 0
  const confidencePct = goalRequired > 0 ? Math.round((projectedAtRetirement / goalRequired) * 100) : 100
  const survivalRate = paths.length > 0
    ? Math.round((paths.filter(p => p[totalYears] > 0).length / paths.length) * 100)
    : 0
  const planStatus = survivalRate >= 80 ? 'on-track' : survivalRate >= 70 ? 'caution' : 'critical'
  const p90val = pcts[90]?.[totalYears] ?? 0
  const p10val = pcts[10]?.[totalYears] ?? 0

  const depletionData = useMemo(() => {
    if (paths.length === 0) return { medianAge: null, fundedYrs: distYears, shortfallYrs: 0 }
    const depYears: number[] = []
    for (const path of paths) {
      for (let y = accYears; y <= totalYears; y++) {
        if ((path[y] ?? 1) === 0) { depYears.push(y); break }
      }
    }
    if (depYears.length === 0) return { medianAge: null, fundedYrs: distYears, shortfallYrs: 0 }
    depYears.sort((a, b) => a - b)
    const medYr = depYears[Math.floor(depYears.length / 2)]
    const fundedYrs = Math.max(0, medYr - accYears)
    return { medianAge: v.currentAge + medYr, fundedYrs, shortfallYrs: distYears - fundedYrs }
  }, [paths, accYears, distYears, totalYears, v.currentAge])

  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

          {/* ─── INPUTS ─── */}
          <div className="w-full lg:w-[296px] flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-[#e8e4dc] p-5 lg:sticky lg:top-[88px]">

              {synced && (
                <div className="flex items-center gap-1.5 mb-4 px-2.5 py-1.5 bg-[#e6f7ef] rounded-lg">
                  <span className="text-[#4bc49a] text-[11px]">↔</span>
                  <span className="font-sans text-[10px] font-semibold text-[#4bc49a]">Profile synced from another tool</span>
                </div>
              )}
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-3">Ages</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {([
                  { label: 'Current', key: 'currentAge', min: 20, max: 75 },
                  { label: 'Retire At', key: 'retirementAge', min: 40, max: 80 },
                  { label: 'To Age', key: 'lifeExpectancy', min: 70, max: 100 },
                ] as const).map(({ label, key, min, max }) => (
                  <div key={key}>
                    <label className="font-sans text-[9px] font-semibold uppercase tracking-[0.08em] text-[#5b6a71] block mb-1">{label}</label>
                    <input type="number" min={min} max={max} value={v[key]}
                      onChange={e => setV(prev => ({ ...prev, [key]: Math.max(min, Math.min(max, Number(e.target.value))) }))}
                      className="w-full border border-[#e8e4dc] rounded-lg px-1 py-1.5 font-sans text-[13px] text-center text-[#333333] focus:outline-none focus:border-[#1d7682]" />
                  </div>
                ))}
              </div>

              <div className="h-px bg-[#e8e4dc] my-4" />
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-4">Portfolio</p>
              <Slider label="Starting Balance" value={v.startBalance} min={0} max={5000000} step={25000} display={fmtFull(v.startBalance)} onChange={set('startBalance')} />
              <Slider label="Monthly Contribution" value={v.monthlyContrib} min={0} max={10000} step={100} display={`$${v.monthlyContrib.toLocaleString()}`} onChange={set('monthlyContrib')} hint="While working" />

              <div className="h-px bg-[#e8e4dc] my-4" />
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-4">Returns &amp; Risk</p>
              <Slider label="Pre-Retirement Return" value={v.preReturn} min={1} max={15} step={0.5} display={`${v.preReturn}%`} onChange={set('preReturn')} hint="Growth while working" />
              <Slider label="Post-Retirement Return" value={v.postReturn} min={1} max={12} step={0.5} display={`${v.postReturn}%`} onChange={set('postReturn')} hint="More conservative in retirement" />
              <Slider label="Annual Volatility" value={v.volatility} min={3} max={35} step={0.5} display={`${v.volatility}%`} onChange={set('volatility')} hint="Diversified portfolio: 12-18%" />

              <div className="h-px bg-[#e8e4dc] my-4" />
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-4">Retirement Spending</p>
              <Slider label="Monthly Withdrawal" value={v.monthlyWithdrawal} min={0} max={20000} step={100} display={`$${v.monthlyWithdrawal.toLocaleString()}`} onChange={set('monthlyWithdrawal')} hint={`$${(v.monthlyWithdrawal * 12).toLocaleString()}/year from portfolio`} />

              <div className="h-px bg-[#e8e4dc] my-4" />
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-2">Simulations</p>
              <div className="flex gap-2 mb-4">
                {([200, 500, 1000] as const).map(n => (
                  <button key={n} onClick={() => setV(p => ({ ...p, numSims: n }))}
                    className={`flex-1 py-[7px] rounded-full font-sans text-[12px] font-semibold transition-all ${v.numSims === n ? 'bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white shadow-sm' : 'bg-[#F7F4EE] text-[#5b6a71] hover:bg-[#ede9e2] border border-[#e8e4dc]'}`}
                  >{n}</button>
                ))}
              </div>
              <button onClick={() => setSeed(s => s + 1)}
                className="w-full py-[10px] rounded-full border border-[#C5C0B8] bg-[#F7F4EE] hover:bg-[#ede9e2] text-[#333333] font-sans text-[13px] font-semibold transition-all flex items-center justify-center gap-1.5">
                <span style={{ fontSize: 16 }}>↺</span> Re-run Simulations
              </button>
            </div>
          </div>

          {/* ─── OUTPUT ─── */}
          <div className="flex-1 min-w-0">

            {/* Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-[#e8e4dc] overflow-hidden">
              <div className="px-5 pt-5 pb-3 flex flex-wrap items-start justify-between gap-3 border-b border-[#e8e4dc]">
                <div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#1d7682]">
                    {v.numSims.toLocaleString()} simulations &middot; Ages {v.currentAge}-{v.lifeExpectancy}
                  </p>
                  <h3 className="font-serif text-[20px] text-[#333333] mt-1 leading-tight">Portfolio Growth &amp; Retirement Scenarios</h3>
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
                      {band
                        ? <span className="block rounded flex-shrink-0" style={{ width: 18, height: 10, backgroundColor: color, opacity: 0.55 }} />
                        : <span className="block rounded-full flex-shrink-0" style={{ width: 18, height: 3, backgroundColor: color }} />}
                      <span className="font-sans text-[11px] text-[#5b6a71]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative w-full select-none" style={{ height: 420, cursor: 'crosshair' }}
                onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <canvas ref={canvasRef} className="w-full h-full block" />
                {hoverData && (
                  <div className="absolute pointer-events-none z-20 bg-white/96 border border-[#e8e4dc] rounded-xl shadow-lg overflow-hidden"
                    style={{ top: CPAD.t + 8, left: hoverX < 320 ? hoverX + 14 : undefined, right: hoverX >= 320 ? `calc(100% - ${hoverX}px + 14px)` : undefined, minWidth: 168 }}>
                    <div className="bg-[#333333] px-3 py-2">
                      <p className="font-sans text-[11px] font-bold text-[#F7F4EE]">
                        Year {hoverData.year} &middot; Age {hoverData.age}
                        {hoverData.year === accYears && <span className="text-[#4bc49a] ml-1">(Retirement)</span>}
                      </p>
                    </div>
                    <div className="px-3 py-2 space-y-[5px]">
                      {[
                        { label: '90th %ile', val: hoverData.p90, color: '#4bc49a' },
                        { label: '75th %ile', val: hoverData.p75, color: '#2a9dab' },
                        { label: 'Median', val: hoverData.p50, color: '#1d7682' },
                        { label: '25th %ile', val: hoverData.p25, color: '#e8a45a' },
                        { label: '10th %ile', val: hoverData.p10, color: '#e05252' },
                      ].map(({ label, val, color }) => (
                        <div key={label} className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                            <span className="font-sans text-[10px] text-[#5b6a71] whitespace-nowrap">{label}</span>
                          </div>
                          <span className="font-sans text-[12px] font-bold tabular-nums" style={{ color }}>{fmtFull(val)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Retirement Timeline Bar */}
            <div className="bg-white rounded-xl border border-[#e8e4dc] p-5 mt-4">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#1d7682] mb-0.5">Retirement Timeline</p>
              <p className="font-sans text-[12px] text-[#5b6a71] mb-4">How long your savings may last — median simulation</p>
              <div className="flex justify-between font-sans text-[10px] mb-1">
                <span className="text-[#5b6a71]">Age {v.currentAge}</span>
                <span className="font-bold text-[#1d7682]">Age {v.retirementAge}</span>
                {depletionData.medianAge && depletionData.shortfallYrs > 0 && (
                  <span className="font-bold text-[#e05252]">Age {depletionData.medianAge}</span>
                )}
                <span className="text-[#5b6a71]">Age {v.lifeExpectancy}</span>
              </div>
              <div className="flex h-6 rounded-full overflow-hidden mb-3">
                <div style={{ width: `${(accYears / totalYears) * 100}%`, backgroundColor: '#2a9dab' }}
                  className="flex items-center justify-center flex-shrink-0">
                  {accYears / totalYears > 0.18 && <span className="font-sans text-[9px] font-bold text-white">Accumulation</span>}
                </div>
                <div style={{ width: `${(depletionData.fundedYrs / totalYears) * 100}%`, backgroundColor: '#4bc49a' }}
                  className="flex items-center justify-center">
                  {depletionData.fundedYrs / totalYears > 0.12 && <span className="font-sans text-[9px] font-bold text-white">Funded</span>}
                </div>
                {depletionData.shortfallYrs > 0 && (
                  <div style={{
                    width: `${(depletionData.shortfallYrs / totalYears) * 100}%`,
                    backgroundColor: '#e05252',
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.18) 5px, rgba(255,255,255,0.18) 10px)',
                  }} className="flex items-center justify-center">
                    {depletionData.shortfallYrs / totalYears > 0.12 && <span className="font-sans text-[9px] font-bold text-white">Shortfall</span>}
                  </div>
                )}
              </div>
              <div className="flex gap-5 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: '#2a9dab' }} />
                  <span className="font-sans text-[11px] text-[#5b6a71]">Accumulation: {accYears} yrs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: '#4bc49a' }} />
                  <span className="font-sans text-[11px] text-[#5b6a71]">Funded: {depletionData.fundedYrs} yrs</span>
                </div>
                {depletionData.shortfallYrs > 0 ? (
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: '#e05252' }} />
                    <span className="font-sans text-[11px] font-semibold text-[#e05252]">Shortfall: {depletionData.shortfallYrs} yrs (short of Age {v.lifeExpectancy})</span>
                  </div>
                ) : (
                  <span className="font-sans text-[11px] font-semibold text-[#4bc49a]">Fully funded to Age {v.lifeExpectancy}</span>
                )}
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
              <Stat label="At Retirement" value={fmtFull(projectedAtRetirement)} sub={`median at age ${v.retirementAge}`} color="#1d7682" featured />
              <SurvivalStat rate={survivalRate} lifeExpectancy={v.lifeExpectancy} />
              <Stat label="Great Scenario" value={fmtFull(p90val)} sub={`90th pct, age ${v.lifeExpectancy}`} color="#4bc49a" />
              <Stat label="Tough Scenario" value={fmtFull(p10val)} sub={`10th pct, age ${v.lifeExpectancy}`} color="#e05252" />
            </div>

            {/* Funding Gap */}
            {v.monthlyWithdrawal > 0 && (
              <div className="bg-white rounded-xl border border-[#e8e4dc] p-5 mt-4">
                <div className="flex items-start gap-6 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="mb-3">
                      <span className={`font-sans text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full ${planStatus === 'on-track' ? 'bg-[#e6f7ef] text-[#4bc49a]' : planStatus === 'caution' ? 'bg-[#fff4ee] text-[#c07a30]' : 'bg-[#fff0f0] text-[#e05252]'}`}>
                        {planStatus === 'on-track' ? 'On Track' : planStatus === 'caution' ? 'Adjustments Needed' : 'Course Correction Needed'}
                      </span>
                    </div>
                    <h3 className="font-serif text-[22px] text-[#333333] leading-tight mb-2">
                      {planStatus === 'on-track' ? 'Plan on Track' : planStatus === 'caution' ? 'Funding Gap Detected' : 'Significant Shortfall'}
                    </h3>
                    <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed mb-4 max-w-sm">
                      {planStatus === 'on-track'
                        ? `${survivalRate}% of simulations end with money remaining at age ${v.lifeExpectancy}. The median projection reaches ${fmtFull(projectedAtRetirement)} at retirement, above the ${fmtFull(goalRequired)} target.`
                        : planStatus === 'caution'
                        ? `${survivalRate}% of simulations survive to age ${v.lifeExpectancy}. Close, but some adjustments could meaningfully improve your odds. The median projection is ${fmtFull(projectedAtRetirement)} against a ${fmtFull(goalRequired)} goal.`
                        : `Only ${survivalRate}% of simulations survive to age ${v.lifeExpectancy}. At $${v.monthlyWithdrawal.toLocaleString()}/month, you need ${fmtFull(goalRequired)} at retirement. The median projection is ${fmtFull(projectedAtRetirement)}, a gap of ${fmtFull(Math.abs(fundingGap))}.`}
                    </p>
                    <div className="border border-[#f0ece5] rounded-xl overflow-hidden">
                      {[
                        { dot: '#2a9dab', label: 'Projected at Retirement', value: fmtFull(projectedAtRetirement), valueColor: '#333333', bold: false },
                        { dot: '#5b6a71', label: 'Goal Requirement', value: fmtFull(goalRequired), valueColor: '#333333', bold: false },
                        { dot: isFunded ? '#4bc49a' : '#e05252', label: isFunded ? 'Projected Surplus' : 'Funding Gap', value: `${isFunded ? '+' : ''}${fmtFull(isFunded ? Math.abs(fundingGap) : -Math.abs(fundingGap))}`, valueColor: isFunded ? '#4bc49a' : '#e05252', bold: true },
                      ].map(({ dot, label, value, valueColor, bold }) => (
                        <div key={label} className="flex items-center justify-between px-4 py-3 border-b border-[#f0ece5] last:border-b-0">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: dot }} />
                            <span className={`font-sans text-[12px] ${bold ? 'font-bold' : ''}`} style={{ color: bold ? valueColor : '#5b6a71' }}>{label}</span>
                          </div>
                          <span className={`font-sans text-[14px] tabular-nums ${bold ? 'font-bold' : 'font-semibold'}`} style={{ color: valueColor }}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <ConfidenceMeter pct={confidencePct} />
                </div>
              </div>
            )}

            <CalculatorDisclaimer
              toolName="Monte Carlo simulation"
              resultSummary={depletionData.medianAge
                ? `Across ${v.numSims.toLocaleString()} simulations, the median run depletes at age ${depletionData.medianAge}, ${depletionData.shortfallYrs} years short of age ${v.lifeExpectancy}. Closing that gap is what allocation, withdrawal, and timing decisions are for.`
                : `Across ${v.numSims.toLocaleString()} simulations, the median run sustains your portfolio through age ${v.lifeExpectancy}. The next question is whether you can spend more, give more, or retire earlier without breaking the plan.`}
              ctaLabel="Pressure-test your retirement plan with Jay →"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .mc-slider {
          -webkit-appearance: none; appearance: none; height: 4px;
          background: linear-gradient(to right, #1d7682 var(--fill, 0%), #e8e4dc var(--fill, 0%));
          border-radius: 9999px; outline: none; cursor: pointer; display: block; margin: 4px 0;
        }
        .mc-slider::-webkit-slider-thumb {
          -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%;
          background: white; border: 2.5px solid #1d7682; box-shadow: 0 1px 5px rgba(0,0,0,0.18);
          cursor: pointer; transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        .mc-slider::-webkit-slider-thumb:hover { transform: scale(1.18); box-shadow: 0 2px 8px rgba(29,118,130,0.35); }
        .mc-slider::-moz-range-track { background: #e8e4dc; height: 4px; border-radius: 9999px; }
        .mc-slider::-moz-range-progress { background: #1d7682; height: 4px; border-radius: 9999px; }
        .mc-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: white; border: 2.5px solid #1d7682; box-shadow: 0 1px 5px rgba(0,0,0,0.18); cursor: pointer; }
      `}</style>
    </div>
  )
}
