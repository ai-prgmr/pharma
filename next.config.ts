import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pharma",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;


