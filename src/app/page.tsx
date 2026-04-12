import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'
import SectionEyebrow from '@/components/SectionEyebrow'
import CountUp from '@/components/CountUp'
import { buildOpenGraph } from '@/lib/metadata'
import {
 Shield,
 TrendingUp,
 Zap,
 Award,
 BarChart3,
 Lock,
 Gauge,
 Users,
 Handshake,
 Compass,
 Rocket,
 Activity,
 Phone,
 Heart,
 Building2,
} from 'lucide-react'

export const metadata: Metadata = {
 title: 'Jay Chang - Wealth Advisor at Farther | Advisor Jay',
 description: 'Jay Chang is a fiduciary wealth advisor who helps families, professionals, and business owners build real financial plans. Independent advice backed by Farther\'s Intelligent Wealth Platform. Let\'s talk about what matters to you.',
 alternates: {
 canonical: 'https://www.advisorjay.com',
 },
 openGraph: buildOpenGraph('/', {
 title: 'Advisor Jay - Your Partner in Building Wealth That Lasts',
 description: 'Fiduciary wealth advice for families, professionals, and business owners. I sit on your side of the table.',
 image: '/Photos/Jay-Banner.png',
 }),
}

const jsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Advisor Jay',
 description: 'Fiduciary wealth management for families, professionals, and business owners. Independent advice backed by Farther\'s Intelligent Wealth Platform.',
 url: 'https://www.advisorjay.com',
 telephone: '+1-480-944-0880',
 areaServed: [
 {
 '@type': 'City',
 name: 'Phoenix',
 },
 {
 '@type': 'City',
 name: 'Chandler',
 },
 {
 '@type': 'City',
 name: 'Scottsdale',
 },
 {
 '@type': 'Region',
 name: 'Phoenix Metro',
 },
 {
 '@type': 'State',
 name: 'Arizona',
 },
 ],
 address: {
 '@type': 'PostalAddress',
 addressCity: 'Tempe',
 addressState: 'AZ',
 addressCountry: 'US',
 },
 contactPoint: {
 '@type': 'ContactPoint',
 contactType: 'Sales',
 telephone: '+1-480-944-0880',
 },
 employee: {
 '@type': 'Person',
 name: 'Jay Chang',
 jobTitle: 'VP, Wealth Advisor',
 },
}

export default function Home() {
 return (
 <>
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 />

 {/* SECTION 1: HERO */}
 <section className="relative bg-[#333333] flex items-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/95 to-[#333333]/80" />
  <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-28 lg:pt-36 pb-16 lg:pb-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
  {/* Left column: Text */}
  <AnimateOnScroll>
   <SectionEyebrow text="WEALTH MANAGEMENT · TECHNOLOGY · TRUST" light />
   <h1 className="font-serif text-4xl lg:text-6xl font-bold text-[#F7F4EE] mt-6 mb-8 leading-tight">
   A Partner in the Decisions That Shape Your Financial Life
   </h1>
   <p className="text-lg text-[#F7F4EE]/80 leading-relaxed mb-6">
   As a fiduciary, I take a simple, transparent approach to advice. My role is to help you make thoughtful decisions with your best interests at the center, always grounded in what matters most to you.
   </p>
   <p className="text-base text-[#F7F4EE]/70 leading-relaxed mb-6">
   Led by Jay Chang, a fiduciary wealth advisor with over 14 years of experience, I&apos;ve had the opportunity to work with a wide range of individuals and organizations — tech professionals navigating equity compensation, aerospace employees planning for retirement, physicians balancing practice demands with personal wealth, and business owners preparing for their next chapter.
   </p>
   <p className="text-base text-[#F7F4EE]/60 leading-relaxed mb-10">
   You&apos;ll be supported by Farther&apos;s Intelligent Wealth Platform, which brings together modern technology and institutional resources, including over $15 billion in assets under management across a national network of advisors. My role is to pair those resources with a highly personal, thoughtful approach, so you have both the support and clarity you need to move forward with confidence.
   </p>
   <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Begin a Confidential Conversation →
   </Button>
   </div>
  </AnimateOnScroll>

  {/* Right column: Photo */}
  <AnimateOnScroll delay={200}>
   <div className="relative w-full max-w-lg mx-auto lg:ml-auto rounded-lg overflow-hidden shadow-2xl">
   <Image
   src="/Photos/Jay-Office.png"
   alt="Jay Chang at his desk"
   width={800}
   height={600}
   className="w-full h-auto rounded-lg"
   priority
   sizes="(max-width: 1024px) 100vw, 50vw"
   />
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* SECTION 2: TRUST BAR */}
 <section className="bg-[#FAFAF8] border-t border-b border-[#e0e0e0] py-12">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
  <div className="flex flex-col items-center">
   <Shield className="w-8 h-8 text-[#1d7682] mb-3" />
   <p className="font-serif font-semibold text-[#333333]">Fiduciary Standard</p>
  </div>
  <div className="flex flex-col items-center">
   <Zap className="w-8 h-8 text-[#1d7682] mb-3" />
   <p className="font-serif font-semibold text-[#333333]">Technology-First Platform</p>
  </div>
  <div className="flex flex-col items-center">
   <TrendingUp className="w-8 h-8 text-[#1d7682] mb-3" />
   <p className="font-serif font-semibold text-[#333333]">Nationwide Reach</p>
  </div>
  </div>
  </div>
 </section>

 {/* SECTION 3: WHO WE WORK WITH */}
 <section className="bg-[#FAFAF8] py-20 lg:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  <AnimateOnScroll>
  <SectionEyebrow text="WHO I WORK WITH" />
  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#333333] mt-6 mb-6 leading-tight">
   I Help People Who&apos;ve Worked Hard Get the Most Out of What They&apos;ve Built.
  </h2>
  <p className="text-lg text-[#5b6a71] leading-relaxed mb-16 max-w-3xl">
   Whether you&apos;re navigating stock options, planning for retirement, growing a business, or just trying to make smart decisions for your family — I&apos;ve been there. Here are some of the people I work with every day:
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
   {/* Tech & Engineering Professionals */}
   <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
   <div className="flex items-center mb-4">
   <Gauge className="w-6 h-6 text-[#1d7682] mr-3" />
   <h3 className="font-serif text-2xl font-bold text-[#333333]">
    Tech &amp; Engineering
   </h3>
   </div>
   <p className="text-[#5b6a71] mb-4">
   If you work at a company like TSMC, Intel, NVIDIA, or Apple and your pay stub looks more like a spreadsheet — RSUs, ESPPs, relocation bonuses — I can help you make sense of it all.
   </p>
   <Link
   href="/semiconductor-wealth-management-arizona"
   className="text-[#1d7682] font-semibold hover:underline inline-flex items-center gap-2"
   >
   Learn more →
   </Link>
   </div>

   {/* Aerospace & Defense */}
   <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
   <div className="flex items-center mb-4">
   <Zap className="w-6 h-6 text-[#1d7682] mr-3" />
   <h3 className="font-serif text-2xl font-bold text-[#333333]">
    Aerospace &amp; Defense
   </h3>
   </div>
   <p className="text-[#5b6a71] mb-4">
   Long careers at places like Honeywell and Raytheon come with real benefits — pensions, deferred comp, employer stock. I help you build a plan that actually uses all of them wisely.
   </p>
   <Link
   href="/aerospace-defense-wealth-management"
   className="text-[#1d7682] font-semibold hover:underline inline-flex items-center gap-2"
   >
   Learn more →
   </Link>
   </div>

   {/* Physicians, Families & Business Owners */}
   <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
   <div className="flex items-center mb-4">
   <Users className="w-6 h-6 text-[#1d7682] mr-3" />
   <h3 className="font-serif text-2xl font-bold text-[#333333]">
    Physicians, Families &amp; Business Owners
   </h3>
   </div>
   <p className="text-[#5b6a71] mb-4">
   High income is great — but it comes with complexity. Whether you&apos;re a physician at Banner Health, running your own business, or simply want a financial partner who listens, I&apos;m here.
   </p>
   <Link
   href="/physician-executive-wealth-management-phoenix-scottsdale"
   className="text-[#1d7682] font-semibold hover:underline inline-flex items-center gap-2"
   >
   Learn more →
   </Link>
   </div>

   {/* Telecommunications & Utilities */}
   <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
   <div className="flex items-center mb-4">
   <Phone className="w-6 h-6 text-[#1d7682] mr-3" />
   <h3 className="font-serif text-2xl font-bold text-[#333333]">
    Telecommunications &amp; Utilities
   </h3>
   </div>
   <p className="text-[#5b6a71] mb-4">
   If you&apos;ve built a career at AT&amp;T, Verizon, T-Mobile, SRP, or PG&amp;E, your benefits package is more complex than most people realize — pensions, deferred comp, employer stock, union considerations. I help you coordinate all of it.
   </p>
   <Link
   href="/telecommunications-utilities-wealth-management"
   className="text-[#1d7682] font-semibold hover:underline inline-flex items-center gap-2"
   >
   Learn more →
   </Link>
   </div>

   {/* Families, Individuals & Life Transitions */}
   <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
   <div className="flex items-center mb-4">
   <Heart className="w-6 h-6 text-[#1d7682] mr-3" />
   <h3 className="font-serif text-2xl font-bold text-[#333333]">
    Families &amp; Life Transitions
   </h3>
   </div>
   <p className="text-[#5b6a71] mb-4">
   Divorce, the loss of a spouse, inheritance, retirement — life&apos;s biggest transitions come with financial decisions you shouldn&apos;t have to navigate alone. I help you protect what matters and move forward with confidence.
   </p>
   <Link
   href="/families-life-transitions-wealth-management"
   className="text-[#1d7682] font-semibold hover:underline inline-flex items-center gap-2"
   >
   Learn more →
   </Link>
   </div>

   {/* Institutional & Non-Profit */}
   <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
   <div className="flex items-center mb-4">
   <Building2 className="w-6 h-6 text-[#1d7682] mr-3" />
   <h3 className="font-serif text-2xl font-bold text-[#333333]">
    Institutional &amp; Non-Profit
   </h3>
   </div>
   <p className="text-[#5b6a71] mb-4">
   Endowments, foundation assets, and institutional portfolios deserve the same fiduciary care I give individuals. I help charitable organizations and institutions invest with purpose and accountability.
   </p>
   <Link
   href="/institutional-non-profit-wealth-management"
   className="text-[#1d7682] font-semibold hover:underline inline-flex items-center gap-2"
   >
   Learn more →
   </Link>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 4: THE REAL CHALLENGE */}
 <section className="bg-white py-20 lg:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  <AnimateOnScroll>
  <SectionEyebrow text="WHY IT MATTERS" />
  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#333333] mt-6 mb-6 leading-tight">
   You Shouldn&apos;t Have to Figure All of This Out Alone.
  </h2>
  <p className="text-lg text-[#5b6a71] leading-relaxed mb-6 max-w-3xl">
   Here&apos;s what I see all the time: smart, hardworking people who are great at what they do — but feel overwhelmed by the financial side of it. And honestly, who wouldn&apos;t be?
  </p>
  <p className="text-lg text-[#5b6a71] leading-relaxed mb-6 max-w-3xl">
   RSU vesting schedules, withholding shortfalls, deferred compensation decisions, employer stock concentration, Roth conversions, state tax implications when you relocate — it adds up fast. Most advisors don&apos;t dig into this stuff. I do. Every single day.
  </p>
  <p className="text-lg text-[#5b6a71] leading-relaxed max-w-3xl">
   I use Farther&apos;s technology platform to build plans that actually reflect your life — not some cookie-cutter model. Because your finances are personal, and I believe your advisor should treat them that way.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 5: BY THE NUMBERS */}
 <section className="bg-[#333333] py-20 lg:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  <AnimateOnScroll>
  <SectionEyebrow text="THINGS WORTH KNOWING" light />
  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-6 mb-6 leading-tight">
   A Few Numbers That Show Why This Stuff Matters.
  </h2>
  <p className="text-lg text-white/60 leading-relaxed mb-16 max-w-3xl">
   These are real situations I see with my clients — and real opportunities most people miss.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
   <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
   <p className="text-5xl font-serif font-bold text-[#1d7682] mb-2">
   <CountUp end="22%" />
   </p>
   <p className="text-white text-sm leading-relaxed">
   Flat withholding on RSUs and bonuses — but many people actually owe 37%. That gap catches a lot of folks off guard at tax time.
   </p>
   </div>

   <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
   <p className="text-5xl font-serif font-bold text-[#1d7682] mb-2">
   <CountUp end="$72,000" />
   </p>
   <p className="text-white text-sm leading-relaxed">
   The maximum you can put away each year through a mega backdoor Roth — and most people don&apos;t even know it exists.
   </p>
   </div>

   <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
   <p className="text-5xl font-serif font-bold text-[#1d7682] mb-2">
   <CountUp end="7%" />
   </p>
   <p className="text-white text-sm leading-relaxed">
   Some employer matches land entirely in company stock. That&apos;s a concentration risk that deserves a real plan.
   </p>
   </div>

   <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
   <p className="text-5xl font-serif font-bold text-[#1d7682] mb-2">
   <CountUp end="$3.3B" />
   </p>
   <p className="text-white text-sm leading-relaxed">
   In deferred compensation balances at just one company — unsecured and unfunded. That&apos;s a risk worth understanding.
   </p>
   </div>

   <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
   <p className="text-5xl font-serif font-bold text-[#1d7682] mb-2">
   <CountUp end="$15B+" />
   </p>
   <p className="text-white text-sm leading-relaxed">
   Total assets managed across the Farther platform — giving my clients institutional pricing with personal, hands-on relationships.
   </p>
   </div>

   <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
   <p className="text-5xl font-serif font-bold text-[#1d7682] mb-2">
   <CountUp end="276" />
   </p>
   <p className="text-white text-sm leading-relaxed">
   Advisor partners nationwide at Farther. A full team of specialists behind every decision I make with you.
   </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 6: HOW WE WORK TOGETHER */}
 <section className="bg-[#333333] py-20 lg:py-32 overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  <AnimateOnScroll>
  <SectionEyebrow text="HOW I WORK WITH YOU" light />
  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#F7F4EE] mt-6 mb-6 leading-tight">
   No Sales Pitch. Just a Simple Process That Puts You First.
  </h2>
  <p className="text-lg text-[#F7F4EE]/70 max-w-3xl mb-16 leading-relaxed">
   Every relationship starts the same way — with a real conversation. From there, I build something that&apos;s truly yours.
  </p>
  </AnimateOnScroll>

  {/* Desktop: Horizontal Timeline */}
  <div className="hidden lg:block relative">
   {/* Connecting line */}
   <div className="absolute top-[28px] left-[7%] right-[7%] h-[2px] bg-[#1d7682]/30" />

   <div className="grid grid-cols-4 gap-8">
   {/* Step 1: Listen */}
   <AnimateOnScroll delay={0}>
    <div className="relative">
    <div className="w-14 h-14 rounded-full bg-[#1d7682] flex items-center justify-center mb-6 relative z-10">
     <Handshake className="w-6 h-6 text-white" />
    </div>
    <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-wider text-[#1d7682] bg-[#1d7682]/15 px-3 py-1 rounded-full mb-4">
     Week 1
    </span>
    <h3 className="font-serif text-2xl font-bold text-[#F7F4EE] mb-1">I Listen</h3>
    <p className="font-sans text-sm font-semibold text-[#1d7682] mb-3">A Real Conversation, Not a Pitch</p>
    <p className="font-sans text-[15px] text-[#F7F4EE]/70 leading-relaxed">
     I start by getting to know you — your family, your career, what keeps you up at night, and what you&apos;re working toward. No questionnaires. No jargon. You&apos;ll walk away with clarity whether or not we end up working together.
    </p>
    </div>
   </AnimateOnScroll>

   {/* Step 2: Design */}
   <AnimateOnScroll delay={100}>
    <div className="relative">
    <div className="w-14 h-14 rounded-full bg-[#1d7682] flex items-center justify-center mb-6 relative z-10">
     <Compass className="w-6 h-6 text-white" />
    </div>
    <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-wider text-[#1d7682] bg-[#1d7682]/15 px-3 py-1 rounded-full mb-4">
     Weeks 2–4
    </span>
    <h3 className="font-serif text-2xl font-bold text-[#F7F4EE] mb-1">I Build Your Plan</h3>
    <p className="font-sans text-sm font-semibold text-[#1d7682] mb-3">Built Around Your Life, Not a Template</p>
    <p className="font-sans text-[15px] text-[#F7F4EE]/70 leading-relaxed">
     Using Farther&apos;s platform, I put together a financial plan that actually reflects your situation — your goals, your tax picture, your benefits, your timeline. I walk through every piece of it with you.
    </p>
    </div>
   </AnimateOnScroll>

   {/* Step 3: Implement */}
   <AnimateOnScroll delay={200}>
    <div className="relative">
    <div className="w-14 h-14 rounded-full bg-[#1d7682] flex items-center justify-center mb-6 relative z-10">
     <Rocket className="w-6 h-6 text-white" />
    </div>
    <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-wider text-[#1d7682] bg-[#1d7682]/15 px-3 py-1 rounded-full mb-4">
     Weeks 3–6
    </span>
    <h3 className="font-serif text-2xl font-bold text-[#F7F4EE] mb-1">I Handle the Details</h3>
    <p className="font-sans text-sm font-semibold text-[#1d7682] mb-3">So You Don&apos;t Have To</p>
    <p className="font-sans text-[15px] text-[#F7F4EE]/70 leading-relaxed">
     Account transfers, beneficiary updates, tax-lot optimization — I take care of all of it. Farther&apos;s platform keeps everything organized so nothing slips through the cracks.
    </p>
    </div>
   </AnimateOnScroll>

   {/* Step 4: Stay Connected */}
   <AnimateOnScroll delay={300}>
    <div className="relative">
    <div className="w-14 h-14 rounded-full bg-[#1d7682] flex items-center justify-center mb-6 relative z-10">
     <Activity className="w-6 h-6 text-white" />
    </div>
    <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-wider text-[#1d7682] bg-[#1d7682]/15 px-3 py-1 rounded-full mb-4">
     Ongoing
    </span>
    <h3 className="font-serif text-2xl font-bold text-[#F7F4EE] mb-1">I Stay in Your Corner</h3>
    <p className="font-sans text-sm font-semibold text-[#1d7682] mb-3">Life Changes. Your Plan Should Too.</p>
    <p className="font-sans text-[15px] text-[#F7F4EE]/70 leading-relaxed">
     Regular check-ins, proactive tax planning, real-time monitoring. When something changes — a new job, a big purchase, a market swing — I&apos;m already thinking about what it means for you.
    </p>
    </div>
   </AnimateOnScroll>
   </div>
  </div>

  {/* Mobile: Vertical Timeline */}
  <div className="lg:hidden relative">
   {/* Vertical connecting line */}
   <div className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-[#1d7682]/30" />

   <div className="space-y-12">
   {/* Step 1 */}
   <AnimateOnScroll>
    <div className="relative flex gap-6">
    <div className="w-14 h-14 rounded-full bg-[#1d7682] flex items-center justify-center shrink-0 relative z-10">
     <Handshake className="w-6 h-6 text-white" />
    </div>
    <div className="pt-1">
     <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-wider text-[#1d7682] bg-[#1d7682]/15 px-3 py-1 rounded-full mb-3">
     Week 1
     </span>
     <h3 className="font-serif text-2xl font-bold text-[#F7F4EE] mb-1">I Listen</h3>
     <p className="font-sans text-sm font-semibold text-[#1d7682] mb-3">A Real Conversation, Not a Pitch</p>
     <p className="font-sans text-[15px] text-[#F7F4EE]/70 leading-relaxed">
     I start by getting to know you — your family, your career, what keeps you up at night, and what you&apos;re working toward. No questionnaires. No jargon. You&apos;ll walk away with clarity whether or not we end up working together.
     </p>
    </div>
    </div>
   </AnimateOnScroll>

   {/* Step 2 */}
   <AnimateOnScroll>
    <div className="relative flex gap-6">
    <div className="w-14 h-14 rounded-full bg-[#1d7682] flex items-center justify-center shrink-0 relative z-10">
     <Compass className="w-6 h-6 text-white" />
    </div>
    <div className="pt-1">
     <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-wider text-[#1d7682] bg-[#1d7682]/15 px-3 py-1 rounded-full mb-3">
     Weeks 2–4
     </span>
     <h3 className="font-serif text-2xl font-bold text-[#F7F4EE] mb-1">I Build Your Plan</h3>
     <p className="font-sans text-sm font-semibold text-[#1d7682] mb-3">Built Around Your Life, Not a Template</p>
     <p className="font-sans text-[15px] text-[#F7F4EE]/70 leading-relaxed">
     Using Farther&apos;s platform, I put together a financial plan that actually reflects your situation — your goals, your tax picture, your benefits, your timeline. I walk through every piece of it with you.
     </p>
    </div>
    </div>
   </AnimateOnScroll>

   {/* Step 3 */}
   <AnimateOnScroll>
    <div className="relative flex gap-6">
    <div className="w-14 h-14 rounded-full bg-[#1d7682] flex items-center justify-center shrink-0 relative z-10">
     <Rocket className="w-6 h-6 text-white" />
    </div>
    <div className="pt-1">
     <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-wider text-[#1d7682] bg-[#1d7682]/15 px-3 py-1 rounded-full mb-3">
     Weeks 3–6
     </span>
     <h3 className="font-serif text-2xl font-bold text-[#F7F4EE] mb-1">I Handle the Details</h3>
     <p className="font-sans text-sm font-semibold text-[#1d7682] mb-3">So You Don&apos;t Have To</p>
     <p className="font-sans text-[15px] text-[#F7F4EE]/70 leading-relaxed">
     Account transfers, beneficiary updates, tax-lot optimization — I take care of all of it. Farther&apos;s platform keeps everything organized so nothing slips through the cracks.
     </p>
    </div>
    </div>
   </AnimateOnScroll>

   {/* Step 4 */}
   <AnimateOnScroll>
    <div className="relative flex gap-6">
    <div className="w-14 h-14 rounded-full bg-[#1d7682] flex items-center justify-center shrink-0 relative z-10">
     <Activity className="w-6 h-6 text-white" />
    </div>
    <div className="pt-1">
     <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-wider text-[#1d7682] bg-[#1d7682]/15 px-3 py-1 rounded-full mb-3">
     Ongoing
     </span>
     <h3 className="font-serif text-2xl font-bold text-[#F7F4EE] mb-1">I Stay in Your Corner</h3>
     <p className="font-sans text-sm font-semibold text-[#1d7682] mb-3">Life Changes. Your Plan Should Too.</p>
     <p className="font-sans text-[15px] text-[#F7F4EE]/70 leading-relaxed">
     Regular check-ins, proactive tax planning, real-time monitoring. When something changes — a new job, a big purchase, a market swing — I&apos;m already thinking about what it means for you.
     </p>
    </div>
    </div>
   </AnimateOnScroll>
   </div>
  </div>

  {/* Bottom CTA */}
  <AnimateOnScroll>
   <div className="mt-20 text-center">
   <h3 className="font-serif text-3xl lg:text-4xl font-bold text-[#F7F4EE] mb-4">
    It Starts With a Conversation
   </h3>
   <p className="font-sans text-[17px] text-[#F7F4EE]/70 mb-8 max-w-xl mx-auto">
    No pressure. No obligation. Just a genuine chat to see if I&apos;m the right fit for you.
   </p>
   <Button href="/schedule-consultation" variant="primary">
    Let&apos;s Talk
   </Button>
   </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 7: WHY FARTHER */}
 <section className="bg-[#FAFAF8] py-20 lg:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  <AnimateOnScroll>
  <SectionEyebrow text="WHY I CHOSE FARTHER" />
  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#333333] mt-6 mb-6 leading-tight">
   Great Technology and Great Advice Shouldn&apos;t Be an Either/Or.
  </h2>
  <p className="text-lg text-[#5b6a71] leading-relaxed max-w-3xl mb-16">
   I partnered with Farther because I believe you deserve both: an advisor who knows your situation, backed by a platform that never drops the ball. Farther&apos;s Intelligent Wealth Platform handles the heavy lifting — so I can spend my time doing what actually matters: thinking about your family, your goals, and your future.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-0">
   {/* Feature 1 */}
   <div className="bg-white p-8 rounded-lg flex gap-4">
   <div className="flex-shrink-0">
   <Lock className="w-6 h-6 text-[#1d7682]" />
   </div>
   <div>
   <h3 className="font-serif font-bold text-[#333333] mb-2">Everything in One Place</h3>
   <p className="text-[#5b6a71] text-sm">All your accounts on a single dashboard — so you always know where you stand.</p>
   </div>
   </div>

   {/* Feature 2 */}
   <div className="bg-white p-8 rounded-lg flex gap-4">
   <div className="flex-shrink-0">
   <BarChart3 className="w-6 h-6 text-[#1d7682]" />
   </div>
   <div>
   <h3 className="font-serif font-bold text-[#333333] mb-2">Automatic Tax Savings</h3>
   <p className="text-[#5b6a71] text-sm">The platform scans daily for tax-loss harvesting opportunities — so you keep more of what you earn.</p>
   </div>
   </div>

   {/* Feature 3 */}
   <div className="bg-white p-8 rounded-lg flex gap-4">
   <div className="flex-shrink-0">
   <Gauge className="w-6 h-6 text-[#1d7682]" />
   </div>
   <div>
   <h3 className="font-serif font-bold text-[#333333] mb-2">Smart Account Placement</h3>
   <p className="text-[#5b6a71] text-sm">The platform puts the right investments in the right accounts — taxable, deferred, and Roth — to maximize your after-tax returns.</p>
   </div>
   </div>

   {/* Feature 4 */}
   <div className="bg-white p-8 rounded-lg flex gap-4">
   <div className="flex-shrink-0">
   <TrendingUp className="w-6 h-6 text-[#1d7682]" />
   </div>
   <div>
   <h3 className="font-serif font-bold text-[#333333] mb-2">Institutional-Quality Investments</h3>
   <p className="text-[#5b6a71] text-sm">Through Farther Asset Management, you get access to strategies built for tax efficiency, transparency, and long-term growth.</p>
   </div>
   </div>

   {/* Feature 5 */}
   <div className="bg-white p-8 rounded-lg flex gap-4 md:col-span-2">
   <div className="flex-shrink-0">
   <Award className="w-6 h-6 text-[#1d7682]" />
   </div>
   <div>
   <h3 className="font-serif font-bold text-[#333333] mb-2">$15B+ in Client Assets</h3>
   <p className="text-[#5b6a71] text-sm">That scale means better pricing for you — and a team of specialists behind every recommendation I make.</p>
   </div>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 8: WHAT CLIENTS SAY */}
 <section className="bg-[#F7F4EE] py-20 lg:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  <AnimateOnScroll>
  <SectionEyebrow text="WHAT MY CLIENTS SAY" />
  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#333333] mt-6 mb-6 leading-tight">
   The Best Compliment I Get? &ldquo;I Finally Feel Like Someone&apos;s in My Corner.&rdquo;
  </h2>
  <p className="text-lg text-[#5b6a71] leading-relaxed max-w-3xl">
   I work with families, professionals, and business owners who were looking for something different — an advisor who actually listens, explains things clearly, and treats their money like it matters. Because it does.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 9: FINAL CTA */}
 <section className="bg-[#333333] py-20 lg:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
  <AnimateOnScroll>
  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
   Let&apos;s Start With a Simple Conversation.
  </h2>
  <p className="text-lg text-gray-300 leading-relaxed mb-10">
   No commitment. No product pitch. Just a real chat about where you are, where you want to go, and whether I&apos;m the right fit to help you get there. That&apos;s it.
  </p>
  <div className="flex flex-col items-center gap-4">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Free Conversation
   </Button>
   <p className="text-gray-400 text-sm">
   Free · Confidential · No obligation · Available nationwide
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>
 </>
 )
}
