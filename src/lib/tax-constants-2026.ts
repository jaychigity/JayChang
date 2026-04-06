/**
 * ┌─────────────────────────────────────────────────────────┐
 * │  ANNUAL TAX CONSTANTS — UPDATE THIS FILE EACH JANUARY   │
 * │                                                         │
 * │  All calculators across the site import from here.      │
 * │  When the IRS releases new numbers (typically Oct/Nov   │
 * │  for the following tax year), update the values below   │
 * │  and every calculator will reflect the changes.         │
 * │                                                         │
 * │  Current Tax Year: 2026                                 │
 * │  Last Updated: April 2026                               │
 * │  Sources: IRS Rev. Proc. 2025-32, IRS Notice 2025-67,  │
 * │           SSA COLA 2026, IRS Segment Rates Feb 2026     │
 * └─────────────────────────────────────────────────────────┘
 */

export const TAX_YEAR = 2026;

// ── Federal Income Tax Brackets ─────────────────────────────────────
//    Source: IRS Rev. Proc. 2025-32
//    Format: { rate, upTo } where upTo is the top of that bracket

export const FEDERAL_BRACKETS_SINGLE = [
  { rate: 0.10, upTo: 12_400 },
  { rate: 0.12, upTo: 50_400 },
  { rate: 0.22, upTo: 105_700 },
  { rate: 0.24, upTo: 201_775 },
  { rate: 0.32, upTo: 256_225 },
  { rate: 0.35, upTo: 640_600 },
  { rate: 0.37, upTo: Infinity },
];

export const FEDERAL_BRACKETS_MFJ = [
  { rate: 0.10, upTo: 24_800 },
  { rate: 0.12, upTo: 100_800 },
  { rate: 0.22, upTo: 211_400 },
  { rate: 0.24, upTo: 403_550 },
  { rate: 0.32, upTo: 512_450 },
  { rate: 0.35, upTo: 768_700 },
  { rate: 0.37, upTo: Infinity },
];

// ── Standard Deduction ──────────────────────────────────────────────

export const STANDARD_DEDUCTION_SINGLE = 16_100;
export const STANDARD_DEDUCTION_MFJ = 32_200;
export const STANDARD_DEDUCTION_HOH = 24_150;

// ── 401(k) / Retirement Plan Limits ────────────────────────────────
//    Source: IRS Notice 2025-67

export const LIMIT_401K_EMPLOYEE_DEFERRAL = 24_500;
export const LIMIT_401K_CATCHUP_50 = 8_000;          // Standard catch-up (ages 50+)
export const LIMIT_401K_SUPER_CATCHUP_60_63 = 11_250; // SECURE 2.0 enhanced (ages 60-63)
export const LIMIT_415C_ANNUAL_ADDITIONS = 72_000;     // Total annual additions limit
export const LIMIT_IRA = 7_500;

// ── Social Security & Medicare ──────────────────────────────────────
//    Source: SSA COLA 2026 Announcement

export const SS_WAGE_BASE = 184_500;
export const SS_TAX_RATE = 0.062;
export const MEDICARE_TAX_RATE = 0.0145;
export const ADDITIONAL_MEDICARE_RATE = 0.009;
export const ADDITIONAL_MEDICARE_THRESHOLD_SINGLE = 200_000;
export const ADDITIONAL_MEDICARE_THRESHOLD_MFJ = 250_000;

// ── IRS Pension Segment Rates ───────────────────────────────────────
//    Used for lump-sum pension conversions (AT&T calculator)
//    Source: IRS monthly segment rate tables

export const SEGMENT_RATE_1 = 0.0396;  // 1–5 years
export const SEGMENT_RATE_2 = 0.0515;  // 6–20 years
export const SEGMENT_RATE_3 = 0.0611;  // 21+ years
export const SEGMENT_RATES_DATE = 'February 2026';

// ── State Tax Rates ─────────────────────────────────────────────────
//    Arizona: flat rate with LTCG deduction
//    Nevada: no state income tax

export const AZ_FLAT_TAX_RATE = 0.025;
export const AZ_LTCG_DEDUCTION = 0.25;  // 25% deduction on long-term capital gains
export const NV_TAX_RATE = 0;

// California brackets are complex (10 tiers) and remain in the
// CA/NV tax savings calculator for readability.

// ── Capital Gains ───────────────────────────────────────────────────

export const LTCG_RATE_0_THRESHOLD_SINGLE = 48_350;
export const LTCG_RATE_0_THRESHOLD_MFJ = 96_700;
export const LTCG_RATE_15 = 0.15;
export const LTCG_RATE_20 = 0.20;
export const NIIT_RATE = 0.038;  // Net Investment Income Tax (3.8%)

// ── AMT (Alternative Minimum Tax) ───────────────────────────────────

export const AMT_RATE = 0.26;

// ── Equity Compensation Defaults ────────────────────────────────────
//    Used by the equity compensation calculator

export const ESPP_DISCOUNT = 0.15;           // Typical ESPP discount
export const STATE_TAX_ESTIMATE = 0.05;      // Default blended state rate

// ── Interest / Treasury Rates ───────────────────────────────────────
//    Used by AT&T pension calculator

export const INTEREST_CREDIT_MINIMUM = 0.04;  // Pension plan minimum interest credit
export const BCB2_INTEREST_RATE = 0.045;       // BCB2 formula interest rate
export const CURRENT_30YR_TREASURY = 0.0454;   // 30-year Treasury yield

// ── Helper Functions ────────────────────────────────────────────────

/**
 * Compute total federal income tax for a given taxable income.
 * Works with the bracket arrays above (rate + upTo format).
 */
export function computeFederalTax(
  taxableIncome: number,
  filingStatus: 'single' | 'mfj',
): number {
  if (taxableIncome <= 0) return 0;
  const brackets =
    filingStatus === 'single' ? FEDERAL_BRACKETS_SINGLE : FEDERAL_BRACKETS_MFJ;
  let tax = 0;
  let prev = 0;
  for (const { rate, upTo } of brackets) {
    if (taxableIncome <= prev) break;
    const taxable = Math.min(taxableIncome, upTo) - prev;
    tax += taxable * rate;
    prev = upTo;
  }
  return tax;
}

/**
 * Return the marginal federal tax rate for a given taxable income.
 */
export function getMarginalRate(
  taxableIncome: number,
  filingStatus: 'single' | 'mfj',
): number {
  if (taxableIncome <= 0) return 0.10;
  const brackets =
    filingStatus === 'single' ? FEDERAL_BRACKETS_SINGLE : FEDERAL_BRACKETS_MFJ;
  for (const { rate, upTo } of brackets) {
    if (taxableIncome <= upTo) return rate;
  }
  return 0.37;
}

/**
 * Return the long-term capital gains rate based on the federal marginal rate.
 */
export function getLTCGRate(federalRate: number): number {
  if (federalRate <= 0.12) return 0;
  if (federalRate <= 0.35) return 0.15;
  return 0.20;
}
