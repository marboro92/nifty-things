import React from 'react'
import { User } from '../components/icons'
import CopyTextInput from '../components/inputs/CopyTextInput'

export default {
  title: 'Inputs/CopyTextInput',
  component: CopyTextInput,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    required: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
}

const Template = (args) => <CopyTextInput {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Name',
  name: 'name',
  description: 'The name for your new collection.',
  value: 'ME-348474747748',
  error: false,
  errorMessage: '',
}
