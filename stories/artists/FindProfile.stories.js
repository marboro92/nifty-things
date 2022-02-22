import React from 'react'
import FindProfile from '../../components/artists/FindProfile'

export default {
  title: 'For Artists/FindProfile',
  component: FindProfile,
  argTypes: {
    userType: { options: ['artist', 'label'], control: 'radio' },
  },
}

const Template = (args) => <FindProfile {...args} />

export const Default = Template.bind({})

Default.args = {
  userType: 'artist',
}
