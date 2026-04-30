import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import WithholdingCalculator from './WithholdingCalculator'

export const metadata: Metadata = {
 title: '401(k) Withholding Calculator',
 description:
 'Free 401(k) withholding calculator. Find the exact payroll percentage to max out your 401(k), including catch-up contributions and after-tax spillover for mega backdoor Roth strategies.',
 alternates: {
 canonical: 'https://www.advisorjay.com/tools/401k-withholding-calculator',
 },
 openGraph: {
 title: '401(k) Withholding Calculator',
 description:
 'Free 401(k) withholding calculator. Find the right percentage to max out your 401(k). Includes catch-up contributions and spillover calculations.',
 url: 'https://www.advisorjay.com/tools/401k-withholding-calculator',
 },
}

export default function WithholdingCalculatorPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'Withholding Calculator', href: '/tools/401k-withholding-calculator' }]} />
 {/* Hero Banner */}
 <section className="bg-[#333333] pt-[100px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto text-center">
  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
  401(k) Planning Tool
  </p>
  <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
  401(k) Withholding Calculator
  </h1>
  <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[640px] mx-auto leading-relaxed">
  Find the exact percentage to withhold from your paycheck to max out your 401(k), including catch-up and after-tax spillover contributions.
  </p>
  <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EE]/50 mt-3 max-w-[640px] mx-auto leading-relaxed">
  Built from patterns I see every day working with Fortune 500 employees at companies like AT&amp;T, PG&amp;E, Raytheon, and Honeywell.
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
 <section className="bg-[#F7F4EE] py-[48px] md:py-[64px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto">
  <WithholdingCalculator />
  </div>
 </section>

 {/* Disclaimer */}
 <section className="bg-white py-[32px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto">
  <p className="font-sans text-[12px] text-[#999] leading-relaxed">
   This calculator is for informational purposes only and does not constitute financial advice. 401(k) contribution limits are based on 2026 IRS guidelines and may change. Actual withholding may vary depending on your employer&apos;s plan rules, pay frequency, and timing of contributions. Consult with a qualified financial advisor for personalized guidance.
  </p>
  </div>
 </section>

 {/* Related Tools */}
 <section style={{ backgroundColor: '#FAFAF8', padding: '48px 40px' }}>
  <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
   <h3 className="font-serif" style={{ fontSize: 24, fontWeight: 400, color: '#333333', marginBottom: 16 }}>
    Related Tools
   </h3>
   <div className="font-sans" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 24px', fontSize: 15 }}>
    <a href="/tools/rsu-equity-compensation-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Equity Compensation Calculator</a>
    <a href="/tools/roth-conversion-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Roth Conversion Calculator</a>
    <a href="/tools/retirement-savings-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Retirement Readiness Calculator</a>
   </div>
  </div>
 </section>
 </>
 )
}
