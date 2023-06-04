/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    USER_PASSWORD: process.env.USER_PASSWORD,
  },
};

module.exports = nextConfig;
