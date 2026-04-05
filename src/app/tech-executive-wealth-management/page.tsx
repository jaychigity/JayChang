import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Tech Executive Wealth Management | NVIDIA & Apple Equity Planning | Advisor Jay, Farther',
 description: 'Wealth management for NVIDIA and Apple employees and executives. We help with seven-figure RSU concentration, ESPP optimization, quarterly vesting tax planning, and Deferred Compensation strategy for tech professionals in Arizona and California.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/tech-executive-wealth-management',
 },
};

export default function TechExecutivePage() {
 return (
 <div className="w-full">
 {/* HERO SECTION */}
 <section className="relative w-full bg-[#F7F4EE] py-16 md:py-24">
  <Image
  src="/Photos/Semiconductor-1.png"
  alt="Technology executives"
  fill
  className="object-cover opacity-20"
  priority
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EE] via-[#F7F4EE]/90 to-[#F7F4EE]/40" />
  <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
  <AnimateOnScroll>
  <div className="space-y-6">
   <div className="text-sm font-semibold text-[#1d7682] tracking-wide uppercase">
   Tech Executive Wealth Management
   </div>
   <h1 className="text-4xl md:text-5xl font-bold text-[#333333] leading-tight">
   You&apos;ve Built Something Amazing at NVIDIA or Apple. Let&apos;s Make Sure You Actually Get to Keep It.
   </h1>
   <p className="text-lg text-[#5b6a71] max-w-3xl">
   Look, NVIDIA and Apple pay their people incredibly well - but that compensation comes with a level of financial complexity most advisors don&apos;t understand. Seven-figure RSU concentration, quarterly and biannual vesting events creating tax surprises, a 2-year ESPP lookback, and withholding gaps that hit you with five-figure April bills. Our team knows this world inside and out, and we build plans that actually match the reality of your paycheck.
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 1: THE TECH COMPENSATION REALITY */}
 <section className="w-full bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6 md:px-12">
  <AnimateOnScroll>
  <div className="space-y-8">
   <div>
   <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
   Your Pay Is Great. The Complexity That Comes With It? Not So Much.
   </h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   You know your comp structure: maybe $300K base, plus another $200K to $500K (or more) in equity. But here&apos;s the thing - that equity isn&apos;t just a nice number on a grant letter. It&apos;s a stream of taxable events that keeps coming, quarter after quarter. Let&apos;s walk through what we see with our tech clients.
   </p>

   <div className="space-y-6">
   <div>
    <h3 className="text-xl font-semibold text-[#333333] mb-3">
    Vesting Events
    </h3>
    <p className="text-lg text-[#5b6a71] leading-relaxed">
    NVIDIA RSUs vest quarterly. Apple RSUs vest biannually. That&apos;s anywhere from 4 to 8+ taxable events hitting your account every single year - not just one lump. Each one creates a tax bill based on the stock price that day. And nobody at HR is helping you manage the fallout.
    </p>
   </div>

   <div>
    <h3 className="text-xl font-semibold text-[#333333] mb-3">
    ESPP Programs
    </h3>
    <p className="text-lg text-[#5b6a71] leading-relaxed">
    The 15% discount with a 2-year lookback is a fantastic benefit - seriously, it&apos;s one of the best in corporate America. But it also creates built-in gains the moment your shares settle. When to sell, how much to hold, how to handle the tax lots - these decisions matter more than most people realize.
    </p>
   </div>

   <div>
    <h3 className="text-xl font-semibold text-[#333333] mb-3">
    Concentration Risk
    </h3>
    <p className="text-lg text-[#5b6a71] leading-relaxed">
    Here&apos;s something that sneaks up on people: after a few years, you might have $1.2 million in NVIDIA or Apple stock sitting in your net worth. You didn&apos;t wake up one morning and decide to make a 40% bet on a single company. The vesting schedule did it for you, quietly, over time. And that&apos;s a risk we need to talk about.
    </p>
   </div>

   <div>
    <h3 className="text-xl font-semibold text-[#333333] mb-3">
    Deferred Compensation (Apple)
    </h3>
    <p className="text-lg text-[#5b6a71] leading-relaxed">
    Apple&apos;s Deferred Compensation Plan lets eligible executives push significant income into the future - which can be brilliant for managing your tax bracket. But it only works well if you plan ahead. We help make sure the timing and elections all line up.
    </p>
   </div>
   </div>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 2: COMBINING ACCOUNTS INTO ONE STRATEGY */}
 <section className="w-full bg-[#FAFAF8] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6 md:px-12">
  <AnimateOnScroll>
  <div className="space-y-8">
   <div>
   <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
   All Your Accounts, One Actual Plan
   </h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-8">
   Here&apos;s what we see all the time: most financial tools treat your accounts like they exist in separate universes. Your 401(k) is over here, your brokerage is over there, your ESPP shares are somewhere else entirely. And that&apos;s how you end up with situations like:
   </p>

   <ul className="space-y-4 mb-8">
   <li className="text-lg text-[#5b6a71] leading-relaxed">
    A 401(k) loaded with bonds and a brokerage account that&apos;s almost all stocks - which means you don&apos;t actually have an allocation. You have two accounts doing their own thing.
   </li>
   <li className="text-lg text-[#5b6a71] leading-relaxed">
    High-fee funds sitting in your tax-advantaged accounts and growth stocks in your taxable accounts - the tax location is completely backwards.
   </li>
   <li className="text-lg text-[#5b6a71] leading-relaxed">
    A total net worth that&apos;s 45% in NVIDIA - and you didn&apos;t even realize it until we looked.
   </li>
   </ul>

   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   We build an integrated plan where every account plays a specific role in the bigger picture. That means:
   </p>

   <ul className="space-y-4">
   <li className="text-lg text-[#5b6a71] leading-relaxed">
    <strong>True asset allocation</strong> across all accounts - so you finally know your actual investment mix, not just what each account looks like on its own.
   </li>
   <li className="text-lg text-[#5b6a71] leading-relaxed">
    <strong>Tax location done right</strong> - bonds in the 401(k) where they should be, growth in taxable, and tax-loss harvesting where it actually moves the needle.
   </li>
   <li className="text-lg text-[#5b6a71] leading-relaxed">
    <strong>Concentration tracking</strong> - we watch your NVIDIA or Apple stock as a percentage of your total net worth and build a real plan to rebalance over time.
   </li>
   <li className="text-lg text-[#5b6a71] leading-relaxed">
    <strong>Scenario planning</strong> - what happens if NVIDIA drops 30%? What if you change jobs? What if you sell $500K of ESPP shares this year? We run the numbers before you make the move.
   </li>
   </ul>
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
   NVIDIA and Apple Built Your Wealth. We&apos;re Here to Help You Keep It.
   </h2>
   <p className="text-lg text-[#5b6a71] max-w-2xl mx-auto">
   Jay Chang and our team specialize in helping tech executives and high-earners in Arizona and California make smart decisions with their equity comp. Let&apos;s sit down and look at your situation together.
   </p>
   <div className="flex justify-center pt-4">
   <Button href="/schedule-consultation" variant="primary">
   Let&apos;s Talk About Your Tech Comp
   </Button>
   </div>
   <p className="text-sm text-[#5b6a71] pt-4">
   Phone: (480) 944-0880
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>
 </div>
 );
}
