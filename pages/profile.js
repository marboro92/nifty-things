import Layout from '../components/Layout'
import { Body1 } from '../components/typography'
import H1 from '../components/typography/H1'

const ProfilePage = () => {
  return (
    <Layout>
      <div className="h-full mx-2 my-2 md:mx-5 md:my-3">
        <H1>Profile Settings.</H1>
        <Body1>Update your profile here.</Body1>
      </div>
    </Layout>
  )
}

export default ProfilePage
