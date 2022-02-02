import React from 'react'
import PillButton from '../components/buttons/PillButton'

export default {
  title: 'Buttons/PillButton',
  component: PillButton,
  argTypes: {
    children: { control: 'text' },
    secondary: { control: 'boolean' },
  },
}

const Template = (args) => <PillButton {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Profile',
}

export const Secondary = Template.bind({})

Secondary.args = {
  children: 'Connect',
  secondary: true,
}
