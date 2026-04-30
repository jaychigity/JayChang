import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import MonteCarloSimulator from './MonteCarloSimulator'

export const metadata: Metadata = {
  title: 'Free Monte Carlo Portfolio Simulator',
  description:
    'Free Monte Carlo portfolio simulator. Run 500 simulations to see every possible outcome for your investments, from great markets to tough ones. Includes retirement drawdown mode. No sign-up, instant results.',
  alternates: { canonical: 'https://www.advisorjay.com/tools/monte-carlo-simulator' },
  openGraph: {
    title: 'Free Monte Carlo Portfolio Simulator',
    description:
      'See every possible future for your portfolio. Run hundreds of simulations, visualize probability bands, and model retirement survival. Free, no sign-up required.',
    url: 'https://www.advisorjay.com/tools/monte-carlo-simulator',
  },
}

export default function MonteCarloPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Tools', href: '/tools' },
          { name: 'Monte Carlo Portfolio Simulator', href: '/tools/monte-carlo-simulator' },
        ]}
      />

      {/* Hero Banner */}
      <section className="bg-[#333333] pt-[100px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="max-w-[960px] mx-auto text-center">
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
            PROBABILITY MODELING TOOL
          </p>
          <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
            Monte Carlo Portfolio Simulator
          </h1>
          <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[640px] mx-auto leading-relaxed">
            Markets don&apos;t move in straight lines. Run hundreds of simulations to see the full
            range of where your portfolio could end up.
          </p>
          <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EE]/50 mt-3 max-w-[600px] mx-auto leading-relaxed">
            Every line on the chart is a possible future. Adjust return, volatility, and time
            horizon to see how the probabilities shift.
          </p>
          <p
            className="font-sans"
            style={{ fontSize: 13, fontWeight: 600, color: '#F7F4EE', marginTop: 12, letterSpacing: '0.05em' }}
          >
            No sign-up required &middot; Instant results
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

      {/* Simulator */}
      <section className="bg-[#F7F4EE]">
        <MonteCarloSimulator />
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
            <a href="/tools/retirement-savings-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
              Retirement Readiness Calculator
            </a>
            <a href="/tools/401k-projection" style={{ color: '#1d7682', textDecoration: 'underline' }}>
              401(k) Projection Calculator
            </a>
            <a href="/tools/roth-conversion-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
              Roth Conversion Calculator
            </a>
            <a href="/tools/social-security-calculator" style={{ color: '#1d7682', textDecoration: 'underline' }}>
              Social Security Calculator
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
