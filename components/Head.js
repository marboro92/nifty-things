import NextHead from 'next/head'

const Head = ({ title }) => (
  <NextHead>
    <title>{title || 'NiftyTunes'}</title>
    <meta name="description" content="Nifty Tunes NFT Music" />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
)

export default Head
