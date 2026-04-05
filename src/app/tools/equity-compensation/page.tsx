import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Link from 'next/link'
import EquityCompensationTool from './EquityCompensationTool'

export const metadata: Metadata = {
 title:
 'Equity Compensation Decision Tool | Advisor Jay',
 description:
 'Visualize your equity compensation timeline - vesting events, tax triggers, and optimization windows for RSUs, ISOs, NQSOs, and ESPPs. Free instant analysis.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/tools/equity-compensation',
 },
 openGraph: {
 title: 'Equity Compensation Decision Tool | Farther',
 description:
 'See your equity decision timeline. Understand when to act on RSUs, ISOs, NQSOs, and ESPPs - tax triggers, vesting milestones, and optimization windows.',
 url: 'https://www.PWM-Farther.com/tools/equity-compensation',
 },
}

export default function EquityCompensationPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Tools', href: '/tools' }, { name: 'Equity Compensation', href: '/tools/equity-compensation' }]} />
 {/* Hero Banner */}
 <section className="bg-[#333333] pt-[120px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]">
  <div className="max-w-[960px] mx-auto text-center">
  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
  Equity Planning Tool
  </p>
  <h1 className="font-serif text-[32px] md:text-[48px] font-light text-[#F7F4EE] leading-tight">
  Equity Compensation Decision Tool
  </h1>
  <p className="font-sans text-[16px] md:text-[18px] text-[#F7F4EE]/70 mt-4 max-w-[600px] mx-auto leading-relaxed">
  Visualize your equity compensation timeline - vesting events, tax triggers, and optimization windows.
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
  <EquityCompensationTool />
 </section>
 </>
 )
}
