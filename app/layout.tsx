import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Qzenta",
    template: "%s | Qzenta",
  },
  description:
    "IT infrastructure and web services for ambitious African businesses. Web development, domain management, hosting, and ongoing technical support.",
  metadataBase: new URL("https://www.qzenta.com"),
  icons: {
    icon: "/qzenta-icon.svg",
    shortcut: "/qzenta-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.qzenta.com",
    siteName: "Qzenta",
    description: "IT infrastructure and web services for ambitious African businesses.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Qzenta (Pty) Ltd",
  url: "https://www.qzenta.com",
  logo: "https://www.qzenta.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@qzenta.com",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased flex flex-col min-h-screen font-sans">
        <GoogleAnalytics />
        <MicrosoftClarity />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
