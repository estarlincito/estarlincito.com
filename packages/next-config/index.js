/** @type {import('next').NextConfig} */
export const defaultConfig = {
  transpilePackages: ['@repo/ui', '@repo/lib'],
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
