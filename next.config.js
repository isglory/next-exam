/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.notion.so',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
        ],
    },
}

module.exports = nextConfig
