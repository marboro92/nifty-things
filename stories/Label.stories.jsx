import React from 'react'
import Label from '../components/typography/Label'

export default {
  title: 'Typography/Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
  },
}

const Template = (args) => <Label {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'The summary will be located underneath the image.',
}
