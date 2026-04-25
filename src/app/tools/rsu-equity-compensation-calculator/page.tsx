import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import EquityCompensationTool from './EquityCompensationTool'

export const metadata: Metadata = {
 title:
 'Equity Compensation Decision Tool | Advisor Jay',
 description:
 'Free RSU and equity compensation calculator. Visualize your vesting timeline, tax triggers, and optimization windows for RSUs, ISOs, NQSOs, and ESPPs. Instant analysis.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/tools/rsu-equity-compensation-calculator',
 },
 openGraph: {
 title: 'Equity Compensation Decision Tool | Advisor Jay',
 description:
 'Free equity compensation calculator — see your RSU, ISO, NQSO, and ESPP decision timeline with tax triggers, vesting milestones, and optimization windows.',
 url: 'https://www.PWM-Farther.com/tools/rsu-equity-compensation-calculator',
 },
}

export default function EquityCompensationPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'Equity Compensation', href: '/tools/rsu-equity-compensation-calculator' }]} />
 {/* Hero Banner */}
 <section className="bg-[#333333] pt-[100px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto text-center">
  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
  Equity Planning Tool
  </p>
  <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
  Equity Compensation Decision Tool
  </h1>
  <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[640px] mx-auto leading-relaxed">
  Visualize your equity compensation timeline - vesting events, tax triggers, and optimization windows.
  </p>
  <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EE]/50 mt-3 max-w-[640px] mx-auto leading-relaxed">
  I built this tool for tech professionals and corporate employees managing six- and seven-figure equity positions — the same people I advise every day.
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
  <EquityCompensationTool />
 </section>

 {/* Related Tools */}
 <section style={{ backgroundColor: '#FAFAF8', padding: '48px 40px' }}>
  <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
   <h3 className="font-serif" style={{ fontSize: 24, fontWeight: 400, color: '#333333', marginBottom: 16 }}>
    Related Tools
   </h3>
   <div className="font-sans" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 24px', fontSize: 15 }}>
    <a href="/tools/401k-withholding-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>401(k) Withholding Calculator</a>
    <a href="/tools/roth-conversion-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Roth Conversion Calculator</a>
    <a href="/tools/ca-nv-tax-savings-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>CA to NV Tax Savings Calculator</a>
   </div>
  </div>
 </section>
 </>
 )
}
