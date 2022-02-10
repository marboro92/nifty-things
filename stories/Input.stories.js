import React from 'react'
import Input from '../components/inputs/Input'

export default {
  title: 'Inputs/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
  },
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Name',
  description: 'The name for your new collection.',
  placeholder: 'Item name',
  error: false,
  errorMessage: '',
}
