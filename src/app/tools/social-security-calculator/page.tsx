import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import SocialSecurityCalculator from './SocialSecurityCalculator'

export const metadata: Metadata = {
 title:
  'Social Security Calculator: When Should You Claim? (62–70) | Advisor Jay',
 description:
  "Free Social Security calculator with break-even analysis, spousal benefits, lifetime comparison, and claiming strategy for ages 62-70. See how much you'd collect monthly, annually, and over your lifetime. Myths debunked. Updated for 2026.",
 alternates: {
  canonical: 'https://www.PWM-Farther.com/tools/social-security-calculator',
 },
 openGraph: {
  title: 'Social Security Calculator: When Should You Start Collecting?',
  description:
   'See your monthly benefit at every claiming age from 62 to 70. Break-even analysis, lifetime comparison, spousal strategy, and myth-busting. Free, instant, no sign-up.',
  url: 'https://www.PWM-Farther.com/tools/social-security-calculator',
 },
}

export default function SocialSecurityPage() {
 return (
  <>
   <BreadcrumbSchema
    items={[
     { name: 'Tools', href: '/tools' },
     { name: 'Social Security Calculator', href: '/tools/social-security-calculator' },
    ]}
   />

   {/* Hero Banner */}
   <section className="bg-[#333333] pt-[100px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
    <div className="max-w-[960px] mx-auto text-center">
     <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
      Social Security Planning Tool
     </p>
     <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
      Social Security Calculator
     </h1>
     <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[640px] mx-auto leading-relaxed">
      When should you start collecting? Slide through every age from 62 to 70
      and see your monthly check, find your break-even point, and compare
      what you&rsquo;d collect over a lifetime.
     </p>
     <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EE]/50 mt-3 max-w-[600px] mx-auto leading-relaxed">
      Most people leave tens of thousands on the table by claiming at the
      wrong time. I built this tool to show you the real numbers behind one
      of the most important retirement decisions you&rsquo;ll make.
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
    <SocialSecurityCalculator />
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
      <a href="/tools/rmd-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
       RMD Calculator
      </a>
      <a href="/tools/inherited-ira-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
       Inherited IRA Calculator
      </a>
      <a href="/tools/roth-conversion-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
       Roth Conversion Calculator
      </a>
      <a href="/tools/retirement-savings-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
       Retirement Readiness Calculator
      </a>
     </div>
    </div>
   </section>
  </>
 )
}
