import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Financial Advisor in Scottsdale, AZ | Physician & Executive Wealth Management | Jay Chang',
 description: 'Fiduciary financial advisor in Scottsdale, Arizona serving professionals at Mayo Clinic, Banner Health, and leading Arizona companies. High-income tax planning, asset protection, and retirement strategy.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/financial-advisor-scottsdale-az',
 },
 robots: 'index, follow',
 openGraph: {
 title: 'Financial Advisor in Scottsdale, AZ | Physician & Executive Wealth Management | Jay Chang',
 description: 'Fiduciary financial advisor in Scottsdale, Arizona serving professionals at Mayo Clinic, Banner Health, and leading Arizona companies.',
 type: 'website',
 url: 'https://www.PWM-Farther.com/financial-advisor-scottsdale-az',
 },
};

export default function ScottsdaleFinancialAdvisor() {
 const trustLogos = [
 { name: 'CFP Board', description: 'Certified Financial Planner' },
 { name: 'SEC', description: 'Registered Investment Advisor' },
 { name: 'FINRA', description: 'Member Firm' },
 ];

 const localBusinessSchema = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Advisor Jay, Farther',
 description: 'Fiduciary financial advisor serving physicians and executives in Scottsdale, Arizona',
 url: 'https://www.PWM-Farther.com/financial-advisor-scottsdale-az',
 areaServed: [
 { '@type': 'City', name: 'Scottsdale' },
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
 'Physician high-income tax planning',
 'Mayo Clinic specialist retirement planning',
 'Banner Health executive strategy',
 'Asset protection and liability planning',
 'Estate and wealth transfer planning',
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
   Scottsdale Financial Advisor
   </p>
   <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#333333] mb-6 leading-tight">
   Financial Advisor in Scottsdale, Arizona - For Physicians and Executives Who Want a Real Partner
   </h1>
   <p className="font-sans text-lg md:text-xl text-[#5b6a71] mb-8 max-w-3xl mx-auto leading-relaxed">
   Scottsdale is home to Mayo Clinic Arizona, Banner Health, Honor Health, and some of the Valley&apos;s most accomplished executives. If you&apos;re earning $400K-$800K+ and feel like your financial life should be more organized than it is, you&apos;re not alone - and we can help.
   </p>
   <Button
   href="/schedule-consultation"
   variant="primary"
   >
   Schedule a Scottsdale Financial Planning Call
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
   You&apos;re Great at What You Do - Let Us Handle the Financial Side
   </h2>
   <div className="prose prose-lg max-w-none text-[#5b6a71] font-sans space-y-4">
   <p>
   We get it. You spent years in training or climbing the corporate ladder. Now you&apos;re earning really well - professionals at Mayo Clinic, Banner Health, Honor Health, and major Arizona corporations - but your financial plan hasn&apos;t kept up with your income. Maybe you&apos;re still using the same advisor you had when you started out, or maybe you don&apos;t have one at all.
   </p>
   <p>
   The challenges we hear about most? Taxes taking a bigger bite than they should, not enough asset protection for someone with your liability exposure, retirement savings that feel underwhelming given what you earn, and zero clarity on how to pass wealth to the next generation.
   </p>
   <p>
   Jay Chang and our team at Farther work alongside Scottsdale physicians and executives as trusted partners - not salespeople. We&apos;re fiduciaries, which means your interests always come first. From tax-efficient retirement planning and asset protection to estate planning and making sure your wealth actually lasts, we bring the expertise so you can focus on what you do best.
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
   How We Help Scottsdale Professionals
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
   Want to See What You Might Be Missing?
  </h3>
  <p className="font-sans text-lg text-[#5b6a71] mb-8">
   Let&apos;s spend 30 minutes together. We&apos;ll talk about your practice or business, your goals, and whether there are tax or asset protection opportunities hiding in plain sight.
  </p>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule a Scottsdale Financial Planning Call
  </Button>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Final CTA Section */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
  <AnimateOnScroll>
  <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
   Let&apos;s Start the Conversation
  </h2>
  <p className="font-sans text-lg text-[#5b6a71] mb-8">
   Jay Chang and our team at Farther focus on high-income physicians and executives because we know your world. We&apos;re here to help you protect what you&apos;ve built, grow it wisely, and make sure it&apos;s there for the people who matter most.
  </p>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule a Scottsdale Financial Planning Call
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
