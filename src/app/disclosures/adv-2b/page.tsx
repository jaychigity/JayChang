import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
 title: 'ADV Part 2B - Jay S. Chang | Advisor Jay',
 description:
 'Form ADV Part 2B Brochure Supplement for Jay S. Chang, VP, Wealth Advisor at Farther Finance Advisors, LLC.',
 robots: { index: false, follow: true },
 alternates: {
 canonical: 'https://www.advisorjay.com/disclosures/adv-2b',
 },
}

export default function ADV2BPage() {
 return (
 <>
 {/* Header */}
 <section className="bg-[#F7F4EE] pt-[80px] pb-[40px] px-[80px] max-md:px-[20px]">
  <div className="max-w-[800px] mx-auto">
  <Link
  href="/disclosures"
  className="font-sans text-sm text-[#1d7682] hover:text-[#155f69] transition-colors"
  >
  &larr; Back to Disclosures
  </Link>
  <h1 className="font-serif text-[36px] max-md:text-[28px] font-bold text-[#333333] leading-[1.15] mt-6">
  ADV Part 2B - Brochure Supplement
  </h1>
  <p className="font-sans text-[17px] text-[#5b6a71] mt-4 leading-relaxed">
  Jay S. Chang &middot; VP, Wealth Advisor
  </p>
  <p className="font-sans text-caption text-[#5b6a71]/60 mt-2">
  Farther Finance Advisors, LLC &middot; Dated September 10, 2024
  </p>
  <a
  href="/documents/Jay-Chang-ADV2B.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block font-sans text-sm font-semibold text-[#1d7682] hover:text-[#155f69] transition-colors mt-4"
  >
  View ADV Part 2B (PDF) &darr;
  </a>
  </div>
 </section>

 {/* Content */}
 <section className="bg-[#FAFAF8] py-[60px] px-[80px] max-md:px-[20px]">
  <div className="max-w-[800px] mx-auto space-y-16">

  {/* Item 1 - Cover Page */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Item 1 - Cover Page
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <div className="bg-[#F7F4EE] rounded-[8px] p-6 space-y-2">
   <p className="font-semibold">Jay S. Chang</p>
   <p>Farther Finance Advisors, LLC</p>
   <p>ADV Part 2B, Brochure Supplement</p>
   <p>Dated September 10, 2024</p>
   <p className="mt-3">
   Website:{' '}
   <a
    href="https://www.farther.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#333333] underline hover:text-[#1d7682]"
   >
    www.farther.com
   </a>
   </p>
   <p>Contact: Christopher Powers, Chief Compliance Officer</p>
   </div>
   <p>
   This Brochure Supplement provides information about Jay S.
   Chang that supplements the Farther Finance Advisors, LLC
   Brochure; you should have received a copy of that Brochure.
   Please contact Christopher Powers, Chief Compliance Officer, if
   you did not receive Farther Finance Advisors, LLC&apos;s Brochure or
   if you have any questions about the contents of this supplement.
   </p>
   <p>
   Additional information about Jay S. Chang is available on
   the SEC&apos;s website at{' '}
   <a
   href="https://www.adviserinfo.sec.gov"
   target="_blank"
   rel="noopener noreferrer"
   className="text-[#333333] underline hover:text-[#1d7682]"
   >
   www.adviserinfo.sec.gov
   </a>
   .
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Item 2 - Education Background and Business Experience */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Item 2 - Education Background and Business Experience
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   Jay Soon Chang graduated from Arizona State University
   with a Bachelor of Applied Science degree and a Master&apos;s
   degree. Mr. Chang has been a VP, Wealth Advisor
   with Farther Finance Advisors, LLC since October 2025.
   From March 2018 through October 2025, Mr. Chang served as
   Vice President - Financial Consultant at Charles Schwab &amp;
   Co., Inc. in Phoenix, AZ. From May 2017 through February
   2018, Mr. Chang served as Associate Financial Consultant at
   Charles Schwab. From May 2016 through April 2017, Mr. Chang
   served as Associate Wealth Advisor at Schwab Private Client
   Investment Advisory. From September 2013 through April 2016,
   Mr. Chang served as Registered Representative at The Vanguard
   Group, Inc. in Scottsdale, AZ.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Item 3 - Disciplinary Information */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Item 3 - Disciplinary Information
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>None.</p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Item 4 - Other Business Activities */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Item 4 - Other Business Activities
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <h3 className="font-sans text-base font-semibold text-[#333333] mt-2">
   A. Investment-Related Business Activities
   </h3>
   <p>
   The supervised person is not actively engaged in any other
   investment-related businesses or occupations.
   </p>

   <h3 className="font-sans text-base font-semibold text-[#333333] mt-6">
   B. Licensed Insurance Agent
   </h3>
   <p>
   Mr. Chang, in his individual capacity, is a licensed
   insurance agent, and may recommend the purchase of certain
   insurance-related products on a commission basis. Clients can
   engage Mr. Chang to purchase insurance products on a
   commission basis.
   </p>
   <div className="bg-[#FFF8E7] border border-[#E8D5A0] rounded-[8px] p-5">
   <p className="font-semibold text-[#333333] mb-2">
   Conflict of Interest
   </p>
   <p>
   The recommendation by Mr. Chang that a client purchase an
   insurance commission product presents a conflict of interest,
   as the receipt of commissions may provide an incentive to
   recommend insurance products based on commissions to be
   received, rather than on a particular client&apos;s need. No client
   is under any obligation to purchase any insurance commission
   products from Mr. Chang. Clients are reminded that they may
   purchase insurance products recommended by Mr. Chang
   through other, non-affiliated insurance agents. The
   Registrant&apos;s Chief Compliance Officer, Christopher Powers,
   remains available to address any questions that a client or
   prospective client may have regarding the above conflict of
   interest.
   </p>
   </div>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Item 5 - Additional Compensation */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Item 5 - Additional Compensation
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   Mr. Chang&apos;s annual compensation is based, in part, on the
   amount of assets under management that Mr. Chang introduces
   to the Registrant and the number of clients that Mr. Chang
   introduces to the Registrant.
   </p>
   <div className="bg-[#FFF8E7] border border-[#E8D5A0] rounded-[8px] p-5">
   <p className="font-semibold text-[#333333] mb-2">
   Conflict of Interest
   </p>
   <p>
   Accordingly, Mr. Chang has a conflict of interest for
   recommending the Registrant to clients for investment advisory
   services, as the recommendation could be made on the basis of
   compensation to be received, rather than on a client or
   prospective client&apos;s best interests.
   </p>
   </div>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Item 6 - Supervision */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   Item 6 - Supervision
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   The Registrant provides investment advisory and supervisory
   services in accordance with the Registrant&apos;s policies and
   procedures manual. The primary purpose of the Registrant&apos;s Rule
   206(4)-7 policies and procedures is to comply with the
   supervision requirements of Section 203(e)(6) of the Investment
   Advisers Act of 1940 (the &ldquo;Act&rdquo;).
   </p>
   <p>
   The Registrant&apos;s Chief Compliance Officer, Christopher Powers,
   is primarily responsible for the implementation of the
   Registrant&apos;s policies and procedures and overseeing the
   activities of the Registrant&apos;s supervised persons.
   </p>
   <p>
   Should an employee, independent contractor, investment adviser
   representative, or promoter of the Registrant have any questions
   regarding the applicability/relevance of the Act, the Rules
   thereunder, any section thereof, or any section of the policies
   and procedures, he/she should address those questions with the
   Chief Compliance Officer.
   </p>
   <p>
   Should a client have any questions regarding the Registrant&apos;s
   supervision or compliance practices, please contact Mr. Powers
   at{' '}
   <a
   href="tel:+14158277371"
   className="text-[#333333] underline hover:text-[#1d7682]"
   >
   (415) 827-7371
   </a>
   .
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Footer */}
  <div className="bg-[#F7F4EE] rounded-[8px] p-6 space-y-3">
  <p className="font-sans text-[13px] text-[#5b6a71]">
   Brochure Supplement Prepared By: Farther Finance Advisors, LLC - 
   Compliance Department
  </p>
  <p className="font-sans text-[13px] text-[#5b6a71]">
   Date: September 10, 2024 &middot; Status: Final
  </p>
  <p className="font-sans text-[13px] text-[#5b6a71] mt-4">
   For Questions or Additional Information:
  </p>
  <p className="font-sans text-[13px] text-[#5b6a71]">
   Christopher Powers, Chief Compliance Officer &middot;{' '}
   <a
   href="tel:+14158277371"
   className="underline hover:text-[#1d7682]"
   >
   (415) 827-7371
   </a>{' '}
   &middot;{' '}
   <a
   href="https://www.farther.com"
   target="_blank"
   rel="noopener noreferrer"
   className="underline hover:text-[#1d7682]"
   >
   www.farther.com
   </a>
  </p>
  <p className="font-sans text-[13px] text-[#5b6a71]">
   Additional information about Jay S. Chang is available at{' '}
   <a
   href="https://www.adviserinfo.sec.gov"
   target="_blank"
   rel="noopener noreferrer"
   className="underline hover:text-[#1d7682]"
   >
   www.adviserinfo.sec.gov
   </a>
   .
  </p>
  </div>
  </div>
 </section>
 </>
 )
}
