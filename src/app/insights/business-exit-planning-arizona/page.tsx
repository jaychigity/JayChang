import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';
import ArticleByline from '@/components/ArticleByline';
import CalculatorPreviewCard from '@/components/CalculatorPreviewCard';

export const metadata: Metadata = {
  title: 'Business Exit Planning for Arizona Owners: Start Planning 3-5 Years Before You Sell',
  description: 'Strategic business exit planning framework, including QSBS planning, tax optimization, and timing considerations for Arizona business owners.',
  alternates: {
    canonical: '/insights/business-exit-planning-arizona'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Business Exit Planning for Arizona Owners: Start Planning 3-5 Years Before You Sell',
  description: 'Strategic business exit planning framework for Arizona owners, including tax optimization and timing.',
  author: {
    '@type': 'Person',
    name: 'Jay Chang'
  },
  datePublished: '2026-03-18'
};

export default function BusinessExitPlanningArticle() {
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
              Business Exit Planning for Arizona Owners
            </h1>
            <p className="text-2xl text-gray-800 mb-4">
              Start Planning 3 - 5 Years Before You Sell
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
              The Three-Year Window: Why Timing Matters
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Most Arizona business owners think about selling their business 6-12 months before they actually want to exit. They begin the process with minimal preparation and leave millions of dollars in potential value on the table. The optimal planning window is 3-5 years before you intend to sell.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Why does this lead time matter? Because buyers pay multiples of EBITDA - the earnings of your business - and even small improvements to EBITDA over 3 years can add millions to the sale price. A business generating $1 million in annual EBITDA selling at a 6x multiple is worth $6 million. If you improve EBITDA to $1.2 million (a 20 percent improvement), the same 6x multiple values the business at $7.2 million. That $200,000 annual increase in EBITDA results in a $1.2 million increase in sale price - all from better operations, not from market timing.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Additionally, tax structure decisions, entity type selection, and timing of value transfers to family members all require years to implement properly. A decision made months before sale has no time to settle or to be refined if circumstances change.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Four Reasons 3 - 5 Year Planning Windows Maximize Value
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Reason 1: Business Valuation Optimization.</strong> Buyers do not pay for potential or upside - they pay for demonstrated, repeatable, documented revenue and profit. If your business has grown 3 percent annually over the last 3 years, a buyer perceives modest growth. If it has grown 15 percent annually, your multiple might increase from 5x EBITDA to 7x or 8x EBITDA, depending on industry. A 3-5 year planning horizon gives you time to optimize operations, eliminate cost inefficiencies, improve gross margin, and demonstrate growth trajectory.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Real example: An Arizona software services company with $2 million in annual revenue and $400,000 EBITDA. The business is operationally inefficient with 30 percent overhead. Over 3 years, management reduces overhead to 20 percent through process improvement and automation, while maintaining $2.5 million in revenue. EBITDA increases to $700,000 - a 75 percent increase. At an industry-standard 5x multiple, this improvement adds $1.5 million to the sale price.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Reason 2: Tax Structure Planning.</strong> The difference between a C-corporation sale and an S-corporation sale is dramatic for tax purposes. An S-corp election requires holding the election for 5 years before sale to avoid paying the "built-in gains tax" on the appreciation that occurred while the company was a C-corp. If you want S-corp treatment at sale, that decision must be made 5 years before you sell.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Similarly, whether you structure the sale as a stock sale (buyer purchases your company shares) or an asset sale (buyer purchases assets, you receive the proceeds) has significant tax implications. An asset sale results in double taxation - the company pays tax on gains, then you pay capital gains tax on what you receive. A stock sale only results in one layer of tax. Arizona does not conform to federal law on certain tax treatments, so state tax planning is critical. These decisions require time to model and implement.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Reason 3: Estate Planning and Family Transfers.</strong> If you intend to transfer part of the business to family members or employees before sale, that must be done years in advance. The IRS scrutinizes transactions that appear designed solely to reduce estate taxes. A valuation discount (discounted gift value) for minority interests or lack of control is more defensible if transfers are made years before sale and the transferees have actual involvement in the business.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Additionally, transfers made during life are subject to gift tax only to the extent they exceed your annual gift tax exclusion ($18,000 per recipient for 2026) and your lifetime exemption ($13.99 million for 2026). Making transfers over multiple years allows you to gift $18,000 per recipient per year without using exemption. A business owner transferring $500,000 in value to family members over 5 years can do so without incurring gift tax or using exemption, whereas a lump-sum transfer immediately before sale would.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Reason 4: Buyer Readiness and Documentation.</strong> Buyers perform extensive due diligence. They want to see 3 years of clean tax returns, consistent documentation of contracts and customer relationships, clear ownership of intellectual property, and evidence that the business does not depend entirely on the founder. A business where the owner personally handles all major decisions, maintains customer relationships, and manages finances is worth far less than a business with documented processes, documented customer agreements, and a management team capable of running the business without the founder.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Starting 3 years before sale, begin documenting processes, formalizing customer agreements, and delegating responsibilities to a management team. When the buyer arrives, they should see a business with established operations, not a one-person show.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <CalculatorPreviewCard
              slug="business-exit-planning-calculator"
              eyebrow="ASSESSMENT · EXIT READINESS"
              title="Business Exit Readiness Scorecard"
              description="Get a readiness score across operations, tax, legal, and financial categories. Returns a 90-day priority list and a dollar-impact estimate of the decisions sitting in front of you right now."
              preview={{ value: "73 / 100", label: "exit readiness score" }}
              ctaLabel="Score your exit readiness"
            />
          </AnimateOnScroll>

                    <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Tax at Sale: Stock vs. Asset Sale Matters
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              In a stock sale, you sell your company shares to a buyer. The buyer receives your company with all of its assets and liabilities. You pay capital gains tax on the difference between your cost basis and the sale price, plus any state tax. This is a single layer of tax.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              In an asset sale, the buyer purchases the company&apos;s assets directly from you. The company (or LLC) receives the sale proceeds, the company pays federal and state tax on any gains realized on the assets, and then the company distributes the after-tax proceeds to you. You then pay capital gains tax on the distribution to yourself as the owner. This is double taxation.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Most buyers prefer asset sales because they can step up the basis in the assets purchased (getting a fresh start for depreciation purposes). Most sellers prefer stock sales to avoid double taxation. The sale agreement will specify which approach is used, and tax planning should influence this negotiation.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Qualified Small Business Stock (QSBS) and Arizona Conformity Issues
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Federal law provides for exclusion of up to $10 million (or 10 times your original basis, whichever is lower) in gains on qualified small business stock held for more than 5 years. This is IRC Section 1202 - the QSBS exclusion. If you founded an Arizona C-corporation, held it for more than 5 years, and it qualified as a small business under the federal definition, you could exclude millions of dollars of federal capital gains tax on sale.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Arizona does not conform to federal law on the QSBS exclusion. Arizona taxes the gain that would be excluded for federal purposes. So a $5 million federal QSBS exclusion still results in $5 million in Arizona state capital gains tax. This is a significant gap between federal and state treatment.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Plan accordingly: the QSBS exclusion reduces your federal tax bill significantly, but Arizona will still tax that gain at the state level. A business owner selling a QSBS-qualifying business for $10 million in gain could exclude $10 million federally (no federal tax) but still owe $580,000 in Arizona tax on that gain (at Arizona&apos;s 4.8 percent capital gains tax rate).
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Installment Sales and Spread-Out Taxation
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              You do not need to receive all sale proceeds immediately. An installment sale allows you to receive the purchase price over multiple years, reporting gain over those years. This spreads your capital gains tax liability across multiple years, which can be advantageous if you want to manage income for tax bracket purposes, Medicare premium calculations, or state tax planning.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Example: You sell your business for $10 million, of which $4 million is taxable gain. Receiving all $4 million in one year results in substantial tax. A seller-financed installment sale where the buyer pays you $2 million annually for 5 years allows you to report $800,000 in gain each year instead of $4 million in a single year.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This approach requires the buyer to agree to financing (not all buyers will), and it creates credit risk - you are financing the buyer&apos;s purchase. But it provides tax flexibility.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Charitable Strategies and Donor-Advised Funds
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              A Charitable Remainder Trust (CRT) allows you to contribute your business interest to the trust before sale, take an income stream from the trust for life, and avoid immediate capital gains tax on the sale. The sale inside the trust is not a taxable event. You receive an income stream, the remainder goes to charity or your heirs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This is complex and requires careful planning with a specialized attorney, but for business owners who have charitable intent, a CRT can defer capital gains tax while generating income during retirement.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Alternatively, a donor-advised fund (DAF) allows you to donate appreciated shares directly to the DAF, take an immediate charitable deduction, and then the DAF sells the shares without paying capital gains tax. You retain advisory rights over how the DAF distributes to charities. This works only if you have charitable intent, but it converts concentrated stock into charitable tax deductions efficiently.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Start Now, Even if Sale Is Years Away
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              If you anticipate selling your business within the next 5-7 years, begin exit planning today. Meet with a business valuation specialist to understand where your business stands and what improvements would increase value. Meet with a tax attorney and CPA specializing in business sales to understand your tax structure options. Meet with an M&A advisor to understand likely buyer profiles and market timing.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The difference between reactive planning (beginning months before sale) and proactive planning (beginning 3-5 years before) is often measured in millions of dollars of additional sale proceeds. This is the highest-leverage planning most business owners will ever do.
            </p>
          </AnimateOnScroll>

          <div className="mt-12 p-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute tax advice, financial advice, or business exit advice. Business valuations, tax treatment of sales, and exit strategies vary significantly based on business type, industry, structure, and personal circumstances. Consult with qualified professionals - including a business valuation specialist, tax attorney, CPA, and M&A advisor - before implementing any exit strategy. This article references 2026 tax rates, QSBS rules, and Arizona tax law which may have been updated.
            </p>
          </div>

          <div className="mt-12 text-center">
            <AnimateOnScroll>
              <p className="text-gray-700 mb-6">
                Let&apos;s develop a strategic exit plan that maximizes your business value.
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
            Your business is your largest asset. Let&apos;s plan its exit strategically.
          </p>
          <p className="text-gray-300 mt-2">
            We help Arizona business owners optimize sale value and minimize taxes.
          </p>
        </div>
      </section>
    </main>
  );
}
