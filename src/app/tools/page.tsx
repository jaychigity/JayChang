import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
 title: 'Free Financial Calculators & Planning Tools | Advisor Jay',
 description:
 'Free financial calculators for corporate employees, utility professionals, physicians, business owners, and families. Free AT&T pension calculator, free PG&E benefits calculator, 401(k) projections, Roth conversions, and more. No sign-up required, instant results.',
 alternates: {
 canonical: 'https://www.advisorjay.com/tools',
 },
 openGraph: {
 title: 'Financial Calculators & Planning Tools | Advisor Jay',
 description:
 'I built these so you can run your own analysis. Try one.',
 url: 'https://www.advisorjay.com/tools',
 images: [
  {
  url: 'https://www.advisorjay.com/Photos/Tools-OG.jpg',
  width: 1200,
  height: 630,
  alt: 'Run the Math by Advisor Jay',
  },
 ],
 },
}

const tools = [
 {
 href: '/tools/att-pension',
 title: 'AT&T Pension Suite',
 description:
 'AT&T\'s pension, deferred compensation, and benefits package is one of the most complex in the industry. This suite of calculators helps you model pension vs. lump sum decisions, deferred comp risk, and how your benefits fit into your overall retirement picture.\n\nEspecially useful for: current and former AT&T employees approaching retirement decisions.',
 time: 'Instant analysis',
 category: 'Calculator Suite',
 },
 {
 href: '/tools/pge-pension',
 title: 'PG&E Pension & Benefits Suite',
 description:
 'Six calculators built around the decisions PG&E employees actually face: estimate your Final Pay or Cash Balance pension, model early retirement reduction factors, project how long your RMSA will last, and find the 401(k) spillover election that captures your full match.\n\nEspecially useful for: PG&E employees in the Final Pay or Cash Balance plan navigating retirement timing and benefits elections.',
 time: 'Instant analysis',
 category: 'Calculator Suite',
 },
 {
 href: '/tools/401k-withholding-calculator',
 title: '401(k) Withholding Calculator',
 description:
 'One of the most common mistakes we see: employees leaving thousands in employer match uncaptured, or hitting tax season with a surprise bill because their RSU withholding was set wrong. This calculator shows you exactly what percentage to set, what it does to your paycheck, and how to catch up if you\'re mid-year.\n\nEspecially useful for: AT&T, PG&E, Raytheon, Honeywell, and Fortune 500 employees with complex compensation packages.',
 time: 'Instant estimate',
 category: 'Calculator',
 },
 {
 href: '/tools/rsu-equity-compensation-calculator',
 title: 'Equity Compensation & RSU Tax Calculator',
 description:
 'RSUs, stock options, and ESPPs are taxed differently, and your employer\'s default withholding is often not enough. This tool estimates your actual tax liability on equity compensation so you\'re not caught off guard at filing time.\n\nEspecially useful for: tech professionals, corporate employees, and anyone with vesting events this year.',
 time: 'Instant analysis',
 category: 'Planning Tool',
 },
 {
 href: '/tools/401k-projection',
 title: '401(k) Projection Calculator',
 description:
  'See exactly what your 401(k) will be worth at retirement with any employer match structure. Enter your salary, contribution rate, and match formula and get year-by-year growth, a breakdown of your contributions vs employer match vs investment gains, and a flag if you\'re leaving match money on the table.\n\nEspecially useful for: anyone who wants to stress-test their savings rate or hasn\'t run the numbers since starting their job.',
 time: 'Instant projection',
 category: 'Calculator',
 },
 {
 href: '/tools/roth-conversion-calculator',
 title: 'Roth Conversion Calculator',
 description:
 'Converting pre-tax retirement savings to Roth can save significantly on lifetime taxes, but timing and amount matter. This calculator helps you find the right conversion amount based on your current bracket, future income expectations, and retirement timeline.\n\nEspecially useful for: high earners in a transitional year, early retirees, and anyone approaching RMD age.',
 time: 'Instant analysis',
 category: 'Calculator',
 },
 {
 href: '/tools/retirement-savings-calculator',
 title: 'Retirement Readiness Calculator',
 description:
 'Are you on track? This tool takes your current savings, income, expected retirement age, and spending needs and gives you a straight answer, along with what it would take to close any gap.\n\nEspecially useful for: anyone within 10\u201320 years of retirement who hasn\'t run the numbers recently.',
 time: '60 seconds',
 category: 'Assessment',
 },
 {
 href: '/tools/business-exit-planning-calculator',
 title: 'Business Exit Scorecard',
 description:
 'If your business is a significant part of your net worth, your exit strategy is your financial plan. This scorecard walks you through the key factors that determine business value, timing, and what you\'ll actually walk away with after taxes.\n\nEspecially useful for: business owners thinking about selling in the next 3 to 10 years.',
 time: '60 seconds',
 category: 'Scorecard',
 },
 {
 href: '/tools/ca-nv-tax-savings',
 title: 'CA \u2192 NV Tax Savings Calculator',
 description:
 'California\'s income tax is among the highest in the country. This calculator estimates your potential annual tax savings from establishing Nevada residency \u2014 factoring in income type, asset levels, and planning opportunities.\n\nEspecially useful for: California residents with high W-2 income, RSUs, or significant investment income considering a move.',
 time: 'Instant estimate',
 category: 'Calculator',
 },
 {
 href: '/tools/estate-complexity',
 title: 'Estate Complexity Assessment',
 description:
 'Discover the hidden complexity of your estate across 9 risk factors - multi-state property, business succession, blended families, and more.',
 time: 'Under 2 minutes',
 category: 'Assessment',
 },
 {
 href: '/tools/inherited-ira-calculator',
 title: 'Inherited IRA Calculator & RMD Guide',
 description:
 'Inherited an IRA? The rules changed dramatically under the SECURE Act. This tool classifies your beneficiary type, shows your required distributions, and compares withdrawal strategies side-by-side, with tax-bracket-aware projections based on your actual income.\n\nEspecially useful for: adult children who inherited a parent\'s IRA, surviving spouses weighing rollover options, and anyone navigating the 10-year rule.',
 time: '2 minutes',
 category: 'Planning Tool',
 },
 {
 href: '/tools/social-security-calculator',
 title: 'Social Security Calculator: When Should You Claim?',
 description:
  'When should you start collecting? Slide through every age from 62 to 70 and see your monthly check, break-even point, and total lifetime benefits. Includes spousal strategy, earnings test, IRMAA impact, and 6 common myths debunked in plain English.\n\nEspecially useful for: anyone within 5 years of claiming, married couples coordinating strategies, and anyone wondering "will I ever get my money\'s worth?"',
 time: 'Instant analysis',
 category: 'Planning Tool',
 },
 {
 href: '/tools/rmd-calculator',
 title: 'RMD Calculator: Required Minimum Distribution',
 description:
  'How much must you withdraw from your IRA this year? This calculator uses the 2026 IRS Uniform Lifetime Table to show your exact RMD, the tax hit on your bracket, QCD optimization opportunities, IRMAA Medicare surcharge warnings, and a multi-year balance projection.\n\nEspecially useful for: retirees age 73+, anyone approaching RMD age, and those considering Qualified Charitable Distributions to reduce taxable income.',
 time: 'Instant estimate',
 category: 'Calculator',
 },
 {
 href: '/tools/income-annuity',
 title: 'Income Annuity Estimator',
 description:
 'See how much guaranteed monthly income your savings could generate through an immediate income annuity. Adjust premium, age, and payout options for instant estimates.',
 time: 'Instant estimate',
 category: 'Calculator',
 },
 {
 href: '/tools/tvm-calculator',
 title: 'What Your Money Becomes: TVM Calculator',
 description:
 'See how compound returns, dividends, and reinvestment transform your investment over time. Map your wealth trajectory to real-world milestones and model the impact of market corrections.',
 time: '45 seconds',
 category: 'Calculator',
 },
 {
 href: '/tools/cash-flow-planner',
 title: 'Cash Flow Planner',
 description:
 'See your income, expenses, taxes, Social Security, portfolio withdrawals, and one-time goals laid out year by year, from today through the end of your plan. Every row is a year. Every column tells you something important.\n\nEspecially useful for: anyone within 10-20 years of retirement who wants to understand where their money is coming from and going, and whether the numbers actually work.',
 time: 'Instant results',
 category: 'Planning Tool',
 },
 {
 href: '/tools/monte-carlo-simulator',
 title: 'Monte Carlo Portfolio Simulator',
 description:
 'Markets don\'t move in straight lines. Run 500 simulations to see the full range of outcomes for your portfolio, from great markets to tough ones. Includes retirement drawdown mode to see what percentage of scenarios keep you funded through your full horizon.\n\nEspecially useful for: anyone stress-testing a retirement plan, evaluating withdrawal rates, or modeling sequence-of-returns risk.',
 time: 'Instant results',
 category: 'Simulator',
 },
]

export default function ToolsPage() {
 return (
 <>
 <BreadcrumbSchema
  items={[
  { name: 'Tools & Calculators', href: '/tools' },
  ]}
 />

 {/* FAQ Schema — captures "free calculator" searches via structured data */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
   '@context': 'https://schema.org',
   '@type': 'FAQPage',
   mainEntity: [
   {
    '@type': 'Question',
    name: 'Are these financial calculators free to use?',
    acceptedAnswer: {
    '@type': 'Answer',
    text: 'Yes. Every calculator on this page is completely free. No sign-up, no account, and no credit card required. Enter your numbers and get instant results.',
    },
   },
   {
    '@type': 'Question',
    name: 'Is the AT&T pension calculator free?',
    acceptedAnswer: {
    '@type': 'Answer',
    text: 'Yes. The AT&T Pension Suite is free to use with no login required. It includes free calculators for pension vs. lump sum decisions, Mod 75 eligibility, early retirement reduction factors, and 401(k) match optimization, all built specifically for current and former AT&T employees.',
    },
   },
   {
    '@type': 'Question',
    name: 'Is the PG&E pension calculator free?',
    acceptedAnswer: {
    '@type': 'Answer',
    text: 'Yes. The PG&E Pension & Benefits Suite is free with no sign-up needed. It covers free calculators for Final Pay and Cash Balance pension estimates, RMSA projections, early retirement reduction factors, and 401(k) spillover elections, built for PG&E employees navigating retirement decisions.',
    },
   },
   {
    '@type': 'Question',
    name: 'Is there a free 401(k) calculator?',
    acceptedAnswer: {
    '@type': 'Answer',
    text: 'Yes. This page includes two free 401(k) calculators: a Withholding Calculator that shows the exact percentage to set on your paycheck, and a Projection Calculator that shows what your 401(k) will be worth at retirement with any employer match structure. Both are free and instant, no account required.',
    },
   },
   {
    '@type': 'Question',
    name: 'Is there a free Roth conversion calculator?',
    acceptedAnswer: {
    '@type': 'Answer',
    text: 'Yes. The free Roth Conversion Calculator compares the long-term after-tax value of converting a Traditional IRA to a Roth IRA. It shows the upfront tax cost, break-even retirement tax rate, and projected growth, instantly and without any sign-up.',
    },
   },
   {
    '@type': 'Question',
    name: 'Are there free retirement planning calculators available?',
    acceptedAnswer: {
    '@type': 'Answer',
    text: 'Yes. This page includes free retirement calculators for 401(k) projections, Roth conversions, required minimum distributions (RMDs), Social Security claiming strategy, retirement readiness, and inherited IRA rules, all free with instant results and no account required.',
    },
   },
   {
    '@type': 'Question',
    name: 'Do I need to create an account to use these tools?',
    acceptedAnswer: {
    '@type': 'Answer',
    text: 'No. Every calculator on this page is free to use without creating an account or providing an email address. Results are instant and private.',
    },
   },
   ],
  }),
  }}
 />

 {/* Hero */}
 <section
  style={{
  backgroundColor: '#333333',
  padding: '80px 40px 64px',
  textAlign: 'center',
  }}
 >
  <p
  className="font-sans"
  style={{
  fontSize: 13,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  color: '#1d7682',
  marginBottom: 16,
  }}
  >
  Financial Tools &amp; Calculators
  </p>
  <h1
  className="font-serif"
  style={{
  fontSize: 48,
  fontWeight: 300,
  color: '#F7F4EE',
  lineHeight: 1.15,
  marginBottom: 16,
  maxWidth: 820,
  marginLeft: 'auto',
  marginRight: 'auto',
  }}
  >
  Financial Calculators &amp; Planning Tools for Professionals and Families
  </h1>
  <p
  className="font-sans"
  style={{
  fontSize: 18,
  color: 'rgba(247, 244, 238, 0.75)',
  maxWidth: 700,
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: 1.6,
  }}
  >
  Making smart financial decisions starts with knowing your numbers. These calculators require no sign-up and deliver real answers instantly. Nothing you type in is stored or shared. Built for corporate employees, utility and energy professionals, aerospace and defense workers, physicians, business owners, and families navigating complex financial situations, exactly the kinds of people I work with every day.
  </p>
 </section>

 {/* How to use these tools */}
 <section
  style={{
  backgroundColor: '#F7F4EE',
  padding: '56px 40px 0',
  }}
 >
  <div
  style={{
  maxWidth: 760,
  margin: '0 auto',
  textAlign: 'center',
  }}
  >
  <h2
  className="font-serif"
  style={{
  fontSize: 32,
  fontWeight: 400,
  color: '#333333',
  lineHeight: 1.25,
  marginBottom: 16,
  }}
  >
  How to use these tools
  </h2>
  <p
  className="font-sans"
  style={{
  fontSize: 16,
  color: 'rgba(51, 51, 51, 0.7)',
  lineHeight: 1.7,
  }}
  >
  Each tool answers a specific question I hear from clients. Pick yours. Run the math. The number is the easy part. How to coordinate it across your accounts, when to act for tax efficiency, and how the next life event reshapes the answer, that&apos;s where I can help.
  </p>
  </div>
 </section>

 {/* Tool Cards Grid */}
 <section
  style={{
  backgroundColor: '#F7F4EE',
  padding: '48px 40px 80px',
  }}
 >
  <div
  style={{
  maxWidth: 1120,
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
  gap: 32,
  }}
  >
  {tools.map((tool) => (
  <Link
   key={tool.href}
   href={tool.href}
   style={{ textDecoration: 'none', display: 'block' }}
  >
   <article
   className="tool-card"
   style={{
   backgroundColor: '#FFFFFF',
   borderRadius: 12,
   padding: '36px 32px 32px',
   border: '1px solid rgba(51, 51, 51, 0.08)',
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   transition: 'box-shadow 0.2s ease, transform 0.2s ease',
   }}
   >
   {/* Category + Time */}
   <div
   style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
   }}
   >
   <span
    className="font-sans"
    style={{
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: '#1d7682',
    }}
   >
    {tool.category}
   </span>
   <span
    className="font-sans"
    style={{
    fontSize: 12,
    color: 'rgba(51, 51, 51, 0.5)',
    }}
   >
    {tool.time}
   </span>
   </div>

   {/* Title */}
   <h2
   className="font-serif"
   style={{
    fontSize: 24,
    fontWeight: 600,
    color: '#333333',
    lineHeight: 1.3,
    marginBottom: 12,
   }}
   >
   {tool.title}
   </h2>

   {/* Description */}
   <p
   className="font-sans"
   style={{
    fontSize: 15,
    color: 'rgba(51, 51, 51, 0.7)',
    lineHeight: 1.6,
    flex: 1,
    whiteSpace: 'pre-line',
   }}
   >
   {tool.description}
   </p>

   {/* CTA Arrow */}
   <div
   className="font-sans"
   style={{
    marginTop: 20,
    fontSize: 14,
    fontWeight: 600,
    color: '#1d7682',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
   }}
   >
   Get started
   <span aria-hidden="true">&rarr;</span>
   </div>
   </article>
  </Link>
  ))}
  </div>
 </section>

 {/* Not sure where to start? */}
 <section
  style={{
  backgroundColor: '#FAFAF8',
  padding: '64px 40px',
  }}
 >
  <div
  style={{
  maxWidth: 760,
  margin: '0 auto',
  textAlign: 'center',
  }}
  >
  <h2
  className="font-serif"
  style={{
  fontSize: 32,
  fontWeight: 400,
  color: '#333333',
  lineHeight: 1.25,
  marginBottom: 16,
  }}
  >
  Not sure where to start?
  </h2>
  <p
  className="font-sans"
  style={{
  fontSize: 16,
  color: 'rgba(51, 51, 51, 0.7)',
  lineHeight: 1.7,
  marginBottom: 16,
  }}
  >
  If you&rsquo;re a corporate or Fortune 500 employee trying to maximize your 401(k), start with the withholding calculator. If you have RSUs or stock options vesting this year, the equity compensation calculator is your first stop. Physicians and high-income earners often find the Roth conversion tool most valuable. Business owners planning an exit should start with the scorecard. And if you&rsquo;re an AT&amp;T or PG&amp;E employee with pension decisions ahead, the AT&amp;T Pension Suite and PG&amp;E Pension Suite were built specifically for you.
  </p>
  <p
  className="font-sans"
  style={{
  fontSize: 16,
  color: 'rgba(51, 51, 51, 0.7)',
  lineHeight: 1.7,
  }}
  >
  All tools require no login and are updated for 2026 tax law including SECURE 2.0 catch-up contribution changes. Results are estimates for educational purposes. For a personalized analysis, schedule a conversation with Jay.
  </p>
  </div>
 </section>

 {/* Bottom CTA */}
 <section
  style={{
  backgroundColor: '#333333',
  padding: '64px 40px',
  textAlign: 'center',
  }}
 >
  <h2
  className="font-serif"
  style={{
  fontSize: 32,
  fontWeight: 400,
  color: '#F7F4EE',
  lineHeight: 1.25,
  marginBottom: 16,
  maxWidth: 600,
  marginLeft: 'auto',
  marginRight: 'auto',
  }}
  >
  Ready to put the numbers to work?
  </h2>
  <p
  className="font-sans"
  style={{
  fontSize: 16,
  color: 'rgba(247, 244, 238, 0.7)',
  maxWidth: 540,
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: 1.6,
  marginBottom: 28,
  }}
  >
  These tools give you a starting point. I can help you build a complete plan around what they show. Just a real conversation about your situation.
  </p>
  <a
  href="/schedule-consultation"
  className="font-sans"
  style={{
  display: 'inline-block',
  fontSize: 15,
  fontWeight: 600,
  color: '#F7F4EE',
  background: 'linear-gradient(to bottom, #2a9dab, #1d7682)',
  border: 'none',
  borderRadius: 9999,
  padding: '18px 36px',
  textDecoration: 'none',
  boxShadow:
   'inset 0 1px 1px rgba(255,255,255,0.25), 0 2px 8px rgba(29,118,130,0.3)',
  }}
  >
  Schedule a conversation with Jay &rarr;
  </a>
 </section>

 {/* Card hover styles */}
 <style>{`
  .tool-card:hover {
  box-shadow: 0 8px 32px rgba(29, 118, 130, 0.12);
  transform: translateY(-2px);
  }
 `}</style>
 </>
 )
}
