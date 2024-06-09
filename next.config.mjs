/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers () {
    return [
      {
        source: "/api/v1/:slug",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Set your origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: process.env.NODE_ENV === 'development' ? [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      }
    ] : [{
      protocol: 'https',
      hostname: 'aes.shenlu.me',
      pathname: '/images/**',
    }],
  },
  reactStrictMode: false,
};

export default nextConfig;
