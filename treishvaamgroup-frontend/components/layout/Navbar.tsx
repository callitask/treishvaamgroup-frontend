"use client";
/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Global navigation header for the Parent domain.
 * - CRITICAL SEO FUNCTION: Acts as the primary PageRank distributor to isolated subdomains.
 *
 * Scope:
 * - Renders navigation links, handles mobile menu state, and enforces the enterprise link graph.
 *
 * Critical Dependencies:
 * - Frontend: Shared across all parent domain routes.
 * - SEO: Googlebot relies on these absolute links to discover and index treishfin and tagro.
 *
 * Security Constraints:
 * - Subdomain links MUST be absolute HTTPS URLs.
 * - No rel="nofollow" attributes may be added to internal enterprise links.
 *
 * Non-Negotiables:
 * - The links to Treishvaam Finance and Treishvaam Agro must remain permanently crawlable in the DOM.
 *
 * Change Intent:
 * - Resolving Next.js build failure by explicitly marking as a Client Component.
 *
 * Future AI Guidance:
 * - Do not remove the absolute links to the subdomains. They are the only mechanism keeping 
 * the subdomains from falling into Google's "Crawled - currently not indexed" orphan bucket.
 * - Must remain a Client Component due to interactive mobile menu (`useState`).
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Added absolute cross-domain links for Treishvaam Finance and Treishvaam Agro.
 * • Why the edit was required: Subdomains were suffering from Subdomain Isolation penalty in GSC.
 * • What behavior must remain unchanged: The absolute URL structures pointing to the subdomains.
 *
 * - EDITED (FIX):
 * • Added "use client"; directive at the top of the file.
 * • Why the edit was required: Next.js 15 App Router failed to build because `useState` was used in a Server Component.
 * • What behavior must remain unchanged: SEO link graph remains intact (SSR still processes initial HTML for Googlebot).
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo512.webp" alt="Treishvaam Group Logo" width={48} height={48} className="w-12 h-12" priority />
              <span className="font-bold text-2xl tracking-tight text-gray-900">Treishvaam Group</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-700 transition-colors font-medium">About</Link>
            <Link href="/businesses" className="text-gray-600 hover:text-blue-700 transition-colors font-medium">Businesses</Link>
            
            {/* SEO CRITICAL: Absolute cross-domain links for PageRank distribution */}
            <a href="https://treishfin.treishvaamgroup.com" className="text-gray-600 hover:text-blue-700 transition-colors font-medium" target="_blank" rel="noopener noreferrer">Finance</a>
            <a href="https://tagro.treishvaamgroup.com" className="text-gray-600 hover:text-blue-700 transition-colors font-medium" target="_blank" rel="noopener noreferrer">Agro</a>
            
            <Link href="/sustainability" className="text-gray-600 hover:text-blue-700 transition-colors font-medium">Sustainability</Link>
            <Link href="/contact" className="px-5 py-2.5 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors font-medium">Contact Us</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col">
            <Link href="/about" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md">About</Link>
            <Link href="/businesses" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md">Businesses</Link>
            
            {/* SEO CRITICAL: Absolute cross-domain links for PageRank distribution */}
            <a href="https://treishfin.treishvaamgroup.com" className="block px-3 py-3 text-base font-medium text-blue-700 hover:bg-blue-50 rounded-md">Treishvaam Finance ↗</a>
            <a href="https://tagro.treishvaamgroup.com" className="block px-3 py-3 text-base font-medium text-green-700 hover:bg-green-50 rounded-md">Treishvaam Agro ↗</a>
            
            <Link href="/sustainability" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md">Sustainability</Link>
            <Link href="/contact" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;