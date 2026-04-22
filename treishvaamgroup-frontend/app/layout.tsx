/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Root layout file for the Parent Website (treishvaamgroup.com).
 * - Handles global HTML structure, fonts, Third-Party Scripts, and centralized SEO Knowledge Graph injection.
 *
 * Scope:
 * - Wraps all pages with standard UI (Navbar, Footer).
 * - Renders the global JSON-LD schema for AI & Crawler entity resolution natively via React.
 *
 * Critical Dependencies:
 * - Frontend: Navbar, Footer, ThirdPartyScripts components.
 *
 * Security Constraints:
 * - No hardcoded API keys.
 *
 * Non-Negotiables:
 * - JSON-LD payload must remain fully compliant with Schema.org standards.
 *
 * Change Intent:
 * - Expanding Enterprise JSON-LD schema globally to fix entity resolution and typo tolerance.
 *
 * Future AI Guidance:
 * - Do not remove the structured data script tags. If adding new aliases, append them to the `alternateName` array.
 * - Always keep schema blocks isolated. Do not merge them into a single `@graph` array to ensure independent crawler parsing.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Added `alternateName` arrays for Treishvaam Group and Amitsagar Kandpal within the `dangerouslySetInnerHTML` JSON payload.
 * • Why: To guarantee deterministic entity mapping for search engines and AI agents regardless of spelling errors in user prompts.
 * - EDITED:
 * • Expanded the Founder `alternateName` array to include the brand variations ("Treishvaam", "Treishvam", "Trishvam").
 * • Why: Semantic identity fusion. User queries for "Trishvam" must directly associate with the founder across all NLP models.
 * - EDITED:
 * • Converted JSON-LD to a `@graph` array to inject `WebSite` and `ItemList` (SiteNavigationElement) schemas.
 * • Why: To programmatically instruct Google's crawler to generate structural Sitelinks (Businesses, Careers, Contact) on the Brand SERP.
 * - EDITED (Current Phase):
 * • Decoupled the JSON-LD `@graph` array into three isolated `<script>` tags.
 * • Why: Google Rich Results parsing engine failed to extract `WebSite` from the deeply nested array. Isolation guarantees 100% independent evaluation of Organization, Searchbox, and Sitelinks schemas.
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
// @ts-ignore: Next.js Webpack handles CSS imports natively, bypassing strict TS module checks.
import '@/app/globals.css'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ThirdPartyScripts from '@/components/ThirdPartyScripts'

// Fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Treishvaam Group | Sustainable Enterprises for a Better Tomorrow',
  description: 'Treishvaam Group is a diversified enterprise innovating across finance, agriculture, and technology to build a sustainable and prosperous future.',
  keywords: 'Treishvaam, Treishvaam Group, Finance, Agriculture, Technology, Sustainable Enterprise, Amitsagar Kandpal',
  metadataBase: new URL('https://treishvaamgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://treishvaamgroup.com',
    title: 'Treishvaam Group | Sustainable Enterprises for a Better Tomorrow',
    description: 'Innovating across finance, agriculture, and technology to build a sustainable and prosperous future.',
    siteName: 'Treishvaam Group',
    images: [
      {
        url: '/logo512.webp',
        width: 512,
        height: 512,
        alt: 'Treishvaam Group Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@treishvaamgroup',
    creator: '@treishvaam',
    title: 'Treishvaam Group',
    description: 'Innovating across finance, agriculture, and technology.',
    images: ['/logo512.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // To be updated
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        {/* Basic SEO tags are handled by Next.js Metadata API */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo192.webp" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* 1. Organization & Founder Knowledge Graph (Fused Identity) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Treishvaam Group",
              "alternateName": ["Treishvam Group", "Treshvam Group", "Trishvam Group", "Treishvaam Enterprise", "Treishvaam", "Trishvam"],
              "url": "https://treishvaamgroup.com",
              "logo": "https://treishvaamgroup.com/logo512.webp",
              "description": "Treishvaam Group is a diversified enterprise innovating across finance, agriculture, and technology.",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Amitsagar Kandpal",
                "alternateName": ["Amit Kandpal", "Amit Sagar Kandpal", "Amitsagar", "Treishvaam", "Treishvam", "Trishvam"],
                "url": "https://linkedin.com/in/amitsagarkandpal"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "treishvaamgroup@gmail.com",
                "telephone": "+918178529633"
              },
              "sameAs": [
                "https://www.linkedin.com/company/treishvaamgroup",
                "https://twitter.com/treishvaamgroup"
              ]
            })
          }}
        />

        {/* 2. WebSite Schema (For Google Sitelinks Search Box) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Treishvaam Group",
              "url": "https://treishvaamgroup.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://treishvaamgroup.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* 3. ItemList Schema (Explicit mapping for Sitelink Navigation) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                { "@type": "SiteNavigationElement", "position": 1, "name": "Businesses", "url": "https://treishvaamgroup.com/businesses" },
                { "@type": "SiteNavigationElement", "position": 2, "name": "Investors", "url": "https://treishvaamgroup.com/investors" },
                { "@type": "SiteNavigationElement", "position": 3, "name": "Sustainability", "url": "https://treishvaamgroup.com/sustainability" },
                { "@type": "SiteNavigationElement", "position": 4, "name": "Newsroom", "url": "https://treishvaamgroup.com/newsroom" },
                { "@type": "SiteNavigationElement", "position": 5, "name": "Careers", "url": "https://treishvaamgroup.com/careers" },
                { "@type": "SiteNavigationElement", "position": 6, "name": "Contact", "url": "https://treishvaamgroup.com/contact" }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased flex flex-col selection:bg-blue-100 selection:text-blue-900">
        {/* Header/Navbar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-20"> {/* pt-20 offsets the fixed navbar */}
          {children}
        </main>
        
        {/* Footer Area */}
        <Footer />
        
        {/* Scripts loaded at the end of body */}
        <ThirdPartyScripts />
      </body>
    </html>
  )
}