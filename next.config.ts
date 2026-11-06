import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the floating "N" dev badge. Build and runtime errors still surface as overlays.
  devIndicators: false,
};

export default nextConfig;
