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
 * - EDITED (Phase 13.6 — 2026 AI Search crawler explicit allow):
 * • Added explicit Allow rules for OAI-SearchBot, ChatGPT-User, GPTBot, Google-Extended, PerplexityBot, ClaudeBot, Anthropic-AI, Applebot-Extended, Meta-ExternalAgent, DuckAssistBot, YouBot on public paths; retained disallow for /private/ /admin/ /dashboard/.
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

import { MetadataRoute } from 'next';

// Fallback to non-www canonical domain
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://treishvaamgroup.com';

const AI_CRAWLERS = ['GPTBot','OAI-SearchBot','ChatGPT-User','Google-Extended','PerplexityBot','ClaudeBot','Anthropic-AI','Applebot-Extended','Meta-ExternalAgent','DuckAssistBot','YouBot'];

export default function robots(): MetadataRoute.Robots {
  const rules = AI_CRAWLERS.map((userAgent) => ({
    userAgent,
    allow: '/',
    disallow: ['/private/', '/admin/', '/dashboard/'],
  }));
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/private/', '/admin/', '/dashboard/'] },
      ...rules,
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
