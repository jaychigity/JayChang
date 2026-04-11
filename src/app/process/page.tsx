import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'How Working With Jay Chang Actually Works | Our Wealth Management Process',
 description: 'See how Jay Chang and our team at Farther walk you through every step — from a simple intro call to an ongoing partnership that grows with you. No jargon, no pressure.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/process',
 },
};

const steps = [
 {
 number: 1,
 headline: 'A Conversation, Not a Sales Pitch',
 title: 'Discovery Call',
 body: '30-45 minutes, just you and Jay. I\'ll talk about where you are right now — your compensation, your accounts, what keeps you up at night. No slide decks, no obligations. If I can give you one useful idea whether or not you become a client, that\'s a win in our book.',
 cta: 'Schedule Your Discovery Call',
 },
 {
 number: 2,
 headline: 'We Handle the Boring Stuff So You Don\'t Have To',
 title: 'Onboarding & Data Gathering',
 body: 'Our Farther Concierge Team takes the wheel. We\'ll ask for the basics: recent pay stubs, equity plan statements, a couple years of tax returns, 401(k) and deferred comp details, current investment statements, and your benefits summary. Everything uploads through a secure portal — simple and painless.',
 },
 {
 number: 3,
 headline: 'A Financial Plan Built Around How You Actually Get Paid',
 title: 'Plan Design',
 body: 'This is where things get interesting. We build a real, scenario-based plan that covers multi-year tax projections, your equity vesting calendar with after-tax modeling, retirement income under different what-if scenarios, a portfolio designed for your life, and action items ranked by what moves the needle most. Then we sit down together and walk through it.',
 },
 {
 number: 4,
 headline: 'From "Let\'s Do This" to Done — Without the Paperwork Headache',
 title: 'Implementation',
 body: 'Our Farther Concierge Team handles the heavy lifting: account transfers, investment purchases, beneficiary updates, and coordinating with your employer benefits. Most clients are fully up and running in days, not weeks.',
 },
 {
 number: 5,
 headline: 'Your Life Changes. Your Plan Should Too.',
 title: 'Ongoing Optimization',
 body: 'We check in quarterly to stay on top of equity vesting, tax positioning, and how your portfolio is doing. We reach out before the big moments — open enrollment, RSU vests, year-end deadlines — so nothing slips through the cracks. Annual plan review, plus you can call or text whenever life throws you a curveball. Our goal: be the first call you make when a financial question comes up.',
 },
];

export default function ProcessPage() {
 return (
 <main>
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Work With Jay Chang — 5-Step Wealth Planning Process",
      "description": "From a simple intro call to an ongoing partnership. No jargon, no pressure — here is how Jay Chang and the team at Farther walk you through every step.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Discovery Call",
          "text": "A 30-45 minute conversation with Jay about where you are right now — your compensation, your accounts, and what keeps you up at night. No slide decks, no obligations."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Onboarding & Data Gathering",
          "text": "The Farther Concierge Team collects the basics: pay stubs, equity plan statements, tax returns, 401(k) and deferred comp details, investment statements, and benefits summary. Everything uploads through a secure portal."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Plan Design",
          "text": "A scenario-based financial plan covering multi-year tax projections, equity vesting calendar with after-tax modeling, retirement income scenarios, a portfolio designed for your life, and prioritized action items."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Implementation",
          "text": "The Farther Concierge Team handles account transfers, investment purchases, beneficiary updates, and coordinating with your employer benefits. Most clients are fully set up in days, not weeks."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Ongoing Optimization",
          "text": "Quarterly check-ins on equity vesting, tax positioning, and portfolio performance. Proactive outreach before open enrollment, RSU vests, and year-end deadlines. Annual plan review plus on-demand access whenever life changes."
        }
      ]
    })
  }}
 />
 {/* Hero Section */}
 <section className="relative bg-[#333333] px-6 py-20 md:py-32">
  <Image
  src="/Photos/Jay-Office.png"
  alt="Jay Chang office"
  fill
  className="object-cover opacity-20"
  priority
  sizes="100vw"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/90 to-[#333333]/40" />
  <div className="relative z-10 max-w-4xl mx-auto">
  <AnimateOnScroll>
  <div className="text-center">
   <p className="text-sm font-semibold text-[#1d7682] uppercase tracking-wide mb-4">
   THE PROCESS
   </p>
   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F4EE] mb-6 leading-tight">
   5 Steps From First Call to Ongoing Partnership
   </h1>
   <p className="text-xl text-[#F7F4EE]/90 mb-8 max-w-2xl mx-auto">
   Simple on your end. Thorough on ours. Most clients are fully up and running in under 30 days.
   </p>
   <Button href="/schedule-consultation" variant="primary">
   Schedule Your Discovery Call
   </Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Steps Section */}
 <section>
  {steps.map((step, index) => (
  <div
  key={step.number}
  className={index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}
  >
  <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
   <AnimateOnScroll>
   <div className="flex flex-col md:flex-row gap-8 md:gap-12">
   {/* Step Number */}
   <div className="flex-shrink-0">
    <div className="w-16 h-16 rounded-full bg-[#1d7682] flex items-center justify-center">
    <span className="text-2xl font-bold text-white">
    {step.number}
    </span>
    </div>
   </div>

   {/* Content */}
   <div className="flex-grow">
    <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
    {step.headline}
    </h2>
    <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
    {step.body}
    </p>
    {step.cta && (
    <Button href="/schedule-consultation" variant="outline">
    {step.cta}
    </Button>
    )}
   </div>
   </div>
   </AnimateOnScroll>
  </div>
  </div>
  ))}
 </section>

 {/* Final CTA Section */}
 <section className="bg-[#333333] px-6 py-20 md:py-32">
  <div className="max-w-4xl mx-auto text-center">
  <AnimateOnScroll>
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
   The Hardest Part? Picking Up the Phone. We Handle Everything After That.
  </h2>
  <div className="mb-6">
   <Button href="/schedule-consultation" variant="primary">
   Schedule Your Discovery Call
   </Button>
  </div>
  <p className="text-white text-lg mb-2">
   Free &middot; Confidential &middot; Zero obligation
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Trust Footer Bar */}
 <footer className="bg-[#FAFAF8] px-6 py-8 text-center text-[#5b6a71]">
  <p className="text-sm">
  Jay Chang | Farther Wealth Management
  </p>
  <p className="text-sm mt-2">
  Questions? Let's talk:{' '}
  <a href="/schedule-consultation" className="text-[#1d7682] hover:underline">
  /schedule-consultation
  </a>
  </p>
 </footer>
 </main>
 );
}
