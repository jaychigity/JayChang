# AdvisorJay.com — Tools & Calculator Convention
# Last updated: April 2026

## Purpose
This file documents the conventions for building and maintaining calculator/tool pages
on advisorjay.com. Follow these rules for every new tool and when editing existing ones.

---

## File Structure

Every tool page follows this pattern:

```
src/app/tools/[tool-slug]/
  page.tsx              — Metadata, hero banner, breadcrumbs, imports calculator component
  [CalculatorName].tsx  — Interactive calculator with "use client" directive
```

- `page.tsx` handles metadata, SEO, layout, and static content
- The calculator component handles all interactive logic
- Keep `page.tsx` light — no state, no hooks, no complex logic

---

## URL Naming

- Use descriptive, keyword-rich slugs: `/tools/401k-withholding-calculator`
- If renaming a URL, always:
  1. Add a 301 redirect in `src/middleware.ts`
  2. Update `src/components/Navigation.tsx`
  3. Update `src/app/sitemap.ts`
  4. Update `src/app/tools/page.tsx` (hub page)
  5. Update any service or sector pages that link to the tool

---

## Page Metadata Pattern

```tsx
export const metadata: Metadata = {
  title: '[Tool Name] | Advisor Jay',
  description: '[1-2 sentence description of what the tool does and who it helps]',
  alternates: { canonical: 'https://www.advisorjay.com/tools/[slug]' },
  openGraph: {
    title: '[Tool Name] | Advisor Jay',
    description: '[description]',
    url: 'https://www.advisorjay.com/tools/[slug]',
  },
}
```

---

## Hero Banner Pattern

Every tool page hero includes:
- **Eyebrow**: uppercase category label (e.g., "401(K) PLANNING TOOL")
- **H1**: clear, descriptive title with primary keyword
- **Subtitle**: 1-2 sentences explaining what it does and who benefits
- Follow voice rules: "I" for Jay's expertise, "we" for platform features

---

## Hub Page (tools/page.tsx)

- Every tool must have a card in the `tools` array on the hub page
- Card descriptions follow voice convention
- Include an "Especially useful for:" line where relevant to signal target audience
- Keep Estate Complexity, Income Annuity, and TVM Calculator cards as-is unless explicitly asked

---

## Lead Capture

Tools that collect user info submit to `/api/lead` with a `source` identifier:
- The `source` identifier (e.g., `'business-exit-scorecard'`) is a backend key, NOT a URL
- Never rename source identifiers when renaming URLs — they are stable backend keys
- `src/app/api/lead/route.ts` has per-tool email report builders
- Add a report builder for any new tool that captures leads

---

## Calculator Disclosure (Required — Compliance)

Every calculator that generates numbers, projections, or estimates MUST include a disclosure.

The disclosure must:
- Appear below the results, clearly visible but not intrusive
- State results are for illustrative/educational purposes only, not financial advice
- State actual results may vary and should be reviewed with a qualified professional
- Lead into a warm CTA to contact Jay (follow voice rules)

Example:
```
These results are estimates for illustrative purposes only and should not be considered
financial advice. Actual outcomes depend on your specific situation, tax circumstances,
and market conditions. For a personalized analysis, schedule a free conversation with Jay.
[Button: Talk with Jay about your results]
```

Always include both the text disclaimer AND a CTA button/link.

---

## Tax Constants & Annual Updates

All tax-related numbers are centralized in `src/lib/tax-constants-2026.ts`.
This is the single source of truth.

### Start-of-session check
At the start of every session, verify that the current year matches `TAX_YEAR` in the
constants file. If the calendar year has advanced:
1. Alert the user immediately
2. Do NOT silently use outdated numbers

### What needs updating each year (after IRS publishes in Oct/Nov)
- `TAX_YEAR` label
- Federal tax brackets (single and MFJ)
- Standard deduction amounts
- 401(k) deferral limit and catch-up limits
- 415(c) annual additions limit
- IRA contribution limit
- Social Security wage base
- Estate tax exemption (in estate-complexity calculator)
- CA tax brackets (in ca-nv-tax-savings calculator)
- IRS segment rates for pensions (in att-pension calculator)
- Annuity rate tables (in income-annuity calculator)

### After updating
- Update `src/app/tools/page.tsx` hub page copy ("updated for [year] tax law")
- Update any disclosure text mentioning a specific tax year
- Rename the constants file if desired and update all imports

### Cross-check rule
Never hardcode tax amounts directly in a calculator component. Always import from
the centralized constants file.

---

## Design Tokens (Consistent Across All Tools)

| Token | Value | Usage |
|---|---|---|
| Teal primary | `#1d7682` | Buttons, accents, headings |
| Teal light | `#2a9dab` | Gradient light end |
| Dark | `#333333` | Text, dark backgrounds |
| Cream | `#F7F4EE` | Light text on dark, backgrounds |
| Background | `#FAFAF8` | Page backgrounds |
| Font serif | `font-serif` (ABC Arizona Text) | Headings |
| Font sans | `font-sans` (Fakt) | Body, UI |
| Border radius cards | 8-12px | Card corners |
| Border radius buttons | 9999px (rounded-full) | All buttons |
| Button gradient | `bg-gradient-to-b from-[#2a9dab] to-[#1d7682]` | Primary buttons |
| Calculator content width | `max-w-[960px]` | Calculator containers |

---

## Form & Input Conventions

- All forms include a hidden "company" field for honeypot bot detection
- UTM data captured via `getUTMData()` from `@/lib/utm`
- Form submissions tracked via `trackFormSubmission()` from `@/lib/analytics`
- Submit to `/api/lead` with appropriate `source` key
- HubSpot meetings embed: `https://meetings.hubspot.com/jay-chang1`

---

## Accessibility

- All interactive elements must have minimum 44px touch target
- All inputs must have associated labels
- Results must be announced to screen readers when they update
- Color contrast must meet WCAG AA minimum (4.5:1 for text)
- All images must have descriptive alt text

---

End of TOOLS-CONVENTION.md
