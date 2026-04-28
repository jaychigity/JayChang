import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'

export const metadata: Metadata = {
 title: 'Tech Professional Wealth Planning - RSU & ESPP Strategy | Apple, NVIDIA Advisors',
 description:
 'ESPP optimization, RSU vesting, and equity management for tech professionals earning $200K-$500K+. Wealth advisor for tech engineers and executives.',
 robots: { index: false, follow: false },
}

export default function TechProfessionalsLP() {
 return (
 <>
 {/* ================================================================
  HERO
  ================================================================ */}
 <section className="relative min-h-screen bg-[#333333] flex items-center">
  <Image
  src="/Photos/Semiconductor-1.png"
  alt="Technology professionals"
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
   EQUITY COMPENSATION & WEALTH STRATEGY
   </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
   <h1 className="font-serif text-[34px] md:text-[48px] font-bold text-[#F7F4EE] mt-6 leading-tight">
   Your Comp Package Is Powerful. Let&apos;s Make Sure You&apos;re Actually Using It.
   </h1>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
   <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[620px] mx-auto mt-6 leading-relaxed">
   If you&apos;re at Apple&apos;s Mesa campus or NVIDIA&apos;s Phoenix office, you already know your total comp is serious money - $200K-$500K+ with RSUs, ESPPs, and bonuses stacked on top. The problem? Most financial advisors don&apos;t really get how any of that works. We do. And we&apos;d love to help you turn it into real, lasting wealth.
   </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={300}>
   <div className="mt-8">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Let&apos;s Talk About Your Comp
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
   How We Help Tech Professionals Like You
  </h2>
  <p className="font-sans text-[16px] text-[#5b6a71] text-center max-w-[600px] mx-auto mt-4 leading-relaxed">
   We sit down with you and turn that complicated comp package into a clear, simple plan that actually builds wealth - without leaving money on the table.
  </p>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   ESPP Optimization
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Qualified vs. disqualifying dispositions sound confusing - until someone walks you through it. We help you figure out when to sell your ESPP shares so you keep more and pay less in taxes.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Multi-Year Equity Projection
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   We map out your next 3-5 years of vesting alongside your real life - the house you want to buy, the kids&apos; school, the trips you want to take. Your equity becomes part of the plan, not an afterthought.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   AMT & Tax Bracket Management
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Between RSU vesting, stock option exercises, bonuses, and ESPP activity, your tax situation gets complicated fast. We coordinate all of it so you&apos;re not blindsided by AMT or a surprise tax bill.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Post-Vest Diversification
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Once your RSUs vest, having too much in one stock is a real risk. We help you diversify in a tax-smart way that fits your comfort level and your goals - no knee-jerk selling, just a thoughtful approach.
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
   &ldquo;Honestly, I was just watching stock pile up in my account every quarter with zero plan. Jay sat down with me, showed me exactly when to sell my ESPP shares for the best tax outcome, mapped out my next three years of vesting, and tied it all into a real investment strategy. For the first time, I feel like I&apos;m actually using my comp to build something.&rdquo;
   </p>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-4">
   - Tech professional, NVIDIA, client since 2023
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
   I work with tech professionals who know their comp is valuable but want a real partner to help them make the most of it. I dig into RSU tax timing, ESPP strategies, and building investment plans that start with your comp package. Think of me as the financially nerdy neighbor you always wished you had.
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
   Grab a time on Jay&apos;s calendar and we&apos;ll walk through your equity package together. An unfiltered look at where you stand and what we might do differently.
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
