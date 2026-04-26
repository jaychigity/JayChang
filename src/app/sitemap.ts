import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.advisorjay.com'

  const staticPages = [
    // Core pages
    { url: baseUrl, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/schedule-consultation`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/client-resources`, lastModified: '2026-02-15', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/wealth-management`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/investment-philosophy`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/disclosures`, lastModified: '2026-01-15', changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/wealth-review`, lastModified: '2026-04-12', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/401k-review`, lastModified: '2026-04-12', changeFrequency: 'monthly' as const, priority: 0.8 },

    // Location pages (primary — /locations/* redirects here via next.config)
    { url: `${baseUrl}/scottsdale`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/las-vegas`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/california`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.9 },

    // Services overview + all service pages
    { url: `${baseUrl}/services`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/financial-planning`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/investments`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/tax-optimization`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/retirement-planning`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/trust-estate`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/business-owners`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/401k`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/services/alternatives`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/services/institutional`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/services/generational-wealth`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Insights / blog
    { url: `${baseUrl}/insights`, lastModified: '2026-03-16', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/insights/family-office-vs-wealth-advisor`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/how-to-choose-cfp-las-vegas`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/tax-loss-harvesting-guide`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/roth-conversion-strategies`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/estate-planning-essentials`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/scottsdale-wealth-management-guide`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/las-vegas-financial-planning`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/choosing-financial-advisor`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/selling-business-arizona`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.6 },

    // New core pages
    { url: `${baseUrl}/process`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/schedule-call`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/areas-we-serve`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Pillar pages
    { url: `${baseUrl}/aerospace-defense-wealth-management`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/tech-executive-wealth-management`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },

    // Local landing pages
    { url: `${baseUrl}/financial-advisor-phoenix-az`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/financial-advisor-chandler-az`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/financial-advisor-scottsdale-az`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/financial-advisor-tempe-az`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/financial-advisor-mesa-az`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },

    // Employer-specific planning pages
    { url: `${baseUrl}/att-employee-financial-advisor`, lastModified: '2026-04-24', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/pge-employee-financial-advisor`, lastModified: '2026-04-24', changeFrequency: 'monthly' as const, priority: 0.9 },

    // Employer niche pages
    { url: `${baseUrl}/intel-financial-advisor-chandler-arizona`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/tsmc-financial-advisor-phoenix-arizona`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/nvidia-financial-advisor-phoenix-santa-clara`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/apple-financial-advisor-mesa-arizona`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/honeywell-financial-advisor-phoenix-arizona`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/raytheon-rtx-financial-advisor-tucson-phoenix`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/microchip-technology-financial-advisor-chandler`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/freeport-mcmoran-executive-wealth-planning-phoenix`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/physician-wealth-management-phoenix-scottsdale`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/amkor-technology-financial-advisor-tempe`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },

    // Equity Compensation Articles
    { url: `${baseUrl}/insights/nvidia-rsu-concentration-risk`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/intel-mega-backdoor-roth-chandler`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/apple-espp-mesa-guide`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/tsmc-rsu-tax-planning-arizona`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/rsu-vest-sell-hold-strategy`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/nvidia-espp-2-year-lookback`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/concentrated-stock-risk-how-much-is-too-much`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/should-you-sell-rsus-when-they-vest`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/quarterly-vesting-tax-problem`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/intel-serplus-how-much-to-defer-2026`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Tax Strategy Articles
    { url: `${baseUrl}/insights/arizona-tax-landscape-high-income-2026`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/banner-health-physician-tax-strategies`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/mega-backdoor-roth-2026-guide`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/arizona-high-earner-tax-reduction-2026`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/rsu-withholding-gap-22-percent`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/backdoor-roth-ira-step-by-step`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Retirement Articles
    { url: `${baseUrl}/insights/raytheon-pension-vs-lump-sum`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/raytheon-engineers-deferred-comp`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/honeywell-401k-concentration-risk`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/honeywell-hona-spinoff-401k-guide`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/rtx-lifetime-income-strategy-review`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/retire-at-58-when-benefits-designed-for-65`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Physician Articles
    { url: `${baseUrl}/insights/physician-financial-roadmap-first-five-years`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/pslf-banner-health-qualifying`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/cash-balance-plan-physician-tax-shelter`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/asset-protection-arizona-physicians`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Executive Articles
    { url: `${baseUrl}/insights/freeport-commodity-equity-planning`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/10b5-1-plans-insider-stock-sales`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/double-concentration-problem-executives`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/executive-deferred-compensation-2026`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/business-exit-planning-arizona`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Relocation Articles
    { url: `${baseUrl}/insights/california-to-arizona-before-equity-vests`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/california-taxes-rsus-after-you-leave`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/tsmc-taiwan-us-financial-planning-checklist`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/establishing-arizona-domicile-california`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Estate Articles
    { url: `${baseUrl}/insights/estate-tax-exemption-sunset-2026`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/revocable-vs-irrevocable-trusts`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/beneficiary-designations-override-your-will`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/slat-strategy-married-couples`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Charitable Articles
    { url: `${baseUrl}/insights/donor-advised-funds-high-earners`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/never-donate-cash-to-charity`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/arizona-charitable-tax-credit`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/qualified-charitable-distributions-ira`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Specialty pillar pages
    { url: `${baseUrl}/semiconductor-wealth-management-arizona`, lastModified: '2026-03-17', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/physician-executive-wealth-management-phoenix-scottsdale`, lastModified: '2026-03-17', changeFrequency: 'monthly' as const, priority: 0.9 },

    // Tools / calculators
    { url: `${baseUrl}/tools/retirement-savings-calculator`, lastModified: '2026-04-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/estate-complexity`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/ca-nv-tax-savings`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/rsu-equity-compensation-calculator`, lastModified: '2026-04-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/business-exit-planning-calculator`, lastModified: '2026-04-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/401k-withholding-calculator`, lastModified: '2026-04-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/roth-conversion-calculator`, lastModified: '2026-04-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/inherited-ira-calculator`, lastModified: '2026-04-11', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/rmd-calculator`, lastModified: '2026-04-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/social-security-calculator`, lastModified: '2026-04-11', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tools/att-pension`, lastModified: '2026-04-24', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tools/pge-pension`, lastModified: '2026-04-24', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tools/401k-projection`, lastModified: '2026-04-24', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tools/monte-carlo-simulator`, lastModified: '2026-04-25', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tools/cash-flow-planner`, lastModified: '2026-04-25', changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: new Date(page.lastModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
