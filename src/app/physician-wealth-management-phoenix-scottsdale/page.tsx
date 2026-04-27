import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title:
 'Physician Financial Advisor in Phoenix & Scottsdale | Banner Health & Mayo Clinic Professionals | Jay Chang',
 description:
 'Wealth management for professionals at Banner Health and Mayo Clinic in Phoenix and Scottsdale. Tax planning, asset protection, retirement acceleration, and practice financial strategy from a fiduciary advisor.',
 alternates: {
 canonical: 'https://www.advisorjay.com/physician-wealth-management-phoenix-scottsdale',
 },
 robots: 'index, follow',
};

const jsonLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: "I'm a Banner Health employed physician. Can I still do a backdoor Roth?",
 acceptedAnswer: {
  '@type': 'Answer',
  text: "Yes. Even though Banner's 401(k) uses pre-tax contributions, you can make a non-deductible Traditional IRA contribution and convert it to Roth annually. I coordinate this as part of your complete annual tax and retirement plan.",
 },
 },
 {
 '@type': 'Question',
 name: 'I have $350,000 in student loans. Should I pay them off before investing?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'This is one of the most common and highest-stakes questions physicians face. The right answer depends on your loan interest rates, expected investment returns, income path, and whether you qualify for any forgiveness programs. I build a detailed model comparing both paths for your specific situation.',
 },
 },
 {
 '@type': 'Question',
 name: 'Do you work with physicians who own their own practice?',
 acceptedAnswer: {
  '@type': 'Answer',
  text: 'Yes. Practice-owning physicians have additional planning opportunities - including defined benefit pension plans, S-Corp election, equipment and facility depreciation, and business succession planning - that I integrate into your overall wealth strategy.',
 },
 },
 ],
};

export default function PhysicianWealthManagementPhoenixScottsdale() {
 return (
 <>
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 />

 {/* HERO SECTION */}
 <section className="relative w-full bg-[#F7F4EE] px-4 py-10 md:py-20">
  <Image
  src="/Photos/Medical-1.png"
  alt="Medical professionals"
  fill
  className="object-cover opacity-20"
  priority
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EE] via-[#F7F4EE]/90 to-[#F7F4EE]/40" />
  <div className="relative z-10 mx-auto max-w-4xl">
  <AnimateOnScroll>
  <div className="mb-6 text-center">
   <p className="font-sans text-sm font-semibold uppercase tracking-widest text-[#1d7682]">
   Physician Wealth Management
   </p>
  </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
  <h1 className="mb-6 text-center font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight">
   Physicians: You Earn More Than Almost Anyone. Why Are Your Finances So Complicated?
  </h1>
  </AnimateOnScroll>

  <AnimateOnScroll>
  <p className="mb-8 text-center font-sans text-lg text-[#5b6a71] leading-relaxed">
   Banner Health and Mayo Clinic professionals in Phoenix and Scottsdale earn $400,000-$800,000+ but face a
   uniquely complex financial picture - high income, limited time, malpractice liability, late career start to
   savings, and a 401(k) match that barely scratches the surface. Jay Chang is the fiduciary advisor built for
   your situation.
  </p>
  </AnimateOnScroll>

  <AnimateOnScroll>
  <div className="text-center">
   <Button href="/schedule-consultation" variant="primary">Schedule a Physician Financial Strategy Call</Button>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 1: THE PHYSICIAN FINANCIAL PARADOX */}
 <section className="w-full bg-white px-4 py-24 md:py-32">
  <div className="mx-auto max-w-4xl">
  <AnimateOnScroll>
  <h2 className="mb-16 text-center font-serif text-3xl md:text-4xl font-bold text-[#333333]">
   High Income Doesn&apos;t Automatically Mean Financial Security. Here&apos;s Why.
  </h2>
  </AnimateOnScroll>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
  <AnimateOnScroll>
   <div className="rounded-lg bg-[#FAFAF8] p-8 border border-[#E5E2DD]">
   <h3 className="mb-3 font-sans font-semibold text-[#333333]">Late Career Start</h3>
   <p className="font-sans text-[#5b6a71]">
   Don&apos;t earn significantly until early-to-mid 30s with $200K-$400K+ in student debt.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <div className="rounded-lg bg-[#FAFAF8] p-8 border border-[#E5E2DD]">
   <h3 className="mb-3 font-sans font-semibold text-[#333333]">401(k) Ceiling</h3>
   <p className="font-sans text-[#5b6a71]">
   Banner&apos;s 100% match up to 4% = $23K contributions represents &lt;6% of $400K income.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <div className="rounded-lg bg-[#FAFAF8] p-8 border border-[#E5E2DD]">
   <h3 className="mb-3 font-sans font-semibold text-[#333333]">Tax Exposure</h3>
   <p className="font-sans text-[#5b6a71]">
   $700K surgeon faces 37% marginal tax plus Arizona state and self-employment taxes.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <div className="rounded-lg bg-[#FAFAF8] p-8 border border-[#E5E2DD]">
   <h3 className="mb-3 font-sans font-semibold text-[#333333]">Liability</h3>
   <p className="font-sans text-[#5b6a71]">
   Malpractice exposure and asset protection needs threaten years of wealth building.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <div className="rounded-lg bg-[#FAFAF8] p-8 border border-[#E5E2DD]">
   <h3 className="mb-3 font-sans font-semibold text-[#333333]">No Time</h3>
   <p className="font-sans text-[#5b6a71]">
   50-70 hour weeks make it difficult to manage finances proactively and strategically.
   </p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* SECTION 2: BANNER'S 401(K) */}
 <section className="w-full bg-[#FAFAF8] px-4 py-24 md:py-32">
  <div className="mx-auto max-w-4xl">
  <AnimateOnScroll>
  <h2 className="mb-8 font-serif text-3xl md:text-4xl font-bold text-[#333333]">
   Banner&apos;s 4% Match With Immediate Vesting Is Competitive. It&apos;s Also Just the Beginning.
  </h2>
  </AnimateOnScroll>

  <AnimateOnScroll>
  <p className="mb-6 font-sans text-lg text-[#5b6a71] leading-relaxed">
   Banner&apos;s 401(k) offers 100% matching on the first 4% with immediate vesting, managed through Fidelity
   with Roth options and HSA contributions up to $72K individual / $900 family. For a Banner surgeon earning
   $650K, maxing the 401(k) at $72K still leaves most income taxable. The real work happens outside the plan.
  </p>
  </AnimateOnScroll>

  <AnimateOnScroll>
  <div className="rounded-lg bg-white p-8 border-l-4 border-[#1d7682]">
   <h3 className="mb-6 font-sans font-semibold text-[#333333]">Tax-Advantaged Vehicles Beyond 401(k):</h3>
   <ul className="space-y-4 font-sans text-[#5b6a71]">
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Backdoor Roth IRA:</strong> Annual conversions to build tax-free wealth independent of
    employment.
   </span>
   </li>
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Taxable accounts with tax-efficient asset location:</strong> Strategic placement of holdings
    to minimize annual tax drag.
   </span>
   </li>
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Cash balance / defined-benefit plans:</strong> $200K-$300K+ annually for practice owners.
   </span>
   </li>
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Donor-advised funds:</strong> Immediate charitable deductions with multi-year giving flexibility.
   </span>
   </li>
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Deferred compensation:</strong> Where available, spread income and taxes across multiple years.
   </span>
   </li>
   </ul>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 3: ASSET PROTECTION */}
 <section className="w-full bg-white px-4 py-24 md:py-32">
  <div className="mx-auto max-w-4xl">
  <AnimateOnScroll>
  <h2 className="mb-8 font-serif text-3xl md:text-4xl font-bold text-[#333333]">
   One Lawsuit Could Threaten Everything You&apos;ve Built. Arizona Law Offers Protection - If You Plan for It.
  </h2>
  </AnimateOnScroll>

  <AnimateOnScroll>
  <p className="mb-8 font-sans text-lg text-[#5b6a71] leading-relaxed">
   Arizona physicians have access to powerful asset protection strategies that, when structured correctly, shield
   personal wealth from liability exposure. Key protections include:
  </p>
  </AnimateOnScroll>

  <AnimateOnScroll>
  <div className="rounded-lg bg-[#FAFAF8] p-8 mb-8">
   <ul className="space-y-4 font-sans text-[#5b6a71]">
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Retirement account protections:</strong> 401(k)s and IRAs receive federal bankruptcy protection.
   </span>
   </li>
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Arizona homestead exemption:</strong> Up to $250K in home equity protection.
   </span>
   </li>
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Tenancy by entirety:</strong> Married couples gain creditor protection on jointly-held property.
   </span>
   </li>
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Business structure optimization:</strong> PLLC, S-Corp, or PC election shields personal assets
    from practice liability.
   </span>
   </li>
   </ul>
  </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
  <p className="font-sans text-lg text-[#5b6a71] leading-relaxed">
   I work closely with trusted Arizona healthcare attorneys to ensure your asset protection strategy integrates
   seamlessly with your overall wealth plan and stays current with Arizona law changes.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* MID-PAGE CTA */}
 <section className="w-full bg-[#F7F4EE] px-4 py-16 md:py-24">
  <div className="mx-auto max-w-4xl text-center">
  <AnimateOnScroll>
  <p className="mb-4 font-sans text-[#5b6a71]">
   Ready to take control of your finances?
  </p>
  </AnimateOnScroll>
  <AnimateOnScroll>
  <Button href="/schedule-consultation" variant="primary">Schedule Your Strategy Call</Button>
  </AnimateOnScroll>
  </div>
 </section>

 {/* SECTION 4: TAX PLANNING */}
 <section className="w-full bg-white px-4 py-24 md:py-32">
  <div className="mx-auto max-w-4xl">
  <AnimateOnScroll>
  <h2 className="mb-8 font-serif text-3xl md:text-4xl font-bold text-[#333333]">
   At $500,000+ Income, Every Tax Strategy Is Worth Multiples of What It Costs to Implement.
  </h2>
  </AnimateOnScroll>

  <AnimateOnScroll>
  <p className="mb-8 font-sans text-lg text-[#5b6a71] leading-relaxed">
   The difference between &ldquo;filing taxes&rdquo; and &ldquo;strategic tax planning&rdquo; grows exponentially with physician
   income. At your income level, a single overlooked strategy can cost tens of thousands in unnecessary taxes.
  </p>
  </AnimateOnScroll>

  <AnimateOnScroll>
  <div className="rounded-lg bg-[#FAFAF8] p-8 mb-8">
   <h3 className="mb-6 font-sans font-semibold text-[#333333]">Tax Planning Strategies for High-Income Physicians:</h3>
   <ul className="space-y-4 font-sans text-[#5b6a71]">
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Maximize every tax-advantaged vehicle:</strong> 401(k), backdoor Roth, HSA, and more, in
    coordinated sequence.
   </span>
   </li>
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Qualified Business Income (QBI) deduction:</strong> Up to $80K+ annually in deductions for
    self-employed physicians.
   </span>
   </li>
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Charitable strategies:</strong> Donor-advised funds, charitable remainder trusts, and strategic
    gifting.
   </span>
   </li>
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Cost segregation on real estate:</strong> Accelerated depreciation on practice facilities and
    investment property.
   </span>
   </li>
   <li className="flex items-start">
   <span className="mr-3 text-[#1d7682] font-bold">•</span>
   <span>
    <strong>Multi-year tax projections:</strong> Plan ahead to avoid surprises and optimize estimated tax
    payments.
   </span>
   </li>
   </ul>
  </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
  <p className="font-sans text-lg text-[#5b6a71] leading-relaxed">
   I build a comprehensive multi-year tax map for every physician client, coordinating with your CPA to ensure
   every deduction is captured and every strategy is implemented correctly.
  </p>
  </AnimateOnScroll>
  </div>
 </section>

 {/* FAQ SECTION */}
 <section className="w-full bg-[#FAFAF8] px-4 py-24 md:py-32">
  <div className="mx-auto max-w-4xl">
  <AnimateOnScroll>
  <h2 className="mb-16 text-center font-serif text-3xl md:text-4xl font-bold text-[#333333]">
   Frequently Asked Questions
  </h2>
  </AnimateOnScroll>

  <div className="space-y-8">
  <AnimateOnScroll>
   <div className="rounded-lg bg-white p-8 border border-[#E5E2DD]">
   <h3 className="mb-4 font-sans font-semibold text-[#333333]">
   I&apos;m a Banner Health employed physician. Can I still do a backdoor Roth?
   </h3>
   <p className="font-sans text-[#5b6a71] leading-relaxed">
   Yes. Even though Banner&apos;s 401(k) uses pre-tax contributions, you can make a non-deductible Traditional IRA
   contribution and convert it to Roth annually. I coordinate this as part of your complete annual tax and
   retirement plan.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <div className="rounded-lg bg-white p-8 border border-[#E5E2DD]">
   <h3 className="mb-4 font-sans font-semibold text-[#333333]">
   I have $350,000 in student loans. Should I pay them off before investing?
   </h3>
   <p className="font-sans text-[#5b6a71] leading-relaxed">
   This is one of the most common and highest-stakes questions physicians face. The right answer depends on
   your loan interest rates, expected investment returns, income path, and whether you qualify for any
   forgiveness programs. I build a detailed model comparing both paths for your specific situation.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <div className="rounded-lg bg-white p-8 border border-[#E5E2DD]">
   <h3 className="mb-4 font-sans font-semibold text-[#333333]">
   Do you work with physicians who own their own practice?
   </h3>
   <p className="font-sans text-[#5b6a71] leading-relaxed">
   Yes. Practice-owning physicians have additional planning opportunities - including defined benefit pension
   plans, S-Corp election, equipment and facility depreciation, and business succession planning - that Jay
   integrates into your overall wealth strategy.
   </p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* FINAL CTA SECTION */}
 <section className="w-full bg-[#F7F4EE] px-4 py-24 md:py-32">
  <div className="mx-auto max-w-4xl text-center">
  <AnimateOnScroll>
  <h2 className="mb-8 font-serif text-3xl md:text-4xl font-bold text-[#333333]">
   You&apos;ve Dedicated Your Career to Other People&apos;s Health. It&apos;s Time to Take Care of Your Own Wealth.
  </h2>
  </AnimateOnScroll>

  <AnimateOnScroll>
  <p className="mb-8 font-sans text-lg text-[#5b6a71] leading-relaxed">
   Schedule a Physician Wealth Strategy Call - designed for Banner Health and Mayo Clinic professionals in Phoenix
   and Scottsdale.
  </p>
  </AnimateOnScroll>

  <AnimateOnScroll>
  <Button href="/schedule-consultation" variant="primary">Schedule a Physician Wealth Strategy Call</Button>
  </AnimateOnScroll>
  </div>
 </section>

 {/* TRUST BAR */}
 <section className="w-full bg-white px-4 py-12 md:py-16">
  <div className="mx-auto max-w-4xl">
  <AnimateOnScroll>
  <div className="text-center">
   <p className="mb-6 font-sans text-sm font-semibold uppercase tracking-widest text-[#5b6a71]">
   Trusted by Physicians
   </p>
   <p className="font-sans text-[#5b6a71]">
   Jay Chang is a CFP® professional and fiduciary advisor specializing in physician wealth management. Your
   financial strategy comes first.
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>
 </>
 );
}
