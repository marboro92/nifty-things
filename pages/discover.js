import Layout from '../components/Layout'
import Release from '../components/Release'
import { H1 } from '../components/typography'
import content from '../content/marketplace/discover.json'
import { useEffect, useState } from 'react'
import { getPublicCollections } from '../utils/api'

const HomePage = () => {
  const [collections, setCollections] = useState()

  useEffect(async () => {
    try {
      const data = await getPublicCollections()
      setCollections(data)
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <Layout>
      <div className="mx-2 mt-3 md:mt-[80px]">
        <H1 size="md">{content.title}</H1>
      </div>
      <h3 className="font-bold text-[1.5rem] px-2 pt-2 md:pt-5 pb-2">
        {content.subtitle}
      </h3>
      <div className="flex flex-wrap">
        {collections &&
          collections.length &&
          collections.map(
            ({ title, verified, username, description, coverImgSrc, id }) => (
              <Release
                title={title}
                verified={verified}
                description={description}
                handle={username}
                coverImgSrc={coverImgSrc}
                minted={false}
                onMint={() => {}}
                key={id}
              />
            )
          )}
      </div>
    </Layout>
  )
}

export default HomePage
