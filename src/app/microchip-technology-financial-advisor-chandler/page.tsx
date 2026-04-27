import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Microchip Technology Financial Advisor in Chandler | RSU & Equity Planning | Jay Chang',
 description: 'Financial planning for Microchip Technology engineers and executives in Chandler. Quarterly RSU vesting, ESPP strategy, and concentration risk management for semiconductor professionals navigating a down-cycle equity environment.',
 alternates: {
 canonical: 'https://www.advisorjay.com/microchip-technology-financial-advisor-chandler',
 },
 robots: 'index, follow',
};

export default function MicrochipTechnologyAdvisor() {
 return (
 <div className="min-h-screen bg-white">
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
   '@context': 'https://schema.org',
   '@type': 'FinancialService',
   name: 'Advisor Jay - Microchip Technology Financial Planning',
   description: 'Fiduciary financial planning for Microchip Technology engineers and executives in Chandler. Quarterly RSU vesting, ESPP strategy, and concentration risk management for semiconductor professionals.',
   areaServed: ['Chandler, Arizona', 'Tempe, Arizona', 'Phoenix, Arizona'],
   serviceType: ['Wealth Management', 'Equity Compensation Planning', 'Retirement Planning'],
   url: 'https://www.advisorjay.com/microchip-technology-financial-advisor-chandler',
   provider: {
   '@type': 'Organization',
   name: 'Farther',
   url: 'https://www.advisorjay.com',
   },
  }),
  }}
 />
 {/* HERO SECTION */}
 <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
  <Image
  src="/Photos/Semiconductor.png"
  alt="Semiconductor technology"
  fill
  className="object-cover opacity-20"
  priority
  />
  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-50/90 to-white/40" />
  <div className="relative z-10 max-w-4xl mx-auto">
  <div className="text-center">
  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
   MICROCHIP TECHNOLOGY EMPLOYEE FINANCIAL PLANNING
  </p>
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
   Microchip Engineers: Your Equity Vests Every Quarter. Does Your Financial Plan Update Just as Frequently?
  </h1>
  <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
   Microchip Technology&apos;s broad-based equity program means quarterly vesting for engineers at all levels - not just executives. Jay Chang builds proactive RSU and tax strategies for Microchip professionals in Chandler who need their financial plan to keep pace with their equity.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Microchip Benefits Strategy Call
   </Button>
  </div>
  </div>
  </div>
 </section>

 {/* SECTION 1: MICROCHIP'S EQUITY MODEL */}
 <AnimateOnScroll>
  <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
   RSUs for Engineers, Not Just Executives - and That Creates a Unique Planning Need.
  </h2>
  <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
   <p>
   Microchip&apos;s &ldquo;evergreen&rdquo; grant program distributes RSUs broadly. This is unusual in semiconductor. Creates:
   </p>
   <ul className="space-y-4 list-disc list-inside text-base sm:text-lg">
   <li>Multiple overlapping grant cycles with 4+ taxable events annually</li>
   <li>Potential concentration</li>
   <li>Down-cycle complexity: MCHP stock down significantly from 2021-2022 highs</li>
   <li>PSU considerations: ~50% of executive officer quarterly grants are performance-based</li>
   </ul>
   <p className="pt-4">
   This breadth of equity distribution across the organization means that engineers and senior individual contributors face planning challenges historically reserved for C-suite executives. Without a proactive strategy, these overlapping vesting schedules can create unintended tax consequences and concentration risk.
   </p>
  </div>
  </div>
  </section>
 </AnimateOnScroll>

 {/* SECTION 2: MANAGING A DOWN-CYCLE EQUITY POSITION */}
 <AnimateOnScroll>
  <section className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-50">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
   Your Microchip RSUs May Be Worth Less Than You Expected. Here&apos;s How to Navigate That.
  </h2>
  <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
   <p>
   The semiconductor cycle has shifted. Hold and wait for recovery? Sell on vest? Tax-loss harvesting opportunities? Grant renegotiation context?
   </p>
   <p>
   I don&apos;t tell you what to believe about Microchip&apos;s future, but I make sure every decision is deliberate, informed, and tax-efficient. Whether equity markets recover or remain volatile, a Microchip employee with a clear, documented strategy is positioned to make decisions aligned with their financial goals, not reactive to market sentiment.
   </p>
   <p>
   That clarity becomes especially valuable when Microchip equity represents a significant portion of your net worth.
   </p>
  </div>
  </div>
  </section>
 </AnimateOnScroll>

 {/* MID-PAGE CTA: TRUST BAR */}
 <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white border-t border-b border-gray-200">
  <div className="max-w-4xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
  <div>
   <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
   Microchip Technology
   </p>
   <p className="text-gray-700 text-lg">
   Equity planning for engineers and executives
   </p>
  </div>
  <div>
   <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
   Chandler, AZ
   </p>
   <p className="text-gray-700 text-lg">
   Local advisory for semiconductor professionals
   </p>
  </div>
  </div>
  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule Your Strategy Call
  </Button>
  </div>
  </div>
 </section>

 {/* FINAL CTA SECTION */}
 <AnimateOnScroll>
  <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-4xl mx-auto text-center">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
   Chandler&apos;s Semiconductor Professionals Deserve a Financial Plan That Thinks Ahead.
  </h2>
  <p className="text-lg text-gray-600 mb-8">
   Microchip Technology equity is a powerful wealth-building tool - when it&apos;s part of a deliberate strategy. Let&apos;s build one together.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule Your Microchip Strategy Call - for current and former Microchip Technology employees.
   </Button>
  </div>
  </div>
  </section>
 </AnimateOnScroll>

 {/* TRUST FOOTER */}
 <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-900 text-white">
  <div className="max-w-4xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
  <div>
   <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">
   Expertise
   </p>
   <p className="text-gray-300">
   Semiconductor equity, RSU planning, tax optimization
   </p>
  </div>
  <div>
   <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">
   Fiduciary
   </p>
   <p className="text-gray-300">
   Fee-only, independent advice aligned with your interests
   </p>
  </div>
  <div>
   <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">
   Location
   </p>
   <p className="text-gray-300">
   Chandler, Arizona | Serving Microchip Technology professionals
   </p>
  </div>
  </div>
  <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
  <p>&copy; {new Date().getFullYear()} Jay Chang, PWM Farther. All rights reserved.</p>
  </div>
  </div>
 </section>
 </div>
 );
}
