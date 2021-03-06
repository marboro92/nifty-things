import React from 'react'
import H1 from '../components/typography/H1'

export default {
  title: 'Typography/H1',
  component: H1,
  argTypes: {
    children: { control: 'text' },
    size: { options: ['sm', 'lg'], control: 'radio' },
  },
}

const Template = (args) => <H1 {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Creators Matter. Period.',
}
