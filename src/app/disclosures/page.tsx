import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
 title: 'Disclosures & Legal',
 description:
 'Important disclosures, regulatory information, and legal notices for Advisor Jay. SEC-registered investment adviser.',
 robots: { index: false, follow: true },
 alternates: {
 canonical: 'https://www.advisorjay.com/disclosures',
 },
}

const tocItems = [
 { id: 'advisory-relationship', label: 'Advisory Relationship' },
 { id: 'regulatory-information', label: 'Regulatory Information' },
 { id: 'fees', label: 'Fees & Compensation' },
 { id: 'risks', label: 'Investment Risks' },
 { id: 'testimonials', label: 'Testimonial & Endorsement Disclosures' },
 { id: 'performance', label: 'Performance Disclosures' },
 { id: 'privacy', label: 'Privacy Policy' },
 { id: 'terms', label: 'Website Terms of Use' },
 { id: 'disclosure-contact', label: 'Contact Information' },
]

export default function DisclosuresPage() {
 return (
 <>
 {/* Header */}
 <section className="bg-[#F7F4EE] pt-[80px] pb-[40px] px-[80px] max-md:px-[20px]">
  <div className="max-w-[800px] mx-auto text-center">
  <h1 className="font-serif text-[44px] max-md:text-[30px] font-bold text-[#333333] leading-[1.15]">
  Disclosures & Legal Information
  </h1>
  <p className="font-sans text-[17px] text-[#5b6a71] max-w-[600px] mx-auto mt-4 leading-relaxed">
  Important information about our advisory services, regulatory
  filings, and your rights as a client or prospective client.
  </p>
  <p className="font-sans text-caption text-[#5b6a71]/60 mt-4">
  Last updated: March 2026
  </p>
  </div>
 </section>

 {/* Table of Contents */}
 <section className="bg-[#FAFAF8] py-[40px] px-[80px] max-md:px-[20px]">
  <div className="max-w-[800px] mx-auto">
  <p className="font-sans text-sm font-semibold text-[#333333] mb-4">
  On This Page:
  </p>
  <ol className="space-y-2">
  {tocItems.map((item, i) => (
   <li key={item.id}>
   <a
   href={`#${item.id}`}
   className="font-sans text-[15px] font-medium text-[#333333] hover:text-[#1d7682] transition-colors duration-200"
   >
   {i + 1}. {item.label}
   </a>
   </li>
  ))}
  </ol>
  </div>
 </section>

 {/* Disclosure Content */}
 <section className="bg-[#FAFAF8] py-[60px] px-[80px] max-md:px-[20px]">
  <div className="max-w-[800px] mx-auto space-y-16">
  {/* Advisory Relationship */}
  <div id="advisory-relationship" className="scroll-mt-[120px]">
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Advisory Relationship
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   Jay Chang is an advisor at Farther
   Finance Advisors, LLC (&ldquo;Farther&rdquo;), an investment adviser
   registered with the United States Securities and Exchange
   Commission (&ldquo;SEC&rdquo;). Registration with the SEC does not imply a
   certain level of skill or training.
   </p>
   <p>
   Jay Chang is an investment adviser representative of
   Farther Finance Advisors, LLC, providing wealth management
   services to individuals, families, and business owners primarily
   in Scottsdale, Arizona and the greater Phoenix area.
   </p>
   <p>
   Farther provides investment advisory services on a discretionary
   and non-discretionary basis, depending on the nature of the
   client relationship. Advisory services include, but are not
   limited to, investment management, financial planning, tax
   strategy coordination, estate planning coordination, and
   retirement planning.
   </p>
   <p>
   A complete description of Farther&apos;s advisory services, fees,
   and business practices is available in our Form ADV Part 2A
   (Firm Brochure), which is available below or upon request.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Regulatory Information */}
  <div id="regulatory-information" className="scroll-mt-[120px]">
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Regulatory Information
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <div className="bg-[#F7F4EE] rounded-[8px] p-6 space-y-2">
   <p className="font-semibold">Farther Finance Advisors, LLC</p>
   <p>SEC-Registered Investment Adviser</p>
   <p>SEC File Number: 801-116721</p>
   <p>Firm CRD: 302050</p>
   <p>Jay Chang, Individual CRD: 6244488</p>
   </div>
   <p>
   <a href="/documents/FFA-ADV-Packet-2.6.26.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#333333] hover:text-[#1d7682] transition-colors">
   Form ADV Part 2A (Firm Brochure) →
   </a>
   </p>
   <p>
   <Link href="/disclosures/adv-2b" className="font-semibold text-[#333333] hover:text-[#1d7682] transition-colors">
   Form ADV Part 2B (Brochure Supplement) &rarr;
   </Link>
   </p>
   <p>
   <a href="/documents/FFA-ADV-Packet-2.6.26.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#333333] hover:text-[#1d7682] transition-colors">
   Form CRS (Client Relationship Summary) →
   </a>
   </p>
   <p>
   You may also research our firm and any investment adviser
   representative through the SEC&apos;s Investment Adviser Public
   Disclosure (IAPD) database at{' '}
   <a
   href="https://adviserinfo.sec.gov"
   target="_blank"
   rel="noopener noreferrer"
   className="text-[#333333] underline hover:text-[#1d7682]"
   >
   adviserinfo.sec.gov
   </a>
   .
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Fees & Compensation */}
  <div id="fees" className="scroll-mt-[120px]">
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Fees & Compensation
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   Jay Chang charges an advisory fee
   based on a percentage of assets under management. Our fee
   schedule is detailed in Farther&apos;s Form ADV Part 2A Brochure.
   </p>
   <p>
   We do not receive commissions on the purchase or sale of
   securities. We do not receive compensation from third parties
   for recommending specific investment products. Our compensation
   structure is designed to align our interests with our
   clients&apos; interests - we are compensated based on the growth and
   preservation of your assets.
   </p>
   <p>
   Clients may incur additional costs including, but not limited
   to, custodian fees, transaction fees, fund expense ratios, and
   other charges imposed by third-party service providers. These
   costs are separate from and in addition to our advisory fee.
   </p>
   <p>
   For a complete description of our fee schedule and potential
   conflicts of interest, please review our Form ADV Part 2A and
   our{' '}
   <Link href="/disclosures/investment-advisory-agreement" className="text-[#333333] underline hover:text-[#1d7682]">
   Investment Advisory Agreement
   </Link>
   .
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Investment Risks */}
  <div id="risks" className="scroll-mt-[120px]">
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Investment Risks
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   Investing involves risk, including the potential loss of
   principal. Past performance is not indicative of future results.
   No investment strategy can guarantee a profit or protect against
   loss in periods of declining values.
   </p>
   <p>
   Different types of investments involve varying degrees of risk.
   There can be no assurance that a specific investment or strategy
   will be suitable or profitable for a client&apos;s portfolio.
   </p>
   <p>
   Asset allocation and diversification strategies do not guarantee
   a profit or protect against loss in declining markets. The value
   of investments and the income derived from them may fluctuate,
   and you may receive back less than you originally invested.
   </p>
   <p>
   Any projections, market outlook, or estimates in our materials
   are forward-looking statements and are based upon certain
   assumptions. They are not guarantees of future performance.
   Actual results may vary materially from those expressed or
   implied.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Testimonial Disclosures */}
  <div id="testimonials" className="scroll-mt-[120px]">
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Testimonial & Endorsement Disclosures
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   In accordance with the SEC&apos;s Investment Adviser Marketing Rule
   (Rule 206(4)-1 under the Investment Advisers Act of 1940), any
   testimonials or endorsements displayed on this website comply
   with the following requirements:
   </p>
   <p>
   <strong>Testimonials:</strong> Any testimonial displayed on this
   website was provided by a current client. Testimonials were
   provided voluntarily and without compensation. The testimonial
   may not be representative of the experience of all clients. Past
   performance and individual results vary. Testimonials are not a
   guarantee of future performance or investment outcome.
   </p>
   <p>
   <strong>Endorsements:</strong> If any endorsement is displayed
   on this website, it will be accompanied by a disclosure
   indicating (1) the nature of the relationship between the
   endorser and the adviser, (2) whether the endorser was
   compensated, and (3) any material conflicts of interest.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Performance Disclosures */}
  <div id="performance" className="scroll-mt-[120px]">
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Performance Disclosures
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   To the extent that any performance results, returns, or
   investment outcomes are displayed on this website or in any
   marketing materials:
   </p>
   <ul className="list-disc pl-6 space-y-2">
   <li>
   Performance results are historical and are not indicative of
   future results.
   </li>
   <li>
   Performance results may reflect the reinvestment of dividends,
   interest, and other earnings.
   </li>
   <li>
   Performance results do not reflect the deduction of advisory
   fees, which would reduce the displayed returns.
   </li>
   <li>
   Benchmark comparisons, if included, are provided for
   informational purposes only.
   </li>
   </ul>
   <p>
   Farther does not guarantee any specific level of performance and
   does not guarantee that any client will avoid losses.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Privacy Policy */}
  <div id="privacy" className="scroll-mt-[120px]">
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Privacy Policy
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   Jay Chang and Farther Finance
   Advisors, LLC are committed to protecting your personal
   information. This privacy policy describes how we collect, use,
   and safeguard information obtained through this website and our
   advisory relationships.
   </p>

   <h3 className="font-sans text-base font-semibold text-[#333333] mt-6">
   Information We Collect
   </h3>
   <p>Through this website, we may collect:</p>
   <ul className="list-disc pl-6 space-y-1">
   <li>
   Contact information you voluntarily provide (name, email
   address, phone number) through our contact form or newsletter
   signup
   </li>
   <li>
   Website usage data through analytics tools including pages
   visited, time on site, and referring sources
   </li>
   <li>
   Device and browser information for website optimization
   purposes
   </li>
   </ul>

   <h3 className="font-sans text-base font-semibold text-[#333333] mt-6">
   How We Use Your Information
   </h3>
   <p>We use the information we collect to:</p>
   <ul className="list-disc pl-6 space-y-1">
   <li>Respond to your inquiries and schedule meetings</li>
   <li>Provide and improve our advisory services</li>
   <li>Send periodic communications (with your consent)</li>
   <li>Analyze website usage to improve the user experience</li>
   <li>Comply with legal and regulatory obligations</li>
   </ul>

   <h3 className="font-sans text-base font-semibold text-[#333333] mt-6">
   Information Sharing
   </h3>
   <p>
   We do not sell, rent, or share your personal information with
   third parties for their marketing purposes. We may share
   information with service providers who assist in operating our
   website and business, and with regulatory authorities when
   required by law.
   </p>

   <h3 className="font-sans text-base font-semibold text-[#333333] mt-6">
   Data Security
   </h3>
   <p>
   We implement reasonable technical and organizational measures to
   protect your personal information, including encryption of data
   in transit, secure hosting infrastructure, and access controls
   on all systems containing personal data.
   </p>

   <h3 className="font-sans text-base font-semibold text-[#333333] mt-6">
   Your Rights
   </h3>
   <p>
   You may request access to, correction of, or deletion of your
   personal information by contacting us. For residents of California, Nevada, or other states with
   specific privacy legislation, additional rights may apply.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Terms of Use */}
  <div id="terms" className="scroll-mt-[120px]">
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Website Terms of Use
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   By accessing and using this website
   (advisorjay.com), you agree to the following terms:
   </p>
   <p>
   This website is for informational purposes only. Nothing on this
   website constitutes an offer, solicitation, or recommendation to
   purchase or sell any security, investment product, or service.
   The information provided is not intended as personalized
   investment, tax, legal, or accounting advice.
   </p>
   <p>
   The content on this website may be updated, modified, or removed
   at any time without notice. While we strive to ensure the
   accuracy of all information, we make no representations or
   warranties about the completeness, accuracy, reliability, or
   suitability of the information provided.
   </p>
   <p>
   All content on this website is the property of Personal Wealth
   Management at Farther or its licensors and is protected by
   applicable intellectual property laws. Links to third-party
   websites are provided for convenience only and do not constitute
   an endorsement.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Contact Information */}
  <div id="disclosure-contact" className="scroll-mt-[120px]">
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Contact Information
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   If you have questions about these disclosures or our advisory
   services, please contact us:
   </p>
   <div className="bg-[#F7F4EE] rounded-[8px] p-6 space-y-2">
   <p className="font-semibold">Jay Chang</p>
   <p>VP, Wealth Advisor at Farther</p>
   <p>Farther Finance Advisors, LLC</p>
   <p className="mt-3">Scottsdale Office: Scottsdale, AZ</p>
   </div>
   <p className="text-sm text-[#5b6a71]">
   You may also file a complaint or inquiry with the SEC at{' '}
   <a
   href="https://www.sec.gov/contact"
   target="_blank"
   rel="noopener noreferrer"
   className="underline hover:text-[#1d7682]"
   >
   www.sec.gov/contact
   </a>{' '}
   or by calling (800) 732-0330.
   </p>
  </div>
  </div>
  </div>
 </section>
 </>
 )
}
