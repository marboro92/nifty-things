import React from 'react'
import Datepicker from '../components/inputs/Datepicker'

export default {
  title: 'Inputs/Datepicker',
  component: Datepicker,
  argTypes: {
    children: { control: 'text' },
    as: { control: 'text' },
  },
}

const Template = (args) => <Datepicker {...args} />

export const Default = Template.bind({})

Default.args = {}
