import Layout from '../components/Layout'
import { H1, Body1 } from '../components/typography'

const HomePage = () => {
  return (
    <Layout>
      <div className="h-full ml-5 mt-3">
        <H1>Artists Matter. Explore Music.</H1>
        <Body1>
          Music NFTs are changing the way fans connect with their favorite
          artists. All artists matter and it is time for a change.  Therefore,
          decentralization is the answer. It allows creators to get paid what
          they deserve and be heard without the middleman. You are in full
          control over your art and that is important to us.
        </Body1>
        <Body1>
          <span className="font-bold">Browse</span> collections from artists
          around the world. Show some love!
        </Body1>
      </div>
    </Layout>
  )
}

export default HomePage
