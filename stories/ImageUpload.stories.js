import React from 'react'
import ImageUpload from '../components/inputs/ImageUpload'

export default {
  title: 'Inputs/ImageUpload',
  component: ImageUpload,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    required: { control: 'boolean' },
  },
}

const Template = (args) => <ImageUpload {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Name',
  name: 'name',
  description: 'The name for your new collection.',
  placeholder: 'Item name',
  error: false,
  errorMessage: '',
}
