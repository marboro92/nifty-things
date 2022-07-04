import { useMarketplace } from '@thirdweb-dev/react'
import { useAddress } from '@thirdweb-dev/react'
import Layout from '../components/Layout'
import Release from '../components/Release'
import content from '../content/marketplace/discover.json'
import { useEffect, useState } from 'react'
import { Button } from '../components/buttons'
import ClaimTokens from '../components/ClaimTokens'

const HomePage = () => {
  const contract = useMarketplace(process.env.NEXT_PUBLIC_SMART_CONTRACT)
  const [collections, setCollections] = useState()
  const address = useAddress()
  const collectionOriginalOwner = process.env.NEXT_PUBLIC_DEFAULT_OWNER
  console.log(collections)

  const loadNFTCollections = async () => {
    const listings = await contract.getAllListings()
    const nfts = listings.map(({ asset, ...rest }) => ({
      metadata: asset,
      ...rest,
    }))
    setCollections(nfts)
  }

  const handleClaim = async (id) => {
    const response = await fetch('/api/claim-nfts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, address }),
    })
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
      {/* <div className="mx-2 mt-3 md:mt-[80px]">
        <H1 size="md">{content.title}</H1>
      </div> */}
      <h3 className="font-bold text-[1.5rem] px-2 pt-2 md:pt-5 pb-2">
        {content.subtitle}
      </h3>
      <ClaimTokens address={address} />
      <div className="flex flex-wrap">
        {collections &&
          collections.length &&
          collections.map(({ owner, metadata }) => (
            <Release
              title={metadata.name}
              description={metadata.description}
              coverImgSrc={metadata.image}
              key={metadata.id._hex}
              onClaim={() => handleClaim(metadata.id)}
            />
          ))}
      </div>
    </Layout>
  )
}

export default HomePage
