# Treishvaam Group - Official Website

A modern, enterprise-level website built with Next.js 15, React 19, and TypeScript. Designed to match corporate-grade professional standards with comprehensive features for corporate communications, investor relations, and business information.

## 📋 Quick Overview

- **Framework**: Next.js 15.5.9 with React 19.1.1
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4.19
- **Icons**: react-icons 5.5.0
- **Deployment Ready**: Static generation with 14 pre-rendered pages

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or higher
- npm package manager

### Installation & Development

```bash
# Navigate to frontend directory
cd treishvaamgroup-frontend

# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
treishvaamgroup/
├── treishvaamgroup-frontend/          ← Next.js 15 Application
│   ├── app/                           # Pages and layouts
│   │   ├── layout.tsx                 # Root layout
│   │   ├── page.tsx                   # Homepage
│   │   ├── globals.css                # Global styles & animations
│   │   ├── about/                     # About company
│   │   ├── businesses/                # Business units
│   │   ├── careers/                   # Career opportunities
│   │   ├── contact/                   # Contact form
│   │   ├── investors/                 # Investor relations
│   │   ├── newsroom/                  # Press releases
│   │   ├── privacy/                   # Privacy policy
│   │   ├── sustainability/            # Sustainability info
│   │   ├── terms/                     # Terms of use
│   │   └── not-found.tsx              # 404 page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Navigation bar
│   │   │   └── Footer.tsx             # Footer
│   │   ├── home/
│   │   │   ├── HeroSection.tsx        # Hero section
│   │   │   └── SnapshotSection.tsx    # Key metrics
│   │   └── ScrollToTopButton.tsx      # Scroll-to-top button
│   ├── public/                        # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── next.config.js
│   └── postcss.config.ts
└── README.md (this file)
```

## 🎯 Key Features

### Pages Available
- **Homepage** (`/`) - Hero section with key metrics
- **About Us** (`/about`) - Company mission, values, team
- **Our Businesses** (`/businesses`) - 6 business units showcase
- **Careers** (`/careers`) - Job opportunities and culture
- **Investor Relations** (`/investors`) - Financial metrics and documents
- **Newsroom** (`/newsroom`) - Press releases and articles
- **Sustainability** (`/sustainability`) - Environmental initiatives
- **Contact** (`/contact`) - Contact form and information
- **Legal** (`/privacy`, `/terms`) - Privacy and terms pages
- **404** - Professional error page

### Technical Features
- ✅ Static Generation for all pages (14 pre-rendered)
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Enterprise color palette with Tailwind CSS
- ✅ Smooth animations and transitions
- ✅ Sticky navigation bar
- ✅ Social media links in footer
- ✅ Professional card-based layouts
- ✅ TypeScript for type safety
- ✅ SEO optimized

## 🎨 Design System

### Color Palette
- **Primary**: Deep Blue (#1a24d7 to #f0f4ff)
- **Secondary**: Gold (#d4a574) - Accents
- **Accent**: Red (#c41e3a) - CTAs

### Typography
- **Headings**: Poppins 600-900
- **Body**: Inter 400-500
- **Buttons**: Inter 600-700

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🛠️ Technology Stack

### Core Dependencies
```json
{
  "react": "19.1.1",
  "react-dom": "19.1.1",
  "next": "15.5.9",
  "react-icons": "5.5.0",
  "tailwindcss": "3.4.19",
  "typescript": "5.x"
}
```

### Build & Development Tools
- **Next.js App Router** - File-based routing
- **TypeScript Compiler** - Type checking
- **ESLint** - Code quality
- **Tailwind CSS** - Utility-first styling
- **PostCSS** - CSS processing

## 📊 Build Information

### Production Build Output
- Pages generated: 14 (all static)
- First Load JS: ~109 kB
- Page size: ~1.68 kB each
- Compile time: ~3.4 seconds
- Optimized chunks: 2 main + shared modules

### Build Process
```bash
npm run build
# Creates .next folder with production-ready files
# All pages pre-rendered as static HTML
# Images optimized automatically
```

## 🔒 Security & Best Practices

### Security Measures
- ✅ No secrets or credentials in code
- ✅ Environment variables for sensitive data
- ✅ HTTPS ready for deployment
- ✅ GDPR-compliant architecture
- ✅ Input validation on forms

### Code Quality
- ✅ Full TypeScript type safety
- ✅ Semantic HTML structure
- ✅ WCAG accessibility standards
- ✅ Responsive mobile-first design
- ✅ Performance optimized

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Automatic deployment from GitHub
# Configure in Vercel dashboard
# Supports: Preview, Production environments
```

### Docker/Manual Deployment
```bash
# Build production bundle
npm run build

# Start production server
npm start

# Server runs on port 3000
```

### Environment Variables
For deployment, ensure these are set in your platform:
- Any API endpoints (if future integrations)
- Analytics tracking IDs (if needed)
- CDN URLs (if custom CDN)

**Note**: No database credentials, API keys, or passwords are stored in this repository.

## 📱 Responsive Design Features

- **Mobile Menu**: Hamburger navigation on small screens
- **Flexible Grids**: Auto-adjusting layouts
- **Touch-Friendly**: Proper button and link sizes
- **Optimized Images**: Responsive image sizing
- **Performance**: Mobile-optimized bundle sizes

## 🔧 Configuration

### tsconfig.json
```json
{
  "strict": true,
  "baseUrl": ".",
  "paths": { "@/*": ["./*"] }
}
```

### tailwind.config.ts
- Custom enterprise color palette
- Extended typography scale
- Animation definitions (fadeIn, slideUp, slideDown)
- Box shadows and border radius

### next.config.js
- React strict mode: enabled
- Image optimization: enabled
- Performance optimization: enabled

## 📈 Performance Optimization

- **Static Generation**: 14 pages pre-rendered
- **Code Splitting**: Automatic chunk optimization
- **Image Lazy Loading**: Next.js Image component
- **CSS Optimization**: Tailwind tree-shaking
- **Font Loading**: Google Fonts preloading

## 🧪 Testing & Quality

```bash
# Run linting
npm run lint

# Type checking is performed during build
npm run build

# Development with hot reload
npm run dev
```

## 📚 Documentation Files

- **README.md** (this file) - Project overview
- **treishvaamgroup-frontend/** - Main application
- **package.json** - Dependencies and scripts

## 🔄 Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes** to pages/components
3. **Hot reload** - Changes appear immediately
4. **Test responsiveness** - Mobile, tablet, desktop
5. **Build test**: `npm run build` before committing
6. **Commit**: `git add . && git commit -m "message"`

## 🤝 Contributing

When contributing:
- Follow TypeScript strict mode
- Use Tailwind CSS for styling
- Test on multiple devices
- Run build before committing
- Write descriptive commit messages

## ✅ Checklist for New Pages

When adding new pages:
- [ ] Create page directory under `app/`
- [ ] Add `page.tsx` with TypeScript
- [ ] Import Navbar and Footer
- [ ] Use enterprise color palette
- [ ] Test responsiveness
- [ ] Run `npm run build` to verify
- [ ] Commit with descriptive message

## 📞 Support

For questions or issues:
- Check existing pages for patterns
- Review Tailwind CSS documentation
- Review Next.js 15 documentation
- Check TypeScript strict mode requirements

## 📋 Version Information

- **Project**: Treishvaam Group Website
- **Version**: 1.0.0 (Enterprise Edition)
- **Framework**: Next.js 15.5.9
- **React**: 19.1.1
- **TypeScript**: 5.x
- **Tailwind CSS**: 3.4.19
- **Last Updated**: December 2025

---

**Status**: ✅ Production Ready  
**Build Status**: ✅ All pages compiling successfully  
**Responsive**: ✅ Mobile, Tablet, Desktop optimized  
**Performance**: ✅ Optimized with static generation
│   ├── app/                     ← Pages (13 routes)
│   ├── components/              ← React components
│   ├── package.json
│   └── ...
├── package.json                 ← Root scripts
├── MIGRATION_COMPLETE.md        ← Migration details
└── DEPLOYMENT_GUIDE.md          ← Deployment instructions
```

## ✨ What's New

✅ **Next.js 15** - Modern React framework
✅ **TypeScript** - Type-safe development  
✅ **Tailwind CSS** - Utility-first styling
✅ **App Router** - File-based routing
✅ **Static Pre-rendering** - Lightning-fast pages
✅ **Responsive Design** - Mobile-first
✅ **SEO Optimized** - Metadata configured

## 📄 Pages

- Home (`/`)
- About Us (`/about`)
- Our Businesses (`/businesses`)
- Careers (`/careers`)
- Contact (`/contact`)
- Investors (`/investors`)
- Newsroom (`/newsroom`)
- Privacy Policy (`/privacy`)
- Sustainability (`/sustainability`)
- Terms of Use (`/terms`)

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Run production server |
| `npm run lint` | Run linter |

## 📊 Performance

- **13 pages** optimized and pre-rendered
- **~100KB** First Load JS (shared)
- **Instant navigation** with client-side routing
- **Automatic optimization** for images and fonts

## 🌐 Deployment

Ready to deploy to any platform:

- **Vercel** (recommended) - 1-click deploy
- **Netlify** - Automatic from GitHub
- **AWS Amplify** - Full AWS integration
- **Docker** - Self-hosted option
- **DigitalOcean, Railway, Render** - See deployment guide

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🐛 Troubleshooting

**Module not found?**
```bash
rm -rf node_modules .next && npm install
```

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Build failing?**
```bash
npm run lint  # Check for errors
npm run build -- --debug  # Debug build
```

## 📝 License

All rights reserved © Treishvaam Group

---

**Status**: ✅ Production Ready | Last Updated: December 19, 2025
