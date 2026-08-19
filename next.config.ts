import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['10.10.28.99'],
   images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
