import React from 'react'
import Layout from '../../components/artists/Layout'
import { H1 } from '../../components/typography'

export default {
  title: 'For Artists/Layout',
  component: Layout,
  argTypes: {
    children: { control: 'text' },
    showNav: { control: 'boolean' },
  },
}

const Template = (args) => <Layout {...args} />

export const Default = Template.bind({})

Default.args = {
  children: <H1>Welcome.</H1>,
  showNav: true,
}
