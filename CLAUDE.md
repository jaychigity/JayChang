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

2. **AI Crawler Access & Content Extraction (technical execution of #1)** —
   The strategy in #1 only works if AI crawlers can actually reach the site, fully
   render the content, and extract it cleanly. This is the infrastructure layer
   beneath the four pillars. Bake these in on every new page; do not retrofit later.

   ### Crawler access
   - `src/app/robots.ts` must explicitly allow the major AI bots: `GPTBot` (OpenAI),
     `ClaudeBot` and `anthropic-ai` (Anthropic), `PerplexityBot`, `Google-Extended`,
     `CCBot` (Common Crawl, which feeds many models), and `Bingbot`. A wildcard `*`
     covers them in theory; explicit allow rules signal intent and pass third-party
     audits cleanly.
   - `public/llms.txt` is the canonical AI-readable site map (an emerging convention,
     similar to robots.txt). Keep it updated whenever a major page is added or
     restructured.
   - The site is on Vercel, which does not block AI bots by default. If hosting ever
     moves to Cloudflare or another CDN, audit the firewall — Cloudflare blocks AI
     bots by default and must be reconfigured.

   ### Server-side rendering (non-negotiable)
   - All `page.tsx` files must be server components. Never put `"use client"` at the
     page level. Client interactivity (forms, calculators, charts) goes in child
     components imported by the page.
   - Most AI crawlers fetch JS files but do not execute them. Client-rendered
     content is invisible to them. The meaningful content has to arrive in the
     initial HTML response, not be hydrated by the browser.

   ### Content structure for extraction
   AI models lift answers in chunks. Write so each chunk stands alone:
   - **Lead with the answer.** The first 1-3 sentences of every page and every
     section should directly answer the question the heading implies, in plain
     language. Save storytelling, lead-up, and context for later in the piece.
   - **Use real semantic HTML** — actual `<h1>`/`<h2>`/`<h3>` hierarchy, real `<ul>`
     lists, real `<table>` tables. Do not fake structure with styled `<div>`s.
   - **Keep paragraphs short.** Each H2/H3 section should make sense if quoted
     in isolation by an AI model.
   - **JSON-LD schema markup is required on every substantive page**: `Article` for
     insights and guides, `FAQPage` where there are FAQs, `HowTo` for step-by-step
     content, `Service` or `Product` for services and tools, plus `Organization`
     and `BreadcrumbList` (use the existing `BreadcrumbSchema` component) sitewide.

   ### Credibility & freshness signals
   AI models are picky about who they cite. Every substantive page must signal a
   real, named, current author:
   - **Visible author byline on every substantive page** — photo + name + role
     (e.g., "By Jay Chang, VP, Wealth Advisor at Farther"). Not just metadata —
     visible to the rendered HTML, since that is what AI scrapers read.
   - **Visible "Last updated [date]"** on every substantive page, mirrored in
     the schema's `dateModified`. Content older than three months sees significantly
     fewer AI citations.
   - **Link out to authoritative sources** when making factual claims (IRS docs,
     SEC filings, plan documents, primary research). Outbound links to credible
     sources signal that you are sourced and current, not making it up.
   - **Original data, examples, and named entities** beat vague claims. Specific
     dollar amounts, tax years, plan names, and company specifics give AI models
     something to associate with your expertise.
   - **Quarterly refresh discipline** on substantive pages. Re-verify the numbers,
     bump `dateModified`, update the visible date. Keeps the freshness signal warm.

   ### Off-site presence
   AI models do not learn about you only from your own site:
   - Submit `sitemap.xml` to **both** Google Search Console **and** Bing Webmaster
     Tools. Copilot and Meta AI lean on Bing's index, so Google-only optimization
     leaves real coverage on the table.
   - Brand mentions on Reddit, Quora, GitHub, niche forums, and reputable
     publications all feed into what AI models "know" about Jay. The on-site work
     in #1 and #2 matters; the off-site signals matter too.

3. **Mobile-first, then desktop** — Design and test for mobile viewports first.
   All layouts, tap targets, font sizes, and spacing must work on 375px width before
   checking desktop. Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) with
   mobile as the base. Always verify with the preview tool at mobile size first.

4. **Voice & style consistency** — Follow the rules below on every piece of copy.

---

## Voice & Style (always enforced)

Before writing or editing ANY visible copy on this site — headings, paragraphs, CTAs, card
descriptions, tool descriptions, section text, button labels — follow the rules in
`VOICE-CONVENTION.md` in this project root.

### Quick reference:

- **"I"** for anything involving the personal relationship between Jay and a client:
  listening, advising, knowing clients, recommendations, follow-up, personal background, credentials, philosophy

  **CRITICAL, common mistake:** Body copy describing what Jay does for clients MUST use "I", never third-person "Jay". This applies on every page (industry pages, services pages, tool pages, location pages, FAQ schema, hero sections, mid-page CTA paragraphs). When generating new pages, defaulting to third-person "Jay [verb]" is the single most common voice violation. Always write as if Jay is speaking directly to the reader.

  Wrong → Right:
  - "Jay helps Apple employees..." → "I help Apple employees..."
  - "Jay builds a comprehensive plan..." → "I build a comprehensive plan..."
  - "Jay specializes in..." → "I specialize in..."
  - "Jay coordinates with your CPA..." → "I coordinate with your CPA..."
  - "Jay&apos;s approach to..." → "My approach to..."
  - "Jay is legally required..." → "I&apos;m legally required..."
  - "Jay will be in touch" (form confirmations) → "I&apos;ll be in touch"
  - "Jay knows your pension..." (meta descriptions) → "I know your pension..."

  Exceptions where third-person "Jay" stays:
  - CTAs and buttons: "Schedule a conversation with Jay" ✓
  - Author bylines: "By Jay Chang, VP, Wealth Advisor at Farther" ✓
  - Brand name uses: "Advisor Jay" (the brand itself) ✓
  - Schema.org `name` fields and structured data identifiers ✓
  - Image alt text and `<img alt="Jay Chang" />` ✓
  - Direct quotes from clients about Jay (testimonials) ✓
  - SEO page title fields like "...| Advisor Jay" ✓

  **Automatic enforcement is wired up two ways**:
  1. Claude Code `PostToolUse` hook (`.claude/settings.json` + `scripts/voice-hook.sh`): scans after every Edit/Write to a `.tsx` file in `src/` and flags violations back to the model.
  2. Git `pre-commit` hook: runs `scripts/check-voice.sh` and blocks the commit if any violation is found.

  The git hook lives at `.git/hooks/pre-commit` and is not committed. To reinstall on a fresh clone:
  ```bash
  cp .githooks/pre-commit .git/hooks/pre-commit 2>/dev/null \
    || (echo '#!/bin/bash' > .git/hooks/pre-commit \
        && echo 'bash scripts/check-voice.sh' >> .git/hooks/pre-commit \
        && chmod +x .git/hooks/pre-commit)
  ```

  To run the check manually: `npm run check-voice`.

- **"We"** for Farther's platform, team, or institutional resources:
  technology, AUM, account management, transfers, tax-lot optimization, specialist network
- **CTAs** must use "Jay" or first person. Never "Contact us", "Get started", or generic corporate phrasing.
  Good: "Schedule a conversation with Jay", "Let's talk", "Request a conversation"
  Bad: "Contact us", "Get started", "Learn more"
- **Scheduling page intro line** — Every page with a scheduling hero or consultation intro section
  must use this exact line as the subheading/intro paragraph:
  > "If something's been on your mind — a pension decision, an RSU vesting, a transition, retirement — that's worth a conversation."
  Never use: "Thanks for taking the time to be here", "No pressure, no commitment", "Let's connect" as body copy,
  or any generic filler opener on a schedule/contact page.
- **Never say**: "genuinely", "straightforward", "honest" (filler), "comprehensive", "powerful" (generic),
  "solutions" (corporate), "leverage" as a verb
- **Never use em dashes** (— or &mdash;) in any copy. Use commas, colons, periods, or hyphens instead
  depending on context. Rewrite the sentence if needed.
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

### Calculator disclosure (required on every tool — use the shared component)
Every calculator, scorecard, or assessment that produces numbers, projections, or scores
MUST include the standard `<CalculatorDisclaimer />` component below the results. This is
non-negotiable — it's a compliance requirement and ensures consistent language site-wide.

**Import and use it like this:**
```tsx
import CalculatorDisclaimer from '@/components/CalculatorDisclaimer'

// Below the results section:
<CalculatorDisclaimer
  toolName="401(k) withholding"
  variant="default"                        // or "dark" if used on a dark section
  resultSummary={results
    ? `Your gap pencils to ${fmt(results.gap)}/year. The harder question is what that means against your full tax picture.`
    : undefined}
  ctaLabel="Pressure-test your withholding strategy with Jay →"
  additionalContext="Optional plan-specific caveat (IRS segment rates, mortality assumptions, etc.)"
/>
```

The component renders:
- **Result-aware summary** at the top (when `resultSummary` is provided): the user's actual numbers in serif teal, with a one-line narrative framing
- Standard heading: "This is an estimate, not a number to plan around alone."
- 3 paragraphs explaining: educational purpose, real-world variance, past performance disclaimer
- Optional additional context paragraph (e.g., for IRS rate-sensitive calcs)
- CTA: defaults to "Talk through your {toolName} numbers with Jay →"; override with `ctaLabel`

**Critical rules:**
- NEVER write a custom disclaimer, always use this component for consistency and compliance
- The CTA must always point users to **Jay specifically**, never to a generic "financial professional"
- Calculators are educational tools to *help* users think, never positioned as decision-making sources
- **Always pass `resultSummary`** when the calculator has computed results. Interpolate the user's actual numbers into a one-line statement that reflects their situation (e.g., "Your portfolio runs out at age 86, four years short of your plan."). This converts ~3-5x better than generic CTAs.
- **Always pass a tailored `ctaLabel`** that references the user's specific decision (e.g., "Plan a multi-year Roth strategy with Jay →"), not the generic default. Save the default for cases when the user hasn't entered enough inputs.
- Guard `resultSummary` with a null check if your `results` variable can be null (e.g., `results ? \`...\` : undefined`). The component handles `undefined` gracefully.
- Component lives at `src/components/CalculatorDisclaimer.tsx`, update there for site-wide changes

### Article-to-calculator cross-linking (required on relevant articles)
When you write a new article, identify which calculator(s) are topically relevant and add inline cross-links in the body where the reader would benefit from running their own numbers. Articles and calculators are complementary lead-gen assets, articles do discovery and topical authority, calculators do validation and conversion. Without cross-links between them, both underperform.

**Pattern:**
```tsx
import Link from 'next/link'

// Inline in body copy, after the relevant passage:
<p>...The PSLF path saves $58,000. You can <Link
  href="/tools/cash-flow-planner"
  className="text-[#1d7682] underline hover:text-[#2a9dab]"
>model the cash flow under both paths</Link> against your own income, expenses, and savings goals.</p>
```

**Rules:**
- **At least one calculator cross-link** in every new article whose topic maps to an existing calculator. Multiple links are fine when multiple tools apply (e.g., a physician roadmap article can link to Roth conversion + retirement readiness + cash flow).
- **Natural anchor text**, conversational, not banner-style. "model your withholding gap", "stress-test the math in the Monte Carlo simulator", "estimate your five-year tax savings".
- **Place the link contextually**, after the passage where the reader would benefit from the tool. Not at the top, not at the end as a footer CTA. Mid-article, where their intent is highest.
- **Reverse cross-links required for new calculators**: when you build a new calculator, audit existing articles whose topic matches and add cross-links from those articles to the new tool.

### Future-proofing checklist
Before merging any new calculator or article, run the following checks:

**New calculator checklist:**
- [ ] Uses `<CalculatorDisclaimer />` with `toolName`, `variant`, `additionalContext`
- [ ] Passes a `resultSummary` that interpolates the user's actual numbers
- [ ] Passes a tailored `ctaLabel` (not the generic default)
- [ ] Pulls all tax constants from `src/lib/tax-constants-[year].ts` (no hardcoded amounts)
- [ ] Has at least one cross-link FROM a topically matching article TO this calculator
- [ ] Card added to `src/app/tools/page.tsx` hub

**New article checklist:**
- [ ] At least one inline cross-link to a topically relevant calculator (use `<Link href="/tools/...">` with the inline-link className)
- [ ] Uses first-person voice for Jay (run `npm run check-voice` before commit)
- [ ] No em dashes (use commas, colons, periods, hyphens)
- [ ] `dateModified` set to publish/update date for AI freshness signal
- [ ] JSON-LD `Article` schema in place
- [ ] `<ArticleByline />` component at the top

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

### Layout & spacing standards (enforced site-wide)

These spacing values must be consistent across ALL pages. Never deviate without explicit approval.

**Section padding:**
- Standard section: `py-20 lg:py-32` (vertical padding)
- Compact section (trust bars, dividers): `py-12`
- Hero sections: `pt-[100px] pb-[48px] px-[20px] md:px-[40px] lg:px-[80px]`
- Location/sector hero sections: `py-10 md:py-20`
- Service page hero sections: `pt-10 lg:pt-20`

**Container widths:**
- Full-width content (card grids, multi-column layouts): `max-w-7xl`
- Text-heavy content (paragraphs, articles): `max-w-7xl` container with `max-w-3xl` on paragraph elements
- Centered narrow content (process steps, single-column): `max-w-4xl`
- Tool/calculator content area: `max-w-[960px]`
- All containers: `container mx-auto px-4 sm:px-6 lg:px-8`

**Section heading pattern (every section must follow this):**
```
<SectionEyebrow text="SECTION LABEL" />  or  light variant for dark bg
<h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#333333] mt-6 mb-6 leading-tight">
<p className="text-lg text-[#5b6a71] leading-relaxed mb-6 max-w-3xl">  (subtitle/intro)
```
- Eyebrow → H2 gap: always `mt-6`
- H2 → subtitle/content gap: always `mb-6`
- Subtitle → cards/grid gap: `mb-16`
- Body paragraph spacing: `mb-6` between paragraphs, last paragraph no margin

**Card grid spacing:**
- Grid gap: `gap-8` for card grids
- Card padding: `p-8` for standard cards, `p-5 md:p-8` for calculator cards
- Card style: `bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow`

**Mobile-first rules:**
- Base styles target 375px width — no `sm:` prefix needed for mobile defaults
- Font sizes: body `text-base` (16px), section headers `text-4xl` (mobile) → `lg:text-5xl` (desktop)
- Touch targets: minimum 44px height on all interactive elements
- Horizontal padding: `px-4` base → `sm:px-6` → `lg:px-8`
- Card grids: `grid-cols-1` base → `md:grid-cols-2` → `lg:grid-cols-3`
- Never use fixed widths that break below 375px
- Test every layout change at mobile size FIRST

---

## General Project Conventions

- **Framework**: Next.js App Router (`src/app/` directory)
- **Styling**: Tailwind CSS with custom design tokens above
- **Components**: React client components use `"use client"` directive
- **Navigation**: `src/components/Navigation.tsx` — update navItems array when adding/renaming pages
- **Sitemap**: `src/app/sitemap.ts` — add entries for new pages
- **Analytics**: Multi-platform tracking via `@/lib/analytics` and `@/components/GoogleAnalytics.tsx`
- **Tracking pixels** (all loaded via env variables — if ID is missing, pixel doesn't load):
  - GA4 (`NEXT_PUBLIC_GA_MEASUREMENT_ID`) — page views, custom events
  - GTM (`NEXT_PUBLIC_GTM_ID`) — tag container
  - Google Ads (`NEXT_PUBLIC_GOOGLE_ADS_ID` + `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID`) — ad conversions
  - Meta/Facebook Pixel (`NEXT_PUBLIC_META_PIXEL_ID`) — retargeting, lead tracking
  - LinkedIn Insight Tag (`NEXT_PUBLIC_LINKEDIN_PARTNER_ID`) — matched audiences, conversions
  - Microsoft Clarity (`NEXT_PUBLIC_CLARITY_ID`) — heatmaps, session recordings
  - HubSpot (`NEXT_PUBLIC_HUBSPOT_ID`) — CRM attribution, visit tracking
- **Conversion tracking**: `trackFormSubmission()` fires events across GA4, Google Ads, Meta, and LinkedIn simultaneously. Always use this function (not raw gtag calls) for form submissions.
- **UTM capture**: `getUTMData()` from `@/lib/utm` — include in all form submissions
- **Honeypot**: All forms include a hidden "company" field for bot detection
- **HubSpot**: Meetings embed URL is `https://meetings.hubspot.com/jay-chang1`
- **Redirects**: `src/middleware.ts` handles 301 redirects for renamed URLs
- **Commits**: Always include descriptive commit messages; never amend unless asked
