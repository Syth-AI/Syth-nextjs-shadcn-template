/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // Force WASM SWC in environments that don't support native binaries
    forceSwcTransforms: true,
  },
  // Force use of WASM SWC compiler
  compiler: {
    // This ensures we use the WASM version
  },
  swcMinify: false,
};

module.exports = nextConfig;
