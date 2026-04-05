import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
 title: 'Generational Wealth Planning | Farther -- Arizona, California & Nevada',
 description:
 'Multi-generational wealth planning for families with $2M-$20M. Family governance, dynasty trusts, succession planning, and values-based philanthropy.',
 alternates: { canonical: 'https://www.PWM-Farther.com/services/generational-wealth' },
 openGraph: {
 title: 'Generational Wealth Planning | Advisor Jay',
 description:
 'Build wealth that endures across generations with multi-generational governance frameworks, dynasty trusts, succession planning, and values-based philanthropy strategies.',
 url: 'https://www.PWM-Farther.com/services/generational-wealth',
 },
}

const serviceJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Generational Wealth Planning - Advisor Jay',
 description:
 'Multi-generational wealth planning for families with $2M-$20M in investable assets in Scottsdale, AZ and across Arizona, California, and Nevada. Family governance, dynasty trusts, business succession planning, and values-based philanthropy.',
 url: 'https://www.PWM-Farther.com/services/generational-wealth',
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
 name: 'What is a multi-generational financial governance framework?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'A multi-generational financial governance framework is a structured set of principles, policies, and decision-making processes that guide how a family manages, grows, and transfers wealth across generations. It typically includes a family mission statement, investment policy guidelines, distribution standards, roles and responsibilities for family members, and a process for resolving conflicts. We help families design governance structures that balance the founding generation\'s values with the autonomy and goals of heirs.',
 },
 },
 {
 '@type': 'Question',
 name: 'How do you prepare the next generation to manage family wealth responsibly?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'We facilitate structured family meetings and next-generation education programs that cover financial literacy, investment principles, tax awareness, and the responsibilities that come with inherited wealth. Rather than simply handing heirs access to accounts, we help families create a phased approach - introducing younger generations to budgeting, then investment concepts, and eventually governance participation - so they are prepared to be responsible stewards of the family\'s wealth.',
 },
 },
 {
 '@type': 'Question',
 name: 'What is the difference between a dynasty trust and a standard irrevocable trust?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'A standard irrevocable trust typically has a defined termination date based on state law (often 90 to 100 years). A dynasty trust, particularly one established in Nevada, can last indefinitely - allowing wealth to compound and pass to future generations without triggering estate or generation-skipping transfer taxes at each generational level. Combined with Nevada\'s zero state income tax on trust income, a dynasty trust can be one of the most powerful vehicles for preserving multi-generational wealth.',
 },
 },
 {
 '@type': 'Question',
 name: 'How does concentrated stock and business succession planning fit into generational wealth?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Many families hold a significant portion of their wealth in a single business or concentrated stock position. Without a proactive plan, a liquidity event - whether a sale, IPO, or death of the business owner - can trigger substantial tax liabilities and disrupt family finances. We help families design succession plans, diversification strategies (such as exchange funds and charitable remainder trusts), and buy-sell agreements that preserve wealth across the transition and minimize tax exposure for the next generation.',
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

export default function GenerationalWealthPlanningPage() {
 return (
 <>
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
  <SectionEyebrow text="GENERATIONAL WEALTH" />
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <h1 className="font-serif text-[34px] md:text-[52px] font-bold text-[#333333] max-w-[900px] mx-auto mt-6 leading-tight">
   Building Wealth That Endures Across Generations.
  </h1>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
  <p className="font-sans text-body-lg text-[#5b6a71] max-w-[680px] mx-auto mt-6">
   Wealth that lasts is not accidental - it is the product of
   intentional governance, structured planning, and purposeful
   education. At Farther, we help families build the frameworks,
   strategies, and conversations that ensure their wealth serves not
   just this generation, but the ones that follow.
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
   Beyond Wealth Transfer. Building a Legacy That Lasts.
   </h2>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
   Most wealth management firms focus on accumulating assets.
   But studies consistently show that the majority of family
   wealth is lost by the third generation - not because of
   poor investment returns, but because of a lack of governance,
   communication, and preparation. Farther takes a different
   approach, working with families in{' '}
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
    Arizona
   </Link>{' '}
   to build the structures, strategies, and shared understanding
   that keep wealth intact across generational transitions.
   </p>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   We coordinate across your advisory team - financial
   advisor, estate attorney, CPA, and insurance specialists
   - to ensure every element of your generational plan is
   aligned and working toward the same long-term objectives.
   </p>
   <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
   What this looks like in practice:
   </p>
   <ul className="list-none space-y-3">
   <GoldBullet>
    Multi-generational financial governance frameworks - 
    family mission statements, investment policies, distribution
    standards, and decision-making structures
   </GoldBullet>
   <GoldBullet>
    Family meeting facilitation and next-gen education - 
    structured programs that prepare heirs to be responsible
    stewards of family wealth
   </GoldBullet>
   <GoldBullet>
    Dynasty trust and wealth transfer structures - 
    leveraging Nevada&apos;s indefinite trust duration and zero
    state income tax to compound wealth across generations
   </GoldBullet>
   <GoldBullet>
    Concentrated stock and business succession planning - 
    diversification strategies, buy-sell agreements, and
    liquidity event preparation
   </GoldBullet>
   <GoldBullet>
    Values-based philanthropy and donor-advised funds - 
    charitable giving strategies that reflect your
    family&apos;s mission and provide meaningful tax benefits
   </GoldBullet>
   <GoldBullet>
    Tax-efficient intergenerational gifting strategies - 
    annual exclusion gifts, 529 superfunding, GRATs, and
    generation-skipping transfer planning
   </GoldBullet>
   </ul>
   <p className="font-sans text-caption text-[#5b6a71] italic mt-6">
   Tax outcomes depend on individual circumstances and are subject to changes in tax law.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Right: Photo */}
  <AnimateOnScroll delay={150}>
   <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative">
   <Image
   src="/Photos/Jay-Generational.png"
   alt="Farther wealth advisor discussing multi-generational wealth transfer and legacy planning with a family"
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
  SECTION 3: ARIZONA & NEVADA ADVANTAGE
  ================================================================ */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-container mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
  <AnimateOnScroll>
   <div>
   <SectionEyebrow text="ARIZONA & NEVADA ADVANTAGE" />
   <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
   Two Markets Built for Multi-Generational Planning.
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
   gives families access to some of the most favorable legal
   and tax environments in the country for building and
   preserving generational wealth. We help families leverage
   these advantages as part of a coordinated, multi-state
   strategy.
   </p>
   </div>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
   <AnimateOnScroll delay={100}>
   <div className="bg-white rounded-[16px] p-8 shadow-sm">
   <h3 className="font-serif text-[22px] font-bold text-[#333333]">
    Nevada: Dynasty Trust Capital
   </h3>
   <ul className="list-none space-y-3 mt-4">
    <GoldBullet>
    Indefinite trust duration allows wealth to compound and
    transfer across unlimited generations without estate tax
    exposure at each level
    </GoldBullet>
    <GoldBullet>
    Zero state income tax on properly structured trust income
    - maximizing long-term compounding within a{' '}
    <Link
    href="/scottsdale"
    className="text-[#1d7682] hover:underline"
    >
    Nevada situs
    </Link>{' '}
    dynasty trust
    </GoldBullet>
    <GoldBullet>
    Strong asset protection statutes shielding family wealth
    from creditors and litigation across generations
    </GoldBullet>
   </ul>
   </div>
   </AnimateOnScroll>

   <AnimateOnScroll delay={200}>
   <div className="bg-white rounded-[16px] p-8 shadow-sm">
   <h3 className="font-serif text-[22px] font-bold text-[#333333]">
    Arizona: Business &amp; Family Wealth Hub
   </h3>
   <ul className="list-none space-y-3 mt-4">
    <GoldBullet>
    Flat 2.5% state income tax combined with community property
    rules that provide a full step-up in cost basis at the
    first spouse&apos;s death - a powerful advantage
    for families with appreciated assets
    </GoldBullet>
    <GoldBullet>
    Thriving entrepreneurial ecosystem in{' '}
    <Link
    href="/scottsdale"
    className="text-[#1d7682] hover:underline"
    >
    Scottsdale
    </Link>{' '}
    creates significant business succession planning
    opportunities for multi-generational families
    </GoldBullet>
   </ul>
   </div>
   </AnimateOnScroll>
  </div>
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
   Generational Wealth Planning Questions.
  </h2>
  </AnimateOnScroll>

  <div className="max-w-[800px] mx-auto">
  <AnimateOnScroll>
   {/* FAQ 1 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    What is a multi-generational financial governance framework?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   A multi-generational financial governance framework is a
   structured set of principles, policies, and decision-making
   processes that guide how a family manages, grows, and
   transfers wealth across generations. It typically includes a
   family mission statement, investment policy guidelines,
   distribution standards, roles and responsibilities for family
   members, and a process for resolving conflicts. We help
   families design governance structures that balance the
   founding generation&apos;s values with the autonomy and goals
   of heirs.
   </p>
   </details>

   {/* FAQ 2 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    How do you prepare the next generation to manage family wealth responsibly?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   We facilitate structured family meetings and next-generation
   education programs that cover financial literacy, investment
   principles, tax awareness, and the responsibilities that come
   with inherited wealth. Rather than simply handing heirs
   access to accounts, we help families create a phased approach
   - introducing younger generations to budgeting, then
   investment concepts, and eventually governance participation
   - so they are prepared to be responsible stewards of
   the family&apos;s wealth.
   </p>
   </details>

   {/* FAQ 3 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    What is the difference between a dynasty trust and a standard irrevocable trust?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   A standard irrevocable trust typically has a defined
   termination date based on state law (often 90 to 100 years).
   A dynasty trust, particularly one established in Nevada, can
   last indefinitely - allowing wealth to compound and
   pass to future generations without triggering estate or
   generation-skipping transfer taxes at each generational
   level. Combined with Nevada&apos;s zero state income tax on
   trust income, a dynasty trust can be one of the most powerful
   vehicles for preserving multi-generational wealth.
   </p>
   </details>

   {/* FAQ 4 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    How does concentrated stock and business succession planning fit into generational wealth?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Many families hold a significant portion of their wealth in a
   single business or concentrated stock position. Without a
   proactive plan, a liquidity event - whether a sale,
   IPO, or death of the business owner - can trigger
   substantial tax liabilities and disrupt family finances. We
   help families design succession plans, diversification
   strategies (such as exchange funds and charitable remainder
   trusts), and buy-sell agreements that preserve wealth across
   the transition and minimize tax exposure for the next
   generation.
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
   Generational Planning Works Best in Context.
  </h2>
  <p className="font-sans text-body text-[#5b6a71] max-w-[600px] mx-auto mt-4">
   Building lasting wealth requires coordination across your entire
   financial strategy. These services work together as part of a
   unified generational plan.
  </p>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
  <AnimateOnScroll delay={0}>
   <Link
   href="/services/trust-estate"
   className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200 h-full"
   >
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
   Trust &amp; Estate Planning
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Dedicated trust and estate specialists designing revocable
   and irrevocable trusts, Nevada dynasty trusts, and
   coordinated wealth transfer strategies.
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
   Comprehensive planning that aligns your generational wealth
   strategy with retirement goals, cash flow needs, and family
   priorities.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
   Learn more &rarr;
   </span>
   </Link>
  </AnimateOnScroll>

  <AnimateOnScroll delay={240}>
   <Link
   href="/services/tax-optimization"
   className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200 h-full"
   >
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
   Tax Optimization
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Proactive tax strategies - Roth conversions, capital
   gains harvesting, and charitable giving - that
   maximize what passes to the next generation.
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
   Build a Legacy That Outlasts a Lifetime.
  </h2>
  <p className="font-sans text-body text-[#F7F4EE]/80 max-w-[600px] mx-auto mt-6">
   A 30-minute discovery conversation to understand your
   family&apos;s goals, explore your current generational planning,
   and identify the strategies that can make the biggest difference.
   No sales pitch - just a candid conversation about building
   wealth that endures.
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
  changes in tax law. Generational wealth planning services are
  educational and strategic in nature. Farther does not provide legal
  or tax advice. Clients should consult with qualified estate
  attorneys and tax professionals before implementing any trust,
  gifting, or succession strategy. Investment advisory services
  offered through Farther Finance Advisors LLC, an SEC-registered
  investment adviser.
  </p>
  </div>
 </section>
 </>
 )
}
