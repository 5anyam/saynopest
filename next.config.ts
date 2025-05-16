import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['static.saynopest.com','remotePatterns'],
  },
};

export default nextConfig;
