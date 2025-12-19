'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mainNavLinks = [
    { href: '/', label: 'Home' },
    { 
      label: 'About', 
      submenu: [
        { href: '/about', label: 'About Us' },
        { href: '/sustainability', label: 'Sustainability' },
      ]
    },
    { href: '/businesses', label: 'Our Businesses' },
    { 
      label: 'Investors', 
      submenu: [
        { href: '/investors', label: 'Investor Relations' },
        { href: '/newsroom', label: 'Newsroom' },
      ]
    },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="ml-3 text-xl font-bold text-primary-900 hidden sm:block group-hover:text-accent transition-colors">
              Treishvaam Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={'href' in link ? link.href : '#'}
                  className="px-4 py-2 text-text-primary font-medium hover:text-accent transition-colors flex items-center"
                >
                  {link.label}
                  {'submenu' in link && (
                    <FiChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {'submenu' in link && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-text-primary hover:text-accent hover:bg-light-bg transition-all first:rounded-t-lg last:rounded-b-lg"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-accent hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-text-primary hover:bg-light-bg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-slide-down">
            <div className="space-y-2">
              {mainNavLinks.map((link) => (
                <div key={link.label}>
                  {'href' in link ? (
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-text-primary hover:bg-light-bg rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full text-left px-4 py-2 text-text-primary hover:bg-light-bg rounded-md transition-colors flex items-center justify-between"
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      >
                        {link.label}
                        <FiChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === link.label && 'submenu' in link && (
                        <div className="pl-4 space-y-2">
                          {link.submenu.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2 text-text-secondary hover:text-accent transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="block mt-4 bg-accent hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all text-center"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
