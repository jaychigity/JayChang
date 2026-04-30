import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
 title: 'Estate Planning & Dynasty Trusts for Arizona & Nevada Families | Advisor Jay',
 description:
 'Dedicated trust and estate planning specialists for families with $2M-$20M. Revocable and irrevocable trusts, Nevada dynasty trusts, and wealth transfer strategies.',
 alternates: { canonical: 'https://www.advisorjay.com/services/trust-estate' },
 openGraph: {
 title: 'Estate Planning & Dynasty Trusts for Arizona & Nevada Families | Advisor Jay',
 description:
 'Dedicated trust and estate planning specialists providing revocable and irrevocable trust design, Nevada dynasty trust strategy, and coordinated wealth transfer planning.',
 url: 'https://www.advisorjay.com/services/trust-estate',
 },
}

const serviceJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Trust & Estate Planning - Advisor Jay',
 description:
 'Dedicated trust and estate planning specialists for families with $2M-$20M in investable assets in Scottsdale, AZ and across Arizona, California, and Nevada. Revocable and irrevocable trust design, Nevada dynasty trusts, and wealth transfer strategies.',
 url: 'https://www.advisorjay.com/services/trust-estate',
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
 name: 'What is the difference between a revocable and irrevocable trust?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'A revocable trust (also called a living trust) allows you to maintain control of the assets during your lifetime and can be modified or dissolved at any time. An irrevocable trust removes assets from your taxable estate, providing estate tax reduction and asset protection benefits, but cannot easily be changed once established. The right structure depends on your goals - we help families determine which trust types align with their wealth transfer and asset protection objectives.',
 },
 },
 {
 '@type': 'Question',
 name: 'Why would I establish a Nevada dynasty trust instead of a trust in my home state?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Nevada offers some of the most favorable trust laws in the country. A Nevada dynasty trust can last indefinitely (no rule against perpetuities), offers a two-year asset protection window for self-settled trusts, and incurs zero state income tax on trust income when structured properly. For families in Arizona or other states, establishing a Nevada situs trust through our Arizona operations can provide meaningful tax and protection advantages that home-state trusts cannot match.',
 },
 },
 {
 '@type': 'Question',
 name: 'Do I still need an estate attorney if I work with you?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Yes - and we encourage it. Estate attorneys draft the legal documents that implement your plan. Our role is to design the trust and estate strategy, model the financial outcomes, coordinate beneficiary designations across all accounts, and ensure your attorney, CPA, and financial plan are all working from the same playbook. We work alongside your existing attorney or can introduce you to estate specialists we trust.',
 },
 },
 {
 '@type': 'Question',
 name: 'How does the 2026 estate tax exemption sunset affect my planning?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'The current federal estate tax exemption of approximately $13.6 million per person is scheduled to sunset at the end of 2025, potentially dropping to roughly half that amount under previous law. For families with estates above the reduced threshold, proactive planning - including irrevocable trust strategies like SLATs and GRATs - can lock in the higher exemption before it expires. We help families evaluate whether accelerated gifting or trust funding makes sense given their overall financial picture.',
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

export default function TrustEstatePlanningPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Services', href: '/services' }, { name: 'Trust & Estate Planning', href: '/services/trust-estate' }]} />
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
  <SectionEyebrow text="TRUST & ESTATE PLANNING" />
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <h1 className="font-serif text-[34px] md:text-[52px] font-bold text-[#333333] max-w-[900px] mx-auto mt-6 leading-tight">
   Dedicated Specialists Protecting Your Legacy.
  </h1>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
  <p className="font-sans text-body-lg text-[#5b6a71] max-w-[680px] mx-auto mt-6">
   Most advisors hand you a referral to an outside attorney and move
   on. In my practice, trust and estate planning is built into the
   advisory relationship - supported by dedicated specialists who
   work alongside me, your CPA, and your estate attorney to
   design strategies that protect what you&apos;ve built and transfer
   it on your terms.
  </p>
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
   <SectionEyebrow text="OUR APPROACH" />
   <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
   More Than a Referral. A Dedicated Planning Team.
   </h2>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
   Estate planning is not a one-time event - it is an
   ongoing discipline that must evolve as your family grows, tax
   laws change, and your wealth compounds. Farther&apos;s
   dedicated Trust and Estate Planning team works directly with
   families in{' '}
   <Link
    href="/scottsdale"
    className="text-[#1d7682] hover:underline"
   >
    Scottsdale
   </Link>{' '}
   and{' '}
   <Link
    href="/scottsdale"
    className="text-[#1d7682] hover:underline"
   >
    Tempe
   </Link>{' '}
   to design trust structures, coordinate beneficiary
   designations, and implement wealth transfer strategies that
   align with your broader financial plan.
   </p>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   We do not simply hand you a list of attorneys and wish you
   well. We sit at the table with your estate attorney and CPA,
   model the financial outcomes of different trust structures, and
   ensure every decision is integrated across your investment
   portfolio, tax strategy, and insurance coverage.
   </p>
   <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
   What this looks like in practice:
   </p>
   <ul className="list-none space-y-3">
   <GoldBullet>
    Revocable and irrevocable trust design - SLATs, GRATs,
    ILITs, and dynasty trusts tailored to your family&apos;s
    situation
   </GoldBullet>
   <GoldBullet>
    Nevada dynasty trust strategy leveraging indefinite trust
    duration and zero state income tax on trust income
   </GoldBullet>
   <GoldBullet>
    Wealth transfer strategies including lifetime gifting,
    generation-skipping transfer planning, and charitable
    structures
   </GoldBullet>
   <GoldBullet>
    Beneficiary designation audit across retirement accounts,
    insurance policies, and investment accounts to prevent costly
    gaps
   </GoldBullet>
   <GoldBullet>
    Coordination with your estate attorney and CPA to ensure
    legal documents, tax strategy, and financial plan are fully
    aligned
   </GoldBullet>
   <GoldBullet>
    Legacy planning conversations that go beyond the numbers
    - values, family governance, and multi-generational
    stewardship
   </GoldBullet>
   </ul>
   <p className="font-sans text-caption text-[#5b6a71] italic mt-6">
   Tax outcomes depend on individual circumstances and are subject to changes in tax law.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Right: Photo */}
  <AnimateOnScroll delay={150}>
   <div className="rounded-[16px] overflow-hidden relative">
   <Image
   src="/Photos/Legacy & Estate Planning for Generational Wealth.png"
   alt="Farther wealth advisor reviewing trust and estate planning documents for a high-net-worth family"
   width={2752}
   height={1536}
   className="w-full h-auto"
   />
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  SECTION 3: NEVADA & ARIZONA ADVANTAGE
  ================================================================ */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-container mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
  <AnimateOnScroll>
   <div>
   <SectionEyebrow text="NEVADA & ARIZONA ADVANTAGE" />
   <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
   Two States. Two Distinct Planning Advantages.
   </h2>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
   Our presence across{' '}
   <Link
    href="/scottsdale"
    className="text-[#1d7682] hover:underline"
   >
    Arizona
   </Link>{' '}
   and{' '}
   <Link
    href="/scottsdale"
    className="text-[#1d7682] hover:underline"
   >
    Nevada
   </Link>{' '}
   gives our clients access to some of the most favorable trust
   and estate planning laws in the country. We help families
   leverage these advantages as part of a coordinated,
   multi-state strategy.
   </p>
   </div>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
   <AnimateOnScroll delay={100}>
   <div className="bg-white rounded-[16px] p-8 shadow-sm">
   <h3 className="font-serif text-[22px] font-bold text-[#333333]">
    Nevada Dynasty Trusts
   </h3>
   <ul className="list-none space-y-3 mt-4">
    <GoldBullet>
    Indefinite trust duration - no rule against
    perpetuities, allowing wealth to compound across
    generations without estate tax exposure
    </GoldBullet>
    <GoldBullet>
    Two-year asset protection window for self-settled
    spendthrift trusts - among the strongest domestic
    protections available
    </GoldBullet>
    <GoldBullet>
    Zero state income tax on trust income when properly
    structured with a{' '}
    <Link
    href="/scottsdale"
    className="text-[#1d7682] hover:underline"
    >
    Nevada situs
    </Link>
    </GoldBullet>
   </ul>
   </div>
   </AnimateOnScroll>

   <AnimateOnScroll delay={200}>
   <div className="bg-white rounded-[16px] p-8 shadow-sm">
   <h3 className="font-serif text-[22px] font-bold text-[#333333]">
    Arizona Community Property
   </h3>
   <ul className="list-none space-y-3 mt-4">
    <GoldBullet>
    Community property rules provide a full step-up in cost
    basis on both halves of community property at the first
    spouse&apos;s death - potentially eliminating
    decades of embedded capital gains
    </GoldBullet>
    <GoldBullet>
    Flat 2.5% state income tax and no state estate tax,
    allowing trusts and individuals to retain more of their
    investment income and realized gains
    </GoldBullet>
   </ul>
   </div>
   </AnimateOnScroll>
  </div>
  </div>

  {/* Estate Complexity Tool */}
  <AnimateOnScroll delay={300}>
  <div className="mt-12 text-center">
   <Link
   href="/tools/estate-complexity"
   className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-[#1d7682]/20 text-[#1d7682] hover:bg-white hover:border-[#1d7682]/40 hover:shadow-lg font-sans text-[14px] font-semibold px-6 py-3 rounded-full transition-all duration-200"
   >
   Assess Your Estate Complexity
   <svg
   width="14"
   height="14"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2.5"
   strokeLinecap="round"
   strokeLinejoin="round"
   >
   <path d="M5 12h14M12 5l7 7-7 7" />
   </svg>
   </Link>
   <p className="font-sans text-[12px] text-[#5b6a71] mt-2">
   60 seconds &bull; Confidential
   </p>
  </div>
  </AnimateOnScroll>
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
   Trust &amp; Estate Planning Questions.
  </h2>
  </AnimateOnScroll>

  <div className="max-w-[800px] mx-auto">
  <AnimateOnScroll>
   {/* FAQ 1 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    What is the difference between a revocable and irrevocable trust?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   A revocable trust (also called a living trust) allows you to
   maintain control of the assets during your lifetime and can be
   modified or dissolved at any time. An irrevocable trust removes
   assets from your taxable estate, providing estate tax reduction
   and asset protection benefits, but cannot easily be changed
   once established. The right structure depends on your goals
   - we help families determine which trust types align with
   their wealth transfer and asset protection objectives.
   </p>
   </details>

   {/* FAQ 2 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    Why would I establish a Nevada dynasty trust instead of a trust in my home state?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Nevada offers some of the most favorable trust laws in the
   country. A Nevada dynasty trust can last indefinitely (no rule
   against perpetuities), offers a two-year asset protection
   window for self-settled trusts, and incurs zero state income
   tax on trust income when structured properly. For families in{' '}
   <Link
    href="/scottsdale"
    className="text-[#1d7682] hover:underline"
   >
    Scottsdale
   </Link>{' '}
   or other states, establishing a Nevada situs trust through our{' '}
   <Link
    href="/scottsdale"
    className="text-[#1d7682] hover:underline"
   >
    Arizona
   </Link>{' '}
   operations can provide meaningful tax and protection advantages
   that home-state trusts cannot match.
   </p>
   </details>

   {/* FAQ 3 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    Do I still need an estate attorney if I work with you?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Yes - and we encourage it. Estate attorneys draft the
   legal documents that implement your plan. Our role is to design
   the trust and estate strategy, model the financial outcomes,
   coordinate beneficiary designations across all accounts, and
   ensure your attorney, CPA, and financial plan are all working
   from the same playbook. We work alongside your existing
   attorney or can introduce you to estate specialists we trust.
   </p>
   </details>

   {/* FAQ 4 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    How does the estate tax exemption sunset affect my planning?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   The current federal estate tax exemption of approximately $13.6
   million per person is scheduled to sunset at the end of 2025,
   potentially dropping to roughly half that amount under previous
   law. For families with estates above the reduced threshold,
   proactive planning - including irrevocable trust
   strategies like SLATs and GRATs - can lock in the higher
   exemption before it expires. We help families evaluate whether
   accelerated gifting or trust funding makes sense given their
   overall financial picture.
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
   Trust Planning Works Best in Context.
  </h2>
  <p className="font-sans text-body text-[#5b6a71] max-w-[600px] mx-auto mt-4">
   Estate planning is most effective when coordinated with your full
   financial strategy. These services work together as part of a
   unified plan.
  </p>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
  <AnimateOnScroll delay={0}>
   <Link
   href="/services/tax-optimization"
   className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200 h-full"
   >
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
   Tax Optimization
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Proactive tax planning that integrates with your trust
   strategy - Roth conversions, capital gains harvesting,
   and charitable giving.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
   Learn more &rarr;
   </span>
   </Link>
  </AnimateOnScroll>

  <AnimateOnScroll delay={120}>
   <Link
   href="/services/financial-planning"
   className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200 h-full"
   >
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
   Financial Planning
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Comprehensive planning that ensures your estate strategy is
   aligned with retirement goals, cash flow needs, and family
   priorities.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
   Learn more &rarr;
   </span>
   </Link>
  </AnimateOnScroll>

  <AnimateOnScroll delay={240}>
   <Link
   href="/services/investments"
   className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200 h-full"
   >
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
   Investment Management
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Tax-efficient portfolio management that works hand-in-hand
   with your trust structures and wealth transfer timeline.
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
  <div className="max-w-container mx-auto text-center">
  <AnimateOnScroll>
  <SectionEyebrow text="START THE CONVERSATION" light />
  <h2 className="font-serif text-h2-mobile md:text-h2 font-semibold text-[#F7F4EE] mt-4 max-w-[800px] mx-auto">
   Protect What You&apos;ve Built. Transfer It on Your Terms.
  </h2>
  <p className="font-sans text-body text-[#F7F4EE]/80 max-w-[600px] mx-auto mt-6">
   A 30-minute discovery conversation to understand your family&apos;s
   situation, review your current estate documents, and identify the
   strategies that can make the biggest difference. A candid conversation about your legacy.
  </p>
  <div className="mt-10">
   <Button
   variant="primary"
   href="/schedule-consultation"
   >
   Schedule a Discovery Call
   </Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ================================================================
  DISCLAIMER
  ================================================================ */}
 <section className="bg-[#FAFAF8] py-8 px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-container mx-auto">
  <p className="font-sans text-[11px] text-[#5b6a71]/60 leading-relaxed text-center italic">
  Tax outcomes depend on individual circumstances and are subject to
  changes in tax law. Trust and estate planning services are
  educational and strategic in nature. Farther does not provide legal
  or tax advice. Clients should consult with qualified estate
  attorneys and tax professionals before implementing any trust or
  estate strategy. Investment advisory services offered through
  Farther Finance Advisors LLC, an SEC-registered investment adviser.
  </p>
  </div>
 </section>
 </>
 )
}
