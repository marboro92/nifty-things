import { useNFTCollection } from '@thirdweb-dev/react'
import { useAddress } from '@thirdweb-dev/react'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import Layout from '../components/Layout'
import Release from '../components/Release'
import content from '../content/marketplace/discover.json'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const contract = useNFTCollection(process.env.NEXT_PUBLIC_SMART_CONTRACT)
  const [collections, setCollections] = useState()
  const [claimed, setClaimed] = useState()
  const address = useAddress()
  const collectionOriginalOwner = process.env.NEXT_PUBLIC_DEFAULT_OWNER

  const loadNFTCollections = async () => {
    const nfts = await contract.getAll()
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

    console.log(response)
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
