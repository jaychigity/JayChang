import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'

export const metadata: Metadata = {
 title: 'Semiconductor Engineer Wealth Management | Arizona & California',
 description:
 'RSU vesting, concentrated stock, and equity management for semiconductor engineers at Intel, NVIDIA, Apple, and Microchip across Arizona and California. Fiduciary wealth advisor Jay Chang.',
 robots: { index: false, follow: false },
}

export default function SemiconductorProfessionalsLP() {
 return (
 <>
 {/* ================================================================
  HERO
  ================================================================ */}
 <section className="relative min-h-screen bg-[#333333] flex items-center">
  <Image
  src="/Photos/Semiconductor.png"
  alt="Semiconductor industry"
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
   EQUITY & COMPENSATION PLANNING
   </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
   <h1 className="font-serif text-[34px] md:text-[48px] font-bold text-[#F7F4EE] mt-6 leading-tight">
   Your Equity Is Piling Up. Let&apos;s Build a Plan Around It.
   </h1>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
   <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[620px] mx-auto mt-6 leading-relaxed">
   Whether you&apos;re at Intel in Chandler or Santa Clara, NVIDIA in Phoenix or Santa Clara, Apple in Mesa or Cupertino, or Microchip in Chandler, Roseville, San Jose, or San Diego - your comp package probably includes a hefty chunk of RSUs, stock options, and performance equity. That&apos;s a real wealth-building opportunity. But without the right plan, it can also mean a big, unexpected tax bill. We help make sure it&apos;s the former, not the latter.
   </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={300}>
   <div className="mt-8">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Let&apos;s Look at Your Equity Together
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
   Fee-Only
  </p>
  <p className="font-sans text-[13px] text-[#5b6a71]">
   No commissions, no product sales
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
   How We Help Semiconductor Professionals
  </h2>
  <p className="font-sans text-[16px] text-[#5b6a71] text-center max-w-[600px] mx-auto mt-4 leading-relaxed">
   RSU schedules, concentrated stock, multi-state taxes - most advisors glaze over when you bring this stuff up. We lean in. It&apos;s what we do every day.
  </p>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   RSU & Equity Vesting Strategies
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   We help you navigate sell-to-cover decisions, sort out supplemental withholding gaps, and time your equity recognition so you&apos;re not giving away more to taxes than you need to.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Concentrated Stock Risk Management
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   If 40%+ of your net worth is in one stock, that&apos;s a risk worth talking about. We build a thoughtful diversification plan together - no panic selling, just a steady approach that makes sense for your situation.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Relocation Wealth Planning
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Moving from California, Oregon, or even Taiwan? There are real tax savings your move can create - but only if you plan for them. We make sure you capture every advantage.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Mega Backdoor Roth Conversions
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   If your employer&apos;s 401(k) plan allows after-tax contributions (many do), this is one of the most powerful wealth-building tools out there. We help you set it up and keep it running smoothly.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={400}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   IPO & Liquidity Event Planning
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Holding pre-IPO equity? The time to plan is before the event, not after. We work with you to think through the scenarios so you&apos;re ready when the moment comes.
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
   &ldquo;Every quarter I was vesting equity and had no clue what my tax bill would look like. Jay sat down with me, mapped out exactly when I&apos;d hit each bracket, coordinated my RSU sales, and set up a mega backdoor Roth that saved me over $50K in taxes the first year. I actually understand my compensation now - and that feels really good.&rdquo;
   </p>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-4">
   - Semiconductor engineer, client since 2023
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
   My team and I work with engineers, executives, and equity holders who want someone in their corner who actually understands concentrated wealth, deferred compensation, and the tax headaches that come with it. As a fiduciary, I&apos;m legally required to put your interests first, and honestly, I wouldn&apos;t have it any other way.
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
   Pick a time on Jay&apos;s calendar and we&apos;ll talk through your equity situation and tax exposure. A straightforward conversation about where you stand and what might make sense.
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
