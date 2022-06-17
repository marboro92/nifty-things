import NextHead from 'next/head'

const Head = ({ title, nifty = false }) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content="NFT Marketplace" />
    <link rel="icon" href="/favicon-n.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
  </NextHead>
)

export default Head
