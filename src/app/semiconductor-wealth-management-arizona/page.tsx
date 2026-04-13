import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import SectionEyebrow from '@/components/SectionEyebrow';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export const metadata: Metadata = {
 title: 'Semiconductor & Tech Wealth Management in Arizona | RSU, SERPLUS & Equity Planning | Advisor Jay, Farther',
 description: 'Fiduciary wealth management for semiconductor and tech professionals at TSMC, Intel, NVIDIA, Apple, Microchip, and Amkor in Arizona. Jay Chang knows your benefits, your equity plans, and the financial complexity your career creates.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/semiconductor-wealth-management-arizona',
 },
};

const semiconductorTestimonials = [
 { quote: "When I moved from Oregon to Chandler, the tax implications were staggering. Jay coordinated a relocation strategy that saved over $30K in year one alone.", name: "Intel Director", location: "Portland → Chandler", detail: "Tax & relocation planning" },
 { quote: "I had over $2 million in NVDA stock concentrated in my portfolio. Jay built a rules-based diversification plan that freed up $600K to invest strategically.", name: "NVIDIA Principal Engineer", location: "Tempe, AZ", detail: "Stock diversification" },
 { quote: "I didn't think I needed a financial advisor at 31, but Jay showed me how to maximize my mega backdoor Roth and coordinate my equity grants. I'll have $200K more by the time I'm 45 just from these moves.", name: "Intel Early Career Engineer", location: "Chandler, AZ", detail: "Equity & tax optimization" },
 { quote: "I had RSUs vesting across multiple schedules and no strategy for any of it. Jay built an exercise and diversification timeline that aligned every decision with my tax bracket and retirement goals.", name: "Sarah K.", location: "Tempe, AZ", detail: "TSMC Engineer, Client Since 2022" },
 { quote: "Moving from Taiwan, I had no idea how U.S. taxes worked with my TSMC equity. Jay connected me with the right specialists and built a plan that accounts for everything - both countries.", name: "TSMC Process Engineer", location: "North Phoenix, AZ", detail: "Cross-border planning" },
 { quote: "Microchip's evergreen RSU grants hit my account every quarter with no plan. Jay gave me a written framework for every single vest. No more guessing.", name: "Microchip Senior Engineer", location: "Chandler, AZ", detail: "RSU management" },
];

export default function SemiconductorWealthManagementArizona() {
 const schemaData = {
 '@context': 'https://schema.org',
 '@type': 'FinancialService',
 name: 'Farther - Semiconductor Wealth Management Arizona',
 description: 'Fiduciary wealth management for semiconductor professionals',
 areaServed: {
 '@type': 'City',
 name: 'Phoenix',
 addressCountry: 'US',
 },
 url: 'https://www.PWM-Farther.com/semiconductor-wealth-management-arizona',
 telephone: '(480) 944-0880',
 priceRange: '$$',
 serviceType: ['Wealth Management', 'Financial Planning', 'Equity Planning'],
 };

 return (
 <>
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
 />

 {/* Hero Section */}
 <section className="bg-[#333333] text-white py-10 md:py-20 px-4 md:px-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  <div>
  <SectionEyebrow text="SEMICONDUCTOR & TECHNOLOGY" light />
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6">
   You Build the Chips That Power the World. Jay Builds the Financial Plan That Protects the Wealth You&apos;ve Earned Doing It.
  </h1>
  <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
   From TSMC&apos;s Fab 21 in North Phoenix to Intel&apos;s Chandler campus, from NVIDIA&apos;s quarterly vesting cycle to Apple&apos;s biannual RSU tranches - Jay Chang is the fiduciary advisor who knows your benefits package by name, knows the risks hiding inside it, and knows exactly what to do about them.
  </p>
  <Button href="/schedule-consultation" variant="primary">
   Schedule a Free Semiconductor Strategy Call
  </Button>
  </div>
  <div className="relative h-96 md:h-full">
  <Image
   src="/Photos/Semiconductor-1.png"
   alt="Semiconductor facilities and technology"
   width={1536}
   height={1024}
   className="w-full h-auto rounded-lg"
   priority
  />
  </div>
  </div>
 </section>

 {/* Personal Note Section */}
 <section className="bg-[#F7F4EE] py-20 px-4 md:px-12">
  <AnimateOnScroll>
  <div className="max-w-3xl mx-auto">
  <blockquote className="border-l-4 border-[#1d7682] pl-8 py-8 italic text-lg leading-relaxed text-[#333333]">
   <p className="mb-6">
   I know Intel&apos;s SERPLUS by heart. I know why NVIDIA insiders hate restricted blackout periods. I know the tax structure hiding inside TSMC&apos;s relocation packages. I know Microchip&apos;s equity grant schedule. I know Amkor&apos;s Form 4 filing patterns and what they mean for your wealth.
   </p>
   <p className="mb-6">
   I&apos;ve built wealth plans for semiconductor engineers, finance professionals, operations leaders, and executives across every major fab and design center in Arizona. I know your compensation isn&apos;t just salary and bonus. I know your wealth is built in tranches, vesting schedules, and equity windows that require specialized expertise to recognize.
   </p>
   <p>
   More importantly: I know what happens when you don&apos;t plan for concentration risk, tax-deferred growth limits, and the financial complexity that comes with stock-heavy compensation in a volatile sector. Let&apos;s make sure that doesn&apos;t happen to you.
   </p>
   <footer className="text-base not-italic font-semibold text-[#333333] mt-6">
   - Jay Chang, Farther
   </footer>
  </blockquote>
  </div>
  </AnimateOnScroll>
 </section>

 {/* Arizona Semiconductor Capital Section */}
 <section className="bg-white py-20 px-4 md:px-12">
  <AnimateOnScroll>
  <div className="max-w-4xl mx-auto">
  <SectionEyebrow text="THE ARIZONA SEMICONDUCTOR CAPITAL" />
  <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mt-6 mb-8">
   The Wealth You&apos;re Building Is Real. The Complexity Is Real, Too.
  </h2>
  <div className="space-y-6 text-lg leading-relaxed text-[#5b6a71]">
   <p>
   TSMC&apos;s $65 billion investment in Fab 21 and the surrounding Phoenix ecosystem didn&apos;t just create jobs. It created one of the most dynamic wealth-building environments in North America. Intel&apos;s $7.87 billion CHIPS Act commitment, Microchip&apos;s expansion, Apple&apos;s supply chain investments, NVIDIA&apos;s design partnerships, and Amkor&apos;s advanced packaging facilities have all converged on greater Phoenix. For you, that means opportunity.
   </p>
   <p>
   But opportunity without planning is just exposure. Your compensation is built on equity. RSUs vesting quarterly. SERPLUS deferred compensation that won&apos;t be taxed until you separate. ESPP shares with restricted selling windows. Restricted stock units with performance conditions. Stock options with exercise deadlines. Relocation bonuses tied to multi-year employment conditions.
   </p>
   <p>
   NVIDIA alone has a beta of 2.31 against the market. Your personal income concentration, your equity exposure, and your tax liability are all non-linear and non-obvious. One bad quarter doesn\apos;t just hit the stock price - it hits your cash flow, your liquidity, and your financial security. Without a plan built specifically for semiconductor and tech compensation, you&apos;re managing this blind.
   </p>
  </div>
  </div>
  </AnimateOnScroll>
 </section>

 {/* Intel Section */}
 <section className="bg-[#FAFAF8] py-20 px-4 md:px-12">
  <AnimateOnScroll>
  <div className="max-w-5xl mx-auto">
  <SectionEyebrow text="INTEL CHANDLER" />
  <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mt-6 mb-12">
   Intel&apos;s Arizona Campus and Your Wealth Architecture
  </h2>

  {/* SERPLUS Subsection */}
  <div className="mb-12">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">SERPLUS Deferred Compensation</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71] mb-6">
   Intel&apos;s Senior Executive Retirement Plus plan is a deferred compensation structure that looks simple on paper: defer salary, get matching contributions, and access the funds later. What requires specialized advisory expertise to address is the concentration risk, the account-by-account withdrawal sequencing, and the tax efficiency opportunities that exist within that deferral election.
   </p>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   Your SERPLUS account carries counterparty risk tied to Intel&apos;s creditworthiness. Your withdrawal timing is constrained by IRS rules 409A. Your account can grow into significant wealth, but without a plan that acknowledges these constraints, you&apos;re leaving both wealth and optionality on the table.
   </p>
  </div>

  {/* Mega Backdoor Roth Subsection */}
  <div className="mb-12">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Mega Backdoor Roth Contributions</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71] mb-6">
   Intel&apos;s 401(k) plan allows after-tax contributions up to the annual IRS limit. That means you can contribute beyond the normal $24,500 employee deferral (2026 limit). But mega backdoor Roths require exact execution: contribution timing, immediate rollover procedures, pro-rata calculations if you have pre-tax balances.
   </p>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   One misstep in the sequence and you&apos;ve just created a tax liability you didn&apos;t intend. I coordinate this annually to ensure you&apos;re maximizing tax-free growth without triggering unintended tax events.
   </p>
  </div>

  {/* Vesting Calendar Subsection */}
  <div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">RSU Vesting Calendar & Concentrated Position Risk</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   Intel&apos;s RSU grants vest on a standard four-year schedule with 25% annual vesting. If you&apos;ve been there for multiple grant cycles, you&apos;re likely holding significant Intel stock that&apos;s creating concentration risk. That vesting calendar needs to coordinate with your tax plan, your diversification strategy, and your overall wealth architecture. Without coordination, you&apos;re selling RSUs in the wrong tax year or missing hedging opportunities that could protect gains.
   </p>
  </div>
  </div>
  </AnimateOnScroll>
 </section>

 {/* TSMC Section */}
 <section className="bg-white py-20 px-4 md:px-12">
  <AnimateOnScroll>
  <div className="max-w-5xl mx-auto">
  <SectionEyebrow text="TSMC FAB 21 & BEYOND" />
  <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mt-6 mb-12">
   TSMC&apos;s Arizona Expansion and Your Equity Planning
  </h2>

  {/* Relocation Subsection */}
  <div className="mb-12">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">International Relocation and Retention Bonuses</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71] mb-6">
   TSMC brought hundreds of engineers, process specialists, and leaders from Taiwan to Arizona. That relocation came with significant financial incentives: relocation bonuses, housing allowances, retention bonuses tied to multi-year employment conditions. These packages create non-obvious tax implications, especially if you&apos;re foreign national or tax resident in multiple jurisdictions.
   </p>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   The financial planning around these packages isn&apos;t just about managing the windfall. It&apos;s about structuring it in a way that minimizes tax drag, coordinates with your equity grants and vesting schedule, and aligns with your longer-term wealth plan.
   </p>
  </div>

  {/* Arizona Advantage Subsection */}
  <div className="mb-12">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">The Arizona Advantage: Supply Chain Momentum</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71] mb-6">
   TSMC&apos;s Arizona footprint creates supply chain stability and long-term demand visibility that&apos;s different from its Taiwan operations. That matters for your equity. TSMC&apos;s Arizona expansion is generating structural tailwinds: multi-year orders from Apple, AMD, Intel, NVIDIA, and others all dependent on reliable Phoenix-based production capacity.
   </p>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   Your equity holdings are capturing a piece of that momentum. But momentum isn&apos;t permanent, and concentration in a single company - especially one with significant geopolitical leverage - requires sophisticated hedging and diversification strategies.
   </p>
  </div>

  {/* Three-Phase Build Subsection */}
  <div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Three-Phase Build and Employment Continuity</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   TSMC&apos;s three-phase Arizona build means continuous expansion, ongoing hiring, and multi-decade employment runway. For you, that means employment security. But it also means your equity grants and retention schedules are built around these phases. Understanding the timeline, the business milestones, and the resulting equity lifecycle is essential to managing your wealth efficiently.
   </p>
  </div>
  </div>
  </AnimateOnScroll>
 </section>

 {/* NVIDIA Section */}
 <section className="bg-[#FAFAF8] py-20 px-4 md:px-12">
  <AnimateOnScroll>
  <div className="max-w-5xl mx-auto">
  <SectionEyebrow text="NVIDIA & AI INFRASTRUCTURE" />
  <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mt-6 mb-12">
   NVIDIA&apos;s Wealth Event and the Equity Concentration Challenge
  </h2>

  {/* Wealth Event Subsection */}
  <div className="mb-12">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">The AI Wealth Event</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71] mb-6">
   NVIDIA&apos;s trajectory in AI infrastructure created one of the largest wealth events for employees in a single company in recent history. RSU grants that were awarded at reasonable valuations five years ago are now worth multiples of their grant prices. For many NVIDIA employees in Arizona, that means personal net worth that&apos;s highly concentrated in a single volatile stock.
   </p>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   That&apos;s not a problem by itself. But it becomes a problem when you don&apos;t have a clear plan to manage it: when you&apos;re selling at tax-inefficient times, when you&apos;re failing to diversify in a way that preserves upside, when you&apos;re not protecting yourself against downside risk.
   </p>
  </div>

  {/* ESPP Subsection */}
  <div className="mb-12">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Employee Stock Purchase Plan (ESPP) Execution</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71] mb-6">
   NVIDIA&apos;s ESPP plan allows employees to purchase shares at a 15% discount using payroll deductions. That discount is immediate value. But the execution is important: when to exercise, when to hold, when to diversify. Many employees treat their ESPP like a set-it-and-forget-it benefit, but coordinating those purchases with your overall portfolio construction, tax-loss harvesting strategy, and diversification plan can meaningfully improve your after-tax returns.
   </p>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   I work with NVIDIA employees to execute ESPP contributions in a way that optimizes the discount benefit while managing concentration risk and tax efficiency.
   </p>
  </div>

  {/* Blackout Problem Subsection */}
  <div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Blackout Periods and Liquidity Planning</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   Insider blackout periods - the windows when officers, directors, and other insiders can&apos;t trade - are a fact of life at public companies. At NVIDIA, they constrain when you can execute your diversification plan. Quarterly earnings blackouts mean you might not be able to execute your intended sales or hedges during critical windows. That requires advance planning and strategic execution on the non-blackout dates.
   </p>
  </div>
  </div>
  </AnimateOnScroll>
 </section>

 {/* Microchip Section */}
 <section className="bg-white py-20 px-4 md:px-12">
  <AnimateOnScroll>
  <div className="max-w-5xl mx-auto">
  <SectionEyebrow text="MICROCHIP TECHNOLOGY" />
  <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mt-6 mb-12">
   Microchip&apos;s Arizona Presence and Broad-Based Equity Programs
  </h2>

  {/* Broad-Based Equity Subsection */}
  <div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Broad-Based Equity Grants and Tax Efficiency</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71] mb-6">
   Microchip&apos;s Arizona operations employ engineers, technicians, and support staff across multiple facilities. The company&apos;s broad-based equity program makes grants available to employees at all levels, not just executives. That&apos;s valuable, but it also means your equity package likely includes a mix of RSUs, performance shares, and stock options - each with different vesting schedules, tax treatments, and financial planning implications.
   </p>
   <p className="text-lg leading-relaxed text-[#5b6a71] mb-6">
   RSUs are taxed as ordinary income on vesting. Stock options carry capital gains treatment, but only if you hold them long enough. Performance shares depend on the company meeting specific financial targets. Without a clear picture of your entire equity package, you can&apos;t optimize the tax treatment or execute a coherent diversification strategy.
   </p>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   I work with Microchip employees to model the tax impact of each equity component, sequence your sales in a way that minimizes tax drag, and build a wealth plan that accounts for the full complexity of your compensation package.
   </p>
  </div>
  </div>
  </AnimateOnScroll>
 </section>

 {/* Amkor Section */}
 <section className="bg-[#FAFAF8] py-20 px-4 md:px-12">
  <AnimateOnScroll>
  <div className="max-w-5xl mx-auto">
  <SectionEyebrow text="AMKOR TECHNOLOGY" />
  <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mt-6 mb-12">
   Amkor&apos;s Advanced Packaging and Global Workforce
  </h2>

  {/* Global Workforce Subsection */}
  <div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Global Workforce, Local Opportunity</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71] mb-6">
   Amkor&apos;s advanced packaging and testing operations in Arizona place the company at the intersection of chip design and manufacturing. That creates sophisticated roles for process engineers, supply chain specialists, and operations leaders across multiple Arizona locations. Your compensation likely includes salary, bonus, and equity - and if you&apos;re in a leadership role, possibly stock options or restricted stock units.
   </p>
   <p className="text-lg leading-relaxed text-[#5b6a71] mb-6">
   Amkor&apos;s public filings (Form 4 insider transactions, proxy statements, quarterly earnings) reveal patterns of insider buying and selling that can inform your own equity planning. When leadership is buying, that&apos;s a signal. When they&apos;re diversifying, that&apos;s a signal too. Understanding what management is doing with their own equity can inform your strategy.
   </p>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   More importantly, your equity at Amkor needs to be integrated into a comprehensive wealth plan that accounts for your overall portfolio, your income diversification, and your long-term financial security. That&apos;s where structured financial planning comes in.
   </p>
  </div>
  </div>
  </AnimateOnScroll>
 </section>

 {/* Problems Section */}
 <section className="bg-white py-20 px-4 md:px-12">
  <AnimateOnScroll>
  <div className="max-w-6xl mx-auto">
  <SectionEyebrow text="FINANCIAL PLANNING FOR YOUR FUTURE" />
  <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mt-6 mb-12">
   The Problems Jay Solves
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
   {/* Problem 1 */}
   <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#333333] mb-3">Concentration Risk</h3>
   <p className="text-[#5b6a71] mb-4">
    Your net worth is held disproportionately in a single company stock - TSMC, Intel, NVIDIA, or Amkor. One bad product cycle or market dislocation vaporizes wealth.
   </p>
   <p className="font-semibold text-[#1d7682] text-sm">
    Jay&apos;s solution: Systematic diversification plan coordinated with tax optimization and insider trading blackout windows.
   </p>
   </div>
   </AnimateOnScroll>

   {/* Problem 2 */}
   <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#333333] mb-3">Deferred Compensation Complexity</h3>
   <p className="text-[#5b6a71] mb-4">
    Intel SERPLUS, TSMC relocation bonuses, and other deferred compensation create tax deferral opportunities - but also constraints and risks you don&apos;t fully understand.
   </p>
   <p className="font-semibold text-[#1d7682] text-sm">
    Jay&apos;s solution: Detailed modeling of your deferred compensation accounts, withdrawal sequencing, and 409A compliance strategy.
   </p>
   </div>
   </AnimateOnScroll>

   {/* Problem 3 */}
   <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#333333] mb-3">Tax-Inefficient Equity Sales</h3>
   <p className="text-[#5b6a71] mb-4">
    You&apos;re selling RSUs in the wrong tax year, missing tax-loss harvesting opportunities, and paying more in taxes than you need to on your diversification.
   </p>
   <p className="font-semibold text-[#1d7682] text-sm">
    Jay&apos;s solution: Year-round tax planning that coordinates vesting, selling, and diversification with your overall tax picture.
   </p>
   </div>
   </AnimateOnScroll>

   {/* Problem 4 */}
   <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#333333] mb-3">Blackout Period Blindness</h3>
   <p className="text-[#5b6a71] mb-4">
    Insider trading blackout windows constrain when you can execute your wealth plan, and you&apos;re not planning around them strategically.
   </p>
   <p className="font-semibold text-[#1d7682] text-sm">
    Jay&apos;s solution: Strategic execution calendar that maps your selling and hedging around known and probable blackout windows.
   </p>
   </div>
   </AnimateOnScroll>

   {/* Problem 5 */}
   <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#333333] mb-3">Retirement Account Limits</h3>
   <p className="text-[#5b6a71] mb-4">
    Your income is too high to use backdoor Roths efficiently, you&apos;re hitting 401(k) contribution limits, and you don&apos;t have a plan to shelter your full savings.
   </p>
   <p className="font-semibold text-[#1d7682] text-sm">
    Jay&apos;s solution: Mega backdoor Roth optimization, mega backdoor strategies, and beyond-401(k) wealth building plans.
   </p>
   </div>
   </AnimateOnScroll>

   {/* Problem 6 */}
   <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#333333] mb-3">No Integrated Plan</h3>
   <p className="text-[#5b6a71] mb-4">
    You have wealth scattered across equity, retirement accounts, and cash - but no cohesive strategy that ties it all together around your life goals.
   </p>
   <p className="font-semibold text-[#1d7682] text-sm">
    Jay&apos;s solution: Comprehensive financial planning that integrates your equity, retirement, tax, and goal planning into a single coherent strategy.
   </p>
   </div>
   </AnimateOnScroll>
  </div>
  </div>
  </AnimateOnScroll>
 </section>

 {/* Five Pillars Section */}
 <section className="bg-[#FAFAF8] py-20 px-4 md:px-12">
  <AnimateOnScroll>
  <div className="max-w-6xl mx-auto">
  <SectionEyebrow text="THE FIVE PILLARS OF SEMICONDUCTOR WEALTH" />
  <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mt-6 mb-12">
   How Jay Builds Your Wealth Plan
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
   {/* Pillar 1 */}
   <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full flex flex-col">
   <div className="text-3xl font-bold text-[#1d7682] mb-4">1.</div>
   <h3 className="text-lg font-bold text-[#333333] mb-3">Equity Inventory</h3>
   <p className="text-[#5b6a71] text-sm leading-relaxed">
    Complete accounting of every grant, vesting schedule, and equity component across your career at TSMC, Intel, NVIDIA, Microchip, Amkor, and other holdings.
   </p>
   </div>
   </AnimateOnScroll>

   {/* Pillar 2 */}
   <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full flex flex-col">
   <div className="text-3xl font-bold text-[#1d7682] mb-4">2.</div>
   <h3 className="text-lg font-bold text-[#333333] mb-3">Tax Optimization</h3>
   <p className="text-[#5b6a71] text-sm leading-relaxed">
    Year-round tax planning that minimizes your tax burden, maximizes deferred growth, and times sales strategically to reduce capital gains taxes.
   </p>
   </div>
   </AnimateOnScroll>

   {/* Pillar 3 */}
   <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full flex flex-col">
   <div className="text-3xl font-bold text-[#1d7682] mb-4">3.</div>
   <h3 className="text-lg font-bold text-[#333333] mb-3">Diversification Strategy</h3>
   <p className="text-[#5b6a71] text-sm leading-relaxed">
    Systematic plan to diversify concentrated positions while preserving upside, managing downside, and maintaining tax efficiency.
   </p>
   </div>
   </AnimateOnScroll>

   {/* Pillar 4 */}
   <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full flex flex-col">
   <div className="text-3xl font-bold text-[#1d7682] mb-4">4.</div>
   <h3 className="text-lg font-bold text-[#333333] mb-3">Retirement Architecture</h3>
   <p className="text-[#5b6a71] text-sm leading-relaxed">
    401(k) optimization, mega backdoor Roth planning, and beyond-401(k) wealth building to shelter your maximum possible savings.
   </p>
   </div>
   </AnimateOnScroll>

   {/* Pillar 5 */}
   <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full flex flex-col">
   <div className="text-3xl font-bold text-[#1d7682] mb-4">5.</div>
   <h3 className="text-lg font-bold text-[#333333] mb-3">Integrated Wealth Plan</h3>
   <p className="text-[#5b6a71] text-sm leading-relaxed">
    Cohesive strategy that ties together your equity, cash flow, goals, and timeline into a single financial plan aligned with your life.
   </p>
   </div>
   </AnimateOnScroll>
  </div>
  </div>
  </AnimateOnScroll>
 </section>

 {/* What Working With Jay Looks Like Section */}
 <section className="bg-white py-20 px-4 md:px-12">
  <AnimateOnScroll>
  <div className="max-w-4xl mx-auto">
  <SectionEyebrow text="THE PROCESS" />
  <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mt-6 mb-12">
   What Working With Jay Looks Like
  </h2>

  <div className="space-y-8">
   <div>
   <h3 className="text-xl font-bold text-[#333333] mb-3">1. Deep Dive into Your Compensation</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   We start with your complete compensation history: equity grants, vesting schedules, tax documents, and your current holdings. I want to understand not just what you have, but how it all fits together, what risks it creates, and what opportunities it presents.
   </p>
   </div>

   <div>
   <h3 className="text-xl font-bold text-[#333333] mb-3">2. Tax and Equity Scenario Modeling</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   I model multiple scenarios: when to diversify, how to time your sales across different equity components, where to harvest losses, and how to sequence your retirement account contributions. The goal is to identify the highest-impact opportunities specific to your situation.
   </p>
   </div>

   <div>
   <h3 className="text-xl font-bold text-[#333333] mb-3">3. Integrated Financial Plan</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   Your equity plan doesn't exist in isolation. I build a comprehensive financial plan that integrates your equity with your retirement goals, your income, your cash flow, and your life timeline. This is where the real value lies: seeing how your semiconductor wealth connects to your bigger life plan.
   </p>
   </div>

   <div>
   <h3 className="text-xl font-bold text-[#333333] mb-3">4. Ongoing Execution and Coordination</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   Plans don't execute themselves. I work with you throughout the year to execute your plan: coordinate your equity sales around tax-loss harvesting windows, manage your blackout period constraints, execute your 401(k) and backdoor Roth contributions, and make adjustments as your situation and market conditions change.
   </p>
   </div>

   <div>
   <h3 className="text-xl font-bold text-[#333333] mb-3">5. Annual Review and Adjustment</h3>
   <p className="text-lg leading-relaxed text-[#5b6a71]">
   Once a year, we step back and look at the full picture: what worked, what didn't, what changed about your situation or the market, and how your plan needs to evolve. Your wealth plan should be living and breathing, not static.
   </p>
   </div>
  </div>
  </div>
  </AnimateOnScroll>
 </section>

 {/* Testimonials */}
 <section className="bg-[#F7F4EE] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
  <div className="max-w-container mx-auto text-center">
  <AnimateOnScroll>
  <SectionEyebrow text="CLIENT TESTIMONIALS" />
  <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mt-4 mb-8">
   What Clients Say About Working With Jay
  </h2>
  </AnimateOnScroll>
  <TestimonialCarousel testimonials={semiconductorTestimonials} />
  </div>
 </section>

 {/* Final CTA Section */}
 <section className="bg-[#333333] text-white py-20 px-4 md:px-12">
  <AnimateOnScroll>
  <div className="max-w-3xl mx-auto text-center">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
   Arizona Semiconductor Boom Created the Opportunity of a Lifetime. Don&apos;t Leave Its Financial Management to Chance.
  </h2>
  <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
   You&apos;ve earned the opportunity to build significant wealth at TSMC, Intel, NVIDIA, Microchip, Amkor, and other semiconductor leaders. The right financial plan ensures you actually keep it.
  </p>
  <Button href="/schedule-consultation" variant="primary">
   Schedule Your Free Semiconductor Strategy Call
  </Button>
  </div>
  </AnimateOnScroll>
 </section>
 </>
 );
}
