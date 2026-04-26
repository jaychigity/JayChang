import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import RMDCalculator from './RMDCalculator'

export const metadata: Metadata = {
 title:
  'RMD Calculator: Required Minimum Distribution for 2026 | Advisor Jay',
 description:
  'Free RMD calculator with 2026 IRS Uniform Lifetime Table. Calculate your required minimum distribution, see the tax impact on your bracket, model QCD savings, and project your IRA balance over 10+ years. Updated for SECURE 2.0.',
 alternates: {
  canonical: 'https://www.advisorjay.com/tools/rmd-calculator',
 },
 openGraph: {
  title:
   'RMD Calculator: How Much Must You Withdraw From Your IRA in 2026?',
  description:
   'Free RMD calculator. Calculate your required minimum distribution instantly. See tax impact, QCD optimization, multi-year projections, and IRMAA warnings. No sign-up.',
  url: 'https://www.advisorjay.com/tools/rmd-calculator',
 },
}

export default function RMDCalculatorPage() {
 return (
  <>
   <BreadcrumbSchema
    items={[
     { name: 'Tools', href: '/tools' },
     { name: 'RMD Calculator', href: '/tools/rmd-calculator' },
    ]}
   />

   {/* Hero Banner */}
   <section className="bg-[#333333] pt-[100px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
    <div className="max-w-[960px] mx-auto text-center">
     <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
      Retirement Distribution Tool
     </p>
     <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
      Required Minimum Distribution Calculator
     </h1>
     <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[640px] mx-auto leading-relaxed">
      How much must you withdraw from your IRA this year? Enter your balance and age. See your exact RMD, the tax hit, and how your balance projects over the next decade.
     </p>
     <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EE]/50 mt-3 max-w-[600px] mx-auto leading-relaxed">
      RMD planning is one of the most overlooked parts of retirement income strategy. I built this tool to help you see not just the number, but the full tax picture around it.
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
      <Link
       href="/tools"
       className="font-sans text-[13px] text-[#F7F4EE]/50 hover:text-[#1d7682] transition-colors"
      >
       &larr; All Tools &amp; Calculators
      </Link>
     </div>
    </div>
   </section>

   <div className="h-[1px] bg-[#1d7682]/20" />

   {/* Calculator */}
   <section className="bg-[#F7F4EE]">
    <RMDCalculator />
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
      <a href="/tools/inherited-ira-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
       Inherited IRA Calculator
      </a>
      <a href="/tools/roth-conversion-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
       Roth Conversion Calculator
      </a>
      <a href="/tools/retirement-savings-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
       Retirement Readiness Calculator
      </a>
      <a href="/tools/income-annuity" style={{ color: '#1d7682', textDecoration: 'underline' }}>
       Income Annuity Estimator
      </a>
     </div>
    </div>
   </section>
  </>
 )
}
