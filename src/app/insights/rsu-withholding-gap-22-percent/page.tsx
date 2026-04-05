import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ArrowLeft, Clock, Calendar, User, ChevronRight, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
 title:
 'RSU Withholding Gap: Why 22% Is Not Enough | Tax Planning | Advisor Jay',
 description:
 'Why 22% federal withholding on RSU vesting is rarely sufficient for $200K+ earners. Calculate your withholding gap and fix it with W-4 adjustments or quarterly estimated taxes.',
 alternates: {
 canonical:
 'https://www.PWM-Farther.com/insights/rsu-withholding-gap-22-percent',
 },
 openGraph: {
 title:
 'RSU Withholding Gap: Why 22% Is Not Enough',
 description:
 'Why 22% federal withholding on RSU vesting is rarely sufficient for $200K+ earners. Calculate your withholding gap and fix it with W-4 adjustments or quarterly estimated taxes.',
 type: 'article',
 url: 'https://www.PWM-Farther.com/insights/rsu-withholding-gap-22-percent',
 },
}

const relatedArticles = [
 {
 slug: 'arizona-high-earner-tax-reduction-2026',
 category: 'WEALTH PLANNING',
 title: 'How High Earners in Arizona Can Cut Their 2026 Tax Bill Before December 31',
 excerpt:
 'Year-end tax planning strategies for $200K-$800K+ earners in Arizona. From backdoor Roths to donor-advised funds.',
 readTime: '9 min read',
 },
 {
 slug: 'mega-backdoor-roth-2026-guide',
 category: 'TAX PLANNING',
 title: 'The Mega Backdoor Roth in 2026: $72,000 in Tax-Free Savings',
 excerpt:
 'Complete guide to mega backdoor Roth strategy. Contribute up to $72,000 annually through 401(k) after-tax conversions.',
 readTime: '10 min read',
 },
 {
 slug: 'how-to-choose-cfp-las-vegas',
 category: 'ADVISORY',
 title: 'How to Choose a Certified Financial Planner (CFP®) in Scottsdale',
 excerpt:
 'Five questions that separate exceptional advisors from the adequate, plus how to verify credentials before you hire.',
 readTime: '7 min read',
 },
]

export default function RSUWithholdingGap22PercentPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Insights', href: '/insights' }, { name: 'RSU Withholding Gap 22 Percent', href: '/insights/rsu-withholding-gap-22-percent' }]} />
 {/* Article JSON-LD */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
   'Why Your 22% RSU Withholding Is Almost Certainly Not Enough',
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
   url: 'https://www.PWM-Farther.com',
  },
  datePublished: '2026-03-18',
  dateModified: '2026-03-18',
  mainEntityOfPage: {
   '@type': 'WebPage',
   '@id': 'https://www.PWM-Farther.com/insights/rsu-withholding-gap-22-percent',
  },
  description:
   'RSU vesting withholding at 22% is insufficient for high earners. Learn why your actual marginal rate is 32-37% federal, plus state and Medicare taxes. Calculate your gap and fix it.',
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
   name: 'Why is 22% withholding not enough for RSUs?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'The IRS withholds supplemental income (RSU vesting) at a flat 22% for amounts up to $1 million. However, the actual marginal tax rate for most RSU recipients earning $200K+ is 32-37% federal plus state tax plus Medicare taxes. The gap between 22% withholding and actual liability is substantial.',
   },
   },
   {
   '@type': 'Question',
   name: 'How much should be withheld from RSU vesting for a $250K earner?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'For a single filer earning $250K in 2026, the federal marginal rate is 32%. Add 2.5-13.3% state tax and 2.35% Medicare-related taxes. Total withholding should be 36-48% depending on state residency. The flat 22% withholding creates an annual gap of $8,000-$15,000 or more.',
   },
   },
   {
   '@type': 'Question',
   name: 'What is the prior year safe harbor for estimated taxes?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'If your 2026 AGI exceeds $150,000, you can use the prior year safe harbor: pay 110% of your 2025 tax liability in quarterly estimated payments, and you will avoid IRS penalties even if your 2026 tax is significantly higher. This buys time until April when you file.',
   },
   },
  ],
  }),
  }}
 />

 {/* Article Header */}
 <section className="bg-[#333333] pt-[120px] pb-[60px] px-[80px] max-md:px-[20px] max-md:pt-[80px]">
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
  Why Your 22% RSU Withholding Is Almost Certainly Not Enough
  </h1>

  <div className="flex flex-wrap items-center gap-6 mt-6 text-[#b6d0ed]">
  <div className="flex items-center gap-2">
   <User size={14} strokeWidth={1.5} />
   <span className="font-sans text-sm">Farther Advisory Team</span>
  </div>
  <div className="flex items-center gap-2">
   <Calendar size={14} strokeWidth={1.5} />
   <span className="font-sans text-sm">March 2026</span>
  </div>
  <div className="flex items-center gap-2">
   <Clock size={14} strokeWidth={1.5} />
   <span className="font-sans text-sm">7 min read</span>
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
   Four times a year, your company&apos;s payroll system withholds 22 percent federal tax from the restricted stock unit (RSU) shares vesting into your account. The notification arrives alongside your new equity grant, and life moves forward. But that 22 percent withholding is almost certainly not enough - a gap that catches many tech professionals and high-income earners with an unwelcome tax bill in April. Understanding why this gap exists, how large it is for your specific income level, and how to fix it before year end is critical to avoiding a six-figure surprise.
   </p>

   {/* Section 1 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   How the 22% Withholding Works
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The IRS Publication 15-T (Supplemental Wage Payments) provides the withholding rule for supplemental income - income paid outside the regular payroll cycle, including RSU vest events. For supplemental wages up to $1 million in a single calendar year, the employer withholds at a flat 22 percent federal rate.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   For example, you work at a tech company earning $200,000 in base salary plus an annual RSU grant of $100,000. When that grant vests (typically quarterly or annually), your employer withholds 22 percent - $22,000 - and the remaining $78,000 is deposited into your account. From the IRS perspective, federal withholding of $22,000 on $100,000 seems reasonable. But it is not.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The 22 percent flat rate was designed as an approximation of average withholding across the population. For someone earning $50,000 annually, 22 percent might be roughly correct. For someone earning $300,000 annually, it is dramatically insufficient.
   </p>

   {/* Section 2 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   The Marginal Rate Problem
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The core issue is the difference between average and marginal tax rates. Average tax rate is your total tax liability divided by total income. Marginal rate is the tax rate on your next dollar of income. When you earn substantial base salary plus RSU bonuses, your RSU income is taxed at your marginal rate, not some low average rate.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   In 2026, the federal income tax brackets are:
   </p>

   <ul className="list-disc pl-6 mb-6 space-y-2">
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">32% on income from $191,950 to $243,725 (single)</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">35% on income from $243,725 to $609,350 (single)</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">37% on income over $609,350 (single)</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">32% on income from $383,900 to $487,450 (married filing jointly)</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">35% on income from $487,450 to $731,200 (married filing jointly)</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">37% on income over $731,200 (married filing jointly)</li>
   </ul>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If you are single, earning $250,000 annually from base salary, and you receive a $100,000 RSU grant, every dollar of that $100,000 is taxed at your marginal federal rate: 32 percent. The employer withholds only 22 percent, leaving a federal shortfall of 10 percentage points on the entire $100,000 grant - roughly $10,000 underpaid in federal tax.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If your income was higher - say $350,000 - your marginal federal rate would be 35 percent. A $100,000 RSU grant withheld at 22 percent now carries a federal shortfall of $13,000.
   </p>

   {/* Section 3 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   The Complete Picture: Federal Plus State Plus Medicare
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The 22 percent withholding typically applies only to federal income tax. But high earners also owe state income tax and Medicare-related taxes. For a single earner in California or New York, state income tax can add 9 to 13 percent. In Arizona, 2.5 percent. Medicare taxes add 1.45 percent employee withholding, plus a 0.9 percent additional Medicare tax on wages exceeding $200,000 (single) or $250,000 (married).
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   A single professional earning $250,000 with a $100,000 RSU grant actually owes:
   </p>

   <ul className="list-disc pl-6 mb-6 space-y-2">
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Federal income tax: 32% = $32,000</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Arizona state income tax: 2.5% = $2,500 (or California 9.3% = $9,300)</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Medicare tax: 2.35% = $2,350</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Total tax owed: 36.85% in Arizona, 43.65% in California</li>
   </ul>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The employer withholds 22 percent - $22,000. The shortfall is either $14,850 (Arizona) or $21,650 (California) for a single $100,000 RSU grant. For an employee receiving four quarterly grants of $25,000 each, the annual shortfall can exceed $30,000 to $40,000.
   </p>

   {/* Section 4 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Real Example: Engineer Earning $250K with $80K RSU Vesting
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Let us work through a concrete scenario to illustrate the gap.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   <strong className="text-[#333333]">Scenario:</strong> A 35-year-old software engineer in Arizona earning $250,000 base salary plus $80,000 in annual RSU vesting.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
   <strong className="text-[#333333]">What the employer withholds (quarterly vesting):</strong>
   </p>

   <ul className="list-disc pl-6 mb-6 space-y-2">
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Four quarterly RSU vests of $20,000 each</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">22% federal withholding per vest: $4,400</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Annual federal withholding: $17,600</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Regular payroll withholds federal from $250K base</li>
   </ul>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-3">
   <strong className="text-[#333333]">What the engineer actually owes on the $80K RSU:</strong>
   </p>

   <ul className="list-disc pl-6 mb-6 space-y-2">
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Federal income tax at 32% marginal rate: $25,600</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Arizona state income tax at 2.5%: $2,000</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Medicare tax (2.35% on all wages, 0.9% additional on wages over $200K, totaling 2.35%): $1,880</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">Total tax owed on RSU: $29,480</li>
   </ul>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   <strong className="text-[#333333]">The Shortfall:</strong> $29,480 owed minus $17,600 withheld = <strong className="text-[#333333]">$11,880 underpaid</strong> on annual RSU vesting.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   This engineer will owe approximately $12,000 when filing their 2026 tax return in April 2027 - unless they proactively fix the withholding before year end.
   </p>

   {/* Section 5 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Solution 1: Adjust Your W-4 to Increase Withholding
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The simplest fix is to increase withholding on your regular payroll. The IRS Form W-4 allows you to claim a dollar amount in "extra withholding per paycheck" on Line 4(c). Each paycheck can direct additional withholding to your federal tax account.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   In the engineer example above, the annual shortfall is $11,880. Divide this by the number of paychecks per year (26 for biweekly) to get the per-paycheck withholding increase: $11,880 / 26 = approximately $457 per paycheck.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The engineer would request an additional $457 in federal withholding on each biweekly paycheck. This extra withholding accumulates throughout the year and covers the underpayment on the quarterly RSU vests. By December 31, the IRS holds sufficient funds, and April brings a refund or a minimal balance due - not an unexpected bill.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   How to do this: Download Form W-4 from the IRS website (www.irs.gov), complete it with your personal information, specify the additional withholding on Line 4(c), and submit it to your payroll department. You can do this any time and it takes effect within one or two pay cycles.
   </p>

   {/* Section 6 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Solution 2: Quarterly Estimated Tax Payments (Form 1040-ES)
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   An alternative is to make quarterly estimated tax payments directly to the IRS using Form 1040-ES. Estimated payments are typically required if you expect to owe more than $1,000 in tax when filing your return.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   For the engineer above, the annual shortfall is $11,880. Divide by four quarters = $2,970 per quarter. On April 15, June 15, September 15, and January 15 of the following year, the engineer would send a check (or pay electronically via the IRS EFTPS system or at www.irs.gov) for $2,970. This ensures the IRS holds the full tax amount, and April filing brings a refund or break-even.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The advantage of estimated payments is precision: you pay exactly what you owe, in the quarters when the income arrives. The disadvantage is the need to remember deadlines and initiate payments yourself. Many professionals forget the January 15 payment and miss the deadline, triggering IRS penalties.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   For most people, adjusting the W-4 is simpler than managing quarterly payments.
   </p>

   {/* Section 7 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Solution 3: Prior Year Safe Harbor
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If your adjusted gross income (AGI) exceeds $150,000, you can use the prior year safe harbor for estimated taxes. This rule states that if you pay 110 percent of your prior year tax liability in quarterly estimated payments (or withholding), you avoid IRS penalties even if your current year tax is significantly higher.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Example: You filed taxes in April 2026 and paid $60,000 in federal tax for 2025. For 2026, you calculate that you owe $80,000 (due to the $80,000 RSU grant). Instead of calculating and paying 110 percent of what you owe ($88,000), you can simply pay 110 percent of your 2025 liability: $60,000 * 1.10 = $66,000. As long as you have paid or withheld at least $66,000 by December 31, 2026 (or by the quarterly payment deadline), the IRS will not assess an underpayment penalty when you file your 2026 return in April 2027 - even though you will owe an additional $14,000 at filing.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The prior year safe harbor buys you time. It does not eliminate the tax owed, but it does avoid penalties. This is useful if adjusting the W-4 is too late in the year or if the exact amount owed is difficult to predict.
   </p>

   {/* Section 8 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   When to Act: Don&apos;t Wait Until April
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Many RSU recipients discover the withholding gap in April when preparing their tax return. By then, it is too late to adjust anything for the current year. The fix must happen before December 31.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Here is the timeline:
   </p>

   <ul className="list-disc pl-6 mb-6 space-y-2">
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]"><strong className="text-[#333333]">January to October:</strong> Adjust your W-4 to increase withholding on your regular paycheck. This is the best time and gives the withholding multiple pay cycles to accumulate.</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]"><strong className="text-[#333333]">September to December:</strong> If W-4 adjustment is missed, initiate quarterly estimated tax payments immediately. The January 15 payment is the last quarterly deadline for the calendar year, so you need to act by September to make meaningful progress.</li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]"><strong className="text-[#333333]">Late December:</strong> As a last resort, if neither W-4 nor estimated payments are made, rely on the prior year safe harbor to avoid penalties (though you will still owe the tax in April).</li>
   </ul>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The best approach is to calculate your RSU income and marginal tax rate early in the year - ideally when you receive your grant schedule - and adjust your W-4 or budget for quarterly payments immediately.
   </p>

   {/* In-Article CTA */}
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-8 my-12 text-center">
   <MessageSquare size={28} strokeWidth={1.5} className="text-[#1d7682] mx-auto mb-4" />
   <h3 className="font-serif text-[22px] font-semibold text-[#333333] leading-tight">
   Not Sure How Much You&apos;re Underpaying?
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3 max-w-[480px] mx-auto">
   We can calculate your exact withholding gap and help you adjust your W-4 or schedule estimated payments to avoid an April surprise.
   </p>
   <div className="mt-6">
   <Button href="/schedule-consultation" variant="primary">
    Schedule a Withholding Review
   </Button>
   </div>
   </div>

   {/* Section 9 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Married Couples and Dual RSU Income
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If you are married and both spouses receive RSU income, the withholding gap compounds. The 2026 federal bracket for 32 percent starts at $383,900 of combined income for married couples filing jointly. If both spouses earn $150,000 base plus $50,000 RSUs, your combined income is $400,000 - placing all income in the 32 percent to 35 percent bracket range.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Each spouse&apos;s $50,000 RSU vest is withheld at 22 percent ($11,000) but actually owes 35 percent federal plus state plus Medicare - potentially 40 percent or more depending on state. The combined household withholding gap can easily exceed $30,000 to $40,000 annually.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Married couples with dual RSU income should absolutely adjust their W-4 or make estimated payments. The gap is too large to ignore.
   </p>

   {/* Section 10 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Why Companies Do Not Increase the Withholding Rate
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   You might wonder why employers do not simply withhold at a higher rate - say, 35 percent instead of 22 percent - to protect employees. The answer lies in IRS guidance. IRS Publication 15-T explicitly prescribes the 22 percent rate for supplemental wages under $1 million. Employers are not permitted to withhold at a higher rate on supplemental income unless the employee specifically requests it.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Some companies do allow employees to request supplemental withholding rates higher than 22 percent on RSU vesting. If your company offers this, it is worth using. But most do not mention this option, and employees must proactively ask.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The burden falls on you to recognize the gap and adjust it yourself - either through W-4 modifications or estimated payments.
   </p>

   <div className="mt-8">
   <a
   href="/schedule-consultation"
   className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-[#1d7682] hover:text-[#D4B65A] transition-colors"
   >
   <span>Calculate Your Withholding Gap</span>
   <ChevronRight size={16} strokeWidth={1.5} />
   </a>
   </div>
  </div>
  </AnimateOnScroll>

  {/* Disclaimer */}
  <div className="mt-12 pt-8 border-t border-[#E8E6E1]">
  <p className="font-sans text-xs text-[#5b6a71] leading-relaxed">
   This article is provided for informational purposes only and does not constitute tax advice, investment advice, or a recommendation to adjust your withholding or make estimated payments. Tax laws change frequently and withholding rules depend on individual circumstances, income level, filing status, state of residency, and other factors. Your marginal tax rate may differ from the examples shown. Consult a qualified tax professional or financial advisor before adjusting your W-4 or making estimated payments. The IRS Publication 15-T, Form W-4, Form 1040-ES, and the rules governing supplemental income withholding are complex and subject to change. Farther Finance Advisors, LLC is a registered investment adviser with the SEC. Registration does not imply a certain level of skill or training. Past performance is not indicative of future results.
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
  Do Not Wait Until April for an RSU Tax Surprise
  </h2>
  <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
  Adjust your withholding today. Calculate your gap, update your W-4, and protect yourself from an unexpected tax bill when you file.
  </p>
  <div className="mt-10">
  <Button href="/schedule-consultation" variant="primary">
   Let&apos;s Solve This Before Year End
  </Button>
  </div>
  </div>
 </section>
 </>
 )
}
