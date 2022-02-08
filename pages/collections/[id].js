import Image from 'next/image'
import Layout from '../../components/Layout'
import { H1 } from '../../components/typography'

const CollectionPage = () => {
  return (
    <Layout>
      <Image
        layout="responsive"
        height="250px"
        width="1500px"
        src="https://picsum.photos/id/452/1500/250"
      />
      <H1 className="m-2">NFT Album Details.</H1>
    </Layout>
  )
}

export default CollectionPage
