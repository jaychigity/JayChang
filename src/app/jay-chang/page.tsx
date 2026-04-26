import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import SectionEyebrow from '@/components/SectionEyebrow';
import { Lock, BarChart3, Gauge, Target, Layers, TrendingUp, Clock, Award } from 'lucide-react';

export const metadata: Metadata = {
 title: 'Jay Chang | Vice President, Wealth Advisor | Farther',
 description: 'Meet Jay Chang, a fiduciary wealth advisor at Farther in Tempe, Arizona. Jay specializes in retirement income planning, investment strategy, tax planning, and wealth building for professionals, business owners, and families across all wealth stages.',
 alternates: {
 canonical: 'https://www.advisorjay.com/jay-chang',
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
  url: 'https://www.advisorjay.com/jay-chang',
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

  {/* Right Column - Image (sticky so it travels with the longer left column) */}
  <AnimateOnScroll delay={0.2} className="md:sticky md:top-[100px] md:self-start">
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

 {/* 2. HOW JAY WORKS */}
 <section className="bg-[#FAFAF8] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6">
  <div className="space-y-10">
   <AnimateOnScroll>
   <div>
    <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-6">
    I&apos;m a Fiduciary. That&apos;s Non-Negotiable.
    </h3>
    <p className="text-lg text-[#333333] leading-relaxed">
    What does that actually mean for you? It means I&apos;m legally required to act in your best interest. No commissions, no sales quotas, no hidden incentives. There&apos;s a big difference between &ldquo;is this investment suitable?&rdquo; and &ldquo;is this the best decision for your family?&rdquo; I only ask the second question.
    </p>
   </div>
   </AnimateOnScroll>

   <AnimateOnScroll delay={0.1}>
   <div>
    <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-6">
    Your Biggest Opportunity Probably Isn&apos;t a Better Fund
    </h3>
    <p className="text-lg text-[#333333] leading-relaxed">
    The biggest wins I see aren&apos;t about picking the right investment. They&apos;re about managing your compensation smarter. Take an NVIDIA engineer: setting up a mega backdoor Roth, running quarterly tax projections, building a rules-based plan for when to sell equity tied to your vesting schedule. That&apos;s where real wealth compounds over time. Index funds alone won&apos;t find you an extra $2M over ten years. But an intelligent plan around how you get paid? That can.
    </p>
   </div>
   </AnimateOnScroll>

   <AnimateOnScroll delay={0.2}>
   <div>
    <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-6">
    I&apos;m the One Who Calls You First
    </h3>
    <p className="text-lg text-[#333333] leading-relaxed">
    The most valuable thing I can do is reach out in October about your January vest, remind you about the August ESPP window, and flag that December 31 deadline before it sneaks up. I&apos;m proactive. I&apos;m specific. I don&apos;t wait for you to figure it out on your own. That&apos;s my job.
    </p>
   </div>
   </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* 4. WHY I CHOSE FARTHER */}
 <section className="bg-[#FAFAF8] py-20 lg:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  <AnimateOnScroll>
  <div className="text-center max-w-4xl mx-auto mb-16">
   <SectionEyebrow text="WHY I CHOSE FARTHER" />
   <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#333333] mt-6 mb-6 leading-tight">
   Great Technology and Great Advice Shouldn&apos;t Be an Either/Or.
   </h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   I partnered with Farther because I believe you deserve both: an advisor who knows your situation, backed by a platform that never drops the ball. After years at large institutions, I saw firsthand how difficult it is to deliver truly seamless, detailed planning. Farther changed that. The Intelligent Wealth Platform handles the heavy lifting, so I can spend my time doing what actually matters: thinking about your family, your goals, and your future.
   </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
   {/* Feature 1 */}
   <div className="bg-white p-8 rounded-lg flex gap-4">
   <div className="flex-shrink-0">
   <Lock className="w-6 h-6 text-[#1d7682]" />
   </div>
   <div>
   <h3 className="font-serif font-bold text-[#333333] mb-2">Everything in One Place</h3>
   <p className="text-[#5b6a71] text-sm">All your accounts on a single dashboard, so you always know where you stand.</p>
   </div>
   </div>

   {/* Feature 2 */}
   <div className="bg-white p-8 rounded-lg flex gap-4">
   <div className="flex-shrink-0">
   <BarChart3 className="w-6 h-6 text-[#1d7682]" />
   </div>
   <div>
   <h3 className="font-serif font-bold text-[#333333] mb-2">Automatic Tax Savings</h3>
   <p className="text-[#5b6a71] text-sm">The platform scans daily for tax-loss harvesting opportunities, so you keep more of what you earn.</p>
   </div>
   </div>

   {/* Feature 3 */}
   <div className="bg-white p-8 rounded-lg flex gap-4">
   <div className="flex-shrink-0">
   <Gauge className="w-6 h-6 text-[#1d7682]" />
   </div>
   <div>
   <h3 className="font-serif font-bold text-[#333333] mb-2">Smart Account Placement</h3>
   <p className="text-[#5b6a71] text-sm">The platform puts the right investments in the right accounts, taxable, deferred, and Roth, to maximize your after-tax returns.</p>
   </div>
   </div>

   {/* Feature 4 */}
   <div className="bg-white p-8 rounded-lg flex gap-4">
   <div className="flex-shrink-0">
   <Target className="w-6 h-6 text-[#1d7682]" />
   </div>
   <div>
   <h3 className="font-serif font-bold text-[#333333] mb-2">Direct Indexing and Institutional SMAs</h3>
   <p className="text-[#5b6a71] text-sm">Investment portfolios built around your specific situation, not a one-size-fits-all model.</p>
   </div>
   </div>

   {/* Feature 5 */}
   <div className="bg-white p-8 rounded-lg flex gap-4">
   <div className="flex-shrink-0">
   <Layers className="w-6 h-6 text-[#1d7682]" />
   </div>
   <div>
   <h3 className="font-serif font-bold text-[#333333] mb-2">Alternative Investments</h3>
   <p className="text-[#5b6a71] text-sm">Access to the kinds of investments usually reserved for big institutions.</p>
   </div>
   </div>

   {/* Feature 6 */}
   <div className="bg-white p-8 rounded-lg flex gap-4">
   <div className="flex-shrink-0">
   <TrendingUp className="w-6 h-6 text-[#1d7682]" />
   </div>
   <div>
   <h3 className="font-serif font-bold text-[#333333] mb-2">Institutional-Quality Investments</h3>
   <p className="text-[#5b6a71] text-sm">Through Farther Asset Management, you get access to strategies built for tax efficiency, transparency, and long-term growth.</p>
   </div>
   </div>

   {/* Feature 7 */}
   <div className="bg-white p-8 rounded-lg flex gap-4">
   <div className="flex-shrink-0">
   <Clock className="w-6 h-6 text-[#1d7682]" />
   </div>
   <div>
   <h3 className="font-serif font-bold text-[#333333] mb-2">90% of My Time on You</h3>
   <p className="text-[#5b6a71] text-sm">Technology handles the paperwork, so I can focus on what matters: your plan.</p>
   </div>
   </div>

   {/* Feature 8 */}
   <div className="bg-white p-8 rounded-lg flex gap-4">
   <div className="flex-shrink-0">
   <Award className="w-6 h-6 text-[#1d7682]" />
   </div>
   <div>
   <h3 className="font-serif font-bold text-[#333333] mb-2">$15B+ in Client Assets</h3>
   <p className="text-[#5b6a71] text-sm">That scale means better pricing for you, and a team of specialists behind every recommendation I make.</p>
   </div>
   </div>
  </div>

  {/* Stats */}
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
