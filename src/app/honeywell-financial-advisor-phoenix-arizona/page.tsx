import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Honeywell Employee Financial Advisor in Phoenix | RSU, 401(k) & Deferred Comp Planning | Jay Chang',
 description: 'Wealth planning for Honeywell engineers and executives in Phoenix. Employer-stock concentration in your 401(k) match, RSU strategy, and retirement income planning from a fiduciary who knows Honeywell\'s benefits.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/honeywell-financial-advisor-phoenix-arizona',
 },
 robots: 'index, follow',
};

export default function HoneywellAdvisorPage() {
 return (
 <div className="w-full">
 {/* HERO SECTION */}
 <section className="relative bg-[#F7F4EE] py-16 md:py-24">
  <Image
  src="/Photos/Aerospace.png"
  alt="Aerospace technology"
  fill
  className="object-cover opacity-20"
  priority
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EE] via-[#F7F4EE]/90 to-[#F7F4EE]/40" />
  <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
  <AnimateOnScroll>
  <div className="text-center">
   <p className="text-sm font-sans font-semibold tracking-wide text-[#1d7682] uppercase mb-4">
   Honeywell Employee Financial Planning
   </p>
   <h1 className="font-serif text-4xl md:text-5xl text-[#333333] leading-tight mb-6">
   Honeywell Engineers and Executives: Your 401(k) Match Comes With a Hidden Risk.
   </h1>
   <p className="font-sans text-lg text-[#5b6a71] leading-relaxed mb-8 max-w-2xl mx-auto">
   Honeywell&apos;s 7% employer match is among the most generous in aerospace. But it arrives as Honeywell stock - and most employees don&apos;t realize how much of their retirement is riding on one company&apos;s performance. Jay Chang helps Honeywell professionals build a complete, diversified plan.
   </p>
   <Button
   href="/schedule-consultation"
   variant="primary"
   className="inline-block"
   >
   Schedule a Honeywell Benefits Review
   </Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 1: The Honeywell Match */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6 md:px-12">
  <AnimateOnScroll>
  <div>
   <h2 className="font-serif text-3xl md:text-4xl text-[#333333] leading-tight mb-6">
   87.5% of Your First 8% = 7% Employer Contribution. All in Honeywell Stock.
   </h2>
   <div className="font-sans text-lg text-[#5b6a71] leading-relaxed space-y-4 mb-8">
   <p>
   Your Honeywell employer match arrives as a generous contribution: 7% of salary for matching 8% of your contributions. But there&apos;s a critical detail most employees miss. The match is deposited directly into the Honeywell Common Stock Fund - and it stays there until you actively move it.
   </p>
   <p>
   For long-tenured employees and those who max out their contributions, this creates significant concentration risk. Twenty to forty percent of total 401(k) assets often sit in a single stock. Meanwhile, your individual investments elsewhere may further tilt your portfolio toward Honeywell shares.
   </p>
   <p>
   Jay&apos;s approach to Honeywell match strategy includes:
   </p>
   <ul className="list-disc list-inside space-y-2 ml-4">
   <li>Mapping your current Honeywell stock concentration across all accounts</li>
   <li>Building a systematic reallocation plan within plan rules</li>
   <li>Coordinating your 401(k) allocation with taxable and brokerage holdings</li>
   <li>Planning around the 3-year vesting schedule for match contributions</li>
   </ul>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 2: RSU Strategy */}
 <section className="bg-[#FAFAF8] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6 md:px-12">
  <AnimateOnScroll>
  <div>
   <h2 className="font-serif text-3xl md:text-4xl text-[#333333] leading-tight mb-6">
   Manager and Executive RSUs Require a Written Plan. Most Don&apos;t Have One.
   </h2>
   <div className="font-sans text-lg text-[#5b6a71] leading-relaxed space-y-4 mb-8">
   <p>
   If you&apos;re a manager or executive at Honeywell, you may receive restricted stock units on top of base salary. RSUs vest on a schedule - typically 25% at one year, then 1/36th monthly over the remaining three years. Some managers elect RSUs over cash, amplifying Honeywell concentration even further.
   </p>
   <p>
   Without a written plan, RSU vesting often becomes a surprise tax event or an unmanaged wealth windfall. Jay works with Honeywell leaders to design a comprehensive RSU strategy:
   </p>
   <ul className="list-disc list-inside space-y-2 ml-4">
   <li>Multi-year RSU modeling and vesting projections</li>
   <li>A systematic sell-and-diversify framework tied to your financial goals</li>
   <li>Coordination between RSU proceeds and your overall 401(k) allocation</li>
   <li>Tax-efficient execution and withholding election planning</li>
   <li>Integration with long-term retirement income projections</li>
   </ul>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 3: Retirement Income Planning */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6 md:px-12">
  <AnimateOnScroll>
  <div>
   <h2 className="font-serif text-3xl md:text-4xl text-[#333333] leading-tight mb-6">
   20 Years at Honeywell Means a Lot of Accumulated Wealth - and a Lot of Planning Complexity.
   </h2>
   <div className="font-sans text-lg text-[#5b6a71] leading-relaxed space-y-4 mb-8">
   <p>
   Honeywell rewards tenure. Employees who stay build substantial retirement savings across 401(k)s, taxable accounts, deferred compensation plans (if eligible), and Honeywell stock. When it&apos;s time to retire - or plan toward that transition - the decisions become intricate.
   </p>
   <p>
   The core questions require detailed planning:
   </p>
   <ul className="list-disc list-inside space-y-2 ml-4">
   <li>In what order should you draw from 401(k), taxable accounts, and Social Security?</li>
   <li>When should you actually retire - and how does that timing affect healthcare and Social Security?</li>
   <li>How do you bridge the healthcare coverage gap between retirement and Medicare at 65?</li>
   <li>How do you structure withdrawals and conversions to minimize lifetime tax liability?</li>
   <li>How do you build a tax-efficient wealth transfer strategy for heirs?</li>
   </ul>
   <p className="mt-4">
   Jay builds detailed retirement income projections under multiple scenarios - different retirement ages, market conditions, healthcare costs, and tax regimes. You&apos;ll know exactly how much you can spend, when to claim Social Security, and how to optimize every dollar.
   </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* MID-PAGE CTA */}
 <section className="bg-[#F7F4EE] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
  <AnimateOnScroll>
  <h3 className="font-serif text-3xl md:text-4xl text-[#333333] leading-tight mb-6">
   Ready to Build Your Honeywell Strategy?
  </h3>
  <p className="font-sans text-lg text-[#5b6a71] leading-relaxed mb-8">
   Let&apos;s start with a free, no-obligation benefits review. We&apos;ll map your 401(k) concentration, discuss your RSU plan, and outline a path to retirement clarity.
  </p>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule Your Honeywell Benefits Review
  </Button>
  </AnimateOnScroll>
  </div>
 </section>

 {/* FINAL CTA + CLOSING SECTION */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6 md:px-12">
  <AnimateOnScroll>
  <div className="text-center">
   <h2 className="font-serif text-3xl md:text-4xl text-[#333333] leading-tight mb-6">
   Honeywell Rewards Long Careers. Make Sure Your Financial Plan Does Too.
   </h2>
   <p className="font-sans text-lg text-[#5b6a71] leading-relaxed mb-8 max-w-2xl mx-auto">
   Jay Chang is a fiduciary advisor who specializes in Honeywell employee financial planning. He understands your benefits, your risks, and your opportunities for long-term wealth.
   </p>
   <Button
   href="/schedule-consultation"
   variant="primary"
   className="inline-block mb-8"
   >
   Schedule Your Honeywell Strategy Call - Free for Honeywell Employees and Retirees
   </Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* TRUST BAR / FOOTER */}
 <section className="bg-[#FAFAF8] py-12 md:py-16">
  <div className="max-w-4xl mx-auto px-6 md:px-12">
  <AnimateOnScroll>
  <div className="text-center">
   <p className="font-sans text-xs md:text-sm text-[#5b6a71] uppercase tracking-wide mb-4">
   Trusted by Honeywell Professionals
   </p>
   <p className="font-sans text-sm text-[#5b6a71] leading-relaxed">
   Jay Chang is a registered investment advisor and fiduciary. Not all advisors are fiduciaries. It matters.
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>
 </div>
 );
}
