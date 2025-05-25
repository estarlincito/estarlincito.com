/** @type {import('next').NextConfig} */
export const defaultConfig = {
  transpilePackages: ['@repo/ui', '@repo/utils'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: '*',
        pathname: '/**',
        protocol: 'https',
      },
    ],
  },
};
