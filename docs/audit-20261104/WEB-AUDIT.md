Live site not reachable: www.qzenta.com and qzenta.com were both refused by this session's network policy, so this audit is from source only (master at bda5573).

# Qzenta Web Audit, 4 Nov 2026

Report only. No existing file, dependency or deployment setting was changed. Contrast ratios were computed from the hex values in `app/globals.css` and Tailwind defaults using the WCAG 2.x relative luminance formula. Layout widths at 360, 390 and 768 px are estimated from Tailwind classes, not measured in a browser.

## Verdicts

1. **Mobile:** Mostly sound below 768 px (single column grids, no fixed page widths); the desktop nav switches on at exactly 768 px where it likely does not fit, and carousel dots are below the 24 px target size.
2. **Accessibility (WCAG 2.2 AA):** Fails. Legal page headings are near invisible, the emerald and spring green palette fails text contrast on white in many places, the assessment form has unlabelled fields, and dark mode never activates.
3. **SEO:** Partial. Titles, descriptions, sitemap, robots, OG image and Organization JSON-LD exist; canonical tags are missing everywhere and page level Open Graph blocks wipe out the shared OG fields.
4. **Slogan:** One rendered violation (About page title) plus a CSS uppercase transform in the footer; four internal docs, including CLAUDE.md, still state "Quietly Excellent".
5. **Redirect:** No apex to www redirect exists in code or repo config; it must live in Vercel domain settings and could not be verified live.
6. **Dependencies:** Read only lockfile audit ran without install: 26 vulnerable packages (1 critical, 8 high, 16 moderate, 1 low); the critical one is `next` 16.2.6, fixable by a non-major bump to 16.4.5.

## Findings

Severity: Critical, High, Medium, Low. "Deps" = fix touches package.json or lockfile. "Gov" = needs governance approval (brand, design direction, Vercel or DNS settings, dependency change).

| ID | Area | Evidence (file:line) | Severity | Smallest fix | Deps | Gov |
|---|---|---|---|---|---|---|
| DEP-01 | Dependencies | `package.json:13` pins `next` 16.2.6; lockfile audit lists 22 Next.js advisories in range, including a critical middleware/proxy bypass (App Router, Turbopack) and a Server Actions DoS | Critical | Bump `next` (and `eslint-config-next`) to 16.4.5, rebuild, smoke test all routes | Yes | Yes |
| A11Y-01 | Contrast | Legal headings use `text-onyx-50` (#F2F8F7) on the white body, 1.07:1: `app/privacy/page.tsx:22,32,41,50,58,70,77`, `app/terms/page.tsx:22,32,41,49,58,66`, `app/popia/page.tsx:17,29` and later h2s; hover state `hover:text-onyx-50` on "Back to home" (`privacy:14`, `terms:14`) | High | Change to `text-onyx-950 dark:text-onyx-50` | No | No |
| A11Y-02 | Theme toggle | `components/ThemeToggle.tsx` is never imported; `app/layout.tsx:58` sets no `dark` class and there is no pre-paint script reading the stored theme, so every `dark:` variant is dead code. Inner pages were authored dark first and render in light mode only. If mounted, `ThemeToggle.tsx:18-20` returns dark on the server, so label and icon would be wrong for light users until hydration; icon colour `text-onyx-300` is 2.6:1 on white (`ThemeToggle.tsx:38`) | High | Decide direction: either light only (strip dark first classes) or mount the toggle in Nav with an inline init script that honours stored choice and `prefers-color-scheme` | No | Yes |
| A11Y-03 | Forms | Assessment form labels have no `htmlFor` and inputs have no `id`, so fields have no accessible name beyond placeholder: `components/AssessmentForm.tsx:65-74,79-87,92-99` | High | Add matching `id` and `htmlFor` to each of the three fields | No | No |
| A11Y-04 | Forms | Assessment form always shows success, even when the webhook variable is unset or the request fails: `components/AssessmentForm.tsx:27-39` (WCAG 3.3.1, misleading status) | High | Only set success on a 2xx response; otherwise show an error with `role="alert"` | No | No |
| A11Y-05 | Forms | Contact form error text is `text-red-400` on white, 2.77:1; not announced (no `role="alert"` or live region) and not linked to fields: `components/ContactForm.tsx:130-132` | High | Use `text-red-700`, add `role="alert"`; optionally `aria-describedby` on inputs | No | No |
| FORM-01 | Forms | Contact API returns "Server configuration error" when the Brevo key variable is absent (`app/api/contact/route.ts:16-19`); CLAUDE.md lists this as a known production issue, so the form is broken live | High | Add the Brevo key variable in the Vercel project environment and redeploy | No | Yes |
| A11Y-06 | Contrast | Primary CTAs use white on `emerald-500`, 2.54:1 for 14 px semibold text: `components/Nav.tsx:290,413`, `components/Footer.tsx:67`, `components/HeroCarousel.tsx:165` | High | Use `text-onyx-950` on the green (spring-500 gives 12.49:1) or darken background to `emerald-700` | No | Yes |
| A11Y-07 | Contrast | Spring green text on white surfaces: `spring-400` 1.39:1, `spring-500` 1.44:1. About 70 uses, for example `app/about/page.tsx:62` (section has no background), `app/solutions/page.tsx:150`, `app/contact/page.tsx:35`, `components/ContactForm.tsx:44,53,69,84,116`. Fine on dark sections such as `components/PageHero.tsx:37` (11.8:1 on onyx-900) | High | Introduce a dark accent token for text on light (spring-900 range) and swap only light surface uses; even `spring-700` is 3.37:1 | No | Yes |
| DEP-02 | Dependencies | Transitive high advisories: `sharp` (libvips CVEs), `postcss` (stringify XSS, sourceMappingURL file read), `nanoid`, `brace-expansion`, `browserslist`, `js-yaml`, `source-map-js`, `zod`; npm reports the fix path for `sharp` and `postcss` is the same `next` 16.4.5 bump | High | Covered by DEP-01 for runtime packages; re-run lockfile audit after the bump | Yes | Yes |
| MOB-01 | Mobile, nav | Desktop nav shows from `md` (768 px): `components/Nav.tsx:249,297,311,343`. Estimated content (logo about 110 px, five `whitespace-nowrap` items with `px-3`, CTA with `ml-3`) is about 790 px against 736 px available at 768 px, so items likely wrap or overflow | Medium | Move breakpoint to `lg` (`hidden lg:flex`, `lg:hidden`, flyout `hidden lg:block`) and verify at 768 px | No | No |
| MOB-02 | Mobile, tap targets | Carousel dot buttons are 10 x 10 px (`w-2.5 h-2.5`), below the 24 px minimum in WCAG 2.5.8: `components/HeroCarousel.tsx:194-195` | Medium | Wrap each dot in a 24 px (`p-2` or `min-w-6 min-h-6`) button, keep visual dot inside | No | No |
| A11Y-08 | Focus | Contact inputs remove the outline and only change border to `spring-500`, 1.44:1 against white, so focus is barely visible: `components/ContactForm.tsx:62` | Medium | Add `focus-visible:ring-2 focus-visible:ring-onyx-950` (or the new dark accent) | No | No |
| A11Y-09 | Contrast | `emerald-600` small text on white, 3.77:1: active nav items `components/Nav.tsx:257,279`, prices `Nav.tsx:332`, drawer badge `Nav.tsx:369`, footer slogan `components/Footer.tsx:60` | Medium | Use `emerald-700` (about 5.5:1) | No | Yes |
| A11Y-10 | Motion | Hero carousel auto advances; pause only on hover or focus, no visible pause control (WCAG 2.2.2), and the `aria-live="polite"` region announces every automatic change: `components/HeroCarousel.tsx:79-90,113-137`. Reduced motion is respected for autoplay and slide animations (good) | Medium | Add a pause or play button; set `aria-live="off"` while auto rotating | No | No |
| A11Y-11 | Nav | Submenu buttons lack `aria-expanded` and `aria-controls` (`components/Nav.tsx:252-254`); hamburger lacks `aria-expanded` (`Nav.tsx:298-302`); no Escape to close; outside click uses mousedown only (`Nav.tsx:169-177`) | Medium | Add `aria-expanded`, `aria-controls`, and an Escape key handler | No | No |
| A11Y-12 | Keyboard | No skip link before the sticky header (WCAG 2.4.1): `app/layout.tsx:68-69` | Medium | Add a visually hidden "Skip to content" link targeting `<main id="main">` | No | No |
| SEO-01 | Canonical | No `alternates.canonical` in root metadata (`app/layout.tsx:12-36`) or any page | Medium | Add `alternates: { canonical: "/" }` in layout and a path per page; resolves against `metadataBase` | No | No |
| SEO-02 | Open Graph | Pages set `openGraph: { url }` only (for example `app/about/page.tsx:11`, `app/solutions/page.tsx:11`, `app/contact/page.tsx:9`, `app/page.tsx:27`). Next.js replaces nested `openGraph` objects rather than merging, so these pages lose `og:type`, `og:site_name`, `og:locale` and `og:description` from `app/layout.tsx:25-32`. Confirm in build output | Medium | Export a shared OG object from one module and spread it per page, adding page title and description | No | No |
| SEO-03 | Blog SEO | Post metadata has only title and description: `app/insights/[slug]/page.tsx:16-19`. No `og:type` article, published time, canonical or BlogPosting JSON-LD | Medium | Add `openGraph` (type article, url, publishedTime) and `alternates.canonical` in `generateMetadata`; add BlogPosting JSON-LD | No | No |
| SLO-01 | Slogan | About page title uses "Quietly Excellent" in Title Case: `app/about/page.tsx:8`; appears in the browser tab and search results | Medium | Lowercase to "quietly excellent" | No | Yes |
| MOB-03 | Mobile, nav | Utility bar shows from `md` and packs location, three links, a mailto link and GitHub into one row at 768 px: `components/Nav.tsx:194-229` | Low | Show from `lg` only | No | No |
| MOB-04 | Mobile, nav | Mobile drawer sits inside the sticky header with no max height or scroll (`components/Nav.tsx:192,344`); on short viewports (phone landscape) lower links are cut off | Low | Add `max-h-[calc(100dvh-4rem)] overflow-y-auto` to the drawer | No | No |
| A11Y-13 | Contrast | 10 to 11 px `slate-400` text on white, 2.56:1: `components/Nav.tsx:346,381,428` | Low | Use `slate-600` and at least 12 px | No | No |
| A11Y-14 | Motion | `.hero-pan` infinite animation and `scroll-behavior: smooth` have no reduced motion guard: `app/globals.css:29-42` (`.hero-pan` is currently unused). Marquees guard correctly (`components/TrustBar.tsx:47-48`, `components/ServiceTagMarquee.tsx:43-45`) | Low | Wrap both in `@media (prefers-reduced-motion: no-preference)` | No | No |
| A11Y-15 | Headings | Home page has an h3 before the first h2 (`app/page.tsx:211` vs `:225`); footer column headings are h3 with no h2 (`components/Footer.tsx:85,104,123,142,161`); home h1 changes with each carousel slide (`components/HeroCarousel.tsx:145-150`) | Low | Promote trust bar and footer headings to h2 (or use `p`); keep a static h1 and make slide titles h2 | No | No |
| SEO-04 | Meta tags | Root `openGraph` has no `title`; `twitter` has only `card` (`app/layout.tsx:25-35`) | Low | Add explicit `openGraph.title`, `twitter.title`, `twitter.description` | No | No |
| SEO-05 | Titles | About title repeats the brand once the template adds the suffix (`app/about/page.tsx:8` with `app/layout.tsx:15`); several titles exceed about 60 characters after the suffix | Low | Shorten page titles and drop "Qzenta" where the template adds it | No | No |
| SEO-06 | Structured data | Organization JSON-LD (`app/layout.tsx:38-54`) has no `sameAs` (GitHub) and no `WebSite` node | Low | Add `sameAs` and a `WebSite` object | No | No |
| SEO-07 | Sitemap | Static routes use `new Date()` for `lastModified`, so every build claims every page changed: `app/sitemap.ts:8-19` | Low | Use fixed dates or omit `lastModified` for static pages | No | No |
| SEO-08 | Internal links | Three different submenu labels point to the same anchor `/solutions#domains` (`components/Nav.tsx:51,58,65`); `/portfolio` is labelled "Portfolio" and "Projects" in the same header (`Nav.tsx:137-148`) | Low | Give each submenu item its own anchor, use one label per URL | No | No |
| SLO-02 | Slogan | Footer source text is lowercase but the `uppercase` class renders it as capitals, and it carries a trailing full stop: `components/Footer.tsx:60-61` | Low | Remove `uppercase` (and the full stop if the approved form excludes it) | No | Yes |
| SLO-03 | Slogan, docs | Internal docs state "Quietly Excellent": `CLAUDE.md:8`, `.stitch/SITE.md:17`, `docs/messaging.md:5,14,82`, `docs/site-architecture.md:6,77,175,228`. CLAUDE.md conflicts with the approved lowercase slogan | Low | Update docs after the brand owner confirms lowercase as the single source of truth | No | Yes |
| RED-01 | Redirect | No host redirect in code: `next.config.ts:12-35` has only path redirects (resources, services, industries); no middleware or proxy file; no `vercel.json`. All canonical signals use www (`app/layout.tsx:19`, `app/sitemap.ts:4`, `app/robots.ts:10`). Apex handling therefore depends on Vercel domain settings with Cloudflare DNS only; not verifiable from this session | Low | Confirm in Vercel that the apex domain is set to a 308 redirect to www; no code change needed | No | Yes |
| DEP-03 | Dependencies | 16 moderate and 1 low advisories are in the dev only lint chain (`eslint`, `typescript-eslint`, `minimatch`, `@babel/core`, `baseline-browser-mapping`); not shipped to the browser | Low | Update lint tooling in a separate dependency change | Yes | Yes |

Correct slogan uses (no action): `components/Nav.tsx:240`, `components/Footer.tsx:51`, `app/layout.tsx:31`, `app/opengraph-image.tsx:4,120`, and the `<title>` in all four SVGs under `public/brand/`.

Alt text check: content images have alt text (`app/solutions/page.tsx:241`, `app/portfolio/page.tsx:98`, logos); `components/PageHero.tsx:25-30` defaults to empty alt with `aria-hidden`, which is correct for decorative heroes. No finding.

## Counts

Critical 1, High 9, Medium 11, Low 14. Total 35.

## Fixes that could ship as metadata only changes

- SEO-01: canonical tags via `alternates.canonical`
- SEO-02: shared Open Graph object spread into each page's `metadata`
- SEO-03: article Open Graph fields and canonical in the insights `generateMetadata`
- SEO-04: explicit Open Graph and Twitter title and description in root metadata
- SEO-05: shorter page titles without the duplicated brand
- SEO-06: `sameAs` and `WebSite` nodes in the existing JSON-LD block
- SEO-07: stable `lastModified` values in `app/sitemap.ts`
- SLO-01: lowercase slogan in the About page title (needs brand sign off)
