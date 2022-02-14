import React from 'react'
import Link from '../components/buttons/Link'

export default {
  title: 'Links/Link',
  component: Link,
  argTypes: {
    children: { control: 'text' },
    as: { control: 'text' },
  },
}

const Template = (args) => <Link {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Create',
}
