import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import RetirementAssessment from './RetirementAssessment'

export const metadata: Metadata = {
 title:
 'Am I On Track? Retirement Readiness Assessment | Advisor Jay',
 description:
 'Free retirement calculator and 60-second readiness assessment. Get a personalized score across savings rate, asset benchmarks, and funding projections. Instant results.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/tools/retirement-savings-calculator',
 },
 openGraph: {
 title: 'Am I On Track? | Free 60-Second Retirement Assessment',
 description:
 'Free retirement calculator. Discover if you&apos;re on track for the retirement you want. 10 questions, under 60 seconds, personalized insights.',
 url: 'https://www.PWM-Farther.com/tools/retirement-savings-calculator',
 },
}

export default function RetirementReadinessPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'Retirement Readiness', href: '/tools/retirement-savings-calculator' }]} />
 {/* Hero Banner */}
 <section className="bg-[#333333] pt-[100px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto text-center">
  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
  Retirement Assessment
  </p>
  <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
  Are You On Track for Retirement?
  </h1>
  <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[640px] mx-auto leading-relaxed">
  Answer 10 quick questions to get a personalized score across savings rate, asset benchmarks, and funding projections.
  </p>
  <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EE]/50 mt-3 max-w-[640px] mx-auto leading-relaxed">
  I built this assessment around the same benchmarks I use with my own clients, so you get a real answer, not a generic one.
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
  <RetirementAssessment />
 </section>

 {/* Related Tools */}
 <section style={{ backgroundColor: '#FAFAF8', padding: '48px 40px' }}>
  <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
   <h3 className="font-serif" style={{ fontSize: 24, fontWeight: 400, color: '#333333', marginBottom: 16 }}>
    Related Tools
   </h3>
   <div className="font-sans" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 24px', fontSize: 15 }}>
    <a href="/tools/roth-conversion-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Roth Conversion Calculator</a>
    <a href="/tools/401k-withholding-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>401(k) Withholding Calculator</a>
    <a href="/tools/income-annuity-estimator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Income Annuity Estimator</a>
   </div>
  </div>
 </section>
 </>
 )
}
