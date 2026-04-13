import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';
import SectionEyebrow from '@/components/SectionEyebrow';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export const metadata: Metadata = {
 title: 'Physician & Executive Wealth Management in Phoenix & Scottsdale | Banner Health, Mayo Clinic & Corporate Leaders | Advisor Jay, Farther',
 description: 'Fiduciary wealth planning for healthcare professionals at Banner Health and Mayo Clinic in Phoenix and Scottsdale, and professionals at Freeport-McMoRan and leading Arizona companies. High-income tax strategy, asset protection, retirement acceleration, and legacy planning.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/physician-executive-wealth-management-phoenix-scottsdale',
 },
};

const physicianExecutiveTestimonials = [
 { quote: "Jay helped me set up a cash balance plan that reduced my effective tax rate by 8 percentage points. Game-changing strategy.", name: "Banner Health Cardiologist", location: "Scottsdale, AZ", detail: "Tax optimization" },
 { quote: "I spent fifteen years focused on medicine and almost no time on my money. Jay built a strategy around my deferred comp, practice income, and real estate goals that finally made everything work together.", name: "Dr. Anish R.", location: "Scottsdale, AZ", detail: "Physician, Client Since 2019" },
 { quote: "Selling a medical practice is nothing like selling a normal business. Jay understood the regulatory nuances, the receivables timeline, and the tax complexity from day one.", name: "Dr. Michelle F.", location: "Phoenix, AZ", detail: "Practice sale, Client Since 2016" },
 { quote: "My FCX equity was 60% of my net worth and I had no diversification plan. Jay built a 10b5-1 schedule and systematic selling framework that brought it to a manageable level over 18 months.", name: "Freeport-McMoRan VP", location: "Phoenix, AZ", detail: "Executive equity planning" },
 { quote: "As a surgeon earning $750K with no will, no trust, and wrong beneficiaries on my 401(k), I felt embarrassed to ask for help. Jay made the process simple and judgment-free.", name: "Banner Health Surgeon", location: "Mesa, AZ", detail: "Estate & retirement planning" },
];

export default function PhysicianExecutiveWealthPage() {
 return (
 <main className="overflow-hidden">
 {/* JSON-LD Schema */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Farther Wealth Management',
  description: 'Fiduciary wealth planning for physicians and executives in Arizona',
  areaServed: [
   {
   '@type': 'City',
   name: 'Phoenix',
   },
   {
   '@type': 'City',
   name: 'Scottsdale',
   },
  ],
  telephone: '(480) 944-0880',
  url: 'https://www.PWM-Farther.com',
  knowsAbout: [
   'Wealth Management',
   'Fiduciary Financial Planning',
   'Tax Strategy',
   'Asset Protection',
   'Executive Compensation',
   'Physician Financial Planning',
  ],
  }),
  }}
 />

 {/* Hero Section */}
 <section className="bg-[#333333] text-white py-20 lg:py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
  {/* Left Column */}
  <div className="order-2 lg:order-1">
   <AnimateOnScroll>
   <SectionEyebrow text="PHYSICIANS &amp; EXECUTIVES" light />
   </AnimateOnScroll>

   <AnimateOnScroll delay={100}>
   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
   You Earn More Than Almost Anyone in Arizona. Why Does Your Financial Life Still Feel Unmanaged?
   </h1>
   </AnimateOnScroll>

   <AnimateOnScroll delay={200}>
   <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
   Healthcare professionals at Banner Health and Mayo Clinic earn $400K to $800K+, yet a typical 401(k) covers less than 4% of retirement. Student debt, malpractice liability, unpredictable schedules, and relentless burnout consume your attention. Freeport-McMoRan professionals carry commodity-linked compensation, concentrated equity positions, and executive benefits tied to copper prices. Neither group chose finance as their expertise. But both groups face financial lives too complex to leave to chance.
   </p>
   </AnimateOnScroll>

   <AnimateOnScroll delay={300}>
   <Button href="/schedule-consultation" variant="primary">
   Schedule a Physician or Executive Wealth Strategy Call
   </Button>
   </AnimateOnScroll>
  </div>

  {/* Right Column - Image */}
  <div className="order-1 lg:order-2">
   <AnimateOnScroll>
   <Image
   src="/Photos/Medical-1.png"
   alt="Healthcare professional at Banner Health or Mayo Clinic"
   width={2624}
   height={1536}
   className="w-full h-auto rounded-lg shadow-lg"
   priority
   />
   </AnimateOnScroll>
  </div>
  </div>
  </div>
 </section>

 {/* Personal Note Section */}
 <section className="bg-[#F7F4EE] py-16 lg:py-24">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <blockquote className="text-xl md:text-2xl leading-relaxed text-[#333333] font-light italic border-l-4 border-[#1d7682] pl-8">
   <p>
   I've worked with Banner and Mayo physicians who felt deeply uncomfortable with financial complexity. One Freeport-McMoRan VP with 60% of his net worth in copper-correlated assets didn't need more information about markets. He needed a plan that made sense given his reality. The failures I see aren't failures of intelligence. They're failures of access to advisors who understand physician economics and executive compensation structures well enough to translate your income into a life that actually works for you.
   </p>
  </blockquote>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Physician Financial Paradox Section */}
 <section className="bg-white py-16 lg:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="THE PARADOX" />
  <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-12 leading-tight">
   Earning More, Burning Out Faster
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
  {[
   { stat: '54%', desc: 'Report stress at 8+/10 levels' },
   { stat: '$65K', desc: 'Average resident earnings' },
   { stat: '$200-400K+', desc: 'Typical resident debt' },
   { stat: '62.8%', desc: 'Burnout rate (peak)' },
   { stat: '36.7%', desc: 'Banner Health burnout rate' },
   { stat: 'AMA Joy in Medicine', desc: 'Recognition for culture of excellence' },
  ].map((item, idx) => (
   <AnimateOnScroll key={idx} delay={0.1 * idx}>
   <div className="border-b-2 border-[#E8E6E1] pb-6">
   <p className="text-3xl md:text-4xl font-bold text-[#1d7682] mb-2">{item.stat}</p>
   <p className="text-[#5b6a71] text-lg">{item.desc}</p>
   </div>
   </AnimateOnScroll>
  ))}
  </div>

  <AnimateOnScroll>
  <p className="text-xl text-[#5b6a71] leading-relaxed max-w-3xl">
   Financial stress doesn't exist in a vacuum. It compounds burnout, delays career decisions, and prevents the very wealth accumulation that could create the flexibility physicians desperately need. Your financial life should simplify your medical life, not add to the burden.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Banner Health Section */}
 <section className="bg-[#FAFAF8] py-16 lg:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="BANNER HEALTH PROFESSIONALS" />
  <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-12 leading-tight">
   The 4% Problem (and Solutions Hidden in Your Compensation Package)
  </h2>
  </AnimateOnScroll>

  <div className="space-y-12">
  {/* 401(k) Card */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">The 401(k): 100% Match on First 4%</h3>
   <ul className="space-y-3 text-[#5b6a71] text-lg">
   <li>✓ 100% of your first 4% contribution, immediately vested</li>
   <li>✓ On a $650K cardiologist salary, that's $26K per year</li>
   <li>✓ Only covers 3.6% of retirement savings you actually need</li>
   <li>✓ The gap between employer match and catch-up limits is where wealth compounds</li>
   </ul>
   </div>
  </AnimateOnScroll>

  {/* HSA Card */}
  <AnimateOnScroll delay={100}>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">The HSA: The Stealth Retirement Account</h3>
   <ul className="space-y-3 text-[#5b6a71] text-lg">
   <li>✓ Banner contributes $450 (individual) or $900 (family)</li>
   <li>✓ Contributions are tax-deductible</li>
   <li>✓ Growth is tax-free</li>
   <li>✓ Distributions for medical expenses are tax-free</li>
   <li>✓ After 65, unused funds become traditional IRA-like (tax on non-medical withdrawals)</li>
   <li>✓ Most physicians never spend all HSA balances - let them grow as a third retirement vehicle</li>
   </ul>
   </div>
  </AnimateOnScroll>

  {/* Late Start Problem */}
  <AnimateOnScroll delay={200}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">The Late Start Problem: 10-Year Gap Math</h3>
   <p className="text-[#5b6a71] text-lg mb-6">
   Medical school (4 years) + residency (3-7 years) = you're often 35+ before serious wealth building starts. Social Security and typical retirement planning assume decades of consistent savings starting at 25. Your timeline is compressed.
   </p>
   <div className="bg-[#F7F4EE] rounded-lg p-6 mb-6">
   <p className="font-semibold text-[#333333] mb-3">Catch-Up Strategies:</p>
   <ul className="space-y-2 text-[#5b6a71] text-lg">
    <li>• Maximize all available vehicles ($23,500 401k + catch-up at 50 = $30,500)</li>
    <li>• Tax-efficient investing in taxable accounts (low-turnover, growth-focused)</li>
    <li>• Cash balance plans for employed physicians (accelerated contributions up to $300K+)</li>
    <li>• Delay gratification early to compound exponentially later</li>
   </ul>
   </div>
   </div>
  </AnimateOnScroll>

  {/* Student Debt */}
  <AnimateOnScroll delay={300}>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Student Debt: Not Always an Emergency</h3>
   <p className="text-[#5b6a71] text-lg mb-6">
   $200K-$400K+ debt is scary. But Banner Health is a 501(c)(3) nonprofit. You may qualify for Public Service Loan Forgiveness (PSLF) after 120 payments.
   </p>
   <div className="bg-white rounded-lg p-6">
   <p className="font-semibold text-[#333333] mb-3">We model both paths:</p>
   <ul className="space-y-2 text-[#5b6a71] text-lg">
    <li>• Aggressive payoff (interest savings vs liquidity)</li>
    <li>• PSLF track (Treasury, tax implications at forgiveness)</li>
    <li>• Refinancing options if circumstances change</li>
    <li>• Income-driven repayment vs standard plans</li>
   </ul>
   </div>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* Asset Protection Section */}
 <section className="bg-white py-16 lg:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="RISK MITIGATION" />
  <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-12 leading-tight">
   Asset Protection for Physicians
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Arizona Retirement Account Exemptions</h3>
   <p className="text-[#5b6a71] text-lg leading-relaxed">
   Arizona protects qualified retirement accounts from creditors and malpractice judgments. Your 401(k), SEP IRA, and SIMPLE IRA have strong statutory protection - one of the most valuable asset protection tools available.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Homestead Exemption & Entity Structures</h3>
   <p className="text-[#5b6a71] text-lg leading-relaxed">
   Arizona homestead exemption ($250K) + PLLC/PC structures for your practice + liability insurance coordination = layered protection. No automatic tenancy by entirety in Arizona, so spousal planning is critical.
   </p>
   </div>
  </AnimateOnScroll>
  </div>

  <AnimateOnScroll>
  <p className="text-lg text-[#5b6a71] bg-[#F7F4EE] rounded-lg p-6 border-l-4 border-[#1d7682]">
   <strong>We work alongside your attorney</strong> to ensure your legal structure, liability insurance, and wealth plan work as an integrated system, not in silos.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Tax Planning Section */}
 <section className="bg-[#FAFAF8] py-16 lg:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="TAX EFFICIENCY" />
  <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-12 leading-tight">
   Tax Planning: $6,000 per 1% Saved
  </h2>
  </AnimateOnScroll>

  <p className="text-xl text-[#5b6a71] mb-12 leading-relaxed max-w-4xl">
  A $600K physician earning save $6,000 for every 1% of income-tax reduction. Even small improvements compound into meaningful wealth over 25 years.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {[
   {
   title: 'Qualified Business Income (QBI) Deduction',
   desc: 'Up to 20% deduction for eligible business income if structured correctly.',
   },
   {
   title: 'Charitable Bunching via Donor-Advised Fund (DAF)',
   desc: 'Bunch multiple years of charitable giving for bigger deductions; distribute over time.',
   },
   {
   title: 'Appreciated Stock Gifting',
   desc: 'Donate appreciated investments directly to charity - avoid capital gains tax and deduct full fair market value.',
   },
   {
   title: 'Roth Conversion Laddering',
   desc: 'Convert traditional IRA funds in low-income years; build tax-free retirement pool.',
   },
   {
   title: 'Real Estate Depreciation',
   desc: 'If you own investment real estate, depreciation can create tax deductions that offset other income.',
   },
   {
   title: 'Deferred Compensation Planning',
   desc: 'For those with side income, manage estimated taxes and self-employment obligations strategically.',
   },
  ].map((item, idx) => (
   <AnimateOnScroll key={idx} delay={0.05 * idx}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="text-xl font-bold text-[#333333] mb-3">{item.title}</h3>
   <p className="text-[#5b6a71] text-lg">{item.desc}</p>
   </div>
   </AnimateOnScroll>
  ))}
  </div>
  </div>
 </section>

 {/* Freeport-McMoRan & Executive Section */}
 <section className="bg-white py-16 lg:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="CORPORATE EXECUTIVES" />
  <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-12 leading-tight">
   Freeport-McMoRan & Arizona Executive Compensation
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-6">The Compensation Reality</h3>
   <ul className="space-y-4 text-[#5b6a71] text-lg">
   <li>
    <span className="font-semibold">CEO:</span> $8.3M total comp (mostly variable pay tied to copper)
   </li>
   <li>
    <span className="font-semibold">SVPs:</span> $4.5M-$7.1M (majority performance-based)
   </li>
   <li>
    <span className="font-semibold">Base salary:</span> Only 20-30% of total; bonuses and equity are 70-80%
   </li>
   <li>
    <span className="font-semibold">Equity:</span> Restricted stock units, performance shares, employee stock purchase plans
   </li>
   </ul>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">The Double Concentration Problem</h3>
   <p className="text-[#5b6a71] text-lg mb-6">
   Your human capital (your job) is already tied to copper prices. Your financial capital (equity grants, bonus structure) is also tied to copper. If prices fall, both income and net worth decline simultaneously.
   </p>
   <p className="text-[#5b6a71] text-lg font-semibold text-[#1d7682]">
   This requires deliberate diversification and insurance strategies.
   </p>
   </div>
  </AnimateOnScroll>
  </div>

  <div className="space-y-8">
  <AnimateOnScroll delay={200}>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">The 401(k): Rated Best in Class (2025)</h3>
   <ul className="space-y-3 text-[#5b6a71] text-lg">
   <li>✓ 98% participation rate (tells you something about the plan design)</li>
   <li>✓ True-up match: FCX matches based on annual earnings</li>
   <li>✓ 100% match up to 5% of compensation</li>
   <li>✓ Immediate vesting on employer contributions</li>
   <li>✓ High annual contribution limits due to plan tier structure</li>
   </ul>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">10b5-1 Trading Plans for Insiders</h3>
   <p className="text-[#5b6a71] text-lg mb-4">
   If you're an executive or have significant equity holdings, a 10b5-1 plan allows you to sell shares on a predetermined schedule - even during blackout periods - without insider trading concerns.
   </p>
   <ul className="space-y-2 text-[#5b6a71] text-lg">
   <li>• Automatic, emotion-free rebalancing</li>
   <li>• Reduces concentration gradually over time</li>
   <li>• Affords downside protection if copper prices fall</li>
   </ul>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* Executive Deferred Compensation Section */}
 <section className="bg-[#FAFAF8] py-16 lg:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="EXECUTIVE BENEFITS" />
  <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-12 leading-tight">
   Executive Deferred Compensation: How Much to Defer?
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">The Tax Savings vs. Credit Risk Trade-Off</h3>
   <p className="text-[#5b6a71] text-lg mb-4">
   Deferring $500K into a non-qualified deferred compensation (NQDC) plan saves roughly $175K in current federal income tax (at 35% bracket). But that $500K remains an unsecured promise from the company.
   </p>
   <p className="text-[#5b6a71] text-lg">
   If the company fails, your deferred amount becomes a general unsecured claim. This is where company financial strength, industry stability, and your personal risk tolerance matter.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Section 409A Distribution Scheduling</h3>
   <p className="text-[#5b6a71] text-lg mb-4">
   Once deferred, your distribution timing is <span className="font-semibold">locked in and irrevocable</span> (with rare exceptions). You must decide now: payment at retirement, at separation, or at a specified future date.
   </p>
   <p className="text-[#5b6a71] text-lg">
   That decision cascades into Social Security planning, Medicare brackets, and tax-free income thresholds.
   </p>
   </div>
  </AnimateOnScroll>
  </div>

  <AnimateOnScroll delay={200} className="mt-12">
  <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="text-2xl font-bold text-[#333333] mb-6">Stacking with Pension, 401(k), and Social Security</h3>
   <p className="text-[#5b6a71] text-lg mb-6">
   Freeport has a strong defined-benefit pension. When you add a 401(k), deferred compensation, and Social Security, the geometry of your retirement income becomes complex. Sequence matters for taxes.
   </p>
   <div className="bg-white rounded-lg p-6">
   <p className="font-semibold text-[#333333] mb-4">We model:</p>
   <ul className="space-y-2 text-[#5b6a71] text-lg">
   <li>• Ordering of income streams to minimize tax brackets</li>
   <li>• Medicare premium calculations (IRMAA thresholds)</li>
   <li>• Roth conversion opportunities when you're between jobs or pre-pension</li>
   <li>• Social Security claiming strategy relative to other income</li>
   <li>• State tax optimization if you plan to relocate in retirement</li>
   </ul>
   </div>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Five Commitments Section */}
 <section className="bg-white py-16 lg:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="OUR PROMISE" />
  <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-12 leading-tight">
   Five Commitments to You
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {[
   {
   num: '1',
   title: 'Never Generic Advice',
   desc: 'Your plan reflects your specific Banner 401(k), your Mayo HSA strategy, your Freeport equity concentration, and your life. Not a template.',
   },
   {
   num: '2',
   title: 'Proactive, Not Reactive',
   desc: 'We reach out annually with tax-planning updates. We track rule changes (PSLF updates, Section 409A guidance) that affect you.',
   },
   {
   num: '3',
   title: 'Coordinate with Your Other Advisors',
   desc: `Your CPA, your malpractice attorney, your HR benefits team, your investment manager - we integrate our advice or we're making your life harder, not easier.`,
   },
   {
   num: '4',
   title: 'A Plan You Can Understand',
   desc: `If you can't explain your financial strategy in plain English, you're vulnerable. We translate the complexity, not hide it.`,
   },
   {
   num: '5',
   title: 'Fiduciary, Always',
   desc: `We act as your fiduciary. Your interests come before ours. If a recommendation doesn't serve you, we'll tell you, even if it costs us a fee.`,
   },
  ].map((item, idx) => (
   <AnimateOnScroll key={idx} delay={0.1 * idx}>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full flex flex-col">
   <div className="flex items-start gap-4 mb-4">
    <div className="bg-[#1d7682] text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
    {item.num}
    </div>
    <h3 className="text-2xl font-bold text-[#333333] pt-1">{item.title}</h3>
   </div>
   <p className="text-[#5b6a71] text-lg leading-relaxed">{item.desc}</p>
   </div>
   </AnimateOnScroll>
  ))}
  </div>
  </div>
 </section>

 {/* Weekly Questions Section */}
 <section className="bg-[#FAFAF8] py-16 lg:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="COMMON QUESTIONS" />
  <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-12 leading-tight">
   Questions We Hear Every Week
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Student Loans: Payoff or PSLF?</h3>
   <p className="text-[#5b6a71] text-lg leading-relaxed">
   The math depends on your specific loan terms, remaining balance, interest rates, and Banner employment stability. We run both scenarios and show you the tax implications of forgiveness.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">I Make $600K. Where Does It Actually Go?</h3>
   <p className="text-[#5b6a71] text-lg leading-relaxed">
   After taxes, health insurance, student debt service, and living expenses, most high-income earners are shocked at how little remains for true wealth building. We create a real-world cash flow model.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">How Do I Protect My Assets If Someone Sues?</h3>
   <p className="text-[#5b6a71] text-lg leading-relaxed">
   Liability insurance + retirement account protection + entity structure + homestead exemption + spousal planning. It's a system, not a single tool. We coordinate with your attorney.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={300}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">My FCX Stock Is 60% of My Net Worth. Am I Doomed?</h3>
   <p className="text-[#5b6a71] text-lg leading-relaxed">
   No. But it requires a deliberate plan: 10b5-1 trading plan, diversification cadence, tax-efficient selling, and potentially hedging strategies. You didn't get wealthy by panic selling. You got wealthy by having a plan.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.4}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">I'm a Surgeon and I Don't Have a Will. How Risky Is That?</h3>
   <p className="text-[#5b6a71] text-lg leading-relaxed">
   Extremely. Arizona intestacy laws will distribute your estate to heirs in a way you probably wouldn't choose. Your spouse might not have immediate access to all assets. Guardianship court battles become a reality. We work with estate attorneys to build a coordinated plan.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.5}>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">I'm Thinking About Leaving Banner/Mayo. What Happens to My Plan?</h3>
   <p className="text-[#5b6a71] text-lg leading-relaxed">
   Your PSLF forgiveness clock resets. Your 401(k) and HSA roll with you. Your malpractice tail coverage becomes your responsibility. We plan for this transition years in advance so you're never surprised.
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
  <TestimonialCarousel testimonials={physicianExecutiveTestimonials} />
  </div>
 </section>

 {/* Final CTA Section */}
 <section className="bg-[#333333] text-white py-20 lg:py-32">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center">
  <AnimateOnScroll>
   <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
   The Financial Complexity of Your Career Didn&apos;t Come With an Instruction Manual. Jay Did.
   </h2>
  </AnimateOnScroll>

  <AnimateOnScroll delay={100}>
   <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-3xl mx-auto">
   Serving professionals at Banner Health, Mayo Clinic, Freeport-McMoRan, and organizations across Arizona.
   </p>
  </AnimateOnScroll>

  <AnimateOnScroll delay={200}>
   <Button href="/schedule-consultation" variant="primary">
   Schedule Your Physician or Executive Wealth Strategy Call
   </Button>
  </AnimateOnScroll>
  </div>
  </div>
 </section>
 </main>
 );
}
