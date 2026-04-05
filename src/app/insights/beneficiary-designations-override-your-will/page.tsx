import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Beneficiary Designations: The One Document That Overrides Everything Else in Your Estate Plan',
  description: 'Beneficiary designations on 401k, IRA, and insurance override your will and trust. Failing to update them after life events is one of the most costly estate planning mistakes.',
  openGraph: {
    title: 'Beneficiary Designations: The One Document That Overrides Everything Else in Your Estate Plan',
    description: 'Beneficiary designations on 401k, IRA, and insurance override your will and trust. Failing to update them after life events is one of the most costly estate planning mistakes.',
    type: 'article',
  },
  alternates: {
    canonical: '/insights/beneficiary-designations-override-your-will',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'Beneficiary Designations: The One Document That Overrides Everything Else in Your Estate Plan',
  description: 'Beneficiary designations on 401k, IRA, and insurance override your will and trust. Failing to update them after life events is one of the most costly estate planning mistakes.',
  datePublished: '2026-03-18',
  author: {
    '@type': 'Organization',
    name: 'Farther',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#F7F4EE]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Beneficiary Designations: The One Document That Overrides Everything Else in Your Estate Plan
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your will says one thing, but your beneficiary designation says another. The beneficiary designation wins. Here is what you need to know to avoid a $500K mistake.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <AnimateOnScroll>
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Here is a story that happens more often than it should: A woman spends years building her estate through careful saving and investing. She creates a comprehensive will that reflects her wishes - her current spouse gets 40% of her estate, her adult children from a previous marriage get 60%. She updates her will three times to ensure it is current.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                What she does not update is the beneficiary designation on her 401(k) from her first marriage. On that form, her ex-spouse is listed. When she dies, her ex-spouse receives the 401(k) - $500,000 - by virtue of that beneficiary designation, regardless of what her will says. Her current spouse and children split everything else. The ex-spouse walks away with half of everything.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is not hypothetical. It happens. The reason is simple: beneficiary designations override your will, your trust, and any other estate planning document. If you want to ensure that your assets pass to the right people, you cannot ignore beneficiary designations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Which Accounts Have Beneficiary Designations?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Beneficiary designations apply to any account or policy where the owner names a beneficiary to receive the balance at death. Common accounts include:
              </p>
              <ul className="list-disc pl-8 text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
                <li>401(k) plans</li>
                <li>Traditional and Roth IRAs</li>
                <li>Pension plans</li>
                <li>Life insurance policies</li>
                <li>Annuities</li>
                <li>Transfer on Death (TOD) accounts on brokerage and bank accounts</li>
                <li>Payable on Death (POD) accounts on bank accounts</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Some people have multiple accounts with beneficiary designations, and they may not even remember all of them. Accounts opened years ago, beneficiary designations made during a previous relationship, old employer retirement plans - they are all still sitting there, with outdated or inappropriate beneficiary designations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Why Beneficiary Designations Override Everything</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Beneficiary designations override your will and trust because they are contracts. When you open a 401(k) or purchase a life insurance policy, you enter into an agreement with the financial institution or insurance company. That agreement specifies who receives the balance at your death.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your will is also a contract, but it is a contract between you and the court. The will applies to assets that are titled in your name and that have no other instructions for distribution. But the 401(k) or life insurance beneficiary designation is a contract with the custodian of the account. That contract has priority.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                It works this way: when you die, the financial institution or insurance company does not look at your will. They look at the beneficiary designation form they have on file. Whoever is named on that form receives the money. The will is irrelevant.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is a feature and a bug. The feature is that it allows these accounts to pass quickly to beneficiaries without going through probate. The bug is that many people forget to update the designations and end up with unintended consequences.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Common Mistakes with Beneficiary Designations</h2>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Mistake 1: Naming an Estate as Beneficiary</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Some people name their estate as the beneficiary on retirement accounts, thinking this is a good idea. It is not. Naming an estate as beneficiary triggers probate (defeating the purpose of the non-probate account), accelerates required distributions, and complicates tax reporting.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Under the SECURE Act, if an estate is named as beneficiary of a retirement account, non-spouse beneficiaries must withdraw the entire account balance within 10 years of the account holder&apos;s death. This accelerates taxes and can force distributions at an inconvenient time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Instead, name individual beneficiaries or a trust that is properly drafted to work with the SECURE Act rules.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Mistake 2: Failing to Update After Major Life Events</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Divorce is the most common trigger. Many divorce decrees say that the parties will update their beneficiary designations, insurance policies, and other account designations after the divorce. But people forget. They move on with their lives and do not follow through.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Then they die, and the ex-spouse receives the 401(k) or life insurance proceeds. The beneficiary designation supersedes the divorce decree.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Remarriage is another trigger. People remarry and update their will to include the new spouse. But they forget to update the beneficiary designations on their retirement accounts, so the old beneficiary (perhaps a child or ex-spouse from a previous marriage) inherits the account.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The birth of a child is another. A parent updates their will to include a newborn child, but does not update the beneficiary designations on their 401(k) or insurance, so the child receives nothing.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Mistake 3: Naming a Minor as Direct Beneficiary</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you name your child as the direct beneficiary on a retirement account or life insurance policy, and the child is under 18 when you die, the financial institution cannot pay the balance to a minor. A court-supervised guardianship or conservatorship must be established, which is time-consuming and expensive.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Worse, when the child turns 18, they receive full access to the funds - potentially hundreds of thousands of dollars - with no restrictions. An 18-year-old may not be ready to manage a large inheritance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Instead, name a trust as the beneficiary, and the trust can hold and manage the funds for the minor until they reach an age you specify.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Mistake 4: Not Coordinating with Your Trust</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Many people name their revocable living trust as the beneficiary of their retirement accounts and insurance policies. This is often a good idea - it keeps the accounts out of probate and allows the trust to manage the assets according to your instructions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                But if you do this, your trust must be properly drafted to handle the requirements of the SECURE Act. The trust language must specify whether the beneficiaries can take distributions over the 10-year SECURE Act period, or whether they must withdraw the entire balance within 10 years.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If your trust is not properly coordinated with the SECURE Act, you could trigger accelerated distributions and unnecessary taxes.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Mistake 5: Ignoring Per Stirpes vs. Per Capita Designations</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When you name multiple beneficiaries or descendants, you must specify whether the designation is per stirpes (by branch of the family tree) or per capita (equal share to all).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For example, suppose you name "my children" as beneficiaries, but one of your children has predeceased you. Does that child&apos;s share go to their children (per stirpes), or is it divided equally among the surviving children (per capita)?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Different financial institutions have different defaults. If you do not specify, the result may not match your intentions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Arizona Community Property Rules</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Arizona is a community property state, which adds a layer of complexity to beneficiary designations. In Arizona, property acquired during marriage is presumed to be community property - owned equally by both spouses.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For ERISA plans (401k, some pensions), the surviving spouse has automatic rights that override some beneficiary designations. If you are married and you name someone other than your spouse as the beneficiary of your ERISA plan, your spouse must consent in writing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is different from non-ERISA accounts, where you have more freedom to name any beneficiary you choose.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you are married and want to name someone other than your spouse, or if you are divorcing and want to change beneficiary designations, you need to understand the Arizona community property rules and ensure that the proper consents are obtained.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">How to Get Your Beneficiary Designations Right</h2>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Step 1: Make a Complete List</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Gather all your financial accounts and insurance policies. For each one, write down:
              </p>
              <ul className="list-disc pl-8 text-lg text-gray-700 leading-relaxed mb-4 space-y-2">
                <li>Institution name and account number</li>
                <li>Type of account (401k, IRA, life insurance, etc.)</li>
                <li>Current beneficiary designation</li>
                <li>Approximate value</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you have accounts at many institutions, this could be a long list. But knowing what you have is the foundation of good planning.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Step 2: Review Your Designations Against Your Estate Plan</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For each account, ask: does the current beneficiary designation match my estate plan? If my will says my current spouse gets everything, but my 401(k) names my ex-spouse, there is a problem.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Look for inconsistencies. Do you have accounts with outdated designations? Do you have named beneficiaries who are no longer in your life?
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Step 3: Consider Whether to Name a Trust</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For most people, naming a properly drafted revocable living trust as the beneficiary of retirement accounts and insurance is a good idea. It keeps the assets out of probate, allows the trust to manage the assets according to your instructions, and avoids naming minors as direct beneficiaries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                But this requires coordination with your trust and proper drafting to work with the SECURE Act rules.
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Step 4: Update All Designations</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Contact each institution and request the beneficiary designation form. Complete the form with the names of your chosen beneficiaries (or the name of your trust, if appropriate). Sign and date the form. Keep a copy for your records.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For your trustee, this is important: keep a list of all accounts with their current beneficiary designations, and review it annually or after any major life event (marriage, divorce, birth of a child, significant asset changes).
              </p>

              <h3 className="text-xl font-bold text-[#333333] mb-3 mt-6">Step 5: Document Your Wishes</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Create a financial summary document that lists all your accounts, insurance policies, and their beneficiary designations. Store this document with your estate planning documents so that your executor and family know what to do after you pass.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">The Annual Review</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Make it a habit to review your beneficiary designations annually. Set a reminder on your calendar - maybe on your birthday or the new year. Spend 30 minutes reviewing your accounts:
              </p>
              <ul className="list-disc pl-8 text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
                <li>Are the beneficiary names still current?</li>
                <li>Have your circumstances changed (marriage, divorce, birth, death)?</li>
                <li>Are the designations consistent with your estate plan?</li>
                <li>Have you opened new accounts that need designations?</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This annual review takes minimal time but can prevent costly mistakes. The person who updates their designations every year will never end up in the situation where an ex-spouse inherits a 401(k) because of an outdated form.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">What Your Family Needs to Know</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When you die, your executor and family need to know about all your accounts. If you have a life insurance policy that names beneficiaries, and your family does not know about it, those proceeds go unclaimed.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Create a simple list - title, account numbers, institutions, approximate values, and current beneficiary designations. Store this with your estate planning documents and let your executor know where to find it.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This simple act of documentation can save your family weeks of research after your death and ensure that all your accounts are properly distributed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">The Bottom Line</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Beneficiary designations are powerful documents that override your will and trust. Many people spend hundreds or thousands of dollars on estate planning documents, only to undermine that planning with outdated beneficiary designations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The solution is straightforward: review your beneficiary designations regularly, keep them consistent with your estate plan, and update them whenever your circumstances change. This simple act of attention can ensure that your assets pass to the right people and that your wishes are honored after your death.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Do not let an outdated beneficiary designation undermine years of careful estate planning. Make a list today. Review it annually. Update it whenever something in your life changes. Your family will thank you.
              </p>
            </section>

            <section className="bg-[#F7F4EE] rounded-lg p-8 mb-12 mt-16">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Protect Your Estate Plan</h3>
              <p className="text-gray-700 mb-6">
                We help people audit their beneficiary designations and coordinate them with their overall estate plan. One conversation can prevent a $500K mistake.
              </p>
              <Button
                href="/schedule-consultation"
                variant="primary"
              >
                Schedule a Conversation
              </Button>
            </section>

            <section className="border-t border-gray-300 pt-8 text-sm text-gray-600">
              <p className="mb-4">
                <strong>Disclaimer:</strong> This article is provided for informational purposes only and does not constitute legal or tax advice. Beneficiary designations are subject to complex rules that vary by account type, institution, and state law. Arizona&apos;s community property rules add additional complexity for married individuals. The SECURE Act rules for retirement account distributions are technical and require careful planning. You must consult with a qualified estate planning attorney and a CPA before establishing or modifying beneficiary designations on any account. Farther does not provide legal or tax advice, only educational information. Past estate planning results are not indicative of future outcomes. Each person&apos;s situation is unique and requires professional analysis.
              </p>
            </section>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
