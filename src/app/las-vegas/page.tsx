import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import {
 MapPin,
 Shield,
 Building,
 Sun,
 ChevronDown,
 ArrowRight,
 TrendingUp,
 Home,
 Briefcase,
} from 'lucide-react'

export const metadata: Metadata = {
 title: 'Wealth Management in Las Vegas & Nevada | Financial Advisor for Families & Business Owners',
 description:
 'Personalized wealth management for Nevada families and business owners with $2M-$20M. Serving Las Vegas, Henderson, Summerlin, and greater Nevada with no state income tax advantages.',
 alternates: { canonical: 'https://www.PWM-Farther.com/las-vegas' },
 openGraph: {
 title: 'Las Vegas & Nevada Wealth Management | Advisor Jay',
 description:
 'Financial planning, investment management, and tax strategy for Nevada families - serving Las Vegas, Henderson, Summerlin, and Southern Nevada.',
 url: 'https://www.PWM-Farther.com/las-vegas',
 },
 other: {
 'geo.region': 'US-NV',
 'geo.placename': 'Las Vegas',
 },
}

const financialServiceSchema = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Advisor Jay - Las Vegas & Nevada',
 description:
 'Personalized wealth management for Nevada families and business owners. Serving Las Vegas, Henderson, Summerlin, and greater Nevada with no state income tax benefits.',
 url: 'https://www.PWM-Farther.com/las-vegas',
 telephone: '+1-480-944-0880',
 address: {
 '@type': 'PostalAddress',
 addressLocality: 'Las Vegas',
 addressRegion: 'NV',
 addressCountry: 'US',
 },
 geo: {
 '@type': 'GeoCoordinates',
 latitude: 36.1699,
 longitude: -115.1398,
 },
 areaServed: [
 'Las Vegas',
 'Henderson',
 'Summerlin',
 'The Ridges',
 'Boulder City',
 'Lake Las Vegas',
 'Southern Nevada',
 ],
 serviceType: [
 'Wealth Management',
 'Financial Planning',
 'Investment Management',
 'Retirement Planning',
 'Estate Planning',
 'Tax Strategy',
 'Nevada Dynasty Trusts',
 'Asset Protection',
 ],
 parentOrganization: {
 '@type': 'Organization',
 name: 'Farther',
 url: 'https://www.farther.com',
 },
}

const faqSchema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'What are the tax advantages of moving to Nevada?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Nevada has no state income tax, no estate tax, and no inheritance tax - making it one of the most tax-efficient states in the nation. For families relocating from California, where income tax reaches 13.3%, the savings can exceed $100,000 annually on $1M+ in income. Combined with Nevada\'s dynasty trusts (allowing assets to benefit heirs for 1,000 years), the wealth preservation advantages are substantial.',
 },
 },
 {
 '@type': 'Question',
 name: 'What are Nevada dynasty trusts and why are they powerful?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Nevada dynasty trusts are perpetual trusts that can continue for 1,000+ years, allowing you to transfer wealth to future generations while removing it from your taxable estate. Unlike most states (which limit dynasty trusts to 21 years), Nevada has no "rule against perpetuities," creating unparalleled multi-generational wealth planning opportunities. Combined with Nevada\'s spousal lifetime access trust (SLAT) rules and the state\'s favorable trust tax treatment, dynasty trusts can preserve hundreds of millions for your family line.',
 },
 },
 {
 '@type': 'Question',
 name: 'Can I keep California-source income if I move to Nevada?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Not entirely, but it\'s strategic. California taxes its residents on worldwide income but will continue taxing certain Nevada-resident income from California sources (rental properties, ongoing business activities, deferred compensation earned during residency). However, income from new Nevada business activities, new investments, and capital gains from Nevada residency are not taxed by California. Proper planning around your move date and income sources is critical.',
 },
 },
 {
 '@type': 'Question',
 name: 'What areas of Nevada do you serve?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'We serve families and business owners throughout Southern Nevada, including Las Vegas, Henderson, Summerlin, The Ridges, MacDonald Highlands, Southern Highlands, Lake Las Vegas, and Boulder City. We also serve clients across Arizona, California, and Nevada through a combination of in-person meetings and our technology platform.',
 },
 },
 {
 '@type': 'Question',
 name: 'Is Nevada a community property state?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Yes. Nevada is a community property state, which means married couples can structure assets so that both spouses receive a full step-up in cost basis upon death - not just one spouse. This single provision can save families hundreds of thousands in capital gains taxes. When combined with Nevada\'s dynasty trusts and lack of state income tax, the estate planning advantages are extraordinary.',
 },
 },
 {
 '@type': 'Question',
 name: 'Are you a fiduciary financial advisor in Nevada?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'We are a fiduciary, meaning we are held to a legal standard to put your interests first. Our advisory fee is based on a percentage of assets under management. For complete details on fees and compensation, please refer to our Form ADV Part 2A.',
 },
 },
 ],
}

export default function LasVegasNevadaPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Las Vegas', href: '/las-vegas' }]} />
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify(financialServiceSchema),
  }}
 />
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify(faqSchema),
  }}
 />

 {/* ─── SECTION 1: HERO ─── */}
 <section className="relative min-h-screen bg-[#333333] flex items-center">
  <Image
  src="/Photos/las-vegas-couple-sunset.avif"
  alt="Nevada desert landscape - wealth management for Las Vegas, Henderson, and Summerlin families"
  title="Las Vegas & Nevada - Advisor Jay"
  fill
  className="object-cover opacity-15"
  priority
  sizes="100vw"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-[#333333] via-[#333333]/85 to-transparent" />
  <div className="relative z-10 mx-auto max-w-container px-sm md:px-lg py-[96px] w-full">
  <AnimateOnScroll>
  <SectionEyebrow text="LAS VEGAS & NEVADA" light />
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
  <h1 className="mt-md font-serif text-[34px] md:text-[52px] leading-[1.15] text-[#F7F4EE] max-w-[640px]">
   Wealth Management for Nevada's No-Tax Community of Successful Families and Business Owners.
  </h1>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
  <p className="mt-lg font-sans text-body-lg text-[#b6d0ed] max-w-[620px]">
   Serving Las Vegas, Henderson, Summerlin, and greater Nevada with specialized
   wealth strategies tailored to Nevada's extraordinary tax advantages and
   dynasty trust opportunities. Clients with $2M-$20M in investable assets seeking
   California-to-Nevada relocation planning or multi-generational wealth structuring.
  </p>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
  <div className="mt-lg flex flex-col sm:flex-row gap-[16px]">
   <Button href="/schedule-consultation" variant="primary">
   Begin a Confidential Conversation
   </Button>
  </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={400}>
  <div className="mt-xl flex flex-wrap gap-lg font-sans text-caption text-[#b6d0ed]">
   <span className="flex items-center gap-xs">
   <Shield className="h-4 w-4 text-[#1d7682]" />
   Fiduciary Standard
   </span>
   <span className="flex items-center gap-xs">
   <TrendingUp className="h-4 w-4 text-[#1d7682]" />
   $2M-$20M Clients
   </span>
   <span className="flex items-center gap-xs">
   <MapPin className="h-4 w-4 text-[#1d7682]" />
   Serving Las Vegas & Southern Nevada
   </span>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ─── SECTION 2: NEVADA ADVANTAGE ─── */}
 <section className="bg-[#F7F4EE] py-xl md:py-2xl">
  <div className="mx-auto max-w-container px-sm md:px-lg">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
  {/* Left column: text */}
  <div>
   <AnimateOnScroll>
   <SectionEyebrow text="THE NEVADA ADVANTAGE" />
   </AnimateOnScroll>

   <AnimateOnScroll delay={100}>
   <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
   Zero State Income Tax, Dynasty Trusts for 1,000 Years, and Unprecedented Wealth Preservation.
   </h2>
   </AnimateOnScroll>

   <AnimateOnScroll delay={200}>
   <div className="mt-lg font-sans text-body text-[#5b6a71] space-y-md">
   <p>
    Nevada is the nation's premier wealth management destination. Unlike nearly every other state, Nevada charges no state income tax - none on wages, none on investment income, none on capital gains. For families relocating from California, where the top marginal income tax rate reaches 13.3%, the annual tax savings can exceed $100,000 on seven-figure incomes. But Nevada's advantages extend far beyond income tax elimination.
   </p>
   <p>
    Nevada is one of only nine community property states, meaning married couples can structure assets for dual step-up in basis - dramatically reducing capital gains taxes across generations. More powerfully still, Nevada allows perpetual dynasty trusts with no time limit, creating an extraordinary vehicle for multi-generational wealth transfer. These trusts can transfer wealth to your heirs for 1,000+ years while removing assets from your taxable estate entirely.
   </p>
   <p>
    The combination of zero state income tax, no estate or inheritance tax, community property advantages, and unlimited dynasty trusts makes Nevada the single most tax-efficient state for wealth preservation and family wealth transfer. The question isn't whether Nevada is powerful. It's whether your financial plan is structured to capture every advantage.
   </p>
   </div>
   </AnimateOnScroll>
  </div>

  {/* Right column: stats panel */}
  <AnimateOnScroll delay={300}>
   <div className="bg-[#333333] rounded-[16px] p-[40px] md:p-[48px] space-y-[32px] h-fit lg:mt-[60px]">
   <div>
   <span className="font-serif text-[48px] text-[#1d7682] leading-none">
    0%
   </span>
   <p className="mt-[8px] font-sans text-body-sm text-[#b6d0ed]">
    State income tax rate - vs. California's 13.3%
   </p>
   </div>
   <div className="border-t border-[rgba(255,255,255,0.08)] pt-[32px]">
   <span className="font-serif text-[48px] text-[#1d7682] leading-none">
    0%
   </span>
   <p className="mt-[8px] font-sans text-body-sm text-[#b6d0ed]">
    State estate or inheritance tax - preserving 100% for your heirs
   </p>
   </div>
   <div className="border-t border-[rgba(255,255,255,0.08)] pt-[32px]">
   <span className="font-serif text-[48px] text-[#1d7682] leading-none">
    1,000+
   </span>
   <p className="mt-[8px] font-sans text-body-sm text-[#b6d0ed]">
    Years - Duration of Nevada dynasty trusts vs. most states' 21-year limit
   </p>
   </div>
   <div className="border-t border-[rgba(255,255,255,0.08)] pt-[32px]">
   <span className="font-serif text-[48px] text-[#1d7682] leading-none">
    $100K+
   </span>
   <p className="mt-[8px] font-sans text-body-sm text-[#b6d0ed]">
    Annual tax savings for families relocating from California
   </p>
   </div>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ─── SECTION 3: CALIFORNIA-TO-NEVADA RELOCATION ─── */}
 <section className="bg-[#333333] py-xl md:py-2xl">
  <div className="mx-auto max-w-container px-sm md:px-lg">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-start">
  {/* Left column: lifestyle photo */}
  <AnimateOnScroll>
   <div className="rounded-[16px] overflow-hidden relative w-full">
   <Image
   src="/Photos/couple-golf-course.avif"
   alt="Family enjoying retirement in Las Vegas after relocating from California with tax-optimized wealth plan"
   width={1376}
   height={768}
   className="w-full h-auto"
   />
   </div>
  </AnimateOnScroll>

  {/* Right column: text */}
  <div>
   <AnimateOnScroll delay={100}>
   <SectionEyebrow text="CALIFORNIA TO NEVADA" light />
   </AnimateOnScroll>

   <AnimateOnScroll delay={150}>
   <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#F7F4EE]">
   The Most Powerful Wealth Transition in America - We Guide Every Step.
   </h2>
   </AnimateOnScroll>

   <AnimateOnScroll delay={200}>
   <div className="mt-lg font-sans text-body text-[#b6d0ed] space-y-md">
   <p>
    The California-to-Nevada relocation is the most financially significant move a high-net-worth family can make. A family earning $1 million annually saves over $130,000 per year in state income taxes - and that's just the baseline. Layer on Nevada's dynasty trusts and you gain the ability to transfer multi-generational wealth entirely free of transfer taxes. The cumulative financial advantage over a family's lifetime can exceed $5 million to $20 million+. But the execution is complex. California aggressively audits departing residents, and a poorly planned transition can result in years of disputed tax obligations, penalties, and interest. The difference between capturing Nevada's full advantage and leaving eight-figure tax savings on the table comes down to strategic planning - and we specialize in exactly this transition.
   </p>
   </div>
   </AnimateOnScroll>

   <AnimateOnScroll delay={250}>
   <ul className="mt-lg space-y-[16px]">
   <li className="flex items-start gap-[12px]">
    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
    <span className="font-semibold text-[#F7F4EE]">State income tax transition</span>{' '}
    - establishing Nevada residency, &ldquo;closer connection&rdquo; test,
    California sourced income rules
    </p>
   </li>
   <li className="flex items-start gap-[12px]">
    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
    <span className="font-semibold text-[#F7F4EE]">Dynasty trust creation</span>{' '}
    - establishing perpetual trusts for unlimited generational wealth transfer
    </p>
   </li>
   <li className="flex items-start gap-[12px]">
    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
    <span className="font-semibold text-[#F7F4EE]">Trust restructuring</span>{' '}
    - converting California trusts to Nevada dynasty trusts, capturing dual step-up benefits
    </p>
   </li>
   <li className="flex items-start gap-[12px]">
    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
    <span className="font-semibold text-[#F7F4EE]">Entity domicile changes</span>{' '}
    - re-domiciling LLCs, S-Corps, and business entities to Nevada
    </p>
   </li>
   <li className="flex items-start gap-[12px]">
    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
    <span className="font-semibold text-[#F7F4EE]">Home equity reinvestment</span>{' '}
    - strategic deployment of California home sale proceeds ($2M-$8M+)
    </p>
   </li>
   <li className="flex items-start gap-[12px]">
    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
    <span className="font-semibold text-[#F7F4EE]">Asset protection trusts</span>{' '}
    - Nevada's favorable trust and LLC laws create powerful creditor protection
    </p>
   </li>
   <li className="flex items-start gap-[12px]">
    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
    <span className="font-semibold text-[#F7F4EE]">Insurance audit</span>{' '}
    - reviewing coverage in new state, homeowner's, auto, umbrella policies
    </p>
   </li>
   </ul>
   </AnimateOnScroll>
  </div>
  </div>
  </div>
 </section>

 {/* ─── SECTION 4: WHO WE SERVE ─── */}
 <section className="bg-[#FAFAF8] py-xl md:py-2xl">
  <div className="mx-auto max-w-container px-sm md:px-lg">
  <AnimateOnScroll>
  <div className="text-center max-w-[720px] mx-auto">
   <SectionEyebrow text="WHO WE SERVE IN NEVADA" />
   <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
   Financial Strategies for How Nevada Families Build, Protect, and Transfer Generational Wealth.
   </h2>
  </div>
  </AnimateOnScroll>

  <div className="mt-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
  {/* Card 1: Relocating Families */}
  <AnimateOnScroll delay={100}>
   <div className="bg-[#F7F4EE] border border-[rgba(10,22,40,0.06)] rounded-[4px] p-[32px] h-full flex flex-col">
   <MapPin className="w-[28px] h-[28px] text-[#1d7682] mb-[16px]" />
   <h3 className="font-serif text-h4 text-[#333333] mb-[12px]">
   California-to-Nevada Relocators
   </h3>
   <p className="font-sans text-body text-[#5b6a71] flex-1">
   Every year, thousands of high-net-worth families leave California for Nevada - and most face a critical 12-month window to restructure their financial lives. From converting California trusts into Nevada dynasty trusts to tax-efficient sequencing of stock exercises and asset sales, we help relocating families in Las Vegas, Henderson, Summerlin, and beyond capture Nevada's zero-income-tax advantage from day one. The decisions you make in the first year define your family's tax profile for decades and centuries through dynasty trusts.
   </p>
   <Link
   href="/services/tax-optimization"
   className="mt-[16px] font-sans text-body-sm font-semibold text-[#1d7682] hover:text-[#155f69] transition-colors flex items-center gap-[6px]"
   >
   Tax &amp; Estate Strategy <ArrowRight className="w-[14px] h-[14px]" />
   </Link>
   </div>
  </AnimateOnScroll>

  {/* Card 2: Business Owners */}
  <AnimateOnScroll delay={200}>
   <div className="bg-[#F7F4EE] border border-[rgba(10,22,40,0.06)] rounded-[4px] p-[32px] h-full flex flex-col">
   <Building className="w-[28px] h-[28px] text-[#1d7682] mb-[16px]" />
   <h3 className="font-serif text-h4 text-[#333333] mb-[12px]">
   Nevada Business Owners &amp; Entrepreneurs
   </h3>
   <p className="font-sans text-body text-[#5b6a71] flex-1">
   Nevada's business-friendly laws have attracted companies across technology, hospitality, entertainment, mining, and professional services - including major operations like Freeport-McMoRan and emerging advanced manufacturing hubs in the Tahoe-Reno Industrial Center and Apex Industrial Park. Business owners face complex needs around entity structuring, succession planning, and wealth preservation. Whether you're building toward an exit, scaling operations, or transferring ownership to the next generation, we provide coordinated exit planning, zero-income-tax entity structuring, and multi-generational dynasty trust design. Nevada's lack of state income tax makes it the ideal state for business owners who plan proactively.
   </p>
   <Link
   href="/services/business-owners"
   className="mt-[16px] font-sans text-body-sm font-semibold text-[#1d7682] hover:text-[#155f69] transition-colors flex items-center gap-[6px]"
   >
   Business Owner Services <ArrowRight className="w-[14px] h-[14px]" />
   </Link>
   </div>
  </AnimateOnScroll>

  {/* Card 3: Retirees */}
  <AnimateOnScroll delay={300}>
   <div className="bg-[#F7F4EE] border border-[rgba(10,22,40,0.06)] rounded-[4px] p-[32px] h-full flex flex-col">
   <Sun className="w-[28px] h-[28px] text-[#1d7682] mb-[16px]" />
   <h3 className="font-serif text-h4 text-[#333333] mb-[12px]">
   Retirees Building Their Nevada Legacy
   </h3>
   <p className="font-sans text-body text-[#5b6a71] flex-1">
   Nevada is the nation's most tax-efficient retirement destination. Zero state income tax on distributions, Social Security, pensions, and investment income creates extraordinary planning opportunities. We build distribution strategies that optimize withdrawal sequencing across IRAs, pensions, Roth conversions, and Social Security timing to maximize longevity across 25 to 35-year retirements. Combined with dynasty trusts, your Nevada retirement plan can transfer wealth to heirs for centuries. Your next chapter deserves to be structured for multi-generational impact.
   </p>
   <Link
   href="/services/financial-planning"
   className="mt-[16px] font-sans text-body-sm font-semibold text-[#1d7682] hover:text-[#155f69] transition-colors flex items-center gap-[6px]"
   >
   Financial Planning <ArrowRight className="w-[14px] h-[14px]" />
   </Link>
   </div>
  </AnimateOnScroll>

  {/* Card 4: Tech Executives & High-Income Professionals */}
  <AnimateOnScroll delay={400}>
   <div className="bg-[#F7F4EE] border border-[rgba(10,22,40,0.06)] rounded-[4px] p-[32px] h-full flex flex-col">
   <Briefcase className="w-[28px] h-[28px] text-[#1d7682] mb-[16px]" />
   <h3 className="font-serif text-h4 text-[#333333] mb-[12px]">
   Tech Executives &amp; High-Income Professionals
   </h3>
   <p className="font-sans text-body text-[#5b6a71] flex-1">
   Las Vegas is home to rising numbers of executives, entrepreneurs, and high-income professionals relocating from California. When you earn $500K to $5M+ annually, standard financial planning falls short. We design executive compensation strategies, equity grant optimization, stock option sequencing tied to relocation timing, and tax-efficient wealth transfer structures. Nevada's zero-income-tax environment is perfect for wealth concentrators and those planning multi-generational dynasties. Whether starting from scratch or refining an existing plan, we meet you where you are and build forward.
   </p>
   <Link
   href="/services/financial-planning"
   className="mt-[16px] font-sans text-body-sm font-semibold text-[#1d7682] hover:text-[#155f69] transition-colors flex items-center gap-[6px]"
   >
   Financial Planning <ArrowRight className="w-[14px] h-[14px]" />
   </Link>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ─── SECTION 5: NEVADA-SPECIFIC SERVICES ─── */}
 <section className="bg-[#F7F4EE] py-xl md:py-2xl">
  <div className="mx-auto max-w-container px-sm md:px-lg">
  <AnimateOnScroll>
  <SectionEyebrow text="WHAT WE DO IN NEVADA" />
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
  <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
   Wealth Management Built for Nevada's Extraordinary Advantages.
  </h2>
  </AnimateOnScroll>

  <div className="mt-xl space-y-[32px] max-w-[720px]">
  <AnimateOnScroll delay={100}>
   <div className="border-l-4 border-[#1d7682] pl-7">
   <h3 className="font-serif text-h4 text-[#333333] mb-[8px]">
   Employer-Specific Planning for Nevada Professionals
   </h3>
   <p className="font-sans text-body text-[#5b6a71]">
   Nevada is home to major employers including Banner Health, Freeport-McMoRan, and emerging advanced manufacturing and microchip hubs. We work with professionals from these and other major Nevada employers to optimize deferred compensation plans, pension strategies, and equity arrangements. For employees at Banner Health facilities across Nevada, and those in emerging advanced manufacturing sectors in the Tahoe-Reno Industrial Center and Apex Industrial Park near Las Vegas, we design specialized plans that leverage Nevada's zero state income tax on all forms of compensation. If you're relocating to work at a Nevada employer, we help coordinate your relocation strategy with your employer-specific benefits.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={150}>
   <div className="border-l-4 border-[#1d7682] pl-7">
   <h3 className="font-serif text-h4 text-[#333333] mb-[8px]">
   Interstate Tax Transition Planning
   </h3>
   <p className="font-sans text-body text-[#5b6a71]">
   California's &ldquo;closer connection&rdquo; test and sourced income rules make a clean residency break far more complicated than most families expect. We coordinate the timing of asset sales, stock option exercises, business exits, and deferred compensation distributions around your move date to minimize California exposure and capture Nevada's zero-income-tax advantage. Every aspect of the transition is documented to withstand Franchise Tax Board scrutiny - because the tax savings from relocating to Nevada are only real if they hold up under audit.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <div className="border-l-4 border-[#1d7682] pl-7">
   <h3 className="font-serif text-h4 text-[#333333] mb-[8px]">
   Nevada Dynasty Trust Creation &amp; Strategy
   </h3>
   <p className="font-sans text-body text-[#5b6a71]">
   Nevada allows perpetual dynasty trusts with no expiration date - meaning you can transfer wealth to your heirs for 1,000+ years completely free of state income tax and transfer taxes. Most states limit dynasty trusts to 21 years. This single feature creates generational wealth-building advantages that can preserve hundreds of millions across your family line. Jay Chang's clients have direct access to Farther's dedicated Trust &amp; Estate Planning team - ensuring your Nevada dynasty strategy is built and maintained by specialists who coordinate directly with your Nevada or California estate attorney to design structures that capture every advantage of Nevada's perpetual trust laws while integrating them into your broader{' '}
   <Link
    href="/services"
    className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors"
   >
    wealth management plan
   </Link>
   .
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={250}>
   <div className="border-l-4 border-[#1d7682] pl-7">
   <h3 className="font-serif text-h4 text-[#333333] mb-[8px]">
   Retirement Income Optimization
   </h3>
   <p className="font-sans text-body text-[#5b6a71]">
   Nevada's zero state income tax on retirement distributions creates the nation's most tax-efficient retirement environment. We design withdrawal sequencing strategies that coordinate IRA distributions, Roth conversions, and Social Security timing to minimize all taxes and extend portfolio longevity. For families planning 25 to 35-year retirements, an optimized distribution plan can save $500,000 to $2M+ in cumulative taxes compared to an unoptimized approach. Add Nevada dynasty trusts and you create a multi-generational wealth transfer vehicle that produces decades of tax-free income for your heirs.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
   <div className="border-l-4 border-[#1d7682] pl-7">
   <h3 className="font-serif text-h4 text-[#333333] mb-[8px]">
   Real Estate Portfolio Integration
   </h3>
   <p className="font-sans text-body text-[#5b6a71]">
   Many of our Nevada clients arrive with significant proceeds from a California home sale - often $1.5 million to $8 million or more. Deploying that capital strategically is critical. We evaluate 1031 exchange opportunities, analyze Nevada property tax implications, and integrate real estate holdings into your overall investment portfolio and dynasty trust structures. The goal is ensuring your real estate allocation complements, rather than dominates, your financial and estate plan.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={350}>
   <div className="border-l-4 border-[#1d7682] pl-7">
   <h3 className="font-serif text-h4 text-[#333333] mb-[8px]">
   Asset Protection Trust Strategy
   </h3>
   <p className="font-sans text-body text-[#5b6a71]">
   Nevada has some of the nation's strongest laws for creditor protection trusts and self-settled spendthrift trusts. Business owners, executives, and high-net-worth professionals can establish trusts that protect assets from future creditors, judgments, and liability claims. When combined with dynasty trust planning, asset protection trusts create a dual benefit: multi-generational wealth transfer AND lawsuit protection. We work with your Nevada or California attorney to implement these structures within your broader estate and wealth plan.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={400}>
   <div className="border-l-4 border-[#1d7682] pl-7">
   <h3 className="font-serif text-h4 text-[#333333] mb-[8px]">
   Business Formation &amp; Entity Strategy
   </h3>
   <p className="font-sans text-body text-[#5b6a71]">
   Nevada's zero state income tax, favorable LLC and holding company laws, and privacy-friendly regulations make it an ideal domicile for business entities and investment structures. Whether you're starting a new venture, re-domiciling an existing entity from California, or structuring a holding company for investment assets, we coordinate with your legal counsel to ensure your entity structure is optimized for both tax efficiency and asset protection. Learn more about our approach on the{' '}
   <Link
    href="/about"
    className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors"
   >
    About page
   </Link>
   .
   </p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ─── SECTION 6: COMMUNITIES ─── */}
 <section className="bg-[#FAFAF8] py-xl md:py-2xl">
  <div className="mx-auto max-w-container px-sm md:px-lg">
  <AnimateOnScroll>
  <SectionEyebrow text="COMMUNITIES WE SERVE" />
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
  <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
   Serving Families Across Southern Nevada.
  </h2>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
  <div className="mt-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
   {[
   {
   name: 'Las Vegas',
   descriptor: 'Metro center & urban living',
   },
   {
   name: 'Henderson',
   descriptor: 'Family-friendly neighborhoods',
   },
   {
   name: 'Summerlin',
   descriptor: 'Luxury master-planned community',
   },
   {
   name: 'The Ridges',
   descriptor: 'Ultra-luxury hilltop estates',
   },
   {
   name: 'MacDonald Highlands',
   descriptor: 'Exclusive gated community',
   },
   {
   name: 'Southern Highlands',
   descriptor: 'Contemporary estates',
   },
   {
   name: 'Lake Las Vegas',
   descriptor: 'Resort-style living',
   },
   {
   name: 'Boulder City',
   descriptor: 'Historic charm, natural beauty',
   },
   ].map((community) => (
   <div
   key={community.name}
   className="bg-[#F7F4EE] border border-[rgba(10,22,40,0.06)] rounded-[4px] p-[24px]"
   >
   <div className="flex items-center gap-[8px] mb-[6px]">
    <MapPin className="w-[16px] h-[16px] text-[#1d7682]" />
    <span className="font-sans text-body font-semibold text-[#333333]">
    {community.name}
    </span>
   </div>
   <p className="font-sans text-body-sm text-[#5b6a71]">
    {community.descriptor}
   </p>
   </div>
   ))}
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ─── SECTION 7: TESTIMONIAL ─── */}
 <section className="bg-[#F7F4EE] py-xl md:py-2xl">
  <div className="mx-auto max-w-container px-sm md:px-lg text-center">
  <AnimateOnScroll>
  <div className="max-w-[800px] mx-auto">
   <p className="font-serif text-[22px] md:text-[28px] leading-[1.5] text-[#333333] italic">
   &ldquo;We left Silicon Valley with a liquidity event and needed to completely rethink our wealth strategy. Tax was one thing - but they structured dynasty trusts that will benefit our grandkids and great-grandkids for centuries. Nevada changed our picture, and they showed us how to actually use it.&rdquo;
   </p>
   <p className="mt-lg font-sans text-body font-semibold text-[#333333]">
   - James &amp; Elena T., Summerlin, NV
   </p>
   <p className="mt-[4px] font-sans text-body-sm text-[#5b6a71]">
   Recently relocated from California, clients since 2024
   </p>
   <p className="mt-lg font-sans text-[11px] text-[#5b6a71] max-w-[600px] mx-auto">
   This testimonial reflects the individual experience of a current advisory client of Jay Chang at Farther Finance, Inc. It was provided voluntarily and without compensation. This client's experience may not be representative of other clients' experiences, and the testimonial does not constitute a guarantee of future performance or results. Individual outcomes depend on each client's specific financial circumstances, goals, and market conditions.
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ─── SECTION 8: FAQ ─── */}
 <section className="bg-[#F7F4EE] py-xl md:py-2xl">
  <div className="mx-auto max-w-container px-sm md:px-lg">
  <AnimateOnScroll>
  <SectionEyebrow text="FAQ" />
  <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
   Frequently Asked Questions About Wealth Management in Nevada
  </h2>
  </AnimateOnScroll>

  <div className="mt-xl max-w-content space-y-sm">
  <AnimateOnScroll delay={100}>
   <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
   <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
   <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
    What are Nevada dynasty trusts and why are they so powerful?
   </h3>
   <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <div className="px-md pb-md">
   <p className="font-sans text-body text-[#5b6a71]">
    Nevada dynasty trusts are perpetual trusts that can benefit your heirs for 1,000+ years - with no expiration date and no limit to how many generations can benefit. Unlike most states that end dynasty trusts after 21 years, Nevada allows true perpetuities. Combined with Nevada's spousal lifetime access trust (SLAT) rules and favorable trust tax treatment, dynasty trusts create unparalleled multi-generational wealth preservation. A $1 million contribution to a dynasty trust today could transfer $100+ million to your heirs over the centuries, entirely free of transfer taxes and state income tax.
   </p>
   </div>
   </details>
  </AnimateOnScroll>

  <AnimateOnScroll delay={150}>
   <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
   <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
   <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
    I'm moving from California to Nevada. How do I establish Nevada residency?
   </h3>
   <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <div className="px-md pb-md">
   <p className="font-sans text-body text-[#5b6a71]">
    Establishing Nevada residency requires more than purchasing a home in Las Vegas or Henderson. You need to obtain a Nevada driver's license, register to vote, transfer vehicle registrations, establish banking relationships, and update all financial accounts to your new Nevada address. The critical element is passing California's &ldquo;closer connection&rdquo; test, which evaluates where your strongest personal and economic ties exist. The Franchise Tax Board audits high-income departing residents aggressively, so thorough documentation from day one is essential for a clean break.
   </p>
   </div>
   </details>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
   <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
   <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
    Will California still tax me after I move to Nevada?
   </h3>
   <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <div className="px-md pb-md">
   <p className="font-sans text-body text-[#5b6a71]">
    Potentially, yes. California taxes &ldquo;sourced&rdquo; income regardless of where you live. This includes rental income from California properties, deferred compensation earned during your California residency, and capital gains from the sale of California-based businesses. Timing matters enormously - exercising stock options or selling a business before establishing Nevada residency can cost hundreds of thousands in unnecessary California taxes. We help you sequence these decisions to minimize exposure and protect your savings.
   </p>
   </div>
   </details>
  </AnimateOnScroll>

  <AnimateOnScroll delay={250}>
   <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
   <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
   <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
    Is Nevada a community property state?
   </h3>
   <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <div className="px-md pb-md">
   <p className="font-sans text-body text-[#5b6a71]">
    Yes. Nevada is one of nine community property states in the US, which means married couples can structure assets so that both spouses receive a full step-up in cost basis upon death - not just one. This single provision can save families hundreds of thousands in capital gains taxes. When combined with Nevada's dynasty trusts and lack of state income tax, the estate planning advantages are extraordinary.
   </p>
   </div>
   </details>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
   <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
   <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
   <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
    What areas of Nevada do you serve?
   </h3>
   <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <div className="px-md pb-md">
   <p className="font-sans text-body text-[#5b6a71]">
    We serve families and business owners throughout Southern Nevada, including Las Vegas, Henderson, Summerlin, The Ridges, MacDonald Highlands, Southern Highlands, Lake Las Vegas, and Boulder City. We also serve clients across Arizona, California, and Nevada through a combination of in-person meetings and our technology platform.
   </p>
   </div>
   </details>
  </AnimateOnScroll>

  <AnimateOnScroll delay={350}>
   <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
   <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
   <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
    Are you a fiduciary financial advisor in Nevada?
   </h3>
   <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <div className="px-md pb-md">
   <p className="font-sans text-body text-[#5b6a71]">
    We are a fiduciary, meaning we are held to a legal standard to put your interests first. Our advisory fee is based on a percentage of assets under management. For complete details on fees and compensation, please refer to our{' '}
    <Link
    href="/disclosures#fees"
    className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors"
    >
    Form ADV Part 2A
    </Link>
    .
   </p>
   </div>
   </details>
  </AnimateOnScroll>
  </div>

  <AnimateOnScroll delay={400}>
  <div className="mt-xl">
   <Link
   href="/services"
   className="font-sans text-body text-[#1d7682] hover:text-[#155f69] transition-colors flex items-center gap-[8px]"
   >
   We also serve families and business owners across Arizona and California{' '}
   <ArrowRight className="w-[16px] h-[16px]" />
   </Link>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ─── SECTION 9: OFFICE & MAP ─── */}
 <section className="bg-[#FAFAF8] py-xl md:py-2xl">
  <div className="mx-auto max-w-container px-sm md:px-lg">
  <AnimateOnScroll>
  <SectionEyebrow text="SERVING LAS VEGAS" />
  <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-4 text-center heading-accent-center">
   Serving Southern Nevada &amp; California-to-Nevada Relocators
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] mt-[48px]">
  {/* Map */}
  <AnimateOnScroll delay={100}>
   <div className="rounded-[8px] overflow-hidden border border-[#E8E6E1] shadow-sm h-[400px]">
   <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212699.36210872996!2d-115.13976384453783!3d36.16991344500508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36055ddb694e5c0d%3A0x86819f232e19b72!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1710000000000"
   width="100%"
   height="100%"
   style={{ border: 0 }}
   allowFullScreen
   loading="lazy"
   referrerPolicy="no-referrer-when-downgrade"
   title="Serving Las Vegas & Southern Nevada - Farther Wealth Management"
   />
   </div>
  </AnimateOnScroll>

  {/* Contact Info */}
  <AnimateOnScroll delay={200}>
   <div className="flex flex-col justify-center">
   <h3 className="font-serif text-[24px] font-semibold text-[#333333] mb-[24px]">
   Serving Southern Nevada
   </h3>

   <div className="space-y-[16px]">
   <div>
    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-[4px]">Service Areas</p>
    <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.7]">
    Las Vegas &middot; Henderson &middot; Summerlin &middot; The Ridges &middot; MacDonald Highlands &middot; Southern Highlands &middot; Lake Las Vegas &middot; Boulder City
    </p>
   </div>
   <div>
    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-[4px]">Appointment Options</p>
    <p className="font-sans text-[15px] text-[#5b6a71]">
    In-person meetings available in Las Vegas, or virtual via our technology platform
    </p>
   </div>
   </div>

   <div className="mt-[32px]">
   <Button variant="primary" href="/schedule-consultation">
    Schedule a Conversation
   </Button>
   </div>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ─── SECTION 10: CTA ─── */}
 <section className="bg-[#333333] py-xl md:py-2xl">
  <div className="mx-auto max-w-container px-sm md:px-lg text-center">
  <AnimateOnScroll>
  <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.15] text-[#F7F4EE] max-w-[720px] mx-auto">
   Nevada Is Tax-Free. Dynasty Trusts Are Forever. Your Wealth Plan Should Reflect Both.
  </h2>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
  <p className="mt-md font-sans text-body-lg text-[#b6d0ed] max-w-[600px] mx-auto">
   Whether you just arrived in Las Vegas, you're planning a move from California, or
   you've been a Nevada resident for years - a conversation with our team can reveal
   opportunities your current plan may be missing. Zero income tax and dynasty trusts are
   uniquely powerful when intentionally integrated.
  </p>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
  <div className="mt-lg">
   <Button href="/schedule-consultation" variant="primary">
   Begin a Confidential Conversation
   </Button>
  </div>
  </AnimateOnScroll>

  </div>
 </section>
 </>
 )
}
