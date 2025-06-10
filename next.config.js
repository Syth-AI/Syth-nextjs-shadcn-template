/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Disable SWC minifier to avoid binary loading issues
  swcMinify: false,
};

module.exports = nextConfig;
