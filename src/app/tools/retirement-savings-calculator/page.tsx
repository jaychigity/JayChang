import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import RetirementAssessment from './RetirementAssessment'

export const metadata: Metadata = {
 title:
 'Am I On Track? Retirement Readiness Assessment | Advisor Jay',
 description:
 'Take our free 60-second retirement readiness assessment. Get a personalized score across savings rate, asset benchmarks, and funding projections - instant results.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/tools/retirement-savings-calculator',
 },
 openGraph: {
 title: 'Am I On Track? | Free 60-Second Retirement Assessment',
 description:
 'Discover if you&apos;re on track for the retirement you want. 10 questions, under 60 seconds, personalized insights.',
 url: 'https://www.PWM-Farther.com/tools/retirement-savings-calculator',
 },
}

export default function RetirementReadinessPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'Retirement Readiness', href: '/tools/retirement-savings-calculator' }]} />
 {/* Hero Banner */}
 <section className="bg-[#333333] pt-[120px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto text-center">
  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
  Retirement Assessment
  </p>
  <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
  Are You On Track for Retirement?
  </h1>
  <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[600px] mx-auto leading-relaxed">
  Answer 10 quick questions to get a personalized score across savings rate, asset benchmarks, and funding projections.
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
  <RetirementAssessment />
 </section>
 </>
 )
}
