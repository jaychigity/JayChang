import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import EstateComplexityAssessment from './EstateComplexityAssessment'

export const metadata: Metadata = {
 title:
 'Estate Complexity Assessment | Advisor Jay',
 description:
 'Discover the hidden complexity of your estate in under 2 minutes. Get a personalized complexity score across 9 risk factors - multi-state property, business succession, blended families, and more.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/tools/estate-complexity',
 },
 openGraph: {
 title: 'Estate Complexity Assessment | Farther',
 description:
 'How complex is your estate really? 9 questions, under 2 minutes. Uncover hidden risk factors and get a personalized estate readiness report.',
 url: 'https://www.PWM-Farther.com/tools/estate-complexity',
 },
}

export default function EstateComplexityPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'Estate Complexity', href: '/tools/estate-complexity' }]} />
 {/* Hero Banner */}
 <section className="bg-[#333333] pt-[120px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto text-center">
  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
  Estate Assessment
  </p>
  <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
  Estate Complexity Assessment
  </h1>
  <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[600px] mx-auto leading-relaxed">
  Discover the hidden complexity of your estate across 9 risk factors in under 2 minutes.
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
  <EstateComplexityAssessment />
 </section>
 </>
 )
}
