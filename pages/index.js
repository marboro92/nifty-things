import { useAddress } from '@thirdweb-dev/react'
import Layout from '../components/Layout'
import Release from '../components/Release'
import content from '../content/marketplace/discover.json'
import { useEffect, useState } from 'react'
import { claimNft, getAllAvailableNfts } from '../utils/contract'
import { Label } from '../components/typography'

const HomePage = () => {
  const [collections, setCollections] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const address = useAddress()
  const collectionOriginalOwner = process.env.NEXT_PUBLIC_DEFAULT_OWNER

  const loadNFTCollections = async () => {
    setLoading(true)
    setError()
    try {
      const nfts = await getAllAvailableNfts()
      setCollections(nfts)
    } catch (e) {
      setError(error)
    }
    setLoading(false)
  }

  const handleClaim = async (id) => {
    await claimNft(id, address)
    loadNFTCollections()
  }

  useEffect(() => {
    try {
      loadNFTCollections()
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <Layout>
      <h3 className="font-bold text-[1.5rem] px-2 pt-2 md:pt-5 pb-2">
        {content.subtitle}
      </h3>
      <div className="flex flex-wrap">
        {!collections && loading && (
          <Label>Hold tight! Getting available NFTs...</Label>
        )}
        {error && <Label>Something went wrong: {error}</Label>}
        {collections &&
          collections.length &&
          collections.map(({ owner, id, metadata }) => (
            <Release
              title={metadata.name}
              description={metadata.description}
              coverImgSrc={metadata.image}
              key={id}
              onClaim={() => handleClaim(metadata.id)}
              claimed={
                owner !== process.env.NEXT_PUBLIC_DEFAULT_OWNER ||
                address == collectionOriginalOwner
              }
            />
          ))}
      </div>
    </Layout>
  )
}

export default HomePage
