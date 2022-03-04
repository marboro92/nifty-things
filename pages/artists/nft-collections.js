import Image from 'next/image'
import CollectionGrid from '../../components/artists/CollectionsGrid'
import Layout from '../../components/artists/Layout'
import ProfileBanner from '../../components/artists/ProfileBanner'
import { H2, H1, Body1 } from '../../components/typography'
import { useArtistCollections } from '../../contexts/ArtistCollectionsContext'

const NFTCollectionsPage = () => {
  const [{ collections }] = useArtistCollections()
  const upcomingCollections = collections?.private?.filter(
    ({ minted }) => minted
  )
  const otherCollections = collections?.public?.filter(({ minted }) => minted)

  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      <ProfileBanner
        artistName="Adam Shomer"
        bannerSrc="/artists/banner-1.jpg"
        verified
      />
      <H1 className="mt-5 mb-2">NFT Collections</H1>
      <H2 as="h6" className="my-2">
        Other Upcoming Drops
      </H2>
      {upcomingCollections?.length > 0 ? (
        <CollectionGrid collections={upcomingCollections} />
      ) : (
        <Body1>There are no upcoming collections at this time.</Body1>
      )}
      <H2 as="h6" className="my-2">
        Other NFT Collections
      </H2>
      {otherCollections?.length > 0 ? (
        <CollectionGrid collections={otherCollections} />
      ) : (
        <Body1>There are no other collections at this time.</Body1>
      )}
    </Layout>
  )
}

export default NFTCollectionsPage
