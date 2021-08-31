import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Spinner, SpinnerProps } from './Spinner';

export default {
  title: 'Layout/Spinner',
  component: Spinner,
  argTypes: {},
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'large',
};
