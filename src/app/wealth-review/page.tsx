import type { Metadata } from 'next'
import HideChrome from '@/components/HideChrome'
import WealthReviewForm from './WealthReviewForm'

export const metadata: Metadata = {
  title: 'Get a Free Wealth Review from Jay | Advisor Jay',
  description:
    'Request a free, no-obligation wealth review from Jay Chang, fiduciary wealth advisor. Confidential conversation about your financial picture: retirement, taxes, investments, and life transitions.',
  alternates: { canonical: 'https://www.advisorjay.com/wealth-review' },
  openGraph: {
    title: 'Get a Free Wealth Review from Jay | Advisor Jay',
    description:
      'Request a free, no-obligation wealth review from Jay Chang. An unfiltered look at where you stand.',
    url: 'https://www.advisorjay.com/wealth-review',
  },
  robots: { index: true, follow: true },
}

export default function WealthReviewPage() {
  return (
    <>
      <HideChrome />

      {/* Hero */}
      <section className="bg-[#333333] pt-[48px] pb-[48px] px-[20px] md:px-[40px]">
        <div className="max-w-[640px] mx-auto text-center">
          <h1 className="font-serif text-[32px] md:text-[44px] font-bold text-[#F7F4EE] mb-[16px] leading-tight">
            Get a Free Wealth Review from Jay
          </h1>
          <p className="font-sans text-[17px] font-light text-[#b6d0ed] leading-relaxed max-w-[480px] mx-auto">
            Just an honest look at where you stand.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#F7F4EE] py-[48px] md:py-[64px] px-[20px]">
        <WealthReviewForm />
      </section>

      {/* Minimal footer */}
      <div className="bg-[#333333] py-[24px] px-[20px] text-center">
        <p className="font-sans text-[11px] text-[#b6d0ed] leading-relaxed max-w-[600px] mx-auto">
          Advisory services provided by Farther Finance Advisors LLC, an
          SEC-registered investment adviser. Jay Chang is a VP, Wealth Advisor
          affiliated with Farther Finance Advisors LLC. This page does not
          constitute an offer or solicitation.
        </p>
        <p className="font-sans text-[11px] text-[#b6d0ed]/60 mt-[12px]">
          &copy; 2026 Advisor Jay. All rights reserved.
        </p>
      </div>
    </>
  )
}
