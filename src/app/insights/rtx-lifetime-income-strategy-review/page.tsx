import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ArrowLeft, Clock, Calendar, User, ChevronRight, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title:
    'RTX Lifetime Income Strategy: Is It Right for You, or Are There Better Options? | Advisor Jay',
  description:
    'RAYSIP Lifetime Income Strategy (LIS) converts 401(k) to guaranteed annuity income starting age 48. Pros: longevity protection. Cons: reduces NUA strategy, illiquidity. RTX contribution scaling 3% to 7% by age. Compare alternatives.',
  alternates: {
    canonical:
      'https://www.advisorjay.com/insights/rtx-lifetime-income-strategy-review',
  },
  openGraph: {
    title:
      'RTX Lifetime Income Strategy: Is It Right for You, or Are There Better Options?',
    description:
      'RAYSIP Lifetime Income Strategy converts 401(k) to guaranteed income annuity starting age 48. Understand tradeoffs, RTX age-based contributions, and whether diversified approach might be better.',
    type: 'article',
    url: 'https://www.advisorjay.com/insights/rtx-lifetime-income-strategy-review',
  },
}

const relatedArticles = [
  {
    slug: 'honeywell-hona-spinoff-401k-guide',
    category: 'RETIREMENT',
    title: 'The Honeywell HONA Spinoff in 2026: What to Do With Your 401(k) Before It Closes',
    excerpt:
      'Honeywell Aerospace spinoff Q3 2026. Your 401(k) match converts HON to HON+HONA. Audit exposure, understand RSU conversion, rebalance strategy.',
    readTime: '13 min read',
  },
  {
    slug: 'retire-at-58-when-benefits-designed-for-65',
    category: 'RETIREMENT',
    title: 'How to Retire at 58 When Your Benefits Were Designed for 65',
    excerpt:
      'Bridge 58 to 65 with healthcare gap, pension reduction, Social Security, Rule of 55. Real example showing account withdrawal sequence.',
    readTime: '12 min read',
  },
  {
    slug: 'arizona-high-earner-tax-reduction-2026',
    category: 'TAX PLANNING',
    title: 'Arizona High Earner Tax Reduction 2026: Year-End Tax Planning',
    excerpt:
      'Tax strategies for high earners. 401(k), mega backdoor Roth, HSA, charitable bunching, appreciated securities, and state credits.',
    readTime: '9 min read',
  },
]

export default function RTXLifetimeIncomeStrategyReviewPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Insights', href: '/insights' }, { name: 'RTX Lifetime Income Strategy Review', href: '/insights/rtx-lifetime-income-strategy-review' }]} />
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'RTX Lifetime Income Strategy: Is It Right for You, or Are There Better Options?',
            author: {
              '@type': 'Person',
              name: 'Jay Chang',
              jobTitle: 'VP, Wealth Advisor',
              worksFor: {
                '@type': 'Organization',
                name: 'Farther Finance Advisors LLC',
              },
            },
            publisher: {
              '@type': 'Organization',
              name: 'Advisor Jay',
              url: 'https://www.advisorjay.com',
            },
            datePublished: '2026-03-18',
            dateModified: '2026-03-18',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.advisorjay.com/insights/rtx-lifetime-income-strategy-review',
            },
            description:
              'RAYSIP Lifetime Income Strategy gradually converts 401(k) to guaranteed income annuity starting age 48, full conversion by 62. Examine tradeoffs: guaranteed income vs investment control loss, longevity protection vs liquidity constraints, impact on Net Unrealized Appreciation strategy.',
          }),
        }}
      />

      {/* Article Header */}
      <section className="bg-[#333333] pt-[100px] pb-[60px] px-[80px] max-md:px-[20px] max-md:pt-[100px]">
        <div className="max-w-[760px] mx-auto">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-sans text-sm text-[#1d7682] hover:text-[#D4B65A] transition-colors mb-8"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back to Insights
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-[#1d7682] bg-[rgba(201,168,76,0.1)] px-3 py-1 rounded-full">
              RETIREMENT PLANNING
            </span>
          </div>

          <h1 className="font-serif text-[42px] max-md:text-[30px] font-bold text-[#F7F4EE] leading-[1.2]">
            RTX Lifetime Income Strategy: Is It Right for You, or Are There Better Options?
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-6 text-[#b6d0ed]">
            <div className="flex items-center gap-2">
              <User size={14} strokeWidth={1.5} />
              <span className="font-sans text-sm">Jay Chang</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} strokeWidth={1.5} />
              <span className="font-sans text-sm">March 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} strokeWidth={1.5} />
              <span className="font-sans text-sm">11 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-[760px] mx-auto">
          <AnimateOnScroll>
            <div className="prose-farther">
              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Raytheon Technologies' RAYSIP retirement plan offers a unique and increasingly common feature: the Lifetime Income Strategy, or LIS. The LIS is an optional program that gradually converts your 401(k) balance into guaranteed lifetime income through an annuity contract, beginning at age 48 and completing the conversion by age 62. For RTX employees, this sounds compelling - a guaranteed paycheck for life starting while you are still relatively young. But the strategy comes with significant tradeoffs that deserve careful examination. This article walks through how the Lifetime Income Strategy works, its real advantages and costs, and how to decide whether it is right for your situation.
              </p>

              {/* Section 1 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                How the RTX Lifetime Income Strategy Works
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The Lifetime Income Strategy is administered by Prudential on behalf of RAYSIP. The mechanics are straightforward: at age 48, a portion of your 401(k) balance is contractually committed to purchase an immediate annuity. The annuity begins to pay guaranteed monthly income immediately or at a later elected date (typically age 50 or 55). The conversion continues gradually over time, with additional tranches of 401(k) assets systematically converted to annuity income as you age. By age 62, your entire eligible 401(k) balance has been converted to the annuity contract.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The annuity income is guaranteed by Prudential and protected by state insurance guaranty funds, meaning the income stream is far more secure than relying on your own investment returns or savings discipline. Once you elect to participate, you receive a fixed monthly payment for life, and if you are married, the default is a joint-and-survivor annuity that continues payments to your spouse if you die first.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The drawback of this simplicity is illiquidity: the dollars in the annuity are gone. Once converted, you cannot access the principal if an emergency arises. The annuity pays a fixed amount each month, and if your circumstances change, you cannot adjust the payout.
              </p>

              {/* Section 2 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                The Exceptional RTX Contribution Formula
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                To understand whether the Lifetime Income Strategy makes sense for you, you must first understand how generous RTX's matching and age-based contribution structure is. This is critical: RAYSIP is not a typical 401(k).
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                RTX provides an employer match of 100 percent of the first 2 percent of eligible pay, plus 50 percent of the next 4 percent of eligible pay. For an employee contributing the standard 6 percent of gross pay, the company match is 4 percent. But more importantly for those participating in the Lifetime Income Strategy, RTX adds an age-based Retirement Savings Contribution (RSC) that scales significantly with age:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Age under 30: 3 percent of eligible pay</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Age 30 to 39: 4 percent of eligible pay</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Age 40 to 49: 5 percent of eligible pay</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Age 50 to 54: 6 percent of eligible pay</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Age 55 and over: 7 percent of eligible pay</li>
              </ul>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                These contributions are made regardless of whether you participate in the Lifetime Income Strategy, but they are particularly generous if you are approaching the age at which LIS conversion begins.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                <strong className="text-[#333333]">Example:</strong> A 57-year-old RTX employee earning $130,000 per year receives:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Match: 4 percent = $5,200</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Age-based RSC (55+): 7 percent = $9,100</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Total employer contribution: $14,300</li>
              </ul>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                This $14,300 per year (11 percent of gross pay) is exceptionally generous. Over 8 years (from age 57 to 65), this alone builds $130,000 to $160,000 in additional retirement savings. The LIS, combined with RTX's age-scaled contributions, can create a meaningful stream of guaranteed income.
              </p>

              {/* Section 3 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Advantage 1: Guaranteed Lifetime Income and Longevity Protection
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The primary benefit of the Lifetime Income Strategy is simple: you receive a guaranteed monthly payment for the rest of your life. This is longevity insurance. If you live to age 85, 90, or beyond, you will have received cumulative income far exceeding your initial 401(k) balance. Insurance companies and actuaries price annuities based on mortality tables. A typical immediate annuity purchased at age 60 with a $500,000 premium might generate $2,800 to $3,200 per month. If you live to age 85 (25 years of payments), you will receive roughly $840,000 to $960,000 in total payments. The insurance company is betting you will not live that long, but if you do, you win.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                For many professionals, this feature is deeply appealing. It eliminates the risk of outliving your savings and provides simplicity - no investment decisions to make, no market volatility, no fear that a market crash will devastate your retirement plan.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The psychological value of this income floor should not be underestimated. Guaranteed income allows you to sleep at night. Combined with Social Security, a pension benefit (if any), and the RTX Lifetime Income Strategy, you have a true income floor that does not depend on market returns or your investment skill.
              </p>

              {/* Section 4 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Disadvantage 1: Loss of Investment Control and Flexibility
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The tradeoff for guaranteed income is loss of control. Once you convert 401(k) balance to the annuity, that decision is permanent. You cannot access the principal. You cannot change the payout amount if your circumstances change. You cannot reallocate the underlying investments. The annuity company controls the money, and you receive the monthly check.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                This is a problem for several classes of retirees. If you retire early (before age 55) and need to access a larger portion of your 401(k) for near-term expenses, the Lifetime Income Strategy locks away assets you might need. If your health deteriorates unexpectedly and you face large medical expenses, you cannot withdraw from the annuity to cover them. If you need money for a grandchild's education or to help a family member, the annuity is off-limits.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The illiquidity risk is not insignificant. Annuities issued today will be in force for 30, 40, or more years. The world changes. Your priorities change. Locking away capital for decades removes optionality.
              </p>

              {/* Section 5 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Disadvantage 2: Impact on Net Unrealized Appreciation (NUA) Strategy
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Here is a more subtle but potentially significant disadvantage: the Lifetime Income Strategy may foreclose the Net Unrealized Appreciation (NUA) tax strategy for employer stock held in your 401(k).
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                If you hold RTX stock in your 401(k) at the time of separation from service (retirement, severance, termination), you have the option to roll the RTX stock out of the 401(k) into a taxable brokerage account at the cost basis value, deferring capital gains taxes on the unrealized appreciation until you later sell the shares. The deferred gains are taxed at long-term capital gains rates (15 or 20 percent) rather than ordinary income tax rates (32 to 37 percent for high earners). For an employee with $300,000 in RTX stock in the 401(k) with a cost basis of $100,000, this strategy can save $30,000 to $60,000 in taxes.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                But the NUA strategy requires that the employer stock be rolled out of the 401(k) at the time of separation. If you are enrolled in the Lifetime Income Strategy, portions of your balance are already committed to the annuity by the time you separate from service. Those annuitized assets cannot be rolled out or subjected to the NUA strategy. The opportunity is lost.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                If you have substantial unrealized gains in RTX stock within your 401(k) and anticipate separating from service while still holding that stock, the Lifetime Income Strategy may not be optimal. Consult a tax advisor to model whether the NUA strategy would save more in taxes than the guaranteed income from the LIS justifies.
              </p>

              {/* Section 6 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Disadvantage 3: Reduced Estate Value
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                An annuity is generally not inheritable. Once you die, the income stream ends (unless you selected a period-certain feature, like "life with 10-year period certain," which pays to your estate for a minimum 10-year window). This means the capital in the annuity does not transfer to your heirs.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Compare this to a diversified 401(k) or IRA: if you die with $500,000 in the account, your heirs inherit $500,000 (subject to income taxes on the distributions they take, but the principal transfers). With an annuity, the $500,000 is gone, and unless you elected a survivor option that continued payments to your spouse or a period-certain period to your estate, nothing passes to your beneficiaries.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                For high-earning professionals with substantial assets, the loss of estate value may be acceptable - you are prioritizing your own guaranteed retirement income over leaving an inheritance. But for those who want to leave assets to children or grandchildren, the Lifetime Income Strategy reduces the legacy value of the 401(k).
              </p>

              {/* Section 7 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Disadvantage 4: Opportunity Cost and Investment Return Risk
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                An annuity locks in today's interest rates. If you purchase an annuity today and interest rates or equity market returns increase over time, you do not benefit from those improvements. Your payment is fixed.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Historically, this has been a significant disadvantage. Many retirees who purchased annuities in the early 2000s locked in low rates and have received modest income for decades. Had they kept the capital invested, the equity market recovery would have generated substantially higher returns. Conversely, those who purchased annuities in 2024 locked in higher income rates - but face the risk that rates fall and they are locked into a "high" rate permanently.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The insurance company prices the annuity assuming its own investment returns. If the insurance company can invest the premiums at 5 percent, the annuity payout is set accordingly. If market returns exceed 5 percent, the insurance company keeps the upside. You receive the contractual payment, nothing more.
              </p>

              {/* Section 8 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                The RTX Pension Transfer and Its Implications
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                In November 2025, RTX transferred its pension obligations to Prudential in what is known as a pension buy-out or de-risking event. This affected approximately 60,000 RTX retirees whose defined benefit pension benefits were transferred from RTX's corporate plan to Prudential. While this does not directly change the Lifetime Income Strategy, it highlights a key reality: RTX and Prudential have a long-standing relationship, and Prudential is now the custodian of a substantial pool of RTX retirement assets.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                For employees considering the Lifetime Income Strategy, this pension transfer is worth noting. The same company administering your new guaranteed income also manages the pensions of existing retirees. Prudential's financial stability and commitment to honoring annuity contracts is material to your decision. Fortunately, Prudential is a large, well-capitalized insurer, and annuity payments are protected by state insurance guaranty funds (typically covering up to $100,000 to $300,000 in benefits per state, though large annuities may exceed this cap). But the concentration with a single insurance company introduces risk if that company faces financial distress.
              </p>

              {/* Section 9 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Alternative Approach: Diversified Portfolio with Disciplined Withdrawals
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                An alternative to the Lifetime Income Strategy is to keep your 401(k) fully invested in a diversified portfolio (stock and bond index funds, target-date funds, or a balanced allocation) and establish a disciplined withdrawal strategy in retirement. This approach preserves control, maintains optionality, and allows you to respond to changes in circumstances.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The classic "4 percent rule" for retirement suggests that you can withdraw 4 percent of your portfolio value in the first year of retirement, then adjust subsequent withdrawals for inflation, and have a very high probability of not running out of money for 30+ years. For a 57-year-old with a $1.5 million 401(k), a 4 percent withdrawal ($60,000) plus Social Security would provide a reasonable income floor without converting to an annuity.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The advantage of this approach is that the capital remains yours. If you need to withdraw more in a particular year (for a health emergency, to help a family member, or to fund a large purchase), you have that flexibility. If you live beyond age 95 and the market has performed poorly, you can reduce your withdrawals or work longer. Your heirs inherit the remaining balance. And you maintain exposure to equity market returns, which historically exceed annuity payouts over long periods.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The disadvantage is you accept investment risk and market volatility. A severe market downturn in your first years of retirement could force you to reduce spending or work longer. You must also maintain investment discipline - the temptation to panic-sell during market declines is real. If you lack the discipline or psychological comfort to weather market volatility, the Lifetime Income Strategy's simplicity may be worth the tradeoffs.
              </p>

              {/* In-Article CTA */}
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-8 my-12 text-center">
                <MessageSquare size={28} strokeWidth={1.5} className="text-[#1d7682] mx-auto mb-4" />
                <h3 className="font-serif text-[22px] font-semibold text-[#333333] leading-tight">
                  LIS vs. Diversified Portfolio: We Can Model Both
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3 max-w-[480px] mx-auto">
                  Run projections for your specific situation. See which approach aligns with your goals and risk tolerance.
                </p>
                <div className="mt-6">
                  <Button href="/schedule-consultation" variant="primary">
                    Analyze Your Scenario
                  </Button>
                </div>
              </div>

              {/* Section 10 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Hybrid Approach: Partial LIS with Diversified Core
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Many sophisticated RTX employees opt for a hybrid approach: participate in the Lifetime Income Strategy but direct a smaller portion of their 401(k) balance to the annuity than the program suggests. For example, you might allocate 40 percent of your balance to the LIS and keep 60 percent in a diversified portfolio.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                This approach achieves several goals:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">You establish a meaningful income floor through the annuity, reducing sequence-of-returns risk in early retirement</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">You maintain a substantial diversified portfolio for discretionary withdrawals, unexpected expenses, and legacy planning</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">You preserve the ability to execute the Net Unrealized Appreciation strategy for RTX stock not annuitized</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">You benefit from RTX's exceptional age-based contributions across both the annuity and diversified portion</li>
              </ul>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The hybrid approach balances competing priorities: guaranteed income plus control, longevity protection plus flexibility. For many high-earning RTX employees, this is the optimal path.
              </p>

              {/* Section 11 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Decision Framework: Should You Participate?
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Whether to participate in the Lifetime Income Strategy depends on six factors:
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
                <strong className="text-[#333333]">1. Your other sources of guaranteed income:</strong> Do you have a defined benefit pension, Social Security, or other fixed income sources? If yes, you may need less annuity income. If no, the LIS creates an important income floor.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
                <strong className="text-[#333333]">2. Your spouse's income and benefits:</strong> If your spouse has a substantial pension or significant income/assets separately, the LIS affects your household cash flow planning differently than if you are the sole income source.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
                <strong className="text-[#333333]">3. Your investment discipline and risk tolerance:</strong> Can you stay invested through market downturns and maintain a 4 percent withdrawal rate discipline? If the answer is no, the LIS simplicity may be worth the cost.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
                <strong className="text-[#333333]">4. Your estate goals:</strong> Do you want to leave substantial assets to heirs? The LIS reduces estate value. If leaving a legacy is important, the diversified approach is better.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
                <strong className="text-[#333333]">5. Your health and longevity expectations:</strong> Actuarially, annuities are most attractive if you live a long life. If family health history suggests shorter longevity, the diversified approach may be better. (Conversely, if longevity runs in your family, LIS longevity protection is valuable.)
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                <strong className="text-[#333333]">6. Your unrealized gains in RTX stock:</strong> If you hold significant unrealized gains in RTX stock in your 401(k), the NUA strategy tradeoff is material. Model the tax savings from NUA vs. the income benefit of LIS.
              </p>

              <div className="mt-8">
                <a
                  href="/schedule-consultation"
                  className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-[#1d7682] hover:text-[#D4B65A] transition-colors"
                >
                  <span>Schedule Your LIS Review</span>
                  <ChevronRight size={16} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-[#E8E6E1]">
            <p className="font-sans text-xs text-[#5b6a71] leading-relaxed">
              This article is provided for informational purposes only and does not constitute tax advice, investment advice, or a recommendation to pursue any strategy. The Lifetime Income Strategy has specific rules, eligibility requirements, and tax implications that vary depending on your individual circumstances. The Net Unrealized Appreciation strategy has complex tax consequences and is subject to IRS rules that change. Annuity payouts, insurance company credit ratings, and investment returns are not guaranteed and may be subject to market conditions. Consult a qualified financial advisor and tax professional before making decisions about the Lifetime Income Strategy or changes to your 401(k) allocation. Farther Finance Advisors, LLC is a registered investment adviser with the SEC. Registration does not imply a certain level of skill or training. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <SectionEyebrow text="CONTINUE READING" />
          <h2 className="font-serif text-h3 font-normal text-[#333333] mt-4 mb-10">
            Related Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/insights/${related.slug}`}
                className="group block"
              >
                <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[12px] p-8 hover:shadow-card-hover hover:border-[#1d7682] transition-all duration-300">
                  <span className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-[#1d7682]">
                    {related.category}
                  </span>
                  <h3 className="font-serif text-[22px] font-semibold text-[#333333] mt-3 leading-tight group-hover:text-[#1d7682] transition-colors">
                    {related.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3 line-clamp-2">
                    {related.excerpt}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-[#1d7682] font-sans text-sm font-semibold">
                    Read Article
                    <ChevronRight
                      size={14}
                      strokeWidth={1.5}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#333333] section-padding text-center">
        <div className="max-w-[620px] mx-auto">
          <h2 className="font-serif text-[36px] max-md:text-[28px] font-semibold text-[#F7F4EE] leading-[1.2]">
            LIS Is a Critical Decision - Get Clarity Before You Decide
          </h2>
          <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
            Compare your scenarios side by side. Understand the tradeoffs and see which path aligns with your retirement vision.
          </p>
          <div className="mt-10">
            <Button href="/schedule-consultation" variant="primary">
              Compare Your Options
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
