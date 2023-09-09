/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
};
module.exports = {
  // images: {
  //   unoptimized: true
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

module.exports = nextConfig;
