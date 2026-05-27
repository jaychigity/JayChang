import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/Button';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import USClientMap from '@/components/USClientMap';

export const metadata: Metadata = {
 title: 'About Jay Chang | Your Neighbor Who Happens to Be a Wealth Advisor',
 description: 'Meet Jay Chang, a fiduciary wealth advisor in Tempe, Arizona. I help families with real questions - how to plan for retirement, what to do with RSUs, how to protect your family\'s future - all without the corporate jargon.',
 alternates: {
 canonical: 'https://www.advisorjay.com/about',
 },
};

export default function AboutPage() {
 return (
 <main>
 {/* JSON-LD Person Schema */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jay Chang',
  jobTitle: 'Vice President, Wealth Advisor',
  worksFor: {
   '@type': 'Organization',
   name: 'Farther',
   url: 'https://www.advisorjay.com',
  },
  areaServed: [
   'Tempe, Arizona',
   'Phoenix, Arizona',
   'Chandler, Arizona',
   'Scottsdale, Arizona',
   'Mesa, Arizona',
   'Tucson, Arizona',
   'Silicon Valley, California',
  ],
  url: 'https://www.advisorjay.com/about',
  telephone: '(480) 944-0880',
  }),
  }}
 />

 {/* 1. THE TEAM */}
 <section className="bg-white py-20 lg:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  <AnimateOnScroll>
  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#333333] text-center mb-6 leading-tight">
   The Team Behind the Work
  </h2>
  <p className="text-lg text-[#333333] leading-relaxed mb-12 text-center max-w-3xl mx-auto">
   When you work with me, you&apos;re not getting a solo advisor. You&apos;re getting a team built for complex, high-stakes planning.
  </p>
  </AnimateOnScroll>

  {/* Capability Descriptions */}
  <AnimateOnScroll>
  <div className="max-w-3xl mx-auto space-y-8">
   <div>
    <h3 className="font-serif text-xl font-semibold text-[#333333] mb-2">Practice Leadership</h3>
    <p className="text-[#5b6a71] leading-relaxed">
    Led by a Principal who&apos;s spent his career working with utility, telecom, and aerospace employees at companies like PG&amp;E, AT&amp;T, Kaiser, Chevron, and Boeing. InvestmentNews Rising Star 2025, AdvisorHub 250 Advisors to Watch 2025.
    </p>
   </div>

   <div>
    <h3 className="font-serif text-xl font-semibold text-[#333333] mb-2">Investment Strategy</h3>
    <p className="text-[#5b6a71] leading-relaxed">
    A CFA-credentialed strategist with over a decade managing complex portfolios as both a CIO and Due Diligence Officer, spanning equities, fixed income, and alternatives.
    </p>
   </div>

   <div>
    <h3 className="font-serif text-xl font-semibold text-[#333333] mb-2">Institutional &amp; Nonprofit</h3>
    <ul className="text-[#5b6a71] leading-relaxed space-y-3 list-disc pl-5">
    <li>Former TIAA-Nuveen Co-Portfolio Manager, 20+ years in asset management, Stanford MBA. Sits on the investment committees of the University of Hawaii Foundation and the Honolulu Museum of Art.</li>
    <li>Licensed attorney (FL and NY Bar), co-founded a fintech platform acquired in 2019. 15+ years advising organizations on fiduciary stewardship.</li>
    </ul>
   </div>

   <div>
    <h3 className="font-serif text-xl font-semibold text-[#333333] mb-2">Trust &amp; Estate Planning</h3>
    <p className="text-[#5b6a71] leading-relaxed">
    A JD with a Master of Laws in Taxation handling trust structuring, complex beneficiary planning, and grantor trust strategies.
    </p>
   </div>

   <div>
    <h3 className="font-serif text-xl font-semibold text-[#333333] mb-2">Advisor Strategy</h3>
    <p className="text-[#5b6a71] leading-relaxed">
    A CFP and CEPA with nearly two decades bridging fintech innovation and real-world planning. Frequent conference speaker translating regulatory and market shifts into actionable strategy.
    </p>
   </div>

   <div className="border-t border-[#E8E6E1] pt-8">
    <p className="text-[#5b6a71] leading-relaxed">
    Behind them, a full operations and planning team manages the daily flow: account transfers, paperwork, scheduling, and follow-through so nothing falls through the cracks.
    </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* AREAS WE SERVE */}
 <section className="bg-[#FAFAF8] py-20 lg:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  <AnimateOnScroll>
  <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-6">
   Areas We Serve
  </h2>
  <p className="text-lg text-[#5b6a71] text-center max-w-3xl mx-auto mb-10">
   Based in Arizona, we work with families and professionals across the country. Hover over a state to explore.
  </p>

  {/* US Map */}
  <div className="max-w-4xl mx-auto mb-12">
   <USClientMap />
  </div>

  {/* State name list */}
  <p className="text-center text-[#5b6a71] text-base leading-relaxed max-w-3xl mx-auto">
   Arizona · California · Nevada · Utah · Colorado · Oregon · Washington · Idaho · Hawaii · Texas · Illinois · Tennessee · Florida · South Carolina · New York · New Jersey
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* 10. FINAL CTA */}
 <section className="bg-[#333333] py-20 lg:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
  <AnimateOnScroll>
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
   Ready When You Are.
  </h2>
  <div className="flex flex-col gap-4 justify-center items-center mb-8">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Conversation With Me
   </Button>
   <Button
   href="/process"
   variant="ghost"
   >
   Learn About the Process
   </Button>
  </div>

  <p className="text-gray-300 text-lg">
   Based in Tempe, Arizona. Serving families in Phoenix, Scottsdale, Tucson, Flagstaff, California, Hawaii, Texas, Utah, Washington, and nationwide.
  </p>
  </AnimateOnScroll>
  </div>
 </section>
 </main>
 );
}
