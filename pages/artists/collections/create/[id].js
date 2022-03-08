import Image from 'next/image'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Layout from '../../../../components/artists/Layout'
import ProfileBanner from '../../../../components/artists/ProfileBanner'
import { Button } from '../../../../components/buttons'
import { ImageUpload, Input, Textarea } from '../../../../components/inputs'
import Select from '../../../../components/inputs/Select'
import H1 from '../../../../components/typography/H1'
import { ROUTES } from '../../../../constants/artists-routes'
import { MARKETPLACE_INFO } from '../../../../constants/marketplaces'
import {
  ARTIST_COLLECTIONS_ACTIONS,
  findIdInCollection,
  useArtistCollections,
} from '../../../../contexts/ArtistCollectionsContext'

const CreateCollectionPage = () => {
  const router = useRouter()
  const [{ collections }, dispatch] = useArtistCollections()
  const { id: currentId } = router.query
  const collection =
    findIdInCollection(collections.public, currentId) ||
    findIdInCollection(collections.private, currentId)
  const {
    getValues,
    setValue,
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: collection?.title,
      description: collection?.description,
      price: collection?.price || 1,
      supply: collection?.supply || 500,
      royalty: collection?.royalty || '5.00',
      marketplace: 'nifty',
      currency: MARKETPLACE_INFO['nifty'].currencies[0],
    },
  })
  const watchMarketplace = watch('marketplace', 'nifty')
  setValue('currency', MARKETPLACE_INFO[watchMarketplace].currencies[0])

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
    } catch (e) {
      console.warn(e)
    }
  }
  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      {collection && (
        <div className="">
          <ProfileBanner
            artistName="Adam Shomer"
            bannerSrc="/artists/banner-1.jpg"
            verified
          />
          <form onSubmit={handleSubmit(onSubmit)} className="pb-3 space-y-3">
            <H1 className="mt-3" size="md">
              Create a collection
            </H1>
            <ImageUpload
              label={collection.title}
              value={collection.title}
              previewSrc={collection.coverImgSrc}
              type="file"
              description={collection.type}
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
            <Select
              label="NFT Marketplace"
              description="Choose where fans can buy and sell your NFT."
              required
              inputProps={{
                ...register('marketplace', {
                  required: 'You must choose a marketplace.',
                }),
              }}
              onChange={(val) => {
                setValue(currency, MARKETPLACE_INFO[val].currencies[0])
              }}
            >
              {Object.keys(MARKETPLACE_INFO).map((market) => (
                <option value={market} key={market}>
                  {MARKETPLACE_INFO[market].name}
                </option>
              ))}
            </Select>
            <div className="flex space-x-1">
              <Input
                label="Price"
                description="This is the price this NFT collection will mint at. Please notice that once it is published, this value can not be changed."
                type="number"
                error={errors?.price}
                errorMessage={errors?.price?.message}
                className="max-w-600"
                inputProps={{
                  ...register('price', {
                    required: 'A price for your NFT is required.',
                  }),
                  step: '0.01',
                }}
                required
              />
              {MARKETPLACE_INFO[watchMarketplace].currencies && (
                <Select
                  label="Currency"
                  description={
                    MARKETPLACE_INFO[watchMarketplace].currencies.length > 1
                      ? 'Choose the currency you want to use.'
                      : 'The marketplace you chose supports a single currency'
                  }
                  className="max-w-sm"
                  disabled={
                    MARKETPLACE_INFO[watchMarketplace].currencies.length === 1
                  }
                  inputProps={{
                    ...register('currency', {
                      required: 'You must choose a currency',
                    }),
                  }}
                >
                  {MARKETPLACE_INFO[watchMarketplace].currencies.map(
                    (currency, i) => (
                      <option value={currency} key={currency}>
                        {currency}
                      </option>
                    )
                  )}
                </Select>
              )}
            </div>
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
              description="This is the percentage of future streaming royalties you would like to provide your NFT holders."
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
              inputProps={register('otherUtilitiesDescription')}
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
