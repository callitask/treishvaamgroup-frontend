import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ThirdPartyScripts from '@/components/ThirdPartyScripts'

// --- 1. OPTIMIZED FONTS ---
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// --- 2. ENTERPRISE METADATA CONFIGURATION ---
export const metadata: Metadata = {
  metadataBase: new URL('https://www.treishvaamgroup.com'),
  title: {
    default: 'Treishvaam Group | Global Enterprise Architecture',
    template: '%s | Treishvaam Group'
  },
  description: 'Building the structural necessities of the future economy. Treishvaam Group operates across Finance, Sustainable Agriculture, and Human Capital marketplaces.',
  keywords: ['Treishvaam', 'Amitsagar Kandpal', 'Global Finance', 'Agro Tech', 'Hiring Marketplace', 'Enterprise Architecture', 'Venture Capital'],
  authors: [{ name: 'Treishvaam Group' }],
  creator: 'Treishvaam Group',
  publisher: 'Treishvaam Group',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo192.webp',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo192.webp',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.treishvaamgroup.com',
    siteName: 'Treishvaam Group',
    title: 'Treishvaam Group | Architecting Value Chains',
    description: 'Fusing digital efficiency with tangible assets. Explore our verticals in Finance, Agriculture, and Workforce.',
    images: [
      {
        url: '/logo512.webp',
        width: 512,
        height: 512,
        alt: 'Treishvaam Group Emblem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treishvaam Group',
    description: 'Empowering the Essentials of Tomorrow.',
    images: ['/logo512.webp'],
  },
}

export const viewport: Viewport = {
  themeColor: '#B08D55',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  // --- 3. STRUCTURED DATA (JSON-LD) ---
  // STRATEGY: Define Person and Organization separately, then link them.
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        // ENTITY 1: THE CORPORATION
        "@type": "Corporation",
        "@id": "https://www.treishvaamgroup.com/#organization",
        "name": "Treishvaam Group",
        "alternateName": "Treishvaam",
        "url": "https://www.treishvaamgroup.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.treishvaamgroup.com/logo512.webp"
        },
        "email": "treishvaamgroup@gmail.com",
        "telephone": "+91 81785 29633",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Electronic City",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560100",
          "addressCountry": "IN"
        },
        // Link to the Person defined below
        "founder": {
          "@id": "https://www.treishvaamgroup.com/#founder"
        },
        // COMPANY Socials only
        "sameAs": [
          "https://www.linkedin.com/company/treishvaamgroup",
          "https://twitter.com/treishvaamgroup", 
          "https://x.com/treishvaamgroup",
          "https://www.instagram.com/treishvaamgroup"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 81785 29633",
          "contactType": "customer service",
          "email": "treishvaamgroup@gmail.com",
          "areaServed": "Global",
          "availableLanguage": "English"
        }
      },
      {
        // ENTITY 2: THE PERSON (You)
        // This claims the "Treishvaam" identity and links it to the group
        "@type": "Person",
        "@id": "https://www.treishvaamgroup.com/#founder",
        "name": "Amitsagar Kandpal",
        "alternateName": "Treishvaam", // <--- CRITICAL: Tells Google "I am Treishvaam"
        "jobTitle": "Founder & Chairman",
        "url": "https://www.treishvaamgroup.com",
        "email": "callitask@gmail.com",
        "telephone": "+91 81785 29633",
        "worksFor": {
          "@id": "https://www.treishvaamgroup.com/#organization"
        },
        "founderOf": {
          "@id": "https://www.treishvaamgroup.com/#organization"
        },
        // PERSONAL Socials (The ones ranking for "Treishvaam")
        "sameAs": [
          "https://www.linkedin.com/in/amitsagarkandpal",
          "https://twitter.com/treishvaam",
          "https://x.com/treishvaam",
          "https://www.instagram.com/treishvaam",
          "https://in.pinterest.com/treishvaam" 
        ]
      }
    ]
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans bg-white text-corporate-900 antialiased">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <ThirdPartyScripts />
      </body>
    </html>
  )
}