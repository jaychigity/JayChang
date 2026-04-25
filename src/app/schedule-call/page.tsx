import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Schedule a Conversation With Jay Chang | Wealth Advisor | Phoenix, AZ',
 description: 'Schedule a conversation with Jay Chang, fiduciary wealth advisor at Farther. No pressure, no commitment — just a simple conversation to see if it is helpful.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/schedule-call',
 },
};

export default function ScheduleCall() {
 return (
 <main>
 {/* HERO SECTION */}
 <section className="relative bg-[#333333] py-20">
  <Image
  src="/Photos/Color-Jay-Headshot.png"
  alt="Jay Chang"
  fill
  className="object-cover opacity-20"
  priority
  sizes="100vw"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/90 to-[#333333]/40" />
  <div className="relative z-10 max-w-4xl mx-auto px-6">
  <AnimateOnScroll>
  <h1 className="text-5xl font-bold text-[#F7F4EE] mb-6">
   Let&apos;s Connect
  </h1>
  <p className="text-xl text-[#F7F4EE]/90 max-w-2xl">
   If something&apos;s been on your mind — a pension decision, an RSU vesting, a transition, retirement — that&apos;s worth a conversation.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* WHAT TO EXPECT SECTION */}
 <section className="bg-white py-20">
  <div className="max-w-4xl mx-auto px-6">
  <AnimateOnScroll>
  <h2 className="text-4xl font-bold text-[#333333] mb-12">
   What to Expect
  </h2>

  <div className="mb-12">
   <h3 className="text-2xl font-semibold text-[#333333] mb-6">
   A 30-minute, no-strings-attached conversation with me:
   </h3>
   <ul className="space-y-4 text-lg text-[#5b6a71]">
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4">•</span>
   <span>Walk me through your compensation, equity, and where things stand financially</span>
   </li>
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4">•</span>
   <span>Talk through the one or two things keeping you up at night</span>
   </li>
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4">•</span>
   <span>See if my experience and Farther&apos;s platform are a good match for your situation</span>
   </li>
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4">•</span>
   <span>Walk away with at least one idea you can act on right away</span>
   </li>
   </ul>
  </div>

  <div className="mb-12">
   <h3 className="text-2xl font-semibold text-[#333333] mb-6">
   What This Isn't:
   </h3>
   <ul className="space-y-3 text-lg text-[#5b6a71]">
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4">&times;</span>
   <span>Not a sales pitch — we promise</span>
   </li>
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4">&times;</span>
   <span>Not a product demo or presentation</span>
   </li>
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4">&times;</span>
   <span>Not a commitment to anything — you're just having a conversation</span>
   </li>
   </ul>
  </div>

  <div>
   <h3 className="text-2xl font-semibold text-[#333333] mb-6">
   This Might Be a Great Fit If You:
   </h3>
   <ul className="space-y-3 text-lg text-[#5b6a71]">
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4">&check;</span>
   <span>Have significant RSUs, stock options, or ESPP at a major employer</span>
   </li>
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4">&check;</span>
   <span>Are navigating deferred comp like SERPLUS, RTX DCP, or something similar</span>
   </li>
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4">&check;</span>
   <span>Are a physician or executive earning well but short on time to manage it all</span>
   </li>
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4">&check;</span>
   <span>Recently moved to Arizona from California and want to make the most of the tax savings</span>
   </li>
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4">&check;</span>
   <span>Have $500K+ in investable assets and feel like your current plan isn't keeping up</span>
   </li>
   </ul>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* CALENDAR & CONTACT SECTION */}
 <section className="bg-[#FAFAF8] py-20">
  <div className="max-w-4xl mx-auto px-6">
  <AnimateOnScroll>
  <div className="bg-white rounded-[12px] p-8 text-center shadow-sm">
   <h3 className="text-2xl font-semibold text-[#333333] mb-8">
   Ready When You Are
   </h3>
   <Button
   href="https://meetings.hubspot.com/jay-chang1/farthercom"
   variant="primary"
   >
   Schedule a Conversation
   </Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* TRUST BLOCK SECTION */}
 <section className="bg-[#FAFAF8] py-20">
  <div className="max-w-4xl mx-auto px-6">
  <AnimateOnScroll>
  <h2 className="text-4xl font-bold text-[#333333] mb-12">
   Why People Work With Me
  </h2>

  <ul className="space-y-6 text-lg text-[#5b6a71]">
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4 text-xl">•</span>
   <span>
   <strong className="text-[#333333]">Fiduciary, always</strong> — I&apos;m legally required to put your interests first, and I wouldn&apos;t have it any other way
   </span>
   </li>
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4 text-xl">•</span>
   <span>
   <strong className="text-[#333333]">I know how you get paid</strong> — Intel SERPLUS, NVIDIA ESPP, RTX pension, Apple DCP, Banner Health 401(k) — this is what I do every day
   </span>
   </li>
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4 text-xl">•</span>
   <span>
   <strong className="text-[#333333]">Farther's Intelligent Wealth Platform</strong> — $15B+ AUM with automated tax-loss harvesting working behind the scenes
   </span>
   </li>
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4 text-xl">•</span>
   <span>
   <strong className="text-[#333333]">Named Best RIA to Work For, 2025</strong> — good people doing good work
   </span>
   </li>
   <li className="flex items-start">
   <span className="text-[#1d7682] font-bold mr-4 text-xl">•</span>
   <span>
   <strong className="text-[#333333]">Based in Tempe</strong>, proudly serving families across Arizona, California, Nevada, and nationwide
   </span>
   </li>
  </ul>
  </AnimateOnScroll>
  </div>
 </section>
 </main>
 );
}
