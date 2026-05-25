import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Qzenta",
    template: "%s | Qzenta",
  },
  description:
    "IT infrastructure and web services for ambitious South African businesses. Web development, domain management, hosting, and ongoing technical support.",
  keywords: ["IT services", "web development", "South Africa", "Qzenta", "domain hosting", "SME tech"],
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
    description: "IT infrastructure and web services for ambitious South African businesses.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-gray-900 text-slate-100 antialiased flex flex-col min-h-screen font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
