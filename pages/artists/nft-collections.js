import Image from 'next/image'
import CollectionGrid from '../../components/artists/CollectionsGrid'
import Layout from '../../components/artists/Layout'
import ProfileBanner from '../../components/artists/ProfileBanner'
import { H2, H1 } from '../../components/typography'
import { useArtistCollections } from '../../contexts/ArtistCollectionsContext'

const NFTCollectionsPage = () => {
  const [{ collections }] = useArtistCollections()
  const upcomingCollections = collections.filter(
    ({ isPublic, minted }) => minted && !isPublic
  )
  const otherCollections = collections.filter(
    ({ isPublic, minted }) => minted && isPublic
  )

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
      <CollectionGrid collections={upcomingCollections} />
      <H2 as="h6" className="mb-2">
        Other NFT Collections
      </H2>
      <CollectionGrid collections={otherCollections} />
    </Layout>
  )
}

export default NFTCollectionsPage
