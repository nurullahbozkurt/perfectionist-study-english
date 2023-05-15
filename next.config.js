/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "static.ghost.org",
      "images.unsplash.com",
      "digitalpress.fra1.cdn.digitaloceanspaces.com",
    ],
  },
};

module.exports = nextConfig;
