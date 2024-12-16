import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic permanent redirect
      {
        source: "/",
        destination: "/today",
        permanent: true,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
