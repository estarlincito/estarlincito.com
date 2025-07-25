/** @type {import('next').NextConfig} */
const defaultConfig = {
  transpilePackages: ['@repo/ui', '@repo/lib'],
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        // hostname: 'cdn.estarlincito.com',
        hostname: '*',
        pathname: '/**',
        protocol: 'https',
      },
    ],
  },
};

export default defaultConfig;
