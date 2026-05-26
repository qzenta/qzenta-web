---
stitch-project-id: TBD
---
# Project Vision & Constitution

> **AGENT INSTRUCTION:** Read this file before every iteration. It serves as the project's "Long-Term Memory." If `next-prompt.md` is empty, pick the highest priority item from Section 5 OR invent a new page that fits the project vision.

## 1. Core Identity

* **Project Name:** Qzenta
* **Stitch Project ID:** `TBD` — populate after first `create_project` call; save to `.stitch/metadata.json`
* **Live URL:** `www.qzenta.com`
* **Stack:** Next.js 16.2.6 · Tailwind CSS 4 · TypeScript · Geist font
* **Mission:** Digital infrastructure for ambitious African businesses — managed service, not DIY.
* **Target Audience:** African SMEs, ambitious founders, growing businesses across South Africa and the continent.
* **Voice:** Enterprise-grade, authoritative, Africa-first, geometric precision. Boutique in scale, BCG in presence.
* **Tagline:** `Quietly Excellent.`

## 2. Visual Language (Stitch Prompt Strategy)

*Strictly adhere to these descriptive rules when prompting Stitch. Do NOT use code.*

* **The "Vibe" (Adjectives):**
    * *Primary:* **Dark** — deep navy canvas, not black. Serious, premium, trustworthy.
    * *Secondary:* **Geometric** — sharp grid lines, structural layouts, precision angles.
    * *Tertiary:* **Authoritative** — enterprise credibility; BCX.co.za-inspired gravitas.

* **Color Philosophy (Semantic):**
    * **Backgrounds:** Deep navy `#1a2236` — the dominant surface. Rich, not harsh.
    * **Accent / CTA:** Emerald green `#10b981` — electric, confident, African vitality.
    * **Text Primary:** Off-white `#f1f5f9` — clean legibility on dark canvas.
    * **Text Secondary:** Slate `#94a3b8` — supporting copy, metadata, labels.
    * **Surface Cards:** `#1e2d45` — slightly lighter navy for card elevation.
    * **Borders:** Subtle `#2d4060` — structural definition without noise.

* **Hero Layout:**
    * Bold **split-layout**: Left column = headline + CTAs + stats. Right column = geometric logo illustration / abstract Q-mark with speed lines.
    * Headline: **"Digital infrastructure for ambitious African businesses"**
    * Subheading: **"We build, deploy, and manage the tech foundations growing businesses depend on — managed service, not DIY."**
    * CTA Primary: **"Our Solutions"** — emerald filled button
    * CTA Secondary: **"View Portfolio"** — ghost/outline button in emerald
    * Stats bar below hero: **11+ Domains · 5+ Projects · 4+ Sectors · 24h Response**

* **Logo:**
    * Geometric Q mark in emerald `#10b981` on navy background with angular speed lines — conveys motion, infrastructure, precision.

## 3. Architecture & File Structure

* **Framework:** Next.js 16 App Router — pages live at `app/{route}/page.tsx`
* **Home page:** `app/page.tsx` — the primary redesign target
* **Asset Flow:** Stitch generates to `.stitch/designs/{page}.html` → Claude converts to React/Tailwind component → replaces `app/{route}/page.tsx`
* **Component library:** `components/` — shared layout components (Nav, Footer, HeroPanels, etc.)
* **Navigation Strategy:**
    * **Global Header:** Logo, Solutions, Industries, Portfolio, Insights, About, Contact
    * **Global Footer:** Info@qzenta.com · LinkedIn · X @QzentaHQ · Privacy · Terms

## 4. Live Sitemap (Current State)

*The Agent MUST update this section when a new page is successfully redesigned.*

* [x] `home` (`app/page.tsx`) — **TARGET: redesign in this loop**
* [x] `solutions` (`app/solutions/`) — existing page
* [x] `industries` (`app/industries/`) — existing page
* [x] `portfolio` (`app/portfolio/`) — existing page
* [x] `insights` (`app/insights/`) — existing page
* [x] `about` (`app/about/`) — existing page
* [x] `contact` (`app/contact/`) — existing page
* [x] `privacy` (`app/privacy/`) — existing page
* [x] `terms` (`app/terms/`) — existing page
* [x] `popia` (`app/popia/`) — existing page

## 5. The Roadmap (Backlog)

*If `next-prompt.md` is empty or completed, pick the next task from here.*

### High Priority
- [ ] **Home** — Redesign hero to dark navy split-layout with emerald accent and geometric Q logo; see Section 2 for full spec.
- [ ] **Solutions** — Redesign to match new dark navy brand; enterprise-grade service cards with emerald hover states.
- [ ] **Portfolio** — Dark card grid showcasing 5 anonymous client projects; sector tags in emerald.

### Medium Priority
- [ ] **Industries** — Sector-focus page: Finance, Legal, NGO, Property, Professional Services.
- [ ] **About** — Story page: Boutique · Africa-first · Family-operated. Dark split layout with team/ethos section.
- [ ] **Insights** — Blog/articles index in dark theme; emerald category pills.
- [ ] **Contact** — Dark contact form; emerald CTA; WhatsApp button conditional on env var.

## 6. Creative Freedom Guidelines

*When the backlog is empty, follow these guidelines to innovate.*

1. **Stay On-Brand:** Dark navy + emerald + geometric. Never introduce warm tones or bright backgrounds.
2. **Enhance Credibility:** New pages should reinforce enterprise trust signals.
3. **Africa-First:** Imagery and copy should speak to ambitious African businesses, not generic global SMEs.
4. **Naming Convention:** Use Next.js app router conventions (`app/{route}/page.tsx`).

### Ideas to Explore
*Pick one, build it, then REMOVE it from this list.*

- [ ] `case-studies` — Deep-dive anonymised client success stories
- [ ] `stack` — The Qzenta tech stack; transparency page for technical buyers
- [ ] `pricing` — Transparent pricing tiers in emerald card layout
- [ ] `status` — Infrastructure status dashboard (uptime, incidents)

## 7. Rules of Engagement

1. Do not recreate pages already marked `[x]` in Section 4 — redesign only.
2. Always update `next-prompt.md` before completing an iteration.
3. Consume ideas from Section 6 when you use them; remove them from the list.
4. Match every Stitch-generated design to the dark navy brand — reject any output with light/white backgrounds.
5. After generating a Stitch screen, save project + screen metadata to `.stitch/metadata.json`.
6. Keep the loop moving.
