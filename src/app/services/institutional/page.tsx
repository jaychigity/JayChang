import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
 title: 'Outsourced CIO & OCIO Services for Nonprofits & Foundations',
 description:
 'Outsourced CIO services for nonprofits, endowments, and foundations. Fiduciary investment oversight, policy development, and governance support in Arizona, California, and Nevada.',
 alternates: { canonical: 'https://www.advisorjay.com/services/institutional' },
 openGraph: {
 title: 'Outsourced CIO & OCIO Services for Nonprofits & Foundations',
 description:
 'Outsourced CIO services for nonprofits, endowments, and foundations. Fiduciary investment oversight, policy development, and governance support.',
 url: 'https://www.advisorjay.com/services/institutional',
 },
}

const serviceJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Institutional Services - Advisor Jay',
 description:
 'Outsourced chief investment officer (OCIO) services for nonprofits, endowments, and foundations including investment policy development, asset allocation, fiduciary oversight, and governance support in Scottsdale, AZ and across Arizona, California, and Nevada.',
 url: 'https://www.advisorjay.com/services/institutional',
 telephone: '+1-480-944-0880',
 areaServed: [
 {
 '@type': 'City',
 name: 'Scottsdale',
 containedInPlace: { '@type': 'State', name: 'Arizona' },
 },
 {
 '@type': 'City',
 name: 'Tempe',
 containedInPlace: { '@type': 'State', name: 'Arizona' },
 },
 {
 '@type': 'State',
 name: 'California',
 },
 {
 '@type': 'State',
 name: 'Nevada',
 },
 ],
 parentOrganization: {
 '@type': 'Organization',
 name: 'Farther',
 url: 'https://www.farther.com',
 },
}

const faqJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'What is an outsourced chief investment officer (OCIO)?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'An OCIO is a professional investment management partner that assumes day-to-day responsibility for your organization\'s investment portfolio. Rather than relying on volunteer board members to oversee complex investment decisions, an OCIO provides institutional-grade research, portfolio construction, manager selection, and ongoing fiduciary oversight - freeing your board to focus on mission-driven work.',
 },
 },
 {
 '@type': 'Question',
 name: 'What types of organizations do you serve?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'We work with nonprofits, community foundations, private family foundations, donor-advised fund sponsors, endowments, and other mission-driven organizations in Scottsdale, AZ and across Arizona, California, and Nevada. Our services are designed for organizations with $2 million or more in investable assets that need professional fiduciary oversight.',
 },
 },
 {
 '@type': 'Question',
 name: 'How does OCIO pricing work?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'We charge a transparent fiduciary advisory fee based on assets under management. There are no commissions, no hidden fees, and no proprietary product requirements. The exact fee depends on portfolio size and complexity, and we are happy to discuss specifics during an initial consultation.',
 },
 },
 {
 '@type': 'Question',
 name: 'Can you help our board meet its fiduciary obligations?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Absolutely. We help boards establish and maintain a clear investment policy statement, provide quarterly performance reporting with fiduciary-quality documentation, and offer ongoing education to board members on investment governance best practices. Our goal is to reduce fiduciary risk while improving long-term investment outcomes.',
 },
 },
 ],
}

function GoldBullet({ children }: { children: React.ReactNode }) {
 return (
 <li className="flex items-start gap-3">
 <span className="mt-[10px] h-[7px] w-[7px] min-w-[7px] rounded-full bg-[#1d7682]" />
 <span className="font-sans text-body text-[#5b6a71] leading-relaxed">{children}</span>
 </li>
 )
}

export default function InstitutionalServicesPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Services', href: '/services' }, { name: 'Institutional Services', href: '/services/institutional' }]} />
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
 />
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
 />

 {/* ── Hero ── */}
 <section className="bg-[#F7F4EE] px-6 pb-20 pt-20 md:pb-28 md:pt-28">
  <div className="max-w-container mx-auto text-center">
  <AnimateOnScroll>
  <SectionEyebrow text="INSTITUTIONAL SERVICES" />
  <h1 className="mx-auto mt-4 max-w-3xl font-serif text-display text-[#333333]">
   OCIO and Fiduciary Oversight for Foundations and Endowments
  </h1>
  <p className="mx-auto mt-6 max-w-2xl font-sans text-body text-[#5b6a71] leading-relaxed">
   Board members and executive directors carry enormous fiduciary
   responsibility - often without the time, resources, or
   institutional investment expertise to manage it alone. We serve as
   your outsourced chief investment officer, providing the governance
   framework, portfolio oversight, and reporting your organization
   deserves.
  </p>
  <div className="mt-10">
   <Button
   variant="primary"
   href="/schedule-consultation"
   >
   Schedule a Conversation
   </Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ── Main Content ── */}
 <section className="bg-[#FAFAF8] px-6 py-20 md:py-28">
  <div className="max-w-container mx-auto">
  <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
  {/* Image column */}
  <AnimateOnScroll>
   <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
   <Image
   src="/Photos/boardroom.png"
   alt="Wealth advisor presenting institutional investment strategies to foundation and endowment board members"
   fill
   className="object-cover"
   sizes="(max-width: 768px) 100vw, 50vw"
   />
   </div>
  </AnimateOnScroll>

  {/* Content column */}
  <AnimateOnScroll>
   <h2 className="font-serif text-heading text-[#333333]">
   Investment Governance Built Around Your Mission
   </h2>
   <p className="mt-4 font-sans text-body text-[#5b6a71] leading-relaxed">
   Nonprofit boards are tasked with protecting and growing
   institutional assets while staying true to their organization's
   mission. That means developing a sound investment policy,
   establishing a disciplined spending policy, selecting and
   monitoring investment managers, and maintaining clear fiduciary
   documentation - all while navigating market volatility and
   evolving regulatory requirements.
   </p>
   <p className="mt-4 font-sans text-body text-[#5b6a71] leading-relaxed">
   Most boards don't have a dedicated CIO on staff, and volunteer
   investment committee members often lack the time or
   institutional resources to manage these responsibilities
   effectively. That's where we come in. As your OCIO partner, we
   bring the same caliber of investment infrastructure used by
   large university endowments - scaled and customized for
   community foundations, private family foundations, and
   mission-driven nonprofits.
   </p>

   <h3 className="mt-8 font-serif text-subheading text-[#333333]">
   What Our OCIO Engagement Includes
   </h3>
   <ul className="mt-4 space-y-3">
   <GoldBullet>
   Full outsourced chief investment officer (OCIO) services with
   ongoing fiduciary oversight and board-level reporting
   </GoldBullet>
   <GoldBullet>
   Investment policy statement development and annual review
   tailored to your organization's risk tolerance and time horizon
   </GoldBullet>
   <GoldBullet>
   Strategic asset allocation with mission alignment, including
   ESG and impact-oriented investment options where appropriate
   </GoldBullet>
   <GoldBullet>
   Quarterly performance reporting with fiduciary-quality
   documentation and benchmark comparisons
   </GoldBullet>
   <GoldBullet>
   Spending policy analysis to balance current program needs with
   long-term corpus preservation
   </GoldBullet>
   <GoldBullet>
   Mission-aligned and ESG screening options for organizations
   that want their investments to reflect their values
   </GoldBullet>
   </ul>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* ── Who We Serve ── */}
 <section className="bg-[#F7F4EE] px-6 py-20 md:py-28">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll>
  <div className="mx-auto max-w-3xl text-center">
   <SectionEyebrow text="WHO WE SERVE" />
   <h2 className="mt-4 font-serif text-heading text-[#333333]">
   Mission-Driven Organizations in Arizona, California, and Nevada
   </h2>
   <p className="mt-6 font-sans text-body text-[#5b6a71] leading-relaxed">
   We work with nonprofits, community endowments, private family
   foundations, donor-advised fund sponsors, and other
   mission-driven organizations across{' '}
   <Link href="/scottsdale" className="text-[#1d7682] underline">
   Scottsdale
   </Link>{' '}
   and{' '}
   <Link href="/scottsdale" className="text-[#1d7682] underline">
   Tempe
   </Link>
   . Whether your organization manages $2 million or $50 million,
   our OCIO model adapts to your governance structure, investment
   objectives, and mission requirements.
   </p>
   <p className="mt-4 font-sans text-body text-[#5b6a71] leading-relaxed">
   Many of our institutional relationships begin with a board that
   recognizes the gap between their fiduciary obligations and their
   internal capacity to manage investments. We fill that gap with
   professional oversight, disciplined process, and transparent
   reporting - so your leadership team can focus on advancing the
   mission rather than monitoring markets.
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* ── FAQ ── */}
 <section className="bg-[#FAFAF8] px-6 py-20 md:py-28">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll>
  <div className="mx-auto max-w-3xl text-center">
   <SectionEyebrow text="FREQUENTLY ASKED QUESTIONS" />
   <h2 className="mt-4 font-serif text-heading text-[#333333]">
   Common Questions About OCIO Services
   </h2>
  </div>
  </AnimateOnScroll>

  <div className="mx-auto mt-12 max-w-3xl space-y-6">
  {faqJsonLd.mainEntity.map((faq, i) => (
   <AnimateOnScroll key={i}>
   <details className="group rounded-xl border border-[#e5e2db] bg-white p-6">
   <summary className="flex cursor-pointer items-center justify-between font-serif text-subheading text-[#333333]">
    {faq.name}
    <ChevronDown className="ml-4 h-5 w-5 shrink-0 text-[#1d7682] transition-transform group-open:rotate-180" />
   </summary>
   <p className="mt-4 font-sans text-body text-[#5b6a71] leading-relaxed">
    {faq.acceptedAnswer.text}
   </p>
   </details>
   </AnimateOnScroll>
  ))}
  </div>
  </div>
 </section>

 {/* ── Related Services ── */}
 <section className="bg-[#F7F4EE] px-6 py-20 md:py-28">
  <div className="max-w-container mx-auto">
  <AnimateOnScroll>
  <div className="mx-auto max-w-3xl text-center">
   <SectionEyebrow text="RELATED SERVICES" />
   <h2 className="mt-4 font-serif text-heading text-[#333333]">
   Explore Our Other Capabilities
   </h2>
  </div>
  </AnimateOnScroll>

  <div className="mt-12 grid gap-8 md:grid-cols-3">
  {[
   {
   title: 'Alternative Investments',
   description:
   'Access to private equity, venture capital, private credit, and hedge fund strategies via institutional-quality vehicles.',
   href: '/services/alternatives',
   },
   {
   title: 'Investment Management',
   description:
   'Customized portfolio construction, tax-efficient positioning, and consolidated reporting across all accounts.',
   href: '/services/investments',
   },
   {
   title: '401(k) & Retirement Plans',
   description:
   'Institutional-quality plan design, fiduciary risk management, and investment oversight for business owners.',
   href: '/services/401k',
   },
  ].map((service, i) => (
   <AnimateOnScroll key={i}>
   <Link
   href={service.href}
   className="group block rounded-xl border border-[#e5e2db] bg-white p-8 transition-shadow hover:shadow-md"
   >
   <h3 className="font-serif text-subheading text-[#333333] group-hover:text-[#1d7682]">
    {service.title}
   </h3>
   <p className="mt-3 font-sans text-body text-[#5b6a71] leading-relaxed">
    {service.description}
   </p>
   </Link>
   </AnimateOnScroll>
  ))}
  </div>
  </div>
 </section>

 {/* ── CTA ── */}
 <section className="bg-[#333333] px-6 py-20 md:py-28">
  <div className="max-w-container mx-auto text-center">
  <AnimateOnScroll>
  <h2 className="mx-auto max-w-2xl font-serif text-heading text-white">
   Ready to Strengthen Your Organization's Investment Governance?
  </h2>
  <p className="mx-auto mt-6 max-w-xl font-sans text-body text-[#c2c8cb] leading-relaxed">
   Schedule a confidential conversation to discuss how our OCIO
   services can support your board's fiduciary responsibilities and
   help advance your mission. We serve foundations and endowments in{' '}
   <Link href="/scottsdale" className="text-[#1d7682] underline">
   Scottsdale
   </Link>{' '}
   and{' '}
   <Link href="/scottsdale" className="text-[#1d7682] underline">
   Tempe
   </Link>
   .
  </p>
  <div className="mt-10">
   <Button
   variant="primary"
   href="/schedule-consultation"
   >
   Schedule a Conversation
   </Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>
 </>
 )
}
