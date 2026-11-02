import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/resources",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/resources/:slug",
        destination: "/insights/:slug",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/industries",
        destination: "/solutions#industries",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
