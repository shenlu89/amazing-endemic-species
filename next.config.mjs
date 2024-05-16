/** @type {import('next').NextConfig} */
const nextConfig = {
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
