'use client'

import Link from 'next/link'
import { FiArrowRight, FiActivity, FiGlobe, FiTrendingUp } from 'react-icons/fi'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-corporate-950">
      
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-950 via-corporate-900/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-corporate-950 via-transparent to-black/30 z-10" />
        {/* Replace this URL with your actual high-res corporate video/image */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')] bg-cover bg-center" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-in-up">
            <span className="h-[1px] w-8 bg-gold-500"></span>
            <span className="text-gold-400 uppercase tracking-[0.2em] text-xs font-bold">Reshaping Industries</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-[1.1] mb-8 animate-fade-in-up [animation-delay:200ms]">
            Engineering <br/>
            <span className="italic text-gray-400">Sustainable</span> Value
          </h1>
          
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-10 animate-fade-in-up [animation-delay:400ms] text-balance">
            Treishvaam Group drives global progress through leadership in Energy, Infrastructure, and Finance. We are building the backbone of tomorrow's economy.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:600ms]">
            <Link href="/businesses" className="bg-gold-500 text-corporate-950 px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-white transition-all duration-300">
              Our Businesses
            </Link>
            <Link href="/about" className="border border-white/30 text-white px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-white hover:text-corporate-950 transition-all duration-300 backdrop-blur-sm">
              The Group Vision
            </Link>
          </div>
        </div>
      </div>

      {/* Corporate Ticker / Stats */}
      <div className="absolute bottom-0 w-full z-20 border-t border-white/10 bg-black/20 backdrop-blur-md hidden md:block">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center text-white">
          <div className="flex gap-12">
             <Stat label="Market Cap" value="$4.2B" />
             <Stat label="Presence" value="12 Nations" />
             <Stat label="Workforce" value="15,000+" />
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span className="uppercase tracking-widest text-[10px] text-gold-500 font-bold">Latest Update</span>
            <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
            <span className="truncate max-w-xs">Treishvaam expands renewable capacity by 500MW in...</span>
            <FiArrowRight className="text-gold-500" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-xl font-serif font-medium">{value}</span>
      <span className="text-[10px] uppercase tracking-widest text-gray-400">{label}</span>
    </div>
  )
}