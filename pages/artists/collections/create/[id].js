import { useRouter } from 'next/router'
import Layout from '../../../../components/artists/Layout'
import H1 from '../../../../components/typography/H1'
import { MOCK_COLLECTIONS } from '../../../../mock-data/mock-collections'

const CreateCollectionPage = () => {
  const router = useRouter()
  const { id: currentId } = router.query
  const collection = MOCK_COLLECTIONS.find(({ id }) => id === currentId)
  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      {collection && (
        <div className="">
          <H1 className="mt-5">Create</H1>
          <p>{collection.title}</p>
        </div>
      )}
    </Layout>
  )
}

export default CreateCollectionPage
