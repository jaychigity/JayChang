import type { Metadata } from 'next'
import Link from 'next/link'
import {
 Zap,
 Cpu,
 Plane,
 Stethoscope,
 TrendingUp,
 ChevronDown,
 ArrowRight,
 Building,
 DollarSign,
} from 'lucide-react'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'

export const metadata: Metadata = {
 title: 'Financial Advisor for Arizona Engineers, Executives & Doctors | Jay Chang',
 description:
  `Financial planning and wealth management for high-income professionals at TSMC, Intel, Honeywell, Banner Health, and other top Arizona employers. I help people earning $150K-$800K+ keep more of what they earn.`,
 alternates: { canonical: 'https://www.advisorjay.com/scottsdale' },
 openGraph: {
  title: `Financial Advisor for Arizona's Top Earners | Jay Chang`,
  description:
   `Hands-on financial planning, RSU strategies, and wealth management for engineers, executives, and physicians earning $150K-$800K+ at Arizona's biggest employers.`,
  url: 'https://www.advisorjay.com/scottsdale',
 },
 other: {
  'geo.region': 'US-AZ',
  'geo.placename': 'Scottsdale',
 },
}

const financialServiceSchema = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Advisor Jay - Scottsdale',
 description:
  `Wealth management and equity compensation planning for high-income professionals earning $150K-$800K+ at Arizona top employers including TSMC, Intel, Honeywell, Raytheon, Banner Health, Mayo Clinic, and Freeport-McMoRan.`,
 url: 'https://www.advisorjay.com/scottsdale',
 telephone: '+1-480-944-0880',
 geo: {
  '@type': 'GeoCoordinates',
  latitude: 33.4942,
  longitude: -111.9261,
 },
 areaServed: [
  { '@type': 'City', name: 'Scottsdale' },
  { '@type': 'City', name: 'Phoenix' },
  { '@type': 'City', name: 'Paradise Valley' },
  { '@type': 'City', name: 'Tempe' },
  { '@type': 'City', name: 'Mesa' },
  { '@type': 'City', name: 'Chandler' },
  { '@type': 'City', name: 'Gilbert' },
  { '@type': 'City', name: 'Carefree' },
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
  url: 'https://www.advisorjay.com',
 },
}

const faqSchema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
  {
   '@type': 'Question',
   name: 'What is RSU vesting and why does it matter?',
   acceptedAnswer: {
    '@type': 'Answer',
    text: 'RSUs (Restricted Stock Units) are shares your employer gives you that vest over time. When they vest, they turn into actual shares - and the IRS treats that as regular income, taxed at your full rate right away. The big planning opportunity? Knowing when your shares vest so we can plan ahead for the tax hit, figure out when to sell, and make sure you are not over-concentrated in one stock. We help you build a smart game plan around your vesting schedule so nothing catches you off guard.',
   },
  },
  {
   '@type': 'Question',
   name: 'How do I manage concentrated stock from my employer?',
   acceptedAnswer: {
    '@type': 'Answer',
    text: 'When too much of your wealth is tied up in one company stock, that is a lot of eggs in one basket. We work with you to gradually diversify in a tax-smart way - using approaches like systematic selling schedules, 10b5-1 plans for executives, and charitable giving strategies. The goal is simple: reduce your risk without handing a huge chunk to the IRS unnecessarily.',
   },
  },
  {
   '@type': 'Question',
   name: 'What is deferred compensation and how does it fit into my plan?',
   acceptedAnswer: {
    '@type': 'Answer',
    text: 'Deferred compensation plans (common at Honeywell, Raytheon, and other big aerospace and defense companies) let you set aside part of your salary or bonus to receive it in a future year. It is a great way to manage taxes and build wealth - but the timing of when you take that money matters a lot. We help you coordinate it with your retirement plans, investments, and overall tax picture so everything works together.',
   },
  },
  {
   '@type': 'Question',
   name: 'I was relocated to Arizona for my job. How does relocation affect my taxes?',
   acceptedAnswer: {
    '@type': 'Answer',
    text: 'Good news - Arizona has no state income tax. If you came from a higher-tax state like California, that alone is a big deal. But there is more to think about: your employer relocation benefits, timing around stock options or equity grants, and how to set up your financial life in a new state. We walk through all of it with you so you can take full advantage of the move.',
   },
  },
  {
   '@type': 'Question',
   name: 'How should physicians approach retirement planning with high income?',
   acceptedAnswer: {
    '@type': 'Answer',
    text: 'Doctors earning $400K-$800K+ are in a tough spot: big income, limited ability to shelter it in traditional retirement accounts, often heavy student loans, and malpractice risk to worry about. We help with strategies like mega backdoor Roth conversions, picking the right retirement plan structure, protecting your assets, and pulling all the tax and estate pieces together. You take care of patients - we take care of this.',
   },
  },
 ],
}

const stats = [
 { value: '4.2M', description: 'People calling Greater Phoenix home' },
 { value: '$150K-$800K+', description: 'What my clients typically earn in total comp' },
 { value: '0%', description: 'Arizona state income tax - yes, really' },
]

const employerSectors = [
 {
  category: 'Semiconductor & Microelectronics',
  companies: ['TSMC', 'Intel', 'NVIDIA', 'Microchip Technology', 'Amkor Technology'],
 },
 {
  category: 'Aerospace & Defense',
  companies: ['Honeywell', 'Raytheon Missiles & Defense'],
 },
 {
  category: 'Big Tech',
  companies: ['Apple (Mesa)', 'NVIDIA'],
 },
 {
  category: 'Healthcare & Life Sciences',
  companies: ['Banner Health', 'Mayo Clinic Scottsdale'],
 },
 {
  category: 'Mining & Natural Resources',
  companies: ['Freeport-McMoRan'],
 },
]

const specializedSections = [
 {
  icon: Cpu,
  title: 'Semiconductor & Tech',
  headline: 'Your Equity Is Growing Faster Than Your Plan. We Can Help With That.',
  body: 'Arizona has become the center of America\'s semiconductor boom. If you work at TSMC, Intel, Microchip, or Amkor, your paycheck probably includes RSU grants, stock options, and performance-based equity that could be life-changing wealth - or a big tax headache if nobody is paying attention. Our team digs into the details of your specific comp package so nothing slips through the cracks.',
  services: [
   'RSU & Equity Vesting Strategies',
   'Concentrated Stock Risk Management',
   'Relocation Wealth Planning',
   'Mega Backdoor Roth Conversions',
   'IPO & Liquidity Event Planning',
  ],
 },
 {
  icon: Plane,
  title: 'Aerospace & Defense',
  headline: 'You Build Things That Require Precision. Your Financial Plan Should Too.',
  body: 'Honeywell and Raytheon professionals tend to be steady, disciplined, and loyal to their companies - and your comp structures reward that loyalty. The path to building real wealth here is methodical, and that is actually great news. It means we can build a plan together that is just as deliberate and strategic as the work you do every day.',
  services: [
   'Deferred Compensation Optimization',
   'Pension & Retirement Integration',
   'Long-Tenure Wealth Accumulation',
   'Security Clearance-Sensitive Planning',
   'Executive Compensation Review',
  ],
 },
 {
  icon: Stethoscope,
  title: 'Healthcare & Physicians',
  headline: 'You Take Care of Everyone Else. Let Us Help Take Care of Your Finances.',
  body: 'Healthcare professionals at Banner Health and Mayo Clinic earning $400K-$800K+ deal with a real contradiction: great income, but barely any time to manage it - plus complicated taxes, benefit complexity, and career demands on top of it all. We sit down with you and build a plan that is as thorough and thoughtful as the work you do every day.',
  services: [
   'Physician Income Tax Planning',
   'Asset Protection Strategies',
   'Retirement Catch-Up Planning',
   'Student Loan Payoff vs. Invest Analysis',
   'Real Estate & Practice Equity',
  ],
 },
 {
  icon: TrendingUp,
  title: 'Large Tech Employers',
  headline: 'Your Total Comp Is More Than a Number. It\'s How You Build Long-Term Wealth.',
  body: 'Apple\'s Mesa campus and NVIDIA\'s Phoenix engineering presence bring Silicon Valley-style compensation to Arizona. ESPP programs, multi-year equity awards, and tricky tax bracket situations all come with the territory. We help you turn stock-heavy comp packages into real, lasting wealth - not just paper gains.',
  services: [
   'ESPP Optimization',
   'Multi-Year Equity Projection',
   'AMT & Tax Bracket Management',
   'Post-Vest Diversification',
   'Bonus and Incentive Planning',
  ],
 },
 {
  icon: DollarSign,
  title: 'Mining & Commodities',
  headline: 'Commodity Prices Go Up and Down. Your Financial Plan Shouldn\'t.',
  body: 'Freeport-McMoRan professionals know what it is like to have income that swings with copper prices. When your paycheck is tied to commodity cycles, you need a financial plan that can handle the ups and downs without breaking. That is exactly what we build together.',
  services: [
   'Cyclical Industry Equity Strategy',
   'Executive Benefits Audit',
   '10b5-1 Plan Guidance',
   'Estate & Succession Planning',
   'Hedging & Risk Management',
  ],
 },
]

const communities = [
 { name: 'Scottsdale', descriptor: 'Desert living at its finest, close-knit professional community' },
 { name: 'Phoenix', descriptor: 'City center, where the big employers are headquartered' },
 { name: 'Paradise Valley', descriptor: 'Quiet luxury, established families' },
 { name: 'Tempe', descriptor: 'Near ASU, lots of young professionals and growing tech' },
 { name: 'Mesa', descriptor: 'East Valley, home to Intel and Apple operations' },
 { name: 'Chandler', descriptor: 'The semiconductor corridor, where the chips are made' },
 { name: 'Gilbert', descriptor: 'One of the fastest-growing cities, great for families' },
 { name: 'Carefree', descriptor: 'North Scottsdale area, golf communities, and wide-open space' },
]

export default function ScottsdalePage() {
 return (
  <>
   <BreadcrumbSchema items={[{ name: 'Scottsdale', href: '/scottsdale' }]} />
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
     src="/Photos/scottsdale-professional.png"
     alt="Scottsdale skyline - wealth management for Arizona top engineers, executives, and physicians"
     title="Scottsdale, AZ - Advisor Jay"
     fill
     className="object-cover opacity-20"
     priority
     sizes="100vw"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/90 to-[#333333]/40" />
    <div className="relative z-10 w-full px-[20px] md:px-[80px]">
     <div className="max-w-[620px]">
      <AnimateOnScroll>
       <SectionEyebrow text="SCOTTSDALE, ARIZONA" light />
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
       <h1 className="font-serif text-[34px] md:text-[52px] font-bold text-[#F7F4EE] mt-5 leading-[1.15]">
        A Financial Advisor Who Actually Understands What You Earn and How You Earn It
       </h1>
      </AnimateOnScroll>

      <AnimateOnScroll delay={200}>
       <p className="font-sans text-[19px] text-[#F7F4EE]/90 mt-5 max-w-[540px] leading-relaxed">
        You&apos;ve worked hard to get where you are at one of Arizona&apos;s top companies. Now let&apos;s make sure your money is working just as hard. I help high-income professionals across the Valley turn complicated compensation into real, lasting wealth - together.
       </p>
      </AnimateOnScroll>

      <AnimateOnScroll delay={300}>
       <div className="mt-8">
        <Button href="/schedule-consultation" variant="primary">
         Let&apos;s Have a Conversation
        </Button>
       </div>
      </AnimateOnScroll>
     </div>
    </div>
   </section>

   {/* ─── SECTION 2: WHO I SERVE ─── */}
   <section className="bg-[#F7F4EE] section-padding">
    <div className="max-w-container mx-auto">
     <div className="text-center mb-[48px]">
      <AnimateOnScroll>
       <SectionEyebrow text="WHO WE WORK WITH" />
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
       <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 max-w-[720px] mx-auto">
        We Work With the People Building Arizona&apos;s Future
       </h2>
      </AnimateOnScroll>
     </div>

     <div className="max-w-[720px] mx-auto mb-12">
      <AnimateOnScroll delay={200}>
       <div className="font-sans text-base text-[#333333] leading-[1.7] space-y-5">
        <p>
         Arizona&apos;s economy is booming - semiconductors, aerospace, world-class healthcare. If you&apos;re a professional at TSMC or Intel, at Honeywell or Raytheon, or at Banner Health, your compensation is anything but simple. Stock grants, RSU vesting schedules, deferred comp, multi-state tax issues - it adds up fast. You deserve a financial advisor who gets the nuances and won&apos;t waste your time asking what an RSU is.
        </p>
        <p>
         Jay Chang and our team work exclusively with high-income professionals earning $150K-$800K+ at Arizona&apos;s biggest employers. We sit on the same side of the table as you and figure this out together.
        </p>
       </div>
      </AnimateOnScroll>
     </div>

     <AnimateOnScroll delay={300}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
       {employerSectors.map((sector) => (
        <div key={sector.category} className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-6">
         <h3 className="font-serif text-[18px] font-semibold text-[#1d7682] mb-4">
          {sector.category}
         </h3>
         <ul className="space-y-2">
          {sector.companies.map((company) => (
           <li key={company} className="font-sans text-sm text-[#333333]">
            {company}
           </li>
          ))}
         </ul>
        </div>
       ))}
      </div>
     </AnimateOnScroll>
    </div>
   </section>

   {/* ─── SECTION 3: EMPLOYER-SPECIFIC STRATEGIES ─── */}
   {specializedSections.map((section, idx) => (
    <section
     key={section.title}
     className={idx % 2 === 0 ? 'bg-[#FAFAF8]' : 'bg-[#F7F4EE]'}
    >
     <div className="max-w-container mx-auto section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-start">
       {/* Left: Icon + Text */}
       <AnimateOnScroll>
        <div>
         <section.icon className="w-[48px] h-[48px] text-[#1d7682] mb-6" />
         <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-[#333333] leading-[1.2] mb-6">
          {section.headline}
         </h2>
         <p className="font-sans text-base text-[#333333] leading-[1.7] mb-6">
          {section.body}
         </p>
         <div>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-4">
           How We Help
          </p>
          <ul className="space-y-3">
           {section.services.map((service) => (
            <li key={service} className="font-sans text-[15px] text-[#333333] flex items-start">
             <ArrowRight className="w-4 h-4 text-[#1d7682] mr-3 flex-shrink-0 mt-1" />
             <span>{service}</span>
            </li>
           ))}
          </ul>
         </div>
        </div>
       </AnimateOnScroll>

       {/* Right: Stats Box */}
       <AnimateOnScroll delay={200}>
        <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[16px] p-12 shadow-[0_8px_32px_rgba(27,42,74,0.06)]">
         <h3 className="font-serif text-[24px] font-semibold text-[#333333] mb-6">
          {section.title} Overview
         </h3>
         <div className="space-y-6">
          <div>
           <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-2">
            What We Focus On
           </p>
           <p className="font-sans text-base text-[#333333]">
            Equity compensation, concentrated stock, and tax-smart wealth building for {section.title.toLowerCase()} professionals.
           </p>
          </div>
          <div className="border-t border-[#E8E6E1] pt-6">
           <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-2">
            Why This Matters
           </p>
           <p className="font-sans text-base text-[#333333]">
            The way you get paid is complicated. Without someone coordinating all the moving pieces, you could be leaving real money on the table in taxes and missed opportunities. We make sure that doesn&apos;t happen.
           </p>
          </div>
         </div>
        </div>
       </AnimateOnScroll>
      </div>
     </div>
    </section>
   ))}

   {/* ─── SECTION 4: WHY JAY CHANG AT FARTHER ─── */}
   <section className="bg-[#F7F4EE] section-padding">
    <div className="max-w-container mx-auto">
     <div className="text-center mb-[48px]">
      <AnimateOnScroll>
       <SectionEyebrow text="WHY JAY CHANG AT FARTHER" />
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
       <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 max-w-[720px] mx-auto">
        A Real Advisor With Serious Technology Behind the Scenes
       </h2>
      </AnimateOnScroll>
     </div>

     <div className="max-w-[720px] mx-auto mb-12">
      <AnimateOnScroll delay={200}>
       <p className="font-sans text-base text-[#333333] leading-[1.7]">
        Most firms make you pick: either you get a great advisor who knows your name, or you get fancy technology. I bring hands-on experience with the exact financial challenges Arizona&apos;s highest earners face, backed by an institutional technology platform. You get the personal attention and the horsepower.
       </p>
      </AnimateOnScroll>
     </div>

     <AnimateOnScroll delay={300}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       {[
        { title: 'Fiduciary, Always', desc: 'We are legally required to put your interests first. That is not a tagline - it is how we operate every day.' },
        { title: 'Tax-Loss Harvesting, Built In', desc: 'Our platform automatically looks for tax-saving opportunities in your portfolio. You do not have to ask.' },
        { title: 'Smart Asset Location', desc: 'We put the right investments in the right accounts so you keep more of your returns.' },
        { title: 'Flexible Investment Approach', desc: 'Your portfolio adapts as your life changes - new job, new baby, new goals. We adjust together.' },
        { title: 'Institutional Tech Platform', desc: 'One integrated system for portfolio management, tax-loss harvesting, and reporting in real time.' },
        { title: 'We Actually Know Your Name', desc: 'I spend 90% of my time working directly with clients. You are never just a number here.' },
       ].map((item) => (
        <div key={item.title} className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-8">
         <h3 className="font-serif text-[20px] font-semibold text-[#333333] mb-3">
          {item.title}
         </h3>
         <p className="font-sans text-[15px] text-[#5b6a71]">
          {item.desc}
         </p>
        </div>
       ))}
      </div>
     </AnimateOnScroll>
    </div>
   </section>

   {/* ─── SECTION 5: MARKET CONTEXT ─── */}
   <section className="bg-[#FAFAF8] section-padding">
    <div className="max-w-container mx-auto">
     <AnimateOnScroll>
      <SectionEyebrow text="ARIZONA'S WEALTH LANDSCAPE" />
     </AnimateOnScroll>

     <AnimateOnScroll delay={100}>
      <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 mb-12">
       This Is Where High-Earning Careers Are Being Built Right Now
      </h2>
     </AnimateOnScroll>

     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
       <AnimateOnScroll key={stat.value} delay={200 + index * 75}>
        <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[12px] p-8 text-center">
         <div className="font-serif text-[40px] font-bold text-[#1d7682] mb-2">
          {stat.value}
         </div>
         <div className="font-sans text-sm text-[#333333]">
          {stat.description}
         </div>
        </div>
       </AnimateOnScroll>
      ))}
     </div>

     <AnimateOnScroll delay={500}>
      <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[16px] p-12">
       <p className="font-sans text-base text-[#333333] leading-[1.7]">
        Arizona has quietly become one of the most concentrated wealth corridors in the country. The semiconductor boom in Chandler and Mesa, aerospace manufacturing across the Phoenix area, world-class hospitals, and natural resource companies have created an environment where smart, hard-working people can build serious wealth - as long as they have someone helping them make good financial decisions along the way. That is where our team comes in.
       </p>
      </div>
     </AnimateOnScroll>
    </div>
   </section>

   {/* ─── SECTION 6: COMMUNITIES ─── */}
   <section className="bg-[#FAFAF8] section-padding">
    <div className="max-w-container mx-auto">
     <div className="text-center mb-[48px]">
      <AnimateOnScroll>
       <SectionEyebrow text="COMMUNITIES WE SERVE" />
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
       <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
        From Paradise Valley to the East Valley - We&apos;re Your Neighbors
       </h2>
      </AnimateOnScroll>
     </div>

     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {communities.map((community, index) => (
       <AnimateOnScroll key={community.name} delay={200 + index * 75}>
        <div className="bg-[#F7F4EE] rounded-[12px] p-7 border border-[#E8E6E1]">
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

   {/* ─── SECTION 7: FAQ ─── */}
   <section className="bg-[#F7F4EE] section-padding">
    <div className="max-w-container mx-auto">
     <AnimateOnScroll>
      <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] text-center mb-12">
       Questions We Hear All the Time
      </h2>
     </AnimateOnScroll>

     <div className="max-w-[800px] mx-auto">
      <AnimateOnScroll delay={100}>
       <details className="border-b border-[#E8E6E1] group">
        <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
         What is RSU vesting and why does it matter?
         <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
        </summary>
        <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
         RSUs (Restricted Stock Units) are shares your employer gives you that vest over time. When they vest, they turn into actual shares - and the IRS treats that as regular income, taxed at your full rate right away. The big planning opportunity? Knowing when your shares vest so we can plan ahead for the tax bill, figure out the right time to sell, and make sure you are not too concentrated in one stock. We help you build a smart game plan around your vesting schedule so nothing catches you off guard.
        </div>
       </details>
      </AnimateOnScroll>

      <AnimateOnScroll delay={200}>
       <details className="border-b border-[#E8E6E1] group">
        <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
         How do I manage concentrated stock from my employer?
         <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
        </summary>
        <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
         When too much of your wealth is tied up in one company stock, that is a lot of risk in one place. We work with you to gradually spread things out in a tax-smart way - using approaches like systematic selling, 10b5-1 plans for executives, and charitable strategies. The goal is straightforward: lower your risk without handing a huge chunk to the IRS.
        </div>
       </details>
      </AnimateOnScroll>

      <AnimateOnScroll delay={300}>
       <details className="border-b border-[#E8E6E1] group">
        <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
         What is deferred compensation and how does it fit into my plan?
         <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
        </summary>
        <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
         Deferred comp plans (common at Honeywell, Raytheon, and other large aerospace and defense companies) let you push part of your salary or bonus into future years. It is a solid tax move, but the timing of when you actually take that money matters a lot. We help you coordinate it with your retirement accounts, investments, and overall tax situation so everything fits together like it should.
        </div>
       </details>
      </AnimateOnScroll>

      <AnimateOnScroll delay={400}>
       <details className="border-b border-[#E8E6E1] group">
        <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
         I was relocated to Arizona for my job. How does that change my taxes?
         <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
        </summary>
        <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
         Great news: Arizona has no state income tax. If you moved from a higher-tax state, that is a big win right away. But there are other things to think about too - your employer relocation package, how to handle stock options or equity grants tied to your move, and setting up your financial life smartly in a new state. We walk through all of it with you.
        </div>
       </details>
      </AnimateOnScroll>

      <AnimateOnScroll delay={500}>
       <details className="border-b border-[#E8E6E1] group">
        <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
         How should doctors approach retirement planning with a high income?
         <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
        </summary>
        <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
         Physicians earning $400K-$800K+ face a unique set of challenges: high income but limited room to shelter it in typical retirement plans, often significant student loans, and malpractice exposure to worry about. We tackle all of it - mega backdoor Roth strategies, the right retirement plan structure, asset protection, and coordinated tax and estate planning. You focus on your patients. We handle this part.
        </div>
       </details>
      </AnimateOnScroll>
     </div>

     <AnimateOnScroll delay={600}>
      <p className="font-sans text-base text-[#5b6a71] text-center mt-12">
       We also work with families and business owners in{' '}
       <Link
        href="/california"
        className="text-[#1d7682] hover:text-[#155f69] transition-colors font-semibold"
       >
        California <ArrowRight className="inline w-4 h-4 ml-1" />
       </Link>
       {' '}and{' '}
       <Link
        href="/las-vegas"
        className="text-[#1d7682] hover:text-[#155f69] transition-colors font-semibold"
       >
        Nevada <ArrowRight className="inline w-4 h-4 ml-1" />
       </Link>
      </p>
     </AnimateOnScroll>
    </div>
   </section>

   {/* ─── SECTION 8: OFFICE & MAP ─── */}
   <section className="bg-[#FAFAF8] section-padding">
    <div className="max-w-container mx-auto">
     <AnimateOnScroll>
      <SectionEyebrow text="OUR SCOTTSDALE OFFICE" />
      <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-4 text-center heading-accent-center">
       Right Here in the Greater Phoenix and Scottsdale Area
      </h2>
     </AnimateOnScroll>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
      {/* Map */}
      <AnimateOnScroll delay={100}>
       <div className="rounded-[8px] overflow-hidden border border-[#E8E6E1] shadow-sm h-[400px]">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.60619505965!2d-111.92608254453783!3d33.49419344500508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6de0c7f1c9f1%3A0x5c6b359e2b5e5a5e!2sScottsdale%2C%20AZ!5e0!3m2!1sen!2sus!4v1710000000000"
         width="100%"
         height="100%"
         style={{ border: 0 }}
         allowFullScreen
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
         title="Advisor Jay - Scottsdale, AZ office location"
        />
       </div>
      </AnimateOnScroll>

      {/* Contact Info */}
      <AnimateOnScroll delay={200}>
       <div className="flex flex-col justify-center">
        <h3 className="font-serif text-[24px] font-semibold text-[#333333] mb-6">
         Scottsdale, Arizona
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
           Scottsdale &middot; Paradise Valley &middot; Phoenix &middot; Tempe &middot; Mesa &middot; Chandler &middot; Gilbert &middot; Carefree &middot; Cave Creek
          </p>
         </div>
        </div>

        <div className="mt-8">
         <Button variant="primary" href="/schedule-consultation">
          Let&apos;s Talk
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
       Your Compensation Is Complicated. Getting Help Doesn&apos;t Have to Be.
      </h2>
     </AnimateOnScroll>

     <AnimateOnScroll delay={100}>
      <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[620px] mx-auto mt-5 leading-relaxed">
       Let&apos;s sit down and talk through your equity compensation, your tax situation, and where you want to be in 10 or 20 years. A direct conversation about your money.
      </p>
     </AnimateOnScroll>

     <AnimateOnScroll delay={200}>
      <div className="mt-8">
       <Button href="/schedule-consultation" variant="primary">
        Book a Conversation
       </Button>
      </div>
     </AnimateOnScroll>


     <AnimateOnScroll delay={400}>
      <div className="mt-8">
       <p className="font-sans text-sm text-[#F7F4EE]/60 mb-6">
        SEC-Registered Investment Advisor · Fiduciary Standard · Fee-Only
       </p>
       <div className="flex flex-col sm:flex-row justify-center gap-6">
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
         About Jay Chang
        </Link>
        <Link
         href="/insights"
         className="font-sans text-sm text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors"
        >
         Insights
        </Link>
       </div>
      </div>
     </AnimateOnScroll>
    </div>
   </section>
  </>
 )
}
