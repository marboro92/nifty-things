import { useEffect, useState } from 'react'
import Collection from '../../components/artists/Collection'
import Layout from '../../components/artists/Layout'
import ProfileBanner from '../../components/artists/ProfileBanner'
import { Tab } from '../../components/buttons'
import { Body1 } from '../../components/typography'
import H1 from '../../components/typography/H1'
import { ROUTES } from '../../constants/artists-routes'
import {
  ARTIST_COLLECTIONS_ACTIONS,
  useArtistCollections,
} from '../../contexts/ArtistCollectionsContext'
import { getCollections } from '../../utils/api'

const LandingPage = () => {
  const [{ collections }, dispatch] = useArtistCollections()
  const [selectedSection, setSelectedSection] = useState('releases')
  const [loading, setLoading] = useState(false)
  const collectionsForSection =
    selectedSection === 'releases' ? collections?.public : collections?.private

  useEffect(async () => {
    // TODO: get this artist id from somewhere
    const artistId = 'a04beeaa-98d6-11ec-aa98-124936d7e845'
    setLoading(true)
    const fetchedCollections = await getCollections(artistId)
    await dispatch({
      type: ARTIST_COLLECTIONS_ACTIONS.SET_COLLECTIONS,
      payload: {
        data: fetchedCollections,
      },
    })
    setLoading(false)
  }, [])

  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      <ProfileBanner
        artistName="Adam Shomer"
        bannerSrc="/artists/banner-1.jpg"
        verified
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
        {loading && <Collection.LoadingPlaceholder />}
        {!loading &&
          collectionsForSection?.length > 0 &&
          collectionsForSection.map(
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
        {!loading && !collectionsForSection?.length && (
          <Body1 className="col-span-full">
            Sorry, we can&apos;t find any{' '}
            {selectedSection === 'release' ? 'releases' : 'upcoming releases'}{' '}
            at this time.
          </Body1>
        )}
      </div>
    </Layout>
  )
}

export default LandingPage
