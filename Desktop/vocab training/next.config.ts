import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lexicon",
  assetPrefix: "/lexicon/",
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
