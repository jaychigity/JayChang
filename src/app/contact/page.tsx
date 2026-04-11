import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Calendar, Clock, CheckCircle } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import ConsultationForm from '@/components/ConsultationForm'

export const metadata: Metadata = {
 title: 'Contact Us | Advisor Jay - Scottsdale, Arizona',
 description:
 'Reach out to Jay Chang, wealth advisor at Farther. We help families and business owners in Scottsdale, Phoenix, and across Arizona make smarter financial decisions together. No pressure, just a real conversation.',
 alternates: { canonical: 'https://www.PWM-Farther.com/contact' },
}

const steps = [
 {
 number: '1',
 title: `You'll Hear From a Real Person`,
 body: `We'll get back to you within one business day — by phone or email, your pick. No automated drip campaigns, no chatbots. Just a real member of our team who actually read your message.`,
 },
 {
 number: '2',
 title: 'A Relaxed 30-Minute Chat',
 body: `We'll hop on a call and talk about what's on your mind — your goals, your concerns, what's keeping you up at night financially. Think of it as a coffee conversation, not a sales pitch.`,
 },
 {
 number: '3',
 title: `If It Feels Right for Both of Us`,
 body: `We'll walk you through what comes next and start pulling together the info we need to build a plan that actually fits your life.`,
 },
]

export default function ContactPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Contact', href: '/contact' }]} />
 {/* ── SECTION 1: HERO ── */}
 <section className="bg-[#F7F4EE] pt-[100px] pb-[40px] text-center">
  <div className="max-w-container mx-auto px-[80px] max-md:px-[20px]">
  <AnimateOnScroll>
  <SectionEyebrow text="GET IN TOUCH" />
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
  <h1 className="font-serif text-[48px] max-md:text-[32px] font-bold text-[#333333] mt-5">
   I'd Love to Hear From You.
  </h1>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
  <p className="font-sans text-body-lg text-[#5b6a71] max-w-[600px] mx-auto mt-5">
   Got a question? Wondering if we're the right fit? Just want to
   talk through something that's been bugging you about your finances?
   Drop us a line. No strings attached — we're happy to chat.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ── SECTION 2: FORM + DIRECT CONTACT ── */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-[1100px] mx-auto px-[80px] max-md:px-[20px]">
  <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12">
  {/* Left Column - Form */}
  <AnimateOnScroll>
   <div>
   <h3 className="font-sans text-[20px] font-semibold text-[#333333] mb-8">
   Send Jay a Message
   </h3>
   <ConsultationForm />
   </div>
  </AnimateOnScroll>

  {/* Right Column - Contact Info */}
  <AnimateOnScroll delay={150}>
   <div className="bg-[#F7F4EE] rounded-[16px] p-10">
   {/* Advisor Photo */}
   <div className="w-[120px] h-[120px] rounded-full border-[3px] border-[#1d7682] mx-auto overflow-hidden relative">
   <Image
    src="/Photos/Color-Jay-Headshot.png"
    alt="Jay Chang, Senior Wealth Advisor at Farther serving Scottsdale and Arizona"
    fill
    className="object-cover object-top"
    sizes="120px"
   />
   </div>

   {/* Advisor Name & Title */}
   <p className="font-sans text-[20px] font-semibold text-[#333333] mt-5 text-center">
   Jay Chang
   </p>
   <p className="font-sans text-sm text-[#5b6a71] text-center whitespace-pre-line">
   {'VP, Wealth Advisor\nFarther Finance Advisors, LLC'}
   </p>


   {/* Block 3 - Schedule a Specific Time */}
   <div className="border-b border-[#E8E6E1] py-6">
   <div className="flex items-center gap-2 mb-2">
    <Calendar className="w-4 h-4 text-[#1d7682]" />
    <span className="font-sans text-[11px] font-bold uppercase text-[#1d7682] tracking-[1.5px]">
    Pick a Time That Works for You
    </span>
   </div>
   <p className="font-sans text-sm text-[#5b6a71] mb-4">
    Grab a 30-minute slot on my calendar — pick whatever works best for your schedule.
   </p>
   <Button href="/schedule-consultation" variant="outline">
    Open Calendar
   </Button>
   </div>

   {/* Block 4 - Offices */}
   <div className="py-6">
   <div className="flex items-center gap-2 mb-4">
    <MapPin className="w-4 h-4 text-[#1d7682]" />
    <span className="font-sans text-[11px] font-bold uppercase text-[#1d7682] tracking-[1.5px]">
    Offices
    </span>
   </div>

   <div>
    <p className="font-sans text-sm font-medium text-[#333333]">
    Scottsdale, Arizona
    </p>
   </div>
   </div>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ── SECTION 3: WHAT TO EXPECT ── */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-[900px] mx-auto px-[80px] max-md:px-[20px] text-center">
  <AnimateOnScroll>
  <SectionEyebrow text="WHAT TO EXPECT" />
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
  <h2 className="font-serif text-[36px] text-[#333333] font-bold mt-4">
   Here's What Happens Next.
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
  {steps.map((step, i) => (
   <AnimateOnScroll key={step.number} delay={i * 150}>
   <div className="text-center">
   <span className="font-serif text-[48px] font-bold text-[#1d7682]/20">
    {step.number}
   </span>
   <p className="font-sans text-base font-semibold text-[#333333] mt-4">
    {step.title}
   </p>
   <p className="font-sans text-sm text-[#5b6a71] leading-relaxed mt-2 max-w-[260px] mx-auto">
    {step.body}
   </p>
   </div>
   </AnimateOnScroll>
  ))}
  </div>
  </div>
 </section>

 </>
 )
}
