import React from 'react'
import Body2 from '../components/typography/Body2'

export default {
  title: 'Typography/Body2',
  component: Body2,
  argTypes: {
    children: { control: 'text' },
  },
}

const Template = (args) => <Body2 {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Add your email to receive notifications',
}
