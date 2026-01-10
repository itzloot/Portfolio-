/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // ← Enables static HTML export
  basePath: '/Portfolio-',       // ← Critical for subpath!
  assetPrefix: '/Portfolio-/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,           // Helps with GitHub Pages routing
};

export default nextConfig;