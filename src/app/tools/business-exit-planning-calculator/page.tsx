import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import ExitScorecard from './ExitScorecard'

export const metadata: Metadata = {
 title:
 'Business Exit Readiness Scorecard | Advisor Jay',
 description:
 'Answer 10 quick questions to assess your readiness for a business exit. Get your personalized score across Financial, Operational, Tax, and Succession dimensions - free and confidential.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/tools/business-exit-planning-calculator',
 },
 openGraph: {
 title:
 'How Ready Are You to Exit Your Business? | Free 60-Second Assessment',
 description:
 'Take the Business Exit Readiness Scorecard - 10 questions, under 60 seconds. Get actionable insights across Financial, Operational, Tax, and Succession readiness.',
 url: 'https://www.PWM-Farther.com/tools/business-exit-planning-calculator',
 },
}

export default function BusinessExitScorecardPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'Business Exit Scorecard', href: '/tools/business-exit-planning-calculator' }]} />
 {/* Hero Banner */}
 <section className="bg-[#333333] pt-[100px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto text-center">
  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
  Business Exit Scorecard
  </p>
  <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
  Are You Ready to Exit Your Business?
  </h1>
  <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[640px] mx-auto leading-relaxed">
  Score your readiness across Financial, Operational, Tax, and Succession dimensions with 10 targeted questions.
  </p>
  <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EE]/50 mt-3 max-w-[640px] mx-auto leading-relaxed">
  This scorecard reflects the same framework I use with business owners planning exits, built from real patterns across dozens of engagements.
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
  <ExitScorecard />
 </section>

 {/* Related Tools */}
 <section style={{ backgroundColor: '#FAFAF8', padding: '48px 40px' }}>
  <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
   <h3 className="font-serif" style={{ fontSize: 24, fontWeight: 400, color: '#333333', marginBottom: 16 }}>
    Related Tools
   </h3>
   <div className="font-sans" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 24px', fontSize: 15 }}>
    <a href="/tools/estate-complexity" style={{ color: '#1d7682', textDecoration: 'underline' }}>Estate Complexity Assessment</a>
    <a href="/tools/retirement-savings-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Retirement Readiness Calculator</a>
    <a href="/tools/roth-conversion-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>Roth Conversion Calculator</a>
   </div>
  </div>
 </section>
 </>
 )
}
