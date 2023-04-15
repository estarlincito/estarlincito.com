const { withContentlayer } = require('next-contentlayer');
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true, mdxRs: true, newNextLinkBehavior: false },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    domains: [
      'images.unsplash.com',
      'raw.githubusercontent.com',
      'images.pexels.com',
    ],
  },
};

module.exports = withMDX(withContentlayer(nextConfig));
