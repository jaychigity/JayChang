import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
 title: 'Tax Optimization & Estate Strategy for Arizona, California & Nevada Families',
 description:
 'Proactive tax planning and estate strategy for high-net-worth families in Arizona, California, and Nevada. Roth conversions, charitable giving, trust design, and state tax optimization.',
 alternates: {
 canonical: 'https://www.advisorjay.com/services/tax-optimization',
 },
 openGraph: {
 title: 'Tax Optimization & Estate Strategy for Arizona, California & Nevada Families',
 description:
 'Proactive tax planning and estate strategy for high-net-worth families in Arizona, California, and Nevada.',
 url: 'https://www.advisorjay.com/services/tax-optimization',
 type: 'website',
 },
}

const serviceJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Tax Optimization & Estate Strategy - Advisor Jay',
 description:
 'Proactive tax planning, Roth conversion laddering, charitable giving strategies, estate planning, and generational wealth transfer for HNW families in Scottsdale, AZ and across Arizona, California, and Nevada.',
 url: 'https://www.advisorjay.com/services/tax-optimization',
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
 serviceType: [
 'Tax Optimization',
 'Estate Planning',
 'Roth Conversion Laddering',
 'Charitable Giving Strategy',
 'Trust Design',
 'Wealth Transfer Planning',
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
 name: 'How does tax-loss harvesting work, and how much can it save?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Tax-loss harvesting involves systematically selling securities at a loss to offset capital gains elsewhere in your portfolio. The realized losses can offset gains dollar-for-dollar and up to $3,000 of ordinary income annually, with unused losses carried forward indefinitely. For families in the highest tax brackets, active harvesting can improve after-tax returns by 1-2% per year over time.',
 },
 },
 {
 '@type': 'Question',
 name: 'What is Roth conversion laddering and is it right for me?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Roth conversion laddering is a multi-year strategy of converting traditional IRA assets to Roth IRA accounts in measured amounts, ideally filling lower tax brackets each year. This is particularly powerful for clients in Nevada and Arizona, where there is no or low state income tax on the conversion. The goal is to reduce future required minimum distributions and create a tax-free income source in retirement.',
 },
 },
 {
 '@type': 'Question',
 name: 'How do Nevada and Arizona tax advantages benefit my wealth plan?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Nevada has zero state income tax, no estate or inheritance tax, and is one of the premier trust jurisdictions in the country - offering dynasty trusts, asset protection trusts, and no state tax on trust income. Arizona has a flat 2.5% income tax rate and favorable trust laws. Both states offer meaningful planning advantages for high-net-worth families, especially those relocating from higher-tax states like California.',
 },
 },
 {
 '@type': 'Question',
 name: 'Do you coordinate with my CPA and estate attorney?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Absolutely - we encourage it. The best tax and estate outcomes happen when your financial advisor, CPA, and estate attorney are working from the same playbook. We proactively coordinate with your existing professionals and, through Farther, clients also have access to dedicated Trust and Estate Planning specialists who work alongside your advisor.',
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

export default function TaxOptimizationPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Services', href: '/services' }, { name: 'Tax Optimization', href: '/services/tax-optimization' }]} />
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
 <section className="bg-[#F7F4EE] pt-[140px] pb-[96px] md:pt-[180px] md:pb-[120px] px-[20px] md:px-[80px]">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll>
  <SectionEyebrow text="TAX & ESTATE STRATEGY" />
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
  <h1 className="font-serif text-[36px] md:text-[52px] font-bold text-[#333333] leading-[1.15] mt-6 max-w-[720px]">
   Preserve More of What You've Built.
  </h1>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
  <p className="font-sans text-[17px] md:text-[20px] text-[#5b6a71] leading-[1.6] max-w-[640px] mt-6">
   For high-net-worth families, the difference between average and
   exceptional wealth management often comes down to one thing: how
   much of your return you actually keep. Our proactive tax planning
   and estate strategy are designed to minimize your lifetime tax
   burden and transfer wealth on your terms - not the
   IRS's.
  </p>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
  <div className="mt-8">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Let's Discuss Your Tax Strategy
   </Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ================================================================
  MAIN CONTENT - TWO-COLUMN WITH IMAGE
  ================================================================ */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-container mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
  {/* Left: Image */}
  <AnimateOnScroll>
   <div className="rounded-[16px] overflow-hidden relative order-2 lg:order-1">
   <Image
   src="/Photos/legacy-portfolio.avif"
   alt="Tax optimization strategy documents for high-net-worth families "
   width={1024}
   height={683}
   className="w-full h-auto"
   />
   </div>
  </AnimateOnScroll>

  {/* Right: Content */}
  <AnimateOnScroll delay={150} className="order-1 lg:order-2">
   <div>
   <SectionEyebrow text="PROACTIVE TAX PLANNING" />
   <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
   Tax Strategy That Goes Beyond April 15.
   </h2>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
   Most advisors think about taxes once a year. I think about
   them every time I make a decision - because for
   families with significant wealth, proactive tax strategy is
   one of the highest-value services we provide. When forward
   returns may moderate, the gap between pre-tax and after-tax
   performance becomes the most reliable lever for compounding
   wealth.
   </p>

   <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
   Tax planning that compounds:
   </p>
   <ul className="list-none space-y-3">
   <GoldBullet>
    Roth conversion laddering to reduce future tax liability and
    required minimum distributions
   </GoldBullet>
   <GoldBullet>
    Tax-loss harvesting across all taxable accounts, monitored
    continuously by Farther&apos;s platform
   </GoldBullet>
   <GoldBullet>
    Charitable giving strategies - donor-advised funds
    (DAFs), qualified charitable distributions (QCDs), and
    charitable remainder trusts (CRTs)
   </GoldBullet>
   <GoldBullet>
    Capital gains timing and asset location optimization across
    taxable, tax-deferred, and Roth accounts
   </GoldBullet>
   <GoldBullet>
    State tax planning for clients in Nevada (zero income tax)
    and Arizona (flat 2.5% state income tax)
   </GoldBullet>
   </ul>

   <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
   Estate planning that protects your legacy:
   </p>
   <ul className="list-none space-y-3">
   <GoldBullet>
    Trust strategies including SLATs, GRATs, and ILITs
    - designed around your specific family dynamics
   </GoldBullet>
   <GoldBullet>
    Dynasty trust structures for multi-generational wealth
    transfer, especially in Nevada
   </GoldBullet>
   <GoldBullet>
    Beneficiary designation audit across all accounts, policies,
    and retirement plans
   </GoldBullet>
   <GoldBullet>
    Wealth transfer strategies leveraging current estate tax
    exemptions before potential sunset
   </GoldBullet>
   <GoldBullet>
    Business succession integration with your personal estate
    plan
   </GoldBullet>
   <GoldBullet>
    Legacy conversations - helping families talk about
    money with clarity and purpose
   </GoldBullet>
   </ul>

   <div className="mt-8">
   <Link
    href="/tools/ca-nv-tax-savings"
    className="inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans text-[14px] font-semibold px-6 py-3 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200"
   >
    CA &rarr; NV Tax Savings Estimator
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
   </Link>
   <p className="font-sans text-[12px] text-[#5b6a71] mt-2">
    See your potential 5-year savings
   </p>
   </div>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  STATE TAX ADVANTAGE
  ================================================================ */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll>
  <SectionEyebrow text="STATE TAX ADVANTAGE" />
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 heading-accent">
   Nevada and Arizona: Built for Wealth Preservation.
  </h2>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
  <p className="font-sans text-body-lg text-[#5b6a71] leading-relaxed mt-6 max-w-[720px]">
   Your state of residence is one of the most powerful variables in
   your tax plan. For families considering or already living in
   Nevada or Arizona, the structural advantages are significant
   - and we help you maximize every one of them.
  </p>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="font-serif text-[22px] font-semibold text-[#333333]">
   Nevada
   </h3>
   <ul className="list-none space-y-3 mt-4">
   <GoldBullet>
    Zero state income tax - on wages, investments, and
    retirement distributions
   </GoldBullet>
   <GoldBullet>
    No estate or inheritance tax at the state level
   </GoldBullet>
   <GoldBullet>
    Premier trust jurisdiction - dynasty trusts with
    unlimited duration, asset protection trusts, and no state
    tax on trust income
   </GoldBullet>
   <GoldBullet>
    Roth conversions without state tax drag, accelerating
    tax-free compounding
   </GoldBullet>
   </ul>
   <div className="mt-6">
   <Link
    href="/scottsdale"
    className="font-sans text-[14px] font-semibold text-[#1d7682] hover:underline"
   >
    Learn about our Nevada practice &rarr;
   </Link>
   </div>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={150}>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="font-serif text-[22px] font-semibold text-[#333333]">
   Arizona
   </h3>
   <ul className="list-none space-y-3 mt-4">
   <GoldBullet>
    Flat 2.5% state income tax - one of the lowest in
    the nation
   </GoldBullet>
   <GoldBullet>
    No state estate or inheritance tax at the state level
   </GoldBullet>
   <GoldBullet>
    Community property state providing a full step-up in
    cost basis for surviving spouses
   </GoldBullet>
   <GoldBullet>
    Favorable environment for retirees relocating from
    higher-tax states like California
   </GoldBullet>
   </ul>
   <div className="mt-6">
   <Link
    href="/scottsdale"
    className="font-sans text-[14px] font-semibold text-[#1d7682] hover:underline"
   >
    Learn about our Scottsdale practice &rarr;
   </Link>
   </div>
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
   Tax &amp; Estate Planning FAQs.
  </h2>
  </AnimateOnScroll>

  <div className="max-w-[800px] mx-auto">
  <AnimateOnScroll>
   {/* FAQ 1 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    How does tax-loss harvesting work, and how much can it save?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Tax-loss harvesting involves systematically selling securities
   at a loss to offset capital gains elsewhere in your portfolio.
   The realized losses can offset gains dollar-for-dollar and up
   to $3,000 of ordinary income annually, with unused losses
   carried forward indefinitely. For families in the highest tax
   brackets, active harvesting can improve after-tax returns by
   1-2% per year over time. Farther&apos;s platform
   monitors portfolios continuously for these opportunities.
   </p>
   </details>

   {/* FAQ 2 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    What is Roth conversion laddering and is it right for me?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Roth conversion laddering is a multi-year strategy of
   converting traditional IRA assets to Roth IRA accounts in
   measured amounts, ideally filling lower tax brackets each
   year. This is particularly powerful for clients in Nevada and
   Arizona, where there is no or low state income tax on the conversion.
   The goal is to reduce future required minimum distributions
   and create a tax-free income source in retirement. Whether
   it&apos;s right for you depends on your current tax bracket,
   time horizon, and overall estate plan.
   </p>
   </details>

   {/* FAQ 3 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    How do Nevada and Arizona tax advantages benefit my wealth
    plan?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Nevada has zero state income tax, no estate or inheritance
   tax, and is one of the premier trust jurisdictions in the
   country - offering dynasty trusts, asset protection
   trusts, and no state tax on trust income. Arizona has a flat
   2.5% income tax rate and is a community property state,
   providing a full step-up in cost basis for surviving
   spouses. Both states offer meaningful planning advantages for
   high-net-worth families relocating from higher-tax states like California.
   </p>
   </details>

   {/* FAQ 4 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    Do you coordinate with my CPA and estate attorney?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Absolutely - we encourage it. The best tax and estate
   outcomes happen when your financial advisor, CPA, and estate
   attorney are working from the same playbook. We proactively
   coordinate with your existing professionals and, through
   Farther, clients also have access to dedicated Trust and
   Estate Planning specialists who work alongside your advisor to
   ensure every decision is aligned across tax, legal, and
   investment strategy.
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
  <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
   Explore Related Capabilities.
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
   {
   title: 'Trust & Estate Planning',
   description:
   'Dedicated specialists designing trust structures, wealth transfer strategies, and estate plans that integrate with your broader financial picture.',
   href: '/services#trust-estate-planning',
   },
   {
   title: 'Retirement Planning',
   description:
   'Distribution sequencing, Roth conversion laddering, Social Security optimization, and income strategies built for a multi-decade retirement.',
   href: '/services#retirement-planning',
   },
   {
   title: 'Investment Management',
   description:
   'Tax-efficient portfolio construction with direct indexing, asset location optimization, and access to alternatives - tailored to your goals.',
   href: '/services#investment-management',
   },
  ].map((service, i) => (
   <AnimateOnScroll key={service.title} delay={i * 100}>
   <Link href={service.href} className="block group">
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[40px_32px] hover:shadow-card-hover hover:border-[#1d7682] transition-all duration-300 h-full">
    <h3 className="font-sans text-h4 font-semibold text-[#333333]">
    {service.title}
    </h3>
    <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
    {service.description}
    </p>
   </div>
   </Link>
   </AnimateOnScroll>
  ))}
  </div>
  </div>
 </section>

 {/* ================================================================
  CTA
  ================================================================ */}
 <section className="bg-[#333333] section-padding text-center">
  <div className="max-w-[620px] mx-auto">
  <AnimateOnScroll>
  <h2 className="font-serif text-[44px] max-md:text-[30px] font-semibold text-[#F7F4EE] leading-[1.2]">
   Let&apos;s Build Your Tax &amp; Estate Strategy.
  </h2>
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
   Every dollar saved in taxes is a dollar that compounds for your
   family. Schedule a private conversation to explore how proactive
   planning can transform your after-tax wealth.
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
  </AnimateOnScroll>
  </div>
 </section>

 {/* ================================================================
  DISCLAIMER
  ================================================================ */}
 <section className="bg-[#FAFAF8] py-[40px]">
  <div className="max-w-[900px] mx-auto px-[20px] md:px-[80px]">
  <p className="font-sans text-[11px] text-[#5b6a71]/80 leading-[1.8]">
  Tax outcomes depend on individual circumstances and are subject to
  changes in tax law. Advisory services are provided by Farther
  Finance Advisors LLC, an SEC-registered investment adviser. Farther
  Finance Advisors LLC does not provide tax or legal advice; please
  consult your tax and legal professionals for guidance on these
  matters. Past performance is not indicative of future results. The
  information presented on this page is for informational purposes
  only and does not constitute a recommendation or solicitation.{' '}
  <Link
   href="/disclosures"
   className="underline hover:text-[#1d7682]"
  >
   Disclosures
  </Link>{' '}
  |{' '}
  <Link
   href="/documents/FFA ADV Packet (2.6.26).pdf"
   className="underline hover:text-[#1d7682]"
   target="_blank"
  >
   Form ADV Part 2
  </Link>
  </p>
  </div>
 </section>
 </>
 )
}
