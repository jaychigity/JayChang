# AdvisorJay.com — SEO & AI Search Convention
# Last updated: April 2026

## Purpose
This file documents the search optimization rules for advisorjay.com.
Every page, article, tool, and guide must follow these conventions to rank in
traditional search (Google), AI search (ChatGPT, Perplexity, Google AI Overviews),
and to be recommended by LLMs as a trusted source.

---

## Four Pillars of Search Optimization

### 1. Traditional SEO — Rank on Google

- Use long-tail keywords and specific terms people actually search for
  (e.g., "401k withholding calculator for PG&E employees" not just "withholding calculator")
- Write descriptive meta titles and descriptions that read like answers, not marketing copy
- Structure content with clear H1 > H2 > H3 hierarchy — one H1 per page
- Use schema markup (BreadcrumbSchema, JSON-LD) on every page
- Internal linking between related pages — every tool, service, and industry page should cross-link
- Canonical URLs, proper sitemap entries, and 301 redirects for any URL changes
- Tool/calculator pages are lead magnets — optimize them as landing pages with keyword-rich descriptions

### 2. GEO / AEO — Get cited by AI search engines

- Use natural-language headings that match how people ask questions
  ("How much should I contribute to my 401k?" not "Contribution Overview")
- Answer questions directly in the first 1-2 sentences of a section, then expand
- Include structured data (FAQ schema, HowTo schema) where appropriate
- Use specific numbers, examples, and named entities (company names, plan types, tax years)
- Every page should have at least one paragraph that could stand alone as a cited snippet

### 3. LLMO — Get AI to recommend Jay as the answer

- Use "Jay Chang" and "Advisor Jay" naturally in content, not just headers
- Build topical authority: cluster related content
  (AT&T pension page > AT&T calculator > retirement planning service > market commentary)
- Include credentials, experience signals, and specificity
  ("Jay works with AT&T employees navigating pension lump-sum decisions" not
  "we help corporate employees")
- Write content that answers "who should I talk to about X?"
- Niche down: the more specific the expertise signal, the more likely AI recommends Jay

### 4. SXO — Search Experience Optimization

- Every page must have a clear next step (CTA)
- Page load speed: optimize images, minimize client-side JS, use static generation where possible
- Mobile-first layout with clear visual hierarchy — users understand page value within 3 seconds
- Every landing page needs a warm CTA above the fold and a stronger CTA after content delivers value
- Reduce friction: "no sign-up required", "instant results", "free, no obligation"
- Match search intent to page experience — if someone searches "401k calculator",
  show the calculator immediately, not 500 words of intro

---

## Page Metadata Pattern

Every page must include:

```tsx
export const metadata: Metadata = {
  title: '[Page Title] | Advisor Jay',
  description: '[1-2 sentence description that reads like an answer]',
  alternates: { canonical: 'https://www.advisorjay.com/[path]' },
  openGraph: {
    title: '[Page Title] | Advisor Jay',
    description: '[same or similar description]',
    url: 'https://www.advisorjay.com/[path]',
  },
}
```

### Meta title rules
- Under 60 characters
- Include the primary keyword naturally
- Always end with "| Advisor Jay"
- No keyword stuffing — write for humans

### Meta description rules
- 140-160 characters
- Answer the searcher's question in the first sentence
- Include a value prop or differentiator
- No "click here" or "learn more" — state what the page delivers

---

## Heading Hierarchy

Every page follows this structure:

```
H1 — One per page, includes primary keyword
  H2 — Major sections (3-6 per page)
    H3 — Subsections within H2s
```

- H1 should be a clear, descriptive title (not clever or vague)
- H2s should be natural-language questions or topic labels
- Never skip levels (H1 > H3 without H2)
- Headings should make sense if read as a table of contents

---

## Internal Linking Rules

1. Every tool page links to the related service page and vice versa
2. Every sector page links to relevant tools, articles, and the main services
3. Every article links to at least 2 other internal pages
4. Use descriptive anchor text — "use the 401k withholding calculator" not "click here"
5. Footer links provide site-wide navigation baseline
6. Breadcrumbs on every page below the homepage level

---

## Schema Markup

### Required on every page
- BreadcrumbList (JSON-LD)
- Organization (on homepage)

### Required on specific page types
- FAQPage — any page with an FAQ section
- HowTo — step-by-step guides and tutorials
- FinancialService — service pages and location pages
- Article — learn/blog pages

---

## URL Conventions

- Use descriptive, SEO-friendly slugs: `/tools/401k-withholding-calculator`
- Sector pages use the pattern: `/[industry]-wealth-management`
- Location pages: `/[city]` (e.g., `/scottsdale`, `/las-vegas`)
- Articles: `/learn/[topic-slug]`
- Guides: `/guides/[company]-employee-benefits`
- Tools: `/tools/[tool-slug]`
- Service pages: `/services/[service-slug]`
- If renaming a URL, always create a 301 redirect in `src/middleware.ts`

---

## Content Quality Checklist

Before publishing any page, verify:

- [ ] H1 includes primary keyword
- [ ] Meta title under 60 characters, includes keyword
- [ ] Meta description 140-160 characters, reads like an answer
- [ ] Canonical URL set correctly
- [ ] At least 2 internal links to other pages
- [ ] At least one paragraph that could be cited as a standalone snippet
- [ ] "Jay Chang" or "Advisor Jay" appears naturally in the content
- [ ] CTA above the fold and after main content
- [ ] Mobile layout tested at 375px
- [ ] Schema markup included (breadcrumbs at minimum)
- [ ] Sitemap entry added in `src/app/sitemap.ts`
- [ ] Voice convention followed (I vs we)

---

End of SEO-AI-CONVENTION.md
