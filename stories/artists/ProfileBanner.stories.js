import React from 'react'
import ProfileBanner from '../../components/artists/ProfileBanner'

export default {
  title: 'For Artists/ProfileBanner',
  component: ProfileBanner,
}

const Template = (args) => <ProfileBanner {...args} />

export const Default = Template.bind({})

Default.args = {
  verified: true,
  artistName: 'Adam Shomer',
  bannerSrc: '/artists/banner-1.jpg',
}
