import { NextConfig, withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*',
        pathname: '/**',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
