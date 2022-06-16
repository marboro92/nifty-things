import NextHead from 'next/head'

const Head = ({ title, nifty = false }) => (
  <NextHead>
    <title>{title || (nifty ? 'NiftyTunes' : 'BRIDG3')}</title>
    <meta
      name="description"
      content={
        nifty
          ? 'NiftyTunes NFT Marketplace'
          : 'BRIDG3 NFT Collection Management'
      }
    />
    <link rel="icon" href="/favicon-n.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
  </NextHead>
)

export default Head
