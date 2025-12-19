'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiSearch, FiGlobe, FiChevronDown } from 'react-icons/fi'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Our Group', href: '/about' },
    { name: 'Businesses', href: '/businesses' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Investor Relations', href: '/investors' },
    { name: 'Newsroom', href: '/newsroom' },
  ]

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-gradient-to-b from-black/50 to-transparent py-6'
      }`}
    >
      {/* Top Utility Bar */}
      <div className={`hidden lg:flex justify-end container mx-auto px-6 mb-2 text-[10px] tracking-widest uppercase font-semibold transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-90 text-gray-200'}`}>
        <div className="flex gap-6">
          <Link href="/careers" className="hover:text-gold-400 transition-colors">Careers</Link>
          <Link href="/contact" className="hover:text-gold-400 transition-colors">Contact</Link>
          <span className="flex items-center gap-1 cursor-pointer hover:text-gold-400"><FiGlobe /> Global Site</span>
        </div>
      </div>

      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative z-50 flex items-center gap-3">
           <div className={`w-10 h-10 flex items-center justify-center border transition-colors duration-300 ${isScrolled ? 'border-corporate-900 text-corporate-900' : 'border-white text-white'}`}>
             <span className="font-serif font-bold text-2xl">T</span>
           </div>
           <div className="flex flex-col">
             <span className={`text-lg font-serif font-bold tracking-tight leading-none ${isScrolled ? 'text-corporate-900' : 'text-white'}`}>
               TREISHVAAM
             </span>
             <span className={`text-[0.5rem] uppercase tracking-[0.3em] ${isScrolled ? 'text-corporate-600' : 'text-gray-300'}`}>
               Group of Companies
             </span>
           </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-xs font-bold tracking-widest uppercase relative group py-2 transition-colors duration-300
                ${isScrolled ? 'text-corporate-900 hover:text-gold-600' : 'text-white hover:text-gold-400'}
              `}
            >
              {link.name}
            </Link>
          ))}
          
          <button className={`ml-4 transition-colors ${isScrolled ? 'text-corporate-900' : 'text-white'}`}>
            <FiSearch size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden relative z-50 ${isScrolled ? 'text-corporate-900' : 'text-white'}`}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>
    </header>
  )
}