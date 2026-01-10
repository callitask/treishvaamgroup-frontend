'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function HeroSection() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
      
      {/* 1. Dynamic Background Image (Parallax Effect) */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offset * 0.5}px)` }} // Parallax speed
      >
        {/* Replace with a high-res cityscape or abstract architectural image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')] bg-cover bg-center" />
        
        {/* The "White/Gold" Wash Overlay */}
        <div className="absolute inset-0 bg-white/80 mix-blend-hard-light" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>

      {/* 2. Floating Abstract Shapes (Animation) */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-gold-300/10 rounded-full blur-3xl animate-float -z-10" />
      <div className="absolute right-20 bottom-20 w-64 h-64 bg-blue-100/20 rounded-full blur-2xl animate-pulse-slow -z-10" />

      {/* 3. Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 mb-8 animate-fade-in-up bg-white/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-corporate-800 uppercase tracking-[0.2em] text-[10px] font-bold">
              Global Enterprise Architecture
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif text-corporate-900 leading-[1.05] mb-8 animate-fade-in-up [animation-delay:200ms] drop-shadow-sm">
            Building the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-300 animate-text-shimmer">
              Essentials of Tomorrow
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-corporate-600 max-w-2xl mb-12 font-light leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            Treishvaam Group identifies critical global gaps and builds specialized ecosystems in <span className="font-medium text-corporate-900">Finance, Nutrition, and Workforce</span> to fill them.
          </p>
          
          {/* Buttons with Hover Effects */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:600ms]">
            <Link href="/businesses" className="group relative overflow-hidden bg-corporate-900 text-white px-10 py-5 font-bold uppercase tracking-widest text-xs transition-all hover:shadow-2xl hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">Explore Verticals <FiArrowRight /></span>
              <div className="absolute inset-0 bg-gold-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
            
            <Link href="/about" className="group bg-white/50 backdrop-blur-sm border border-corporate-200 text-corporate-900 px-10 py-5 font-bold uppercase tracking-widest text-xs transition-all hover:bg-white hover:shadow-lg hover:-translate-y-1 hover:border-gold-400">
              Our Vision
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}