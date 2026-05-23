import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Qzenta — IT Infrastructure for South African Businesses",
  description:
    "Qzenta builds and manages web infrastructure for ambitious South African businesses. Web development, domain management, hosting, and ongoing support.",
};

const services = [
  {
    number: "01",
    title: "Web Development & Deployment",
    desc: "Modern, fast websites built with Next.js and deployed on Vercel with Cloudflare CDN.",
  },
  {
    number: "02",
    title: "Domain & Hosting Management",
    desc: "We register, configure, and maintain your domains so you never worry about downtime or renewals.",
  },
  {
    number: "03",
    title: "Tech Infrastructure for SMEs",
    desc: "GitHub, email, DNS, SSL, and deployment pipelines — all set up correctly, once.",
  },
  {
    number: "04",
    title: "Ongoing Maintenance",
    desc: "Your tech stack, managed. Updates, security patches, and performance monitoring included.",
  },
];

const portfolio = [
  {
    name: "Sikatrix",
    desc: "Tax and accounting practice",
    url: "https://www.sikatrix.com",
    tag: "Professional Services",
  },
  {
    name: "Erga Properties",
    desc: "Property services platform",
    url: "https://www.erga.co.za",
    tag: "Property",
  },
  {
    name: "TiqBooks",
    desc: "Bookkeeping SaaS platform",
    url: "https://www.tiqbooks.com",
    tag: "SaaS",
  },
  {
    name: "GDSA",
    desc: "Ghana Diaspora SA NGO",
    url: "https://www.ghanadiasporasa.org",
    tag: "NGO",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-24 max-w-7xl mx-auto">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 0%, rgba(16,185,129,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-emerald-500 text-xs font-semibold tracking-widest uppercase mb-5">
              IT Services &middot; South Africa
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight">
              IT infrastructure for{" "}
              <span className="text-emerald-400">ambitious</span> businesses
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
              Qzenta builds, deploys, and manages the digital foundations that growing South African
              businesses depend on — from domains and hosting to full web development.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="px-6 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3 rounded-md border border-gray-700 hover:border-emerald-500 text-slate-100 font-medium transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
          {/* Hero image */}
          <div className="relative hidden lg:block h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=900&q=80"
              alt="African business professionals collaborating in a modern office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-100 mb-3">What we do</h2>
          <p className="text-slate-400 mb-10 max-w-xl">
            End-to-end IT support for businesses that want to move fast without breaking things.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.number}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <span className="text-3xl font-bold text-emerald-500/25 select-none">
                  {s.number}
                </span>
                <h3 className="mt-4 font-semibold text-slate-100">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className="text-sm text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
            >
              All services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Image strip — Africa-first */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-3 h-48 sm:h-64 rounded-2xl overflow-hidden">
          <div className="relative col-span-2 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
              alt="Black businesswoman in a professional setting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 66vw, 44vw"
            />
            <div className="absolute inset-0 bg-emerald-900/20" />
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=500&q=80"
              alt="Tech professional working in Africa"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 22vw"
            />
            <div className="absolute inset-0 bg-emerald-900/20" />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-100 mb-3">Recent work</h2>
          <p className="text-slate-400 mb-10 max-w-xl">
            Live projects built and maintained under the Qzenta infrastructure umbrella.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors"
              >
                <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">
                  {p.tag}
                </span>
                <h3 className="mt-2 font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
              </a>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/portfolio"
              className="text-sm text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
            >
              Full portfolio &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gray-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Ready to build something?
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto leading-relaxed">
            Whether you need a new website, help with your infrastructure, or ongoing technical
            support — we&apos;re here for it.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-8 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
