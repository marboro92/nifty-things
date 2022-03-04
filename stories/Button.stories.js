import React from 'react'
import Button from '../components/buttons/Button'

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    as: { control: 'text' },
    size: { options: ['sm', 'md', 'lg', 'xl'], control: 'radio' },
    variant: { options: ['primary', 'secondary', 'outline'], control: 'radio' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
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
  variant: 'secondary',
}

export const Outline = Template.bind({})

Outline.args = {
  children: 'Upload',
  variant: 'outline',
}

export const FullWidth = Template.bind({})

FullWidth.args = {
  children: 'Create',
  fullWidth: true,
  size: 'lg',
}
