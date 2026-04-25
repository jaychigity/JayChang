import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FourOOneKProjectionCalculator from './FourOOneKProjectionCalculator'

export const metadata: Metadata = {
  title: '401(k) Projection Calculator: See What Your Savings Will Be Worth | Advisor Jay',
  description:
    'Free 401(k) projection calculator. Enter your salary, contribution rate, and match formula to see year-by-year growth, total employer match captured, and whether you\'re leaving money on the table.',
  alternates: {
    canonical: 'https://www.advisorjay.com/tools/401k-projection',
  },
  openGraph: {
    title: '401(k) Projection Calculator | Advisor Jay',
    description:
      'Free 401(k) projection calculator. See exactly what your balance will be at retirement with any employer match. Includes catch-up contributions, salary growth, and year-by-year projections.',
    url: 'https://www.advisorjay.com/tools/401k-projection',
  },
}

export default function FourOOneKProjectionPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Tools', href: '/tools' },
          { name: '401(k) Projection Calculator', href: '/tools/401k-projection' },
        ]}
      />

      {/* Hero Banner */}
      <section className="bg-[#333333] pt-[100px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="max-w-[960px] mx-auto text-center">
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
            Retirement Planning Tool
          </p>
          <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
            401(k) Projection Calculator
          </h1>
          <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[640px] mx-auto leading-relaxed">
            See what your 401(k) will actually be worth at retirement, with your employer&apos;s specific match
            structure, catch-up contributions, and year-by-year growth.
          </p>
          <p className="font-sans text-[14px] text-[#F7F4EE]/50 mt-3 max-w-[560px] mx-auto leading-relaxed">
            Works for any company. Enter your match formula and contribution rate to see if you&apos;re capturing
            every dollar of employer match, and what the gap costs you over time.
          </p>
          <p className="font-sans text-[13px] font-semibold text-[#F7F4EE] mt-3" style={{ letterSpacing: '0.05em' }}>
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
        <FourOOneKProjectionCalculator />
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1d7682', padding: '48px 40px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <p
            className="font-sans"
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(247,244,238,0.6)',
              marginBottom: 12,
            }}
          >
            Want help putting these numbers to work?
          </p>
          <h3
            className="font-serif"
            style={{ fontSize: 28, fontWeight: 600, color: '#F7F4EE', marginBottom: 12, lineHeight: 1.3 }}
          >
            A projection tells you where you&apos;re headed. A plan tells you what to do differently.
          </h3>
          <p
            className="font-sans"
            style={{ fontSize: 15, color: 'rgba(247,244,238,0.75)', marginBottom: 24, lineHeight: 1.6 }}
          >
            I work with corporate employees on 401(k) contribution strategy, employer match optimization,
            Roth vs. pre-tax decisions, and how your 401(k) fits into a complete retirement income plan.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link
              href="/schedule-consultation"
              style={{
                display: 'inline-block',
                backgroundColor: '#F7F4EE',
                color: '#1d7682',
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                padding: '12px 24px',
                borderRadius: 9999,
                textDecoration: 'none',
              }}
            >
              Schedule a conversation with Jay →
            </Link>
            <Link
              href="/services/401k"
              style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: '#F7F4EE',
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                padding: '12px 24px',
                borderRadius: 9999,
                textDecoration: 'none',
                border: '1.5px solid rgba(247,244,238,0.4)',
              }}
            >
              How I help with 401(k) planning
            </Link>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section style={{ backgroundColor: '#FAFAF8', padding: '48px 40px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h3 className="font-serif" style={{ fontSize: 24, fontWeight: 400, color: '#333333', marginBottom: 16 }}>
            Related Tools
          </h3>
          <div
            className="font-sans"
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 24px', fontSize: 15 }}
          >
            <a href="/tools/401k-withholding-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
              401(k) Withholding Calculator
            </a>
            <a href="/tools/roth-conversion-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
              Roth Conversion Calculator
            </a>
            <a href="/tools/retirement-savings-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
              Retirement Readiness Calculator
            </a>
            <a href="/tools/att-pension" style={{ color: '#1d7682', textDecoration: 'underline' }}>
              AT&amp;T Pension Suite
            </a>
            <a href="/tools/pge-pension" style={{ color: '#1d7682', textDecoration: 'underline' }}>
              PG&amp;E Pension Suite
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
