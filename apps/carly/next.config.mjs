import defaultConfig from '@repo/next-config';

/** @type {import('next').NextConfig} */
export default {
  ...defaultConfig,
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination:
          'https://cdn.estarlincito.com/carly/assets/favicons/favicon.ico',
      },
    ];
  },
};
