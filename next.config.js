/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/policyengine-uk-event-2025' : '',
  assetPrefix: isProd ? '/policyengine-uk-event-2025' : '',
}

module.exports = nextConfig
