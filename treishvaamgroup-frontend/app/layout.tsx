import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css' // <--- CRITICAL: This loads Tailwind
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer' // We will assume you have a footer or can comment this out
import GoogleAdSense from '@/components/GoogleAdSense'

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

export const metadata: Metadata = {
  title: 'Treishvaam Group | Global Business Excellence',
  description: 'A diversified multinational conglomerate leading in Energy, Infrastructure, and Finance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <GoogleAdSense />
      </head>
      <body className="font-sans antialiased bg-white text-slate-800">
        <Navbar />
        {children}
        {/* If you don't have a Footer component yet, verify this line or remove it */}
        {/* <Footer /> */} 
      </body>
    </html>
  )
}