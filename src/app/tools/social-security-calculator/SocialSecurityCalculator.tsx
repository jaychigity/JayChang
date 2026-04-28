'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { SS_WAGE_BASE, SS_TAX_RATE } from '@/lib/tax-constants-2026'
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'

/* ═══════════════════════════════════════════════════════════════════════
   Social Security Constants — 2026
   ═══════════════════════════════════════════════════════════════════════ */
const YEAR = 2026

// PIA bend points (2026 estimates, indexed from 2024 actuals)
const BP1 = 1_245 // 90% replacement below this monthly amount
const BP2 = 7_510 // 32% replacement up to this amount

// Earnings test: if you claim before FRA and still work
const EARN_LIMIT = 23_400 // $1 withheld per $2 above this (2026 est.)

// IRMAA — annual Medicare surcharge by income tier (2026 est.)
const IRMAA: Record<string, { max: number; yr: number }[]> = {
  single: [
    { max: 106_000, yr: 0 },
    { max: 133_000, yr: 851 },
    { max: 167_000, yr: 2_117 },
    { max: 200_000, yr: 3_384 },
    { max: 500_000, yr: 4_651 },
    { max: Infinity, yr: 5_032 },
  ],
  mfj: [
    { max: 212_000, yr: 0 },
    { max: 266_000, yr: 1_702 },
    { max: 334_000, yr: 4_234 },
    { max: 400_000, yr: 6_768 },
    { max: 750_000, yr: 9_302 },
    { max: Infinity, yr: 10_064 },
  ],
}

/* ═══════════════════════════════════════════════════════════════════════
   Helper Functions
   ═══════════════════════════════════════════════════════════════════════ */

/** Full Retirement Age based on birth year */
function getFRA(by: number): { y: number; m: number; label: string } {
  if (by <= 1937) return { y: 65, m: 0, label: '65' }
  if (by <= 1954) return { y: 66, m: 0, label: '66' }
  const mo = [2, 4, 6, 8, 10][by - 1955]
  if (mo !== undefined) return { y: 66, m: mo, label: `66 and ${mo} months` }
  return { y: 67, m: 0, label: '67' }
}

/**
 * Benefit adjustment factor for claiming at `age` vs FRA.
 * - Before FRA: first 36 months → 5/9 of 1% per month; beyond → 5/12 of 1%
 * - After FRA: delayed retirement credits → 8% per year (2/3 of 1%/month)
 */
function claimFactor(age: number, fra: { y: number; m: number }): number {
  const diff = age * 12 - (fra.y * 12 + fra.m)
  if (diff === 0) return 1
  if (diff < 0) {
    const e = -diff
    return e <= 36 ? 1 - (e * 5) / 900 : 1 - 0.2 - ((e - 36) * 5) / 1200
  }
  return 1 + (Math.min(diff, 36) * 2) / 300
}

/** Rough PIA estimate from annual income using bend-point formula */
function estimatePIA(income: number): number {
  const m = Math.min(income, SS_WAGE_BASE) / 12
  if (m <= BP1) return Math.round(m * 0.9)
  if (m <= BP2) return Math.round(BP1 * 0.9 + (m - BP1) * 0.32)
  return Math.round(BP1 * 0.9 + (BP2 - BP1) * 0.32 + (m - BP2) * 0.15)
}

/** Cumulative benefits from claimAge to targetAge, with COLA */
function cumBenefits(
  claimAge: number,
  monthly: number,
  targetAge: number,
  cola: number,
): number {
  let total = 0
  for (let y = 0; y < targetAge - claimAge; y++) {
    total += monthly * 12 * Math.pow(1 + cola, y)
  }
  return Math.round(total)
}

/** Reverse-engineer approximate lifetime SS taxes paid from PIA */
function estimateTaxesPaid(pia: number): number {
  let aime = 0
  let rem = pia
  const p1 = Math.min(rem, BP1 * 0.9)
  aime += p1 / 0.9
  rem -= p1
  if (rem > 0) {
    const p2 = Math.min(rem, (BP2 - BP1) * 0.32)
    aime += p2 / 0.32
    rem -= p2
  }
  if (rem > 0) aime += rem / 0.15
  const annualEarnings = Math.min(aime * 12, SS_WAGE_BASE)
  return Math.round(annualEarnings * SS_TAX_RATE * 35)
}

/** IRMAA annual surcharge lookup */
function getIRMAA(income: number, filing: string): number {
  const table = IRMAA[filing === 'mfj' ? 'mfj' : 'single']
  for (const r of table) if (income <= r.max) return r.yr
  return table[table.length - 1].yr
}

/** Dollar formatter */
const fmt = (n: number) => n.toLocaleString('en-US')

/* ═══════════════════════════════════════════════════════════════════════
   Myths — plain language, no jargon
   ═══════════════════════════════════════════════════════════════════════ */
const MYTHS = [
  {
    myth: 'Take it early, you\'ll collect more overall',
    reality:
      'Only true if you don\'t live long. If you make it past your late 70s, and most people do, the bigger monthly check from waiting adds up to significantly more over your lifetime.',
  },
  {
    myth: 'Social Security is going broke, grab it now',
    reality:
      'The trust fund may run low around 2033, but payroll taxes still fund about 80% of benefits. Congress has never cut benefits for people already collecting, and there\'s enormous political pressure to find a fix.',
  },
  {
    myth: 'I\'ll never get back what I paid in',
    reality:
      'Most people recoup every dollar of Social Security taxes within 5–7 years of collecting. After that, every check is money you wouldn\'t have had otherwise.',
  },
  {
    myth: 'Working while collecting means I lose benefits forever',
    reality:
      'Before full retirement age, some benefits are temporarily withheld if you earn too much. But after FRA, your check is recalculated to give that money back. Nothing is permanently lost.',
  },
  {
    myth: 'My benefit is locked in forever once I start',
    reality:
      'Your benefit gets a cost-of-living adjustment (COLA) almost every year, tied to inflation. Over 20 years, these increases can add hundreds to your monthly check.',
  },
  {
    myth: 'Everyone should wait until 70',
    reality:
      'Waiting gives the biggest check, but it\'s not always best. If you need income now, have health concerns, or want to let other retirement accounts grow, claiming earlier might make sense. There\'s no one-size-fits-all answer.',
  },
]

/* ═══════════════════════════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════════════════════════ */
export default function SocialSecurityCalculator() {
  /* ── State ─────────────────────────────────────────────────────────── */
  const [birthYear, setBirthYear] = useState(1962)
  const [fraBenefit, setFraBenefit] = useState(2800) // monthly PIA
  const [claimAge, setClaimAge] = useState(67)
  const [lifeExpectancy, setLifeExpectancy] = useState(85)
  const [cola, setCola] = useState(0.025)
  const [filing, setFiling] = useState<'single' | 'mfj'>('mfj')

  // Income-based estimate toggle
  const [useIncomeEst, setUseIncomeEst] = useState(false)
  const [estIncome, setEstIncome] = useState(100_000)

  // Spouse
  const [showSpouse, setShowSpouse] = useState(false)
  const [spouseBY, setSpouseBY] = useState(1964)
  const [spousePIA, setSpousePIA] = useState(1200)
  const [spouseAge, setSpouseAge] = useState(67)

  // Still working
  const [working, setWorking] = useState(false)
  const [earnings, setEarnings] = useState(50_000)

  // Other income (for IRMAA)
  const [otherIncome, setOtherIncome] = useState(0)

  /* ── Derived ───────────────────────────────────────────────────────── */
  const fra = useMemo(() => getFRA(birthYear), [birthYear])
  const currentAge = YEAR - birthYear
  const pia = useIncomeEst ? estimatePIA(estIncome) : fraBenefit

  const factor = claimFactor(claimAge, fra)
  const monthly = Math.round(pia * factor)
  const annual = monthly * 12
  const pct = Math.round(factor * 100)

  // All 9 claiming ages (62–70)
  const allAges = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => {
        const a = 62 + i
        const f = claimFactor(a, fra)
        return {
          age: a,
          monthly: Math.round(pia * f),
          pct: Math.round(f * 100),
        }
      }),
    [pia, fra],
  )

  // Break-even: current claim age vs 62
  const breakEven = useMemo(() => {
    if (claimAge <= 62) return null
    const m62 = allAges[0].monthly
    if (monthly <= m62) return null
    const be = (m62 * 62 - monthly * claimAge) / (m62 - monthly)
    return be > claimAge && be < 100 ? Math.round(be * 10) / 10 : null
  }, [claimAge, allAges, monthly])

  // Head start $ that age-62 collects before selected age starts
  const headStart = useMemo(() => {
    if (claimAge <= 62) return 0
    return allAges[0].monthly * 12 * (claimAge - 62)
  }, [claimAge, allAges])

  // Advantage at life expectancy: selected vs 62
  const lifeAdvantage = useMemo(() => {
    if (claimAge <= 62) return 0
    return (
      cumBenefits(claimAge, monthly, lifeExpectancy, cola) -
      cumBenefits(62, allAges[0].monthly, lifeExpectancy, cola)
    )
  }, [claimAge, monthly, lifeExpectancy, cola, allAges])

  // Lifetime comparison: claim at 62, FRA, 70
  const lifetime = useMemo(() => {
    const picks = [62, fra.y, 70]
    return [75, 80, 85, 90, 95].map((target) => {
      const rows = picks.map((a) => {
        const m = Math.round(pia * claimFactor(a, fra))
        return { age: a, cum: cumBenefits(a, m, target, cola) }
      })
      const best = Math.max(...rows.map((r) => r.cum))
      return {
        target,
        rows: rows.map((r) => ({ ...r, isBest: r.cum === best && r.cum > 0 })),
      }
    })
  }, [pia, fra, cola])

  // Money's worth
  const taxes = useMemo(() => estimateTaxesPaid(pia), [pia])
  const recoupYrs = annual > 0 ? taxes / annual : 99
  const recoupAge = Math.ceil(claimAge + recoupYrs)
  const lifetimeCollected = cumBenefits(claimAge, monthly, lifeExpectancy, cola)
  const returnPct =
    taxes > 0 ? Math.round((lifetimeCollected / taxes) * 100) : 0

  // Spousal
  const sFra = useMemo(() => getFRA(spouseBY), [spouseBY])
  const spousal = useMemo(() => {
    if (!showSpouse) return null
    const sf = claimFactor(spouseAge, sFra)
    const sm = Math.round(spousePIA * sf)
    const half = Math.round(pia * 0.5)
    const topUp =
      spousePIA < half
        ? spouseAge >= sFra.y
          ? half - spousePIA
          : Math.round((half - spousePIA) * Math.max(0.5, sf))
        : 0
    return {
      sm,
      topUp,
      combined: monthly + sm + topUp,
      combinedAnnual: (monthly + sm + topUp) * 12,
    }
  }, [showSpouse, spousePIA, spouseAge, sFra, pia, monthly])

  // Earnings test
  const earnTest = useMemo(() => {
    if (!working || claimAge >= fra.y) return null
    const excess = Math.max(0, earnings - EARN_LIMIT)
    const held = Math.round(excess / 2)
    return {
      held,
      monthsLost: Math.min(12, Math.ceil(held / Math.max(monthly, 1))),
    }
  }, [working, earnings, claimAge, fra, monthly])

  // IRMAA
  const irmaaChk = useMemo(() => {
    const inc = otherIncome + annual
    return { income: inc, surcharge: getIRMAA(inc, filing) }
  }, [otherIncome, annual, filing])

  // First check year
  const firstCheckYear = birthYear + claimAge

  /* ── Styles ────────────────────────────────────────────────────────── */
  const card =
    'bg-white rounded-xl border border-[#33333314] p-5 md:p-8'
  const label =
    'font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#333]/60 mb-2 block'
  const inp =
    'w-full font-sans text-[16px] text-[#333] bg-[#F7F4EE] border border-[#33333320] rounded-lg px-4 py-3 focus:outline-none focus:border-[#1d7682] transition-colors'
  const btnOn =
    'border-[#1d7682] bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white'
  const btnOff = 'border-[#33333320] bg-white text-[#333]'

  /* ── Render ────────────────────────────────────────────────────────── */
  return (
    <div className="max-w-[960px] mx-auto px-5 md:px-8 py-10 md:py-16">
      {/* ━━━━━━━━━━━━━━━━━ INPUTS ━━━━━━━━━━━━━━━━━ */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Left: Core */}
        <div className={card}>
          <h2 className="font-serif text-[24px] text-[#333] mb-4">
            Your Information
          </h2>

          {/* Birth Year */}
          <div className="mb-5">
            <label className={label}>Year of Birth</label>
            <input
              type="number"
              className={inp}
              value={birthYear}
              onChange={(e) =>
                setBirthYear(parseInt(e.target.value) || 1960)
              }
            />
            <p className="font-sans text-[13px] text-[#333]/70 mt-1">
              Age this year:{' '}
              <strong>{currentAge}</strong> · Full retirement
              age: <strong>{fra.label}</strong>
            </p>
          </div>

          {/* Benefit / Income Estimate */}
          <div className="mb-5">
            <label className={label}>
              {useIncomeEst
                ? 'Your Average Annual Income'
                : 'Monthly Benefit at Full Retirement Age'}
            </label>
            {!useIncomeEst ? (
              <>
                <input
                  type="text"
                  className={inp}
                  value={fraBenefit ? `$${fmt(fraBenefit)}` : ''}
                  onChange={(e) => {
                    const v = parseInt(
                      e.target.value.replace(/[^0-9]/g, ''),
                    )
                    setFraBenefit(isNaN(v) ? 0 : v)
                  }}
                />
                <p className="font-sans text-[12px] text-[#94A3B8] mt-1">
                  Find this on your Social Security statement at{' '}
                  <a
                    href="https://www.ssa.gov/myaccount"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1d7682] underline"
                  >
                    ssa.gov/myaccount
                  </a>
                </p>
              </>
            ) : (
              <>
                <input
                  type="text"
                  className={inp}
                  value={estIncome ? `$${fmt(estIncome)}` : ''}
                  onChange={(e) => {
                    const v = parseInt(
                      e.target.value.replace(/[^0-9]/g, ''),
                    )
                    setEstIncome(isNaN(v) ? 0 : v)
                  }}
                />
                <p className="font-sans text-[12px] text-[#94A3B8] mt-1">
                  Estimated monthly benefit:{' '}
                  <strong className="text-[#1d7682]">
                    ${fmt(estimatePIA(estIncome))}/mo
                  </strong>{' '}
                  , rough estimate based on 35 years at this income
                </p>
              </>
            )}
            <button
              onClick={() => setUseIncomeEst(!useIncomeEst)}
              className="font-sans text-[12px] text-[#1d7682] mt-2 underline"
            >
              {useIncomeEst
                ? 'I know my exact benefit →'
                : "Don't know your benefit? Estimate from income →"}
            </button>
          </div>

          {/* Filing Status */}
          <div>
            <label className={label}>Filing Status</label>
            <div className="flex gap-3">
              {(['single', 'mfj'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFiling(f)}
                  className={`flex-1 py-3 rounded-lg border-2 font-sans text-[13px] font-semibold transition-all ${
                    filing === f ? btnOn : btnOff
                  }`}
                >
                  {f === 'single' ? 'Single' : 'Married'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Optional */}
        <div className="space-y-6">
          {/* Spouse */}
          <div className={card}>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-serif text-[20px] text-[#333]">
                Spouse Benefits
              </h2>
              <button
                onClick={() => setShowSpouse(!showSpouse)}
                className={`px-4 py-2 rounded-full font-sans text-[12px] font-semibold border-2 transition-all ${
                  showSpouse ? btnOn : btnOff
                }`}
              >
                {showSpouse ? 'Included ✓' : '+ Add Spouse'}
              </button>
            </div>
            {showSpouse && (
              <div className="space-y-4 mt-4">
                <div>
                  <label className={label}>Spouse Year of Birth</label>
                  <input
                    type="number"
                    className={inp}
                    value={spouseBY}
                    onChange={(e) =>
                      setSpouseBY(parseInt(e.target.value) || 1960)
                    }
                  />
                </div>
                <div>
                  <label className={label}>
                    Spouse Monthly Benefit at FRA
                  </label>
                  <input
                    type="text"
                    className={inp}
                    value={spousePIA ? `$${fmt(spousePIA)}` : ''}
                    onChange={(e) => {
                      const v = parseInt(
                        e.target.value.replace(/[^0-9]/g, ''),
                      )
                      setSpousePIA(isNaN(v) ? 0 : v)
                    }}
                  />
                </div>
                <div>
                  <label className={label}>Spouse Claiming Age</label>
                  <input
                    type="range"
                    min={62}
                    max={70}
                    step={1}
                    value={spouseAge}
                    onChange={(e) =>
                      setSpouseAge(parseInt(e.target.value))
                    }
                    className="w-full accent-[#1d7682]"
                  />
                  <div className="flex justify-between font-sans text-[11px] text-[#333]/50">
                    <span>62</span>
                    <span className="font-semibold text-[#1d7682]">
                      {spouseAge}
                    </span>
                    <span>70</span>
                  </div>
                </div>
              </div>
            )}
            {!showSpouse && (
              <p className="font-sans text-[12px] text-[#333]/40">
                Add your spouse to see combined household income and
                spousal benefit analysis.
              </p>
            )}
          </div>

          {/* Assumptions */}
          <div className={card}>
            <h2 className="font-serif text-[20px] text-[#333] mb-4">
              Assumptions
            </h2>

            <div className="mb-4">
              <label className={label}>Life Expectancy</label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={70}
                  max={100}
                  step={1}
                  value={lifeExpectancy}
                  onChange={(e) =>
                    setLifeExpectancy(parseInt(e.target.value))
                  }
                  className="flex-1 accent-[#1d7682]"
                />
                <span className="font-sans text-[16px] font-semibold text-[#333] w-[36px] text-right">
                  {lifeExpectancy}
                </span>
              </div>
              <p className="font-sans text-[11px] text-[#94A3B8] mt-1">
                Average at 65: 84 for men, 87 for women
              </p>
            </div>

            <div className="mb-4">
              <label className={label}>
                Annual COLA (Cost-of-Living Increase)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={0}
                  max={5}
                  step={0.5}
                  value={cola * 100}
                  onChange={(e) =>
                    setCola(parseFloat(e.target.value) / 100)
                  }
                  className="flex-1 accent-[#1d7682]"
                />
                <span className="font-sans text-[16px] font-semibold text-[#333] w-[50px] text-right">
                  {(cola * 100).toFixed(1)}%
                </span>
              </div>
              <p className="font-sans text-[11px] text-[#94A3B8] mt-1">
                Historical average: ~2.5%, your checks grow by this
                each year
              </p>
            </div>

            <div>
              <label className={label}>
                Other Retirement Income (for IRMAA check)
              </label>
              <input
                type="text"
                className={inp}
                value={otherIncome ? `$${fmt(otherIncome)}` : ''}
                placeholder="$0"
                onChange={(e) => {
                  const v = parseInt(
                    e.target.value.replace(/[^0-9]/g, ''),
                  )
                  setOtherIncome(isNaN(v) ? 0 : v)
                }}
              />
              <p className="font-sans text-[11px] text-[#94A3B8] mt-1">
                Pensions, 401(k) withdrawals, rental income, etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━ CLAIMING AGE HERO ━━━━━━━━━━━━━━━━━ */}
      <div className="bg-gradient-to-br from-[#333333] to-[#1a1a1a] rounded-2xl p-6 md:p-10 mb-6 text-center">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#1d7682] mb-2">
          When Do You Want to Start Collecting?
        </p>

        {/* Big monthly number */}
        <div className="mb-1">
          <span className="font-serif text-[52px] md:text-[72px] font-light text-white">
            ${fmt(monthly)}
          </span>
          <span className="font-sans text-[16px] text-white/50 ml-2">
            / month
          </span>
        </div>
        <p className="font-sans text-[18px] text-white/70 mb-1">
          ${fmt(annual)} per year
        </p>
        <p className="font-sans text-[14px] text-white/50 mb-1">
          {pct === 100
            ? "That's your full benefit"
            : pct < 100
              ? `${100 - pct}% less than your full benefit`
              : `${pct - 100}% more than your full benefit`}
        </p>
        <p className="font-sans text-[12px] text-white/30 mb-6">
          First check: ~{firstCheckYear}
        </p>

        {/* Slider */}
        <div className="max-w-[600px] mx-auto mb-6">
          <input
            type="range"
            min={62}
            max={70}
            step={1}
            value={claimAge}
            onChange={(e) => setClaimAge(parseInt(e.target.value))}
            className="w-full h-3 cursor-pointer accent-[#1d7682]"
          />
          <div className="flex justify-between font-sans text-[12px] text-white/40 mt-2 px-0.5">
            {Array.from({ length: 9 }, (_, i) => {
              const a = 62 + i
              const isFRA = a === fra.y && fra.m === 0
              return (
                <span
                  key={a}
                  className={`text-center ${
                    a === claimAge
                      ? 'text-[#1d7682] font-bold text-[14px]'
                      : isFRA
                        ? 'text-white/70'
                        : ''
                  }`}
                >
                  {a}
                  {isFRA && (
                    <span className="block text-[9px] text-white/40">
                      FRA
                    </span>
                  )}
                </span>
              )
            })}
          </div>
        </div>

        {/* 9 Age cards */}
        <div className="grid grid-cols-3 md:grid-cols-9 gap-2 max-w-[720px] mx-auto">
          {allAges.map((a) => (
            <button
              key={a.age}
              onClick={() => setClaimAge(a.age)}
              className={`rounded-lg p-2 md:p-3 transition-all font-sans cursor-pointer ${
                a.age === claimAge
                  ? 'bg-[#1d7682] text-white ring-2 ring-[#1d7682]/50 scale-105'
                  : 'bg-white/10 text-white/60 hover:bg-white/20'
              }`}
            >
              <div className="text-[14px] font-bold">{a.age}</div>
              <div className="text-[11px]">${fmt(a.monthly)}</div>
              <div
                className={`text-[10px] ${
                  a.age === claimAge
                    ? a.pct < 100
                      ? 'text-amber-200'
                      : a.pct > 100
                        ? 'text-emerald-200'
                        : 'text-white/70'
                    : a.pct < 100
                      ? 'text-amber-300/70'
                      : a.pct > 100
                        ? 'text-emerald-300/70'
                        : 'text-white/40'
                }`}
              >
                {a.pct === 100
                  ? 'FRA'
                  : `${a.pct > 100 ? '+' : ''}${a.pct - 100}%`}
              </div>
            </button>
          ))}
        </div>

        <p className="font-sans text-[11px] text-white/25 mt-4">
          Click any age or drag the slider, everything below updates
          instantly
        </p>
      </div>

      {/* ━━━━━━━━━━━━━━━━━ BREAK-EVEN ANALYSIS ━━━━━━━━━━━━━━━━━ */}
      <div className={card + ' mb-6'}>
        <h2 className="font-serif text-[24px] text-[#333] mb-2">
          Break-Even Analysis
        </h2>
        <p className="font-sans text-[14px] text-[#333]/60 mb-5">
          Claiming later means bigger checks but fewer years of payments.
          When does the bigger check catch up?
        </p>

        {claimAge === 62 ? (
          <div className="bg-[#F7F4EE] rounded-lg p-5">
            <p className="font-sans text-[15px] text-[#333]/70">
              You&rsquo;ve selected the earliest age. Move the slider to
              see what waiting could do, even a few years can make a big
              difference.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-[#F7F4EE] rounded-lg p-5">
              <p className="font-sans text-[15px] text-[#333] font-semibold mb-2">
                Claiming at 62 (${fmt(allAges[0].monthly)}/mo) vs.{' '}
                {claimAge} (${fmt(monthly)}/mo)
              </p>

              <div className="space-y-3 font-sans text-[14px] text-[#333]/70">
                <p>
                  <span className="text-[#333] font-medium">
                    Head start at 62:
                  </span>{' '}
                  You&rsquo;d collect ${fmt(headStart)} in checks before
                  age {claimAge} even starts.
                </p>

                <p>
                  <span className="text-[#333] font-medium">
                    Monthly difference:
                  </span>{' '}
                  Waiting adds $
                  {fmt(monthly - allAges[0].monthly)}/month. That&rsquo;s
                  ${fmt((monthly - allAges[0].monthly) * 12)}/year more,
                  every year for the rest of your life.
                </p>

                {breakEven && (
                  <p className="text-[#1d7682] font-semibold text-[15px]">
                    Break-even age: {breakEven}. After that, every year
                    puts more money in your pocket from waiting.
                  </p>
                )}

                {lifeAdvantage !== 0 && (
                  <p>
                    <span className="text-[#333] font-medium">
                      By age {lifeExpectancy}:
                    </span>{' '}
                    {lifeAdvantage > 0 ? (
                      <>
                        Waiting until {claimAge} earns you{' '}
                        <strong className="text-emerald-600">
                          ${fmt(lifeAdvantage)} more
                        </strong>{' '}
                        than claiming at 62.
                      </>
                    ) : (
                      <>
                        Claiming at 62 earns you{' '}
                        <strong className="text-amber-600">
                          ${fmt(Math.abs(lifeAdvantage))} more
                        </strong>{' '}
                        than waiting until {claimAge}.
                      </>
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ━━━━━━━━━━━━━━━━━ LIFETIME COMPARISON ━━━━━━━━━━━━━━━━━ */}
      <div className={card + ' mb-6'}>
        <h2 className="font-serif text-[24px] text-[#333] mb-2">
          Total Lifetime Benefits
        </h2>
        <p className="font-sans text-[14px] text-[#333]/60 mb-6">
          How much you&rsquo;d collect in total, comparing three claiming
          ages with {(cola * 100).toFixed(1)}% annual cost-of-living
          increases.
        </p>

        <div className="space-y-6">
          {lifetime.map((row) => {
            const maxVal = Math.max(...row.rows.map((r) => r.cum))
            return (
              <div key={row.target}>
                <p className="font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-[#333]/50 mb-2">
                  By Age {row.target}
                </p>
                <div className="space-y-2">
                  {row.rows.map((r) => (
                    <div
                      key={r.age}
                      className="flex items-center gap-3"
                    >
                      <span
                        className={`font-sans text-[13px] w-[72px] text-right shrink-0 ${
                          r.age === claimAge
                            ? 'font-bold text-[#1d7682]'
                            : 'text-[#333]/60'
                        }`}
                      >
                        Claim {r.age}
                      </span>
                      <div className="flex-1 h-[28px] bg-[#F0F0F0] rounded-md overflow-hidden relative">
                        <div
                          className={`h-full rounded-md transition-all duration-300 ${
                            r.isBest
                              ? 'bg-[#1d7682]'
                              : 'bg-[#1d7682]/30'
                          }`}
                          style={{
                            width: `${maxVal > 0 ? (r.cum / maxVal) * 100 : 0}%`,
                          }}
                        />
                        <span
                          className={`absolute right-2 top-1/2 -translate-y-1/2 font-sans text-[11px] font-semibold ${
                            r.isBest ? 'text-white' : 'text-[#333]/70'
                          }`}
                        >
                          ${fmt(r.cum)}
                          {r.isBest && ' ✓'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 bg-[#1d7682]/5 rounded-lg p-4">
          <p className="font-sans text-[13px] text-[#333]/70">
            <strong>Key takeaway:</strong> Claiming early wins if you
            don&rsquo;t live long. Waiting wins if you do. Most people
            underestimate how long they&rsquo;ll live. The average
            65-year-old today lives to{' '}
            {filing === 'mfj' ? '87 (women) or 84 (men)' : '85'}.
          </p>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━ MONEY'S WORTH ━━━━━━━━━━━━━━━━━ */}
      <div className={card + ' mb-6'}>
        <h2 className="font-serif text-[24px] text-[#333] mb-2">
          Will You Get Your Money&rsquo;s Worth?
        </h2>
        <p className="font-sans text-[14px] text-[#333]/60 mb-6">
          You&rsquo;ve been paying Social Security taxes your entire
          career. Think of it like paying premiums on a guaranteed income
          stream: here&rsquo;s when you get it all back.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#F7F4EE] rounded-lg p-4 text-center">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#333]/50 mb-1">
              SS Taxes You&rsquo;ve Paid
            </p>
            <p className="font-serif text-[28px] font-light text-[#333]">
              ~${fmt(taxes)}
            </p>
            <p className="font-sans text-[11px] text-[#333]/50">
              estimated · {SS_TAX_RATE * 100}% of earnings × 35 years
            </p>
          </div>

          <div className="bg-[#F7F4EE] rounded-lg p-4 text-center">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#333]/50 mb-1">
              You Recoup It By
            </p>
            <p className="font-serif text-[28px] font-light text-[#1d7682]">
              Age {recoupAge}
            </p>
            <p className="font-sans text-[11px] text-[#333]/50">
              ~{Math.ceil(recoupYrs)} years of collecting
            </p>
          </div>

          <div className="bg-[#F7F4EE] rounded-lg p-4 text-center">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#333]/50 mb-1">
              Total by Age {lifeExpectancy}
            </p>
            <p className="font-serif text-[28px] font-light text-emerald-600">
              ${fmt(lifetimeCollected)}
            </p>
            <p className="font-sans text-[11px] text-[#333]/50">
              {returnPct}% return on what you paid in
            </p>
          </div>
        </div>

        <div className="bg-[#1d7682]/5 rounded-lg p-4">
          <p className="font-sans text-[13px] text-[#333]/70">
            <strong>Think of it like a pension choice:</strong> If you
            took your Social Security taxes as a lump sum (~$
            {fmt(taxes)}) and tried to create ${fmt(monthly)}/month of
            income on your own, that money would run out in about{' '}
            {Math.ceil(recoupYrs)} years. Social Security keeps paying
            for the rest of your life, and it grows with inflation.
            Every check after age {recoupAge} is money you never would
            have had.
          </p>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━ SPOUSAL ANALYSIS ━━━━━━━━━━━━━━━━━ */}
      {showSpouse && spousal && (
        <div className={card + ' mb-6'}>
          <h2 className="font-serif text-[24px] text-[#333] mb-4">
            Your Household Social Security
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-[#F7F4EE] rounded-lg p-4 text-center">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#333]/50 mb-1">
                Your Benefit
              </p>
              <p className="font-serif text-[24px] text-[#333]">
                ${fmt(monthly)}/mo
              </p>
              <p className="font-sans text-[11px] text-[#333]/40">
                at age {claimAge}
              </p>
            </div>
            <div className="bg-[#F7F4EE] rounded-lg p-4 text-center">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#333]/50 mb-1">
                Spouse Benefit
              </p>
              <p className="font-serif text-[24px] text-[#333]">
                ${fmt(spousal.sm)}/mo
              </p>
              {spousal.topUp > 0 && (
                <p className="font-sans text-[11px] text-[#1d7682]">
                  +${fmt(spousal.topUp)} spousal top-up
                </p>
              )}
            </div>
            <div className="bg-gradient-to-br from-[#333] to-[#1a1a1a] rounded-lg p-4 text-center">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-white/50 mb-1">
                Combined
              </p>
              <p className="font-serif text-[24px] text-white">
                ${fmt(spousal.combined)}/mo
              </p>
              <p className="font-sans text-[11px] text-white/40">
                ${fmt(spousal.combinedAnnual)}/year
              </p>
            </div>
          </div>

          {spousal.topUp > 0 && (
            <div className="bg-[#1d7682]/5 rounded-lg p-4 mb-4">
              <p className="font-sans text-[13px] text-[#333]/70">
                <strong>Spousal benefit applies:</strong> Your
                spouse&rsquo;s own benefit ($
                {fmt(spousePIA)}/mo at FRA) is less than half of yours ($
                {fmt(Math.round(pia * 0.5))}/mo), so they receive a
                spousal top-up of ${fmt(spousal.topUp)}/mo.
              </p>
            </div>
          )}

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="font-sans text-[13px] text-amber-800">
              <strong>Survivor benefit:</strong> When one spouse passes,
              the survivor keeps the <em>higher</em> of the two checks.
              If you&rsquo;re the higher earner, delaying your claim also
              protects your spouse with a bigger survivor benefit for
              life.
            </p>
          </div>
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━ STILL WORKING? ━━━━━━━━━━━━━━━━━ */}
      <div className={card + ' mb-6'}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-serif text-[20px] text-[#333]">
            Still Working?
          </h2>
          <button
            onClick={() => setWorking(!working)}
            className={`px-4 py-2 rounded-full font-sans text-[12px] font-semibold border-2 transition-all ${
              working ? btnOn : btnOff
            }`}
          >
            {working ? 'Yes ✓' : 'No'}
          </button>
        </div>

        {working ? (
          <div>
            <div className="mb-4">
              <label className={label}>Annual Earnings</label>
              <input
                type="text"
                className={inp}
                value={earnings ? `$${fmt(earnings)}` : ''}
                onChange={(e) => {
                  const v = parseInt(
                    e.target.value.replace(/[^0-9]/g, ''),
                  )
                  setEarnings(isNaN(v) ? 0 : v)
                }}
              />
            </div>

            {earnTest ? (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="font-sans text-[14px] text-amber-800 font-semibold mb-1">
                  Earnings Test Applies
                </p>
                <p className="font-sans text-[13px] text-amber-700 mb-2">
                  If you claim before full retirement age and earn more
                  than ${fmt(EARN_LIMIT)}/year, Social Security
                  withholds $1 for every $2 above that limit. At your
                  income, that&rsquo;s{' '}
                  <strong>${fmt(earnTest.held)}/year withheld</strong>{' '}
                  (~{earnTest.monthsLost} months of checks).
                </p>
                <p className="font-sans text-[13px] text-amber-700">
                  <strong>But this isn&rsquo;t a penalty.</strong> After
                  full retirement age, your benefit is recalculated to
                  credit you for every month that was withheld. Think of
                  it as a deferral, not a loss.
                </p>
              </div>
            ) : claimAge >= fra.y ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="font-sans text-[13px] text-emerald-700">
                  <strong>No earnings test.</strong> At full retirement
                  age or later, you can earn any amount without your
                  benefits being reduced.
                </p>
              </div>
            ) : null}

            <div className="bg-[#1d7682]/5 rounded-lg p-4 mt-4">
              <p className="font-sans text-[13px] text-[#333]/70">
                <strong>Working longer can increase your benefit.</strong>{' '}
                Each year you work, SSA recalculates your benefit using
                your highest 35 years. If this year&rsquo;s earnings
                replace a lower year, your monthly check goes up, even
                if you&rsquo;re already collecting.
              </p>
            </div>
          </div>
        ) : (
          <p className="font-sans text-[12px] text-[#333]/40">
            If you plan to work while collecting before full retirement
            age, toggle this on to see how it affects your checks.
          </p>
        )}
      </div>

      {/* ━━━━━━━━━━━━━━━━━ IRMAA WARNING ━━━━━━━━━━━━━━━━━ */}
      {irmaaChk.surcharge > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
          <p className="font-sans text-[14px] text-amber-800 font-semibold mb-1">
            Medicare IRMAA Surcharge Warning
          </p>
          <p className="font-sans text-[13px] text-amber-700 mb-2">
            Your combined income (${fmt(irmaaChk.income)}/year) exceeds
            the IRMAA threshold. Medicare will charge an extra{' '}
            <strong>~${fmt(irmaaChk.surcharge)}/year</strong> in Part B
            and Part D premiums.
          </p>
          <p className="font-sans text-[13px] text-amber-700">
            IRMAA uses your income from <strong>2 years ago</strong>, so
            income in {YEAR} affects your {YEAR + 2} premiums. Strategies
            like Qualified Charitable Distributions (QCDs), Roth
            conversions, and timing of retirement account withdrawals can
            help manage this.
          </p>
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━ MYTHS ━━━━━━━━━━━━━━━━━ */}
      <div className={card + ' mb-6'}>
        <h2 className="font-serif text-[24px] text-[#333] mb-2">
          6 Things Most People Get Wrong About Social Security
        </h2>
        <p className="font-sans text-[14px] text-[#333]/60 mb-6">
          These misconceptions cost retirees thousands of dollars.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {MYTHS.map((m, i) => (
            <div key={i} className="bg-[#F7F4EE] rounded-lg p-5">
              <p className="font-sans text-[11px] font-bold text-red-500 uppercase tracking-wider mb-1">
                Myth
              </p>
              <p className="font-sans text-[14px] font-semibold text-[#333] mb-3">
                &ldquo;{m.myth}&rdquo;
              </p>
              <p className="font-sans text-[11px] font-bold text-[#1d7682] uppercase tracking-wider mb-1">
                Reality
              </p>
              <p className="font-sans text-[13px] text-[#333]/70 leading-relaxed">
                {m.reality}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━ DISCLOSURE ━━━━━━━━━━━━━━━━━ */}
      <CalculatorDisclaimer
        toolName="Social Security"
        variant="default"
        resultSummary={`Claiming at ${claimAge} pencils to about $${fmt(monthly)}/month${breakEven ? `, with a break-even age near ${Math.round(breakEven)}` : ''}. The right age depends on your other income, your tax picture, and how long you and your spouse expect to live.`}
        ctaLabel="Decide the claiming age"
        additionalContext={`Social Security benefit calculations use SSA formulas and are approximations, and your actual benefit may differ based on your complete earnings history. Lifetime projections assume ${(cola * 100).toFixed(1)}% annual cost-of-living adjustments. IRMAA thresholds and earnings test limits are 2026 estimates. For your official benefit estimate, visit ssa.gov/myaccount.`}
      />
    </div>
  )
}
