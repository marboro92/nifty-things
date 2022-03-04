import React from 'react'
import VerifyProfile from '../../components/artists/VerifyProfile'

export default {
  title: 'For Artists/VerifyProfile',
  component: VerifyProfile,
  argTypes: {
    userType: { options: ['artist', 'label'], control: 'radio' },
  },
}

const Template = (args) => <VerifyProfile {...args} />

export const Default = Template.bind({})

Default.args = {
  userType: 'artist',
}
