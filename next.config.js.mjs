/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nextevents/' : '',
}

module.exports = nextConfig
