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
 'Financial Planning | Arizona, California & Nevada Wealth Advisor',
 description:
 'Comprehensive financial planning for families with $2M-$20M. Retirement projections, cash flow analysis, education funding, and Social Security optimization in Arizona, California, and Nevada.',
 alternates: { canonical: 'https://www.PWM-Farther.com/services/financial-planning' },
 openGraph: {
 title: 'Financial Planning | Advisor Jay',
 description:
 'Scenario-based financial planning for high-net-worth families. Retirement, education funding, insurance, and tax-coordinated strategies.',
 url: 'https://www.PWM-Farther.com/services/financial-planning',
 type: 'website',
 },
}

const serviceJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Advisor Jay - Financial Planning',
 description:
 'Comprehensive financial planning services for families with $2M-$20M in investable assets, including retirement projections, cash flow analysis, education funding, and Social Security optimization.',
 url: 'https://www.PWM-Farther.com/services/financial-planning',
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
 serviceType: 'Financial Planning',
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
 name: 'What does a comprehensive financial plan include?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'A comprehensive financial plan at Farther covers retirement projections across multiple scenarios, cash flow analysis, education funding strategies (including 529 plans, gifting, and trusts), insurance audits, Social Security optimization, pension integration, and full coordination with your CPA and estate attorney. Every plan is built around your specific goals, timeline, and risk tolerance.',
 },
 },
 {
 '@type': 'Question',
 name: 'How often is my financial plan updated?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Your financial plan is a living document. We review and update it at least annually, and more frequently when life events occur - a job change, inheritance, business sale, or market dislocation. Farther\'s planning technology allows us to re-run scenarios in real time so you always have a current view of where you stand.',
 },
 },
 {
 '@type': 'Question',
 name: 'Do you coordinate with my CPA and estate attorney?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Absolutely. Financial planning done in isolation leads to missed opportunities. We proactively coordinate with your CPA on tax projections, Roth conversions, and income timing, and with your estate attorney on trust structures, beneficiary designations, and wealth transfer strategies. If you need referrals, we can connect you with trusted specialists in Arizona and Nevada.',
 },
 },
 {
 '@type': 'Question',
 name: 'How is financial planning different from investment management?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Investment management focuses on building and managing your portfolio. Financial planning is the broader framework - it answers questions like when you can retire, how to fund education, whether your insurance coverage is adequate, and how to sequence withdrawals in retirement. At Farther, both disciplines are fully integrated so every investment decision supports your larger financial plan.',
 },
 },
 ],
}

function GoldBullet({ children }: { children: React.ReactNode }) {
 return (
 <li className="flex items-start gap-3">
 <span className="mt-[10px] h-[7px] w-[7px] min-w-[7px] rounded-full bg-[#1d7682]" />
 <span className="font-sans text-body text-[#5b6a71] leading-relaxed">{children}</span>
 </li>
 )
}

export default function FinancialPlanningPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Services', href: '/services' }, { name: 'Financial Planning', href: '/services/financial-planning' }]} />
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
  HERO
  ================================================================ */}
 <section className="bg-[#F7F4EE] pt-[100px] pb-[60px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-container mx-auto text-center">
  <AnimateOnScroll>
  <SectionEyebrow text="FINANCIAL PLANNING" />
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <h1 className="font-serif text-[34px] md:text-[52px] font-bold text-[#333333] max-w-[900px] mx-auto mt-6 leading-tight">
   A Plan Built Around Your Life - Not a Template.
  </h1>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
  <p className="font-sans text-body-lg text-[#5b6a71] max-w-[680px] mx-auto mt-6 leading-relaxed">
   For families with $2M-$20M in investable assets, financial
   planning should be more than a retirement calculator and a
   spreadsheet. At Farther, your plan is a living strategy - 
   stress-tested across market scenarios, coordinated with your tax
   and legal team, and designed to evolve as your life does.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ================================================================
  MAIN CONTENT - TWO COLUMN
  ================================================================ */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-container mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
  {/* Left: Text */}
  <AnimateOnScroll>
   <div>
   <SectionEyebrow text="WHAT WE COVER" />
   <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
   Every Dimension of Your Financial Life.
   </h2>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
   Most advisory firms hand you a 100-page document and call it a
   plan. We build a dynamic, scenario-based strategy that
   connects your investments, tax picture, insurance, estate
   structure, and family goals into a single coordinated
   framework. Whether you are a growing family in{' '}
   <Link
    href="/scottsdale"
    className="text-[#1d7682] hover:text-[#155f69] transition-colors"
   >
    Scottsdale
   </Link>{' '}
   or preparing for retirement in{' '}
   <Link
    href="/scottsdale"
    className="text-[#1d7682] hover:text-[#155f69] transition-colors"
   >
    Tempe
   </Link>
   , the planning process is the same: thorough, personalized,
   and always forward-looking.
   </p>
   <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
   What this looks like in practice:
   </p>
   <ul className="list-none space-y-3">
   <GoldBullet>
    Retirement projections across multiple market scenarios
    - best case, expected, and stress-tested
   </GoldBullet>
   <GoldBullet>
    Cash flow analysis and spending sustainability modeling
    through every phase of retirement
   </GoldBullet>
   <GoldBullet>
    Education funding strategies including 529 plans, annual
    gifting programs, and education trusts
   </GoldBullet>
   <GoldBullet>
    Insurance audit covering life, disability, long-term care,
    and umbrella policies to identify gaps and eliminate waste
   </GoldBullet>
   <GoldBullet>
    Social Security optimization - timing, spousal
    coordination, and integration with other income sources
   </GoldBullet>
   <GoldBullet>
    Pension integration and distribution sequencing across IRAs,
    Roth accounts, and taxable portfolios
   </GoldBullet>
   <GoldBullet>
    CPA and attorney coordination to ensure tax, legal, and
    investment strategies are fully aligned
   </GoldBullet>
   </ul>
   </div>
  </AnimateOnScroll>

  {/* Right: Photo */}
  <AnimateOnScroll delay={150}>
   <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative">
   <Image
   src="/Photos/home-buying.png"
   alt="Family celebrating a financial milestone achieved through comprehensive wealth planning at Farther"
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
  OUR APPROACH
  ================================================================ */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll>
  <div className="max-w-[720px] mx-auto text-center">
   <SectionEyebrow text="OUR APPROACH" />
   <h2 className="font-serif text-h2 max-md:text-h2-mobile font-normal text-[#333333] mt-4">
   Scenario-Based Planning, Powered by Institutional Technology.
   </h2>
  </div>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-14">
  <AnimateOnScroll>
   <div>
   <h3 className="font-serif text-[22px] font-semibold text-[#333333]">
   Beyond the Spreadsheet
   </h3>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   Traditional financial plans rely on a single set of
   assumptions - one rate of return, one inflation figure,
   one retirement date. Reality is rarely that predictable.
   Farther&apos;s analysis engine models your plan across
   hundreds of market scenarios, stress-testing your strategy
   against prolonged downturns, unexpected expenses, and changes
   in tax law. The result is not a single number but a range of
   outcomes and the confidence to make decisions with clarity.
   </p>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   Whether you are evaluating early retirement, considering a
   career change, or deciding between funding a 529 plan and
   gifting assets outright, scenario-based planning gives you the
   framework to compare trade-offs in real time - not in
   hindsight.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={150}>
   <div>
   <h3 className="font-serif text-[22px] font-semibold text-[#333333]">
   Coordinated Across Your Entire Team
   </h3>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   A financial plan that ignores your tax situation is
   incomplete. A tax strategy that ignores your estate plan is
   dangerous. At Farther, your financial plan is the central
   document that connects every professional in your life. We
   work directly with your CPA to align Roth conversion timing,
   income recognition, and deduction strategies. We coordinate
   with your estate attorney to ensure trust structures,
   beneficiary designations, and gifting programs all support
   your broader goals.
   </p>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   For families splitting time between{' '}
   <Link
    href="/scottsdale"
    className="text-[#1d7682] hover:text-[#155f69] transition-colors"
   >
    Scottsdale
   </Link>{' '}
   and{' '}
   <Link
    href="/scottsdale"
    className="text-[#1d7682] hover:text-[#155f69] transition-colors"
   >
    Arizona
   </Link>
   , this coordination is especially valuable - 
   navigating community property rules, state-specific trust
   advantages, and residency considerations requires every
   advisor to be working from the same playbook.
   </p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  FAQ
  ================================================================ */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll className="text-center mb-12">
  <SectionEyebrow text="COMMON QUESTIONS" />
  <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
   Financial Planning FAQs.
  </h2>
  </AnimateOnScroll>

  <div className="max-w-[800px] mx-auto">
  <AnimateOnScroll>
   {/* FAQ 1 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    What does a comprehensive financial plan include?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   A comprehensive financial plan at Farther covers retirement
   projections across multiple scenarios, cash flow analysis,
   education funding strategies (including 529 plans, gifting,
   and trusts), insurance audits, Social Security optimization,
   pension integration, and full coordination with your CPA and
   estate attorney. Every plan is built around your specific
   goals, timeline, and risk tolerance.
   </p>
   </details>

   {/* FAQ 2 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    How often is my financial plan updated?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Your financial plan is a living document. We review and update
   it at least annually, and more frequently when life events
   occur - a job change, inheritance, business sale, or
   market dislocation. Farther&apos;s planning technology allows
   us to re-run scenarios in real time so you always have a
   current view of where you stand.
   </p>
   </details>

   {/* FAQ 3 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    Do you coordinate with my CPA and estate attorney?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Absolutely. Financial planning done in isolation leads to
   missed opportunities. We proactively coordinate with your CPA
   on tax projections, Roth conversions, and income timing, and
   with your estate attorney on trust structures, beneficiary
   designations, and wealth transfer strategies. If you need
   referrals, we can connect you with trusted specialists in
   Arizona and Nevada.
   </p>
   </details>

   {/* FAQ 4 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    How is financial planning different from investment
    management?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Investment management focuses on building and managing your
   portfolio. Financial planning is the broader framework - 
   it answers questions like when you can retire, how to fund
   education, whether your insurance coverage is adequate, and
   how to sequence withdrawals in retirement. At Farther, both
   disciplines are fully integrated so every investment decision
   supports your larger financial plan.
   </p>
   </details>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  RELATED SERVICES
  ================================================================ */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll className="text-center mb-12">
  <SectionEyebrow text="RELATED SERVICES" />
  <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-4">
   Explore More of What We Do.
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <AnimateOnScroll>
   <Link href="/services/investments" className="block group">
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[40px_32px] hover:shadow-card-hover hover:border-[#1d7682] transition-all duration-300 h-full">
   <h3 className="font-sans text-h4 font-semibold text-[#333333]">
    Investment Management
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
    Institutional-grade portfolio construction with direct
    indexing, tax-loss harvesting, and access to alternative
    investments - tailored to your risk profile.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4 group-hover:translate-x-1 transition-transform duration-200">
    Learn more &rarr;
   </span>
   </div>
   </Link>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <Link href="/services/retirement-planning" className="block group">
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[40px_32px] hover:shadow-card-hover hover:border-[#1d7682] transition-all duration-300 h-full">
   <h3 className="font-sans text-h4 font-semibold text-[#333333]">
    Retirement Planning
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
    Distribution sequencing, Social Security optimization, Roth
    conversion laddering, and Medicare planning - all
    designed to maximize your after-tax retirement income.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4 group-hover:translate-x-1 transition-transform duration-200">
    Learn more &rarr;
   </span>
   </div>
   </Link>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <Link href="/services/tax-optimization" className="block group">
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[40px_32px] hover:shadow-card-hover hover:border-[#1d7682] transition-all duration-300 h-full">
   <h3 className="font-sans text-h4 font-semibold text-[#333333]">
    Tax Optimization
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
    Year-round tax-loss harvesting, asset location strategy,
    charitable giving optimization, and proactive coordination
    with your CPA to minimize your lifetime tax burden.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4 group-hover:translate-x-1 transition-transform duration-200">
    Learn more &rarr;
   </span>
   </div>
   </Link>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  CTA
  ================================================================ */}
 <section className="bg-[#333333] section-padding">
  <div className="max-w-[800px] mx-auto text-center">
  <AnimateOnScroll>
  <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE] leading-tight">
   Your Financial Plan Should Work as Hard as You Do.
  </h2>
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[620px] mx-auto mt-5 leading-relaxed">
   Schedule a private conversation to discuss your goals and explore
   whether Farther is the right fit for your family. No sales pitch,
   no obligation - just a focused conversation about what
   matters most to you.
  </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
  <div className="mt-10">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Conversation
   </Button>
  </div>
  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
   <a
   href="tel:+14809440880"
   className="font-sans text-[15px] text-[#F7F4EE]/70 hover:text-[#1d7682] transition-colors duration-200"
   >
   (480) 944-0880
   </a>
   <span className="hidden sm:inline text-[#F7F4EE]/30">|</span>
   <a
   href="mailto:jay.chang@farther.com"
   className="font-sans text-[15px] text-[#F7F4EE]/70 hover:text-[#1d7682] transition-colors duration-200"
   >
   jay.chang@farther.com
   </a>
  </div>
  </AnimateOnScroll>
  <p className="font-sans text-caption text-[#F7F4EE]/50 italic mt-10">
  Financial projections are based on assumptions that may not reflect
  actual future conditions; results may vary.
  </p>
  </div>
 </section>
 </>
 )
}
