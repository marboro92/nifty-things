module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['gateway.ipfscdn.io', 'place-puppy.com'], //placeholder images
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
