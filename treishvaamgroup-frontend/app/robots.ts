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