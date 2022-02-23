import React from 'react'
import Textarea from '../components/inputs/Textarea'

export default {
  title: 'Inputs/Textarea',
  component: Textarea,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    required: { control: 'boolean' },
  },
}

const Template = (args) => <Textarea {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Name',
  name: 'name',
  description: 'The name for your new collection.',
  placeholder: 'Item name',
  error: false,
  errorMessage: '',
}

export const Error = Template.bind({})

Error.args = {
  label: 'Name',
  name: 'name',
  description: 'The name for your new collection.',
  placeholder: 'Item name',
  error: true,
  errorMessage: 'A name is required.',
}
