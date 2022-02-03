import NextHead from 'next/head'

const Head = ({ title }) => (
  <NextHead>
    <title>{title || 'NiftyTunes'}</title>
    <meta name="description" content="Nifty Tunes NFT Music" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
  </NextHead>
)

export default Head
