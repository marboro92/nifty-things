import Head from 'next/head'
import Layout from '../components/layout'

const ProfilePage = () => {
  return (
    <Layout>
      <Head>
        <title>NiftyTunes</title>
        <meta name="description" content="Nifty Tunes NFT Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full">
        <h2 className="text-3xl font-bold ml-5 mt-3">
          This is your personal profile.
        </h2>
      </div>
    </Layout>
  )
}

export default ProfilePage
