import Image from 'next/image'
import { useForm } from 'react-hook-form'
import Layout from '../../components/artists/Layout'
import ProfileBanner from '../../components/artists/ProfileBanner'
import SocialInputGroup from '../../components/artists/SocialInputGroup'
import { Button } from '../../components/buttons'
import { Input, Textarea } from '../../components/inputs'
import CopyTextInput from '../../components/inputs/CopyTextInput'
import { H1 } from '../../components/typography'

const SettingsPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: 'A-SHO',
      web: 'https://www.asho.com',
      discord: 'https://www.discord.gg/a-sho#000',
      instagram: 'https://www.instagram.com/a-sho',
      twitter: 'https://www.twitter.com/a-sho',
      tiktok: 'https://www.tiktok.com/a-sho',
    },
  })
  return (
    <Layout showNav user={{ email: 'placeholder@email.com' }}>
      <ProfileBanner
        artistName="Adam Shomer"
        bannerSrc="/artists/banner-1.jpg"
        verified
      />
      <H1 className="mt-5 mb-2">Settings</H1>
      <form className="max-w-[600px] space-y-3" onSubmit={handleSubmit()}>
        <Input
          label="Username"
          placeholder="Enter username"
          inputProps={{
            ...register('username'),
          }}
        />
        <Textarea label="Bio" placeholder="Tell the world your story!" />
        <Input label="Email" placeholder="Enter email" />
        <SocialInputGroup
          label="Links"
          description={
            'Add your social media accounts here to maximize potential viewership.'
          }
        >
          <SocialInputGroup.Input
            platform="web"
            inputProps={{
              ...register('web'),
            }}
          />
          <SocialInputGroup.Input
            platform="discord"
            inputProps={{
              ...register('discord'),
            }}
          />
          <SocialInputGroup.Input
            platform="instagram"
            inputProps={{
              ...register('instagram'),
            }}
          />
          <SocialInputGroup.Input
            platform="twitter"
            inputProps={{
              ...register('twitter'),
            }}
          />
          <SocialInputGroup.Input
            platform="tiktok"
            inputProps={{
              ...register('tiktok'),
            }}
          />
        </SocialInputGroup>
        <CopyTextInput
          label="Phantom Wallet Address"
          placeholder="Wallet not connected"
          value={'PLACEHOLDER-12u384yyihieuyr747y333'}
          readonly
        />
        <Button type="submit">Save Settings</Button>
      </form>
    </Layout>
  )
}

export default SettingsPage
