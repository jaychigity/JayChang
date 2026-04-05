import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'How California Taxes Your RSUs Even After You Leave the State',
  description: 'California uses a work-day allocation formula to tax RSU income based on California work period, not where you live when shares vest.',
  openGraph: {
    title: 'How California Taxes Your RSUs Even After You Leave the State',
    description: 'California uses a work-day allocation formula to tax RSU income based on California work period, not where you live when shares vest.',
    type: 'article',
  },
  alternates: {
    canonical: '/insights/california-taxes-rsus-after-you-leave',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'How California Taxes Your RSUs Even After You Leave the State',
  description: 'California uses a work-day allocation formula to tax RSU income based on California work period, not where you live when shares vest.',
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
              How California Taxes Your RSUs Even After You Leave the State
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              California claims income sourced to California work periods. For RSUs, that means the state allocates your gain based on how long you worked in California before vesting.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <AnimateOnScroll>
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                One of the most common surprises for people who leave California is receiving a tax bill for RSU income long after they have moved. The reason is simple: California Revenue and Taxation Code Section 17951 gives the state jurisdiction over income from California sources regardless of where you live when the income is received.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For restricted stock units, California does not care whether you live in Arizona, Texas, or Singapore when the shares vest. The state looks at where you worked during the period from grant to vest and applies a mechanical formula to determine what portion of your RSU gain is "California-sourced." That portion is taxable by California.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Understanding this allocation method is critical for anyone with unvested equity who is considering a move out of state, or for people who have already moved and are receiving unexpected California tax notices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">The California Source Allocation Formula</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                California uses a straightforward allocation formula for equity compensation earned over time. The formula is:
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-mono bg-gray-100 p-4 rounded">
                California-Sourced Portion = (Days Worked in California from Grant to Vest) / (Total Days from Grant to Vest)
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This calculation applies to RSUs, performance stock units, stock options, and other equity awards with a service component. The key dates are the grant date and the vest date. The work location during that period determines the allocation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The formula is purely mechanical. There is no subjective judgment. If you were granted 100 RSUs on January 1, 2023, while working in California, and you moved to Arizona on July 1, 2024, and the shares vested on January 1, 2025, California will count the exact number of days you spent in California (548 days) and divide by the total number of days in the grant-to-vest period (730 days). The result is 75.1% of your RSU gain is California-sourced.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">A Detailed Example: The Math</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Let&apos;s walk through a specific scenario to see how this works in practice.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You are an engineer at a major tech company. Your company grants you 80 RSUs on April 1, 2023, with a four-year vest schedule (20 shares per year, cliff at one year). You work in San Francisco from April 2023 through December 2024. On January 1, 2025, you relocate to Phoenix, Arizona. The RSUs continue to vest on April 1 each year through April 1, 2027.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The grant-to-vest period runs from April 1, 2023 to April 1, 2027 - exactly four years or 1,460 days. The days you spent in California runs from April 1, 2023 to December 31, 2024 - 640 days.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                California-Sourced Portion = 640 / 1,460 = 43.8%
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Now, suppose the stock price at vest in April 2027 is $200 per share. Your total RSU gain is 80 shares × $200 = $16,000. California claims 43.8% of that gain, or $7,008.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                California taxes that $7,008 at your marginal tax rate, which for a software engineer earning $200,000+ is 13.3%. The California state income tax on that RSU gain is $933.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Arizona, where you now live, taxes the full $16,000 gain at its flat rate of 2.5%, which is $400. You file both a California return (for California-sourced income) and an Arizona return (for full income). You receive a credit for taxes paid to California on the Arizona return, so you do not pay twice on the same $7,008. But you still pay California&apos;s higher rate on the California-sourced portion.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your net Arizona tax liability is $400 (2.5% on $16,000). Your California tax liability is $933 (13.3% on $7,008). Your total state tax is $1,333. If you had remained in California, your total state tax would be $2,128 (13.3% on $16,000). The savings from moving is $795 per year per tranche.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Why This Matters: The Timing Trap</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The critical insight is that the allocation is determined at grant and vest dates, not at move date. This creates a trap for employees who do not plan carefully.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you accepted a job in California in 2022 and received an RSU grant in June 2023 while in California, and then moved to Arizona in early 2024, California will still claim a portion of that RSU grant even though you moved away quickly. The entire four-year grant period runs from June 2023 to June 2027. If you only worked in California for the first nine months of that period, California still claims 9 / 48 = 18.75% of your gain.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Conversely, if you moved to California in 2023, received a grant, and then moved away in 2024, California claims only the portion of the grant-to-vest period during which you worked in the state. This is fairer in some ways, but it still results in California taxation of a portion of your equity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The worst-case scenario is receiving an RSU grant near the beginning of your California tenure and then moving away early. If you worked in California for the first two years of a four-year grant, you have given California a 50% claim on the entire future gain, regardless of where you work after that.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Filing Status and Forms</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When you have California-sourced income but live in another state, you file a nonresident or part-year resident return with California. The form is California Form 540NR (Nonresident or Part-Year Resident Income Tax Return).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The process works like this: you file your full-year return with Arizona (your new state of residence) reporting all income earned in Arizona plus your share of any RSU vesting that occurs while you are an Arizona resident. You separately file a California part-year resident return reporting only the California-sourced income - which includes the allocated portion of RSUs granted during your California work period.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Many taxpayers make a mistake at this step. They file a full-year California return even though they moved, thinking they need to report all RSU income to California. This is incorrect and can result in double-taxation or a lengthy audit correction. Your tax software may not handle this correctly if you do not specify your residency status carefully.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The safe approach: work with a CPA who understands multi-state income allocation. The cost of professional preparation is far less than the risk of filing incorrectly and facing an audit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Strategies to Reduce Your California RSU Tax</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While you cannot eliminate California tax on California-sourced RSU income, there are a few strategies to consider if you are in the planning stages or if you have discretion over timing.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Accelerated Vesting Elections</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Some companies allow employees to elect accelerated vesting in connection with a planned move or sale of the company. If you can negotiate an acceleration of vesting before your move date, you shift the vesting to occur while you are still a California resident. This means all of the gain is California-sourced (and thus California-taxed), but California is also your home state, so the tax differential is not as severe. You avoid the situation where you pay California taxes on income while living in Arizona.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is a tax-neutral move in some ways (you still owe California tax, just at the time of vesting rather than after you move), but it can be advantageous if you expect your income to rise after the move and push you into a higher California tax bracket, or if you expect to live in Arizona long enough that paying California tax early is preferable.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Section 83(b) Elections</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you hold restricted stock (not RSUs), you can file a Section 83(b) election to recognize income at grant rather than at vest. This strategy can be useful if you expect the stock to appreciate significantly, because you lock in a lower tax basis. However, it also accelerates your California tax obligation. This election requires careful analysis of your company&apos;s specific situation and is most relevant for private company equity.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Documentation and Tax Planning</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The most important strategy is documentation. Keep a clear record of your move date, your work location history, and your residency changes. When your RSUs vest, provide your tax professional with the grant date, vest schedule, and the dates you worked in California. This allows them to calculate the exact allocation and ensure you pay the correct amount of tax - no more, no less.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Some taxpayers overpay California tax because they report all RSU income to California even after they have moved. Others underpay because they report no California-sourced RSU income and face audit. The correct approach is the middle ground: report the allocated portion to California and the full amount to your new state, with appropriate credits.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">The Bigger Tax Picture</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For a software engineer earning $300,000 in base salary and $120,000 in annual RSU vesting, the California RSU allocation issue can result in $10,000 to $15,000 in additional state taxes per year. Over a four-year vesting cycle with new grants, the cumulative impact can exceed $50,000.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is a significant amount of money, and it is worth understanding in advance if you are contemplating a move out of California. Some people make the decision to move based on weather, lifestyle, or family reasons, and the tax savings are a secondary benefit. Others calculate the tax impact as a primary factor in the relocation decision. Either way, understanding the mechanics of California source allocation allows you to make an informed choice and plan accordingly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Common Mistakes to Avoid</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Based on years of working with people in this situation, here are the most frequent errors:
              </p>
              <ul className="list-disc pl-8 text-lg text-gray-700 leading-relaxed mb-6 space-y-3">
                <li>Reporting all RSU income to your new state and ignoring California - this invites FTB audit and penalties.</li>
                <li>Reporting all RSU income to California even after moving - this may result in overpayment and creates inconsistency if challenged.</li>
                <li>Failing to track the exact dates of residency change - ambiguity makes it harder to defend your allocation if audited.</li>
                <li>Using tax software that does not allow part-year residency allocation - many consumer tax packages are designed for single-state returns.</li>
                <li>Not requesting your grant details and vest schedule from your company - you need these exact dates to calculate the allocation correctly.</li>
                <li>Moving right before a large vest without updating your withholding - you may face a surprise tax bill if California income is not withheld during the vesting period.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Bottom Line</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                California&apos;s source allocation rule for RSUs is not a surprise or a loophole - it is explicit law stated in Section 17951 of the Revenue and Taxation Code. The allocation formula is mechanical and predictable. If you worked in California for 50% of your grant-to-vest period, California will claim 50% of your RSU gain. There is no ambiguity once you have the dates.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The key to managing this tax exposure is planning. If you are considering a move out of California, understand your RSU grant schedule and calculate the California-sourced portion before you relocate. If you have already moved and are receiving a California tax notice, verify the allocation calculation to ensure it is correct. And in either case, work with a tax professional who understands source allocation rules and can file your multi-state returns correctly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The tax savings from relocating out of California are real and can be substantial. But they do not come automatically. They require deliberate planning and careful execution.
              </p>
            </section>

            <section className="bg-[#F7F4EE] rounded-lg p-8 mb-12 mt-16">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Do You Have Unvested RSUs and a Relocation Plan?</h3>
              <p className="text-gray-700 mb-6">
                We help tech professionals calculate the tax impact of leaving California and file multi-state returns correctly. Our team understands California source allocation and can guide your relocation strategy.
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
                <strong>Disclaimer:</strong> This article is provided for informational purposes only and does not constitute legal, tax, or financial advice. The California source allocation rule for RSUs is complex and may vary based on your specific circumstances, your company&apos;s equity plan design, and the current state of tax law. Always consult with a qualified CPA or tax attorney licensed in California and your state of residence before relying on this information or making decisions about equity compensation or relocation. Farther does not provide tax advice and this article is for educational information only. The tax consequences of relocation and RSU vesting are unique to each individual and should not be treated as a recommendation for your specific situation.
              </p>
            </section>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
