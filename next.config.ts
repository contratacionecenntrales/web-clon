import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  // Static export: the whole site is prerendered HTML/CSS/JS with no
  // server-side routes, so it can be uploaded as-is (the `out/` folder)
  // to plain shared hosting like Hostalia via FTP — no Node.js runtime
  // required on the server.
  output: "export",
  images: {
    // next/image's optimization API needs a Node server; static export
    // has none, so images are served as plain <img> tags instead.
    unoptimized: true,
  },
};

export default nextConfig;
