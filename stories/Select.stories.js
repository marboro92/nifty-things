import React from 'react'
import Select from '../components/inputs/Select'

export default {
  title: 'Inputs/Select',
  component: Select,
  argTypes: {
    children: { control: 'text' },
    as: { control: 'text' },
  },
}

const Template = (args) => <Select {...args} />

export const Default = Template.bind({})

Default.args = {
  children: (
    <>
      <option>Crypto.com</option>
      <option>Binance</option>
      <option>Open Sea</option>
      <option selected>NiftyTunes</option>
    </>
  ),
}
