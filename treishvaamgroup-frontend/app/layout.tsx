import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
// @ts-ignore: Next.js Webpack handles CSS imports natively, bypassing strict TS module checks.
import '@/app/globals.css'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FooterNewsletter from '@/components/layout/FooterNewsletter'
import { ThemeProvider } from '@/components/theme-provider'
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
        
        {/* Structured Data / JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Treishvaam Group",
              "url": "https://treishvaamgroup.com",
              "logo": "https://treishvaamgroup.com/logo512.webp",
              "description": "Treishvaam Group is a diversified enterprise innovating across finance, agriculture, and technology.",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Amitsagar Kandpal",
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
      </head>
      <body className="min-h-screen bg-background font-sans antialiased flex flex-col selection:bg-blue-100 selection:text-blue-900">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {/* Header/Navbar */}
          <Navbar />
          
          {/* Main Content Area */}
          <main className="flex-grow pt-20"> {/* pt-20 offsets the fixed navbar */}
            {children}
          </main>
          
          {/* Footer Area */}
          <FooterNewsletter />
          <Footer />
          
          {/* Scripts loaded at the end of body */}
          <ThirdPartyScripts />
        </ThemeProvider>
      </body>
    </html>
  )
}