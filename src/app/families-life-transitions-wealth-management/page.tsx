import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';
import SectionEyebrow from '@/components/SectionEyebrow';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export const metadata: Metadata = {
 title: 'Families & Life Transitions Wealth Management | Divorce, Widowhood, Inheritance & Retirement | Advisor Jay, Farther',
 description: 'Compassionate, fiduciary financial planning for families navigating divorce, loss of a spouse, inheritance, retirement transitions, and legacy protection. Jay helps you find clarity when life changes everything.',
 alternates: {
 canonical: 'https://www.advisorjay.com/families-life-transitions-wealth-management',
 },
};

const familiesTestimonials = [
 { quote: "After my divorce was finalized, I had no idea where I stood financially. Jay sat with me, untangled everything, and built a plan that gave me confidence I could take care of my kids and myself. He never made me feel rushed or judged.", name: "Recently Divorced Parent", location: "Scottsdale, AZ", detail: "Post-divorce planning" },
 { quote: "When my husband passed, the financial details were overwhelming. Jay handled everything with patience — the survivor benefits, the account transfers, the tax implications. He gave me space to grieve while making sure nothing fell through the cracks.", name: "Surviving Spouse", location: "Phoenix, AZ", detail: "Widow transition planning" },
 { quote: "I inherited more money than I ever expected, and I was terrified of making a mistake. Jay helped me slow down, understand the tax picture, and invest in a way that honors what my parents built. No pressure, no sales pitch — just good guidance.", name: "Inheritance Recipient", location: "Chandler, AZ", detail: "Inheritance planning" },
 { quote: "Retiring after 32 years felt like jumping off a cliff. Jay mapped out my pension, Social Security, and savings into a single timeline. For the first time, I could see that I was going to be okay. That peace of mind is priceless.", name: "Recent Retiree", location: "Mesa, AZ", detail: "Retirement transition" },
 { quote: "My parents asked me to help coordinate their estate plan with their financial advisor. Jay made the whole family feel included. He explained everything clearly and helped us set up a structure that protects their legacy and avoids conflict.", name: "Adult Child &amp; Caregiver", location: "Tempe, AZ", detail: "Generational wealth planning" },
];

export default function FamiliesLifeTransitionsWealthManagement() {
 return (
 <>
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Farther - Families & Life Transitions Wealth Management',
  description: 'Compassionate fiduciary financial planning for families navigating divorce, widowhood, inheritance, retirement, and legacy protection.',
  areaServed: ['Phoenix, Arizona', 'Scottsdale, Arizona', 'Chandler, Arizona', 'Las Vegas, Nevada'],
  serviceType: ['Wealth Management', 'Financial Planning', 'Retirement Planning', 'Estate Planning'],
  url: 'https://www.advisorjay.com/families-life-transitions-wealth-management',
  }),
  }}
 />

 {/* Hero Section */}
 <section className="bg-[#333333] text-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div>
   <SectionEyebrow text="FAMILIES & LIFE TRANSITIONS" light />
   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6">
   When Life Changes Everything, Your Financial Plan Should Be the One Thing That Holds Steady.
   </h1>
   <p className="text-lg text-gray-300 mb-8 leading-relaxed">
   Divorce. The loss of a spouse. An unexpected inheritance. The leap into retirement. These aren&apos;t just financial events — they&apos;re deeply personal turning points. In these moments, you deserve more than a spreadsheet. You deserve a guide who understands what you&apos;re going through, who will protect what matters most, and who will help you build a path forward with clarity and care.
   </p>
   <div className="flex flex-col sm:flex-row gap-4">
   <Button href="/schedule-consultation" variant="primary">
   Schedule a Conversation
   </Button>
   </div>
  </div>
  <div className="relative">
   <Image
   src="/Photos/Families.png"
   alt="Family and life transitions wealth management"
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
   I&apos;ve sat across from people on the hardest days of their lives. A widow who just lost her partner of 40 years and has no idea which accounts are in her name. A father splitting assets in a divorce, worried about how his children will be provided for. A woman in her 50s staring at a retirement she never planned for alone.
   </p>
   <p className="text-lg leading-relaxed text-[#333333] mb-4">
   These moments are not the time for a sales pitch or a complicated product recommendation. They&apos;re the time for someone to listen, to take things one step at a time, and to make sure nothing falls through the cracks while you&apos;re dealing with everything else in your life.
   </p>
   <p className="text-lg leading-relaxed text-[#333333]">
   That&apos;s what I do. I help families find their footing when the ground shifts. And I stay with you long after the dust settles, making sure your plan grows with you.
   </p>
   <p className="mt-6 font-semibold text-[#1d7682]"> — Jay Chang, Farther</p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* Life Transitions We Navigate Together */}
 <section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="LIFE TRANSITIONS" />
  <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-4">
   The Moments That Change Everything — and How We Walk Through Them With You
  </h2>
  <p className="text-lg text-[#5b6a71] leading-relaxed mt-4 mb-12">
   Every transition is different. But each one demands careful financial attention at a time when your energy and focus may be elsewhere. We handle the details so you can focus on what matters most.
  </p>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Divorce & Financial Reset */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   Divorce &amp; Financial Reset
   </h3>
   <div className="space-y-4 text-[#333333]">
   <p className="text-base leading-relaxed">
    Divorce doesn&apos;t just end a marriage — it restructures your entire financial life. Retirement accounts need to be divided. Home equity must be assessed. Insurance beneficiaries change. Tax filing status shifts. And if children are involved, custody arrangements affect everything from cash flow to college savings.
   </p>
   <p className="text-base leading-relaxed">
    We help you understand exactly what you&apos;re working with after the settlement. We review asset division for fairness and tax efficiency, rebuild your budget around a single income, update beneficiary designations, and create a new investment plan that reflects your life going forward — not the one you left behind.
   </p>
   </div>
   </div>
  </AnimateOnScroll>

  {/* Loss of a Spouse */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   Loss of a Spouse
   </h3>
   <div className="space-y-4 text-[#333333]">
   <p className="text-base leading-relaxed">
    Losing a partner is devastating. And the financial complexity that follows — life insurance claims, Social Security survivor benefits, retitling accounts, updating estate documents — can feel impossible to navigate while grieving.
   </p>
   <p className="text-base leading-relaxed">
    We take the administrative burden off your shoulders. We coordinate with attorneys and CPAs to ensure account transfers happen correctly. We file for survivor benefits. We review your income picture under a single tax return and adjust your withdrawal strategy. And we give you time — we don&apos;t rush you into decisions. The first year after a loss is not the time to make permanent financial changes. We help you stabilize first and plan later.
   </p>
   </div>
   </div>
  </AnimateOnScroll>

  {/* Inheritance & Sudden Wealth */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   Inheritance &amp; Sudden Wealth
   </h3>
   <div className="space-y-4 text-[#333333]">
   <p className="text-base leading-relaxed">
    Receiving an inheritance can feel like a blessing and a burden at the same time. There are tax implications that vary dramatically depending on the type of asset — stepped-up basis on stocks, required minimum distributions on inherited IRAs, potential estate taxes on large transfers. And there&apos;s the emotional weight of managing money that belonged to someone you loved.
   </p>
   <p className="text-base leading-relaxed">
    We help you slow down and make intentional decisions. We assess the tax picture first, then integrate the inherited assets into your existing plan. We respect the legacy behind the money and help you invest it in a way that reflects your values, not just market returns.
   </p>
   </div>
   </div>
  </AnimateOnScroll>

  {/* Retirement Readiness */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   Retirement Readiness
   </h3>
   <div className="space-y-4 text-[#333333]">
   <p className="text-base leading-relaxed">
    Retirement is one of the biggest financial transitions you&apos;ll ever make — and one of the most emotional. After decades of earning, you&apos;re shifting to spending. Your identity changes. Your daily rhythm changes. And the financial questions multiply: When do I take Social Security? How much can I safely withdraw? Will I outlive my savings?
   </p>
   <p className="text-base leading-relaxed">
    We build a retirement income plan that answers these questions with precision. We coordinate your pension, 401(k), IRA, Social Security, and any other income sources into a single, clear timeline. We stress-test your plan against market downturns, inflation, and unexpected health costs. And we revisit it every year, because retirement isn&apos;t a one-time event — it&apos;s a 30-year journey.
   </p>
   </div>
   </div>
  </AnimateOnScroll>

  {/* Legacy & Generational Wealth */}
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] lg:col-span-2 h-full">
   <h3 className="text-2xl font-bold text-[#333333] mb-4">
   Legacy &amp; Generational Wealth
   </h3>
   <div className="space-y-4 text-[#333333]">
   <p className="text-base leading-relaxed">
    You&apos;ve worked hard to build what you have. Protecting it for the next generation requires more than a will. It requires a coordinated plan that addresses estate taxes, trust structures, gifting strategies, and — perhaps most importantly — family communication about money.
   </p>
   <p className="text-base leading-relaxed">
    We help families have honest conversations about wealth transfer. We work with your estate attorney to ensure your trust and beneficiary designations align with your wishes. We model gifting strategies that reduce your taxable estate while supporting your children and grandchildren during your lifetime. And we help the next generation understand their inheritance responsibly — so your legacy endures.
   </p>
   </div>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* How We Help */}
 <section className="bg-[#FAFAF8] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="HOW WE HELP" />
  <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-12">
   Specific Services for Families in Transition
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Asset Division Guidance */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">1</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Asset Division Guidance</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   During divorce or estate settlement, dividing assets fairly isn&apos;t just about splitting things in half. A $500,000 brokerage account and a $500,000 IRA are not equal — one is pre-tax, the other is after-tax. We analyze every asset for its true after-tax value, help you understand QDROs (Qualified Domestic Relations Orders) for retirement accounts, and ensure you walk away with a settlement that reflects real-world spending power.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Survivor Benefit Coordination */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">2</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Survivor Benefit Coordination</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   After losing a spouse, there are time-sensitive decisions — Social Security survivor benefits must be claimed within specific windows, life insurance proceeds need to be allocated wisely, and pension survivor options may require immediate action. We coordinate all of these moving parts, work with your CPA on the tax implications of filing as a surviving spouse, and ensure you don&apos;t miss any deadlines that could cost you benefits.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Inheritance Planning */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">3</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Inheritance Planning</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Inherited assets come with specific tax rules that differ by account type. Inherited IRAs now require full distribution within 10 years under the SECURE Act. Inherited real estate receives a stepped-up cost basis. Inherited annuities may trigger immediate taxation. We map every inherited asset, identify the optimal strategy for each, and integrate the inheritance into your existing financial plan without creating unnecessary tax liability.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Retirement Income Planning */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">4</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Retirement Income Planning</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   The transition from earning to spending is the most consequential financial shift most people face. We build a withdrawal strategy that coordinates Social Security timing, pension elections, 401(k) and IRA distributions, and taxable account drawdowns. We optimize the sequence to minimize lifetime taxes and maximize the longevity of your portfolio. And we stress-test everything against inflation, market volatility, and healthcare cost scenarios.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Estate & Trust Coordination */}
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full md:col-span-2">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">5</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Estate &amp; Trust Coordination</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Your estate plan is only as strong as its coordination with your financial accounts. We review your trust documents, beneficiary designations, and titling to make sure everything is aligned. We work alongside your estate attorney to ensure your revocable trust, irrevocable trust, or family LLC is funded correctly. We model annual gifting strategies using the annual exclusion ($18,000 per person in 2024) and lifetime exemption to reduce your taxable estate. And we help you prepare the next generation — because passing wealth without communication often does more harm than good.
   </p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* Common Questions */}
 <section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <SectionEyebrow text="COMMON QUESTIONS" />
  <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-12">
   Conversations We Have With Families Every Week
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   I&apos;m Going Through a Divorce — Where Do I Even Start With My Finances?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Start with a complete inventory. We help you list every account, every asset, and every liability. Then we assess each one for its after-tax value. A $1M 401(k) is not the same as $1M in a joint brokerage account. We also coordinate with your divorce attorney to ensure the QDRO is drafted correctly and your retirement accounts are divided without triggering early withdrawal penalties.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   My Spouse Handled All Our Finances. Now They&apos;re Gone. What Do I Do?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   First, breathe. You don&apos;t need to figure everything out at once. We start by locating all accounts, understanding income sources, and making sure bills are covered. Then we work through the administrative tasks together — retitling accounts, filing for survivor benefits, updating insurance. We move at your pace and explain everything along the way. You will not be left in the dark.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   I Just Inherited a Large Sum of Money. Should I Invest It Right Away?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Not necessarily. The worst thing you can do is rush into a decision under emotional pressure. We recommend parking the funds in a safe, liquid account for 3–6 months while we build a plan. During that time, we assess the tax implications (inherited IRA rules, stepped-up basis, potential estate tax), integrate the inheritance into your overall financial picture, and develop an investment strategy that aligns with your goals — not someone else&apos;s urgency.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <h3 className="text-xl font-bold text-[#1d7682] mb-3">
   How Do I Know If I Can Actually Afford to Retire?
   </h3>
   <p className="text-[#333333] text-base leading-relaxed">
   We build a retirement income projection that maps every source of income — Social Security, pension, 401(k), IRA, brokerage accounts — against your expected expenses. We model multiple scenarios: what if the market drops 30% in year one? What if healthcare costs double? What if you live to 95? The answer isn&apos;t a guess. It&apos;s a number, stress-tested and updated annually.
   </p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* What Families Deserve */}
 <section className="bg-[#F7F4EE] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <AnimateOnScroll>
  <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-12">
   What Families Going Through Change Deserve
  </h2>
  </AnimateOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">1</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Patience, Not Pressure</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Life transitions don&apos;t come with a clean timeline. You need an advisor who moves at your pace — who won&apos;t push you into decisions before you&apos;re ready, and who understands that the emotional side of a financial change matters just as much as the numbers.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">2</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Complete Coordination</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   Your financial life doesn&apos;t exist in isolation. We coordinate with your divorce attorney, estate attorney, CPA, and insurance agent to make sure every piece of your financial picture is aligned. You don&apos;t need to be the middleman between your professionals — we handle that communication for you.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">3</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Honest Communication</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   We don&apos;t sugarcoat, and we don&apos;t overcomplicate. If your spending needs to change, we&apos;ll tell you clearly and help you adjust. If your plan is on track, we&apos;ll show you exactly why. You&apos;ll always know where you stand and what comes next.
   </p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll>
   <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
   <div className="text-4xl font-bold text-[#1d7682] mb-4">4</div>
   <h3 className="text-2xl font-bold text-[#333333] mb-4">Fiduciary Accountability</h3>
   <p className="text-[#333333] text-base leading-relaxed">
   We are legally bound to put your interests first. That&apos;s not a marketing line — it&apos;s a fiduciary obligation. Every recommendation we make is designed to serve your goals, not ours. We disclose conflicts, we explain our reasoning, and we can be held accountable for every piece of advice we give.
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
  <TestimonialCarousel testimonials={familiesTestimonials} />
  </div>
 </section>

 {/* Final CTA */}
 <section className="bg-[#333333] text-white py-16 lg:py-24">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <AnimateOnScroll>
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
   You Don&apos;t Have to Navigate This Alone.
  </h2>
  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
   Whether you&apos;re starting over after a divorce, finding your footing after a loss, making sense of an inheritance, or stepping into retirement — we&apos;re here to help you move forward with confidence and clarity.
  </p>
  <Button href="/schedule-consultation" variant="primary">
   Schedule a Conversation
  </Button>
  <p className="text-sm text-gray-400 mt-8">
   Phoenix &amp; Scottsdale, Arizona | (480) 944-0880
  </p>
  </AnimateOnScroll>
  </div>
 </section>
 </>
 );
}
