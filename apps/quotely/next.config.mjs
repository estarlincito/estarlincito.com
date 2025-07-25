import defaultConfig from '@repo/next-config';

/** @type {import('next').NextConfig} */
export default {
  ...defaultConfig,
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination:
          'https://cdn.estarlincito.com/quotely/assets/favicons/favicon.ico',
      },
    ];
  },
};
