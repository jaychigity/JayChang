import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Amkor Technology Financial Advisor in Tempe & Chandler | RSU & Relocation Planning | Jay Chang',
 description: 'Wealth planning for Amkor Technology engineers and leaders in Tempe and Chandler. RSU planning, international relocation financial strategy, and equity compensation guidance from a fiduciary advisor.',
 alternates: {
 canonical: 'https://www.advisorjay.com/amkor-technology-financial-advisor-tempe',
 },
};

export default function AmkorTechnologyPage() {
 return (
 <div className="w-full">
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
   '@context': 'https://schema.org',
   '@type': 'FinancialService',
   name: 'Advisor Jay - Amkor Technology Financial Planning',
   description: 'Fiduciary wealth planning for Amkor Technology engineers and leaders in Tempe and Chandler. RSU planning, international relocation strategy, and equity compensation guidance.',
   areaServed: ['Tempe, Arizona', 'Chandler, Arizona', 'Phoenix, Arizona'],
   serviceType: ['Wealth Management', 'Equity Compensation Planning', 'Relocation Tax Planning'],
   url: 'https://www.advisorjay.com/amkor-technology-financial-advisor-tempe',
   provider: {
   '@type': 'Organization',
   name: 'Farther',
   url: 'https://www.advisorjay.com',
   },
  }),
  }}
 />
 {/* HERO SECTION */}
 <section className="relative w-full bg-[#F7F4EE] py-16 md:py-24">
  <Image
  src="/Photos/Semiconductor.png"
  alt="Semiconductor packaging"
  fill
  className="object-cover opacity-20"
  priority
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EE] via-[#F7F4EE]/90 to-[#F7F4EE]/40" />
  <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
  <AnimateOnScroll>
  <div className="space-y-6">
   <div className="text-sm font-semibold text-[#1d7682] tracking-wide uppercase">
   Amkor Technology Employee Financial Planning
   </div>
   <h1 className="text-4xl md:text-5xl font-bold text-[#333333] leading-tight">
   Amkor Technology Professionals: Your Career Spans the Globe. Your Financial Plan Should Too.
   </h1>
   <p className="text-lg text-[#5b6a71] max-w-3xl">
   Amkor&apos;s semiconductor packaging operations attract engineering talent from around the world to its Tempe and Chandler campuses. I help Amkor professionals manage equity compensation, international relocation wealth, and complex tax situations with clarity and confidence.
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 1: THE AMKOR EMPLOYEE PROFILE */}
 <section className="w-full bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6 md:px-12">
  <AnimateOnScroll>
  <div className="space-y-8">
   <div>
   <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
   The Amkor Employee Profile
   </h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Amkor&apos;s workforce is distinctly global. You may have relocated to Tempe or Chandler from Korea, Japan, Taiwan, or elsewhere - or you&apos;re managing family and financial ties across multiple countries. Your income reflects that reality: RSUs in AMKR stock, relocation packages, international retirement assets like Korean National Pension contributions or Japanese pension accounts, and the need to navigate two (or more) tax systems simultaneously.
   </p>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   That&apos;s not a standard financial planning problem. Most advisors are built for domestic-only situations. I specialize in exactly this: the engineering professional whose career is genuinely global.
   </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 2: RSU AND EQUITY PLANNING */}
 <section className="w-full bg-[#FAFAF8] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6 md:px-12">
  <AnimateOnScroll>
  <div className="space-y-8">
   <div>
   <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
   RSU and Equity Planning
   </h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Amkor&apos;s equity program creates specific planning opportunities and risks. You have overlapping grant cycles, vesting events that create sell-to-cover withholding requirements, and - for many - a large concentration of net worth in AMKR stock. The question isn&apos;t whether you should diversify. The question is how and when.
   </p>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   I build a framework: What percentage of net worth should be in AMKR? When do vesting events occur? What&apos;s your post-vesting hold strategy? How do you manage the tax consequences of selling? And how does equity fit into the larger picture of your international financial situation?
   </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 3: INTERNATIONAL RELOCATION PLANNING */}
 <section className="w-full bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6 md:px-12">
  <AnimateOnScroll>
  <div className="space-y-8">
   <div>
   <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
   International Relocation Planning
   </h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Whether you&apos;re relocating to the U.S. or managing your affairs while maintaining ties abroad, the complexity compounds quickly. FBAR and FATCA filing requirements for foreign accounts. U.S. tax residency rules that determine how you&apos;re taxed. The portability of retirement assets - or the loss of them if you don&apos;t plan. Currency exposure on international income and savings.
   </p>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   And Arizona-specific benefits: no state income tax, favorable treatment of retirement income, and strategic opportunities for wealth accumulation that most states don&apos;t offer. I integrate all of it into a comprehensive plan.
   </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* FINAL CTA SECTION */}
 <section className="w-full bg-[#F7F4EE] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
  <AnimateOnScroll>
  <div className="space-y-8">
   <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">
   You&apos;ve Built a Global Career. Build a Global-Class Financial Plan.
   </h2>
   <p className="text-lg text-[#5b6a71] max-w-2xl mx-auto">
   Jay Chang specializes in wealth planning for Amkor Technology professionals. Schedule a consultation to discuss your unique financial situation.
   </p>
   <div className="flex justify-center pt-4">
   <Button href="/schedule-consultation" variant="primary">
   Schedule Your Amkor Strategy Call
   </Button>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>
 </div>
 );
}
