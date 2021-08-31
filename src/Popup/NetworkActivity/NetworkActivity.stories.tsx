import React from 'react';

import { Story, Meta } from '@storybook/react';

import { NetworkActivity, NetworkActivityProps } from './NetworkActivity';

export default {
  title: 'Popup/NetworkActivity',
  component: NetworkActivity,
  argTypes: {},
} as Meta;

const Template: Story<NetworkActivityProps> = (args) => (
  <NetworkActivity {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: 'Loading...',
  visible: true,
};
