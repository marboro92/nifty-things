import React from 'react'
import SocialInputGroup from '../../components/artists/SocialInputGroup'

export default {
  title: 'For Artists/SocialInputGroup',
  component: SocialInputGroup,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    required: { control: 'boolean' },
  },
}

const Template = (args) => <SocialInputGroup {...args} />

export const Default = Template.bind({})

Default.args = {
  children: (
    <>
      <SocialInputGroup.Input platform="web" />
      <SocialInputGroup.Input platform="tiktok" />
      <SocialInputGroup.Input platform="discord" />
    </>
  ),
  label: 'Name',
  name: 'name',
  description: 'The name for your new collection.',
  placeholder: 'Item name',
  error: false,
  errorMessage: '',
}

export const Error = Template.bind({})

Error.args = {
  children: <SocialInputGroup.Input />,
  label: 'Name',
  name: 'name',
  description: 'The name for your new collection.',
  placeholder: 'Item name',
  error: true,
  errorMessage: 'A name is required.',
}
