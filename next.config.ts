import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // staleTimes: { dynamic: 0, static: 0 },
    // esmExternals: false,
    // scrollRestoration: true,
    // optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ['winways.com.vn'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'winways.com.vn',
        pathname: '/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'winways.com.vn',
        pathname: '/upload/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600', // cache for 1 hour
          },
        ],
      },
    ];
  },
  // webpack: (config, { dev, isServer }) => {
  //   if (!dev && !isServer) {
  //     config.optimization.splitChunks = {
  //       chunks: 'all',
  //       cacheGroups: {
  //         vendor: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name: 'vendors',
  //           chunks: 'all',
  //         },
  //       },
  //     };
  //   }
  //   return config;
  // },
};

export default nextConfig;
