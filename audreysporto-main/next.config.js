/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
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
