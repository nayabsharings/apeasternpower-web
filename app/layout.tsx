import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { ORG, SOCIALS } from "./lib/site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*
 * Absolute URLs for OG/canonical tags. Set NEXT_PUBLIC_SITE_URL in the
 * deployment environment; the localhost fallback keeps dev honest rather than
 * asserting a canonical the build cannot actually serve.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${ORG.shortName} — ${ORG.tagline}`,
    template: `%s | ${ORG.shortName}`,
  },
  description: ORG.mission,
  applicationName: ORG.shortName,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: false, email: false },
  keywords: [
    "APEPDCL",
    "Eastern Power Distribution Company",
    "Andhra Pradesh electricity",
    "pay electricity bill",
    "new electricity connection",
    "PM Surya Ghar",
    "net metering",
  ],
  openGraph: {
    title: `${ORG.shortName} — ${ORG.tagline}`,
    description: ORG.mission,
    siteName: ORG.name,
    locale: "en_IN",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${ORG.shortName} — ${ORG.tagline}`,
    description: ORG.mission,
    site: "@ap_epdcl",
  },
};

export const viewport: Viewport = {
  themeColor: "#152d43",
  colorScheme: "light",
};

/*
 * Organization + WebSite structured data. A distribution utility gets a lot of
 * "APEPDCL helpline" / "pay electricity bill" style searches, and this is what
 * lets a search engine surface the 1912 number and the official social profiles
 * directly.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GovernmentOrganization",
      "@id": `${siteUrl}/#organization`,
      name: ORG.legalName,
      alternateName: ORG.shortName,
      url: siteUrl,
      logo: `${siteUrl}/brand/logo.png`,
      description: ORG.mission,
      areaServed: "Eastern Andhra Pradesh, India",
      identifier: [
        { "@type": "PropertyValue", name: "CIN", value: ORG.cin },
        { "@type": "PropertyValue", name: "GSTIN", value: ORG.gstin },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: ORG.helpline,
          contactType: "customer service",
          availableLanguage: ["en", "te"],
          areaServed: "IN",
        },
      ],
      sameAs: SOCIALS.map((social) => social.href),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${ORG.shortName} — ${ORG.name}`,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <script
          type="application/ld+json"
          // Serialised from a local literal, so there is no untrusted input here.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
