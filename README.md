# Qzenta — www.qzenta.com

IT infrastructure and web services for ambitious South African businesses.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS 4 · Vercel · Cloudflare · Brevo

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

---

## Environment Variables

Copy `.env.local` and fill in your values:

| Variable | Description |
|---|---|
| `BREVO_API_KEY` | Brevo API key — get from app.brevo.com → Settings → API Keys |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number in international format, no spaces (e.g. `27821234567`) |

---

## Pages

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/portfolio` | `app/portfolio/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/resources` | `app/resources/page.tsx` |
| `/resources/[slug]` | `app/resources/[slug]/page.tsx` |
| `/privacy` | `app/privacy/page.tsx` |
| `/terms` | `app/terms/page.tsx` |

---

## Blog Posts

Blog content lives in `lib/posts.ts` as static data. To add a new post:

1. Add a new entry to the `posts` array in `lib/posts.ts`
2. The post is automatically available at `/resources/[slug]`
3. The sitemap updates automatically on the next build

---

## Contact Form (Brevo)

The contact form at `/contact` submits to `POST /api/contact`.

The API route (`app/api/contact/route.ts`) sends an email via the Brevo HTTP API.

**Before going live, update in `app/api/contact/route.ts`:**
- `sender.email` → a Brevo-verified sender on your Qzenta domain (e.g. `noreply@qzenta.com`)
- `to[0].email` → `info@qzenta.com` (once that mailbox is set up)

---

## Deployment (Vercel)

1. Push to `github.com/qzenta/qzenta-web`
2. Import the repo in Vercel (vercel.com/new)
3. Add environment variables in Vercel project settings
4. Deploy — Vercel auto-deploys on every push to `main`

**Grant Vercel access to the qzenta GitHub org:**
GitHub → Settings → Applications → Authorized OAuth Apps → Vercel → Grant access to qzenta

---

## Cloudflare DNS Setup

After Vercel deployment, point your domain to Vercel via Cloudflare:

1. Add `qzenta.com` to Cloudflare (cloudflare.com → Add a site)
2. Cloudflare scans existing DNS records — review and confirm
3. At your registrar (Axxess), update nameservers to the two Cloudflare nameservers provided
4. In Cloudflare DNS, add:
   - `CNAME` — `www` → `cname.vercel-dns.com` (proxied)
   - `CNAME` — `@` (or A record) → Vercel's IP or CNAME target
5. In Vercel, add `qzenta.com` and `www.qzenta.com` as custom domains
6. Vercel provisions SSL automatically via Let's Encrypt

DNS propagation typically takes 10–30 minutes once nameservers are updated.

Repeat for `qzenta.co.za`.

---

## Email Setup (Cloudflare Email Routing)

Once the domain is on Cloudflare:

1. Cloudflare dashboard → Email → Email Routing → Enable
2. Add a routing rule: `info@qzenta.com` → forward to `daniel@sikatrix.com` (or any inbox)
3. Add a routing rule: `daniel@qzenta.com` → forward to personal inbox
4. Verify the destination email address
5. Update `app/api/contact/route.ts` sender and recipient accordingly

---

## Repo Transfer (when ready)

This repo belongs at `github.com/qzenta/qzenta-web`. Transfer steps:
- Repo → Settings → Danger Zone → Transfer → select qzenta org
- Vercel → Project → Settings → Git → Disconnect → Reconnect to `qzenta/qzenta-web`
- Verify live deployment after transfer
