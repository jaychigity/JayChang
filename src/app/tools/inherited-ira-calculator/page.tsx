import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import InheritedIRACalculator from './InheritedIRACalculator'

export const metadata: Metadata = {
 title:
  'Inherited IRA Calculator & RMD Rules Guide',
 description:
  'Free inherited IRA calculator with 2026 SECURE Act rules. Determine your beneficiary type, required distributions, optimal withdrawal strategy, and tax impact, with year-by-year schedule. Built for spouses, children, and non-spouse beneficiaries.',
 alternates: {
  canonical: 'https://www.advisorjay.com/tools/inherited-ira-calculator',
 },
 openGraph: {
  title:
   'Inherited IRA Calculator: SECURE Act RMD Rules & Distribution Strategies',
  description:
   'Free inherited IRA calculator. Find out your required distributions, compare withdrawal strategies, and see your year-by-year tax impact. Instant results.',
  url: 'https://www.advisorjay.com/tools/inherited-ira-calculator',
 },
}

export default function InheritedIRAPage() {
 return (
  <>
   <BreadcrumbSchema
    items={[
     { name: 'Tools', href: '/tools' },
     { name: 'Inherited IRA Calculator', href: '/tools/inherited-ira-calculator' },
    ]}
   />

   {/* Hero Banner */}
   <section className="bg-[#333333] pt-[100px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
    <div className="max-w-[960px] mx-auto text-center">
     <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
      Inherited IRA Planning Tool
     </p>
     <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
      Inherited IRA Calculator &amp; RMD Guide
     </h1>
     <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[640px] mx-auto leading-relaxed">
      Inherited an IRA? The rules are complicated, especially after the SECURE Act. This tool tells you exactly what you need to do: your beneficiary classification, required distributions, and the withdrawal strategy that saves you the most in taxes.
     </p>
     <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EE]/50 mt-3 max-w-[600px] mx-auto leading-relaxed">
      I built this tool because inherited IRA mistakes are some of the most expensive, and most preventable, errors I see. The rules are confusing, but the math doesn&apos;t have to be.
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
    <InheritedIRACalculator />
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
