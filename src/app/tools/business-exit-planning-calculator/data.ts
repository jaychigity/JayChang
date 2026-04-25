export interface QuizOption {
  label: string
  points: number
}

export interface QuizQuestion {
  id: number
  category: 'financial' | 'operational' | 'tax' | 'succession'
  categoryLabel: string
  categoryQuestionNumber: number
  categoryQuestionTotal: number
  text: string
  tooltip: string
  options: QuizOption[]
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    category: 'financial',
    categoryLabel: 'Financial Readiness',
    categoryQuestionNumber: 1,
    categoryQuestionTotal: 3,
    text: "How would you describe your business's revenue trend over the past 3 years?",
    tooltip:
      'Buyers pay premium multiples for businesses with consistent, demonstrable growth trajectories.',
    options: [
      { label: 'Declining year over year', points: 2 },
      { label: 'Flat or stagnant', points: 4 },
      { label: 'Modest growth (under 10% per year)', points: 6 },
      { label: 'Strong growth (10–20% per year)', points: 8 },
      { label: 'Exceptional growth (over 20% per year)', points: 10 },
    ],
  },
  {
    id: 2,
    category: 'financial',
    categoryLabel: 'Financial Readiness',
    categoryQuestionNumber: 2,
    categoryQuestionTotal: 3,
    text: 'Do you have a personal financial plan that supports your lifestyle without relying on sale proceeds?',
    tooltip:
      'Owners who depend entirely on sale proceeds often accept suboptimal deals under pressure.',
    options: [
      {
        label: "No, I haven't thought about post-exit finances",
        points: 2,
      },
      { label: 'I have a rough idea but nothing formal', points: 4 },
      { label: "I've done some planning on my own", points: 6 },
      {
        label: "I've worked with an advisor but it's not current",
        points: 8,
      },
      {
        label:
          'I have a comprehensive, up-to-date plan with a financial advisor',
        points: 10,
      },
    ],
  },
  {
    id: 3,
    category: 'financial',
    categoryLabel: 'Financial Readiness',
    categoryQuestionNumber: 3,
    categoryQuestionTotal: 3,
    text: 'Have you had a professional business valuation completed?',
    tooltip:
      'Knowing your true business value is the foundation of any successful exit strategy.',
    options: [
      { label: 'No idea what my business is worth', points: 2 },
      {
        label: 'I have a rough guess based on rules of thumb',
        points: 4,
      },
      {
        label: 'I had an informal valuation done over 3 years ago',
        points: 6,
      },
      {
        label:
          'I had a professional valuation done within the past 1–3 years',
        points: 8,
      },
      {
        label:
          'I have a current (less than 1 year old) professional valuation',
        points: 10,
      },
    ],
  },
  {
    id: 4,
    category: 'operational',
    categoryLabel: 'Operational Readiness',
    categoryQuestionNumber: 1,
    categoryQuestionTotal: 2,
    text: 'How dependent is your business on your daily involvement?',
    tooltip:
      'Businesses that run independently from their owner command significantly higher valuations.',
    options: [
      { label: 'The business cannot function without me', points: 2 },
      {
        label: "I'm needed for most major decisions daily",
        points: 4,
      },
      {
        label: 'I can step away for a week without issues',
        points: 6,
      },
      {
        label:
          'I can step away for a month, my team handles operations',
        points: 8,
      },
      {
        label:
          'The business runs independently; I focus on strategy only',
        points: 10,
      },
    ],
  },
  {
    id: 5,
    category: 'operational',
    categoryLabel: 'Operational Readiness',
    categoryQuestionNumber: 2,
    categoryQuestionTotal: 2,
    text: 'Have you identified potential buyers or acquirers for your business?',
    tooltip:
      'Owners who cultivate buyer relationships early typically achieve 15–30% higher sale prices.',
    options: [
      {
        label: "I haven't thought about who would buy my business",
        points: 2,
      },
      {
        label: 'I have a vague idea of the type of buyer',
        points: 4,
      },
      {
        label:
          "I've identified a few potential buyer categories (strategic, PE, internal)",
        points: 6,
      },
      {
        label:
          "I've had preliminary conversations with potential buyers",
        points: 8,
      },
      {
        label:
          'I have identified specific buyers and/or received expressions of interest',
        points: 10,
      },
    ],
  },
  {
    id: 6,
    category: 'tax',
    categoryLabel: 'Tax Readiness',
    categoryQuestionNumber: 1,
    categoryQuestionTotal: 3,
    text: 'Is your current business entity structure optimized for a future sale?',
    tooltip:
      'Entity type (S-Corp, C-Corp, LLC) dramatically affects how sale proceeds are taxed. Restructuring can take years.',
    options: [
      {
        label: "I'm not sure how my entity type affects a sale",
        points: 2,
      },
      {
        label:
          "I know my entity type but haven't reviewed it for exit efficiency",
        points: 4,
      },
      {
        label:
          "I've discussed entity structure with a CPA but haven't made changes",
        points: 6,
      },
      {
        label:
          "I've made some structural adjustments based on professional advice",
        points: 8,
      },
      {
        label:
          'My entity structure has been specifically optimized for a future exit',
        points: 10,
      },
    ],
  },
  {
    id: 7,
    category: 'tax',
    categoryLabel: 'Tax Readiness',
    categoryQuestionNumber: 2,
    categoryQuestionTotal: 3,
    text: 'How far along are you in pre-exit tax planning (e.g., QSBS, installment sales, trusts, opportunity zones)?',
    tooltip:
      'Proactive tax planning 3–5 years before exit can save 20–40% in taxes on sale proceeds.',
    options: [
      {
        label: "I haven't started any tax planning for my exit",
        points: 2,
      },
      {
        label: "I'm aware of strategies but haven't taken action",
        points: 4,
      },
      {
        label: "I've had initial conversations with a tax advisor",
        points: 6,
      },
      {
        label:
          "I've implemented 1–2 strategies in anticipation of my exit",
        points: 8,
      },
      {
        label:
          'I have a comprehensive, multi-year tax exit strategy in place',
        points: 10,
      },
    ],
  },
  {
    id: 8,
    category: 'tax',
    categoryLabel: 'Tax Readiness',
    categoryQuestionNumber: 3,
    categoryQuestionTotal: 3,
    text: 'How integrated is your business exit strategy with your estate plan?',
    tooltip:
      'Without integration, business owners risk double taxation and unintended wealth transfer to the wrong parties.',
    options: [
      { label: "I don't have an estate plan", points: 2 },
      {
        label:
          "I have a basic estate plan but it doesn't address the business",
        points: 4,
      },
      {
        label:
          "My estate plan mentions the business but isn't detailed",
        points: 6,
      },
      {
        label:
          'My estate plan includes specific business succession provisions',
        points: 8,
      },
      {
        label:
          'My estate and exit plans are fully integrated with trusts and gifting strategies',
        points: 10,
      },
    ],
  },
  {
    id: 9,
    category: 'succession',
    categoryLabel: 'Succession Readiness',
    categoryQuestionNumber: 1,
    categoryQuestionTotal: 2,
    text: 'What is the current state of your succession plan?',
    tooltip:
      'A documented, tested succession plan is one of the top factors buyers evaluate in due diligence.',
    options: [
      { label: 'I have no succession plan', points: 2 },
      {
        label: "I've thought about it but nothing is documented",
        points: 4,
      },
      {
        label: 'I have an informal plan discussed with key people',
        points: 6,
      },
      {
        label:
          "I have a written plan but it hasn't been tested or updated recently",
        points: 8,
      },
      {
        label:
          'I have a comprehensive, documented, and regularly updated succession plan',
        points: 10,
      },
    ],
  },
  {
    id: 10,
    category: 'succession',
    categoryLabel: 'Succession Readiness',
    categoryQuestionNumber: 2,
    categoryQuestionTotal: 2,
    text: 'How prepared is your management team to lead without you?',
    tooltip:
      'Buyers acquire teams, not just businesses. A strong bench signals lower transition risk.',
    options: [
      {
        label: 'There is no real management team, it\'s mostly me',
        points: 2,
      },
      {
        label: 'I have managers but they rely heavily on my direction',
        points: 4,
      },
      {
        label:
          'My team is capable but needs development in key areas',
        points: 6,
      },
      {
        label:
          'My team is strong and could lead independently with minor gaps',
        points: 8,
      },
      {
        label:
          'My team is fully capable and has been groomed for leadership transition',
        points: 10,
      },
    ],
  },
]

export interface TierInfo {
  label: string
  color: string
  headline: string
  subtext: string
}

export function getTier(total: number): TierInfo {
  if (total >= 80)
    return {
      label: 'Exit Ready',
      color: '#10B981',
      headline: "You're Well Positioned. Let's Optimize",
      subtext:
        'Your business shows strong exit readiness. A targeted strategy could maximize your proceeds and minimize tax exposure.',
    }
  if (total >= 60)
    return {
      label: 'Approaching Ready',
      color: '#3B82F6',
      headline: 'Solid Foundation: Key Gaps to Address',
      subtext:
        "You've made progress, but specific areas need attention to protect your valuation and timeline.",
    }
  if (total >= 40)
    return {
      label: 'Needs Work',
      color: '#F59E0B',
      headline: 'Significant Gaps Could Cost You',
      subtext:
        'Without addressing these readiness gaps, you risk leaving substantial value on the table, or delaying your exit.',
    }
  return {
    label: 'Early Stage',
    color: '#EF4444',
    headline: 'Your Exit Journey Starts Now',
    subtext:
      "The good news: identifying gaps early gives you time to build a stronger, more valuable exit. Let's start planning.",
  }
}

export function getCategoryTierColor(score: number): string {
  if (score >= 20) return '#10B981'
  if (score >= 15) return '#3B82F6'
  if (score >= 10) return '#F59E0B'
  return '#EF4444'
}

export function getCategoryGrade(score: number): string {
  if (score >= 21) return 'A'
  if (score >= 16) return 'B'
  if (score >= 11) return 'C'
  return 'D'
}

export const categoryTeasers: Record<string, string> = {
  financial:
    'Your financial readiness score suggests a potential gap between your current position and post-exit needs.',
  operational:
    "High owner dependency or unclear buyer targets may reduce your business's transferable value.",
  tax: 'Without proactive tax planning, you could lose 20–40% of your sale proceeds to avoidable taxes.',
  succession:
    'Buyers see weak succession plans as transition risk, which can significantly discount your price.',
}

export const recommendations: Record<
  string,
  Record<string, string[]>
> = {
  financial: {
    A: [
      'Maintain current valuation discipline with annual updates.',
      'Stress-test post-exit lifestyle plan against different sale scenarios.',
      'Consider tax-loss harvesting to offset future capital gains.',
    ],
    B: [
      "Commission a formal business valuation if you haven't in the past year.",
      'Work with a financial planner to model post-exit cash flow needs.',
      'Benchmark revenue growth against industry comps to strengthen your negotiating position.',
    ],
    C: [
      'Revenue volatility or stagnation will suppress multiples. Prioritize growth initiatives.',
      'Build a personal financial plan independent of sale proceeds.',
      'Get a professional valuation to establish a realistic baseline.',
    ],
    D: [
      'Immediate priority: engage a financial advisor to assess your personal wealth gap.',
      'Establish recurring revenue streams to improve business attractiveness.',
      'Begin quarterly financial documentation to demonstrate trends to buyers.',
    ],
  },
  operational: {
    A: [
      'Document your owner-independence in a "transferability memo" for potential buyers.',
      'Continue cultivating buyer relationships and expressions of interest.',
      'Ensure key customer and vendor relationships are team-held, not owner-held.',
    ],
    B: [
      'Develop a 90-day owner-absence test plan to identify hidden dependencies.',
      'Create a target buyer profile and begin outreach to strategic acquirers or PE firms.',
      'Document all key processes and customer relationship management protocols.',
    ],
    C: [
      'Owner dependency is a significant value destroyer. Begin delegating critical functions immediately.',
      'Map out 3–5 categories of likely buyers and research recent comparable transactions.',
      'Reduce customer concentration risk (no single client > 15% of revenue).',
    ],
    D: [
      'Your business appears heavily owner-dependent. This is the #1 barrier to a successful exit.',
      'Hire or promote at least one senior operator who can run day-to-day without you.',
      'Start by identifying whether your exit is most likely internal (management buyout), strategic (competitor/partner), or financial (PE/investor).',
    ],
  },
  tax: {
    A: [
      'Review QSBS eligibility if C-Corp; ensure holding period and asset thresholds are met.',
      'Revisit installment sale vs. lump sum modeling with updated projections.',
      'Confirm estate plan integration captures the latest tax law provisions.',
    ],
    B: [
      'Begin entity structure review now, as restructuring for tax efficiency can take 1–3 years.',
      'Explore Qualified Small Business Stock (QSBS) exclusion if applicable.',
      'Model 3+ deal structures (asset sale, stock sale, installment) to compare after-tax proceeds.',
    ],
    C: [
      'You may be leaving 20–40% of proceeds on the table without proactive tax planning.',
      'Engage a tax attorney or CPA with M&A exit experience, as general practitioners often miss exit-specific strategies.',
      'Review state residency implications; some founders save millions by planning relocation timing.',
    ],
    D: [
      'Urgent: tax planning should begin 3–5 years before exit. If you\'re within that window, start immediately.',
      'Review whether your current entity type (LLC, S-Corp, C-Corp) is optimal for your exit path.',
      'Establish relationships with a tax advisor AND estate planning attorney who coordinate strategies.',
    ],
  },
  succession: {
    A: [
      'Conduct an annual succession plan stress test with your leadership team.',
      'Create a transition playbook that a buyer or successor can follow from Day 1.',
      'Consider a "shadow CEO" period to demonstrate team readiness.',
    ],
    B: [
      'Formalize your succession plan in writing with clear roles, timelines, and contingencies.',
      'Invest in leadership development for your #2 and #3 executives.',
      'Identify and address any single-point-of-failure roles on your team.',
    ],
    C: [
      'A written succession plan is table stakes for serious buyers. Prioritize documentation.',
      'Begin cross-training team members to eliminate key-person risk.',
      'Consider engaging an executive coach or interim COO to accelerate team readiness.',
    ],
    D: [
      'Without a succession plan, your business has a significant vulnerability to both planned exits and unexpected events.',
      'Immediately identify 1–2 internal candidates or begin an external search for successor-caliber talent.',
      'Document every process, relationship, and institutional knowledge that currently lives only in your head.',
    ],
  },
}

export const categoryMeanings: Record<
  string,
  Record<string, string>
> = {
  financial: {
    A: 'Your financial house is in excellent order. You have a clear picture of your business value, a solid personal financial plan, and strong revenue trends that will attract premium buyers.',
    B: 'You have a good financial foundation but some gaps remain. Addressing valuation currency and personal financial independence will strengthen your negotiating position.',
    C: 'There are meaningful financial gaps that could weaken your exit. Revenue trends, personal planning, or valuation awareness need attention before going to market.',
    D: 'Your financial readiness needs significant work. Without clarity on business value, personal financial needs, and revenue trajectory, you risk accepting a deal that doesn\'t serve your goals.',
  },
  operational: {
    A: 'Your business demonstrates strong operational independence and buyer awareness. This positions you well for a premium valuation and smooth transition.',
    B: 'Operations are solid but there\'s room to reduce owner dependency and sharpen your buyer strategy. These improvements can meaningfully increase your exit price.',
    C: 'Operational gaps, particularly owner dependency, could significantly reduce what buyers are willing to pay. Addressing these now protects your valuation.',
    D: 'High owner dependency and limited buyer identification are critical risks. These are often the most value-destructive gaps in an exit process.',
  },
  tax: {
    A: 'Your tax and estate planning is well integrated with your exit strategy. Continue monitoring for legislative changes that could affect your timeline.',
    B: 'You\'ve made progress on tax planning but there are optimization opportunities remaining. Entity structure and estate integration deserve focused attention.',
    C: 'Without more proactive tax planning, you could lose a significant portion of your sale proceeds to avoidable taxes. Time is your most valuable asset here.',
    D: 'Tax planning is a critical gap. Entity structure, pre-exit strategies, and estate integration all need immediate attention, as many strategies require years to implement.',
  },
  succession: {
    A: 'Your succession planning is strong. A clear plan and capable leadership team signal low transition risk to buyers, supporting a premium valuation.',
    B: 'You have succession foundations in place but formalization and team development will strengthen buyer confidence and reduce transition risk.',
    C: 'Succession gaps create real risk, both for your planned exit and for unexpected events. Documentation and team development should be immediate priorities.',
    D: 'The absence of a succession plan is a significant vulnerability. Buyers will see this as high transition risk, which directly impacts the price they\'re willing to pay.',
  },
}

export const revenueOptions = [
  'Under $1M',
  '$1M – $5M',
  '$5M – $10M',
  '$10M – $25M',
  '$25M – $50M',
  'Over $50M',
]
