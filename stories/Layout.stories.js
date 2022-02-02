import React from 'react';
import Layout from '../components/Layout';

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
