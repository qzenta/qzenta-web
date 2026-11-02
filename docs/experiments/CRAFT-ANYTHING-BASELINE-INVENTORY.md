# PRJ-QZ-CRAFT-EXP-001: Read-Only Reconstruction Baseline Inventory

**Document Version:** 1.1.0  
**Date:** November 2, 2026  
**Repository:** qzenta/qzenta-web  
**Branch:** `experiment/craft-anything-ux`  
**Baseline Commit:** `305d54cd17f214269fd9ef179e72ca9095ccf1ec` (HEAD)  
**Status:** Read-Only Assessment Complete. Build & Lint Verified. Awaiting Pilot Task Approval.

---

## 1. Repository State & Verification

### A. Git & Branch Verification
- **Active Branch:** `experiment/craft-anything-ux`
- **Verified Baseline Commit:** `305d54cd17f214269fd9ef179e72ca9095ccf1ec` *(Batch 5a: Google Map embed on contact page)*
- **Parent PR Reference:** PR #12 (`website/2026-10-transformation`) — untouched and isolated.
- **Working Tree Status:** Clean, with untracked experimental documentation (`docs/experiments/CRAFT-ANYTHING-BASELINE-INVENTORY.md`).
- **Recent Commit History (Batches 3-5a):**
  1. `305d54cd` — Batch 5a: Google Map embed on contact page (Daniel Amoah, 31 Oct 2026)
  2. `dfdb27be` — Batch 4c: Claims sweep, remove guarantee wording (Daniel Amoah, 31 Oct 2026)
  3. `ac04f985` — Batch 4c: Claims sweep, remove guarantee wording (Daniel Amoah, 31 Oct 2026)
  4. `fbfedba9` — Batch 4b: Capability marquee below hero (Daniel Amoah, 31 Oct 2026)
  5. `11a6af64` — Batch 4a: Three-slide hero carousel with floating SVG animation (Daniel Amoah, 31 Oct 2026)

### B. Technical Stack & Exact Dependencies (`package.json`)
- **Framework / Runtime:** Next.js `16.2.6`
- **UI Library:** React `19.2.4` / React DOM `19.2.4`
- **Styling:** Tailwind CSS `4` (`tailwindcss@^4`, `@tailwindcss/postcss@^4`), PostCSS
- **Language / Typing:** TypeScript `^5` (`tsconfig.json`)
- **Linting:** ESLint `^9` with `eslint-config-next` (`eslint.config.mjs`)
- **Automation / Testing:** Playwright `^1.62.1` `[INFERRED]`

---

## 2. Route & Redirect Inventory (`app/` & `next.config.ts`)

Based on direct inspection of `git ls-files app` and `next.config.ts`:

### A. Active Application Routes (`app/`)
| Route | Source File | Rendering Strategy | Description & Purpose |
|---|---|---|---|
| `/` | `app/page.tsx` | Static (Prerendered) | Homepage with hero section, service pillars, AI assessment form, process overview, and package pricing matrix. |
| `/about` | `app/about/page.tsx` | Static (Prerendered) | Corporate history, CIPC registration details (22 May 2026), core values, and tech stack. |
| `/ai-automation` | `app/ai-automation/page.tsx` | Static (Prerendered) | Dedicated AI agent solutions, workflow automation, and tier pricing. |
| `/business-software` | `app/business-software/page.tsx` | Static (Prerendered) | Business software products and private alpha disclosures (Qzenta Accounting & Payroll). |
| `/contact` | `app/contact/page.tsx` | Static (Prerendered) | Contact details, WhatsApp CTA, interactive contact form, and Google Map embed. |
| `/insights` | `app/insights/page.tsx` | Static (Prerendered) | Blog and article index listing published guides and technical insights. |
| `/insights/[slug]` | `app/insights/[slug]/page.tsx` | SSG (Static Site Generated) | Dynamic article detail page rendered via `generateStaticParams()` from `lib/posts.ts`. |
| `/popia` | `app/popia/page.tsx` | Static (Prerendered) | POPIA compliance notice, Information Officer disclosure (Daniel Amoah). |
| `/portfolio` | `app/portfolio/page.tsx` | Static (Prerendered) | Technical architecture deployment profiles and managed infrastructure showcase. |
| `/privacy` | `app/privacy/page.tsx` | Static (Prerendered) | Formal visitor and client Privacy Policy. |
| `/products` | `app/products/page.tsx` | Static (Prerendered) | Product catalog covering engineering, hosting, workflow, and AI packages. |
| `/solutions` | `app/solutions/page.tsx` | Static (Prerendered) | Detailed breakdown of solutions, managed hosting, DNS, and AI agents. |
| `/terms` | `app/terms/page.tsx` | Static (Prerendered) | Standard Terms of Service and delivery conditions. |
| `/api/contact` | `app/api/contact/route.ts` | Dynamic Server Route (API) | POST endpoint handling contact submissions via Brevo SMTP API. |
| `/robots.txt` | `app/robots.ts` | Metadata Route | Dynamic robots.txt generation pointing to sitemap.xml. |
| `/sitemap.xml` | `app/sitemap.ts` | Metadata Route | XML sitemap containing all static routes and parameterized posts. |
| `/opengraph-image` | `app/opengraph-image.tsx` | Dynamic Image Route | Open Graph social sharing image generator using `next/og`. |

### B. Permanent Redirects (`next.config.ts`)
The following paths are not standalone pages; they are configured as permanent redirects in `next.config.ts`:
- `/resources` → `/insights` (`permanent: true`)
- `/resources/:slug` → `/insights/:slug` (`permanent: true`)
- `/services` → `/solutions` (`permanent: true`)
- `/industries` → `/solutions#industries` (`permanent: true`)

---

## 3. Completed Work Summary (Batches 3, 4, 5a)

1. **Batch 3 — Claims Sweep, Guarantee Removal & Pricing Harmonization:**
   - Enforced statutory director and Information Officer legal name as **Daniel Amoah** across all public pages, POPIA notices, and internal documentation (`CLAUDE.md`). Purged legacy name "Onukpa".
   - Purged all unverified numeric stat counters, turnaround SLAs, uptime percentages, and social proof claims ("Trusted by businesses in...").
   - Removed anonymous case studies from `/portfolio` and replaced them with technical architectural deployment profiles.
   - Standardized canonical baseline pricing: Website engineering from **R8,500**, Managed hosting from **R750/mo**, Workflow automation from **R18,000**, AI agents from **R35,000**, and Domain registration from **R150**. Purged conflicting legacy rates (R3,000 setup, R200–R300/mo) from `/solutions`.
   - Documented owner decisions in `docs/decisions.md` and maintained the factual claims register in `docs/claims-register.md`.
2. **Batch 4a — Hero Carousel:**
   - Implemented dynamic 3-slide hero carousel (`HeroCarousel.tsx`) with auto-rotation, pause on hover, manual dot navigation, reduced-motion detection, and 3D flip counters.
3. **Batch 4b — Capability Marquee:**
   - Added infinite CSS service capability marquee (`ServiceTagMarquee.tsx`) highlighting technical infrastructure stack and engineering proficiencies.
4. **Batch 4c — Claims & Guarantee Sweep:**
   - Removed guarantee phrasing ("guaranteed lead delivery", "guaranteed data delivery") across application pages and components in favor of reliable architectural outcomes.
5. **Batch 5a — Google Map Embed:**
   - Integrated Google Map embed on the contact page (`app/contact/page.tsx`).
6. **New Routes Created in Transformation:**
   - Added dedicated routes `/ai-automation`, `/business-software`, and `/products`.

---

## 4. Outstanding UX Work & Technical Debt

1. **Responsive Layout Fine-Tuning:**
   - Mobile and tablet viewport testing for complex grid components and package matrix tables (`[INFERRED]`).
   - Sticky navigation drawer (`components/Nav.tsx`) touch target sizing and transition polish on small mobile viewports (390px).
2. **Interactive Form Validation & Feedback States:**
   - Enhancing error handling and loading indicators in `AssessmentForm.tsx` and `ContactForm.tsx` (`[INFERRED]`).
3. **Accessibility & Contrast Audit:**
   - WCAG AA contrast verification across dark/light color schemes and screen reader support for interactive components (`[INFERRED]`).

---

## 5. Available Evidence & Reference Documents

- **`docs/decisions.md`** — Authoritative owner decisions record (Statutory identity, pricing canonicalization, claims purge, holding entity scope).
- **`docs/claims-register.md`** — Comprehensive audit register of 46 commercial, statistical, and statutory claims (14 kept, 32 removed/reworded).
- **`docs/messaging.md`** — Core brand messaging, tone of voice, and positioning guidelines.
- **`docs/site-architecture.md`** — Information architecture and routing design specifications.
- **`.stitch/DESIGN.md` & `.stitch/SITE.md`** — Initial design system specifications and style guidelines.

---

## 6. Build & Lint Verification Results

Executed locally on branch `experiment/craft-anything-ux`:

### A. Linting (`npm run lint`)
- **Command:** `eslint`
- **Result:** **PASSED (0 errors, 0 warnings)**

### B. Production Build (`npm run build`)
- **Command:** `next build`
- **Result:** **PASSED successfully in 4.3s (TypeScript check in 4.2s)**
- **Route Compilation Summary:**
  - `○ /` (Static prerendered)
  - `○ /about` (Static prerendered)
  - `○ /ai-automation` (Static prerendered)
  - `ƒ /api/contact` (Dynamic server route handler)
  - `○ /business-software` (Static prerendered)
  - `○ /contact` (Static prerendered)
  - `○ /insights` (Static prerendered)
  - `● /insights/[slug]` (SSG via `generateStaticParams`: 3 static posts generated)
  - `ƒ /opengraph-image` (Dynamic image route)
  - `○ /popia` (Static prerendered)
  - `○ /portfolio` (Static prerendered)
  - `○ /privacy` (Static prerendered)
  - `○ /products` (Static prerendered)
  - `○ /robots.txt` (Metadata route)
  - `○ /sitemap.xml` (Metadata route)
  - `○ /solutions` (Static prerendered)
  - `○ /terms` (Static prerendered)

---

## 7. Recommended Pilot Task for Craft Anything UX Trial

To evaluate Craft Anything under controlled experimental conditions (Phase C), we recommend selecting **ONE** contained, representative UX task:

### Pilot Task Proposal: **Mobile Navigation Drawer & Sticky Header UX Refinement**
- **Scope:** Refine `components/Nav.tsx` and mobile menu drawer interactions to ensure flawless touch response, smooth open/close transitions, accessibility focus trapping, and zero layout shift on mobile viewports (390px).
- **Rationale:**
  - **Contained & Isolated:** Limited strictly to navigation UI components without affecting database, API routes, or financial logic.
  - **Measurable:** Clear before-and-after performance metrics (CLS, interaction response time, touch target spacing, accessibility score).
  - **Reversible:** Easily version-controlled on `experiment/craft-anything-ux`.
- **Comparative Measurement Plan:**
  - Track completion time, code quality, test pass rate, and model token efficiency between standard workflow and Craft Anything orchestration.

---
*End of Baseline Inventory. Build verified. Awaiting review and approval before proceeding to Phase C.*
