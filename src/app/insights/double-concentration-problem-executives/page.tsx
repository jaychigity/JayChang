import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'The Double Concentration Problem: When Your Job and Your Portfolio Depend on the Same Company',
  description: 'Understand the hidden risk of having both your income and investment portfolio concentrated in a single company, and how to fix it.',
  alternates: {
    canonical: '/insights/double-concentration-problem-executives',
  },
};

export default function DoubleConcentrationProblem() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Double Concentration Problem: When Your Job and Your Portfolio Depend on the Same Company',
    description: 'Understand the hidden risk of having both your income and investment portfolio concentrated in a single company.',
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
              The Double Concentration Problem: When Your Job and Your Portfolio Depend on the Same Company
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Most executives have two forms of capital tied to the same company. When that company struggles, everything falls apart simultaneously.
            </p>
            <p className="text-gray-600">Published March 18, 2026</p>
          </div>
        </section>

        {/* Body Content */}
        <section className="w-full bg-white py-16 px-6 md:py-24">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <p className="text-gray-800 mb-6">
              You are a Vice President at Freeport-McMoRan, one of the world&apos;s largest copper miners. Your annual salary is $500,000. Your bonus is typically $400,000 to $600,000, tied directly to copper prices and mine production. Your long-term incentives are another $600,000 to $1 million annually, vested in restricted stock units of FCX.
            </p>

            <p className="text-gray-800 mb-6">
              Your personal balance sheet, excluding real estate, looks like this:
            </p>

            <ul className="list-disc pl-8 text-gray-800 mb-6">
              <li>Vested and unvested RSUs: $2.8 million (80% FCX)</li>
              <li>401(k) balance: $900,000 (30% FCX, 70% diversified)</li>
              <li>Deferred compensation account: $1.5 million (notional, credited in company stock)</li>
              <li>Cash and savings: $300,000</li>
            </ul>

            <p className="text-gray-800 mb-6">
              Total investable assets: $5.5 million. Of this, roughly $4.5 million is tied directly or indirectly to FCX performance. Your human capital - your job, your income stream - is entirely tied to FCX.
            </p>

            <p className="text-gray-800 mb-6">
              Now assume copper prices collapse from $4.00 per pound to $2.50 per pound, as they did in 2015-2016. Within three months:
            </p>

            <ul className="list-disc pl-8 text-gray-800 mb-6">
              <li>Your bonus evaporates (copper-linked, down 40%)</li>
              <li>Your RSU holdings lose 45% of value ($2.8M to $1.5M)</li>
              <li>Your deferred comp account (notional in company stock) loses 45%</li>
              <li>Layoff warnings emerge as the company cuts costs</li>
              <li>Your job is suddenly at risk</li>
            </ul>

            <p className="text-gray-800 mb-6">
              In a single market move, your financial security - both income and savings - has deteriorated simultaneously. Your portfolio lost $2 million. Your bonus disappeared. Your career is uncertain. This is the double concentration problem. And it is far more common than executives realize.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Two Forms of Capital at Risk</h2>

            <p className="text-gray-800 mb-6">
              Every person has two forms of capital: human capital and financial capital.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Human Capital:</strong> Your ability to earn income through work. For an executive, this is your salary, bonus, and long-term incentives based on employment. Your human capital depends on your company staying solvent, your industry remaining viable, and your employment remaining secure.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Financial Capital:</strong> Your accumulated savings and investments. For most executives, financial capital is heavily weighted toward company stock - RSUs, restricted stock awards, 401(k) holdings, and deferred compensation plans credited in company stock.
            </p>

            <p className="text-gray-800 mb-6">
              The problem arises when both forms of capital depend on the same single variable. If you earn $1.5 million annually from a mining company and 80% of your investments are in that mining company, your entire financial life depends on the price of copper. When copper falls, both your income and savings fall simultaneously.
            </p>

            <p className="text-gray-800 mb-6">
              Contrast this to a diversified salaried employee earning $150,000 at a tech company. If the tech industry faces a downturn, the employee&apos;s job may be at risk (human capital loss), but the employee&apos;s investment portfolio is diversified across many companies, not just the employer. The employee faces risk, but not synchronized, total risk.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Executives Create This Problem</h2>

            <p className="text-gray-800 mb-6">
              The double concentration problem exists because of how executive compensation is structured. Companies pay executives partly in cash (salary and bonus), partly in equity (RSUs, restricted stock, performance shares). The equity creates alignment - executives are incentivized to create shareholder value because their own wealth depends on it.
            </p>

            <p className="text-gray-800 mb-6">
              This alignment is real and valuable. An executive with significant company stock ownership is more motivated to make good decisions than one who has no equity stake. The tradeoff is concentration risk.
            </p>

            <p className="text-gray-800 mb-6">
              Additionally, executives often believe deeply in their company. You joined Freeport-McMoRan because you saw opportunity in the copper market, believed in the leadership team, or saw operational upside. That belief is warranted. It is also dangerous when it extends into personal financial decision-making. Belief in a company&apos;s mission is appropriate. Concentrating 82% of your family&apos;s wealth in that company is not.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Mathematical Cost of Concentration</h2>

            <p className="text-gray-800 mb-6">
              Consider two executives earning $1.5 million annually from the same company over 20 years. Both invest 30% of after-tax income (roughly $675,000 annually after taxes). One diversifies immediately upon receipt. One holds 80% in company stock.
            </p>

            <p className="text-gray-800 mb-6">
              The diversified executive accumulates assets at 7% average annual return (lower due to tax drag in taxable accounts, but compensated by long-term capital gains rates). Over 20 years: roughly $21 million.
            </p>

            <p className="text-gray-800 mb-6">
              The concentrated executive holds 80% in company stock, 20% diversified. The company experiences a 45% drawdown twice during the 20 years (a realistic scenario for a cyclical commodity company). The concentrated portfolio loses roughly $4 million per incident (40% of $10 million). Additionally, the drag from holding concentrated positions (lack of tax-loss harvesting opportunities, concentration-driven volatility, higher tax drag on concentrated sales) reduces returns by roughly 1% annually.
            </p>

            <p className="text-gray-800 mb-6">
              The concentrated executive accumulates roughly $17 million over 20 years - $4 million less than the diversified peer. And this does not account for the psychological and career stress during the two downturns.
            </p>

            <p className="text-gray-800 mb-6">
              The math is simple: concentration in a single company, even a large profitable one, creates drag on long-term wealth accumulation and increases psychological burden.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Solution Is Not to Leave Your Job</h2>

            <p className="text-gray-800 mb-6">
              The obvious (but incorrect) solution to double concentration is to quit your job and work somewhere else. This is the wrong answer. You joined your company because it was a good career opportunity. The solution is not to flee the opportunity - it is to properly manage the financial risk while you remain there.
            </p>

            <p className="text-gray-800 mb-6">
              The solution is to build a personal balance sheet that moves independently from your company.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Manage Double Concentration</h2>

            <p className="text-gray-800 mb-4">
              <strong>1. Systematic RSU Selling:</strong> When RSUs vest, sell them immediately and reinvest the proceeds in diversified index funds. Do not wait for stock price appreciation. Do not hold for tax reasons. Sell immediately upon vesting. This removes the emotional decision from the equation. Set up a system with your broker - as RSUs vest, automatically sell and reinvest the proceeds within 48 hours.
            </p>

            <p className="text-gray-800 mb-4">
              For a Freeport-McMoRan VP receiving $1 million annually in RSU vests, systematic immediate selling means $1 million per year is automatically moved out of FCX and into diversified holdings. Over 10 years, even if FCX stock performs well, you will have systematically diversified $10 million of your wealth.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>2. Diversified Investment Portfolio:</strong> Once you receive the proceeds from RSU sales (or other compensation), invest in a diversified portfolio. Low-cost index funds - total US stock market funds, international stock funds, bond funds - provide broad exposure and low expense ratios. Avoid trying to pick stocks. Avoid concentrated sector bets. Diversification is the antidote to concentration risk.
            </p>

            <p className="text-gray-800 mb-4">
              The portfolio should be rebalanced quarterly or semi-annually to maintain target allocations (e.g., 60% stocks, 40% bonds for a mid-career executive). Rebalancing forces you to "sell high" (in outperforming positions) and "buy low" (in underperforming positions). This is disciplined and mechanical - the opposite of emotion-driven trading.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>3. Real Estate and Alternative Investments:</strong> Real estate and alternative investments (private equity, hedge funds, private credit) provide non-correlated returns to public stock markets. If you own a vacation home or rental property, this diversifies away from company stock. If you have access to private investment opportunities (early-stage startups, private real estate funds), allocating 5% to 15% of your portfolio to alternative assets reduces single-company risk.
            </p>

            <p className="text-gray-800 mb-4">
              The key is non-correlation. During the 2015-2016 commodity collapse, commodity stocks collapsed but tech stocks and real estate appreciated. A portfolio with exposure to multiple asset classes would have buffered the loss.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>4. Adequate Cash Reserves:</strong> Executives should maintain 12 to 24 months of living expenses in cash or cash equivalents. This serves multiple purposes: it is available if you are laid off (income continuity during job search), it is available if you need liquidity (avoiding forced selling of investments), and it removes the pressure to hold company stock for "upside" because you have other liquid assets.
            </p>

            <p className="text-gray-800 mb-4">
              For a VP at Freeport-McMoRan earning $1.5 million annually with a family spending $200,000 per year, 12 months of cash reserves is $200,000. This is modest. 24 months is $400,000. Both are defensible. Having this cushion reduces the psychological pressure to "hope" your company stock recovers.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>5. Understand Your Deferred Compensation Risk:</strong> Many executives have significant deferred compensation accounts (nonqualified deferred comp plans, restricted stock awards with multi-year vesting, etc.). These accounts are often credited in or paid in company stock. Understand the credit risk - if your company goes bankrupt, deferred comp may not be paid in full.
            </p>

            <p className="text-gray-800 mb-6">
              A VP at Intel with $2 million in deferred compensation in 2023 faced this risk when Intel&apos;s stock collapsed 55% from its peak and the company announced significant workforce reductions. The deferred comp was notionally credited in Intel stock. As the stock fell, so did the value of deferred benefits. Additionally, if Intel&apos;s creditworthiness deteriorated significantly, there was risk that deferred comp could be reduced or delayed upon separation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Behavioral Challenge</h2>

            <p className="text-gray-800 mb-6">
              The biggest obstacle to managing double concentration is psychological. You work at a company you believe in. You see opportunities. You know the business better than anyone outside the company. You believe the stock is undervalued. You want to hold company stock because "it will outperform."
            </p>

            <p className="text-gray-800 mb-6">
              These beliefs may be correct. The company may outperform. But that is not the point. The point is that your job, your bonus, your career - your human capital - is already fully exposed to the company. You do not need your investment portfolio exposed as well.
            </p>

            <p className="text-gray-800 mb-6">
              The correct mental model: your human capital is a large, non-diversifiable position in your company. Your financial capital is your only tool for diversification. Use it. Sell RSUs immediately. Diversify proceeds. Build a portfolio that is uncorrelated to your company. This is not doubting your company. This is protecting your family.
            </p>

            <p className="text-gray-800 mb-6">
              A VP at Freeport-McMoRan who believes copper is heading to $5 per pound does not need to also hold 80% of personal wealth in FCX stock. The belief in copper is already expressed through your career. Keep your career. Diversify your wealth.
            </p>

            <div className="border-t border-gray-300 pt-8 mt-12">
              <p className="text-sm text-gray-600 mb-4">
                <strong>Disclaimer:</strong> This article is for educational purposes only and does not constitute financial or investment advice. Individual circumstances, risk tolerances, time horizons, and company situations vary significantly. Consult with a qualified financial advisor before making decisions about equity diversification, deferred compensation strategy, or personal investment allocation. Tax consequences of selling company stock may be significant and should be reviewed with a tax professional.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <AnimateOnScroll>
            <section className="bg-[#333333] text-white rounded-lg p-12 mt-16 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Reduce Your Concentration Risk</h3>
              <p className="mb-6 text-gray-100">
                A comprehensive analysis of your human and financial capital can help you build a more resilient balance sheet. Let&apos;s map out a diversification strategy.
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
