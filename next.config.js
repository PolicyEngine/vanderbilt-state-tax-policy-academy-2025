/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/vanderbilt-state-tax-policy-academy-2025' : '',
  assetPrefix: isProd ? '/vanderbilt-state-tax-policy-academy-2025' : '',
}

module.exports = nextConfig
