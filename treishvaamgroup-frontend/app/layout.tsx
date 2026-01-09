import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

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
      <head>
         {/* AdSense Verification often checks for the tag in the head manually */}
         <script 
            async 
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6767594004709750"
            crossOrigin="anonymous"
         ></script>
      </head>
      <body>
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />

        {/* ==========================================
            IUBENDA (TEMPORARILY DISABLED FOR VERIFICATION)
            Uncomment this block AFTER you get the "Verified" email from Google.
           ========================================== */}
        {/* <Script id="iubenda-config" strategy="beforeInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {"siteId":4378854,"cookiePolicyId":54282069,"lang":"en","storage":{"useSiteId":true}};
          `}
        </Script>
        <Script src="https://cs.iubenda.com/autoblocking/4378854.js" strategy="beforeInteractive" />
        <Script src="//cdn.iubenda.com/cs/gpp/stub.js" strategy="beforeInteractive" />
        <Script src="//cdn.iubenda.com/cs/iubenda_cs.js" strategy="afterInteractive" charSet="UTF-8" /> 
        */}

        {/* ==========================================
            GOOGLE ADSENSE & ANALYTICS
           ========================================== */}
        {/* We moved the main AdSense script to <head> for easier verification, 
            but keeping this component version is fine for when the app runs. */}
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6767594004709750"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

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