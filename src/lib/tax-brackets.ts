/**
 * Backward-compatible re-exports from the centralized tax constants.
 *
 * All tax data now lives in `tax-constants-2026.ts`.  This file
 * converts the centralised bracket format ({ rate, upTo }) into the
 * legacy format ({ floor, ceiling, rate }) so that existing consumers
 * continue to work without changes.
 */

import {
  TAX_YEAR as _TAX_YEAR,
  FEDERAL_BRACKETS_SINGLE,
  FEDERAL_BRACKETS_MFJ,
  computeFederalTax,
  getMarginalRate,
} from './tax-constants-2026'

// ── Re-export TAX_YEAR as-is ───────────────────────────────────────

export const TAX_YEAR = _TAX_YEAR

// ── Legacy bracket shape ───────────────────────────────────────────

export interface Bracket {
  floor: number
  ceiling: number
  rate: number
}

/** Convert the centralised { rate, upTo } format to { floor, ceiling, rate }. */
function toLegacy(
  src: ReadonlyArray<{ rate: number; upTo: number }>,
): Bracket[] {
  let prev = 0
  return src.map(({ rate, upTo }) => {
    const b: Bracket = { floor: prev, ceiling: upTo, rate }
    prev = upTo
    return b
  })
}

export const BRACKETS_SINGLE: Bracket[] = toLegacy(FEDERAL_BRACKETS_SINGLE)
export const BRACKETS_MFJ: Bracket[] = toLegacy(FEDERAL_BRACKETS_MFJ)

// ── Helper functions (delegate to centralised implementations) ─────

export function getBrackets(filing: string): Bracket[] {
  return filing === 'single' ? BRACKETS_SINGLE : BRACKETS_MFJ
}

export function computeTax(income: number, filing: string): number {
  if (income <= 0) return 0
  return computeFederalTax(income, filing === 'single' ? 'single' : 'mfj')
}

export function getMarginalBracket(income: number, filing: string): number {
  if (income <= 0) return 10
  return getMarginalRate(income, filing === 'single' ? 'single' : 'mfj') * 100
}
