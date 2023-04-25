const { withContentlayer } = require('next-contentlayer');
const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: !isDev,

  experimental: { appDir: true, newNextLinkBehavior: false },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
