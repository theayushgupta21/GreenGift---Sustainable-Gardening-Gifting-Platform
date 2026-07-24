import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: '/((?!api|_next/static|_next/image|favicon.ico|.*\\.jfif|.*\\.png|.*\\.jpg|.*\\.svg).*)',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;

