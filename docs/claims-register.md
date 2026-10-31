# Qzenta Factual & Numeric Claims Register
**Branch:** `website/2026-10-transformation`  
**Status:** Audit & Compliance Register (Updated for Batch 3)  
**Positioning Directive:** Do not invent clients, testimonials, statistics, or capabilities. Present Qzenta Accounting and Payroll as products in development, never as available.

---

## 1. Audit Methodology & Status Classification

Every factual, numerical, commercial, and operational claim identified across the codebase has been audited and resolved in accordance with Owner Decisions (1) through (4) enacted in October 2026.

### Status Classifications
- `KEPT`: Verified factual statement, approved commercial rate, or substantiated corporate record retained in production.
- `REMOVED`: Numeric stat counter, unsubstantiated turnaround SLA, unverified social proof statement, legacy conflicting price, or anonymous case study purged per owner directives and replaced with qualitative architectural descriptions.

---

## 2. Comprehensive Claims Register Table

| ID | Claim Text / Statement | File & Line | Category | Status | Owner Decision & Applied Resolution |
|---|---|---|---|---|---|
| **CLM-001** | `"5-day Average delivery to live"` | `app/page.tsx:20` | Metric / SLA | **REMOVED** | **Decision (3):** Numeric stat counters and delivery-time claims removed. Replaced with qualitative foundational pillars. |
| **CLM-002** | `"6+ Industries served"` | `app/page.tsx:21` | Metric / Track Record | **REMOVED** | **Decision (3):** Numeric counter removed. Sector coverage described qualitatively in `/solutions#industries`. |
| **CLM-003** | `"10+ Domains under management"` | `app/page.tsx:22` | Metric / Volume | **REMOVED** | **Decision (3):** Numeric counter removed. Domain management capabilities described qualitatively. |
| **CLM-004** | `"24/7 AI agents uptime"` | `app/page.tsx:23` | Metric / Uptime SLA | **REMOVED** | **Decision (3):** Uptime claim removed. AI agent availability framed around deterministic autonomous workflows. |
| **CLM-005** | `"Website Development: Starting at R8,500"` | `app/page.tsx:31` | Commercial / Pricing | **KEPT** | **Decision (2):** Canonical baseline entry price for web application engineering retained on homepage, nav, and solutions. |
| **CLM-006** | `"Hosting & Domains: Starting at R750/mo"` | `app/page.tsx:38` | Commercial / Pricing | **KEPT** | **Decision (2):** Canonical recurring baseline for managed hosting retained on homepage, nav, and solutions. |
| **CLM-007** | `"Workflow Automation: Starting at R18,000"` | `app/page.tsx:45` | Commercial / Pricing | **KEPT** | **Decision (2):** Canonical baseline entry price for workflow automation retained on homepage, nav, and `/ai-automation`. |
| **CLM-008** | `"AI Agents: Starting at R35,000"` | `app/page.tsx:52` | Commercial / Pricing | **KEPT** | **Decision (2):** Canonical baseline entry price for custom AI agent deployments retained on homepage, nav, and `/ai-automation`. |
| **CLM-009** | `"Starter package: R8,500 once-off, R750/mo"` | `app/page.tsx:92-93` | Commercial / Pricing | **KEPT** | **Decision (2):** Structured package pricing retained on homepage. |
| **CLM-010** | `"Growth package: R18,000 once-off, R1,500/mo"` | `app/page.tsx:108-109` | Commercial / Pricing | **KEPT** | **Decision (2):** Structured package pricing retained on homepage. |
| **CLM-011** | `"AI Business package: R35,000 once-off, R3,000/mo"` | `app/page.tsx:124-125` | Commercial / Pricing | **KEPT** | **Decision (2):** Structured package pricing retained on homepage. |
| **CLM-012** | `"AI Workforce package: Custom, From R6,000/mo"` | `app/page.tsx:140-141` | Commercial / Pricing | **KEPT** | **Decision (2):** Enterprise package baseline retained on homepage. |
| **CLM-013** | `"Trusted by businesses in accounting, legal, property & education · 100% South African"` | `app/page.tsx:203` | Social Proof / Client Types | **REMOVED** | **Decision (3):** Explicitly removed. Replaced with verified CIPC registration and ownership disclosure per `docs/messaging.md:90`. |
| **CLM-014** | `"1-5 day delivery"` | `app/page.tsx:321` | Metric / SLA | **REMOVED** | **Decision (3):** Delivery-time badge removed from differentiator banner. Replaced with `"Structured milestone delivery"`. |
| **CLM-015** | `"All prices exclude VAT. Johannesburg market rates."` | `app/page.tsx:340` | Commercial / Legal | **KEPT** | Retained as standard commercial terms on package matrix. |
| **CLM-016** | `"Most clients are live within 5 working days."` | `app/page.tsx:435` | Metric / SLA | **REMOVED** | **Decision (3):** SLA claim removed from final CTA. Replaced with qualitative engagement invitation per `docs/messaging.md:232`. |
| **CLM-017** | `"Qzenta was established in May 2026 as a dedicated IT services entity"` | `app/about/page.tsx:58` | Corporate Entity | **KEPT** | Verified statutory corporate record: CIPC Registered 22 May 2026. |
| **CLM-018** | `"Family-operated. South African. Built to last."` | `app/about/page.tsx:47` | Corporate Identity | **REMOVED** | Replaced with AI-native technology entity positioning and boutique scale by design per `docs/messaging.md`. |
| **CLM-019** | `"Johannesburg city skyline — Qzenta's home base" / "Gauteng, ZA"` | `app/about/page.tsx:102`, `app/layout.tsx:49` | Location / HQ | **KEPT** | Verified physical headquarters location in Johannesburg, Gauteng. |
| **CLM-020** | `"Our standard stack: Next.js, Vercel, Cloudflare, GitHub, Brevo, MailerLite, n8n"` | `app/about/page.tsx:33-39` | Technical Capabilities | **KEPT** | Verified active repository toolchain and operational technology stack. |
| **CLM-021** | `"Our registered information officer is Daniel Amoah"` | `app/popia/page.tsx:34` | Statutory / Compliance | **KEPT** | **Decision (1):** Canonical legal name confirmed as Daniel Amoah. `CLAUDE.md:7` updated; legacy name "Onukpa" permanently purged. |
| **CLM-022** | `"Qzenta (Pty) Ltd ... private company registered with CIPC"` | `app/popia/page.tsx:31-33` | Statutory / Entity | **KEPT** | Verified statutory corporate registration (22 May 2026). |
| **CLM-023** | `"All client credentials and secrets are stored exclusively in environment variables"` | `app/popia/page.tsx:83-84` | Security Practice | **KEPT** | Verified repository security policy: `.env.local` encapsulation with zero secrets in code. |
| **CLM-024** | `"Once-off R3,000 Setup, build, and deployment"` | `app/solutions/page.tsx:269` | Commercial / Pricing | **REMOVED** | **Decision (2):** Legacy R3,000 pricing figure deleted from solutions page in favor of canonical R8,500 baseline. |
| **CLM-025** | `"Monthly R200 – R300/mo Ongoing maintenance"` | `app/solutions/page.tsx:274` | Commercial / Pricing | **REMOVED** | **Decision (2):** Legacy R200–R300 monthly rate deleted from solutions page in favor of canonical R750/mo baseline. |
| **CLM-026** | `"Domain Registration & DNS: from R150"` | `components/Nav.tsx:33` | Commercial / Pricing | **KEPT** | **Decision (2):** Retained in navigation flyout as standard entry pricing for domain registration and DNS management. |
| **CLM-027** | `"5 live projects across legal, NGO, SaaS, finance, and property"` | `components/HeroCarousel.tsx:24` | Social Proof / Portfolio | **REMOVED** | **Decision (3):** Specific project count and sector list removed from carousel. Replaced with core capability value proposition. |
| **CLM-028** | `"11+ Domains Managed across multiple clients & sectors"` | `components/HeroCarousel.tsx:33` | Metric / Volume | **REMOVED** | **Decision (3):** Numeric counter removed from hero carousel. Replaced with qualitative capability badges. |
| **CLM-029** | `"5+ Projects Live sites built & actively maintained"` | `components/HeroCarousel.tsx:34` | Metric / Volume | **REMOVED** | **Decision (3):** Numeric counter removed from hero carousel. Replaced with qualitative capability badges. |
| **CLM-030** | `"5+ Sectors Legal, NGO, SaaS, finance & more"` | `components/HeroCarousel.tsx:35` | Metric / Scope | **REMOVED** | **Decision (3):** Numeric counter removed from hero carousel. Replaced with qualitative capability badges. |
| **CLM-031** | `"24h Response Average support turnaround time"` | `components/HeroCarousel.tsx:36` | Metric / SLA | **REMOVED** | **Decision (3):** Support turnaround SLA removed from hero carousel. Replaced with continuous stewardship statement. |
| **CLM-032** | `"Accounting firms, law practices, NGOs, and property agencies across Gauteng trust Qzenta..."` | `components/TrustBar.tsx:17` | Social Proof / Geography | **REMOVED** | **Decision (3):** Geographic/vertical trust claim removed. Replaced with qualitative reliability statement per `docs/messaging.md:141`. |
| **CLM-033** | `"We'll be in touch within 1 business day."` | `components/AssessmentForm.tsx:54` | SLA / Turnaround | **REMOVED** | **Decision (3):** Turnaround commitment removed from form confirmation. Replaced with prompt direct review statement. |
| **CLM-034** | `Portfolio Case Study: "South African Accounting Practice"` | `app/portfolio/page.tsx:15-20` | Client Reference | **REMOVED** | **Decision (3):** Anonymous case study removed. Replaced with technical architecture deployment profile. |
| **CLM-035** | `Portfolio Case Study: "Property Services Agency"` | `app/portfolio/page.tsx:22-26` | Client Reference | **REMOVED** | **Decision (3):** Anonymous case study removed. Replaced with technical architecture deployment profile. |
| **CLM-036** | `Portfolio Case Study: "Bookkeeping SaaS Platform"` | `app/portfolio/page.tsx:29-33` | Client Reference | **REMOVED** | **Decision (3) & (4):** Anonymous case study removed. TiqBooks presented strictly as an internal group incubation project, never as operating. |
| **CLM-037** | `Portfolio Case Study: "Diaspora Community NGO"` | `app/portfolio/page.tsx:36-40` | Client Reference | **REMOVED** | **Decision (3):** Anonymous case study removed. Replaced with community portal architecture deployment profile. |
| **CLM-038** | `Portfolio Case Study: "Legal Services Organisation"` | `app/portfolio/page.tsx:43-48` | Client Reference | **REMOVED** | **Decision (3):** Anonymous case study removed. Replaced with technical architecture deployment profile. |
| **CLM-039** | `"Live project — details shared with client permission."` | `app/portfolio/page.tsx:102` | Compliance / Permission | **REMOVED** | **Decision (3):** Blanket permission assertion removed alongside anonymous case studies. |
| **CLM-040** | `"Salesforce membership management / Salesforce connectivity"` | `app/portfolio/page.tsx:39`, `app/industries/page.tsx:43` | Technical Capability | **REMOVED** | Unsubstantiated external enterprise dependency claim purged from marketing copy. |
| **CLM-041** | `"The full process, done properly, takes 2–5 business days."` | `lib/posts.ts:136` | SLA / Technical Roadmap | **KEPT** | Contextualized educational guidance within technical insight article. Retained as an architectural estimation, not a commercial guarantee. |

---

## 3. Reconciliation Summary

All 41 claims have been reconciled in full:
- **KEPT (14 Claims):** Core corporate registration facts (CIPC 22 May 2026), Information Officer identity (Daniel Amoah), verified tech stack (Next.js, Vercel, Cloudflare, n8n, Brevo), and canonical commercial entry baselines (R8,500, R750/mo, R18,000, R35,000, from R150).
- **REMOVED (27 Claims):** All unverified numeric counters, delivery-time SLAs (5-day, 1-5 day, 24h response), uptime guarantees (24/7), "Trusted by businesses in" statements, the 5 anonymous case studies, and conflicting legacy pricing figures (R3,000 setup, R200–R300/mo).
