import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';
import ArticleByline from '@/components/ArticleByline';
import CalculatorPreviewCard from '@/components/CalculatorPreviewCard';

export const metadata: Metadata = {
  title: 'Should You Always Sell RSUs When They Vest? The Answer Is Usually Yes',
  description: 'Understanding why selling RSUs at vesting is the right default for most people, with exceptions for specific situations.',
  alternates: {
    canonical: '/insights/should-you-sell-rsus-when-they-vest'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Should You Always Sell RSUs When They Vest? The Answer Is Usually Yes - Here is Why',
  description: 'Understanding why selling RSUs at vesting is the right default for most people, with exceptions for specific situations.',
  author: {
    '@type': 'Person',
    name: 'Jay Chang'
  },
  datePublished: '2026-03-18'
};

export default function RSUVestingArticle() {
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
              Should You Always Sell RSUs When They Vest? The Answer Is Usually Yes
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Here is Why
            </p>
            <div className="mb-8">
              <ArticleByline updatedDate="2026-03-18" variant="light" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              The Default Advice Exists for Good Reasons
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              If you work at a public company that grants restricted stock units, you have probably heard the same advice repeated: sell your RSUs when they vest. This recommendation appears in countless personal finance blogs, financial advisor conversations, and employee stock purchase plan guides. The reason this advice persists is that for the vast majority of employees, it is correct.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The fundamental insight underpinning this guidance is a tax fact: at the moment your RSUs vest, the shares are taxed as ordinary income regardless of whether you immediately sell them, hold them for a year, or hold them indefinitely. Your employer withholds taxes on the vest amount at ordinary income rates (your marginal federal tax rate, plus state income tax, plus Medicare tax if applicable). This tax bill is due whether you sell or not.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Once vesting occurs, you face a critical decision: hold the newly vested shares as an investment, or sell them. This is a completely separate investment decision from receiving the shares themselves. The tax has already been assessed. Holding after vesting is buying your employer&apos;s stock with cash you do not actually have - you have already had taxes withheld from your compensation. The rational framework for this holding decision is straightforward: would you take $80,000 of your salary, pay the taxes on it, and use the remaining after-tax proceeds to buy $80,000 worth of your employer&apos;s stock today? If the answer is no, holding RSUs after vesting is a mistake rooted in cognitive bias rather than sound financial analysis.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <CalculatorPreviewCard
              slug="rsu-equity-compensation-calculator"
              eyebrow="CALCULATOR · EQUITY TAX MODEL"
              title="RSU Equity Compensation Calculator"
              description="Plug in your grant schedule, vesting cadence, and tax bracket. See exactly what each vest is worth after withholding, where the tax-optimization windows sit, and how concentration changes over time."
              preview={{ value: "$84,200", label: "after-tax value of next vest" }}
              ctaLabel="Model your equity"
            />
          </AnimateOnScroll>

                    <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Why Selling at Vesting Makes Financial Sense
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              There are three concrete reasons to sell RSUs at vest:
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Concentration Risk Reduction.</strong> Most employees have the bulk of their liquid net worth tied to their employer&apos;s stock through RSUs, salary, and the 401(k) match. If your company represents 40 percent, 50 percent, or 60 percent of your investable assets, a company-specific downturn becomes a personal financial crisis. You are already making a bet on your employer by working there - your salary, bonus, and job security are all contingent on company performance. Your RSUs should not compound this risk. Diversification is not glamorous, but it is a core principle of risk management.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Tax Certainty at Vesting.</strong> When you sell RSUs on the vesting date, your cost basis is the fair market value on that date. You have zero short-term capital gains and zero tax liability on the sale itself. The only tax you owe is the ordinary income tax already withheld. By contrast, if you hold the shares, you are betting that future appreciation will be worth more than the additional taxes you will owe if you hold less than one year (short-term capital gains at ordinary income rates) or the concentration risk you are bearing while waiting for long-term capital gains treatment.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Rebalancing Into a Diversified Portfolio.</strong> The proceeds from selling RSUs at vesting allow you to rebalance into a diversified portfolio - total stock market index funds, bonds, real estate investment trusts, or other asset classes. This is the proper use of RSUs: not as a long-term hold in your employer&apos;s stock, but as a mechanism to transfer compensation into your broader investment strategy. A person with $200,000 in RSU compensation invested across a diversified portfolio has far more wealth stability and upside potential than someone with the same value concentrated in one company&apos;s stock.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              The Arguments for Holding - and Why They Fail
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The counterargument to selling at vesting typically comes from conviction in the company&apos;s long-term prospects. An employee might reason: "I work here because I believe in what we are building. Why would I sell immediately?" This reasoning conflates emotional conviction with risk management strategy.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Conviction is not diversification. You can believe deeply in your company&apos;s future while still recognizing that concentrated positions are a poor risk management approach. The best businesses sometimes face temporary or permanent setbacks. The market sometimes reprices entire sectors. Your employer&apos;s stock price can decline significantly even if the company continues to execute well, simply because the valuation multiple contracts. None of these scenarios are unlikely or speculative - they are normal market behavior.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Another holding argument is the prospect of long-term capital gains treatment. The logic goes: if I hold for one year, the appreciation after vesting will be taxed at 15 percent or 20 percent federal rates instead of my ordinary income rate, saving me 17 percent on that gain. This is mathematically true but strategically incomplete. You already paid ordinary income tax on the vested amount. You are now holding a concentrated position and bearing substantial risk in exchange for a 17 percent tax savings on future gains that may or may not materialize. A company that declines 20 percent has wiped out years of tax savings. The expected value of holding is negative when you account for concentration risk.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              The Tax Math on Selling vs. Holding
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Let us work through a concrete example. You receive 100 shares of your company valued at $1,000 per share ($100,000 total) that vest tomorrow. Your employer withholds 40 percent for taxes, leaving you with $60,000 in proceeds and 100 shares.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Scenario A: Sell at Vesting.</strong> You sell 100 shares at $1,000, receive $100,000, and your cost basis is $1,000. You have zero capital gain, zero additional tax liability. You invest $100,000 minus your withheld taxes (already paid) into a diversified portfolio. Assuming this was a $100,000 net gain to you after withholding is not materially different from your compensation - it becomes part of your diversified portfolio.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Scenario B: Hold and Sell After One Year.</strong> The stock appreciates to $1,200. You sell at $1,200, your cost basis is $1,000, and you have a $200 short-term or long-term capital gain depending on timing. If you hold exactly one year, this is a long-term capital gain, taxed at 15 percent federally - $30 in tax. You net $100,000 plus $170 gain after tax. This is $170 better than Scenario A, but you have borne 12 months of concentration risk to achieve it. What if the stock declines to $800 instead? You lose $20,000 in value and have borne substantial risk for a potential 17 percent tax optimization on gains that did not materialize.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The mathematics do not support holding. The only way holding makes sense is if you have high conviction the company will significantly outperform, which is a company-specific bet, not a diversified investment strategy.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              When Selling at Vesting Is Not Appropriate
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Selling RSUs at vesting is the right default for most employees. However, specific situations justify holding:
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Insider Selling Restrictions.</strong> Executives and officers are often subject to blackout periods and volume restrictions on selling company stock. If you are prohibited from selling due to securities law restrictions, holding is not a choice - it is a constraint. In these cases, focus on selling as soon as restrictions allow.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>10b5-1 Plans.</strong> Some executives use Rule 10b5-1 trading plans to systematically sell shares over time while complying with insider trading rules. This is a structured approach to selling, not a reason to hold indefinitely. The goal is still to eventually convert RSUs into diversified assets.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Tax-Loss Harvesting Opportunities.</strong> If you have substantial unrealized losses in other investments, you might hold RSU shares for a period to harvest losses elsewhere in your portfolio. This is rare and situational, and a tax professional should guide the specific timing.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              For the vast majority of employees without these constraints, selling at vesting is the appropriate decision.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Building Wealth Through Diversification, Not Conviction
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              RSUs are a form of compensation. They should be treated as such - converted to cash (through selling), taxed appropriately, and reinvested according to your overall financial plan. The fact that your employer granted them does not mean your employer&apos;s stock is a good investment for you.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Long-term wealth accumulation comes from consistent saving, diversification, and allowing compound returns to work over decades. An employee who sells RSUs at vesting, invests the proceeds in a diversified portfolio, and remains disciplined will accumulate far more wealth over a career than someone holding a concentrated position hoping for appreciation. This is not theoretical - it is the outcome of decades of market data showing that diversified portfolios outperform concentrated positions when accounting for risk.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The next time you receive RSU vesting notice, ask yourself a simple question: would I use my after-tax salary to buy this stock today? If the answer is no, sell at vesting. Conviction is not an investment strategy. Discipline is.
            </p>
          </AnimateOnScroll>

          <div className="mt-12 p-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute financial advice, tax advice, or a recommendation to buy or sell any security. RSU treatment, holding periods, and tax implications vary by individual circumstance, jurisdiction, and specific plan terms. Consult with a qualified financial advisor and tax professional before making decisions regarding your RSUs. Past performance does not guarantee future results. This article references 2026 tax rates and rules which may change.
            </p>
          </div>

          <div className="mt-12 text-center">
            <AnimateOnScroll>
              <p className="text-gray-700 mb-6">
                Let&apos;s discuss how to optimize your equity compensation and overall financial strategy.
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
            Have questions about your financial strategy?
          </p>
          <p className="text-gray-300 mt-2">
            We help high-earning professionals optimize their wealth.
          </p>
        </div>
      </section>
    </main>
  );
}
