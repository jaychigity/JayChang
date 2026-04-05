import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import WithholdingCalculator from './WithholdingCalculator'

export const metadata: Metadata = {
 title: '401(k) Withholding Calculator | Advisor Jay',
 description:
 'Calculate the exact payroll withholding percentage to max out your 401(k), including catch-up contributions and after-tax spillover for mega backdoor Roth strategies.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/tools/withholding-calculator',
 },
 openGraph: {
 title: '401(k) Withholding Calculator | Advisor Jay',
 description:
 'Find the right withholding percentage to max out your 401(k). Includes catch-up contributions and spillover calculations.',
 url: 'https://www.PWM-Farther.com/tools/withholding-calculator',
 },
}

export default function WithholdingCalculatorPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'Withholding Calculator', href: '/tools/withholding-calculator' }]} />
 {/* Hero Banner */}
 <section className="bg-[#333333] pt-[120px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto text-center">
  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
  401(k) Planning Tool
  </p>
  <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
  401(k) Withholding Calculator
  </h1>
  <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[600px] mx-auto leading-relaxed">
  Find the exact percentage to withhold from your paycheck to max out your 401(k), including catch-up and after-tax spillover contributions.
  </p>
  <div className="mt-6 flex justify-center">
  <Link href="/tools" className="font-sans text-[13px] text-[#F7F4EE]/50 hover:text-[#1d7682] transition-colors">
   &larr; All Tools &amp; Calculators
  </Link>
  </div>
  </div>
 </section>

 {/* Calculator */}
 <section className="bg-[#F7F4EE] py-[48px] md:py-[64px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto">
  <WithholdingCalculator />
  </div>
 </section>

 {/* Disclaimer */}
 <section className="bg-white py-[32px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto">
  <p className="font-sans text-[12px] text-[#999] leading-relaxed">
   This calculator is for informational purposes only and does not constitute financial advice. 401(k) contribution limits are based on 2025 IRS guidelines and may change. Actual withholding may vary depending on your employer&apos;s plan rules, pay frequency, and timing of contributions. Consult with a qualified financial advisor for personalized guidance.
  </p>
  </div>
 </section>
 </>
 )
}
