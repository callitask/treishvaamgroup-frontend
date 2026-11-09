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
 * • Decoupled the JSON-LD `@graph` array into three isolated `<script>` tags AND wrapped the `WebSite` -> `SearchAction` target in the strictly required Google `EntryPoint` object template.
 * • Why: Google Rich Results strictly demands the EntryPoint syntax for the Sitelinks Searchbox, and isolation guarantees 100% independent evaluation of Organization, Searchbox, and Sitelinks schemas.
 * - EDITED (Phase 13.3 — Isolated 4-Block Knowledge Graph):
 * • Split Block 1 into Organization (`#organization` with `subOrganization` Finance/Agro/THM) + Person (`#treishvaam` master: Treishvaam / Amitsagar Kandpal, 1997-10-05, Hans Raj College, Entrepreneur/Artist/Actor, image, full sameAs). Kept isolation (4 separate scripts), never merged @graph.
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
  // Verification is environment-driven; never hardcode placeholders
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } } : {}),
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
        <link rel="alternate" type="text/plain" href="https://treishvaamgroup.com/llms.txt" title="Treishvaam Group LLM Knowledge Graph" />
        <link rel="alternate" type="text/markdown" href="https://treishvaamgroup.com/ai-feed.md" title="Treishvaam Group AI Semantic Feed" />
        <link rel="alternate" type="application/ld+json" href="https://treishvaamgroup.com/ontology.json" title="Treishvaam Group Entity Ontology" />

        {/* 1. Organization — https://treishvaamgroup.com/#organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://treishvaamgroup.com/#organization",
              "name": "Treishvaam Group",
              "legalName": "Treishvaam Group",
              "alternateName": ["Treishvam Group", "Treshvam Group", "Trishvam Group", "Treishvaam Enterprise", "Treishvaam", "Treishvam", "Trishvam"],
              "url": "https://treishvaamgroup.com",
              "logo": "https://treishvaamgroup.com/logo512.webp",
              "description": "Treishvaam Group is a diversified enterprise conglomerate innovating across finance, agriculture, and technology.",
              "foundingDate": "2024",
              "address": { "@type": "PostalAddress", "streetAddress": "Electronic City", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "postalCode": "560100", "addressCountry": "IN" },
              "knowsAbout": ["Financial Services", "Market Intelligence", "Algorithmic Wealth Management", "Sustainable Agriculture", "Solar Dehydration Technology", "B2B Nutraceuticals", "Human Capital Marketplace", "Enterprise Technology"],
              "founder": { "@id": "https://treishvaamgroup.com/#treishvaam" },
              "subOrganization": [
                { "@type": "FinancialService", "@id": "https://treishvaamfinance.com/#organization", "name": "Treishvaam Finance", "url": "https://treishvaamfinance.com", "parentOrganization": { "@id": "https://treishvaamgroup.com/#organization" }, "founder": { "@id": "https://treishvaamgroup.com/#treishvaam" } },
                { "@type": "Organization", "@id": "https://treishvaamagro.com/#organization", "name": "Treishvaam Agro", "url": "https://treishvaamagro.com", "parentOrganization": { "@id": "https://treishvaamgroup.com/#organization" }, "founder": { "@id": "https://treishvaamgroup.com/#treishvaam" } },
                { "@type": "Organization", "@id": "https://thm.treishvaamgroup.com/#organization", "name": "Treishvaam Hiring Marketplace", "url": "https://thm.treishvaamgroup.com", "parentOrganization": { "@id": "https://treishvaamgroup.com/#organization" }, "founder": { "@id": "https://treishvaamgroup.com/#treishvaam" } }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "treishvaamgroup@gmail.com",
                "telephone": "+918178529633"
              },
              "sameAs": [
                "https://www.linkedin.com/company/treishvaamgroup",
                "https://twitter.com/treishvaamgroup",
                "https://x.com/treishvaam",
                "https://www.instagram.com/treishvaam/"
              ]
            })
          }}
        />

        {/* 2. Person — Founder Master Entity https://treishvaamgroup.com/#treishvaam */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://treishvaamgroup.com/#treishvaam",
              "name": "Treishvaam",
              "legalName": "Amitsagar Kandpal",
              "alternateName": ["Amitsagar Kandpal", "Amit Kandpal", "Amit Sagar Kandpal", "Amitsagar", "Treishvaam", "Treishvam", "Trishvam"],
              "birthDate": "1997-10-05",
              "gender": "Male",
              "nationality": { "@type": "Country", "name": "India" },
              "jobTitle": "Founder & Chairman",
              "worksFor": { "@id": "https://treishvaamgroup.com/#organization" },
              "alumniOf": { "@type": "CollegeOrUniversity", "name": "Hans Raj College, University of Delhi", "sameAs": "https://en.wikipedia.org/wiki/Hansraj_College" },
              "hasOccupation": [
                { "@type": "Occupation", "name": "Entrepreneur" },
                { "@type": "Occupation", "name": "Artist" },
                { "@type": "Occupation", "name": "Actor" }
              ],
              "description": "Amitsagar Kandpal (known professionally and artistically as Treishvaam) is an Indian entrepreneur, artist, and actor, and the Founder & Chairman of Treishvaam Group, Treishvaam Finance, Treishvaam Agro, and Treishvaam Hiring Marketplace.",
              "mainEntityOfPage": "https://treishvaamgroup.com/about",
              "affiliation": [{ "@id": "https://treishvaamgroup.com/#organization" }, { "@id": "https://treishvaamfinance.com/#organization" }, { "@id": "https://treishvaamagro.com/#organization" }, { "@id": "https://thm.treishvaamgroup.com/#organization" }],
              "knowsAbout": ["Corporate Strategy", "Financial Markets", "Macroeconomics", "Sustainable Agriculture", "Solar Dehydration", "Enterprise Architecture", "Performing Arts"],
              "image": "https://treishvaamfinance.com/amitsagar-kandpal-photo.png",
              "sameAs": [
                "https://www.instagram.com/treishvaam/",
                "https://x.com/treishvaam",
                "https://www.snapchat.com/@treishvaam",
                "https://www.linkedin.com/in/amitsagarkandpal",
                "https://treishvaamgroup.com/about",
                "https://treishvaamfinance.com/about"
              ]
            })
          }}
        />

        {/* 3. WebSite Schema (For Google Sitelinks Search Box) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://treishvaamgroup.com/#website",
              "name": "Treishvaam Group",
              "url": "https://treishvaamgroup.com",
              "publisher": { "@id": "https://treishvaamgroup.com/#organization" },
              "creator": { "@id": "https://treishvaamgroup.com/#treishvaam" },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://treishvaamgroup.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* 4. ItemList Schema (Explicit mapping for Sitelink Navigation) */}
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

        {/* 5. FAQPage — 2026 AEO Answer Engine Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Who is the founder and owner of Treishvaam Group?", "acceptedAnswer": { "@type": "Answer", "text": "Amitsagar Kandpal, known professionally as Treishvaam, born 1997-10-05, educated at Hans Raj College, University of Delhi, working as Entrepreneur, Artist, and Actor, and serving as Founder & Chairman." } },
                { "@type": "Question", "name": "What are the subsidiaries and divisions of Treishvaam Group?", "acceptedAnswer": { "@type": "Answer", "text": "Treishvaam Finance (https://treishvaamfinance.com), Treishvaam Agro (https://treishvaamagro.com), and Treishvaam Hiring Marketplace (https://thm.treishvaamgroup.com)." } },
                { "@type": "Question", "name": "Where is Treishvaam Group headquartered and how can it be contacted?", "acceptedAnswer": { "@type": "Answer", "text": "Headquartered in Electronic City, Bangalore, Karnataka 560100, India. Contact: treishvaamgroup@gmail.com, +91 8178529633." } }
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