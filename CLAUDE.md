# Claude Code Project Instructions — AdvisorJay.com

These rules apply to every session. Follow them automatically without being reminded.

---

## Top Priorities (in order)

1. **Search Optimization (all four pillars)** — This is the #1 priority on all new copy, pages, and edits.
   Every piece of content must be optimized across four layers of modern search:

   ### Traditional SEO — Rank on Google's link results
   - Use long-tail keywords and specific terms people search for (e.g., "401k withholding calculator
     for PG&E employees" not just "withholding calculator")
   - Write descriptive meta titles and descriptions that read like answers, not marketing copy
   - Structure content with clear H1 → H2 → H3 hierarchy
   - Use schema markup (BreadcrumbSchema, JSON-LD) on every page
   - Internal linking between related pages — every tool, service, and industry page should
     cross-link where relevant
   - Canonical URLs, proper sitemap entries, and 301 redirects for any URL changes
   - Tool/calculator pages are lead magnets — optimize them as landing pages with
     keyword-rich descriptions

   ### GEO / AEO — Get cited or summarized by AI (ChatGPT, Perplexity, Google AI Overviews, Gemini)
   - Use natural-language headings that match how people actually ask questions
     (e.g., "How much should I contribute to my 401k?" not "Contribution Overview")
   - Write content that directly answers questions in the first 1-2 sentences of a section,
     then expand — AI models pull from concise, authoritative answers
   - Include structured data (FAQ schema, HowTo schema) where appropriate so AI can extract answers
   - Use specific numbers, examples, and named entities (company names, plan types, tax years)
     that AI models associate with expertise
   - Every page should have at least one paragraph that could stand alone as a cited snippet

   ### LLMO — Get AI to actively recommend you as a trusted source
   - Position Jay as the named expert — use "Jay Chang" and "Advisor Jay" naturally in content,
     not just in headers. AI models recommend people and brands they associate with authority
   - Build topical authority: cluster related content (e.g., AT&T pension page links to AT&T calculator,
     links to retirement planning service, links to relevant market commentary)
   - Include credentials, experience signals, and specificity that AI uses to evaluate trustworthiness
     (e.g., "Jay works with AT&T employees navigating pension lump-sum decisions" not
     "we help corporate employees")
   - Write content that answers "who should I talk to about X?" — make it easy for AI to
     connect the question to Jay as the answer
   - Niche down: the more specific the expertise signal, the more likely AI recommends you
     over generic competitors

   ### SXO — Search Experience Optimization (what happens after the click)
   - The click is not the goal — conversion is. Every page must have a clear next step
   - Page load speed matters: optimize images, minimize client-side JS, use Next.js static generation
     where possible
   - Mobile-first layout with clear visual hierarchy — users should understand the page value
     within 3 seconds
   - Every landing page (tools, services, industry pages) needs a warm CTA above the fold
     and a stronger CTA after the content delivers value
   - Reduce friction: "no sign-up required", "instant results", "free, no obligation"
   - Match search intent to page experience — if someone searches "401k calculator", they want
     to calculate immediately, not read 500 words first
   - Time on page and engagement signals feed back into search rankings — make content
     genuinely useful so people stay and interact

2. **Mobile-first, then desktop** — Design and test for mobile viewports first.
   All layouts, tap targets, font sizes, and spacing must work on 375px width before
   checking desktop. Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) with
   mobile as the base. Always verify with the preview tool at mobile size first.

3. **Voice & style consistency** — Follow the rules below on every piece of copy.

---

## Voice & Style (always enforced)

Before writing or editing ANY visible copy on this site — headings, paragraphs, CTAs, card
descriptions, tool descriptions, section text, button labels — follow the rules in
`VOICE-CONVENTION.md` in this project root.

### Quick reference:

- **"I"** for anything involving the personal relationship between Jay and a client:
  listening, advising, knowing clients, recommendations, follow-up, personal background, credentials, philosophy
- **"We"** for Farther's platform, team, or institutional resources:
  technology, AUM, account management, transfers, tax-lot optimization, specialist network
- **CTAs** must use "Jay" or first person. Never "Contact us", "Get started", or generic corporate phrasing.
  Good: "Schedule a free conversation with Jay", "Let's talk", "Request my free conversation"
  Bad: "Contact us", "Get started", "Learn more"
- **Never say**: "genuinely", "straightforward", "honest" (filler), "comprehensive", "powerful" (generic),
  "solutions" (corporate), "leverage" as a verb
- **Prefer**: active voice, short sentences (under 25 words), "plans" or "advice" over "solutions"
- **No pronoun mixing** within a paragraph without clear reason

When in doubt, read the full `VOICE-CONVENTION.md` file.

---

## Calculator & Tool Page Conventions

When creating or editing any calculator/tool page under `src/app/tools/`:

### Structure
- Every tool page lives in `src/app/tools/[tool-slug]/page.tsx`
- The page.tsx handles metadata, hero banner, breadcrumbs, and imports the calculator component
- The calculator component lives in the same directory (e.g., `WithholdingCalculator.tsx`)
- Keep page.tsx light — all interactive logic goes in the component file with `"use client"`

### URL naming
- Use descriptive, SEO-friendly slugs: `/tools/401k-withholding-calculator` not `/tools/withholding`
- If renaming a URL, always create a 301 redirect in `src/middleware.ts`
- Update all internal references: Navigation.tsx, sitemap.ts, tools/page.tsx, any service pages that link to it

### Page metadata pattern
```tsx
export const metadata: Metadata = {
  title: '[Tool Name] | Advisor Jay',
  description: '[1-2 sentence description]',
  alternates: { canonical: 'https://www.PWM-Farther.com/tools/[slug]' },
  openGraph: {
    title: '[Tool Name] | Advisor Jay',
    description: '[description]',
    url: 'https://www.PWM-Farther.com/tools/[slug]',
  },
}
```

### Hero banner pattern
- Eyebrow: uppercase category label (e.g., "401(K) PLANNING TOOL")
- H1: clear, descriptive title
- Subtitle: 1-2 sentences explaining what it does and who it's for
- Apply voice rules: use "I" for Jay's personal expertise, "we" for platform features

### Hub page (tools/page.tsx)
- Every tool must have a card in the `tools` array
- Card descriptions should follow voice rules and include an "Especially useful for:" line where relevant
- Keep Estate Complexity, Income Annuity, and TVM Calculator cards as-is unless explicitly asked to change them

### Lead capture
- Tools that collect user info submit to `/api/lead` with a `source` identifier
- The source identifier (e.g., `'business-exit-scorecard'`) is a backend key, NOT a URL — don't rename these when renaming URLs
- `src/app/api/lead/route.ts` has per-tool email report builders — add one for any new tool that captures leads

### Calculator disclosure (required on every tool)
Every calculator or tool that generates numbers, projections, or estimates MUST include
a disclosure statement. This is non-negotiable — it's a compliance requirement.

The disclosure should:
- Appear below the results, clearly visible but not intrusive
- State that results are for illustrative/educational purposes only and are not financial advice
- State that actual results may vary and should be reviewed with a qualified financial professional
- Lead into a warm CTA to contact Jay (not generic — use voice rules)

Example pattern:
```
These results are estimates for illustrative purposes only and should not be considered
financial advice. Actual outcomes depend on your specific situation, tax circumstances,
and market conditions. For a personalized analysis, schedule a free conversation with Jay.
[Button: Talk with Jay about your results →]
```

Always include both the text disclaimer AND a CTA button/link. The CTA should feel like
a natural next step, not a sales pitch.

### Tax constants & annual currency (critical)
All tax-related numbers are centralized in `src/lib/tax-constants-2026.ts`. This is the
single source of truth for every calculator on the site.

**At the start of every session**, check if the current date's tax year matches `TAX_YEAR`
in `src/lib/tax-constants-2026.ts`. If the calendar year has advanced past the file's
`TAX_YEAR` value:
1. **Alert the user immediately**: "Your tax constants are set to [year] but it's now [year].
   The IRS typically publishes updated limits in October/November. Want me to update them?"
2. Do NOT silently use outdated numbers — this is a compliance and credibility issue.

**What needs updating each year** (typically after IRS Revenue Procedure release in Oct/Nov):
- `TAX_YEAR` — the year label
- `FEDERAL_BRACKETS_SINGLE` and `FEDERAL_BRACKETS_MFJ` — income tax bracket thresholds
- `STANDARD_DEDUCTION_SINGLE`, `_MFJ`, `_HOH` — standard deduction amounts
- `LIMIT_401K_EMPLOYEE_DEFERRAL` — 401(k) elective deferral limit
- `LIMIT_401K_CATCHUP_50` — standard catch-up contribution (ages 50+)
- `LIMIT_401K_SUPER_CATCHUP_60_63` — SECURE 2.0 enhanced catch-up (ages 60-63)
- `LIMIT_415C_ANNUAL_ADDITIONS` — total annual additions limit (415(c))
- `LIMIT_IRA` — IRA contribution limit
- `SS_WAGE_BASE` — Social Security wage base
- Estate tax exemption amounts (in `estate-complexity/EstateComplexityAssessment.tsx`)
- CA tax brackets (in `ca-nv-tax-savings/TaxSavingsCalculator.tsx`)
- IRS segment rates for pension calculations (in `att-pension/ATTPensionCalculator.tsx`)
- Annuity rate tables (in `income-annuity/IncomeAnnuityEstimator.tsx`)

**After updating**, also update these references across the site:
- `src/app/tools/page.tsx` — "updated for [year] tax law" in the hub page copy
- Any disclosure text that mentions a specific tax year
- Rename the constants file if desired (e.g., `tax-constants-2027.ts`) and update all imports

**Cross-check rule**: When creating or editing ANY calculator, verify that all hardcoded
tax numbers pull from the centralized constants file — never hardcode tax amounts directly
in a calculator component.

### Design tokens (consistent across all tools)
- Teal: `#1d7682` (primary), `#2a9dab` (gradient light)
- Dark: `#333333`
- Cream: `#F7F4EE`
- Background: `#FAFAF8`
- Fonts: `font-serif` (ABC Arizona Text), `font-sans` (Fakt)
- Border radius: 8-12px for cards, 9999px for buttons
- Button style: `bg-gradient-to-b from-[#2a9dab] to-[#1d7682]` with rounded-full

---

## General Project Conventions

- **Framework**: Next.js App Router (`src/app/` directory)
- **Styling**: Tailwind CSS with custom design tokens above
- **Components**: React client components use `"use client"` directive
- **Navigation**: `src/components/Navigation.tsx` — update navItems array when adding/renaming pages
- **Sitemap**: `src/app/sitemap.ts` — add entries for new pages
- **Analytics**: GA4 tracking via `trackFormSubmission()` from `@/lib/analytics`
- **UTM capture**: `getUTMData()` from `@/lib/utm` — include in all form submissions
- **Honeypot**: All forms include a hidden "company" field for bot detection
- **HubSpot**: Meetings embed URL is `https://meetings.hubspot.com/jay-chang1`
- **Redirects**: `src/middleware.ts` handles 301 redirects for renamed URLs
- **Commits**: Always include descriptive commit messages; never amend unless asked
