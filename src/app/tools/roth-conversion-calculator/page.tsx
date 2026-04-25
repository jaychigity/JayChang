import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import RothConversionCalculator from './RothConversionCalculator'

export const metadata: Metadata = {
 title:
 'Roth IRA Conversion Calculator | Advisor Jay',
 description:
 'Compare the projected after-tax value of converting a Traditional IRA to a Roth IRA. See the upfront tax cost, net benefit, break-even rate, and projected growth over time.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/tools/roth-conversion-calculator',
 },
 openGraph: {
 title:
 'Roth IRA Conversion Calculator | Does Converting Make Sense For You?',
 description:
 'Model the long-term impact of a Roth conversion - tax cost, projected growth, break-even retirement tax rate, and net benefit. Instant results.',
 url: 'https://www.PWM-Farther.com/tools/roth-conversion-calculator',
 },
}

export default function RothConversionPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'Roth IRA Conversion Calculator', href: '/tools/roth-conversion-calculator' }]} />
 {/* Hero Banner */}
 <section className="bg-[#333333] pt-[100px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto text-center">
  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
  Roth Conversion Tool
  </p>
  <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
  Roth IRA Conversion Calculator
  </h1>
  <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[640px] mx-auto leading-relaxed">
  Does converting to a Roth IRA make sense for you? Compare the long-term after-tax impact of converting versus keeping your Traditional IRA.
  </p>
  <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EE]/50 mt-3 max-w-[640px] mx-auto leading-relaxed">
  Roth conversions are one of the most impactful tax strategies I recommend — this calculator helps you see why.
  </p>
  <p
  className="font-sans"
  style={{
   fontSize: 13,
   fontWeight: 600,
   color: '#F7F4EE',
   marginTop: 12,
   letterSpacing: '0.05em',
  }}
  >
  No sign-up required · Instant results
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
  <RothConversionCalculator />
 </section>

 {/* Related Tools */}
 <section style={{ backgroundColor: '#FAFAF8', padding: '48px 40px' }}>
  <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
   <h3 className="font-serif" style={{ fontSize: 24, fontWeight: 400, color: '#333333', marginBottom: 16 }}>
    Related Tools
   </h3>
   <div className="font-sans" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 24px', fontSize: 15 }}>
    <a href="/tools/401k-withholding-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>401(k) Withholding Calculator</a>
    <a href="/tools/retirement-savings-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Retirement Readiness Calculator</a>
    <a href="/tools/ca-nv-tax-savings-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>CA to NV Tax Savings Calculator</a>
   </div>
  </div>
 </section>
 </>
 )
}
