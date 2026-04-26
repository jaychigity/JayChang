import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import ArticleByline from '@/components/ArticleByline'
import { ArrowLeft, Clock, ChevronRight, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Honeywell HONA Spinoff 2026: What to Do With Your 401(k) Before It Closes | Advisor Jay',
  description:
    'Honeywell Aerospace (HONA) spinoff Q3 2026. Your 401(k) match converts from HON to HON+HONA. Audit exposure, understand RSU conversion, rebalance before spinoff closes. Action timeline for employees.',
  alternates: {
    canonical:
      'https://www.advisorjay.com/insights/honeywell-hona-spinoff-401k-guide',
  },
  openGraph: {
    title:
      'Honeywell HONA Spinoff 2026: What to Do With Your 401(k) Before It Closes',
    description:
      'Honeywell Aerospace (HONA) spinoff Q3 2026. Your 401(k) match converts from HON to HON+HONA. Audit exposure, understand RSU conversion, rebalance before spinoff closes.',
    type: 'article',
    url: 'https://www.advisorjay.com/insights/honeywell-hona-spinoff-401k-guide',
  },
}

const relatedArticles = [
  {
    slug: 'rtx-lifetime-income-strategy-review',
    category: 'RETIREMENT',
    title: 'RTX Lifetime Income Strategy: Is It Right for You, or Are There Better Options?',
    excerpt:
      'RAYSIP Lifetime Income Strategy converts 401(k) to annuity income starting at age 48. Understand tradeoffs vs diversified approach and Net Unrealized Appreciation strategy.',
    readTime: '11 min read',
  },
  {
    slug: 'retire-at-58-when-benefits-designed-for-65',
    category: 'RETIREMENT',
    title: 'How to Retire at 58 When Your Benefits Were Designed for 65',
    excerpt:
      'Bridge the gap from 58 to 65 with healthcare, pension reduction, Social Security, and Rule of 55 strategies. Real example with income mapping.',
    readTime: '12 min read',
  },
  {
    slug: 'arizona-high-earner-tax-reduction-2026',
    category: 'TAX PLANNING',
    title: 'Arizona High Earner Tax Reduction 2026: Year-End Tax Planning',
    excerpt:
      'Tax strategies for high earners in Arizona. 401(k), mega backdoor Roth, HSA, charitable bunching, appreciated securities, and Arizona credits.',
    readTime: '9 min read',
  },
]

export default function HoneywellHonaSpinoff401kGuidePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Insights', href: '/insights' }, { name: 'Honeywell HONA Spinoff 401(k) Guide', href: '/insights/honeywell-hona-spinoff-401k-guide' }]} />
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'The Honeywell HONA Spinoff in 2026: What to Do With Your 401(k) Before It Closes',
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
              '@id': 'https://www.advisorjay.com/insights/honeywell-hona-spinoff-401k-guide',
            },
            description:
              'Honeywell Aerospace spinoff as HONA expected Q3 2026. Form 10 filed March 2026. $17.4B standalone revenue. Employees: HON shares convert to HON+HONA. 401(k) match arrives as HON stock. Audit total exposure, understand RSU conversion, review investment elections, attend June 3 Investor Day, plan rebalancing.',
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
            The Honeywell HONA Spinoff in 2026: What to Do With Your 401(k) Before It Closes
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-6">
            <ArticleByline updatedDate="2026-03-18" variant="dark" />
            <div className="flex items-center gap-2 text-[#b6d0ed]">
              <Clock size={14} strokeWidth={1.5} />
              <span className="font-sans text-sm">13 min read</span>
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
                Honeywell International announced in its Form 10 filing in March 2026 that Honeywell Aerospace (soon to trade as HONA) will spin off as an independent, publicly traded company in the third quarter of 2026. The spinoff is expected to be tax-free to shareholders, but it creates material complications for employees with significant concentrated positions in Honeywell stock within their 401(k) plans, restricted stock units, or personal holdings. This article walks through what will happen, what you need to do now, and the decision framework for rebalancing before the spinoff closes.
              </p>

              {/* Section 1 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                The Spinoff Mechanics: What Will Happen to Your HON Stock
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Honeywell Aerospace is a $17.4 billion revenue standalone company that currently operates as a division within Honeywell International. Upon spinoff (expected late Q3 2026), each share of Honeywell International (HON) will convert into one share of the remaining Honeywell company (still trading as HON) plus one share of Honeywell Aerospace (trading as HONA). No cash will be required from you - this is an automatic conversion.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                If you own 100 shares of HON before the spinoff, you will own approximately 100 shares of HON (post-spinoff Honeywell) and 100 shares of HONA (Honeywell Aerospace) after the spinoff closes. Shareholders do not choose - the conversion happens automatically. The spinoff is structured as a tax-free corporate reorganization under Section 368(a)(1)(D) of the Internal Revenue Code, which means you do not recognize a taxable gain or loss at the moment of spinoff.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The one exception: if the spinoff results in fractional shares, you will receive cash equal to the fair market value of the fraction. That cash is taxable as a dividend to the extent of gain, but typically the fractional amount is small.
              </p>

              {/* Section 2 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                How Your 401(k) Match Converts in the Spinoff
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                This is the critical point for Honeywell employees. The Honeywell Savings Plan (401(k)) provides an annual match of 87.5 percent of the first 8 percent of eligible pay, deposited annually in January as Honeywell Common Stock held in the Honeywell Common Stock Fund. The match vests over three years.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Currently, all of that match is deposited as HON stock. Upon spinoff, the Honeywell Common Stock Fund will hold both HON and HONA - a 50/50 split of the original HON holding, reflecting the one-to-one conversion ratio. This means if your balance in the Honeywell Common Stock Fund was $100,000 before spinoff, it will become approximately $50,000 in post-spinoff HON and $50,000 in HONA.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                For many Honeywell employees, the Honeywell Common Stock Fund represents 25 to 40 percent of their total 401(k) balance - not by conscious choice, but simply because the company match has accumulated over years. For a 50-year-old with a $1.2 million 401(k), the Honeywell Common Stock Fund might contain $350,000 to $480,000. The spinoff will transform that single-company bet into a two-company bet, but you will still have significant concentrated exposure to both HON and HONA.
              </p>

              {/* Section 3 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Step 1: Audit Your Total Honeywell Exposure Across All Accounts
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Before the spinoff, you must map your total exposure to Honeywell across three categories: 401(k) holdings, outstanding and vested restricted stock units (RSUs), and personal investment accounts.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                <strong className="text-[#333333]">401(k) exposure:</strong> Log into your Honeywell savings plan and run a holdings report. Sum the balance in the Honeywell Common Stock Fund. Note the date, as you will need a baseline to understand the post-spinoff allocation.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                <strong className="text-[#333333]">RSU holdings:</strong> Pull your equity statement from your employer's stock plan portal (typically Merrill Lynch or Fidelity). Identify all outstanding RSU grants, their vesting dates, and the number of shares. Note which grants are already vested (and therefore owned by you outright) and which will vest in future years. Document the quantity and vesting timeline.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                <strong className="text-[#333333]">Personal holdings:</strong> Review your brokerage statements. Sum all Honeywell stock held in taxable investment accounts, IRAs, or other non-qualified accounts. Include any stock purchased in the open market or received from past equity awards that were exercised.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Add these three buckets together. The total is your Honeywell concentration risk. For a senior engineer at Honeywell earning $200,000 per year, it is not uncommon to have $400,000 to $800,000 in total Honeywell holdings across these accounts. Some executives will have substantially more.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Once you know the number, ask yourself: "If Honeywell faced a serious business disruption or market correction, would losing 30 to 50 percent of this value devastate my financial plan?" If the answer is yes, you have a concentration problem that needs attention before the spinoff closes.
              </p>

              {/* Section 4 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Step 2: Understand How Your RSU Grants Will Convert
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Any RSU grants you hold will convert on the same one-to-one basis as shareholder stock: one RSU becomes one HON RSU plus one HONA RSU. However, the accounting happens at the time of settlement (vesting), not at the spinoff date. If an RSU grant vests before the spinoff, you will receive HON stock (old Honeywell). If a grant vests after the spinoff, you will receive HON and HONA in the new allocation.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Example: You have a grant of 1,000 RSUs that vests in December 2026 (after the Q3 spinoff). Upon vesting, instead of receiving 1,000 shares of HON, you will receive approximately 500 shares of post-spinoff HON and 500 shares of HONA. If you have a large grant vesting after the spinoff, you automatically increase your HONA holdings. Plan accordingly.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Review your equity statement and note the vesting dates of all outstanding grants. Pay particular attention to any grants with substantial value that vest in late 2026 or early 2027. You may want to model the post-spinoff allocation impact before deciding on rebalancing moves.
              </p>

              {/* Section 5 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Step 3: Review Your 401(k) Investment Elections Before Spinoff
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The Honeywell Savings Plan allows participants to direct their investment elections among a range of mutual funds and other options. The Honeywell Common Stock Fund is just one option. Before the spinoff, you should review whether continuing to hold 25 to 40 percent of your 401(k) in company stock - soon to be two company stocks - aligns with your diversification goals.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Many financial advisors recommend that company stock should not exceed 10 to 15 percent of a retirement portfolio, especially for employees whose compensation is already tied to company performance (salary, RSUs, bonus). If your 401(k) is heavily weighted toward Honeywell Common Stock, this is the moment to rebalance.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                You can make changes to your investment elections during the plan year, and most plans allow rebalancing actions without restriction during a corporate event like a spinoff. Log into your plan and explore options to redirect future contributions or rebalance existing holdings into diversified index funds or target-date funds.
              </p>

              {/* Section 6 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Step 4: Attend the June 3, 2026 HONA Investor Day
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Honeywell has scheduled an Investor Day for the newly independent Honeywell Aerospace on June 3, 2026. This event will provide detailed financial guidance, strategic priorities, capital allocation plans, and management commentary on the standalone business. If you are a significant HONA shareholder (through your 401(k), RSUs, or personal holdings), attending or reviewing the presentation materials is essential.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                The presentation will help you assess whether HONA is a business you want to own in your portfolio, or whether you prefer to diversify by selling shares after the spinoff. You will also gain insight into HONA's financial strategy, which will help you decide on the appropriate balance between your HON and HONA holdings post-spinoff.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Presentations from investor days are typically posted to the company website. Set a calendar reminder to review the HONA presentation materials in June.
              </p>

              {/* Section 7 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Step 5: Plan Your Post-Spinoff Rebalancing Strategy
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                After the spinoff closes in Q3 2026, you will have a 60 to 90-day window to act without tax complications. The spinoff itself is tax-free, but once the shares are separated, you have flexibility to sell HONA, HON, or both without any tax penalty beyond the normal capital gains rules. (If you hold company stock with significant unrealized gains, consult a tax advisor about the Net Unrealized Appreciation strategy, which can defer capital gains taxes on a portion of your holdings when you separate from service.)
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Consider three scenarios:
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
                <strong className="text-[#333333]">Scenario 1 - Heavy concentration:</strong> You have $600,000 in total Honeywell exposure across 401(k), RSUs, and personal holdings, representing 35 percent of your net worth. Post-spinoff, you might sell 50 to 60 percent of your HONA and HON holdings to reduce concentration to 15 to 20 percent of net worth. Spread the sales over 60 to 90 days to avoid market-timing risk.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
                <strong className="text-[#333333]">Scenario 2 - Moderate concentration:</strong> You have $300,000 in total Honeywell exposure (15 percent of net worth). You decide to keep all HON shares (believing in the core Honeywell business) but sell 70 to 80 percent of HONA shares to diversify. This keeps you invested in Honeywell but reduces overall concentration.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
                <strong className="text-[#333333]">Scenario 3 - Low concentration:</strong> You have $100,000 in total Honeywell exposure (5 percent of net worth). You decide the spinoff is a good opportunity to research both businesses independently and decide to hold both HON and HONA as core positions in your portfolio.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Which scenario fits you depends on your age, wealth, risk tolerance, and broader financial plan. The key is to decide proactively, not reactively.
              </p>

              {/* In-Article CTA */}
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-8 my-12 text-center">
                <MessageSquare size={28} strokeWidth={1.5} className="text-[#1d7682] mx-auto mb-4" />
                <h3 className="font-serif text-[22px] font-semibold text-[#333333] leading-tight">
                  Don't Let the Spinoff Derail Your Diversification
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3 max-w-[480px] mx-auto">
                  Map your total Honeywell exposure and plan your post-spinoff strategy. Most employees have far more concentration risk than they realize.
                </p>
                <div className="mt-6">
                  <Button href="/schedule-consultation" variant="primary">
                    Schedule Your Spinoff Planning Session
                  </Button>
                </div>
              </div>

              {/* Section 8 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Real-World Example: A Senior Engineer at Honeywell
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Consider Janet, a 51-year-old principal engineer at Honeywell earning $200,000 per year. She has been with the company for 16 years. Let us audit her holdings:
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
                <strong className="text-[#333333]">401(k) balance: $850,000</strong>
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Honeywell Common Stock Fund: $320,000 (37.6 percent)</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Diversified index funds and target-date fund: $530,000</li>
              </ul>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
                <strong className="text-[#333333]">Outstanding RSU grants: $185,000 (valued at current HON price)</strong>
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">2,000 RSUs vesting in November 2026 (post-spinoff): $145,000</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">1,500 RSUs vesting in June 2027 (post-spinoff): $40,000</li>
              </ul>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
                <strong className="text-[#333333]">Personal portfolio: $150,000 in Honeywell stock (cost basis $75,000)</strong>
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                <strong className="text-[#333333]">Total Honeywell exposure: $655,000</strong>
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Janet's total net worth is roughly $2.1 million (including home equity). Honeywell represents 31 percent of her liquid net worth. This is excessive concentration, especially for an employee whose salary, bonus, and RSUs are all tied to Honeywell performance. If Honeywell faced a 30 percent stock decline, her net worth would drop by roughly 9 percent - a significant impact on her retirement plan.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                <strong className="text-[#333333]">Janet's post-spinoff plan:</strong>
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">After spinoff closes (late September), her Honeywell Common Stock Fund will split into approximately $160,000 HON and $160,000 HONA</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">She will sell $120,000 of the HONA shares (75 percent) and reinvest the proceeds in diversified funds</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">She will keep the HON shares in her 401(k) and the personal HON holdings (in which she has a $75,000 gain)</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">She will allow her November 2026 RSU grant (which will convert to HON and HONA) to vest but then sell the HONA tranche immediately</li>
                <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">She will revisit the June 2027 RSU grant after reviewing HONA's first quarterly results as an independent company</li>
              </ul>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                Net result: Janet reduces her Honeywell concentration from 31 percent to approximately 16 percent of liquid net worth, while maintaining a meaningful investment in Honeywell (the original company) and keeping the option to add HONA if she believes in its business separately.
              </p>

              {/* Section 9 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Tax Considerations and the Net Unrealized Appreciation Strategy
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                If you separate from Honeywell service (through retirement, severance, or termination) while holding company stock in your 401(k) with significant unrealized gains, you may be eligible for the Net Unrealized Appreciation (NUA) strategy. This technique allows you to roll company stock out of your 401(k) into a taxable brokerage account at the cost basis value, deferring capital gains taxes until you later sell the shares. Upon sale, you pay capital gains tax (long-term, if held over one year) rather than ordinary income tax, potentially saving 10 to 20 percent in taxes.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                If you are approaching retirement and expect to separate from service in 2026 or 2027, consult a tax advisor about the NUA strategy before the spinoff. The mechanics are complex, but the tax savings can be substantial. For example, if you have $320,000 in Honeywell Common Stock Fund with a cost basis of $100,000, the NUA strategy could save $30,000 to $60,000 in taxes depending on your tax bracket.
              </p>

              {/* Section 10 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
                Action Timeline: What to Do Now
              </h2>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                <strong className="text-[#333333]">Now through May 2026:</strong> Audit your total Honeywell exposure across 401(k), RSUs, and personal holdings. Document the amount and date. Review your 401(k) investment elections and consider rebalancing to reduce concentration. If you expect to separate from service in 2026 or early 2027, research the Net Unrealized Appreciation strategy with a tax advisor.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                <strong className="text-[#333333]">June 2026:</strong> Review the HONA Investor Day presentation and financial materials. Begin to form a view on whether you want to own HONA as a separate position.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                <strong className="text-[#333333]">July - August 2026:</strong> Monitor news and SEC filings related to the spinoff. Confirm the exact spinoff date and any special instructions from the Honeywell Savings Plan administrator.
              </p>

              <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
                <strong className="text-[#333333]">September - November 2026:</strong> After the spinoff closes and your positions have converted to HON and HONA, execute your rebalancing plan. Sell HONA, HON, or both according to your diversification goals. Document the cost basis and sales for your tax return.
              </p>

              <div className="mt-8">
                <a
                  href="/schedule-consultation"
                  className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-[#1d7682] hover:text-[#D4B65A] transition-colors"
                >
                  <span>Start Your Spinoff Planning</span>
                  <ChevronRight size={16} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-[#E8E6E1]">
            <p className="font-sans text-xs text-[#5b6a71] leading-relaxed">
              This article is provided for informational purposes only and does not constitute tax advice, investment advice, or a recommendation to pursue any strategy. The information regarding the Honeywell spinoff is based on the Form 10 filed in March 2026 and public announcements, but spinoff details and timelines are subject to change. The tax treatment of the spinoff depends on your individual circumstances, holding periods, and basis. The Net Unrealized Appreciation strategy has specific eligibility requirements and tax consequences that vary depending on your situation. Consult a qualified tax professional or financial advisor before implementing any of these strategies. Farther Finance Advisors, LLC is a registered investment adviser with the SEC. Registration does not imply a certain level of skill or training. Past performance is not indicative of future results.
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
            Reduce Your Honeywell Concentration Risk
          </h2>
          <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
            Many Honeywell employees have 25 to 40 percent of their net worth tied to a single company. The spinoff is the right time to rebalance.
          </p>
          <div className="mt-10">
            <Button href="/schedule-consultation" variant="primary">
              Plan Your Rebalancing Strategy
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
