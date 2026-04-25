import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Financial Advisor in Chandler, AZ | Intel & Microchip Employee Specialist | Advisor Jay, Farther',
 description: 'Fiduciary financial advisor serving Intel and Microchip Technology employees in Chandler, Arizona. RSU planning, SERPLUS guidance, mega backdoor Roth, and ESPP strategy for semiconductor professionals.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/financial-advisor-chandler-az',
 },
 robots: 'index, follow',
 openGraph: {
 title: 'Financial Advisor in Chandler, AZ | Intel & Microchip Employee Specialist | Advisor Jay, Farther',
 description: 'Fiduciary financial advisor serving Intel and Microchip Technology employees in Chandler, Arizona. RSU planning, SERPLUS guidance, mega backdoor Roth, and ESPP strategy.',
 type: 'website',
 url: 'https://www.PWM-Farther.com/financial-advisor-chandler-az',
 },
};

export default function ChandlerFinancialAdvisor() {
 const trustLogos = [
 { name: 'CFP Board', description: 'Certified Financial Planner' },
 { name: 'SEC', description: 'Registered Investment Advisor' },
 { name: 'FINRA', description: 'Member Firm' },
 ];

 const localBusinessSchema = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Advisor Jay, Farther',
 description: 'Fiduciary financial advisor serving Intel and Microchip Technology employees in Chandler, Arizona',
 url: 'https://www.PWM-Farther.com/financial-advisor-chandler-az',
 areaServed: [
 { '@type': 'City', name: 'Chandler' },
 { '@type': 'State', name: 'Arizona' },
 ],
 telephone: '+14809440880',
 priceRange: '$',
 contact: {
 '@type': 'ContactPoint',
 contactType: 'Customer Service',
 telephone: '+14809440880',
 },
 };

 const services = [
 'Deep Intel SERPLUS knowledge',
 'Microchip equity strategy',
 'Multi-state tax planning for CA relocations',
 'Retirement income planning',
 'Mega backdoor Roth strategy',
 ];

 return (
 <>
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
 />

 {/* Hero Section */}
 <section className="bg-[#F7F4EE] py-10 md:py-20">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
  <AnimateOnScroll>
  <div className="text-center">
   <p className="text-sm md:text-base font-sans font-semibold text-[#1d7682] mb-4 tracking-wide uppercase">
   Chandler Financial Advisor
   </p>
   <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#333333] mb-6 leading-tight">
   Financial Advisor in Chandler, Arizona - For Intel and Microchip Technology Employees
   </h1>
   <p className="font-sans text-lg md:text-xl text-[#5b6a71] mb-8 max-w-3xl mx-auto leading-relaxed">
   Chandler is the semiconductor heart of the Southwest - Intel&apos;s massive campus, Microchip Technology&apos;s headquarters, and thousands of professionals who&apos;ve built real wealth through equity compensation. If that&apos;s you, we&apos;d love to help you make the most of it.
   </p>
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Chandler Strategy Call
   </Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Body Section */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
  <AnimateOnScroll>
  <div>
   <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
   We Speak Intel and Microchip - So You Don&apos;t Have to Explain Everything
   </h2>
   <div className="prose prose-lg max-w-none text-[#5b6a71] font-sans space-y-4">
   <p>
   If you work at Intel, you know that SERPLUS isn&apos;t something most financial advisors have heard of. You&apos;ve got multi-year vesting schedules, specific tax planning windows, and a compensation structure that&apos;s genuinely different from other tech companies. Microchip Technology has its own equity plans with unique grant structures and timing considerations.
   </p>
   <p>
   And if you&apos;re one of the many Chandler professionals who relocated from California? There&apos;s a whole layer of capital gains complexity and state tax savings that most people don&apos;t fully capture. We see it all the time - smart people leaving real money on the table simply because nobody showed them what was possible.
   </p>
   <p>
   Jay Chang and our team at Farther work with Intel and Microchip employees every day. We understand RSU vesting, ESPP optimization, SERPLUS mechanics, mega backdoor Roth strategies, and how to plan tax-efficient relocations. We&apos;re not going to waste your time asking what an RSU is - we&apos;ll jump straight into what matters for your specific situation.
   </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Services Section */}
 <section className="bg-[#FAFAF8] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
  <AnimateOnScroll>
  <div>
   <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-8">
   How We Help Chandler Professionals
   </h2>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
   {services.map((service, index) => (
   <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
    <p className="font-sans text-[#333333] font-semibold">
    {service}
    </p>
   </div>
   ))}
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Mid-Page CTA */}
 <section className="bg-[#F7F4EE] py-16 md:py-20">
  <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
  <AnimateOnScroll>
  <h3 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
   Let&apos;s Look at Your Equity Picture Together
  </h3>
  <p className="font-sans text-lg text-[#5b6a71] mb-8">
   Book a 30-minute call with us. We&apos;ll talk through your equity situation, any relocation tax questions, and whether there are opportunities you haven&apos;t tapped into yet. No sales pitch - just a straight conversation.
  </p>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule a Chandler Strategy Call
  </Button>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Final CTA Section */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
  <AnimateOnScroll>
  <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
   Your Equity Comp Deserves a Plan That Matches
  </h2>
  <p className="font-sans text-lg text-[#5b6a71] mb-8">
   Jay Chang and our team at Farther know Intel and Microchip Technology compensation inside and out. We&apos;re here to help you keep more of what you&apos;ve earned and build toward the future you actually want.
  </p>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule a Chandler Strategy Call
  </Button>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Trust Bar Footer */}
 <section className="bg-[#F7F4EE] py-12 md:py-16 border-t border-gray-200">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
  <AnimateOnScroll>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
   {trustLogos.map((item, index) => (
   <div key={index} className="text-center">
   <p className="font-sans font-semibold text-[#333333] text-lg mb-2">
    {item.name}
   </p>
   <p className="font-sans text-sm text-[#5b6a71]">
    {item.description}
   </p>
   </div>
   ))}
  </div>
  <div className="mt-8 pt-8 border-t border-gray-300 text-center">
   <p className="font-sans text-xs text-[#5b6a71]">
   Jay Chang is a Certified Financial Planner™ and registered investment advisor fiduciary. This content is educational and not investment advice.
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>
 </>
 );
}
