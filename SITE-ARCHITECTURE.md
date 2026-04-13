# SITE-ARCHITECTURE.md
# AdvisorJay.com — Complete Site Structure & Build Spec
# Last updated: April 2026

## The Strategy in One Sentence
Everything lives on advisorjay.com. The other two domains redirect here. One authority. Three doors. One brand.

## Domain Configuration

### advisorjay.com
The main brand. All content, all tools, all guides, all SEO authority lives here. Never split content across domains.

### 401kjay.com
301 redirect → https://www.advisorjay.com/401k-review
Anyone who types 401kjay.com lands on the 401k landing page. No separate website.

### yourwealthreview.com
301 redirect → https://www.advisorjay.com/wealth-review
Jay's personal URL for referrals and networking. Goes on business cards, email signature, LinkedIn.

## Navigation Structure

### Desktop nav tabs (left to right)
1. About
2. How I Help
3. Who I Work With
4. Learn
5. Resources & Tools
6. Locations
7. Book a Call — pill button, always visible, sticky

### Who I Work With dropdown
- Fortune 500 & Corporate Employees → /corporate-wealth-management
- AT&T Employees → /guides/att-employee-benefits
- PG&E Employees → /guides/pge-employee-benefits
- All Telecom & Utility Professionals → /telecommunications-utilities-wealth-management
- Aerospace & Defense → /aerospace-defense-wealth-management
- Tech & Engineering → /semiconductor-wealth-management-arizona
- Physicians & Healthcare → /physician-executive-wealth-management-phoenix-scottsdale
- Business Owners → /business-owner-wealth-management
- High Net Worth Individuals → /high-net-worth-wealth-management
- Families & Life Transitions → /families-life-transitions-wealth-management
- Nonprofit & Institutional → /institutional-non-profit-wealth-management

### Learn dropdown
- All Articles → /learn
- Glossary → /glossary
- 401k & Retirement → /learn#retirement
- RSU & Equity → /learn#equity
- Tax Planning → /learn#tax
- Life Transitions → /learn#transitions

### Resources & Tools dropdown
- All Tools → /tools
- 401k Withholding Calculator → /tools/401k-withholding-calculator
- RSU Tax Calculator → /tools/rsu-equity-compensation-calculator
- Retirement Savings Calculator → /tools/retirement-savings-calculator
- Roth Conversion Calculator → /tools/roth-conversion-calculator
- AT&T Pension Suite → /tools/att-pension
- Business Exit Calculator → /tools/business-exit-planning-calculator
- CA to NV Tax Savings → /tools/ca-nv-tax-savings

## PHASE 1 — Build These First

### /wealth-review
TYPE: Landing page — no navigation bar, no footer links
PURPOSE: Jay's personal intake page. yourwealthreview.com redirects here. Goes on business cards.
HEADLINE: Get a Free Wealth Review from Jay
SUBHEAD: No pitch. No obligation. Just an honest look at where you stand.
FORM FIELDS: First name / Email / Phone (optional) / Who do you work for / Compensation type dropdown / Retirement timeline dropdown / Biggest financial question / Referral toggle
SUBMIT: Send My Information to Jay →
REASSURANCE: Confidential · No obligation · Jay will be in touch within one business day

### /401k-review
TYPE: Landing page — no navigation bar
PURPOSE: Paid ads landing page. 401kjay.com redirects here.
HEADLINE: Is Your 401(k) Actually Working For You?
CONTENT: Jay intro + embedded WithholdingCalculator component + soft CTA to book a call

## Build Order
Phase 1: /wealth-review → /401k-review → /guides/att-employee-benefits → /guides/pge-employee-benefits
Phase 2: /learn hub → /glossary → first 4 articles → homepage update → ticker bar
Phase 3: More company guides → tax articles → new sector pages → paid ads

## Paid Ads Strategy
Never send paid traffic to the homepage. Always send to specific relevant pages.
LinkedIn — target AT&T employees → /guides/att-employee-benefits
LinkedIn — target PG&E employees → /guides/pge-employee-benefits
Google — 401k withholding calculator → /401k-review
Google — AT&T pension calculator → /guides/att-employee-benefits

## Master Prompt for Future Sessions
Read SITE-ARCHITECTURE.md, CONTENT-STRATEGY.md, VOICE-CONVENTION.md, SEO-AI-CONVENTION.md, TOOLS-CONVENTION.md, and PUBLISHED-CONTENT.md from the root of this project before doing anything. What I want to build today: [DESCRIBE HERE]. Before writing any code: confirm the file path, URL, metadata, and components. Wait for my approval.
