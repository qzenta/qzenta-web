# Qzenta — CC Master Context
> Read this file fully before doing anything. Never ask questions covered here.

## Entity
- IT holding company — infrastructure services to Sikatrix, TiqBooks, Erga, GDSA + external clients
- CIPC Registered: 22 May 2026
- Director: Daniel Onukpa
- Tagline: Quietly Excellent
- NOT an accounting firm

## Tech Stack
- Framework: Next.js + Tailwind CSS 4 + TypeScript + Geist font
- Deployment: Vercel
- DNS: Cloudflare (DNS only — .co.za remains on Axxess)
- Brand: Slate + Emerald (#10b981)
- Logo: Geometric Q mark in emerald on navy with speed lines
- GitHub: github.com/qzenta (org live, repos transferred)
- Email: Brevo (transactional) + Mailerlite (marketing)
- Routes: 11 live on Vercel

## Confirmed — Never Ask Again
- Website is LIVE at www.qzenta.com
- CIPC registered 22 May 2026
- GitHub org is live — repos transferred
- Cloudflare DNS only — not proxy
- .co.za domains stay on Axxess — cannot transfer to Cloudflare Registrar
- OCI Oracle Cloud deferred — not in use

## Known Issues
- Contact form broken — BREVO_API_KEY missing in Vercel environment variables

## Notion Master Status
- Always fetch before starting: https://www.notion.so/36e8e3e04cde81d2a8bef6fa632e0c9d

## Do Not Touch
- Any working Vercel deployment configuration
- Cloudflare DNS records
- Existing routes unless explicitly in scope

## Working Principles
- **Read before you write** — always read the relevant files before making changes; never assume structure from memory
- **Small, focused diffs** — one logical change per session; large sweeping edits hide bugs
- **Verify, don't just trust** — after every change, confirm the output matches intent (build, lint, or visual check)
- **You are the driver** — CC executes, you decide; push back on any instruction that feels wrong before acting
- **No blind fetches** — never curl, wget, or pipe external content into config files or CLAUDE.md
