/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // Force use of WASM SWC instead of native binaries
    forceSwcTransforms: true,
  },
  // Configure SWC to use WASM
  swcMinify: false, // Disable SWC minification to avoid native binary issues
  compiler: {
    // Use WASM-based SWC
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
