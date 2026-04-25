import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import TaxSavingsCalculator from './TaxSavingsCalculator'

export const metadata: Metadata = {
 title:
 'California vs. Nevada vs. Arizona Tax Savings Estimator | Advisor Jay',
 description:
 'Free California to Nevada tax savings calculator. Compare your 5-year state tax bill across CA, NV, and AZ, including income, capital gains, RSU vesting, and real estate gains.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/tools/ca-nv-tax-savings',
 },
 openGraph: {
 title:
 'California vs. Nevada vs. Arizona Tax Savings Estimator | How Much Could You Save?',
 description:
 'Free California vs. Nevada tax savings calculator. Compare your 5-year state tax burden across CA, NV, and AZ. Instant estimates for income, capital gains, RSUs, and real estate gains.',
 url: 'https://www.PWM-Farther.com/tools/ca-nv-tax-savings',
 },
}

export default function CANVTaxSavingsPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'CA vs. NV vs. AZ Tax Savings', href: '/tools/ca-nv-tax-savings' }]} />
 {/* Hero Banner */}
 <section className="bg-[#333333] pt-[100px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto text-center">
  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
  Tax Savings Estimator
  </p>
  <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
  California vs. Nevada vs. Arizona
  </h1>
  <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[640px] mx-auto leading-relaxed">
  See how much you could save by relocating from California. Compare Nevada&apos;s zero-tax advantage with Arizona 2.5% flat rate.
  </p>
  <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EE]/50 mt-3 max-w-[640px] mx-auto leading-relaxed">
  I work with California professionals relocating to Arizona and Nevada every month, and this calculator reflects the real savings I see in practice.
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
  <TaxSavingsCalculator />
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
    <a href="/tools/roth-conversion-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Roth Conversion Calculator</a>
    <a href="/tools/retirement-savings-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Retirement Readiness Calculator</a>
    <a href="/tools/rmd-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>RMD Calculator</a>
    <a href="/tools/401k-withholding-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>401(k) Withholding Calculator</a>
   </div>
  </div>
 </section>
 </>
 )
}
