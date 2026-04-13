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

### 3. Set up ad conversion tracking BEFORE spending any ad budget
**What's needed:**
- GA4 conversion events for form submissions on /wealth-review
- GA4 events for calculator completion AND CTA clicks on /401k-review
- Meta Pixel and Google Ads conversion tags if running ads on those platforms
- UTM capture is already built (good) — but ad platforms need conversion endpoints

**Effort:** 1-2 hours

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
