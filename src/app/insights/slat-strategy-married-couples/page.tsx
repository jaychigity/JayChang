import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'The SLAT Strategy: How Married Couples Can Use the Estate Tax Exemption Before It Drops',
  description: 'Spousal Lifetime Access Trust strategy for married couples to utilize high 2026 estate tax exemption amounts before potential sunset.',
  alternates: {
    canonical: '/insights/slat-strategy-married-couples'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The SLAT Strategy: How Married Couples Can Use the Estate Tax Exemption Before It Drops',
  description: 'SLAT strategy for married couples to utilize high estate tax exemption amounts.',
  author: {
    '@type': 'Person',
    name: 'Jay Chang'
  },
  datePublished: '2026-03-18'
};

export default function SLATStrategyArticle() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-[#F7F4EE] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              The SLAT Strategy
            </h1>
            <p className="text-2xl text-gray-800 mb-4">
              How Married Couples Can Use the Estate Tax Exemption Before It Drops
            </p>
            <p className="text-gray-600 mb-8">
              March 18, 2026 - Estate Planning Strategy
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              The Exemption Sunset Creates a Planning Urgency
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The federal estate tax exemption is currently $13.99 million per person for 2026, allowing a married couple to pass $27.98 million to their heirs free of federal estate tax. This exemption, enacted as part of the Tax Cuts and Jobs Act of 2017, is scheduled to sunset on December 31, 2025. Starting in 2026, the exemption is expected to drop to approximately $7 million per person (adjusted for inflation).
            </p>
            <p className="text-lg text-gray-700 mb-6">
              For a married couple with a combined net worth exceeding $27.98 million, this sunset creates a planning opportunity and a deadline. Between now and the sunset, you can use the higher exemption to move substantial wealth to the next generation or into trusts free of estate tax and gift tax. After the sunset, the same transfers would incur federal estate tax at rates approaching 40 percent or would reduce each spouse&apos;s exemption dollar by dollar.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The Spousal Lifetime Access Trust, or SLAT, is one of the most effective strategies for married couples to utilize the higher exemption while maintaining some family access to the transferred assets.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              How a SLAT Works: The Basic Structure
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              A SLAT is an irrevocable trust created by one spouse (the grantor) for the benefit of the other spouse (the beneficiary). Here is how it works:
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Spouse A creates an irrevocable trust and funds it with assets up to their available estate tax exemption amount (for 2026, as much as $13.99 million). Spouse A names Spouse B as the primary beneficiary of the trust. The trust language allows the trustee to make distributions to Spouse B during Spouse B&apos;s lifetime. The assets are now out of Spouse A&apos;s taxable estate - Spouse A has made a completed gift using their exemption.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Because Spouse B is a beneficiary of the trust, Spouse B has access to the trust&apos;s income and principal through the trustee&apos;s discretion. If the trustee is instructed to distribute funds to Spouse B, Spouse B receives the money. This indirect access - the ability to receive distributions through the trust - is why the strategy is called "Spousal Lifetime Access" Trust.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The assets inside the SLAT grow tax-free. If the SLAT is structured as a grantor trust (which it typically is), the income tax on investment returns inside the trust is paid by Spouse A, not by the trust. This tax payment by Spouse A is not considered a gift to the trust - it is just Spouse A paying taxes on their own trust&apos;s income. The effect is that Spouse A is funding the trust&apos;s growth without using additional exemption.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Why SLATs Are Popular Before the Exemption Sunset
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The SLAT is attractive now for several reasons:
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Reason 1: The Exemption Is High and Expiring.</strong> The $13.99 million per person exemption is the highest in recent history. Using it now is economically rational - the exemption is going away. A couple with $25 million in assets is spending $13.99 million of their exemption (per person) to remove growth from the taxable estate. When the exemption drops to $7 million, moving the same $13.99 million would be impossible without incurring gift tax.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Reason 2: Appreciation After the Gift Is Never Taxed.</strong> If Spouse A funds a SLAT with $10 million of appreciating assets in 2026, and those assets grow to $20 million by 2035, the $10 million gain is completely tax-free. The SLAT only removes the $10 million contribution from Spouse A&apos;s estate - all future growth is outside the taxable estate. For a couple with significant assets expected to appreciate substantially, this can result in tens of millions of dollars of estate tax avoidance.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Reason 3: Spouse B Maintains Access.</strong> Unlike an irrevocable gift to a child or a complete gift away from the family, a SLAT allows Spouse B to access the trust assets. If circumstances change - if one spouse becomes ill, if cash flow is needed, if a family emergency arises - the trustee can distribute from the trust. This is not access by the grantor (Spouse A), but it is access by the beneficiary spouse.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              The Reciprocal Trust Doctrine: The Major Limitation
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The IRS watches for married couples creating identical or near-identical SLATs for each other. If Spouse A creates a SLAT for Spouse B and Spouse B simultaneously creates an identical SLAT for Spouse A, the IRS can invoke the "Reciprocal Trust Doctrine" and collapse both trusts, treating the assets as if they had never left the grantor spouses&apos; estates. This would eliminate the exemption savings entirely.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              To avoid this, the two SLATs must be meaningfully different. This is achieved through:
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Different Trustees.</strong> If Spouse A&apos;s SLAT uses an independent trustee while Spouse B&apos;s SLAT uses a family member as trustee, this is a meaningful difference.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Different Distribution Standards.</strong> If Spouse A&apos;s SLAT uses "sole discretion" (trustee can make any distribution the trustee desires) while Spouse B&apos;s SLAT uses "ascertainable standard" (trustee can distribute for health, education, maintenance, and support), this is a meaningful difference.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Different Timing.</strong> Creating the SLATs in different years (e.g., one in 2026, the other in 2027) demonstrates lack of simultaneity and planning together.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Different Funding Assets.</strong> If one SLAT is funded with real estate and the other with stocks, this is a meaningful difference.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The more differences between the SLATs, the stronger the defense against IRS challenge. A couple planning SLATs should work with their estate planning attorney to ensure the structures are sufficiently different.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Divorce Risk and Trust Permanence
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Because a SLAT is irrevocable, Spouse A cannot change the trust terms after creation. If Spouse A and Spouse B later divorce, the trust terms remain the same - Spouse B is still the beneficiary of the trust created by Spouse A. The trust assets do not revert to Spouse A or become subject to divorce division.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This is both a feature and a risk. The permanence of the SLAT is part of what makes it effective for estate planning - you commit to removing assets from your estate permanently. But it also means you cannot take back the gift if your marriage ends.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Some married couples address this risk by not creating SLATs early in the marriage, or by modifying the distribution terms to limit Spouse B&apos;s access if the marriage ends. Others accept the risk as the cost of estate tax planning.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Allocating GST Exemption: The Dynasty Opportunity
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              In addition to the federal estate tax exemption, there is a separate Generation Skipping Transfer (GST) exemption of $13.99 million per person in 2026. The GST exemption allows you to transfer wealth not just to your children but to your grandchildren and further descendants without GST tax.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              When creating a SLAT, you should explicitly allocate your GST exemption to the trust. This converts the SLAT into a "dynasty trust" - assets can pass from Spouse A to Spouse B to your children to your grandchildren, all within the trust, all with GST exemption applied. The trust can last for generations without incurring transfer taxes.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This requires proper drafting and an election on your tax return (Form 709, the gift tax return). Work with your estate planning attorney to ensure your SLAT is drafted as a GST-exempt dynasty trust if that is your intent.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              What Assets Should Fund a SLAT?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              A SLAT should be funded with appreciating assets, not income-producing assets. The reason is that the goal is to remove future appreciation from your taxable estate. If you fund a SLAT with a dividend-paying stock that you expect to appreciate significantly, the trust receives all future dividends and appreciation.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Good SLAT funding assets include: commercial real estate expected to appreciate, operating business interests, cryptocurrency or other volatile assets expected to appreciate, concentrated stock positions you believe will grow, and growth-oriented investments.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Poor SLAT funding assets include: bonds, Treasury securities, or other low-growth fixed-income investments (these should be held personally or in a revocable trust to preserve flexibility), and assets you think may decline in value.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              The Anti-Clawback Rule and the 2026 Deadline
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Under Treasury Regulation 20.2010-1(c), gifts made in 2026 using the current high exemption will not be "clawed back" if the exemption sunsets and drops to $7 million in 2026 and beyond. This means if you gift $13.99 million to a SLAT in 2026, and the exemption drops to $7 million on January 1, 2027, your $13.99 million gift is already made and protected. The IRS will not recapture the exemption you used.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This anti-clawback rule was included specifically to encourage people to use the higher exemption before the sunset. It signals that gifts made before the sunset are protected and cannot be subject to retroactive estate tax.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This is why the 2026 deadline is so significant. A couple with $25 million in assets should execute SLAT funding in 2026 to lock in the higher exemption and benefit from the anti-clawback rule.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Implementation Timing: Act Before Year-End 2026
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              For a married couple considering SLAT planning, the timeline is simple: decide in spring or early summer 2026, consult with an estate planning attorney by mid-year, draft the trust documents in late summer, fund the SLAT before year-end, and file the appropriate gift tax returns by April 15, 2027.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Delaying until 2027 or later may result in the exemption drop taking effect before you have time to implement the strategy. Consult with your estate planning attorney and financial advisor now about whether SLAT planning is appropriate for your situation.
            </p>
          </AnimateOnScroll>

          <div className="mt-12 p-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice, tax advice, or estate planning advice. SLAT planning, the reciprocal trust doctrine, GST exemption allocation, and the impact of exemption sunset are complex and fact-specific. Consult with a qualified estate planning attorney and tax professional before implementing any SLAT strategy. This article references 2026 estate tax law and exemption amounts which may have changed. Verify current exemption amounts and rules with your professional advisor.
            </p>
          </div>

          <div className="mt-12 text-center">
            <AnimateOnScroll>
              <p className="text-gray-700 mb-6">
                Let&apos;s develop a comprehensive estate plan that optimizes your exemption before 2026 ends.
              </p>
              <Button href="/schedule-consultation" variant="primary">
                Schedule a Conversation
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="bg-[#333333] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white text-lg">
            The exemption is scheduled to drop. Married couples should plan now.
          </p>
          <p className="text-gray-300 mt-2">
            We help families maximize the estate tax exemption before it sunsets.
          </p>
        </div>
      </section>
    </main>
  );
}
