# Wealth Review Landing Page — Planning Doc
# Saved: April 25, 2026
# Status: Wireframe drafted, awaiting decisions before build

---

## The Goal

Low volume, high conviction. The yourwealthreview.com / advisorjay.com/wealth-review
page should filter out click-happy browsers and only convert people who have a
specific decision in front of them and are prepared to act on the conversation.

Not optimizing for total submissions. Optimizing for submission quality.

---

## Architecture Decision

**One codebase, two URLs.**

- The page lives at `advisorjay.com/wealth-review` (already exists as a `<HideChrome />`
  page — no nav, no footer, no escape routes)
- `yourwealthreview.com` gets configured in Vercel as a domain alias that serves the
  same page. URL stays as yourwealthreview.com the whole time (cleaner than a
  301 redirect)

Operational steps when ready:
1. Build / refresh page copy (Claude Code does this)
2. Add yourwealthreview.com as a domain in Vercel dashboard, point to /wealth-review (Jay does this)
3. Update DNS for yourwealthreview.com to point at Vercel's nameservers (Jay or registrar)
4. Build the LinkedIn / Meta ads, point destination URL to yourwealthreview.com
   with UTM params (Jay or whoever runs ads)

---

## The Wireframe (As Drafted)

### Section 1 — Hero

**Eyebrow:** CONFIDENTIAL FINANCIAL REVIEW
**Logo:** Farther wordmark (already on page)
**H1:** A Working Session, Not a Sales Call.
**Subhead:**
> One conversation, scheduled directly with me, by Zoom or phone. If you're
> shopping advisors or just curious, this is the wrong fit. If you have a
> specific decision in front of you and want to think it through with someone
> who does this every day, that's what this is for.

### Section 2 — How to make the conversation worth your time

(Reframed away from "this isn't for you" gatekeeping toward collaborative
specificity — filters by ability to articulate a concrete question, not by
commitment level.)

> This works best when you bring something specific. Not a resume of your
> accounts. Not "tell me about your services." An actual question or decision
> that's been on your mind.
>
> A few examples of what people bring:
> - "I just got the pension lump-sum offer letter and I have 60 days to decide."
> - "I have RSUs vesting in March and I've never sold any of it."
> - "I'm trying to figure out if we can retire at 58 or if we need to keep going."
> - "I inherited an IRA and have no idea what to do with it."
> - "We're selling the business next year and I want to think through what comes next."
>
> If you're earlier than that, still mapping out what your questions are, that's
> fine. It might be worth waiting until you can name the one or two things
> actually on your mind. The conversation is more useful that way for both of us.

### Section 3 — Jay intro

Headshot (circular, same style as elsewhere on site).

> I'm Jay Chang, a fiduciary wealth advisor with 14 years of experience. I keep
> my client roster intentionally small, which is why this page exists, to make
> sure we're a fit before either of us spends an hour on it.

Trust row: **14 years experience · Fiduciary · SEC-registered · $15B+ platform**

### Section 4 — Fee framing

**Professional Fee:** ~~$500~~ **Waived for the first conversation.**
> I waive the initial review fee to make sure we're the right fit before any
> commitment. The fee on subsequent work is real.

### Section 5 — What actually happens

- 30 minutes, scheduled directly on my calendar
- You bring the specific decision you want to talk through
- I tell you what I'd do and why
- If it makes sense to keep talking, I'll say so. If not, I'll say that too.
- No follow-up emails. No drip sequences. No second-appointment funnel.

### Section 6 — Form

Minimal version proposed:
- First name
- Email
- Free-text: "What's the specific decision or question you want to talk through?"
  (textarea, encouraged not required)
- Required checkbox: "I understand this is a working session, not a sales call.
  I have a specific decision I want to talk through and I'm prepared to act on
  what comes out of the conversation."
- Submit: "Request the Conversation"

Existing form has many more fields (phone, employer, compensation type,
retirement timeline, biggest question, was-referred). Decision pending — strip
or keep some.

### Section 7 — Footer

Existing minimal Farther disclosure (unchanged).

---

## Trust-Building Additions (Recommended, Not Yet in Wireframe)

Cold traffic from an ad has never heard of Jay. The page has to do every job
advisorjay.com does, in 30 seconds, with no escape routes. Three additions
recommended:

### 1. Face above the fold

Move Jay's headshot up next to the H1. The pattern recognition for cold traffic
is "this is a real person, not a chatbot funnel."

### 2. Vignette block — concrete proof of work

Insert between Section 2 and Section 3 (or merge with Section 2). Anonymous
specifics signal "I've worked on this exact thing" without manufacturing
testimonials.

> **A few examples of what's come across my desk this year:**
> - An AT&T engineer with 32 years deciding between pension annuity and lump sum
> - A TSMC director with $1.2M concentrated in company stock figuring out how
>   to diversify without a 30% tax hit
> - A widow inheriting a $4M IRA with no plan and a 10-year RMD clock
> - A business owner six months from a $15M sale, trying to figure out what
>   comes next

### 3. One line explaining what Farther is

Trust row currently says "$15B+ platform" but a stranger doesn't know what that
means. Add a line in Section 3 or under the trust row:

> "I'm part of Farther, the Inc. 5000 #1 fastest-growing financial services firm
> in America."

A credibility shortcut they can verify.

---

## Ad Strategy — The Hardest Decision

Two paths, very different ROI profiles:

### Option A: One generic landing page

- Works with broad-targeting ads (anyone who looks like a prospect)
- Easier operationally — one page, one URL, one set of UTMs
- Lower conversion rate because the ad and page can't be perfectly matched
- Good place to start if testing the funnel

### Option B: Audience-specific landing page variants

- Examples: `/wealth-review/att-pension`, `/wealth-review/rsu-vest`,
  `/wealth-review/business-sale`
- Each variant has an H1 and vignette block that **rhymes with the ad headline**
- e.g. ad: "The Pension Decision Most AT&T Engineers Get Wrong" →
  page H1: "Working Through the AT&T Pension Decision."
- Higher conversion because cold traffic immediately confirms "yes, I'm in the
  right place"
- Recommended for "low volume, high conviction" positioning since narrow
  targeting compounds with narrow landing pages

The hard-to-visualize problem (Jay's note): the ad and the page have to be
designed together. The page in isolation reads as generic; the page tied to a
specific ad headline becomes much more powerful. Worth designing one ad +
one page combo as a concrete example before building variants.

---

## Open Decisions (Pending Before Build)

1. **Trust additions** — add vignette block + face above the fold + Farther
   one-liner to the wireframe? (Recommended yes — all three.)
2. **Ad / page strategy** — start with one generic page (Option A) or build
   page + 2-3 audience variants (Option B)?
3. **$500 framing** — keep "Professional Fee: $500 (Waived)" or simpler
   "first conversation is on me"?
4. **Form fields** — strip to 3 fields + checkbox, or keep some of the
   existing qualifying fields (phone, employer, comp type, retirement timeline)?

---

## Why Jay Paused

It's hard to visualize the ad and the page as a combined experience without
seeing both. Next session: pick one ad concept (audience + headline + visual)
and design the matching page side-by-side. That'll make the architecture
concrete enough to commit.

---

## How to Resume

Tell Claude Code: "Read WEALTH-REVIEW-LANDING-PLAN.md" at the start of the
next session.

---

End of WEALTH-REVIEW-LANDING-PLAN.md
