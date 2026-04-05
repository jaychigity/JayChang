import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Moving From California to Arizona? Here is What to Do Before Your Equity Vests',
  description: 'California taxes RSUs earned during California residency even after you move. Learn the steps to establish Arizona domicile and minimize tax liability.',
  openGraph: {
    title: 'Moving From California to Arizona? Here is What to Do Before Your Equity Vests',
    description: 'California taxes RSUs earned during California residency even after you move. Learn the steps to establish Arizona domicile and minimize tax liability.',
    type: 'article',
  },
  alternates: {
    canonical: '/insights/california-to-arizona-before-equity-vests',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'Moving From California to Arizona? Here is What to Do Before Your Equity Vests',
  description: 'California taxes RSUs earned during California residency even after you move. Learn the steps to establish Arizona domicile and minimize tax liability.',
  datePublished: '2026-03-18',
  author: {
    '@type': 'Organization',
    name: 'Farther',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#F7F4EE]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Moving From California to Arizona? Here is What to Do Before Your Equity Vests
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Relocating to Arizona? Don&apos;t assume your California tax obligation ends with your move. The state follows you on your equity compensation.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <AnimateOnScroll>
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                California tax law operates on a simple principle: it taxes income from sources within California regardless of where you live when the income arrives. For tech workers and startup employees holding restricted stock units, this creates a specific problem. If your RSUs were granted while you worked in California, California will claim a portion of that income even after you establish residency in Arizona.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This tax trap catches people off guard. An employee receives a relocation offer to Arizona, moves their life across the desert, updates their driver&apos;s license and voter registration, and assumes they have cleanly severed their California tax obligations. Then their RSUs vest. California sends a tax bill for a portion of the gains. Understanding this timing and taking deliberate steps before your equity vests can save you tens of thousands of dollars.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">California&apos;s Source-Based Income Rule</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                California Revenue and Taxation Code Section 17951 establishes that income from sources within California is taxable by California, period. The state doesn&apos;t care whether you moved to Texas, Arizona, or abroad. If the income is sourced to California, you owe California tax on it.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Equity compensation is allocated to California based on a fraction: the numerator is the number of days you worked in California from grant date to vest date, and the denominator is the total number of days from grant to vest. If you received an RSU grant in January 2023 while living in California, moved to Arizona in June 2024, and the RSUs vest in January 2025, California calculates exactly how many of those 24 months you spent in California. That portion of your gain is California-sourced income.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The complicating factor is that California doesn&apos;t care about grant date, vest date, or sale date for this calculation. It cares about your work period. An RSU granted in 2023 while you lived in California but vesting in 2026 after you have moved will still have a California-allocated portion of the gain.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Establishing Arizona Domicile: The Foundation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                California will examine whether you truly abandoned California residency. The state uses a "closer connection" test. If you retain significant ties to California while claiming to be an Arizona resident, the FTB (California Franchise Tax Board) may argue you are still a California resident and owe tax on all your income, not just California-sourced income.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To establish Arizona domicile clearly, follow these steps before your equity vests:
              </p>
              <ul className="list-disc pl-8 text-lg text-gray-700 leading-relaxed mb-6 space-y-3">
                <li>Obtain an Arizona driver&apos;s license within 30 days of moving. Use your Arizona address.</li>
                <li>Register to vote in Arizona. Cancel California voter registration.</li>
                <li>Establish a primary residence: sign a lease or mortgage in Arizona with your name clearly identified as the resident.</li>
                <li>Update your W-4 with your employer, listing Arizona as your state of residence.</li>
                <li>File an Arizona resident income tax return for the year you move. Do not file a California return for the full year if you have clearly exited the state.</li>
                <li>Update your address on all financial accounts, insurance policies, and subscriptions.</li>
                <li>Close a California bank account if you have one, or at minimum change the address to Arizona.</li>
                <li>Get an Arizona vehicle registration and license plates.</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The intensity of this documentation matters because the FTB specifically targets high earners. If your income exceeds $200,000, the FTB has more motivation to audit your residency claim. The IRS has guidelines that define residency as abode, but California often takes a stricter view. You want contemporaneous evidence that you made a deliberate break.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">The RSU Allocation Calculation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Once California confirms that you are truly an Arizona resident, it will allocate your RSU income based on days worked. Let&apos;s walk through a concrete example.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Suppose you received a four-year RSU grant for 100 shares on January 15, 2023, while working in California. The vesting schedule is 25 shares per year. You move to Arizona on July 1, 2024. The entire grant will vest on January 15, 2027.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The calculation: from January 15, 2023 to January 15, 2027 is exactly 1,461 days (4 years). From January 15, 2023 to July 1, 2024 is 532 days worked in California. California claims 532 / 1,461 = 36.4% of your RSU gain.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If the stock price at vest is $200 per share, your gross gain is $20,000 (100 shares × $200). California taxes 36.4% of that, or $7,280, at the marginal rate of up to 13.3%. You would owe roughly $969 to California on that tranche.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Arizona, meanwhile, taxes the full $20,000 at its flat rate of 2.5%, which is $500. Because of the tax treaty between Arizona and California (indirect), you typically receive a credit for taxes paid to California, so you won&apos;t pay tax twice on the same dollar. But you are still paying California&apos;s higher rate on the California-sourced portion.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">ESPP Enrollment Periods That Span States</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Employee Stock Purchase Plans add another layer of complexity. If you enroll in an ESPP while in California but the offering period or purchase date falls after your move, you need to track the allocation carefully.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Some companies use six-month offering periods. If you enroll in California for an offering that begins in May and ends in November, but you move to Arizona in August, the June through August contributions are California-sourced and the September through November contributions are Arizona-sourced. This requires separate reporting to each state.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The safest approach is to avoid enrolling in an ESPP in the months before your planned move, or to coordinate the enrollment period with your move date if possible. If you are already enrolled when you move, notify your employer&apos;s stock plan administrator of your change in residence and ask them to help allocate the gains correctly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">The FTB Audit Risk for High Earners</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                California has a well-known audit rate for high earners who leave the state. The FTB specifically flags individuals earning over $200,000 who claim to have changed residency. The agency wants to ensure they are not losing tax revenue from remote workers or newly relocated executives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you fall into this category, audit risk is higher, but it is manageable with good documentation. Save receipts and records showing your Arizona address, your Arizona utilities, your Arizona bank statements, and your Arizona employment beginning date. Keep copies of your Arizona driver&apos;s license and voter registration. These documents become your defense if the FTB questions your residency claim.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The safe harbor rule: if your California income for the year you move is $200,000 or less, you are statistically unlikely to face an audit. If it exceeds $200,000, the audit risk increases measurably. This is not a guarantee, merely a practical observation based on FTB audit patterns.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Tax Savings: A Real Example</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Consider an engineer earning $300,000 in base salary and $120,000 in annual RSU vesting, for a total income of $420,000. This person moves from California to Arizona and executes their residency change correctly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In California, this income would be taxed at the marginal state rate of 13.3%, plus federal tax. Arizona charges a flat 2.5% state rate. The difference on $120,000 of RSU income is 10.8 percentage points, or $12,960 per year just in state taxes. Over a four-year vesting schedule with $120,000 vesting each year, the total state tax savings could exceed $51,840.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If the engineer is not deliberate about establishing Arizona residency - if they leave a California apartment and later return to work there, if they maintain a California bank account and do not update their address, if they file as a California part-year resident instead of a clean Arizona resident - California could argue that the engineer never truly left and claim all of the income at California rates. That audit would cost $30,000 or more in legal and accounting fees, plus the taxes owed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Practical Steps to Take Before Vesting</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Here is a checklist of actions to complete before your equity vests:
              </p>
              <ol className="list-decimal pl-8 text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
                <li>Move to Arizona at least 30 days before the vest date if possible.</li>
                <li>Obtain your Arizona driver&apos;s license immediately upon arrival.</li>
                <li>Register to vote in Arizona and cancel California registration.</li>
                <li>Sign a lease or mortgage in Arizona and obtain evidence of residency.</li>
                <li>Notify your employer&apos;s HR department of your move and update your W-4 tax withholding.</li>
                <li>Request that your equity plan administrator notes your change in residency status, especially if you have unvested RSUs or active ESPP enrollments.</li>
                <li>Consult with a CPA or tax attorney who understands California source-based income rules. The cost of a one-hour consultation is worth the savings it generates.</li>
                <li>Plan your equity vesting timing if you have discretion. Some employees can elect accelerated vesting or negotiate vest date timing as part of relocation. If possible, time large vests after your Arizona residency is fully established.</li>
                <li>File your first Arizona income tax return as a full-year resident the following April. Do not file a California return unless you have California-sourced income to report.</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Closing Thoughts</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Moving from California to Arizona can deliver substantial financial benefits, especially for employees with equity compensation. The state tax differential between California and Arizona is one of the largest in the nation. But the benefit only materializes if you execute the move correctly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                California&apos;s source-based income rule means that the timing of your move relative to your equity vesting schedule matters. The allocation formula is mechanical: days worked in California divided by total days from grant to vest. You cannot avoid the California-sourced portion if you worked in California during the grant-to-vest period. But you can minimize your exposure by establishing clear Arizona domicile before your equity vests and by documenting that domicile thoroughly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you are in the planning stages of a move to Arizona, the time to act is now. Get your residency established. Update your documentation. And if you are considering timing your move relative to a large equity vest, a tax professional can model the California versus Arizona outcomes and help you make an informed decision.
              </p>
            </section>

            <section className="bg-[#F7F4EE] rounded-lg p-8 mb-12 mt-16">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Ready to Optimize Your Relocation?</h3>
              <p className="text-gray-700 mb-6">
                Tax planning for a state move requires precision. We help tech professionals and executives move from California to Arizona with a clear tax strategy.
              </p>
              <Button
                href="/schedule-consultation"
                variant="primary"
              >
                Schedule a Conversation
              </Button>
            </section>

            <section className="border-t border-gray-300 pt-8 text-sm text-gray-600">
              <p className="mb-4">
                <strong>Disclaimer:</strong> This article is provided for informational purposes only and does not constitute legal, tax, or financial advice. Tax law is complex and your situation may have unique elements. Always consult with a qualified tax professional, CPA, or attorney licensed in your state before making decisions about residency, state tax obligations, or equity compensation. Farther does not provide legal or tax advice; we provide educational information. The tax implications of relocation vary by individual circumstances, and nothing in this article should be construed as a recommendation for your specific situation. Past tax savings are not indicative of future results.
              </p>
            </section>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
