import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'NVIDIA Employee Financial Advisor | RSU, ESPP & Equity Concentration Planning | Jay Chang',
 description: 'Fiduciary wealth planning for NVIDIA professionals in Phoenix, Santa Clara, and beyond. Manage your NVIDIA RSU concentration, 2-year ESPP lookback, quarterly vesting tax events, and seven-figure equity positions.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/nvidia-financial-advisor-phoenix-santa-clara',
 },
 robots: 'index, follow',
 openGraph: {
 title: 'NVIDIA Employee Financial Advisor | RSU, ESPP & Equity Concentration Planning',
 description: 'Fiduciary wealth planning for NVIDIA professionals in Phoenix, Santa Clara, and beyond.',
 type: 'website',
 url: 'https://www.PWM-Farther.com/nvidia-financial-advisor-phoenix-santa-clara',
 },
};

export default function NVIDIAAdvisor() {
 const trustLogos = [
 { name: 'CFP Board', description: 'Certified Financial Planner' },
 { name: 'SEC', description: 'Registered Investment Advisor' },
 { name: 'FINRA', description: 'Member Firm' },
 ];

 const faqSchema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
  '@type': 'Question',
  name: 'What makes NVIDIA employee equity different from regular stock?',
  acceptedAnswer: {
  '@type': 'Answer',
  text: 'NVIDIA employees receive RSUs that vest quarterly (12+ taxable events per year) and can participate in an ESPP with a generous 2-year lookback provision. This creates unique tax complexity and concentration risk that requires specialized planning.',
  },
 },
 {
  '@type': 'Question',
  name: 'Is the 22% supplemental tax withholding enough for NVIDIA RSU vesting?',
  acceptedAnswer: {
  '@type': 'Answer',
  text: 'No. For employees earning $300K-$500K+ annually, 22% supplemental withholding is typically insufficient. We model quarterly tax projections and recommend estimated payment strategies to avoid April surprises.',
  },
 },
 {
  '@type': 'Question',
  name: 'What is the effective discount on NVIDIA ESPP with the 2-year lookback?',
  acceptedAnswer: {
  '@type': 'Answer',
  text: 'While NVIDIA offers a 15% discount, the 2-year lookback provision can create an effective discount of 30-50% or more, depending on the stock performance during the measurement period.',
  },
 },
 {
  '@type': 'Question',
  name: 'How do I safely diversify NVIDIA stock without creating a tax nightmare?',
  acceptedAnswer: {
  '@type': 'Answer',
  text: 'We work with you to define a maximum concentration threshold, then execute a multi-year tax-efficient diversification plan using structured selling strategies (rules-based, calendar-based, or threshold-based) while reinvesting into diversified portfolios.',
  },
 },
 ],
 };

 return (
 <>
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />

 {/* Hero Section */}
 <section className="relative bg-[#F7F4EE] py-10 md:py-20">
  <Image
  src="/Photos/Semiconductor-1.png"
  alt="Semiconductor industry"
  fill
  className="object-cover opacity-20"
  priority
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EE] via-[#F7F4EE]/90 to-[#F7F4EE]/40" />
  <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
  <AnimateOnScroll>
  <div className="text-center">
   <p className="text-sm md:text-base font-sans font-semibold text-[#1d7682] mb-4 tracking-wide uppercase">
   NVIDIA EMPLOYEE FINANCIAL PLANNING
   </p>
   <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#333333] mb-6 leading-tight">
   NVIDIA Changed Your Life. Let&apos;s Make Sure That Wealth Lasts.
   </h1>
   <p className="font-sans text-lg md:text-xl text-[#5b6a71] mb-8 max-w-3xl mx-auto leading-relaxed">
   If you work at NVIDIA, your equity might be the single biggest financial event of your career - maybe your life. Jay Chang and our team help NVIDIA professionals build a real strategy to diversify, protect, and grow the wealth you&apos;ve earned, without handing a fortune to the IRS along the way.
   </p>
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Let&apos;s Talk About Your NVIDIA Equity
   </Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Section 1: The NVIDIA Wealth Problem */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
  <AnimateOnScroll>
  <div>
   <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
   You&apos;ve Built Amazing Wealth at NVIDIA. But Most of It Might Be Sitting in One Stock.
   </h2>
   <div className="prose prose-lg max-w-none text-[#5b6a71] font-sans space-y-4">
   <p>
   NVIDIA&apos;s equity compensation has been life-changing for thousands of professionals. But here&apos;s the part that keeps us up at night for our clients: that wealth comes with hidden costs - concentration risk and tax complexity that most people don&apos;t fully grasp until they&apos;re staring at a $300K+ tax bill in April.
   </p>
   <p>
   Here&apos;s what&apos;s really going on: NVIDIA RSUs vest <strong>quarterly</strong>. That means <strong>12+ taxable events every single year</strong>. Each vesting triggers ordinary income tax on the fair market value, plus FICA taxes on supplemental income. The company withholds 22%. But if you&apos;re earning in the $300K to $500K+ range, 22% is nowhere near enough.
   </p>
   <p>
   Meanwhile, your NVIDIA stock keeps piling up. You might be holding 70-90% of your net worth in a single stock and not even realize it. That concentration risk is real. A 30% correction in NVDA doesn&apos;t just sting - it can upend your entire financial plan.
   </p>
   <p>
   And NVIDIA&apos;s 2-year ESPP lookback? It&apos;s the most generous in tech. But unless you&apos;re maximizing it and coordinating it with your RSU vesting and tax planning, you&apos;re leaving money on the table and adding complexity you don&apos;t need.
   </p>
   <p>
   The good news: with a thoughtful strategy, your NVIDIA equity can be exactly what it should be - the opportunity of a lifetime, managed with intention.
   </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Section 2: NVIDIA's ESPP */}
 <section className="bg-[#FAFAF8] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
  <AnimateOnScroll>
  <div>
   <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
   Your ESPP Is Worth Way More Than the 15% Discount. Here&apos;s the Math.
   </h2>
   <div className="prose prose-lg max-w-none text-[#5b6a71] font-sans space-y-4">
   <p>
   NVIDIA offers a 15% ESPP discount. That sounds good on its own - a guaranteed 15% gain. But the real magic is something most employees don&apos;t fully appreciate: the <strong>2-year lookback provision</strong>.
   </p>
   <p>
   Here&apos;s how it actually works: Your purchase price is the lower of the stock price at the start of the two-year period or the stock price at the end. So if NVIDIA&apos;s stock has climbed significantly over those two years - which it has, historically - your effective discount can be <strong>30%, 40%, even 50% or more</strong>.
   </p>
   <p>
   Let&apos;s say NVIDIA trades at $100 at the start of the two-year period. Two years later, it&apos;s at $250. You pay 85% of $100 - that&apos;s $85 per share - and you instantly own shares worth $250. That&apos;s not a 15% gain. That&apos;s a 194% gain. Pretty incredible, right?
   </p>
   <p>
   A lot of NVIDIA employees don&apos;t max out their ESPP because they don&apos;t realize this math. Others max it out without thinking about the tax consequences. A qualified disposition requires holding shares for at least one year after purchase and two years after the period begins. A disqualifying disposition triggers ordinary income tax on the discount and long-term capital gains on any appreciation.
   </p>
   <p>
   Our approach: Max your ESPP contributions. Understand the lookback mechanics. Plan your dispositions strategically. Coordinate your ESPP with your RSU vesting and tax planning. Done right, your ESPP becomes one of the most powerful wealth-building tools you have.
   </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Section 3: The Diversification Conversation */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
  <AnimateOnScroll>
  <div>
   <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
   NVIDIA Stock Has Been Incredible. But Having Everything in One Place? That&apos;s a Risk, Not a Strategy.
   </h2>
   <div className="prose prose-lg max-w-none text-[#5b6a71] font-sans space-y-4">
   <p>
   Let&apos;s be real: NVIDIA has been an extraordinary wealth creator. If you&apos;ve held NVIDIA stock for years, congratulations - you made a great career choice. Nobody&apos;s questioning that.
   </p>
   <p>
   But here&apos;s the question worth asking: Is 70%, 80%, or 90% of your net worth in a single stock the right plan for <em>your family</em>? That concentration creates upside, sure. But it also creates vulnerability that can hit at the worst possible time.
   </p>
   <p>
   A 30% market correction in NVDA costs you millions in net worth. A sector rotation away from AI hits your whole portfolio. A regulatory challenge, a supply chain disruption - these aren&apos;t wild scenarios. They happen to real companies.
   </p>
   <p>
   We&apos;re not telling you to sell everything. We&apos;re not bearish on NVIDIA. We&apos;re just practical. The goal is to define a <strong>maximum concentration threshold</strong> that makes sense for your age, your career stage, your total wealth, and your comfort level. Then we build a <strong>tax-efficient multi-year diversification plan</strong> to get you there.
   </p>
   <p>
   That might look like:
   </p>
   <ul>
   <li><strong>Rules-based selling:</strong> Automatically sell a percentage of vesting RSUs every quarter</li>
   <li><strong>Calendar-based selling:</strong> Trigger sales on specific dates to optimize tax loss harvesting or capital gains planning</li>
   <li><strong>Threshold-based selling:</strong> When NVIDIA hits certain price levels, trim the position back to your target</li>
   </ul>
   <p>
   The result: You stay invested in NVIDIA. You benefit from future upside. But your family&apos;s entire financial future isn&apos;t riding on one stock. You reinvest the proceeds into a diversified portfolio. You sleep better. And you&apos;re building generational wealth, not gambling it.
   </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Mid-Page CTA */}
 <section className="bg-[#F7F4EE] py-16 md:py-20">
  <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
  <AnimateOnScroll>
  <h3 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
   Ready to Get a Real Plan for Your NVIDIA Equity?
  </h3>
  <p className="font-sans text-lg text-[#5b6a71] mb-8">
   A free strategy call gives us 30 minutes to understand your NVIDIA position, your goals, and the tax opportunities you might be missing. No sales pitch - just an honest look at your situation.
  </p>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule a Free Conversation
  </Button>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Section 4: Quarterly Vesting Tax Management */}
 <section className="bg-[#FAFAF8] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
  <AnimateOnScroll>
  <div>
   <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
   12+ Taxable Events a Year. And Most of Them Are Flying Under the Radar.
   </h2>
   <div className="prose prose-lg max-w-none text-[#5b6a71] font-sans space-y-4">
   <p>
   NVIDIA RSUs vest quarterly. For most employees, that&apos;s 3-4 vesting events per year, sometimes more depending on grant schedules and promotions. Throw in ESPP contributions and bonuses, and you&apos;ve got taxable income popping up throughout the year in ways that are easy to lose track of.
   </p>
   <p>
   Here&apos;s what we see happen all the time: You get a vesting notification. Shares hit your account. You see 22% withheld and figure the taxes are handled. Then April rolls around, and your accountant delivers the bad news: you owe another $80K. Or $120K. Or more.
   </p>
   <p>
   Why? Because that 22% supplemental withholding doesn&apos;t account for:
   </p>
   <ul>
   <li>Your federal marginal tax rate (likely 32%, 35%, or higher)</li>
   <li>California state income tax (13.3% for high earners)</li>
   <li>FICA taxes on RSU income</li>
   <li>How RSU vesting, ESPP gains, and bonus income all stack on top of each other</li>
   <li>The compounding effect of 12+ taxable events spread across the year</li>
   </ul>
   <p>
   Here&apos;s what we do instead: We model your quarterly tax situation in detail. We estimate your RSU vesting income by quarter, identify the gap between what you&apos;ll owe and what&apos;s being withheld, and recommend estimated tax payments or W-4 adjustments so you never face a surprise.
   </p>
   <p>
   You understand your tax liability in real time. You make proactive choices about diversification, ESPP timing, and bonus deferral. No shock tax bills. Just wealth building with intention.
   </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Final CTA Section */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
  <AnimateOnScroll>
  <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
   Your NVIDIA Equity Is a Once-in-a-Career Opportunity. Let&apos;s Treat It That Way.
  </h2>
  <p className="font-sans text-lg text-[#5b6a71] mb-8">
   Thousands of NVIDIA employees have built extraordinary wealth. A thoughtful plan helps you protect it, diversify wisely, and keep more of it after taxes. We&apos;d love to help you build yours.
  </p>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule Your Free NVIDIA Strategy Call
  </Button>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Trust Bar Footer */}
 <section className="bg-[#F7F4EE] py-12 md:py-16 border-t border-gray-200">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
  <AnimateOnScroll>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
   {trustLogos.map((item, index) => (
   <div key={index} className="text-center">
   <p className="font-sans font-semibold text-[#333333] text-lg mb-2">
    {item.name}
   </p>
   <p className="font-sans text-sm text-[#5b6a71]">
    {item.description}
   </p>
   </div>
   ))}
  </div>
  <div className="mt-8 pt-8 border-t border-gray-300 text-center">
   <p className="font-sans text-xs text-[#5b6a71]">
   Jay Chang is a Certified Financial Planner™ and registered investment advisor fiduciary. This content is educational and not investment advice.
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>
 </>
 );
}
