import React from 'react'
import InlineLink from '../components/links/InlineLink'

export default {
  title: 'Links/InlineLink',
  component: InlineLink,
  argTypes: {
    children: { control: 'text' },
    as: { control: 'text' },
  },
}

const Template = (args) => (
  <p className="text-neutral-400">
    The following is a {''}
    <InlineLink {...args} />.
  </p>
)

export const Default = Template.bind({})

Default.args = {
  children: 'link within text',
}
