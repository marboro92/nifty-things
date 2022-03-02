import Image from 'next/image'
import Layout from '../components/Layout'
import Release from '../components/Release'
import { H1, H2, Body1 } from '../components/typography'

const MOCK_NFT_COLLECTIONS = [
  {
    title: 'Adam Shomer',
    verified: true,
    description: `Adam Shomer is an independent producer responible for bringing artists around the world to the global marketplace BRIDG3.`,
    handle: 'A-SHO',
    profileImgSrc: 'https://picsum.photos/id/1005/50/50',
    coverImgSrc: 'https://picsum.photos/id/158/400/200',
    id: 1,
  },
  {
    title: 'Jane Doe',
    verified: true,
    description: `For every feeling, there is a melody. For every moment, there is a sound. Together, it forms a masterpiece.`,
    handle: 'jd0e',
    profileImgSrc: 'https://picsum.photos/id/1014/50/50',
    coverImgSrc: 'https://picsum.photos/id/10/400/200',
    id: 2,
  },
  {
    title: 'ABCD',
    verified: false,
    description: `Injustice is not the way things should be. We should stand up to it and face it head on. This collection has 10 empowering tracks.`,
    handle: 'abcd',
    profileImgSrc: 'https://picsum.photos/id/1033/50/50',
    coverImgSrc: 'https://picsum.photos/id/1002/400/200',
    id: 3,
  },
  {
    title: 'ABCD',
    verified: false,
    description: `Injustice is not the way things should be. We should stand up to it and face it head on. This collection has 10 empowering tracks.`,
    handle: 'abcd',
    profileImgSrc: 'https://picsum.photos/id/1027/50/50',
    coverImgSrc: 'https://picsum.photos/id/451/400/200',
    id: 4,
  },
  {
    title: 'Jane Doe',
    verified: false,
    description: `Injustice is not the way things should be. We should stand up to it and face it head on. This collection has 10 empowering tracks.`,
    handle: 'jd0e',
    profileImgSrc: 'https://picsum.photos/id/1014/50/50',
    coverImgSrc: 'https://picsum.photos/id/443/400/200',
    id: 5,
  },
  {
    title: 'ABCD',
    verified: false,
    description: `Injustice is not the way things should be. We should stand up to it and face it head on. This collection has 10 empowering tracks.`,
    handle: 'abcd',
    profileImgSrc: 'https://picsum.photos/id/1033/50/50',
    coverImgSrc: 'https://picsum.photos/id/1008/400/200',
    id: 6,
  },
]

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
      <H2 className="px-2 pt-3 pb-1 border-b border-base-300">
        Your top NFT collections
      </H2>
      <div className="flex flex-wrap">
        {MOCK_NFT_COLLECTIONS.map(
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
