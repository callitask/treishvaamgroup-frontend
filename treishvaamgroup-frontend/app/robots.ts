/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Next.js App Router robots.txt generator for Treishvaam Group Parent site.
 *
 * Scope:
 * - Instructs crawlers to allow all public traffic while disallowing internal private/admin routes.
 * - Dynamically points to the canonical sitemap XML.
 *
 * Critical Dependencies:
 * - Frontend: Utilizes `NEXT_PUBLIC_SITE_URL` for environment-driven resolution.
 *
 * Security Constraints:
 * - Prevents indexing of /private/, /admin/, and /dashboard/.
 *
 * Non-Negotiables:
 * - Must always point to the apex canonical domain.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED:
 * • AI-CONTEXT header.
 * • No functional behavior changed.
 */

import { MetadataRoute } from 'next';

// Fallback to non-www canonical domain
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://treishvaamgroup.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/dashboard/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}