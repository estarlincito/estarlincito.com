const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: { appDir: true },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = withContentlayer(nextConfig);
