import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Financial Advisor in Tempe, AZ | Advisor Jay, Farther | Fiduciary Wealth Management',
 description: 'Jay Chang is a fiduciary financial advisor based in Tempe, Arizona at Farther. Serving engineers, physicians, and executives across the East Valley with comprehensive, technology-powered wealth management.',
 alternates: {
 canonical: 'https://www.advisorjay.com/financial-advisor-tempe-az',
 },
 robots: 'index, follow',
 openGraph: {
 title: 'Financial Advisor in Tempe, AZ | Advisor Jay, Farther | Fiduciary Wealth Management',
 description: 'Jay Chang is a fiduciary financial advisor based in Tempe, Arizona at Farther. Serving engineers, physicians, and executives across the East Valley.',
 type: 'website',
 url: 'https://www.advisorjay.com/financial-advisor-tempe-az',
 },
};

export default function TempeFinancialAdvisor() {
 const trustLogos = [
 { name: 'CFP Board', description: 'Certified Financial Planner' },
 { name: 'SEC', description: 'Registered Investment Advisor' },
 { name: 'FINRA', description: 'Member Firm' },
 ];

 const localBusinessSchema = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Advisor Jay, Farther',
 description: 'Fiduciary financial advisor based in Tempe, Arizona serving engineers, physicians, and executives',
 url: 'https://www.advisorjay.com/financial-advisor-tempe-az',
 areaServed: [
 { '@type': 'City', name: 'Tempe' },
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
 'Equity compensation and RSU planning',
 'Amkor Technology employee strategy',
 'Tech and engineering sector specialization',
 'Multi-year tax planning',
 'Comprehensive retirement income planning',
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
   Tempe Financial Advisor
   </p>
   <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#333333] mb-6 leading-tight">
   Your Financial Advisor in Tempe, Arizona
   </h1>
   <p className="font-sans text-lg md:text-xl text-[#5b6a71] mb-8 max-w-3xl mx-auto leading-relaxed">
   This is home base. Jay lives and works in Tempe, right in the middle of the ASU tech ecosystem and just down the road from Amkor Technology&apos;s headquarters. As VP, Wealth Advisor at Farther, he and our team serve clients from Chandler to Scottsdale to North Phoenix - and we&apos;d love to meet you.
   </p>
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Tempe Strategy Call
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
   A Neighbor Who Happens to Be a Financial Planner
   </h2>
   <div className="prose prose-lg text-[#5b6a71] font-sans space-y-4">
   <p>
   Tempe is where Arizona&apos;s tech and innovation scene comes together. Arizona State University keeps bringing in top engineering and computer science talent. Amkor Technology, one of the world&apos;s leading semiconductor assembly and test companies, is headquartered right here - which means Tempe is full of sharp engineers, operations leaders, and professionals building serious wealth.
   </p>
   <p>
   I chose Tempe as my home base for a reason. I work with professionals throughout the East Valley, Phoenix, Chandler, and Scottsdale who are dealing with the same kinds of questions: What do I do with all these RSUs? Am I paying more in taxes than I need to? Is my retirement plan actually going to work? Should I be doing a mega backdoor Roth?
   </p>
   <p>
   I combine real human advice with a modern technology platform. That means I&apos;m thinking about your situation personally, backed by tools that help me model scenarios, optimize taxes, and keep your plan on track. No dusty binders. No once-a-year check-in calls. Just someone who&apos;s genuinely in your corner.
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
   How We Help Tempe Professionals
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
   Let&apos;s Grab 30 Minutes and Talk About Your Goals
  </h3>
  <p className="font-sans text-lg text-[#5b6a71] mb-8">
   We&apos;ll walk through your situation, what you&apos;re trying to accomplish, and honestly share whether we think there are opportunities worth exploring.
  </p>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule a Tempe Strategy Call
  </Button>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Final CTA Section */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
  <AnimateOnScroll>
  <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
   We&apos;re Right Here in Tempe - Let&apos;s Connect
  </h2>
  <p className="font-sans text-lg text-[#5b6a71] mb-8">
   Working with Jay Chang and our team at Farther means you get a local fiduciary advisor who understands the real challenges East Valley professionals face. We&apos;re your neighbors, and we&apos;re here to help.
  </p>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule a Tempe Strategy Call
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
