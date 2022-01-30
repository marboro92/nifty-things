import Head from 'next/head'
import Layout from '../components/layout'

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>NiftyTunes</title>
        <meta name="description" content="Nifty Tunes NFT Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-l">🌎 meet NiftyTunes</h2>
      <button class="btn btn-primary rounded-full">daisyUI Button</button>
    </Layout>
  )
}

export default HomePage
