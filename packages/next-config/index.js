/**
 * @param {import('@repo/types').AppNames} app
 * @returns {import('@repo/types').Config}
 */
export const loadDefaultConfig = (app) => ({
  transpilePackages: ['@repo/ui', '@repo/utils'],
  reactStrictMode: true,
  // typedRoutes: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        hostname: '*',
        pathname: '/**',
        protocol: 'https',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: `https://cdn.estarlincito.com/${app}/assets/favicons/favicon.ico`,
      },
      {
        source: '/shortcut-icon.png',
        destination: `https://cdn.estarlincito.com/${app}/assets/favicons/shortcut-icon.png`,
      },
    ];
  },
});
