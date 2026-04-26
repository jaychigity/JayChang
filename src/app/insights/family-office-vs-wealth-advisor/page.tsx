import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import ArticleByline from '@/components/ArticleByline'
import { ArrowLeft, Clock, ChevronRight, Check, Minus } from 'lucide-react'

export const metadata: Metadata = {
 title:
 'Do You Need a Family Office - Or a Comprehensive Wealth Advisor? | Advisor Jay',
 description:
 'Explore the differences between a family office and a comprehensive wealth advisor. Learn why a family office alternative may deliver the same services at a fraction of the cost for families in Arizona, California, and Nevada.',
 keywords: [
 'family office Scottsdale',
 'family office alternative',
 'family office vs wealth advisor',
 'comprehensive wealth advisor',
 'multi-family office',
 'single family office',
 'wealth management Scottsdale',
 'wealth management Arizona',
 ],
 alternates: {
 canonical:
 'https://www.advisorjay.com/insights/family-office-vs-wealth-advisor',
 },
 openGraph: {
 title:
 'Do You Need a Family Office - Or a Comprehensive Wealth Advisor?',
 description:
 'A family office is the gold standard for ultra-high-net-worth families - but for most affluent households, a comprehensive wealth advisor delivers the same outcomes at a fraction of the cost. Learn how to decide.',
 type: 'article',
 url: 'https://www.advisorjay.com/insights/family-office-vs-wealth-advisor',
 siteName: 'Farther Personal Wealth',
 },
}

const faqData = [
 {
 question: 'How much do you need for a family office?',
 answer:
 'A single-family office (SFO) typically requires $50 million to $100 million in investable assets to justify the cost of dedicated staff, legal entities, and infrastructure. Multi-family offices (MFOs) lower the threshold to roughly $10 million to $25 million by sharing resources across several families.',
 },
 {
 question:
 'What is a family office alternative for families with $5M to $20M?',
 answer:
 'A comprehensive wealth advisor is the most common and effective family office alternative for families in this range. A well-structured advisory relationship provides coordinated investment management, tax strategy, estate planning, insurance review, retirement planning, and business exit guidance - the same core services a family office delivers - at a significantly lower cost.',
 },
 {
 question:
 'Is there a family office in Scottsdale for families under $20 million?',
 answer:
 'While traditional family offices in Scottsdale generally serve families with $50 million or more, a comprehensive wealth advisor can deliver family-office-caliber service for families with $1 million to $20 million. The advisor coordinates across investments, taxes, estate planning, and insurance, functioning as a financial quarterback at a fraction of the family office cost.',
 },
]

const relatedArticles = [
 {
 slug: 'estate-planning-essentials',
 category: 'Estate Planning',
 title:
 'Estate Planning for $5M+ Families: What Your Attorney May Not Tell You',
 excerpt:
 'Estate planning is about more than documents. Learn the financial strategies that complement your legal framework to protect and transfer wealth efficiently.',
 },
 {
 slug: 'choosing-financial-advisor',
 category: 'Wealth Management',
 title: 'How to Choose a Financial Advisor When You Have $2M or More',
 excerpt:
 'The questions most people ask when choosing an advisor are the wrong ones. Here\'s what actually matters when your portfolio has seven figures or more.',
 },
]

export default function FamilyOfficeVsWealthAdvisorPage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Insights', href: '/insights' }, { name: 'Family Office vs Wealth Advisor', href: '/insights/family-office-vs-wealth-advisor' }]} />
 {/* Article JSON-LD */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
   'Do You Need a Family Office - Or a Comprehensive Wealth Advisor?',
  author: {
   '@type': 'Person',
   name: 'Jay Chang',
   jobTitle: 'VP, Wealth Advisor',
   worksFor: {
   '@type': 'Organization',
   name: 'Farther Finance Advisors LLC',
   },
  },
  publisher: {
   '@type': 'Organization',
   name: 'Advisor Jay',
   url: 'https://www.advisorjay.com',
  },
  datePublished: '2026-01-15',
  dateModified: '2026-03-01',
  mainEntityOfPage: {
   '@type': 'WebPage',
   '@id':
   'https://www.advisorjay.com/insights/family-office-vs-wealth-advisor',
  },
  description:
   'Explore the differences between a family office and a comprehensive wealth advisor. Learn why a family office alternative may deliver the same services at a fraction of the cost.',
  }),
  }}
 />

 {/* FAQ JSON-LD */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
   '@type': 'Question',
   name: faq.question,
   acceptedAnswer: {
   '@type': 'Answer',
   text: faq.answer,
   },
  })),
  }),
  }}
 />

 {/* ───────── Article Header ───────── */}
 <section className="bg-[#333333] pt-[100px] pb-[60px] px-[80px] max-md:px-[20px] max-md:pt-[100px]">
  <div className="max-w-[760px] mx-auto">
  <Link
  href="/insights"
  className="inline-flex items-center gap-2 font-sans text-sm text-[#1d7682] hover:text-[#D4B65A] transition-colors mb-8"
  >
  <ArrowLeft size={16} strokeWidth={1.5} />
  Back to Insights
  </Link>

  <div className="flex items-center gap-3 mb-6">
  <span className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-[#1d7682] bg-[rgba(201,168,76,0.1)] px-3 py-1 rounded-full">
   WEALTH PLANNING
  </span>
  </div>

  <h1 className="font-serif text-[42px] max-md:text-[30px] font-bold text-[#F7F4EE] leading-[1.2]">
  Do You Need a Family Office - Or a Comprehensive Wealth Advisor?
  </h1>

  <div className="flex flex-wrap items-center gap-6 mt-6">
  <ArticleByline updatedDate="2026-03-01" publishedDate="2026-01-15" variant="dark" />
  <div className="flex items-center gap-2 text-[#b6d0ed]">
   <Clock size={14} strokeWidth={1.5} />
   <span className="font-sans text-sm">8 min read</span>
  </div>
  </div>
  </div>
 </section>

 {/* ───────── Article Body ───────── */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-[760px] mx-auto">
  <AnimateOnScroll>
  <div>
   {/* Intro */}
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The phrase &ldquo;family office&rdquo; carries a certain weight. It conjures images of a private team of financial professionals - investment managers, tax attorneys, estate planners, and personal assistants - all working exclusively for a single ultra-wealthy family. For decades, the family office has been the gold standard for managing complex financial lives. And for families with $100&nbsp;million or more in investable assets, it often makes sense.
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   But what about the family with $5&nbsp;million, $10&nbsp;million, or $20&nbsp;million? You may have a liquidity event behind you, a successful business generating significant cash flow, or a combination of real estate, retirement accounts, and taxable investments that demands sophisticated coordination. You need more than a basic financial advisor - but do you really need a family office? In most cases, the answer is no. What you need is a{' '}
   <Link href="/services" className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors">
   comprehensive wealth advisor
   </Link>{' '}
   who delivers the substance of a family office without the overhead, the staffing complexity, or the seven-figure annual cost.
   </p>

   {/* Section 1 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   What a Family Office Actually Is
   </h2>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   A family office is a private organization created to manage the financial and personal affairs of a wealthy family. There are two primary types. A single-family office (SFO) serves one family exclusively, employing a dedicated team of professionals - often including a chief investment officer, tax specialists, estate attorneys, accountants, and administrative staff. A multi-family office (MFO) spreads those same resources across several families, reducing cost per family while still delivering a high level of personalized service.
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The scope of a family office typically extends well beyond investments. A full-service family office may provide investment management across public and private markets, tax planning and preparation, estate and trust administration, bill payment and cash-flow management, insurance procurement and oversight, philanthropic advisory and foundation management, real estate acquisition and management, family governance and next-generation education, concierge services such as travel coordination and household staff management, and cybersecurity and privacy protection. That breadth is precisely what makes a family office so appealing - and so expensive.
   </p>

   {/* Section 2 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   What It Actually Costs
   </h2>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Cost is where the family office conversation gets real. Running a single-family office means employing full-time staff, maintaining office space, licensing software, engaging outside counsel, and managing regulatory compliance. The numbers add up quickly. Below is a comparison of the typical minimums and annual costs across the three models.
   </p>

   {/* Cost Comparison Table */}
   <div className="overflow-x-auto mb-8">
   <table className="w-full border border-[#E8E6E1] rounded-[8px] overflow-hidden text-left">
   <thead>
    <tr className="bg-[#333333]">
    <th className="font-sans text-[14px] font-semibold text-[#F7F4EE] px-5 py-4 border-b border-[#E8E6E1]">
    Model
    </th>
    <th className="font-sans text-[14px] font-semibold text-[#F7F4EE] px-5 py-4 border-b border-[#E8E6E1]">
    Typical Minimum
    </th>
    <th className="font-sans text-[14px] font-semibold text-[#F7F4EE] px-5 py-4 border-b border-[#E8E6E1]">
    Annual Cost (at $10M)
    </th>
    </tr>
   </thead>
   <tbody>
    <tr className="bg-[#FAFAF8]">
    <td className="font-sans text-[15px] text-[#333333] px-5 py-4 border-b border-[#E8E6E1]">
    Single-Family Office
    </td>
    <td className="font-sans text-[15px] text-[#333333] px-5 py-4 border-b border-[#E8E6E1]">
    $50M - $100M
    </td>
    <td className="font-sans text-[15px] text-[#333333] px-5 py-4 border-b border-[#E8E6E1]">
    $1M - $3M+
    </td>
    </tr>
    <tr className="bg-[#FAFAF8]">
    <td className="font-sans text-[15px] text-[#333333] px-5 py-4 border-b border-[#E8E6E1]">
    Multi-Family Office
    </td>
    <td className="font-sans text-[15px] text-[#333333] px-5 py-4 border-b border-[#E8E6E1]">
    $10M - $25M
    </td>
    <td className="font-sans text-[15px] text-[#333333] px-5 py-4 border-b border-[#E8E6E1]">
    $100K - $200K
    </td>
    </tr>
    <tr className="bg-[#FAFAF8]">
    <td className="font-sans text-[15px] text-[#333333] px-5 py-4">
    Comprehensive Wealth Advisor
    </td>
    <td className="font-sans text-[15px] text-[#333333] px-5 py-4">
    $1M - $5M
    </td>
    <td className="font-sans text-[15px] text-[#333333] px-5 py-4">
    $50K - $100K
    </td>
    </tr>
   </tbody>
   </table>
   </div>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   For a family with $10&nbsp;million in investable assets, a single-family office would consume 10 to 30 percent of the portfolio in annual operating costs alone - before any investment fees. A multi-family office is more efficient but still costly. A comprehensive wealth advisor, by contrast, delivers the core planning and investment services at a fraction of the cost, typically through a transparent asset-based fee that declines as the portfolio grows.
   </p>

   {/* Section 3 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   What a Modern Wealth Advisor Actually Provides
   </h2>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The gap between a family office and a top-tier wealth advisory firm has narrowed considerably over the past decade. Technology, institutional partnerships, and the rise of independent advisory platforms have made it possible for a single advisory team to deliver services that once required an entire private organization. Here is how the two models compare across the most common planning areas.
   </p>

   {/* Services Comparison Grid */}
   <div className="overflow-x-auto mb-8">
   <table className="w-full border border-[#E8E6E1] rounded-[8px] overflow-hidden text-left">
   <thead>
    <tr className="bg-[#333333]">
    <th className="font-sans text-[14px] font-semibold text-[#F7F4EE] px-5 py-4 border-b border-[#E8E6E1]">
    Service
    </th>
    <th className="font-sans text-[14px] font-semibold text-[#F7F4EE] px-5 py-4 border-b border-[#E8E6E1] text-center">
    Family Office
    </th>
    <th className="font-sans text-[14px] font-semibold text-[#F7F4EE] px-5 py-4 border-b border-[#E8E6E1] text-center">
    Wealth Advisor
    </th>
    </tr>
   </thead>
   <tbody>
    {[
    { service: 'Investment Management', fo: true, wa: true },
    { service: 'Financial Planning', fo: true, wa: true },
    { service: 'Tax Strategy & Coordination', fo: true, wa: true },
    { service: 'Estate Planning', fo: true, wa: true },
    { service: 'Business Exit Planning', fo: true, wa: true },
    { service: 'Insurance Review & Procurement', fo: true, wa: true },
    { service: 'Retirement Planning', fo: true, wa: true },
    { service: 'Philanthropic Advisory', fo: true, wa: true },
    { service: 'Trust Administration', fo: true, wa: true },
    { service: 'Bill Payment & Cash Management', fo: true, wa: false },
    { service: 'Household Staff Management', fo: true, wa: false },
    { service: 'Concierge / Lifestyle Services', fo: true, wa: false },
    { service: 'Cybersecurity & Privacy', fo: true, wa: false },
    ].map((row, i) => (
    <tr key={i} className="bg-[#FAFAF8]">
    <td className="font-sans text-[15px] text-[#333333] px-5 py-3 border-b border-[#E8E6E1]">
     {row.service}
    </td>
    <td className="px-5 py-3 border-b border-[#E8E6E1] text-center">
     <Check size={18} strokeWidth={1.5} className="inline-block text-[#3A7D5C]" />
    </td>
    <td className="px-5 py-3 border-b border-[#E8E6E1] text-center">
     {row.wa ? (
     <Check size={18} strokeWidth={1.5} className="inline-block text-[#3A7D5C]" />
     ) : (
     <Minus size={18} strokeWidth={1.5} className="inline-block text-[#A0A9B4]" />
     )}
    </td>
    </tr>
    ))}
   </tbody>
   </table>
   </div>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The services that remain exclusive to a family office - bill payment, household staff management, concierge, and cybersecurity - are genuinely useful but are also the easiest to outsource independently. A family can hire a personal assistant, engage a cybersecurity firm, and use a bill-pay service without wrapping all of it in a multi-million-dollar family office structure. The high-value financial services - investment management, tax planning, estate strategy, and retirement projections - are precisely where a{' '}
   <Link href="/services" className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors">
   comprehensive wealth advisor
   </Link>{' '}
   delivers the most impact.
   </p>

   {/* Section 4 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   When a Family Office Does Make Sense
   </h2>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   There are situations where a family office is the right choice. If your investable assets exceed $50&nbsp;million, the cost of an SFO becomes a smaller percentage of the portfolio and may be justified by the depth of dedicated attention you receive. Extreme complexity - such as managing operating businesses across multiple countries, coordinating trusts in several jurisdictions, or overseeing a large private foundation - can require the kind of daily operational management that only a fully staffed family office can provide.
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Families that want a dedicated team working exclusively on their affairs - not shared across other clients - may also find an SFO compelling. The same is true for families with acute privacy or security concerns, such as those in the public eye or in industries where physical and digital security are paramount. If you need a chief investment officer on staff, a dedicated controller reviewing every transaction, and a team of professionals who report only to you, a family office is the structure that supports that level of infrastructure.
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   For everyone else - and that includes the majority of affluent families - the cost-to-benefit ratio of a family office simply does not pencil out. The services you actually need can be delivered more efficiently through a modern advisory relationship.
   </p>

   {/* Section 5 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   The Family Office Alternative for Arizona, California, and Nevada Families
   </h2>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Consider a{' '}
   <Link href="/scottsdale" className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors">
   Scottsdale business owner
   </Link>{' '}
   with $8&nbsp;million in investable assets. She sold a minority stake in her company two years ago, generating a significant liquidity event. She now holds a concentrated stock position, a commercial real estate portfolio, two retirement accounts, a 529 plan for each of her three children, and a revocable living trust that her estate attorney drafted but that no one has reviewed since. She has heard about family offices and wonders whether she should engage one.
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The answer, for her, is almost certainly no. What she needs is a comprehensive wealth advisor who can build a diversification plan for her concentrated position, coordinate her tax strategy across business income and investment gains in Arizona's favorable tax environment, revisit her{' '}
   <Link href="/services" className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors">
   estate plan
   </Link>{' '}
   to ensure it accounts for the new liquidity, optimize her retirement contributions, and review her insurance coverage. A family office could do all of this - but at three to five times the cost and with a staffing structure she does not need.
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Or consider a{' '}
   <Link href="/scottsdale" className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors">
   Nevada family
   </Link>{' '}
   that recently relocated from California with $12&nbsp;million in combined assets. They have unrealized capital gains in their taxable brokerage accounts, a deferred-compensation plan from a former employer, rental properties in Los Angeles, and questions about how to re-domicile their trust to take advantage of Nevada's favorable trust laws. They want someone to coordinate all of it - not just manage their investments but think across the entire financial picture.
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   At Farther, this is precisely the kind of relationship we build. Our advisory platform has surpassed $15&nbsp;billion in recruited assets, combining the personal attention of a dedicated advisor with institutional-grade technology for portfolio management, tax-loss harvesting, reporting, and planning. Every advisor operates under a fiduciary standard, and our fee structure is transparent - no commissions, no hidden charges, no product sales.
   </p>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   What makes this a genuine family office alternative - not just a marketing claim - is the breadth of services available under one roof. Through Farther's platform, every client has access to financial planning, investment and portfolio management, tax optimization, retirement planning, a dedicated trust and estate planning team, 401(k) and qualified retirement plan management, alternative investments (private equity, venture capital, private credit), institutional services for foundations and endowments, and generational wealth planning - all coordinated through a single advisory relationship at no additional cost. These are the same services a family office provides, delivered without the seven-figure overhead.
   </p>

   {/* Section 6 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   How to Decide
   </h2>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If you are weighing the family office question, start by asking yourself five things:
   </p>
   <ol className="list-decimal pl-6 mb-6 space-y-3">
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">
   <strong className="font-semibold">Do my investable assets exceed $50&nbsp;million?</strong> If not, the cost of a single-family office is almost certainly disproportionate to the value it delivers.
   </li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">
   <strong className="font-semibold">Do I need daily operational management of non-financial matters?</strong> If your needs center on bill payment, household staffing, travel, and personal logistics, those services can be hired individually without a family office wrapper.
   </li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">
   <strong className="font-semibold">Is my financial complexity truly beyond what a top-tier advisory firm can handle?</strong> Multi-entity structures, concentrated positions, charitable foundations, and cross-state planning are all within the capability of a modern wealth advisory practice.
   </li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">
   <strong className="font-semibold">Am I willing to manage the family office itself?</strong> An SFO is, in effect, a small business. Someone has to hire the staff, oversee the operations, manage vendors, and ensure compliance. Many families underestimate the management burden.
   </li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">
   <strong className="font-semibold">What is the total cost - and what would I do with the savings?</strong> The difference between a family office and a comprehensive advisor can be $500,000 to $2&nbsp;million per year. Invested wisely, that difference compounds into meaningful additional wealth over a decade.
   </li>
   </ol>
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   For the vast majority of affluent families, the answer to these questions points in the same direction: a comprehensive wealth advisor who functions as your financial quarterback, coordinating across investments, taxes, estate planning, insurance, retirement, and philanthropy - without the overhead of a full family office.
   </p>

   {/* In-Article CTA */}
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-8 md:p-10 my-12 text-center">
   <h3 className="font-serif text-[24px] font-semibold text-[#333333] leading-[1.3] mb-4">
   Wondering Whether You Need a Family Office?
   </h3>
   <p className="font-sans text-[17px] text-[#5b6a71] leading-[1.8] mb-6 max-w-[540px] mx-auto">
   Schedule a confidential conversation with our advisory team. We will review your situation, explain exactly what we can coordinate, and help you determine the right model for your family.
   </p>
   <Button href="/schedule-consultation" variant="primary">
   Wondering If This Applies to You? Let's Find Out Together.
   </Button>
   </div>

   {/* FAQ Section */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Frequently Asked Questions
   </h2>
   <div className="space-y-6 mb-8">
   {faqData.map((faq, i) => (
   <div
    key={i}
    className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[8px] px-6 py-5"
   >
    <h3 className="font-sans text-[17px] font-semibold text-[#333333] leading-[1.4] mb-2">
    {faq.question}
    </h3>
    <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.7]">
    {faq.answer}
    </p>
   </div>
   ))}
   </div>
  </div>
  </AnimateOnScroll>

  {/* Compliance Disclaimer */}
  <div className="mt-12 pt-8 border-t border-[#E8E6E1]">
  <p className="font-sans text-xs text-[#5b6a71] leading-relaxed">
   This article is provided for informational purposes only and does
   not constitute investment advice, a recommendation, or an offer to
   buy or sell any securities. Farther Finance, Inc. is a registered
   investment adviser with the SEC. Registration does not imply a
   certain level of skill or training. Past performance is not
   indicative of future results. All investing involves risk,
   including the possible loss of principal. Please consult with a
   qualified financial advisor before making investment decisions. The
   scenarios described in this article are hypothetical and are
   presented for illustrative purposes only. They do not represent any
   specific client or actual investment results.
  </p>
  </div>
  </div>
 </section>

 {/* ───────── Related Articles ───────── */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-container mx-auto">
  <SectionEyebrow text="CONTINUE READING" />
  <h2 className="font-serif text-h3 font-normal text-[#333333] mt-4 mb-10">
  Related Insights
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {relatedArticles.map((related) => (
   <Link
   key={related.slug}
   href={`/insights/${related.slug}`}
   className="group block"
   >
   <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[12px] p-8 hover:shadow-card-hover hover:border-[#1d7682] transition-all duration-300">
   <span className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-[#1d7682]">
    {related.category}
   </span>
   <h3 className="font-serif text-[22px] font-semibold text-[#333333] mt-3 leading-tight group-hover:text-[#1d7682] transition-colors">
    {related.title}
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3 line-clamp-2">
    {related.excerpt}
   </p>
   <div className="flex items-center gap-1 mt-4 text-[#1d7682] font-sans text-sm font-semibold">
    Read Article
    <ChevronRight
    size={14}
    strokeWidth={1.5}
    className="group-hover:translate-x-1 transition-transform"
    />
   </div>
   </div>
   </Link>
  ))}
  </div>
  </div>
 </section>

 {/* ───────── Bottom CTA ───────── */}
 <section className="bg-[#333333] section-padding text-center">
  <div className="max-w-[620px] mx-auto">
  <h2 className="font-serif text-[36px] max-md:text-[28px] font-semibold text-[#F7F4EE] leading-[1.2]">
  Get Family-Office Service Without the Family-Office Cost
  </h2>
  <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
  Schedule a private conversation with our advisory team to explore
  how comprehensive wealth management can replace the family office
  model for your family.
  </p>
  <div className="mt-10">
  <Button href="/schedule-consultation" variant="primary">
   Wondering If This Applies to You? Let's Find Out Together.
  </Button>
  </div>
  </div>
 </section>
 </>
 )
}
