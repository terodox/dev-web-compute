/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.riyadhseason.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig
