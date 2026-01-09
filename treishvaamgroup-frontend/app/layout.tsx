import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script' // Required for optimized script loading
import './globals.css'

// Import Layout Components
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Treishvaam Group',
  description: 'Empowering the Essentials of Tomorrow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        
        {/* Main Content */}
        <div className="flex-grow">
          {children}
        </div>

        <Footer />

        {/* ==========================================
            1. IUBENDA COOKIE CONSENT SCRIPTS 
           ========================================== */}
        
        {/* Iubenda Configuration (Must run first) */}
        <Script id="iubenda-config" strategy="beforeInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {"siteId":4378854,"cookiePolicyId":54282069,"lang":"en","storage":{"useSiteId":true}};
          `}
        </Script>

        {/* Iubenda Autoblocking */}
        <Script 
          src="https://cs.iubenda.com/autoblocking/4378854.js" 
          strategy="beforeInteractive" 
        />

        {/* Iubenda GPP Stub */}
        <Script 
          src="//cdn.iubenda.com/cs/gpp/stub.js" 
          strategy="beforeInteractive" 
        />

        {/* Iubenda Main Script */}
        <Script 
          src="//cdn.iubenda.com/cs/iubenda_cs.js" 
          strategy="afterInteractive" 
          charSet="UTF-8" 
        />

        {/* ==========================================
            2. GOOGLE ADSENSE (Verification Code)
           ========================================== */}
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6767594004709750"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* ==========================================
            3. GOOGLE ANALYTICS
           ========================================== */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J1X48J18M4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J1X48J18M4');
          `}
        </Script>

      </body>
    </html>
  )
}