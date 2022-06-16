import { useNFTDrop } from '@thirdweb-dev/react'
import { useAddress } from '@thirdweb-dev/react'
import Layout from '../components/Layout'
import Release from '../components/Release'
import content from '../content/marketplace/discover.json'
import { useEffect, useState } from 'react'

const UNCLAIMED_OWNER_ADDRESS = '0x0000000000000000000000000000000000000000'

const HomePage = () => {
  const contract = useNFTDrop('0x0C260BB0b207c3da33BE7f71e0500EeD0f9fEEc5')
  const [collections, setCollections] = useState()
  const [claimed, setClaimed] = useState()
  const address = useAddress()

  const loadNFTCollections = async () => {
    const nfts = await contract.getAll()
    return nfts
  }

  const loadClaimed = async () => {
    const nfts = await contract.getAll()
    return nfts
  }

  const handleClaim = async () => {
    await contract.claimTo(address, 1)
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
      {/* <div className="mx-2 mt-3 md:mt-[80px]">
        <H1 size="md">{content.title}</H1>
      </div> */}
      <h3 className="font-bold text-[1.5rem] px-2 pt-2 md:pt-5 pb-2">
        {content.subtitle}
      </h3>
      <div className="flex flex-wrap">
        {collections &&
          collections.length &&
          [collections[0]].map(({ owner, metadata }) => (
            <Release
              title={metadata.name}
              description={'Will be revealed tomorrow!'}
              coverImgSrc={metadata.image}
              key={metadata.id._hex}
              onClaim={handleClaim}
              claimed={owner !== UNCLAIMED_OWNER_ADDRESS}
            />
          ))}
      </div>
    </Layout>
  )
}

export default HomePage
