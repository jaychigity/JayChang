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
 'Arizona High Earner Tax Reduction 2026: Year-End Tax Planning | Advisor Jay',
 description:
 'Year-end tax planning strategies for high earners in Arizona earning $200K-$800K+. Reduce federal and state taxes through 401(k), backdoor Roth, HSA, charitable giving, and Arizona tax credits.',
 alternates: {
 canonical:
 'https://www.advisorjay.com/insights/arizona-high-earner-tax-reduction-2026',
 },
 openGraph: {
 title:
 'Arizona High Earner Tax Reduction 2026: Year-End Tax Planning',
 description:
 'Year-end tax planning strategies for high earners in Arizona earning $200K-$800K+. Reduce federal and state taxes through 401(k), backdoor Roth, HSA, charitable giving, and Arizona tax credits.',
 type: 'article',
 url: 'https://www.advisorjay.com/insights/arizona-high-earner-tax-reduction-2026',
 },
}

const relatedArticles = [
 {
 slug: 'mega-backdoor-roth-2026-guide',
 category: 'TAX PLANNING',
 title: 'The Mega Backdoor Roth in 2026: $72,000 in Tax-Free Savings',
 excerpt:
 'Complete guide to the mega backdoor Roth strategy. Contribute up to $72,000 annually through 401(k) after-tax contributions and Roth conversions.',
 readTime: '10 min read',
 },
 {
 slug: 'rsu-withholding-gap-22-percent',
 category: 'TAX PLANNING',
 title: 'Why Your 22% RSU Withholding Is Almost Certainly Not Enough',
 excerpt:
 'The flat 22% federal withholding on RSU vesting is rarely sufficient for tech employees earning $200K+. Understand the gap and how to fix it.',
 readTime: '7 min read',
 },
 {
 slug: 'how-to-choose-cfp-scottsdale',
 category: 'ADVISORY',
 title: 'How to Choose a Certified Financial Planner (CFP®) in Scottsdale',
 excerpt:
 'Five questions that separate exceptional advisors from the adequate, plus how to verify credentials before you hire.',
 readTime: '7 min read',
 },
]

export default function ArizonaHighEarnerTaxReduction2026Page() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Insights', href: '/insights' }, { name: 'Arizona High Earner Tax Reduction 2026', href: '/insights/arizona-high-earner-tax-reduction-2026' }]} />
 {/* Article JSON-LD */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
   'How High Earners in Arizona Can Cut Their 2026 Tax Bill Before December 31',
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
   '@id': 'https://www.advisorjay.com/insights/arizona-high-earner-tax-reduction-2026',
  },
  description:
   'Year-end tax planning for $200K-$800K+ earners in Arizona. Federal strategies: 401(k), mega backdoor Roth, backdoor Roth, HSA, charitable bunching, appreciated stock donation. Arizona-specific: qualified charitable tax credit, school tax credit.',
  }),
  }}
 />

 {/* FAQPage JSON-LD */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
   {
   '@type': 'Question',
   name: 'What is Arizona\'s income tax rate for 2026?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'Arizona has a flat income tax rate of 2.5 percent, one of the lowest in the country. This favorable rate is a significant advantage for high-income earners compared to neighboring California (which tops out at 13.3 percent) and most other states.',
   },
   },
   {
   '@type': 'Question',
   name: 'Can high earners in Arizona claim the qualified charitable tax credit?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'Yes. For 2026, the Arizona qualified charitable tax credit (QCT) allows married couples filing jointly to claim up to $841 in credits per year, and single filers up to $420. You must donate to a qualified charitable organization. The credit (not a deduction) directly reduces state tax liability dollar-for-dollar.',
   },
   },
   {
   '@type': 'Question',
   name: 'What is the school tax credit in Arizona?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'Arizona allows a scholarship tax credit (STO credit) where donations to school tuition organizations can be claimed as a credit on Arizona state taxes. For 2026, the credit limit is $1,459 for married couples filing jointly. Donations directly reduce your Arizona state tax liability.',
   },
   },
  ],
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
   WEALTH PLANNING
  </span>
  </div>

  <h1 className="font-serif text-[42px] max-md:text-[30px] font-bold text-[#F7F4EE] leading-[1.2]">
  How High Earners in Arizona Can Cut Their 2026 Tax Bill Before December 31
  </h1>

  <div className="flex flex-wrap items-center gap-6 mt-6">
  <ArticleByline updatedDate="2026-03-18" variant="dark" />
  <div className="flex items-center gap-2 text-[#b6d0ed]">
   <Clock size={14} strokeWidth={1.5} />
   <span className="font-sans text-sm">9 min read</span>
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
   Arizona offers a significant tax advantage that many high-earning professionals - particularly those relocating from California, New York, or other high-tax states - do not fully exploit. At 2.5 percent, Arizona&apos;s flat income tax rate is among the lowest in the nation. Yet even in Arizona, a family earning $350,000 to $800,000 faces substantial federal and state income tax exposure. By year end, there are concrete strategies - some federal, some Arizona-specific - that can meaningfully reduce that burden when executed deliberately before December 31.
   </p>

   {/* Section 1 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Arizona&apos;s Tax Advantage and Why Year-End Planning Matters
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Arizona&apos;s 2.5 percent flat income tax rate is genuinely favorable compared to neighboring California, which tops out at 13.3 percent, or many northeastern states at 8 to 10 percent. For a professional earning $500,000, Arizona&apos;s advantage translates to roughly $50,000 per year versus California. Over a career, this compounds to hundreds of thousands in tax savings.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   But Arizona residents are not exempt from federal income tax. A married couple earning $400,000 in 2026 still faces a federal marginal rate of 32 to 35 percent, plus Medicare taxes (1.45 percent employee / 2.35 percent for those earning over $200,000 single, $250,000 married due to the 3.8 percent net investment income tax and the 0.9 percent additional Medicare tax). And while Arizona state tax is low, it still applies to all income.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Year-end tax planning is powerful because certain strategies - retirement contributions, charitable giving thresholds, and state-specific credits - can only be executed in the calendar year they apply to. December 31 is often the deadline.
   </p>

   {/* Section 2 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Federal Strategy 1: Maximize 401(k) Deferral and Mega Backdoor Roth
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The most straightforward federal tax reduction is maxing your 401(k) employee deferral. For 2026, that limit is $24,500 (or $32,500 if age 50 or older with the catch-up). Every dollar deferred reduces your taxable income dollar-for-dollar and saves you roughly 32 to 37 cents in federal tax, depending on your marginal rate, plus 2.5 percent in Arizona state tax.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   But if your employer plan permits it, the mega backdoor Roth offers vastly more. As we detail in our mega backdoor Roth guide, you can contribute up to $72,000 annually to your 401(k) when combined with employer match. An engineer earning $250,000 might max the employee deferral ($24,500), receive employer match ($15,000), and contribute an additional $32,500 as after-tax dollars converted to Roth. That $32,500 after-tax contribution saves 2.5 percent Arizona state tax ($812) at the time of contribution since you are contributing dollars on which you have already paid federal tax.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Action: Confirm with your plan administrator that after-tax contributions and in-plan Roth conversions are permitted. If so, arrange the after-tax contribution before year end and request an immediate in-plan conversion.
   </p>

   {/* Section 3 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Federal Strategy 2: Backdoor Roth IRA
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If your income exceeds the Roth IRA contribution limits (which it likely does if you earn $200,000+), execute a backdoor Roth IRA before year end. Contribute $7,500 to a traditional IRA, then immediately convert it to Roth. This strategy has no income limits and provides $7,500 per person in additional tax-free retirement savings.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The backdoor Roth is not a deduction and does not reduce your 2026 tax bill, but it does place pre-tax dollars into tax-free retirement accounts. If you are married and your spouse is also eligible, execute dual backdoor Roth conversions for $15,000 total.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Critical: If you hold a traditional IRA with pre-tax balances, the pro rata rule applies to backdoor Roth conversions. Consult a tax advisor before executing if you have existing IRA balances.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Action: Contact your brokerage before December 31 to open a traditional IRA if you do not have one, contribute $7,500 to it, and request an immediate conversion to Roth. Document the contribution and conversion dates for your tax return.
   </p>

   {/* Section 4 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Federal Strategy 3: Health Savings Account (HSA)
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If you are enrolled in a high-deductible health plan (HDHP), the HSA is one of the most tax-efficient accounts available. For 2026, individual coverage HSA limit is $4,400, and family coverage is $8,750. Contributions are tax-deductible, growth is tax-free, and qualified medical expense withdrawals are tax-free.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Many high earners treat the HSA as a retirement account: contribute the maximum each year, pay medical expenses out of pocket (keeping receipts for documentation), and allow the HSA to grow invested. This strategy results in the account functioning as a second, stealth retirement account with no required distributions.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   A $8,750 HSA contribution saves roughly $3,182 in combined federal and Arizona tax for a high earner in the 32 percent federal bracket plus 2.5 percent state.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Action: Confirm you are eligible (enrolled in an HDHP). If so, increase your payroll withholding to maximize HSA contributions before December 31. Alternatively, if you have already exceeded the per-pay-period maximum, request a direct contribution from your employer or a post-payroll personal contribution directly to the HSA administrator.
   </p>

   {/* Section 5 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Federal Strategy 4: Charitable Bunching and Donor-Advised Funds
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The standard deduction for married couples in 2026 is $30,000. If your itemized deductions - mortgage interest, property taxes, and charitable contributions combined - do not exceed the standard deduction, you gain no tax benefit from those deductions. Many high earners in Arizona fall into this trap because they eliminated the state income tax deduction cap at the federal level.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Strategy: Bunch three to five years of charitable giving into a single calendar year. If you typically donate $10,000 annually to charity, instead donate $40,000 to $50,000 in 2026. This concentrates your charitable deductions into one year, pushing your itemized deductions above the standard deduction and creating a tax benefit. In the other years, you take the standard deduction.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   To implement bunching, use a Donor-Advised Fund (DAF). A DAF is a charitable account where you make a contribution (which is immediately tax-deductible), obtain the tax deduction in 2026, and then direct grants to actual charities over multiple years. This separates the year you get the deduction from the years you direct funds to specific charities.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Example: A couple earning $500,000 typically donates $10,000 per year to various charities. Neither year yields a deduction because itemized deductions are $20,000 (mortgage interest plus property tax only) - below the $30,000 standard deduction. Instead, in year one, they contribute $50,000 to a DAF, create an itemized deduction of $50,000 plus $20,000 in other deductions = $70,000, exceeding the standard deduction by $40,000. They then spend years two through five recommending grants to charities from the DAF. Net result: they achieve a tax deduction for their charitable intent while maintaining flexibility in the timing of distributions.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Action: If you are charitably inclined, meet with a tax advisor in November to model bunching. If it creates a benefit, open a DAF at Fidelity, Vanguard, or Schwab and make a contribution before December 31.
   </p>

   {/* Section 6 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Federal Strategy 5: Donate Appreciated Securities
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If you hold stocks or mutual funds with substantial unrealized gains, donating them directly to charity bypasses capital gains tax entirely while still allowing you the charitable deduction for the full fair market value.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Example: You own 1,000 shares of a stock purchased at $50 per share. The stock now trades at $200 per share. If you sell the stock and donate the proceeds, you owe capital gains tax on the $150,000 gain. Federal capital gains tax (at your rate) plus Arizona tax could cost $40,000 to $55,000, leaving only $95,000 to donate. Instead, donate the shares directly to a charity or DAF. You avoid the $40,000 capital gains tax and claim a $200,000 charitable deduction. Net benefit: you keep an additional $40,000, and the charity receives $200,000 of asset value.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Most community foundations, donor-advised funds, and large charities accept direct securities transfers. Coordinate with the charity or DAF on the mechanics before December 31.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Action: Review your portfolio for positions with significant unrealized gains. If you intended to donate to charity anyway, transfer appreciated securities instead of selling them and donating cash.
   </p>

   {/* Section 7 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Federal Strategy 6: Tax-Loss Harvesting Before December 31
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If you hold investments with unrealized losses, you can sell them to realize the loss and offset capital gains or up to $3,000 of ordinary income in 2026. This is tax-loss harvesting. Immediately reinvest the proceeds in a substantially similar (but not identical) security to maintain market exposure while capturing the tax benefit.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Critical: The IRS wash-sale rule prohibits repurchasing the same or substantially identical security within 30 days before or after the loss-generating sale. If you sell a position at a loss on December 31, do not buy the same position back until January 30 of the following year. This ensures the loss is deductible.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   A $20,000 loss harvested in 2026 saves $7,200 in combined federal and state tax for a high earner, or up to $10,500 if you have offsetting capital gains to realize.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Action: Review your portfolio in October and November for positions trading below cost basis. Execute tax-loss harvesting sales before December 31 and document the wash-sale rule 30-day window.
   </p>

   {/* Section 8 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Arizona Strategy 1: Qualified Charitable Tax Credit
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Arizona offers a unique state tax credit - not a deduction, but a dollar-for-dollar credit - for donations to qualified charitable organizations. For 2026, the credit is limited to $841 for married couples filing jointly, or $420 for single filers. This is separate from the federal charitable deduction.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   To claim the Arizona qualified charitable tax credit, you must donate to a qualified Arizona charity. The credit directly reduces your Arizona state tax liability. If you donate $1,000 to a qualified charity and claim the $841 credit, your Arizona tax liability decreases by $841, and you still have a federal charitable deduction for the $1,000 donation.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Qualified charities include organizations that combat domestic violence, provide shelter, supply food, or support veterans. The list is specific. Verify the organization is listed before donating.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Action: If you are donating to charity for charitable reasons anyway, prioritize Arizona-qualified organizations to claim the state credit. This stacks with any federal charitable deduction and delivers a more tax-efficient gift.
   </p>

   {/* Section 9 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Arizona Strategy 2: School Tuition Organization (STO) Tax Credit
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Arizona allows another state tax credit: donations to School Tuition Organizations (STOs) which provide scholarships to private school students. The 2026 credit limit is $1,459 for married couples filing jointly, or $729 for single filers.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If you have school-age children attending private schools in Arizona, or you support families who do, donating to an STO creates an immediate $1,459 state tax credit while funding tuition scholarships. It is one of the most direct state tax reduction strategies available to Arizona residents.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The mechanics: you donate cash to a qualifying STO, the STO directs scholarships to eligible students, and you claim a tax credit on your Arizona return. The credit (not a deduction) reduces your state tax liability dollar-for-dollar, up to the limit.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Action: If you support private education in Arizona, donate to a verified STO before December 31 to claim the credit on your 2026 tax return.
   </p>

   {/* In-Article CTA */}
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-8 my-12 text-center">
   <MessageSquare size={28} strokeWidth={1.5} className="text-[#1d7682] mx-auto mb-4" />
   <h3 className="font-serif text-[22px] font-semibold text-[#333333] leading-tight">
   Your 2026 Tax Plan is Too Important to Leave to Chance
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3 max-w-[480px] mx-auto">
   Let us run the numbers for your specific situation and identify which strategies save the most. Most families can save $15,000 to $50,000 by December 31 with proper planning.
   </p>
   <div className="mt-6">
   <Button href="/schedule-consultation" variant="primary">
    Schedule Your Year-End Tax Planning Session
   </Button>
   </div>
   </div>

   {/* Section 10 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Real-World Example: $350,000 Earner in Arizona
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Let us walk through a concrete year-end tax plan for a married couple, both age 40, earning $350,000 combined in Arizona.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   <strong className="text-[#333333]">Baseline 2026 federal tax liability (without planning):</strong> roughly $80,000.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
   <strong className="text-[#333333]">Year-End Tax Strategies They Execute:</strong>
   </p>

   <ul className="list-disc pl-6 mb-6 space-y-2">
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Max 401(k) deferrals ($24,500 each = $49,000 combined) - saves $15,680 federal + $1,225 state = $16,905</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Backdoor Roth IRA ($7,500 each = $15,000 combined) - saves $3,750 state = $3,750</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Max HSA ($8,750 individual coverage) - saves $3,181</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Donate $50,000 to Donor-Advised Fund (bunching 5 years of $10K annual donations) - creates itemized deduction that exceeds standard deduction by approximately $20,000 - saves roughly $6,800</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Donate appreciated stock with $10,000 unrealized gain to DAF instead of selling - avoids $3,000 capital gains tax</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Donate $841 to Arizona-qualified charity (claimed as state credit) - saves $841</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Tax-loss harvest $15,000 in realized losses against capital gains - saves $5,400</li>
   </ul>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   <strong className="text-[#333333]">Total 2026 tax savings from planning:</strong> approximately $39,877.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Net result: Their 2026 federal tax liability falls from $80,000 to roughly $40,000. Additionally, they place $95,000 into tax-advantaged retirement accounts, donate $50,841 to charities (funded with appreciated securities), and maintain full liquidity for all other purposes.
   </p>

   {/* Section 11 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Timing: When to Act
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Many of these strategies require action before December 31. However, some can be implemented in early January or later if you act quickly:
   </p>

   <ul className="list-disc pl-6 mb-6 space-y-2">
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]"><strong className="text-[#333333]">Must be completed by December 31:</strong> 401(k) deferrals (must be withheld before year end), backdoor Roth contributions and conversions, HSA contributions, donations for charitable deductions, tax-loss harvesting</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]"><strong className="text-[#333333]">Can be completed by April (tax filing deadline):</strong> IRA contributions for the prior year (if eligible), some estimated tax payments</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]"><strong className="text-[#333333]">Can be initiated in Q1 but affects 2026 taxes:</strong> Mega backdoor Roth if your plan allows quarterly conversions</li>
   </ul>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Start planning in October so you have time to verify your plan&apos;s rules, coordinate with your tax advisor, and execute by December 31.
   </p>

   <div className="mt-8">
   <a
   href="/schedule-consultation"
   className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-[#1d7682] hover:text-[#D4B65A] transition-colors"
   >
   <span>Start Your Year-End Tax Planning</span>
   <ChevronRight size={16} strokeWidth={1.5} />
   </a>
   </div>
  </div>
  </AnimateOnScroll>

  {/* Disclaimer */}
  <div className="mt-12 pt-8 border-t border-[#E8E6E1]">
  <p className="font-sans text-xs text-[#5b6a71] leading-relaxed">
   This article is provided for informational purposes only and does not constitute tax advice, investment advice, or a recommendation to pursue any strategy. Tax laws change frequently. The 2026 rates, limits, and credit amounts referenced are based on current law but are subject to change. The strategies described depend on your individual circumstances, filing status, income level, and state of residency. Consult a qualified tax professional or financial advisor before implementing any of these strategies. Farther Finance Advisors, LLC is a registered investment adviser with the SEC. Registration does not imply a certain level of skill or training. Past performance is not indicative of future results.
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
  How Much Are You Leaving on the Table?
  </h2>
  <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
  Most high earners in Arizona save between $15,000 and $50,000 in taxes with proper year-end planning. Let us calculate your specific number.
  </p>
  <div className="mt-10">
  <Button href="/schedule-consultation" variant="primary">
   Schedule Your Planning Session
  </Button>
  </div>
  </div>
 </section>
 </>
 )
}
