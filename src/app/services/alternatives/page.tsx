import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
 title: 'Private Equity & Alternative Investments for High-Net-Worth Families',
 description:
 'Get access to private equity, venture capital, private credit, and hedge fund strategies that used to be reserved for the ultra-wealthy.',
 alternates: { canonical: 'https://www.advisorjay.com/services/alternatives' },
 openGraph: {
 title: 'Private Equity & Alternative Investments for High-Net-Worth Families',
 description:
 'Private equity, venture capital, private credit, and real asset access for families with $5M+ -- without the sky-high minimums. Arizona, California & Nevada.',
 url: 'https://www.advisorjay.com/services/alternatives',
 },
}

const serviceJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Alternative Investments - Advisor Jay',
 description:
 'Access to private equity, venture capital, private credit, and hedge fund strategies via institutional-quality vehicles for families with $5M+ in investable assets.',
 url: 'https://www.advisorjay.com/services/alternatives',
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
 name: 'What are alternative investments?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Alternative investments are anything outside the usual stocks-and-bonds world. Think private equity, venture capital, private credit, hedge funds, real estate, and infrastructure. Big university endowments, pension funds, and family offices have used these for decades to diversify and improve their returns. Now, through Farther, you can access many of the same strategies.',
 },
 },
 {
 '@type': 'Question',
 name: 'What is the minimum investment to access alternative investments through Farther?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'We generally suggest alternatives for families with $5 million or more in investable assets, because these strategies work best when they complement a solid traditional portfolio. The good news is that through Farther\'s platform, many high-quality vehicles are available at lower minimums than you\'d find going direct to a fund -- often starting at $25,000 to $50,000 per position.',
 },
 },
 {
 '@type': 'Question',
 name: 'Are alternative investments liquid?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Most aren\'t -- and that\'s by design. Lockup periods typically range from one to ten years depending on the strategy. Some structures like interval funds and certain private BDCs do offer periodic liquidity windows, usually quarterly. We\'re careful about sizing these allocations so you always have enough liquid assets for anything that comes up.',
 },
 },
 {
 '@type': 'Question',
 name: 'How do you select alternative investment vehicles?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Every alternative investment goes through serious due diligence by Farther\'s investment committee. We look at the fund manager\'s track record, fee structure, strategy consistency, operations, and whether their interests are aligned with yours. We compare net-of-fee performance against what you could get in public markets, because the whole point is genuine diversification -- not just added complexity.',
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

export default function AlternativesPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Services', href: '/services' }, { name: 'Alternative Investments', href: '/services/alternatives' }]} />
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
  <SectionEyebrow text="ALTERNATIVE INVESTMENTS" />
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <h1 className="font-serif text-[34px] md:text-[52px] font-bold text-[#333333] max-w-[900px] mx-auto mt-6 leading-tight">
   Investments That Used to Be Off-Limits -- Now They&apos;re Not.
  </h1>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
  <p className="font-sans text-body-lg text-[#5b6a71] max-w-[680px] mx-auto mt-6">
   For a long time, the best investors in the world have been putting
   serious money into private equity, venture capital, private
   credit, and real assets. Through Farther&apos;s platform, those
   same strategies are no longer locked behind $10 million minimums
   and exclusive invite lists.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ================================================================
  SECTION 2: MAIN CONTENT - THE CASE FOR ALTERNATIVES
  ================================================================ */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-container mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
  {/* Left: Text */}
  <AnimateOnScroll>
   <div>
   <SectionEyebrow text="THE INSTITUTIONAL PLAYBOOK" />
   <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
   The Approach Behind the Best Endowments -- and Why It Matters for You.
   </h2>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
   David Swensen, the legendary chief investment officer at Yale,
   basically rewrote the rulebook on how institutions invest. His
   approach -- now known as the Yale Model -- showed that
   putting a meaningful chunk into alternative investments can
   seriously improve returns over the long run. Under his watch,
   Yale&apos;s endowment grew from $1 billion to over $31 billion,
   consistently outperforming peers who stuck only with stocks
   and bonds.
   </p>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   The takeaway is pretty clear: going beyond public markets
   matters. Private equity captures value through hands-on
   improvement and longer holding periods. Private credit
   generates income that doesn&apos;t move in lockstep with stocks.
   Real assets give you inflation protection. And venture capital
   lets you invest in innovation before companies go public.
   Together, these strategies work alongside your traditional
   holdings and can smooth out the bumps in your overall
   portfolio.
   </p>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   Through Farther&apos;s platform, our clients can tap into these
   strategies through interval funds, private business
   development companies (BDCs), and select fund partnerships
   -- without the huge minimums and lengthy lockups that
   traditionally kept these out of reach for most families.
   </p>

   <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
   What this looks like for you:
   </p>
   <ul className="list-none space-y-3">
   <GoldBullet>
    Private equity and venture capital through quality
    institutional vehicles
   </GoldBullet>
   <GoldBullet>
    Private credit and direct lending strategies for steady
    income generation
   </GoldBullet>
   <GoldBullet>
    Hedge fund strategies for portfolio diversification and
    downside protection
   </GoldBullet>
   <GoldBullet>
    Real asset investments including real estate and
    infrastructure
   </GoldBullet>
   <GoldBullet>
    Careful integration so alternatives complement your
    overall portfolio rather than complicating it
   </GoldBullet>
   <GoldBullet>
    Transparent fee analysis and thorough due diligence on
    every vehicle we recommend
   </GoldBullet>
   </ul>
   </div>
  </AnimateOnScroll>

  {/* Right: Photo */}
  <AnimateOnScroll delay={150}>
   <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative">
   <Image
   src="/Photos/Alt-Investments.avif"
   alt="Alternative investment options including private equity, real assets, and hedge funds available to clients"
   fill
   className="object-cover object-top"
   sizes="(min-width: 1024px) 45vw, 100vw"
   />
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  SECTION 3: WHO SHOULD CONSIDER ALTERNATIVES
  ================================================================ */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-container mx-auto">
  <div className="max-w-[800px] mx-auto">
  <AnimateOnScroll className="text-center mb-12">
   <SectionEyebrow text="IS THIS RIGHT FOR YOU?" />
   <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
   Who Should Think About Alternatives?
   </h2>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed">
   Let&apos;s be honest -- alternatives aren&apos;t for everyone. They
   involve longer time horizons, limited liquidity, and more
   complexity than your typical stock or bond fund. We generally
   recommend them for families and individuals who check these
   boxes:
   </p>
   <ul className="list-none space-y-3 mt-6">
   <GoldBullet>
   <strong className="text-[#333333]">$5 million or more</strong>{' '}
   in investable assets, so there&apos;s enough room to invest
   meaningfully without putting too many eggs in one basket
   </GoldBullet>
   <GoldBullet>
   A solid traditional portfolio already in place
   -- alternatives should add to what you have, not replace
   it
   </GoldBullet>
   <GoldBullet>
   A long-term mindset, with your near-term cash needs already
   covered through savings and traditional investments
   </GoldBullet>
   <GoldBullet>
   Comfort with the reality that these strategies come with
   lockup periods, capital calls, and less day-to-day pricing
   transparency
   </GoldBullet>
   <GoldBullet>
   A desire to build the kind of portfolio that the best
   endowments and family offices have been using for years
   </GoldBullet>
   </ul>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
   Not sure if alternatives belong in your portfolio? That&apos;s
   exactly the kind of question we love to dig into during a
   discovery conversation. We&apos;ll look at what you have now,
   your liquidity picture, and your long-term goals before
   recommending anything specific.
   </p>
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
   Questions About Alternative Investments.
  </h2>
  </AnimateOnScroll>

  <div className="max-w-[800px] mx-auto">
  <AnimateOnScroll>
   {/* FAQ 1 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    What are alternative investments?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Alternative investments are anything outside the usual
   stocks-and-bonds world. Think private equity, venture capital,
   private credit, hedge funds, real estate, and infrastructure.
   Big university endowments, pension funds, and family offices
   have used these for decades to diversify and improve their
   returns. Now, through Farther, you can access many of the same
   strategies.
   </p>
   </details>

   {/* FAQ 2 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    What is the minimum investment to access alternatives
    through Farther?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   We generally suggest alternatives for families with $5 million
   or more in investable assets, because these strategies work
   best when they complement a solid traditional portfolio. The
   good news is that through Farther&apos;s platform, many
   high-quality vehicles are available at lower minimums than
   you&apos;d find going direct to a fund -- often starting at
   $25,000 to $50,000 per position.
   </p>
   </details>

   {/* FAQ 3 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    Are alternative investments liquid?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Most aren&apos;t -- and that&apos;s by design. Lockup periods
   typically range from one to ten years depending on the
   strategy. Some structures like interval funds and certain
   private BDCs do offer periodic liquidity windows, usually
   quarterly. We&apos;re careful about sizing these allocations so
   you always have enough liquid assets for anything that comes
   up.
   </p>
   </details>

   {/* FAQ 4 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    How do you select alternative investment vehicles?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   Every alternative investment goes through serious due diligence
   by Farther&apos;s investment committee. We look at the fund
   manager&apos;s track record, fee structure, strategy consistency,
   operations, and whether their interests are aligned with yours.
   We compare net-of-fee performance against what you could get in
   public markets, because the whole point is genuine
   diversification -- not just added complexity.
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
   Alternatives Work Best as Part of a Bigger Picture.
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
  <AnimateOnScroll>
   <Link
   href="/services/investments"
   className="block bg-white rounded-[16px] p-8 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow duration-200"
   >
   <h3 className="font-sans text-h4 font-semibold text-[#333333]">
   Investment Management
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Your full portfolio strategy -- tax-smart positioning and a
   clear view of everything in one place.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
   Learn more &rarr;
   </span>
   </Link>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <Link
   href="/services/institutional"
   className="block bg-white rounded-[16px] p-8 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow duration-200"
   >
   <h3 className="font-sans text-h4 font-semibold text-[#333333]">
   Institutional Services
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   OCIO and fiduciary oversight for nonprofits, endowments, and
   foundations that need professional investment management.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
   Learn more &rarr;
   </span>
   </Link>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <Link
   href="/services/financial-planning"
   className="block bg-white rounded-[16px] p-8 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow duration-200"
   >
   <h3 className="font-sans text-h4 font-semibold text-[#333333]">
   Financial Planning
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   The full picture -- retirement projections, cash flow
   planning, insurance reviews, and more.
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
   Curious What Institutional-Quality Investing Looks Like?
  </h2>
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[620px] mx-auto mt-5 leading-relaxed">
   A quick 30-minute call is all it takes. We&apos;ll talk about your
   portfolio, your goals, and whether alternatives make sense for
   you.
  </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
  <div className="mt-10">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Discovery Call
   </Button>
  </div>
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

 {/* ================================================================
  DISCLAIMER
  ================================================================ */}
 <section className="bg-[#F7F4EE] px-[20px] md:px-[40px] lg:px-[80px] py-8">
  <div className="max-w-container mx-auto">
  <p className="font-sans text-caption text-[#5b6a71] italic leading-relaxed">
  All investment strategies carry risk, including the potential loss of
  principal. Alternative investments are illiquid and may not be
  suitable for all investors. Past performance is not indicative of
  future results. The information on this page is for informational
  purposes only and does not constitute an offer to sell or a
  solicitation of an offer to buy any security.
  </p>
  </div>
 </section>
 </>
 )
}
