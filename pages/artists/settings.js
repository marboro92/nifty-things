import Image from 'next/image'
import Layout from '../../components/artists/Layout'
import ProfileBanner from '../../components/artists/ProfileBanner'
import { Button } from '../../components/buttons'
import { Input, Textarea } from '../../components/inputs'
import CopyTextInput from '../../components/inputs/CopyTextInput'
import { H1 } from '../../components/typography'

const SettingsPage = () => {
  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      <ProfileBanner
        artistName="Adam Shomer"
        bannerSrc="/artists/banner-1.jpg"
        verified
      />
      <H1 className="mt-5 mb-2">Settings</H1>
      <form className="max-w-[600px] space-y-3">
        <Input label="Username" placeholder="Enter username" disabled />
        <Textarea
          label="Bio"
          placeholder="Tell the world your story!"
          disabled
        />
        <Input label="Email" placeholder="Enter email" disabled />
        <CopyTextInput
          label="Phantom Wallet Address"
          placeholder="Wallet not connected"
          value={'PLACEHOLDER-12u384yyihieuyr747y333'}
          readonly
        />
        <Button type="submit" disabled>
          Save Settings
        </Button>
      </form>
    </Layout>
  )
}

export default SettingsPage
