import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'
import SectionEyebrow from '@/components/SectionEyebrow'
import {
 BarChart3,
 TrendingUp,
 DollarSign,
 Clock,
 Shield,
 ScrollText,
 RefreshCw,
} from 'lucide-react'

export const metadata: Metadata = {
 title: 'How We Help You With Money, Taxes & Retirement | Jay Chang, Farther',
 description:
  'We help engineers, doctors, and executives in Arizona figure out the big financial questions — how to handle stock options, lower your tax bill, plan for retirement, protect your family, and actually enjoy the money you work so hard for. Jay Chang and team at Farther.',
 alternates: { canonical: 'https://www.PWM-Farther.com/services' },
 openGraph: {
  title: 'How We Help You With Money, Taxes & Retirement | Jay Chang, Farther',
  description:
   'We help engineers, doctors, and executives in Arizona figure out the big financial questions — how to handle stock options, lower your tax bill, plan for retirement, protect your family, and actually enjoy the money you work so hard for. Jay Chang and team at Farther.',
  url: 'https://www.PWM-Farther.com/services',
 },
}

const services = [
 {
  icon: BarChart3,
  title: 'Equity Compensation Planning',
  headline: 'Making Sense of Your RSUs, Stock Options & Company Stock',
  body: 'Got RSUs vesting, stock options you\'re not sure when to exercise, or a deferred comp plan you barely understand? We map out your full vesting schedule, model the real after-tax numbers, and help you decide what to sell, hold, or diversify — so you\'re not just guessing.',
 },
 {
  icon: TrendingUp,
  title: 'Investment Management',
  headline: 'A Portfolio That Actually Works for Your Situation',
  body: 'We build globally diversified portfolios, harvest tax losses daily, and make sure the right investments are in the right accounts. If you have old 401(k)s or IRAs scattered around, we\'ll help you bring it all together through Farther\'s platform.',
 },
 {
  icon: DollarSign,
  title: 'Income Tax Planning',
  headline: 'How to Keep More of What You Earn',
  body: 'When you\'re in the 35-50%+ tax bracket, every move matters. We run multi-year projections, max out your mega backdoor Roth and backdoor Roth IRA, optimize your HSA, set up smart charitable giving strategies, and coordinate with your CPA so nothing falls through the cracks.',
 },
 {
  icon: Clock,
  title: 'Retirement Income Planning',
  headline: 'Will I Actually Have Enough? (Let\'s Find Out Together)',
  body: 'Pension vs. lump sum? When to take Social Security? How to cover healthcare before Medicare kicks in? We work through all of it with you — account sequencing, RMD planning, income flooring — so you can retire with confidence, not anxiety.',
 },
 {
  icon: Shield,
  title: 'Asset Protection & Advanced Planning',
  headline: 'Keeping What You\'ve Worked So Hard to Build',
  body: 'You didn\'t build this just to lose it. We help you take advantage of Arizona\'s retirement account protections, set up the right entity structures, review your umbrella insurance, and coordinate everything with your estate plan and family situation.',
 },
 {
  icon: ScrollText,
  title: 'Estate & Legacy Planning',
  headline: 'Making Sure Your Family Is Taken Care Of',
  body: 'Nobody likes thinking about this stuff, but it matters. We\'ll help you get your beneficiary designations right, review your wills, trusts, and powers of attorney, plan for estate taxes, and make sure your wishes — including charitable goals — are clearly set up.',
 },
 {
  icon: RefreshCw,
  title: 'Planning for Life\'s Big Changes',
  headline: 'New Job, Big Move, Marriage, or Windfall? We\'ve Got You.',
  body: 'Life doesn\'t wait for a convenient time. Whether you\'re changing jobs with unvested equity, moving from California to Arizona, dealing with a sudden income spike, or navigating a divorce — we\'ll help you make smart decisions when the stakes are high.',
 },
]

const testimonialsList = [
 {
  quote:
   'I didn&apos;t think I needed a financial advisor at 31, but Jay showed me how to maximize my mega backdoor Roth and coordinate my equity grants. I&apos;ll have $200K more by the time I&apos;m 45 just from these moves.',
  name: 'Intel Early Career Engineer',
  descriptor: 'Equity & tax optimization',
 },
 {
  quote:
   'When I was invited into Apple&apos;s Deferred Compensation Plan, I had no idea what to do. Jay modeled 3 completely different scenarios in 48 hours so I could make an informed decision.',
  name: 'Apple Senior Manager',
  descriptor: 'Executive compensation',
 },
 {
  quote:
   'The pension-vs.-lump-sum decision was keeping me up at night. Jay did a full break-even analysis and helped me understand the real implications of each choice.',
  name: 'RTX Senior Systems Engineer',
  descriptor: 'Pension strategy',
 },
]

export default function ServicesPage() {
 return (
  <>
   {/* ─── SECTION 1: HERO ─── */}
   <section className="relative bg-[#333333] pt-[100px] pb-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
    <Image
     src="/Photos/Farther-Advisor.avif"
     alt="Farther financial advisor"
     fill
     className="object-cover opacity-20"
     priority
     sizes="100vw"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/90 to-[#333333]/40" />
    <div className="relative z-10 max-w-container mx-auto">
     <AnimateOnScroll>
      <div>
       <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#1d7682] mb-4">
        HOW WE HELP
       </p>
       <h1 className="font-serif text-[32px] md:text-[48px] font-bold text-[#F7F4EE] mt-4 mb-6">
        Here&apos;s What We Do Together
       </h1>
       <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[680px] leading-relaxed">
        You&apos;ve got a busy career and a complicated financial picture. Our team is here to help you make sense of all of it — one conversation at a time.
       </p>
      </div>
     </AnimateOnScroll>
    </div>
   </section>

   {/* ─── SERVICES CARDS ─── */}
   <section className="bg-white py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
    <div className="max-w-container mx-auto">
     <AnimateOnScroll>
      <SectionEyebrow text="WHAT WE DO" />
      <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mt-4 mb-4 max-w-[680px]">
       Real Help for Real Financial Questions
      </h2>
      <p className="font-sans text-[17px] text-[#5b6a71] max-w-[680px] leading-relaxed">
       From &ldquo;how do I handle these stock options?&rdquo; to &ldquo;how do I plan for my family&apos;s future?&rdquo; — we sit on the same side of the table and work through it with you.
      </p>
     </AnimateOnScroll>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {services.map((service, idx) => (
       <AnimateOnScroll key={service.title} delay={idx * 100}>
        <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
         <service.icon className="w-8 h-8 text-[#1d7682] mb-4" strokeWidth={1.5} />
         <h3 className="font-sans text-[17px] font-semibold text-[#333333]">
          {service.headline}
         </h3>
         <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
          {service.body}
         </p>
        </div>
       </AnimateOnScroll>
      ))}
     </div>
    </div>
   </section>

   {/* ─── SECTION: TESTIMONIALS ─── */}
   <section className="bg-[#F7F4EE] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
    <div className="max-w-container mx-auto">
     <AnimateOnScroll className="mb-16">
      <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333]">
       Hear It From People Like You
      </h2>
     </AnimateOnScroll>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1000px]">
      {testimonialsList.map((testimonial, idx) => (
       <AnimateOnScroll key={testimonial.name} delay={idx * 100}>
        <div className="flex flex-col">
         <p className="font-sans text-[15px] text-[#333333] leading-[1.7] italic mb-6">
          &ldquo;{testimonial.quote}&rdquo;
         </p>
         <div className="pt-6 border-t border-[#E8E6E1]">
          <p className="font-sans text-[15px] font-semibold text-[#333333]">
           {testimonial.name}
          </p>
          <p className="font-sans text-[13px] text-[#5b6a71]">
           {testimonial.descriptor}
          </p>
         </div>
        </div>
       </AnimateOnScroll>
      ))}
     </div>
    </div>
   </section>

   {/* ─── SECTION: FINAL CTA ─── */}
   <section className="bg-[#333333] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
    <div className="max-w-container mx-auto text-center">
     <AnimateOnScroll>
      <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE] mb-8">
       Let&apos;s Talk About What&apos;s on Your Mind
      </h2>
      <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[620px] mx-auto mb-10 leading-relaxed">
       No sales pitch. Just a real conversation about your situation, what&apos;s keeping you up at night, and how our team can help.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
       <Button
        href="/schedule-consultation"
        variant="primary"
       >
        Book a Free Conversation
       </Button>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
       <a
        href="tel:+14809440880"
        className="font-sans text-[15px] text-[#F7F4EE]/70 hover:text-[#1d7682] transition-colors"
       >
        (480) 944-0880
       </a>
       <span className="hidden sm:inline text-[#F7F4EE]/30">|</span>
       <a
        href="mailto:jay.chang@farther.com"
        className="font-sans text-[15px] text-[#F7F4EE]/70 hover:text-[#1d7682] transition-colors"
       >
        jay.chang@farther.com
       </a>
      </div>
     </AnimateOnScroll>
    </div>
   </section>
  </>
 )
}
