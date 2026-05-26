# Design System: Qzenta
**Stitch Project ID:** TBD — update after first `create_project` call

---

## 1. Visual Theme & Atmosphere

Qzenta's visual language is **dark, geometric, and enterprise-grade**. The canvas is deep navy — not black, not charcoal — giving a sense of depth and premium authority. Emerald green cuts through as the sole accent colour, providing energy and confidence without noise. The overall mood is BCX.co.za meets African fintech: structured, credible, ambitious.

Density is medium-high: enough whitespace to breathe, enough content to project competence. No gradients except subtle emerald glows on interactive elements. No illustrations except the geometric Q-mark logo. Typography is the primary design element.

---

## 2. Color Palette & Roles

| Swatch | Hex | Role |
|--------|-----|------|
| **Navy Canvas** | `#1a2236` | Page background — dominant surface |
| **Navy Card** | `#1e2d45` | Elevated card/surface backgrounds |
| **Navy Border** | `#2d4060` | Structural dividers, card borders |
| **Emerald** | `#10b981` | Primary accent: CTAs, active states, highlights, icons |
| **Emerald Hover** | `#059669` | CTA hover/pressed state |
| **Emerald Glow** | `rgba(16,185,129,0.12)` | Subtle glow on cards on hover |
| **Off-White** | `#f1f5f9` | Primary text — headlines, body on dark backgrounds |
| **Slate** | `#94a3b8` | Secondary text — subheadings, captions, labels |
| **Slate Dark** | `#64748b` | Tertiary text — metadata, placeholder copy |
| **White** | `#ffffff` | Emphasis text within buttons |

---

## 3. Typography Rules

* **Font Family:** Geist Sans (primary) with system sans-serif fallback
* **Headline XL:** 56–72px, weight 800 (extrabold), tight letter-spacing (−0.02em), `#f1f5f9`
* **Headline L:** 36–48px, weight 700 (bold), `#f1f5f9`
* **Headline M:** 24–32px, weight 600 (semibold), `#f1f5f9`
* **Body:** 16–18px, weight 400, line-height 1.7, `#94a3b8`
* **Label / Tag:** 11–12px, weight 600, uppercase, letter-spacing 0.08em, `#10b981`
* **Stat Value:** 40–48px, weight 800, `#10b981`
* **Stat Label:** 12px, weight 500, uppercase, `#64748b`

---

## 4. Component Stylings

* **Primary Button:** Background `#10b981`, text white, font-weight 600, padding `14px 28px`, border-radius `6px`, no border. Hover: background `#059669`, subtle upward translate.
* **Ghost Button:** Background transparent, border `1.5px solid #10b981`, text `#10b981`, same padding/radius. Hover: background `rgba(16,185,129,0.08)`.
* **Cards:** Background `#1e2d45`, border `1px solid #2d4060`, border-radius `8px`, padding `24–32px`. Hover: border-color `#10b981`, box-shadow `0 0 24px rgba(16,185,129,0.10)`.
* **Stat Cards:** No border. Stat value in emerald, label in slate. No background — sits directly on canvas.
* **Tags / Pills:** Background `rgba(16,185,129,0.10)`, text `#10b981`, border-radius `4px`, padding `4px 10px`, font-size `11px`, uppercase, letter-spacing wide.
* **Section Dividers:** `1px solid #2d4060` or a subtle emerald line accent on section headings.

---

## 5. Layout Principles

* **Max content width:** 1280px, centred with horizontal padding `24px` (mobile) → `48px` (desktop).
* **Hero:** Full-width split layout. Left 55%: headline + subheadline + CTAs. Right 45%: geometric Q-mark logo / abstract illustration with emerald speed lines.
* **Stats bar:** 4-column row below hero. Stat value large in emerald, label in slate, separated by subtle vertical dividers.
* **Section spacing:** `80–120px` vertical padding between sections.
* **Grid:** 12-column base. Service cards: 4-up on desktop, 2-up on tablet, 1-up on mobile.
* **No harsh drop shadows** — use border + glow for elevation instead.
* **Geometric accents:** Thin angled lines, grid-dot backgrounds, or subtle corner brackets on section headings to reinforce infrastructure/precision theme.

---

## 6. Design System Notes for Stitch Generation

**Copy this entire block into every baton prompt without modification:**

```
**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first
- Theme: Dark, geometric, enterprise-grade
- Background: Deep navy (#1a2236) — dominant canvas, not black
- Surface: Elevated navy (#1e2d45) for cards and panels
- Border: Structural slate-navy (#2d4060) for card edges and dividers
- Primary Accent: Emerald green (#10b981) — CTAs, active states, highlights
- Accent Hover: Deeper emerald (#059669)
- Text Primary: Off-white (#f1f5f9) — headlines and body
- Text Secondary: Slate (#94a3b8) — supporting copy and labels
- Font: Geist Sans, extrabold headlines (800), semibold subheadings (600), regular body (400)
- Headline Style: Very large, tight letter-spacing, dominant visual weight
- Buttons: Primary = emerald fill, Ghost = emerald outline; 6px border-radius; 14px/28px padding
- Cards: Navy surface (#1e2d45), slate-navy border, emerald glow on hover (no harsh shadows)
- Tags/Pills: Emerald tint background, emerald text, uppercase, small, wide letter-spacing
- Layout: Split-column hero; 12-column grid; 1280px max-width; generous vertical spacing (80–120px between sections)
- Geometric accents: Angular speed lines, grid-dot textures, corner brackets — reinforce infrastructure/precision
- No white backgrounds. No warm tones. No gradients except subtle emerald glow on interactive elements.
- Inspired by: BCX.co.za — enterprise authoritative + African digital ambition
```
