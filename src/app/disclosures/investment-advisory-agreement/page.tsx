import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
 title: 'Investment Advisory Agreement | Advisor Jay',
 description:
 'Investment Advisory Agreement for Farther Finance Advisors, LLC. Terms and conditions for discretionary investment management services.',
 robots: { index: false, follow: true },
 alternates: {
 canonical: 'https://www.advisorjay.com/disclosures/investment-advisory-agreement',
 },
}

const feeSchedule = [
 { range: '$0 to $1.0M', fee: 'Up to 1.25%' },
 { range: '$1.0M to $2.5M', fee: '1.00%' },
 { range: '$2.5M to $5.0M', fee: '0.75%' },
 { range: '$5.0M and above', fee: '0.50%' },
]

export default function InvestmentAdvisoryAgreementPage() {
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
  Investment Advisory Agreement
  </h1>
  <p className="font-sans text-[17px] text-[#5b6a71] mt-4 leading-relaxed">
  Farther Finance Advisors, LLC
  </p>
  <p className="font-sans text-caption text-[#5b6a71]/60 mt-2">
  Disclosure Document &middot; For Client Use
  </p>
  <a
  href="/documents/FFA-Standard-AUM-IAA-2.7.26.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block font-sans text-sm font-semibold text-[#1d7682] hover:text-[#155f69] transition-colors mt-4"
  >
  View Full Agreement (PDF) &darr;
  </a>
  </div>
 </section>

 {/* Preamble */}
 <section className="bg-[#FAFAF8] py-[60px] px-[80px] max-md:px-[20px]">
  <div className="max-w-[800px] mx-auto space-y-16">
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
  <p>
   This Investment Advisory Agreement, together with the attached
   exhibit(s), (collectively, the &ldquo;Agreement&rdquo;), is between Farther
   Finance Advisors, LLC, (&ldquo;Farther&rdquo; or &ldquo;Advisor&rdquo;) and Client.
   This Agreement pertains to online discretionary investment
   management services (the &ldquo;Program&rdquo;) via a website and mobile
   application portal (the &ldquo;Platform&rdquo;) and related account(s)
   (collectively the &ldquo;Account&rdquo;), established on behalf of the Client
   in accordance with the following terms and conditions:
  </p>
  </div>

  {/* Section 1 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   1. Program Description
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   The Program seeks to implement investment portfolios designed by
   investment advisors with target asset allocations based on the
   Client&apos;s financial situation, risk tolerance and time horizon.
   Using the Advisor&apos;s Platform, the Client agrees to provide
   information necessary to determine Client&apos;s financial situation,
   risk tolerance and time horizon. The Client&apos;s responses will
   determine an appropriate investment strategy for the Client&apos;s
   Account.
   </p>
   <p>
   Advisor has discretion over crafting investment strategy and
   necessary portfolio construction to meet the client&apos;s objective
   and investment profile. This may include the use of core
   investment models created and managed by Farther Asset
   Management, LLC, an affiliated company.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 2 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   2. Electronic Delivery, Receipt of Form ADV and Privacy Notice
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   Client agrees that Advisor may electronically deliver all
   documents and other information via the Advisor&apos;s Platform.
   Client acknowledges receipt of Part 2 of Form ADV or a brochure
   containing the equivalent information and a Privacy Notice.
   </p>
   <p>
   If the appropriate disclosure statement was not delivered to the
   Client at least 48 hours prior to the Client entering into any
   written or oral advisory contract with this investment adviser,
   then the Client has the right to terminate the contract without
   penalty within five business days after entering into contract.
   For the purposes of this provision, a contract is considered
   entered into when all parties to the contract have signed the
   contract, or, in the case of an oral contract, otherwise
   signified their acceptance, any other provisions of this contract
   notwithstanding.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 3 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   3. Client Authority and Obligations
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   The Client acknowledges it has legal authority to execute this
   Agreement and that there are no encumbrances on any assets in
   account. The Client correspondingly agrees to immediately notify
   the Advisor, in writing, in the event that either of these
   representations should change.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 4 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   4. Advisor Compensation
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   The Advisor&apos;s fees for Program services provided under this
   Agreement shall be in accordance with the fee terms discussed in
   &ldquo;Exhibit A&rdquo; which is incorporated into this Agreement by
   reference. The Client authorizes the custodian of the assets in
   the Account to deduct advisory fees from the Account and to
   remit such fee to the Advisor in accordance with required
   regulatory procedures and Client&apos;s custodial agreement.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 5 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   5. No Custody of Assets and Advisory Liability for Losses
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   The Client agrees that because the Advisor does not have custody
   of the assets in the Account, the Advisor shall have no
   liability to the Client for any loss or other harm to any assets
   or property in the Account, including any harm to any assets or
   property in the Account resulting from the insolvency of the
   custodian or any acts of the agents or employees of the
   custodian, regardless of whether the full amount of such loss is
   covered by Securities Investor Protection Corporation (SIPC) or
   any other insurance which may be carried by the custodian. The
   Client understands that SIPC provides only limited protection
   for the loss of property held by a broker-dealer.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 6 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   6. Conflicts of Interest
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   Advisor agrees to act in the Client&apos;s best interest at all
   times. Should a conflict of interest arise, Advisor shall
   refrain from rendering any advice or services related to the
   conflict of interest. Advisor will immediately disclose to
   Client any conflict of interest having a significant detrimental
   effect on the services offered to Client.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 7 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   7. Broker-Dealer Recommendations
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   Except to the extent the Client directs otherwise, the Advisor
   may use its discretion in recommending the broker or dealer. In
   recommending brokers and dealers, Advisor will generally seek
   &ldquo;best execution.&rdquo; Best execution means in recommending a broker
   or dealer the Advisor will comply with its fiduciary duty to
   obtain best execution and will take into account such relevant
   factors as:
   </p>
   <ol className="list-[lower-alpha] pl-6 space-y-2">
   <li>price;</li>
   <li>
   the broker&apos;s or dealer&apos;s facilities, reliability and financial
   responsibility;
   </li>
   <li>
   the ability of the broker or dealer to effect transactions,
   particularly with regard to such aspects as timing, order size
   and execution of order;
   </li>
   <li>
   the research and related brokerage services provided by such
   broker or dealer to the Advisor, notwithstanding that the
   Account may not be the direct or exclusive beneficiary of such
   services; and
   </li>
   <li>
   any other factors the Advisor considers to be relevant.
   </li>
   </ol>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 8 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   8. Risk Acknowledgment
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   Advisor does not guarantee the future performance of the Account
   or any specific level of performance, the success of any
   investment decision or strategy that Advisor may use, or the
   success of Advisor&apos;s overall management of the Account. Client
   understands that investment decisions made for the Account by
   Advisor are subject to various market, currency, economic,
   political and business risks, and that those investment
   decisions will not always be profitable.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 9 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   9. Advisor Liability
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   Advisor will use its best judgment and good faith efforts in
   rendering services to the Client. Investment recommendations
   shall not constitute legal or tax advice, analysis or opinion.
   Client indemnifies Advisor and its associates for any losses,
   claims, or damages, including legal fees, which may be incurred
   by Advisor as a result of its reliance upon inaccurate
   information provided by the Client.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 10 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   10. Termination
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   This Agreement will continue in effect until terminated by
   either party for any reason. A request to terminate the
   Agreement shall be communicated as outlined in Section 18 below.
   Termination of this Agreement will not affect (i) the validity
   of any action previously taken by Advisor under this Agreement;
   (ii) liabilities or obligations of the parties from transactions
   initiated before termination of this Agreement; or (iii)
   Client&apos;s obligation to pay advisory fees (prorated through the
   date of termination). Upon the termination of this Agreement,
   Advisor will have no obligation to recommend or take any action
   with regard to the securities, cash or other investments in the
   Account.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 11 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   11. Assignment
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   This Agreement may not be assigned as the term is defined by the
   Investment Advisers Act of 1940 by either the Client or the
   Advisor without the prior consent of the other party.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 12 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   12. Non-Exclusive Management
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   Advisor, its officers, employees, and agents, may have or take
   the same or similar positions in specific investments for their
   own accounts, or for the accounts of other Clients, as the
   Advisor does for the Account. Client expressly acknowledges and
   understands that Advisor shall be free to render investment
   advice to others and that Advisor does not make its investment
   management services available exclusively to Client.
   </p>
   <p>
   Nothing in this Agreement shall impose upon the Advisor any
   obligation to purchase or sell, or to recommend for purchase or
   sale, for the Account any security which the Advisor, its
   principals, affiliates or employees, may purchase or sell for
   their own accounts or for the account of any other Client, if in
   the reasonable opinion of the Advisor such investment would be
   unsuitable for the Account or if the Advisor determines in the
   best interest of the Account it would be impractical or
   undesirable.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 13 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   13. Mediation and Binding Arbitration
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   The parties acknowledge that mediation usually helps parties to
   settle their dispute. Therefore, any party may propose mediation
   whenever appropriate through any mediation process the parties
   may agree upon.
   </p>
   <p>
   If not by mediation, except in matters for injunctive relief, any
   claim or controversy arising out of or relating to the Agreement
   shall be resolved by binding arbitration in accordance with the
   then effective arbitration rules of any qualified private
   arbitration organization. The arbitration organization to hear
   the case shall be determined by the party who first initiates
   arbitration by filing a claim in accordance with the filing
   rules of the organization selected. Any judgment upon the award
   rendered pursuant to such arbitration may be entered in any
   court of competent jurisdiction over the matter.
   </p>
   <p>
   For any claim to be considered by an arbitrator(s) the claim
   must be within the statute of limitations applicable to the
   claim as if it were filed in a court of competent jurisdiction.
   Any claims, which are not received within the applicable statute
   of limitations, are deemed waived and barred. Nothing in this
   Agreement may be interpreted to limit or modify the Adviser&apos;s
   fiduciary duty to the Client or as a waiver of any right or
   remedy a Client may have under federal or state securities laws.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 14 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   14. Attorney Fees
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   In the event any action, including without limitation those
   arising before and at any trial, arbitration, bankruptcy, or
   other proceeding and in any appeal, is filed to enforce or
   interpret the terms and obligations of this Agreement or any
   issues related to the United States Bankruptcy Code (whether or
   not the issues relate to the terms of this Agreement), the
   prevailing party shall be entitled to its reasonable attorney
   fees, paralegal fees, disbursements and costs, including
   reasonable post-judgment attorney fees incurred in collection
   efforts.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 15 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   15. Severability
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   Any term or provision of this Agreement, which is invalid or
   unenforceable in any jurisdiction shall, as to such
   jurisdiction, be ineffective to the extent of such invalidity or
   unenforceability without rendering invalid or unenforceable the
   remaining terms or provisions of this Agreement or affecting the
   validity or enforceability of any of the terms or provisions of
   this Agreement in any other jurisdiction.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 16 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   16. Client Conflicts
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   If this Agreement is between the Advisor and married Clients,
   Advisor&apos;s services shall be based upon the joint goals
   communicated to the Advisor. Advisor shall be permitted to rely
   upon instructions from either party with respect to disposition
   of the assets, unless and until such reliance is revoked in
   writing to the Advisor. The Advisor shall not be responsible for
   any claims or damages resulting from such reliance or from any
   change in the status of the relationship between the Clients.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 17 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   17. Applicable Law and Venue
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   This Agreement supersedes and replaces, in its entirety, all
   previous investment advisory agreement(s) between the parties.
   To the extent not inconsistent with applicable law, this
   Agreement shall be governed by and construed in accordance with
   the laws of the State of California. In addition, to the extent
   not inconsistent with applicable law, the venue for the
   resolution of any dispute or controversy between Advisor and
   Client shall be the County of San Francisco, California.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 18 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   18. Notices
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   This Agreement may be terminated by sending an email request to{' '}
   <a
   href="mailto:help@farther.com"
   className="text-[#333333] underline hover:text-[#1d7682]"
   >
   help@farther.com
   </a>{' '}
   or by mailing a signed written request to the postal address on
   the Advisor&apos;s current Form ADV Part 2.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 19 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   19. Multiple Accounts
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   This Agreement shall apply to any subsequent or additional
   accounts opened by Client with Advisor, or, if a joint account,
   by any one of the Clients in the account, as if a separate
   Agreement was executed for each new account.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 20 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   20. Entire Agreement
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   This Agreement shall constitute the entire agreement between the
   parties. No other agreement, verbal or otherwise, shall be
   binding upon the parties unless written and signed by both
   parties.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Section 21 */}
  <div>
  <h2 className="font-sans text-[20px] font-semibold text-[#333333] mb-4">
   21. Electronic Signature
  </h2>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <p>
   BY CLICKING OR TAPPING &ldquo;I Agree&rdquo; THE CLIENT AGREES TO ENTER
   INTO THIS AGREEMENT AND BE LEGALLY BOUND BY ITS TERMS AND
   CONDITIONS EFFECTIVE AS OF THE DATE BELOW. CLICKING OR TAPPING
   &ldquo;I Agree&rdquo; HAS THE SAME LEGAL EFFECT AS SIGNING A PAPER VERSION
   OF THIS AGREEMENT. CLIENT ACKNOWLEDGES THIS AGREEMENT AND
   APPLICABLE FEES MAY BE AMENDED FROM TIME TO TIME. CLIENT
   AGREES, BY MAINTAINING AN ACCOUNT OR USING THE PROGRAM WITHOUT
   PROPER NOTICE AFTER ADVISOR PROVIDES NOTIFICATION OF A NEW
   VERSION OF AN AGREEMENT, TO ACCEPT ALL TERMS AND CONDITIONS OF
   ANY AMENDED AGREEMENT, INCLUDING ANY NEW OR CHANGED FEES, TERMS
   OR CONDITIONS.
   </p>
  </div>
  <div className="border-b border-[#E8E6E1] mt-12" />
  </div>

  {/* Exhibit A */}
  <div id="exhibit-a">
  <h2 className="font-sans text-[24px] font-semibold text-[#333333] mb-2">
   Exhibit A
  </h2>
  <h3 className="font-sans text-[20px] font-semibold text-[#333333] mb-6">
   Investment Advisory Fee Schedule
  </h3>
  <div className="font-sans text-[15px] text-[#333333] leading-[1.7] space-y-4">
   <div className="overflow-x-auto">
   <table className="w-full border-collapse">
   <thead>
    <tr className="border-b-2 border-[#333333]">
    <th className="text-left py-3 pr-6 font-semibold">
    Assets Under Management
    </th>
    <th className="text-left py-3 font-semibold">
    Annual Fee
    </th>
    </tr>
   </thead>
   <tbody>
    {feeSchedule.map((tier) => (
    <tr
    key={tier.range}
    className="border-b border-[#E8E6E1]"
    >
    <td className="py-3 pr-6">{tier.range}</td>
    <td className="py-3">{tier.fee}</td>
    </tr>
    ))}
   </tbody>
   </table>
   </div>

   <p>
   The above annualized fees are negotiable and charged monthly on
   a pro-rata basis in advance. Advisory fees are based on the fair
   market value of the portfolio under management at the closing
   date of each month. In the event that the Client terminates the
   managed account between monthly billing cycles, the Client will
   receive a pro-rata refund based on the amount of time their
   account has been under management and the time remaining within
   that particular month.
   </p>
   <p>
   A Client may also incur certain charges imposed by custodians,
   and other third parties. These include transfer fees, execution
   costs, broker-dealer spreads, broker-dealer mark-ups or
   markdowns on principal transactions, administrative fees, 12b-1
   fees and other similar fees on brokerage accounts and securities
   transactions. Exchange traded funds also charge internal
   management fees, which are disclosed in the relevant fund&apos;s
   prospectus. Farther does not receive these fees or any other
   compensation from exchange traded fund&apos;s fund managers. Such
   fees are in addition to advisory fees contained in the above fee
   schedule.
   </p>
   <p>
   Ongoing use of the Program reaffirms the Client&apos;s agreement
   that Farther may charge the Client&apos;s respective account, as
   applicable. If Farther is unable to collect the advisory fee
   from the Client&apos;s account, Farther reserves the right to
   liquidate assets to pay advisory fees, or to assess the fee in
   arrears and/or terminate the Client&apos;s participation in the
   Program. Termination of any account may be undertaken at
   Farther&apos;s sole discretion. Upon termination of an account,
   assets may be liquidated as soon as practicable. Any unearned
   pre-paid fees will be calculated and refunded on a pro-rata
   basis.
   </p>
  </div>
  </div>
  </div>
 </section>
 </>
 )
}
