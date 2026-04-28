import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';
import SectionEyebrow from '@/components/SectionEyebrow';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export const metadata: Metadata = {
 title: 'Telecommunications & Utilities Wealth Management | AT&T, Verizon, T-Mobile, SRP, PG&E | Advisor Jay, Farther',
 description: 'Fiduciary financial planning for telecom and utility professionals at AT&T, Verizon, T-Mobile, SRP, and PG&E. I understand your pension, deferred comp, employer stock concentration, union benefits, and retirement timing decisions.',
 alternates: {
 canonical: 'https://www.advisorjay.com/telecommunications-utilities-wealth-management',
 },
};

const telecomTestimonials = [
 { quote: "I had 30 years at AT&T and couldn&apos;t figure out how my pension, 401(k), and deferred comp all fit together. Jay built a single retirement income timeline and showed me I could retire two years earlier than I thought.", name: "AT&T Network Engineering Manager", location: "Phoenix, AZ", detail: "Retirement orchestration" },
 { quote: "After the T-Mobile/Sprint merger, my RSU grants got complicated. Jay walked me through the vesting schedule changes, the tax hit at each tranche, and when to sell versus hold. I finally have a plan instead of guessing.", name: "T-Mobile Senior Product Manager", location: "Scottsdale, AZ", detail: "RSU strategy" },
 { quote: "My Verizon deferred comp balance had grown to a level I didn&apos;t expect. Jay helped me structure the distribution so I wouldn&apos;t get crushed by taxes in a single year. That coordination saved me tens of thousands.", name: "Verizon Director of Operations", location: "Chandler, AZ", detail: "Deferred comp planning" },
 { quote: "As an SRP employee with a defined benefit pension, I needed someone who actually understood public utility retirement systems. Jay knew the details of the plan before I finished explaining them.", name: "SRP Senior Engineer", location: "Tempe, AZ", detail: "Public utility pension" },
 { quote: "After PG&E came out of bankruptcy, I didn&apos;t know how to think about my deferred comp balance or whether my pension was actually safe. Jay walked me through exactly where the risks were and helped me build a plan that didn&apos;t rely on the company being perfect.", name: "PG&E Operations Manager", location: "Northern California", detail: "Post-bankruptcy planning" },
 { quote: "I was holding way too much Verizon stock across my 401(k) and personal accounts without realizing it. Jay calculated the total concentration and built a two-year diversification plan that kept my tax bill manageable.", name: "Verizon Field Operations Supervisor", location: "Mesa, AZ", detail: "Stock diversification" },
];

export default function TelecommunicationsUtilitiesWealthManagement() {
 return (
 <>
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Farther - Telecommunications & Utilities Wealth Management',
  description: 'Fiduciary financial planning for telecom and utility professionals at AT&T, Verizon, T-Mobile, SRP, and PG&E',
  areaServed: ['Phoenix, Arizona', 'Scottsdale, Arizona', 'Tempe, Arizona'],
  serviceType: ['Wealth Management', 'Retirement Planning', 'Investment Management'],
  url: 'https://www.advisorjay.com/telecommunications-utilities-wealth-management',
  }),
  }}
 />

 {/* Hero Section */}
 <section className="bg-[#333333] text-white py-10 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div>
   <SectionEyebrow text="TELECOMMUNICATIONS & UTILITIES" light />
   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6">
   Pension Elections, Deferred Comp, and Employer Stock at AT&amp;T, Verizon, T-Mobile, SRP, and PG&amp;E.
   </h1>
   <p className="text-lg text-gray-300 mb-8 leading-relaxed">
   AT&amp;T&apos;s Pension Choice election. Verizon&apos;s Savings Plan match in employer stock. T-Mobile RSU grants from the Sprint merger. SRP&apos;s defined-benefit formulas. PG&amp;E&apos;s restructured benefits after the bankruptcy. The work is mapping what you have, sorting through the irrevocable decisions, and walking through them in the order they need to be made.
   </p>
   <div className="flex flex-col sm:flex-row gap-4">
   <Button href="/schedule-consultation" variant="primary">
   Schedule Your Telecom Strategy Call
   </Button>
   </div>
  </div>
  <div className="relative">
   <Image
   src="/Photos/att.webp"
   alt="Telecommunications and Utilities Industry"
   width={1536}
   height={1024}
   className="w-full h-auto rounded-lg"
   />
  </div>
  </div>
  </div>
 </section>

 {/* Personal Note from Jay */}
 <section className="bg-[#F7F4EE] py-16 lg:py-24">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <div className="border-l-4 border-[#1d7682] pl-8 py-8">
   <p className="text-lg leading-relaxed text-[#333333] mb-4">
   AT&amp;T&apos;s Pension Choice election, Verizon&apos;s Savings Plan match in employer stock, T-Mobile RSU grants from the Sprint merger, SRP&apos;s defined-benefit formulas, PG&amp;E&apos;s restructured benefits post-bankruptcy. These come up constantly in the work, and the right answer for one isn&apos;t the right answer for the next.
   </p>
   <p className="text-lg leading-relaxed text-[#333333] mb-4">
   Telecom and utility careers come with something rare: real pensions, real deferred comp, and long tenure. The stability brings its own risks though: employer stock concentration, pension elections that can&apos;t be reversed, and retirement timing that interacts with Social Security, Medicare, and union contract provisions in ways the documents don&apos;t make obvious.
   </p>
   <p className="text-lg leading-relaxed text-[#333333]">
   The work is mapping all of that and walking through the decisions in the order they need to be made.
   </p>
   <p className="mt-6 font-semibold text-[#1d7682]"> - Jay Chang, Farther</p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Benefits Deep Dive */}
 <section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="EMPLOYER BENEFITS" />
  <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-4">
   Your Benefits Are Complex. Your Plan Should Match.
  </h2>
  <p className="text-lg text-[#5b6a71] leading-relaxed mb-12">
   Telecom and utility companies offer some of the most layered retirement benefit structures in the private and public sector. Here's what we see, and how we help.
  </p>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* AT&T */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   AT&amp;T Pension &amp; Surplus Savings Plan
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">The Pension</p>
    <p className="text-base leading-relaxed">
    AT&amp;T&apos;s legacy pension plan covers hundreds of thousands of current and former employees. For management employees, the pension was frozen in many divisions, but union-represented employees (CWA/IBEW) often retain active pension accruals tied to years of service and final average pay. The difference between your pension formula under a union contract versus a management agreement can mean tens of thousands of dollars per year in retirement income. We model both.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Surplus Savings &amp; 401(k)</p>
    <p className="text-base leading-relaxed">
    AT&amp;T&apos;s 401(k) includes a company match that varies by bargaining unit and management tier. Many participants also have access to the Surplus Savings Plan, which allows additional pre-tax deferrals beyond the standard 401(k) limits for eligible employees. Coordinating these two accounts, plus the pension, into a single retirement income strategy is where most AT&amp;T employees leave money on the table.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Our Approach</p>
    <p className="text-base leading-relaxed">
    We calculate your pension benefit under your specific formula (union or management), model the lump-sum vs. annuity decision using current IRS discount rates, and coordinate your 401(k) drawdown and Social Security timing into one integrated plan.
    </p>
   </div>
   </div>
   <div className="mt-6 pt-6 border-t border-[#E8E6E1]">
   <Link href="/att-employee-financial-advisor" className="text-[#1d7682] font-semibold hover:underline inline-flex items-center gap-2 text-sm">
   Full AT&amp;T employee planning guide →
   </Link>
   </div>
   </div>
  </AnimateOnScroll>

  {/* Verizon */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   Verizon Deferred Comp &amp; Stock Concentration
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Deferred Compensation</p>
    <p className="text-base leading-relaxed">
    Verizon&apos;s Management Incentive Plan and Supplemental Executive Retirement Plan (SERP) provide significant deferred compensation opportunities for directors and above. These plans operate under Section 409A, which means distribution elections must be locked in well before the deferral year. If you&apos;ve been deferring for 15+ years, the accumulated balance can represent a substantial portion of your net worth, and it all distributes as ordinary income.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Employer Stock in the 401(k)</p>
    <p className="text-base leading-relaxed">
    Verizon&apos;s 401(k) match has historically been delivered partially in company stock. Over a long career, this creates concentration risk that compounds alongside any shares you hold in personal brokerage accounts. Many Verizon employees we work with discover they&apos;re 30%–45% concentrated in VZ across all accounts without intending to be.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Our Approach</p>
    <p className="text-base leading-relaxed">
    We map your total Verizon stock exposure across every account. We structure deferred comp distributions to spread the tax hit across multiple years. And we build a systematic diversification plan that reduces concentration without creating an unnecessary tax event in any single year.
    </p>
   </div>
   </div>
   </div>
  </AnimateOnScroll>

  {/* T-Mobile */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   T-Mobile RSU Programs &amp; Post-Merger Equity
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">RSU Grants</p>
    <p className="text-base leading-relaxed">
    T-Mobile grants Restricted Stock Units to managers and above on a multi-year vesting schedule. After the Sprint merger, many former Sprint employees received conversion grants that vest on a different timeline than standard T-Mobile RSUs. The result: overlapping vesting dates, different tax basis calculations, and a complex picture of when you&apos;ll owe taxes on what amount.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Post-Merger Complexity</p>
    <p className="text-base leading-relaxed">
    The Sprint/T-Mobile merger created unique equity situations. Former Sprint employees saw their stock converted to T-Mobile shares at a fixed ratio, which reset their cost basis. If you held Sprint stock for years before the merger, your holding period carries over but your basis changed. Understanding which lots have long-term treatment and which don&apos;t is critical for tax-efficient selling.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Our Approach</p>
    <p className="text-base leading-relaxed">
    We track every RSU tranche, pre-merger Sprint conversions and post-merger T-Mobile grants, with their individual vesting dates, cost bases, and tax treatments. We coordinate vesting events with your annual tax bracket to determine whether to sell at vesting or hold for long-term capital gains treatment.
    </p>
   </div>
   </div>
   </div>
  </AnimateOnScroll>

  {/* SRP / Utility */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   SRP &amp; Utility Retirement Systems
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Defined Benefit Pensions</p>
    <p className="text-base leading-relaxed">
    Salt River Project (SRP) and many regional utilities offer traditional defined benefit pension plans, increasingly rare in the private sector. SRP&apos;s retirement system calculates your benefit based on years of service and final average salary, with specific rules around early retirement eligibility, survivor benefits, and cost-of-living adjustments.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">457(b) &amp; 401(a) Plans</p>
    <p className="text-base leading-relaxed">
    Public and quasi-public utilities like SRP often offer 457(b) deferred compensation plans alongside 401(a) employer contribution plans. Unlike a 401(k), a 457(b) has no 10% early withdrawal penalty before age 59½, which creates unique retirement timing opportunities. Coordinating your pension start date, 457(b) withdrawals, and Social Security filing age can meaningfully increase your total lifetime income.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Our Approach</p>
    <p className="text-base leading-relaxed">
    We model your utility pension formula with precision, including early retirement reduction factors and survivor benefit elections. We optimize the sequence of withdrawals from your 457(b), 401(a), and personal savings to minimize taxes and maximize income throughout retirement.
    </p>
   </div>
   </div>
   </div>
  </AnimateOnScroll>

  {/* PG&E */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full lg:col-span-2">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   PG&amp;E Pension, 401(k) Spillover &amp; Retiree Medical
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Two Pension Formulas: Which One You&apos;re In Changes Everything</p>
    <p className="text-base leading-relaxed">
    PG&amp;E employees hired before 2013 are typically in the Final Pay pension: a traditional defined benefit based on your last 30 days of pay (union) or highest 36-month average (management). Employees hired in 2013 or later are in the Cash Balance plan, which accrues annual pay credits of 5%–10% of salary based on your age-plus-service points, plus quarterly interest credits. The key difference: Final Pay offers no lump sum option and keeps you tied to an annuity for life. Cash Balance can be taken as a lump sum and rolled into an IRA. Early retirement reduction factors for both formulas are tied to a points system (age + years of service), and the difference between retiring at 57 versus 59 can mean a permanent reduction of 10–15% in your monthly benefit, a decision that can&apos;t be undone.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">The 401(k) Spillover Election Most Employees Miss</p>
    <p className="text-base leading-relaxed">
    PG&amp;E&apos;s Retirement Savings Plan has a feature almost no one sets up correctly: the after-tax spillover election. If you hit the IRS annual contribution limit early in the year without it, your employer match stops the moment your pre-tax contributions are exhausted. With the spillover in place, contributions automatically continue as after-tax and the company match keeps going, worth up to $1,185 per year in additional employer contributions for Cash Balance participants. Those after-tax contributions are also eligible for rollout to a Roth IRA under the mega backdoor Roth strategy. For IBEW 1245 members, a Roth 401(k) option was added effective January 2026, creating new planning opportunities.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Retiree Medical Savings Account (RMSA)</p>
    <p className="text-base leading-relaxed">
    PG&amp;E funds a Retiree Medical Savings Account on your behalf starting at age 45. The balance grows with interest while you work and is used exclusively to pay PG&amp;E-sponsored retiree medical premiums after you retire. It sounds like a safety net, but it depletes as premiums are drawn, there&apos;s no way to replenish it, and it doesn&apos;t cover out-of-pocket costs or non-PG&amp;E coverage. Understanding how long your RMSA will last, how it interacts with Medicare at 65, and what happens if you retire at 55 with a 10-year bridge gap before Medicare eligibility is one of the most important, and most overlooked, parts of retirement planning for PG&amp;E employees.
    </p>
   </div>
   </div>
   <div className="mt-6 pt-6 border-t border-[#E8E6E1]">
   <Link href="/pge-employee-financial-advisor" className="text-[#1d7682] font-semibold hover:underline inline-flex items-center gap-2 text-sm">
   Full PG&amp;E employee planning guide →
   </Link>
   </div>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* What We Do Section */}
 <section className="bg-[#FAFAF8] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="OUR SERVICES" />
  <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-12">
   What We Do for Telecom &amp; Utility Professionals
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Service 1 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">1</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Pension Optimization</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   We model your pension under every available election: lump sum vs. annuity, single life vs. joint-and-survivor, early retirement vs. full retirement age. We calculate the break-even age under current IRS discount rates and layer in your other income sources so the decision isn&apos;t made in isolation.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Service 2 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">2</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Deferred Comp Coordination</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Whether it&apos;s a 409A nonqualified plan at Verizon or a 457(b) at SRP, we ensure your deferral elections and distribution timing are coordinated with your overall tax picture. We plan distributions across multiple years to avoid pushing you into unnecessarily high tax brackets.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Service 3 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">3</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Employer Stock Diversification</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   We calculate your true concentration across every account: 401(k) match shares, RSU holdings, ESPP purchases, and personal brokerage. Then we build a multi-year diversification strategy that reduces risk systematically without creating a large tax bill in any single year.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Service 4 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">4</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Retirement Timing Strategy</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   When you retire matters as much as how much you&apos;ve saved. We model your optimal retirement date by coordinating pension eligibility, retiree healthcare access, Social Security filing age, and 401(k)/457(b) drawdown sequences. Sometimes six months changes everything.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Service 5 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">5</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Tax-Efficient Income Planning</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Pension income, deferred comp distributions, 401(k) withdrawals, and Social Security are all taxed differently. We sequence your income sources year by year to stay in the lowest possible tax brackets, including Roth conversion opportunities in the gap years between retirement and Required Minimum Distributions.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Service 6 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">6</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Union &amp; Retiree Benefits Review</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Many telecom and utility employees have benefits negotiated through CWA, IBEW, or other unions. Retiree healthcare, supplemental life insurance, and severance provisions vary by contract. We review your specific union agreement to ensure your plan accounts for every benefit you&apos;ve earned.
   </p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* Common Conversations */}
 <section className="bg-[#F7F4EE] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="COMMON QUESTIONS" />
  <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-12">
   Five Conversations We Have With Telecom &amp; Utility Professionals
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Question 1 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   Should I Take My AT&amp;T Pension as a Lump Sum or Monthly Annuity?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   We calculate your break-even age using current IRS discount rates, then model both options alongside your 401(k) balance, Social Security timing, and expected spending in retirement. For many AT&amp;T employees in their late 50s, today&apos;s interest rate environment makes the lump sum worth serious consideration, but only if you have a disciplined plan for investing the proceeds.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Question 2 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   How Do I Manage My Verizon Deferred Comp Distribution to Minimize Taxes?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   A large deferred comp balance distributing in a single year can push you into the top federal bracket. We structure installment distributions across multiple years, coordinate with your pension start date, and time Roth conversions in low-income years to smooth out your overall tax burden. The goal is to avoid spikes: not just minimize taxes in any one year, but across your entire retirement.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Question 3 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   I&apos;m Concentrated in Employer Stock: How Do I Diversify Without a Huge Tax Bill?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Inside your 401(k), rebalancing is tax-free. That&apos;s where we start. For shares held outside the 401(k), we use specific lot identification to sell high-basis shares first, harvest capital losses in down markets, and spread sales across tax years. If you qualify for Net Unrealized Appreciation (NUA) treatment on employer stock in your 401(k), we model whether the long-term capital gains savings justify the strategy.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Question 4 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   When Is the Right Time to Retire From My Utility Job?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Retirement timing at a utility depends on pension formula thresholds, retiree healthcare eligibility, and 457(b) access rules. At SRP, for example, your early retirement reduction factor means each year you work past your earliest eligibility date increases your monthly benefit permanently. We model the crossover point where working longer stops adding meaningful value and you&apos;re better off starting your next chapter.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Question 5 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   My T-Mobile RSUs Are Vesting: Should I Sell or Hold?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   At vesting, RSUs are taxed as ordinary income regardless of what you do with the shares. The real question is what happens next. If you&apos;re already concentrated in TMUS, selling at vesting and rebalancing makes sense. If your income is unusually low this year, holding for long-term capital gains treatment on future appreciation may save taxes. We model this for every vesting event, every year.
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
  <SectionEyebrow text="CLIENT TESTIMONIALS" />
  <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mt-4 mb-8">
   What Clients Say About Working With Jay
  </h2>
  </AnimateOnScroll>
  <TestimonialCarousel testimonials={telecomTestimonials} />
  </div>
 </section>

 {/* Final CTA */}
 <section className="bg-[#333333] text-white py-16 lg:py-24">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <AnimateOnScroll>
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
   Your Pension. Your Deferred Comp. Your Retirement. Let&apos;s Build a Plan That Connects Them All.
  </h2>
  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
   You&apos;ve spent your career keeping critical infrastructure running. Your financial plan deserves the same level of reliability, precision, and care.
  </p>
  <Button href="/schedule-consultation" variant="primary">
   Schedule Your Telecom &amp; Utilities Strategy Call
  </Button>
  </AnimateOnScroll>
  </div>
 </section>
 </>
 );
}
