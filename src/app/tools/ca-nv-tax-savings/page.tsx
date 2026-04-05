import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import TaxSavingsCalculator from './TaxSavingsCalculator'

export const metadata: Metadata = {
 title:
 'California vs. Nevada vs. Arizona Tax Savings Estimator | Advisor Jay',
 description:
 'Compare your 5-year state tax bill: California vs. Nevada vs. Arizona. See how much you could save on income, capital gains, RSU vesting, and real estate gains by relocating.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/tools/ca-nv-tax-savings',
 },
 openGraph: {
 title:
 'California vs. Nevada vs. Arizona Tax Savings Estimator | How Much Could You Save?',
 description:
 'Compare your 5-year state tax burden across California, Nevada, and Arizona. Instant estimates for earned income, capital gains, RSUs, and real estate gains.',
 url: 'https://www.PWM-Farther.com/tools/ca-nv-tax-savings',
 },
}

export default function CANVTaxSavingsPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'CA vs. NV vs. AZ Tax Savings', href: '/tools/ca-nv-tax-savings' }]} />
 {/* Hero Banner */}
 <section className="bg-[#333333] pt-[120px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto text-center">
  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
  Tax Savings Estimator
  </p>
  <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
  California vs. Nevada vs. Arizona
  </h1>
  <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[600px] mx-auto leading-relaxed">
  See how much you could save by relocating from California. Compare Nevada&apos;s zero-tax advantage with Arizona 2.5% flat rate.
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
  <TaxSavingsCalculator />
 </section>
 </>
 )
}
