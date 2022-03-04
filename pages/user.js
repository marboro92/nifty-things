import Image from 'next/image'
import Layout from '../components/Layout'
import Release from '../components/Release'
import { H1, H2, Body1 } from '../components/typography'
import { MOCK_RELEASES } from '../mock-data/mock-releases'

const HomePage = () => {
  return (
    <Layout>
      <Image
        layout="responsive"
        height="250px"
        width="1500px"
        src="https://picsum.photos/id/452/1500/250"
      />
      <div className="mx-2 mt-2">
        <H1>Artists Matter. Explore Music.</H1>
        <Body1>
          Music NFTs are changing the way fans connect with their favorite
          artists. All artists matter and it is time for a change. Therefore,
          decentralization is the answer. It allows creators to get paid what
          they deserve and be heard without the middleman. You are in full
          control over your art and that is important to us.
        </Body1>
        <Body1>
          <span className="font-bold">Browse</span> collections from artists
          around the world. Show some love!
        </Body1>
      </div>
      <H2 className="px-2 pt-3 pb-1 border-b border-base-300">
        Your top NFT collections
      </H2>
      <div className="flex flex-wrap">
        {MOCK_RELEASES.map(
          ({
            title,
            verified,
            description,
            handle,
            profileImgSrc,
            coverImgSrc,
            id,
          }) => (
            <Release
              title={title}
              verified={verified}
              description={description}
              handle={handle}
              profileImgSrc={profileImgSrc}
              coverImgSrc={coverImgSrc}
              href={`collections/${id}`}
              key={id}
            />
          )
        )}
      </div>
    </Layout>
  )
}

export default HomePage
