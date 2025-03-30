import { NextConfig } from 'next';
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

export default nextConfig;
