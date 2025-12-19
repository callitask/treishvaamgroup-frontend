# Quick Reference - Enterprise Design System

## 🎨 Color Palette

### Primary Colors
- **Corporate Navy** (Headings, Primary Text): `text-corporate-900`
- **Corporate Blue** (Buttons, Links): `bg-corporate-800`, `hover:bg-corporate-900`
- **Heritage Gold** (Accents, CTAs): `bg-heritage-500`, `hover:bg-heritage-600`

### Quick Usage Examples
```html
<!-- Headlines -->
<h1 class="font-serif text-4xl font-bold text-corporate-900">Title</h1>

<!-- Primary Button -->
<button class="bg-corporate-800 hover:bg-corporate-900 text-white font-semibold px-6 py-3 rounded-lg">Button</button>

<!-- Secondary Button (Heritage Gold) -->
<button class="bg-heritage-500 hover:bg-heritage-600 text-white font-semibold px-6 py-3 rounded-lg">CTA</button>

<!-- Body Text -->
<p class="text-slate-600 font-light">Description text...</p>
```

---

## 📝 Typography

### Font Families
```css
Headings: font-serif (Merriweather - Georgia serif)
Body: font-sans (Inter - clean sans-serif)
```

### Font Size Classes
```html
<!-- Headings -->
<h1 class="text-7xl">Extra Large</h1>  <!-- 4.5rem -->
<h2 class="text-6xl">Large</h2>       <!-- 3.75rem -->
<h3 class="text-5xl">Medium</h3>      <!-- 3rem -->
<h4 class="text-4xl">Small</h4>       <!-- 2.25rem -->

<!-- Body -->
<p class="text-lg">Large body text</p>     <!-- 1.125rem -->
<p class="text-base">Normal body text</p>  <!-- 1rem -->
<p class="text-sm">Small body text</p>     <!-- 0.875rem -->
```

### Font Weights
```html
<h1 class="font-bold">700 - Bold headings</h1>
<h2 class="font-semibold">600 - Section titles</h2>
<p class="font-light">300 - Descriptions</p>
<p class="font-normal">400 - Regular body</p>
```

---

## 🧩 UI Components

### Button
```typescript
import { Button } from '@/components/ui'

<Button variant="primary" size="md">Save</Button>
<Button variant="secondary" size="lg">Action</Button>
<Button variant="outline" fullWidth>Cancel</Button>
<Button variant="ghost" isLoading>Loading...</Button>
```

### Card
```typescript
import { Card } from '@/components/ui'

<Card bordered hover clickable>
  <h3>Card Title</h3>
  <p>Card content here</p>
</Card>
```

### Section
```typescript
import { Section } from '@/components/ui'

<Section bgColor="corporate" spacingY="lg">
  <h2>Section with dark background</h2>
</Section>

<Section bgColor="slate">
  <h2>Light slate background</h2>
</Section>
```

### Badge
```typescript
import { Badge } from '@/components/ui'

<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
```

---

## 🎯 Layout Patterns

### Hero Section
```html
<div class="bg-gradient-to-br from-corporate-900 to-corporate-950 py-32">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="font-serif text-6xl font-bold text-white mb-6">
      Main Title
    </h1>
    <p class="text-xl text-slate-200">Subtitle here</p>
  </div>
</div>
```

### 3-Column Grid (Auto-responsive)
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Items automatically stack on mobile -->
</div>
```

### Cards with Hover
```html
<div class="bg-white border border-slate-200 rounded-lg p-8 
            hover:border-heritage-300 hover:shadow-lg transition-all">
  <content/>
</div>
```

---

## 🔗 Common Patterns

### Gradient Text Accent
```html
<span class="text-heritage-400">Highlighted text</span>
```

### Link with Arrow
```html
<a href="#" class="flex items-center gap-2 text-heritage-600 
                    font-semibold group hover:gap-3 transition-all">
  Learn More
  <FiArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</a>
```

### Hover Scale Icon
```html
<div class="group">
  <Icon class="w-8 h-8 group-hover:scale-110 transition-transform" />
</div>
```

### Accent Line Animation
```html
<div class="h-1 w-12 bg-gradient-to-r from-heritage-500 to-heritage-400 
            rounded-full group-hover:w-full transition-all duration-500"></div>
```

---

## 📱 Responsive Classes Cheat Sheet

```css
/* Mobile First - Base styles apply to all sizes */
/* Then override with breakpoints */

sm: 640px   /* Tablets horizontal */
md: 768px   /* Small desktops */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */

/* Examples */
class="w-full md:w-1/2 lg:w-1/3"        /* Width responsive */
class="hidden lg:flex"                   /* Show only on desktop */
class="text-2xl md:text-4xl lg:text-6xl" /* Text size responsive */
class="px-4 md:px-8 lg:px-12"            /* Padding responsive */
```

---

## 🚀 API Client Usage

```typescript
import { apiClient } from '@/src/api/client'

// GET request - X-Tenant-ID automatically added
const businesses = await apiClient.get('/api/businesses')

// POST request
const result = await apiClient.post('/api/businesses', {
  name: 'New Business',
  sector: 'Energy'
})

// With query parameters
const data = await apiClient.get('/api/sectors', {
  params: { limit: 10, offset: 0 }
})
```

---

## 📐 Spacing Scale

```css
1 = 0.25rem (4px)
2 = 0.5rem (8px)
3 = 0.75rem (12px)
4 = 1rem (16px)
6 = 1.5rem (24px)
8 = 2rem (32px)
12 = 3rem (48px)
16 = 4rem (64px)
20 = 5rem (80px)
24 = 6rem (96px)
32 = 8rem (128px)

/* Usage */
class="mt-8 mb-6 px-4 py-8"
```

---

## 🎬 Animation Classes

```css
animate-fade-in    /* 0.5s fade in */
animate-slide-up   /* 0.5s slide up */
animate-slide-down /* 0.5s slide down */

/* Custom transitions */
transition-all duration-300
group-hover:scale-110
group-hover:translate-x-1
group-hover:text-heritage-600
```

---

## 🔍 Common Components Location

```
Button: components/ui/Button.tsx
Card: components/ui/Card.tsx
Section: components/ui/Section.tsx
Badge: components/ui/Badge.tsx

Navbar: components/layout/Navbar.tsx
Footer: components/layout/Footer.tsx

Home Sections:
  - HeroSectionNew: components/home/HeroSectionNew.tsx
  - MetricsSection: components/home/MetricsSection.tsx
  - SectorsSection: components/home/SectorsSection.tsx
  - SustainabilitySection: components/home/SustainabilitySection.tsx
  - NewsSection: components/home/NewsSection.tsx

Pages:
  - Home: app/page.tsx
  - About: app/about/page.tsx
  - Businesses: app/businesses/page.tsx
  - Investors: app/investors/page.tsx
```

---

## ✅ Quality Checklist

Before deploying any component:
- [ ] Fonts loaded (serif for headings, sans for body)
- [ ] Colors match enterprise palette (corporate-900, heritage-500)
- [ ] Text contrast WCAG AA compliant (4.5:1)
- [ ] Responsive: works on mobile (xs), tablet (md), desktop (lg)
- [ ] Hover states implemented
- [ ] Shadows applied (shadow-subtle, shadow-elevation)
- [ ] Border radius consistent (rounded-lg, rounded-xl)
- [ ] Spacing follows scale (multiples of 4px)
- [ ] API calls include tenant header
- [ ] No console errors/warnings

---

## 🎨 Component Usage Quick Examples

### Page with Hero + Content Sections
```typescript
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Section bgColor="corporate" spacingY="lg">
          <h1 class="font-serif text-6xl text-white">Hero Title</h1>
        </Section>
        
        <Section spacingY="lg">
          <h2 class="font-serif text-5xl text-corporate-900">Content</h2>
          <p class="text-slate-600 font-light">Description...</p>
        </Section>
      </main>
      <Footer />
    </>
  )
}
```

---

**Last Updated**: December 19, 2024
**Status**: Ready for Production ✅
