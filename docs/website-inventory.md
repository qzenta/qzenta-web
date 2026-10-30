# Qzenta Website Inventory

> Comprehensive inventory of routes, components, public assets, environment variables, and analytics/tracking scripts for the Qzenta web platform.
> Generated for milestone tracking and technical documentation on branch `website/2026-10-transformation`.

---

## 1. Routes Inventory (`app/`)

The application is built using the Next.js App Router. Below is every registered route, its file location, rendering model, and purpose:

| Route | Source File | Type | Rendering Strategy | Description |
|---|---|---|---|---|
| `/` | `app/page.tsx` | Page | Static (○ Prerendered) | Homepage with hero section, service pillars, AI assessment form, process overview, and client testimonials. |
| `/about` | `app/about/page.tsx` | Page | Static (○ Prerendered) | Company background, story, core operating values, tech stack details, and mission. |
| `/contact` | `app/contact/page.tsx` | Page | Static (○ Prerendered) | Contact page featuring direct contact details, optional WhatsApp CTA, and the interactive contact form. |
| `/industries` | `app/industries/page.tsx` | Page | Static (○ Prerendered) | Target vertical solutions (Legal, Accounting & Tax, Property & Real Estate, SaaS, NGOs, HR & Payroll). |
| `/insights` | `app/insights/page.tsx` | Page | Static (○ Prerendered) | Blog and article index listing published guides and technical insights. |
| `/insights/[slug]` | `app/insights/[slug]/page.tsx` | Page | SSG (● Static Site Generated) | Dynamic article detail page rendered via `generateStaticParams()` from static data in `lib/posts.ts`. |
| `/popia` | `app/popia/page.tsx` | Page | Static (○ Prerendered) | Protection of Personal Information Act (POPIA) compliance notice and data processing statement. |
| `/portfolio` | `app/portfolio/page.tsx` | Page | Static (○ Prerendered) | Showcase of live client implementations, case studies, and managed infrastructure deployments. |
| `/privacy` | `app/privacy/page.tsx` | Page | Static (○ Prerendered) | Formal Privacy Policy for visitors and clients. |
| `/resources` | `app/resources/page.tsx` | Page | Static (○ Prerendered) | Alternative/legacy resources hub index. |
| `/resources/[slug]` | `app/resources/[slug]/page.tsx` | Page | SSG (● Static Site Generated) | Dynamic resource detail page rendered via `generateStaticParams()` from static data in `lib/posts.ts`. |
| `/services` | `app/services/page.tsx` | Page | Static (○ Prerendered) | Core infrastructure and development service catalog. |
| `/solutions` | `app/solutions/page.tsx` | Page | Static (○ Prerendered) | Detailed breakdown of solutions: Web development, managed hosting, DNS/domains, AI agents, and workflows. |
| `/terms` | `app/terms/page.tsx` | Page | Static (○ Prerendered) | Standard Terms of Service and service delivery conditions. |
| `/api/contact` | `app/api/contact/route.ts` | API Route | Dynamic (ƒ Server Route Handler) | POST endpoint receiving contact inquiries and forwarding them via Brevo's HTTP API. |
| `/robots.txt` | `app/robots.ts` | Metadata | Static (○ Metadata Route) | Dynamic robots.txt generation specifying crawlers and sitemap URL (`https://www.qzenta.com/sitemap.xml`). |
| `/sitemap.xml` | `app/sitemap.ts` | Metadata | Static (○ Metadata Route) | XML sitemap containing all static routes and parameterized posts from `lib/posts.ts`. |
| `/opengraph-image` | `app/opengraph-image.tsx` | Image Route | Dynamic (ƒ Image Route) | Generated Open Graph social sharing image using `@vercel/og` / `next/og` `ImageResponse`. |

### Dynamic Route Details (`/insights/[slug]` & `/resources/[slug]`)
Currently generated slugs from `lib/posts.ts`:
1. `sme-dedicated-it-partner` — *"Why Every SME Needs a Dedicated IT Partner"*
2. `cloudflare-free-website-security` — *"Cloudflare: The Free Tool That Makes Your Website Faster and Safer"*
3. `registration-to-go-live-south-africa` — *"From CIPC Registration to Go-Live: The Technical Roadmap for SA Businesses"*

### Layout & Global Styles
- `app/layout.tsx` — Root layout component defining HTML skeleton, Geist font variables, Schema.org Organization structured data, analytics tags, global navigation header, and footer.
- `app/globals.css` — Tailwind CSS 4 theme directives, base resets, and utility layer animations.
- `app/favicon.ico` — Standard browser favicon.

---

## 2. Components Inventory (`components/`)

All reusable UI and feature components reside in the `components/` directory:

| Component | File Path | Component Architecture | Description & Key Features | References / Where Used |
|---|---|---|---|---|
| `AssessmentForm` | `components/AssessmentForm.tsx` | Client Component (`"use client"`) | Interactive multi-field assessment form for AI and workflow automation audits. Dispatches to an n8n webhook and manages submission states (idle, loading, success). | `app/page.tsx` |
| `ContactForm` | `components/ContactForm.tsx` | Client Component (`"use client"`) | Full-featured contact form with client-side validation, error handling, and AJAX submission to `/api/contact`. | `app/contact/page.tsx` |
| `Footer` | `components/Footer.tsx` | React Server Component | Global footer presenting company branding, structured links (Solutions, Company, Legal), POPIA notice link, and CIPC company registration notice. | `app/layout.tsx` |
| `GoogleAnalytics` | `components/GoogleAnalytics.tsx` | React Server Component | Next.js `Script` loader integrating Google Tag Manager / GA4 with dynamic domain matching (`.com` vs `.co.za`). | `app/layout.tsx` |
| `HeroCarousel` | `components/HeroCarousel.tsx` | Client Component (`"use client"`) | Dynamic 3-slide hero carousel with auto-rotation, pause on hover, manual dot navigation, reduced-motion detection using `useSyncExternalStore`, and 3D flip statistic counters using `useCountUp`. | Standby modular component |
| `MicrosoftClarity` | `components/MicrosoftClarity.tsx` | React Server Component | Next.js `Script` loader injecting Microsoft Clarity session recording and heatmaps. | `app/layout.tsx` |
| `Nav` | `components/Nav.tsx` | Client Component (`"use client"`) | Two-tier sticky navigation header featuring top utility bar, main brand bar, responsive mobile menu drawer, multi-column flyout panels, and route-change state reset. | `app/layout.tsx` |
| `PageHero` | `components/PageHero.tsx` | React Server Component | Consistent banner header used across subpages with eyebrow label, prominent title, description, responsive Next.js `Image`, and dark contrast overlay gradients. | `app/about/page.tsx`, `app/contact/page.tsx`, `app/industries/page.tsx`, `app/insights/page.tsx`, `app/portfolio/page.tsx`, `app/solutions/page.tsx` |
| `ServiceTagMarquee` | `components/ServiceTagMarquee.tsx` | React Server Component | Infinite CSS marquee displaying technical service capabilities (Web Development, DNS, Brevo, SSL, etc.) with reduced-motion support. | Standby modular component |
| `ThemeToggle` | `components/ThemeToggle.tsx` | Client Component (`"use client"`) | Dark / light mode toggle button subscribing to `document.documentElement` class list changes via `useSyncExternalStore` and synchronizing with `localStorage`. | Standby modular component |
| `TrustBar` | `components/TrustBar.tsx` | React Server Component | Animated scrolling badge strip highlighting tech stack partners (Next.js, Vercel, Cloudflare, Google Workspace, Brevo, GitHub). | Standby modular component |

---

## 3. Public Assets Inventory (`public/`)

The following files exist in the `public/` directory:

| Filename | File Size (Bytes) | File Size (KB) | Status | Referencing Source Files | Purpose / Description |
|---|---|---|---|---|---|
| `file.svg` | 391 B | 0.38 KB | Unreferenced | *None* | Default Next.js starter template file icon asset. |
| `globe.svg` | 1,035 B | 1.01 KB | Unreferenced | *None* | Default Next.js starter template globe icon asset. |
| `hero-ai-illustration.png` | 860,035 B | 839.88 KB | Active | `app/page.tsx` (L210) | Hero section feature illustration depicting AI infrastructure and digital workflows. |
| `icon.png` | 27,111 B | 26.48 KB | Unreferenced in code | *None* | High-resolution brand square icon / web clip graphic. |
| `logo.png` | 87,416 B | 85.37 KB | Active | `app/layout.tsx` (L41) | Brand logo graphic referenced in Schema.org Organization structured data (`https://www.qzenta.com/logo.png`). |
| `next.svg` | 1,375 B | 1.34 KB | Unreferenced | *None* | Default Next.js starter template Next.js wordmark logo. |
| `qzenta-icon.svg` | 711 B | 0.69 KB | Active | `app/layout.tsx` (L21, L22), `components/Nav.tsx` (L195) | Primary Qzenta geometric Q emerald/navy mark, used as browser shortcut icon and navigation header mark. |
| `qzenta-wordmark.svg` | 763 B | 0.75 KB | Unreferenced in code | *None* | Vector Qzenta text wordmark graphic. |
| `vercel.svg` | 128 B | 0.13 KB | Unreferenced | *None* | Default Next.js starter template Vercel triangle mark. |
| `window.svg` | 385 B | 0.38 KB | Unreferenced | *None* | Default Next.js starter template window icon asset. |

---

## 4. Environment Variables Referenced in Code

> **Note:** Per security policy, only variable names and usage contexts are listed below. Values are strictly excluded.

| Variable Name | Client / Server Scope | Referencing Files | Description & Handling |
|---|---|---|---|
| `BREVO_API_KEY` | Server-only | `app/api/contact/route.ts` (L16) | Secret API key used to authenticate with Brevo's v3 SMTP email API. If absent, the route aborts and returns an HTTP 500 error (`"Server configuration error."`). |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Client-accessible | `app/contact/page.tsx` (L42, L48) | International WhatsApp phone number used for direct click-to-chat link. If unset, the WhatsApp contact section is conditionally omitted from the UI. |
| `NEXT_PUBLIC_N8N_ASSESSMENT_WEBHOOK` | Client-accessible | `components/AssessmentForm.tsx` (L27) | Webhook URL pointing to an n8n automation pipeline to process AI assessment submissions. If unset, form submission still completes successfully from the user's perspective. |
| `NEXT_PUBLIC_GA_ID_COM` | Client-accessible | `components/GoogleAnalytics.tsx` (L4) | Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`) for traffic to `qzenta.com` and default hostnames. If both GA variables are absent, no analytics scripts are rendered. |
| `NEXT_PUBLIC_GA_ID_COZA` | Client-accessible | `components/GoogleAnalytics.tsx` (L5) | Google Analytics 4 measurement ID for traffic on the South African local domain `qzenta.co.za`. |
| `NEXT_PUBLIC_CLARITY_ID` | Client-accessible | `components/MicrosoftClarity.tsx` (L4) | Microsoft Clarity project identifier for heatmaps and session replay. If unset, no script tag is rendered. |
| `TIKTOK_POST_HEADFUL` | Node.js automation script | `scripts/tiktok-post.mjs` (L35) | Automation flag (`"1"`) specifying whether Playwright runs in visible browser mode for TikTok upload debugging. Defaults to headless when unset. |

---

## 5. Analytics & Tracking Scripts

The website integrates third-party telemetry scripts via Next.js's optimized `next/script` component (`strategy="afterInteractive"`) within `app/layout.tsx`:

### 1. Google Analytics (`components/GoogleAnalytics.tsx`)
- **Library / Loader**: Google Tag Manager (`gtag.js`) via `https://www.googletagmanager.com/gtag/js?id={gaId}`
- **Loading Strategy**: `strategy="afterInteractive"` (loads immediately after the page becomes interactive, minimizing TBT impact).
- **Multi-Domain Intelligence**: Automatically detects whether the active hostname contains `qzenta.co.za`. If so, uses `NEXT_PUBLIC_GA_ID_COZA`; otherwise, uses `NEXT_PUBLIC_GA_ID_COM`.
- **Graceful Fallback**: If neither `NEXT_PUBLIC_GA_ID_COM` nor `NEXT_PUBLIC_GA_ID_COZA` is set, the component returns `null` and injects no script tags or DOM nodes.

### 2. Microsoft Clarity (`components/MicrosoftClarity.tsx`)
- **Library / Loader**: Microsoft Clarity tracking snippet loaded from `https://www.clarity.ms/tag/{clarityId}`
- **Loading Strategy**: `strategy="afterInteractive"`
- **Target Tracking**: Captures user heatmaps, scroll depth, and interaction replays for UX analysis.
- **Graceful Fallback**: If `NEXT_PUBLIC_CLARITY_ID` is not defined in the environment, the component returns `null` and executes no code.

### 3. Structured Data (Schema.org) (`app/layout.tsx`)
- **Format**: Embedded `<script type="application/ld+json">` in the document `<head>`.
- **Entity**: `Organization` (`Qzenta (Pty) Ltd`).
- **Included Metadata**: Official URL (`https://www.qzenta.com`), official logo URL (`https://www.qzenta.com/logo.png`), customer service contact point (`info@qzenta.com`), and postal address (Gauteng, ZA).
