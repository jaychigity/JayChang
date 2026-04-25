import type { Metadata } from 'next'
import ConsultationForm from '@/components/ConsultationForm'

export const metadata: Metadata = {
 title: 'Schedule a Conversation',
 description:
 "Set up a time to talk with Jay Chang, wealth advisor at Farther. We work with families and business owners across Arizona, California, and Nevada, and we'd love to hear what's on your mind.",
 alternates: { canonical: 'https://www.PWM-Farther.com/schedule-consultation' },
 openGraph: {
 title: 'Schedule a Conversation | Advisor Jay',
 description:
 'Set up a time to talk with Jay Chang, wealth advisor at Farther. Serving families and business owners across Arizona, California, and Nevada.',
 url: 'https://www.PWM-Farther.com/schedule-consultation',
 },
}

export default function ScheduleConsultationPage() {
 return (
 <>
 {/* Hero Banner */}
 <section className="bg-[#333333] py-[64px] md:py-[96px] px-[20px]">
  <div className="max-w-container mx-auto text-center">
  <span className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-[#1d7682] block mb-[16px]">
  SCHEDULE A CONVERSATION
  </span>
  <h1 className="font-serif text-h1-mobile md:text-h1 font-normal text-[#F7F4EE] mb-[24px]">
  Let&apos;s Connect
  </h1>
  <p className="font-sans text-body-lg font-light text-[#b6d0ed] max-w-[540px] mx-auto">
  If something&apos;s been on your mind, like a pension decision, an RSU vesting, a transition, or retirement, that&apos;s worth a conversation.
  </p>
  </div>
 </section>

 {/* Form Section */}
 <section className="bg-[#F7F4EE] py-[64px] md:py-[96px] px-[20px]">
  <ConsultationForm />
 </section>
 </>
 )
}
