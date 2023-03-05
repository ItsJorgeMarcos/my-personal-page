/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      // https://nextjs.org/docs/basic-features/image-optimization#domains
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
