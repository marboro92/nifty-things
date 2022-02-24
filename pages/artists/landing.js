import Image from 'next/image'
import { useState } from 'react'
import Collection from '../../components/artists/Collection'
import Layout from '../../components/artists/Layout'
import { Tab } from '../../components/buttons'
import H1 from '../../components/typography/H1'
import { ROUTES } from '../../constants/artists-routes'
import { useArtistCollections } from '../../contexts/ArtistCollectionsContext'
import { MOCK_COLLECTIONS } from '../../mock-data/mock-collections'

const LandingPage = () => {
  const [{ collections }] = useArtistCollections()
  const [selectedSection, setSelectedSection] = useState('releases')
  const collectionsForSection = collections.filter(({ isPublic }) =>
    selectedSection === 'releases' ? isPublic : !isPublic
  )

  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      <Image
        layout="fixed"
        height="176px"
        width="1236px"
        src="/artists/banner-1.jpg"
        priority
      />
      <H1 className="mt-5">Profile</H1>
      <div className="flex space-x-2 mt-3 mb-2">
        <Tab
          onClick={() => setSelectedSection('releases')}
          selected={selectedSection === 'releases'}
        >
          Releases
        </Tab>
        <Tab
          onClick={() => setSelectedSection('upcoming')}
          selected={selectedSection === 'upcoming'}
        >
          Upcoming
        </Tab>
      </div>
      <div className="grid w-full md:grid-cols-2 lg:grid-cols-3 gap-3 my-2">
        {collectionsForSection.map(
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
