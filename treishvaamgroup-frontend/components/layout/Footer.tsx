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
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100">
      {/* Newsletter CTA */}
      <FooterNewsletter />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-600 to-accent-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-lg font-bold text-white">Treishvaam</span>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
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
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-accent-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={`company-${idx}`}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-accent-400 transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, idx) => (
                <li key={`resources-${idx}`}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-accent-400 transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-5">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, idx) => (
                <li key={`legal-${idx}`}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-accent-400 transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-5">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:treishvaamgroup@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-accent-400 transition-colors text-sm group"
              >
                <FiMail className="w-5 h-5 flex-shrink-0" />
                <span>treishvaamgroup@gmail.com</span>
              </a>
              <a
                href="tel:+918178529633"
                className="flex items-center gap-3 text-slate-400 hover:text-accent-400 transition-colors text-sm group"
              >
                <FiPhone className="w-5 h-5 flex-shrink-0" />
                <span>+91 81785 29633</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <FiMapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Corporate Office<br />Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              &copy; {currentYear} Treishvaam Group. All rights reserved.
            </p>
            <p>
              Driving Global Excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Top Button */}
      <ScrollToTopButton className="fixed bottom-8 right-8 hidden lg:flex" />
    </footer>
  )
}