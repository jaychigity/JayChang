import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'
import ArticleByline from '@/components/ArticleByline'

export const metadata: Metadata = {
  title: 'Why You Should Never Donate Cash to Charity If You Own Appreciated Stock',
  description: 'Donating appreciated stock directly to charity saves thousands in capital gains tax while providing the same charitable benefit. Here\'s the math.',
  alternates: {
    canonical: '/insights/never-donate-cash-to-charity'
  }
}

export default function NeverDonateCashPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why You Should Never Donate Cash to Charity If You Own Appreciated Stock',
    description: 'Donating appreciated stock directly to charity saves thousands in capital gains tax while providing the same charitable benefit.',
    author: {
      '@type': 'Organization',
      name: 'Farther'
    },
    datePublished: '2026-03-18'
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-[#F7F4EE] py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Why You Should (Almost) Never Donate Cash to Charity If You Own Appreciated Stock</h1>
            <p className="text-xl text-gray-700 mb-4">The capital gains tax you avoid pays for the donation. Use it.</p>
            <div className="mt-6">
              <ArticleByline updatedDate="2026-03-18" variant="light" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto prose prose-lg">
          <AnimateOnScroll>
            <h2>The Core Problem</h2>
            <p>
              You want to donate $30,000 to a local food bank. You own NVIDIA stock with substantial unrealized gains. You have two options:
            </p>
            <p>
              Option A: Sell the stock, pay capital gains tax on the gains, donate the after-tax proceeds in cash.
            </p>
            <p>
              Option B: Donate the stock directly to the food bank.
            </p>
            <p>
              Most people choose Option A without thinking. It is simple - sell the stock, the cash shows up in your brokerage, send it to the charity. But this choice costs money, sometimes a lot of it. Option B, which takes only slightly more effort, produces a better outcome for you and the charity.
            </p>

            <h2>The Mathematics of the Problem</h2>
            <p>
              Let&apos;s use concrete numbers. Suppose you own $10,000 worth of NVIDIA stock with a $3,000 cost basis. You want to donate the full $10,000 value to the charity.
            </p>
            <p>
              <strong>Option A: Sell and Donate Cash</strong>
            </p>
            <ul>
              <li>Sell the stock. You realize a $7,000 long-term capital gain.</li>
              <li>Federal capital gains tax at 15% (assuming you are in the 15% LTCG bracket): $1,050.</li>
              <li>Arizona state tax on capital gains at 2.5% (flat rate on income, including capital gains): $175.</li>
              <li>Total tax paid: $1,225.</li>
              <li>Cash proceeds after tax: $8,775.</li>
              <li>You want to donate $10,000, so you add $1,225 from other funds to make up the difference.</li>
              <li>You donate $10,000 cash and claim a $10,000 charitable deduction.</li>
              <li>Your net cost: $1,225 in taxes + $8,775 from proceeds already paid by selling = $10,000 net cost to give $10,000 to charity, but you paid $1,225 in taxes along the way.</li>
            </ul>
            <p>
              More precisely: your cost to fund the charity is $10,000 cash (from your bank account or proceeds), but you also paid $1,225 in capital gains tax, so your total economic cost is $11,225.
            </p>
            <p>
              <strong>Option B: Donate the Stock Directly</strong>
            </p>
            <ul>
              <li>Donate the $10,000 NVIDIA stock directly to the charity (no sale occurs).</li>
              <li>The charity receives $10,000 of stock.</li>
              <li>You claim a $10,000 charitable deduction (at fair market value, not cost basis).</li>
              <li>You owe zero capital gains tax (because you did not sell the stock).</li>
              <li>Your net economic cost: $10,000 (the value of the stock you gave up), but zero in taxes.</li>
            </ul>
            <p>
              The difference between the two options is exactly the capital gains tax you avoided: $1,225. In Option A, you paid $1,225 in tax. In Option B, you paid zero. The $1,225 you saved is the tax benefit that comes from donating appreciated property rather than cash.
            </p>

            <h2>Scaling the Advantage</h2>
            <p>
              The advantage grows with larger donations and larger gains. Let&apos;s suppose you own $100,000 of highly appreciated stock with a $20,000 cost basis (an $80,000 gain - this is common for long-tenured tech employees). You want to donate it.
            </p>
            <p>
              If you sell and donate cash:
            </p>
            <ul>
              <li>Realized gain: $80,000.</li>
              <li>Federal capital gains tax at 15%: $12,000.</li>
              <li>Arizona state tax at 2.5%: $2,000.</li>
              <li>Total tax: $14,000.</li>
              <li>Your cost to give $100,000: $100,000 (cash) + $14,000 (tax paid separately) = $114,000 total economic cost.</li>
            </ul>
            <p>
              If you donate the stock directly (you can compare the long-term wealth impact of either choice in the <Link href="/tools/tvm-calculator" className="text-[#1d7682] underline hover:text-[#2a9dab]">TVM calculator</Link>):
            </p>
            <ul>
              <li>Your cost: $100,000 (the value of stock given up).</li>
              <li>Tax paid: $0.</li>
              <li>Total economic cost: $100,000.</li>
            </ul>
            <p>
              The savings: $14,000. On a $100,000 donation, you save 14% of the value through one decision - donating the asset rather than cash.
            </p>

            <h2>Why This Works Legally</h2>
            <p>
              The rule is straightforward: when you donate appreciated property to a qualified charitable organization, you receive a deduction equal to the fair market value of the property at the time of donation. The donor never realizes the capital gain because the property is donated, not sold. The charity receives the property at fair market value. Everyone wins.
            </p>
            <p>
              This only works if the property is publicly traded (or otherwise has a verifiable fair market value). Real estate, private stock, and other illiquid assets have more complex rules and require appraisals, but the principle is the same.
            </p>

            <h2>The Requirements and Limits</h2>
            <p>
              For this to work, the stock must meet a few conditions:
            </p>
            <ul>
              <li><strong>Held over one year:</strong> The stock must be held for more than one year to receive long-term capital gains treatment. If held short-term, you would likely get a deduction at fair market value but the appreciation might be recaptured. For long-term holdings (over one year), this is not an issue.</li>
              <li><strong>Publicly traded:</strong> The property must be publicly traded to establish a clear fair market value. NVIDIA, Intel, Apple - any stock with daily market prices qualifies.</li>
              <li><strong>Qualified charitable organization:</strong> The recipient must be a qualified charitable organization - typically a 501(c)(3) public charity, not a private foundation. A donor-advised fund is also a qualified recipient, and appreciated stock donations to a DAF are common.</li>
            </ul>
            <p>
              There is also a deduction limit: for appreciated property (capital gain property), the deduction limit is 30% of your Adjusted Gross Income (AGI). For cash, the limit is 60%. If you want to donate appreciated stock worth more than 30% of your AGI, the excess can be carried forward for five years.
            </p>
            <p>
              Example: If your AGI is $200,000, you can donate up to $60,000 in appreciated stock in a single year (30% of $200,000). If you want to donate $100,000 of appreciated stock, you claim a $60,000 deduction in year one and carry forward the remaining $40,000 to year two.
            </p>

            <h2>What About Private Foundations?</h2>
            <p>
              If you donate appreciated property to a private foundation (rather than a public charity), the rules tighten. For private foundations, the deduction is limited to cost basis, not fair market value. This means you get a deduction only for the $3,000 you paid for the stock, not the $10,000 current value. The incentive to donate appreciated property to a private foundation is much weaker.
            </p>
            <p>
              This is one reason to use a donor-advised fund (which is a public charity type) rather than a private foundation if you own a lot of appreciated stock. The DAF allows you to get the full fair market value deduction on appreciated property while maintaining control over grant timing.
            </p>

            <h2>Coordination with Your Equity Compensation Plan</h2>
            <p>
              If you work at a tech company, your brokerage likely holds multiple lots of the same stock - positions purchased or vested at different times with different cost bases. When you donate stock, you can specify which lot to donate. This matters.
            </p>
            <p>
              Always donate the lot with the lowest (or highest) cost basis depending on your tax strategy. If you have NVIDIA stock purchased at $50 (cost basis $5,000) and NVIDIA stock vested in RSUs last year at $120 (cost basis $12,000 for the same $12,000 position), and you want to donate $12,000 to charity, donate the RSU lot. You avoid the larger capital gain, and the tax savings are real.
            </p>
            <p>
              Work with your brokerage or tax advisor to ensure you are selecting the optimal lot for donation. Most brokerages allow you to specify lot by purchase date or specific acquisition.
            </p>

            <h2>The Practical Steps</h2>
            <p>
              Donating stock directly to a charity requires only a few steps:
            </p>
            <ol>
              <li>Contact the charity and ask for their transfer instructions - most charities have a DTC account (Depository Trust Company) where they can receive stock transfers.</li>
              <li>Provide your brokerage with the charity&apos;s DTC account details and instruct them to transfer the stock (by lot, if you prefer) to the charity.</li>
              <li>The transfer typically completes in 2 - 5 business days.</li>
              <li>The charity will send you a receipt with the fair market value of the stock on the date of transfer.</li>
              <li>Use that receipt to claim the charitable deduction on your tax return.</li>
            </ol>
            <p>
              The entire process is straightforward and requires no more effort than selling the stock and sending cash - often less, because the brokerage handles the transfer directly.
            </p>

            <h2>Real Example: An Engineer's Decision</h2>
            <p>
              Mark is a senior software engineer at Intel earning $300,000 in total compensation, with significant holdings of INTC stock from option exercises over the past five years. He wants to donate $50,000 to his alma mater&apos;s engineering program. His lowest-cost-basis INTC stock has a current value of $50,000 but cost basis of only $8,000 (purchased years ago when the stock price was lower).
            </p>
            <p>
              If Mark sells the stock and donates cash: he realizes a $42,000 gain, pays approximately $10,500 in federal tax (25% marginal rate on the gain) plus $1,050 in state tax, totaling $11,550. His net cost is $50,000 plus $11,550 in taxes = $61,550 total economic cost.
            </p>
            <p>
              If Mark donates the stock directly: he donates the $50,000 of INTC stock, claims a $50,000 deduction, pays zero in capital gains tax, and his net cost is $50,000.
            </p>
            <p>
              Mark saves $11,550 - money that stays in his pocket and represents real tax savings for making a good decision.
            </p>

            <h2>When NOT to Donate Stock</h2>
            <p>
              There is one scenario where donating appreciated stock is not the best choice: if you want to harvest a loss to offset other gains or income. In that case, you want to sell the stock (to realize the loss), pay tax on the appreciation (if any), and donate the proceeds in cash. But this is rare and specific to tax-loss harvesting strategies.
            </p>
            <p>
              Also, if the stock is depressed and worth less than your cost basis, selling and donating cash while harvesting the loss is the right move. The charitable deduction plus the loss offset together create tax savings that direct stock donation cannot match.
            </p>
            <p>
              But if you own appreciated stock (gains greater than zero) and want to give to charity, donating the stock is almost always better than selling and giving cash.
            </p>

            <h2>Final Thought</h2>
            <p>
              Donating appreciated stock is not a loophole or aggressive tax strategy. It is the straightforward application of the rule that appreciated property donations are deducted at fair market value, not cost basis. The IRS expects this behavior and rewards it by allowing the full deduction. For high earners with concentrated stock positions, this is often the single largest tax savings opportunity in the charitable giving space - and it requires only one decision to claim it.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-[#333333] py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-white mb-4">Ready to give smarter?</h2>
            <p className="text-gray-300 mb-8">We help high earners maximize the impact of charitable giving while minimizing tax cost.</p>
            <Button href="/schedule-consultation" variant="primary" className="bg-white text-gray-900 hover:bg-gray-100">
              Schedule a Conversation
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-12 px-6 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-sm text-gray-600">
          <p>
            <strong>Disclaimer:</strong> This article is for educational purposes only and should not be construed as financial, tax, or legal advice. Tax laws are complex and individual circumstances vary. The deduction limits, long-term capital gains rates, and state tax treatment described are current as of 2026 but may change. Donations of appreciated securities may trigger additional tax rules, including wash-sale rules, FICA constraints, and other considerations depending on your specific situation. Before donating any appreciated property to charity, consult with a qualified tax advisor or CPA familiar with your complete financial picture. Farther does not provide tax advice and does not have authority to bind tax positions.
          </p>
        </div>
      </section>
    </>
  )
}
