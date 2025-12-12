/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, 
  },

  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
