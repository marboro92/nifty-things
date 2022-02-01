import Head from 'next/head'
import Layout from '../components/layout'
import H1 from '../components/typography/H1'

const ProfilePage = () => {
  return (
    <Layout>
      <Head>
        <title>NiftyTunes</title>
        <meta name="description" content="Nifty Tunes NFT Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full">
        <H1>Profile Settings.</H1>
      </div>
    </Layout>
  )
}

export default ProfilePage
