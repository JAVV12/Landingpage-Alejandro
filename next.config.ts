import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deshabilitar Turbopack usando webpack como bundler
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
