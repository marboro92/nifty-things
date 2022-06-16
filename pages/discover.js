import { useNFTDrop } from '@thirdweb-dev/react'
import { useWeb3React } from '@web3-react/core'
import Layout from '../components/Layout'
import Release from '../components/Release'
import { H1 } from '../components/typography'
import content from '../content/marketplace/discover.json'
import { useEffect, useState } from 'react'
import { getPublicCollections } from '../utils/api'

const HomePage = () => {
  const contract = useNFTDrop('0x0C260BB0b207c3da33BE7f71e0500EeD0f9fEEc5')
  const [collections, setCollections] = useState()
  const { account } = useWeb3React()

  const loadNFTCollections = async () => {
    const nfts = await contract.getAll()
    console.log(nfts)
    return nfts
  }

  const handleClaim = async () => {
    await contract.claimTo(account, 1)
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
      {/* <div className="mx-2 mt-3 md:mt-[80px]">
        <H1 size="md">{content.title}</H1>
      </div> */}
      <h3 className="font-bold text-[1.5rem] px-2 pt-2 md:pt-5 pb-2">
        {content.subtitle}
      </h3>
      <div className="flex flex-wrap">
        {collections &&
          collections.length &&
          [collections[0]].map(({ metadata }) => (
            <Release
              title={metadata.name}
              description={'Will be revealed tomorrow!'}
              coverImgSrc={metadata.image}
              key={metadata.id._hex}
              onClaim={handleClaim}
            />
          ))}
      </div>
    </Layout>
  )
}

export default HomePage
