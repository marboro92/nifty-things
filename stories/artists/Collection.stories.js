import React from 'react'
import Collection from '../../components/artists/Collection'

export default {
  title: 'For Artists/Collection',
  component: Collection,
  argTypes: {
    title: { control: 'text' },
    date: { control: 'text' },
    type: { control: 'text' },
    coverImgSrc: { control: 'text' },
    className: { control: 'text' },
    createHref: { control: 'text' },
    viewHref: { control: 'text' },
    minted: { control: 'boolean' },
  },
}

const Template = (args) => <Collection {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Metamorphosis',
  date: `January 11th, 2022`,
  type: 'EP',
  coverImgSrc: 'http://placeimg.com/100/100',
  viewHref: '/',
  trackList: [
    { title: 'Covered Tears' },
    { title: 'Covered Tears' },
    { title: 'Covered Tears' },
  ],
}
