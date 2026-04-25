import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'

export const metadata: Metadata = {
 title: 'Aerospace & Defense Professional Wealth Planning | Arizona & California | Honeywell, Raytheon Advisors',
 description:
 'Deferred compensation, pension, and long-tenure wealth planning for aerospace and defense professionals at Honeywell, Raytheon (Tucson AZ & El Segundo CA). Fiduciary advisor for security clearance-sensitive planning.',
 robots: { index: false, follow: false },
}

export default function AerospaceDefenseLP() {
 return (
 <>
 {/* ================================================================
  HERO
  ================================================================ */}
 <section className="relative min-h-screen bg-[#333333] flex items-center">
  <Image
  src="/Photos/Defence-1.png"
  alt="Aerospace and defense"
  fill
  className="object-cover opacity-20"
  priority
  sizes="100vw"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/90 to-[#333333]/40" />
  <div className="relative z-10 w-full px-[20px] md:px-[40px] lg:px-[80px] py-[120px]">
  <div className="max-w-[800px] mx-auto text-center">
  <AnimateOnScroll>
   <p className="font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-[#1d7682]">
   DEFERRED COMPENSATION & PENSION PLANNING
   </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
   <h1 className="font-serif text-[34px] md:text-[48px] font-bold text-[#F7F4EE] mt-6 leading-tight">
   You&apos;ve Built a Career with Precision. Your Finances Deserve the Same.
   </h1>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
   <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[620px] mx-auto mt-6 leading-relaxed">
   If you&apos;re at Honeywell, Raytheon (whether Tucson or El Segundo), or another major contractor in Arizona or California, you&apos;ve probably spent years building something meaningful. Along the way, you&apos;ve accumulated deferred comp, pension benefits, employer stock, and maybe a security clearance that adds another layer. That&apos;s a lot of moving parts - and you deserve a financial partner who actually understands all of them.
   </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={300}>
   <div className="mt-8">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Let&apos;s Talk About Your Plan
   </Button>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  TRUST BAR
  ================================================================ */}
 <section className="bg-[#FAFAF8] py-[32px] px-[20px] border-y border-[#E8E6E1]">
  <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
  <div className="text-center">
  <p className="font-sans text-[14px] font-semibold text-[#333333]">
   SEC-Registered
  </p>
  <p className="font-sans text-[13px] text-[#5b6a71]">
   Investment Adviser
  </p>
  </div>
  <span className="hidden sm:inline text-[#E8E6E1]">|</span>
  <div className="text-center">
  <p className="font-sans text-[14px] font-semibold text-[#333333]">
   Fiduciary
  </p>
  <p className="font-sans text-[13px] text-[#5b6a71]">
   We&apos;re legally on your side
  </p>
  </div>
  <span className="hidden sm:inline text-[#E8E6E1]">|</span>
  <div className="text-center">
  <p className="font-sans text-[14px] font-semibold text-[#333333]">
   $15B+ AUM
  </p>
  <p className="font-sans text-[13px] text-[#5b6a71]">
   Assets under management
  </p>
  </div>
  </div>
 </section>

 {/* ================================================================
  SERVICES / BENEFITS
  ================================================================ */}
 <section className="bg-[#FAFAF8] py-[60px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[900px] mx-auto">
  <AnimateOnScroll>
  <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-[#333333] text-center">
   How We Help Aerospace & Defense Professionals
  </h2>
  <p className="font-sans text-[16px] text-[#5b6a71] text-center max-w-[600px] mx-auto mt-4 leading-relaxed">
   Your benefits package is different from most people&apos;s - and your financial plan should be, too. We take the time to understand how all the pieces fit together.
  </p>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Deferred Compensation Optimization
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Deferral elections, distribution timing, investment choices within your plan - these decisions add up to a lot of money over a career. We walk through them with you so you feel confident you&apos;re making the right calls.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Pension & Retirement Integration
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Lump sum or annuity? When to start Social Security? How does your pension fit with everything else? We help you see the full picture and make decisions that work for your family - not just on paper, but in real life.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Long-Tenure Wealth Accumulation
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   After 15, 20, or 30 years at one company, you&apos;ve quietly built real wealth through steady contributions and compounding. That takes a different strategy than someone who job-hops every two years. We plan accordingly.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Security Clearance-Sensitive Planning
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   We understand that financial matters can intersect with your clearance, and we treat that with the seriousness it deserves. Complete discretion, always.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={400}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Executive Compensation Review
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   For directors and VPs earning $300K+, your total comp has a lot of levers. We review the whole picture together - benefits, equity, deferred comp - and help you build a long-term strategy that matches the career you&apos;ve built.
   </p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  TESTIMONIAL
  ================================================================ */}
 <section className="bg-[#F7F4EE] py-[60px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[700px] mx-auto text-center">
  <AnimateOnScroll>
  <div className="border-l-4 border-[#1d7682] pl-6 text-left">
   <p className="font-serif text-[20px] md:text-[24px] text-[#333333] leading-relaxed italic">
   &ldquo;After 20 years with Honeywell, I had a pension, deferred comp, employer stock, and honestly no clear picture of what any of it meant for retirement. Jay sat down with me and laid it all out - when to take deferred comp distributions, how to sequence my pension, how it all fits with my investments. For the first time, I actually feel confident about what&apos;s ahead.&rdquo;
   </p>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-4">
   - Aerospace professional, client since 2023
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ================================================================
  ABOUT JAY
  ================================================================ */}
 <section className="bg-[#FAFAF8] py-[60px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[700px] mx-auto text-center">
  <AnimateOnScroll>
  <p className="font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-[#1d7682]">
   YOUR ADVISOR
  </p>
  <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-[#333333] mt-4">
   Jay Chang
  </h2>
  <p className="font-sans text-[15px] text-[#5b6a71] mt-1">
   VP, Wealth Advisor
  </p>
  <p className="font-sans text-[16px] text-[#5b6a71] leading-relaxed mt-6">
   Jay and our team work with long-career professionals who need someone to help coordinate pensions, deferred comp, and employer equity into one coherent plan. He genuinely enjoys the puzzle of aerospace and defense benefits - and he&apos;ll make sure your retirement plan reflects the disciplined career you&apos;ve built.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ================================================================
  CTA
  ================================================================ */}
 <section className="bg-[#333333] py-[60px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[700px] mx-auto text-center">
  <AnimateOnScroll>
  <h2 className="font-serif text-[28px] md:text-[40px] font-semibold text-[#F7F4EE] leading-tight">
   Let&apos;s Have a Conversation
  </h2>
  <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[540px] mx-auto mt-5 leading-relaxed">
   Grab a time on Jay&apos;s calendar and we&apos;ll walk through your deferred comp, pension, and retirement picture together. A straightforward conversation about your financial life.
  </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <div className="mt-8">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Grab a Time to Chat
   </Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ================================================================
  COMPLIANCE DISCLAIMER
  ================================================================ */}
 <section className="bg-[#333333] border-t border-[#444444] py-[24px] px-[20px]">
  <div className="max-w-[700px] mx-auto text-center">
  <p className="font-sans text-[12px] text-[#F7F4EE]/40 leading-relaxed">
  Advisory services provided by Farther Finance Advisors LLC, an
  SEC-registered investment adviser. Registration does not imply a
  certain level of skill or training. Past performance is not
  indicative of future results. This page is for informational
  purposes only and does not constitute investment advice.
  </p>
  </div>
 </section>
 </>
 )
}
