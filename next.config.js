/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["admin.umalmajd.com"],
  },
};

module.exports = nextConfig;
