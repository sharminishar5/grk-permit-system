/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  experimental: {},

  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;