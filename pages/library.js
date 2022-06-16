import { useNFTDrop } from '@thirdweb-dev/react'
import { useAddress } from '@thirdweb-dev/react'
import Layout from '../components/Layout'
import Release from '../components/Release'
import content from '../content/marketplace/discover.json'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const contract = useNFTDrop(process.env.NEXT_PUBLIC_SMART_CONTRACT)
  const [collections, setCollections] = useState()
  const [claimed, setClaimed] = useState()
  const address = useAddress()

  const loadNFTCollections = async () => {
    const nfts = await contract.getAll()
    return nfts
  }

  useEffect(async () => {
    try {
      const data = await loadNFTCollections()
      console.log(data)
      setCollections(data)
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <Layout>
      <h3 className="font-bold text-[1.5rem] px-2 pt-2 md:pt-5 pb-2">
        Your NFT Collections
      </h3>
      <div className="flex flex-wrap">
        {collections &&
          collections.length &&
          [collections[0]]
            .filter(({ owner }) => owner === address)
            .map(({ metadata }) => (
              <Release
                title={metadata.name}
                description={metadata.description}
                coverImgSrc={metadata.image}
                key={metadata.id._hex}
                claimed
              />
            ))}
      </div>
    </Layout>
  )
}

export default HomePage
