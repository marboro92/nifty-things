import React from 'react'
import Overline from '../components/typography/Overline'

export default {
  title: 'Typography/Overline',
  component: Overline,
  argTypes: {
    children: { control: 'text' },
  },
}

const Template = (args) => <Overline {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'contact us',
}
