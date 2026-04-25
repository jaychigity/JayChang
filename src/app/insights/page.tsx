import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Insights | Expert Wealth Planning, Tax Strategy & Financial Guidance',
  description: 'Expert insights on equity compensation, tax strategy, retirement planning, physician finance, executive wealth, relocation planning, estate strategy, and charitable giving for high-income professionals in Arizona.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/insights',
  },
}

// ─────────────────────────── CATEGORY CARDS ───────────────────────────

interface Category {
  id: string
  title: string
  subtitle: string
  photo: string
}

const categories: Category[] = [
  {
    id: 'equity-compensation',
    title: 'Equity Compensation Mastery',
    subtitle: 'RSUs, ESPPs, stock options, concentration risk, and vesting strategies for tech and semiconductor professionals.',
    photo: 'Equity Compensation Mastery.png',
  },
  {
    id: 'tax-strategy',
    title: 'High-Income Tax Strategy',
    subtitle: 'Backdoor Roths, RSU withholding gaps, Arizona tax planning, and proactive strategies to reduce your tax bill.',
    photo: 'High-Income Tax Strategy.png',
  },
  {
    id: 'retirement-planning',
    title: 'Retirement Planning for Corporate Professionals',
    subtitle: 'Pensions, 401(k) concentration, deferred comp, and early retirement strategies for Honeywell, Raytheon, and RTX employees.',
    photo: 'Retirement Planning for Corporate Professionals.png',
  },
  {
    id: 'physician-planning',
    title: 'Physician Financial Planning',
    subtitle: 'PSLF qualifying, cash balance plans, asset protection, and the financial roadmap for attending physicians.',
    photo: 'Physician Financial Planning.png',
  },
  {
    id: 'executive-compensation',
    title: 'Executive Compensation & Wealth Preservation',
    subtitle: '10b5-1 plans, deferred comp, double concentration risk, business exit planning, and commodity-linked equity.',
    photo: 'Executive Compensation & Wealth Preservation.png',
  },
  {
    id: 'relocation-planning',
    title: 'Wealth Building for Relocating Professionals',
    subtitle: 'California source income traps, domicile rules, pre-vest planning, and the TSMC Taiwan-to-Arizona checklist.',
    photo: 'Wealth Building for Relocating Professionals.png',
  },
  {
    id: 'estate-planning',
    title: 'Legacy & Estate Planning for Generational Wealth',
    subtitle: 'Estate exemption sunset, trust strategies, SLATs, and beneficiary designations that protect your legacy.',
    photo: 'Legacy & Estate Planning for Generational Wealth.png',
  },
  {
    id: 'charitable-giving',
    title: 'Non-Profit Organizations & Charitable Giving',
    subtitle: 'Donor-advised funds, appreciated stock donations, QCDs, and the Arizona charitable tax credit.',
    photo: 'Non-Profit Organizations & Charitable Giving.png',
  },
]

// ─────────────────────────── ARTICLES BY CATEGORY ───────────────────────────

interface Article {
  slug: string
  categoryId: string
  title: string
  summary: string
  date: string
  readTime: string
}

const articles: Article[] = [
  // Equity Compensation
  { slug: 'rsu-vest-sell-hold-strategy', categoryId: 'equity-compensation', title: 'RSUs Vest Next Month. Here Is What to Do Before, During, and After.', summary: 'Most engineers focus on the vest date itself, but the decisions you make in the weeks before and after can save or cost you tens of thousands in taxes.', date: 'March 10, 2026', readTime: '8 min read' },
  { slug: 'nvidia-espp-2-year-lookback', categoryId: 'equity-compensation', title: 'The NVIDIA ESPP 2-Year Lookback: What It Is Worth and How to Maximize It', summary: 'NVIDIA\'s ESPP lookback provision can deliver returns over 100%, but only if you understand the holding period rules and when to sell.', date: 'January 22, 2026', readTime: '7 min read' },
  { slug: 'concentrated-stock-risk-how-much-is-too-much', categoryId: 'equity-compensation', title: 'Concentrated Stock Risk: How Much Is Too Much in Your Portfolio?', summary: 'When your employer\'s stock makes up a large slice of your net worth, a single earnings miss can set your financial plan back years. Learn where the line is.', date: 'November 5, 2025', readTime: '9 min read' },
  { slug: 'should-you-sell-rsus-when-they-vest', categoryId: 'equity-compensation', title: 'Should You Always Sell RSUs When They Vest?', summary: 'The conventional wisdom says sell immediately, but there are specific scenarios where holding may make sense. Here is how to evaluate your situation.', date: 'September 18, 2025', readTime: '7 min read' },
  { slug: 'quarterly-vesting-tax-problem', categoryId: 'equity-compensation', title: 'How Quarterly Vesting Creates a Year-Round Tax Problem', summary: 'Quarterly RSU vests can push you into higher tax brackets unpredictably. Discover the withholding strategy that keeps you ahead of estimated payments.', date: 'July 8, 2025', readTime: '8 min read' },
  { slug: 'intel-serplus-how-much-to-defer-2026', categoryId: 'equity-compensation', title: 'Intel SERPLUS in 2026: How Much Is Too Much to Defer?', summary: 'Deferring too much into SERPLUS ties your savings to Intel\'s balance sheet. Find the threshold where tax savings no longer outweigh concentration risk.', date: 'February 26, 2026', readTime: '9 min read' },
  { slug: 'nvidia-rsu-concentration-risk', categoryId: 'equity-compensation', title: 'NVIDIA RSU Concentration Risk: What Engineers Need to Know', summary: 'NVIDIA\'s stock surge has been incredible, but it has also left many engineers with 60%+ of their wealth in a single name. Here is how to diversify wisely.', date: 'May 14, 2025', readTime: '7 min read' },
  { slug: 'intel-mega-backdoor-roth-chandler', categoryId: 'equity-compensation', title: 'Intel Mega Backdoor Roth: Save $72,000 Per Year Tax-Free', summary: 'Intel\'s 401(k) plan allows after-tax contributions with in-plan Roth conversions, one of the most powerful wealth-building tools available to employees.', date: 'March 3, 2025', readTime: '8 min read' },
  { slug: 'apple-espp-mesa-guide', categoryId: 'equity-compensation', title: 'Apple ESPP Guide for Mesa Employees', summary: 'Apple\'s ESPP offers a guaranteed discount on company stock, but the tax treatment of qualifying vs. disqualifying dispositions is often misunderstood.', date: 'December 11, 2024', readTime: '7 min read' },
  { slug: 'tsmc-rsu-tax-planning-arizona', categoryId: 'equity-compensation', title: 'TSMC RSU Tax Planning for Arizona Engineers', summary: 'TSMC\'s Arizona expansion brings unique tax planning challenges for engineers relocating from Taiwan. Learn how RSU vesting interacts with U.S. tax law.', date: 'October 2, 2024', readTime: '8 min read' },

  // Tax Strategy
  { slug: 'mega-backdoor-roth-2026-guide', categoryId: 'tax-strategy', title: 'The Mega Backdoor Roth in 2026: $72,000 in Tax-Free Savings', summary: 'Not every 401(k) plan allows it, but if yours does, the mega backdoor Roth is the single most impactful tax-free savings strategy available to high earners.', date: 'February 12, 2026', readTime: '9 min read' },
  { slug: 'arizona-high-earner-tax-reduction-2026', categoryId: 'tax-strategy', title: 'How High Earners in Arizona Can Cut Their 2026 Tax Bill', summary: 'Arizona\'s flat income tax rate already gives you an advantage, but combining it with the right federal strategies can save you significantly more.', date: 'January 6, 2026', readTime: '10 min read' },
  { slug: 'rsu-withholding-gap-22-percent', categoryId: 'tax-strategy', title: 'Why Your 22% RSU Withholding Is Almost Certainly Not Enough', summary: 'If your total income pushes you into the 32% or 37% bracket, that 22% flat withholding on RSUs is setting you up for a painful April surprise.', date: 'October 21, 2025', readTime: '8 min read' },
  { slug: 'backdoor-roth-ira-step-by-step', categoryId: 'tax-strategy', title: 'Backdoor Roth IRA: Step-by-Step for High Earners in 2026', summary: 'Income too high for a direct Roth contribution? The backdoor strategy is straightforward when done correctly, and costly when done wrong.', date: 'August 15, 2025', readTime: '7 min read' },
  { slug: 'arizona-tax-landscape-high-income-2026', categoryId: 'tax-strategy', title: 'Arizona Tax Planning for High-Income Professionals in 2026', summary: 'From the 2.5% flat tax to strategic charitable credits, here is how Arizona\'s tax landscape creates unique opportunities for high-income households.', date: 'April 9, 2025', readTime: '9 min read' },
  { slug: 'banner-health-physician-tax-strategies', categoryId: 'tax-strategy', title: 'Banner Health Physician Tax Strategies', summary: 'Banner Health physicians have access to specific retirement plans and benefits that most tax preparers overlook. Make sure you are capturing every advantage.', date: 'January 17, 2025', readTime: '8 min read' },

  // Retirement Planning
  { slug: 'honeywell-hona-spinoff-401k-guide', categoryId: 'retirement-planning', title: 'The Honeywell HONA Spinoff: What to Do With Your 401(k)', summary: 'The HONA spinoff created new decisions for Honeywell employees, including whether to keep, roll over, or reallocate your 401(k) holdings.', date: 'March 4, 2026', readTime: '9 min read' },
  { slug: 'rtx-lifetime-income-strategy-review', categoryId: 'retirement-planning', title: 'RTX Lifetime Income Strategy: Is It Right for You?', summary: 'RTX added a guaranteed income option to the 401(k). Before you opt in, understand what you are giving up in exchange for that certainty.', date: 'December 19, 2025', readTime: '8 min read' },
  { slug: 'retire-at-58-when-benefits-designed-for-65', categoryId: 'retirement-planning', title: 'How to Retire at 58 When Benefits Were Designed for 65', summary: 'The gap between leaving work and accessing Medicare, Social Security, and penalty-free withdrawals requires a carefully sequenced income bridge.', date: 'August 27, 2025', readTime: '10 min read' },
  { slug: 'raytheon-pension-vs-lump-sum', categoryId: 'retirement-planning', title: 'Raytheon Pension vs Lump Sum: The Complete Analysis', summary: 'Choosing between a pension annuity and a lump-sum rollover is one of the largest irreversible financial decisions you will make. Here is how to model it.', date: 'June 4, 2025', readTime: '9 min read' },
  { slug: 'raytheon-engineers-deferred-comp', categoryId: 'retirement-planning', title: 'RTX Engineers Deferred Compensation Guide', summary: 'Deferred compensation can be a powerful tax tool, or a concentrated risk. Learn the election timing rules and payout strategies that matter most.', date: 'February 10, 2025', readTime: '8 min read' },
  { slug: 'honeywell-401k-concentration-risk', categoryId: 'retirement-planning', title: 'Honeywell 401(k) Employer Stock Concentration', summary: 'Loyalty to your employer is admirable, but when 40% of your retirement is in company stock, your career risk and investment risk are dangerously correlated.', date: 'November 13, 2024', readTime: '7 min read' },

  // Physician Planning
  { slug: 'physician-financial-roadmap-first-five-years', categoryId: 'physician-planning', title: 'The Physician Financial Roadmap: First 5 Years as an Attending', summary: 'The transition from resident to attending brings a dramatic income jump, and a narrow window to build the right financial foundation before lifestyle inflates.', date: 'February 5, 2026', readTime: '10 min read' },
  { slug: 'pslf-banner-health-qualifying', categoryId: 'physician-planning', title: 'PSLF at Banner Health: Are You Qualifying Without Knowing It?', summary: 'Banner Health is a qualifying 501(c)(3) employer, which means your student loan payments may already be counting toward forgiveness. Are you tracking them?', date: 'November 19, 2025', readTime: '8 min read' },
  { slug: 'cash-balance-plan-physician-tax-shelter', categoryId: 'physician-planning', title: 'The Cash Balance Plan: Shelter $200,000+ Per Year Pre-Tax', summary: 'For practice owners and high-earning physicians, a cash balance plan can slash your tax bill by six figures annually. Learn if you qualify.', date: 'July 23, 2025', readTime: '9 min read' },
  { slug: 'asset-protection-arizona-physicians', categoryId: 'physician-planning', title: 'Asset Protection for Arizona Physicians', summary: 'Arizona offers strong homestead and retirement account protections, but physicians face unique malpractice exposure that requires a layered approach.', date: 'March 19, 2025', readTime: '8 min read' },

  // Executive Compensation
  { slug: '10b5-1-plans-insider-stock-sales', categoryId: 'executive-compensation', title: '10b5-1 Plans: Selling Stock Legally During Blackout Periods', summary: 'Executives with material non-public information need a pre-arranged trading plan to sell shares without regulatory risk. Here is how 10b5-1 plans work.', date: 'January 14, 2026', readTime: '8 min read' },
  { slug: 'double-concentration-problem-executives', categoryId: 'executive-compensation', title: 'The Double Concentration Problem for Executives', summary: 'Your paycheck and your portfolio both depend on the same company. If something goes wrong, you lose your income and your savings at the same time.', date: 'September 30, 2025', readTime: '9 min read' },
  { slug: 'executive-deferred-compensation-2026', categoryId: 'executive-compensation', title: 'Executive Deferred Compensation in 2026', summary: 'Nonqualified deferred comp lets you push six-figure sums past today\'s tax rates, but the election deadlines and distribution rules leave zero room for error.', date: 'June 18, 2025', readTime: '10 min read' },
  { slug: 'business-exit-planning-arizona', categoryId: 'executive-compensation', title: 'Business Exit Planning for Arizona Owners', summary: 'The average business owner has 80% of their wealth tied to their company. A well-structured exit can mean the difference between a good outcome and a great one.', date: 'February 25, 2025', readTime: '9 min read' },
  { slug: 'freeport-commodity-equity-planning', categoryId: 'executive-compensation', title: 'Freeport-McMoRan Commodity Equity Planning', summary: 'Commodity-linked equity adds a layer of volatility most tech employees never face. If copper drops 30%, what happens to your financial plan?', date: 'September 8, 2024', readTime: '8 min read' },

  // Relocation Planning
  { slug: 'california-to-arizona-before-equity-vests', categoryId: 'relocation-planning', title: 'Moving From California to Arizona? What to Do Before Equity Vests', summary: 'California allocates RSU income based on where you worked during the vesting period, not where you live when shares vest. Timing your move matters enormously.', date: 'December 3, 2025', readTime: '9 min read' },
  { slug: 'california-taxes-rsus-after-you-leave', categoryId: 'relocation-planning', title: 'How California Taxes Your RSUs After You Leave', summary: 'You moved to Arizona, but California still wants a piece of your RSU income. Learn the source-income rules that catch former residents off guard.', date: 'August 6, 2025', readTime: '8 min read' },
  { slug: 'tsmc-taiwan-us-financial-planning-checklist', categoryId: 'relocation-planning', title: 'TSMC Engineers From Taiwan: U.S. Financial Planning Checklist', summary: 'From tax treaty elections to FBAR reporting to building U.S. credit, relocating engineers face a unique set of financial hurdles that require proactive planning.', date: 'April 22, 2025', readTime: '10 min read' },
  { slug: 'establishing-arizona-domicile-california', categoryId: 'relocation-planning', title: 'Establishing Arizona Domicile: What California Looks For', summary: 'California\'s Franchise Tax Board audits domicile changes aggressively. Make sure your paper trail and behavior pass the "closest connections" test.', date: 'November 27, 2024', readTime: '8 min read' },

  // Estate Planning
  { slug: 'estate-tax-exemption-sunset-2026', categoryId: 'estate-planning', title: 'The Federal Estate Tax Exemption Is Set to Drop by Half', summary: 'The current $13.6M exemption is scheduled to sunset. If your estate exceeds the post-sunset threshold, the window to act is closing fast.', date: 'March 12, 2026', readTime: '9 min read' },
  { slug: 'revocable-vs-irrevocable-trusts', categoryId: 'estate-planning', title: 'Revocable vs. Irrevocable Trusts: Which One Do You Need?', summary: 'One gives you flexibility, the other gives you tax and asset protection benefits. Understanding the tradeoff is the first step in building your estate plan.', date: 'October 15, 2025', readTime: '8 min read' },
  { slug: 'beneficiary-designations-override-your-will', categoryId: 'estate-planning', title: 'Beneficiary Designations: The Document That Overrides Your Will', summary: 'Your IRA and 401(k) beneficiary forms supersede your will and trust. An outdated designation can send your retirement savings to the wrong person.', date: 'May 28, 2025', readTime: '7 min read' },
  { slug: 'slat-strategy-married-couples', categoryId: 'estate-planning', title: 'The SLAT Strategy for Married Couples', summary: 'A Spousal Lifetime Access Trust lets you remove assets from your taxable estate while still allowing your spouse to benefit. Here is how couples use it before the exemption drops.', date: 'January 8, 2025', readTime: '9 min read' },

  // Charitable Giving
  { slug: 'donor-advised-funds-high-earners', categoryId: 'charitable-giving', title: 'Donor-Advised Funds: The Smartest Way High Earners Give', summary: 'A DAF lets you front-load charitable deductions in a high-income year and distribute grants over time, the best of both worlds for tax-savvy givers.', date: 'November 4, 2025', readTime: '8 min read' },
  { slug: 'never-donate-cash-to-charity', categoryId: 'charitable-giving', title: 'Why You Should Never Donate Cash If You Own Appreciated Stock', summary: 'Donating appreciated shares instead of cash eliminates capital gains tax and gives you the full fair-market-value deduction. The math is compelling.', date: 'July 16, 2025', readTime: '7 min read' },
  { slug: 'arizona-charitable-tax-credit', categoryId: 'charitable-giving', title: 'The Arizona Charitable Tax Credit Most Residents Miss: $2,300 in Dollar-for-Dollar Credits', summary: 'Arizona offers a dollar-for-dollar state tax credit for charitable contributions, yet most high-income residents leave these credits on the table.', date: 'April 1, 2025', readTime: '8 min read' },
  { slug: 'qualified-charitable-distributions-ira', categoryId: 'charitable-giving', title: 'QCDs: How Retirees Can Give Tax-Free From Their IRA', summary: 'If you are 70½ or older, a Qualified Charitable Distribution satisfies your RMD without adding a dollar to your taxable income. It is the most efficient way to give.', date: 'October 22, 2024', readTime: '9 min read' },
]

function getArticleCount(categoryId: string): number {
  return articles.filter((a) => a.categoryId === categoryId).length
}

function getArticlesForCategory(categoryId: string): Article[] {
  return articles.filter((a) => a.categoryId === categoryId)
}

// ─────────────────────────── PAGE ───────────────────────────

export default function InsightsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Insights', href: '/insights' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Insights - Advisor Jay',
            description: 'Expert insights on equity compensation, tax strategy, retirement planning, and wealth preservation for high-income professionals.',
            url: 'https://www.PWM-Farther.com/insights',
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-[#F7F4EE] pt-[100px] pb-[60px] px-[80px] max-md:px-[20px] max-md:pt-[64px] max-md:pb-[40px]">
        <div className="max-w-[900px] mx-auto text-center">
          <SectionEyebrow text="INSIGHTS" />
          <h1 className="font-serif text-[52px] max-md:text-[34px] font-bold text-[#333333] leading-[1.15] mt-4">
            Actionable Financial Guidance for High-Income Professionals
          </h1>
          <p className="font-sans text-body-lg text-[#5b6a71] max-w-[720px] mx-auto mt-6 leading-relaxed">
            Expert analysis on equity compensation, tax strategy, retirement planning, and wealth preservation for semiconductor engineers, aerospace professionals, physicians, and executives across Arizona.
          </p>
        </div>
      </section>

      {/* ─────────────────── 8 CATEGORY CARDS ─────────────────── */}
      <section className="bg-white py-[60px] px-[80px] max-md:px-[20px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              const count = getArticleCount(cat.id)
              return (
                <AnimateOnScroll key={cat.id} delay={Math.min(idx * 75, 400)}>
                  <a
                    href={`#${cat.id}`}
                    className="group block bg-white rounded-[12px] border border-[#E8E6E1] overflow-hidden hover:shadow-lg hover:border-[#1d7682]/30 transition-all h-full"
                  >
                    {/* Card Image */}
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <Image
                        src={`/Photos/${cat.photo}`}
                        alt={cat.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Gradient overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      {/* Article count badge */}
                      <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#333333] font-sans text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        {count} {count === 1 ? 'article' : 'articles'}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h2 className="font-serif text-[17px] font-bold text-[#333333] leading-[1.3] group-hover:text-[#1d7682] transition-colors">
                        {cat.title}
                      </h2>
                      <p className="font-sans text-[13px] text-[#5b6a71] leading-[1.55] mt-2">
                        {cat.subtitle}
                      </p>
                      <span className="inline-flex items-center gap-1 font-sans text-[13px] font-semibold text-[#1d7682] mt-3 group-hover:gap-2 transition-all">
                        Browse articles
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────── ARTICLES BY CATEGORY ─────────────────── */}
      {categories.map((cat) => {
        const catArticles = getArticlesForCategory(cat.id)
        return (
          <section
            key={cat.id}
            id={cat.id}
            className="py-[60px] px-[80px] max-md:px-[20px] border-t border-[#E8E6E1] scroll-mt-[80px] even:bg-[#FAFAF8] odd:bg-white"
          >
            <div className="max-w-[1200px] mx-auto">
              <AnimateOnScroll>
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-[56px] h-[56px] rounded-[10px] overflow-hidden shrink-0">
                    <Image
                      src={`/Photos/${cat.photo}`}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-[28px] max-md:text-[22px] font-bold text-[#333333] leading-tight">
                      {cat.title}
                    </h2>
                    <p className="font-sans text-[13px] text-[#5b6a71] mt-1">
                      {catArticles.length} {catArticles.length === 1 ? 'article' : 'articles'}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catArticles.map((article, idx) => (
                  <AnimateOnScroll key={article.slug} delay={Math.min(idx * 50, 200)}>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="group block bg-white rounded-[10px] border border-[#E8E6E1] p-5 hover:shadow-md hover:border-[#1d7682]/25 transition-all h-full"
                    >
                      <h3 className="font-serif text-[16px] font-semibold text-[#333333] leading-[1.35] group-hover:text-[#1d7682] transition-colors">
                        {article.title}
                      </h3>
                      <p className="font-sans text-[13px] text-[#5b6a71] leading-[1.55] mt-2">
                        {article.summary}
                      </p>
                      <div className="flex items-center gap-3 mt-3 text-[12px] text-[#5b6a71]">
                        <span>{article.date}</span>
                        <span className="text-[#E8E6E1]">|</span>
                        <span>{article.readTime}</span>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                ))}
              </div>

              {/* Back to top link */}
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="font-sans text-[13px] text-[#5b6a71] hover:text-[#1d7682] transition-colors inline-flex items-center gap-1"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                  Back to topics
                </a>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="bg-[#333333] py-[80px] px-[80px] max-md:py-[60px] max-md:px-[20px] text-center">
        <div className="max-w-[620px] mx-auto">
          <AnimateOnScroll>
            <h2 className="font-serif text-[40px] max-md:text-[28px] font-semibold text-[#F7F4EE] leading-[1.2]">
              Have a question about your financial situation?
            </h2>
            <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-6">
              We welcome conversations about the topics we write about. If something resonated, or raised a question specific to your situation, let&apos;s talk.
            </p>
            <div className="mt-10">
              <Button href="/schedule-consultation" variant="primary">
                Schedule a Call
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
