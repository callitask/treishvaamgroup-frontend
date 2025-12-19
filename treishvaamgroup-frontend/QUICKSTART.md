# Treishvaam Group - Quick Start Guide

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### First Time Setup

```bash
# Navigate to frontend directory
cd treishvaamgroup-frontend

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

### Development
```bash
npm run dev
```
Starts the Next.js development server with hot reload.

### Production Build
```bash
npm run build
```
Creates optimized production build in `.next` folder.

### Production Server
```bash
npm start
```
Runs the production server (build must be created first).

### Linting
```bash
npm run lint
```
Runs ESLint on the project.

## Project Structure Explained

### `/app` - Pages (App Router)
- `page.tsx` - Home page
- `layout.tsx` - Root layout (wraps all pages)
- Subdirectories like `/about`, `/contact` are routes

### `/components` - Reusable Components
- `layout/` - Navbar and Footer (used on all pages)
- `home/` - Components specific to homepage

### Configuration Files
- `tsconfig.json` - TypeScript settings
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `.env.local` - Environment variables

## Styling

Tailwind CSS is configured and ready to use. Add classes directly to elements:

```tsx
<div className="max-w-4xl mx-auto px-4 py-12">
  <h1 className="text-3xl font-bold">Hello World</h1>
</div>
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Automatic deployments on push

### Other Platforms
- Netlify
- AWS Amplify
- Render
- DigitalOcean App Platform

All support Next.js directly.

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Build fails
```bash
# Check for TypeScript errors
npm run lint

# Rebuild from scratch
rm -rf .next
npm run build
```

## Support

For Next.js documentation: https://nextjs.org/docs
For Tailwind CSS: https://tailwindcss.com/docs

---

**Happy coding!** 🚀
