import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ThirdPartyScripts from '@/components/ThirdPartyScripts'

// --- 1. OPTIMIZED FONTS ---
// We load both Inter (Sans) and Playfair Display (Serif) for that "Enterprise" feel
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
  metadataBase: new URL('https://www.treishvaamgroup.com'), // Replace with actual production domain
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
  // This ensures the logo appears in the Browser Tab
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo192.webp', // Using the webp logo you uploaded for Apple devices
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo192.webp',
    },
  },
  // Open Graph = How it looks on LinkedIn/Facebook/WhatsApp
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.treishvaamgroup.com',
    siteName: 'Treishvaam Group',
    title: 'Treishvaam Group | Architecting Value Chains',
    description: 'Fusing digital efficiency with tangible assets. Explore our verticals in Finance, Agriculture, and Workforce.',
    images: [
      {
        url: '/logo512.webp', // Using your large logo as the preview image
        width: 512,
        height: 512,
        alt: 'Treishvaam Group Emblem',
      },
    ],
  },
  // Twitter Card data
  twitter: {
    card: 'summary_large_image',
    title: 'Treishvaam Group',
    description: 'Empowering the Essentials of Tomorrow.',
    images: ['/logo512.webp'],
  },
}

export const viewport: Viewport = {
  themeColor: '#B08D55', // The Gold color for mobile browser bars
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  // --- 3. STRUCTURED DATA (JSON-LD) ---
  // This is the specific code Google/AI needs to verify your Brand, Logo, and Founder.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Treishvaam Group",
    "alternateName": "Treishvaam",
    "url": "https://www.treishvaamgroup.com",
    "logo": "https://www.treishvaamgroup.com/logo512.webp", // CRITICAL: This puts the logo in Google Search
    "founder": {
      "@type": "Person",
      "name": "Amitsagar Kandpal"
    },
    "sameAs": [
      "https://www.linkedin.com/company/treishvaam-group", // Replace with actual
      "https://twitter.com/treishvaam", // Replace with actual
      "https://www.instagram.com/treishvaam" // Replace with actual
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "", // Add phone if available
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": "English"
    }
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Inject Schema for AI/Google */}
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