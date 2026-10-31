# Qzenta Factual & Numeric Claims Register
**Branch:** `website/2026-10-transformation`  
**Status:** Audit & Compliance Register (Batch 2)  
**Positioning Directive:** Do not invent clients, testimonials, statistics, or capabilities. Present Qzenta Accounting and Payroll as products in development, never as available.

---

## 1. Audit Methodology & Status Classification

Every factual, numerical, commercial, and operational claim currently rendered across the codebase was systematically extracted and audited against verifiable repository records (`CLAUDE.md`, Git commit history, configuration files, and Schema.org metadata).

### Status Classifications
- `CONFIRMED IN REPOSITORY`: The claim is explicitly validated and verified by repository source records (e.g., `CLAUDE.md` entity facts, registration dates, core tech stack configuration).
- `NEEDS OWNER CONFIRMATION`: The claim asserts specific metrics, client counts, delivery turnaround SLAs, pricing, or partner references that cannot be proven solely from code in the repository. Per task instructions, these require explicit owner confirmation before being published.
- `CRITICAL CONFLICT / INCONSISTENCY`: The codebase contains direct internal contradictions (e.g., pricing figures or officer names) that must be reconciled by the owner.

---

## 2. Comprehensive Claims Register Table

| ID | Claim Text / Statement | File & Line | Category | Status | Repository Evidence & Verification Notes | Recommended Owner Action |
|---|---|---|---|---|---|---|
| **CLM-001** | `"5-day Average delivery to live"` | `app/page.tsx:20` | Metric / SLA | **NEEDS OWNER CONFIRMATION** | Appears as a top-level stat card. Repository contains no delivery logs or milestone history validating a 5-day average. | Confirm whether 5 business days is a formal SLA or replace with qualitative milestone delivery terms. |
| **CLM-002** | `"6+ Industries served"` | `app/page.tsx:21` | Metric / Track Record | **NEEDS OWNER CONFIRMATION** | Hardcoded stat card. While 5 industries are described in `app/industries/page.tsx`, live engagement proof across 6+ industries is not substantiated in the repo. | Confirm actual count of commercial industries served. |
| **CLM-003** | `"10+ Domains under management"` | `app/page.tsx:22` | Metric / Volume | **NEEDS OWNER CONFIRMATION** | Top stat card. Conflicts slightly with `CLM-028` (`11+ Domains` in `HeroCarousel.tsx:33`). `CLAUDE.md` notes 11 routes, but total domains under active DNS management requires verification. | Confirm the exact active domain count managed under Qzenta's Cloudflare / Axxess accounts. |
| **CLM-004** | `"24/7 AI agents uptime"` | `app/page.tsx:23` | Metric / Uptime SLA | **NEEDS OWNER CONFIRMATION** | Advertises 24/7 availability for AI agent runtime. No monitoring status dashboard or SLA telemetry exists in repo. | Confirm if automated monitoring / uptime guarantees are operational or adjust to "Automated around-the-clock availability". |
| **CLM-005** | `"Website Development: Starting at R8,500"` | `app/page.tsx:31` | Commercial / Pricing | **CRITICAL CONFLICT / INCONSISTENCY** | Direct conflict with `app/solutions/page.tsx:269`, which advertises setup at `R3,000`. | Owner must confirm canonical pricing tier: R8,500 vs R3,000 setup. |
| **CLM-006** | `"Hosting & Domains: Starting at R750/mo"` | `app/page.tsx:38` | Commercial / Pricing | **CRITICAL CONFLICT / INCONSISTENCY** | Direct conflict with `app/solutions/page.tsx:274`, which advertises monthly hosting at `R200 – R300/mo`. | Owner must confirm canonical recurring fee: R750/mo vs R200–R300/mo. |
| **CLM-007** | `"Workflow Automation: Starting at R18,000"` | `app/page.tsx:45` | Commercial / Pricing | **NEEDS OWNER CONFIRMATION** | Fixed baseline entry price. Not backed by any contractual schedule in repo. | Confirm if R18,000 is the active minimum scope baseline for automation workflows. |
| **CLM-008** | `"AI Agents: Starting at R35,000"` | `app/page.tsx:52` | Commercial / Pricing | **NEEDS OWNER CONFIRMATION** | Fixed baseline price for custom AI agent deployment. Repeated at `app/solutions/page.tsx:178`. | Confirm if R35,000 represents current production pricing. |
| **CLM-009** | `"Starter package: R8,500 once-off, R750/mo"` | `app/page.tsx:92-93` | Commercial / Pricing | **NEEDS OWNER CONFIRMATION** | Structured packaged offering. Includes Next.js site, domain, Cloudflare, Google Business Profile. | Confirm package inclusions and commercial rates. |
| **CLM-010** | `"Growth package: R18,000 once-off, R1,500/mo"` | `app/page.tsx:108-109` | Commercial / Pricing | **NEEDS OWNER CONFIRMATION** | Package claims inclusion of CRM setup, 3 automation workflows, lead capture, and pipeline reporting. | Confirm whether CRM setup and 3 workflows are standardized at this rate. |
| **CLM-011** | `"AI Business package: R35,000 once-off, R3,000/mo"` | `app/page.tsx:124-125` | Commercial / Pricing | **NEEDS OWNER CONFIRMATION** | Package claims AI receptionist/chatbot, automated lead follow-up, and WhatsApp integration. | Confirm pricing and support scope. |
| **CLM-012** | `"AI Workforce package: Custom, From R6,000/mo"` | `app/page.tsx:140-141` | Commercial / Pricing | **NEEDS OWNER CONFIRMATION** | Package claims multiple AI agents deployed, custom integrations, and dedicated account manager. | Confirm minimum recurring threshold of R6,000/mo. |
| **CLM-013** | `"Trusted by businesses in accounting, legal, property & education · 100% South African"` | `app/page.tsx:203` | Social Proof / Client Types | **NEEDS OWNER CONFIRMATION** | Mentions education sector in addition to accounting, legal, and property. `CLAUDE.md` names holding clients (Sikatrix, TiqBooks, Erga, GDSA), none explicitly identified as education. | Confirm whether an education sector client or project has been delivered. |
| **CLM-014** | `"1-5 day delivery"` | `app/page.tsx:321` | Metric / SLA | **NEEDS OWNER CONFIRMATION** | Badge claim in differentiator banner. | Confirm turnaround commitment. |
| **CLM-015** | `"All prices exclude VAT. Johannesburg market rates."` | `app/page.tsx:340` | Commercial / Legal | **NEEDS OWNER CONFIRMATION** | Asserts prices exclude VAT and reflect Johannesburg market rates. VAT registration status of Qzenta (Pty) Ltd is unconfirmed in repo. | Confirm VAT registration status and whether VAT disclosure language is required. |
| **CLM-016** | `"Most clients are live within 5 working days."` | `app/page.tsx:435` | Metric / SLA | **NEEDS OWNER CONFIRMATION** | Absolute operational turnaround claim. | Confirm historical delivery data or rephrase to project estimate. |
| **CLM-017** | `"Qzenta was established in May 2026 as a dedicated IT services entity"` | `app/about/page.tsx:58` | Corporate Entity | **CONFIRMED IN REPOSITORY** | `CLAUDE.md:6` explicitly states: `CIPC Registered: 22 May 2026`. | Maintain as verified fact. |
| **CLM-018** | `"Family-operated. South African. Built to last."` | `app/about/page.tsx:47` | Corporate Identity | **NEEDS OWNER CONFIRMATION** | States "family-operated". `CLAUDE.md` names Daniel Onukpa as Director but does not detail family shareholding structure. | Confirm if "family-operated" remains primary brand positioning. |
| **CLM-019** | `"Johannesburg city skyline — Qzenta's home base"` / `"Gauteng, ZA"` | `app/about/page.tsx:102`, `app/layout.tsx:49` | Location / HQ | **CONFIRMED IN REPOSITORY** | Confirmed by Schema.org `addressRegion: "Gauteng", addressCountry: "ZA"` and `CLAUDE.md`. | Retain Johannesburg / Gauteng location. |
| **CLM-020** | `"Our standard stack: Next.js, Vercel, Cloudflare, GitHub, Brevo, MailerLite"` | `app/about/page.tsx:33-39` | Technical Capabilities | **CONFIRMED IN REPOSITORY** | All listed tools exist in package.json, code dependencies, or repo context (`CLAUDE.md:12-18`). | Retain. (Note: OCI Oracle Cloud is documented in `CLAUDE.md:27` as deferred/not in use). |
| **CLM-021** | `"Our registered information officer is Daniel Amoah"` | `app/popia/page.tsx:34` | Statutory / Compliance | **CRITICAL CONFLICT / INCONSISTENCY** | `CLAUDE.md:7` explicitly states `Director: Daniel Onukpa`. `app/popia/page.tsx` states `Daniel Amoah`. | Owner must immediately confirm legal surname for CIPC and POPIA Information Officer records. |
| **CLM-022** | `"Qzenta (Pty) Ltd ... private company registered with CIPC"` | `app/popia/page.tsx:31-33` | Statutory / Entity | **CONFIRMED IN REPOSITORY** | Matches `CLAUDE.md:6` (`CIPC Registered: 22 May 2026`). Registration number not printed in copy. | Confirm whether CIPC registration number (e.g. `2026/XXXXXX/07`) should be displayed. |
| **CLM-023** | `"All client credentials and secrets are stored exclusively in environment variables"` | `app/popia/page.tsx:83-84` | Security Practice | **CONFIRMED IN REPOSITORY** | Audited: no secrets found in source code; `.env.local` referenced for credentials. | Retain as accurate security statement. |
| **CLM-024** | `"Once-off R3,000 Setup, build, and deployment"` | `app/solutions/page.tsx:269` | Commercial / Pricing | **CRITICAL CONFLICT / INCONSISTENCY** | See `CLM-005`. Direct conflict with `app/page.tsx:92` (`R8,500`). | Deprecate R3,000 figure in favor of confirmed rate. |
| **CLM-025** | `"Monthly R200 – R300/mo Ongoing maintenance"` | `app/solutions/page.tsx:274` | Commercial / Pricing | **CRITICAL CONFLICT / INCONSISTENCY** | See `CLM-006`. Direct conflict with `app/page.tsx:93` (`R750/mo`). | Deprecate R200-R300 figure in favor of confirmed rate. |
| **CLM-026** | `"Domain Registration & DNS: from R150"` | `components/Nav.tsx:33` | Commercial / Pricing | **NEEDS OWNER CONFIRMATION** | Advertises domain registration starting at R150. Matches standard .co.za registrar pricing but needs confirmation. | Confirm pricing for .co.za and .com registrations. |
| **CLM-027** | `"5 live projects across legal, NGO, SaaS, finance, and property"` | `components/HeroCarousel.tsx:24` | Social Proof / Portfolio | **NEEDS OWNER CONFIRMATION** | Corresponds to 5 anonymous case studies in `app/portfolio/page.tsx`. `CLAUDE.md:5` lists holding clients `Sikatrix, TiqBooks, Erga, GDSA + external clients`. | Confirm that the 5 case studies correspond to authorized client engagements. |
| **CLM-028** | `"11+ Domains Managed across multiple clients & sectors"` | `components/HeroCarousel.tsx:33` | Metric / Volume | **NEEDS OWNER CONFIRMATION** | Discrepancy with `CLM-003` (`10+ Domains` on homepage). | Harmonize to exact verified count. |
| **CLM-029** | `"5+ Projects Live sites built & actively maintained"` | `components/HeroCarousel.tsx:34` | Metric / Volume | **NEEDS OWNER CONFIRMATION** | Reflects portfolio items. | Confirm exact live project count. |
| **CLM-030** | `"5+ Sectors Legal, NGO, SaaS, finance & more"` | `components/HeroCarousel.tsx:35` | Metric / Scope | **NEEDS OWNER CONFIRMATION** | Discrepancy with `CLM-002` (`6+ Industries` on homepage). | Harmonize sector count across site. |
| **CLM-031** | `"24h Response Average support turnaround time"` | `components/HeroCarousel.tsx:36` | Metric / SLA | **NEEDS OWNER CONFIRMATION** | Turnaround commitment for support inquiries. | Confirm whether a 24-hour support SLA is guaranteed. |
| **CLM-032** | `"Accounting firms, law practices, NGOs, and property agencies across Gauteng trust Qzenta..."` | `components/TrustBar.tsx:17` | Social Proof / Geography | **NEEDS OWNER CONFIRMATION** | Geographic and vertical trust claim. | Confirm client geographic distribution. |
| **CLM-033** | `"We'll be in touch within 1 business day."` | `components/AssessmentForm.tsx:54` | SLA / Turnaround | **NEEDS OWNER CONFIRMATION** | Lead response SLA displayed on successful assessment form submission. | Confirm whether 1 business day lead triage response SLA is actively maintained. |
| **CLM-034** | `Portfolio Case Study: "South African Accounting Practice"` | `app/portfolio/page.tsx:15-20` | Client Reference | **NEEDS OWNER CONFIRMATION** | Describes multi-location SEO pages, integrated blog, MailerLite newsletter, Brevo email. | Confirm client identity or anonymized authorization. |
| **CLM-035** | `Portfolio Case Study: "Property Services Agency"` | `app/portfolio/page.tsx:22-26` | Client Reference | **NEEDS OWNER CONFIRMATION** | Describes estate agency website, Brevo contact integration, zero-downtime Cloudflare cutover. | Confirm client authorization. |
| **CLM-036** | `Portfolio Case Study: "Bookkeeping SaaS Platform"` | `app/portfolio/page.tsx:29-33` | Client Reference | **NEEDS OWNER CONFIRMATION** | Corresponds to internal holding entity TiqBooks (`CLAUDE.md:5`). | Confirm case study framing (proprietary venture vs external client). |
| **CLM-037** | `Portfolio Case Study: "Diaspora Community NGO"` | `app/portfolio/page.tsx:36-40` | Client Reference | **NEEDS OWNER CONFIRMATION** | Describes African diaspora NGO, Brevo email, Salesforce integration. | Confirm client authorization. |
| **CLM-038** | `Portfolio Case Study: "Legal Services Organisation"` | `app/portfolio/page.tsx:43-48` | Client Reference | **NEEDS OWNER CONFIRMATION** | Describes legal and faith organisation, POPIA-compliant copy. | Confirm client authorization. |
| **CLM-039** | `"Live project — details shared with client permission."` | `app/portfolio/page.tsx:102` | Compliance / Permission | **NEEDS OWNER CONFIRMATION** | Explicit claim that written or verbal permission was secured for all 5 portfolio entries. | Owner must confirm permissions are on file. |
| **CLM-040** | `"Salesforce membership management / Salesforce connectivity"` | `app/portfolio/page.tsx:39`, `app/industries/page.tsx:43` | Technical Capability | **NEEDS OWNER CONFIRMATION** | Mentions active Salesforce integrations. No Salesforce SDK or API keys exist in this repo. | Confirm if Salesforce integration was delivered in external repository. |
| **CLM-041** | `"The full process, done properly, takes 2–5 business days."` | `lib/posts.ts:136` | SLA / Technical Roadmap | **NEEDS OWNER CONFIRMATION** | Article quote regarding turnaround time for domain-to-live website setup. | Valid as educational estimate; confirm if interpreted as commercial promise. |

---

## 3. High-Priority Discrepancies Requiring Immediate Decision

Before Batch 3 implementation, the following three direct contradictions must be officially resolved by the project owner:

### Discrepancy 1: Statutory Director / Information Officer Name
- **Location A:** `CLAUDE.md:7` states `Director: Daniel Onukpa`.
- **Location B:** `app/popia/page.tsx:34` states `Our registered information officer is Daniel Amoah`.
- **Action Required:** Provide the correct legal name registered with CIPC and the Information Regulator of South Africa.

### Discrepancy 2: Canonical Pricing & Service Rates
- **Location A (Homepage & Nav):**
  - Website Development: `R8,500 once-off`
  - Hosting & Maintenance: `R750/month`
  - Workflow Automation: `R18,000`
  - AI Agents: `R35,000`
- **Location B (`app/solutions/page.tsx`):**
  - Setup & Build: `R3,000 once-off`
  - Monthly Maintenance: `R200 – R300/month`
- **Action Required:** Confirm whether the higher rates (`R8,500 / R750`) or lower legacy rates (`R3,000 / R200–R300`) reflect current commercial policy, or whether fixed pricing should be replaced with custom engagement scoping.

### Discrepancy 3: Metric Inconsistencies Across Components
- **Domains Managed:** `10+` (`app/page.tsx:22`) vs `11+` (`components/HeroCarousel.tsx:33`).
- **Industries / Sectors:** `6+` (`app/page.tsx:21`) vs `5+` (`components/HeroCarousel.tsx:35`) vs `4+` (`.stitch/SITE.md:42`).
- **Delivery SLAs:** `5-day average` (`app/page.tsx:20`) vs `1-5 day delivery` (`app/page.tsx:321`) vs `2–5 business days` (`lib/posts.ts:136`) vs `24h response` (`components/HeroCarousel.tsx:36`).
- **Action Required:** Establish a single canonical set of verified metrics or replace numerical counters with qualitative engineering statements.
