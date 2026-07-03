import type { Metadata, Viewport } from "next";
import { Manrope, Saira_Condensed } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const saira = Saira_Condensed({
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const SITE_URL = "https://navgpa.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NAV Global Project Advisory | Construction & Commercial Advisory",
    template: "%s | NAV Global Project Advisory",
  },
  description:
    "NAV Global Project Advisory (NavGPA) is a USA-based construction and commercial advisory firm — quantity surveying, cost management, BIM & 5D, contract administration and project controls, delivered globally.",
  keywords: [
    "quantity surveying",
    "cost management",
    "BIM consultant",
    "5D BIM",
    "construction cost advisory",
    "contract administration",
    "commercial management",
    "project controls",
    "claims and variations",
    "NAV Global Project Advisory",
    "NavGPA",
    "San Francisco quantity surveyor",
  ],
  authors: [{ name: "NAV Global Project Advisory" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "NAV Global Project Advisory",
    title: "NAV Global Project Advisory — Building Confidence. Delivering Value.",
    description:
      "USA-based construction & commercial advisory powered by digital innovation, data and global experience.",
    images: [{ url: "/brand-overview.jpg", width: 1024, height: 1536, alt: "NAV Global Project Advisory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAV Global Project Advisory",
    description:
      "USA-based construction & commercial advisory — QS, cost management, BIM & 5D, delivered globally.",
    images: ["/brand-overview.jpg"],
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${saira.variable}`}>
      <head>
        <noscript>
          {/* Ensure reveal-animated content is visible without JS */}
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
