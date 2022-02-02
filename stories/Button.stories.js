import React from 'react'
import Button from '../components/buttons/Button'

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    as: { control: 'text' },
    size: { control: 'text' },
    secondary: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Create',
}

export const Secondary = Template.bind({})

Secondary.args = {
  children: 'Upload',
  secondary: true,
}

export const FullWidth = Template.bind({})

FullWidth.args = {
  children: 'Create',
  fullWidth: true,
  size: 'lg',
}
