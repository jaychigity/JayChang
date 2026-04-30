import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
 title: '401(k) Plan Design & Fiduciary Oversight for Business Owners | Advisor Jay',
 description:
 'Hands-on 401(k) and retirement plan help for business owners in Arizona, California, and Nevada. We handle plan design, compliance, and investment oversight so you can focus on your business.',
 alternates: { canonical: 'https://www.advisorjay.com/services/401k' },
 openGraph: {
 title: '401(k) Plan Design & Fiduciary Oversight for Business Owners | Advisor Jay',
 description:
 'Hands-on 401(k) and retirement plan help for business owners. Plan design, compliance, investment oversight, and employee education -- all in one place.',
 url: 'https://www.advisorjay.com/services/401k',
 type: 'website',
 },
}

const serviceJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Advisor Jay - 401(k) & Qualified Retirement Plans',
 description:
 'Institutional-quality 401(k) and qualified retirement plan services for business owners in Scottsdale, AZ and across Arizona, California, and Nevada. Plan design, fiduciary risk management, investment oversight, and participant education.',
 url: 'https://www.advisorjay.com/services/401k',
 telephone: '+1-480-944-0880',
 areaServed: [
 {
 '@type': 'City',
 name: 'Scottsdale',
 containedInPlace: { '@type': 'State', name: 'Arizona' },
 },
 {
 '@type': 'City',
 name: 'Tempe',
 containedInPlace: { '@type': 'State', name: 'Arizona' },
 },
 {
 '@type': 'State',
 name: 'California',
 },
 {
 '@type': 'State',
 name: 'Nevada',
 },
 ],
 parentOrganization: {
 '@type': 'Organization',
 name: 'Farther',
 url: 'https://www.farther.com',
 },
}

const faqJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'What is the difference between a 401(k) and a qualified retirement plan?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'A 401(k) is actually one type of qualified retirement plan. The broader category also includes profit-sharing plans, cash balance plans, and defined benefit pensions. Each one has different contribution limits, tax perks, and flexibility in how you design it. The best fit depends on your business size, how your cash flow works, and what you want your own retirement to look like.',
 },
 },
 {
 '@type': 'Question',
 name: 'What is fiduciary responsibility and why does it matter for my 401(k)?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'When you sponsor a retirement plan, you are legally on the hook to act in the best interest of everyone in that plan. That means picking and watching investments, keeping fees reasonable, and staying on top of ERISA rules. If something goes wrong, you could be personally liable. Working with a fiduciary advisor like our team means you have someone sharing that responsibility with you -- and making sure nothing falls through the cracks.',
 },
 },
 {
 '@type': 'Question',
 name: 'Can you help coordinate my company 401(k) with my personal wealth strategy?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'This is honestly one of the most valuable things we do. Most business owners have their company plan over here and their personal investments over there, and the two never talk to each other. We bring them together into one coordinated game plan -- so your contributions, tax positioning, investment mix, and eventual rollover strategy all work in sync.',
 },
 },
 {
 '@type': 'Question',
 name: 'What happens to my 401(k) when I sell my business or retire?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'When you step away from the business, your 401(k) money can go several directions -- rolled into an IRA, converted to a Roth IRA, or taken as a distribution. Each option has very different tax consequences. We help you think through this well ahead of time so the transition is smooth, the taxes are minimized, and everything lines up with your bigger retirement income picture.',
 },
 },
 ],
}

function GoldBullet({ children }: { children: React.ReactNode }) {
 return (
 <li className="flex items-start gap-3">
 <span className="mt-[10px] h-[7px] w-[7px] min-w-[7px] rounded-full bg-[#1d7682]" />
 <span className="font-sans text-body text-[#5b6a71] leading-relaxed">{children}</span>
 </li>
 )
}

export default function RetirementPlansPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Services', href: '/services' }, { name: '401(k) & Qualified Plans', href: '/services/401k' }]} />
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
 />
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
 />

 {/* ================================================================
  HERO
  ================================================================ */}
 <section className="bg-[#F7F4EE] pt-[100px] pb-[80px] px-[80px] max-md:px-[20px] max-md:pt-[80px]">
  <div className="max-w-[900px] mx-auto text-center">
  <SectionEyebrow text="401(K) & QUALIFIED RETIREMENT PLANS" />
  <h1 className="font-serif text-[52px] max-md:text-[34px] font-bold text-[#333333] leading-[1.15] mt-4">
  Your Retirement Plan Should Work
  <br className="max-md:hidden" /> as Hard as You Do.
  </h1>
  <p className="font-sans text-body-lg text-[#5b6a71] max-w-[680px] mx-auto mt-6 leading-relaxed">
  If you own a business in{' '}
  <Link href="/scottsdale" className="text-[#1d7682] hover:underline">
   Scottsdale
  </Link>{' '}
  or anywhere in{' '}
  <Link href="/scottsdale" className="text-[#1d7682] hover:underline">
   Arizona
  </Link>
  , your 401(k) or retirement plan should be doing more than checking a box.
  Done right, it&apos;s one of your best tools for saving on taxes,
  keeping great employees, and building real wealth for yourself.
  </p>
  <div className="mt-10">
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Let&apos;s Talk About Your Retirement Plan
  </Button>
  </div>
  </div>
 </section>

 {/* ================================================================
  MAIN CONTENT
  ================================================================ */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-container mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
  {/* Left: Photo */}
  <AnimateOnScroll>
   <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative">
   <Image
   src="/Photos/couple-planning-office.png"
   alt="Business owners discussing 401(k) plan design and fiduciary retirement plan management"
   fill
   className="object-cover"
   sizes="(min-width: 1024px) 45vw, 100vw"
   />
   </div>
  </AnimateOnScroll>

  {/* Right: Text */}
  <AnimateOnScroll delay={150}>
   <div>
   <SectionEyebrow text="FIDUCIARY PLAN MANAGEMENT" />
   <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
   A Retirement Plan That Works for You -- Not Just Your
   Employees.
   </h2>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
   Here&apos;s something a lot of business owners don&apos;t realize:
   when you sponsor a 401(k) or qualified retirement plan, you take
   on a real fiduciary obligation. You&apos;re personally responsible
   for picking the right investments, watching the fees, and making
   sure everything stays on the right side of ERISA rules. It&apos;s
   a bigger deal than most people think -- and the consequences of
   getting it wrong can be serious.
   </p>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   That&apos;s where I come in. I help business owners
   design, set up, and manage retirement plans that do three things
   at once: attract and hold onto your best people, maximize
   tax-advantaged savings for you as the owner, and keep your
   fiduciary risk as low as possible. Every plan we build is shaped
   around your specific business, your team, and your personal
   financial goals.
   </p>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   From picking the right plan structure to keeping up with
   compliance, educating your employees, and curating the
   investment menu -- we handle all of it. You focus on running
   your business. We&apos;ll make sure the plan is running right.
   </p>

   <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
   Here&apos;s what we take care of:
   </p>
   <ul className="list-none space-y-3">
   <GoldBullet>
    Plan design that fits your goals -- 401(k), profit-sharing,
    cash balance, or defined benefit, tailored to what makes
    sense for your business
   </GoldBullet>
   <GoldBullet>
    Ongoing fiduciary oversight -- compliance monitoring,
    documentation, and ERISA management so you can sleep at night
   </GoldBullet>
   <GoldBullet>
    A solid investment menu -- we select quality funds and
    review them regularly to make sure they&apos;re earning their spot
   </GoldBullet>
   <GoldBullet>
    Employee education -- enrollment help, contribution
    guidance, and financial wellness resources for your team
   </GoldBullet>
   <GoldBullet>
    Connecting your business plan with your personal wealth
    strategy -- so both sides work together instead of in
    separate silos
   </GoldBullet>
   <GoldBullet>
    Rollover and transition planning -- IRA rollovers, Roth
    conversions, and distribution sequencing when you retire or
    sell the business
   </GoldBullet>
   </ul>
   <p className="font-sans text-caption text-[#5b6a71] italic mt-6">
   All retirement plan services are subject to applicable
   regulations. Past performance does not guarantee future
   results.
   </p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  WHY INTEGRATED PLAN MANAGEMENT
  ================================================================ */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-container mx-auto">
  <div className="max-w-[800px] mx-auto">
  <AnimateOnScroll className="text-center mb-12">
   <SectionEyebrow text="THE BIGGER PICTURE" />
   <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
   Why Your Business Plan and Personal Plan Need to Talk to Each Other.
   </h2>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed">
   Most business owners have their company retirement plan in one
   corner and their personal investments in another. The 401(k)
   goes through one provider. Personal wealth is managed by a
   different advisor -- or maybe nobody at all. What you end up
   with is a patchwork where your contributions, investment mix,
   tax strategy, and retirement timeline never really line up.
   </p>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   We do things differently. By tying your 401(k) or qualified
   plan directly into your personal wealth plan, we can fine-tune
   how much you&apos;re putting in, where that money is invested, and
   how it connects with your taxable accounts, real estate, and
   any future liquidity events. If you&apos;re heading toward selling
   or transitioning your business, this coordination matters even
   more -- the rollover decisions you make at exit can have
   six- or seven-figure tax consequences.
   </p>
   <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
   Whether you&apos;re starting a new plan for a growing company,
   restructuring an existing one to get more into your own
   account, or getting ready for a business exit that involves
   rolling over significant retirement assets, we bring it all
   together. Business owners in{' '}
   <Link
   href="/scottsdale"
   className="text-[#1d7682] hover:underline"
   >
   Scottsdale
   </Link>{' '}
   and across{' '}
   <Link
   href="/scottsdale"
   className="text-[#1d7682] hover:underline"
   >
   Arizona
   </Link>{' '}
   trust our team with this because we understand both sides
   of the coin -- the business and the personal.
   </p>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  FAQ
  ================================================================ */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll className="text-center mb-12">
  <SectionEyebrow text="COMMON QUESTIONS" />
  <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
   Questions We Get About 401(k) &amp; Retirement Plans.
  </h2>
  </AnimateOnScroll>

  <div className="max-w-[800px] mx-auto">
  <AnimateOnScroll>
   {/* FAQ 1 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    What is the difference between a 401(k) and a qualified
    retirement plan?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   A 401(k) is actually one type of qualified retirement plan.
   The broader category also includes profit-sharing plans, cash
   balance plans, and defined benefit pensions. Each one has
   different contribution limits, tax perks, and flexibility in
   how you design it. The best fit depends on your business size,
   how your cash flow works, and what you want your own retirement
   to look like.
   </p>
   </details>

   {/* FAQ 2 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    What is fiduciary responsibility and why does it matter for
    my 401(k)?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   When you sponsor a retirement plan, you&apos;re legally on the
   hook to act in the best interest of everyone in that plan.
   That means picking and watching investments, keeping fees
   reasonable, and staying on top of ERISA rules. If something
   goes wrong, you could be personally liable. Working with a
   fiduciary advisor like our team means you have someone sharing
   that responsibility with you -- and making sure nothing falls
   through the cracks.
   </p>
   </details>

   {/* FAQ 3 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    Can you help coordinate my company 401(k) with my personal
    wealth strategy?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   This is honestly one of the most valuable things we do. Most
   business owners have their company plan over here and their
   personal investments over there, and the two never talk to each
   other. We bring them together into one coordinated game plan
   -- so your contributions, tax positioning, investment mix,
   and eventual rollover strategy all work in sync.
   </p>
   </details>

   {/* FAQ 4 */}
   <details className="group border-b border-[#E8E6E1]">
   <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
   <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
    What happens to my 401(k) when I sell my business or retire?
   </span>
   <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
   </summary>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
   When you step away from the business, your 401(k) money can go
   several directions -- rolled into an IRA, converted to a Roth
   IRA, or taken as a distribution. Each option has very different
   tax consequences. We help you think through this well ahead of
   time so the transition is smooth, the taxes are minimized, and
   everything lines up with your bigger retirement income picture.
   </p>
   </details>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  RELATED SERVICES
  ================================================================ */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll className="text-center mb-12">
  <SectionEyebrow text="RELATED SERVICES" />
  <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
   These Go Hand in Hand.
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
  <AnimateOnScroll>
   <Link
   href="/services/business-owners"
   className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
   >
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
   Business Owner Services
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Exit planning, succession strategy, and entity structuring
   for owners who are building toward their next chapter.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
   Learn more &rarr;
   </span>
   </Link>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <Link
   href="/services/retirement-planning"
   className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
   >
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
   Retirement Planning
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   How to draw down your savings, when to claim Social Security,
   Roth conversion strategies, and income planning for the long haul.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
   Learn more &rarr;
   </span>
   </Link>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <Link
   href="/services/investments"
   className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
   >
   <h3 className="font-serif text-[20px] font-bold text-[#333333]">
   Investment Management
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
   Thoughtful portfolio construction, tax-loss
   harvesting, and access to alternative investments.
   </p>
   <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
   Learn more &rarr;
   </span>
   </Link>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ================================================================
  CTA
  ================================================================ */}
 <section className="bg-[#333333] section-padding">
  <div className="max-w-[800px] mx-auto text-center">
  <AnimateOnScroll>
  <SectionEyebrow text="NEXT STEP" light />
  <h2 className="font-serif text-h2-mobile md:text-h2 font-semibold text-[#F7F4EE] mt-4">
   Let&apos;s Make Sure Your Plan Is Actually Working for You.
  </h2>
  <p className="font-sans text-body text-[#F7F4EE]/80 leading-relaxed mt-6 max-w-[600px] mx-auto">
   Whether you need a new retirement plan, want to fix one that&apos;s
   not performing, or need to connect your 401(k) with your
   personal finances, we&apos;re here to help. Grab a time for a
   relaxed conversation with our team in{' '}
   <Link
   href="/scottsdale"
   className="text-[#1d7682] hover:underline"
   >
   Scottsdale
   </Link>{' '}
   or{' '}
   <Link
   href="/scottsdale"
   className="text-[#1d7682] hover:underline"
   >
   Tempe
   </Link>
   .
  </p>
  <div className="mt-10">
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule Your Consultation
   </Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>
 </>
 )
}
