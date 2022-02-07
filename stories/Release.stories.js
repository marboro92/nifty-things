import React from 'react'
import Release from '../components/Release'

export default {
  title: 'Components/Release',
  component: Release,
  argTypes: {
    children: { control: 'text' },
  },
}

const Template = (args) => <Release {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Upload music and cover art.',
}
