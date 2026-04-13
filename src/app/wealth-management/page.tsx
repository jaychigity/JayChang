import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import CountUp from '@/components/CountUp'
import { FartherIcon } from '@/components/FartherLogo'
import Image from 'next/image'
import {
 TrendingUp,
 BarChart3,
 Shield,
 FileText,
 Users,
 Heart,
 ArrowRight,
 CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
 title: 'Wealth Management Services | Farther Personal Wealth',
 description:
 'Comprehensive wealth management for families with $2M-$20M in investable assets. Investment management, financial planning, tax optimization, estate planning, and more.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/wealth-management',
 },
 openGraph: {
 title: 'Wealth Management Services | Farther Personal Wealth',
 description:
 'Comprehensive wealth management for families with $2M-$20M in investable assets.',
 url: 'https://www.PWM-Farther.com/wealth-management',
 type: 'website',
 },
}

const services = [
 {
 icon: TrendingUp,
 title: 'Investment Management',
 description:
 'Institutional-grade portfolio construction with direct indexing, tax-loss harvesting, and access to alternatives - tailored to your risk profile and goals.',
 href: '/services#investment-management',
 },
 {
 icon: BarChart3,
 title: 'Financial Planning',
 description:
 'Advanced planning technology that models scenarios across a wide range of market conditions. Retirement, education, liquidity events - all modeled with precision.',
 href: '/services#financial-planning',
 },
 {
 icon: Shield,
 title: 'Tax Optimization',
 description:
 'Year-round tax-loss harvesting, asset location strategy, Roth conversion analysis, and charitable giving optimization to minimize your lifetime tax burden.',
 href: '/services#tax-estate',
 },
 {
 icon: FileText,
 title: 'Estate Planning',
 description:
 'Coordinated wealth transfer strategies including trust structuring, beneficiary optimization, and multi-generational planning aligned with your family values.',
 href: '/services#tax-estate',
 },
 {
 icon: Users,
 title: 'Family Office Services',
 description:
 'Concierge-level coordination across your entire financial life - from bill pay and insurance review to entity management and vendor oversight.',
 href: '/services#business-owners',
 },
 {
 icon: Heart,
 title: 'Philanthropy Planning',
 description:
 'Donor-advised funds, charitable trusts, and giving strategies that maximize impact while creating meaningful tax advantages for your family.',
 href: '/services#financial-planning',
 },
]

const differentiators = [
 {
 stat: '$15',
 suffix: 'B+',
 label: 'Firm-Wide AUM',
 description:
 'Backed by an institutional-grade wealth management platform - your portfolio benefits from institutional access and scale.',
 },
 {
 stat: 'MORE',
 suffix: '',
 label: 'Advisor Time on You',
 description:
 "Farther's technology handles operations so your advisor can focus on what matters - you.",
 },
 {
 stat: 'ADVANCED',
 suffix: '',
 label: 'Analytics Platform',
 description:
 'Personalized investment proposals generated and modeled across a range of market scenarios.',
 },
]

export default function WealthManagementPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Wealth Management', href: '/wealth-management' }]} />
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Farther - Jay Chang',
  description:
   'Comprehensive wealth management services for high-net-worth families with $2M-$20M in investable assets.',
  url: 'https://www.PWM-Farther.com/wealth-management',
  areaServed: [
   { '@type': 'City', name: 'Scottsdale', addressRegion: 'AZ' },
   { '@type': 'City', name: 'Tempe', addressRegion: 'AZ' },
   { '@type': 'State', name: 'Arizona' },
   { '@type': 'State', name: 'California' },
   { '@type': 'State', name: 'Nevada' },
  ],
  serviceType: [
   'Investment Management',
   'Financial Planning',
   'Tax Optimization',
   'Estate Planning',
   'Family Office Services',
   'Philanthropy Planning',
  ],
  }),
  }}
 />

 {/* Hero */}
 <section className="relative bg-[#333333] pt-10 lg:pt-20 pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
  <Image
  src="/Photos/couple-planning-office.png"
  alt="Wealth management planning"
  fill
  className="object-cover opacity-20"
  priority
  sizes="100vw"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/90 to-[#333333]/40" />
  <div className="relative z-10 max-w-4xl mx-auto text-center">
  <SectionEyebrow text="WEALTH MANAGEMENT" />
  <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#F7F4EE] leading-[1.15] mt-4">
  Comprehensive Wealth Management,
  <br className="hidden md:inline" /> Redefined.
  </h1>
  <p className="font-sans text-body-lg text-[#b6d0ed] max-w-[680px] mx-auto mt-6 leading-relaxed">
  For families with $2M-$20M in investable assets, Farther delivers
  the sophistication of a top-tier institution with the personal
  attention of a boutique firm - powered by technology that puts you in
  control.
  </p>
  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
  <Button href="/schedule-consultation" variant="primary">
   Schedule a Conversation
  </Button>
  <Button href="/services" variant="outline">
   Explore Our Services
  </Button>
  </div>
  </div>
 </section>

 {/* Philosophy */}
 <section className="bg-[#F7F4EE] bg-texture-light py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
  <AnimateOnScroll>
  <div className="max-w-[720px] mx-auto text-center">
   <SectionEyebrow text="OUR PHILOSOPHY" />
   <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-6">
   Your Wealth Deserves More Than a Template.
   </h2>
   <p className="font-sans text-[17px] text-[#333333] leading-relaxed mt-6">
   Every family&apos;s financial picture is different. That&apos;s
   why we start every relationship with a deep understanding of your
   goals, concerns, and values - then build a strategy that reflects
   the complexity of your actual life, not a generic model.
   </p>
   <p className="font-sans text-[17px] text-[#5b6a71] leading-relaxed mt-4">
   Our approach integrates investment management, tax planning,
   estate strategy, and risk management into one coordinated plan - 
   managed by a dedicated advisor who knows your name, your family,
   and your aspirations.
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Services Grid */}
 <section className="bg-[#FAFAF8] py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
  <div className="text-center mb-14">
  <SectionEyebrow text="WHAT WE DO" />
  <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-6">
   Six Disciplines. One Integrated Strategy.
  </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, i) => (
   <AnimateOnScroll key={service.title} delay={i * 100}>
   <Link href={service.href} className="block group">
   <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[12px] p-[40px_32px] hover:shadow-card-hover hover:border-[#1d7682] transition-all duration-300 h-full">
    <div className="w-12 h-12 rounded-[8px] bg-[rgba(201,168,76,0.1)] flex items-center justify-center">
    <service.icon
    size={24}
    className="text-[#1d7682]"
    strokeWidth={1.5}
    />
    </div>
    <h3 className="font-sans text-h4 font-semibold text-[#333333] mt-6 flex items-center gap-2">
    {service.title}
    <ArrowRight
    size={16}
    className="text-[#1d7682] opacity-0 group-hover:opacity-100 transition-opacity"
    strokeWidth={1.5}
    />
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

 {/* Differentiators */}
 <section className="bg-[#333333] bg-texture-dark py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
  <AnimateOnScroll>
  <div className="text-center mb-14">
   <SectionEyebrow text="THE FARTHER DIFFERENCE" />
   <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#F7F4EE] mt-6">
   Why Families Choose Farther.
   </h2>
  </div>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {differentiators.map((item, i) => (
   <AnimateOnScroll key={item.label} delay={i * 150}>
   <div className="text-center">
   <p className="font-sans text-4xl md:text-5xl text-[#1d7682]">
    <CountUp end={item.stat} />
    {item.suffix}
   </p>
   <p className="font-sans text-[13px] font-medium tracking-[0.1em] uppercase text-[#1d7682] mt-2">
    {item.label}
   </p>
   <p className="font-sans text-[15px] text-[#b6d0ed] leading-relaxed mt-4 max-w-[320px] mx-auto">
    {item.description}
   </p>
   </div>
   </AnimateOnScroll>
  ))}
  </div>
  </div>
 </section>

 {/* Who We Serve */}
 <section className="bg-[#F7F4EE] bg-texture-light py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
  <AnimateOnScroll>
  <div>
   <SectionEyebrow text="WHO WE SERVE" />
   <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-6">
   Built for Families Like Yours.
   </h2>
   <p className="font-sans text-[17px] text-[#333333] leading-relaxed mt-6">
   Our clients are successful professionals, business owners, and
   families navigating the complexities that come with meaningful
   wealth - and who want more from their financial advisor than
   quarterly check-ins and cookie-cutter portfolios.
   </p>
   <div className="mt-8 space-y-4">
   {[
   'Executives and professionals with concentrated stock positions',
   'Business owners planning for liquidity events or succession',
   'Families managing multi-generational wealth transfer',
   'Retirees seeking tax-efficient income strategies',
   'Individuals relocating to Arizona or Nevada for tax advantages',
   ].map((item) => (
   <div key={item} className="flex items-start gap-3">
    <CheckCircle
    size={18}
    className="text-[#1d7682] mt-0.5 flex-shrink-0"
    strokeWidth={1.5}
    />
    <span className="font-sans text-[15px] text-[#333333]">
    {item}
    </span>
   </div>
   ))}
   </div>
  </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
  <div className="bg-[#333333] rounded-[16px] p-10 border border-[rgba(201,168,76,0.15)]">
   <FartherIcon variant="cream" size={32} className="mb-4 opacity-60" />
   <h3 className="font-serif text-[28px] text-[#F7F4EE] font-normal">
   Serving Arizona, California, and Nevada
   </h3>
   <p className="font-sans text-[15px] text-[#b6d0ed] leading-relaxed mt-4">
   With deep expertise across the region, we understand the unique
   financial landscapes of Arizona, California, and Nevada - from community
   property laws to state tax advantages.
   </p>
   <div className="mt-8 flex flex-col sm:flex-row gap-4">
   <Button href="/scottsdale" variant="outline">
   Scottsdale, AZ
   </Button>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* CTA */}
 <section className="bg-[#333333] py-20 lg:py-32 px-4 sm:px-6 lg:px-8 text-center">
  <div className="max-w-[620px] mx-auto">
  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#F7F4EE] leading-[1.2]">
  Let&apos;s Build Your Strategy.
  </h2>
  <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
  Schedule a private conversation to discuss your goals and explore
  whether Farther is the right fit for your family.
  </p>
  <div className="mt-10">
  <Button href="/schedule-consultation" variant="primary">
   Schedule a Conversation
  </Button>
  </div>
  </div>
 </section>
 </>
 )
}
