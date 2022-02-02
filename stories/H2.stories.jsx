import React from 'react';
import H2 from '../components/typography/H2';

export default {
  title: 'Typography/H2',
  component: H2,
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = (args) => <H2 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Add links to your social media.',
};