/**
 * Planner Store — shared session state across calculators
 *
 * Persists within the browser tab session (sessionStorage).
 * Cleared when the tab closes. No sign-up, no server calls.
 *
 * Canonical field names used across all tools:
 *   - Ages: currentAge, retirementAge, lifeExpectancy
 *   - Portfolio: portfolioValue, monthlyContrib, monthlyWithdrawal
 *   - Retirement income: ssMonthly, ssClaimAge, pensionMonthly, pensionStartAge
 *   - Expenses: annualExpenses, annualSalary, inflationRate, effectiveTaxRate
 */

const STORAGE_KEY = 'plannerProfile'

export interface PlannerProfile {
  currentAge?: number
  retirementAge?: number
  lifeExpectancy?: number
  portfolioValue?: number
  monthlyContrib?: number
  monthlyWithdrawal?: number
  ssMonthly?: number
  ssClaimAge?: number
  pensionMonthly?: number
  pensionStartAge?: number
  annualExpenses?: number
  annualSalary?: number
  inflationRate?: number
  effectiveTaxRate?: number
}

export function loadProfile(): PlannerProfile {
  if (typeof window === 'undefined') return {}
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as PlannerProfile) : {}
  } catch {
    return {}
  }
}

export function saveProfile(updates: Partial<PlannerProfile>): void {
  if (typeof window === 'undefined') return
  try {
    const current = loadProfile()
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...current, ...updates }))
  } catch {
    // sessionStorage blocked (private browsing, storage full) — fail silently
  }
}

/** Returns true if the store has any data from a previous tool visit */
export function hasProfile(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const p = JSON.parse(raw) as PlannerProfile
    return Object.keys(p).length > 0
  } catch {
    return false
  }
}
