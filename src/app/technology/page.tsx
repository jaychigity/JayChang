import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { FartherIcon } from '@/components/FartherLogo'
import {
  BarChart3,
  Shield,
  Zap,
  Eye,
  MessageSquare,
  FileText,
  CheckCircle,
  ArrowRight,
  Brain,
  Lock,
  Layers,
  Upload,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Farther Platform | Technology-Powered Wealth Management',
  description:
    `Farther's Intelligent Wealth Platform combines advanced financial planning, real-time portfolio visibility, and institutional-grade investment strategies for families with $2M–$20M.`,
  alternates: {
    canonical: 'https://www.PWM-Farther.com/technology',
  },
}

const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Portfolio Visibility',
    description:
      'Every account, every asset, every liability, visible in one place. See your complete financial picture across custodians, updated in real time.',
  },
  {
    icon: Zap,
    title: 'Technology-Powered Financial Planning',
    description:
      'Personalized investment proposals generated efficiently. Modeled across a range of market scenarios for confidence in every recommendation.',
  },
  {
    icon: Shield,
    title: 'Automated Tax Optimization',
    description:
      'Tax-loss harvesting runs continuously, not just in December. The platform identifies and captures tax-saving opportunities year-round across your entire portfolio.',
  },
  {
    icon: Eye,
    title: 'Complete Transparency',
    description:
      `No hidden fees, no opaque reporting. See exactly how your portfolio is performing, what you're paying, and how every decision impacts your financial plan.`,
  },
  {
    icon: FileText,
    title: 'Secure Document Vault',
    description:
      'Estate plans, tax returns, insurance policies, and financial documents, securely stored and accessible whenever you need them.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Advisor Communication',
    description:
      'Message your advisory team directly through the platform. No call centers, no hold queues. A real person who knows your name and your goals.',
  },
]

export default function TechnologyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Technology', href: '/technology' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'The Farther Platform: Technology-Powered Wealth Management',
            description:
              `Farther's technology platform combines technology-powered planning with institutional-grade investment strategies.`,
            url: 'https://www.PWM-Farther.com/technology',
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-[#F7F4EE] pt-[100px] pb-[60px] px-[80px] max-md:px-[20px] max-md:pt-[64px]">
        <div className="max-w-[900px] mx-auto text-center">
          <SectionEyebrow text="THE FARTHER PLATFORM" />
          <h1 className="font-serif text-[52px] max-md:text-[34px] font-bold text-[#333333] leading-[1.15] mt-4">
            Your Advisor, Powered by
            <br className="max-md:hidden" /> Something More Powerful.
          </h1>
          <p className="font-sans text-body-lg text-[#5b6a71] max-w-[680px] mx-auto mt-6 leading-relaxed">
            Most wealth management technology was built for advisors. Ours was
            built for you, giving you complete transparency into your wealth
            while freeing your advisor to focus on strategy, not administration.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-[#333333] bg-texture-dark section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <div className="max-w-[680px] mx-auto text-center">
              <SectionEyebrow text="THE CHALLENGE" />
              <h2 className="font-serif text-h2 max-md:text-h2-mobile font-normal text-[#F7F4EE] mt-4">
                Until Now, You Had to Choose.
              </h2>
              <p className="font-sans text-[17px] text-[#b6d0ed] leading-relaxed mt-6">
                A boutique advisor who knows your name, but lacking the
                technology to truly optimize your portfolio. Or a mega
                institution with powerful tools, where you&apos;re one of
                hundreds and your advisor is stretched thin across too many clients.
              </p>
              <p className="font-sans text-[17px] text-[#b6d0ed] leading-relaxed mt-4">
                Farther eliminates that tradeoff.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-[#F7F4EE] bg-texture-light section-padding">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-14">
            <SectionEyebrow text="PLATFORM CAPABILITIES" />
            <h2 className="font-serif text-h2 max-md:text-h2-mobile font-normal text-[#333333] mt-4">
              What the Platform Does for You.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimateOnScroll key={feature.title} delay={i * 100}>
                <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[40px_32px] hover:shadow-card-hover hover:border-[#1d7682] transition-all duration-300">
                  <div className="w-12 h-12 rounded-[8px] bg-[rgba(201,168,76,0.1)] flex items-center justify-center">
                    <feature.icon
                      size={24}
                      className="text-[#1d7682]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-sans text-h4 font-semibold text-[#333333] mt-6">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                    {feature.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* More Time on You */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <div>
              <SectionEyebrow text="THE RESULT" />
              <h2 className="font-serif text-h2 max-md:text-h2-mobile font-normal text-[#333333] mt-4">
                Significantly More Advisor Time Focused on You.
              </h2>
              <p className="font-sans text-[17px] text-[#333333] leading-relaxed mt-6">
                At a traditional firm, your advisor spends the majority of their
                day on operations: paperwork, compliance reporting, manual
                rebalancing, account administration. The time left for
                you is often a fraction of their workday.
              </p>
              <p className="font-sans text-[17px] text-[#333333] leading-relaxed mt-4">
                Farther&apos;s platform handles the operational work, freeing
                your advisor to devote significantly more of their time to
                high-impact client interactions. That means more strategy
                sessions, faster responses, and a deeper understanding of your
                evolving needs.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  'More proactive outreach and strategy discussions',
                  'Faster response times when life throws a curveball',
                  'Deeper knowledge of your family, goals, and concerns',
                  'Regular plan reviews, not annual check-ins',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-[#1d7682] mt-0.5 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="font-sans text-[15px] text-[#333333]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Platform Mockup Placeholder */}
          <AnimateOnScroll delay={200}>
            <div className="bg-[#333333] rounded-[16px] p-8 border border-[rgba(201,168,76,0.15)]">
              <div className="rounded-[8px] overflow-hidden relative">
                <Image
                  src="/Photos/advisor-couple-meeting.png"
                  alt="Wealth advisor meeting with clients using Farther's technology-powered financial planning platform"
                  width={1536}
                  height={1024}
                  className="w-full h-auto"
                />
              </div>

              {/* Recognition badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-[rgba(201,168,76,0.1)]">
                <div className="text-center">
                  <p className="font-sans text-[20px] text-[#1d7682]">#1</p>
                  <p className="font-sans text-[10px] text-[#b6d0ed] tracking-wider uppercase">Inc. 5000 FinServ</p>
                </div>
                <div className="text-center">
                  <p className="font-sans text-[20px] text-[#1d7682]">#1</p>
                  <p className="font-sans text-[10px] text-[#b6d0ed] tracking-wider uppercase">Deloitte Fintech</p>
                </div>
                <div className="text-center">
                  <p className="font-sans text-[20px] text-[#1d7682]">2024</p>
                  <p className="font-sans text-[10px] text-[#b6d0ed] tracking-wider uppercase">WealthTech of Year</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          AI-POWERED ANALYSIS
          ================================================================ */}
      <section className="bg-[#333333] bg-texture-dark section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
            <div>
              <AnimateOnScroll>
                <SectionEyebrow text="AI-POWERED ANALYSIS" light />
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#F7F4EE] mt-4">
                  AI-Powered Analysis. Advisor-Driven Decisions.
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <p className="font-sans text-body text-[#b6d0ed] leading-relaxed mt-6">
                  Farther&rsquo;s proprietary AI engine transforms how your advisor
                  analyzes and constructs your portfolio, combining
                  machine-learning precision with fiduciary judgment to deliver a
                  level of personalization that legacy platforms cannot match.
                </p>
                <p className="font-sans text-body text-[#b6d0ed] leading-relaxed mt-4">
                  The process begins when your advisor uploads your current account
                  statements. Our AI extracts and categorizes every holding, maps
                  your current allocation, and generates a detailed comparison
                  against a recommended portfolio designed around your specific
                  goals, risk profile, and tax situation, typically in under
                  ten minutes.*
                </p>
                <p className="font-sans text-body text-[#b6d0ed] leading-relaxed mt-4">
                  Your advisor then takes the lead: refining allocations,
                  stress-testing assumptions against multiple market scenarios, and
                  tailoring every element to your family&rsquo;s unique
                  circumstances. The technology accelerates analysis. Your advisor
                  drives strategy.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <p className="font-sans text-[15px] text-[#b6d0ed]/80 leading-relaxed mt-6">
                  Built entirely in-house by Farther&rsquo;s engineering team, the
                  platform operates within an encrypted, closed-loop ecosystem.
                  Your financial data never touches third-party AI tools, and every
                  proposal is generated within Farther&rsquo;s secure
                  infrastructure.
                </p>
                <p className="font-sans text-body text-[#b6d0ed] leading-relaxed mt-4">
                  The result: a clear, personalized investment proposal you can
                  evaluate with confidence, produced faster than traditional
                  methods, but grounded in the same rigorous thinking you would
                  expect from a dedicated fiduciary.
                </p>
              </AnimateOnScroll>
            </div>

            {/* Right Column: Feature bullets + stats */}
            <div>
              <AnimateOnScroll delay={150}>
                <div className="space-y-6">
                  {[
                    {
                      icon: Upload,
                      title: 'Instant Portfolio Intelligence',
                      body: 'Upload existing statements and receive a structured analysis of current holdings, gaps, and opportunities in minutes, not days.',
                    },
                    {
                      icon: Layers,
                      title: 'Side-by-Side Clarity',
                      body: 'See exactly how your current portfolio compares to a recommended allocation built around your goals, risk tolerance, and tax profile.',
                    },
                    {
                      icon: Brain,
                      title: 'Advisor-Controlled Recommendations',
                      body: 'Every AI-generated insight is reviewed, refined, and approved by your dedicated advisor before it reaches you.',
                    },
                    {
                      icon: Lock,
                      title: 'Closed-Loop Security',
                      body: 'All data processing happens inside Farther\u2019s encrypted infrastructure with zero reliance on third-party AI platforms.',
                    },
                    {
                      icon: Zap,
                      title: 'Seamless Onboarding',
                      body: 'Once you approve your proposal, custodian details and tax allocations carry forward automatically, with no redundant paperwork, no re-entering information.',
                    },
                  ].map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-[8px] bg-[rgba(29,118,130,0.15)] flex items-center justify-center shrink-0 mt-0.5">
                        <feature.icon size={20} className="text-[#1d7682]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-sans text-[15px] font-semibold text-[#F7F4EE]">
                          {feature.title}
                        </p>
                        <p className="font-sans text-[15px] text-[#b6d0ed] leading-relaxed mt-1">
                          {feature.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Stat Block */}
              <AnimateOnScroll delay={250}>
                <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-[rgba(182,208,237,0.15)]">
                  <div className="text-center">
                    <p className="font-sans text-[28px] font-bold text-[#1d7682]">
                      &lt;10 Min*
                    </p>
                    <p className="font-sans text-[11px] text-[#b6d0ed]/70 tracking-[0.1em] uppercase mt-1">
                      Personalized Proposal
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-sans text-[28px] font-bold text-[#1d7682]">
                      100%
                    </p>
                    <p className="font-sans text-[11px] text-[#b6d0ed]/70 tracking-[0.1em] uppercase mt-1">
                      In-House AI
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-sans text-[28px] font-bold text-[#1d7682]">
                      0
                    </p>
                    <p className="font-sans text-[11px] text-[#b6d0ed]/70 tracking-[0.1em] uppercase mt-1">
                      3rd-Party AI Exposure
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Section CTA */}
          <AnimateOnScroll delay={300}>
            <div className="text-center mt-16 pt-12 border-t border-[rgba(182,208,237,0.1)]">
              <h3 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#F7F4EE]">
                See the Difference Intelligent Technology Makes.
              </h3>
              <div className="mt-8">
                <Button href="/schedule-consultation" variant="primary">
                  Begin a Confidential Conversation{' '}
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Footnote Disclosure */}
          <AnimateOnScroll delay={350}>
            <div className="mt-12 pt-6 border-t border-[rgba(182,208,237,0.1)]">
              <p className="font-sans text-[10px] text-[#b6d0ed]/50 leading-[1.8]">
                *Average proposal generation time based on internal performance
                data. Individual results may vary depending on account complexity
                and number of holdings. Farther&rsquo;s AI engine assists with
                data extraction, portfolio categorization, and allocation
                modeling. All investment recommendations are reviewed and approved
                by a licensed investment advisor representative of Farther Finance
                Advisors LLC, an SEC-registered investment adviser. AI-generated
                analysis is used as a tool to support, not replace, advisor
                judgment. Investing involves risk, including the potential loss of
                principal. This description of platform capabilities is for
                informational purposes only and does not constitute a guarantee of
                any specific outcome or level of service. For additional
                information, please refer to our{' '}
                <a
                  href="/documents/FFA-ADV-Packet-2.6.26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#b6d0ed]"
                >
                  Form ADV Part 2A
                </a>{' '}
                and{' '}
                <a href="/disclosures" className="underline hover:text-[#b6d0ed]">
                  Disclosures
                </a>
                .
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* AUM Bar */}
      <section className="bg-[#1d7682] py-6">
        <div className="max-w-container mx-auto flex flex-wrap justify-center items-center gap-10 md:gap-20 px-[20px]">
          {[
            { number: '$15B+', label: 'ASSETS UNDER MANAGEMENT' },
            { number: '276', label: 'ADVISOR PARTNERS' },
            { number: '9', label: 'INTEGRATED SERVICES' },
            { number: '24/7', label: 'TAX OPTIMIZATION' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-sans text-[28px] md:text-[36px] text-[#F7F4EE]">
                {stat.number}
              </p>
              <p className="font-sans text-xs font-medium text-[#F7F4EE]/70 tracking-[0.1em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#333333] section-padding text-center">
        <div className="max-w-[620px] mx-auto">
          <h2 className="font-serif text-[44px] max-md:text-[30px] font-semibold text-[#F7F4EE] leading-[1.2]">
            Experience the Difference.
          </h2>
          <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
            See how Farther&apos;s technology platform transforms the
            wealth management experience. Schedule a conversation and
            we&apos;ll walk you through it.
          </p>
          <div className="mt-10">
            <Button href="/schedule-consultation" variant="primary">
              Schedule a Conversation
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
