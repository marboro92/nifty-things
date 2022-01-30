import Head from "next/head";
import Layout from "../components/layout";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>NiftyTunes</title>
        <meta name="description" content="Nifty Tunes NFT Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-3xl font-bold underline">🌎 meet NiftyTunes</h2>
    </Layout>
  );
};

export default HomePage;
