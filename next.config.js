module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'], //placeholder images
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
