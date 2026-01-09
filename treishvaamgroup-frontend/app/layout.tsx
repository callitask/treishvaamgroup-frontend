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
  // Logic: Ensure 'ca-' prefix exists. User provided "pub-..." so we prepend "ca-" if missing.
  const rawId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '';
  const adsenseId = rawId.startsWith('ca-') ? rawId : `ca-${rawId}`;
  const adsenseSrc = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`;

  return (
    <html lang="en" className={inter.className}>
      <head>
         {/* AdSense Verification (Dynamic from Env Var) */}
         {rawId && (
           <script 
              async 
              src={adsenseSrc}
              crossOrigin="anonymous"
           ></script>
         )}
      </head>
      <body>
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />

        {/* ==========================================
            GOOGLE ADSENSE & ANALYTICS
           ========================================== */}
        {rawId && (
          <Script
            id="google-adsense"
            async
            src={adsenseSrc}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}

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