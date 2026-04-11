import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import ATTPensionCalculator from './ATTPensionCalculator'

export const metadata: Metadata = {
 title:
  'AT&T Pension & Retirement Calculator | Advisor Jay',
 description:
  'Free AT&T pension calculators for union and management employees. Estimate your cash balance pension, pension band benefit, lump sum vs annuity, early retirement reduction, and 401(k) projections.',
 alternates: {
  canonical: 'https://www.PWM-Farther.com/tools/att-pension',
 },
 openGraph: {
  title: 'AT&T Pension & Retirement Calculator | Advisor Jay',
  description:
   'Estimate your AT&T pension benefit across cash balance, pension band, lump sum vs annuity, early retirement, and 401(k) projections. Built for CWA/IBEW union and management employees.',
  url: 'https://www.PWM-Farther.com/tools/att-pension',
 },
}

export default function ATTPensionPage() {
 return (
  <>
   <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'AT&T Pension Calculator', href: '/tools/att-pension' }]} />
   {/* Hero Banner */}
   <section className="bg-[#333333] pt-[120px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
    <div className="max-w-[960px] mx-auto text-center">
     <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
      AT&amp;T Pension &amp; Retirement Suite
     </p>
     <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
      Know What Your AT&amp;T Benefits Are Worth
     </h1>
     <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[640px] mx-auto leading-relaxed">
      Six calculators built for AT&amp;T employees — union and management. Estimate your pension, compare lump sum vs annuity, model early retirement, and project your 401(k).
     </p>
     <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EE]/50 mt-3 max-w-[600px] mx-auto leading-relaxed">
      I&apos;ve worked with hundreds of AT&amp;T employees — CWA, IBEW, and management — navigating these exact decisions.
     </p>
     <p
      className="font-sans"
      style={{
       fontSize: 13,
       color: 'rgba(247, 244, 238, 0.5)',
       marginTop: 12,
       letterSpacing: '0.05em',
      }}
     >
      Free · No sign-up · Instant results
     </p>
     <div className="mt-6 flex justify-center">
      <Link href="/tools" className="font-sans text-[13px] text-[#F7F4EE]/50 hover:text-[#1d7682] transition-colors">
       &larr; All Tools &amp; Calculators
      </Link>
     </div>
    </div>
   </section>
   <div className="h-[1px] bg-[#1d7682]/20" />
   {/* Calculator */}
   <section className="bg-[#F7F4EE]">
    <ATTPensionCalculator />
   </section>

   {/* Related Tools */}
   <section style={{ backgroundColor: '#FAFAF8', padding: '48px 40px' }}>
    <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
     <h3
      className="font-serif"
      style={{ fontSize: 24, fontWeight: 400, color: '#333333', marginBottom: 16 }}
     >
      Related Tools
     </h3>
     <div
      className="font-sans"
      style={{
       display: 'flex',
       flexWrap: 'wrap',
       justifyContent: 'center',
       gap: '12px 24px',
       fontSize: 15,
      }}
     >
      <a href="/tools/rmd-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>RMD Calculator</a>
      <a href="/tools/retirement-savings-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Retirement Readiness Calculator</a>
      <a href="/tools/roth-conversion-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Roth Conversion Calculator</a>
      <a href="/tools/social-security-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Social Security Calculator</a>
     </div>
    </div>
   </section>
  </>
 )
}
