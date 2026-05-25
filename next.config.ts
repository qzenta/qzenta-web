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
      { source: "/services", destination: "/solutions", permanent: true },
      { source: "/resources", destination: "/insights", permanent: true },
      { source: "/resources/:path*", destination: "/insights/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
