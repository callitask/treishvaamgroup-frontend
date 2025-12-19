'use client'

import Link from 'next/link'
import { FiArrowRight, FiTrendingUp, FiGlobe, FiActivity } from 'react-icons/fi'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Layer - Deep Navy + Gradient */}
      <div className="absolute inset-0 z-0 bg-corporate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-900 via-corporate-900/80 to-transparent z-10"></div>
        {/* Placeholder for Video Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center animate-pulse-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl space-y-8">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm w-fit animate-fade-in-up">
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">
              Building The Future
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] animate-fade-in-up delay-100">
            Driving <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">Global Growth</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed animate-fade-in-up delay-200">
            Treishvaam Group is a diversified conglomerate committed to excellence in 
            Energy, Infrastructure, and Finance. We are architecting a sustainable tomorrow.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-300">
            <Link 
              href="/businesses" 
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-corporate-900 font-bold uppercase tracking-wider text-sm transition-all flex items-center gap-2 rounded-sm"
            >
              Explore Sectors <FiArrowRight />
            </Link>
            <Link 
              href="/investors" 
              className="px-8 py-4 border border-white text-white hover:bg-white hover:text-corporate-900 font-bold uppercase tracking-wider text-sm transition-all rounded-sm"
            >
              Investor Relations
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Stats Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-lg border-t border-white/10 z-20 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="grid grid-cols-4 divide-x divide-white/10 text-white">
            <StatItem label="Global Presence" value="12 Countries" icon={<FiGlobe />} />
            <StatItem label="Group Revenue" value="$4.2B" icon={<FiTrendingUp />} />
            <StatItem label="Employees" value="15,000+" icon={<FiActivity />} />
            <div className="pl-6 flex items-center justify-between group cursor-pointer">
              <div>
                <p className="text-xs uppercase text-gray-400 tracking-wider">Latest News</p>
                <p className="font-serif italic text-sm mt-1 truncate max-w-[200px] text-gold-400 group-hover:text-white transition-colors">
                  Treishvaam announces new renewable energy initiative...
                </p>
              </div>
              <FiArrowRight className="text-gold-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ label, value, icon }: { label: string, value: string, icon: any }) {
  return (
    <div className="px-6 first:pl-0 flex items-center gap-4">
      <div className="text-gold-500 text-2xl">{icon}</div>
      <div>
        <div className="text-xl font-bold font-serif">{value}</div>
        <div className="text-xs uppercase tracking-wider text-gray-400">{label}</div>
      </div>
    </div>
  )
}