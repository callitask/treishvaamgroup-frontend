/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Global footer for the Parent domain.
 * - CRITICAL SEO FUNCTION: Secondary distributor of domain authority to subdomains.
 *
 * Scope:
 * - Renders secondary navigation, corporate links, and legal disclaimers.
 *
 * Critical Dependencies:
 * - Frontend: Shared across all parent domain routes.
 * - SEO: Provides site-wide redundant crawl paths to ensure deep indexing of child domains.
 *
 * Security Constraints:
 * - Subdomain links MUST be absolute HTTPS URLs.
 *
 * Non-Negotiables:
 * - Must maintain the absolute link structure for Treishvaam Finance and Treishvaam Agro.
 *
 * Change Intent:
 * - Hardcoding the Link Graph architecture to flow indexing authority to subdomains.
 *
 * Future AI Guidance:
 * - The footer acts as a safety net for web crawlers. Never remove the external subdomain links.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Added absolute cross-domain links in the "Our Businesses" section.
 * • Why the edit was required: Subdomains were suffering from Subdomain Isolation penalty in GSC.
 * • What behavior must remain unchanged: The absolute URL structures pointing to the subdomains.
 * * - EDITED:
 * • Updated the Treishvaam Finance external link to the new apex domain: treishvaamfinance.com.
 * • Why the edit was required: Aiding SEO migration to prevent link equity loss via 301 redirect chains.
 * • What behavior must remain unchanged: Links must remain absolute and crawler-accessible.
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-tight">Treishvaam Group</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building sustainable enterprises for a better tomorrow. Innovating across finance, agriculture, and technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/treishvaamgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://twitter.com/treishvaamgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Businesses</h3>
            <ul className="space-y-4">
              {/* SEO CRITICAL: Absolute cross-domain links */}
              <li><a href="https://treishvaamfinance.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">Treishvaam Finance <span className="text-xs opacity-50">↗</span></a></li>
              <li><a href="https://tagro.treishvaamgroup.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">Treishvaam Agro <span className="text-xs opacity-50">↗</span></a></li>
              <li><span className="text-gray-600 cursor-not-allowed">Treishvaam Hiring (Coming Soon)</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Corporate</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/investors" className="text-gray-400 hover:text-white transition-colors">Investor Relations</Link></li>
              <li><Link href="/sustainability" className="text-gray-400 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/newsroom" className="text-gray-400 hover:text-white transition-colors">Newsroom</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-sm">Electronic City, Bangalore<br/>Karnataka, IN 560100</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:treishvaamgroup@gmail.com" className="text-sm hover:text-white transition-colors">treishvaamgroup@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-sm">+91 81785 29633</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Treishvaam Group. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;