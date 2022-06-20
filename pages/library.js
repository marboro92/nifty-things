import { useNFTDrop } from '@thirdweb-dev/react'
import { useAddress } from '@thirdweb-dev/react'
import Layout from '../components/Layout'
import Release from '../components/Release'
import content from '../content/marketplace/discover.json'
import { useEffect, useState } from 'react'
import { Label } from '../components/typography'

const HomePage = () => {
  const contract = useNFTDrop(process.env.NEXT_PUBLIC_SMART_CONTRACT)
  const [collections, setCollections] = useState()
  const [claimed, setClaimed] = useState()
  const address = useAddress()

  const yourCollections =
    collections && collections.length
      ? collections?.filter(({ owner }) => owner === address)
      : []

  const loadNFTCollections = async () => {
    const nfts = await contract.getAll()
    return nfts
  }

  useEffect(async () => {
    try {
      const data = await loadNFTCollections()
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
          Boolean(yourCollections.length) &&
          yourCollections.map(({ metadata }) => (
            <Release
              title={metadata.name}
              description={metadata.description}
              coverImgSrc={metadata.image}
              key={metadata.id._hex}
              claimed
            />
          ))}

        {!Boolean(yourCollections.length) && (
          <Label className="px-2">
            You don't currently have any NFT's. Go claim some!
          </Label>
        )}
      </div>
    </Layout>
  )
}

export default HomePage
