import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import IncomeAnnuityEstimator from './IncomeAnnuityEstimator'

export const metadata: Metadata = {
 title:
 'Income Annuity Estimator | Advisor Jay',
 description:
 'See how much guaranteed monthly income your savings could generate through an immediate income annuity. Adjust your lump sum, age, and payout option for instant estimates.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/tools/income-annuity',
 },
 openGraph: {
 title:
 'Income Annuity Estimator | How Much Monthly Income Could You Generate?',
 description:
 'Enter your savings and see estimated guaranteed monthly income from an immediate annuity. Compare payout options instantly.',
 url: 'https://www.PWM-Farther.com/tools/income-annuity',
 },
}

export default function IncomeAnnuityPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'Income Annuity Estimator', href: '/tools/income-annuity' }]} />
 {/* Hero Banner */}
 <section className="bg-[#333333] pt-[120px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto text-center">
  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
  Retirement Income Tool
  </p>
  <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
  Income Annuity Estimator
  </h1>
  <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[600px] mx-auto leading-relaxed">
  See how much guaranteed monthly income your savings could generate through an immediate income annuity.
  </p>
  <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EE]/50 mt-3 max-w-[600px] mx-auto leading-relaxed">
  I built this estimator for clients exploring guaranteed income as part of their retirement plan.
  </p>
  <p
  className="font-sans"
  style={{
   fontSize: 13,
   color: 'rgba(247, 244, 238, 0.5)',
   marginTop: 12,
   letterSpacing: '0.05em',
  }}
  >
  Free · No sign-up · Instant results
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
  <IncomeAnnuityEstimator />
 </section>
 </>
 )
}
