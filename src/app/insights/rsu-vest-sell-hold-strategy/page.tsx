import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'RSUs Vest Next Month. Here is What to Do Before, During, and After.',
  description: `RSU vesting triggers an immediate tax obligation - even if you don't sell. Learn how to estimate tax impact, coordinate withholding, and decide whether to hold or sell your vested shares.`,
  alternates: {
    canonical: 'https://www.PWM-Farther.com/insights/rsu-vest-sell-hold-strategy',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'RSUs Vest Next Month. Here is What to Do Before, During, and After.',
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

export default function RSUVestStrategyPage() {
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
              RSUs Vest Next Month. Here is What to Do Before, During, and After.
            </h1>
          </AnimateOnScroll>
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-[#5b6a71]">
            <span className="text-lg">March 18, 2026</span>
            <span className="text-lg">12 min read</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">

          <AnimateOnScroll>
            <p className="text-[#5b6a71] text-xl leading-relaxed mb-8">
              RSU vesting is not a future event. It is a taxable event that happens on your vest date, regardless of whether you sell the shares. On the date your RSUs vest, you owe federal income tax, state income tax, Social Security tax, and Medicare tax on the fair market value of the shares at vesting. That obligation exists immediately. What you do with the shares afterward matters less for the tax calculation than what you prepare before the vest date arrives.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">Why Vesting is a Taxable Event</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              The IRS treats RSU vesting as ordinary compensation under IRC Section 83. When your shares vest, you have received income. The value of that income is the fair market value of the shares on the vest date. That income is subject to ordinary income tax rates, which for high earners in 2026 are 35% or 37% depending on your total income and filing status.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              This is not optional. You cannot "elect" to pay tax only when you sell. The tax is due on the vest date. Whether you sell the shares immediately, hold them for five years, or keep them forever, the tax obligation is incurred at vesting. The only variable is timing: you can influence when vesting occurs through equity grant structuring, but you cannot eliminate the tax.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              For someone earning $250,000 in base salary with an $80,000 RSU vest in a single year, this distinction is crucial. The $80,000 vest is ordinary income taxed at your marginal rate. If your total income reaches the 32% federal bracket (which it easily does at $250K base plus $80K RSU), plus state income tax, you are looking at a total tax obligation of approximately $30,000 to $35,000 on that vest. This is not something to discover after the shares vest. This needs to be anticipated before.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">The Withholding Gap Problem</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Your employer withholds tax from your RSU vest. Most companies use the "net settlement" method: they calculate the estimated tax owed, withhold it from your grant, and deliver the remaining shares to you. The withholding rate used is typically 22% for supplemental income (the IRS default rate for bonus-like payments under IRC Section 3401(g)).
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Here is the problem: 22% withholding is not your actual tax rate. For someone with $250,000 in base income and an $80,000 RSU vest, your marginal federal tax rate is 32%. Add state income tax (8.8% in California, for example), and you are at roughly 40.8% combined marginal rate. But your employer withheld 22%.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              This creates a withholding gap of 18.8 percentage points on the $80,000 vest. The dollar amount is $15,040 of federal and state tax owed but not withheld. You are now sitting on a tax liability that will be due when you file your return the following April, or, more prudently, through estimated quarterly tax payments under IRC Section 6654.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              The withholding gap is largest for high earners because you are in the 35-37% federal bracket, not the 22% supplemental withholding bracket. The gap is smaller if your income is lower or if you have multiple vest dates throughout the year (which spreads the withholding across more frequent events). But the gap almost always exists for six-figure earners with meaningful RSU grants.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">What to Do Before the Vest Date</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Start by estimating your tax obligation. Pull your current year W-2 or recent pay stub and determine your year-to-date income. Add the value of your RSU vest (the number of shares times the vest date stock price, once known). Calculate your expected total income for the year. Use the 2026 tax brackets to identify your marginal federal rate and your state rate. Multiply the RSU value by this combined rate to get your realistic tax obligation.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              For the $250K earner with $80K RSU vest, the math is straightforward: $80,000 times 40.8% (32% federal plus 8.8% state) equals $32,640 in total tax. Your employer will withhold roughly $17,600 (22% of $80K). Your gap is $15,040.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Next, assess how you will cover the withholding gap. You have three options. First, you can set up an estimated tax payment for the quarter when you will receive the vest. This is the most straightforward approach. File Form 1040-ES and pay the estimated tax on the date your shares vest or very shortly afterward. This prevents underpayment penalties under IRC Section 6655.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Second, you can increase your W-4 withholding on your salary. Ask your payroll department to increase federal (or state) income tax withholding effective immediately. Increase your per-paycheck withholding by roughly $1,255 per paycheck (assuming biweekly pay) for the remainder of the year. This is less elegant than estimated payments but avoids the administrative burden of filing Form 1040-ES.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Third, you can sell shares from your RSU grant immediately upon vest and hold enough cash to cover the tax. If your RSU grant vests 500 shares at $160 per share, your gross receipt is $80,000. After withholding, you receive $62,400 in shares. You sell the entire position and hold the $62,400 in cash. You then pay the $15,040 shortfall from checking, leaving you with approximately $47,360 in proceeds. This is the simplest for tax purposes but requires you to forgo any price appreciation on the vested shares.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Choose one approach and execute it before the vest date. Do not wait until April to address the withholding gap. The longer you wait, the more likely you are to miss estimated payment deadlines or be forced into a high-pressure decision on vest day.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">The Vesting Day Itself: Common Mistakes</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              On the day your RSUs vest, your brokerage will show the transaction and the withholding. You will see something like "RSU Vest: 500 shares, fair market value $80,000, withholding $17,600, net settlement 382 shares." This is when people make costly errors.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Mistake one: selling immediately and then being surprised by the tax bill. You assume the withholding is "the tax." You sell 382 shares and pocket the $61,120 or so. Then in April, you file your return and discover you owe an additional $15,000. You were not prepared for this. Now you either pay it late (with penalties and interest) or scramble to find cash from other sources. This is avoidable with the pre-vest planning described above.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Mistake two: assuming the vesting is not a taxable event because you did not sell. Some employees think RSU taxation happens only when they sell the shares. They hold the 382 shares in their brokerage account and expect no tax on the vest date itself. This is incorrect. The tax is due on the vest date. Your employer already withheld tax on your behalf. But your full tax liability was incurred at vesting, not at sale.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Mistake three: not tracking cost basis correctly. When you receive 382 shares via net settlement RSU vesting, your cost basis is the fair market value on the vest date (the date those 382 shares were issued to you). If the stock price was $160 on vest day, your cost basis is $160 per share, or $61,120 total. If the stock price later rises to $200, and you sell, your gain is only $20 per share on the 382 shares, or $7,640 in long-term capital gains (if held for more than one year from vest date). Your cost basis is not zero. This matters for tax-loss harvesting and for your overall capital gains calculations.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Avoid these mistakes by having a clear plan before vest day. You should know exactly what tax is owed, how you will cover it, and whether you intend to sell or hold the vested shares.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">Post-Vest: Sell Immediately, Hold, or Hybrid?</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Once your RSUs have vested, you face a decision: sell the shares immediately, hold them, or do something in between. This decision is separate from the tax obligation, which is already incurred. This decision is about your investment strategy and concentration risk.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              The case for selling immediately is straightforward. You have just received $80,000 in compensation, all in a single stock (your employer's stock). You already have employment risk concentrated in this company. You work for them, receive salary from them, and possibly receive future RSU grants from them. Taking additional investment risk in the same company is imprudent diversification. Sell the shares, pay the withholding gap tax, and redeploy the remainder into diversified investments. This minimizes concentration risk.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              The case for holding is more emotional than financial. You believe the company is undervalued. You expect strong growth. You want to "let your money work." These are plausible beliefs, but they are beliefs, not facts. The risk is that you are holding a concentrated position in your employer's stock, hoping for gains to offset the risks. This is speculative, not prudent wealth management.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              A better framework is the concentration risk threshold. You should hold your company stock in a mix of accounts (401k, vested RSUs, ESPP, personal brokerage) such that your total employer company stock does not exceed 10-15% of your liquid net worth. For someone with $500,000 in liquid net worth, this means limiting total company stock to $50,000-$75,000. For someone with $1,000,000, the threshold is $100,000-$150,000.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              If you are below this threshold, consider holding the vested RSUs. If you are above it, sell. If you are close, sell enough to get below the threshold and hold the remainder.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Use specific lot identification when you sell. In your brokerage account, designate exactly which 382 shares you are selling. Sell the shares with the highest cost basis first. This maximizes your loss if you are underwater, or minimizes your gain if the stock has appreciated. This is allowed under IRC Section 1012 and significantly reduces your capital gains tax.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">Coordination With Tax-Loss Harvesting and ESPP</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              If you are selling vested RSUs and simultaneously doing tax-loss harvesting elsewhere in your portfolio (to offset the short-term gains), be mindful of wash sale rules under IRC Section 1091. A wash sale occurs if you sell a security at a loss and repurchase a substantially identical security within 30 days before or after the sale.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              The risk is selling, say, 100 shares of your employer's stock at a loss, and then immediately repurchasing the same stock (or RSUs with the same employer) within 30 days. The loss is disallowed. The most common scenario: you sell vested RSUs in January and then repurchase the same company's stock via ESPP in February. If you had a loss on the RSU sale, part of that loss may be disallowed.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Avoid this by timing your RSU sales and ESPP purchases with at least 30 days separation. Or, if you plan to hold both RSUs and ESPP shares, do not sell the RSUs. Keep them, and let your ESPP purchases be separate. The goal is to avoid triggering wash sale rules that will offset your tax benefits.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              If you hold both vested RSUs and ESPP shares, also consider the concentration risk of both combined. A $250K earner might have $80,000 in vested RSUs and another $12,000-$15,000 in accumulated ESPP shares (assuming 15% of eligible pay and a few years of contributions). Combined, this could be $95,000-$100,000 in a single stock, which is 10-15% of a $700,000 liquid net worth. This is at the threshold. Be deliberate about not letting this concentration creep higher.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#333333] mt-12 mb-6">Coordinating Multiple Vests in the Same Year</h2>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              If you have multiple RSU vests in a single year, the withholding gap can compound. Suppose you have RSU vests of $80,000 in March, June, September, and December. Your total year income is $250,000 base plus $320,000 in RSUs equals $570,000. Your marginal rate is 37% federal plus state, or roughly 45-46% depending on your state.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              Each vest will have supplemental withholding of roughly 22%, or about $17,600 per quarter. Your actual tax on $80,000 is 45-46%, or roughly $36,000-$37,000 per quarter. Your gap per vest is about $18,000-$19,000. Across four vests, your total withholding gap is roughly $72,000-$76,000.
            </p>
            <p className="text-[#5b6a71] leading-relaxed mb-6">
              This is significant. You need a proactive tax payment strategy. Set up quarterly estimated tax payments. Or dramatically increase your W-4 withholding for the entire year. Or structure your sales so that you hold enough cash to cover the gap throughout the year. Do not leave this to chance. The IRS will assess penalties under IRC Section 6655 if your quarterly payments do not meet the safe harbor (either 90% of current year tax or 100% of prior year tax, or 110% of prior year if AGI exceeded $150,000).
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="mt-16 p-8 bg-[#F7F4EE] rounded-lg">
              <p className="text-[#333333] text-lg mb-6">
                RSU taxation is not complicated, but it requires deliberate planning. Know your tax obligation, cover the withholding gap before vest day, and make a thoughtful decision about whether to hold or sell. This prevents costly surprises in April.
              </p>
              <Button href="/schedule-consultation" variant="primary">
                Schedule a Free Review
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="mt-12 text-[#5b6a71] text-sm leading-relaxed border-t-2 border-[#F7F4EE] pt-8">
              <p className="mb-4">
                <strong>Disclaimer:</strong> This article is educational and does not constitute tax advice, investment advice, or a recommendation to buy or sell any security. RSU taxation rules are complex and depend on your individual circumstances, employer plan documents, and state tax status. Tax withholding rates and brackets are subject to change. Consult a qualified tax professional or financial advisor before making decisions regarding RSU vesting, sales, or tax planning. The examples provided are illustrative and do not reflect all possible scenarios. Any calculations herein are approximations and may not reflect your exact tax liability.
              </p>
            </div>
          </AnimateOnScroll>

        </div>
      </section>
    </>
  );
}
