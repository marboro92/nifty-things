import React from 'react'
import Tab from '../components/buttons/Tab'

export default {
  title: 'Buttons/Tab',
  component: Tab,
  argTypes: {
    children: { control: 'text' },
    as: { control: 'text' },
    selected: { control: 'boolean' },
  },
}

const Template = (args) => <Tab {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Profile',
}
