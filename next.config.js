/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.coinranking.com', 'i-invdn-com.investing.com', 'www.bing.com', 'www.bankrate.com']
  },
  transpilePackages: ['three'],
}

module.exports = nextConfig
