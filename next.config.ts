import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // allow dev server to be accessed from network IP
  allowedDevOrigins: ["172.31.16.1"],
};

export default nextConfig;
