/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel runtime (SSR/Edge) — no static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ncoktsgpeesojgogmutr.supabase.co',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
