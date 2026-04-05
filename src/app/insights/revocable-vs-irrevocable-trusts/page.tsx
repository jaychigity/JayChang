import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Revocable vs. Irrevocable Trusts: Which One Do You Actually Need?',
  description: 'Revocable trusts avoid probate and provide privacy. Irrevocable trusts provide tax benefits and asset protection. Understand the tradeoffs.',
  openGraph: {
    title: 'Revocable vs. Irrevocable Trusts: Which One Do You Actually Need?',
    description: 'Revocable trusts avoid probate and provide privacy. Irrevocable trusts provide tax benefits and asset protection. Understand the tradeoffs.',
    type: 'article',
  },
  alternates: {
    canonical: '/insights/revocable-vs-irrevocable-trusts',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'Revocable vs. Irrevocable Trusts: Which One Do You Actually Need?',
  description: 'Revocable trusts avoid probate and provide privacy. Irrevocable trusts provide tax benefits and asset protection. Understand the tradeoffs.',
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
              Revocable vs. Irrevocable Trusts: Which One Do You Actually Need?
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              A revocable trust gives you control. An irrevocable trust gives you tax benefits. The right choice depends on your goals, your assets, and how much control you are willing to give up.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <AnimateOnScroll>
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When people talk about trusts, they are usually referring to one of two types: revocable or irrevocable. These two categories are fundamentally different in purpose, structure, and consequence. Understanding the difference is critical because choosing the wrong one can cost you tens of thousands of dollars in unnecessary expenses, taxes, or lost assets.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The distinction is simple on its face: a revocable trust can be changed or revoked at any time. An irrevocable trust cannot. But beneath that simple distinction lies a universe of practical, financial, and emotional implications that require careful thought before deciding which path to take.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Revocable Living Trusts: Control and Flexibility</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A revocable living trust is a trust that you create during your lifetime and retain complete control over. You are the grantor (the person who creates it), the trustee (the person who manages it), and the beneficiary (the person who receives income and principal if needed).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Because you retain control, a revocable trust is transparent. The assets in the trust are "grantor trust" assets for tax purposes, meaning all income, gains, and losses are reported on your personal tax return. There are no separate trust tax returns, no separate tax identification numbers, and no separate accounting. From a tax perspective, it is as if the trust does not exist.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Because you can modify or dissolve the trust at any time, a revocable trust provides maximum flexibility. If your circumstances change - you marry, you divorce, you acquire new assets, you want to change who inherits - you can amend the trust. If you decide the entire trust structure is wrong for your situation, you can dissolve it and move the assets back into your name.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Benefit 1: Avoiding Probate</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Assets held in a revocable trust at your death bypass probate. Probate is the court process by which your will is validated and your assets are distributed according to your instructions (or, if you die without a will, according to state law). Probate can be slow, expensive, and public.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By transferring assets into a trust during your lifetime, those assets pass directly to your beneficiaries when you die, without court involvement. The probate process is avoided entirely.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In Arizona, probate is actually relatively efficient. Arizona has a streamlined informal probate procedure, and the state court system moves fairly quickly. The time and cost of Arizona probate are less onerous than in states like California or New York. But even so, for many people, avoiding probate is desirable for privacy and simplicity.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Benefit 2: Privacy</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Probate is a public record. When you die and your will is admitted to probate, your will becomes a public document that anyone can read. The value of your estate, the list of your assets, and the identities of your beneficiaries are all public information.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A revocable trust avoids this exposure. Because assets pass through the trust rather than through probate, there is no public filing. Your trust document, your asset holdings, and your beneficiaries remain private.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For people who value privacy or who have significant assets and want to minimize public visibility, this is a major advantage.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Benefit 3: Incapacity Planning</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A revocable trust provides continuity if you become incapacitated. You name a successor trustee in the trust document. If you become unable to manage your affairs (due to illness, injury, cognitive decline, or any other reason), your successor trustee can step in and continue managing the trust assets on your behalf.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Without a trust, if you become incapacitated, your family would need to go to court and establish a conservatorship or guardianship to manage your affairs. This is time-consuming, expensive, and requires ongoing court supervision.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With a trust, the transition is immediate and automatic. Your named successor trustee can manage the assets without court involvement.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Limitation: No Tax Benefit</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Because you retain control of a revocable trust, it provides no federal estate tax benefit. The assets in the trust are included in your taxable estate at your death, just as if you had held them in your personal name.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If your estate exceeds the federal estate tax exemption (approximately $7 million per person in 2026), a revocable trust alone will not reduce the estate tax you owe. You would need an irrevocable trust or other tax planning strategy.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Limitation: No Creditor Protection</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Because you own the assets in a revocable trust, they are exposed to your creditors. If you are sued and a judgment is entered against you, the creditor can potentially attach assets in your revocable trust to satisfy the judgment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For professionals like physicians, contractors, or business owners who face higher liability risk, this is a significant limitation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Irrevocable Trusts: Tax Benefits and Asset Protection</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                An irrevocable trust is fundamentally different. Once you create an irrevocable trust and transfer assets into it, you have given up control. You cannot modify the trust, you cannot take the assets back, and you cannot dissolve the trust without the consent of the beneficiaries (and sometimes a court order).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Because you have given up control, the assets in an irrevocable trust are removed from your taxable estate. This is the key tax benefit. If you fund an irrevocable trust with $5 million, that $5 million is no longer part of your estate for federal estate tax purposes.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Benefit 1: Estate Tax Reduction</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The primary purpose of an irrevocable trust is to remove assets from your taxable estate. If you are subject to federal estate tax (your estate exceeds the exemption), this can save substantial tax dollars.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For example, if you have a $12 million estate and the federal exemption is $7 million, you have $5 million in taxable estate. The estate tax on that amount is $2 million (40%). But if you fund an irrevocable trust with $5 million before your death, your taxable estate drops to $7 million, and the estate tax becomes zero (if the assets have not appreciated further).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Additionally, any appreciation of the assets in the irrevocable trust after the gift escapes estate tax entirely. If you gift $5 million to an irrevocable trust and the assets grow to $8 million, the additional $3 million in growth is never estate-taxed. This can produce enormous savings over time.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Benefit 2: Asset Protection</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Because assets in an irrevocable trust are no longer owned by you, they are generally protected from your creditors. If you are sued and a judgment is entered, the creditor cannot attach assets in an irrevocable trust because you do not own them.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is valuable for professionals in high-liability fields such as medicine, law, real estate development, or business ownership.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Note that there are limitations. If the trust is structured improperly, or if you transfer assets to the trust as a fraudulent conveyance (to avoid creditors you already know about), creditor protections may be weak. A well-drafted irrevocable trust funded appropriately can provide strong protection.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Limitation: Loss of Control</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The biggest limitation of an irrevocable trust is that you give up control. Once you transfer assets into the trust, you cannot take them back. You cannot modify the terms of the trust without the agreement of all beneficiaries (and sometimes a court order). You cannot decide later that you made a mistake and dissolve the trust.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is a significant psychological and practical burden for many people. If you fund an irrevocable trust with $3 million and your financial circumstances change - you lose your job, your health suffers, you face unexpected expenses - you cannot access that money. It is gone.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Because of this limitation, irrevocable trusts only work for people with sufficient wealth that they are comfortable permanently giving away a portion of their assets.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Limitation: Loss of Step-Up in Basis</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When you die, your heirs receive a step-up in basis. This means they inherit assets at fair market value as of the date of your death, with no tax on the appreciation during your lifetime.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                But if you gift appreciated assets to an irrevocable trust during your lifetime, the trust inherits your original cost basis. When the trust later sells the assets, the trust owes capital gains tax on all the appreciation from the original purchase to the sale.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For example, if you bought Apple stock for $50,000 and it is now worth $300,000, you could let your heirs inherit it with a stepped-up basis of $300,000. They could sell it the next day with no capital gains tax. But if you gift it to an irrevocable trust, the trust has a basis of $50,000. When the trust sells it for $300,000, the trust owes capital gains tax on the $250,000 gain.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is a significant cost that must be modeled when deciding whether an irrevocable trust makes sense. Sometimes the estate tax savings exceed the capital gains tax cost, and sometimes they do not.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Limitation: Complexity and Administration</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                An irrevocable trust must file its own income tax return and maintain separate accounting. If the trust generates income, you need separate tax identification numbers, separate bank accounts, and separate bookkeeping. This adds cost and complexity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A professional trustee may be required to manage the trust, which adds ongoing fees.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Comparing the Two: A Decision Matrix</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Here is a simple comparison:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-400 p-3">Feature</th>
                      <th className="border border-gray-400 p-3">Revocable</th>
                      <th className="border border-gray-400 p-3">Irrevocable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 p-3">Control</td>
                      <td className="border border-gray-400 p-3">Full control</td>
                      <td className="border border-gray-400 p-3">None</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">Can modify</td>
                      <td className="border border-gray-400 p-3">Yes</td>
                      <td className="border border-gray-400 p-3">No</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">Avoids probate</td>
                      <td className="border border-gray-400 p-3">Yes</td>
                      <td className="border border-gray-400 p-3">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">Privacy</td>
                      <td className="border border-gray-400 p-3">Yes</td>
                      <td className="border border-gray-400 p-3">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">Estate tax benefit</td>
                      <td className="border border-gray-400 p-3">No</td>
                      <td className="border border-gray-400 p-3">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">Creditor protection</td>
                      <td className="border border-gray-400 p-3">No</td>
                      <td className="border border-gray-400 p-3">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">Step-up in basis</td>
                      <td className="border border-gray-400 p-3">Yes</td>
                      <td className="border border-gray-400 p-3">No</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">Simplicity</td>
                      <td className="border border-gray-400 p-3">Simple</td>
                      <td className="border border-gray-400 p-3">Complex</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">When You Need a Revocable Trust</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A revocable living trust is appropriate if:
              </p>
              <ul className="list-disc pl-8 text-lg text-gray-700 leading-relaxed mb-6 space-y-3">
                <li>Your estate is below the federal estate tax exemption (approximately $7 million per person in 2026). Estate tax is not a concern.</li>
                <li>You value privacy and want to avoid public probate proceedings.</li>
                <li>You want to provide for incapacity planning - ensuring someone can manage your affairs if you become unable to do so.</li>
                <li>You have a blended family or complex family situation and want clear control over who inherits your assets.</li>
                <li>You want flexibility and may need to modify your plan as circumstances change.</li>
                <li>You are not in a high-liability profession and do not need creditor protection.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">When You Need an Irrevocable Trust</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                An irrevocable trust is appropriate if:
              </p>
              <ul className="list-disc pl-8 text-lg text-gray-700 leading-relaxed mb-6 space-y-3">
                <li>Your estate exceeds the federal estate tax exemption and you want to reduce the estate tax burden.</li>
                <li>You are in a high-liability profession (physician, attorney, contractor, business owner) and want creditor protection.</li>
                <li>You want to make large gifts to heirs while removing appreciation from your taxable estate.</li>
                <li>You have substantial wealth and are comfortable permanently giving away a portion of your assets.</li>
                <li>You want to fund a life insurance policy outside your taxable estate (via an ILIT).</li>
                <li>You want to create a dynasty trust for multiple generations of heirs.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Arizona-Specific Considerations</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Arizona is a community property state. This means that property acquired during a marriage is presumed to be owned equally by both spouses, regardless of whose name is on the title.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Community property has unique probate and estate tax implications. When you establish a trust in Arizona, your attorney must account for community property law. A revocable trust for an Arizona resident should specify how community property is treated, and an irrevocable trust should be carefully structured to avoid inadvertently creating tax or ownership issues.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is another reason to work with an Arizona-licensed attorney who understands local law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">A Hybrid Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Many people use a combination of revocable and irrevocable trusts. For example, you might establish a revocable living trust to hold most of your assets and manage them during your lifetime and incapacity, while also funding an irrevocable trust to provide tax benefits for assets above the exemption threshold.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The revocable trust gives you flexibility and control over day-to-day assets, while the irrevocable trust provides targeted tax and creditor protection benefits.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This hybrid approach requires careful coordination between the two trusts and is best implemented with professional guidance.
              </p>
            </section>

            <section className="bg-[#F7F4EE] rounded-lg p-8 mb-12 mt-16">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Determine Your Best Trust Strategy</h3>
              <p className="text-gray-700 mb-6">
                The right trust structure depends on your estate size, your goals, and your risk profile. We help Arizona residents evaluate their options and implement the strategy that fits their circumstances.
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
                <strong>Disclaimer:</strong> This article is provided for informational purposes only and does not constitute legal or tax advice. The decision to use a revocable or irrevocable trust depends on your specific circumstances, assets, and goals, and requires careful analysis by qualified professionals. You must consult with an Arizona-licensed estate planning attorney and a CPA before establishing any trust. Arizona community property law has special implications for trusts, and your attorney should address this in your planning. The tax consequences of revocable and irrevocable trusts are complex and may change. Verify all information with your professional advisors before making decisions. Farther does not provide legal or tax advice, only educational information. Past estate planning results are not indicative of future outcomes.
              </p>
            </section>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
