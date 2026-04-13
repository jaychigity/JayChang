import type { Metadata } from 'next'
import Link from 'next/link'
import {
 Building,
 Users,
 Shield,
 MapPin,
 ChevronDown,
 ArrowRight,
 Briefcase,
 Home,
} from 'lucide-react'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'

export const metadata: Metadata = {
 title: 'Wealth Management in California | Financial Advisor for Tech Executives & Entrepreneurs',
 description:
 'Personalized wealth management for California families, tech executives, and entrepreneurs with $2M-$20M. Serving Los Angeles, San Francisco, Silicon Valley, and Newport Beach. Advisor Jay.',
 alternates: { canonical: 'https://www.PWM-Farther.com/california' },
 openGraph: {
 title: 'California Wealth Management | Advisor Jay',
 description:
 'Financial planning, tax optimization, and equity compensation strategy for California tech executives, startup founders, and high-earning professionals with $2M-$20M in investable assets.',
 url: 'https://www.PWM-Farther.com/california',
 },
 other: {
 'geo.region': 'US-CA',
 'geo.placename': 'Los Angeles',
 },
}

const financialServiceSchema = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Advisor Jay - California',
 description:
 'Personalized wealth management for California families and professionals with $2M-$20M in investable assets. Financial planning, investment management, tax strategy, equity compensation planning, and business exit strategy.',
 url: 'https://www.PWM-Farther.com/california',
 telephone: '+1-480-944-0880',
 geo: {
 '@type': 'GeoCoordinates',
 latitude: 34.0522,
 longitude: -118.2437,
 },
 areaServed: [
 { '@type': 'City', name: 'Los Angeles' },
 { '@type': 'City', name: 'San Francisco' },
 { '@type': 'City', name: 'Silicon Valley' },
 { '@type': 'City', name: 'Palo Alto' },
 { '@type': 'City', name: 'Newport Beach' },
 { '@type': 'City', name: 'Atherton' },
 { '@type': 'City', name: 'Beverly Hills' },
 { '@type': 'City', name: 'San Diego' },
 ],
 openingHoursSpecification: {
 '@type': 'OpeningHoursSpecification',
 dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
 opens: '08:00',
 closes: '17:00',
 },
 serviceType: 'Wealth Management',
 provider: {
 '@type': 'Organization',
 name: 'Farther',
 url: 'https://www.PWM-Farther.com',
 },
}

const faqSchema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'What areas of California do you serve?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'We serve families and professionals throughout California, including Los Angeles, San Francisco, Silicon Valley (Palo Alto, Menlo Park, Atherton), Newport Beach, Beverly Hills, Malibu, Santa Barbara, San Diego, and Pasadena. Our services are delivered through a combination of in-person meetings and secure digital collaboration, so geography is never a barrier to exceptional planning regardless of where in California you live.',
 },
 },
 {
 '@type': 'Question',
 name: 'How does California\'s high state income tax affect my wealth strategy?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'California\'s top marginal state income tax rate of 13.3% is among the highest in the nation, making tax optimization critical. This affects everything from retirement account strategy to business entity structuring to the timing of capital gains realization. For high-earning executives and entrepreneurs, effective tax planning can recover hundreds of thousands of dollars over a career. Our wealth strategies are purpose-built around California\'s unique tax landscape.',
 },
 },
 {
 '@type': 'Question',
 name: 'I have RSUs and stock options. What\'s the tax strategy?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Tech equity compensation - RSUs, ISOs, NSOs - comes with complex tax implications that vary based on the type of grant, exercise timing, and California\'s treatment of these assets. We build systematic diversification strategies that balance tax efficiency with concentration risk reduction. This includes advice on exercise timing, net settlement strategies, 10b5-1 plans, and coordinating with your company\'s equity plan rules. The stakes are too high for generic advice.',
 },
 },
 {
 '@type': 'Question',
 name: 'Should I consider relocating to Nevada for tax reasons?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'For some high-earning professionals, a Nevada relocation can create meaningful tax savings - Nevada has no state income tax while California taxes worldwide income. However, tax residency is complex and requires careful documentation of your intent and actions. We help clients evaluate whether relocation makes sense based on their specific situation, expected retirement timeline, and personal/family considerations. It\'s not right for everyone, but for some clients, it\'s transformational.',
 },
 },
 {
 '@type': 'Question',
 name: 'Is Jay Chang a fiduciary financial advisor in California?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'We are a fiduciary, meaning we are held to a legal standard to put your interests first. Our advisory fee is based on a percentage of assets under management. For complete details on fees and compensation, please refer to our Form ADV Part 2A.',
 },
 },
 ],
}

const stats = [
 { value: '$5.2T', description: 'California\'s gross state product - largest state economy' },
 { value: '185', description: 'Billionaires in California, more than any other state' },
 { value: '13.3%', description: 'California\'s top marginal state income tax rate' },
 { value: '#1', description: 'Global center for technology and entertainment wealth' },
]

const clientCards = [
 {
 icon: Briefcase,
 title: 'Silicon Valley Tech Executives',
 body: 'If you\'re navigating equity compensation - RSUs, ISOs, NSOs - at companies like Intel (Santa Clara & Folsom), NVIDIA (Santa Clara headquarters and Endeavor/Voyager campuses), Apple (Cupertino), Microchip (Roseville, San Jose, Orange County, San Diego, Irvine), or other FAANG and scaling startups, you face a unique set of planning challenges. How do you diversify concentrated positions without triggering massive tax events? How do you manage the timing of RSU vesting alongside California\'s 13.3% state tax? How do you structure your financial life for the post-exit phase? We build strategies around the actual mechanics of tech equity across California locations, not generic portfolio advice.',
 link: { text: 'Learn about our financial planning', href: '/services/financial-planning' },
 },
 {
 icon: Building,
 title: 'California Startup Founders & Entrepreneurs',
 body: 'You\'ve built something meaningful in California\'s entrepreneurial ecosystem. Now comes the hard part: scaling the business, managing illiquid equity stakes, and planning for a potential liquidity event that could reshape your financial life. We help founders with pre-exit tax positioning, entity structuring, personal wealth diversification while still holding significant company stakes, and the post-acquisition transition. When the time comes to exit, you keep more of what you\'ve built.',
 link: { text: 'Learn about our business owner services', href: '/services/business-owners' },
 },
 {
 icon: Home,
 title: 'California Families Building Lasting Wealth',
 body: 'From Palo Alto to Malibu, California families with $2M-$20M in investable assets face distinctly California planning challenges. How do you navigate the state\'s high income tax without relocating? How do you manage real estate portfolios in expensive markets? How do you structure an estate plan that accounts for California\'s community property status? We answer these questions with strategies tailored to your family\'s actual circumstances.',
 link: { text: 'Learn about our tax & estate strategy', href: '/services/tax-optimization' },
 },
]

const services = [
 {
 title: 'Tech Equity Compensation & Diversification',
 body: 'RSUs, ISOs, NSOs, and concentrated founder equity represent the majority of wealth for many California professionals - and they\'re among the most tax-inefficient assets to hold. We design systematic diversification strategies that account for vesting schedules, blackout periods, 10b5-1 plan mechanics, and the tax consequences of exercise and sale timing. Our expertise spans major California employers including Intel, NVIDIA, Apple, Microchip, and others - we understand the specific equity plans, tax implications, and relocation considerations at each company. For executives at public companies, we coordinate with your company\'s equity plan rules. For startup founders, we balance diversification with your commitment to the company. The goal is reducing concentration risk without creating preventable tax liability.',
 },
 {
 title: 'California Tax Optimization & Income Planning',
 body: 'California\'s 13.3% top state income tax rate - combined with federal tax - creates a 37-54% marginal rate for high-income professionals. This dramatically changes the math for retirement planning, investment strategy, charitable giving, and business entity selection. We work with your CPA to structure your income timing, maximize tax-advantaged retirement contributions, optimize the interaction between state and federal tax rules, and identify opportunities (like charitable remainder trusts or donor-advised funds) to offset the state tax burden.',
 },
 {
 title: 'California-to-Nevada Relocation Strategy',
 body: 'For some high-earning professionals and retirees, relocating to Nevada can create transformational tax savings - Nevada has no state income tax. However, tax residency is complex. It\'s not enough to move; you must establish genuine intent and change your domicile through concrete actions. We help clients evaluate whether relocation makes sense based on their timeline, tax exposure, and personal circumstances. We coordinate with your CPA and tax attorney to ensure the transition is structurally sound. For the right client, this single strategy saves hundreds of thousands of dollars.',
 },
 {
 title: 'Real Estate & Property Portfolio Management',
 body: 'California real estate is both an asset class and a concentration risk - often 30-40% of a family\'s net worth in one of the most expensive markets in the country. We help with 1031 exchange strategy to defer capital gains across property transitions, property tax planning within California\'s Prop 13/Prop 19 framework, integration of rental income into your retirement plan, liquidity planning for illiquid real estate holdings, and coordination with your overall investment strategy.',
 },
 {
 title: 'Business Exit & Succession Planning',
 body: 'Whether you\'re preparing for an acquisition, a secondary sale, or a generational transfer of a California business, the twelve to twenty-four months before close are critical for tax positioning. We work with your CPA, tax attorney, and transaction advisors to structure the exit to minimize California\'s top capital gains rates and federal tax, maximize after-tax proceeds, and plan your post-exit financial transition. For founders considering relocation post-exit, we address the timing and structure carefully.',
 },
 {
 title: 'Charitable Giving & Philanthropic Planning',
 body: 'California\'s high tax rates make charitable giving especially effective - and especially important to structure well. We help donors use charitable remainder trusts, donor-advised funds, charitable lead trusts, and direct gifts to reduce income and estate tax exposure while creating meaningful philanthropic impact. For entrepreneurs and executives with concentrated positions, charitable giving can be part of your diversification strategy. We coordinate with your tax and legal advisors to maximize your charitable impact while minimizing tax burden.',
 },
]

const communities = [
 { name: 'Los Angeles', descriptor: 'Entertainment wealth, real estate, executives' },
 { name: 'Silicon Valley', descriptor: 'Tech innovation hub, startup founders, public company executives' },
 { name: 'Palo Alto', descriptor: 'VC ecosystem, high-net-worth families, tech leadership' },
 { name: 'San Francisco', descriptor: 'Finance and tech hub, Bay Area wealth center' },
 { name: 'Newport Beach', descriptor: 'Orange County wealth, entrepreneurial families' },
 { name: 'Atherton', descriptor: 'Venture capital hub, billionaire enclave' },
 { name: 'Beverly Hills', descriptor: 'Entertainment industry, luxury real estate' },
 { name: 'Malibu', descriptor: 'Coastal wealth, entertainment professionals' },
 { name: 'Santa Barbara', descriptor: 'Established families, lifestyle wealth' },
 { name: 'Pasadena', descriptor: 'Rose Bowl area, professional families' },
 { name: 'Menlo Park', descriptor: 'Venture capital epicenter, tech wealth' },
 { name: 'San Diego', descriptor: 'Biotech hub, military wealth, professionals' },
]

export default function CaliforniaPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'California', href: '/california' }]} />
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
 <section className="relative bg-[#333333] flex items-center py-10 md:py-20">
  <Image
  src="/Photos/california-professional.png"
  alt="California landscape - wealth management for Los Angeles, Silicon Valley, and San Francisco families"
  title="California - Advisor Jay"
  fill
  className="object-cover opacity-20"
  priority
  sizes="100vw"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/90 to-[#333333]/40" />
  <div className="relative z-10 w-full px-[20px] md:px-[80px]">
  <div className="max-w-[620px]">
  <AnimateOnScroll>
   <SectionEyebrow text="CALIFORNIA" light />
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <h1 className="font-serif text-[34px] md:text-[52px] font-bold text-[#F7F4EE] mt-5 leading-[1.15]">
   Wealth Management for California Families and Professionals.
   </h1>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <p className="font-sans text-[19px] text-[#F7F4EE]/90 mt-5 max-w-[540px] leading-relaxed">
   Personalized financial planning for tech executives, entrepreneurs, and established
   families navigating California's tax landscape and investment opportunities.
   Serving Los Angeles, San Francisco, Silicon Valley, and the entire state with $2M-$20M
   in investable assets.
   </p>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
   <div className="mt-8">
   <Button href="/schedule-consultation" variant="primary">
   Begin a Confidential Conversation
   </Button>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ─── SECTION 2: CALIFORNIA MARKET CONTEXT ─── */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-container mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-start">
  {/* Left column: text */}
  <div>
   <AnimateOnScroll>
   <SectionEyebrow text="THE CALIFORNIA LANDSCAPE" />
   </AnimateOnScroll>

   <AnimateOnScroll delay={100}>
   <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 mb-6">
   The World's Largest Concentration of Wealth, With Equally Complex Tax Rules.
   </h2>
   </AnimateOnScroll>

   <AnimateOnScroll delay={200}>
   <div className="font-sans text-base text-[#333333] leading-[1.7] space-y-5">
   <p>
    California is not just wealthy. It is a global center of wealth creation. With 185 billionaires,
    a gross state product of $5.2 trillion, and unmatched ecosystems for technology, entertainment,
    and entrepreneurship, California has become synonymous with high-net-worth success. From tech
    executives and startup founders in Silicon Valley to entertainment professionals in Los Angeles to
    real estate investors across the state, California creates wealth at a scale matched by no other
    region.
   </p>
   <p>
    But California wealth comes with a cost: a 13.3% top state income tax rate that combines with
    federal taxes to create a 37-54% marginal tax burden for high-income professionals. For tech
    executives with vesting RSUs, founders with concentrated stock, or any high-earner in the state,
    California's tax regime fundamentally changes the math for financial planning, diversification,
    and wealth transfer.
   </p>
   <p>
    That's where we come in. We help California wealth creators navigate this unique landscape - 
    maximizing after-tax wealth, optimizing equity compensation, planning for potential relocation,
    and building strategies that account for California's specific rules while preserving your
    upside. Real wealth planning for California isn't one-size-fits-all.
   </p>
   </div>
   </AnimateOnScroll>
  </div>

  {/* Right column: photo + stats */}
  <div className="space-y-6">
   <AnimateOnScroll delay={200}>
   <div className="rounded-[16px] overflow-hidden relative">
   <Image
    src="/Photos/couple-reviewing-strategy.png"
    alt="California couple reviewing a personalized wealth management strategy with their financial advisor"
    width={2048}
    height={2730}
    className="w-full h-auto"
   />
   </div>
   </AnimateOnScroll>

   <AnimateOnScroll delay={300}>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[16px] p-12 shadow-[0_8px_32px_rgba(27,42,74,0.06)]">
   {stats.map((stat, index) => (
    <div
    key={stat.value}
    className={`py-6 ${index < stats.length - 1 ? 'border-b border-[#E8E6E1]' : ''}`}
    >
    <div className="font-serif text-[44px] font-bold text-[#1d7682]">
    {stat.value}
    </div>
    <div className="font-sans text-sm text-[#333333]">{stat.description}</div>
    </div>
   ))}
   </div>
   </AnimateOnScroll>
  </div>
  </div>
  </div>
 </section>

 {/* ─── SECTION 3: WHO WE SERVE ─── */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-container mx-auto">
  <div className="text-center mb-[48px]">
  <AnimateOnScroll>
   <SectionEyebrow text="WHO WE SERVE IN CALIFORNIA" />
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 max-w-[720px] mx-auto">
   Financial Strategies Built for How California Builds Wealth.
   </h2>
  </AnimateOnScroll>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {clientCards.map((card, index) => (
   <AnimateOnScroll key={card.title} delay={200 + index * 100}>
   <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[16px] p-[48px_36px] h-full hover:shadow-card-hover hover:border-[#1d7682] hover:border-t-[3px] transition-all duration-200">
   <card.icon className="w-[48px] h-[48px] text-[#1d7682] mb-6" />
   <h3 className="font-serif text-[24px] font-semibold text-[#333333]">
    {card.title}
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
    {card.body}
   </p>
   <Link
    href={card.link.href}
    className="inline-block font-sans text-sm font-semibold text-[#333333] hover:text-[#1d7682] transition-colors mt-5"
   >
    {card.link.text} <ArrowRight className="inline w-4 h-4 ml-1" />
   </Link>
   </div>
   </AnimateOnScroll>
  ))}
  </div>
  </div>
 </section>

 {/* ─── SECTION 4: CALIFORNIA-SPECIFIC SERVICES ─── */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll>
  <SectionEyebrow text="WHAT WE DO IN CALIFORNIA" />
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
  <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 mb-12">
   Wealth Management Built for California's Unique Landscape.
  </h2>
  </AnimateOnScroll>

  <div className="max-w-[720px]">
  {services.map((service, index) => (
   <AnimateOnScroll key={service.title} delay={200 + index * 80}>
   <div className="border-l-4 border-[#1d7682] pl-7 mb-12">
   <h3 className="font-serif text-[24px] font-semibold text-[#333333]">
    {service.title}
   </h3>
   <p className="font-sans text-base text-[#333333] leading-[1.7] mt-3">
    {service.body}
   </p>
   </div>
   </AnimateOnScroll>
  ))}
  </div>

  <AnimateOnScroll delay={700}>
  <p className="font-sans text-base text-[#5b6a71] mt-4 max-w-[720px]">
   Explore our full{' '}
   <Link
   href="/services"
   className="text-[#1d7682] hover:text-[#155f69] transition-colors font-semibold"
   >
   service offerings
   </Link>{' '}
   or{' '}
   <Link
   href="/about"
   className="text-[#1d7682] hover:text-[#155f69] transition-colors font-semibold"
   >
   learn about our team
   </Link>
   .
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ─── SECTION 5: COMMUNITIES ─── */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-container mx-auto">
  <div className="text-center mb-[48px]">
  <AnimateOnScroll>
   <SectionEyebrow text="COMMUNITIES WE SERVE" />
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
   From Silicon Valley to the Coast.
   </h2>
  </AnimateOnScroll>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {communities.map((community, index) => (
   <AnimateOnScroll key={community.name} delay={200 + index * 75}>
   <div className="bg-[#F7F4EE] rounded-[12px] p-7">
   <div className="font-serif text-[20px] font-semibold text-[#333333]">
    {community.name}
   </div>
   <div className="font-sans text-caption text-[#5b6a71] mt-1">
    {community.descriptor}
   </div>
   </div>
   </AnimateOnScroll>
  ))}
  </div>
  </div>
 </section>

 {/* ─── SECTION 6: TESTIMONIAL ─── */}
 <section className="bg-[#FAFAF8] section-padding text-center">
  <div className="max-w-[900px] mx-auto">
  <AnimateOnScroll>
  <SectionEyebrow text="CLIENT PERSPECTIVE" />
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
  <div className="font-serif text-[120px] text-[#1d7682]/15 leading-none mt-4">
   &ldquo;
  </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
  <blockquote className="font-serif text-[24px] font-normal italic text-[#333333] leading-relaxed max-w-[760px] mx-auto -mt-12">
   I had significant RSU holdings at a major tech company and was paying astronomical taxes
   without any real plan. They didn't just optimize my diversification strategy - they
   helped me understand how to navigate California's tax system while building real
   wealth. The combination of tax planning and investment management actually made a difference
   to my bottom line.
  </blockquote>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
  <p className="font-sans text-sm font-medium text-[#5b6a71] mt-8">
   - Michael T., Palo Alto, CA
  </p>
  <p className="font-sans text-caption text-[#5b6a71] mt-1">
   Tech executive, client since 2025
  </p>
  </AnimateOnScroll>

  <AnimateOnScroll delay={400}>
  <p className="font-sans text-legal text-[#5b6a71]/60 mt-4 max-w-[600px] mx-auto">
   This testimonial reflects the individual experience of a current advisory client of
   Jay Chang at Farther Finance, Inc. It was provided voluntarily and without
   compensation. This client's experience may not be representative of other
   clients' experiences, and the testimonial does not constitute a guarantee of
   future performance or results. Individual outcomes depend on each client's
   specific financial circumstances, goals, and market conditions.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ─── SECTION 7: FAQ ─── */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll>
  <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] text-center mb-12">
   Frequently Asked Questions
  </h2>
  </AnimateOnScroll>

  <div className="max-w-[800px] mx-auto">
  <AnimateOnScroll delay={100}>
   <details className="border-b border-[#E8E6E1] group">
   <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
   What areas of California do you serve?
   <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
   </summary>
   <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
   We serve families and professionals throughout California, including Los Angeles,
   San Francisco, Silicon Valley (Palo Alto, Menlo Park, Atherton), Newport Beach,
   Beverly Hills, Malibu, Santa Barbara, San Diego, and Pasadena. Our services are delivered
   through a combination of in-person meetings and secure digital collaboration, ensuring that
   geography is never a barrier to exceptional planning regardless of where in California you live.
   </div>
   </details>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <details className="border-b border-[#E8E6E1] group">
   <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
   How does California's high state income tax affect my wealth strategy?
   <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
   </summary>
   <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
   California's top marginal state income tax rate of 13.3% is among the highest in
   the nation, making tax optimization critical. This affects everything from retirement account
   strategy to business entity structuring to the timing of capital gains realization. For high-earning
   executives and entrepreneurs, effective tax planning can recover hundreds of thousands of dollars
   over a career. Our wealth strategies are purpose-built around California's unique tax landscape.
   </div>
   </details>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
   <details className="border-b border-[#E8E6E1] group">
   <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
   I have RSUs and stock options. What's the tax strategy?
   <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
   </summary>
   <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
   Tech equity compensation - RSUs, ISOs, NSOs - comes with complex tax implications that
   vary based on the type of grant, exercise timing, and California's treatment of these
   assets. We build systematic diversification strategies that balance tax efficiency with concentration
   risk reduction. This includes advice on exercise timing, net settlement strategies, 10b5-1 plans,
   and coordinating with your company's equity plan rules. The stakes are too high for generic advice.
   </div>
   </details>
  </AnimateOnScroll>

  <AnimateOnScroll delay={400}>
   <details className="border-b border-[#E8E6E1] group">
   <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
   Should I consider relocating to Nevada for tax reasons?
   <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
   </summary>
   <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
   For some high-earning professionals, a Nevada relocation can create meaningful tax savings - Nevada
   has no state income tax while California taxes worldwide income. However, tax residency is complex
   and requires careful documentation of your intent and actions. We help clients evaluate whether
   relocation makes sense based on their specific situation, expected retirement timeline, and
   personal/family considerations. It's not right for everyone, but for some clients, it's transformational.
   </div>
   </details>
  </AnimateOnScroll>

  <AnimateOnScroll delay={500}>
   <details className="border-b border-[#E8E6E1] group">
   <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
   Is Jay Chang a fiduciary financial advisor in California?
   <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
   </summary>
   <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
   We are a fiduciary, meaning we are held to a legal standard to put your
   interests first. Our advisory fee is based on a percentage of assets under
   management. For complete details on fees and compensation, please refer to
   our{' '}
   <Link
    href="/disclosures#fees"
    className="text-[#1d7682] hover:text-[#155f69] transition-colors"
   >
    Form ADV Part 2A
   </Link>
   .
   </div>
   </details>
  </AnimateOnScroll>
  </div>

  <AnimateOnScroll delay={500}>
  <p className="font-sans text-base text-[#5b6a71] text-center mt-12">
   We also serve families and professionals in{' '}
   <Link
   href="/las-vegas"
   className="text-[#1d7682] hover:text-[#155f69] transition-colors font-semibold"
   >
   Las Vegas, Nevada <ArrowRight className="inline w-4 h-4 ml-1" />
   </Link>
   {' '}and{' '}
   <Link
   href="/scottsdale"
   className="text-[#1d7682] hover:text-[#155f69] transition-colors font-semibold"
   >
   Scottsdale, Arizona <ArrowRight className="inline w-4 h-4 ml-1" />
   </Link>
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ─── SECTION 8: OFFICE & MAP ─── */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll>
  <SectionEyebrow text="OUR CALIFORNIA OFFICE" />
  <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-4 text-center heading-accent-center">
   Serving California Across Los Angeles, San Francisco, and Beyond
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
  {/* Map */}
  <AnimateOnScroll delay={100}>
   <div className="rounded-[8px] overflow-hidden border border-[#E8E6E1] shadow-sm h-[400px]">
   <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.7490532190943!2d-118.24368932345093!3d34.05223397330919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b35b3f3f3f3d%3A0x1234567890abcdef!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1710000000000"
   width="100%"
   height="100%"
   style={{ border: 0 }}
   allowFullScreen
   loading="lazy"
   referrerPolicy="no-referrer-when-downgrade"
   title="Farther Wealth Management - California service area"
   />
   </div>
  </AnimateOnScroll>

  {/* Contact Info */}
  <AnimateOnScroll delay={200}>
   <div className="flex flex-col justify-center">
   <h3 className="font-serif text-[24px] font-semibold text-[#333333] mb-6">
   California Service Areas
   </h3>

   <div className="space-y-4">
   <div>
    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-1">Hours</p>
    <p className="font-sans text-[17px] text-[#333333]">Monday - Friday: 8:00 AM - 5:00 PM</p>
    <p className="font-sans text-[15px] text-[#5b6a71]">Evenings &amp; weekends by appointment</p>
   </div>
   <div>
    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-1">Service Areas</p>
    <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.7]">
    Los Angeles &middot; San Francisco &middot; Silicon Valley &middot; Palo Alto &middot; Newport Beach &middot; Beverly Hills &middot; Malibu &middot; San Diego &middot; Santa Barbara &middot; Pasadena
    </p>
   </div>
   <div>
    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-1">Mailing Address</p>
    <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.7]">
    Farther<br />
    345 California Street, Suite 600<br />
    San Francisco, CA 94104
    </p>
   </div>
   </div>

   <div className="mt-8">
   <Button variant="primary" href="/schedule-consultation">
    Schedule a Conversation
   </Button>
   </div>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ─── SECTION 9: CTA ─── */}
 <section className="bg-[#333333] section-padding text-center">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll>
  <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE] max-w-[800px] mx-auto leading-[1.2]">
   California Wealth Demands California Expertise. Let's Build the Strategy It Deserves.
  </h2>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
  <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[620px] mx-auto mt-5 leading-relaxed">
   Whether you're a tech executive navigating equity compensation, a startup founder
   planning for liquidity, or an established family managing California real estate and high
   income taxes, we'd welcome the conversation. No obligation, no sales pitch - just a
   thoughtful discussion about what your financial life could look like with real expertise
   behind it.
  </p>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
  <div className="mt-8">
   <Button href="/schedule-consultation" variant="primary">
   Begin a Confidential Conversation
   </Button>
  </div>
  </AnimateOnScroll>


  <AnimateOnScroll delay={400}>
  <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
   <Link
   href="/services"
   className="font-sans text-sm text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors"
   >
   Our Services
   </Link>
   <Link
   href="/about"
   className="font-sans text-sm text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors"
   >
   About Your Advisor
   </Link>
   <Link
   href="/insights"
   className="font-sans text-sm text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors"
   >
   Insights
   </Link>
  </div>
  </AnimateOnScroll>
  </div>
 </section>
 </>
 )
}
