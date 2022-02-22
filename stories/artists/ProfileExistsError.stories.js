import React from 'react'
import ProfileExistsError from '../../components/artists/ProfileExistsError'

export default {
  title: 'For Artists/ProfileExistsError',
  component: ProfileExistsError,
  argTypes: {
    userType: { options: ['artist', 'label'], control: 'radio' },
  },
}

const Template = (args) => <ProfileExistsError {...args} />

export const Default = Template.bind({})

Default.args = {
  userType: 'artist',
  name: 'A-SHO',
}
