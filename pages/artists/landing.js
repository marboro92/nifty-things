import Image from 'next/image'
import Collection from '../../components/artists/Collection'
import Layout from '../../components/artists/Layout'
import H1 from '../../components/typography/H1'
import { ROUTES } from '../../constants/artists-routes'
import { useArtistCollections } from '../../contexts/ArtistCollectionsContext'
import { MOCK_COLLECTIONS } from '../../mock-data/mock-collections'

const LandingPage = () => {
  const [{ collections }] = useArtistCollections()
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
        {collections.map(
          ({ id, title, date, type, coverImgSrc, minted, trackList }) => (
            <Collection
              key={id}
              minted={minted}
              title={title}
              date={date}
              type={type}
              coverImgSrc={coverImgSrc}
              trackList={trackList}
              createHref={`${ROUTES.COLLECTION_CREATE}${id}`}
              viewHref={`${ROUTES.COLLECTION_DETAILS}${id}`}
            />
          )
        )}
      </div>
    </Layout>
  )
}

export default LandingPage
