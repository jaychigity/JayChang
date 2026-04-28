import type { Metadata } from 'next'
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';
import ArticleByline from '@/components/ArticleByline';

export const metadata: Metadata = {
  title: 'Establishing Arizona Domicile: What California Looks for When High Earners Leave',
  description: 'Strategic guidance on establishing Arizona domicile and avoiding California Franchise Tax Board audits on income for high earners relocating.',
  alternates: {
    canonical: '/insights/establishing-arizona-domicile-california'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Establishing Arizona Domicile: What California Looks for When High Earners Leave',
  description: 'Strategic guidance on establishing Arizona domicile and avoiding California FTB audits.',
  author: {
    '@type': 'Person',
    name: 'Jay Chang'
  },
  datePublished: '2026-03-18'
};

export default function ArizonaDomicileArticle() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-[#F7F4EE] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll>
            <h1 className="font-serif text-5xl font-bold mb-6 text-[#333333]">
              Establishing Arizona Domicile
            </h1>
            <p className="text-2xl text-[#333333] mb-4">
              What California Looks for When High Earners Leave
            </p>
            <div className="mb-8">
              <ArticleByline updatedDate="2026-03-18" variant="light" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold mb-6 text-[#333333]">
              The California Franchise Tax Board&apos;s Aggressive Audit Posture
            </h2>
            <p className="text-lg text-[#5b6a71] mb-6">
              The California Franchise Tax Board (FTB) audits high-income residents who claim to have left California with aggressive frequency. If you earn $200,000 or more annually and claim you have relocated from California to Arizona, you should expect the possibility of a comprehensive audit.
            </p>
            <p className="text-lg text-[#5b6a71] mb-6">
              The FTB&apos;s goal is simple: retain tax revenue. California taxes residents on worldwide income at rates that exceed 13 percent for high earners (combining federal and state). An executive or entrepreneur earning $500,000 or more annually represents significant tax revenue. If the FTB can establish that you remained a California resident despite claiming Arizona domicile, they will tax your entire income at California rates and assess penalties and interest.
            </p>
            <p className="text-lg text-[#5b6a71] mb-6">
              Understanding what California considers "domicile" and documenting your Arizona residency properly is essential. A vague claim of "I moved to Arizona" without supporting documentation will not survive FTB scrutiny.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold mb-6 mt-12 text-[#333333]">
              How California Defines "Domicile"
            </h2>
            <p className="text-lg text-[#5b6a71] mb-6">
              California defines domicile as your true, fixed, permanent home - the place you intend to return to whenever absent. This is not the same as a legal residence or the state where you own property. You can own a home in California and still be an Arizona domiciliary if Arizona is your true, fixed, permanent home. Conversely, you can spend minimal time in California and still be considered a California resident if California is your true, fixed, permanent home.
            </p>
            <p className="text-lg text-[#5b6a71] mb-6">
              The FTB examines numerous factors to determine domicile. No single factor is determinative - the FTB looks at the totality of your connections to California versus Arizona.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold mb-6 mt-12 text-[#333333]">
              The Nine Factors California Examines
            </h2>
            <p className="text-lg text-[#5b6a71] mb-6">
              The FTB uses a "closer connection" test to determine whether you have a closer connection to Arizona than California. Here are the nine primary factors:
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Factor 1: Amount of Time Spent in Each State.</strong> The FTB examines whether you spend more time in Arizona or California. The popular "183-day rule" is a myth - you can spend 182 days in California and still be an Arizona resident, but it helps your case to spend less time in California. Maintain a detailed log of days spent in each state. Business travel does not count as time spent in the state of your business location.
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Factor 2: Where Your Spouse and Dependents Live.</strong> If your spouse and children remain in California while you move to Arizona, the FTB presumes California is your true home. Ideally, your entire family relocates with you. If relocation is not possible (e.g., custody arrangements), document why.
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Factor 3: Where Your Professional Licenses Are Registered.</strong> A physician, attorney, CPA, or other licensed professional should register their professional licenses in Arizona if they are establishing Arizona domicile. Maintaining a California professional license suggests you intend to practice in California.
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Factor 4: Where You Vote and Hold a Driver&apos;s License.</strong> These are easy documentary proofs. Get an Arizona driver&apos;s license immediately after moving. Register to vote in Arizona. Do not maintain an active California driver&apos;s license. The FTB may contact the Arizona MVD and the DMV to verify your driver&apos;s license status.
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Factor 5: Where Your Bank Accounts Are Located.</strong> Move your primary bank accounts to Arizona institutions. This seems minor, but the FTB reviews bank records. If all of your accounts remain in California, the FTB infers you are still California-based.
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Factor 6: Where Your Social, Religious, and Professional Ties Are.</strong> Are you a member of a country club, church, or professional association in Arizona or California? Join Arizona organizations. If you volunteer with a California nonprofit, that is a California connection. The FTB builds a picture of where you spend your non-work time.
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Factor 7: Where You Maintain Your Primary Residence.</strong> Ideally, you own or lease a primary residence in Arizona and do not own a home in California that you occupy or keep available for personal use. If you own a home in California, the FTB may assume it is your primary residence even if you claim Arizona domicile.
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Factor 8: Employment Connections.</strong> Where is your primary employment located? If you are employed by an Arizona company, this supports Arizona domicile. If you are employed by a California company but work remotely from Arizona, this is less clear but still supports Arizona if you can document you genuinely work from Arizona.
            </p>
            <p className="text-lg text-[#5b6a71] mb-6">
              <strong>Factor 9: Statements of Intent and Contemporaneous Documentation.</strong> Do you have contemporaneous documentation of your intent to relocate? Email to your employer stating you are relocating to Arizona? Utility connection requests for Arizona? The FTB will examine any statements you made about your relocation intent.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold mb-6 mt-12 text-[#333333]">
              Critical Steps to Establish Arizona Domicile
            </h2>
            <p className="text-lg text-[#5b6a71] mb-6">
              If you are relocating from California to Arizona, take the following steps immediately:
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Step 1: Get an Arizona Driver&apos;s License.</strong> Do this immediately after moving. Bring proof of Arizona residence (utility bill, lease, or deed). The Arizona MVD will issue you a license. Once you have an Arizona license, do not renew your California license. Let it expire.
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Step 2: Register to Vote in Arizona.</strong> Register as soon as you are eligible. Maintain your Arizona voter registration. The FTB may examine your voter registration status - Arizona registration supports your domicile claim.
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Step 3: Change Your Professional Registrations.</strong> If you hold a professional license (medical, legal, accounting), register it in Arizona and let your California registration lapse or become inactive.
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Step 4: Move Your Primary Banking to Arizona.</strong> Open accounts at Arizona banks or credit unions. Move direct deposit, bill payments, and savings accounts to Arizona institutions. This creates a paper trail documenting your Arizona financial base.
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Step 5: Update Your Employer W-4 and State Tax Withholding.</strong> Notify your employer that you have relocated to Arizona and request that your W-4 reflect Arizona residence. Arizona has no state income tax, so you should request zero Arizona withholding and adjust your federal withholding accordingly.
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Step 6: Join Arizona Professional Organizations.</strong> If you are a professional, join Arizona bar associations, medical associations, or other professional groups. Become active - attend events, network, build professional relationships in Arizona.
            </p>
            <p className="text-lg text-[#5b6a71] mb-4">
              <strong>Step 7: Update Your Estate Planning Documents.</strong> Have an Arizona attorney review your will, trust, and other estate documents. Update them to reflect Arizona domicile and Arizona law. The FTB may examine your estate documents as evidence of your stated domicile intent.
            </p>
            <p className="text-lg text-[#5b6a71] mb-6">
              <strong>Step 8: Document Everything.</strong> Keep contemporaneous records of your relocation. Save emails to your employer, utility connection documents, Arizona lease or deed, driver&apos;s license, voter registration, and any statements you made about your relocation intent. Organize these into a file titled "Domicile Documentation" and keep it for at least 7 years. The work pays for itself: you can <Link href="/tools/ca-nv-tax-savings" className="text-[#1d7682] underline hover:text-[#2a9dab]">estimate your five-year tax savings versus California</Link> on the move.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold mb-6 mt-12 text-[#333333]">
              What NOT to Do When Relocating to Arizona
            </h2>
            <p className="text-lg text-[#5b6a71] mb-6">
              <strong>Do not keep a California home available for personal use.</strong> If you own a home in California and you visit it regularly or keep it furnished and available for your use, the FTB will argue it is your true, fixed, permanent home. You may own California investment property (rental real estate), but your primary residence should not be in California.
            </p>
            <p className="text-lg text-[#5b6a71] mb-6">
              <strong>Do not maintain California club memberships.</strong> If you are a member of a country club, golf club, or other recreational organization in California, the FTB infers you intend to use those facilities, suggesting you maintain ties to California. Drop California memberships and join Arizona clubs.
            </p>
            <p className="text-lg text-[#5b6a71] mb-6">
              <strong>Do not keep your California voter registration active.</strong> If you maintain active voter registration in California while claiming Arizona domicile, you have contradicted yourself. The FTB will use this as evidence of your California intent.
            </p>
            <p className="text-lg text-[#5b6a71] mb-6">
              <strong>Do not file a California tax return if you are claiming Arizona domicile.</strong> Once you establish Arizona domicile, file an Arizona tax return (if required) and a full federal return, but not a California return. If you file a California return while claiming Arizona domicile, you have conceded you are a California resident. If you earned income from California sources, you may be required to file a California nonresident return for that income, but this is different from filing as a California resident.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold mb-6 mt-12 text-[#333333]">
              The FTB Audit Process for Domicile Disputes
            </h2>
            <p className="text-lg text-[#5b6a71] mb-6">
              If the FTB audits your domicile claim, they will likely request: bank statements, credit card statements, phone records, calendar or travel records, California and Arizona property ownership documents, professional license registrations, voter registration records, employment verification, and personal correspondence.
            </p>
            <p className="text-lg text-[#5b6a71] mb-6">
              They will use this documentation to build a timeline of your movements and connections. If they find you spent 120 days in California, maintained your California home available for personal use, and kept your California professional license active, they will likely conclude you remained a California resident.
            </p>
            <p className="text-lg text-[#5b6a71] mb-6">
              An audit can take 18-36 months to resolve and can result in substantial tax bills, interest, and penalties if the FTB concludes you were a California resident all along.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold mb-6 mt-12 text-[#333333]">
              Burden of Proof and the Importance of Documentation
            </h2>
            <p className="text-lg text-[#5b6a71] mb-6">
              In a tax dispute with the FTB, you bear the burden of proving you are not a California resident. This is not "innocent until proven guilty" - this is "you prove you are not a California resident or you are taxed as if you are." The FTB has built a massive database of taxpayer information, and they will use every available tool to challenge domicile changes.
            </p>
            <p className="text-lg text-[#5b6a71] mb-6">
              This places enormous importance on contemporaneous documentation. The moment you decide to relocate from California to Arizona, begin documenting your intent and actions. Keep a detailed log of days spent in each state. Save all documentation related to your move. Organize it so that if you are audited, you can immediately produce evidence of your Arizona domicile.
            </p>
            <p className="text-lg text-[#5b6a71] mb-6">
              A person who relocated with careful documentation and clear intent often prevails in a domicile dispute. A person who relocated casually without documentation and maintained California ties often loses.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold mb-6 mt-12 text-[#333333]">
              Start Your Arizona Domicile Transition Now
            </h2>
            <p className="text-lg text-[#5b6a71] mb-6">
              If you are planning to relocate from California to Arizona, begin the documentation process immediately. The cost and complexity of establishing Arizona domicile is far lower than the cost of defending it in a Franchise Tax Board audit. A few thousand dollars in planning now can save hundreds of thousands in unnecessary taxes later.
            </p>
            <p className="text-lg text-[#5b6a71] mb-6">
              Relocate fully and completely. Establish clear Arizona ties. Document your intent and actions. Maintain detailed records. And consult with a tax professional who understands both California and Arizona tax law to ensure your transition is defensible.
            </p>
          </AnimateOnScroll>

          <div className="mt-12 p-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-[#5b6a71] leading-relaxed">
              <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute tax advice or legal advice. California domicile rules, the FTB&apos;s audit practices, and residency determinations are complex and fact-specific. Consult with a qualified tax attorney and CPA who specialize in California-Arizona tax matters before relocating. This article references 2026 California tax law which may have been updated. The FTB&apos;s audit procedures and domicile standards may also change.
            </p>
          </div>

          <div className="mt-12 text-center">
            <AnimateOnScroll>
              <p className="text-[#5b6a71] mb-6">
                Let&apos;s ensure your domicile transition is properly documented and defensible.
              </p>
              <Button href="/schedule-consultation" variant="primary">
                Schedule a Conversation
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="bg-[#333333] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white text-lg">
            Relocating from California to Arizona? We help high earners establish domicile properly.
          </p>
          <p className="text-gray-300 mt-2">
            Comprehensive tax and financial planning for your move.
          </p>
        </div>
      </section>
    </main>
  );
}
