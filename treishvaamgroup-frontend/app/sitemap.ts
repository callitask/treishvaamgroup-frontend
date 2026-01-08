import { MetadataRoute } from 'next';

// Define the base URL from env or fallback
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.treishvaamgroup.com';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://treishfin.treishvaamgroup.com/api/v1';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Define static routes
  const routes = [
    '',
    '/about',
    '/sectors',
    '/sustainability',
    '/news',
    '/contact',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  try {
    // 2. Fetch dynamic blog posts from backend
    // Adjust the endpoint if your API path for listing posts is different
    const response = await fetch(`${API_URL}/posts?page=0&size=100`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error('Failed to fetch posts for sitemap');
      return routes;
    }

    const data = await response.json();
    const posts = data.content || []; // Assuming Spring Data Page structure

    // 3. Map posts to sitemap entries
    const postRoutes = posts.map((post: any) => ({
      url: `${BASE_URL}/news/${post.slug || post.id}`,
      lastModified: post.updatedAt || post.createdAt || new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    return [...routes, ...postRoutes];
  } catch (error) {
    console.error('Sitemap generation error:', error);
    return routes;
  }
}