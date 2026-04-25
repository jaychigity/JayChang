import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import PGEPensionCalculator from './PGEPensionCalculator'

export const metadata: Metadata = {
  title: 'PG&E Pension & Benefits Calculator Suite | Advisor Jay',
  description:
    'Free PG&E pension calculator for union and management employees. Estimate your Final Pay or Cash Balance pension, model early retirement, project RMSA balance, and optimize your 401(k) match.',
  alternates: {
    canonical: 'https://www.advisorjay.com/tools/pge-pension',
  },
  openGraph: {
    title: 'PG&E Pension & Benefits Calculator Suite | Advisor Jay',
    description:
      'Free PG&E pension calculator suite — Final Pay pension, Cash Balance projections, early retirement eligibility, RMSA depletion estimator, and 401(k) match optimizer.',
    url: 'https://www.advisorjay.com/tools/pge-pension',
  },
}

export default function PGEPensionPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Tools', href: '/tools' },
          { name: 'PG&E Pension Suite', href: '/tools/pge-pension' },
        ]}
      />

      {/* Hero Banner */}
      <section className="bg-[#333333] pt-[100px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="max-w-[960px] mx-auto text-center">
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
            PG&amp;E Pension &amp; Benefits Suite
          </p>
          <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
            Know What Your PG&amp;E Benefits Are Worth
          </h1>
          <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[640px] mx-auto leading-relaxed">
            Six calculators built for PG&amp;E employees — union and management. Estimate your Final Pay or Cash Balance pension,
            model early retirement eligibility, project your RMSA, and optimize your 401(k) match.
          </p>
          <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EE]/50 mt-3 max-w-[600px] mx-auto leading-relaxed">
            I&apos;ve worked with PG&amp;E employees navigating pension elections, RMSA planning, and the Final Pay vs.
            Cash Balance decision. These calculators reflect the questions I get most often.
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
        <PGEPensionCalculator />
      </section>

      {/* PG&E Planning CTA */}
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
            WANT HELP MAKING SENSE OF THESE NUMBERS?
          </p>
          <h3
            className="font-serif"
            style={{ fontSize: 28, fontWeight: 600, color: '#F7F4EE', marginBottom: 12, lineHeight: 1.3 }}
          >
            The calculator gives you the numbers. A plan tells you what to actually do with them.
          </h3>
          <p
            className="font-sans"
            style={{ fontSize: 15, color: 'rgba(247,244,238,0.75)', marginBottom: 24, lineHeight: 1.6 }}
          >
            I work with PG&amp;E employees on pension elections, RMSA planning, the 401(k) spillover election, and
            retirement timing — all the decisions that interact in ways a single calculator can&apos;t fully capture.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link
              href="/pge-employee-financial-advisor"
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
              See how I help PG&amp;E employees →
            </Link>
            <Link
              href="/schedule-consultation"
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
              Schedule a conversation
            </Link>
          </div>
        </div>
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
            <a href="/tools/retirement-savings-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
              Retirement Readiness Calculator
            </a>
            <a href="/tools/roth-conversion-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
              Roth Conversion Calculator
            </a>
            <a href="/tools/social-security-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
              Social Security Calculator
            </a>
            <a href="/tools/att-pension" style={{ color: '#1d7682', textDecoration: 'underline' }}>
              AT&amp;T Pension Suite
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
