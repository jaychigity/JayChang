import type { Metadata } from 'next';
import Image from 'next/image';
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
 const teamPhotos = [
 { photo: '/Photos/Michael-Lee-color.avif', width: 722, height: 800 },
 { photo: '/Photos/Sutanto-color.avif', width: 1160, height: 1200 },
 { photo: '/Photos/Alex-Paul-color.png', width: 2040, height: 1879 },
 { photo: '/Photos/Daniel-Gilham-color.avif', width: 722, height: 800 },
 { photo: '/Photos/Ashton-Hayes-color.png', width: 2115, height: 1848 },
 { photo: '/Photos/Aaron-Sheklin.avif', width: 1160, height: 1200 },
 { photo: '/Photos/Stacey-Kirkpatrick-color.png', width: 2460, height: 1528 },
 ];

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

  {/* Headshot Row */}
  <AnimateOnScroll>
  <div className="flex justify-center items-center gap-4 md:gap-6 mb-16 flex-wrap">
   {teamPhotos.map((member, index) => (
   <div
    key={index}
    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#E8E6E1]"
   >
    <Image
    src={member.photo}
    alt="Team member"
    width={member.width}
    height={member.height}
    className="w-full h-full object-cover object-top"
    />
   </div>
   ))}
  </div>
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
    <p className="text-[#5b6a71] leading-relaxed">
    A former TIAA-Nuveen Co-Portfolio Manager with 20+ years in asset management and a Stanford MBA. Currently sits on the investment committees of the University of Hawaii Foundation and the Honolulu Museum of Art.
    </p>
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

   <div>
    <h3 className="font-serif text-xl font-semibold text-[#333333] mb-2">Institutional Sales</h3>
    <p className="text-[#5b6a71] leading-relaxed">
    A licensed attorney (FL and NY Bar) who co-founded a fintech platform acquired in 2019, with 15+ years advising organizations on fiduciary stewardship.
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
