/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lablab.muxixyz.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
