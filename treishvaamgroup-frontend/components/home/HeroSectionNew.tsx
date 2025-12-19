'use client'

import Link from 'next/link'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-corporate-900 via-corporate-800 to-corporate-950 pt-32 pb-24 md:pt-48 md:pb-32">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-heritage-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-corporate-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:min-h-[500px]">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-heritage-500/10 border border-heritage-500/30 rounded-full">
              <div className="w-2 h-2 bg-heritage-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-heritage-300 uppercase tracking-wider">Global Conglomerate</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Treishvaam<br />
                <span className="text-heritage-400">Group</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-slate-200 leading-relaxed">
                Driving Innovation Across Energy, Finance, and Infrastructure
              </p>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl font-light">
              A premier global conglomerate with operations spanning multiple sectors. We deliver sustainable value to shareholders, stakeholders, and communities worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/investors"
                className="inline-flex items-center justify-center gap-2 bg-heritage-500 hover:bg-heritage-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-heritage-500/30 group"
              >
                Investor Relations
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/businesses"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-white text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 group"
              >
                Explore Our Businesses
              </Link>
            </div>
          </div>

          {/* Right: Image Placeholder with Stats */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-heritage-500/20 to-corporate-600/20 rounded-2xl border border-slate-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-heritage-500/20 border border-heritage-400/50 mb-4">
                    <FiPlay className="w-7 h-7 text-heritage-300" />
                  </div>
                  <p className="text-slate-300 font-light">Corporate Showcase</p>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-elevation p-4 max-w-xs">
                <div className="text-sm font-semibold text-corporate-800">Global Presence</div>
                <div className="text-2xl font-serif font-bold text-heritage-600">150+</div>
                <div className="text-xs text-slate-600">Countries Worldwide</div>
              </div>

              <div className="absolute -top-4 -right-8 bg-white rounded-lg shadow-elevation p-4 max-w-xs">
                <div className="text-sm font-semibold text-corporate-800">Established</div>
                <div className="text-2xl font-serif font-bold text-heritage-600">1998</div>
                <div className="text-xs text-slate-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
