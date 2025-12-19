'use client'

import Link from 'next/link'
import { FiArrowRight, FiHome } from 'react-icons/fi'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-10xl font-bold mb-4 opacity-10">404</h1>
          <div className="inline-block">
            <div className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              404
            </div>
          </div>
        </div>

        {/* Title and Description */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
          The page you're looking for has moved or doesn't exist. Let us help you get back on track.
        </p>

        {/* Decorative Line */}
        <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-12"></div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all transform hover:scale-105"
          >
            <FiHome className="text-xl" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all"
          >
            Contact Support
            <FiArrowRight className="text-xl" />
          </Link>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-gray-300 mb-4">Explore more:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/about" className="text-gray-200 hover:text-secondary transition">
              About Us
            </Link>
            <Link href="/businesses" className="text-gray-200 hover:text-secondary transition">
              Our Businesses
            </Link>
            <Link href="/careers" className="text-gray-200 hover:text-secondary transition">
              Careers
            </Link>
            <Link href="/newsroom" className="text-gray-200 hover:text-secondary transition">
              Newsroom
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
