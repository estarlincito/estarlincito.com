const { withContentlayer } = require('next-contentlayer');
const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: !isDev,

  experimental: { appDir: true, newNextLinkBehavior: false },
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'images.pexels.com'],
  },
};

module.exports = withContentlayer(nextConfig);
