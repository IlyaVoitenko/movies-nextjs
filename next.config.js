/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/tv",
        permanent: true, // или false, если редирект временный
      },
    ];
  },
};

module.exports = nextConfig;
