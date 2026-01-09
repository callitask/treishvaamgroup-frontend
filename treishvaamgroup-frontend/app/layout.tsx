import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

// 1. Import your Navbar and Footer here
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
        {/* Keep any specific head tags here */}
      </head>
      <body className="flex flex-col min-h-screen">
        
        {/* 2. Place Navbar at the top */}
        <Navbar />

        {/* 3. Main content area */}
        <div className="flex-grow">
          {children}
        </div>

        {/* 4. Place Footer at the bottom */}
        <Footer />

        {/* Google Analytics Script */}
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