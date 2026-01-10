/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    domains: ['treishfin.treishvaamgroup.com', 'treishvaamgroup.com', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Required for Cloudflare Pages standard hosting
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig