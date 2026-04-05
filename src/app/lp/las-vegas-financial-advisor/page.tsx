import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'

export const metadata: Metadata = {
 title: 'Fiduciary Financial Advisor in Scottsdale | Farther',
 description:
 'Your fiduciary financial advisor in Scottsdale. Nevada tax planning, retirement planning, estate planning with dynasty trusts, and investment management for families in Summerlin, Henderson, MacDonald Highlands, The Ridges, and Lake Scottsdale.',
 robots: { index: false, follow: false },
}

export default function LasVegasFinancialAdvisorLP() {
 return (
 <>
 {/* ================================================================
  HERO
  ================================================================ */}
 <section className="relative min-h-screen bg-[#333333] flex items-center">
  <Image
  src="/Photos/las-vegas-couple-sunset.avif"
  alt="Las Vegas sunset"
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
   FIDUCIARY FINANCIAL ADVISOR
   </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
   <h1 className="font-serif text-[34px] md:text-[48px] font-bold text-[#F7F4EE] mt-6 leading-tight">
   Your Fiduciary Financial Advisor in Scottsdale
   </h1>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
   <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[620px] mx-auto mt-6 leading-relaxed">
   Nevada tax planning, retirement planning, estate planning with
   dynasty trusts, and investment management - for families in
   Summerlin, Henderson, MacDonald Highlands, The Ridges, Lake Las
   Vegas, and those relocating from California.
   </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={300}>
   <div className="mt-8">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Confidential Consultation
   </Button>
   </div>
   <p className="font-sans text-[15px] text-[#F7F4EE]/70 mt-4">
   or call{' '}
   <a
   href="tel:+14809440880"
   className="text-[#F7F4EE]/70 hover:text-[#1d7682] font-semibold transition-colors"
   >
   (480) 944-0880
   </a>
   </p>
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
   Your interests come first
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
   What We Do for Scottsdale Families
  </h2>
  <p className="font-sans text-[16px] text-[#5b6a71] text-center max-w-[600px] mx-auto mt-4 leading-relaxed">
   Whether you have been in Nevada for decades or recently relocated
   from California, we build strategies that take full advantage of
   Nevada&apos;s tax-friendly environment.
  </p>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Nevada Tax Planning
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Maximize the benefits of Nevada&apos;s zero state income tax.
   Residency establishment, California exit planning, income
   timing strategies, and coordination with your CPA to ensure
   full compliance and maximum savings.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Retirement Planning
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Distribution sequencing, Social Security optimization, Roth
   conversion laddering, and Medicare planning - designed to
   maximize your after-tax retirement income in a no-income-tax
   state.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Estate Planning &amp; Dynasty Trusts
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Nevada offers some of the strongest asset protection and
   dynasty trust laws in the country. We coordinate with your
   estate attorney to structure trusts that protect wealth for
   generations without state-level estate tax.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Investment Management
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Institutional-grade portfolio construction with direct
   indexing, alternative investments, and risk management - 
   tailored to your family&apos;s risk tolerance, timeline, and
   objectives.
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
   &ldquo;When we moved from California to Henderson, we had no
   idea how many financial decisions were involved - 
   residency, trust restructuring, Roth conversions, the whole
   picture. Jay walked us through every step and made sure we
   captured every tax advantage Nevada offers. We should have made
   this move years ago.&rdquo;
   </p>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-4">
   - Henderson family, California-to-Nevada relocation,
   clients since 2022
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ================================================================
  ABOUT ROB
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
   Jay works with a select group of families across Arizona, California, and Nevada
   who want a single point of accountability for their entire
   financial life. With deep experience helping California transplants
   establish Nevada residency and optimize their financial position,
   he brings clarity to every stage of the transition.
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
   Ready to Talk?
  </h2>
  <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[540px] mx-auto mt-5 leading-relaxed">
   Schedule a confidential conversation with Jay to discuss your
   goals. No sales pitch, no obligation - just a focused
   discussion about what matters most to your family.
  </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
  <div className="mt-8">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Confidential Consultation
   </Button>
  </div>
  <p className="font-sans text-[15px] text-[#F7F4EE]/70 mt-4">
   or call{' '}
   <a
   href="tel:+14809440880"
   className="text-[#F7F4EE]/70 hover:text-[#1d7682] font-semibold transition-colors"
   >
   (480) 944-0880
   </a>
  </p>
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
