import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'PSLF at Banner Health: Are You Qualifying for Loan Forgiveness Without Knowing It?',
  description: 'Understand how Public Service Loan Forgiveness works for Banner Health physicians and whether it makes financial sense compared to aggressive repayment.',
  alternates: {
    canonical: '/insights/pslf-banner-health-qualifying',
  },
};

export default function PSLFBannerHealth() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'PSLF at Banner Health: Are You Qualifying for Loan Forgiveness Without Knowing It?',
    description: 'Understand how Public Service Loan Forgiveness works for Banner Health physicians and whether it makes financial sense.',
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
              PSLF at Banner Health: Are You Qualifying for Loan Forgiveness Without Knowing It?
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Banner Health is a 501(c)(3) nonprofit. If you work there, you may be earning loan forgiveness with every payment, but only if you file correctly.
            </p>
            <p className="text-gray-600">Published March 18, 2026</p>
          </div>
        </section>

        {/* Body Content */}
        <section className="w-full bg-white py-16 px-6 md:py-24">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <p className="text-gray-800 mb-6">
              You finished fellowship and joined Banner Health as an attending. Your student loans total $350,000 at a weighted average interest rate of 5.5%. Your annual salary is $420,000. Every month you make a $2,500 student loan payment from your paycheck. You put your head down and work.
            </p>

            <p className="text-gray-800 mb-6">
              What you may not realize: each of those payments is edging you toward complete forgiveness of your remaining balance, tax-free, without ever paying it off manually. This is the power of the Public Service Loan Forgiveness program, and you may be qualifying without tracking it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What PSLF Actually Is</h2>

            <p className="text-gray-800 mb-6">
              Public Service Loan Forgiveness (PSLF) is a federal program created in 2007 that forgives the remaining balance on federal student loans after 120 qualifying monthly payments (10 years) while working full-time for a qualifying employer. The forgiveness is tax-free under current law through 2025; the tax treatment in 2026 and beyond should be verified with your tax advisor.
            </p>

            <p className="text-gray-800 mb-6">
              The key word is "qualifying." Not all employers qualify. Not all loan types qualify. Not all repayment plans qualify. Understanding the fine print is the difference between saving $200,000 in loan balance and accidentally disqualifying yourself permanently.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Does Banner Health Qualify?</h2>

            <p className="text-gray-800 mb-6">
              Yes. Banner Health is organized as a 501(c)(3) nonprofit corporation and is listed on the Federal Student Aid PSLF employer database. If you work for Banner Health as a full-time employee, your employment qualifies for PSLF purposes. The caveat: you must work full-time (typically defined as 30+ hours per week by the Department of Education, though most employers define it as 35+ or 40+ hours).
            </p>

            <p className="text-gray-800 mb-6">
              If you work per diem, part-time, or as an independent contractor, the employment does not count. Verify your employment classification. Most attending physicians at Banner work full-time and qualify, but if you have a split arrangement across multiple employers, confirm the hours and structure with Human Resources.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Four Requirements for PSLF</h2>

            <p className="text-gray-800 mb-6">
              For loan forgiveness to actually occur, all four of these conditions must be met:
            </p>

            <p className="text-gray-800 mb-4">
              <strong>1. Qualifying Loan Type:</strong> You must have Direct Loans issued by the federal government. If you have FFEL loans (Family Federal Education Loans) issued by private lenders, they are not eligible for PSLF. You must consolidate FFEL loans into Direct Consolidation Loans first. If you have Stafford or Perkins loans issued before 2010, check with studentaid.gov - some are eligible, some are not. The vast majority of loans issued after 2010 are Direct Loans and qualify. Verify yours on studentaid.gov using your FSA ID.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>2. Income-Driven Repayment Plan:</strong> You must be enrolled in an income-driven repayment plan (IDR). The current plans are SAVE (SAVE Plan), PAYE (Pay As You Earn), IBR (Income-Based Repayment), or ICR (Income-Contingent Repayment). The most common for high earners is SAVE. Under SAVE, your monthly payment is calculated as 10% of your discretionary income (adjusted gross income minus 225% of the federal poverty line). A physician earning $420,000 with $3,000 monthly living expenses would have discretionary income of roughly $31,000 monthly, resulting in a payment of $3,100 monthly. This is higher than a standard 10-year repayment, but it enables PSLF qualification. Standard 10-year repayment plans do not qualify for PSLF - you must use an IDR plan.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>3. Full-Time Employment at Qualifying Employer:</strong> As discussed, Banner Health qualifies, and you must work full-time. Full-time is at least 30 hours per week according to federal rules, though Banner likely defines it as 40. You must work at a qualifying employer. This can be nonprofit employers (501(c)(3), government, some others), but not for-profit corporations. If you move to Banner Health in private practice, you no longer qualify.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>4. 120 Qualifying Payments:</strong> You must make 120 qualifying payments. These do not need to be consecutive. Payments must be made while enrolled in an IDR plan, while employed at a qualifying employer, on Direct Loans. If you are unsure whether a payment counts, you can submit an Employment Certification Form (ECF) to the Department of Education and receive a statement of how many payments have qualified.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Critical Mistake: Refinancing</h2>

            <p className="text-gray-800 mb-6">
              The most common and irreversible mistake is refinancing federal loans to a private lender. Private student loan companies (SoFi, LendingClub, etc.) offer interest rates of 4% to 6%, which is attractive if you are considering repayment over 5 to 10 years. However, once you refinance to a private lender, the loan is no longer a Direct Loan and no longer eligible for PSLF or any federal forgiveness program. This is permanent. You cannot "unrefinance" back to federal status.
            </p>

            <p className="text-gray-800 mb-6">
              Consider the math: a physician with $350,000 in loans at 5.5% (federal) has monthly payments of $2,500 under a 20-year IDR plan. If they refinance to 4.2% (private), the payment is roughly $2,100 - a $400 monthly savings. Over 20 years, this appears attractive. But if PSLF applies, after 10 years of payments totaling $300,000, a remaining balance of $200,000+ is forgiven. Refinancing erases this entirely. The choice is not "$400 per month savings." The choice is "$400 per month savings now, but $200,000 higher lifetime cost due to no forgiveness."
            </p>

            <p className="text-gray-800 mb-6">
              If you work at Banner and have federal loans, do not refinance. Ever. The PSLF benefit is too valuable.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Numbers That Matter</h2>

            <p className="text-gray-800 mb-6">
              Let&apos;s model a realistic scenario:
            </p>

            <ul className="list-disc pl-8 text-gray-800 mb-6">
              <li>Current loan balance: $350,000</li>
              <li>Interest rate (federal): 5.5%</li>
              <li>Salary: $420,000 annual</li>
              <li>Repayment plan: SAVE (10% of discretionary income)</li>
              <li>Discretionary income: ~$31,000/month</li>
              <li>Monthly SAVE payment: ~$3,100</li>
              <li>Employment: Full-time at Banner Health</li>
            </ul>

            <p className="text-gray-800 mb-6">
              Over 10 years (120 payments), the physician pays $372,000 in total payments ($3,100 per month). The loan balance at the 10-year mark, if payments were made continuously on SAVE, would be approximately $360,000 (depending on interest accrual and annual income recertification). The remaining $360,000 is forgiven tax-free, assuming the tax treatment remains favorable.
            </p>

            <p className="text-gray-800 mb-6">
              Compare to aggressive payoff:
            </p>

            <ul className="list-disc pl-8 text-gray-800 mb-6">
              <li>Target: pay off $350,000 in 7 years</li>
              <li>Annual payment needed: ~$50,000</li>
              <li>Monthly payment: ~$4,167</li>
              <li>Total paid: $350,000 + interest (~$80,000)</li>
              <li>Total out-of-pocket: ~$430,000</li>
            </ul>

            <p className="text-gray-800 mb-6">
              Under PSLF, you pay $372,000 and the remaining balance is forgiven. Under aggressive payoff, you pay $430,000 and owe nothing. The PSLF path saves $58,000. This is not including opportunity cost - the $4,167 monthly under aggressive payoff could have been invested at 7% returns. Over 10 years, that $4,167 monthly invested would grow to roughly $630,000. The true opportunity cost of aggressive payoff is enormous.
            </p>

            <p className="text-gray-800 mb-6">
              The math favors PSLF for most physicians earning above $250,000 with loan balances above $250,000.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Verify and Track</h2>

            <p className="text-gray-800 mb-6">
              Do not assume PSLF is happening. Verify it explicitly:
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Step 1:</strong> Log into studentaid.gov using your FSA ID. Confirm your loan servicer.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Step 2:</strong> Confirm your loans are Direct Loans. FFEL loans must be consolidated.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Step 3:</strong> Confirm you are enrolled in an income-driven repayment plan (SAVE, PAYE, IBR, or ICR). Enrollment is not automatic - you must select it.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Step 4:</strong> Submit an Employment Certification Form (ECF) to your loan servicer. This documents your employment at Banner Health and allows the servicer to count qualifying payments. The Department of Education provides a specific form for this. Submit it within the first year of employment, and then annually thereafter. This is critical - without an ECF on file, your employer information may not be recorded, and you could lose PSLF eligibility retroactively.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Step 5:</strong> After 120 qualifying payments, request forgiveness. The Department of Education will review your case and issue a determination.
            </p>

            <p className="text-gray-800 mb-6">
              Do not rely on your loan servicer to track this perfectly. Loan servicers make errors. Maintain your own records: screenshots of payment confirmation, copies of ECF submissions, and documentation of employment. The Department of Education has made PSLF claims easier in recent years, but each case depends on accurate documentation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Income Recertification and Plan Changes</h2>

            <p className="text-gray-800 mb-6">
              If you are on SAVE or another IDR plan, your income must be recertified annually. If your income changes significantly, your payment changes. This is automatic on SAVE - the plan recalculates using tax filing information. However, you can optionally report income changes (e.g., if you leave full-time work mid-year).
            </p>

            <p className="text-gray-800 mb-6">
              A common scenario: a physician earns $420,000 for 10 years under PSLF, then retires or leaves medicine at year 11. The remaining balance is forgiven - you do not need to continue PSLF for 120 payments from hire date; you need 120 qualifying payments total, and you can stop once you reach 120.
            </p>

            <p className="text-gray-800 mb-6">
              Another scenario: a physician transfers from Banner Health to a private practice at year 8. From year 8 forward, they no longer work at a qualifying employer and payments do not count toward PSLF. The previous 96 payments (8 years) do count. If they return to a qualifying employer, the count resumes. Payments during the private practice period do not reset the clock - they simply do not count.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Behavioral Reality</h2>

            <p className="text-gray-800 mb-6">
              Many physicians at Banner Health are not pursuing PSLF aggressively because the benefit feels abstract and distant. "Ten years is a long time. I might leave. I might want to be in private practice." This thinking is understandable but often wrong. Most physicians stay in one place longer than they expect. The organization and income are stable. PSLF is reliably available. The financial benefit is massive.
            </p>

            <p className="text-gray-800 mb-6">
              The opposite mistake: pursuing aggressive payoff because it "feels like winning" to pay off debt quickly. Psychologically, debt payoff is satisfying. Financially, for Banner physicians with large loan balances, it is suboptimal. Paying extra toward loans is like earning a guaranteed 5.5% return (the loan interest rate). Investing the same money at 7% returns is better. PSLF offers an even better return - forgiveness of 50%+ of the balance, which is infinitely higher than 5.5%.
            </p>

            <p className="text-gray-800 mb-6">
              If you work at Banner Health with federal student loans and a loan balance above $250,000, PSLF is almost certainly your best path. Do not refinance. Do not pursue aggressive payoff. Enroll in an income-driven plan, submit your ECF, and make payments for 10 years. The remaining balance will be forgiven.
            </p>

            <p className="text-gray-800 mb-6">
              This is not theoretical. You are likely already qualifying. The question is whether you know it, file the paperwork correctly, and stick with the path for 10 years.
            </p>

            <div className="border-t border-gray-300 pt-8 mt-12">
              <p className="text-sm text-gray-600 mb-4">
                <strong>Disclaimer:</strong> This article is for educational purposes only and does not constitute financial, tax, or legal advice. PSLF rules are complex and subject to change. The tax treatment of forgiven debt may change in 2026 and beyond. Consult the Department of Education&apos;s official PSLF guidance at studentaid.gov and speak with a qualified tax professional or financial advisor before making decisions about loan repayment strategy. Individual circumstances vary significantly.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <AnimateOnScroll>
            <section className="bg-[#333333] text-white rounded-lg p-12 mt-16 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Maximize Your PSLF Benefits</h3>
              <p className="mb-6 text-gray-100">
                Understanding whether PSLF is right for your situation requires careful financial analysis. Let&apos;s review your loans and employment to ensure you&apos;re capturing maximum benefit.
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
