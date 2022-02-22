import Image from 'next/image'
import Collection from '../../components/artists/Collection'
import Layout from '../../components/artists/Layout'
import H1 from '../../components/typography/H1'
import { MOCK_COLLECTIONS } from '../../mock-data/mock-collections'

const LandingPage = () => {
  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      <Image
        layout="fixed"
        height="176px"
        width="1236px"
        src="/artists/banner-1.jpg"
      />
      <H1 className="mt-5">Profile</H1>
      <div className="grid w-full md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
        {MOCK_COLLECTIONS.map(
          ({ id, title, date, type, coverImgSrc, minted, trackList }) => (
            <Collection
              key={id}
              minted={minted}
              title={title}
              date={date}
              type={type}
              coverImgSrc={coverImgSrc}
              trackList={trackList}
              createHref={`collections/create/${id}`}
              viewHref={`collections/${id}`}
            />
          )
        )}
      </div>
    </Layout>
  )
}

export default LandingPage
