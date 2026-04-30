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
 'Mega Backdoor Roth 2026: $72,000 Tax-Free 401(k) Strategy | Advisor Jay',
 description:
 'Complete guide to the mega backdoor Roth strategy for 2026. Learn how to contribute up to $72,000 annually through 401(k) after-tax contributions and in-plan conversions. Step-by-step instructions and real examples.',
 alternates: {
 canonical:
 'https://www.advisorjay.com/insights/mega-backdoor-roth-2026-guide',
 },
 openGraph: {
 title:
 'Mega Backdoor Roth 2026: $72,000 Tax-Free 401(k) Strategy',
 description:
 'Complete guide to the mega backdoor Roth strategy for 2026. Learn how to contribute up to $72,000 annually through 401(k) after-tax contributions and in-plan conversions.',
 type: 'article',
 url: 'https://www.advisorjay.com/insights/mega-backdoor-roth-2026-guide',
 },
}

const relatedArticles = [
 {
 slug: 'rsu-withholding-gap-22-percent',
 category: 'TAX PLANNING',
 title: 'Why Your 22% RSU Withholding Is Almost Certainly Not Enough',
 excerpt:
 'The flat 22% federal withholding on RSU vesting is rarely sufficient for tech employees earning $200K+. Understand the gap and how to fix it.',
 readTime: '7 min read',
 },
 {
 slug: 'arizona-high-earner-tax-reduction-2026',
 category: 'WEALTH PLANNING',
 title: 'How High Earners in Arizona Can Cut Their 2026 Tax Bill Before December 31',
 excerpt:
 'Year-end tax planning strategies for $200K-$800K+ earners in Arizona. From backdoor Roths to donor-advised funds.',
 readTime: '9 min read',
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

export default function MegaBackdoorRoth2026Page() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Insights', href: '/insights' }, { name: 'Mega Backdoor Roth 2026 Guide', href: '/insights/mega-backdoor-roth-2026-guide' }]} />
 {/* Article JSON-LD */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
   'The Mega Backdoor Roth in 2026: $72,000 in Tax-Free Savings Your 401(k) Plan May Allow',
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
   '@id': 'https://www.advisorjay.com/insights/mega-backdoor-roth-2026-guide',
  },
  description:
   'Complete guide to mega backdoor Roth strategy: $72,000 annual tax-free 401(k) contributions through after-tax conversions. Requirements, step-by-step process, and real examples.',
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
   name: 'What is the mega backdoor Roth limit for 2026?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'The mega backdoor Roth is limited by the Section 415(c) total annual contribution limit for 2026, which is $72,000. This total includes your pre-tax deferrals, employer match, employer profit sharing, and after-tax contributions combined.',
   },
   },
   {
   '@type': 'Question',
   name: 'Does every 401(k) plan allow mega backdoor Roth contributions?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'No. Your plan must explicitly permit after-tax contributions AND either in-plan Roth conversions or in-service distributions. Large employer plans like those at Intel, NVIDIA, and many tech companies do offer this, but you must verify with your plan administrator. Many smaller employers&apos; plans do not.',
   },
   },
   {
   '@type': 'Question',
   name: 'What is the pro rata rule and why does it matter for mega backdoor Roth?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'The pro rata rule requires that when you convert after-tax amounts to Roth, the IRS treats your conversion as coming proportionally from both pre-tax and after-tax balances in all your IRAs and 401(k)s combined. This can result in unwanted taxable income even on conversions of after-tax contributions. Many high-income earners with old traditional IRAs face this problem.',
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
   TAX PLANNING
  </span>
  </div>

  <h1 className="font-serif text-[42px] max-md:text-[30px] font-bold text-[#F7F4EE] leading-[1.2]">
  The Mega Backdoor Roth in 2026: $72,000 in Tax-Free Savings Your 401(k) Plan May Allow
  </h1>

  <div className="flex flex-wrap items-center gap-6 mt-6">
  <ArticleByline updatedDate="2026-03-18" variant="dark" />
  <div className="flex items-center gap-2 text-[#b6d0ed]">
   <Clock size={14} strokeWidth={1.5} />
   <span className="font-sans text-sm">10 min read</span>
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
   For high-income professionals - particularly engineers, executives, and tech employees with six-figure compensation - the mega backdoor Roth represents one of the most powerful retirement savings strategies available. It allows you to accumulate up to $72,000 per year in tax-free retirement savings, far exceeding what a standard 401(k) deferral or even a traditional backdoor Roth IRA permits. Yet most people have never heard of it, and many employers do not offer it. If your 401(k) plan permits this strategy, using it could mean an extra $500,000 to $1 million in tax-free wealth by retirement.
   </p>

   {/* Section 1 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   How the Mega Backdoor Roth Works
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The mega backdoor Roth is not a special account or retirement plan type. Rather, it is a strategy that takes advantage of the Internal Revenue Code Section 415(c) total annual contribution limit to a 401(k) plan - currently $72,000 for 2026. This limit encompasses all contributions to your 401(k) from all sources combined: your pre-tax deferrals, your employer&apos;s match, any employer profit sharing, and critically, any after-tax contributions you can make.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Here is the mechanics. Suppose you earn $250,000 annually. You maximize your 2026 employee deferral at $24,500. Your employer contributes a match of $15,000. That totals $39,500, leaving $32,500 of remaining contribution room under the $72,000 ceiling. If your plan permits after-tax contributions, you can contribute that remaining $32,500 as after-tax dollars into the 401(k). The plan must also permit either in-plan Roth conversions or in-service distributions. If it does, you can convert or distribute those after-tax dollars directly into a Roth IRA, where they will grow tax-free forever. You accomplish this nearly tax-free because you are converting dollars on which you have already paid income tax.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The total result: you place $72,000 into Roth accounts in a single calendar year. Compare this to the standard Roth IRA, where contribution limits are only $7,500 for 2026 (or $8,500 if age 50 or older), and you are subject to income phase-out rules that eliminate contributions entirely for high earners. The mega backdoor Roth has no income limits and allows roughly ten times the contribution.
   </p>

   {/* Section 2 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Critical Requirements: Not All Plans Allow This
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The mega backdoor Roth is only available if your 401(k) plan explicitly permits after-tax contributions and provides either in-plan Roth conversions or in-service distributions. Not all plans do. You must verify three things with your plan administrator or HR department before proceeding.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
   <strong className="text-[#333333]">1. After-Tax Contributions Allowed</strong>
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Your plan document must permit after-tax (non-Roth) contributions. Some plans explicitly exclude this. You cannot make an after-tax contribution to a plan that does not allow them.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
   <strong className="text-[#333333]">2. In-Plan Roth Conversions or In-Service Distributions</strong>
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Your plan must offer either in-plan Roth conversions (which allow you to convert after-tax dollars to Roth status within the 401(k) plan itself) or in-service distributions (which allow you to withdraw the after-tax dollars while still employed and roll them into a Roth IRA). Without one of these mechanisms, the after-tax dollars will sit in the plan as pre-tax earnings until retirement or termination.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
   <strong className="text-[#333333]">3. Understanding Your Plan&apos;s Timeline</strong>
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Even if your plan allows after-tax contributions, some plans only allow conversion or distribution once per quarter or once per year. Others allow it immediately. The timing difference can matter significantly because it affects how much investment growth you accumulate in after-tax status (which is not ideal). Many plans at large employers like Intel, NVIDIA, Apple, Google, Meta, and Microsoft do permit mega backdoor Roth conversions. Many mid-sized and smaller employers&apos; plans do not.
   </p>

   {/* Section 3 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Step-by-Step Execution
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If your plan permits the strategy, here is how to execute it properly:
   </p>

   <h3 className="font-sans text-[17px] font-bold text-[#333333] leading-[1.8] mt-8 mb-3">
   Step 1: Max Your Employee Deferral
   </h3>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The 2026 employee deferral limit is $24,500, or $32,500 if you are age 50 or older (which includes the $8,000 catch-up). Instruct your payroll department to withhold enough each pay period to hit this amount by year end. You want this locked in early to maximize the growth of pre-tax dollars.
   </p>

   <h3 className="font-sans text-[17px] font-bold text-[#333333] leading-[1.8] mt-8 mb-3">
   Step 2: Employer Match Deposits Itself
   </h3>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Your employer&apos;s match contribution happens automatically based on your employer&apos;s formula. You do not need to do anything. Simply allow the match to accumulate in your 401(k) account.
   </p>

   <h3 className="font-sans text-[17px] font-bold text-[#333333] leading-[1.8] mt-8 mb-3">
   Step 3: Calculate Remaining 415(c) Room
   </h3>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   For 2026, subtract your employee deferral and employer match from $72,000. The remainder is your after-tax contribution room. If you deferred $24,500 and the employer match was $15,000, your remaining room is $32,500.
   </p>

   <h3 className="font-sans text-[17px] font-bold text-[#333333] leading-[1.8] mt-8 mb-3">
   Step 4: Contribute After-Tax Dollars
   </h3>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Contact your plan administrator or payroll department and request an after-tax contribution in the amount you calculated. This will likely be handled as a lump-sum deposit rather than a payroll withholding. You are contributing dollars on which you have already paid income tax, so there is no additional income tax owed at the time of contribution.
   </p>

   <h3 className="font-sans text-[17px] font-bold text-[#333333] leading-[1.8] mt-8 mb-3">
   Step 5: Convert to Roth Immediately
   </h3>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If your plan permits in-plan conversions, request that the after-tax dollars be converted to Roth status within the 401(k) plan - usually done the same day or within a week of deposit. If your plan offers in-service distributions, withdraw the after-tax dollars and roll them directly into a Roth IRA within 60 days. The key is to do this quickly, before the after-tax dollars generate earnings in the 401(k).
   </p>

   {/* Section 4 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   The Pro Rata Rule: A Pitfall to Avoid
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The mega backdoor Roth strategy works cleanly if you have no other pre-tax retirement savings. But if you have a traditional IRA, SEP-IRA, or SIMPLE-IRA outside your 401(k), the pro rata rule may complicate the strategy and create unexpected tax bills.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The pro rata rule (governed by IRC Section 408(d)(2)) requires that when you convert after-tax amounts to Roth, the IRS treats the conversion as coming proportionally from all your pre-tax and after-tax retirement accounts combined. This applies across all your IRAs and any pre-tax balances in your 401(k)s, aggregated together.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Example: suppose you have a traditional IRA with $100,000 of pre-tax money and you want to convert $30,000 of after-tax mega backdoor Roth contributions to Roth. The pro rata rule says you cannot convert only the after-tax $30,000 tax-free. Instead, your conversion is treated as 25 percent pre-tax ($100,000 divided by $130,000 total) and 75 percent after-tax ($30,000 divided by $130,000 total). This means $7,500 of the conversion is taxable.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Solution: If you have pre-tax IRA balances, consider rolling them into your 401(k) plan before executing the mega backdoor Roth conversion. Many plans accept rollovers from IRAs. Once the traditional IRA balance is inside the 401(k), it is no longer aggregated with your conversion calculation, and the conversion becomes nearly tax-free. Verify with your plan administrator that your plan permits IRA rollovers.
   </p>

   {/* In-Article CTA */}
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-8 my-12 text-center">
   <MessageSquare size={28} strokeWidth={1.5} className="text-[#1d7682] mx-auto mb-4" />
   <h3 className="font-serif text-[22px] font-semibold text-[#333333] leading-tight">
   Unsure if Your Plan Allows This Strategy?
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3 max-w-[480px] mx-auto">
   We can help you determine your plan&apos;s capabilities and structure the conversions correctly. Let&apos;s make sure you are not leaving tax-free savings on the table.
   </p>
   <div className="mt-6">
   <Button href="/schedule-consultation" variant="primary">
    Schedule a Virtual Meeting
   </Button>
   </div>
   </div>

   {/* Section 5 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Real-World Example
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Let us work through a concrete example to show how this accumulates over time.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   <strong className="text-[#333333]">The Scenario:</strong> Sarah is a 35-year-old software engineer in Silicon Valley earning $250,000 in base salary plus $80,000 in annual RSU grants. Her 401(k) plan at her employer explicitly permits after-tax contributions and in-plan Roth conversions.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   For 2026, here is her contribution breakdown:
   </p>

   <ul className="list-disc pl-6 mb-6 space-y-2">
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Employee pre-tax deferral: $24,500</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Employer match (let&apos;s assume 6 percent of base salary): $15,000</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">After-tax contribution to reach $72,000 cap: $32,500</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">In-plan conversion of after-tax dollars to Roth: $32,500</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Total annual retirement savings: $72,000 (of which $57,000 goes to Roth)</li>
   </ul>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Assuming 7 percent annual growth and continuing this contribution strategy for 30 years (until age 65), Sarah&apos;s Roth balances would accumulate to approximately $8.2 million tax-free. Her pre-tax 401(k) balance would accumulate to approximately $2.1 million in pre-tax dollars. Upon retirement, she can withdraw from the Roth tax-free, and the pre-tax balance will be subject to income tax at her marginal rate at that time.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If she had only maxed the standard employee deferral each year ($24,500 annually), her 30-year accumulation would be roughly $2.2 million. The mega backdoor Roth added $6 million more - purely from the ability to place an additional $47,500 annually into tax-free accounts.
   </p>

   {/* Section 6 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Catch-Up Contributions and Enhanced Catch-Up Rules
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If you are age 50 or older, you are entitled to an additional $8,000 catch-up contribution to your 401(k) for 2026, bringing the employee deferral limit to $32,500. This is separate from the $72,000 Section 415(c) total limit and further increases your mega backdoor Roth capacity.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Starting in 2025, the SECURE 2.0 Act introduced an enhanced catch-up provision for employees ages 60 through 63. These individuals can contribute an additional $11,250 catch-up amount instead of the standard $8,000. This enhanced catch-up exists through 2032 and represents an even larger opportunity for those in this specific age range who are still working and earning substantial income.
   </p>

   {/* Section 7 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Comparing to Traditional and Backdoor Roth IRAs
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   High earners often ask how the mega backdoor Roth compares to a traditional backdoor Roth IRA strategy. The answer is straightforward: the mega backdoor Roth is dramatically superior in terms of contribution capacity.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   A traditional Roth IRA has a 2026 contribution limit of just $7,500 ($8,500 if age 50 or older). More importantly, direct contributions to a Roth IRA are subject to income phase-out rules. For single filers in 2026, Roth IRA contributions phase out between $146,000 and $161,000 of modified adjusted gross income (MAGI). Married filers filing jointly phase out between $230,000 and $240,000. If you earn more than these thresholds, you cannot contribute to a Roth IRA directly.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The backdoor Roth IRA is a workaround: you contribute to a traditional IRA (which has no income limits) and then convert it to Roth (which also has no income limits). This allows high earners to get $7,500 into Roth status annually. However, it too suffers from the pro rata rule if you have other pre-tax IRA balances.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The mega backdoor Roth has no income limits, allows contributions of $47,500 to $72,000 per year (depending on your employer match), and does not trigger the pro rata rule as long as you coordinate properly with any existing IRA balances. If your employer plan permits it, the mega backdoor Roth is the superior strategy.
   </p>

   {/* Section 8 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Timing and Quarterly Vesting
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Tech employees and equity grant recipients often deal with quarterly RSU vesting or restricted stock unit awards. If your mega backdoor Roth strategy depends on after-tax contributions, you will want to ensure your after-tax deposits and conversions happen as soon as possible after each quarterly vest to minimize the time that earnings accumulate in after-tax status.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Some plans allow rolling after-tax contributions and conversions each quarter. Others operate on an annual or semi-annual cycle. Understanding your plan&apos;s conversion window is critical to executing this strategy efficiently. The sooner you convert, the sooner those dollars grow tax-free in the Roth account rather than as pre-tax earnings in the 401(k).
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If your plan only converts once per year, consider staggering after-tax contributions throughout the year rather than depositing everything at once. This minimizes earnings accumulation in after-tax status and ensures you hit the conversion window at the right time.
   </p>

   {/* Section 9 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Common Mistakes and How to Avoid Them
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
   <strong className="text-[#333333]">Mistake 1: Not Verifying Your Plan Allows It</strong>
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Many people assume their plan offers this strategy without asking. Call your HR or benefits administrator directly and ask: Does our plan permit after-tax contributions? Does our plan permit in-plan Roth conversions or in-service distributions? Get the answer in writing if possible.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
   <strong className="text-[#333333]">Mistake 2: Ignoring the Pro Rata Rule</strong>
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If you have a traditional IRA or rollover IRA with pre-tax balances, executing a mega backdoor Roth conversion without addressing the pro rata rule can result in a significant unexpected tax bill. Roll your traditional IRA into your 401(k) first if possible.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
   <strong className="text-[#333333]">Mistake 3: Waiting to Convert Until Year End</strong>
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If you wait until December to make after-tax contributions and then try to convert, you miss out on growth in Roth status for most of the year. Start your mega backdoor Roth contributions as early as possible in the calendar year.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
   <strong className="text-[#333333]">Mistake 4: Forgetting Annual Contribution Limits</strong>
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Remember that the $72,000 Section 415(c) limit is per calendar year. If you have multiple employers or have changed jobs mid-year, you need to account for contributions at both employers to ensure you do not exceed the annual limit across all plans.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Exceeding the contribution limit results in an excess contribution that must be corrected - typically by withdrawal plus taxable earnings. This creates needless complexity and tax headaches.
   </p>

   <div className="mt-8">
   <a
   href="/schedule-consultation"
   className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-[#1d7682] hover:text-[#D4B65A] transition-colors"
   >
   <span>Learn How to Implement This Strategy</span>
   <ChevronRight size={16} strokeWidth={1.5} />
   </a>
   </div>
  </div>
  </AnimateOnScroll>

  {/* Disclaimer */}
  <div className="mt-12 pt-8 border-t border-[#E8E6E1]">
  <p className="font-sans text-xs text-[#5b6a71] leading-relaxed">
   This article is provided for informational purposes only and does not constitute investment advice, tax advice, or a recommendation to pursue any strategy. The mega backdoor Roth is subject to plan terms and IRS regulations, including but not limited to IRC Section 415(c), Section 408(d)(2), and SECURE 2.0 provisions. Contribution limits, catch-up rules, and tax treatment can change. Verify your specific plan&apos;s terms with your plan administrator and consult a qualified tax professional or financial advisor before implementing this strategy. Farther Finance Advisors, LLC is a registered investment adviser with the SEC. Registration does not imply a certain level of skill or training. Past performance is not indicative of future results.
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
  Is Your 401(k) Plan Leaving $47,500 on the Table?
  </h2>
  <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
  Most people do not know if their plan permits mega backdoor Roth conversions. Let us find out and structure the strategy for your situation.
  </p>
  <div className="mt-10">
  <Button href="/schedule-consultation" variant="primary">
   Schedule a Planning Session
  </Button>
  </div>
  </div>
 </section>
 </>
 )
}
