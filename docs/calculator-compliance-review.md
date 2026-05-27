# AdvisorJay.com Calculator Compliance Review
## Complete Inventory of Formulas, Constants, and Computation Logic
**Prepared:** May 27, 2026
**Tax Year:** 2026 (constants sourced from `src/lib/tax-constants-2026.ts`)
**Site:** advisorjay.com (Jay Chang, VP Wealth Advisor, Farther Finance Advisors LLC)

---

## How to use this document

This document lists every interactive calculator on advisorjay.com with its exact inputs, assumptions, formulas, and outputs. Each calculator section is self-contained. AI reviewers can verify any formula against the stated inputs and constants.

All calculators display a standard disclaimer component stating results are illustrative, not financial advice, and not a guarantee of future results.

---

## Centralized tax constants

All tax-related calculators import from a single constants file (`src/lib/tax-constants-2026.ts`). Changes to this file propagate site-wide.

### Federal income tax brackets (Single filers)
| Rate | Bracket ceiling |
|------|----------------|
| 10% | $12,400 |
| 12% | $50,400 |
| 22% | $105,700 |
| 24% | $201,775 |
| 32% | $256,225 |
| 35% | $640,600 |
| 37% | No limit |

### Federal income tax brackets (Married Filing Jointly)
| Rate | Bracket ceiling |
|------|----------------|
| 10% | $24,800 |
| 12% | $100,800 |
| 22% | $211,400 |
| 24% | $403,550 |
| 32% | $512,450 |
| 35% | $768,700 |
| 37% | No limit |

### Standard deductions
- Single: $16,100
- MFJ: $32,200
- Head of Household: $24,150

### 401(k) and retirement plan limits
- Employee deferral limit: $24,500
- Catch-up contribution (age 50+): $8,000
- Super catch-up (age 60-63, SECURE 2.0): $11,250
- 415(c) total annual additions: $72,000
- IRA contribution limit: $7,500

### Social Security and Medicare
- SS wage base: $184,500
- SS employee tax rate: 6.2%
- Medicare tax rate: 1.45%
- Additional Medicare (above threshold): 0.9%
- Additional Medicare threshold (single): $200,000
- Additional Medicare threshold (MFJ): $250,000

### IRS pension segment rates (February 2026)
- Segment 1 (years 1-5): 3.96%
- Segment 2 (years 6-20): 5.15%
- Segment 3 (years 21+): 6.11%

### Capital gains rates
- 0% threshold (single): $48,350
- 0% threshold (MFJ): $96,700
- Standard LTCG rate: 15%
- High-income LTCG rate: 20%
- Net Investment Income Tax (NIIT): 3.8%

### State tax rates (used in multi-state calculators)
- Arizona: 2.5% flat (with 25% LTCG deduction before applying rate)
- Nevada: 0%

### Helper functions used across calculators
- `computeFederalTax(taxableIncome, filingStatus)`: Iterates through bracket table, sums tax at each tier
- `getMarginalRate(taxableIncome, filingStatus)`: Returns the rate of the bracket containing the income
- `getLTCGRate(federalRate)`: If marginal rate <= 12% returns 0%; if <= 35% returns 15%; else returns 20%

---

## Calculator 1: 401(k) Withholding Calculator

**URL:** /tools/401k-withholding-calculator
**Purpose:** Shows how much an employee can contribute to their 401(k), the tax savings, and a paycheck comparison at current vs maximum contribution levels.
**Projects investment returns:** No. Tax math only.

### Inputs
| Field | Type | Range | Default |
|-------|------|-------|---------|
| Annual salary | Slider | $30,000-$1,000,000 | $150,000 |
| Age | Slider | 20-75 | 35 |
| Filing status | Toggle | Single / MFJ | MFJ |
| Pay frequency | Select | Monthly/Semi-monthly/Biweekly/Weekly | Biweekly (26) |
| Employer match rate | Slider | 0-10% | Varies by company |
| Match cap | Slider | 0-15% | Varies by company |
| Current contribution % | Slider | 0-50% | 6% |
| Other pre-tax deductions | Slider | $0-$1,000/paycheck | $0 |
| Mid-year mode | Toggle | On/Off | Off |
| YTD contributions (mid-year) | Number | $0-$72,000 | $0 |
| Paychecks remaining (mid-year) | Number | 1-52 | 12 |

### Company-specific match configurations
- PG&E post-2013: 75% match on first 8% (effective 6%)
- PG&E pre-2013 management: 75% match on first 6% (effective 4.5%)
- PG&E pre-2013 union: 60% match on first 6% (effective 3.6%)
- AT&T management: 80% match on first 6% (effective 4.8%)
- AT&T union: 80% match on first 6% (effective 4.8%)

### Formulas
```
maxDeferral = $24,500 + catchUp
  where catchUp = $8,000 if age 50-59 or 64+
                 = $11,250 if age 60-63
                 = $0 otherwise

grossPerCheck = salary / payFrequency
employerMatch = min(salary * matchRate, salary * matchCap) * matchPct
spilloverRoom = max($72,000 - maxDeferral - employerMatch, 0)
taxSavings = maxDeferral * marginalRate

Paycheck comparison:
  netPay = grossPerCheck - contribution - preTaxDeductions - federalTax(adjustedIncome)
```

### Outputs
- Maximum deferral amount with catch-up breakdown
- Current vs max contribution paycheck comparison (side by side)
- Employer match amount
- Total annual additions (employee + employer)
- Tax savings at maximum contribution
- 415(c) capacity remaining

---

## Calculator 2: 401(k) Projection Calculator

**URL:** /tools/401k-projection
**Purpose:** Projects 401(k) balance growth from current age to retirement with employer match and compound growth.
**Projects investment returns:** Yes. Uses assumed annual return rate.

### Inputs
| Field | Type | Default |
|-------|------|---------|
| Current balance | Currency | $75,000 |
| Annual salary | Currency | $120,000 |
| Salary growth rate | Percentage | 2% |
| Contribution percentage | Percentage | 6% |
| Match rate | Select (presets) | Varies |
| Match cap | Percentage | Varies |
| Current age | Number | 40 |
| Retirement age | Number | 65 |
| Annual return | Percentage | 7% |
| Include catch-up contributions | Toggle | Off |

### Formulas
```
For each year from current age to retirement age:
  contribution = min(salary * contributionPct, irsLimit)
  match = min(contribution, salary * matchCap) * matchRate
  balance = (balance + contribution + match) * (1 + annualReturn)
  salary = salary * (1 + salaryGrowth)

Safe monthly withdrawal = finalBalance * 0.04 / 12
```

### Key assumptions
- Annual return: user-selected, default 7%
- Salary grows at user-selected rate
- IRS limits applied per age bracket (standard + catch-up + super catch-up)
- 4% safe withdrawal rate for retirement income estimate

### Outputs
- Projected balance at retirement
- Year-by-year growth table and chart
- Total contributions, total employer match, investment growth
- Safe monthly withdrawal amount
- Missed match cost (if under-contributing)

---

## Calculator 3: Roth Conversion Calculator

**URL:** /tools/roth-conversion-calculator
**Purpose:** Compares keeping funds in a traditional IRA vs converting to Roth, showing the net benefit or cost under the user's tax assumptions.
**Projects investment returns:** Yes. Uses assumed annual return rate.

### Inputs
| Field | Type | Range | Default |
|-------|------|-------|---------|
| Conversion amount | Slider | $10,000-$3,000,000 | $200,000 |
| Current taxable income | Slider | $0-$2,000,000 | $150,000 |
| Filing status | Toggle | Single / MFJ | MFJ |
| Expected retirement tax rate | Buttons | 10/12/22/24/32/35/37% | 22% |
| Years until withdrawal | Stepper | 1-40 | 15 |
| Expected annual return | Slider | 3%-12% | 7% |

### Constants
- Tax drag on taxable account: 15% of returns (assumes LTCG taxation)

### Formulas
```
Tax cost of conversion:
  taxCost = computeFederalTax(income + conversion) - computeFederalTax(income)
  effectiveRate = taxCost / conversion

Traditional scenario (no conversion):
  futureValue = conversion * (1 + returnRate)^years
  afterTaxValue = futureValue * (1 - retirementTaxRate)

Roth scenario (convert now):
  futureValueRoth = conversion * (1 + returnRate)^years
  afterTaxReturn = returnRate * (1 - 0.15)
  opportunityCost = taxCost * (1 + afterTaxReturn)^years
  netRoth = futureValueRoth - opportunityCost

Net benefit = netRoth - afterTaxTraditional

Break-even retirement tax rate (BETR):
  BETR = (taxCost * (1 + afterTaxReturn)^years) / (conversion * (1 + returnRate)^years)
```

### Outputs
- Net benefit or cost of conversion (dollar amount)
- Tax cost and effective conversion rate
- Current vs new marginal bracket
- Break-even retirement tax rate
- Year-by-year growth comparison chart
- Crossover year (when Roth surpasses Traditional)

---

## Calculator 4: Retirement Savings Assessment

**URL:** /tools/retirement-savings-calculator
**Purpose:** Scores retirement readiness (0-100) based on savings, income, and target spending. Captures lead info.
**Projects investment returns:** Yes. Assumes 7% annual growth.

### Inputs
| Field | Type |
|-------|------|
| Current age | Slider (25-80) |
| Annual household income | Dropdown ($100K-$5M+) |
| Total investable assets | Currency |
| Monthly retirement savings | Currency |
| Target retirement age | Slider (45-85) |
| Expected annual retirement spending | Currency |
| Estimated annual Social Security benefit | Currency |
| Business ownership | Yes/No |
| Pension eligibility | Yes/No/Unsure |
| Current advisor relationship | 4 options |

### Income range midpoints
| Range | Midpoint used |
|-------|--------------|
| $100K-$250K | $175,000 |
| $250K-$500K | $375,000 |
| $500K-$1M | $750,000 |
| $1M-$2.5M | $1,750,000 |
| $2.5M-$5M | $3,750,000 |
| $5M+ | $7,500,000 |

### Age-based savings benchmarks (salary multiples)
| Age | Expected multiple |
|-----|-------------------|
| 30 | 1x |
| 35 | 2x |
| 40 | 3x |
| 45 | 4x |
| 50 | 6x |
| 55 | 7x |
| 60 | 8x |
| 67 | 10x |

### Formulas
```
FV of current assets = currentSavings * 1.07^yearsToRetirement
FV of contributions = monthlyContrib * ((1.07/12 + 1)^months - 1) / (0.07/12)
Pension estimate (if eligible) = income * 0.15
Required nest egg = (annualSpending - SS - pension) / 0.04
Funded ratio = projectedAssets / requiredNestEgg
Advisor impact = projectedAssets * (1.015^years - 1)
```

### Scoring (0-100 points)
| Component | Max points |
|-----------|-----------|
| Savings rate | 20 |
| Benchmark comparison | 25 |
| Funded ratio | 35 |
| Time horizon | 10 |
| Bonus factors | 10 |

### Key assumptions
- Growth rate: 7% annually (fixed, not user-adjustable)
- Safe withdrawal rate: 4%
- Advisor alpha: 1.5% per year
- Pension estimate: 15% of income (if pension eligible)

### Outputs
- Readiness score (0-100) with tier classification
- Projected vs required nest egg
- Gap analysis (dollar shortfall and monthly savings needed)
- Advisor impact projection

---

## Calculator 5: Monte Carlo Retirement Simulator

**URL:** /tools/monte-carlo-simulator
**Purpose:** Runs 1,000 randomized simulations of portfolio performance to show probability of retirement success.
**Projects investment returns:** Yes. Uses randomized returns with user-specified mean and volatility.

### Inputs
| Field | Type | Default |
|-------|------|---------|
| Current age | Number | 45 |
| Retirement age | Number | 65 |
| Life expectancy | Number | 90 |
| Current balance | Currency | $500,000 |
| Monthly contribution | Currency | $2,000 |
| Monthly withdrawal (retirement) | Currency | $4,000 |
| Pre-retirement return | Percentage | 7% |
| Post-retirement return | Percentage | 5% |
| Volatility (std deviation) | Percentage | 15% |
| Number of simulations | Number | 1,000 |

### Formulas
```
Random return generation (Box-Muller transform):
  randomReturn = mean + stdDev * sqrt(-2 * ln(u)) * cos(2 * pi * v)
  where u, v are uniform random numbers in (0, 1]

Accumulation phase (per simulation, per year):
  balance = balance * (1 + randomReturn(preReturnRate, volatility)) + annualContribution

Distribution phase (per simulation, per year):
  balance = balance * (1 + randomReturn(postReturnRate, volatility)) - annualWithdrawal

Goal requirement (present value of annuity):
  goalRequired = monthlyWithdrawal * (1 - (1 + r)^(-n)) / r
  where r = postReturnRate/12, n = retirementMonths

Survival rate = simulations where balance > 0 at final year / total simulations
Confidence = (medianOutcome / goalRequired) * 100
```

### Outputs
- Probability of success (percentage)
- Confidence score and goal funding status
- Percentile fan chart (10th, 25th, 50th, 75th, 90th)
- Median, best case, worst case terminal values

---

## Calculator 6: Social Security Calculator

**URL:** /tools/social-security-calculator
**Purpose:** Estimates Social Security benefits at different claim ages, with spousal benefits, earnings test, and IRMAA analysis.
**Projects investment returns:** No. Benefit and tax calculations only.

### Inputs
| Field | Type | Default |
|-------|------|---------|
| Birth year | Number | 1962 |
| Monthly FRA benefit (PIA) | Currency | $2,800 |
| Claim age | Slider | 62-70, default 67 |
| Life expectancy | Slider | 70-100, default 85 |
| COLA rate | Slider | 0%-5%, default 2.5% |
| Filing status | Toggle | Single/MFJ |
| Spouse birth year | Number | 1964 |
| Spouse PIA | Currency | $1,200 |
| Spouse claim age | Slider | 62-70, default 67 |
| Working in retirement | Toggle | Off |
| Annual earnings | Currency | $50,000 |
| Other retirement income | Currency | $0 |

### Full Retirement Age by birth year
| Birth year | FRA |
|-----------|-----|
| <= 1937 | 65 |
| 1938-1954 | 66 |
| 1955 | 66 and 2 months |
| 1956 | 66 and 4 months |
| 1957 | 66 and 6 months |
| 1958 | 66 and 8 months |
| 1959 | 66 and 10 months |
| 1960+ | 67 |

### Benefit adjustment formulas
```
Claiming before FRA:
  First 36 months early: reduce by 5/9 of 1% per month (6.67% per year)
  Beyond 36 months: reduce by 5/12 of 1% per month (5% per year)
  Formula: if monthsEarly <= 36: factor = 1 - (months * 5/900)
           else: factor = 1 - 0.20 - ((months - 36) * 5/1200)

Claiming after FRA (delayed retirement credits):
  8% per year (2/3% per month), max 36 months delay (to age 70)
  Formula: factor = 1 + min(monthsLate, 36) * 2/300
```

### PIA estimation from income (when user doesn't know their PIA)
```
monthlyEarnings = min(annualIncome, $184,500) / 12
PIA bend points: BP1 = $1,245/month, BP2 = $7,510/month

if earnings <= BP1: PIA = earnings * 0.90
elif earnings <= BP2: PIA = $1,245 * 0.90 + (earnings - $1,245) * 0.32
else: PIA = $1,245 * 0.90 + ($7,510 - $1,245) * 0.32 + (earnings - $7,510) * 0.15
```

### Earnings test (before FRA)
```
Limit: $23,400/year
Excess = max(0, earnings - $23,400)
Withheld = excess / 2
```

### IRMAA surcharges (2026 estimates)
**Single filers:**
| Income ceiling | Annual surcharge |
|---------------|-----------------|
| $106,000 | $0 |
| $133,000 | $851 |
| $167,000 | $2,117 |
| $200,000 | $3,384 |
| $500,000 | $4,651 |
| Above $500,000 | $5,032 |

**MFJ filers:**
| Income ceiling | Annual surcharge |
|---------------|-----------------|
| $212,000 | $0 |
| $266,000 | $1,702 |
| $334,000 | $4,234 |
| $400,000 | $6,768 |
| $750,000 | $9,302 |
| Above $750,000 | $10,064 |

### Spousal benefit
```
halfOfWorkerPIA = workerPIA * 0.50
If spouse's own PIA < halfOfWorkerPIA:
  spousalTopUp = halfOfWorkerPIA - spouseOwnPIA
  (reduced if spouse claims before their FRA)
```

### Outputs
- Monthly and annual benefit at selected claim age
- Comparison cards for all claim ages 62-70
- Break-even age analysis
- Lifetime benefit comparison at ages 75/80/85/90/95
- Spousal benefit with top-up amount
- Earnings test impact
- IRMAA surcharge warning

---

## Calculator 7: RMD Calculator

**URL:** /tools/rmd-calculator
**Purpose:** Calculates Required Minimum Distributions from traditional IRAs, with tax impact and IRMAA analysis.
**Projects investment returns:** Yes. Grows account balance at user-specified rate between distributions.

### Inputs
| Field | Type |
|-------|------|
| Account balance | Currency |
| Birth year | Number |
| Spouse birth year (optional) | Number |
| Growth rate | Percentage |
| Filing status | Toggle |
| Other taxable income | Currency |

### SECURE 2.0 RMD start ages
| Birth year | RMD begins at |
|-----------|--------------|
| 1950 or earlier | 72 |
| 1951-1959 | 73 |
| 1960 or later | 75 |

### IRS Uniform Lifetime Table (Table III) - selected values
| Age | Divisor | Age | Divisor |
|-----|---------|-----|---------|
| 72 | 27.4 | 85 | 16.0 |
| 73 | 26.5 | 90 | 12.2 |
| 75 | 24.6 | 95 | 8.9 |
| 80 | 20.2 | 100 | 6.4 |

### Joint table approximation (spouse 10+ years younger)
```
adjustedFactor = uniformLifetimeFactor + (ageDifference - 10) * 0.8
```

### QCD limit
$108,000 (2026 estimate)

### Formulas
```
RMD = accountBalance / uniformLifetimeFactor
Incremental federal tax = computeFederalTax(otherIncome + RMD) - computeFederalTax(otherIncome)
End-of-year balance = (startBalance - RMD) * (1 + growthRate)
```

### Outputs
- Annual RMD amount
- 10-year RMD projection schedule
- Tax impact per year (incremental federal tax)
- IRMAA surcharge warning if RMD pushes income above thresholds
- Account depletion timeline

---

## Calculator 8: Inherited IRA Calculator

**URL:** /tools/inherited-ira-calculator
**Purpose:** Models distribution strategies for inherited IRAs under the SECURE Act 10-year rule and stretch provisions.
**Projects investment returns:** Yes. Grows remaining balance at user-specified rate.

### Inputs
| Field | Type |
|-------|------|
| Inherited IRA balance | Currency |
| Beneficiary type | Select (spouse/minor/disabled/close-in-age/non-EDB) |
| Decedent birth year | Number |
| Beneficiary age | Number |
| Growth rate | Percentage (default 6%) |
| Other taxable income | Currency |
| Filing status | Toggle |
| State tax rate | Select |
| Distribution strategy | Select (even/front-load/back-load/RMD-only) |

### Beneficiary rules
| Type | Distribution rule |
|------|------------------|
| Spouse | Stretch RMDs using Single Life Table |
| Minor child | Stretch until age 21, then 10-year rule |
| Disabled/chronically ill | Stretch RMDs |
| Close-in-age (within 10 years) | Stretch RMDs |
| Non-eligible designated beneficiary | 10-year rule (SECURE Act) |

### IRS Single Life Expectancy Table - selected values
| Age | Factor | Age | Factor |
|-----|--------|-----|--------|
| 20 | 63.0 | 60 | 25.2 |
| 30 | 53.3 | 70 | 17.0 |
| 40 | 43.6 | 80 | 10.2 |
| 50 | 34.2 | 90 | 5.5 |

### State tax rate presets
| Label | Rate |
|-------|------|
| None | 0% |
| Arizona | 2.5% |
| California | 9.3% |
| Nevada | 0% |
| Low state | 3% |
| Mid state | 5% |
| High state | 8% |

### Formulas
```
RMD (stretch beneficiaries) = balance / lifeExpectancyFactor
Incremental federal tax = computeFederalTax(otherIncome + withdrawal) - computeFederalTax(otherIncome)
State tax = withdrawal * stateRate
End-of-year balance = (startBalance - withdrawal) * (1 + growthRate)
```

### Outputs
- Year-by-year distribution schedule with taxes
- Total distributions, total taxes, effective tax rate
- Strategy comparison across all four distribution methods

---

## Calculator 9: CA/NV Tax Savings Calculator

**URL:** /tools/ca-nv-tax-savings
**Purpose:** Compares 5-year tax burden in California vs Arizona vs Nevada for relocation planning.
**Projects investment returns:** No. Tax math only.

### Inputs
| Field | Type | Range |
|-------|------|-------|
| W-2 income | Slider | $0-$3,000,000 |
| Long-term capital gains | Slider | $0-$2,000,000 |
| RSU/NQSO income | Slider | $0-$2,000,000 |
| Real estate gain | Slider | $0-$5,000,000 |
| RE sale year | Select | Year 1-5 |
| Filing status | Toggle | Single/MFJ |

### California tax brackets (Single)
| Rate | Bracket ceiling |
|------|----------------|
| 1% | $10,412 |
| 2% | $24,684 |
| 4% | $38,959 |
| 6% | $54,081 |
| 8% | $68,350 |
| 9.3% | $349,137 |
| 10.3% | $418,961 |
| 11.3% | $698,271 |
| 12.3% | $1,000,000 |
| 13.3% | No limit |

### California tax brackets (MFJ)
| Rate | Bracket ceiling |
|------|----------------|
| 1% | $20,824 |
| 2% | $49,368 |
| 4% | $77,918 |
| 6% | $108,162 |
| 8% | $136,700 |
| 9.3% | $698,274 |
| 10.3% | $837,922 |
| 11.3% | $1,396,542 |
| 12.3% | $2,000,000 |
| 13.3% | No limit |

### Formulas
```
CA tax = progressive brackets applied to (W2 + capGains + RSU)
AZ tax = (W2 + capGains * 0.75 + RSU) * 0.025
  (Arizona provides 25% LTCG deduction before applying 2.5% flat rate)
NV tax = $0

5-year projection: one-time RE gain added in the user-selected year
Federal tax: computeFederalTax() applied uniformly across all states
Total savings = CA total tax burden - AZ or NV total tax burden (over 5 years)
```

### Outputs
- Year-by-year CA vs AZ vs NV tax comparison
- 5-year cumulative savings
- Federal, state, and total tax per year

---

## Calculator 10: Cash Flow Planner

**URL:** /tools/cash-flow-planner
**Purpose:** Year-by-year income, expense, and portfolio projection from working years through retirement.
**Projects investment returns:** Yes. Grows portfolio at user-specified rate.

### Inputs (with defaults)
| Field | Default |
|-------|---------|
| Current age | 45 |
| Retirement age | 65 |
| Life expectancy | 90 |
| Annual salary | $180,000 |
| Salary growth | 3% |
| Savings rate | 15% |
| Portfolio balance | $800,000 |
| Portfolio growth rate | 6% |
| Annual withdrawal (retirement) | $72,000 |
| Social Security (monthly, starting age) | $2,800 at age 67 |
| Pension (annual) | $0 |
| Annual expenses | $90,000 |
| Inflation rate | 2.5% |
| Tax rate | 22% |

### Formulas
```
Working years (each year):
  salary = baseSalary * (1 + salaryGrowth)^yearsElapsed
  portfolio = portfolio * (1 + growthRate) + (salary * savingsRate)
  expenses = baseExpenses * (1 + inflation)^yearsElapsed

Retirement years (each year):
  taxableIncome = SS * 0.85 + pension + withdrawal * 0.75
  tax = taxableIncome * taxRate
  portfolio = portfolio * (1 + growthRate) - withdrawal

Assumptions:
  85% of Social Security benefits treated as taxable
  75% of portfolio distributions treated as taxable
```

### Outputs
- Year-by-year income, expenses, portfolio balance chart
- Surplus or deficit per year
- Portfolio depletion age
- Income sources stacked bar chart

---

## Calculator 11: RSU and Equity Compensation Tool

**URL:** /tools/rsu-equity-compensation-calculator
**Purpose:** Estimates tax impact and optimization opportunities for RSUs, ISOs, NQSOs, and ESPP shares.
**Projects investment returns:** No. Tax and vesting calculations only.

### Inputs
| Field | Type | Range |
|-------|------|-------|
| Compensation type | Select | RSU / ISO / NQSO / ESPP |
| Total shares | Number | 0-1,000,000 |
| Grant/exercise price | Currency | $0-$10,000 ($0 for RSU) |
| Current fair market value | Currency | $0-$100,000 |
| Vest start date | Date | -- |
| Federal tax rate | Slider | 10%-37% |

### Constants
- AMT rate: 26%
- ESPP discount: 15%
- State tax estimate: 5% (blended default)
- Medicare tax: 1.45%

### Vesting schedule
- 4-year total with 1-year cliff
- 25% vests at month 12 (cliff)
- Remaining 75% vests in equal quarterly installments (months 15-48)

### Tax formulas by type

**RSU:**
```
taxPerShare = FMV * (federalRate + 0.05)
totalTax = shares * taxPerShare
```

**ISO:**
```
spread = (FMV - grantPrice) * shares
AMT preference = spread
AMT estimate = spread * 0.26
Qualifying disposition: held 2+ years from grant AND 1+ year from exercise
Savings = ordinaryTax - LTCGtax on spread
```

**NQSO:**
```
effectiveRate = federalRate + 0.05 + 0.0145
tax = (FMV - grantPrice) * shares * effectiveRate
```

**ESPP:**
```
purchasePrice = grantPrice * 0.85
discountValue = grantPrice * 0.15 * shares
Qualifying: discount taxed as ordinary, remainder as LTCG
Disqualifying: full spread taxed as ordinary
Savings = disqualifyingTax - qualifyingTax
```

### Outputs
- Total equity value, unrealized gain, estimated tax
- Potential savings from optimization
- Vesting milestone timeline
- ISO: AMT preference, qualifying disposition dates
- ESPP: qualifying vs disqualifying comparison

---

## Calculator 12: Business Exit Planning Scorecard

**URL:** /tools/business-exit-planning-calculator
**Purpose:** Scores business exit readiness across 4 categories. Qualitative assessment with lead capture.
**Projects investment returns:** No. Scoring only.

### Inputs
10 multiple-choice questions, each scored 2/4/6/8/10 points.

### Categories
| Category | Questions | Max raw score |
|----------|-----------|--------------|
| Financial Readiness | 3 | 30 |
| Operational Readiness | 2 | 20 |
| Tax Readiness | 3 | 30 |
| Succession Readiness | 2 | 20 |

### Scoring formula
```
financial = (rawFinancialScore / 30) * 25
operational = (rawOperationalScore / 20) * 25
tax = (rawTaxScore / 30) * 25
succession = (rawSuccessionScore / 20) * 25
totalScore = financial + operational + tax + succession (max 100)
```

### Tier thresholds
| Score | Tier |
|-------|------|
| >= 80 | Exit Ready |
| >= 60 | Approaching Ready |
| >= 40 | Needs Work |
| < 40 | Early Stage |

### Outputs
- Total score (0-100), tier classification
- Category breakdown with letter grades (A/B/C/D)
- Category-specific recommendations

---

## Calculator 13: Estate Complexity Assessment

**URL:** /tools/estate-complexity
**Purpose:** Scores estate planning complexity to identify gaps. Qualitative assessment.
**Projects investment returns:** No. Scoring only.

### Inputs
9 questions covering trust structure, special assets, estate value, family situation, property locations, business ownership, and international assets.

### Complexity multipliers
| Condition | Multiplier |
|-----------|-----------|
| Blended family without trust | 1.25x |
| High estate value with stale review | 1.20x |
| Multi-state property without RLT | 1.15x |
| Business ownership without succession plan | 1.30x |
| International assets without trust | 1.20x |

### Tier thresholds
| Score | Complexity level |
|-------|-----------------|
| < 15 | Low |
| < 30 | Moderate |
| < 50 | High |
| >= 50 | Critical |

### Outputs
- Complexity score, tier, multiplier explanations
- Recommendations per complexity level

---

## Calculator 14: Income Annuity Estimator

**URL:** /tools/income-annuity
**Purpose:** Estimates monthly income from a single premium immediate annuity based on age, gender, and payout option.
**Projects investment returns:** No. Uses industry-average payout rate tables.

### Inputs
| Field | Type | Range |
|-------|------|-------|
| Premium | Slider | $25,000-$5,000,000 |
| Age | Slider | 55-85 |
| Gender | Toggle | Male/Female |
| Payout option | Select | Life Only / 5yr / 10yr / 20yr guarantee |

### Payout rates (per $100K premium, Life with 10-Year Guarantee, Q1 2026 industry averages)
| Age | Male | Female |
|-----|------|--------|
| 55 | 5.80% | 5.55% |
| 60 | 6.35% | 6.05% |
| 65 | 7.15% | 6.80% |
| 70 | 8.20% | 7.75% |
| 75 | 9.65% | 9.10% |
| 80 | 11.50% | 10.80% |
| 85 | 14.00% | 13.10% |

### Option adjustment factors
| Payout option | Factor |
|---------------|--------|
| Life Only (no guarantee) | 1.06x |
| 5-Year Guarantee | 1.02x |
| 10-Year Guarantee (base) | 1.00x |
| 20-Year Guarantee | 0.92x |

### Formulas
```
baseRate = interpolate(age, rateTable[gender])  (linear interpolation between age breakpoints)
adjustedRate = baseRate * optionFactor
annualIncome = premium * adjustedRate / 100
monthlyIncome = annualIncome / 12
```

### Outputs
- Estimated monthly and annual income
- Effective payout rate
- Comparison across all 4 payout options

---

## Calculator 15: Time Value of Money Calculator

**URL:** /tools/tvm-calculator
**Purpose:** Projects portfolio growth with compound interest, dividends, and optional market correction scenarios.
**Projects investment returns:** Yes. Uses preset return rates by investment type.

### Inputs
| Field | Type | Range | Default |
|-------|------|-------|---------|
| Starting investment | Currency | $1,000-$50,000,000 | $500,000 |
| Monthly contribution | Currency | $0-$100,000 | $2,000 |
| Investment type | Select | 7 presets | Diversified Portfolio |
| Time horizon | Slider | 1-40 years | 20 |
| Include market correction | Toggle | Off | Off |
| Correction type | Select | 6 presets | 2008 Crisis |
| Correction year | Slider | 1-timeHorizon | 5 |

### Investment type presets
| Type | Annual return | Dividend yield |
|------|-------------|---------------|
| Conservative (Bonds & CDs) | 4.5% | 3.0% |
| Balanced (60/40) | 7.5% | 2.0% |
| Diversified Portfolio | 8.5% | 1.8% |
| Growth (100% Equities) | 10.3% | 1.3% |
| Aggressive Growth | 11.5% | 0.8% |
| Real Estate (REITs) | 9.0% | 3.5% |
| Dividend-Focused | 8.0% | 3.8% |

### Market correction presets
| Event | Decline | Recovery period |
|-------|---------|----------------|
| Dot-Com Crash (2000-02) | -49.1% | 7 years |
| 2008 Financial Crisis | -56.8% | 5.5 years |
| COVID-19 (2020) | -33.9% | 5 months |
| 2022 Bear Market | -25.4% | 2 years |
| Average Correction | -15.0% | 4 months |
| Severe Bear Market | -35.0% | 3 years |

### Formulas
```
Monthly compounding:
  For each month: value = value * (1 + annualReturn/12) + monthlyContribution

Annual dividends:
  averageValue = (startOfYearValue + endOfYearValue) / 2
  dividends = averageValue * dividendYield

Market correction (if enabled):
  At correction year: value = value * (1 + decline/100) after that year's growth
  Recovery: resume normal growth in subsequent years

Growth multiple = finalValue / totalContributions
```

### Outputs
- Future portfolio value
- Total contributions, compound growth, dividends
- Growth multiple
- Stacked area chart (contributions / dividends / growth)
- Market correction impact comparison (with vs without)

---

## Calculator 16: Telecom Pension Calculator (AT&T / legacy telecom)

**URL:** /tools/telecom-pension-calculator
**Purpose:** Suite of 7 sub-calculators for AT&T and legacy telecom pension analysis.
**Projects investment returns:** Yes (in lump sum comparison and 401(k) projection sub-tools).

### 16A: Cash Balance Pension Estimator

**Pay credit rates by age:**
| Age | Basic rate (below SS wage base) | Supplemental rate (above SS wage base) |
|-----|-------------------------------|---------------------------------------|
| Under 30 | 3.0% | 6.0% |
| 30-34 | 3.5% | 7.0% |
| 35-39 | 4.25% | 8.5% |
| 40-44 | 5.0% | 10.0% |
| 45-49 | 6.5% | 13.0% |
| 50-54 | 8.0% | 16.0% |
| 55+ | 10.0% | 20.0% |

**Interest credit rates:**
- Traditional plan: max(30-year Treasury, 4% floor) = max(4.54%, 4%) = 4.54%
- Union post-2009 (BCB2): fixed 4.50%

**Annuity conversion factors:**
| Retirement age | Factor |
|---------------|--------|
| 55 or under | 136.2 |
| 56-60 | 155 |
| 61-65 | 175 |
| Over 65 | 190 |

```
monthlyAnnuity = projectedBalance / annuityFactor
```

### 16B: Union Pension Band Calculator

25 bands (101-125) with rates from $42.00 to $102.00 per month per year of service.
```
monthlyBenefit = bandRate * yearsOfService
```

### 16C: Lump Sum vs Annuity Comparison

```
Lump sum present value:
  PV = sum(year=1 to lifeExpectancy):
    annualBenefit / (1 + segmentRate)^year
  where segmentRate = 3.96% for years 1-5, 5.15% for 6-20, 6.11% for 21+

Life expectancy by retirement age:
  55 or under = 30 years, 56-60 = 25, 61-65 = 20, over 65 = 15

Break-even: years until invested lump sum (at expected return, minus annuity-level draws) hits $0
Safe withdrawal: lumpSum * 0.04 / 12
```

### 16D: Early Retirement Reduction

**Modified Rule of 75:**
| Minimum age | Minimum service |
|-------------|----------------|
| 65 | 10 years |
| 55 | 20 years |
| 50 | 25 years |
| Any age | 30 years |

**Reduction before age 55:** 6% per year (0.5% per month)
**Exception:** Union with 30+ years service = 0% reduction at any age

### 16E: 401(k) Projection
Match: 80% on first 6% of salary. Same IRS limits and growth formulas as Calculator 2.

### 16F: Retirement Income Gap Analysis
```
targetMonthly = salary * replacementPct / 12
totalIncome = pension + socialSecurity + otherIncome + (savings * withdrawalRate / 12)
gap = targetMonthly - totalIncome
coverage = totalIncome / targetMonthly * 100
```

---

## Calculator 17: Utility Pension Calculator (PG&E)

**URL:** /tools/utility-pension-calculator
**Purpose:** Suite of 5 sub-calculators for PG&E pension analysis.
**Projects investment returns:** Yes (in 401(k) projection sub-tool).

### 17A: Final Pay Pension Calculator

```
rawMonthly = (multiplier / 100) * yearsOfService * (finalPay / 12)
Default multiplier: 1.6% (user must verify with plan documents)

Early retirement reduction:
  30+ years OR age >= 62: 0%
  Age 55-61: reduction = 26% * (62 - age) / 7
  Under 55: not eligible
```

### 17B: Cash Balance Calculator (PG&E)

**Pay credit rates by age+service points:**
| Points (age + service) | Rate |
|----------------------|------|
| Under 40 | 5% |
| 40-49 | 6% |
| 50-59 | 7% |
| 60-69 | 8% |
| 70-79 | 9% |
| 80+ | 10% |

Interest credit rate: 4.5% default (user-adjustable)

### 17C: RMSA (Retiree Medical Savings Account) Estimator

```
Employer contribution: $7,500/year (under 20 years service), $10,000/year (20+ years)
Pre-retirement growth: 8% (from 2009 union contract)
Post-retirement growth: 4%

Projection: balance = (balance + contribution) * 1.08 each year
Depletion: balance = balance * 1.04 - (monthlyPremium * 12 * (1 + premiumInflation)^year)
```

### 17D: 401(k) Match Optimizer

| Plan type | Employee type | Match rate | Match cap | Auto contribution |
|-----------|-------------|-----------|----------|------------------|
| Final Pay | Management | 75% | 6% | 0% |
| Final Pay | Union | 60% | 6% | 0% |
| Cash Balance | Any | 75% | 8% | 2.4% |

---

## Flags for compliance review

### 1. IRS limit discrepancy
The PG&E 401(k) Match Optimizer hardcodes the 2026 employee deferral limit as $23,500. The centralized constants file uses $24,500. One value is incorrect.

### 2. RMSA assumptions
The PG&E RMSA calculator uses contribution amounts ($7,500/$10,000) and an 8% pre-retirement rate sourced from 2009 union contract proposals. These may not reflect current plan terms.

### 3. PG&E pension multiplier
The Final Pay calculator defaults to 1.6% but this value is not publicly disclosed. The calculator includes a note that users must verify with plan documents.

### 4. Non-centralized constants
Several calculators contain locally defined constants rather than importing from the centralized file:
- Social Security bend points, earnings test limits, and IRMAA tables
- Income annuity payout rate tables
- Pension band amounts and pay credit schedules
- AMT rate, ESPP discount, and state tax estimate

### 5. Standard disclaimer
All calculators display the shared `CalculatorDisclaimer` component with language covering: illustrative purposes, not financial advice, not a guarantee of future results, consult before acting.
