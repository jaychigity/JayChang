import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'
import SectionEyebrow from '@/components/SectionEyebrow'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { Calculator, FileText, Shield, Clock, TrendingUp, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Financial Advisor for PG&E Employees | Pension, RMSA & 401(k) | Advisor Jay',
  description:
    'I specialize in financial planning for PG&E employees. Final Pay vs. Cash Balance pension decisions, RMSA planning, 401(k) spillover election, early retirement eligibility, and retirement income coordination for IBEW, ESC, and management professionals.',
  alternates: {
    canonical: 'https://www.advisorjay.com/pge-employee-financial-advisor',
  },
  openGraph: {
    title: 'Financial Advisor for PG&E Employees | Advisor Jay',
    description:
      'Specialized financial planning for PG&E employees. Pension elections, RMSA depletion planning, 401(k) spillover, and retirement timing for IBEW, ESC Local 20, and management professionals.',
    url: 'https://www.advisorjay.com/pge-employee-financial-advisor',
  },
}

const pgeTestimonials = [
  {
    quote:
      "After PG&E came out of bankruptcy, I didn't know how to think about my deferred comp balance or whether my pension was actually safe. Jay walked me through exactly where the risks were and helped me build a plan that didn't rely on the company being perfect.",
    name: 'PG&E Operations Manager',
    location: 'Northern California',
    detail: 'Post-bankruptcy planning',
  },
  {
    quote:
      "I had no idea the RMSA had a depletion risk until Jay showed me the numbers. I was planning to retire at 57 and my account would have run out three years before Medicare. We adjusted the plan and I retire at 59 with full coverage to 65.",
    name: 'PG&E Senior Engineer',
    location: 'Bay Area, CA',
    detail: 'RMSA & retirement timing',
  },
  {
    quote:
      "I was contributing 6% to my 401(k) and had no idea I was leaving $2,400 a year in employer match on the table because I'm in the Cash Balance plan and the cap is 8%, not 6%. The spillover election alone was worth the conversation.",
    name: 'PG&E Project Manager',
    location: 'Sacramento, CA',
    detail: '401(k) match optimization',
  },
  {
    quote:
      "I'm IBEW 1245 and had been in the Final Pay plan for 22 years. Jay modeled what my pension actually looks like at 55, 58, and 62 — and helped me understand that two more years meaningfully changes the reduction. That's the kind of detail I needed.",
    name: 'PG&E Lineman, IBEW Local 1245',
    location: 'Fresno, CA',
    detail: 'Early retirement planning',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between PG&E Final Pay and Cash Balance pension plans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "PG&E employees hired before January 1, 2013 are generally in the Final Pay pension: a traditional defined benefit plan where your monthly benefit is based on years of credited service multiplied by a benefit factor and your final pay (last 30 days for union employees, highest 36-consecutive-month average for management). Employees hired on or after January 1, 2013 are in the Cash Balance plan, which works like a hypothetical account receiving annual pay credits of 5–10% of salary (based on age+service points) plus quarterly interest credits tied to the 30-year Treasury rate. The key practical difference: Cash Balance participants can take the full account as a lump sum at retirement and roll it into an IRA. Final Pay participants generally cannot. They receive a monthly annuity for life.",
      },
    },
    {
      '@type': 'Question',
      name: 'When can I retire early from PG&E and how much is my benefit reduced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PG&E allows early retirement beginning at age 55 with sufficient service. The early retirement reduction for Final Pay participants is approximately 26% at age 55, declining linearly to 0% at age 62. Employees with 30 or more years of credited service may qualify for an unreduced benefit before age 62. Cash Balance participants can access their account at any age upon separation, but leaving before 55 or before accumulating sufficient service may forfeit RMSA eligibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the PG&E RMSA and why does it matter for retirement planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "PG&E's Retiree Medical Savings Account (RMSA) is a company-funded account that begins accumulating on your behalf when you turn 45. It can only be used to pay PG&E-sponsored retiree medical premiums after retirement. The account earns interest while you work and depletes as you draw premiums in retirement. The critical planning consideration: if you retire early (before 65), the RMSA may run out before Medicare eligibility, leaving a gap period where healthcare costs come entirely from personal savings. Understanding your RMSA balance, depletion rate, and Medicare bridge gap is one of the most important, and most often overlooked, elements of PG&E retirement planning.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the PG&E 401(k) spillover election and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "PG&E's Retirement Savings Plan has an after-tax spillover election that most employees never set up. When your pre-tax contributions hit the IRS annual limit mid-year, your employer match stops unless the spillover is active. With the spillover in place, contributions automatically continue as after-tax and the company match keeps going, worth up to $1,185 per year in additional match for Cash Balance participants. After-tax spillover contributions are also eligible for rollout to a Roth IRA under the mega backdoor Roth strategy.",
      },
    },
    {
      '@type': 'Question',
      name: 'Should I take my PG&E Cash Balance pension as a lump sum or annuity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cash Balance participants have the option to take their full account balance as a lump sum, which can be rolled into an IRA and invested for continued growth. Alternatively, the balance can be converted to a lifetime monthly annuity. The lump sum is calculated as the actual account balance. Unlike AT&T or other employers whose lump sums are calculated using IRS segment rates, PG&E Cash Balance lump sums are straightforward. The decision depends on your health, other income sources, spouse situation, and how confident you are in managing the invested funds. We model both options in the context of your full retirement income picture.',
      },
    },
    {
      '@type': 'Question',
      name: 'I am an IBEW Local 1245 member: how is my pension different from management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "IBEW Local 1245 members in the Final Pay plan have their pension calculated on the last 30 days of base pay, compared to management employees who use the highest 36-consecutive-month average. The benefit multiplier may differ slightly between union and management formulas. Importantly, IBEW 1245 negotiated that pre-2013 members cannot be involuntarily switched from Final Pay to Cash Balance. Union members in the Final Pay plan also have a different 401(k) match structure: 60% match up to 6% of salary, compared to management's 75% up to 6%. If you switched to Cash Balance voluntarily, the match improves to 75% up to 8% plus a 2.4% additional employer contribution.",
      },
    },
  ],
}

export default function PGEEmployeeFinancialAdvisor() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FinancialService',
            name: 'Advisor Jay: PG&E Employee Financial Planning',
            description:
              'Specialized financial planning for PG&E employees. Pension elections, RMSA planning, 401(k) optimization, and retirement timing for IBEW, ESC Local 20, and management professionals.',
            url: 'https://www.advisorjay.com/pge-employee-financial-advisor',
            serviceType: ['Wealth Management', 'Retirement Planning', 'Pension Planning'],
            areaServed: 'United States',
            employee: {
              '@type': 'Person',
              name: 'Jay Chang',
              jobTitle: 'VP, Wealth Advisor',
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-[#333333] text-white py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionEyebrow text="PG&E EMPLOYEE FINANCIAL PLANNING" light />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6">
                Your PG&amp;E Benefits Have More Moving Parts Than Most Advisors Know How to Handle.
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Two different pension formulas. A retiree medical account that depletes, and runs out before Medicare if you
                retire too early. A 401(k) match structure that rewards Cash Balance participants more than Final Pay. A
                spillover election most employees never set up. These aren&apos;t generic retirement questions. They&apos;re
                PG&amp;E-specific decisions that require someone who knows how the pieces fit together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/schedule-consultation" variant="primary">
                  Schedule Your PG&amp;E Benefits Review
                </Button>
                <Button href="/tools/pge-pension" variant="ghost">
                  Try the Pension Calculator →
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">Confidential · Available nationwide</p>
            </div>
            <div className="relative">
              <Image
                src="/Photos/att.webp"
                alt="PG&E employee financial planning"
                width={1536}
                height={1024}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="bg-[#F7F4EE] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="border-l-4 border-[#1d7682] pl-8 py-8">
              <p className="text-lg leading-relaxed text-[#333333] mb-4">
                I&apos;ve worked with PG&amp;E employees across union and management roles: IBEW 1245 linemen with 25 years of
                Final Pay accruals, engineers in ESC Local 20 modeling Cash Balance projections, and management employees
                trying to understand what the RMSA actually covers and for how long.
              </p>
              <p className="text-lg leading-relaxed text-[#333333] mb-4">
                The RMSA is the piece most people don&apos;t fully understand until too late. It seems like a healthcare safety net,
                but it&apos;s a fixed account with a depletion clock. If you retire at 57 and your RMSA runs out at 63,
                you&apos;re covering two years of healthcare costs entirely out of pocket before Medicare. That gap changes the math
                on when to retire. I model it for every PG&amp;E client before we finalize a retirement date.
              </p>
              <p className="text-lg leading-relaxed text-[#333333]">
                Michael Lee on my team got into this work helping his mother navigate her Kaiser Permanente retirement, and has
                since worked with families at PG&amp;E, AT&amp;T, Chevron, and Northrop. Between us, we know what questions to
                ask before you sign anything.
              </p>
              <p className="mt-6 font-semibold text-[#1d7682]">— Jay Chang, VP, Wealth Advisor</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Benefits Deep Dive */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionEyebrow text="PG&E BENEFITS" />
            <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-4">
              What PG&amp;E Employees Actually Have, and What to Do With It
            </h2>
            <p className="text-lg text-[#5b6a71] leading-relaxed mb-12 max-w-3xl">
              PG&amp;E offers some of the most valuable utility benefits in the country. The challenge isn&apos;t that the
              benefits are bad, it&apos;s that they interact in ways that aren&apos;t obvious until you model them together.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pension Plans */}
            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  Two Pension Formulas: Which One You&apos;re In Changes Everything
                </h3>
                <div className="space-y-4 text-[#333333]">
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">Final Pay Pension (hired before 2013)</p>
                    <p className="text-base leading-relaxed">
                      A traditional defined benefit formula calculated on years of credited service and final pay. Union
                      (IBEW/ESC) employees use the last 30 days of base pay. Management and A&amp;T employees use the
                      highest 36-consecutive-month average. There is generally no lump sum option, and your benefit pays as a
                      monthly annuity for life, with elections for survivor coverage. The benefit multiplier is not publicly
                      disclosed; PG&amp;E&apos;s pension center at 1-800-700-0057 can confirm yours.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">Cash Balance Pension (hired 2013+)</p>
                    <p className="text-base leading-relaxed">
                      Works like a growing hypothetical account. PG&amp;E credits 5–10% of your annual base salary based on
                      your age+service points, plus quarterly interest credits tied to the 30-year Treasury rate. At
                      retirement, you can take the full balance as a lump sum and roll it into an IRA, a significant
                      advantage the Final Pay plan doesn&apos;t offer. The account is also portable: if you leave PG&amp;E
                      before retirement, the vested balance goes with you.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">Early Retirement &amp; Reduction Factors</p>
                    <p className="text-base leading-relaxed">
                      PG&amp;E allows early retirement at age 55. For Final Pay participants, the benefit is reduced by
                      approximately 26% at age 55, declining linearly to no reduction at age 62. Employees with 30 years of
                      credited service may qualify for an unreduced benefit earlier. Every year you work between 55 and 62
                      meaningfully increases your lifetime pension income, and we model the exact breakeven for your situation.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* RMSA */}
            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  The RMSA: The Benefit Most PG&amp;E Employees Misunderstand
                </h3>
                <div className="space-y-4 text-[#333333]">
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">What It Is</p>
                    <p className="text-base leading-relaxed">
                      PG&amp;E funds a Retiree Medical Savings Account on your behalf starting at age 45. Annual contributions
                      increase once you reach 20 years of service. The account earns interest while you work and can be
                      accessed at retirement (age 55+ with 10+ years of service) to pay PG&amp;E-sponsored retiree medical
                      premiums. You cannot contribute to it yourself, and it can&apos;t be used for anything other than those premiums.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">The Depletion Problem</p>
                    <p className="text-base leading-relaxed">
                      The RMSA is a fixed account. As you draw premiums in retirement, the balance declines. If healthcare
                      costs rise faster than the post-retirement interest rate, the account depletes faster than expected. For
                      employees who retire early, say at 57, there&apos;s a real risk the RMSA runs out two or three years
                      before Medicare eligibility at 65. Those gap years mean paying full healthcare costs from personal savings.
                      We calculate your specific depletion timeline as part of every PG&amp;E retirement plan we build.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">How It Changes Your Retirement Date</p>
                    <p className="text-base leading-relaxed">
                      The RMSA depletion date is often the hidden constraint in PG&amp;E retirement timing. It&apos;s not
                      just about pension benefit, it&apos;s about whether your healthcare is covered to 65. Sometimes working
                      one or two additional years meaningfully extends your RMSA coverage and eliminates the gap entirely.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* 401(k) Spillover */}
            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  401(k) Spillover &amp; Match Optimization
                </h3>
                <div className="space-y-4 text-[#333333]">
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">Match Structure by Plan Type</p>
                    <p className="text-base leading-relaxed">
                      Your 401(k) match depends on which pension plan you&apos;re in. Final Pay participants get a 75%
                      match (management) or 60% match (union) up to 6% of salary. Cash Balance participants, all hired
                      2013 or later, or pre-2013 employees who elected to switch, receive a 75% match up to 8% of salary
                      plus an additional 2.4% employer contribution regardless of what you contribute. Cash Balance
                      participants have a materially better 401(k) structure.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">The Spillover Election</p>
                    <p className="text-base leading-relaxed">
                      When your pre-tax 401(k) contributions hit the IRS annual limit mid-year, your employer match stops
                      unless you&apos;ve set up the after-tax spillover election. With it active, contributions
                      automatically convert to after-tax and the match continues. For Cash Balance participants, this is
                      worth up to $1,185 per year in match that would otherwise be forfeited. Most employees never set
                      this up, and there&apos;s no automatic notification when contributions stop.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">Mega Backdoor Roth</p>
                    <p className="text-base leading-relaxed">
                      PG&amp;E&apos;s 401(k) plan allows after-tax contributions and in-service distributions, which means eligible employees can roll those contributions into a Roth IRA, adding tens of thousands of dollars in tax-free retirement savings beyond the standard limits. As of January 2026, IBEW 1245 members also gained access to the Roth 401(k) option for the first time, creating additional tax-diversification opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* NQDC */}
            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  Nonqualified Deferred Comp &amp; Retirement Income Coordination
                </h3>
                <div className="space-y-4 text-[#333333]">
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">SRSP &amp; SERP (Management)</p>
                    <p className="text-base leading-relaxed">
                      Eligible PG&amp;E management employees can defer salary and bonus into the Supplemental Retirement
                      Savings Plan (SRSP): a nonqualified deferred compensation plan that mirrors the 401(k) above IRS
                      limits. The SERP provides additional defined benefit accruals for executives in qualifying roles.
                      Both plans are unfunded, unsecured obligations of PG&amp;E, meaning they sit in the same creditor
                      queue as general liabilities if the company were to face financial distress again.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">Retirement Income Sequencing</p>
                    <p className="text-base leading-relaxed">
                      Pension income, SRSP distributions, and Social Security all count as ordinary income. Without
                      deliberate sequencing, they can stack into a high bracket in the first years of retirement,
                      especially if SRSP distributions and pension both start in year one. We model the distribution
                      schedule across multiple years to stay in the most efficient brackets, including Roth conversion
                      opportunities in low-income gap years.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">California Tax Considerations</p>
                    <p className="text-base leading-relaxed">
                      Most PG&amp;E employees work in California, which taxes pension income as ordinary income at rates
                      up to 13.3%. If you&apos;re considering establishing residence in Nevada or Arizona before
                      retirement, particularly if you have deferred comp distributions ahead, the timing of that move
                      relative to your first distributions can have material tax consequences.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Featured Tool CTA */}
      <section className="bg-[#1d7682] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <Calculator className="w-10 h-10 text-white/70 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Six Calculators Built Specifically for PG&amp;E Employees
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              The PG&amp;E Pension Suite covers Final Pay estimates, Cash Balance projections, early retirement eligibility,
              RMSA depletion modeling, and 401(k) match optimization. No sign-up required.
            </p>
            <Button href="/tools/pge-pension" variant="primary">
              Open the PG&amp;E Pension Suite →
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F4EE] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionEyebrow text="COMMON QUESTIONS" />
            <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-12">
              Questions I Get Most Often
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-xl font-bold text-[#1d7682] mb-3">
                  What&apos;s the difference between Final Pay and Cash Balance?
                </h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  Final Pay is a traditional pension: your benefit is a monthly annuity for life based on years of service
                  and your final pay. No lump sum. Cash Balance is a hybrid: it grows like an account (5–10% annual pay
                  credits plus 30-year Treasury interest) and you can take the balance as a lump sum at retirement and roll
                  it into an IRA. Hire date is the main determinant: before 2013 usually means Final Pay, 2013 or later
                  means Cash Balance. Some pre-2013 employees made an irrevocable election in 2013 to switch.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-xl font-bold text-[#1d7682] mb-3">
                  How much will my RMSA be reduced if I retire at 57 vs. 62?
                </h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  The RMSA balance at retirement is the same, accumulated by PG&amp;E regardless of when you
                  leave (as long as you meet the eligibility minimums). The difference is how long it has to last. Retiring
                  at 57 means the account needs to cover 8 years of premiums before Medicare at 65. Retiring at 62 means
                  only 3 years. Premium inflation compounds the problem, the account depletes faster in later years. We
                  model this precisely using your specific balance and current premium estimates so you know exactly when
                  coverage runs out.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-xl font-bold text-[#1d7682] mb-3">
                  I missed the spillover election. Is it too late?
                </h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  No, you can typically set up or change the spillover election through Fidelity NetBenefits. The key is
                  making the change before your pre-tax contributions hit the IRS annual limit for the year. If you
                  already hit the limit this year without the election, you&apos;ve forfeited match for the rest of this
                  year, but you can set it up now for next year. This is one of the first things we check for every PG&amp;E
                  employee I work with.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-xl font-bold text-[#1d7682] mb-3">
                  Should I take my Cash Balance pension as a lump sum or monthly annuity?
                </h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  For Cash Balance participants, the lump sum is simply your account balance, and there&apos;s no interest
                  rate sensitivity the way there is with AT&T or other employer lump sum calculations. The decision
                  comes down to: do you want guaranteed monthly income for life (annuity), or do you want the flexibility
                  and growth potential of investing the lump sum yourself (rollover to IRA)? Your health, other income
                  sources, spouse situation, and risk tolerance all factor in. We model both options in the context of
                  your full retirement income plan.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-xl font-bold text-[#1d7682] mb-3">
                  I&apos;m in IBEW 1245: how is my situation different from management?
                </h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  Several ways matter for planning. Your Final Pay pension uses the last 30 days of base pay (management
                  uses a 36-month average), your 401(k) match is 60% up to 6% (vs. management&apos;s 75%), you cannot be
                  involuntarily moved from Final Pay to Cash Balance, and the Roth 401(k) option wasn&apos;t available to
                  IBEW 1245 members until January 2026. Your retirement timeline may also be shaped differently by IBEW
                  contract provisions around retiree medical and pension eligibility. I work with both union and management
                  PG&amp;E employees and know which details vary by classification.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-xl font-bold text-[#1d7682] mb-3">
                  When is the right time to retire from PG&amp;E?
                </h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  For most PG&amp;E employees, the answer involves three dates working together: the age at which your
                  early retirement reduction becomes acceptable (or disappears entirely), the year your RMSA provides full
                  coverage to Medicare, and the point at which additional work years stop adding meaningful value to your
                  pension accrual. These don&apos;t always align on the same birthday. We build a timeline that shows the
                  financial impact of each retirement date so the right window becomes clear.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionEyebrow text="HOW I HELP" />
            <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-12">
              What PG&amp;E Employee Financial Planning Actually Looks Like
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <FileText className="w-6 h-6 text-[#1d7682] mb-4" />
                <h3 className="text-xl font-bold text-[#333333] mb-3">Pension Plan Election</h3>
                <p className="text-[#5b6a71] text-base leading-relaxed">
                  We identify your plan type, model the annuity options for Final Pay participants or lump sum vs. annuity
                  for Cash Balance participants, and compare every payout scenario against your income needs and spouse&apos;s
                  situation.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <Heart className="w-6 h-6 text-[#1d7682] mb-4" />
                <h3 className="text-xl font-bold text-[#333333] mb-3">RMSA Depletion Planning</h3>
                <p className="text-[#5b6a71] text-base leading-relaxed">
                  We calculate your RMSA balance at each potential retirement age, model the depletion timeline under
                  realistic premium inflation, and identify the Medicare bridge gap, then build a retirement date
                  recommendation that minimizes uncovered healthcare exposure.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <Clock className="w-6 h-6 text-[#1d7682] mb-4" />
                <h3 className="text-xl font-bold text-[#333333] mb-3">Retirement Timing Optimization</h3>
                <p className="text-[#5b6a71] text-base leading-relaxed">
                  We model the financial impact of every retirement age from 55 to 65: pension benefit, RMSA coverage,
                  Social Security interaction, and savings drawdown, on a single timeline so the optimal window is clear.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <Shield className="w-6 h-6 text-[#1d7682] mb-4" />
                <h3 className="text-xl font-bold text-[#333333] mb-3">401(k) &amp; Spillover Maximization</h3>
                <p className="text-[#5b6a71] text-base leading-relaxed">
                  We set up the spillover election, identify how much match is currently being forfeited, evaluate the
                  mega backdoor Roth opportunity, and build a savings rate that captures every dollar of employer
                  contribution available to you.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <TrendingUp className="w-6 h-6 text-[#1d7682] mb-4" />
                <h3 className="text-xl font-bold text-[#333333] mb-3">California Tax Planning</h3>
                <p className="text-[#5b6a71] text-base leading-relaxed">
                  We model the tax impact of pension income, SRSP distributions, and Social Security under California&apos;s
                  13.3% top marginal rate, and evaluate whether establishing Arizona or Nevada residency before
                  distributions start could meaningfully reduce your lifetime tax bill.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <Calculator className="w-6 h-6 text-[#1d7682] mb-4" />
                <h3 className="text-xl font-bold text-[#333333] mb-3">Retirement Income Sequencing</h3>
                <p className="text-[#5b6a71] text-base leading-relaxed">
                  Pension, SRSP, Social Security, and 401(k) withdrawals all stack as taxable income. We sequence the
                  sources year by year to stay in the lowest brackets, fill Roth conversion windows during low-income
                  years, and minimize your total tax burden across retirement.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F7F4EE] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto text-center">
          <AnimateOnScroll>
            <SectionEyebrow text="WHAT PG&E EMPLOYEES SAY" />
            <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mt-4 mb-8">
              What Clients Say About Working With Me
            </h2>
          </AnimateOnScroll>
          <TestimonialCarousel testimonials={pgeTestimonials} />
        </div>
      </section>

      {/* Back to Telecom Hub */}
      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#5b6a71] text-sm">
            Also work at AT&amp;T, Verizon, T-Mobile, or SRP?{' '}
            <Link
              href="/telecommunications-utilities-wealth-management"
              className="text-[#1d7682] underline hover:opacity-70"
            >
              See the full Telecom &amp; Utilities planning overview →
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#333333] text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let&apos;s Look at Your PG&amp;E Benefits Together.
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Bring what you have: a benefits statement, a pension estimate, your current contribution rate. I&apos;ll
              show you what it all means and where the real decisions are.
            </p>
            <Button href="/schedule-consultation" variant="primary">
              Schedule Your PG&amp;E Benefits Review
            </Button>
            <p className="text-gray-400 text-sm mt-4">Confidential · Available nationwide</p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
