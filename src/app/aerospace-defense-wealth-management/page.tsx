import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';
import SectionEyebrow from '@/components/SectionEyebrow';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export const metadata: Metadata = {
 title: 'Aerospace & Defense Wealth Management in Phoenix & Tucson | Honeywell & Raytheon Benefits | Advisor Jay, Farther',
 description: 'Fiduciary financial planning for Honeywell and Raytheon/RTX professionals in Phoenix and Tucson. Jay knows your pension, your 401(k) match structure, your deferred comp plans, and what Honeywell\'s spinoff into HONA means for your equity and retirement.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/aerospace-defense-wealth-management',
 },
};

const aerospaceTestimonials = [
 { quote: "The pension-vs.-lump-sum decision was keeping me up at night. Jay did a full break-even analysis and helped me understand the real implications of each choice.", name: "RTX Professional", location: "Tucson, AZ", detail: "Pension strategy" },
 { quote: "I had 34% of my 401(k) in Honeywell stock and didn't put it there on purpose. Jay built a reallocation plan that brought it to an intentional level without triggering any tax event.", name: "Honeywell Professional", location: "Phoenix, AZ", detail: "401(k) rebalancing" },
 { quote: "When I was considering early retirement at 58, Jay mapped my RTX pension, 401(k), deferred comp, and Social Security into one timeline. For the first time, I could see exactly how it all fit.", name: "RTX Professional", location: "Tucson, AZ", detail: "Retirement orchestration" },
 { quote: "The Honeywell spinoff has me worried about my equity. Jay is already walking me through what HONA means for my RSUs, my 401(k) match fund, and my overall portfolio.", name: "Honeywell Professional", location: "Phoenix, AZ", detail: "Spinoff planning" },
 { quote: "I enrolled in RTX's Lifetime Income Strategy years ago without understanding the trade-offs. Jay reviewed what I had, showed me what NUA could have done, and adjusted my remaining 401(k) to compensate.", name: "Raytheon Professional", location: "Green Valley, AZ", detail: "LIS & NUA review" },
];

export default function AerospaceDefenseWealthManagement() {
 return (
 <>
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Farther - Aerospace & Defense Wealth Management',
  description: 'Fiduciary financial planning for Honeywell and Raytheon/RTX professionals',
  areaServed: ['Phoenix, Arizona', 'Tucson, Arizona'],
  serviceType: ['Wealth Management', 'Retirement Planning', 'Investment Management'],
  url: 'https://www.PWM-Farther.com/aerospace-defense-wealth-management',
  }),
  }}
 />

 {/* Hero Section */}
 <section className="bg-[#333333] text-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div>
   <SectionEyebrow text="AEROSPACE & DEFENSE" light />
   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6">
   You&apos;ve Spent a Career Building Incredibly Complex Systems. Your Financial Plan Should Be Built With the Same Precision.
   </h1>
   <p className="text-lg text-gray-300 mb-8 leading-relaxed">
   Honeywell&apos;s spinoff into Aeronautical Systems (HONA) transforms your equity compensation. RTX&apos;s $2.5B pension transfer to Prudential affects your retirement income decision. Your 401(k) match structure compounds concentration risk. Your deferred comp plan operates under Section 409A rules that require specialized expertise to address. These aren&apos;t generic financial problems. They&apos;re aerospace-specific strategic decisions that require precision.
   </p>
   <div className="flex flex-col sm:flex-row gap-4">
   <Button href="/schedule-consultation" variant="primary">
   Schedule Your Aerospace & Defense Strategy Call
   </Button>
   </div>
  </div>
  <div className="relative">
   <Image
   src="/Photos/Aerospace.png"
   alt="Aerospace and Defense Industry"
   width={1536}
   height={1024}
   className="w-full h-auto rounded-lg"
   />
  </div>
  </div>
  </div>
 </section>

 {/* Personal Note from Jay */}
 <section className="bg-[#F7F4EE] py-16 lg:py-24">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <div className="border-l-4 border-[#1d7682] pl-8 py-8">
   <p className="text-lg leading-relaxed text-[#333333] mb-4">
   I&apos;ve worked with dozens of Honeywell and RTX professionals in Phoenix and Tucson. I know the difference between Honeywell&apos;s Match-as-HON-Stock structure and the HONA conversion ahead. I understand why RTX&apos;s CDP (Cash Deferral Plan) and PSU Deferral Plan require careful coordination with your pension lump-sum election. I know that your 401(k) match arrives as company stock — and that concentration risk is real when you&apos;ve also received RSU grants and accumulated shares through your career.
   </p>
   <p className="text-lg leading-relaxed text-[#333333] mb-4">
   The spinoff isn&apos;t an abstract corporate event. It means your Honeywell equity automatically converts to two stocks. Your tax basis matters. The timing of the ex-date matters. Whether you reinvest dividends matters. And whether your deferred comp plan treats the spinoff as a taxable event (it doesn&apos;t, under Section 409A, but your current advisor might not be certain) matters enormously.
   </p>
   <p className="text-lg leading-relaxed text-[#333333]">
   Your financial plan should reflect the same precision you&apos;ve brought to your career. That&apos;s what we build together.
   </p>
   <p className="mt-6 font-semibold text-[#1d7682]"> — Jay Chang, Farther</p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Two Transformational Events */}
 <section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="CRITICAL TRANSITIONS" />
  <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-4">
   Two Transformational Events Reshaping Your Retirement
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
  {/* Honeywell HONA Spinoff */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   Honeywell Aerospace → HONA Spinoff (Q3 2026)
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">The Event</p>
    <p className="text-base leading-relaxed">
    Honeywell separates its Aerospace Systems division into an independent, publicly traded company (ticker: HONA). Announced with an SEC Form 10, expected $17.4B in annual revenue, completed in Q3 2026. June 3 Investor Day will reveal final corporate structure and shareholder distribution.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Your Equity Conversion</p>
    <p className="text-base leading-relaxed">
    Every Honeywell share you own automatically converts to one Honeywell share (now representing Industrial &amp; Defense &amp; Space assets) plus one HONA share. RSU grants settle in both stocks proportionally. Your 401(k) match, which arrives as HON stock, splits the same way. This is not a taxable event under federal law (IRS treats it as a spin-off under Section 368(a)(1)(D)), but your basis allocation, dividend treatment, and long-term capital gains timing all shift.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">What Changes for Your Plan</p>
    <ul className="text-base leading-relaxed space-y-2">
    <li>• <span className="font-semibold">Concentration Risk Resets:</span> You now hold two stocks instead of one. Neither may be a &quot;hold forever&quot; position.</li>
    <li>• <span className="font-semibold">RSU Treatment:</span> Restricted stock units settle at spinoff under the same proportional structure. Vesting dates don&apos;t change.</li>
    <li>• <span className="font-semibold">Tax-Free Reorganization:</span> You owe no federal income tax on the separation itself. But your cost basis splits between the two stocks, requiring precise documentation.</li>
    <li>• <span className="font-semibold">Dividend Reinvestment:</span> If you reinvest HON dividends, confirm your brokerage splits dividends post-spinoff for both entities.</li>
    <li>• <span className="font-semibold">Action Before Q3 2026:</span> Update your investment policy, model concentration by holding both stocks (not just HON), and coordinate with your deferred comp plan if HONA stock appears in restricted distributions.</li>
    </ul>
   </div>
   </div>
   </div>
  </AnimateOnScroll>

  {/* RTX Pension Transfer */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px]">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   RTX $2.5B Pension Transfer to Prudential
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">The Event</p>
    <p className="text-base leading-relaxed">
    RTX (Raytheon Technologies) announced a $2.5B de-risking transaction: transferring pension liabilities and assets for ~60,000 participants to Prudential Insurance. RTX retains sponsor responsibility until Prudential assumes full obligation, but your monthly benefit amount and payment election method both transition to Prudential&apos;s platform.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Impact on Your Pension Decision</p>
    <p className="text-base leading-relaxed">
    The RTX pension froze in 2007. You stopped earning new credits. If you qualify under the Rule of 85 (age plus service = 85) or were grandfathered into the Cash Balance Plan, you face a critical election: take a lump sum now (discounted at IRS rates) or elect a monthly annuity from Prudential. That election is not trivial. IRS discount rates today are higher than they&apos;ve been in years, making lump sums more attractive than annuities. The Prudential transfer doesn&apos;t change your benefit amount, but it changes the platform and timing pressures.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">What Changes for Your Plan</p>
    <ul className="text-base leading-relaxed space-y-2">
    <li>• <span className="font-semibold">Lump Sum vs. Annuity:</span> Higher IRS discount rates make lump sums mathematically more attractive. Breakeven age on the annuity is rising.</li>
    <li>• <span className="font-semibold">Rule of 85 Consideration:</span> If you&apos;re within 5 years of eligibility, a lump sum election locks in today&apos;s favorable discount rates before they potentially decline.</li>
    <li>• <span className="font-semibold">Prudential Platform Migration:</span> Your statements, beneficiary options, and claim procedures move to Prudential. Confirm your beneficiary elections transfer correctly.</li>
    <li>• <span className="font-semibold">Net Unrealized Appreciation (NUA):</span> If your lump sum lands in an RTX holding in your rollover IRA, NUA treatment preserves long-term capital gains rates on the stock portion — worth modeling.</li>
    <li>• <span className="font-semibold">Action Now:</span> Model both scenarios (lump vs. annuity) under current IRS rates. Coordinate with your 401(k), deferred comp, and Social Security timing.</li>
    </ul>
   </div>
   </div>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* Honeywell Benefits */}
 <section className="bg-[#FAFAF8] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <div className="mb-12">
   <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
   Honeywell 401(k) &amp; Equity: Built for Complexity, Often Managed Simply
   </h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   Honeywell&apos;s retirement benefits are designed for aerospace professionals. But too many employees treat them like a generic 401(k). They&apos;re not.
   </p>
  </div>
  </AnimateOnScroll>

  <div className="space-y-8">
  {/* 401(k) Match */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   401(k) Match: 87.5% of First 8%, Delivered as HON Stock
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">How It Works</p>
    <p className="text-base leading-relaxed">
    Honeywell matches 87.5% of the first 8% of salary you defer. If you earn $100,000 and defer $8,000 (8%), Honeywell deposits $7,000 (87.5% × $8,000) into your 401(k) — delivered as Honeywell stock, not cash. This match lands in a dedicated brokerage window. You own it immediately (fully vested), but it arrives as shares of HON, not as cash to diversify.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">The Concentration Problem</p>
    <p className="text-base leading-relaxed">
    Most Honeywell employees don&apos;t realize the consequences. Over 10 years, the match compounds. You&apos;ve also received RSU grants (if you&apos;re a manager), purchased employee stock at discount (if you&apos;ve participated in ESPP), and held unvested restricted stock. Now you own 40%, 50%, sometimes 60% of your 401(k) in Honeywell stock. The rest of your portfolio is diversified, but your largest financial asset — your balance — is concentrated in one stock.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">The Spinoff Multiplier</p>
    <p className="text-base leading-relaxed">
    When HONA spins off, your HON 401(k) balance splits. You now own two aerospace/defense stocks in the same account. The concentration is still there — but it&apos;s now split between two highly correlated holdings. This is not diversification. Your plan requires explicit action: selling a portion of both HON and HONA positions and reallocating to fixed income, international equities, or broad-market index funds. Delaying this action means accepting concentrated risk in a slow-growing, highly-regulated sector.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Our Approach</p>
    <p className="text-base leading-relaxed">
    We calculate your true stock concentration (including RSUs, ESPPs, and deferred comp holdings). We model the post-spinoff position. We build a multi-year transition strategy that harvests tax losses in downturns and rebalances systematically. The goal: align your 401(k) with your overall asset allocation, not let company stock decisions dictate your portfolio.
    </p>
   </div>
   </div>
   </div>
  </AnimateOnScroll>

  {/* 3-Year Vesting */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   RSU Grants: 3-Year Vesting with Tax at Grant Price
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">What You Receive</p>
    <p className="text-base leading-relaxed">
    Honeywell grants Restricted Stock Units (RSUs) to managers and above. Units vest on a 3-year schedule (typically 1/3 per year, or 25% at grant, 25% at year 1, 25% at year 2, 25% at year 3, depending on grant level). At vesting, each unit converts to one share of Honeywell stock. You cannot sell before the vesting date — the shares are restricted until maturity.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Tax Consequence at Vesting</p>
    <p className="text-base leading-relaxed">
    When your RSUs vest, you recognize ordinary income tax equal to the fair market value of the shares on the vesting date. If you received 100 RSUs at a grant price of $80, and they vest when HON is trading at $95, you owe federal, state, and FICA tax on $9,500 (100 shares × $95). The tax is due in the same calendar year. Most employees don&apos;t set cash aside; they sell a portion of the vested shares to cover withholding. This forced sale can lock in losses or gains depending on the vesting date.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Planning Opportunity</p>
    <p className="text-base leading-relaxed">
    Coordinate your RSU vesting with your tax bracket. High-income years (promotions, bonuses, spouse&apos;s income events) may push you into a higher tax bracket — making that vesting year expensive. In low-income years, the same vesting amount triggers lower tax rates. We also monitor whether a portion of your RSU shares should be held long-term or sold immediately for rebalancing. After vesting, HON shares become part of your overall equity allocation decision. Holding them automatically because they vested is not a strategy.
    </p>
   </div>
   </div>
   </div>
  </AnimateOnScroll>

  {/* HONA Spinoff Equity */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   HONA Spinoff: Automatic Equity Conversion (Q3 2026)
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">What Happens to Your Shares</p>
    <p className="text-base leading-relaxed">
    On the ex-date in Q3 2026, every Honeywell share you own splits into one Honeywell share (now representing Industrial, Defense &amp; Space, and Performance Materials) and one HONA share (Aeronautical Systems). You don&apos;t take any action. Your broker handles the conversion automatically. RSUs granted pre-spinoff vest in both stocks proportionally. The match you received over the past three years, sitting in HON, converts to both HON and HONA.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Tax Implications</p>
    <p className="text-base leading-relaxed">
    The IRS does not treat this as a taxable event. No capital gains tax is due. You do not need to report it as income. But your cost basis must be allocated between the two new stocks. If you bought Honeywell at $60 per share in 2015 and now own 1,000 shares (cost basis $60,000), the IRS requires you to split that basis between HON and HONA using the ex-date fair market values. This is critical for future sales. If you sell HONA shares three years from now, your cost basis determines your gain or loss. Proper documentation now prevents disputes later.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Action Items Before Spinoff</p>
    <ul className="text-base leading-relaxed space-y-2">
    <li>• <span className="font-semibold">Gather Cost Basis:</span> Collect purchase confirmations, dividend reinvestment dates, and lot information for all HON shares you own directly.</li>
    <li>• <span className="font-semibold">Communicate with Your Custodian:</span> Confirm your broker will properly allocate basis between HON and HONA at ex-date. Request written confirmation.</li>
    <li>• <span className="font-semibold">Plan Your Transition:</span> Decide which shares (if any) you will sell in year one post-spinoff. High-basis lots should be prioritized (specific ID method).</li>
    <li>• <span className="font-semibold">Update Your Investment Policy:</span> You now own two stocks. Rebalance by selling a portion of both (not just HONA) to reduce concentration.</li>
    <li>• <span className="font-semibold">Check Your Deferred Comp Plan:</span> If you have outstanding deferred compensation holdings, confirm they do not include restricted HON stock. If they do, model how the spinoff affects your distribution timing and tax treatment.</li>
    </ul>
   </div>
   </div>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* RTX Benefits */}
 <section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <div className="mb-12">
   <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
   RTX 401(k), Pension &amp; Deferred Comp: Layered Retirement, Layered Decisions
   </h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed">
   RTX (Raytheon Technologies) offers a three-tier retirement structure. Most employees optimize one tier and ignore the other two. That&apos;s leaving money on the table.
   </p>
  </div>
  </AnimateOnScroll>

  <div className="space-y-8">
  {/* Age-Based 401(k) */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   401(k) Age-Based Contribution: Match + RSC Scaling
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">How It Works</p>
    <p className="text-base leading-relaxed">
    RTX offers a base match (100% of the first 3% you defer, plus 50% of the next 2%) plus an age-based retirement savings contribution (RSC). The RSC is the important part. If you&apos;re age 50 or older, RTX deposits an additional 7% of salary into your 401(k) without requiring any deferral from you. If you&apos;re age 45–49, RTX contributes 5%. Age 40–44: 3%. Under 40: 0%.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">What This Means</p>
    <p className="text-base leading-relaxed">
    If you&apos;re 52 years old, earning $120,000, and defer 5%, you receive: (1) base match of $3,600 (100% × 3%), (2) additional match of $1,200 (50% × 2%), and (3) age-based RSC of $8,400 (7% × $120,000). Total company contribution: $13,200 in one year. If you&apos;ve been at RTX for 15+ years in an age 50+ role, your cumulative RSC contributions are substantial. This is accelerated wealth building in your final 15 years before retirement.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">What Not to Do</p>
    <p className="text-base leading-relaxed">
    Do not defer less than 5% just because RTX contributes the RSC regardless. The base match still requires your deferral. Also, do not let the RSC sit in a default investment. RTX deposits it in an age-based fund or conservative allocation if you don&apos;t direct it elsewhere. At age 52, a conservative allocation may be too cautious if you plan to work until 65. Model your target retirement date and adjust the RSC investment accordingly.
    </p>
   </div>
   </div>
   </div>
  </AnimateOnScroll>

  {/* Pension Lump Sum vs Annuity */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   Pension: Lump Sum vs. Annuity (Now with Prudential)
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Your Pension, Explained</p>
    <p className="text-base leading-relaxed">
    RTX froze its traditional pension plan in 2007. If you were employed before 2007, you have a vested benefit. That benefit is calculated as a percentage of your final average salary multiplied by your years of service (using a formula frozen at 2007 levels). You cannot earn new pension credits, but the credits you earned through 2006 are permanent. Eligibility to receive your pension begins at your earliest retirement date (usually 55 if you have 10+ years of service) or at age 65, whichever is earlier.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">The Election: Lump Sum or Annuity?</p>
    <p className="text-base leading-relaxed">
    When you become eligible, RTX presents a one-time election: take a lump sum (a cash payout of the present value of your lifetime pension) or take a monthly annuity for life. The lump sum is calculated using IRS discount rates published each month. Today (Q1 2026), these rates are elevated compared to the last three years, making lump sums mathematically attractive relative to annuities. A 55-year-old with a $30,000/year pension might receive a lump sum of $450,000–$500,000 (depending on the exact IRS rates and Prudential&apos;s life expectancy assumptions).
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Lump Sum Pros &amp; Cons</p>
    <p className="text-base leading-relaxed">
    <span className="font-semibold">Pros:</span> You control the money. You can invest it aggressively if you&apos;re young. If you die before reaching break-even age (~82), your beneficiaries inherit the balance. You are not locked into Prudential&apos;s annuity rates. If your health is poor, a lump sum avoids longevity risk.
    </p>
    <p className="text-base leading-relaxed mt-2">
    <span className="font-semibold">Cons:</span> You take on investment risk. If you invest poorly or spend the lump sum, you have no guaranteed income. You lose the psychological security of a lifetime check. If you live past 85, the annuity would&apos;ve paid more total dollars.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Annuity Pros &amp; Cons</p>
    <p className="text-base leading-relaxed">
    <span className="font-semibold">Pros:</span> Guaranteed income for life. You don&apos;t bear investment risk. Inflation may erode the payment, but the amount never drops. Simple to plan around.
    </p>
    <p className="text-base leading-relaxed mt-2">
    <span className="font-semibold">Cons:</span> Prudential (the new insurer) locks your rate. If you die at 70, the company keeps the balance (no beneficiary payout, unless you elect a survivor option, which reduces your annual payment). Inflation eats your purchasing power unless you select a COLA (cost-of-living adjustment) option, which also reduces your annual payment.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Our Approach</p>
    <p className="text-base leading-relaxed">
    We calculate your break-even age under current IRS rates. We model both the lump sum and annuity scenarios under multiple investment returns. We layer in your Social Security timing, your 401(k) balance, and your deferred comp to determine whether the lump sum makes sense within your total retirement income picture. For most RTX employees in their mid-50s, today&apos;s elevated IRS rates favor lump sums — but only if you have a disciplined plan to invest the balance and avoid spending it on discretionary needs.
    </p>
   </div>
   </div>
   </div>
  </AnimateOnScroll>

  {/* Lifetime Income Strategy */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   Lifetime Income Strategy: Pension + 401(k) + Social Security Coordination
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">The Problem</p>
    <p className="text-base leading-relaxed">
    Most RTX employees view their pension, 401(k), and Social Security as three separate buckets. They ask: &quot;Should I take the pension lump sum?&quot; without considering how that decision interacts with their 401(k) drawdown rate or their optimal Social Security filing age. This fragmented approach often leaves thousands of dollars on the table annually.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Our Framework</p>
    <p className="text-base leading-relaxed">
    We build a &quot;lifetime income waterfall&quot; that coordinates all three. For example: if you take your pension lump sum at 55, we model investing it to generate a steady annual withdrawal. Meanwhile, your 401(k) compounds until age 72 (when Required Minimum Distributions begin). Your Social Security doesn&apos;t start until age 67, 70, or a selected date based on your longevity, spouse&apos;s situation, and household income needs. By timing each source optimally, we can increase your total retirement income by 15%–25% compared to a fragmented approach.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Special Consideration: Net Unrealized Appreciation (NUA)</p>
    <p className="text-base leading-relaxed">
    If your pension lump sum is invested in RTX stock and you&apos;ve held that RTX stock for more than one year in your name (not the plan), you may qualify for NUA treatment. This means you pay long-term capital gains tax on only the appreciation above your cost basis, not ordinary income tax on the full balance. This is extraordinarily valuable if your RTX holdings have significant gains. We model this opportunity annually.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Special Consideration: Estate Planning</p>
    <p className="text-base leading-relaxed">
    If you elect the annuity option with a survivor component, your spouse receives a reduced monthly payment for life. If you elect no survivor option, your spouse receives nothing after your death. The election is permanent. We coordinate this with your overall estate plan and tax situation to ensure your family is protected and taxes are minimized.
    </p>
   </div>
   </div>
   </div>
  </AnimateOnScroll>

  {/* Deferred Compensation */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   Deferred Compensation: CDP &amp; PSU Deferral Plan (Section 409A Compliant)
   </h3>
   <div className="space-y-4 text-[#333333]">
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Who Participates</p>
    <p className="text-base leading-relaxed">
    RTX&apos;s deferred compensation plan is available to M7+ executives (managing directors and above). It allows you to defer a portion of your salary, bonus, and RSU proceeds. These deferrals are held in trust and invested in a menu of investment options (typically mutual funds, index funds, or a self-directed brokerage account). The deferred amounts compound tax-deferred until distribution.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Two Flavors: CDP and PSU Deferral Plan</p>
    <p className="text-base leading-relaxed">
    The <span className="font-semibold">Cash Deferral Plan (CDP)</span> allows you to defer salary and bonus. The <span className="font-semibold">PSU Deferral Plan</span> allows you to defer the proceeds of vested Performance Stock Units. Both operate under Section 409A of the tax code, which means: (1) deferrals must be elected 12 months before the year they apply; (2) distribution dates are locked in when you make the deferral; and (3) if you violate 409A rules, all deferred amounts become immediately taxable plus a 20% penalty and interest.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Section 409A Compliance and Timing</p>
    <p className="text-base leading-relaxed">
    You cannot simply withdraw your deferred comp whenever you want. You must elect a distribution date when you make the deferral. Common options: distribution at termination of employment, distribution at a specified date (e.g., retirement at age 65), or distribution in installments over a fixed number of years. If you terminate employment before the distribution date, the plan typically allows you to elect a distribution (subject to a six-month delay if you&apos;re a &quot;specified employee&quot; under 409A). Violating these rules is costly.
    </p>
   </div>
   <div>
    <p className="font-semibold text-[#1d7682] mb-2">Our Role</p>
    <p className="text-base leading-relaxed">
    We ensure your deferral elections are coordinated with your overall retirement plan. If you&apos;re planning to retire at 62, we confirm your CDP and PSU deferrals will distribute at that age without 409A penalties. We also model the tax impact: deferred comp is taxed as ordinary income in the year it distributes, regardless of how it was invested. If you defer a large bonus into the deferred plan and it grows to $500,000, you owe ordinary income tax on the full $500,000 in the distribution year. This can push you into a higher tax bracket. We plan around that.
    </p>
   </div>
   </div>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* Conversations Section */}
 <section className="bg-[#F7F4EE] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="COMMON QUESTIONS" />
  <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-12">
   Five Critical Conversations We Have With Aerospace &amp; Defense Professionals
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Question 1 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   Honeywell Spinoff: What Should I Do With My HON Stock Before HONA Separates?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   We build a glide path. If you&apos;re 40% concentrated in HON today, we don&apos;t recommend selling everything at once (you&apos;ll miss the run-up before spinoff and trigger a massive tax bill). Instead, we identify high-basis shares, harvest losses in downturns, and rebalance methodically over 12–18 months. After the spinoff, we continue rebalancing until you own both HON and HONA in proportion to your overall equity allocation, not as outsized positions.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Question 2 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   RTX Pension Freeze: Should I Take the Lump Sum or the Annuity?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   We calculate your break-even age using current IRS rates. We then layer in your 401(k) balance, your Social Security timing, and your longevity expectations. If you&apos;re 57, healthy, and expect to live past 85, today&apos;s elevated IRS rates make the lump sum highly attractive. If you&apos;re 62 and plan to spend heavily in your early retirement years, the annuity&apos;s certainty and simplicity might be preferable. There&apos;s no universal answer — it depends on your full financial picture.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Question 3 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   401(k) Concentration: How Do I Rebalance My Honeywell/RTX Stock Without Triggering a Huge Tax Bill?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Inside your 401(k), you can buy and sell shares of company stock without any tax consequence. That&apos;s a free pass to rebalance. We recommend a systematic approach: every quarter or semester, sell a small percentage of your concentrated position and buy diversified index funds. Outside the 401(k), for shares you own individually, we use specific lot identification to sell high-basis lots first, minimizing gains. We also harvest capital losses in down markets to offset gains.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Question 4 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   RSU Vesting: Should I Sell My Vested Shares Immediately or Hold for Long-Term Growth?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   It depends on your total concentration and your tax situation. If you already own 35% of your portfolio in HON/HONA, selling vested shares into strength and rebalancing is wise. If your income is high in a given year (promotion, bonus spike), holding for long-term capital gains treatment and selling in a lower-income year later may save taxes. We model this annually based on your life circumstances.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Question 5 */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   RTX Deferred Compensation: When Should I Defer, and What&apos;s the Right Distribution Strategy Under Section 409A?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Deferral is a tax-planning tool, not a saving mechanism. If you expect your income to be lower in retirement than during your career, deferring now and distributing later saves taxes. But you must lock in a distribution date 12 months before the deferral year, and you must comply with 409A rules or face 20% penalties. We manage the calendar, coordinate with your retirement plan, and ensure distributions sync with your optimal tax year.
   </p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* What A&D Professionals Deserve */}
 <section className="bg-[#FAFAF8] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-12">
   What Aerospace &amp; Defense Professionals Deserve
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Precision */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">1</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Precision Planning</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Your career has been built on precision. Your financial plan should match. We don&apos;t make general recommendations. We calculate your exact HONA spinoff impact on your tax liability. We model the exact break-even age on your pension election. We know the precise amount of your HON stock match and coordinate it with your overall asset allocation.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Deep Benefits Knowledge */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">2</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Deep Benefits Knowledge</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   We don&apos;t rely on generic retirement planning templates. We understand Honeywell&apos;s match-as-stock structure, RTX&apos;s age-based RSC scaling, and how Section 409A affects your deferred comp election. We read your plan documents annually. We attend company benefits webinars. We know what changed and what stayed the same.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Proactive Outreach */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">3</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Proactive Outreach</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   You don&apos;t come to us every three months asking if your plan still works. We come to you. When Honeywell announces HONA&apos;s Investor Day date, we call. When RTX updates the Prudential pension platform, we send analysis. When new IRS discount rates are published affecting your lump-sum calculation, we model it. Your plan evolves because we&apos;re paying attention.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Fiduciary Accountability */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">4</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Fiduciary Accountability</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   We are bound by fiduciary duty. That means we put your interests first, ahead of our own revenue. If we recommend reducing your HON concentration, it&apos;s because it&apos;s best for you, not because we earn a fee when you rebalance. We disclose conflicts explicitly. We can be held legally accountable if we breach this duty.
   </p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
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
  <TestimonialCarousel testimonials={aerospaceTestimonials} />
  </div>
 </section>

 {/* Final CTA */}
 <section className="bg-[#333333] text-white py-16 lg:py-24">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <AnimateOnScroll>
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
   Honeywell&apos;s Spinoff. RTX&apos;s Pension Transfer. Your Retirement. These Events Are Happening Now.
  </h2>
  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
   You&apos;ve built a remarkable career in aerospace and defense. Your financial plan should reflect the same sophistication, precision, and forward-thinking that got you here.
  </p>
  <Button href="/schedule-consultation" variant="primary">
   Schedule Your Aerospace &amp; Defense Strategy Call
  </Button>
  </AnimateOnScroll>
  </div>
 </section>
 </>
 );
}
