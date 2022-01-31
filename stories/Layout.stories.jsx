import React from 'react';
import Layout from '../components/layout';

export default {
  title: 'Components/Layout',
  component: Layout,
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Main Content',
};
