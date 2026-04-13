import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'

export const metadata: Metadata = {
 title: 'Physician Wealth Planning & Tax Strategy | Arizona & Nevada | Banner Health Advisors',
 description:
 'Tax planning, asset protection, and retirement strategies for physicians and surgeons earning $400K-$800K+ across Arizona and Nevada. Wealth advisor for Banner Health and Mayo Clinic professionals.',
 robots: { index: false, follow: false },
}

export default function HealthcarePhysiciansLP() {
 return (
 <>
 {/* ================================================================
  HERO
  ================================================================ */}
 <section className="relative min-h-screen bg-[#333333] flex items-center">
  <Image
  src="/Photos/Medical-2.png"
  alt="Healthcare professionals"
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
   PHYSICIAN WEALTH & TAX PLANNING
   </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={100}>
   <h1 className="font-serif text-[34px] md:text-[48px] font-bold text-[#F7F4EE] mt-6 leading-tight">
   You Take Care of Everyone Else. Let Us Help Take Care of Your Finances.
   </h1>
  </AnimateOnScroll>
  <AnimateOnScroll delay={200}>
   <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[620px] mx-auto mt-6 leading-relaxed">
   If you&apos;re a healthcare professional at Banner Health, Mayo Clinic Scottsdale, or another health system in Arizona or Nevada, you know this story: great income, zero time, and a financial life that&apos;s way more complicated than it should be. You don&apos;t need another person selling you something. You need a partner who understands doctor finances and sits on the same side of the table as you.
   </p>
  </AnimateOnScroll>
  <AnimateOnScroll delay={300}>
   <div className="mt-8">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Let&apos;s Talk About Your Situation
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
   How We Help Physicians and Their Families
  </h2>
  <p className="font-sans text-[16px] text-[#5b6a71] text-center max-w-[600px] mx-auto mt-4 leading-relaxed">
   You spent years training. We spend our days making sure that hard-earned income works as hard as you do - with a plan built around your real life, not a template.
  </p>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Physician Income Tax Planning
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Between QBI deductions, charitable giving strategies, estimated taxes, and multi-state income, there&apos;s a lot of money at stake. We work with you and your CPA to make sure you&apos;re keeping as much as possible.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Asset Protection Strategies
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Lawsuits happen in medicine. We help you think through Arizona homestead exemptions, retirement account protections, malpractice coordination, and entity structuring - so your personal wealth stays protected.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Retirement Catch-Up Planning
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Started earning later because of training? You&apos;re not behind - you just need a different playbook. Backdoor Roths, cash balance plans, and catch-up strategies can close the gap faster than you&apos;d think.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Student Loan Payoff vs. Invest
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   PSLF, REPAYE, refinancing, aggressive payoff - the options are overwhelming. We run the numbers with you so you can make a clear-headed decision that actually minimizes what you pay over your lifetime.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={400}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
   Real Estate & Practice Equity
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Own rental properties? Have equity in a practice? We help you make smart decisions around investment real estate taxes, practice sales, and succession planning - all tied into your bigger picture.
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
   &ldquo;The last thing I wanted after a 14-hour day was to think about money. Jay got that right away. He showed us how to cut our tax bill by over $80K a year, set up real asset protection, and built a retirement plan that accounts for our loans and real estate. I finally feel like someone actually has our back on the financial side.&rdquo;
   </p>
   <p className="font-sans text-[15px] text-[#5b6a71] mt-4">
   - Physician, Banner Health, client since 2023
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
   Jay and our team work with physicians who&apos;ve spent their careers taking care of others and now want someone genuinely looking out for their financial health. He understands the income patterns, liability concerns, and tax complexity that come with medicine - and he&apos;ll give it to you straight, in plain English.
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
   Pick a time that works for you and we&apos;ll talk through your tax situation, asset protection, and retirement goals. No pitch, no pressure - just an honest conversation about where you are and where you want to be.
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
