import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from 'react-icons/fi'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import FooterNewsletter from '@/components/layout/FooterNewsletter'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Businesses', href: '/businesses' },
      { label: 'Careers', href: '/careers' },
      { label: 'Newsroom', href: '/newsroom' },
    ],
    resources: [
      { label: 'Investor Relations', href: '/investors' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Media Kit', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Cookies Policy', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
  ]

  return (
    <footer className="bg-gradient-to-b from-surface-50 via-surface-100 to-gold-100/30 text-corporate-900 border-t border-corporate-200">
      {/* Newsletter CTA */}
      <FooterNewsletter />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-corporate-900 rounded-none flex items-center justify-center shadow-lg">
                <span className="text-gold-500 font-serif font-bold text-xl">T</span>
              </div>
              <span className="text-lg font-serif font-bold text-corporate-900 tracking-tight">
                Treishvaam
              </span>
            </div>
            <p className="text-corporate-600 text-sm mb-8 leading-relaxed font-sans">
              Global leader in business excellence, innovation, and sustainable value creation across multiple sectors.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white border border-corporate-200 hover:border-gold-400 text-corporate-600 hover:text-gold-600 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-corporate-900 uppercase tracking-widest mb-6 font-sans">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={`company-${idx}`}>
                  <Link
                    href={link.href}
                    className="text-corporate-600 hover:text-gold-600 transition-colors text-sm flex items-center gap-1 group font-medium"
                  >
                    {link.label}
                    <FiArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-gold-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-corporate-900 uppercase tracking-widest mb-6 font-sans">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, idx) => (
                <li key={`resources-${idx}`}>
                  <Link
                    href={link.href}
                    className="text-corporate-600 hover:text-gold-600 transition-colors text-sm flex items-center gap-1 group font-medium"
                  >
                    {link.label}
                    <FiArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-gold-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-corporate-900 uppercase tracking-widest mb-6 font-sans">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, idx) => (
                <li key={`legal-${idx}`}>
                  <Link
                    href={link.href}
                    className="text-corporate-600 hover:text-gold-600 transition-colors text-sm flex items-center gap-1 group font-medium"
                  >
                    {link.label}
                    <FiArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-gold-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-corporate-900 uppercase tracking-widest mb-6 font-sans">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:treishvaamgroup@gmail.com"
                className="flex items-center gap-3 text-corporate-600 hover:text-gold-600 transition-colors text-sm group font-medium"
              >
                <FiMail className="w-4 h-4 flex-shrink-0 text-gold-500" />
                <span>treishvaamgroup@gmail.com</span>
              </a>
              <a
                href="tel:+918178529633"
                className="flex items-center gap-3 text-corporate-600 hover:text-gold-600 transition-colors text-sm group font-medium"
              >
                <FiPhone className="w-4 h-4 flex-shrink-0 text-gold-500" />
                <span>+91 81785 29633</span>
              </a>
              <div className="flex items-start gap-3 text-corporate-600 text-sm font-medium">
                <FiMapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-gold-500" />
                <span>
                  Corporate Office
                  <br />
                  Bangalore, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-corporate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-corporate-500 font-sans">
            <p>
              &copy; {currentYear} Treishvaam Group. All rights reserved.
            </p>
            <p className="font-serif italic tracking-wide text-corporate-600">
              Driving Global Excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Top Button */}
      <ScrollToTopButton className="fixed bottom-8 right-8 hidden lg:flex shadow-glass border border-white/50 bg-white/80 hover:bg-gold-50 text-corporate-900" />
    </footer>
  )
}