import React from 'react'
import CollectionsGrid from '../../components/artists/CollectionsGrid'
import { MOCK_COLLECTIONS } from '../../mock-data/mock-collections'

export default {
  title: 'For Artists/CollectionsGrid',
  component: CollectionsGrid,
  args: {
    expandable: true,
  },
}

const Template = (args) => <CollectionsGrid {...args} />

export const Default = Template.bind({})

Default.args = {
  collections: MOCK_COLLECTIONS,
}
