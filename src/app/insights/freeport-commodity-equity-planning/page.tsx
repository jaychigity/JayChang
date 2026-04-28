
import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';
import ArticleByline from '@/components/ArticleByline';

export const metadata: Metadata = {
 title: 'Freeport-McMoRan Executives: Managing Commodity-Linked Equity in a Volatile Copper Market',
 description: 'How FCX executives and senior engineers can manage concentrated Freeport-McMoRan stock positions tied to copper price cycles - including 10b5-1 plans, diversification strategies, and profit-sharing coordination.',
 alternates: {
 canonical: 'https://www.advisorjay.com/insights/freeport-commodity-equity-planning',
 },
 openGraph: {
 title: 'Freeport-McMoRan Executives: Managing Commodity-Linked Equity in a Volatile Copper Market',
 description: 'How FCX executives and senior engineers can manage concentrated Freeport-McMoRan stock positions tied to copper price cycles - including 10b5-1 plans, diversification strategies, and profit-sharing coordination.',
 url: 'https://www.advisorjay.com/insights/freeport-commodity-equity-planning',
 type: 'article',
 authors: ['Jay Chang'],
 },
};

export default function FreeportCommodityPage() {
 const readingTime = '8 min read';

 return (
 <main>
 {/* Hero Section */}
 <section className="bg-[#F7F4EE] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-4 md:px-6">
  <AnimateOnScroll>
  <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
   Your Freeport-McMoRan Equity Tracks Copper Prices. Here&apos;s How to Protect What You&apos;ve Built.
  </h1>
  <div className="flex flex-col md:flex-row md:items-center md:gap-6">
   <ArticleByline updatedDate="2026-03-16" variant="light" />
   <span className="text-[#5b6a71]">{readingTime}</span>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Article Body */}
 <article className="bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-4 md:px-6 prose prose-lg">
  <AnimateOnScroll>
  <section className="mb-12">
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Freeport-McMoRan executives and senior engineers in Phoenix are compensated well. Top-tier 401(k) plans, robust profit-sharing contributions, and executive equity packages create significant wealth-building opportunities. But there&apos;s a hidden risk in that compensation structure.
   </p>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   Your compensation, your equity, and your career trajectory all move with copper prices. When copper falters, your income, your bonus, and your equity value all suffer simultaneously. That correlation is dangerous.
   </p>
  </section>

  <section className="mb-12">
   <h2 className="text-3xl font-bold text-[#333333] mb-6">The Double Concentration Problem</h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Most executives and engineers focus on diversifying their investment portfolio. That&apos;s important. But they miss the larger exposure: human capital concentration.
   </p>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Consider what happens in a copper downturn:
   </p>
   <ul className="list-disc pl-6 space-y-4 text-[#5b6a71] mb-6">
   <li className="text-lg"><strong>Your Income Falls:</strong> Bonus structures tie to company performance, which ties to copper prices. In a down cycle, bonuses shrink or disappear.</li>
   <li className="text-lg"><strong>Your Equity Tanks:</strong> FCX stock price correlates strongly with copper. A 30% copper downturn often means a 40-50% equity decline.</li>
   <li className="text-lg"><strong>Your Job Risk Rises:</strong> In downturns, cost-cutting accelerates. Career advancement slows. Severance becomes possible.</li>
   </ul>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   You&apos;re hit from three directions at once. Your human capital, your financial capital, and your career trajectory are all under pressure in the same downturn.
   </p>
  </section>

  <section className="mb-12">
   <h2 className="text-3xl font-bold text-[#333333] mb-6">The 10b5-1 Plan Solution</h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   As an executive subject to securities law blackout periods, you face legal restrictions on when you can sell company stock. Rule 10b5-1 provides a solution: a pre-set automated selling schedule that continues operating even during blackout periods.
   </p>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Here&apos;s why this matters:
   </p>
   <ul className="list-disc pl-6 space-y-4 text-[#5b6a71] mb-6">
   <li className="text-lg"><strong>Removes Discretion:</strong> You set the plan once - specify quantities, dates, and prices. The plan executes automatically. You can&apos;t second-guess yourself or time the market.</li>
   <li className="text-lg"><strong>Legal Safety:</strong> Sales under a 10b5-1 plan are legally protected from insider trading liability. You&apos;re not restricted by blackout windows.</li>
   <li className="text-lg"><strong>Discipline:</strong> Many executives delay diversification because they expect further upside. A 10b5-1 plan forces disciplined, gradual diversification regardless of market noise.</li>
   </ul>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   I typically recommend establishing a 10b5-1 plan to sell a modest percentage of vested equity quarterly. This creates a steady diversification cadence and ensures you&apos;re reducing concentration risk consistently.
   </p>
  </section>

  <section className="mb-12">
   <h2 className="text-3xl font-bold text-[#333333] mb-6">Profit Sharing and Diversification Strategy</h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   In high-earning years - when copper prices are strong and bonus structures maximize - FCX likely distributes large equity and cash allocations through profit-sharing plans. These are your best diversification opportunities.
   </p>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   Strategy:
   </p>
   <ul className="list-disc pl-6 space-y-4 text-[#5b6a71] mb-6">
   <li className="text-lg"><strong>Accelerate Diversification in Boom Years:</strong> When bonuses are high and equity values are elevated, allocate a larger percentage to tax-advantaged accounts and diversified investments.</li>
   <li className="text-lg"><strong>Max Out Retirement Accounts:</strong> Contribute maximum to 401(k), explore mega backdoor Roth strategies if available. This immediately removes capital from commodity price exposure.</li>
   <li className="text-lg"><strong>Donor-Advised Funds:</strong> High-income years are ideal for charitable contributions through a DAF. You get an immediate tax deduction, but the assets grow outside your concentrated portfolio.</li>
   <li className="text-lg"><strong>Diversified Portfolio Building:</strong> Allocate excess cash and bonus to broad index funds, real estate, or other uncorrelated assets.</li>
   </ul>
  </section>

  <section className="mb-12">
   <h2 className="text-3xl font-bold text-[#333333] mb-6">The Best-in-Class 401(k)</h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   FCX was recognized as a 2025 Best in Class 401(k) recipient for a reason. The plan features are genuinely strong:
   </p>
   <ul className="list-disc pl-6 space-y-4 text-[#5b6a71] mb-6">
   <li className="text-lg"><strong>100% Match up to 5%:</strong> Immediate 100% return on matched contributions.</li>
   <li className="text-lg"><strong>True-Up Provision:</strong> Ensures you receive the full match even if you max out contributions early in the year.</li>
   <li className="text-lg"><strong>Auto-Escalation:</strong> Contributions increase annually, helping you approach contribution limits without constant re-enrollment.</li>
   <li className="text-lg"><strong>98% Participation:</strong> Highest participation rate in most peer groups. Strong indicator of plan design quality.</li>
   </ul>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   For executives earning $300K+, this plan becomes a powerful counterbalance to FCX equity concentration. Max your 401(k) contributions immediately. Explore mega backdoor Roth conversions to move additional capital into tax-advantaged, diversified investments.
   </p>
  </section>

  <section className="mb-12">
   <h2 className="text-3xl font-bold text-[#333333] mb-6">Building Your Diversification Plan</h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
   A comprehensive FCX diversification strategy integrates:
   </p>
   <ul className="list-disc pl-6 space-y-4 text-[#5b6a71] mb-6">
   <li className="text-lg">Automated 10b5-1 selling plans</li>
   <li className="text-lg">Maxed 401(k) contributions and mega backdoor Roth</li>
   <li className="text-lg">Donor-advised fund contributions during high-income years</li>
   <li className="text-lg">Systematic allocation of profit-sharing proceeds to diversified investments</li>
   <li className="text-lg">Tax-loss harvesting on any concentrated positions</li>
   </ul>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   Built together, these tools break the commodity correlation and protect what you&apos;ve built.
   </p>
  </section>
  </AnimateOnScroll>
  </div>
 </article>

 {/* CTA Section */}
 <section className="bg-[#F7F4EE] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
  <AnimateOnScroll>
  <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
   Ready to Diversify Your FCX Exposure?
  </h2>
  <p className="text-lg text-[#5b6a71] mb-8 leading-relaxed">
   Don&apos;t let commodity cycles control your wealth. Let&apos;s build a comprehensive FCX diversification plan that works.
  </p>
  <Button href="/schedule-consultation" variant="primary">
   Schedule a Call with Jay
  </Button>
  </AnimateOnScroll>
  </div>
 </section>

 {/* JSON-LD Schema */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Your Freeport-McMoRan Equity Tracks Copper Prices. Here&apos;s How to Protect What You&apos;ve Built.',
  description: 'How FCX executives and senior engineers can manage concentrated Freeport-McMoRan stock positions tied to copper price cycles - including 10b5-1 plans, diversification strategies, and profit-sharing coordination.',
  image: 'https://www.advisorjay.com/og-image.jpg',
  datePublished: '2026-03-16',
  dateModified: '2026-03-16',
  author: {
   '@type': 'Person',
   name: 'Jay Chang',
  },
  publisher: {
   '@type': 'Organization',
   name: 'Farther',
   logo: {
   '@type': 'ImageObject',
   url: 'https://www.advisorjay.com/logo.jpg',
   },
  },
  }),
  }}
 />
 </main>
 );
}
