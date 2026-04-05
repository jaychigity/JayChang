import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import TVMCalculator from './TVMCalculator'

export const metadata: Metadata = {
  title:
    'What Your Money Becomes | Time Value of Money Calculator | Advisor Jay',
  description:
    'See how your investments grow over time with compound interest, dividends, and monthly contributions. Model market corrections, explore milestones, and visualize your wealth trajectory.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/tools/tvm-calculator',
  },
  openGraph: {
    title:
      'What Your Money Becomes | Time Value of Money Calculator',
    description:
      'Visualize compound growth on your portfolio. Enter your starting investment, monthly contributions, and investment style to see projected future value with interactive charts.',
    url: 'https://www.PWM-Farther.com/tools/tvm-calculator',
  },
}

export default function TVMCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'What Your Money Becomes', href: '/tools/tvm-calculator' }]} />
      {/* Hero Banner */}
      <section className="bg-[#333333] pt-[120px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="max-w-[960px] mx-auto text-center">
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
            Investment Growth Tool
          </p>
          <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
            What Your Money Becomes
          </h1>
          <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[600px] mx-auto leading-relaxed">
            See the power of compound growth. Enter your investment details and watch your portfolio grow through meaningful milestones over time.
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
        <TVMCalculator />
      </section>
    </>
  )
}
