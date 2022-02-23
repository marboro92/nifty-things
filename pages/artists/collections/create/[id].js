import { current } from 'daisyui/colors'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Layout from '../../../../components/artists/Layout'
import { Button } from '../../../../components/buttons'
import { ImageUpload, Input, Textarea } from '../../../../components/inputs'
import H1 from '../../../../components/typography/H1'
import { ROUTES } from '../../../../constants/artists-routes'
import {
  ARTIST_COLLECTIONS_ACTIONS,
  useArtistCollections,
} from '../../../../contexts/ArtistCollectionsContext'

const CreateCollectionPage = () => {
  const router = useRouter()
  const [{ collections }, dispatch] = useArtistCollections()
  const { id: currentId } = router.query
  const collection = collections.find(({ id }) => id === currentId)
  const {
    getValues,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: collection?.title,
      description: collection?.description,
      price: collection?.price || 1,
      supply: collection?.supply || 500,
      royalty: collection?.royalty || '5.00',
    },
  })
  console.log(errors)
  const onSubmit = async () => {
    const form = getValues()
    try {
      await dispatch({
        type: ARTIST_COLLECTIONS_ACTIONS.UPDATE_COLLECTION,
        payload: {
          id: currentId,
          data: {
            ...form,
            minted: true,
          },
        },
      })
      router.push(`${ROUTES.COLLECTION_DETAILS}${currentId}`)
    } catch {
      // TODO: handle error.
    }
  }
  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      {collection && (
        <div className="">
          <Image
            layout="fixed"
            height="176px"
            width="1236px"
            src="/artists/banner-1.jpg"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <H1 className="mt-5" size="md">
              Create a collection
            </H1>
            <ImageUpload
              label="Featured Image"
              value={collection.title}
              previewSrc={collection.coverImgSrc}
              description={
                <>
                  This image will be used for featuring your collection on the
                  homepage, category pages, or other promtional areas of
                  NiftyTunes.{' '}
                  <span className="text-primary">600 x 600 recommended.</span>{' '}
                </>
              }
              type="file"
              inputProps={register('featuredImage')}
              readonly
            />
            <H1 className="mt-5">Description</H1>
            <Input
              label="Collection Name"
              error={errors?.title}
              errorMessage={errors?.title?.message}
              inputProps={{
                ...register('title', {
                  required: 'A collection name is required.',
                }),
              }}
              required
            />
            <Textarea
              label="Description"
              inputProps={register('description')}
            />
            <H1 className="mt-5">Pricing</H1>
            <Input
              label="Price"
              description="This is the starting set price (in SOL) this NFT collection will mint at. Please notice that once it is published, this value can not be changed."
              type="number"
              error={errors?.price}
              errorMessage={errors?.price?.message}
              inputProps={{
                ...register('price', {
                  required: 'A price for your NFT is required.',
                }),
                step: '0.01',
              }}
              required
            />
            <Input
              label="Total Supply"
              description="Max 10000."
              type="number"
              error={errors?.supply}
              errorMessage={errors?.supply?.message}
              inputProps={{
                max: 10000,
                min: 1,
                ...register('supply', {
                  required: 'A supply is required.',
                  validate: {
                    isUnderMax: (val) =>
                      val <= 10000 || 'Supply cannot be greater than 10,000.',
                    isAboveMin: (val) =>
                      val >= 1 || 'Supply must be atleast 1.',
                  },
                }),
              }}
              required
            />
            <H1 className="mt-5">Utilities</H1>
            <Input
              label="Streaming Royalty Allocation"
              description="This is the percentage you want to allocate into your NFTs."
              type="number"
              error={errors?.royalty}
              errorMessage={errors?.royalty?.message}
              inputProps={{
                ...register('royalty', {
                  validate: {
                    isUnderMax: (val) =>
                      val <= 100 || 'Percentage cannot be greater than 100.',
                    isAboveMin: (val) =>
                      val >= 0 || 'Royalty percentage cannot be negative.',
                  },
                }),
                min: 0,
                max: 100,
                step: 0.01,
              }}
            />
            <Textarea
              label="Additional Utilities"
              description="Add any other utilities you would like to provide your NFT holders."
              inputProps={register('description')}
            />
            <Button className="my-5" type="submit">
              Create Collection
            </Button>
          </form>
        </div>
      )}
    </Layout>
  )
}

export default CreateCollectionPage
