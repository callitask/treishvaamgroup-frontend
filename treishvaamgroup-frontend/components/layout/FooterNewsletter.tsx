'use client'

import React from 'react'

export default function FooterNewsletter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle newsletter subscription
  }

  return (
    <div className="border-b border-corporate-200/60 bg-surface-50/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-corporate-900 mb-3">
              Stay Updated
            </h3>
            <p className="text-corporate-600 font-sans">
              Get the latest insights and updates from Treishvaam Group delivered to your inbox.
            </p>
          </div>
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-none border border-corporate-200 bg-white text-corporate-900 placeholder-corporate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all duration-300"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-corporate-900 hover:bg-gold-500 text-white font-medium tracking-wide uppercase text-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}