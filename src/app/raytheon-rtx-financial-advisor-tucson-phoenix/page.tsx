import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Raytheon RTX Financial Advisor in Tucson & Phoenix | Pension, 401(k) & Deferred Comp | Jay Chang',
 description: 'Specialized financial planning for Raytheon and RTX professionals in Tucson and Phoenix. Pension vs. lump sum, age-based 401(k) contributions, Lifetime Income Strategy guidance, and deferred comp planning from a fiduciary advisor.',
 alternates: {
 canonical: 'https://www.advisorjay.com/raytheon-rtx-financial-advisor-tucson-phoenix',
 },
 robots: {
 index: true,
 follow: true,
 },
};

export default function RaytheonRTXFinancialAdvisor() {
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
   name: 'Should I take the RTX pension as a monthly payment or lump sum?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'This is an irreversible decision that can cost or save you hundreds of thousands of dollars depending on your break-even age, survivor needs, and total financial picture. I build a comprehensive analysis including break-even age, portfolio integration, tax sequencing, and estate implications to help you decide with confidence.',
   },
   },
   {
   '@type': 'Question',
   name: 'What is Raytheon\'s Lifetime Income Strategy and should I elect it?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'The LIS option under RAYSIP gradually shifts investments toward guaranteed income starting at age 48, with full conversion to an annuity by age 62. While it locks in guaranteed income, it may preclude Net Unrealized Appreciation treatment and limit flexibility. Jay evaluates the LIS alongside your total retirement income sources, risk tolerance, and alternative strategies.',
   },
   },
   {
   '@type': 'Question',
   name: 'How should I coordinate my RTX 401(k), pension, and executive deferred comp?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'RTX employees at manager level and above have access to the Compensation Deferral Plan and PSU Deferral Plan in addition to the pension and 401(k). Proper coordination requires understanding vesting schedules, distribution timing, tax consequences, and how they interact with your overall wealth plan. I specialize in multi-plan strategy for defense contractors.',
   },
   },
  ],
  }),
  }}
 />

 {/* HERO SECTION */}
 <section className="relative bg-[#F7F4EE] py-20 px-6">
  <Image
  src="/Photos/Defense.png"
  alt="Defense industry"
  fill
  className="object-cover opacity-20"
  priority
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EE] via-[#F7F4EE]/90 to-[#F7F4EE]/40" />
  <div className="relative z-10 max-w-4xl mx-auto text-center">
  <div className="text-sm font-sans text-[#5b6a71] tracking-wide uppercase mb-6">
  Raytheon / RTX Employee Financial Planning
  </div>
  <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#333333] mb-6 leading-tight">
  Raytheon Engineers: Your Benefits Package Is One of the Best in Defense. Are You Using All of It?
  </h1>
  <p className="text-xl text-[#5b6a71] font-sans mb-10 leading-relaxed">
  Between a legacy pension, age-based 401(k) contributions reaching 11% of pay, a Lifetime Income Strategy option, and an executive deferred compensation plan, RTX&apos;s benefits are extraordinarily rich - and extraordinarily complex. I help you turn all of it into a retirement you&apos;ve actually designed.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
  <Button href="/schedule-consultation" variant="primary">Schedule a Raytheon Benefits Strategy Call</Button>
  </div>
  </div>
 </section>

 {/* TRUST BAR */}
 <section className="bg-white border-y border-gray-200 py-6 px-6">
  <div className="max-w-6xl mx-auto">
  <div className="flex flex-wrap justify-center gap-8 text-sm font-sans text-[#5b6a71]">
  <div className="flex items-center gap-2">
   <span className="font-semibold text-[#1d7682]">✓</span>
   <span>Fiduciary</span>
  </div>
  <div className="flex items-center gap-2">
   <span className="font-semibold text-[#1d7682]">✓</span>
   <span>Fee-Only</span>
  </div>
  <div className="flex items-center gap-2">
   <span className="font-semibold text-[#1d7682]">✓</span>
   <span>SEC-Registered</span>
  </div>
  </div>
  </div>
 </section>

 {/* SECTION 1: THE RTX BENEFITS ADVANTAGE */}
 <AnimateOnScroll>
  <section className="bg-[#FAFAF8] py-20 px-6">
  <div className="max-w-6xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   RTX Offers More Retirement Wealth Than Most Defense Peers. The Complexity Is the Price of Admission.
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-12 leading-relaxed">
   Raytheon Technologies (RTX) combines a defined-benefit pension, tiered 401(k) matching, age-based employer contributions, and executive deferred compensation into one of the most competitive retirement packages in the aerospace and defense sector. But coordinating these benefits requires clarity on multiple fronts - and missing that coordination can cost you significantly.
  </p>

  {/* BENEFIT CARDS GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
   {/* Card 1: 401(k) Match */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">401(k) Match</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   100% on first 3%, 33 cents per dollar up to 6% = approximately 4% effective employer contribution.
   </p>
   </div>

   {/* Card 2: Age-Based Contribution */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">Age-Based Contribution</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   3% for employees under 30, scaling to 7% for those 55 and older - a generous recognition of career tenure.
   </p>
   </div>

   {/* Card 3: Combined Employer Benefit */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">Combined Employer (55+)</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   Approximately 11% of gross salary from match plus age-based contribution alone - before pension accumulation.
   </p>
   </div>

   {/* Card 4: Defined-Benefit Pension */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">Legacy Pension</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   For employees with 10+ years tenure, a qualified defined-benefit pension with lump-sum and survivor options.
   </p>
   </div>

   {/* Card 5: ESPP */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">ESPP</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   15% discount off purchase price, providing immediate upside on accumulated shares.
   </p>
   </div>

   {/* Card 6: Mega Backdoor Roth */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">Mega Backdoor Roth</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   RAYSIP supports after-tax contributions and in-service Roth conversions for high-income earners.
   </p>
   </div>

   {/* Card 7: Executive Deferred Comp */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">Deferred Compensation Plans</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   RTX Compensation Deferral Plan and PSU Deferral Plan available to M7+ employees for strategic tax deferral.
   </p>
   </div>

   {/* Card 8: Financial Complexity */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">The Coordination Problem</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   Managing pension elections, deferred comp timing, 401(k) strategy, and Lifetime Income decisions requires integrated planning.
   </p>
   </div>
  </div>
  </div>
  </section>
 </AnimateOnScroll>

 {/* SECTION 2: THE PENSION DECISION */}
 <AnimateOnScroll>
  <section className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   Pension vs. Lump Sum: Getting This Wrong Could Cost You Hundreds of Thousands of Dollars.
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   If you&apos;ve qualified for an RTX pension, you face an irreversible decision: take a monthly annuity or accept a lump sum. This single choice can determine whether you have a secure retirement floor or face sequence-of-returns risk in a volatile market.
  </p>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   Most employees don&apos;t truly understand the break-even age - the point at which the lump sum or monthly payments come out even. They also don&apos;t account for survivor benefits, portfolio integration, tax sequencing across time horizons, or how a pension decision affects the rest of your financial plan.
  </p>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   As your fiduciary advisor, I will help you:
  </p>
  <ul className="space-y-4 text-lg text-[#5b6a71] font-sans">
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Build a comprehensive break-even analysis accounting for inflation, investment growth, and life expectancy</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Evaluate survivor benefits and how they integrate with your spouse&apos;s income and estate plan</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Model your overall portfolio strategy assuming either a pension floor or self-directed retirement assets</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Design tax sequencing across multiple accounts to maximize after-tax income in retirement</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Test your decision against different scenarios - market downturns, longevity, changes in tax law</span>
   </li>
  </ul>
  </div>
  </section>
 </AnimateOnScroll>

 {/* SECTION 3: THE LIFETIME INCOME STRATEGY */}
 <AnimateOnScroll>
  <section className="bg-[#FAFAF8] py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   RAYSIP&apos;s LIS Option Locks In Guaranteed Income. But It May Lock Out Better Strategies.
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   Raytheon's Lifetime Income Strategy (LIS) is a unique feature of the RAYSIP 401(k) plan. Beginning at age 48, the LIS gradually shifts your account balance from growth investments toward guaranteed income - eventually purchasing an annuity by age 62 that provides lifetime income regardless of market performance.
  </p>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   On the surface, this sounds attractive: guaranteed income, simplified decision-making, protection from market risk. But it also removes flexibility and may preclude strategies like Net Unrealized Appreciation (NUA) on company stock, Roth conversions, or coordinating with other income sources.
  </p>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   The LIS is a default path, not always the optimal path. Your decision requires:
  </p>
  <ul className="space-y-4 text-lg text-[#5b6a71] font-sans">
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Analysis of your total retirement income sources (pension, Social Security, other assets) and risk tolerance</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Understanding of NUA alternatives if you hold RTX stock in your 401(k)</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Evaluation of annuity pricing and guarantees at your target conversion age</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Coordination with federal and state tax planning, estate strategy, and spousal benefits</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Testing whether opting out of LIS and pursuing self-directed management is better for your goals</span>
   </li>
  </ul>
  <p className="text-lg text-[#5b6a71] font-sans mt-8">
   I specialize in helping defense contractors navigate these nuanced choices. The LIS may be right for you - or it may not be. Either way, the decision should be made proactively with full information, not by default.
  </p>
  </div>
  </section>
 </AnimateOnScroll>

 {/* MID-PAGE CTA INTERRUPTION */}
 <section className="bg-[#1d7682] py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
  <p className="text-xl text-white font-sans mb-8">
  You spent a career defending America. Now defend your retirement with a plan designed specifically for RTX employees and their unique benefits.
  </p>
  <Button href="/schedule-consultation" variant="primary">Schedule Your RTX Strategy Call</Button>
  </div>
 </section>

 {/* SECTION 4: KEY CONVERSATIONS */}
 <AnimateOnScroll>
  <section className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-12 text-center">
   Key Conversations Jay Has With RTX Employees
  </h2>
  <div className="space-y-6">
   <div className="bg-[#FAFAF8] border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I&apos;m pension-eligible next year. Should I take the monthly payment or lump sum?&rdquo;
   </p>
   </div>
   <div className="bg-[#FAFAF8] border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I&apos;m in the RAYSIP plan. Should I opt into the Lifetime Income Strategy or manage my own investments?&rdquo;
   </p>
   </div>
   <div className="bg-[#FAFAF8] border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I hold RTX stock in my 401(k). Can I use Net Unrealized Appreciation, or does the pension and LIS decision affect that?&rdquo;
   </p>
   </div>
   <div className="bg-[#FAFAF8] border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I&apos;m an M7 and have access to the deferred compensation plan. How should I coordinate deferral timing with my pension and 401(k)?&rdquo;
   </p>
   </div>
   <div className="bg-[#FAFAF8] border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I&apos;m considering an early retirement package. What happens to my pension, RSUs or deferred comp, and benefits?&rdquo;
   </p>
   </div>
  </div>
  </div>
  </section>
 </AnimateOnScroll>

 {/* FAQ SECTION */}
 <AnimateOnScroll>
  <section className="bg-[#FAFAF8] py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-12 text-center">
   Frequently Asked Questions
  </h2>

  <div className="space-y-8">
   {/* FAQ 1 */}
   <div>
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">
   Should I take the RTX pension as a monthly payment or lump sum?
   </h3>
   <p className="text-lg text-[#5b6a71] font-sans leading-relaxed">
   This is an irreversible decision that can cost or save you hundreds of thousands of dollars depending on your break-even age, survivor needs, and total financial picture. I build a comprehensive analysis including break-even age, portfolio integration, tax sequencing, and estate implications to help you decide with confidence.
   </p>
   </div>

   {/* FAQ 2 */}
   <div>
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">
   What is Raytheon's Lifetime Income Strategy and should I elect it?
   </h3>
   <p className="text-lg text-[#5b6a71] font-sans leading-relaxed">
   The LIS option under RAYSIP gradually shifts investments toward guaranteed income starting at age 48, with full conversion to an annuity by age 62. While it locks in guaranteed income, it may preclude Net Unrealized Appreciation treatment and limit flexibility. Jay evaluates the LIS alongside your total retirement income sources, risk tolerance, and alternative strategies.
   </p>
   </div>

   {/* FAQ 3 */}
   <div>
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">
   How should I coordinate my RTX 401(k), pension, and executive deferred comp?
   </h3>
   <p className="text-lg text-[#5b6a71] font-sans leading-relaxed">
   RTX employees at manager level and above have access to the Compensation Deferral Plan and PSU Deferral Plan in addition to the pension and 401(k). Proper coordination requires understanding vesting schedules, distribution timing, tax consequences, and how they interact with your overall wealth plan. I specialize in multi-plan strategy for defense contractors.
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
   You Spent a Career Defending America. Now Defend Your Retirement.
  </h2>
  <p className="text-xl text-[#5b6a71] font-sans mb-10 leading-relaxed">
   Your RTX benefits package is extraordinary - but only if you use it strategically. Whether you&apos;re making a pension election, deciding about the Lifetime Income Strategy, or coordinating multiple deferred compensation plans, I have the expertise to help you build a comprehensive, tax-efficient retirement plan aligned with your goals.
  </p>
  <div className="mb-6">
   <Button href="/schedule-consultation" variant="primary">Schedule Your RTX / Raytheon Strategy Call - Serving Tucson and Phoenix-area professionals</Button>
  </div>
  <p className="text-lg text-[#5b6a71] font-sans">
   Confidential · Available nationwide
  </p>
  </div>
  </section>
 </AnimateOnScroll>

 {/* TRUST FOOTER */}
 <section className="bg-[#333333] py-12 px-6">
  <div className="max-w-6xl mx-auto">
  <div className="space-y-4 text-center text-sm font-sans text-gray-300">
  <p>
   <strong className="text-white">Fiduciary advisor</strong> - I&apos;m legally required to act in your interest, not earn commissions
  </p>
  <p>
   <strong className="text-white">Backed by Farther&apos;s institutional platform</strong> for tax-lot optimization, direct indexing, and estate planning resources
  </p>
  <p>
   <strong className="text-white">Serving professionals</strong> in Tucson, Phoenix, Chandler, Tempe, Mesa, Scottsdale, Santa Clara, and beyond
  </p>
  </div>
  </div>
 </section>
 </>
 );
}
