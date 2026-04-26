import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';
import ArticleByline from '@/components/ArticleByline';

export const metadata: Metadata = {
  title: 'The Federal Estate Tax Exemption Is Set to Drop by Half. Here is What to Do Before It Does.',
  description: 'The estate tax exemption is set to sunset from $13.99M to $7M on January 1, 2026. Understand your options and act now if your estate is between $7M and $14M.',
  openGraph: {
    title: 'The Federal Estate Tax Exemption Is Set to Drop by Half. Here is What to Do Before It Does.',
    description: 'The estate tax exemption is set to sunset from $13.99M to $7M on January 1, 2026. Understand your options and act now if your estate is between $7M and $14M.',
    type: 'article',
  },
  alternates: {
    canonical: '/insights/estate-tax-exemption-sunset-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'The Federal Estate Tax Exemption Is Set to Drop by Half. Here is What to Do Before It Does.',
  description: 'The estate tax exemption is set to sunset from $13.99M to $7M on January 1, 2026. Understand your options and act now if your estate is between $7M and $14M.',
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
              The Federal Estate Tax Exemption Is Set to Drop by Half. Here is What to Do Before It Does.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The Tax Cuts and Jobs Act doubled the estate tax exemption. That doubled amount expires December 31, 2025. Families with estates between $7M and $14M need a plan before the clock runs out.
            </p>
            <div className="mt-6">
              <ArticleByline updatedDate="2026-03-18" variant="light" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <AnimateOnScroll>
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In 2017, Congress passed the Tax Cuts and Jobs Act, which doubled the federal estate tax exemption from approximately $5.5 million per person to $11 million. That exemption was then inflation-adjusted each year, reaching $13.99 million per person in 2025 (and $27.98 million per married couple).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Unless Congress acts to extend it, this higher exemption expires on December 31, 2025. On January 1, 2026, the exemption reverts to approximately $7 million per person, adjusted for inflation from the original 2009 baseline.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This sunset is not speculative. It is written into the tax code. Congress would need to pass new legislation to prevent it. At present, no such legislation has been enacted or appears likely to pass before year-end 2025.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For families whose estates fall between $7 million and $14 million per person, this creates a unique planning opportunity. The time to act is now. The advantage available in 2025 will be gone in 2026, and planning after the deadline is far less effective.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Understanding the Estate Tax and the Exemption</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The federal estate tax is a 40% tax that applies to estates exceeding the exemption threshold. If you die with an estate of $20 million and the exemption is $7 million, the taxable estate is $13 million. The estate tax is $5.2 million - roughly 26% of the gross estate.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For most Americans, the estate tax is not a concern. The median estate is well below the exemption, and fewer than 0.1% of estates pay federal estate tax in any given year. But for successful entrepreneurs, real estate investors, technology executives, and other high-net-worth individuals, the exemption is critical.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The exemption works like a single-use coupon. You can transfer up to the exemption amount to heirs or trusts during your lifetime or at death free of federal estate tax. Once you use the exemption, it is gone. Any amount above the exemption is taxed at 40%.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For married couples, each spouse has a separate exemption. A married couple can use up to $27.98 million in 2025 ($13.99M × 2). After 2025, that drops to approximately $14 million per couple ($7M × 2).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Who Is Affected: The $7M to $14M Zone</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If your estate is worth less than $7 million, the sunset is not an immediate concern. You have no estate tax exposure under either the old or new exemption.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If your estate is worth more than $14 million (per person), you already expect to owe estate tax regardless of the exemption level. Planning is important, but you are not facing a cliff.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The families facing the real problem are those with estates between $7 million and $14 million. For these estates, the exemption drop is a material issue. Someone with a $10 million estate faces zero estate tax in 2025 (the entire estate is below the $13.99M exemption) but faces potential estate tax in 2026 if proper planning is not done.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                How many families fall into this zone? Thousands. Tech executives in their 50s and 60s with liquid net worth and equity holdings. Real estate investors and developers with commercial property worth $10M to $20M. Business owners who have built successful companies. Physicians and medical practice owners. Anyone in this zone needs to evaluate their options.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">The Anti-Clawback Rule: Your Shield</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Before we discuss specific strategies, the most important fact: the IRS has confirmed an "anti-clawback" rule. Treasury Regulation 20.2010-1(c) states that gifts made during the period of the higher exemption will not be clawed back if the exemption drops.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This means you can make a large gift in 2025 using the $13.99M exemption, and if you die in 2027 when the exemption has dropped to $7M, the gift you made in 2025 is not pulled back into your taxable estate for estate tax purposes. The exemption you used in 2025 stays used, but the gift is not re-taxed.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This anti-clawback protection is the foundation that makes 2025 planning effective. Without it, making large gifts in 2025 would be pointless if you could not ensure you would live past 2025. With it, even if you died shortly after making the gift, the tax benefit is preserved.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Strategy 1: Spousal Lifetime Access Trust (SLAT)</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A Spousal Lifetime Access Trust is an irrevocable trust designed to hold assets you gift during your lifetime. The trust is structured so that your spouse (the "beneficiary") can access funds during the life of the trust if needed. At your death, the trust continues for the benefit of your children or other beneficiaries, outside your taxable estate.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The SLAT works like this: you gift $5 million to a trust for the benefit of your spouse and children. The gift uses $5 million of your $13.99M exemption. Your spouse, if needed, can access the trust funds during your lifetime. At your death, the trust is valued at whatever the assets have grown to - potentially much more than the original $5 million. That growth escapes estate taxation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The advantage is that you are using the high exemption to fund a trust, which then grows tax-free outside your estate. If the assets in the SLAT appreciate - which is likely if you fund it with growth stocks or real estate - the appreciation avoids estate tax entirely.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The downside is that once you make the gift to the SLAT, it is irrevocable. You have given up control of that money. If you need it, your spouse may be able to access it, but you cannot. This is why SLATs work best for people with sufficient liquid net worth that they are comfortable giving away $3M to $10M and knowing it is committed to the next generation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Strategy 2: Irrevocable Life Insurance Trust (ILIT)</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                An Irrevocable Life Insurance Trust is a trust that owns a life insurance policy on your life. The policy proceeds, when paid at your death, are owned by the trust and thus outside your taxable estate.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The strategy works by funding an ILIT with a gift (using your exemption), the ILIT purchases a life insurance policy on your life, you pay annual premiums (also via gifts to the ILIT using your exemption), and at your death, the ILIT receives the insurance proceeds outside your estate.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is especially valuable if you have significant wealth and want to ensure that your heirs have liquidity to pay estate taxes or equalize gifts among children. If you fund an ILIT with a $2M gift in 2025, purchase a $10M life insurance policy, and die in 2026, your estate receives $10M of life insurance proceeds outside the taxable estate. This provides liquidity to pay estate taxes without forcing asset sales.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The downside is that you must maintain the ILIT for the life of the policy, and you cannot recover the premium payments if your circumstances change. But the strategy is straightforward and has been used for decades with success.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Strategy 3: Completed Gifts to Irrevocable Trusts</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A completed gift is simply making a gift to an irrevocable trust and permanently removing the gifted assets from your control. The gift reduces your taxable estate and uses your exemption.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For example, if you have $8 million in Apple stock and you gift it to an irrevocable trust for your children, you have made a completed gift of $8 million. The gift uses $8 million of your $13.99M exemption. The future appreciation of that Apple stock is outside your estate and escapes estate taxation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The advantage is simplicity. You identify assets you want to pass to your heirs, fund a trust, and the deed is done. The disadvantage is that you have given up the assets. If you later need the money, you cannot recover it.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For people with substantial wealth and high conviction that they do not need all their assets to fund their own lifestyle, completed gifts are straightforward and effective.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Strategy 4: Dynasty Trust Funding</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A dynasty trust is a long-term trust designed to span multiple generations and benefit descendants for 100+ years. Because the assets are held in trust and not owned by any individual, the trust can avoid repeated estate taxation as assets pass from one generation to the next.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you fund a dynasty trust with a $10M gift in 2025 (using $10M of your exemption), that trust can hold assets and distribute to your children, grandchildren, and great-grandchildren over decades. The assets in the trust appreciate and pass to the next generation without estate tax, except at the generation-skipping transfer tax threshold (which is aligned with the federal estate tax exemption).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dynasty trusts are most relevant for people with very large estates or strong family legacy goals. They require careful drafting and professional trustee management, but they can provide enormous wealth preservation benefits over generations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Arizona is a favorable jurisdiction for dynasty trusts because the state has no rule against perpetuities - meaning trusts can last indefinitely. If you live in Arizona, funding a dynasty trust can provide multi-generational estate tax savings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">The Risks: What to Consider Before Acting</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                All of these strategies require giving up control of assets. Before you make a large irrevocable gift, consider:
              </p>
              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Loss of Control</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Once you gift assets to an irrevocable trust, you have no ability to change your mind or reclaim them. If you gift $5 million and your circumstances change - job loss, divorce, unexpected medical needs - the money is gone. You cannot undo the gift.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Loss of Step-Up in Basis</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When you die, your heirs receive a step-up in basis. This means that if you bought Apple stock for $10,000 and it is worth $100,000 at your death, your heirs inherit it with a basis of $100,000. They can sell it immediately with no capital gains tax.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                But if you gift the Apple stock to an irrevocable trust during your lifetime, the trust inherits your original basis of $10,000. When the trust later sells the stock for $100,000, the trust owes capital gains tax on the $90,000 gain.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is a significant cost to consider. For appreciated assets, you are trading estate tax savings for capital gains tax. A tax professional should model both scenarios before you decide.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Longevity Risk</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you fund a trust in 2025 and live until 2040, you have had 15 years to potentially regret the decision. Life circumstances change. A divorce, a remarriage, financial hardship, or family conflict can make you wish you had kept the assets under your control.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is not a reason to avoid planning - but it is a reason to be thoughtful about how much you gift and to ensure you retain sufficient assets for your own security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">The Time Constraint: Act Now</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The critical point is timing. If you wait until January 1, 2026, the planning window closes. You will have lost the opportunity to use the higher exemption. At that point, you are locked into the $7 million exemption (per person) for the rest of your life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For someone with a $10 million estate, waiting is catastrophic. In 2025, you can gift $10 million with no estate tax (it is below the $13.99M exemption). In 2026, if you gift $10 million, you have only $7 million of exemption left, meaning $3 million of the gift is taxable to your beneficiaries at 40%. That is $1.2 million in taxes on a gift that would have been tax-free if made one day earlier.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This means the window to plan is now - in 2026. You have only a few months to:
              </p>
              <ol className="list-decimal pl-8 text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
                <li>Understand your estate value and whether you fall into the $7M to $14M zone.</li>
                <li>Consult with an estate planning attorney to understand your options.</li>
                <li>Decide which strategy (if any) makes sense for your situation.</li>
                <li>Implement the strategy - which may involve drafting trusts, funding them, and making gifts.</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Congressional Developments</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As of early 2026, there is no active legislation to extend the higher exemption. Congress could pass such legislation at any time, but it would need to be signed into law before December 31, 2025, to prevent the sunset. At this writing, such passage appears unlikely.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Do not wait for Congress to act. Plan as if the exemption will sunset, and you will either be pleasantly surprised if Congress extends it, or you will have already protected your estate.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Next Steps</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If your estate falls in the $7M to $14M zone, here is what to do:
              </p>
              <ol className="list-decimal pl-8 text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
                <li>Calculate your net worth. Include real estate, investments, business interests, retirement accounts, life insurance, and all other assets. Subtract liabilities.</li>
                <li>If the total is between $7 million and $14 million (per person), you should consult with an estate planning attorney immediately.</li>
                <li>Discuss your goals. Do you want to pass the maximum amount to heirs tax-free? Do you have other goals, like maintaining control of your assets or helping charitable causes?</li>
                <li>Evaluate the strategies discussed here - SLATs, ILITs, completed gifts, dynasty trusts - and determine which fit your situation.</li>
                <li>Act before December 31, 2025. Gifts and trust funding completed by December 31 use the higher exemption.</li>
              </ol>
            </section>

            <section className="bg-[#F7F4EE] rounded-lg p-8 mb-12 mt-16">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Protect Your Estate Before the Exemption Drops</h3>
              <p className="text-gray-700 mb-6">
                The estate tax exemption sunset is one of the few predictable dates in tax planning. We help families understand their exposure and implement strategies to protect their wealth for future generations.
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
                <strong>Disclaimer:</strong> This article is provided for informational purposes only and does not constitute legal or tax advice. Estate planning involves complex tax rules and requires careful analysis of your specific circumstances. The strategies discussed here - SLATs, ILITs, dynasty trusts, and completed gifts - have significant legal and tax consequences and are not appropriate for everyone. You must consult with a qualified estate planning attorney and a CPA before implementing any of these strategies. Laws change frequently and the information in this article may be outdated. Verify all information with your professional advisors before making decisions. Farther does not provide legal or tax advice, only educational information. The anti-clawback rule is based on current Treasury Regulations, but tax law could change. Past estate planning results are not indicative of future outcomes. Each person&apos;s situation is unique.
              </p>
            </section>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
