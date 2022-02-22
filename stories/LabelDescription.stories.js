import React from 'react'
import LabelDescription from '../components/typography/LabelDescription'

export default {
  title: 'Typography/LabelDescription',
  component: LabelDescription,
  argTypes: {
    children: { control: 'text' },
    size: { options: ['sm', 'lg'], control: 'radio' },
  },
}

const Template = (args) => <LabelDescription {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'The summary will be located underneath the image.',
}
