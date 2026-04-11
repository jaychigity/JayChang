# AdvisorJay.com — Voice & Pronoun Style Guide

This file documents the established pronoun and voice rules for all copy on advisorjay.com.
Paste this into Claude Code whenever auditing or writing any page content, headlines, CTAs,
tool descriptions, or section copy.
Last updated: April 2026

---

## The Core Rule

**"I" for the relationship. "We" for the platform and team.**

Every instance of "I" vs "we" is a deliberate choice that means something specific.
Never mix them arbitrarily — each one signals something different to the reader.

---

## When to Use "I"

Use "I" whenever the copy is about the personal relationship between Jay and the client.
This includes anything involving:

- Listening, understanding, advising
- Knowing the client's situation
- Being available, following up, staying in touch
- Making recommendations
- The first conversation or ongoing relationship
- Jay's personal background, credentials, or philosophy

### Examples
- "I start by getting to know you — your family, your goals, what keeps you up at night."
- "I take a fiduciary approach — your interests come first, always."
- "I'll walk you through every piece of the plan together."
- "I've spent 14 years working with families and professionals navigating complex financial decisions."
- "I work with a wide range of clients including Fortune 500 employees, physicians, and business owners."

---

## When to Use "We"

Use "We" whenever the copy refers to Farther's platform, infrastructure, specialist team,
or capabilities that genuinely involve more than Jay alone.

This includes anything involving:

- Farther's technology platform
- Assets under management or scale ($15B+, 276 advisors, etc.)
- Account management, transfers, tax-lot optimization
- Institutional resources or investment strategies
- The broader Farther advisor network

### Examples
- "We use Farther's Intelligent Wealth Platform to build plans that reflect your life."
- "We manage over $15 billion in assets across a national network of advisors."
- "We handle the account transfers, beneficiary updates, and tax-lot optimization."
- "We partnered with Farther because we believe you deserve both great technology and great advice."

---

## Never Do This

These are the most common errors to fix — flag and correct every instance found:

| Wrong | Why | Fix |
|---|---|---|
| "We listen first" | Listening is Jay, not a platform | "I listen first" |
| "We start with a real conversation" | That's Jay talking to a person | "I start with a real conversation" |
| "I manage $15B in assets" | That's Farther's scale, not Jay alone | "We manage $15B through Farther's platform" |
| "We've been in this industry for 14 years" | Jay's tenure, not a firm's | "I've been in this industry for 14 years" |
| "We are fiduciaries" | Jay is the fiduciary | "I am a fiduciary" |
| "I use technology to manage your accounts" | Platform capability, not just Jay | "We use Farther's platform to manage your accounts" |

---

## CTAs and Button Copy

Call-to-action buttons and links should always use "Jay" or first person to feel personal:

- "Schedule a free conversation with Jay" ✓
- "Let's talk" ✓
- "Begin a confidential conversation" ✓
- "Contact us" ✗ — too corporate, replace with "Reach out to Jay" or "Let's connect"
- "Get started" ✗ — too generic, replace with something specific to the action

---

## Page-by-Page Pronoun Audit Instructions

When auditing existing pages, go through every sentence and apply the rule above.
Flag any instance where:

1. "We" is used for something Jay does personally in a client relationship
2. "I" is used for something that involves Farther's platform or team resources
3. The pronoun switches mid-paragraph without a clear reason
4. "Our team" is used when it should be "Jay and the Farther team" or just "I"

---

## Task for Claude Code — Audit and Update Existing Copy

Read this entire file first. Then do the following:

### Step 1 — Audit
Scan every `.tsx` and `.ts` file in `src/app/` and `src/components/` that contains
visible page copy — headings, paragraphs, CTAs, card descriptions, section text.

Identify every instance where:
- "We" or "our" is used for something that should be "I" or "my" per the rules above
- "I" or "my" is used for something that should be "we" or "our" per the rules above
- CTAs say "Contact us" or other overly corporate phrases that should be warmed up

### Step 2 — Report before changing
Before changing anything, produce a list in this format:

File: [filename]
Line: [line number or approximate location]
Current text: "[exact current copy]"
Suggested fix: "[proposed replacement]"
Reason: [one sentence explaining why]

List every instance found. Wait for approval before making any changes.

### Step 3 — Apply approved changes only
After I review the list and approve specific changes, apply only the ones I confirm.
Do not make any other edits to these files — layout, structure, components, and
logic must remain completely untouched.

---

## Tone Reminders (apply alongside pronoun rules)

While auditing, also flag any copy that violates these tone rules.
Do not fix these automatically — just note them in the report.

- No "genuinely," "straightforward," or "honest" — these read as filler
- No "comprehensive" or "powerful" — too generic
- No passive voice — "plans are built" → "I build plans"
- Avoid "solutions" — too corporate, use "plans" or "advice" instead
- Avoid "leverage" as a verb — use "use" instead
- Keep sentences short — if a sentence runs more than 25 words, flag it

---

## Prompt to Paste into Claude Code for Future Copy Tasks

Copy and paste this at the start of any Claude Code session involving copy changes:

---

> Before writing or editing any copy on this site, read the file `VOICE-CONVENTION.md`
> in the root of this project and follow all rules documented there. The core rule is:
> use "I" for anything involving the personal relationship between Jay and a client,
> and "we" for anything involving Farther's platform, team, or institutional resources.
> Never mix these arbitrarily. Apply this rule to every sentence you write or edit.
> Flag any existing copy that violates this rule rather than silently changing it.

---

End of VOICE-CONVENTION.md
