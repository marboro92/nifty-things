import React from 'react'
import Release from '../components/Release'

export default {
  title: 'Components/Release',
  component: Release,
  argTypes: {
    title: { control: 'text' },
    verified: { control: 'boolean' },
    description: { control: 'text' },
    handle: { control: 'text' },
    profileImgSrc: { control: 'text' },
    coverImgSrc: { control: 'text' },
    className: { control: 'text' },
    href: { control: 'text' },
  },
}

const Template = (args) => <Release {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Marianne Borowiak',
  verified: true,
  description: `Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
  sit necessitatibus veritatis sed molestiae voluptates incidunt iure
  sapiente.`,
  handle: 'marboro',
  profileImgSrc: 'https://picsum.photos/id/1005/50/50',
  coverImgSrc: 'http://placeimg.com/400/200',
}
