import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import USClientMap from '@/components/USClientMap';

export const metadata: Metadata = {
 title: 'About Jay Chang | Your Neighbor Who Happens to Be a Wealth Advisor | Farther',
 description: 'Meet Jay Chang, a fiduciary wealth advisor at Farther in Tempe, Arizona. Jay and our team help families with real questions - how to plan for retirement, what to do with RSUs, how to protect your family\'s future - all without the corporate jargon.',
 alternates: {
 canonical: 'https://www.advisorjay.com/about',
 },
};

export default function AboutPage() {
 const teamMembers = [
 {
 name: 'Michael Lee',
 title: 'Principal, Wealth Advisor & Focus Team Lead, Farther',
 photo: '/Photos/Michael-Lee-color.avif',
 photoWidth: 722,
 photoHeight: 800,
 bio: [
  'Michael got into this work translating for his mother when she retired from Kaiser Permanente. That experience shaped everything. He\'s since helped professionals at PG&E, AT&T, Kaiser, Chevron, Northrop Grumman, Boeing, and Raytheon.',
  'InvestmentNews Rising Star 2025, AdvisorHub 250 Advisors to Watch 2025, Hot List 2024, Founders Club 2025.',
 ],
 },
 {
 name: 'Dr. Daniel R. Gilham',
 title: 'CFP® • Managing Director of Advisor Strategy, Farther',
 photo: '/Photos/Daniel-Gilham-color.avif',
 photoWidth: 722,
 photoHeight: 800,
 bio: [
  'Daniel is a CFP with 15 years of experience, a former systems engineer at AOL, and a doctoral candidate at the University of South Florida. He spent nearly a decade at Wells Fargo before that.',
  `He co-hosts The Horse's Mouth podcast, sits on the Advisory Board for GrowFL, was named Jacksonville 40 Under 40, and gives his time to Ho'ola Na Pua in Hawaii.`,
 ],
 },
 {
 name: 'Sutanto Widjaja',
 title: 'Chief Investment Officer, Farther Institutional',
 photo: '/Photos/Sutanto-color.avif',
 photoWidth: 1160,
 photoHeight: 1200,
 bio: [
  'Sutanto has 20+ years in asset management. He was Co-Portfolio Manager at TIAA-Nuveen running institutional portfolios, and co-founded IndiCo Capital.',
  'MBA from Stanford, BS from UC Berkeley. He serves on the Investment Committees of the University of Hawaii Foundation and the Honolulu Museum of Art.',
  'His focus: smart asset allocation, alternatives, and building portfolios that actually manage risk instead of just talking about it.',
 ],
 },
 {
 name: 'Ashton Hayes',
 title: 'JD, LL.M. in Taxation • Trust Services Associate, Farther',
 photo: '/Photos/Ashton-Hayes-color.png',
 photoWidth: 2115,
 photoHeight: 1848,
 bio: [
  'Ashton holds a JD and Master of Laws in Taxation from the University of Alabama. When you have questions about trusts, estates, or how to protect what you\'ve built for your family, she\'s the one who digs into the details.',
  'She handles trust structuring, complex beneficiary planning, and grantor trust strategies - the stuff that keeps your wealth where it belongs.',
 ],
 },
 {
 name: 'Stacey Kirkpatrick',
 title: 'CFP® • Financial Planning Specialist, Farther',
 photo: '/Photos/Stacey-Kirkpatrick-color.png',
 photoWidth: 2460,
 photoHeight: 1528,
 bio: [
  'Stacey has 15+ years of experience, holds a CFP with Series 7, 63, and 65 licenses, and is the kind of person who makes sure nothing falls through the cracks.',
  'She\'s the one making sure your plan is built right, every document is in order, and every step actually gets done. The behind-the-scenes person you\'ll be glad is on your team.',
 ],
 },
 {
 name: 'Alex Paul',
 title: 'Farther Advisory Team',
 photo: '/Photos/Alex-Paul-color.png',
 photoWidth: 2040,
 photoHeight: 1879,
 bio: [
  `Alex is a key member of our team supporting Jay's practice day-to-day. He brings sharp analytical thinking and a genuine care for doing right by every client.`,
  'From onboarding to implementation, Alex helps make sure the whole planning process runs smoothly so nothing gets missed.',
 ],
 },
 {
 name: 'Aaron Sheklin',
 title: 'JD • Director of Institutional Sales, Farther',
 photo: '/Photos/Aaron-Sheklin.avif',
 photoWidth: 1160,
 photoHeight: 1200,
 bio: [
  'Aaron is a licensed attorney (Florida and New York Bar) with a JD from Florida State and over 15 years advising organizations on strategic financial planning, investment guidance, and fiduciary stewardship.',
  'He co-founded ClickPay, which became the largest payment processor in real estate before its 2019 acquisition by RealPage. He also serves on the board of the Planned Giving Council of Northeast Florida.',
 ],
 },
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
  <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-6">
   Meet The Team
  </h2>
  <p className="text-lg text-[#333333] leading-relaxed mb-6 text-center">
   When you work with me, you don&apos;t just get me. You get our whole team. That&apos;s one of the most important things I can offer: real specialists in trust law, tax strategy, investment management, and planning who are all pulling in the same direction for you.
  </p>
  <p className="text-lg text-[#5b6a71] leading-relaxed mb-12 text-center">
   Every client situation is different, which is why I built a team with deep specializations. Here is who handles what.
  </p>
  </AnimateOnScroll>

  {/* Team Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {teamMembers.map((member, index) => (
   <AnimateOnScroll key={member.name} delay={index * 0.08}>
   <div className={`bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full`}>
   <div className="relative w-full h-[320px] mb-6 rounded-lg overflow-hidden">
    <Image
    src={member.photo}
    alt={member.name}
    width={member.photoWidth}
    height={member.photoHeight}
    className="w-full h-full object-cover object-top"
    />
   </div>
   <h4 className="text-lg font-bold text-[#333333] mb-1">
    {member.name}
   </h4>
   <p className="text-sm text-[#1d7682] font-semibold mb-4">
    {member.title}
   </p>
   <div className="space-y-3">
    {member.bio.map((paragraph, idx) => (
    <p key={idx} className="text-[#5b6a71] text-sm leading-relaxed">
    {paragraph}
    </p>
    ))}
   </div>
   </div>
   </AnimateOnScroll>
  ))}
  </div>
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
