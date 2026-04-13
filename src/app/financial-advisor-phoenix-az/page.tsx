import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Financial Advisor in Phoenix, AZ | Fiduciary Wealth Management | Advisor Jay, Farther',
 description: 'Fiduciary financial advisor in Phoenix, Arizona. Jay Chang at Farther specializes in wealth management for semiconductor engineers, aerospace professionals, physicians, and executives across the Phoenix metro.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/financial-advisor-phoenix-az',
 },
 robots: 'index, follow',
 openGraph: {
 title: 'Financial Advisor in Phoenix, AZ | Fiduciary Wealth Management | Advisor Jay, Farther',
 description: 'Fiduciary financial advisor in Phoenix, Arizona. Jay Chang at Farther specializes in wealth management for semiconductor engineers, aerospace professionals, physicians, and executives.',
 type: 'website',
 url: 'https://www.PWM-Farther.com/financial-advisor-phoenix-az',
 },
};

export default function PhoenixFinancialAdvisor() {
 const trustLogos = [
 { name: 'CFP Board', description: 'Certified Financial Planner' },
 { name: 'SEC', description: 'Registered Investment Advisor' },
 { name: 'FINRA', description: 'Member Firm' },
 ];

 const localBusinessSchema = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Advisor Jay, Farther',
 description: 'Fiduciary financial advisor serving professionals in Phoenix, Arizona',
 url: 'https://www.PWM-Farther.com/financial-advisor-phoenix-az',
 areaServed: [
 { '@type': 'City', name: 'Phoenix' },
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
 'RSU/ESPP/equity planning for TSMC/Honeywell/Freeport/Banner',
 'Multi-year tax planning',
 'Retirement income planning',
 'Asset protection',
 'Relocation planning from CA',
 ];

 return (
 <>
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
 />

 {/* Hero Section */}
 <section className="bg-[#F7F4EE] py-20 md:py-32">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
  <AnimateOnScroll>
  <div className="text-center">
   <p className="text-sm md:text-base font-sans font-semibold text-[#1d7682] mb-4 tracking-wide uppercase">
   Phoenix Financial Advisor
   </p>
   <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#333333] mb-6 leading-tight">
   Your Financial Advisor in Phoenix, Arizona
   </h1>
   <p className="font-sans text-lg md:text-xl text-[#5b6a71] mb-8 max-w-3xl mx-auto leading-relaxed">
   Phoenix is booming - TSMC&apos;s Fab 21 is here, Honeywell&apos;s aerospace division is growing, and Banner Health keeps expanding. If you&apos;re a professional earning $150K-$800K+ and feeling like your finances should be working harder for you, we should talk.
   </p>
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Phoenix Financial Planning Call
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
   We Work with Phoenix Professionals Who Have Outgrown Generic Advice
   </h2>
   <div className="prose prose-lg max-w-none text-[#5b6a71] font-sans space-y-4">
   <p>
   Here&apos;s what we see a lot in Phoenix: TSMC professionals with complex equity packages, Honeywell aerospace and defense professionals juggling stock options and relocation benefits, Freeport-McMoRan professionals managing concentrated positions, and Banner Health and Mayo Clinic professionals earning $400K-$800K+ who are too busy to optimize their own finances.
   </p>
   <p>
   The common thread? You&apos;ve done well - really well - but your financial life has gotten complicated. Maybe you relocated from California and aren&apos;t sure if you&apos;re taking full advantage of the tax savings. Maybe your RSUs keep vesting and you&apos;re not sure whether to hold or sell. Maybe you just have a gut feeling that you&apos;re leaving money on the table.
   </p>
   <p>
   That&apos;s where our team comes in. Jay Chang and the team at Farther sit on the same side of the table as you. We&apos;re fiduciaries - meaning we&apos;re legally obligated to put your interests first. We&apos;ll help you build a plan that actually fits your life, whether that&apos;s managing equity compensation, planning a tax-smart relocation, or mapping out retirement income when you&apos;re earning $150K-$800K+.
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
   How We Help Phoenix Professionals
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
   Curious What a Real Plan Looks Like?
  </h3>
  <p className="font-sans text-lg text-[#5b6a71] mb-8">
   Grab 30 minutes with us - no cost, no pressure. We&apos;ll talk through your situation, your goals, and honestly tell you if there are opportunities you might be missing.
  </p>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule a Phoenix Financial Planning Call
  </Button>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Final CTA Section */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
  <AnimateOnScroll>
  <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
   Let&apos;s Figure This Out Together
  </h2>
  <p className="font-sans text-lg text-[#5b6a71] mb-8">
   Working with Jay Chang and our team at Farther means you get a fiduciary advisor who actually understands what Phoenix professionals deal with. We&apos;re not here to sell you products - we&apos;re here to help you make smart decisions.
  </p>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule a Phoenix Financial Planning Call
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
