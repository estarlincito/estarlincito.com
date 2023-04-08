const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: { appDir: true, newNextLinkBehavior: false },
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = withContentlayer(nextConfig);
