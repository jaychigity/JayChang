import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'
import SectionEyebrow from '@/components/SectionEyebrow'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { Calculator, Phone, FileText, Shield, Clock, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Financial Advisor for AT&T Employees | Pension, 401(k) & Deferred Comp | Advisor Jay',
  description: 'Jay Chang specializes in financial planning for AT&T employees — union and management. Pension lump sum vs. annuity, BCB1/BCB2 cash balance plans, Surplus Savings Plan, DISC deferred comp, and retirement timing.',
  alternates: {
    canonical: 'https://www.advisorjay.com/att-employee-financial-advisor',
  },
  openGraph: {
    title: 'Financial Advisor for AT&T Employees | Advisor Jay',
    description: 'Specialized financial planning for AT&T employees. Pension elections, cash balance plans, deferred comp coordination, and retirement timing — for CWA, IBEW, and management professionals.',
    url: 'https://www.advisorjay.com/att-employee-financial-advisor',
  },
}

const attTestimonials = [
  {
    quote: "I had 30 years at AT&T and couldn't figure out how my pension, 401(k), and deferred comp all fit together. Jay built a single retirement income timeline and showed me I could retire two years earlier than I thought.",
    name: 'AT&T Network Engineering Manager',
    location: 'Phoenix, AZ',
    detail: 'Retirement orchestration',
  },
  {
    quote: "I didn't know which pension plan I was in until Jay walked me through it. Turns out I was BCB1 and my lump sum option was worth modeling against the annuity. We ran the numbers and I made a decision I actually understood.",
    name: 'AT&T Field Operations Supervisor',
    location: 'Chandler, AZ',
    detail: 'Pension plan election',
  },
  {
    quote: "My DISC balance had grown to a level I wasn't expecting. Jay helped me structure the distribution schedule to avoid a massive tax hit in a single year. That planning alone was worth more than years of advisory fees.",
    name: 'AT&T Senior Director',
    location: 'Dallas, TX',
    detail: 'Deferred comp planning',
  },
  {
    quote: "I was within two years of retirement and had no idea the Modified Rule of 75 even existed. Jay showed me I qualified and helped me lock in my healthcare bridge before I left. That changed everything about my timeline.",
    name: 'AT&T CWA-represented Technician',
    location: 'Phoenix, AZ',
    detail: 'Early retirement eligibility',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which AT&T pension plan am I in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AT&T has four active pension plan types. Legacy Pension Band plans cover union employees hired before 2002. Bargained Cash Balance #1 (BCB1) covers union employees hired between 2002 and 2013. Bargained Cash Balance #2 (BCB2) covers union employees hired in 2014 or later. Management Cash Balance covers non-union employees. Pre-2002 management employees may also have a frozen Modified Cash Balance (MCB) account. Your plan determines how your benefit is calculated, whether you have a lump sum option, and what interest credit rate applies. The fastest way to confirm your plan is through AT&T NetBenefits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I take my AT&T pension as a lump sum or monthly annuity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This depends on your pension plan type, your health, your other assets, and prevailing interest rates. Only Cash Balance plan participants (BCB1, BCB2, Management Cash Balance) have a lump sum option — Legacy Pension Band participants typically do not. For those who have the option, the lump sum calculation uses IRS segment rates, meaning a 1% shift in rates can change the lump sum by 8–12%. We model both options under your specific plan formula, factoring in your 401(k) balance, Social Security timing, DISC distribution schedule, and expected retirement spending.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the AT&T Modified Rule of 75?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Modified Rule of 75 is an AT&T early retirement provision that allows eligible employees to retire before the standard retirement age with access to retiree medical benefits. You generally qualify when your age plus years of AT&T service equals at least 75, with a minimum age requirement (often 50 or 55 depending on the plan and bargaining unit). Qualifying under the Rule of 75 can significantly change your retirement timeline — particularly because it determines whether you can bridge healthcare coverage between your retirement date and Medicare eligibility at 65.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the AT&T Surplus Savings Plan work alongside the 401(k)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "AT&T's Surplus Savings Plan is a supplemental savings program that allows eligible employees to defer additional pre-tax dollars beyond the standard 401(k) contribution limits. For management employees, coordinating contributions between the 401(k) and the Surplus Savings Plan requires careful sequencing — particularly if you want to pursue a mega backdoor Roth strategy using after-tax 401(k) contributions. Many AT&T employees leave money on the table by not understanding how these two accounts interact.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the AT&T DISC plan and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "AT&T's Deferred Income Savings Concepts (DISC) plan is a nonqualified deferred compensation arrangement available to management employees above a certain compensation threshold. DISC balances operate under Section 409A, which means distribution elections must be locked in before the deferral year. AT&T's collective DISC balance has been reported at over $3.3 billion — most of it held as an unsecured company obligation. If your DISC balance represents a significant portion of your net worth, understanding the concentration and tax implications of your distribution schedule is essential planning.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the right time to retire from AT&T?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AT&T retirement timing involves more moving parts than most employers. Your pension benefit under a Cash Balance plan continues to grow with interest credits even after you stop earning pay credits — so waiting can be beneficial or not depending on the interest crediting rate. Your Rule of 75 eligibility date may differ from your minimum pension eligibility date. Your DISC distribution start date (if applicable) may be locked in years in advance. And your retiree healthcare bridge depends on meeting both the age and service minimums. We model all of these variables together to identify the retirement date where every piece works in your favor.',
      },
    },
  ],
}

export default function ATTEmployeeFinancialAdvisor() {
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
            name: 'Advisor Jay — AT&T Employee Financial Planning',
            description:
              'Specialized financial planning for AT&T employees. Pension elections, cash balance plans, deferred comp coordination, and retirement timing for CWA, IBEW, and management professionals.',
            url: 'https://www.advisorjay.com/att-employee-financial-advisor',
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
              <SectionEyebrow text="AT&T EMPLOYEE FINANCIAL PLANNING" light />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6">
                Your AT&amp;T Benefits Are More Complex Than Most Advisors Realize. I Know the Difference.
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Four different pension plan types. A Surplus Savings Plan most people underuse. Deferred comp that has to be structured years in advance. A retirement timing decision that involves your pension, your Rule of 75 eligibility, and your healthcare bridge all at once. I&apos;ve worked through these decisions with AT&amp;T employees across union and management roles — and I built a calculator suite specifically for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/schedule-consultation" variant="primary">
                  Schedule Your AT&amp;T Benefits Review
                </Button>
                <Button href="/tools/att-pension" variant="ghost">
                  Try the Pension Calculator →
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No obligation · Available nationwide
              </p>
            </div>
            <div className="relative">
              <Image
                src="/Photos/att.webp"
                alt="AT&T employee financial planning"
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
                I&apos;ve worked with AT&amp;T employees at every level — CWA and IBEW technicians with legacy pension bands, mid-career managers trying to understand their BCB1 cash balance account, and directors with DISC balances that have grown larger than they expected. The questions are almost always the same: which plan am I in, should I take the lump sum, and when can I actually afford to leave?
              </p>
              <p className="text-lg leading-relaxed text-[#333333] mb-4">
                What makes AT&amp;T different is the layering. It&apos;s rarely just the pension. It&apos;s the pension plus the Surplus Savings Plan plus the DISC distribution schedule plus the Rule of 75 eligibility date plus the healthcare bridge. Miss any one of those pieces and you either leave money behind or create a tax problem you didn&apos;t see coming.
              </p>
              <p className="text-lg leading-relaxed text-[#333333]">
                Michael Lee on my team got into this work helping his mother retire from Kaiser Permanente — and has since worked extensively with AT&amp;T, PG&amp;E, Chevron, and Northrop professionals navigating these exact decisions. Between the two of us, and the calculator suite I&apos;ve built specifically for AT&amp;T employees, you won&apos;t have to explain your benefits from scratch.
              </p>
              <p className="mt-6 font-semibold text-[#1d7682]">— Jay Chang, Farther</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* AT&T Benefits Deep Dive */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionEyebrow text="AT&T BENEFITS" />
            <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-4">
              What AT&amp;T Employees Actually Have — and What to Do With It
            </h2>
            <p className="text-lg text-[#5b6a71] leading-relaxed mb-12 max-w-3xl">
              AT&amp;T offers some of the most valuable retirement benefits in the telecom industry. The challenge isn&apos;t that the benefits are bad — it&apos;s that they&apos;re complicated, and most advisors don&apos;t take the time to understand the details.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pension Plans */}
            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  AT&amp;T Pension Plans — There Are Four
                </h3>
                <div className="space-y-4 text-[#333333]">
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">Legacy Pension Band (pre-2002 union)</p>
                    <p className="text-base leading-relaxed">
                      Long-tenured CWA and IBEW employees hired before 2002 are often in a legacy Pension Band plan. Your benefit is calculated based on your band number and years of credited service — not a cash balance account. There is typically no lump sum option, which means the annuity payout and election type (single life vs. joint-and-survivor) is the central decision at retirement.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">Bargained Cash Balance BCB1 &amp; BCB2 (union, 2002+)</p>
                    <p className="text-base leading-relaxed">
                      Union employees hired between 2002 and 2013 are typically in BCB1, which credits pay plus interest at a rate tied to the 30-year Treasury with a floor. Those hired in 2014 or later are in BCB2, which uses a fixed interest credit rate. Both plans offer a lump sum option at retirement, which can be rolled into an IRA — a meaningful advantage over the legacy band formula.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">Management Cash Balance (management employees)</p>
                    <p className="text-base leading-relaxed">
                      Non-union employees accrue benefits through the Management Cash Balance plan with age-graded pay credits that increase as you get older. Pre-2002 management employees may also have a frozen Modified Cash Balance (MCB) account from earlier service. The lump sum vs. annuity decision for management employees is highly sensitive to IRS segment rates — in a rising rate environment, lump sum values can drop significantly.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Surplus Savings Plan & 401(k) */}
            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  Surplus Savings Plan &amp; 401(k) Coordination
                </h3>
                <div className="space-y-4 text-[#333333]">
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">The 401(k) Foundation</p>
                    <p className="text-base leading-relaxed">
                      AT&amp;T&apos;s 401(k) includes a company match that varies by bargaining unit and management tier. For union employees, the match structure is negotiated as part of the collective bargaining agreement and differs between CWA and IBEW groups. Maximizing the match is table stakes — but the bigger planning opportunity is often in what sits alongside it.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">The Surplus Savings Plan</p>
                    <p className="text-base leading-relaxed">
                      Eligible AT&amp;T management employees can defer additional pre-tax dollars into the Surplus Savings Plan beyond the IRS 401(k) limit. This is a qualified plan — meaning contributions are protected, unlike nonqualified deferred comp. Many employees don&apos;t know it exists or don&apos;t maximize it, leaving one of the most tax-efficient savings opportunities at AT&amp;T unused.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">Mega Backdoor Roth Opportunity</p>
                    <p className="text-base leading-relaxed">
                      If AT&amp;T&apos;s plan allows after-tax contributions and in-service distributions, eligible employees may be able to roll after-tax 401(k) contributions into a Roth IRA — adding tens of thousands of dollars per year in tax-free retirement savings on top of the standard limits. Plan-specific rules apply and need to be verified before implementing.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* DISC */}
            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  DISC Deferred Compensation — The Plan Most Advisors Miss
                </h3>
                <div className="space-y-4 text-[#333333]">
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">How DISC Works</p>
                    <p className="text-base leading-relaxed">
                      AT&amp;T&apos;s Deferred Income Savings Concepts (DISC) plan allows eligible management employees to defer a portion of their salary and annual bonus into a nonqualified deferred compensation account. Contributions are invested in notional funds and grow tax-deferred. The catch: distributions must be elected under Section 409A rules years before they begin — and once set, the schedule is difficult to change.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">The $3.3 Billion Problem</p>
                    <p className="text-base leading-relaxed">
                      AT&amp;T&apos;s aggregate DISC balance has been reported at over $3.3 billion — held entirely as an unsecured obligation of the company. Unlike the 401(k), DISC funds are not held in trust separate from AT&amp;T&apos;s assets. If your DISC balance is large relative to your other savings, you carry meaningful concentration risk in your employer&apos;s financial health, on top of any employer stock you hold.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">Distribution Planning</p>
                    <p className="text-base leading-relaxed">
                      A large DISC balance distributing in a single year can push you into the top federal bracket. We structure the distribution schedule across multiple years, coordinated with your pension start date and Social Security filing decision, to smooth the tax hit and keep your lifetime tax bill as low as possible.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Retiree Medical & Rule of 75 */}
            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  Retiree Medical, Rule of 75 &amp; Retirement Timing
                </h3>
                <div className="space-y-4 text-[#333333]">
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">The Modified Rule of 75</p>
                    <p className="text-base leading-relaxed">
                      AT&amp;T&apos;s Modified Rule of 75 is one of the most valuable — and least understood — early retirement provisions in the telecom industry. When your age plus your years of AT&amp;T service equals 75 or more (with a minimum age requirement), you may qualify to retire early and retain access to AT&amp;T-sponsored retiree medical coverage. That healthcare bridge between your retirement date and Medicare at 65 can be worth tens of thousands of dollars over the gap years, and it&apos;s the single most common reason employees stay longer than they need to.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">Retiree Medical Coordination</p>
                    <p className="text-base leading-relaxed">
                      AT&amp;T offers retiree medical benefits for eligible employees — but the cost, coverage, and subsidy structure varies by bargaining unit and retirement date. We model the full healthcare cost from retirement through Medicare eligibility, including premium trajectories and what happens to your retiree coverage once Medicare kicks in at 65.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d7682] mb-2">Putting It All Together</p>
                    <p className="text-base leading-relaxed">
                      Your optimal retirement date is the intersection of your pension eligibility, your Rule of 75 date, your DISC distribution start, and your healthcare bridge. We model every variable on a single timeline so you can see exactly what changes — financially — with each month you work or don&apos;t work.
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
              Six Calculators Built Specifically for AT&amp;T Employees
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              The AT&amp;T Pension Suite covers cash balance projections, pension band estimates, lump sum vs. annuity comparisons, early retirement modeling, income gap analysis, and 401(k) projections — all in one place. No sign-up required.
            </p>
            <Button href="/tools/att-pension" variant="primary">
              Open the AT&amp;T Pension Suite →
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Common Questions / FAQ */}
      <section className="bg-[#F7F4EE] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionEyebrow text="COMMON QUESTIONS" />
            <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-12">
              Questions I Hear From AT&amp;T Employees Every Week
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-xl font-bold text-[#1d7682] mb-3">
                  Which AT&amp;T pension plan am I in?
                </h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  Most AT&amp;T employees don&apos;t know off the top of their head. It depends on whether you&apos;re union or management and when you were hired. Union employees hired before 2002 are typically in a Legacy Pension Band. Union hires from 2002–2013 are in BCB1. Union hires in 2014 or later are in BCB2. Management employees are in the Management Cash Balance plan, with pre-2002 management also potentially holding a frozen MCB account. Your NetBenefits account will confirm it — and I built a quick two-question guide into the pension calculator to help you find the right tab before you start.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-xl font-bold text-[#1d7682] mb-3">
                  Should I take my AT&amp;T pension as a lump sum or monthly annuity?
                </h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  If you&apos;re in a Cash Balance plan (BCB1, BCB2, or Management CB), you have a lump sum option. Legacy Pension Band participants generally do not. For those who have the choice, this is one of the most consequential decisions you&apos;ll make — and it&apos;s irrevocable. The lump sum calculation uses IRS segment rates, so the right answer today might be different from what it was two years ago. We model both options against your full financial picture before you decide.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-xl font-bold text-[#1d7682] mb-3">
                  What is the Modified Rule of 75 and do I qualify?
                </h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  The Modified Rule of 75 lets eligible AT&amp;T employees retire early while keeping access to company-sponsored retiree medical coverage. You qualify when your age plus years of service reaches 75, with a minimum age (typically 50 or 55 depending on your bargaining unit and hire date). This is different from your pension eligibility date — you can qualify for Rule of 75 healthcare before your pension is fully vested, and vice versa. For many employees, the Rule of 75 date is the real retirement trigger, not the pension date.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-xl font-bold text-[#1d7682] mb-3">
                  How do I coordinate DISC distributions to minimize taxes?
                </h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  DISC distributions are taxed as ordinary income in the year they&apos;re received. If your pension, Social Security, and DISC are all starting at the same time, you could easily land in the 37% federal bracket without planning. We structure the distribution schedule — ideally before you lock in your 409A elections — to spread income across lower-bracket years, coordinate with your pension start date, and take advantage of Roth conversion opportunities in the gap years before Required Minimum Distributions begin.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-xl font-bold text-[#1d7682] mb-3">
                  When is the right time to retire from AT&amp;T?
                </h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  For most AT&amp;T employees, the answer involves four dates: your pension eligibility date, your Rule of 75 date, your DISC distribution start date (if applicable), and your Medicare eligibility date. These rarely land on the same day. We build a single retirement income timeline that shows you exactly what changes — financially — in each month between now and your latest possible retirement date. That usually makes the right window obvious.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <h3 className="text-xl font-bold text-[#1d7682] mb-3">
                  I&apos;m a CWA/IBEW member — does that change anything?
                </h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  Yes, in several ways. Your pension formula, 401(k) match structure, and DISC eligibility all differ from management employees. Your retiree medical benefits are negotiated through your collective bargaining agreement and may differ from what management-tier employees receive. Your pension band number or BCB plan type is tied to your bargaining unit classification. I work with both union and management AT&amp;T employees regularly and understand how the contract provisions affect your planning — not just the general plan rules.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services for AT&T Employees */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionEyebrow text="HOW I HELP" />
            <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-12">
              What AT&amp;T Employee Financial Planning Actually Looks Like
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <FileText className="w-6 h-6 text-[#1d7682] mb-4" />
                <h3 className="text-xl font-bold text-[#333333] mb-3">Pension Plan Election</h3>
                <p className="text-[#5b6a71] text-base leading-relaxed">
                  We identify your plan type, model the lump sum vs. annuity decision using current IRS segment rates, and compare every payout option — single life, joint-and-survivor, period certain — against your specific situation and spouse&apos;s needs.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <Clock className="w-6 h-6 text-[#1d7682] mb-4" />
                <h3 className="text-xl font-bold text-[#333333] mb-3">Retirement Timing Optimization</h3>
                <p className="text-[#5b6a71] text-base leading-relaxed">
                  We build a single timeline that shows your pension eligibility date, Rule of 75 date, DISC distribution start, and Medicare eligibility — and model the financial impact of each possible retirement date so you can make the decision clearly.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <TrendingUp className="w-6 h-6 text-[#1d7682] mb-4" />
                <h3 className="text-xl font-bold text-[#333333] mb-3">DISC Distribution Strategy</h3>
                <p className="text-[#5b6a71] text-base leading-relaxed">
                  We structure your deferred comp distribution schedule — ideally before your 409A elections lock in — to spread income across years, avoid bracket spikes, and coordinate with your other retirement income sources.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <Shield className="w-6 h-6 text-[#1d7682] mb-4" />
                <h3 className="text-xl font-bold text-[#333333] mb-3">401(k) &amp; Surplus Savings Maximization</h3>
                <p className="text-[#5b6a71] text-base leading-relaxed">
                  We coordinate contributions between the 401(k) and Surplus Savings Plan, evaluate after-tax contribution strategies, and build a pre-retirement accumulation plan that leaves nothing on the table.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <Phone className="w-6 h-6 text-[#1d7682] mb-4" />
                <h3 className="text-xl font-bold text-[#333333] mb-3">Retiree Healthcare Planning</h3>
                <p className="text-[#5b6a71] text-base leading-relaxed">
                  We model your retiree medical costs from retirement through Medicare eligibility at 65, including Rule of 75 qualification, premium trajectories, and how your healthcare coverage changes once Medicare becomes primary.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <Calculator className="w-6 h-6 text-[#1d7682] mb-4" />
                <h3 className="text-xl font-bold text-[#333333] mb-3">Social Security Coordination</h3>
                <p className="text-[#5b6a71] text-base leading-relaxed">
                  Pension income, DISC distributions, and Social Security all stack together as taxable income. We model the optimal Social Security filing age alongside your other income sources to maximize lifetime benefits and minimize your total tax burden.
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
            <SectionEyebrow text="WHAT AT&T EMPLOYEES SAY" />
            <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mt-4 mb-8">
              What Clients Say About Working With Jay
            </h2>
          </AnimateOnScroll>
          <TestimonialCarousel testimonials={attTestimonials} />
        </div>
      </section>

      {/* Back to Telecom Hub */}
      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#5b6a71] text-sm">
            Also work at Verizon, T-Mobile, SRP, or PG&E?{' '}
            <Link href="/telecommunications-utilities-wealth-management" className="text-[#1d7682] underline hover:opacity-70">
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
              Let&apos;s Look at Your AT&amp;T Benefits Together.
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Bring what you have — a NetBenefits statement, a pension estimate, a DISC election form. I&apos;ll show you what it all means and what a real plan looks like.
            </p>
            <Button href="/schedule-consultation" variant="primary">
              Schedule Your AT&amp;T Benefits Review
            </Button>
            <p className="text-gray-400 text-sm mt-4">No commitment · Available nationwide</p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
