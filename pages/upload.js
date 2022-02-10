import Link from 'next/link'
import { PillButton } from '../components/buttons'
import Layout from '../components/Layout'
import { Body1 } from '../components/typography'
import H1 from '../components/typography/H1'

const UploadPage = () => {
  return (
    <Layout>
      <div className="h-full mx-2 my-2 md:mx-5 md:my-3">
        <H1>Upload Files.</H1>
        <Body1>
          Upload your music and artwork. Provide metadata of NFT items. Generate
          Content ID.
        </Body1>
      </div>
    </Layout>
  )
}

export default UploadPage
