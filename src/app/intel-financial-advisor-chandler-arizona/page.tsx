import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Intel Employee Financial Planning in Chandler | RSU, SERPLUS & 401(k) Strategy | Jay Chang',
 description: 'Specialized financial planning for Intel professionals in Chandler. SERPLUS guidance, mega backdoor Roth, RSU diversification, and tax strategy from a fiduciary advisor who knows Intel&apos;s benefits inside and out.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/intel-financial-advisor-chandler-arizona',
 },
 robots: {
 index: true,
 follow: true,
 },
};

export default function IntelFinancialAdvisor() {
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
   name: 'What happens to my SERPLUS if I&apos;m laid off from Intel?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'In most cases, an involuntary termination counts as a separation from service under IRC 409A, which triggers distributions on the schedule you originally elected. Our team can walk you through your specific distribution timing and help you plan for the tax impact before your separation date.',
   },
   },
   {
   '@type': 'Question',
   name: 'Should I always sell Intel RSUs when they vest?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'Not necessarily. The honest answer depends on how much Intel stock you already hold, your financial goals, your tax picture, and how you feel about Intel&apos;s path forward. We help you build a clear, written framework so you&apos;re making that call with a cool head - not scrambling on vesting day.',
   },
   },
   {
   '@type': 'Question',
   name: 'Can Jay help with Intel employees relocating from California?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'Absolutely. Helping semiconductor professionals navigate the CA-to-AZ move is something we do all the time. The timing of RSU sales, when you establish residency, and how income gets split between states - it all matters, and it can save you real money when done right.',
   },
   },
  ],
  }),
  }}
 />

 {/* HERO SECTION */}
 <section className="relative bg-[#F7F4EE] py-10 md:py-20 px-6">
  <Image
  src="/Photos/Jay-Intel.png"
  alt="Jay Chang Intel financial advisor"
  fill
  className="object-cover opacity-20"
  priority
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EE] via-[#F7F4EE]/90 to-[#F7F4EE]/40" />
  <div className="relative z-10 max-w-4xl mx-auto text-center">
  <div className="text-sm font-sans text-[#5b6a71] tracking-wide uppercase mb-6">
  Intel Employee Financial Planning
  </div>
  <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#333333] mb-6 leading-tight">
  You Chose Intel for a Reason. Let&apos;s Make Sure Your Money Works as Hard as You Do.
  </h1>
  <p className="text-xl text-[#5b6a71] font-sans mb-10 leading-relaxed">
  SERPLUS, mega backdoor Roth, RSU vesting schedules, concentrated stock positions - Intel hands you some of the most powerful financial tools in the semiconductor world. But powerful tools only help if you actually know how to use them together. That&apos;s where our team comes in. Jay Chang works side by side with Intel professionals in Chandler to turn all that complexity into a plan that actually makes sense.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
  <Button href="/schedule-consultation" variant="primary">Let&apos;s Talk About Your Intel Benefits</Button>
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

 {/* SECTION 1: THE INTEL OPPORTUNITY */}
 <AnimateOnScroll>
  <section className="bg-[#FAFAF8] py-20 px-6">
  <div className="max-w-6xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   Intel Gave You an Amazing Toolkit. Let&apos;s Make Sure You&apos;re Actually Using All of It.
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-12 leading-relaxed">
   Here&apos;s the thing about Intel&apos;s compensation package: it&apos;s genuinely one of the best in the semiconductor industry. But &ldquo;best&rdquo; doesn&apos;t mean &ldquo;simple.&rdquo; If you&apos;re not actively coordinating your RSUs, SERPLUS deferral, mega backdoor Roth, 401(k) match, and ESPP, you&apos;re almost certainly leaving money on the table - and maybe walking into a tax surprise you didn&apos;t see coming.
  </p>

  {/* BENEFIT CARDS GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
   {/* Card 1: 401(k) Match */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">401(k) Match</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   5% of eligible compensation, with immediate 100% vesting and full Roth and mega backdoor Roth support - enabling contributions up to $72,000 per year for employees under 50 (2026 limit).
   </p>
   </div>

   {/* Card 2: ESPP */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">ESPP</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   15% discount off the lower of enrollment or purchase date price - a lookback feature that makes Intel&apos;s ESPP among the most valuable in the sector.
   </p>
   </div>

   {/* Card 3: RSU Vesting */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">RSU Vesting</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   Quarterly over 4 years (12 substantially equal tranches), creating up to 4 taxable events annually on top of your salary and bonus.
   </p>
   </div>

   {/* Card 4: SERPLUS */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">SERPLUS (NQDC)</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   Available to Grade Level 10+, allowing deferral of up to 60% of base salary and 75% of bonus - with dollar-for-dollar employer match on excess pay up to 5%, but as an unsecured, unfunded obligation of Intel.
   </p>
   </div>
  </div>
  </div>
  </section>
 </AnimateOnScroll>

 {/* SECTION 2: THE SERPLUS PROBLEM */}
 <AnimateOnScroll>
  <section className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   $3.3 Billion in Unsecured Employee Deferrals. Let&apos;s Talk About What That Means for You.
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   We want to be straight with you: Intel&apos;s SERPLUS balance sits at $3.3 billion - money owed to employees but held as an unsecured general liability on Intel&apos;s balance sheet. In plain English, if Intel ever hit serious financial trouble, SERPLUS participants would be standing in line as general creditors, not protected plan beneficiaries.
  </p>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   With Intel navigating a $16.1 billion net loss in fiscal 2024, ongoing workforce reductions, and a suspended dividend, this isn&apos;t just a what-if scenario. It&apos;s something worth thinking through carefully. Here&apos;s how we help:
  </p>
  <ul className="space-y-4 text-lg text-[#5b6a71] font-sans">
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Figure out the right balance between SERPLUS deferrals and maxing out your protected 401(k) savings</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Run the numbers on whether SERPLUS deferral still makes sense given Intel&apos;s current financial picture</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Map out a distribution strategy that lines up with your income needs, tax brackets, and when you want to retire</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Honestly weigh the risk of unsecured deferral against the tax benefits of the program</span>
   </li>
  </ul>
  </div>
  </section>
 </AnimateOnScroll>

 {/* SECTION 3: RSU & EQUITY PLANNING */}
 <AnimateOnScroll>
  <section className="bg-[#FAFAF8] py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   Quarterly Vesting + a Stock That&apos;s Been Rough = Decisions You Can&apos;t Put Off
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   Let&apos;s not sugarcoat it: Intel&apos;s stock price has dropped significantly from its recent highs. If you received 3-4 year RSU grants at higher prices, you&apos;ve watched your expected compensation shrink. That&apos;s frustrating - and it creates some really important decisions:
  </p>
  <ul className="space-y-4 text-lg text-[#5b6a71] font-sans mb-8">
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span><strong>Hold or diversify?</strong> If you&apos;re sitting on vested Intel shares beyond your vesting schedule, you&apos;re essentially betting on Intel&apos;s recovery. That might be the right call - but it should be a conscious choice, not a default.</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span><strong>Tax timing:</strong> With RSUs vesting quarterly, your effective tax rate and withholding gaps need attention throughout the year - not just in April.</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span><strong>Concentration risk:</strong> If Intel represents more than 20-30% of your liquid net worth, that&apos;s worth a serious conversation.</span>
   </li>
  </ul>
  <p className="text-lg text-[#5b6a71] font-sans">
   We build individualized sell/hold frameworks for Intel employees based on your whole financial picture - not just what the stock is doing today.
  </p>
  </div>
  </section>
 </AnimateOnScroll>

 {/* MID-PAGE CTA INTERRUPTION */}
 <section className="bg-[#1d7682] py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
  <p className="text-xl text-white font-sans mb-8">
  If any of this sounds like your situation, you&apos;re not alone. We work with Intel employees every week - and we&apos;d love to help you get some clarity too. Reach out whenever it works for you.
  </p>
  <Button href="/schedule-consultation" variant="primary">Let&apos;s Connect</Button>
  </div>
 </section>

 {/* SECTION 4: MEGA BACKDOOR ROTH */}
 <AnimateOnScroll>
  <section className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   Did You Know You Could Save Up to $72,000 a Year Tax-Free? Most Intel Folks Don&apos;t.
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   Intel&apos;s 401(k) supports after-tax contributions and in-plan Roth conversions - that&apos;s the &ldquo;mega backdoor Roth&rdquo; strategy. For 2026, employees under 50 could put up to $72,000 total into their 401(k) and convert the after-tax piece to Roth for tax-free growth. Forever.
  </p>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   Think about what that means for a senior Intel professional in their 40s earning $250,000. Over a career, this strategy can create hundreds of thousands of dollars in additional tax-free retirement savings - money that grows completely outside the reach of future tax rates. That&apos;s a big deal.
  </p>
  <p className="text-lg text-[#5b6a71] font-sans">
   We&apos;ll show you exactly how to set this up, how it coordinates with your SERPLUS deferrals, and how to squeeze every drop of tax-advantaged savings out of every plan Intel offers.
  </p>
  </div>
  </section>
 </AnimateOnScroll>

 {/* SECTION 5: KEY CONVERSATIONS */}
 <AnimateOnScroll>
  <section className="bg-[#FAFAF8] py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-12 text-center">
   Conversations We Have With Intel Employees All the Time
  </h2>
  <div className="space-y-6">
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I have RSUs vesting next month - should I sell right away or hold some?&rdquo;
   </p>
   </div>
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I&apos;m in the SERPLUS plan. How much should I really be deferring given everything going on with Intel?&rdquo;
   </p>
   </div>
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I just moved from California to Arizona. Am I handling my residency and taxes the right way?&rdquo;
   </p>
   </div>
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;My 401(k) and SERPLUS are both tied to Intel. Is that too many eggs in one basket?&rdquo;
   </p>
   </div>
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I just got laid off. What happens to my unvested RSUs, SERPLUS balance, and benefits?&rdquo;
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
   What happens to my SERPLUS if I&apos;m laid off from Intel?
   </h3>
   <p className="text-lg text-[#5b6a71] font-sans leading-relaxed">
   In most cases, an involuntary termination counts as a separation from service under IRC 409A, which triggers distributions on the schedule you originally elected. We can walk you through your specific timing and help you plan the tax impact before your separation date - ideally before it happens, so you&apos;re not scrambling.
   </p>
   </div>

   {/* FAQ 2 */}
   <div>
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">
   Should I always sell Intel RSUs when they vest?
   </h3>
   <p className="text-lg text-[#5b6a71] font-sans leading-relaxed">
   Not necessarily. The honest answer depends on how much Intel stock you already hold, your goals, your tax situation, and how you feel about Intel&apos;s path forward. We help you build a clear, written framework so you&apos;re making that call with a level head - not reacting emotionally on vesting day.
   </p>
   </div>

   {/* FAQ 3 */}
   <div>
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">
   Can Jay help with Intel employees relocating from California?
   </h3>
   <p className="text-lg text-[#5b6a71] font-sans leading-relaxed">
   Absolutely - this is something we do all the time with semiconductor professionals. The timing of RSU sales, when you establish residency, and how income gets attributed between states can meaningfully change your tax bill. We&apos;ll make sure you get it right.
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
   You Build Things That Work. So Do We.
  </h2>
  <p className="text-xl text-[#5b6a71] font-sans mb-10 leading-relaxed">
   At Intel, the best outcomes go to people who plan ahead - not the ones who wing it. Same goes for your finances. Whether you&apos;re managing a SERPLUS balance, figuring out a concentrated stock position, or navigating a cross-state move, our team has the know-how and the tools to help you build a plan you can actually follow through on.
  </p>
  <div className="mb-6">
   <Button href="/schedule-consultation" variant="primary">Schedule Your Intel Strategy Call</Button>
  </div>
  <p className="text-lg text-[#5b6a71] font-sans">
   No cost. No pressure. Just a real conversation.
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
