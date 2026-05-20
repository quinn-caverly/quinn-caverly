import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/quinn-caverly",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
