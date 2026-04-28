import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Freeport-McMoRan Executive Wealth Management in Phoenix | Equity & Commodity Planning | Jay Chang',
 description: 'Wealth management for Freeport-McMoRan professionals in Phoenix. Manage commodity-linked equity, RSU diversification, profit sharing, and executive compensation planning with a fiduciary advisor.',
 alternates: {
 canonical: 'https://www.advisorjay.com/freeport-mcmoran-executive-wealth-planning-phoenix',
 },
 robots: 'index, follow',
};

export default function FCXExecutiveWealthPage() {
 const hubspotCTA = '/schedule-consultation';

 return (
 <main className="w-full">
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
   '@context': 'https://schema.org',
   '@type': 'FinancialService',
   name: 'Advisor Jay - Freeport-McMoRan Executive Wealth Planning',
   description: 'Fiduciary wealth management for Freeport-McMoRan professionals in Phoenix. Commodity-linked equity, RSU diversification, profit sharing, and executive compensation planning.',
   areaServed: ['Phoenix, Arizona', 'Scottsdale, Arizona'],
   serviceType: ['Wealth Management', 'Executive Compensation Planning', 'Concentrated Stock Strategy'],
   url: 'https://www.advisorjay.com/freeport-mcmoran-executive-wealth-planning-phoenix',
   provider: {
   '@type': 'Organization',
   name: 'Farther',
   url: 'https://www.advisorjay.com',
   },
  }),
  }}
 />
 {/* HERO SECTION */}
 <section className="relative w-full bg-gradient-to-b from-slate-900 to-slate-800 py-10 md:py-20 px-4 sm:px-6 lg:px-8">
  <Image
  src="/Photos/Freeport-Headquarters.jpg"
  alt="Freeport-McMoRan headquarters"
  fill
  className="object-cover opacity-20"
  priority
  />
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-800/40" />
  <div className="relative z-10 max-w-4xl mx-auto">
  <AnimateOnScroll>
  <div className="space-y-6">
   <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
   Freeport-McMoRan Executive Wealth Planning
   </p>
   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
   Freeport-McMoRan Professionals: Your Compensation Moves With Copper Prices. Your Wealth Strategy Shouldn&apos;t.
   </h1>
   <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">
   FCX&apos;s executive pay is tied to commodity cycles - copper prices, production metrics, and global demand. I help Freeport professionals build a financial strategy that creates stability and diversification regardless of where copper trades next quarter.
   </p>
   <div className="pt-6 flex flex-col sm:flex-row gap-4">
   <Button
   href={hubspotCTA}
   variant="primary"
   >Schedule a Freeport Strategy Call with Jay</Button>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 1: FCX Compensation Picture */}
 <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto">
  <AnimateOnScroll>
  <div className="space-y-8">
   <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
   Strong Performance Pay, Commodity Volatility, and a 98% Participation 401(k) - FCX&apos;s Benefits Are Built for Retention.
   </h2>

   <div className="space-y-6">
   <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
   <h3 className="text-lg font-semibold text-slate-900 mb-4">Employee Capital Accumulation Plan</h3>
   <p className="text-slate-700 mb-4">
    Named 2025 Best in Class 401(k) by Plan Sponsor magazine, with 98% participation across the organization.
   </p>
   <ul className="space-y-3 text-slate-700">
    <li className="flex items-start">
    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
    <span>100% match on employee contributions up to 5%</span>
    </li>
    <li className="flex items-start">
    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
    <span>True-up match at year-end</span>
    </li>
    <li className="flex items-start">
    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
    <span>Auto-escalation 1% annually</span>
    </li>
    <li className="flex items-start">
    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
    <span>Immediate eligibility</span>
    </li>
    <li className="flex items-start">
    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
    <span>Schwab as recordkeeper</span>
    </li>
   </ul>
   </div>

   <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8 border border-teal-200">
   <h3 className="text-lg font-semibold text-slate-900 mb-4">Executive Compensation</h3>
   <p className="text-slate-700">
    $4.5M-$8.3M+ with majority in variable at-risk components tied to copper production, cost management, and safety metrics. This performance-based structure aligns executive interests with commodity cycles - but also concentrates personal wealth in FCX&apos;s commodity exposure.
   </p>
   </div>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 2: Commodity Concentration Problem */}
 <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto">
  <AnimateOnScroll>
  <div className="space-y-8">
   <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
   FCX Stock Tracks Copper. If You&apos;re Holding Concentrated FCX, You&apos;re Making a Commodity Bet.
   </h2>

   <div className="bg-white rounded-lg p-8 border border-slate-200 space-y-6">
   <p className="text-lg text-slate-700 leading-relaxed">
   FCX stock is deeply correlated with copper prices. Your human capital - your salary, bonus, and equity grants - is tied to FCX and commodity performance. Your financial capital - if concentrated in company stock - is tied to the same thing.
   </p>

   <p className="text-lg text-slate-700 leading-relaxed">
   This double concentration means a copper downturn affects your income AND your portfolio simultaneously. When commodity prices compress, FCX operational performance falters, bonus targets miss, and stock declines all at once.
   </p>

   <div className="bg-red-50 border-l-4 border-red-400 p-6">
   <p className="text-slate-900 font-semibold mb-2">The Compounded Risk</p>
   <p className="text-slate-700">
    Human capital + financial capital both locked in commodity cycles = concentrated portfolio risk that amplifies downturns when you need portfolio stability most.
   </p>
   </div>

   <p className="text-lg text-slate-700 leading-relaxed">
   I build systematic diversification strategies that acknowledge the reality of commodity cycles while decoupling your personal wealth from pure FCX/copper correlation. This isn&apos;t market timing. It&apos;s prudent concentration management for professionals whose income is already commodity-exposed.
   </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* MID-PAGE CTA & TRUST BAR */}
 <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto">
  <AnimateOnScroll>
  <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-8 sm:p-12 text-center space-y-6">
   <h3 className="text-2xl sm:text-3xl font-bold text-white">
   Ready to Build a Diversification Strategy Built for Commodity Cycles?
   </h3>
   <p className="text-slate-200 text-lg max-w-2xl mx-auto">
   Schedule a confidential strategy call with Jay Chang. We&apos;ll review your compensation structure, equity concentration, and create a plan tailored to FCX compensation dynamics.
   </p>
   <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
   <Button
   href={hubspotCTA}
   variant="primary"
   >Schedule Your FCX Strategy Call</Button>
   </div>
  </div>
  </AnimateOnScroll>

  {/* TRUST BAR */}
  <div className="mt-16">
  <AnimateOnScroll>
   <div className="border-t border-b border-slate-200 py-8 space-y-4">
   <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-600">
   Why FCX Professionals Choose Jay Chang
   </p>
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
   <div>
    <p className="text-2xl font-bold text-slate-900">Fiduciary Advisor</p>
    <p className="text-sm text-slate-600 mt-1">Legal duty to put your interests first</p>
   </div>
   <div>
    <p className="text-2xl font-bold text-slate-900">Commodity-Aware Strategy</p>
    <p className="text-sm text-slate-600 mt-1">Built for cyclical income and equity</p>
   </div>
   <div>
    <p className="text-2xl font-bold text-slate-900">Confidential & Discrete</p>
    <p className="text-sm text-slate-600 mt-1">Coordinated with corporate counsel</p>
   </div>
   </div>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* SECTION 3: 10b5-1 Plans for FCX Insiders */}
 <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto">
  <AnimateOnScroll>
  <div className="space-y-8">
   <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
   As an FCX Insider, When Can You Actually Sell? And How?
   </h2>

   <div className="space-y-6">
   <div className="bg-white rounded-lg p-8 border border-slate-200">
   <h3 className="text-lg font-semibold text-slate-900 mb-4">Insider Trading Windows & Blackout Periods</h3>
   <p className="text-slate-700 mb-6">
    FCX insiders face restricted trading windows. Corporate counsel sets blackout periods around earnings, M&A activity, and strategic announcements. This protects the company - but it constrains your ability to rebalance and diversify when it&apos;s tactically best for your portfolio.
   </p>
   <p className="text-slate-700">
    Result: You might want to sell concentrated FCX stock when it hits a quarterly peak, but the window closes before you can act.
   </p>
   </div>

   <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8 border border-teal-200">
   <h3 className="text-lg font-semibold text-slate-900 mb-4">Rule 10b5-1 Trading Plans</h3>
   <p className="text-slate-700 mb-4">
    A Rule 10b5-1 plan is your solution. It&apos;s a pre-set, legally compliant trading schedule that operates during blackout periods automatically.
   </p>
   <ul className="space-y-3 text-slate-700">
    <li className="flex items-start">
    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
    <span>Executes during blackout periods (with proper legal setup)</span>
    </li>
    <li className="flex items-start">
    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
    <span>Removes discretion - no day-to-day trading decisions</span>
    </li>
    <li className="flex items-start">
    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
    <span>Creates systematic diversification on a disciplined schedule</span>
    </li>
    <li className="flex items-start">
    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
    <span>Demonstrates compliance with SEC regulations</span>
    </li>
   </ul>
   <p className="text-slate-700 mt-6 pt-6 border-t border-teal-200">
    I coordinate plan design with your corporate counsel, ensuring legal compliance while achieving your diversification goals.
   </p>
   </div>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* FINAL CTA SECTION */}
 <section className="w-full bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto text-center">
  <AnimateOnScroll>
  <div className="space-y-8">
   <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
   You Run Operations in Some of the World&apos;s Most Complex Environments. Your Wealth Strategy Should Be Just as Sophisticated.
   </h2>

   <p className="text-lg text-slate-200 max-w-2xl mx-auto">
   Fiduciary wealth planning tailored to FCX professionals. Commodity-aware diversification. Compliance-coordinated 10b5-1 plans. Confidential. Discrete. Built for Freeport-McMoRan professionals.
   </p>

   <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
   <Button
   href={hubspotCTA}
   variant="primary"
   >Schedule Your FCX Strategy Call with Jay</Button>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* TRUST FOOTER */}
 <section className="w-full bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
  <div className="max-w-4xl mx-auto">
  <AnimateOnScroll>
  <div className="text-center space-y-4">
   <p className="text-sm font-semibold uppercase tracking-widest text-slate-600">
   Trusted by Professionals Across Commodity Industries
   </p>
   <p className="text-slate-700 max-w-2xl mx-auto">
   Jay Chang is a fiduciary advisor committed to confidential, sophisticated wealth planning for professionals navigating commodity-cycle compensation. Every strategy is built with SEC compliance and corporate counsel coordination in mind.
   </p>
   <div className="pt-6 flex flex-col sm:flex-row gap-6 justify-center text-slate-600 text-sm">
   <a href={hubspotCTA} className="text-teal-600 hover:text-teal-700 font-semibold">
   Schedule a Call
   </a>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>
 </main>
 );
}
