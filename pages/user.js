import Image from 'next/image'
import Layout from '../components/Layout'
import Release from '../components/Release'
import { H1, H2, Body1 } from '../components/typography'
import { MOCK_COLLECTIONS } from '../mock-data/mock-collections'
import { MOCK_RELEASES } from '../mock-data/mock-releases'

const HomePage = () => {
  const collections = MOCK_COLLECTIONS.public.filter(({ minted }) => minted)
  return (
    <Layout>
      <div className="mx-2 mt-[80px]">
        <H1>Discover.</H1>
      </div>
      <H2 className="px-2 pt-5 pb-2">Trending Collections in Music</H2>
      <div className="flex flex-wrap">
        {collections.map(
          ({ title, verified, description, coverImgSrc, id }) => (
            <Release
              title={title}
              verified={verified}
              description={description}
              handle={'A-SHO'}
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
