import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Apple Employee Financial Advisor in Mesa, AZ | RSU, ESPP & Tax Planning | Jay Chang',
 description: 'Wealth management for Apple employees in Mesa and Cupertino. Manage biannual RSU vesting, the Apple ESPP, withholding shortfalls, and your Deferred Compensation Plan with a fiduciary advisor who knows Apple&apos;s benefits.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/apple-financial-advisor-mesa-arizona',
 },
 robots: {
 index: true,
 follow: true,
 },
};

export default function AppleFinancialAdvisor() {
 return (
 <>
 {/* FAQPage JSON-LD Schema */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
   {
   '@type': 'Question',
   name: 'What happens to my Apple RSUs if I leave the company?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'Unvested RSUs are forfeited when you separate from Apple. Only vested shares transfer to you. Jay can help you model your vesting schedule, plan sale timing for vested RSUs, and understand the tax impact of your departure.',
   },
   },
   {
   '@type': 'Question',
   name: 'Why does Apple withhold only 22% when my tax rate is higher?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'Apple&apos;s 22% withholding is the federal statutory minimum for supplemental income. If your total marginal rate is 32-37%, you have a withholding gap that creates an April tax surprise. Jay builds a full-year income projection and recommends estimated tax payments to cover the gap.',
   },
   },
   {
   '@type': 'Question',
   name: 'How much of the Apple ESPP discount should I contribute?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'The 15% discount with a 6-month lookback makes Apple&apos;s ESPP one of the best in tech. But contribution levels, holding periods, and tax treatment (qualifying vs. disqualifying dispositions) depend on your total compensation, risk tolerance, and stock concentration. Jay can optimize your contribution strategy.',
   },
   },
  ],
  }),
  }}
 />

 {/* HERO SECTION */}
 <section className="relative bg-[#F7F4EE] py-20 px-6">
  <Image
  src="/Photos/Not-AAPL.png"
  alt="Technology professionals"
  fill
  className="object-cover opacity-20"
  priority
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EE] via-[#F7F4EE]/90 to-[#F7F4EE]/40" />
  <div className="relative z-10 max-w-4xl mx-auto text-center">
  <div className="text-sm font-sans text-[#5b6a71] tracking-wide uppercase mb-6">
  Apple Employee Financial Planning
  </div>
  <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#333333] mb-6 leading-tight">
  Apple Employees: Your RSUs Are Vesting. Is Your Tax Strategy Ready?
  </h1>
  <p className="text-xl text-[#5b6a71] font-sans mb-10 leading-relaxed">
  Apple&apos;s Mesa operations and Silicon Valley campuses pay their engineers extraordinarily well. But biannual RSU vesting, a systematic withholding gap, and ESPP complexity create tax and wealth problems that require specialized advisory expertise. Jay Chang provides that expertise.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
  <Button href="/schedule-consultation" variant="primary">Schedule an Apple Benefits Review</Button>
  </div>
  </div>
 </section>

 {/* TRUST BAR */}
 <section className="bg-white border-y border-gray-200 py-6 px-6">
  <div className="max-w-6xl mx-auto">
  <div className="flex flex-wrap justify-center gap-8 text-sm font-sans text-[#5b6a71]">
  <div className="flex items-center gap-2">
   <span className="font-semibold text-[#1d7682]">✓</span>
   <span>Advisor at Farther | SEC-Registered RIA</span>
  </div>
  <div className="flex items-center gap-2">
   <span className="font-semibold text-[#1d7682]">✓</span>
   <span>Fiduciary - Your interests come first</span>
  </div>
  <div className="flex items-center gap-2">
   <span className="font-semibold text-[#1d7682]">✓</span>
   <span>$15B+ AUM</span>
  </div>
  <div className="flex items-center gap-2">
   <span className="font-semibold text-[#1d7682]">✓</span>
   <span>Best RIA to Work For 2025</span>
  </div>
  </div>
  </div>
 </section>

 {/* SECTION 1: WITHHOLDING GAP */}
 <AnimateOnScroll>
  <section className="bg-[#FAFAF8] py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   Apple Withholds 22% on RSUs. Your Real Tax Rate Is Probably Much Higher.
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   Apple&apos;s RSU vesting creates two large taxable income events per year - spring and fall. Apple withholds 22% federal but your actual marginal rate is 32-37% for $200K-$400K+ total compensation. The result: a large, predictable tax bill every April.
  </p>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   Most Apple employees don&apos;t plan for this gap. They discover it in April when their CPA tells them they owe $40,000-$80,000 more than they expected. Jay builds a different path:
  </p>
  <ul className="space-y-4 text-lg text-[#5b6a71] font-sans mb-8">
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Full-year income projection: net RSU income after actual withholding</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Estimated tax shortfall per vesting event</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Recommended quarterly estimated payments</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Coordination with ESPP and bonus timing</span>
   </li>
  </ul>
  <p className="text-lg text-[#5b6a71] font-sans">
   This is not theoretical planning. It&apos;s the difference between a strategic tax posture and April surprises.
  </p>
  </div>
  </section>
 </AnimateOnScroll>

 {/* SECTION 2: 401(k) MATCH */}
 <AnimateOnScroll>
  <section className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   Apple Rewards Longevity. Here&apos;s Exactly How Much.
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-10 leading-relaxed">
   Apple&apos;s 401(k) match scales with tenure - a powerful but underutilized benefit. Here&apos;s the structure:
  </p>

  {/* Match Tiers */}
  <div className="space-y-4 mb-10">
   <div className="bg-[#FAFAF8] border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg font-semibold text-[#333333] mb-2">Under 2 years of service:</p>
   <p className="text-lg text-[#5b6a71]">50% match up to 6% of eligible compensation</p>
   </div>
   <div className="bg-[#FAFAF8] border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg font-semibold text-[#333333] mb-2">2-5 years of service:</p>
   <p className="text-lg text-[#5b6a71]">75% match up to 6% of eligible compensation</p>
   </div>
   <div className="bg-[#FAFAF8] border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg font-semibold text-[#333333] mb-2">5+ years of service:</p>
   <p className="text-lg text-[#5b6a71]">100% match up to 6% of eligible compensation</p>
   </div>
  </div>

  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   <strong>The math:</strong> A Mesa engineer earning $280,000 with 5+ years of service receives $16,800 in Apple employer match annually. Add mega backdoor Roth capability (up to $72,000 in after-tax 401(k) contributions that convert to Roth tax-free), and you have one of tech&apos;s most powerful retirement savings vehicles.
  </p>
  <p className="text-lg text-[#5b6a71] font-sans">
   Jay will help you maximize both the company match and after-tax conversion strategy - turning Apple&apos;s match into a meaningful accelerant for tax-free lifetime wealth building.
  </p>
  </div>
  </section>
 </AnimateOnScroll>

 {/* SECTION 3: ESPP */}
 <AnimateOnScroll>
  <section className="bg-[#FAFAF8] py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   Apple&apos;s ESPP Is One of the Best Perqs Available. Here&apos;s How to Use It.
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   A 15% discount on the lower of beginning or end-of-period price - with a 6-month lookback window - is among the most generous ESPP designs in tech. But that benefit only compounds if you understand the tax rules and execution strategy.
  </p>

  <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">ESPP Offering Periods</h3>
   <div className="space-y-4">
   <div>
   <p className="font-semibold text-[#333333] mb-2">Period 1: February 1 - July 31</p>
   <p className="text-[#5b6a71]">Price locked at the lower of Feb 1 or Jul 31</p>
   </div>
   <div>
   <p className="font-semibold text-[#333333] mb-2">Period 2: August 1 - January 31</p>
   <p className="text-[#5b6a71]">Price locked at the lower of Aug 1 or Jan 31</p>
   </div>
   </div>
  </div>

  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   The critical questions Jay will help you answer:
  </p>
  <ul className="space-y-4 text-lg text-[#5b6a71] font-sans mb-8">
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span><strong>How much to contribute?</strong> Contribution limits are $25,000 per year (or 25% of gross pay if lower). But your allocation depends on your total Apple stock concentration and cash flow needs.</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span><strong>When to sell?</strong> Qualifying dispositions (held 2+ years) receive favorable long-term capital gains treatment. Disqualifying dispositions (sold within 2 years) include your discount as ordinary income.</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span><strong>Hold vs. diversify?</strong> If Apple already represents 30%+ of your liquid net worth through RSUs, adding ESPP shares compounds your concentration risk.</span>
   </li>
  </ul>

  <p className="text-lg text-[#5b6a71] font-sans">
   Jay integrates your ESPP strategy with your total Apple compensation, RSU sales, and diversification roadmap - turning a generous perk into a deliberate wealth-building tool.
  </p>
  </div>
  </section>
 </AnimateOnScroll>

 {/* MID-PAGE CTA INTERRUPTION */}
 <section className="bg-[#1d7682] py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
  <p className="text-xl text-white font-sans mb-8">
  Apple&apos;s compensation is built for long-term wealth creation - but only if you plan it strategically. Jay works with Apple employees every week. Schedule a confidential call today.
  </p>
  <Button href="/schedule-consultation" variant="primary">Schedule Your Apple Strategy Call</Button>
  </div>
 </section>

 {/* SECTION 4: DEFERRED COMP */}
 <AnimateOnScroll>
  <section className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   Invited to Apple&apos;s DCP? Here&apos;s What You Need to Know Before You Elect.
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   Apple&apos;s Deferred Compensation Plan is available to select highly compensated employees - typically director level and above. It allows you to defer portions of salary and/or bonus into a tax-deferred account, with Apple crediting annual earnings (typically 4-5% annually, set at the plan&apos;s discretion).
  </p>

  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   While deferred comp can be a valuable wealth-building tool, it requires careful planning around several critical decisions:
  </p>

  <ul className="space-y-4 text-lg text-[#5b6a71] font-sans mb-8">
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span><strong>How much to defer?</strong> Balancing the tax benefit against the risk that your deferral becomes an unsecured claim on Apple if the company faces financial distress.</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span><strong>Distribution timing:</strong> You must elect when distributions will occur (separation, specific year, or fixed schedule) - and IRC 409A rules are strict about changes.</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span><strong>Apple&apos;s creditworthiness:</strong> Unlike your 401(k), DCP is an unsecured liability. Apple&apos;s financial strength and business outlook matter.</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span><strong>Integration with RSU and ESPP:</strong> Your total Apple concentration and diversification strategy must account for DCP balances.</span>
   </li>
  </ul>

  <p className="text-lg text-[#5b6a71] font-sans">
   Jay will model the tax and risk scenarios, help you set an appropriate deferral level, and integrate your DCP strategy with your RSU sales, ESPP contributions, and overall financial plan.
  </p>
  </div>
  </section>
 </AnimateOnScroll>

 {/* KEY CONVERSATIONS */}
 <AnimateOnScroll>
  <section className="bg-[#FAFAF8] py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-12 text-center">
   Key Conversations Jay Has With Apple Employees
  </h2>
  <div className="space-y-6">
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I have RSUs vesting next month - should I sell immediately or hold some?&rdquo;
   </p>
   </div>
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;Apple withholds 22% but I know I owe more. How do I handle the gap?&rdquo;
   </p>
   </div>
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I&apos;ve got RSUs, ESPP, and now they&apos;re offering me DCP. How much of each should I take?&rdquo;
   </p>
   </div>
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I have too much Apple stock. What&apos;s the tax-efficient way to diversify?&rdquo;
   </p>
   </div>
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I&apos;m moving from Cupertino to Mesa. Does that change my tax strategy?&rdquo;
   </p>
   </div>
  </div>
  </div>
  </section>
 </AnimateOnScroll>

 {/* FAQ SECTION */}
 <AnimateOnScroll>
  <section className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-12 text-center">
   Frequently Asked Questions
  </h2>

  <div className="space-y-8">
   {/* FAQ 1 */}
   <div>
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">
   What happens to my Apple RSUs if I leave the company?
   </h3>
   <p className="text-lg text-[#5b6a71] font-sans leading-relaxed">
   Unvested RSUs are forfeited when you separate from Apple. Only shares that have vested transfer to you. Jay can help you model your vesting schedule, plan the tax implications of your departure, and sequence RSU sales in a tax-efficient order if you leave.
   </p>
   </div>

   {/* FAQ 2 */}
   <div>
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">
   Why does Apple withhold only 22% when my tax rate is higher?
   </h3>
   <p className="text-lg text-[#5b6a71] font-sans leading-relaxed">
   Apple&apos;s 22% withholding is the federal statutory minimum for supplemental income (RSU vesting). If your total marginal federal + state tax rate is 32-37%, you have a withholding gap that creates an April tax surprise. Jay builds a full-year income projection and recommends estimated tax payments to cover the gap proactively.
   </p>
   </div>

   {/* FAQ 3 */}
   <div>
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">
   How much of the Apple ESPP discount should I contribute?
   </h3>
   <p className="text-lg text-[#5b6a71] font-sans leading-relaxed">
   The 15% discount with a 6-month lookback makes Apple&apos;s ESPP one of the best in tech. But your contribution level depends on your total Apple stock concentration (RSUs + DCP + any other company stock), your cash flow needs, and your risk tolerance. If Apple already represents 40%+ of your net worth through RSUs, adding ESPP shares may compound concentration risk. Jay will help you find the right balance.
   </p>
   </div>
  </div>
  </div>
  </section>
 </AnimateOnScroll>

 {/* FINAL CTA SECTION */}
 <AnimateOnScroll>
  <section className="bg-[#F7F4EE] py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   You&apos;ve Built Something Great at Apple. Now Build Something Equally Great for Yourself.
  </h2>
  <p className="text-xl text-[#5b6a71] font-sans mb-10 leading-relaxed">
   Apple&apos;s compensation is complex - but it&apos;s also an opportunity. Biannual RSU vesting, a 15% ESPP discount, a tenure-scaled 401(k) match, and possible deferred comp create a $200K-$500K+ annual wealth-building window. The question is whether you have a plan to capture it.
  </p>
  <div className="mb-6">
   <Button href="/schedule-consultation" variant="primary">Schedule Your Apple Employee Strategy Call - Mesa, Cupertino, and Beyond</Button>
  </div>
  <p className="text-lg text-[#5b6a71] font-sans">
   No cost. No pressure. Just clarity.
  </p>
  </div>
  </section>
 </AnimateOnScroll>

 {/* TRUST FOOTER */}
 <section className="bg-[#333333] py-12 px-6">
  <div className="max-w-6xl mx-auto">
  <div className="space-y-4 text-center text-sm font-sans text-gray-300">
  <p>
   <strong className="text-white">Fiduciary advisor</strong> - Jay is legally required to act in your interest, not earn commissions
  </p>
  <p>
   <strong className="text-white">Farther:</strong> $15B+ in assets under management, named Best RIA to Work For 2025
  </p>
  <p>
   <strong className="text-white">Serving professionals</strong> in Phoenix, Chandler, Tempe, Mesa, Scottsdale, Tucson, Santa Clara, and beyond
  </p>
  </div>
  </div>
 </section>
 </>
 );
}
