import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Concentrated Stock Risk: How Much NVDA, TSMC, or Intel Is Too Much in Your Portfolio?',
  description: `40% of Russell 3000 stocks have suffered 70%+ declines from peak. Learn whether your concentrated position is defensible and how to systematically reduce it without triggering massive capital gains taxes.`,
  alternates: {
    canonical: 'https://www.advisorjay.com/insights/concentrated-stock-risk-how-much-is-too-much',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Concentrated Stock Risk: How Much NVDA, TSMC, or Intel Is Too Much in Your Portfolio?',
  datePublished: '2026-03-18',
  author: {
    '@type': 'Person',
    name: 'Jay Chang',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Farther',
  },
};

export default function ConcentratedStockRiskPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-[#F7F4EE] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h1 className="text-5xl font-bold text-[#333333] mb-6">
              Concentrated Stock Risk: How Much NVDA, TSMC, or Intel Is Too Much in Your Portfolio?
            </h1>
          </AnimateOnScroll>
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-[#5b6a71]">
            <span className="text-lg">March 18, 2026</span>
            <span className="text-lg">13 min read</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">

          <AnimateOnScroll>
            <p className="text-[#5b6a71] text-xl leading-relaxed mb-8">
              You have worked at NVIDIA for eight years. Your compensation package includes base salary, RSU grants, ESPP purchases, and a 401(k) match. Combined, these have accumulated into a $800,000 NVIDIA position. You also have $1,200,000 in other diversified investments. Your net worth is $2,000,000, and 40% of it is in a single stock. You know this is concentrated. But the tax bill to sell is enormous. NVIDIA has appreciated 800% since you joined. Selling now triggers $700,000 in capital gains. You are trapped.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">Why Concentration Risk Matters</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              A concentrated position in a single stock is not simply a matter of personal preference or market timing bet. It is a systematic risk that portfolio theory and empirical evidence both suggest is unwise.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              J.P. Morgan research examined the history of the Russell 3000 (a broad index of U.S. companies). They found that roughly 40% of all Russell 3000 constituents have experienced drawdowns of 70% or more from their all-time peak since 1980. These are not small-cap obscurities or penny stocks. These are companies that were large enough to be included in a major equity index. Many were industry leaders at the time of their peak.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              If you hold a single stock that comprises 40% of your net worth, you have created a scenario where a 70% decline in that stock drops your total net worth by 28%. Your $2,000,000 becomes $1,440,000. If your financial plan assumes $2,000,000 in assets, you are suddenly 28% below plan, with significant consequences for retirement, education funding, or any other goal tied to that asset base.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              This is not hypothetical. Intel, once the dominant semiconductor company and larger than NVIDIA, declined from a peak of $75 per share to under $20 per share. Lucent, once a $300 billion company, went to near-zero. GE, long a blue-chip holding, fell 60% from peak and stayed down. These were not speculative ventures. They were mature, profitable, household-name companies.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">Why Smart People Hold Concentrated Positions</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Understanding the risk of concentration does not explain why so many intelligent, financially literate people still hold concentrated positions. There are several psychological and practical reasons.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              First, anchoring bias. You bought NVIDIA stock at $40. It is now $200. You anchor to that entry price and view the current price as "expensive" or "overvalued," even if the business has fundamentally improved. You delay selling because you believe a return to some lower price is possible. This is anchoring to your purchase price, not to the actual value or risk.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Second, endowment effect. You hold a position because you own it, and ownership creates a psychological attachment. Studies show people will not sell an item they own at the same price they would not pay to purchase it. Your NVIDIA stock is "yours." Selling it feels like losing something, even if you would not buy it at the current price if you did not already own it.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Third, tax aversion. You have a $700,000 unrealized gain. Selling triggers $140,000-$150,000 in capital gains tax (at 20% long-term rate plus 3.8% net investment income tax, plus state tax). This is a large check to write. Your brain resists this. You postpone the decision because the tax is visible and painful. This is a form of mental accounting error: you are optimizing to avoid the tax, not to optimize your wealth and risk.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Fourth, narrative conviction. You work at NVIDIA. You understand the business. You believe in the company's long-term prospects. This belief is partially based on facts and partially on overconfidence. You are more informed about NVIDIA than the average investor, but you are not necessarily better at predicting the future. Your insider knowledge creates an illusion of control. You feel more confident holding NVIDIA than holding a diversified index fund, because you understand NVIDIA. You underestimate the risk because you understand the opportunity.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              All of these biases are human and understandable. But they are also hazards. They explain why concentration persists despite the known risks.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">Defining a Concentration Threshold</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              How much single-stock concentration is acceptable? There is no universally correct answer, but there is a framework.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              For most investors, a single stock should not exceed 10-15% of liquid net worth. This is the baseline. A 15% position means a 70% decline in that stock reduces your total net worth by 10.5%. This is still significant, but it is within the realm of acceptable portfolio risk.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              There are limited exceptions to this rule. If you have a written, rules-based plan to systematically sell your position over a multi-year period (e.g., "sell 10% of NVIDIA annually for the next five years"), you can justify holding a temporary concentration above 15% while you execute the plan. The key word is "plan." Without a plan, concentration above 15% is indefensible.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Another exception: if you work at the company and cannot easily diversify due to insider trading restrictions (blackout periods, Form 144 filing requirements), you may justify holding above 15% temporarily while you wait for the next window to sell. But this should be a temporary state, measured in months, not years.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Outside of these narrow exceptions, a single stock at 20% or more of net worth is a concentration problem. You should have a plan to reduce it.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">Diversification Strategies: Systematic Selling</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              The most straightforward diversification strategy is systematic selling. You commit to selling a fixed percentage of your position annually, regardless of the stock price. Examples: sell 10% of your position each year for five years, or 15% per year for three years, or 20% per year for two years.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              The advantage of systematic selling is that it does not require you to time the market or make emotional decisions. You sell on a calendar, not based on whether you think the stock will go up or down. This removes emotion and behavioral bias from the decision.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              The tax cost is real but spread across years. If you sell $80,000 per year in an upmarket position with $700,000 in gains, you trigger roughly $140,000 in taxes annually (assuming 20% long-term gains rate). Spread across five years, this is $28,000 per year in tax, which is tolerable for most six-figure earners. More importantly, you de-risk your portfolio systematically. After five years, your NVIDIA position has shrunk from $800,000 to $0, and your risk is eliminated.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              To implement systematic selling, commit to the plan in writing. Tell your financial advisor or a trusted colleague. Schedule the sales in advance. Use calendar reminders. The goal is to create friction and accountability. Without external commitment, you will likely abandon the plan during a bull market when the stock is rising and you convince yourself to "wait a bit longer."
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">Tax-Efficient Execution: Specific Lot Identification</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              When you sell shares of a concentrated position, always use specific lot identification (allowed under IRC Section 1012). This means you designate exactly which shares you are selling, rather than selling "first-in-first-out" (FIFO) or using an average cost.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              The strategy is to sell the shares with the highest cost basis first. This minimizes the capital gain on each sale. Example: you bought shares of NVIDIA in three tranches. Tranche A: 100 shares at $40 (cost basis $4,000). Tranche B: 200 shares at $80 (cost basis $16,000). Tranche C: 300 shares at $150 (cost basis $45,000). Total cost basis $65,000. Current price $200.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              If you sell 100 shares at FIFO, you sell Tranche A at $40 basis and $200 current price, triggering a $16,000 gain. If you sell 100 shares using specific lot identification, you sell Tranche C at $150 basis and $200 current price, triggering a $5,000 gain. Over time, selling highest-cost-basis shares first significantly reduces your cumulative capital gains.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              You must document your specific lot identification in writing at the time of sale. Your broker will require this information. Write it down or save the email from your broker confirming which lots were sold.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">Tax-Loss Harvesting Coordination</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              If you are selling concentrated shares with large gains, consider pairing this with tax-loss harvesting elsewhere in your portfolio. Tax-loss harvesting means selling securities that have declined in value to realize losses that offset your gains.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Example: you are selling $80,000 of NVIDIA shares with a $40,000 gain. You simultaneously sell $25,000 of an underperforming bond fund (purchased at $30,000) with a $5,000 loss. Your net realized gain for the year is $35,000. You have reduced your capital gains tax by roughly $10,000 (the loss offset, times your tax rate).
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              The key constraint is wash sale rules. You cannot sell a security at a loss and repurchase a substantially identical security within 30 days before or after the loss sale. If you are selling NVIDIA at a gain and also tax-loss harvesting NVIDIA at a loss (if you owned it in a different account), you must be careful not to trigger wash sales. Maintain at least 30 days between the loss sale and any repurchase of NVIDIA stock.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              For most concentrated-position holders, the NVIDIA position itself is too large to tax-loss harvest. But coordinating sales of NVIDIA gains with losses elsewhere is a smart move.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">Advanced Diversification Techniques</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Beyond simple selling, several advanced techniques can reduce concentration risk with lower tax friction.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Exchange funds: You contribute your concentrated NVIDIA position (with a large gain) to a fund, along with other investors who contribute their concentrated positions (Apple, Tesla, etc.). The fund combines all the concentrated positions and distributes a diversified portfolio to each contributor. The key advantage is that this is a like-kind exchange under old IRC Section 1031 rules (though new 1031 rules are narrower as of 2026). You can defer your capital gains tax, potentially indefinitely if you never liquidate the diversified holdings. Exchange funds are complex, require significant position sizes ($5 million or more typically), and charge substantial fees. But they are powerful for large concentrated positions.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Protective puts: You buy a put option on your NVIDIA shares. This gives you the right to sell the shares at a fixed price, creating a floor below which your loss cannot exceed. This hedges downside risk while keeping you exposed to upside. The cost is the put premium. This is useful if you expect volatility and want to reduce concentrated risk without selling, but it is not a permanent solution.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Collars: A combination of a protective put and a short call. You buy a put (downside protection) and sell a call (upside limit), with the sale of the call offsetting the cost of the put. This locks in a range of potential gains and losses. Useful for interim de-risking, but again, not a permanent solution.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Charitable giving of appreciated shares: Donate shares of NVIDIA directly to a charitable organization. You receive a charitable deduction equal to the fair market value of the shares (for tax purposes), but you avoid the capital gains tax. If you have large NVIDIA gains and a desire to donate to charity, this is elegant. You benefit from a tax deduction, the charity receives the full value of the shares, and you reduce your concentration. No capital gains tax is triggered.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              10b5-1 plans (for insiders): If you are a corporate insider at NVIDIA, you can enter into a 10b5-1 trading plan. This plan allows you to commit in advance to sell shares on specific dates, and the sales are automatically executed even during periods when you would otherwise be subject to blackout windows. This is useful for insiders who face restrictions on when they can sell. The plan must be set up during an open window, but then it operates automatically.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">Building a Diversification Plan</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              A diversification plan should address: one, the target level of concentration (10-15% of net worth for NVIDIA). Two, the timeline (how many years to reach the target). Three, the annual selling schedule (how much to sell each year). Four, the tax efficiency strategy (specific lot identification, coordination with tax-loss harvesting, etc.). Five, the account priority (which accounts to sell from first, given tax implications and account type).
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Example plan: NVIDIA position is currently $800,000 (40% of $2,000,000 net worth). Target is 15% or $300,000. Gap to close: $500,000. Timeline: 5 years. Annual sell target: $100,000. Schedule: sell $100,000 of NVIDIA in March and September each year (twice annually to smooth the tax impact).
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Tax strategy: use specific lot identification to sell highest-cost-basis shares first. Coordinate with tax-loss harvesting in other accounts to offset gains. If an opportunity arises to harvest losses on NVIDIA itself (temporary decline), execute immediately.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Account priority: if the NVIDIA position exists partly in a taxable brokerage account and partly in a 401(k) or other tax-deferred account, prioritize selling from the taxable account first (where the capital gains tax applies). Leave the tax-deferred account untouched if possible, so that money compounds tax-free.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Execute this plan with discipline. Revisit it annually. Adjust the timeline if tax circumstances change (e.g., a year with lower income might allow you to accelerate sales). But stick to the plan. Without external discipline, concentration positions rarely get de-risked.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="mt-16 p-8 bg-[#F7F4EE] rounded-lg">
              <p className="text-[#333333] text-lg mb-6">
                A concentrated position is not a permanent state. It is a problem to be solved with planning and discipline. The sooner you start, the less painful the de-risking becomes.
              </p>
              <Button href="/schedule-consultation" variant="primary">
                Schedule a Review
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="mt-12 text-[#5b6a71] text-sm leading-relaxed border-t-2 border-[#F7F4EE] pt-8">
              <p className="mb-4">
                <strong>Disclaimer:</strong> This article is educational and does not constitute investment advice, tax advice, or a recommendation to buy or sell any security. Diversification does not guarantee a profit or protect against loss. Single-stock concentration carries significant risk and may not be suitable for all investors. The specific lot identification, tax-loss harvesting, and other strategies described are complex and depend on your individual tax situation, account types, and objectives. Exchange funds, collars, and other advanced strategies have substantial fees and tax consequences that must be evaluated individually. Consult a qualified investment advisor and tax professional before implementing any diversification strategy. Past performance does not indicate future results.
              </p>
            </div>
          </AnimateOnScroll>

        </div>
      </section>
    </>
  );
}
