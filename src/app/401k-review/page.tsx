import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HideChrome from '@/components/HideChrome'
import WithholdingCalculator from '../tools/401k-withholding-calculator/WithholdingCalculator'

export const metadata: Metadata = {
  title: 'Is Your 401(k) Actually Working for You? | Advisor Jay',
  description:
    'Find out if you are on track to max out your 401(k) this year. No sign-up required. Built by Jay Chang, fiduciary wealth advisor.',
  alternates: { canonical: 'https://www.advisorjay.com/401k-review' },
  openGraph: {
    title: 'Is Your 401(k) Actually Working for You? | Advisor Jay',
    description:
      '401(k) withholding calculator. Find the exact percentage to max out your contributions this year.',
    url: 'https://www.advisorjay.com/401k-review',
  },
  robots: { index: true, follow: true },
}

export default function FourOneKReviewPage() {
  return (
    <>
      <HideChrome />

      {/* Hero */}
      <section className="bg-[#333333] pt-[48px] pb-[48px] px-[20px] md:px-[40px]">
        <div className="max-w-[720px] mx-auto text-center">
          {/* Farther logo */}
          <Image
            src="/Photos/Farther_Wordmark_RGB_Cream.png"
            alt="Farther"
            width={120}
            height={31}
            className="mx-auto mb-[32px] opacity-60"
            style={{ objectFit: 'contain' }}
            priority
          />

          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1d7682] mb-4">
            401(k) Planning Tool
          </p>

          <h1 className="font-serif text-[30px] md:text-[44px] font-bold text-[#F7F4EE] leading-tight mb-[16px]">
            Is Your 401(k) Actually Working for You?
          </h1>

          <p className="font-sans text-[16px] md:text-[17px] font-light text-[#b6d0ed] leading-relaxed max-w-[560px] mx-auto">
            Most people set their 401(k) contribution once and forget about it.
            Use this calculator to find the exact withholding percentage to max
            out your contributions this year, including catch-up and after-tax
            spillover.
          </p>

          <p className="font-sans text-[13px] text-[#F7F4EE]/50 mt-[16px] tracking-[0.05em]">
            No sign-up &middot; Instant results
          </p>
        </div>
      </section>

      {/* Jay intro */}
      <section className="bg-[#FAFAF8] py-[32px] px-[20px] md:px-[40px]">
        <div className="max-w-[720px] mx-auto flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[20px]">
          <Image
            src="/Photos/Color-Jay-Headshot.png"
            alt="Jay Chang, Wealth Advisor"
            width={64}
            height={64}
            className="rounded-full shrink-0"
            style={{ objectFit: 'cover' }}
          />
          <p className="font-sans text-[14px] text-[#5b6a71] leading-relaxed text-center sm:text-left">
            I built this calculator from patterns I see every day working with
            Fortune 500 employees. If your results raise questions,
            I&rsquo;m happy to walk through them with you.
            <span className="block mt-[4px] text-[#333333] font-medium">
              — Jay Chang, VP, Wealth Advisor
            </span>
          </p>
        </div>
      </section>

      <div className="h-[1px] bg-[#1d7682]/20" />

      {/* Calculator */}
      <section className="bg-[#F7F4EE] py-[48px] md:py-[64px] px-[20px] md:px-[40px]">
        <div className="max-w-[960px] mx-auto">
          <WithholdingCalculator />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#333333] py-[48px] md:py-[64px] px-[20px] md:px-[40px]">
        <div className="max-w-[560px] mx-auto text-center">
          <h2 className="font-serif text-[24px] md:text-[32px] font-bold text-[#F7F4EE] mb-[12px] leading-tight">
            Want to make sure you&rsquo;re getting the most out of your plan?
          </h2>
          <p className="font-sans text-[15px] font-light text-[#b6d0ed] leading-relaxed mb-[24px]">
            Your 401(k) is just one piece of the picture. I can look at the
            whole thing: taxes, investments, retirement timeline, and tell
            you where you stand.
          </p>
          <Link
            href="/schedule-consultation"
            className="inline-block bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-[#F7F4EE] font-sans text-[15px] font-semibold py-[16px] px-[40px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[2px] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200"
          >
            Schedule a Conversation With Me
          </Link>
          <p className="font-sans text-[12px] text-[#b6d0ed]/60 mt-[12px]">
            Confidential · Available nationwide
          </p>
        </div>
      </section>

      {/* Disclaimer + minimal footer */}
      <div className="bg-[#2a2a2a] py-[24px] px-[20px]">
        <div className="max-w-[640px] mx-auto">
          <p className="font-sans text-[11px] text-[#b6d0ed]/70 leading-relaxed text-center mb-[16px]">
            This calculator is for informational purposes only and does not
            constitute financial advice. 401(k) contribution limits are based on
            2026 IRS guidelines and may change. Actual withholding may vary
            depending on your employer&rsquo;s plan rules, pay frequency, and
            timing of contributions.
          </p>
          <p className="font-sans text-[11px] text-[#b6d0ed]/50 leading-relaxed text-center">
            Advisory services provided by Farther Finance Advisors LLC, an
            SEC-registered investment adviser. Jay Chang is a VP, Wealth
            Advisor affiliated with Farther Finance Advisors LLC.
          </p>
          <p className="font-sans text-[11px] text-[#b6d0ed]/40 mt-[12px] text-center">
            &copy; 2026 Advisor Jay. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}
