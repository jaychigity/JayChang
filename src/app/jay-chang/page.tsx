import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import SectionEyebrow from '@/components/SectionEyebrow';

export const metadata: Metadata = {
 title: 'Jay Chang | Vice President, Wealth Advisor | Farther',
 description: 'Meet Jay Chang, a fiduciary wealth advisor at Farther in Tempe, Arizona. Jay specializes in retirement income planning, investment strategy, tax planning, and wealth building for professionals, business owners, and families across all wealth stages.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/jay-chang',
 },
};

export default function JayChangPage() {
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
   url: 'https://www.PWM-Farther.com',
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
  url: 'https://www.PWM-Farther.com/jay-chang',
  telephone: '(480) 944-0880',
  }),
  }}
 />

 {/* 1. HERO */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
  {/* Left Column */}
  <AnimateOnScroll>
   <div>
   <SectionEyebrow text="ABOUT JAY CHANG" />
   <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mt-4 mb-10">
   Meet Jay Chang
   </h1>
   <div className="space-y-4 text-[#333333] text-lg leading-relaxed">
   <p>
   I help individuals and families navigate their financial lives with clarity and confidence. My focus is on retirement income planning, investment strategy, tax planning, estate planning, and long-term wealth building.
   </p>
   <p>
   Over the past 13+ years, I&apos;ve had the opportunity to work with professionals, families, and business owners across many different stages of life, largely through introductions and referrals. Today, that work has grown to serving clients nationwide.
   </p>
   <hr className="border-[#C5C0B8] my-6" />
   <p>
   My background includes formative years at Vanguard and Charles Schwab, where I worked with clients over many years, often across decades. That experience shaped how I approach this work today.
   </p>
   <p>
   I believe the best planning starts with understanding you: your values, your priorities, and where you want to go. My role is to help you prepare proactively, so you can move through life&apos;s transitions with clarity and confidence.
   </p>
   <p>
   I work with entire families, not just one decision-maker. That often means coordinating investment strategy, retirement planning, and trust and estate planning into one cohesive plan.
   </p>
   <hr className="border-[#C5C0B8] my-6" />
   <p>
   In many cases, I&apos;m initially brought in by one spouse or partner. From there, the focus expands to making sure both individuals, and often the broader family, are aligned, informed, and confident, without surprises along the way.
   </p>
   <p>
   To support that level of coordination, I&apos;ve built a robust team and network around me, so you&apos;re not relying on one perspective, but a coordinated approach that brings together investment, tax, and estate expertise under one strategy.
   </p>
   <hr className="border-[#C5C0B8] my-6" />
   <p>
   Before becoming an advisor, I built businesses in real estate, retail, and e-commerce. That experience gives me a practical lens when it comes to building, managing, and protecting wealth.
   </p>
   <p>
   I also care deeply about community impact and strategic philanthropy. As a member of the Association of Fundraising Professionals and AZ Impact for Good, I work with nonprofits and charitable organizations as both an advisor and fundraising strategist.
   </p>
   <hr className="border-[#C5C0B8] my-6" />
   <p>
   At the core of my work is a simple belief: Trust, alignment, and clarity matter more than complexity or net worth alone.
   </p>
   <p>
   My responsibility is to provide transparent guidance and be a long-term partner in your corner.
   </p>
   <hr className="border-[#C5C0B8] my-6" />
   <p>
   Outside of work, I enjoy time with my family, traveling, woodworking, and exploring the unpaved roads of Arizona in my 4Runner.
   </p>
   <p>
   My wife is an accomplished potter, and together we share a deep appreciation for craftsmanship and creativity. At home, life is full with our two children, two dogs, a leopard gecko, and a Mexican black kingsnake.
   </p>
   <p>
   I&apos;m passionate about food, I live to eat, not eat to live, and I&apos;m always seeking experiences that bring perspective to both life and work.
   </p>
   </div>
   </div>
  </AnimateOnScroll>

  {/* Right Column - Image */}
  <AnimateOnScroll delay={0.2}>
   <div className="bg-white rounded-lg md:mt-[100px]">
   <Image
   src="/Photos/Jay-arms-crossed-transparent.png"
   alt="Jay Chang"
   width={1558}
   height={2540}
   className="mx-auto"
   style={{ width: '100%', maxWidth: 520, height: 'auto' }}
   />
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* 2. THE FARTHER ADVANTAGE */}
 <section className="bg-[#FAFAF8] py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
  <AnimateOnScroll>
  <div className="mb-12">
   <p className="text-lg text-[#333333] leading-relaxed max-w-4xl">
   I chose Farther because it allows me to give you the level of attention and coordination you deserve, supported by technology that actually enhances your experience. After years at large institutions, I saw firsthand how difficult it can be to deliver truly seamless, detailed planning. Farther changed that, giving me the ability to focus fully on you while bringing everything together in a more thoughtful, efficient way.
   </p>
  </div>
  </AnimateOnScroll>

  {/* Platform Features Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
  <AnimateOnScroll delay={0.1}>
   <div className={`bg-[#FAFAF8] border border-[#C5C0B8] rounded-[12px] p-[32px] h-full`}>
   <h4 className="text-lg font-bold text-[#333333] mb-2">Everything in One Place</h4>
   <p className="text-[#5b6a71]">See all your accounts, updated in real time, on a single dashboard</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.15}>
   <div className={`bg-[#FAFAF8] border border-[#C5C0B8] rounded-[12px] p-[32px] h-full`}>
   <h4 className="text-lg font-bold text-[#333333] mb-2">Daily Tax-Loss Harvesting</h4>
   <p className="text-[#5b6a71]">We look for ways to save you on taxes every single day - not just in December</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.2}>
   <div className={`bg-[#FAFAF8] border border-[#C5C0B8] rounded-[12px] p-[32px] h-full`}>
   <h4 className="text-lg font-bold text-[#333333] mb-2">Smart Account Placement</h4>
   <p className="text-[#5b6a71]">We put the right investments in the right accounts so you keep more of what you earn</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.25}>
   <div className={`bg-[#FAFAF8] border border-[#C5C0B8] rounded-[12px] p-[32px] h-full`}>
   <h4 className="text-lg font-bold text-[#333333] mb-2">Direct Indexing and Institutional SMAs</h4>
   <p className="text-[#5b6a71]">Investment portfolios built around your specific situation - not a one-size-fits-all model</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.3}>
   <div className={`bg-[#FAFAF8] border border-[#C5C0B8] rounded-[12px] p-[32px] h-full`}>
   <h4 className="text-lg font-bold text-[#333333] mb-2">Alternative Investments</h4>
   <p className="text-[#5b6a71]">Access to the kinds of investments usually reserved for big institutions</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.35}>
   <div className={`bg-[#FAFAF8] border border-[#C5C0B8] rounded-[12px] p-[32px] h-full`}>
   <h4 className="text-lg font-bold text-[#333333] mb-2">90% of Our Time on You</h4>
   <p className="text-[#5b6a71]">Technology handles the paperwork so we can focus on what matters - your plan</p>
   </div>
  </AnimateOnScroll>
  </div>

  {/* Stats */}
  <AnimateOnScroll>
  <div className="text-center text-[#333333]">
   <p className="text-lg mb-4">
   Farther surpassed <span className="font-bold">$13B in recruited assets</span> in 2025, growing <span className="font-bold">4x the industry rate</span>.
   </p>
   <p className="text-lg font-bold">
   Inc. 5000 #1 fastest-growing financial services firm in America.
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* 3. CTA */}
 <section className="bg-[#333333] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6 text-center">
  <AnimateOnScroll>
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
   Ready When You Are.
  </h2>
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Conversation With Me
   </Button>
  </div>

  <p className="text-gray-300 text-lg">
   Based in Tempe, Arizona. Serving families in Phoenix, Chandler, Scottsdale, Mesa, Tucson, Silicon Valley, and nationwide.
  </p>
  </AnimateOnScroll>
  </div>
 </section>
 </main>
 );
}
