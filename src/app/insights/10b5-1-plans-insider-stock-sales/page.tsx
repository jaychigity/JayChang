import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: '10b5-1 Plans: How Corporate Insiders Can Sell Stock Legally During Blackout Periods',
  description: 'A guide to SEC Rule 10b5-1 plans for corporate insiders - understand the 2023 amendments, cooling-off periods, and how to establish a trading plan.',
  alternates: {
    canonical: '/insights/10b5-1-plans-insider-stock-sales',
  },
};

export default function TenB5OnePlans() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '10b5-1 Plans: How Corporate Insiders Can Sell Stock Legally During Blackout Periods',
    description: 'A guide to SEC Rule 10b5-1 plans for corporate insiders and the 2023 amendments that changed the rules.',
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
              10b5-1 Plans: How Corporate Insiders Can Sell Stock Legally During Blackout Periods
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              SEC Rule 10b5-1 allows you to diversify your company stock systematically and legally, even during trading blackouts. Here&apos;s what changed in 2023 and how to use it.
            </p>
            <p className="text-gray-600">Published March 18, 2026</p>
          </div>
        </section>

        {/* Body Content */}
        <section className="w-full bg-white py-16 px-6 md:py-24">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <p className="text-gray-800 mb-6">
              You are an executive at a major semiconductor company. Your role gives you access to material non-public information (MNPI) about upcoming earnings, product delays, or acquisition rumors. During quarterly blackout windows, you cannot trade company stock. But your compensation is 70% equity. You have $8 million in company stock. You need to diversify. A 10b5-1 plan allows you to do exactly this, legally.
            </p>

            <p className="text-gray-800 mb-6">
              SEC Rule 10b5-1, adopted in 2000, provides an affirmative defense against insider trading liability for pre-set trading plans. The SEC overhauled the rule in 2023, adding restrictions intended to close loopholes. Understanding the current version is essential for any executive managing concentrated equity positions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Core Concept</h2>

            <p className="text-gray-800 mb-6">
              Under SEC Rule 10b5-1, an insider can establish a pre-planned trading schedule during an open trading window (outside blackout periods). Once established, the plan executes automatically according to preset parameters, regardless of whether blackout periods occur later or material information becomes available.
            </p>

            <p className="text-gray-800 mb-6">
              The logic: if the trade is scheduled before you know material non-public information, you are not trading on MNPI. The execution happens mechanically, without your decision in the moment. This removes the trading decision from your control and thus from the insider trading law.
            </p>

            <p className="text-gray-800 mb-6">
              Example: In January (an open window), you establish a 10b5-1 plan to sell 10,000 shares on March 1 at market price. In February, you learn that earnings will miss consensus by 20%. You cannot trade based on this knowledge. But your plan executes on March 1 as scheduled, selling 10,000 shares, even though you now possess MNPI. This is legal under Rule 10b5-1.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Changed in 2023</h2>

            <p className="text-gray-800 mb-6">
              The 2023 SEC amendments were intended to prevent executives from timing 10b5-1 plans strategically around non-public information. The key changes:
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Mandatory Cooling-Off Periods:</strong> Under the old rule, a plan could be established and take effect immediately. Now, there are mandatory delays:
            </p>

            <ul className="list-disc pl-8 text-gray-800 mb-6">
              <li>Officers and directors: 90-day cooling-off period before the plan can execute</li>
              <li>Other insiders (e.g., employees with MNPI access): 30-day cooling-off period</li>
            </ul>

            <p className="text-gray-800 mb-6">
              This cooling-off period is mandatory. You establish the plan in January, and the first trade cannot occur until at least April 1 (for officers/directors) or February 1 (for other insiders). If you establish a plan on January 15, the first trade date must be on or after April 15.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Certification Requirement:</strong> When you establish a plan, you must certify in writing that you are not aware of MNPI at the time of adoption. This is a formal requirement - you are signing off on this certification. If you later settle an insider trading investigation, the existence of this certification will be reviewed.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>One Single-Trade Plan Limit Per 12 Months:</strong> You can adopt multiple plans (e.g., a series of sales over time), but you can establish only one single-trade plan (a plan designed to execute once) every 12 months. If you adopt a plan to sell 50,000 shares on May 1, that counts as a single-trade plan. You cannot adopt another single-trade plan until May 1 the following year. However, you can adopt multiple plans that execute in tranches (e.g., sell 5,000 shares on the 1st of each month).
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Good Faith Requirement:</strong> The plan must be entered in good faith. You cannot establish a plan with the intent to evade blackout windows or time the markets. The good faith requirement is subjective but is monitored by the SEC and company insiders.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How a 10b5-1 Plan Works in Practice</h2>

            <p className="text-gray-800 mb-6">
              The mechanics are straightforward:
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Step 1 - Establish During an Open Window:</strong> Your company has an open trading window, usually the week after earnings are announced. You work with your company&apos;s Investor Relations team and your broker to establish a 10b5-1 plan.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Step 2 - Define Parameters:</strong> The plan specifies:
            </p>

            <ul className="list-disc pl-8 text-gray-800 mb-6">
              <li>Quantity: 10,000 shares</li>
              <li>Timing: Once per month on the 1st, for 12 months (12 tranches of 10,000)</li>
              <li>Price: Market price at execution (no minimum or maximum price specified)</li>
              <li>Broker: Your established brokerage</li>
            </ul>

            <p className="text-gray-800 mb-4">
              <strong>Step 3 - Wait the Cooling-Off Period:</strong> For officers/directors, you wait 90 days. The first trade cannot occur until 90 days after plan adoption.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Step 4 - Automatic Execution:</strong> On each scheduled date, the broker automatically sells the specified quantity at market price, regardless of blackout periods, MNPI, or your personal preferences.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Step 5 - Regulatory Reporting:</strong> All sales under the plan are reported as sales by an insider on Form 4 (SEC filing). The plan itself is disclosed to the SEC. Everything is public.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Use Cases for Executives</h2>

            <p className="text-gray-800 mb-6">
              <strong>Scenario 1: Quarterly Blackout Restrictions:</strong> Your company has two-week blackout windows after each quarter (waiting for earnings release). You want to sell 20,000 shares per quarter for diversification. With a 10b5-1 plan, you can schedule sales on day 15 of each quarter (after blackout ends), removing the need to time your sales around blackout calendars.
            </p>

            <p className="text-gray-800 mb-6">
              <strong>Scenario 2: Mining Executives and Commodity Cycles:</strong> A VP at Freeport-McMoRan earns $1.5 million in salary and $2 million in performance shares. The company operates in cyclical commodity markets where MNPI is nearly constant (production forecasts, reserve estimates, geopolitical events). Establishing a pre-set, automatic 10b5-1 plan removes the timing risk and allows the VP to diversify systematically regardless of the information environment.
            </p>

            <p className="text-gray-800 mb-6">
              <strong>Scenario 3: Tech Engineers with Large RSU Vests:</strong> An engineer at a major semiconductor company receives $500,000 in annual RSU vests. She is also involved in product development and knows about delays before they are public. A 10b5-1 plan allows her to sell vested shares automatically on a fixed schedule without worrying about MNPI.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Plan Modifications and Cooling-Off Resets</h2>

            <p className="text-gray-800 mb-6">
              If you want to modify an existing plan (change the quantity, timing, or price parameters), the modification triggers a new cooling-off period. This is intentional - the SEC wants to prevent executives from continuously tweaking plans to evade restrictions.
            </p>

            <p className="text-gray-800 mb-6">
              Example: You adopt a plan in January to sell 10,000 shares monthly. In March, you want to increase it to 15,000 shares. The modification resets the clock - the increased portion triggers a new 90-day cooling-off period from March (or 30 days, depending on your status). This discourages frequent plan adjustments.
            </p>

            <p className="text-gray-800 mb-6">
              Conversely, you can terminate a plan at any time without triggering cooling-off requirements for a new plan. If you establish a plan and then terminate it within the cooling-off period, you can adopt a different plan immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Risks and Limitations</h2>

            <p className="text-gray-800 mb-4">
              <strong>Market Risk:</strong> A 10b5-1 plan executes at market price on the scheduled date. If the stock has dropped significantly, you are selling at an inopportune price. You cannot modify the plan to change the price. This is intentional - the point is to remove trading discretion.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>SEC Scrutiny:</strong> If your plan is scheduled to begin just before a major announcement (earnings miss, scandal, executive departure), the SEC may scrutinize whether you had knowledge of MNPI at the time the plan was adopted. The timing may look suspicious even if it is coincidental. This is why the certification of "not aware of MNPI" matters.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Company Policy:</strong> Most public companies require pre-approval of 10b5-1 plans. You must work with Investor Relations or Legal. The company will verify that you are in compliance with blackout windows, have no pending material information, and meet any other company-specific policies.
            </p>

            <p className="text-gray-800 mb-4">
              <strong>Tax Withholding:</strong> When a 10b5-1 plan executes, the broker withholds taxes automatically (roughly 37% federal + state for net proceeds). You receive the net proceeds after withholding. Plan the cash flow accordingly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Coordination with Equity Strategy</h2>

            <p className="text-gray-800 mb-6">
              A 10b5-1 plan is a diversification tool, not an investing strategy. If you earn 70% of your compensation in company stock, a 10b5-1 plan should be part of your overall approach to reducing concentration. The plan might cover 25% to 40% of your annual equity grants, allowing you to systematically move those proceeds into diversified investments.
            </p>

            <p className="text-gray-800 mb-6">
              Example: you receive $3 million in annual RSU vests. You establish a 10b5-1 plan to sell $1 million of vested shares each quarter (scheduled sales). Proceed immediately into diversified index funds or your personal investment account. The other $2 million, you hold as long-term company stock, preserving some upside participation while limiting concentration risk.
            </p>

            <p className="text-gray-800 mb-6">
              This balanced approach - maintaining meaningful company stock ownership while systematically diversifying a portion - is typical for executives who understand both the benefits and risks of concentration.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Bottom Line</h2>

            <p className="text-gray-800 mb-6">
              If you are an executive with significant company stock holdings, meaningful access to MNPI, or regular blackout windows, a 10b5-1 plan is essential infrastructure. The plan allows you to diversify methodically without the legal risk of insider trading or the market-timing burden of trying to trade around blackout windows.
            </p>

            <p className="text-gray-800 mb-6">
              The 2023 amendments tightened the rules and increased oversight, but they did not eliminate the tool. A properly structured 10b5-1 plan remains the standard mechanism for insiders to manage concentrated equity positions.
            </p>

            <p className="text-gray-800 mb-6">
              Before establishing a plan, work closely with your company&apos;s Investor Relations or Legal department. Ensure your broker is experienced with 10b5-1 arrangements. Coordinate with your personal tax advisor to understand the withholding and long-term tax consequences. The plan is legal and straightforward, but the execution requires attention to detail and company coordination.
            </p>

            <div className="border-t border-gray-300 pt-8 mt-12">
              <p className="text-sm text-gray-600 mb-4">
                <strong>Disclaimer:</strong> This article is for educational purposes only and does not constitute legal or financial advice. SEC Rule 10b5-1 is complex and subject to change. Company-specific policies regarding 10b5-1 plans vary significantly. Before establishing or modifying a 10b5-1 plan, consult with your company&apos;s Legal or Investor Relations department, your personal securities counsel, and your tax advisor. Individual circumstances, insider status, and regulatory requirements vary significantly.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <AnimateOnScroll>
            <section className="bg-[#333333] text-white rounded-lg p-12 mt-16 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Build Your Executive Equity Plan</h3>
              <p className="mb-6 text-gray-100">
                A 10b5-1 plan is one piece of your broader executive compensation strategy. Let&apos;s discuss how to integrate it with your overall financial plan.
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
