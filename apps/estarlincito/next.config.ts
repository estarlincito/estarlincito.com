/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*',
        pathname: '/**',
        protocol: 'https',
      },
    ],
  },
  // experimental: {
  //   // reactCompiler: true,
  //   turbo: {
  //     resolveExtensions: [
  //       '.mdx',
  //       '.tsx',
  //       '.ts',
  //       '.jsx',
  //       '.js',
  //       '.mjs',
  //       '.json',
  //     ],
  //   },
  // },
  // productionBrowserSourceMaps: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
