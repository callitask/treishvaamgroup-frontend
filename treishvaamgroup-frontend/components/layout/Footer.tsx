import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import ScrollToTopButton from '@/components/ScrollToTopButton'

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
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="ml-2 text-xl font-bold">Treishvaam Group</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Global leader in business excellence and innovation across multiple sectors.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-700 hover:bg-accent flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@treishvaamgroup.com"
                className="flex items-center text-gray-300 hover:text-secondary transition-colors text-sm"
              >
                <FiMail className="w-4 h-4 mr-2" />
                info@treishvaam.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center text-gray-300 hover:text-secondary transition-colors text-sm"
              >
                <FiPhone className="w-4 h-4 mr-2" />
                +91 (0) 98765 43210
              </a>
              <div className="flex items-start text-gray-300 text-sm">
                <FiMapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Corporate Office, Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} Treishvaam Group. All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Designed & Developed with <span className="text-accent">❤</span> by our team
            </p>
          </div>
        </div>
      </div>

      {/* Floating Top Button */}
      <ScrollToTopButton className="fixed bottom-8 right-8 hidden lg:flex" />
    </footer>
  )
}
