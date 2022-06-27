import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import Layout from '../components/Layout'
import { Button } from '../components/buttons'
import { ImageUpload, Input, Textarea } from '../components/inputs'
import H1 from '../components/typography/H1'
import { useAddress } from '@thirdweb-dev/react'
import { useState } from 'react'

export const mintFile = (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      pinata_api_key: '89544e03a00461e10fc0',
      pinata_secret_api_key:
        '0fda1929549c64c460aed8922e7bc039fc98435d32e40aae015b3843a3088f88',
    },
    body: JSON.stringify({ file }),
  })
}

const MintPage = () => {
  const router = useRouter()
  const collection = {}
  const address = useAddress()
  const [loading, setLoading] = useState(false)

  const {
    getValues,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm({
    defaultValues: {
      name: collection?.name,
      description: collection?.description,
    },
  })

  const handleMint = async ({ image, description, name }) => {
    const response = await fetch('/api/mint-nft', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image, description, name, address }),
    })
    console.log(response)
  }

  const onSubmit = async () => {
    const form = getValues()
    setLoading(true)
    try {
      console.log(form)
      await handleMint({ image: form.featuredImage })
      // router.push(`/`)
    } catch (e) {
      console.warn(e)
    }
    setLoading(false)
  }
  return (
    <Layout>
      {collection && (
        <div className="ml-4">
          <form onSubmit={handleSubmit(onSubmit)} className="pb-3 space-y-3">
            <H1 className="mt-3" size="md">
              Create your own NFT
            </H1>
            <Controller
              control={control}
              name="featuredImage"
              render={({ field: { onChange, value } }) => (
                <ImageUpload
                  label="Image"
                  require
                  type="file"
                  description={collection.type}
                  inputProps={register('featuredImage')}
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <Input
              label="Name"
              error={errors?.name}
              errorMessage={errors?.name?.message}
              inputProps={{
                ...register('name', {
                  required: 'A collection name is required.',
                }),
              }}
              required
            />
            <Textarea
              label="Description"
              inputProps={register('description')}
            />
            <Button className="my-5" type="submit" loading={loading}>
              Mint NFT
            </Button>
          </form>
        </div>
      )}
    </Layout>
  )
}

export default MintPage
