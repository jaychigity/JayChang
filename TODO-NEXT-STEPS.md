# AdvisorJay.com — Next Steps & Recommendations
# Saved: April 12, 2026
# Context: Post-launch review of landing pages and overall strategy

---

## Landing Page Strategy Verdict

The three-door approach (advisorjay.com + yourwealthreview.com + 401kjay.com) is solid.
Dedicated, distraction-free pages for specific funnels convert better than a homepage.
Keep this structure.

---

## Priority Fixes (Do These First)

### 1. Add Jay's photo + intro to /wealth-review
**Why:** Right now it's just a headline and a form. A stranger from a networking event
won't fill out employer + compensation info based on a headline alone.

**What to add:**
- Jay's headshot (circular, same as /401k-review)
- 2-3 sentence intro about who Jay is and why this isn't a sales pitch
- 2-3 trust signals below the form (14 years experience, fiduciary, SEC-registered)
- Keep it tight — not a full page, just enough to earn the form submission

**Effort:** 30 minutes

### 2. Add lightweight email capture below calculator results on /401k-review
**Why:** "Schedule a Free Conversation" is too big a jump for cold Google ad traffic.
Someone who Googled "401k calculator" isn't ready for a call — they want to know
if their number is right.

**What to add:**
- After calculator results: "Want me to check if your plan has a mega backdoor Roth
  option? Drop your email and I'll take a look — free."
- Small form: just name + email + employer
- Keep the full "Schedule a Conversation" CTA below as secondary for people who are ready

**Effort:** 1-2 hours

### 3. Activate tracking pixels — code is installed, just need IDs
**Status:** All tracking code is live in the codebase. Each pixel loads automatically
when its env variable is set. No code changes needed — just add IDs to `.env`.

**Add these to your `.env` file (get IDs from each platform):**
```
# Google Ads — get from Google Ads > Tools > Conversions
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX/XXXXXXXXXXXX

# Meta (Facebook) Pixel — get from Meta Business Suite > Events Manager > Data Sources
NEXT_PUBLIC_META_PIXEL_ID=123456789012345

# LinkedIn Insight Tag — get from LinkedIn Campaign Manager > Analyze > Insight Tag
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=1234567

# HubSpot — get from Settings > Tracking Code (your Portal ID)
NEXT_PUBLIC_HUBSPOT_ID=12345678
```

**Already configured (verify these are set):**
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_CLARITY_ID=your_clarity_id
```

**After adding IDs, also do these in each platform:**
- **GA4:** Mark `generate_lead` as a conversion event in GA4 > Admin > Conversions
- **Google Ads:** Create a conversion action, link it to GA4 or use the conversion ID above
- **Meta:** Verify domain in Meta Business Suite, set up "Lead" as a conversion event
- **LinkedIn:** Create a conversion action in Campaign Manager tied to the Insight Tag
- **Google Search Console:** Add and verify advisorjay.com (separate from analytics — for SEO data)

**Effort:** 30 min per platform to get IDs + configure conversions

---

## High-Value Content (Build Next)

### 4. AT&T Employee Benefits Guide (/guides/att-employee-benefits)
- Highest-value organic content — an AT&T employee Googling "AT&T pension lump sum
  vs annuity" who lands on this guide and uses the calculator is a warm lead
  without spending a dime on ads
- Links to /tools/att-pension calculator
- Phase 1 priority in SITE-ARCHITECTURE.md

### 5. PG&E Employee Financial Planning Guide (/guides/pge-employee-benefits)
- Same playbook as AT&T — company-specific guide + calculator = organic lead magnet
- Phase 1 priority in SITE-ARCHITECTURE.md

---

## Domain Notes

- **yourwealthreview.com** — worth keeping. Clean, memorable on a business card.
- **401kjay.com** — only useful if Jay says it out loud (workshops, podcasts,
  presentations). Nobody sees the domain in a Google ad. If it's just for ads,
  run them to advisorjay.com/401k-review directly and skip the extra domain.

---

## CTA Button Language Overhaul (Planned)

Rethink all "Schedule" / "Strategy Call" buttons across the site.
Current language feels generic. New direction: position the consultation
as a professional service with real value, not a free sales call.

### Jay's concept for the new CTA flow:

**Headline:** Confidential Financial Review

**Value framing:**
Professional Fee: ~~$500~~ (Waived)
We waive our initial review fee to ensure we are the right fit for
your goals before any commitment is made.

**Form fields:** Name / Email (simplified — fewer fields, less friction)

**Note below form:**
This session is a high-level briefing designed to provide you with
immediate clarity. No preparation or prior paperwork is required on
your part. Just bring your questions and an open mind.

**Checkbox before submit (required):**
[X] I understand this is a professional consultation and I'm ready
to explore my options seriously.

**Submit button:** REQUEST MY REVIEW

### Where this applies:
- All sector page CTAs (semiconductor, aerospace, telecom, physician, etc.)
- Homepage final CTA
- /wealth-review form
- /schedule-consultation page
- Footer CTA
- Nav "Start a Conversation" button
- Decide: same language everywhere, or variations per page?

### Open questions to decide before building:
- Does the $500 waived framing apply to all pages or just specific funnels?
- Keep the checkbox on every form or just the main consultation form?
- How does this interact with the /401k-review page (which is calculator-first)?
- Should the button say "REQUEST MY REVIEW" everywhere or vary by context?

---

## How to Recall This File

Tell Claude Code: "Read TODO-NEXT-STEPS.md" at the start of any session.

---

End of TODO-NEXT-STEPS.md
