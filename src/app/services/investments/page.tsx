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
 'Custom Portfolio Management & Tax-Efficient Investing | Advisor Jay',
 description:
 'Custom investment management for HNW families in Arizona, California, and Nevada. Tax-efficient portfolios, alternative investments, and institutional-grade research.',
 alternates: { canonical: 'https://www.advisorjay.com/services/investments' },
 openGraph: {
 title: 'Custom Portfolio Management & Tax-Efficient Investing | Advisor Jay',
 description:
 'Custom investment management for high-net-worth families and business owners in Scottsdale, AZ and across Arizona, California, and Nevada. Tax-efficient strategies, alternatives access, and consolidated reporting.',
 url: 'https://www.advisorjay.com/services/investments',
 },
}

const serviceJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Investment Management - Advisor Jay',
 description:
 'Custom investment management for high-net-worth families and business owners in Scottsdale, AZ and across Arizona, California, and Nevada. Tax-efficient portfolio construction, alternative investments, and institutional-grade research.',
 url: 'https://www.advisorjay.com/services/investments',
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
}

const faqJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'What is your investment management approach?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'We build globally diversified, multi-asset portfolios tailored to each client\'s goals, tax situation, and risk tolerance. Every portfolio is constructed from the ground up - we do not use model portfolios or one-size-fits-all allocations.',
 },
 },
 {
 '@type': 'Question',
 name: 'How do you minimize taxes on my investments?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'We use strategic asset location across taxable, tax-deferred, and tax-free accounts, automated tax-loss harvesting, and careful gain-loss management. We coordinate directly with your CPA to ensure every decision is optimized for your overall tax picture.',
 },
 },
 {
 '@type': 'Question',
 name: 'Can I access alternative investments like private equity?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Yes. Through Farther\'s institutional platform, qualified clients can access private equity, venture capital, private credit, and hedge fund strategies that are typically reserved for endowments and family offices. Minimums and eligibility requirements vary by fund.',
 },
 },
 {
 '@type': 'Question',
 name: 'How often will my portfolio be reviewed?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Your portfolio is monitored continuously by our technology platform and reviewed formally with your advisor on a quarterly basis at minimum. We also conduct ad-hoc reviews whenever there is a meaningful change in your life, the markets, or the tax landscape.',
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

export default function InvestmentsPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Services', href: '/services' }, { name: 'Investment Management', href: '/services/investments' }]} />
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
  <SectionEyebrow text="INVESTMENT MANAGEMENT" />
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <h1 className="font-serif text-[34px] md:text-[52px] font-bold text-[#333333] max-w-[900px] mx-auto mt-6 leading-tight">
   Investment Management Built Around Your Life - Not a Model Portfolio
  </h1>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
  <p className="font-sans text-body text-[#5b6a71] max-w-[680px] mx-auto mt-6 leading-relaxed">
   High-net-worth families in{' '}
   <Link href="/scottsdale" className="text-[#1d7682] underline underline-offset-2">
   Scottsdale
   </Link>{' '}
   and{' '}
   <Link href="/scottsdale" className="text-[#1d7682] underline underline-offset-2">
   Arizona
   </Link>{' '}
   deserve an investment strategy that reflects the full complexity of their
   financial lives. We build custom portfolios designed to grow wealth, reduce
   taxes, and protect what matters most.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ================================================================
  SECTION 2: MAIN CONTENT - TWO COLUMN
  ================================================================ */}
 <section className="bg-[#FAFAF8] py-[80px] md:py-[120px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-container mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
  {/* Left Column - Text */}
  <AnimateOnScroll>
   <div>
   <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-[#333333] leading-tight">
   A Portfolio Designed for Complexity
   </h2>
   <p className="font-sans text-body text-[#5b6a71] mt-6 leading-relaxed">
   Most investment platforms start with a risk questionnaire and end with a
   model portfolio. That approach ignores the realities that high-net-worth
   families face - concentrated stock positions, business sale proceeds,
   multi-state tax obligations, and retirement timelines that span decades.
   </p>
   <p className="font-sans text-body text-[#5b6a71] mt-4 leading-relaxed">
   I take a different approach.
   Every portfolio is constructed from the ground up, reflecting your goals,
   your tax situation, your liquidity needs, and the assets you already hold.
   Whether you are a business owner in{' '}
   <Link href="/scottsdale" className="text-[#1d7682] underline underline-offset-2">
    Scottsdale
   </Link>{' '}
   managing equity compensation or a family in{' '}
   <Link href="/scottsdale" className="text-[#1d7682] underline underline-offset-2">
    Tempe
   </Link>{' '}
   navigating a post-exit liquidity event, we build around your reality.
   </p>

   <h3 className="font-serif text-[22px] font-bold text-[#333333] mt-10 mb-5">
   What Our Investment Management Includes
   </h3>
   <ul className="space-y-4">
   <GoldBullet>
    <strong>Custom asset allocation</strong> - globally diversified portfolios
    built to your specific risk tolerance, time horizon, and income requirements
   </GoldBullet>
   <GoldBullet>
    <strong>Tax-efficient positioning</strong> - strategic asset location across
    taxable, tax-deferred, and Roth accounts to minimize your lifetime tax burden
   </GoldBullet>
   <GoldBullet>
    <strong>Alternative investments access</strong> - institutional-quality
    private equity, venture capital, private credit, and hedge fund strategies
    typically reserved for endowments and family offices
   </GoldBullet>
   <GoldBullet>
    <strong>Automated rebalancing and tax-loss harvesting</strong> - continuous
    monitoring with systematic rebalancing and opportunistic loss harvesting to
    improve after-tax returns
   </GoldBullet>
   <GoldBullet>
    <strong>Consolidated reporting</strong> - a single view of every account,
    every custodian, and every asset class in one dashboard
   </GoldBullet>
   <GoldBullet>
    <strong>Regular portfolio reviews</strong> - quarterly reviews with your
    dedicated advisor, plus ad-hoc check-ins whenever markets shift or your
    circumstances change
   </GoldBullet>
   </ul>
   </div>
  </AnimateOnScroll>

  {/* Right Column - Image */}
  <AnimateOnScroll delay={200}>
   <div className="relative rounded-[12px] overflow-hidden">
   <Image
   src="/Photos/Investment Mangement.png"
   alt="Wealth advisor reviewing a tax-optimized investment portfolio with a high-net-worth client"
   width={2518}
   height={1510}
   className="w-full h-auto object-center"
   />
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  SECTION 3: WHY IT MATTERS
  ================================================================ */}
 <section className="bg-[#F7F4EE] py-[80px] md:py-[120px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-container mx-auto">
  <div className="max-w-[800px] mx-auto">
  <AnimateOnScroll>
   <SectionEyebrow text="WHY IT MATTERS" />
   <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-[#333333] mt-6 leading-tight">
   Institutional-Grade Research. Personal-Level Attention.
   </h2>
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
   <p className="font-sans text-body text-[#5b6a71] mt-6 leading-relaxed">
   The difference between average and exceptional investment management is not
   just strategy - it is execution. I have access to the
   same caliber of research, analytics, and portfolio construction tools used
   by the largest institutional investors - giving you institutional pricing on
   funds, access to private market opportunities, and technology that
   continuously monitors and optimizes your portfolio.
   </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
   <p className="font-sans text-body text-[#5b6a71] mt-4 leading-relaxed">
   But scale without personal attention is meaningless. That is why every
   client works with a dedicated advisor who understands their complete picture
   - not just their investments, but their{' '}
   <Link href="/services/tax-optimization" className="text-[#1d7682] underline underline-offset-2">
   tax strategy
   </Link>,{' '}
   <Link href="/services/financial-planning" className="text-[#1d7682] underline underline-offset-2">
   financial plan
   </Link>, estate structure, and long-term goals. We coordinate with your CPA
   and estate attorney to ensure every investment decision fits into the bigger
   picture. The result is a portfolio that is not just well-constructed, but
   well-coordinated across your entire financial life.
   </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={300}>
   <p className="font-sans text-[13px] italic text-[#5b6a71] mt-8">
   Assets under management figure reflects Farther Finance Advisors LLC
   platform-wide AUM as of the most recent ADV filing. Individual advisor AUM
   varies. Past performance is not indicative of future results.
   </p>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  SECTION 4: FAQ
  ================================================================ */}
 <section className="bg-[#F7F4EE] py-[80px] md:py-[120px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll>
  <div className="text-center mb-12">
   <SectionEyebrow text="FREQUENTLY ASKED QUESTIONS" />
   <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-[#333333] mt-6 leading-tight">
   Investment Management Questions
   </h2>
  </div>
  </AnimateOnScroll>

  <div className="max-w-[800px] mx-auto">
  <AnimateOnScroll>
   {/* FAQ 1 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    What is your investment management approach?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   We build globally diversified, multi-asset portfolios tailored to each
   client&apos;s goals, tax situation, and risk tolerance. Every portfolio is
   constructed from the ground up - we do not use model portfolios or
   one-size-fits-all allocations. Your strategy reflects your complete
   financial picture, including concentrated positions, liquidity needs, and
   retirement timeline.
   </p>
   </details>

   {/* FAQ 2 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    How do you minimize taxes on my investments?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   We use strategic asset location across taxable, tax-deferred, and
   tax-free accounts, automated tax-loss harvesting, and careful gain-loss
   management throughout the year. We coordinate directly with your CPA to
   ensure every decision is optimized for your overall tax picture - not
   just your investment returns.
   </p>
   </details>

   {/* FAQ 3 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    Can I access alternative investments like private equity?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Yes. Through Farther&apos;s institutional platform, qualified clients can
   access private equity, venture capital, private credit, and hedge fund
   strategies that are typically reserved for endowments and family offices.
   Minimums and eligibility requirements vary by fund. Your advisor will help
   determine if{' '}
   <Link href="/services/alternatives" className="text-[#1d7682] underline underline-offset-2">
    alternative investments
   </Link>{' '}
   are appropriate for your situation.
   </p>
   </details>

   {/* FAQ 4 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    How often will my portfolio be reviewed?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Your portfolio is monitored continuously by our technology platform and
   reviewed formally with your advisor on a quarterly basis at minimum. We
   also conduct ad-hoc reviews whenever there is a meaningful change in your
   life, the markets, or the tax landscape - so you are never caught off
   guard.
   </p>
   </details>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  SECTION 5: RELATED SERVICES
  ================================================================ */}
 <section className="bg-[#FAFAF8] py-[80px] md:py-[120px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll>
  <div className="text-center mb-12">
   <SectionEyebrow text="RELATED SERVICES" />
   <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-[#333333] mt-6 leading-tight">
   Investment Management Works Best in Context
   </h2>
   <p className="font-sans text-body text-[#5b6a71] max-w-[600px] mx-auto mt-4 leading-relaxed">
   Your portfolio is one piece of a larger picture. These services work
   alongside your investment strategy to maximize results.
   </p>
  </div>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <AnimateOnScroll delay={0}>
   <Link href="/services/financial-planning" className="block">
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-8 hover:shadow-card-hover hover:border-[#1d7682] transition-all h-full">
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
    Financial Planning
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-3 leading-relaxed">
    Comprehensive planning that connects your investment strategy to
    retirement projections, cash flow analysis, education funding, and
    insurance needs.
   </p>
   <span className="inline-block mt-4 font-sans text-[14px] font-semibold text-[#1d7682]">
    Learn more &rarr;
   </span>
   </div>
   </Link>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <Link href="/services/tax-optimization" className="block">
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-8 hover:shadow-card-hover hover:border-[#1d7682] transition-all h-full">
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
    Tax Optimization
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-3 leading-relaxed">
    Proactive tax strategies - Roth conversions, gain-loss harvesting,
    charitable giving, and multi-state planning - that work hand-in-hand
    with your portfolio.
   </p>
   <span className="inline-block mt-4 font-sans text-[14px] font-semibold text-[#1d7682]">
    Learn more &rarr;
   </span>
   </div>
   </Link>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <Link href="/services/alternatives" className="block">
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-8 hover:shadow-card-hover hover:border-[#1d7682] transition-all h-full">
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
    Alternative Investments
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-3 leading-relaxed">
    Access to private equity, venture capital, private credit, and hedge
    fund strategies through institutional-quality vehicles with lower
    minimums.
   </p>
   <span className="inline-block mt-4 font-sans text-[14px] font-semibold text-[#1d7682]">
    Learn more &rarr;
   </span>
   </div>
   </Link>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  SECTION 6: CTA
  ================================================================ */}
 <section className="bg-[#333333] py-[80px] md:py-[120px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-container mx-auto text-center">
  <AnimateOnScroll>
  <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#F7F4EE] leading-tight max-w-[700px] mx-auto">
   Ready to See What Disciplined Investment Management Looks Like?
  </h2>
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <p className="font-sans text-body text-[#c2c0ba] max-w-[560px] mx-auto mt-6 leading-relaxed">
   Schedule a 30-minute discovery call to discuss your portfolio, your goals,
   and whether our approach is the right fit.
  </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
  <div className="mt-10">
   <Button
   variant="primary"
   href="/schedule-consultation"
   >
   Schedule a Discovery Call
   </Button>
  </div>
  </AnimateOnScroll>
  <AnimateOnScroll delay={400}>
  <p className="font-sans text-[12px] text-[#5b6a71] mt-10 max-w-[500px] mx-auto">
   All investment strategies carry risk, including the potential loss of
   principal.
  </p>
  </AnimateOnScroll>
  </div>
 </section>
 </>
 )
}
