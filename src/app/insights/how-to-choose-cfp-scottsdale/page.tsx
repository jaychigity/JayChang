import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import ArticleByline from '@/components/ArticleByline'
import { ArrowLeft, Clock, ChevronRight, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
 title: 'How to Choose the Right Wealth Advisor in Scottsdale',
 description:
 'A practical guide to evaluating wealth advisors in Scottsdale: what the CFP® designation actually signals, why tenure and direct experience often matter more, and the six questions worth asking before you hire.',
 alternates: {
 canonical:
 'https://www.advisorjay.com/insights/how-to-choose-cfp-scottsdale',
 },
 openGraph: {
 title: 'How to Choose the Right Wealth Advisor in Scottsdale',
 description:
 'A practical guide to evaluating wealth advisors in Scottsdale: what the CFP® designation actually signals, why tenure and direct experience often matter more, and the six questions worth asking before you hire.',
 type: 'article',
 url: 'https://www.advisorjay.com/insights/how-to-choose-cfp-scottsdale',
 },
}

const relatedArticles = [
 {
 slug: 'las-vegas-financial-planning',
 category: 'MARKET INSIGHTS',
 title: 'Financial Planning in Nevada: Beyond the Strip',
 excerpt:
 "Nevada's growth has attracted a new wave of affluent professionals and retirees. Here's how to optimize your financial strategy in the Silver State.",
 readTime: '8 min read',
 },
 {
 slug: 'choosing-financial-advisor',
 category: 'WEALTH MANAGEMENT',
 title: 'How to Choose a Financial Advisor When You Have $2M or More',
 excerpt:
 `The questions most people ask when choosing an advisor are the wrong ones. Here's what actually matters when your portfolio has seven figures or more.`,
 readTime: '6 min read',
 },
 {
 slug: 'estate-planning-essentials',
 category: 'ESTATE PLANNING',
 title: 'Estate Planning for $5M+ Families: What Your Attorney May Not Tell You',
 excerpt:
 'Estate planning is about more than documents. Learn the financial strategies that complement your legal framework to protect and transfer wealth efficiently.',
 readTime: '10 min read',
 },
]

export default function HowToChooseWealthAdvisorScottsdalePage() {
 return (
 <>
 <BreadcrumbSchema items={[{ name: 'Insights', href: '/insights' }, { name: 'How to Choose the Right Wealth Advisor in Scottsdale', href: '/insights/how-to-choose-cfp-scottsdale' }]} />
 {/* Article JSON-LD */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Choose the Right Wealth Advisor in Scottsdale',
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
   '@id': 'https://www.advisorjay.com/insights/how-to-choose-cfp-scottsdale',
  },
  description:
   'A practical guide to evaluating wealth advisors in Scottsdale: what the CFP® designation actually signals, why tenure and direct experience often matter more, and the six questions worth asking before you hire.',
  }),
  }}
 />

 {/* FAQPage JSON-LD */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
   {
   '@type': 'Question',
   name: 'How many CFPs are in Scottsdale?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'There are approximately 200 Certified Financial Planners (CFP® professionals) practicing in the Scottsdale and greater Phoenix metropolitan area. Only a subset operate as full-time fiduciaries without commission incentives, which is the standard worth holding out for if you have meaningful wealth.',
   },
   },
   {
   '@type': 'Question',
   name: 'What should I look for in a wealth advisor in Scottsdale?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'When evaluating a wealth advisor in Scottsdale, focus on six factors: fiduciary status, fee-only compensation (no commissions), tenure and direct experience working with clients in your situation, experience with Arizona-specific planning, client minimums and capacity, and the technology platform behind their planning. Designations like CFP® help filter for baseline competence, but they don\'t replace years actually managing client wealth.',
   },
   },
   {
   '@type': 'Question',
   name: 'Is a CFP the same as a fiduciary financial advisor?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'Not necessarily. While CFP® professionals are required to act as fiduciaries when providing financial planning, some also hold broker-dealer registrations that allow them to sell commissioned products under a lower suitability standard. The ideal combination is an advisor who operates as a full-time fiduciary within a Registered Investment Adviser (RIA) firm and does not earn commissions, regardless of whether they personally hold the CFP® designation or work alongside CFP® professionals on their team.',
   },
   },
   {
   '@type': 'Question',
   name: 'How important is the CFP® designation when choosing a wealth advisor?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'The CFP® designation is meaningful: it confirms an advisor has completed structured education, passed a rigorous exam, and committed to a fiduciary code of ethics. But it is one data point, not the whole picture. A newly minted CFP® with two years of experience is not automatically a better choice than a 15-year wealth advisor without the credential. What predicts whether someone will be a great advisor for you is the depth of their tenure and whether they have direct experience with clients whose situations look like yours - equity compensation, business sales, pension elections, multi-state tax planning. Ask about both.',
   },
   },
  ],
  }),
  }}
 />

 {/* Article Header */}
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
  How to Choose the Right Wealth Advisor in Scottsdale
  </h1>

  <div className="flex flex-wrap items-center gap-6 mt-6">
  <ArticleByline updatedDate="2026-03-01" publishedDate="2026-01-15" variant="dark" />
  <div className="flex items-center gap-2 text-[#b6d0ed]">
   <Clock size={14} strokeWidth={1.5} />
   <span className="font-sans text-sm">7 min read</span>
  </div>
  </div>
  </div>
 </section>

 {/* Article Body */}
 <section className="bg-[#F7F4EE] section-padding">
  <div className="max-w-[760px] mx-auto">
  <AnimateOnScroll>
  <div className="prose-farther">
   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Scottsdale has grown into one of the most dynamic wealth markets in the country. Between the influx of tech professionals, retirees relocating from California, and a thriving local business community, demand for qualified financial guidance has never been higher. Finding the right wealth advisor takes more than a Google search and a quick credential check. Designations like the Certified Financial Planner (CFP&reg;) help filter for baseline competence - but they don&apos;t tell you whether an advisor will actually be great for your situation. What does: tenure, the kind of clients they&apos;ve worked with, and how they think about your specific decisions. This guide walks through both, so you can evaluate any wealth advisor in Scottsdale with confidence.
   </p>

   {/* Section 1 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   What the CFP&reg; Designation Actually Means
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The CFP&reg; mark is awarded by the Certified Financial Planner Board of Standards and is widely considered the most rigorous credential in personal financial planning. Earning the designation requires meeting four requirements that, taken together, filter out the majority of aspiring candidates.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   <strong className="text-[#333333]">Education.</strong> Candidates must complete a CFP Board-registered education program covering retirement planning, tax planning, estate planning, investment management, insurance, and behavioral finance. Most programs require nine to twelve months of coursework.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   <strong className="text-[#333333]">Examination.</strong> The CFP exam is a 170-question, six-hour test administered over two days. The historical pass rate hovers between 60 and 67 percent, meaning roughly one in three candidates fails on their first attempt. The exam tests the ability to integrate planning concepts across disciplines, not simply recall isolated facts.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   <strong className="text-[#333333]">Experience.</strong> Candidates must complete 6,000 hours of professional financial planning experience (or 4,000 hours in an apprenticeship pathway) before they can use the CFP&reg; marks. This typically translates to three to five years of full-time work.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   <strong className="text-[#333333]">Ethics and fiduciary obligation.</strong> Since 2019, all CFP&reg; professionals have been required to act as fiduciaries when providing financial advice. They must also adhere to the CFP Board&apos;s Code of Ethics and Standards of Conduct and submit to ongoing continuing-education requirements. This fiduciary obligation is a significant differentiator from advisors who operate under the lesser suitability standard.
   </p>

   {/* New Section: Tenure & Experience */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Why Tenure and Direct Experience Often Matter More Than the Letters After a Name
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   The CFP&reg; designation is real, and it screens for something. But it doesn&apos;t answer the question that actually matters to you: <em>will this person make good decisions for my situation?</em> A 25-year-old who passed the exam last year and a 15-year wealth advisor with deep client experience can both put CFP&reg; on a business card. They are not the same advisor.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   When you&apos;re evaluating an advisor, look at two things alongside any designation:
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   <strong className="text-[#333333]">Tenure in the seat.</strong> Years actually managing client wealth - not interning, not selling product, not building a book on commission. The decisions an advisor helps you make now (Roth conversion timing, concentrated stock unwinds, pension lump-sum elections, business sale timing) get sharper with reps. There is no substitute for having watched the same kinds of decisions play out across multiple market cycles, multiple tax-law changes, and multiple client situations.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   <strong className="text-[#333333]">Direct experience with people in your situation.</strong> An advisor whose book is mostly Schwab retail customers with $250,000 IRAs is not the right fit for a TSMC director with $4 million in vested RSUs and a deferred-comp election due next month. Ask what percentage of the advisor&apos;s clients look like you - by wealth level, by income source, by life stage. The closer the match, the less you&apos;ll spend educating them on the basics of your situation.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   For context on what tenure looks like in practice: before joining Farther, I spent over a decade in wealth management at Charles Schwab and Vanguard, and I personally oversaw more than $1.5 billion in client assets across complex multi-generational portfolios, equity-heavy tech professionals, and pre-retirees navigating pension elections. That history shapes how I work today - and it&apos;s the kind of context worth asking any advisor you&apos;re considering to share with you.
   </p>

   {/* Section 2 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   Six Questions to Ask Any Wealth Advisor in Scottsdale
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   There are approximately 200 CFP&reg; professionals in the Scottsdale and greater Phoenix metro area, plus a much larger pool of wealth advisors without that specific designation. That sounds like a reasonable number until you start filtering for the qualities that actually matter. These six questions will help you separate the exceptional from the adequate.
   </p>

   <h3 className="font-sans text-[17px] font-bold text-[#333333] leading-[1.8] mt-8 mb-3">
   1. &ldquo;Are you a fiduciary at all times - and do you earn any commissions?&rdquo;
   </h3>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   This is the single most important question. While all CFP&reg; professionals must act as fiduciaries during financial planning engagements, some also hold broker-dealer licenses that allow them to sell commissioned products under a lower suitability standard. Look for a{' '}
   <Link href="/disclosures" className="text-[#1d7682] underline underline-offset-2 hover:text-[#D4B65A] transition-colors">
   fiduciary advisor
   </Link>{' '}
   who earns compensation solely from advisory fees - no commissions, no revenue sharing, no incentive trips. Advisors who also earn commissions on insurance or annuity products face inherent conflicts of interest. The conflicts created by dual registration are real and pervasive.
   </p>

   <h3 className="font-sans text-[17px] font-bold text-[#333333] leading-[1.8] mt-8 mb-3">
   2. &ldquo;How many clients do you serve - and at what wealth level?&rdquo;
   </h3>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Capacity matters. An advisor managing 300 client relationships simply cannot offer the same depth of attention as one serving 80 families. Ask how many households the advisor works with, what the typical account size looks like, and how often you can expect proactive outreach. If you have a $5 million portfolio and the advisor&apos;s median client has $200,000, your planning needs may exceed their expertise. Conversely, if the minimum is $25 million, you may not receive priority attention at $3 million.
   </p>

   <h3 className="font-sans text-[17px] font-bold text-[#333333] leading-[1.8] mt-8 mb-3">
   3. &ldquo;What is your experience with Arizona-specific planning?&rdquo;
   </h3>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Scottsdale is not a generic market, and the planning considerations here differ meaningfully from other cities. A qualified Scottsdale wealth advisor should be able to speak fluently about Arizona&apos;s flat income tax rate and how it affects Roth conversion strategies, the state&apos;s community property rules and how they interact with estate planning, favorable trust and asset protection statutes, and the planning opportunities for families relocating from{' '}
   <Link href="/scottsdale" className="text-[#1d7682] underline underline-offset-2 hover:text-[#D4B65A] transition-colors">
   higher-tax states like California
   </Link>
   . If an advisor can&apos;t discuss these topics in detail, they may not have the Arizona-specific depth your situation requires.
   </p>

   <h3 className="font-sans text-[17px] font-bold text-[#333333] leading-[1.8] mt-8 mb-3">
   4. &ldquo;What technology platform do you use?&rdquo;
   </h3>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   In 2026, technology is no longer a nice-to-have - it is a core component of the advisory experience. Ask whether the advisor&apos;s platform offers real-time portfolio visibility across all your accounts, automated tax-loss harvesting that runs continuously rather than once per quarter, and scenario modeling tools that let you see how a Roth conversion, real estate sale, or business exit would affect your long-term plan. The advisor who relies on spreadsheets and quarterly PDF statements is operating with yesterday&apos;s tools. You deserve better.
   </p>

   <h3 className="font-sans text-[17px] font-bold text-[#333333] leading-[1.8] mt-8 mb-3">
   5. &ldquo;What does your planning process look like?&rdquo;
   </h3>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   A credible advisor should be able to describe a structured onboarding process. Ask what happens in the first 90 days, how often you&apos;ll meet (quarterly is typical for high-net-worth clients; annually is insufficient), who you&apos;ll interact with directly, and how the advisor coordinates with your CPA, estate attorney, and insurance professionals. A well-defined process is a signal of professionalism. A vague or improvised answer is a red flag. If you want to see what good planning looks like in practice, you can{' '}
   <Link href="/tools/cash-flow-planner" className="text-[#1d7682] underline underline-offset-2 hover:text-[#D4B65A] transition-colors">
   model your own retirement cash flow year by year
   </Link>
   {' '}using my free planner - it&apos;s the same kind of analysis a thoughtful advisor would walk you through together.
   </p>

   <h3 className="font-sans text-[17px] font-bold text-[#333333] leading-[1.8] mt-8 mb-3">
   6. &ldquo;How long have you been doing this - and with people whose situation looks like mine?&rdquo;
   </h3>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   This is the question most people forget to ask. Years in the industry isn&apos;t the same as years actually managing client wealth. Ask directly: how long have you been advising clients on the kinds of decisions I&apos;m facing? What was your role before this one? What does your typical client look like? An advisor with a decade of relevant tenure - working with people in your wealth band, your income type, your stage of life - will navigate your decisions differently than someone with a fresh credential and a thinly populated book. Tenure and direct experience are not everything, but they&apos;re the strongest predictor that the advice you receive will hold up over time.
   </p>

   {/* Section 3 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   How to Verify a Wealth Advisor in Scottsdale
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Before engaging any advisor, take fifteen minutes to verify their credentials independently. Four resources should be part of your due diligence:
   </p>

   <ul className="list-disc pl-6 mb-6 space-y-3">
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">
   <strong className="text-[#333333]">LetsMakeAPlan.org</strong> - the CFP Board&apos;s official directory. Confirm the advisor holds an active CFP&reg; certification and check for any disciplinary history.
   </li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">
   <strong className="text-[#333333]">adviserinfo.sec.gov</strong> - the SEC&apos;s Investment Adviser Public Disclosure site. Review the firm&apos;s Form ADV for fee schedules, conflicts of interest, and assets under management.
   </li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">
   <strong className="text-[#333333]">BrokerCheck.finra.org</strong> - FINRA&apos;s tool for checking whether the advisor also holds a broker-dealer registration, which may indicate they earn commissions in addition to advisory fees.
   </li>
   <li className="font-sans text-[17px] text-[#333333] leading-[1.8]">
   <strong className="text-[#333333]">Form CRS</strong> - a standardized, two-page relationship summary that every advisory firm must provide. It outlines services, fees, conflicts, and disciplinary history in plain language.
   </li>
   </ul>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Cross-referencing these sources takes minimal effort and can reveal issues - dual registrations, regulatory actions, or fee structures - that an advisor may not volunteer during a sales conversation.
   </p>

   {/* In-Article CTA */}
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-8 my-12 text-center">
   <MessageSquare size={28} strokeWidth={1.5} className="text-[#1d7682] mx-auto mb-4" />
   <h3 className="font-serif text-[22px] font-semibold text-[#333333] leading-tight">
   Evaluating advisors in Scottsdale?
   </h3>
   <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3 max-w-[480px] mx-auto">
   I&apos;m happy to discuss what to look for - even if I&apos;m not the right fit for your family.
   </p>
   <div className="mt-6">
   <Button href="/schedule-consultation" variant="primary">
    Schedule a Virtual Meeting
   </Button>
   </div>
   </div>

   {/* Section 4 */}
   <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#333333] leading-[1.3] mt-12 mb-6">
   My Approach
   </h2>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   My Arizona practice meets every standard described above. I bring over a decade of wealth management experience from Charles Schwab and Vanguard, where I personally oversaw more than $1.5 billion in client assets. I work alongside Certified Financial Planner&reg; (CFP&reg;) professionals who deliver comprehensive financial planning, complementing my focus on fiduciary investment management, retirement income planning, and equity-heavy wealth building. For complete details on fee structure, see the{' '}
   <a href="/documents/FFA-ADV-Packet-2.6.26.pdf" target="_blank" rel="noopener noreferrer" className="text-[#1d7682] underline underline-offset-2 hover:text-[#D4B65A] transition-colors">
   Form ADV Part 2A
   </a>.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   I specialize in working with{' '}
   <Link href="/scottsdale" className="text-[#1d7682] underline underline-offset-2 hover:text-[#D4B65A] transition-colors">
   Scottsdale families with $2M-$20M
   </Link>{' '}
   in investable assets - a segment that&apos;s too complex for robo-advisors and too small for the largest private banks, yet perfectly suited for sophisticated, personalized planning. I maintain an intentionally small client roster so every family receives the attention and depth of analysis their wealth deserves.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   Every engagement is supported by{' '}
   <Link href="/services" className="text-[#1d7682] underline underline-offset-2 hover:text-[#D4B65A] transition-colors">
   the Intelligent Wealth Platform
   </Link>
   , which provides real-time portfolio visibility, continuous tax-loss harvesting, and comprehensive scenario modeling. The technology doesn&apos;t replace me - it amplifies my ability to make better, faster decisions on your behalf.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   My structured planning process begins with a 90-day deep dive into your complete financial picture - investments, tax situation, estate plan, insurance, liabilities, and goals - followed by quarterly strategy reviews and ongoing access directly to me. I coordinate with your CPA, estate attorney, and other professionals to ensure every element of your plan works together.
   </p>

   <p className="font-sans text-[17px] text-[#333333] leading-[1.8] mb-6">
   If you&apos;re evaluating wealth advisors in Scottsdale, I&apos;d welcome a real conversation about your goals and whether we&apos;re a fit.
   </p>

   <div className="mt-8">
   <a
   href="/schedule-consultation"
   className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-[#1d7682] hover:text-[#D4B65A] transition-colors"
   >
   <span>Schedule a Virtual Meeting</span>
   <ChevronRight size={16} strokeWidth={1.5} />
   </a>
   </div>
  </div>
  </AnimateOnScroll>

  {/* Disclaimer */}
  <div className="mt-12 pt-8 border-t border-[#E8E6E1]">
  <p className="font-sans text-xs text-[#5b6a71] leading-relaxed">
   This article is provided for informational purposes only and does
   not constitute investment advice, a recommendation, or an offer to
   buy or sell any securities. The CFP&reg; mark is a certification
   mark owned by the Certified Financial Planner Board of Standards,
   Inc. Farther Finance Advisors, LLC is a registered investment
   adviser with the SEC. Registration does not imply a certain level
   of skill or training. Past performance is not indicative of future
   results. Please consult with a qualified financial advisor before
   making investment decisions.
  </p>
  </div>
  </div>
 </section>

 {/* Related Articles */}
 <section className="bg-[#FAFAF8] section-padding">
  <div className="max-w-container mx-auto">
  <SectionEyebrow text="CONTINUE READING" />
  <h2 className="font-serif text-h3 font-normal text-[#333333] mt-4 mb-10">
  Related Insights
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

 {/* Bottom CTA */}
 <section className="bg-[#333333] section-padding text-center">
  <div className="max-w-[620px] mx-auto">
  <h2 className="font-serif text-[36px] max-md:text-[28px] font-semibold text-[#F7F4EE] leading-[1.2]">
  Ready to Work With a Wealth Advisor Who Puts You First?
  </h2>
  <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
  Schedule a private conversation with me to discuss your goals and see whether we&apos;re a fit.
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
