import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Financial Advisor in Mesa, AZ | Apple Employee Specialist',
 description: 'Fiduciary financial advisor in Mesa, Arizona specializing in Apple employees at the Mesa operations center. RSU planning, ESPP optimization, and tenure-based 401(k) strategy for Apple professionals.',
 alternates: {
 canonical: 'https://www.advisorjay.com/financial-advisor-mesa-az',
 },
 robots: 'index, follow',
 openGraph: {
 title: 'Financial Advisor in Mesa, AZ | Apple Employee Specialist',
 description: 'Fiduciary financial advisor in Mesa, Arizona specializing in Apple employees at the Mesa operations center. RSU planning, ESPP optimization, and tenure-based 401(k) strategy.',
 type: 'website',
 url: 'https://www.advisorjay.com/financial-advisor-mesa-az',
 },
};

export default function MesaFinancialAdvisor() {
 const trustLogos = [
 { name: 'CFP Board', description: 'Certified Financial Planner' },
 { name: 'SEC', description: 'Registered Investment Advisor' },
 { name: 'FINRA', description: 'Member Firm' },
 ];

 const localBusinessSchema = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Advisor Jay',
 description: 'Fiduciary financial advisor serving Apple employees in Mesa, Arizona',
 url: 'https://www.advisorjay.com/financial-advisor-mesa-az',
 areaServed: [
 { '@type': 'City', name: 'Mesa' },
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
 'Biannual RSU vesting and withholding gap strategy',
 'Tenure-based 401(k) match optimization',
 'ESPP qualifying vs. disqualifying disposition planning',
 'Apple Deferred Compensation Plan (DCP) election guidance',
 'Retirement income planning for Apple professionals',
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
   Mesa Financial Advisor
   </p>
   <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#333333] mb-6 leading-tight">
   Financial Advisor in Mesa, Arizona - For Apple Employees and East Valley Professionals
   </h1>
   <p className="font-sans text-lg md:text-xl text-[#5b6a71] mb-8 max-w-3xl mx-auto leading-relaxed">
   Mesa is home to Apple&apos;s major Arizona operations center - and if you work there, you know that Apple&apos;s compensation package is unlike anyone else&apos;s. Biannual RSU vesting, tenure-based 401(k) match, ESPP, DCP... it&apos;s a lot to keep track of. We can help you make sense of all of it.
   </p>
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Mesa Strategy Call
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
   We Know Apple Comp - Because We Work with Apple People Every Day
   </h2>
   <div className="prose prose-lg text-[#5b6a71] font-sans space-y-4">
   <p>
   Apple&apos;s Mesa operations center employs thousands of skilled professionals across engineering, operations, logistics, and management. And Apple does compensation differently. Your RSUs vest twice a year (not quarterly like most tech companies), which means bigger, less frequent taxable events. Your 401(k) match gets better the longer you stay. Your ESPP has specific tax rules depending on how long you hold. And if you&apos;re senior enough, the Deferred Compensation Plan (DCP) adds another layer of decisions.
   </p>
   <p>
   Here&apos;s the thing - most financial advisors don&apos;t know any of this. They&apos;ll nod along when you mention ESPP and then give you the same generic advice they give everyone. That&apos;s not how I work. I actually understand how Apple compensation is structured, and I build plans around it.
   </p>
   <p>
   Whether you&apos;re trying to figure out the withholding gap on your RSU vests, wondering if you should max out your ESPP, weighing a DCP election, or just want to know if you&apos;re on track for the retirement you want - we&apos;re here to walk through it with you. Unfiltered, practical guidance from people who get your situation.
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
   How We Help Apple Professionals
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
   Let&apos;s Look at Your Apple Compensation Together
  </h3>
  <p className="font-sans text-lg text-[#5b6a71] mb-8">
   Connect for 30 minutes with us. We&apos;ll walk through your Apple comp package, your equity position, and point out any tax opportunities that might be hiding in plain sight.
  </p>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule a Mesa Strategy Call
  </Button>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Final CTA Section */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
  <AnimateOnScroll>
  <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
   You&apos;ve Built Something Great - Let&apos;s Make Sure It Works for You
  </h2>
  <p className="font-sans text-lg text-[#5b6a71] mb-8">
   I work with Apple employees because I understand your compensation and your world. I&apos;m here to help you keep more, stress less, and build toward the life you want.
  </p>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule a Mesa Strategy Call
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
