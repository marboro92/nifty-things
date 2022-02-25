import Image from 'next/image'
import Layout from '../../components/artists/Layout'
import { Button } from '../../components/buttons'
import { Input } from '../../components/inputs'
import CopyTextInput from '../../components/inputs/CopyTextInput'
import { H1 } from '../../components/typography'

const SettingsPage = () => {
  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      <Image
        layout="fixed"
        height="176px"
        width="1236px"
        src="/artists/banner-1.jpg"
        priority
      />
      <H1 className="mt-5 mb-2">Settings</H1>
      <form className="max-w-[600px] space-y-3">
        <Input label="Username" placeholder="Enter username" disabled />
        <Input label="Bio" placeholder="Tell the world your story!" disabled />
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
