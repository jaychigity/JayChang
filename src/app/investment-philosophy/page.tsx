import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
 ArrowRight,
 Shield,
 BarChart3,
 TrendingUp,
 Target,
 Layers,
 Brain,
 LineChart,
 DollarSign,
 Globe,
 Zap,
 CheckCircle,
 Phone,
 Mail,
} from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'

export const metadata: Metadata = {
 title:
  'How We Invest Your Money | Advisor Jay',
 description:
  'A straightforward, tax-smart approach to growing and protecting wealth for families and business owners with $2M-$20M+ in investable assets. Real human advice, backed by great technology.',
 alternates: {
  canonical: 'https://www.PWM-Farther.com/investment-philosophy',
 },
 openGraph: {
  title:
   'How We Invest Your Money | Advisor Jay',
  description:
   'A straightforward, tax-smart approach to growing and protecting wealth for families and business owners with $2M-$20M+ in investable assets.',
  url: 'https://www.PWM-Farther.com/investment-philosophy',
 },
}

function Bullet({ children }: { children: React.ReactNode }) {
 return (
  <li className="flex items-start gap-3">
   <span className="mt-[10px] h-[7px] w-[7px] min-w-[7px] rounded-full bg-[#1d7682]" />
   <span className="font-sans text-body text-[#5b6a71] leading-relaxed">
    {children}
   </span>
  </li>
 )
}

const principles = [
 {
  icon: Shield,
  title: 'Protect what you have first.',
  body: 'Before we chase growth, we make sure your portfolio can take a punch. A well-diversified portfolio is your armor during rough markets - it keeps you from making panic decisions when things get bumpy.',
 },
 {
  icon: Target,
  title: 'Fancy only counts if it actually helps.',
  body: 'We only use complex strategies when they solve a real problem for you - like reducing risk from too much company stock, managing cash around a business sale, or passing assets to the next generation. If it doesn\'t serve a clear purpose, we skip it.',
 },
 {
  icon: DollarSign,
  title: 'Taxes are a drag on your returns. We take that seriously.',
  body: `When future returns might be more modest, the gap between what you earn and what you keep really matters. Here's a simple example: if your investments return 5% before taxes but smart tax management bumps that to 7% after taxes, over time that difference adds up to 34% more money in your pocket. That's not a rounding error.`,
 },
 {
  icon: Layers,
  title: 'True diversification takes guts.',
  body: 'We don\'t just pile into whatever worked last year. The "buy big tech and forget it" approach had a great run, but we know markets rotate. We spread across different asset types, dig deeper within each one, and stay ready to shift when real opportunities show up.',
 },
 {
  icon: Brain,
  title: 'You get a real person making real decisions.',
  body: 'Technology handles the number crunching and execution. Our team handles the thinking, the listening, and the big-picture strategy. Farther\'s platform makes us faster and sharper - but it doesn\'t replace the human judgment that matters most.',
 },
]

const steps = [
 {
  number: '01',
  title: 'Getting to Know Your Full Picture',
  body: 'Before we invest a single dollar, we sit down and map out everything - your income, what you need access to, business interests, real estate, estate plans, concentrated stock positions, and your tax situation. For families with $5M-$20M, this context shapes every decision we make together.',
 },
 {
  number: '02',
  title: 'Building Your Investment Mix',
  body: 'We put together a core allocation across multiple asset types that don\'t all move in the same direction - not just stocks and bonds. The goal is genuine diversification that actually reduces risk, not just a longer list of holdings.',
 },
 {
  number: '03',
  title: 'Tailoring It to You',
  body: 'Your portfolio should reflect how you actually feel about risk, not just what a questionnaire says. We calibrate everything to your cash needs, your timelines for different goals, and honestly, how well you sleep at night during a market drop. The best portfolio on paper is useless if you bail out during a correction.',
 },
 {
  number: '04',
  title: 'Staying On Top of It Together',
  body: 'Your portfolio is watched by a dedicated team - real people, not just algorithms. We rebalance regularly, make tactical moves when the market calls for it, and adjust things as your life changes. Because your life doesn\'t stay static, and neither should your investments.',
 },
]

const outlookThemes = [
 {
  icon: TrendingUp,
  title: 'Buckle up for some turbulence.',
  body: 'The second year of a presidential cycle has historically been the roughest for stocks, with sell-offs averaging close to 20%. We see potential dips as buying opportunities, not reasons to hit the panic button.',
 },
 {
  icon: Zap,
  title: 'AI hype will separate winners from losers.',
  body: 'Not every company throwing money at AI is going to win. We think the market is getting pickier, and we want to own the companies that are actually building something real with AI - not just talking about it.',
 },
 {
  icon: Globe,
  title: 'There are deals overseas.',
  body: 'Foreign stocks are still cheaper than their U.S. counterparts. We see real opportunity in Japan and South Korea, where corporate governance reforms and share buyback programs could create nice tailwinds for patient investors.',
 },
 {
  icon: LineChart,
  title: 'Expect more modest returns ahead.',
  body: 'After three strong years, valuations are stretched and Treasury yields sit around 4%. That means smart tax planning and real diversification matter even more than usual going forward.',
 },
]

export default function InvestmentPhilosophyPage() {
 return (
  <>
   {/* ================================================================
    SECTION 1: HERO
    ================================================================ */}
   <section className="relative bg-[#333333] bg-texture-dark pt-[140px] pb-[96px] md:pt-[180px] md:pb-[120px] overflow-hidden">
    {/* Hero background image - semi-transparent overlay */}
    <div className="absolute inset-0 z-0">
     <Image
      src="/Photos/portfolio.png"
      alt=""
      fill
      className="object-cover object-center opacity-20"
      priority
      sizes="100vw"
     />
    </div>
    <div className="relative z-10 max-w-container mx-auto px-[20px] md:px-[80px]">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left column: Text */}
      <div>
       <AnimateOnScroll>
        <SectionEyebrow text="INVESTMENT PHILOSOPHY" light />
       </AnimateOnScroll>

       <AnimateOnScroll delay={100}>
        <h1 className="font-serif text-[36px] md:text-[56px] font-bold text-[#F7F4EE] leading-[1.15] mt-6">
         Clear Thinking. Smart Moves. No Gimmicks.
        </h1>
       </AnimateOnScroll>

       <AnimateOnScroll delay={200}>
        <p className="font-sans text-[17px] md:text-[20px] font-light text-[#b6d0ed] leading-[1.6] max-w-[580px] mt-6">
         You didn't build your wealth by accident - so
         why would you hand it off to a cookie-cutter strategy?
         Our team combines real human judgment with Farther's
         Intelligent Wealth Platform to grow what you've
         earned, manage risk with intention, and keep more of
         your money out of Uncle Sam's hands.
        </p>
       </AnimateOnScroll>

       <AnimateOnScroll delay={300}>
        <div className="mt-8">
         <Button
          href="/schedule-consultation"
          variant="primary"
         >
          Let's Talk About Your Portfolio{' '}
          <ArrowRight className="inline-block ml-2 w-4 h-4" />
         </Button>
        </div>
       </AnimateOnScroll>
      </div>

      {/* Right column: Jay B&W Headshot */}
      <AnimateOnScroll delay={200}>
       <div className="relative w-full max-w-md mx-auto lg:ml-auto rounded-lg overflow-hidden shadow-2xl">
        <Image
         src="/Photos/B&W-Jay-Headshot.png"
         alt="Jay Chang, Wealth Advisor at Farther"
         width={1024}
         height={948}
         className="w-full h-auto"
         priority
        />
       </div>
      </AnimateOnScroll>
     </div>
    </div>
   </section>

   {/* ================================================================
    SECTION 2: WHAT WE BELIEVE - Principles Before Products
    ================================================================ */}
   <section className="bg-[#F7F4EE] section-padding">
    <div className="max-w-container mx-auto">
     <AnimateOnScroll>
      <SectionEyebrow text="WHAT WE BELIEVE" />
     </AnimateOnScroll>
     <AnimateOnScroll delay={100}>
      <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 heading-accent">
       Principles First. Products Second.
      </h2>
     </AnimateOnScroll>
     <AnimateOnScroll delay={200}>
      <p className="font-sans text-body-lg text-[#5b6a71] leading-relaxed mt-6 max-w-[720px]">
       Every investment decision we make together starts with a set of
       beliefs we hold deeply - not whatever's trending on
       financial Twitter, not last quarter's hot fund, and definitely
       not guesswork. Here's what guides us:
      </p>
     </AnimateOnScroll>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {principles.map((p, i) => (
       <AnimateOnScroll key={p.title} delay={i * 100}>
        <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
         <p.icon className="w-8 h-8 text-[#1d7682] mb-4" strokeWidth={1.5} />
         <h3 className="font-sans text-[17px] font-semibold text-[#333333]">
          {p.title}
         </h3>
         <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
          {p.body}
         </p>
        </div>
       </AnimateOnScroll>
      ))}
     </div>
    </div>
   </section>

   {/* ================================================================
    SECTION 3: HOW WE BUILD PORTFOLIOS - Steps
    ================================================================ */}
   <section className="bg-[#FAFAF8] section-padding">
    <div className="max-w-container mx-auto">
     <AnimateOnScroll>
      <SectionEyebrow text="HOW WE BUILD PORTFOLIOS" />
     </AnimateOnScroll>
     <AnimateOnScroll delay={100}>
      <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 heading-accent">
       Your Money, Your Plan.
      </h2>
     </AnimateOnScroll>
     <AnimateOnScroll delay={200}>
      <p className="font-sans text-body-lg text-[#5b6a71] leading-relaxed mt-6 max-w-[720px]">
       We don't start with a model portfolio and squeeze you into
       it. Every plan begins with your life - where you are today
       and where you want to go. Here's how we build it, step by step:
      </p>
     </AnimateOnScroll>

     {/* Steps */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {steps.map((step, i) => (
       <AnimateOnScroll key={step.number} delay={i * 100}>
        <div className="border-l-4 border-[#1d7682] pl-7 py-2">
         <span className="font-sans text-[13px] font-bold text-[#1d7682] tracking-[0.15em]">
          STEP {step.number}
         </span>
         <h3 className="font-serif text-[22px] font-semibold text-[#333333] mt-2">
          {step.title}
         </h3>
         <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
          {step.body}
         </p>
        </div>
       </AnimateOnScroll>
      ))}
     </div>

     {/* Asset Class Detail - under Step 2 */}
     <AnimateOnScroll delay={200}>
      <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[16px] p-[40px_32px] md:p-[48px] mt-12">
       <h3 className="font-serif text-[22px] font-semibold text-[#333333]">
        The Building Blocks We Use
       </h3>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-8">
        <div>
         <h4 className="font-sans text-[15px] font-semibold text-[#333333] flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-[#1d7682]" />
          Public Equities
         </h4>
         <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-2">
          U.S. large-cap, mid-cap, small-cap, and international stocks,
          with thoughtful sector allocation based on what's happening
          in the broader economy. When things get rocky, we may lean
          into steadier sectors like healthcare and consumer staples
          to smooth the ride.
         </p>
        </div>
        <div>
         <h4 className="font-sans text-[15px] font-semibold text-[#333333] flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#1d7682]" />
          Fixed Income
         </h4>
         <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-2">
          Municipal bonds when the tax math makes sense for you; U.S.
          Treasuries over corporate bonds when credit spreads are too
          tight to justify the extra risk; and TIPS bonds to help
          protect against inflation eating away at your purchasing power.
         </p>
        </div>
        <div>
         <h4 className="font-sans text-[15px] font-semibold text-[#333333] flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#1d7682]" />
          Alternative Investments
         </h4>
         <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-2">
          Private credit, private real estate, infrastructure, and
          private equity/venture capital through Farther's carefully
          vetted network. We prefer specialized, focused managers
          over the giant one-size-fits-all funds.
         </p>
        </div>
        <div>
         <h4 className="font-sans text-[15px] font-semibold text-[#333333] flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-[#1d7682]" />
          Cash &amp; Liquidity Reserves
         </h4>
         <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-2">
          We keep enough on the sidelines so you're never forced to
          sell investments at the worst possible time.
         </p>
        </div>
       </div>
      </div>
     </AnimateOnScroll>
    </div>
   </section>

   {/* ================================================================
    SECTION 4: ALTERNATIVE INVESTMENTS
    ================================================================ */}
   <section className="bg-[#333333] bg-texture-dark section-padding">
    <div className="max-w-container mx-auto">
     <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
      <div>
       <AnimateOnScroll>
        <SectionEyebrow text="ALTERNATIVE INVESTMENTS" light />
       </AnimateOnScroll>
       <AnimateOnScroll delay={100}>
        <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#F7F4EE] mt-4">
         Beyond Stocks and Bonds - But Only When It Makes Sense.
        </h2>
       </AnimateOnScroll>
       <AnimateOnScroll delay={200}>
        <p className="font-sans text-body text-[#b6d0ed] leading-relaxed mt-6">
         For families with $5M or more, alternatives can be a really
         valuable part of the mix - but we're not going to add them
         just to look impressive. We only go there when a specific
         strategy solves a specific need: returns that don't move
         with stocks, protection against inflation, steady income, or
         reducing overall risk.
        </p>
       </AnimateOnScroll>
      </div>

      <AnimateOnScroll delay={150}>
       <div className="space-y-6">
        <p className="font-sans text-[13px] font-bold text-[#1d7682] tracking-[0.15em] uppercase">
         OUR APPROACH
        </p>
        {[
         {
          label: 'Private Credit',
          desc: 'We steer away from the biggest names in private credit and lean toward niche managers who are more selective. After several years of strong returns, some cracks are starting to show among certain issuers, and we want to be on the right side of that.',
         },
         {
          label: 'Private Real Estate',
          desc: 'Same philosophy here - we use specialized managers who know their markets inside and out, not giant mega-funds trying to be everything to everyone.',
         },
         {
          label: 'Infrastructure',
          desc: 'We like infrastructure for what it is: real assets with returns that tend to keep pace with inflation. It\'s a solid, steady piece of the puzzle.',
         },
         {
          label: 'Private Equity &amp; Venture Capital',
          desc: 'We favor managers who buy through the secondary market, which often means better entry prices and a shorter wait to get your money back.',
         },
        ].map((item) => (
         <div
          key={item.label}
          className="border-l-2 border-[#1d7682] pl-5"
         >
          <p
           className="font-sans text-[15px] font-semibold text-[#F7F4EE]"
           dangerouslySetInnerHTML={{ __html: item.label }}
          />
          <p className="font-sans text-[15px] text-[#b6d0ed] leading-relaxed mt-1">
           {item.desc}
          </p>
         </div>
        ))}
       </div>
      </AnimateOnScroll>
     </div>

     {/* Alternatives Disclaimer */}
     <AnimateOnScroll delay={300}>
      <div className="mt-12 border-t border-[rgba(182,208,237,0.15)] pt-6">
       <p className="font-sans text-[13px] text-[#b6d0ed]/70 leading-relaxed max-w-[900px]">
        Alternative investments involve additional risks including
        illiquidity, lack of transparency, and limited regulatory
        oversight. They are not appropriate for all investors. We evaluate
        suitability based on your overall financial picture, liquidity
        needs, and investment time horizon before making any allocation
        recommendation.
       </p>
      </div>
     </AnimateOnScroll>
    </div>
   </section>

   {/* ================================================================
    SECTION 5: TAX MANAGEMENT
    ================================================================ */}
   <section className="bg-[#F7F4EE] section-padding">
    <div className="max-w-container mx-auto">
     <AnimateOnScroll>
      <SectionEyebrow text="TAX MANAGEMENT" />
     </AnimateOnScroll>
     <AnimateOnScroll delay={100}>
      <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 heading-accent">
       What You Keep Matters More Than What You Earn.
      </h2>
     </AnimateOnScroll>
     <AnimateOnScroll delay={200}>
      <p className="font-sans text-body-lg text-[#5b6a71] leading-relaxed mt-6 max-w-[720px]">
       If you're in a high tax bracket, the difference between gross
       and net returns is the difference between your wealth growing or
       just treading water. That's why we build tax awareness into every
       single investment decision from day one - it's not something
       we bolt on at the end.
      </p>
     </AnimateOnScroll>

     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
      {/* Tax-Loss Harvesting */}
      <AnimateOnScroll>
       <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
        <TrendingUp className="w-8 h-8 text-[#1d7682] mb-4" strokeWidth={1.5} />
        <h3 className="font-sans text-[17px] font-semibold text-[#333333]">
         Active Tax-Loss Harvesting
        </h3>
        <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
         Here's the idea: when a holding drops in value, we sell it
         and replace it with something very similar. You keep essentially
         the same portfolio exposure, but now you've banked a tax loss
         that offsets gains elsewhere. Studies show this can add 1-2%
         per year to your after-tax returns. Farther's platform
         spots these opportunities automatically, and our team confirms
         each one makes sense in the context of your bigger plan.
        </p>
       </div>
      </AnimateOnScroll>

      {/* Asset Location */}
      <AnimateOnScroll delay={100}>
       <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
        <Layers className="w-8 h-8 text-[#1d7682] mb-4" strokeWidth={1.5} />
        <h3 className="font-sans text-[17px] font-semibold text-[#333333]">
         Putting the Right Assets in the Right Accounts
        </h3>
        <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3 mb-4">
         If you have both taxable and tax-deferred accounts, where you
         hold each investment matters just as much as what you hold:
        </p>
        <ul className="space-y-3">
         <Bullet>
          <strong>Taxable accounts:</strong> Tax-friendly investments
          like stocks and municipal bonds that generate minimal
          taxable income
         </Bullet>
         <Bullet>
          <strong>Tax-deferred accounts (IRAs, 401(k)s):</strong>{' '}
          Tax-heavy investments like high-yield bonds, private
          credit, and other things that throw off ordinary income
         </Bullet>
        </ul>
       </div>
      </AnimateOnScroll>

      {/* Tax-Intelligent Tech */}
      <AnimateOnScroll delay={200}>
       <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
        <Zap className="w-8 h-8 text-[#1d7682] mb-4" strokeWidth={1.5} />
        <h3 className="font-sans text-[17px] font-semibold text-[#333333]">
         Technology That Watches the Tax Details
        </h3>
        <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
         Every strategy on Farther's platform benefits from built-in
         tax intelligence. The system monitors your portfolio around the
         clock for harvesting opportunities, wash-sale rules, and
         whether your accounts have drifted from their ideal tax
         setup - so our team can act quickly and precisely in ways
         that just aren't possible doing it all by hand.
        </p>
       </div>
      </AnimateOnScroll>
     </div>

     {/* Tax Disclaimer */}
     <AnimateOnScroll delay={300}>
      <p className="font-sans text-[12px] text-[#5b6a71]/80 leading-relaxed mt-8 max-w-[900px] italic">
       Farther's tax alpha methodology is calculated using
       standardized assumptions including specific short-term (40.8%) and
       long-term (23.8%) tax rates. Individual results will vary based on
       your personal tax situation. Farther does not provide tax or legal
       advice; please consult your tax and legal professionals for
       guidance on these matters.
      </p>
     </AnimateOnScroll>
    </div>
   </section>

   {/* ================================================================
    SECTION 6: TECHNOLOGY-ENHANCED ADVICE
    ================================================================ */}
   <section className="bg-[#FAFAF8] section-padding">
    <div className="max-w-container mx-auto">
     <AnimateOnScroll>
      <SectionEyebrow text="TECHNOLOGY-ENHANCED ADVICE" />
     </AnimateOnScroll>
     <AnimateOnScroll delay={100}>
      <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 heading-accent">
       We Do the Thinking. Our Platform Does the Heavy Lifting.
      </h2>
     </AnimateOnScroll>
     <AnimateOnScroll delay={200}>
      <p className="font-sans text-body-lg text-[#5b6a71] leading-relaxed mt-6 max-w-[720px]">
       Most places make you choose: get a real advisor or get great
       technology. At Farther, you get both. The Intelligent Wealth
       Platform was built from scratch - not patched onto some
       outdated system - to make our team better at what we do,
       not to replace us.
      </p>
     </AnimateOnScroll>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
      {/* What the platform does */}
      <AnimateOnScroll>
       <div className="bg-[#333333] rounded-[16px] p-[40px]">
        <p className="font-sans text-[13px] font-bold text-[#1d7682] tracking-[0.15em] uppercase mb-6">
         WHAT THE PLATFORM DOES
        </p>
        <ul className="space-y-4">
         {[
          'Builds detailed financial roadmaps based on your goals and what matters to you',
          'Watches your portfolio 24/7 for tax-loss harvesting chances, rebalancing triggers, and anything that looks off',
          'Turns mountains of portfolio data into clear, actionable insights so we can execute smarter and faster',
          'Makes advanced portfolio customization possible in ways that would be a nightmare to do manually',
         ].map((item) => (
          <li key={item} className="flex items-start gap-3">
           <Zap className="w-4 h-4 text-[#1d7682] mt-1 shrink-0" />
           <span className="font-sans text-[15px] text-[#b6d0ed] leading-relaxed">
            {item}
           </span>
          </li>
         ))}
        </ul>
       </div>
      </AnimateOnScroll>

      {/* What your advisor does */}
      <AnimateOnScroll delay={150}>
       <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[16px] p-[40px]">
        <p className="font-sans text-[13px] font-bold text-[#333333] tracking-[0.15em] uppercase mb-6">
         WHAT OUR TEAM DOES
        </p>
        <ul className="space-y-4">
         {[
          'Listens to the stuff no algorithm can pick up - your family dynamics, your gut feelings about risk, what "enough" actually means to you',
          'Makes the strategic calls about when to act and when to sit tight',
          'Works hand-in-hand with your CPA, estate attorney, and other advisors',
          'Sits on your side of the table as your fiduciary advocate for every financial decision',
         ].map((item) => (
          <li key={item} className="flex items-start gap-3">
           <CheckCircle className="w-4 h-4 text-[#333333] mt-1 shrink-0" />
           <span className="font-sans text-[15px] text-[#333333] leading-relaxed">
            {item}
           </span>
          </li>
         ))}
        </ul>
       </div>
      </AnimateOnScroll>
     </div>

     <AnimateOnScroll delay={200}>
      <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-10 max-w-[800px]">
       The bottom line? Technology handles the daily monitoring and
       analytical grunt work, which frees our team to focus on what
       actually makes the biggest difference: the strategic conversations,
       the relationship, and the deeply personal work of managing your
       wealth well.
      </p>
     </AnimateOnScroll>
    </div>
   </section>

   {/* ================================================================
    SECTION 7: 2026 MARKET CONTEXT
    ================================================================ */}
   <section className="bg-[#333333] bg-texture-dark section-padding">
    <div className="max-w-container mx-auto">
     <AnimateOnScroll>
      <SectionEyebrow text="OUR CURRENT THINKING" light />
     </AnimateOnScroll>
     <AnimateOnScroll delay={100}>
      <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#F7F4EE] mt-4">
       What We're Watching in 2026.
      </h2>
     </AnimateOnScroll>
     <AnimateOnScroll delay={200}>
      <p className="font-sans text-body text-[#b6d0ed] leading-relaxed mt-6 max-w-[680px]">
       Markets never stand still, and neither does our thinking. The best
       strategy looks ahead instead of just reacting. Here's what's
       on our radar heading into the rest of 2026:
      </p>
     </AnimateOnScroll>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {outlookThemes.map((theme, i) => (
       <AnimateOnScroll key={theme.title} delay={i * 100}>
        <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(182,208,237,0.1)] rounded-[12px] p-[32px]">
         <theme.icon className="w-8 h-8 text-[#1d7682] mb-4" strokeWidth={1.5} />
         <h3 className="font-sans text-[17px] font-semibold text-[#F7F4EE]">
          {theme.title}
         </h3>
         <p className="font-sans text-[15px] text-[#b6d0ed] leading-relaxed mt-3">
          {theme.body}
         </p>
        </div>
       </AnimateOnScroll>
      ))}
     </div>

     <AnimateOnScroll delay={400}>
      <p className="font-sans text-[12px] text-[#b6d0ed]/60 leading-relaxed mt-10 max-w-[900px] italic">
       This commentary reflects our views as of March 2026 and is subject
       to change. It is provided for informational purposes only and does
       not constitute investment advice or a recommendation to buy, sell,
       or hold any security. Past performance is not indicative of future
       results.
      </p>
     </AnimateOnScroll>
    </div>
   </section>

   {/* ================================================================
    SECTION 8: CLOSING CTA
    ================================================================ */}
   <section className="bg-[#F7F4EE] section-padding">
    <div className="max-w-[800px] mx-auto text-center px-[20px]">
     <AnimateOnScroll>
      <SectionEyebrow text="NEXT STEPS" />
     </AnimateOnScroll>
     <AnimateOnScroll delay={100}>
      <h2 className="font-serif text-[32px] md:text-[42px] font-bold text-[#333333] mt-4">
       Let's Build a Plan That Actually Fits Your Life.
      </h2>
     </AnimateOnScroll>
     <AnimateOnScroll delay={200}>
      <p className="font-sans text-body-lg text-[#5b6a71] leading-relaxed mt-6">
       The best time to get your investment strategy right is before
       the market makes the decision for you. If you're wondering
       whether your current portfolio is set up for where you're
       going - not just where you've been - we'd love to
       have that conversation.
      </p>
     </AnimateOnScroll>
     <AnimateOnScroll delay={300}>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
       <Button
        href="/schedule-consultation"
        variant="primary"
       >
        Let's Have a Conversation{' '}
        <ArrowRight className="inline-block ml-2 w-4 h-4" />
       </Button>
       <Button
        href="https://www.farther.com/post/the-farther-2026-outlook-embrace-volatility"
        variant="outline"
       >
        Read Our 2026 Investment Outlook
       </Button>
      </div>
     </AnimateOnScroll>
     <AnimateOnScroll delay={400}>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 font-sans text-sm text-[#5b6a71]">
       <a
        href="tel:+14809440880"
        className="hover:text-[#1d7682] transition-colors flex items-center gap-2"
       >
        <Phone className="w-4 h-4" />
        (480) 944-0880
       </a>
       <a
        href="mailto:jay.chang@farther.com"
        className="hover:text-[#1d7682] transition-colors flex items-center gap-2"
       >
        <Mail className="w-4 h-4" />
        jay.chang@farther.com
       </a>
      </div>
     </AnimateOnScroll>
    </div>
   </section>

   {/* ================================================================
    COMPLIANCE FOOTER
    ================================================================ */}
   <section className="bg-[#FAFAF8] py-[40px]">
    <div className="max-w-[900px] mx-auto px-[20px] md:px-[80px]">
     <p className="font-sans text-[11px] text-[#5b6a71]/80 leading-[1.8]">
      Advisory services are provided by Farther Finance Advisors LLC, an
      SEC-registered investment adviser. Investing in securities involves
      risk, including the potential loss of principal. Before investing,
      consider your investment objectives, as well as Farther Finance
      Advisors LLC's fees and expenses. Farther Finance Advisors LLC
      does not provide tax or legal advice; please consult your tax and
      legal professionals for guidance on these matters. Alternative
      investments involve additional risks including illiquidity, limited
      transparency, and limited regulatory oversight and are not suitable
      for all investors. For more details, see our disclosures in{' '}
      <Link
       href="/documents/FFA-ADV-Packet-2.6.26.pdf"
       className="underline hover:text-[#1d7682]"
       target="_blank"
      >
       Form ADV Part 2
      </Link>
      . Past performance is not indicative of future results. The
      information presented on this page is for informational purposes only
      and does not constitute a recommendation or solicitation.{' '}
      <Link href="/disclosures" className="underline hover:text-[#1d7682]">
       Terms of Use
      </Link>{' '}
      |{' '}
      <Link href="/disclosures" className="underline hover:text-[#1d7682]">
       Privacy Policy
      </Link>{' '}
      |{' '}
      <Link
       href="/documents/FFA-ADV-Packet-2.6.26.pdf"
       className="underline hover:text-[#1d7682]"
       target="_blank"
      >
       Form CRS
      </Link>
     </p>
    </div>
   </section>
  </>
 )
}
