import React from 'react'
import { User } from '../components/icons'
import Input from '../components/inputs/Input'

export default {
  title: 'Inputs/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    required: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
}

const Template = (args) => <Input {...args} />

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

export const WithIcon = Template.bind({})

WithIcon.args = {
  label: 'Name',
  name: 'name',
  description: 'The name for your new collection.',
  placeholder: 'Item name',
  icon: <User />,
}
