
import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'RTX Deferred Compensation for Raytheon Executives: A Complete Guide to the RTX DCP',
 description: 'How RTX and Raytheon M7+ executives can use the RTX Compensation Deferral Plan to reduce taxes, plan retirement income, and coordinate with pension, 401(k), and ESPP benefits.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/insights/raytheon-engineers-deferred-comp',
 },
 openGraph: {
 title: 'RTX Deferred Compensation for Raytheon Executives: A Complete Guide to the RTX DCP',
 description: 'How RTX and Raytheon M7+ executives can use the RTX Compensation Deferral Plan to reduce taxes, plan retirement income, and coordinate with pension, 401(k), and ESPP benefits.',
 url: 'https://www.PWM-Farther.com/insights/raytheon-engineers-deferred-comp',
 type: 'article',
 authors: ['Jay Chang'],
 },
};

export default function RaytheonDeferredCompPage() {
 const readingTime = '9 min read';
 const publishDate = 'March 16, 2026';

 return (
 <main>
 {/* Hero Section */}
 <section className="bg-[#F7F4EE] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-4 md:px-6">
  <AnimateOnScroll>
  <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
   RTX Executive Deferred Compensation: The Complete Guide to the RTX Compensation Deferral Plan
  </h1>
  <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-[#5b6a71]">
   <time dateTime="2026-03-16">{publishDate}</time>
   <span>{readingTime}</span>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Article Body */}
 <article className="bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-4 md:px-6 prose prose-lg max-w-none">
  <AnimateOnScroll>
  <section className="mb-12">
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   If you&apos;re an M7+ executive at RTX or legacy Raytheon, you have access to non-qualified deferred compensation plans that most other employees don&apos;t. These plans allow you to defer significant portions of your compensation, reduce current taxes, and create a flexible retirement income stream.
   </p>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   But the decisions you make during enrollment have permanent consequences. This guide walks you through the mechanics, the decisions, and how to coordinate deferred comp with your pension, 401(k), and complete retirement plan.
   </p>
  </section>

  <section className="mb-12">
   <h2 className="text-3xl font-bold text-[#333333] mb-6">Two Active NQDC Plans at RTX</h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   RTX maintains two separate non-qualified deferred compensation plans for eligible executives:
   </p>
   <ul className="list-disc pl-6 space-y-4 text-[#5b6a71] mb-6">
   <li className="text-lg">
   <strong>RTX Compensation Deferral Plan (DCP):</strong> Allows deferral of base salary and cash bonuses before taxes. This is the primary tool for most executives.
   </li>
   <li className="text-lg">
   <strong>Performance Share Units Deferral Plan (PSU Deferral):</strong> Allows deferral of receipt of PSU shares beyond normal vesting. Used strategically to optimize income timing.
   </li>
   </ul>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   We&apos;ll focus primarily on the DCP, the more powerful and flexible of the two.
   </p>
  </section>

  <section className="mb-12">
   <h2 className="text-3xl font-bold text-[#333333] mb-6">How the RTX Compensation Deferral Plan Works</h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   The mechanics are straightforward:
   </p>
   <ul className="list-disc pl-6 space-y-4 text-[#5b6a71] mb-6">
   <li className="text-lg"><strong>Enrollment:</strong> Enrollment closes in June each year for deferrals in the following calendar year.</li>
   <li className="text-lg"><strong>Deferral Election:</strong> You specify what percentage of base salary and/or bonus you want deferred. The deferred amount is withheld before federal and state income taxes are calculated.</li>
   <li className="text-lg"><strong>Account Growth:</strong> Your deferred balance accumulates in an unsecured account. RTX credits your account with returns tied to investment options you select (similar to a 401(k) menu).</li>
   <li className="text-lg"><strong>Distribution:</strong> You select when distributions begin: separation from service, a specified date in the future, or a change of control event.</li>
   <li className="text-lg"><strong>Payment Form:</strong> Lump-sum or installments (e.g., 5 or 10 years). This election is largely irrevocable under IRC 409A.</li>
   </ul>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   Critical point: These funds are an unsecured obligation of RTX. In bankruptcy, they would be treated as unsecured claims. The investment options within the plan - including company stock - don&apos;t change the underlying risk.
   </p>
  </section>

  <section className="mb-12">
   <h2 className="text-3xl font-bold text-[#333333] mb-6">Key Election Decisions</h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Three major decisions require careful analysis during enrollment:
   </p>

   <h3 className="text-2xl font-semibold text-[#333333] mt-8 mb-4">1. How Much to Defer?</h3>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Common deferral amounts for executives range from 10% to 40% of total compensation. The decision depends on:
   </p>
   <ul className="list-disc pl-6 space-y-4 text-[#5b6a71] mb-6">
   <li className="text-lg"><strong>Tax Bracket:</strong> Higher tax brackets = larger deferred comp benefit.</li>
   <li className="text-lg"><strong>Expected Retirement Income:</strong> If you expect retirement income to be lower, deferring into lower-tax-bracket years creates arbitrage.</li>
   <li className="text-lg"><strong>Liquidity Needs:</strong> NQDC is locked away until distribution. Don&apos;t defer if you need cash flow today.</li>
   </ul>

   <h3 className="text-2xl font-semibold text-[#333333] mt-8 mb-4">2. When Should Distributions Begin?</h3>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Three primary options:
   </p>
   <ul className="list-disc pl-6 space-y-4 text-[#5b6a71] mb-6">
   <li className="text-lg"><strong>Separation from Service:</strong> Distributions begin within 6 months of leaving RTX. Flexible but can create tax clustering.</li>
   <li className="text-lg"><strong>Specified Date:</strong> Example: &ldquo;January 1, 2035.&rdquo; The plan distributes on that date regardless of employment status. Good for targeted retirement income timing.</li>
   <li className="text-lg"><strong>Change of Control:</strong> Distributions triggered by acquisition or merger. Less common election but relevant if RTX faces acquisition risk.</li>
   </ul>

   <h3 className="text-2xl font-semibold text-[#333333] mt-8 mb-4">3. Lump-Sum vs. Installments?</h3>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Once distributions begin, you receive your deferred balance as either a single payment or in installments (5-year, 10-year, life expectancy, etc.). IRC 409A limits changes to this election, so choose carefully.
   </p>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   If you expect income-heavy years in early retirement, installments let you spread recognition. If you expect lower income early, a lump-sum into a lower-tax-bracket year is valuable.
   </p>
  </section>

  <section className="mb-12">
   <h2 className="text-3xl font-bold text-[#333333] mb-6">Coordinating With Pension and 401(k)</h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Here&apos;s where coordination becomes critical. Most RTX executives have three income sources in retirement:
   </p>
   <ul className="list-disc pl-6 space-y-4 text-[#5b6a71] mb-6">
   <li className="text-lg"><strong>Pension:</strong> Fixed monthly annuity (or lump sum, if elected).</li>
   <li className="text-lg"><strong>401(k) Distributions:</strong> Taxable withdrawals from your RTX 401(k) balance.</li>
   <li className="text-lg"><strong>DCP Distributions:</strong> Deferred compensation received in specified years.</li>
   </ul>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   All three stack on top of each other for tax purposes. If your pension is $5,000/month and your DCP distributions begin in year two of retirement, you have two income sources competing for favorable tax brackets.
   </p>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   Model all three simultaneously. Map when each source begins, how much each generates, and what that means for your combined tax bracket. Often, staggering DCP distributions 2-3 years after retirement (once 401(k) withdrawals are optimized) makes tax sense.
   </p>
  </section>

  <section className="mb-12">
   <h2 className="text-3xl font-bold text-[#333333] mb-6">The PSU Deferral Plan</h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Performance Share Units vest based on achievement of company or business unit metrics. Normally, PSU shares settle (tax is recognized) at vesting. The PSU Deferral Plan lets you defer receipt of shares beyond normal vesting - useful if you expect income to be lower in a future year.
   </p>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Two considerations:
   </p>
   <ul className="list-disc pl-6 space-y-4 text-[#5b6a71] mb-6">
   <li className="text-lg"><strong>Share Price Risk:</strong> Between vesting and deferral settlement, you bear RTX stock price risk. In a down market, your deferred PSUs are worth less at distribution.</li>
   <li className="text-lg"><strong>RTX Credit Risk:</strong> Like the DCP, PSU deferrals are unsecured company obligations. Extended deferral periods increase your exposure to RTX bankruptcy risk.</li>
   </ul>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   PSU deferral is most valuable if your income is expected to be significantly lower in the deferral year (e.g., year of retirement). Otherwise, the stock price and credit risks outweigh the tax benefits.
   </p>
  </section>

  <section className="mb-12">
   <h2 className="text-3xl font-bold text-[#333333] mb-6">What Jay Does</h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   When helping RTX executives with NQDC elections, I build a comprehensive model:
   </p>
   <ul className="list-disc pl-6 space-y-4 text-[#5b6a71] mb-6">
   <li className="text-lg"><strong>Complete Compensation Model:</strong> Map salary, bonus, RSUs, PSUs, and potential NQDC deferrals across your career through retirement.</li>
   <li className="text-lg"><strong>Tax Scenario Analysis:</strong> Model different deferral amounts and distribution timings under various federal and state tax scenarios.</li>
   <li className="text-lg"><strong>Retirement Income Projection:</strong> Layer pension, 401(k), DCP, and Social Security to build a cohesive retirement income plan and identify optimal distribution sequencing.</li>
   <li className="text-lg"><strong>IRC 409A Compliance:</strong> Ensure all elections meet IRC 409A requirements and avoid distribution delays or penalties.</li>
   <li className="text-lg"><strong>Credit Risk Assessment:</strong> Evaluate RTX&apos;s financial health and consider concentration risk if you&apos;re deferring significant amounts.</li>
   </ul>
  </section>
  </AnimateOnScroll>
  </div>
 </article>

 {/* CTA Section */}
 <section className="bg-[#F7F4EE] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
  <AnimateOnScroll>
  <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
   Optimizing Your DCP Elections
  </h2>
  <p className="text-lg text-[#5b6a71] mb-8 leading-relaxed">
   Enrolling in the RTX DCP this year? Make sure your elections are optimal. Let&apos;s build a model that coordinates with your complete retirement picture.
  </p>
  <Button href="/schedule-consultation" variant="primary">
   Schedule a Call with Jay
  </Button>
  </AnimateOnScroll>
  </div>
 </section>

 {/* JSON-LD Schema */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'RTX Executive Deferred Compensation: The Complete Guide to the RTX Compensation Deferral Plan',
  description: 'How RTX and Raytheon M7+ executives can use the RTX Compensation Deferral Plan to reduce taxes, plan retirement income, and coordinate with pension, 401(k), and ESPP benefits.',
  image: 'https://www.PWM-Farther.com/og-image.jpg',
  datePublished: '2026-03-16',
  dateModified: '2026-03-16',
  author: {
   '@type': 'Person',
   name: 'Jay Chang',
  },
  publisher: {
   '@type': 'Organization',
   name: 'Farther',
   logo: {
   '@type': 'ImageObject',
   url: 'https://www.PWM-Farther.com/logo.jpg',
   },
  },
  }),
  }}
 />
 </main>
 );
}
