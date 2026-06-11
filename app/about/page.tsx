import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Qzenta is a South African IT services entity — family-operated, boutique, and focused on building reliable digital infrastructure for growing businesses.",
  openGraph: { url: "https://www.qzenta.com/about" },
};

const values = [
  {
    title: "Ownership",
    desc: "We treat every project as if it were our own. Domains get renewed. SSL certificates don't expire. Deployments get verified before we call something done.",
  },
  {
    title: "Simplicity",
    desc: "The best infrastructure is infrastructure you don't think about. We favour clean, maintainable setups over over-engineered complexity.",
  },
  {
    title: "Transparency",
    desc: "Every project is documented. Every decision is explained. You always know what's running, what it costs, and how to take ownership if you need to.",
  },
  {
    title: "Longevity",
    desc: "We build for the long term. Technology choices are made with maintainability in mind — not just what's trendy.",
  },
];

const stack = [
  { name: "Next.js", role: "Frontend" },
  { name: "Vercel", role: "Deployment" },
  { name: "Cloudflare", role: "DNS & CDN" },
  { name: "GitHub", role: "Source Control" },
  { name: "Brevo", role: "Email" },
  { name: "MailerLite", role: "Newsletter" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="About Qzenta"
        sub="Family-operated. South African. Built to last."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Team collaboration"
        overlay="from-[#0d1829]/88 via-[#0d1829]/65 to-[#0d1829]/30"
      />

      {/* Story */}
      <section id="story" className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#e2e8f0] text-lg leading-relaxed">
              Qzenta was established in May 2026 as a dedicated IT services entity — a proper home
              for the kind of infrastructure work that every growing business accumulates but few
              businesses manage intentionally.
            </p>
            <p className="mt-5 text-[#94a3b8] leading-relaxed">
              The logic was simple: good IT infrastructure deserves its own structure. Managing domains,
              hosting, deployments, and digital operations as a side function of other business
              activity made no sense. Qzenta gives it a name, a mandate, and the attention it deserves.
            </p>
            <p className="mt-5 text-[#94a3b8] leading-relaxed">
              We are a boutique operation — deliberately so. We work with a small number of clients at a
              time, which means every project gets the attention it deserves. No ticket queues. No
              account managers between you and the person doing the work.
            </p>
            <p className="mt-5 text-[#94a3b8] leading-relaxed">
              Our stack is consistent across every project: Next.js for the frontend, Vercel for
              deployment, Cloudflare for DNS and security, Brevo for transactional email. This
              consistency means fewer moving parts, faster troubleshooting, and infrastructure that
              anyone on the team can pick up.
            </p>
          </div>

          {/* Story image */}
          <div className="relative h-[460px] rounded-xl overflow-hidden border border-[#2d4060]">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Professional working on a laptop"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1829]/80 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-slate-200 text-sm italic leading-relaxed">
              &ldquo;Your technology should work quietly so you can work loudly.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* City banner */}
      <section className="px-4 sm:px-6 lg:px-8 pb-4 max-w-7xl mx-auto">
        <div className="relative h-52 sm:h-72 rounded-xl overflow-hidden border border-[#2d4060]">
          <Image
            src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1400&q=80"
            alt="Johannesburg city skyline — Qzenta's home base"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0d1829]/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[#f1f5f9] text-lg sm:text-2xl font-semibold tracking-wide text-center px-4">
              Built in South Africa. Built for Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="px-4 sm:px-6 lg:px-8 py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            What we believe
          </p>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-10">How we approach the work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#1e2d45] rounded-lg p-6 border border-[#2d4060] hover:border-emerald-500/40 transition-all"
              >
                <h3 className="font-semibold text-[#f1f5f9] text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-[#94a3b8] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section id="stack" className="px-4 sm:px-6 lg:px-8 py-20 border-t border-[#2d4060]">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Standard tooling
          </p>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-3">Our standard stack</h2>
          <p className="text-[#94a3b8] mb-10 max-w-xl leading-relaxed">
            Consistent tooling across every project means faster delivery and easier handoffs.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stack.map((tech) => (
              <div
                key={tech.name}
                className="bg-[#1e2d45] rounded-lg p-4 border border-[#2d4060] text-center hover:border-emerald-500/40 transition-all"
              >
                <p className="font-semibold text-[#f1f5f9] text-sm">{tech.name}</p>
                <p className="mt-1 text-xs text-[#64748b]">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#111827] border-t border-[#2d4060]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#f1f5f9]">Work with us</h2>
          <p className="mt-3 text-[#94a3b8] max-w-md mx-auto">
            If you need reliable IT infrastructure from people who care about the detail, let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-8 py-3.5 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
