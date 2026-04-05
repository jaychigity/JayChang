import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';
import SectionEyebrow from '@/components/SectionEyebrow';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export const metadata: Metadata = {
 title: 'Institutional & Non-Profit Wealth Management | Endowments, Foundations & Charitable Portfolios | Advisor Jay, Farther',
 description: 'Fiduciary investment management for endowments, foundation assets, institutional portfolios, and charitable organizations. Jay helps non-profits and institutions align their investments with their mission while maintaining fiduciary accountability.',
 alternates: {
 canonical: 'https://www.advisorjay.com/institutional-non-profit-wealth-management',
 },
};

const institutionalTestimonials = [
 { quote: "Our foundation had been invested in a generic target-date fund for years. Jay built a custom portfolio that reflects our grant-making timeline and risk tolerance. For the first time, our investment strategy actually matches our mission.", name: "Executive Director", location: "Phoenix, AZ", detail: "Private Foundation" },
 { quote: "Jay helped our board understand the difference between spending policy and investment policy. That single conversation changed how we think about our endowment and gave us confidence to plan five years out instead of one.", name: "Board Treasurer", location: "Scottsdale, AZ", detail: "Community Non-Profit" },
 { quote: "We were paying 1.4% in hidden fees across three different accounts with no coordination. Jay consolidated everything under one fiduciary relationship and cut our costs by more than half. That savings goes directly back to our programs.", name: "Finance Committee Chair", location: "Tempe, AZ", detail: "Educational Endowment" },
 { quote: "Our religious institution needed someone who understood both the fiduciary requirements and the values-based investing our congregation expects. Jay took the time to learn what mattered to us and built a portfolio we can stand behind.", name: "Board of Trustees Member", location: "Mesa, AZ", detail: "Religious Institution" },
 { quote: "As a donor-advised fund holder, I wanted to maximize the impact of my charitable giving. Jay helped me think about asset location, appreciated stock donations, and timing distributions for maximum tax efficiency and charitable impact.", name: "DAF Holder & Philanthropist", location: "Paradise Valley, AZ", detail: "Donor-Advised Fund" },
];

export default function InstitutionalNonProfitWealthManagement() {
 return (
 <>
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
   __html: JSON.stringify({
   '@context': 'https://schema.org',
   '@type': 'FinancialService',
   name: 'Farther - Institutional & Non-Profit Wealth Management',
   description: 'Fiduciary investment management for endowments, foundation assets, institutional portfolios, and charitable organizations',
   areaServed: ['Phoenix, Arizona', 'Scottsdale, Arizona', 'Nationwide'],
   serviceType: ['Wealth Management', 'Endowment Management', 'Foundation Asset Oversight', 'Non-Profit Investment Management'],
   url: 'https://www.advisorjay.com/institutional-non-profit-wealth-management',
   }),
  }}
  />

  {/* Hero Section */}
  <section className="bg-[#333333] text-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
   <div>
    <SectionEyebrow text="INSTITUTIONAL &amp; NON-PROFIT" light />
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6">
    Your Organization Exists to Serve a Mission. Your Investments Should Too.
    </h1>
    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
    Endowments, foundation assets, institutional portfolios, and charitable organizations deserve the same fiduciary rigor that high-net-worth individuals receive. We help non-profits and institutions build investment strategies that protect capital, generate sustainable income, and align with the values your organization was founded to uphold. Every dollar you steward has a purpose. Your portfolio should reflect that.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
    <Button href="/schedule-consultation" variant="primary">
     Start a Consultation or RFP
    </Button>
    </div>
   </div>
   <div className="relative">
    <Image
    src="/Photos/Non-Profit Organizations & Charitable Giving.png"
    alt="Institutional and Non-Profit Wealth Management"
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
    Here&apos;s what most institutional investment firms won&apos;t tell you: you&apos;re a portfolio number to them. You get assigned to a team, shuffled between associates, and sit through quarterly calls with someone who barely remembers your organization&apos;s name. That&apos;s not how this should work &mdash; especially when the stakes go beyond any single person. When a foundation&apos;s portfolio underperforms, it&apos;s fewer grants awarded, fewer programs funded, and fewer lives touched.
    </p>
    <p className="text-lg leading-relaxed text-[#333333] mb-4">
    With me and my dedicated institutional team, you get a real relationship with real people. I&apos;m your advisor &mdash; not a firm and their rotating staff. I know your board members by name. I understand your spending policy, your mission, and the values your stakeholders expect you to uphold. I&apos;m local, I show up in person, and my team and I are available when your board needs us. We serve organizations across most states, and when we&apos;re not local, we travel to maintain those relationships. That&apos;s how seriously we take this.
    </p>
    <p className="text-lg leading-relaxed text-[#333333]">
    Most non-profits are underserved by their investment advisor. They receive a model portfolio that wasn&apos;t built for their spending policy, their time horizon, or their values. They sit through reviews that focus on market commentary instead of whether the portfolio is actually supporting the mission. I do it differently &mdash; transparent reporting, clear governance documentation, and a fiduciary who answers to your board, not to a product company.
    </p>
    <p className="mt-6 font-semibold text-[#1d7682]"> &mdash; Jay Chang, Farther</p>
   </div>
   </AnimateOnScroll>
  </div>
  </section>

  {/* Services Section */}
  <section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <AnimateOnScroll>
   <SectionEyebrow text="YOUR OUTSOURCED CHIEF INVESTMENT OFFICE" />
   <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-4">
    Your Outsourced Chief Investment Office
   </h2>
   <p className="text-lg text-[#5b6a71] leading-relaxed mb-12">
    Our OCIO services allow you to effectively delegate so you can focus on running your organization while we handle investment decisions and implementation. Every service below is built around your mission, your spending needs, and your board&apos;s governance requirements.
   </p>
   </AnimateOnScroll>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
   {/* Endowment Management */}
   <AnimateOnScroll>
    <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
    <h3 className="text-2xl font-bold text-[#333333] mb-4">
     Endowment Management
    </h3>
    <p className="text-[#333333] text-base leading-relaxed mb-4">
     Your endowment is the financial engine that sustains your organization in perpetuity. We design portfolios that balance long-term growth with near-term spending needs, ensuring your annual draw rate is sustainable across market cycles.
    </p>
    <ul className="text-base text-[#333333] leading-relaxed space-y-2">
     <li>&bull; Spending policy design &amp; annual review</li>
     <li>&bull; Asset allocation aligned to your time horizon</li>
     <li>&bull; Inflation-adjusted growth modeling</li>
     <li>&bull; Quarterly board reporting with plain-language summaries</li>
    </ul>
    </div>
   </AnimateOnScroll>

   {/* Foundation Asset Oversight */}
   <AnimateOnScroll>
    <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
    <h3 className="text-2xl font-bold text-[#333333] mb-4">
     Foundation Asset Oversight
    </h3>
    <p className="text-[#333333] text-base leading-relaxed mb-4">
     Private foundations face the IRS 5% minimum distribution requirement. We manage your portfolio to meet that obligation while preserving and growing the corpus &mdash; so your foundation can continue its work for generations.
    </p>
    <ul className="text-base text-[#333333] leading-relaxed space-y-2">
     <li>&bull; 5% distribution planning &amp; cash flow management</li>
     <li>&bull; Excise tax optimization (1.39% net investment income tax)</li>
     <li>&bull; Investment policy statement development</li>
     <li>&bull; Coordination with foundation counsel &amp; CPAs</li>
    </ul>
    </div>
   </AnimateOnScroll>

   {/* Non-Profit Investment Policy */}
   <AnimateOnScroll>
    <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
    <h3 className="text-2xl font-bold text-[#333333] mb-4">
     Non-Profit Investment Policy
    </h3>
    <p className="text-[#333333] text-base leading-relaxed mb-4">
     Every non-profit needs a written investment policy statement (IPS) that governs how assets are managed. We draft, implement, and monitor your IPS so your board can demonstrate prudent oversight to donors, auditors, and regulators.
    </p>
    <ul className="text-base text-[#333333] leading-relaxed space-y-2">
     <li>&bull; Investment Policy Statement (IPS) drafting</li>
     <li>&bull; UPMIFA compliance guidance</li>
     <li>&bull; Board education &amp; fiduciary training</li>
     <li>&bull; Annual policy review &amp; amendment support</li>
    </ul>
    </div>
   </AnimateOnScroll>

   {/* Institutional Portfolio Construction */}
   <AnimateOnScroll>
    <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
    <h3 className="text-2xl font-bold text-[#333333] mb-4">
     Institutional Portfolio Construction
    </h3>
    <p className="text-[#333333] text-base leading-relaxed mb-4">
     We build diversified portfolios using institutional-quality vehicles &mdash; low-cost index funds, ETFs, and where appropriate, alternative investments. Every allocation decision is documented and tied to your organization&apos;s objectives.
    </p>
    <ul className="text-base text-[#333333] leading-relaxed space-y-2">
     <li>&bull; Multi-asset class diversification</li>
     <li>&bull; ESG &amp; values-based screening options</li>
     <li>&bull; Fee transparency &amp; cost benchmarking</li>
     <li>&bull; Rebalancing discipline with governance documentation</li>
    </ul>
    </div>
   </AnimateOnScroll>

   {/* Charitable Gift Planning */}
   <AnimateOnScroll>
    <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
    <h3 className="text-2xl font-bold text-[#333333] mb-4">
     Charitable Gift Planning
    </h3>
    <p className="text-[#333333] text-base leading-relaxed mb-4">
     For organizations that receive significant gifts &mdash; appreciated stock, real estate, or planned bequests &mdash; we help you invest those assets thoughtfully. We also advise donors on how to maximize the impact of their giving.
    </p>
    <ul className="text-base text-[#333333] leading-relaxed space-y-2">
     <li>&bull; Appreciated asset donation strategies</li>
     <li>&bull; Donor-advised fund coordination</li>
     <li>&bull; Planned giving &amp; bequest investment oversight</li>
     <li>&bull; Charitable remainder trust (CRT) portfolio management</li>
    </ul>
    </div>
   </AnimateOnScroll>

   {/* Donor Education & Support */}
   <AnimateOnScroll>
    <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
    <h3 className="text-2xl font-bold text-[#333333] mb-4">
     Donor Education &amp; Support
    </h3>
    <p className="text-[#333333] text-base leading-relaxed mb-4">
     Your donors want to give wisely &mdash; and they look to your organization for guidance. We help you build donor education programs that empower supporters to maximize the tax efficiency and long-term impact of their contributions, strengthening relationships and increasing giving over time.
    </p>
    <ul className="text-base text-[#333333] leading-relaxed space-y-2">
     <li>&bull; Donor workshops on tax-efficient giving strategies</li>
     <li>&bull; Educational materials on appreciated stock &amp; QCD donations</li>
     <li>&bull; Legacy giving program development &amp; support</li>
     <li>&bull; One-on-one donor consultations in partnership with your development team</li>
    </ul>
    </div>
   </AnimateOnScroll>
   </div>
  </div>
  </section>

  {/* Our Clients */}
  <section className="bg-[#F7F4EE] py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <AnimateOnScroll>
   <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#333333] text-center mb-12">
    Our Clients
   </h2>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div>
     <h3 className="text-[#333333] font-bold text-lg mb-3">Human &amp; Social Welfare Organizations</h3>
     <p className="text-[#5b6a71] text-sm mb-3">Community-focused organizations balancing mission impact with long-term financial sustainability and growth.</p>
     <ul className="text-[#5b6a71] text-sm space-y-1">
      <li>Cash flow optimization</li>
      <li>Endowment &amp; reserve growth strategy</li>
      <li>Donor development support</li>
     </ul>
    </div>
    <div>
     <h3 className="text-[#333333] font-bold text-lg mb-3">Educational Institutions</h3>
     <p className="text-[#5b6a71] text-sm mb-3">Schools, universities, and scholarship funds seeking disciplined investment oversight to protect and grow their academic mission.</p>
     <ul className="text-[#5b6a71] text-sm space-y-1">
      <li>Endowment portfolio management</li>
      <li>Scholarship fund growth planning</li>
      <li>Board reporting &amp; fiduciary guidance</li>
     </ul>
    </div>
    <div>
     <h3 className="text-[#333333] font-bold text-lg mb-3">Arts &amp; Culture Organizations</h3>
     <p className="text-[#5b6a71] text-sm mb-3">Museums, theaters, and cultural institutions managing reserves and endowments while navigating seasonal revenue cycles.</p>
     <ul className="text-[#5b6a71] text-sm space-y-1">
      <li>Reserve fund investment strategy</li>
      <li>Capital campaign asset management</li>
      <li>Liquidity planning for operations</li>
     </ul>
    </div>
    <div>
     <h3 className="text-[#333333] font-bold text-lg mb-3">Religious Organizations</h3>
     <p className="text-[#5b6a71] text-sm mb-3">Houses of worship and faith-based organizations aligning their investments with their values while sustaining their ministry.</p>
     <ul className="text-[#5b6a71] text-sm space-y-1">
      <li>Values-aligned investment screening</li>
      <li>Building fund &amp; capital reserve strategy</li>
      <li>Planned giving coordination</li>
     </ul>
    </div>
    <div>
     <h3 className="text-[#333333] font-bold text-lg mb-3">Endowments</h3>
     <p className="text-[#5b6a71] text-sm mb-3">Perpetual funds requiring disciplined draw rate management, inflation protection, and intergenerational stewardship.</p>
     <ul className="text-[#5b6a71] text-sm space-y-1">
      <li>Spending policy design &amp; review</li>
      <li>Inflation-adjusted growth modeling</li>
      <li>Asset allocation oversight</li>
     </ul>
    </div>
    <div>
     <h3 className="text-[#333333] font-bold text-lg mb-3">Foundations</h3>
     <p className="text-[#5b6a71] text-sm mb-3">Private and community foundations managing grant-making portfolios with IRS distribution requirements and long-term preservation goals.</p>
     <ul className="text-[#5b6a71] text-sm space-y-1">
      <li>5% distribution compliance planning</li>
      <li>Excise tax optimization</li>
      <li>Grant-making cash flow coordination</li>
     </ul>
    </div>
    <div>
     <h3 className="text-[#333333] font-bold text-lg mb-3">Healthcare Organizations</h3>
     <p className="text-[#5b6a71] text-sm mb-3">Hospitals, clinics, and health systems managing operating reserves and retirement plan assets alongside their care mission.</p>
     <ul className="text-[#5b6a71] text-sm space-y-1">
      <li>Operating reserve investment strategy</li>
      <li>Retirement plan oversight</li>
      <li>Capital expenditure planning</li>
     </ul>
    </div>
    <div>
     <h3 className="text-[#333333] font-bold text-lg mb-3">Food Banks</h3>
     <p className="text-[#5b6a71] text-sm mb-3">Food banks and hunger relief organizations managing donated assets, operating reserves, and capital campaigns to expand their reach and serve more families.</p>
     <ul className="text-[#5b6a71] text-sm space-y-1">
      <li>Donated asset management &amp; liquidation</li>
      <li>Operating reserve growth strategy</li>
      <li>Capital campaign investment oversight</li>
     </ul>
    </div>
   </div>
   </AnimateOnScroll>
  </div>
  </section>

  {/* Who We Serve */}
  <section className="bg-[#FAFAF8] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <AnimateOnScroll>
   <SectionEyebrow text="WHO WE SERVE" />
   <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-4 mb-12">
    Organizations That Trust Us With Their Mission
   </h2>
   </AnimateOnScroll>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
   <AnimateOnScroll>
    <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
    <div className="text-4xl font-bold text-[#1d7682] mb-4">1</div>
    <h3 className="text-2xl font-bold text-[#333333] mb-4">Private Foundations</h3>
    <p className="text-[#333333] text-base leading-relaxed">
     Family foundations and private grant-making organizations with investable assets that require IRS-compliant distribution planning, excise tax management, and a portfolio built to sustain giving across generations. We coordinate with your foundation&apos;s legal counsel and tax advisors to ensure every investment decision supports your philanthropic goals.
    </p>
    </div>
   </AnimateOnScroll>

   <AnimateOnScroll>
    <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
    <div className="text-4xl font-bold text-[#1d7682] mb-4">2</div>
    <h3 className="text-2xl font-bold text-[#333333] mb-4">Community Organizations</h3>
    <p className="text-[#333333] text-base leading-relaxed">
     Non-profit organizations serving their communities &mdash; from human services agencies to arts organizations to advocacy groups. You need an investment partner who understands operating reserves, capital campaign proceeds, and the balance between liquidity and growth. We build portfolios that keep your programs funded while growing your long-term reserves.
    </p>
    </div>
   </AnimateOnScroll>

   <AnimateOnScroll>
    <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
    <div className="text-4xl font-bold text-[#1d7682] mb-4">3</div>
    <h3 className="text-2xl font-bold text-[#333333] mb-4">Religious Institutions</h3>
    <p className="text-[#333333] text-base leading-relaxed">
     Churches, synagogues, mosques, and faith-based organizations often hold significant endowments and operating reserves. We respect the values-based investment requirements your congregation expects and build portfolios that reflect your institution&apos;s principles &mdash; whether that means ESG screening, faith-based exclusions, or impact investing aligned with your mission.
    </p>
    </div>
   </AnimateOnScroll>

   <AnimateOnScroll>
    <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
    <div className="text-4xl font-bold text-[#1d7682] mb-4">4</div>
    <h3 className="text-2xl font-bold text-[#333333] mb-4">Educational Endowments</h3>
    <p className="text-[#333333] text-base leading-relaxed">
     Schools, universities, and scholarship funds with endowed assets that must grow to support future generations of students. We design spending policies that balance today&apos;s program needs with tomorrow&apos;s purchasing power, ensuring your endowment sustains its purpose for decades to come.
    </p>
    </div>
   </AnimateOnScroll>

   <AnimateOnScroll>
    <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
    <div className="text-4xl font-bold text-[#1d7682] mb-4">5</div>
    <h3 className="text-2xl font-bold text-[#333333] mb-4">Donor-Advised Fund Holders</h3>
    <p className="text-[#333333] text-base leading-relaxed">
     Individual philanthropists who use donor-advised funds (DAFs) to structure their charitable giving. We help you invest DAF assets for growth while planning distribution timelines, coordinating with your personal tax strategy, and maximizing the impact of appreciated stock donations and other non-cash contributions.
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
   <TestimonialCarousel testimonials={institutionalTestimonials} />
  </div>
  </section>

  {/* Final CTA */}
  <section className="bg-[#333333] text-white py-16 lg:py-24">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
   <AnimateOnScroll>
   <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
    Your Organization&apos;s Mission Deserves a Financial Partner Who Takes It as Seriously as You Do.
   </h2>
   <p className="text-lg text-gray-300 mb-8 leading-relaxed">
    Whether you manage an endowment, oversee foundation assets, or serve on a non-profit board, your fiduciary responsibility demands more than a generic portfolio. Let&apos;s build an investment strategy that reflects your mission, your values, and your long-term vision.
   </p>
   <Button href="/schedule-consultation" variant="primary">
    Schedule an Institutional Consultation
   </Button>
   <p className="text-sm text-gray-400 mt-8">
    Phoenix &amp; Scottsdale, Arizona | Nationwide | (480) 944-0880
   </p>
   </AnimateOnScroll>
  </div>
  </section>
 </>
 );
}
