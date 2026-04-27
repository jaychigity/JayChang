import type { Metadata } from 'next'
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';
import ArticleByline from '@/components/ArticleByline';

export const metadata: Metadata = {
  title: 'The Physician Financial Roadmap: What to Do in Your First 5 Years as an Attending',
  description: 'A strategic guide for new attending physicians to build wealth during their most powerful accumulation years - covering debt strategy, retirement accounts, and asset protection.',
  alternates: {
    canonical: '/insights/physician-financial-roadmap-first-five-years',
  },
};

export default function PhysicianFinancialRoadmap() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Physician Financial Roadmap: What to Do in Your First 5 Years as an Attending',
    description: 'A strategic guide for new attending physicians to build wealth during their most powerful accumulation years.',
    author: {
      '@type': 'Organization',
      name: 'Farther',
    },
    datePublished: '2026-03-18',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-[#F7F4EE] py-16 px-6 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Physician Financial Roadmap: What to Do in Your First 5 Years as an Attending
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              You&apos;ve completed training. Now comes the most powerful wealth-building window of your career. A strategic roadmap for your first five attending years.
            </p>
            <ArticleByline updatedDate="2026-03-18" variant="light" />
          </div>
        </section>

        {/* Body Content */}
        <section className="w-full bg-white py-16 px-6 md:py-24">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <p className="text-gray-800 mb-6">
              You finish residency or fellowship at age 30 to 35 with a diploma, a job offer at $400,000+ annually, and roughly $200,000 to $400,000 in student loan debt. Your net worth is likely negative or close to zero. Your peers in other professions have spent the last 7 to 10 years accumulating retirement savings, home equity, and investment accounts. You haven&apos;t.
            </p>

            <p className="text-gray-800 mb-6">
              This seems unfair. It isn&apos;t. Physicians have a hidden advantage: compressed earning years. A 35-year-old physician who earns $400,000 annually for 30 years will accumulate vastly more wealth than a 25-year-old who earns $100,000 and starts earlier, provided both invest disciplined amounts. The mathematics of high income over a long timeframe is unforgiving to those who waste the first few years to inertia, lifestyle inflation, or unclear strategy.
            </p>

            <p className="text-gray-800 mb-6">
              The window is real. The first five attending years matter more than many physicians understand. Here is how to use them.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Year 1: Foundation</h2>

            <p className="text-gray-800 mb-6">
              Your first year as an attending is not the time to optimize. It is the time to build a floor beneath you. Three things matter: emergency fund, insurance, and clarity on debt strategy.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Emergency Fund:</strong> Before retirement contributions, before extra debt payments, open a high-yield savings account and deposit three to six months of living expenses. As a physician, your income is stable, so three months is defensible. This is not an investment account. It is insurance against forced debt at a bad time. Do this in month one.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Disability Insurance:</strong> Your income is your largest asset. If you lose the ability to work, your family loses everything. Employer disability coverage is often insufficient - most provide 50% to 60% of gross income, capped at $10,000 to $20,000 monthly. Own a supplemental individual disability policy covering the gap up to 70% of income. Lock this in at age 35. At age 50, the cost doubles. Buy it immediately.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Life Insurance:</strong> If you have dependents or debt, own term life insurance of 10 to 15 times your annual income. For a $400,000 income, that is $4 million to $6 million in coverage. Cost: $40 to $60 monthly for a healthy 35-year-old. This is non-negotiable if you have a family.
            </p>

            <p className="text-gray-800 mb-6">
              <strong>Debt Strategy:</strong> Your student loans are likely $200,000 to $350,000 at federal rates of 5% to 8%. You have three paths: Public Service Loan Forgiveness (PSLF), refinancing to a private lender at 4% to 5%, or aggressive payoff over 5 to 10 years.
            </p>

            <p className="text-gray-800 mb-6">
              If you work for a nonprofit hospital (Banner, Mayo, Cleveland Clinic, many academic centers), you qualify for PSLF. Make 120 qualifying payments under an income-driven repayment plan, and the remaining balance is forgiven tax-free. For many physicians, PSLF is the math winner. A physician earning $400,000 on income-driven repayment pays $2,500 to $3,500 monthly. Over 10 years, that is $300,000 to $420,000 in payments. If the remaining balance is $200,000+, forgiveness wins. Compare this to aggressive payoff: you&apos;d pay interest on the accelerated schedule, plus opportunity cost of cash that could have invested at 7% to 10%.
            </p>

            <p className="text-gray-800 mb-6">
              If you&apos;re in private practice, refinancing may be best. A $300,000 balance at 5.5% refinanced to 4.2% saves roughly $25,000 in interest over 10 years.
            </p>

            <p className="text-gray-800 mb-6">
              Decide your strategy in year one. Do not refinance federal loans if you might ever pursue PSLF - refinancing to private permanently disqualifies you. The decision is largely permanent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Year 2: Retirement Accounts</h2>

            <p className="text-gray-800 mb-6">
              Now that you have a floor, maximize tax-deferred retirement accounts. This is where wealth is built.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>401(k):</strong> Maximum contribution in 2026 is $23,500 ($28,000 if age 50+). Most physician employers offer matching - commonly 3% to 5% of salary. At $400,000 income with a 4% match, your employer contributes $16,000. Never leave this on the table. Contribute at least enough to capture the full match, then contribute enough to reach the maximum or whatever you can afford.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Backdoor Roth IRA:</strong> If your income exceeds Roth IRA eligibility (roughly $155,000 for single filers in 2026), use the backdoor strategy. Contribute $7,000 to a nondeductible traditional IRA, then immediately convert to Roth. The contribution is tax-free if you have no other pre-tax IRA balances. This grows tax-free forever. Do this every year. Year 2 and onward, set a calendar reminder for January 15 each year.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Health Savings Account (HSA):</strong> If your health plan is HSA-eligible, maximize it. The 2026 limit is $4,300 for self-only coverage. This is the most tax-efficient account in the US tax code - deductible contributions, tax-free growth, tax-free withdrawals for medical expenses. In retirement, if you do not withdraw, you can use it like a traditional IRA (with a tax penalty on non-medical expenses, but the growth is yours). Many physicians neglect the HSA. Use it.
            </p>

            <p className="text-gray-800 mb-6">
              By the end of year 2, you should be maxing the 401(k) ($23,500), doing the backdoor Roth ($7,000), and maximizing the HSA ($4,300). Total tax-deferred contributions: $34,800+. At a 37% combined tax rate (federal + state), this saves roughly $12,900 in taxes annually. To put real numbers behind the plan, run a <Link href="/tools/roth-conversion-calculator" className="text-[#1d7682] underline hover:text-[#2a9dab]">Roth conversion projection</Link>, check your <Link href="/tools/retirement-savings-calculator" className="text-[#1d7682] underline hover:text-[#2a9dab]">retirement readiness score</Link>, and lay it all out year-by-year in the <Link href="/tools/cash-flow-planner" className="text-[#1d7682] underline hover:text-[#2a9dab]">cash flow planner</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Year 3: Taxable Investing</h2>

            <p className="text-gray-800 mb-6">
              After maxing retirement accounts, the next dollar goes into taxable brokerage. Year 3 is when you begin this account. Why not earlier? Because tax-deferred space is more valuable due to the compound tax savings. Once retirement accounts are maxed, taxable investing is where most of your wealth will accumulate.
            </p>

            <p className="text-gray-800 mb-6">
              A physician saving $100,000 annually might allocate it as follows: $23,500 to 401(k), $7,000 to backdoor Roth, $4,300 to HSA, leaving $65,200 for taxable accounts. Over 30 years at 7% average returns, this compounds to approximately $9.4 million. The retirement accounts grow to roughly $2.8 million. Together, that is $12.2 million at retirement.
            </p>

            <p className="text-gray-800 mb-6">
              The taxable account is critical. In taxable, use tax-efficient strategies: low-turnover index funds, tax-loss harvesting in down years, and appreciation held for long-term capital gains rates (15% to 20% federal for high earners, vs. 37% for ordinary income).
            </p>

            <p className="text-gray-800 mb-6">
              Consider also: does your employer offer a mega backdoor Roth 401(k) conversion? Some plans allow you to contribute up to the annual limit of $69,000 (2026) to a designated Roth account beyond the standard 401(k) limit. Not all employers allow this, and it requires checking your plan documents. If available, this is exceptionally valuable for high earners who want to increase tax-free growth.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Year 4: Asset Protection</h2>

            <p className="text-gray-800 mb-6">
              By year 4, you have accumulated perhaps $200,000 to $300,000 in net worth across retirement and taxable accounts. You also earn $400,000+ annually and are a visible professional in your community. Now you are a lawsuit target. Asset protection matters.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Retirement Account Exemptions:</strong> In most states, retirement accounts (401(k), IRA, Roth IRA) are protected from creditors in bankruptcy. Arizona protects up to $2.5 million in traditional and Roth IRAs from creditors. Some states like Texas and Florida protect significant home equity. Know your state&apos;s laws. If you&apos;re in an unfavorable state, a qualified plan (401(k), defined benefit plan) offers stronger protection than an IRA in some scenarios.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Umbrella Insurance:</strong> Your homeowners or auto insurance provides $300,000 to $500,000 of liability coverage. That protects against a lawsuit from a single incident, but not adequately if a judgment is large. A $2 million umbrella policy costs $200 to $400 annually. If you cause a car accident and are found liable for $1.5 million, your homeowners covers $500,000, and your umbrella covers the remaining $1 million. Without the umbrella, that excess is a judgment against your personal assets. Buy an umbrella policy.
            </p>

            <p className="text-gray-800 mb-6">
              <strong>Entity Structure:</strong> If you own real estate beyond your primary residence, consider the entity structure for liability isolation. An LLC or trust can separate the liability of a rental property from your primary residence and other assets. This is jurisdiction-specific and should be done with a local attorney. Year 4 is appropriate timing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Year 5: Estate Planning and Long-Term Positioning</h2>

            <p className="text-gray-800 mb-6">
              By year 5, you have a job, insurance, savings, and some assets. You have earned roughly $2 million gross over five years and saved perhaps $300,000 to $500,000 in net worth. Your income will only grow from here. You also have a family or may plan one. Estate planning is now a moral and legal necessity.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Wills and Trusts:</strong> Write a will naming guardians for minor children and designating asset beneficiaries. Consider a living trust if you own real estate in multiple states or if you want to avoid probate. Cost: $1,500 to $3,000 with an attorney. This is not optional.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Beneficiary Designations:</strong> Review beneficiaries on all retirement accounts, life insurance, and any payable-on-death (POD) accounts. These designations supersede your will. If your life insurance names an ex-spouse as beneficiary, your current spouse will receive nothing. Verify these quarterly. Update after major life events.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Practice Ownership Evaluation:</strong> If you are employed, year 5 is when you should assess whether practice ownership makes financial sense. Many physicians assume ownership is necessary for wealth. It is not. An employed physician earning $400,000 who saves $100,000 annually will accumulate $9+ million over 30 years without the operational risk of ownership. A practice owner earning $500,000 but spending $100,000 on staff, facilities, and malpractice insurance, saving the same $100,000, builds similar wealth but with higher volatility and operational burden.
            </p>

            <p className="text-gray-800 mb-4">
              Ownership is valuable if you want control or if the practice structure offers profit-sharing or equity appreciation. But ownership for its own sake, or because "most physicians should own," is not always correct. Evaluate it with financial clarity by year 5.
            </p>

            <p className="text-gray-800 mb-6">
              <strong>Defined Benefit Plans (Cash Balance):</strong> If you own a practice, a cash balance plan or defined benefit plan can shelter $200,000+ annually in pre-tax contributions, far exceeding a 401(k). If ownership is in your plan, establish this in year 5 or 6. The earlier, the longer it compounds.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Math and the Mindset</h2>

            <p className="text-gray-800 mb-6">
              Assume a physician earning $400,000 annually, saving $100,000 per year (25% of gross income) for 30 years. Tax-deferred accounts earn roughly $34,800 annually in contributions. Taxable accounts earn $65,200. All grows at an average of 7% annually. At retirement at age 65:
            </p>

            <ul className="list-disc pl-8 text-gray-800 mb-6">
              <li>Tax-deferred accounts: $2.84 million</li>
              <li>Taxable accounts: $6.56 million</li>
              <li>Total: $9.4 million</li>
            </ul>

            <p className="text-gray-800 mb-6">
              Now compare: a physician who delays serious saving until year 10. They save $100,000 annually for only 20 years at 7% returns, accumulating $3.7 million. The cost of the five-year delay: $5.7 million in foregone compound growth.
            </p>

            <p className="text-gray-800 mb-6">
              This is not theory. This is compound interest. The mathematical difference between starting at year 1 and starting at year 10 is enormous.
            </p>

            <p className="text-gray-800 mb-6">
              The behavioral challenge is not complexity. It is lifestyle inflation. You finish training spending $2,000 monthly on rent and food. Now you earn $400,000 annually, or roughly $22,000 monthly after taxes. The temptation is to spend $15,000 to $18,000 monthly - to "finally live well" after years of training sacrifice. This is rational psychology. It is also the precise mechanism that turns high income into zero wealth.
            </p>

            <p className="text-gray-800 mb-6">
              The decision to save $100,000 annually (25% of gross) requires discipline in year 1, year 2, and year 5. It does not get easier. Most physicians fail not because the math is hard, but because they choose spending over saving in the first few years when habits form.
            </p>

            <p className="text-gray-800 mb-6">
              Your first five attending years are not the time to maximize lifestyle. They are the time to maximize savings rate and investment returns. Do this, and your 30-year earnings power becomes $9+ million in net worth. Fail to do this, and you will earn $12 million gross and retire with $3 million.
            </p>

            <p className="text-gray-800 mb-6">
              Choose carefully. The first five years are where the financial future is decided.
            </p>

            <div className="border-t border-gray-300 pt-8 mt-12">
              <p className="text-sm text-gray-600 mb-4">
                <strong>Disclaimer:</strong> This article is for educational purposes only and does not constitute financial, tax, or legal advice. Consult a qualified financial advisor, tax professional, or attorney before making decisions about debt strategy, retirement contributions, insurance, or practice ownership. Individual circumstances vary significantly. The examples and calculations provided are illustrative and based on assumptions that may not reflect your specific situation.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <AnimateOnScroll>
            <section className="bg-[#333333] text-white rounded-lg p-12 mt-16 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your Physician Financial Plan?</h3>
              <p className="mb-6 text-gray-100">
                Let&apos;s discuss your specific situation and create a strategy tailored to your goals and timeline.
              </p>
              <Button
                href="/schedule-consultation"
                variant="ghost"
                className="w-full sm:w-auto"
              >
                Schedule a Conversation
              </Button>
            </section>
          </AnimateOnScroll>
        </section>
      </article>
    </>
  );
}
