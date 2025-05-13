/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.builder.io', 'images.unsplash.com', 'your-image-domain.com', 'prod.spline.design', 'encrypted-tbn0.gstatic.com'],
    unoptimized: process.env.NODE_ENV === 'production', // For Netlify static exports
  },
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  // Add this for Netlify compatibility
  output: 'standalone',
}

module.exports = nextConfig
