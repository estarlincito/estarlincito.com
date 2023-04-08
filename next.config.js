const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: { appDir: true, newNextLinkBehavior: false },
  images: {
    // formats: ['image/avif', 'image/webp'],
    domains: ['images.unsplash.com', 'raw.githubusercontent.com'],
  },
};

module.exports = withContentlayer(nextConfig);
