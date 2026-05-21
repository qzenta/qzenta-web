export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "sme-dedicated-it-partner",
    title: "Why Every SME Needs a Dedicated IT Partner",
    excerpt:
      "Running a small or medium business is hard enough without juggling domains, hosting, emails, and security. Here's why outsourcing your IT infrastructure pays off.",
    date: "2026-05-20",
    readTime: "5 min read",
    content: `
Managing a growing business means wearing many hats. But when your hat collection includes "domain registrar troubleshooter," "SSL certificate renewer," and "mystery email bounce investigator," something has gone wrong.

IT infrastructure — the plumbing behind your website, email, and digital presence — is not a one-time setup task. It requires ongoing attention, timely renewals, and someone who understands how all the pieces fit together.

## The hidden cost of DIY IT

Most SME owners underestimate the time and cognitive load of managing their own tech stack. A single misconfigured DNS record can take your website offline for 24–48 hours. An expired SSL certificate can push customers to a browser warning screen before they even see your homepage.

These aren't edge cases. They happen to businesses that don't have a dedicated person watching for them.

## What a dedicated IT partner actually does

A good IT partner doesn't just "fix things when they break." They:

- Set up infrastructure correctly from day one
- Monitor for renewals, outages, and security issues
- Handle migrations without downtime
- Keep your stack lean and cost-efficient
- Free you to focus on what you actually do

## The cost argument

The question isn't whether you can afford a dedicated IT partner. It's whether you can afford the alternative — lost sales from a broken website, lost trust from a security incident, or lost hours chasing a problem that should never have existed.

For most SMEs, the maths is simple. The cost of a structured IT relationship is a fraction of what a single preventable incident costs.
    `.trim(),
  },
  {
    slug: "cloudflare-free-website-security",
    title: "Cloudflare: The Free Tool That Makes Your Website Faster and Safer",
    excerpt:
      "Cloudflare sits between your website and the internet, blocking threats and speeding up delivery — all on a free plan that most businesses never outgrow.",
    date: "2026-05-20",
    readTime: "4 min read",
    content: `
If your website is not behind Cloudflare, you are leaving performance and security on the table — for free.

Cloudflare is a Content Delivery Network (CDN) and security platform that sits between your visitors and your web server. It proxies all traffic through its global network, which has two immediate effects: your website loads faster for users everywhere, and malicious traffic gets filtered before it ever reaches your server.

## What the free plan gives you

Cloudflare's free tier is genuinely excellent for most small businesses:

- **DDoS protection** — automatic mitigation of distributed denial-of-service attacks
- **CDN** — your static assets are cached at data centres around the world
- **SSL/TLS** — free HTTPS for your domain, managed automatically
- **DNS management** — fast, reliable DNS with a clean dashboard
- **Analytics** — traffic insights without JavaScript trackers on your site

## How DNS migration works

Moving to Cloudflare is a one-time process:

1. Add your domain to Cloudflare
2. Cloudflare scans your existing DNS records
3. You update your domain's nameservers at your registrar to point to Cloudflare
4. Within 24 hours, all traffic flows through Cloudflare

From that point, you manage DNS inside Cloudflare's dashboard — which is far cleaner than most registrar interfaces.

## The registrar cost saving

Cloudflare also operates as a domain registrar at cost price — no markup. For businesses with multiple domains, migrating registration to Cloudflare can save hundreds of rand per year compared to traditional registrars.

At Qzenta, Cloudflare is a standard part of every infrastructure setup we deliver.
    `.trim(),
  },
  {
    slug: "registration-to-go-live-south-africa",
    title: "From Registration to Go-Live: Building Your Digital Presence in South Africa",
    excerpt:
      "A practical walkthrough of everything involved in getting a South African business online — from domain registration to a live, indexed website.",
    date: "2026-05-20",
    readTime: "6 min read",
    content: `
Getting a South African business online involves more moving parts than most founders expect. This is a practical breakdown of the full journey — from registering your domain to having a live, search-engine-indexed website.

## Step 1: Domain registration

You need a domain name. For South African businesses, both a .co.za and a .com are worth registering if the names are available. The .co.za signals local presence; the .com gives you flexibility for future growth.

Register through a reputable registrar. Axxess and Afrihost are common local options. Cloudflare Registrar is the most cost-efficient for .com domains.

## Step 2: DNS setup

Once your domain is registered, point its nameservers to Cloudflare. This gives you fast, reliable DNS management and automatic DDoS protection from day one.

## Step 3: Hosting and deployment

For most South African SMEs in 2026, Vercel is the best hosting choice for web applications and marketing sites. It is free for individual projects, deploys directly from GitHub, and has excellent performance globally — including in Africa.

Pair Vercel with a GitHub repository and you have version-controlled deployments that can roll back in seconds.

## Step 4: Email setup

A business email (you@yourcompany.co.za) is non-negotiable for credibility. The most cost-efficient setup for small businesses:

- **Brevo** for transactional email (contact forms, automated notifications) — free tier is generous
- **Cloudflare Email Routing** to forward your domain email to an existing inbox — free

## Step 5: SEO foundations

Before you launch, ensure:

- Every page has a unique title and meta description
- You have a sitemap.xml submitted to Google Search Console
- Your robots.txt is correctly configured
- Your site loads in under 3 seconds on mobile

## Step 6: Go live checklist

- SSL certificate active (Cloudflare handles this automatically)
- All pages reachable and returning 200 status
- Contact form tested end-to-end
- Google Search Console set up and sitemap submitted
- Analytics configured (privacy-respecting options: Plausible, Fathom, or Cloudflare Web Analytics)

The full process, done properly, takes 2–5 business days. Done hastily, it takes months of fixing things that should have been right from the start.
    `.trim(),
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
