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
      <div className="flex h-full">
        <h2 className="text-3xl font-bold ml-5 mt-3">🌎 meet NiftyTunes</h2>
      </div>
    </Layout>
  )
}

export default HomePage
