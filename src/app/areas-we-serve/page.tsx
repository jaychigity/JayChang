import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
 title: 'Areas Jay Chang Serves | Arizona, California & Nevada Wealth Management',
 description: 'Jay Chang serves high-income professionals across Phoenix, Chandler, Scottsdale, Tempe, Mesa, Tucson, the Bay Area, and Nevada. Fiduciary, fee-only wealth management.',
 alternates: {
 canonical: 'https://www.advisorjay.com/areas-we-serve',
 },
};

export default function AreasWeServe() {
 return (
 <main>
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
   '@context': 'https://schema.org',
   '@type': 'FinancialService',
   name: 'Advisor Jay - Areas Served',
   description: 'Jay Chang serves high-income professionals and families across Phoenix, Chandler, Scottsdale, Tempe, Mesa, Tucson, the Bay Area, and Nevada. Fiduciary wealth management through Farther.',
   url: 'https://www.advisorjay.com/areas-we-serve',
   areaServed: [
   { '@type': 'State', name: 'Arizona' },
   { '@type': 'State', name: 'California' },
   { '@type': 'State', name: 'Nevada' },
   { '@type': 'City', name: 'Phoenix' },
   { '@type': 'City', name: 'Chandler' },
   { '@type': 'City', name: 'Scottsdale' },
   { '@type': 'City', name: 'Tempe' },
   { '@type': 'City', name: 'Mesa' },
   { '@type': 'City', name: 'Tucson' },
   { '@type': 'City', name: 'Las Vegas' },
   ],
   provider: {
   '@type': 'Organization',
   name: 'Farther',
   url: 'https://www.advisorjay.com',
   },
  }),
  }}
 />
 {/* HERO SECTION */}
 <section className="bg-[#F7F4EE] py-10 md:py-20">
  <div className="max-w-4xl mx-auto px-6">
  <AnimateOnScroll>
  <h1 className="text-5xl font-bold text-[#333333] mb-6">
   Where We Work with Clients
  </h1>
  <p className="text-xl text-[#5b6a71] max-w-2xl">
   I&apos;m based in Tempe, Arizona, and our team serves clients across the Southwest and beyond. Whether we meet in person or over video, the relationship is the same - personal, hands-on, and built around your life.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ARIZONA SECTION */}
 <section className="bg-white py-20">
  <div className="max-w-4xl mx-auto px-6">
  <AnimateOnScroll>
  <h2 className="text-4xl font-bold text-[#333333] mb-12">Arizona</h2>

  <div className="grid md:grid-cols-2 gap-8 mb-8">
   {/* Phoenix */}
   <div className="border border-[#e5e5e5] rounded-[12px] p-8 hover:shadow-lg transition-shadow">
   <h3 className="text-2xl font-semibold text-[#333333] mb-4">
   <Link href="/financial-advisor-phoenix-az" className="text-[#1d7682] hover:underline">
    Phoenix
   </Link>
   </h3>
   <p className="text-lg text-[#5b6a71]">
   Honeywell, TSMC, Freeport-McMoRan, Banner Health
   </p>
   </div>

   {/* Chandler */}
   <div className="border border-[#e5e5e5] rounded-[12px] p-8 hover:shadow-lg transition-shadow">
   <h3 className="text-2xl font-semibold text-[#333333] mb-4">
   <Link href="/financial-advisor-chandler-az" className="text-[#1d7682] hover:underline">
    Chandler
   </Link>
   </h3>
   <p className="text-lg text-[#5b6a71]">
   Intel, Microchip Technology, Amkor Technology
   </p>
   </div>

   {/* Scottsdale */}
   <div className="border border-[#e5e5e5] rounded-[12px] p-8 hover:shadow-lg transition-shadow">
   <h3 className="text-2xl font-semibold text-[#333333] mb-4">
   <Link href="/financial-advisor-scottsdale-az" className="text-[#1d7682] hover:underline">
    Scottsdale
   </Link>
   </h3>
   <p className="text-lg text-[#5b6a71]">
   Mayo Clinic Arizona, Banner Health, financial services
   </p>
   </div>

   {/* Tempe */}
   <div className="border border-[#e5e5e5] rounded-[12px] p-8 hover:shadow-lg transition-shadow">
   <h3 className="text-2xl font-semibold text-[#333333] mb-4">
   <Link href="/financial-advisor-tempe-az" className="text-[#1d7682] hover:underline">
    Tempe
   </Link>
   </h3>
   <p className="text-lg text-[#5b6a71]">
   Jay&apos;s home base; ASU tech ecosystem, Amkor HQ
   </p>
   </div>

   {/* Mesa */}
   <div className="border border-[#e5e5e5] rounded-[12px] p-8 hover:shadow-lg transition-shadow">
   <h3 className="text-2xl font-semibold text-[#333333] mb-4">
   <Link href="/financial-advisor-mesa-az" className="text-[#1d7682] hover:underline">
    Mesa
   </Link>
   </h3>
   <p className="text-lg text-[#5b6a71]">
   Apple operations center, Banner Health
   </p>
   </div>

   {/* Tucson */}
   <div className="border border-[#e5e5e5] rounded-[12px] p-8 hover:shadow-lg transition-shadow">
   <h3 className="text-2xl font-semibold text-[#333333] mb-4">
   Tucson
   </h3>
   <p className="text-lg text-[#5b6a71]">
   Raytheon Missiles &amp; Defense, UA Medical Center
   </p>
   </div>
  </div>

  <div className="bg-[#FAFAF8] rounded-[12px] p-8 mb-8">
   <p className="text-lg text-[#5b6a71]">
   <strong className="text-[#333333]">We also work with folks in:</strong> Gilbert, Queen Creek, Goodyear - growing communities with great professionals
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* CALIFORNIA SECTION */}
 <section className="bg-[#FAFAF8] py-20">
  <div className="max-w-4xl mx-auto px-6">
  <AnimateOnScroll>
  <h2 className="text-4xl font-bold text-[#333333] mb-12">California</h2>

  <div className="grid md:grid-cols-2 gap-8">
   {/* Silicon Valley */}
   <div className="border border-[#e5e5e5] rounded-[12px] p-8 bg-white hover:shadow-lg transition-shadow">
   <h3 className="text-2xl font-semibold text-[#333333] mb-4">
   <Link href="/california" className="text-[#1d7682] hover:underline">
    Santa Clara / Silicon Valley
   </Link>
   </h3>
   <p className="text-lg text-[#5b6a71]">
   NVIDIA HQ, Intel CA campuses, Microchip
   </p>
   </div>

   {/* San Jose */}
   <div className="border border-[#e5e5e5] rounded-[12px] p-8 bg-white hover:shadow-lg transition-shadow">
   <h3 className="text-2xl font-semibold text-[#333333] mb-4">
   San Jose
   </h3>
   <p className="text-lg text-[#5b6a71]">
   Microchip Technology, semiconductor ecosystem
   </p>
   </div>

   {/* Folsom / Roseville */}
   <div className="border border-[#e5e5e5] rounded-[12px] p-8 bg-white hover:shadow-lg transition-shadow">
   <h3 className="text-2xl font-semibold text-[#333333] mb-4">
   Folsom / Roseville / Sacramento
   </h3>
   <p className="text-lg text-[#5b6a71]">
   Intel Folsom campus, Microchip Roseville
   </p>
   </div>

   {/* Orange County / San Diego */}
   <div className="border border-[#e5e5e5] rounded-[12px] p-8 bg-white hover:shadow-lg transition-shadow">
   <h3 className="text-2xl font-semibold text-[#333333] mb-4">
   Orange County / San Diego
   </h3>
   <p className="text-lg text-[#5b6a71]">
   Microchip offices, defense and biotech
   </p>
   </div>

   {/* Los Angeles / El Segundo */}
   <div className="border border-[#e5e5e5] rounded-[12px] p-8 bg-white hover:shadow-lg transition-shadow">
   <h3 className="text-2xl font-semibold text-[#333333] mb-4">
   Los Angeles / El Segundo
   </h3>
   <p className="text-lg text-[#5b6a71]">
   Raytheon California, aerospace
   </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* NEVADA SECTION */}
 <section className="bg-white py-20">
  <div className="max-w-4xl mx-auto px-6">
  <AnimateOnScroll>
  <h2 className="text-4xl font-bold text-[#333333] mb-12">Nevada</h2>

  <div className="grid md:grid-cols-2 gap-8">
   {/* Las Vegas / Henderson */}
   <div className="border border-[#e5e5e5] rounded-[12px] p-8 hover:shadow-lg transition-shadow">
   <h3 className="text-2xl font-semibold text-[#333333] mb-4">
   <Link href="/las-vegas" className="text-[#1d7682] hover:underline">
    Las Vegas / Henderson
   </Link>
   </h3>
   <p className="text-lg text-[#5b6a71]">
   Zero income tax, growing professional community
   </p>
   </div>

   {/* Reno / Tahoe */}
   <div className="border border-[#e5e5e5] rounded-[12px] p-8 hover:shadow-lg transition-shadow">
   <h3 className="text-2xl font-semibold text-[#333333] mb-4">
   Reno / Tahoe
   </h3>
   <p className="text-lg text-[#5b6a71]">
   Emerging tech, Freeport-McMoRan Nevada projects
   </p>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* NATIONWIDE SECTION */}
 <section className="bg-[#FAFAF8] py-20">
  <div className="max-w-4xl mx-auto px-6">
  <AnimateOnScroll>
  <h2 className="text-4xl font-bold text-[#333333] mb-6">
   We Work with Clients Nationwide, Too
  </h2>
  <p className="text-xl text-[#5b6a71] mb-8">
   Farther&apos;s platform lets us serve clients anywhere we&apos;re registered. If you&apos;re dealing with complex equity compensation, high income, or benefits that need a careful eye - Jay and our team may be the right fit no matter where you call home.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* FINAL CTA SECTION */}
 <section className="bg-[#333333] py-20">
  <div className="max-w-4xl mx-auto px-6 text-center">
  <AnimateOnScroll>
  <h2 className="text-4xl font-bold text-white mb-8">
   Whether You&apos;re in Chandler or Cupertino, We&apos;d Love to Meet You.
  </h2>
  <Button
   href="/schedule-consultation"
   variant="primary"
  >
   Schedule a Call to Discuss Your Situation
  </Button>
  </AnimateOnScroll>
  </div>
 </section>
 </main>
 );
}
