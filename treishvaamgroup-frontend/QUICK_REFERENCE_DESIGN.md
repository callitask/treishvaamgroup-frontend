/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Enterprise Design System reference for the Treishvaam Group Next.js Frontend.
 *
 * Scope:
 * - Tailwind configuration, Component standards, Typography, API Usage, and Zero-Trust Tracking components.
 *
 * Non-Negotiables:
 * - Do not introduce arbitrary colors outside the corporate/heritage palette.
 * - Always use `apiClient` for requests to ensure `X-Tenant-ID` is attached.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED: Initial Design System documentation.
 * - EDITED:
 * • Added "SEO & Zero-Trust Tagging Components" section to document `ThirdPartyScripts.tsx` and `GoogleAdSense.tsx`.
 */

# Quick Reference - Enterprise Design System

## 1. 🎨 Color Palette

### Primary Colors
- **Corporate Navy** (Headings, Primary Text): `text-corporate-900`
- **Corporate Blue** (Buttons, Links): `bg-corporate-800`, `hover:bg-corporate-900`
- **Heritage Gold** (Accents, CTAs): `bg-heritage-500`, `hover:bg-heritage-600`

### Quick Usage Examples
```html
<h1 class="font-serif text-4xl font-bold text-corporate-900">Title</h1>

<button class="bg-corporate-800 hover:bg-corporate-900 text-white font-semibold px-6 py-3 rounded-lg">Button</button>

<button class="bg-heritage-500 hover:bg-heritage-600 text-white font-semibold px-6 py-3 rounded-lg">CTA</button>

<p class="text-slate-600 font-light">Description text...</p>
```

## 2. 📝 Typography

### Font Families
```css
Headings: font-serif (Merriweather - Georgia serif)
Body: font-sans (Inter - clean sans-serif)
```

### Font Size Classes
```html
<h1 class="text-7xl">Extra Large</h1>  <h2 class="text-6xl">Large</h2>       <p class="text-lg">Large body text</p>     <p class="text-base">Normal body text</p>  ```

## 3. 🧩 UI Components

### Core Layout UI
```tsx
import { Button, Card, Section, Badge } from '@/components/ui'

<Button variant="primary" size="md">Save</Button>

<Card bordered hover clickable>
  <h3>Card Title</h3>
</Card>

<Section bgColor="corporate" spacingY="lg">
  <h2>Section with dark background</h2>
</Section>
```

### SEO & Zero-Trust Tagging Components (CRITICAL)
```tsx
import ThirdPartyScripts from '@/components/ThirdPartyScripts'
import GoogleAdSense from '@/components/GoogleAdSense'

// 1. Analytics & Ads Bootstrapper (Plumbed into app/layout.tsx)
// Implements 0ms TBT Interaction-based loading using NEXT_PUBLIC_* vars.
<ThirdPartyScripts />

// 2. Individual Ad Slot
// Safely bypasses rendering if NEXT_PUBLIC_ADSENSE_CLIENT_ID is missing.
<GoogleAdSense slot="1234567890" style={{ display: 'block' }} format="auto" />
```

## 4. 🚀 API Client Usage

```typescript
import { apiClient } from '@/src/api/client'

// GET request - X-Tenant-ID is automatically added by the interceptor
const businesses = await apiClient.get('/api/businesses')

// POST request
const result = await apiClient.post('/api/businesses', {
  name: 'New Business',
  sector: 'Energy'
})
```

## 5. ✅ Quality Checklist

Before deploying any component:
- [ ] Fonts loaded (serif for headings, sans for body)
- [ ] Colors match enterprise palette (corporate-900, heritage-500)
- [ ] Text contrast WCAG AA compliant (4.5:1)
- [ ] Responsive: works on mobile (xs), tablet (md), desktop (lg)
- [ ] API calls include tenant header (`X-Tenant-ID`)
- [ ] **Analytics/Ads do NOT use `<script>` tags directly (must use `ThirdPartyScripts.tsx`)**