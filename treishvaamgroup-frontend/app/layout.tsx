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

// Define the Canonical Base URL
const BASE_URL = 'https://treishvaamgroup.com';

// --- 2. ENTERPRISE METADATA CONFIGURATION ---
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
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
    url: BASE_URL,
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Treishvaam Group",
    "alternateName": "Treishvaam",
    "url": BASE_URL, // Updated to non-www canonical
    "logo": `${BASE_URL}/logo512.webp`,
    "founder": {
      "@type": "Person",
      "name": "Amitsagar Kandpal"
    },
    "sameAs": [
      "https://www.linkedin.com/company/treishvaam-group",
      "https://twitter.com/treishvaam",
      "https://www.instagram.com/treishvaam"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": "English"
    }
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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