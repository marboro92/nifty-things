import Image from 'next/image'
import { useRouter } from 'next/router'
import H1 from '../../../components/typography/H1'
import Layout from '../../../components/artists/Layout'
import { MOCK_COLLECTIONS } from '../../../mock-data/mock-collections'

const CollectionPage = () => {
  const router = useRouter()
  const { id: currentId } = router.query
  const collection = MOCK_COLLECTIONS.find(({ id }) => id == currentId)
  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      <Image
        layout="fixed"
        height="176px"
        width="1236px"
        src="/artists/banner-1.jpg"
      />
      {collection && (
        <div className="grid w-full md:grid-cols-2">
          <Image
            layout="fixed"
            height="600px"
            width="600px"
            src={collection.coverImgSrc}
          />
          <H1 className="mt-5">{collection.title}</H1>
        </div>
      )}
    </Layout>
  )
}

export default CollectionPage
