/**
 * AI-CONTEXT: SEO & GSC ENTERPRISE ARCHITECTURE LEDGER
 * * Purpose:
 * - Centralized, immutable record of all Search Engine Optimization (SEO), Google Search Console (GSC), 
 * and Cloudflare Edge configuration attempts, failures, and validated architectures across the ecosystem.
 * - Prevents circular problem-solving by future AI agents by documenting exactly WHY certain approaches 
 * (like dynamic sitemaps or CSR rendering) were abandoned.
 * * Scope:
 * - Covers Parent Domain (treishvaamgroup.com)
 * - Covers Finance Subdomain (treishfin.treishvaamgroup.com)
 * - Covers Agro Subdomain (tagro.treishvaamgroup.com)
 * - Details Cloudflare Workers, KV bindings, WAF Rules, and Bulk Redirects related to SEO.
 * * Critical Dependencies:
 * - Cloudflare DNS & Page Rules (Authoritative layer for canonicalization).
 * - Cloudflare Workers (Edge-side schema injection & AI bot responses).
 * - Parent Website Navbar/Footer (Authoritative cross-domain link graph).
 * * Non-Negotiables:
 * - THIS FILE MUST NEVER BE DELETED, SUMMARIZED, OR TRUNCATED.
 * - ALL FUTURE SEO OR ARCHITECTURAL CHANGES MUST BE APPENDED HERE.
 */

# ENTERPRISE SEO & GSC OPTIMIZATION HISTORY

## 1. THE "CRAWLED - CURRENTLY NOT INDEXED" SUBDOMAIN PENALTY
**Issue:** Both `treishfin` and `tagro` were discovered by Google but placed in the "Crawled - currently not indexed" bucket.
**Root Cause Diagnosis:** Subdomain Isolation. Google treats subdomains as entirely separate entities with zero inherited authority. Without external backlinks pointing to the subdomains, Google's algorithm assigned them a crawl priority of near-zero, resulting in thin-content classification despite successful Rich Results validation.
**Resolution (The Link Graph Architecture):** Implemented hardcoded, absolute cross-domain links in the Parent Domain's global Navbar and Footer. This forcefully funnels the Parent Domain's established PageRank down into the isolated subdomains, satisfying Google's "Referring Page" authority requirement.

## 2. SITEMAP ARCHITECTURE EVOLUTION
**Failed Attempt 1:** Cloudflare Worker dynamic sitemap generation.
*Reason for failure:* Googlebot requires persistent, consistently accessible XML files for reliable attribution. The Worker interception caused intermittent fetch failures and attribution drops in GSC ("No referring sitemaps detected").
**Current Validated Method:** Static `sitemapindex` hosted in the `public/` directory of the frontends, referencing persistent paths.
*Rule:* Sitemaps must remain static discovery files. Subdomain sitemaps must be submitted to independent GSC Subdomain properties.

## 3. CLOUDFLARE EDGE INFRASTRUCTURE (THE SEO STACK)
### A. The 301 Canonical Bulk Redirect
**Purpose:** Prevent duplicate content indexing between `www` and apex domains.
**Implementation:** Cloudflare Rules -> Bulk Redirects (NOT Pages `_redirects`).
**Exact Expression:** `(http.host in {"www.treishfin.treishvaamgroup.com" "www.treishvaamgroup.com" "www.tagro.treishvaamgroup.com"})`
**Target:** `concat("https://", substring(http.host, 4), http.request.uri.path)`
*Rule:* Never handle host canonicalization in application code or Pages configuration.

### B. The SEO Worker (`treishfin-seo-worker`)
**Purpose:** Edge-side SEO rendering, Rich-result schema delivery, and SEO continuity during backend downtime.
**KV Namespace:** Utilized to cache structured data and schema payloads to prevent backend API exhaustion from aggressive crawler bots.
**Past Failure:** Attempted "HTML Materializer" for React SPA. 
*Reason for abandonment:* While it hydrated the HTML shell, it did not solve the primary issue (lack of domain authority/inbound links). The Worker is now strictly optimized for JSON-LD structured data injection and caching.

## 4. DOMAIN-SPECIFIC HISTORIES

### Treishvaam Finance (`treishfin`)
- **Tech Stack:** React SPA.
- **Challenge:** Client-Side Rendering (CSR) historically causes indexing delays.
- **Rich Results:** Successfully passing 4 valid items (Local Business, Organization, etc.).
- **Current Status:** Awaiting re-crawl via Parent Domain Link Graph to overcome "Crawled - currently not indexed".

### Treishvaam Agro (`tagro`)
- **Tech Stack:** Next.js (SSR).
- **Challenge:** Initially lacked structured JSON-LD schema, resulting in 0 Rich Results.
- **Current Status:** Benefiting from Parent Domain Link Graph. Schema injection slated for future Next.js `layout.tsx` updates.

### Treishvaam Group (Parent)
- **Tech Stack:** Next.js.
- **Current Status:** Successfully indexed.
- **Role:** Acts as the "Authority Umbrella." The sole provider of PageRank to the enterprise subdomains via explicit global navigation links.

## IMMUTABLE CHANGE HISTORY (DO NOT DELETE)

- ADDED: Parent-to-Subdomain Link Graph Architecture
  • Date: 2026-04-13
  • Reason: To resolve "Crawled - currently not indexed" by passing domain authority from the indexed apex domain to the orphaned subdomains.
  • Files Modified: Parent `Navbar.tsx` and `Footer.tsx`.

- REMOVED: Worker-based dynamic sitemap generation
  • Date: Prior Phase
  • Reason: Caused GSC attribution failures. Replaced by static index files.

- REJECTED ATTEMPT: Heavy HTML Materializer for React SPA
  • Reason: Over-engineered solution that did not address the root indexing gatekeeper (Domain Authority / PageRank). Rich results were already passing; authority was the missing link.