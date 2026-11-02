# Qzenta Owner Decisions Record
**Branch:** `website/2026-10-transformation`  
**Date:** 31 October 2026  
**Status:** Approved & Enacted (Batch 3)  
**Entity:** Qzenta (Pty) Ltd (CIPC Registered 22 May 2026)  

---

## Executive Overview

This document records the four definitive owner decisions governing the commercial policy, statutory identity, claims compliance, and entity governance of Qzenta (Pty) Ltd during the website transformation. These decisions supersede all legacy assumptions and resolve all discrepancies flagged during the initial codebase audit.

---

## Decision 1: Statutory Director & Information Officer Legal Name

### Decision
The verified legal name of the sole Director and registered Information Officer is **Daniel Amoah**. The name **Onukpa** must never be used anywhere on the public website, in metadata, or in internal configuration and context documentation (`CLAUDE.md`).

### Context & Rationale
- An audit identified a direct conflict between `CLAUDE.md:7` (which previously listed "Daniel Onukpa") and statutory compliance filings in `app/popia/page.tsx:34` (which correctly listed "Daniel Amoah").
- Official CIPC records and statutory filings with the Information Regulator of South Africa designate Daniel Amoah as the statutory officer.
- Consistent corporate identity protects regulatory standing under South African company law and the Protection of Personal Information Act (Act 4 of 2013).

### Implementation Actions Taken
- Corrected `CLAUDE.md:7` to `- Director: Daniel Amoah`.
- Verified and harmonized all references in `app/popia/page.tsx`, `components/Nav.tsx`, `components/Footer.tsx`, and `app/about/page.tsx`.
- Conducted full-codebase scan ensuring zero occurrences of "Onukpa" remain in active files.

---

## Decision 2: Canonical Pricing Architecture & Legacy Rates Deprecation

### Decision
Retain all active baseline "from-prices" on the homepage and navigation where they currently exist. Completely purge all legacy conflicting figures — specifically the **R3,000 once-off setup** and **R200–R300/month** rates previously displayed on the solutions page.

### Canonical Pricing Schedule
| Capability / Offering | Baseline Commercial Model | Production Placement |
|---|---|---|
| **Website Engineering** | Starting at **R8,500** once-off | Homepage, `Nav.tsx`, `/solutions` |
| **Managed Hosting & Stewardship** | Starting at **R750/month** | Homepage, `Nav.tsx`, `/solutions` |
| **Domain Registration & DNS** | From **R150** | `Nav.tsx` flyout |
| **Workflow Automation (n8n)** | Starting at **R18,000** once-off | Homepage, `Nav.tsx`, `/ai-automation` |
| **Dedicated AI Agents** | Starting at **R35,000** once-off | Homepage, `Nav.tsx`, `/ai-automation` |
| **Starter Package** | **R8,500** once-off + **R750/mo** | Homepage package grid |
| **Growth Package** | **R18,000** once-off + **R1,500/mo** | Homepage package grid |
| **AI Business Package** | **R35,000** once-off + **R3,000/mo** | Homepage package grid |
| **AI Workforce (Enterprise)** | Custom quote, from **R6,000/mo** | Homepage package grid |

### Context & Rationale
- The coexistence of R3,000/R200–R300 on `/solutions` and R8,500/R750 on `/` created severe commercial ambiguity and damaged pricing credibility.
- The owner confirmed that the higher baseline rates reflect current production engineering standards and the level of managed stewardship delivered.

### Implementation Actions Taken
- Deleted legacy R3,000 and R200–R300 pricing cards from `app/solutions/page.tsx`.
- Harmonized `/solutions` commercial section with canonical R8,500 setup and R750/mo hosting rates.
- Maintained all existing package tiers and from-prices across `app/page.tsx`, `components/Nav.tsx`, and `/ai-automation`.

---

## Decision 3: Removal of Quantitative Metrics, SLAs, Social Proof Claims & Anonymous Case Studies

### Decision
Purge all unverified numeric stat counters, turnaround and delivery-time SLAs, uptime percentages, social proof statements beginning with *"Trusted by businesses in"*, and the five anonymous client case studies. Replace them entirely with qualitative statements of architectural capability and engineering rigor consistent with `docs/messaging.md`.

### Specific Removals & Replacements
1. **Numeric Stat Counters:**
   - Purged `"5-day average delivery"`, `"6+ industries served"`, `"10+ domains under management"`, and `"24/7 AI agents uptime"` from `app/page.tsx`.
   - Purged `"11+ domains"`, `"5+ projects"`, `"5+ sectors"`, and `"24h response"` from `components/HeroCarousel.tsx`.
   - Replaced with qualitative foundational pillars: *Direct Builder Access*, *Enterprise Cloud Foundations*, *Intelligent Automation*, and *Full Code & Data Ownership*.
2. **Turnaround & Delivery-Time SLAs:**
   - Replaced `"1-5 day delivery"` in homepage badge with `"Structured milestone delivery"`.
   - Replaced `"Most clients are live within 5 working days"` in homepage CTA with qualitative engagement invitation.
   - Replaced `"We'll be in touch within 1 business day"` in `AssessmentForm.tsx` with prompt review statement.
3. **Social Proof & Client Claims:**
   - Removed `"Trusted by businesses in accounting, legal, property & education · 100% South African"` from `app/page.tsx:203`. Replaced with statutory registration disclosure: `"CIPC Registered (22 May 2026) · 100% South African Owned · Enterprise Cloud Foundations"`.
   - Removed Gauteng trust claim from `components/TrustBar.tsx`. Replaced with `"Engineered for reliability. We build, deploy, and manage production systems on world-class technology foundations."`
4. **Anonymous Case Studies:**
   - Purged the five anonymous case studies (Accounting Practice, Property Agency, Bookkeeping SaaS, Diaspora NGO, Legal Organisation) and the disclaimer `"Live project — details shared with client permission"` from `app/portfolio/page.tsx`.
   - Replaced `/portfolio` with five production architectural deployment profiles highlighting system design, technical stack, and operational outcomes.

### Context & Rationale
- Unverifiable statistics and anonymous case studies weaken technical credibility and risk violating consumer protection standards.
- Positioning Qzenta as an elite, disciplined technology entity requires leading with architectural clarity, proven toolchains, and transparent engineering principles.

---

## Decision 4: Holding Entity Scope & Software Development Transparency

### Decision
Group entities (Sikatrix, TiqBooks, Erga, GDSA) may be referenced strictly as **Qzenta group projects**. Under no circumstances should **TiqBooks** be presented as an operating commercial business. Proprietary software products — specifically **Qzenta Accounting** and **Qzenta Payroll** — must always be transparently described as **in active development** or **in private alpha**, never as commercially available.

### Required Software Phrasing Rules
- **Status Badges:** `[ IN ACTIVE DEVELOPMENT ]` or `[ PRIVATE ALPHA ]`
- **Permitted Phrases:**
  - *"Currently in active engineering"*
  - *"Undergoing private technical validation; not commercially available"*
  - *"Register for roadmap updates / early access preview"*
  - *"Join design partner waitlist"*
- **Strictly Prohibited Phrases:**
  - Never use *"Buy now"*, *"Sign up today"*, *"Instant login"*, or *"Free trial"*.
  - Never fabricate customer counts, user metrics, screenshots, or testimonials for software products in development.

### Context & Rationale
- TiqBooks is an internal group venture incubated under Qzenta's digital infrastructure; presenting it as an active external client or operating SaaS platform is factually inaccurate.
- Clear disclosure between commercially live operational services (web development, hosting, AI automation) and pre-release software platforms protects customer trust and complies with truth-in-advertising principles.

### Implementation Actions Taken
- Created dedicated `/business-software` hub prominently displaying pre-release engineering disclosure banners and active development status badges.
- Created `/products` roadmap portal featuring the software development lifecycle, R&D initiatives, and the Design Partner Program.
- Updated `app/about/page.tsx` and `app/portfolio/page.tsx` contextualizing group entities as internal technology incubation projects.
- Updated `components/Nav.tsx` and `components/Footer.tsx` clearly tagging software products as *(In Development)*.
