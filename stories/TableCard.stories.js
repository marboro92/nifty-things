import React from 'react'
import TableCard from '../components/TableCard'

export default {
  title: 'Components/TableCard',
  component: TableCard,
}

const Template = (args) => <TableCard {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Some additional details',
  className: '',
  header: 'Table Header',
}
