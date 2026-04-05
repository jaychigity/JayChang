import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
 title: 'Financial Tools & Calculators | Advisor Jay',
 description:
 'Free interactive financial tools and assessments - tax savings calculators, retirement readiness checks, estate complexity scoring, equity compensation timelines, and business exit scorecards.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/tools',
 },
 openGraph: {
 title: 'Financial Tools & Calculators | Farther',
 description:
 'Free interactive tools to help you make smarter wealth decisions. Calculators, assessments, and scorecards - instant results, no sign-up required.',
 url: 'https://www.PWM-Farther.com/tools',
 },
}

const tools = [
 {
 href: '/tools/retirement-readiness',
 title: 'Retirement Readiness Assessment',
 description:
 'Are you on track? Answer 10 quick questions to get a personalized score across savings rate, asset benchmarks, and funding projections.',
 time: '60 seconds',
 category: 'Assessment',
 },
 {
 href: '/tools/ca-nv-tax-savings',
 title: 'California vs. Nevada vs. Arizona Tax Savings Estimator',
 description:
 'Compare your 5-year state tax bill across California, Nevada, and Arizona - covering income, capital gains, RSU vesting, and real estate gains.',
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
 href: '/tools/equity-compensation',
 title: 'Equity Compensation Decision Tool',
 description:
 'Visualize your equity compensation timeline - vesting events, tax triggers, and optimization windows for RSUs, ISOs, NQSOs, and ESPPs.',
 time: 'Instant analysis',
 category: 'Planning Tool',
 },
 {
 href: '/tools/business-exit-scorecard',
 title: 'Business Exit Readiness Scorecard',
 description:
 'Score your readiness for a business exit across Financial, Operational, Tax, and Succession dimensions with 10 targeted questions.',
 time: '60 seconds',
 category: 'Scorecard',
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
 href: '/tools/roth-conversion',
 title: 'Roth IRA Conversion Calculator',
 description:
 'Compare the long-term after-tax impact of converting a Traditional IRA to a Roth IRA - factoring in upfront tax cost, projected growth, and break-even retirement tax rate.',
 time: 'Instant analysis',
 category: 'Calculator',
 },
 {
 href: '/tools/tvm-calculator',
 title: 'What Your Money Becomes — TVM Calculator',
 description:
 'See how compound returns, dividends, and reinvestment transform your investment over time. Map your wealth trajectory to real-world milestones and model the impact of market corrections.',
 time: '45 seconds',
 category: 'Calculator',
 },
 {
 href: '/tools/att-pension',
 title: 'AT&T Pension & Retirement Suite',
 description:
 'Six calculators for AT&T employees — cash balance pension, union pension band, lump sum vs annuity, early retirement reduction, 401(k) projection, and income gap analysis.',
 time: 'Instant analysis',
 category: 'Calculator Suite',
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
  maxWidth: 720,
  marginLeft: 'auto',
  marginRight: 'auto',
  }}
  >
  Make Smarter Wealth Decisions
  </h1>
  <p
  className="font-sans"
  style={{
  fontSize: 18,
  color: 'rgba(247, 244, 238, 0.75)',
  maxWidth: 580,
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: 1.6,
  }}
  >
  Free interactive assessments and calculators built to help you
  understand your financial picture - instant results, no sign-up
  required.
  </p>
 </section>

 {/* Tool Cards Grid */}
 <section
  style={{
  backgroundColor: '#F7F4EE',
  padding: '64px 40px 80px',
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
  Want a personalized analysis?
  </h2>
  <p
  className="font-sans"
  style={{
  fontSize: 16,
  color: 'rgba(247, 244, 238, 0.7)',
  maxWidth: 480,
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: 1.6,
  marginBottom: 28,
  }}
  >
  These tools provide a starting point. A conversation with a fiduciary
  advisor can turn the numbers into a plan.
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
  Start a Conversation
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
