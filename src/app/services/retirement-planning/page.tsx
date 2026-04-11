import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
 title:
 'Retirement Planning | PWM at Farther - Arizona, California & Nevada',
 description:
 'Retirement income planning, distribution sequencing, Social Security optimization, and Roth conversion strategies for families in Arizona, California, and Nevada.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/services/retirement-planning',
 },
 openGraph: {
 title: 'Retirement Planning | Advisor Jay',
 description:
 'Retirement income planning, distribution sequencing, Social Security optimization, and Roth conversion strategies for families with $2M-$20M.',
 url: 'https://www.PWM-Farther.com/services/retirement-planning',
 },
}

const serviceJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Retirement Planning - Advisor Jay',
 description:
 'Retirement income planning, distribution sequencing, Social Security optimization, and Roth conversion strategies for families with $2M-$20M in Arizona, California, and Nevada.',
 url: 'https://www.PWM-Farther.com/services/retirement-planning',
 telephone: '+1-480-944-0880',
 areaServed: [
 {
 '@type': 'City',
 name: 'Scottsdale',
 containedInPlace: { '@type': 'State', name: 'Arizona' },
 },
 {
 '@type': 'City',
 name: 'Tempe',
 containedInPlace: { '@type': 'State', name: 'Arizona' },
 },
 {
 '@type': 'State',
 name: 'California',
 },
 {
 '@type': 'State',
 name: 'Nevada',
 },
 ],
 parentOrganization: {
 '@type': 'Organization',
 name: 'Farther',
 url: 'https://www.farther.com',
 },
}

const faqJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'When should I start planning for retirement income?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Ideally, retirement income planning should begin five to ten years before your target retirement date. This window allows time for Roth conversion laddering, Social Security timing optimization, and strategic positioning of assets across taxable, tax-deferred, and tax-free accounts. However, even if you are already retired, there are meaningful strategies we can implement to improve your after-tax income and extend the longevity of your portfolio.',
 },
 },
 {
 '@type': 'Question',
 name: 'How do you determine the right Social Security claiming strategy?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'We analyze your full financial picture - including other income sources, tax projections, health considerations, spousal benefits, and portfolio longevity - to model the optimal claiming age. For many families with $2M-$20M in investable assets, delaying benefits to age 70 can increase lifetime income significantly, but the right answer depends on your specific circumstances.',
 },
 },
 {
 '@type': 'Question',
 name: 'What is a Roth conversion ladder and why does it matter?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'A Roth conversion ladder involves systematically converting portions of traditional IRA or 401(k) balances into Roth accounts over multiple years. By spreading conversions across lower-income years - particularly in the gap between retirement and Social Security or RMDs - you can reduce the lifetime tax burden on your retirement assets. In Nevada, where there is no state income tax, this strategy is especially powerful.',
 },
 },
 {
 '@type': 'Question',
 name: 'How do you coordinate withdrawals across different account types?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'We use a distribution sequencing strategy that determines the optimal order for drawing from taxable, tax-deferred, and tax-free accounts each year. The goal is to minimize your cumulative tax liability over the full retirement horizon - not just in a single year. This requires ongoing modeling and adjustment as tax laws, market conditions, and your personal circumstances evolve.',
 },
 },
 ],
}

function GoldBullet({ children }: { children: React.ReactNode }) {
 return (
 <li className="flex items-start gap-3">
 <span className="mt-[10px] h-[7px] w-[7px] min-w-[7px] rounded-full bg-[#1d7682]" />
 <span className="font-sans text-body text-[#5b6a71] leading-relaxed">
  {children}
 </span>
 </li>
 )
}

export default function RetirementPlanningPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Services', href: '/services' }, { name: 'Retirement Planning', href: '/services/retirement-planning' }]} />
 {/* JSON-LD Structured Data */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
 />
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
 />

 {/* ================================================================
  SECTION 1: HERO
  ================================================================ */}
 <section className="bg-[#F7F4EE] pt-[100px] pb-[60px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-container mx-auto text-center">
  <AnimateOnScroll>
  <SectionEyebrow text="RETIREMENT PLANNING" />
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <h1 className="font-serif text-[34px] md:text-[52px] font-bold text-[#333333] max-w-[900px] mx-auto mt-6 leading-tight">
   Retirement Income Planning Built Around Your Life.
  </h1>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
  <p className="font-sans text-[17px] md:text-[19px] text-[#5b6a71] max-w-[700px] mx-auto mt-6 leading-relaxed">
   A disciplined approach to distribution sequencing, Social Security
   timing, and tax-efficient withdrawal strategies for families in{' '}
   <Link
   href="/scottsdale"
   className="text-[#1d7682] hover:text-[#155f69] transition-colors"
   >
   Scottsdale
   </Link>
   ,{' '}
   <Link
   href="/scottsdale"
   className="text-[#1d7682] hover:text-[#155f69] transition-colors"
   >
   Arizona
   </Link>
   , and{' '}
   <Link
   href="/scottsdale"
   className="text-[#1d7682] hover:text-[#155f69] transition-colors"
   >
   Nevada
   </Link>
   .
  </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={300}>
  <div className="mt-10">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Retirement Planning Conversation
   </Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ================================================================
  SECTION 2: MAIN CONTENT
  ================================================================ */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-container mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
  {/* Left: Text */}
  <AnimateOnScroll>
   <div>
   <SectionEyebrow text="A MULTI-DECADE STRATEGY" />
   <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
   Retirement Is Not an Event. It&apos;s a 30-Year Financial Strategy.
   </h2>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
   Most advisory firms treat retirement planning as a single
   calculation - can you afford to stop working? That
   question matters, but it misses the far more consequential
   ones: How do you structure withdrawals to minimize taxes over a
   30-year horizon? When should you claim Social Security to
   maximize lifetime income? How do you sequence Roth conversions
   to reduce future RMD obligations? And how do you build a
   distribution plan that adapts to changing markets, tax law, and
   health care costs?
   </p>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   For families in Nevada and Arizona, retirement planning carries a
   structural advantage - favorable state tax environments mean every
   Roth conversion, every capital gain harvest, and every
   distribution decision retains more value. A well-designed Roth
   conversion ladder executed in the years between retirement and
   age 72 can save hundreds of thousands of dollars in future
   taxes. But only if the timing and sequencing are deliberate.
   </p>
   <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
   What this looks like in practice:
   </p>
   <ul className="list-none space-y-3">
   <GoldBullet>
    Distribution sequencing across IRAs, Roth accounts, and
    taxable portfolios
   </GoldBullet>
   <GoldBullet>
    Social Security optimization and spousal benefit coordination
   </GoldBullet>
   <GoldBullet>
    Roth conversion laddering to reduce future tax exposure
   </GoldBullet>
   <GoldBullet>
    Required minimum distribution (RMD) planning and mitigation
   </GoldBullet>
   <GoldBullet>
    Pension integration and annuity evaluation
   </GoldBullet>
   <GoldBullet>
    Medicare planning and IRMAA surcharge management
   </GoldBullet>
   </ul>
   <div className="mt-8">
   <Link
    href="/tools/retirement-savings-calculator"
    className="inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans text-[14px] font-semibold px-6 py-3 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200"
   >
    Take the Retirement Readiness Assessment
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
   </Link>
   <p className="font-sans text-[12px] text-[#5b6a71] mt-2">
    60 seconds &bull; 10 questions &bull; Instant results
   </p>
   </div>
   </div>
  </AnimateOnScroll>

  {/* Right: Photo */}
  <AnimateOnScroll delay={150}>
   <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative">
   <Image
   src="/Photos/Jay-Planning-Couple.png"
   alt="Retirement planning documents and tax forms used in Farther's comprehensive financial planning process"
   fill
   className="object-cover"
   sizes="(min-width: 1024px) 45vw, 100vw"
   />
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  SECTION 3: PLANNING FOR EVERY STAGE
  ================================================================ */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll className="text-center mb-12">
  <SectionEyebrow text="PLANNING FOR EVERY STAGE" />
  <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
   Retirement Looks Different at Every Phase.
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
  <AnimateOnScroll>
   <div className="bg-white rounded-[16px] p-8 shadow-sm h-full">
   <span className="font-sans text-eyebrow-sm font-bold uppercase tracking-[0.15em] text-[#1d7682]">
   PRE-RETIREMENT
   </span>
   <h3 className="font-serif text-[22px] font-bold text-[#333333] mt-3">
   5-10 Years Before Retirement
   </h3>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   The accumulation phase shifts to preservation and positioning.
   This is the window to maximize catch-up contributions, begin
   Roth conversion ladders, stress-test withdrawal rates, and
   coordinate the timing of Social Security, pension elections,
   and portfolio de-risking. Decisions made here compound for
   decades.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <div className="bg-white rounded-[16px] p-8 shadow-sm h-full">
   <span className="font-sans text-eyebrow-sm font-bold uppercase tracking-[0.15em] text-[#1d7682]">
   EARLY RETIREMENT
   </span>
   <h3 className="font-serif text-[22px] font-bold text-[#333333] mt-3">
   The First 5 Years
   </h3>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   The gap between retirement and age 72 is a critical planning
   window. Income is often temporarily lower, creating an
   opportunity for aggressive Roth conversions at reduced tax
   rates. Distribution sequencing begins in earnest - 
   drawing from the right accounts in the right order to minimize
   cumulative taxes over the full retirement horizon.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <div className="bg-white rounded-[16px] p-8 shadow-sm h-full">
   <span className="font-sans text-eyebrow-sm font-bold uppercase tracking-[0.15em] text-[#1d7682]">
   MID-RETIREMENT
   </span>
   <h3 className="font-serif text-[22px] font-bold text-[#333333] mt-3">
   RMDs, Medicare, and Legacy
   </h3>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   As required minimum distributions begin, the focus shifts to
   managing taxable income, avoiding IRMAA surcharges on Medicare
   premiums, and coordinating charitable giving strategies such as
   qualified charitable distributions (QCDs). Estate planning
   integration becomes essential to ensure wealth transfers
   efficiently to the next generation.
   </p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  SECTION 4: FAQ
  ================================================================ */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll className="text-center mb-12">
  <SectionEyebrow text="COMMON QUESTIONS" />
  <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
   Retirement Planning Questions We Hear Most.
  </h2>
  </AnimateOnScroll>

  <div className="max-w-[800px] mx-auto">
  <AnimateOnScroll>
   {/* FAQ 1 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    When should I start planning for retirement income?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Ideally, retirement income planning should begin five to ten
   years before your target retirement date. This window allows
   time for Roth conversion laddering, Social Security timing
   optimization, and strategic positioning of assets across
   taxable, tax-deferred, and tax-free accounts. However, even if
   you are already retired, there are meaningful strategies we can
   implement to improve your after-tax income and extend the
   longevity of your portfolio.
   </p>
   </details>

   {/* FAQ 2 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    How do you determine the right Social Security claiming
    strategy?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   We analyze your full financial picture - including other
   income sources, tax projections, health considerations, spousal
   benefits, and portfolio longevity - to model the optimal
   claiming age. For many families with $2M-$20M in
   investable assets, delaying benefits to age 70 can increase
   lifetime income significantly, but the right answer depends on
   your specific circumstances.
   </p>
   </details>

   {/* FAQ 3 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    What is a Roth conversion ladder and why does it matter?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   A Roth conversion ladder involves systematically converting
   portions of traditional IRA or 401(k) balances into Roth
   accounts over multiple years. By spreading conversions across
   lower-income years - particularly in the gap between
   retirement and Social Security or RMDs - you can reduce
   the lifetime tax burden on your retirement assets. In Nevada,
   where there is no state income tax, this strategy is
   especially powerful.
   </p>
   </details>

   {/* FAQ 4 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    How do you coordinate withdrawals across different account
    types?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   We use a distribution sequencing strategy that determines the
   optimal order for drawing from taxable, tax-deferred, and
   tax-free accounts each year. The goal is to minimize your
   cumulative tax liability over the full retirement horizon
   - not just in a single year. This requires ongoing
   modeling and adjustment as tax laws, market conditions, and
   your personal circumstances evolve.
   </p>
   </details>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  SECTION 5: RELATED SERVICES
  ================================================================ */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll className="text-center mb-12">
  <SectionEyebrow text="RELATED SERVICES" />
  <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
   Retirement Planning Works Best in Context.
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
  <AnimateOnScroll>
   <Link
   href="/services/investments"
   className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200 h-full"
   >
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
   Investment Management
   </h3>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-3">
   Tax-efficient portfolio construction and ongoing management
   designed to support your retirement income needs across market
   cycles.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
   Learn more &rarr;
   </span>
   </Link>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <Link
   href="/services/tax-optimization"
   className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200 h-full"
   >
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
   Tax Optimization
   </h3>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-3">
   Proactive tax strategy including Roth conversions, capital gain
   harvesting, and charitable giving to reduce your lifetime tax
   burden in retirement.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
   Learn more &rarr;
   </span>
   </Link>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <Link
   href="/services/financial-planning"
   className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200 h-full"
   >
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
   Financial Planning
   </h3>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-3">
   Comprehensive planning that connects retirement projections
   with cash flow analysis, insurance audits, and estate
   coordination.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
   Learn more &rarr;
   </span>
   </Link>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  SECTION 6: CTA
  ================================================================ */}
 <section className="bg-[#333333] section-padding">
  <div className="max-w-[800px] mx-auto text-center">
  <AnimateOnScroll>
  <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE] leading-tight">
   Your Retirement Deserves More Than a Calculator.
  </h2>
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[620px] mx-auto mt-5 leading-relaxed">
   A 30-minute conversation is all it takes to see if our approach to
   retirement income planning is the right fit for your family. No
   sales pitch, no obligation.
  </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
  <div className="mt-10">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Let's Talk About Your Retirement
   </Button>
  </div>
  </AnimateOnScroll>
  <AnimateOnScroll delay={300}>
  <div className="mt-8 flex items-center justify-center gap-6">
   <Link
   href="/scottsdale"
   className="font-sans text-[14px] text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors duration-200"
   >
   Scottsdale, AZ
   </Link>
   <span className="text-[#F7F4EE]/30">|</span>
   <Link
   href="/scottsdale"
   className="font-sans text-[14px] text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors duration-200"
   >
   Tempe, AZ
   </Link>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Disclaimer */}
 <section className="bg-[#FAFAF8] py-8 px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-container mx-auto">
  <p className="font-sans text-caption text-[#5b6a71] italic text-center">
  Financial projections are based on assumptions that may not reflect
  actual future conditions; results may vary.
  </p>
  </div>
 </section>
 </>
 )
}
