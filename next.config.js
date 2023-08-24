const { withContentlayer } = require('next-contentlayer');
const isDev = process.env.NODE_ENV === 'development';
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: !isDev,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  experimental: {
    appDir: true,
    newNextLinkBehavior: false,
    serverActions: true,
  },
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
