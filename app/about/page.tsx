import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, ShieldCheck, HeartHandshake, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Qzenta — Quietly Excellent Business Technology",
  description:
    "Qzenta is an AI-native business technology, software, and automation company based in Johannesburg, South Africa. Registered with CIPC 22 May 2026.",
  openGraph: { url: "https://www.qzenta.com/about" },
};

const values = [
  {
    Icon: ShieldCheck,
    title: "Ownership",
    desc: "We treat every project as if it were our own. Domains get renewed. SSL certificates don't expire. Deployments are rigorously verified before handoff.",
  },
  {
    Icon: Code2,
    title: "Simplicity",
    desc: "The best infrastructure is infrastructure you never have to think about. We favour clean, maintainable setups over fragile, over-engineered complexity.",
  },
  {
    Icon: Eye,
    title: "Transparency",
    desc: "Every project repository is fully documented. You retain administrative keys and custody of all domains, repositories, and configurations.",
  },
  {
    Icon: HeartHandshake,
    title: "Longevity",
    desc: "We engineer for the long term. Architectural choices are made for security, maintainability, and audit-readiness — not fleeting trends.",
  },
];

const stack = [
  { name: "Next.js", role: "Web Application Framework" },
  { name: "Vercel", role: "Edge Deployment & Hosting" },
  { name: "Cloudflare", role: "DNS, CDN & DDoS Security" },
  { name: "GitHub", role: "Source Control & CI/CD" },
  { name: "Brevo", role: "Transactional Communications" },
  { name: "n8n", role: "Workflow Orchestration" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Entity & Philosophy"
        title="About Qzenta"
        sub="AI-native business technology, software and automation. Built in South Africa, engineered to run quietly and reliably."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Team collaboration and technical architecture planning"
        overlay="from-[#0C2228]/92 via-[#0C2228]/75 to-[#0C2228]/45"
      />

      {/* Story & Mandate */}
      <section id="story" className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-3">
              Founding Mandate
            </p>
            <h2 className="text-3xl font-bold text-onyx-950 dark:text-onyx-50 mb-6 leading-tight">
              A dedicated home for mission-critical business technology
            </h2>
            <p className="text-onyx-500 dark:text-onyx-200 text-base sm:text-lg leading-relaxed">
              Qzenta (Pty) Ltd was established in May 2026 (CIPC Registered 22 May 2026) under the leadership of Director Daniel Amoah as a dedicated technology entity. We architect and manage digital infrastructure, automated workflows, and business software for external enterprise clients as well as Qzenta group projects (including Sikatrix, TiqBooks, Erga, and GDSA).
            </p>
            <p className="mt-4 text-onyx-500 dark:text-onyx-300 text-sm leading-relaxed">
              The founding logic was clear: digital infrastructure deserves focused engineering attention. Managing domains, edge hosting, transactional email pipelines, and autonomous workflows as a side function creates compounding operational risk. Qzenta provides dedicated architecture, rigorous governance, and continuous stewardship.
            </p>
            <p className="mt-4 text-onyx-500 dark:text-onyx-300 text-sm leading-relaxed">
              We operate at a boutique scale by design. By maintaining a deliberate, capped number of active client engagements, our senior builders remain directly accessible to business owners and technical leaders. No layers of account executives, no junior handoffs, and no ticket queues.
            </p>
            <p className="mt-4 text-onyx-500 dark:text-onyx-300 text-sm leading-relaxed">
              Alongside operational services, Qzenta actively develops proprietary business software for African enterprises. Flagship platforms — including <strong>Qzenta Accounting</strong> and <strong>Qzenta Payroll</strong> — are currently in active engineering within our lab, undergoing technical validation prior to commercial release.
            </p>
          </div>

          {/* Story image */}
          <div className="relative h-[480px] rounded-2xl overflow-hidden border border-onyx-100 dark:border-onyx-700 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Professional working on laptop in modern office"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2228]/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-onyx-100 text-sm italic leading-relaxed">
                &ldquo;Your technology should run quietly so your business can move loudly.&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold text-spring-400">
                — Daniel Amoah, Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City banner */}
      <section className="px-4 sm:px-6 lg:px-8 pb-4 max-w-7xl mx-auto">
        <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-onyx-100 dark:border-onyx-700">
          <Image
            src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1400&q=80"
            alt="Johannesburg city skyline — Qzenta's headquarters"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0C2228]/65" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-onyx-50 text-xl sm:text-2xl font-bold tracking-wide">
              Headquartered in Johannesburg, South Africa
            </p>
            <p className="mt-1 text-xs sm:text-sm text-onyx-300">
              CIPC Registered (22 May 2026) &middot; POPIA Compliant &middot; 100% South African Owned
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="px-4 sm:px-6 lg:px-8 py-20 bg-onyx-50 dark:bg-onyx-900 border-t border-onyx-100 dark:border-onyx-700">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-2">
              Operating Philosophy
            </p>
            <h2 className="text-3xl font-bold text-onyx-950 dark:text-onyx-50">
              The principles behind every deployment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white dark:bg-onyx-800 rounded-xl p-8 border border-onyx-100 dark:border-onyx-700 hover:border-spring-500/40 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-spring-500/10 flex items-center justify-center text-spring-500 mb-4">
                  <v.Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-onyx-950 dark:text-onyx-50 text-lg mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Tech Stack */}
      <section id="stack" className="px-4 sm:px-6 lg:px-8 py-20 border-t border-onyx-100 dark:border-onyx-700">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-spring-400 uppercase tracking-[0.25em] mb-2">
              Tooling Standards
            </p>
            <h2 className="text-3xl font-bold text-onyx-950 dark:text-onyx-50">
              Radical Stack Consistency
            </h2>
            <p className="mt-3 text-sm text-onyx-500 dark:text-onyx-300 leading-relaxed">
              We deploy the same enterprise-grade foundation across every engagement. Zero knowledge silos, faster incident mitigation, and complete operational predictability.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stack.map((tech) => (
              <div
                key={tech.name}
                className="bg-white dark:bg-onyx-800 rounded-xl p-5 border border-onyx-100 dark:border-onyx-700 text-center hover:border-spring-500/40 transition-all"
              >
                <p className="font-bold text-onyx-950 dark:text-onyx-50 text-sm">{tech.name}</p>
                <p className="mt-1 text-[11px] text-onyx-500 dark:text-onyx-300">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-onyx-950 border-t border-onyx-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-onyx-50 mb-4">
            Work directly with our engineering team
          </h2>
          <p className="text-onyx-300 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
            If you value systems that run reliably, quietly, and without drama, let&apos;s discuss your technology requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-spring-500 hover:bg-spring-600 text-onyx-950 font-semibold text-sm transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
