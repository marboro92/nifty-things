import React from 'react'
import SearchInput from '../components/inputs/SearchInput'

export default {
  title: 'Inputs/SearchInput',
  component: SearchInput,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
  },
}

const Template = (args) => <SearchInput {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'search',
  placeholder: 'Search artists',
  error: false,
}

export const WithResults = Template.bind({})

WithResults.args = {
  name: 'search',
  placeholder: 'Search artists',
  dropdownItems: [
    {
      content: 'item 1',
      id: 1,
    },
    {
      content: 'item 3',
      id: 3,
    },
    {
      content: 'item 2',
      id: 2,
    },
    {
      content: 'item 22',
      id: 22,
    },
    {
      content: 'item 123',
      id: 123,
    },
    {
      content: 'item 4',
      id: 4,
    },
  ],
  error: false,
}
