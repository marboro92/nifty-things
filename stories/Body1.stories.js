import React from 'react'
import Body1 from '../components/typography/Body1'

export default {
  title: 'Typography/Body1',
  component: Body1,
  argTypes: {
    children: { control: 'text' },
  },
}

const Template = (args) => <Body1 {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Upload music and cover art.',
}
