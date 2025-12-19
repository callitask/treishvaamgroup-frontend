'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className={`font-serif font-bold text-2xl ${isScrolled ? 'text-corporate-900' : 'text-corporate-900'}`}>T</div>
          <div className="flex flex-col">
             <span className="font-serif font-bold tracking-tight text-corporate-900 leading-none">TREISHVAAM</span>
             <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold-500">Group</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="/about" label="Vision" />
          <NavLink href="/businesses" label="Our Verticals" />
          <NavLink href="/investors" label="Partners" />
          <NavLink href="/sustainability" label="Sustainability" />
          <Link href="/contact" className="px-6 py-2 border border-corporate-900 text-corporate-900 text-xs font-bold uppercase tracking-widest hover:bg-corporate-900 hover:text-white transition-all">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-corporate-900">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>
    </header>
  )
}

function NavLink({ href, label }: { href: string, label: string }) {
  return (
    <Link href={href} className="text-xs font-bold uppercase tracking-widest text-corporate-900 hover:text-gold-500 transition-colors relative group">
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all group-hover:w-full"></span>
    </Link>
  )
}