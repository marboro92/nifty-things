import NextHead from 'next/head'

const Head = ({ title, nifty = false }) => (
  <NextHead>
    <title>{title || 'BRIDG3'}</title>
    <meta name="description" content="BRIDG3 NFT Collection Management" />
    {nifty ? (
      <link rel="icon" href="/favicon-n.ico" />
    ) : (
      <link rel="icon" href="/favicon.ico" />
    )}
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
  </NextHead>
)

export default Head
