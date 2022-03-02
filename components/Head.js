import NextHead from 'next/head'

const Head = ({ title }) => (
  <NextHead>
    <title>{title || 'Bridge'}</title>
    <meta name="description" content="Bridge NFT Collection Management" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
  </NextHead>
)

export default Head
