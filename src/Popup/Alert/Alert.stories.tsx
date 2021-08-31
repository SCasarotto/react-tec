import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Alert, AlertProps } from './Alert';

export default {
  title: 'Popup/Alert',
  component: Alert,
  argTypes: {},
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Alert!',
  message: 'You have been alerted to stay alert.',
  visible: true,
  children: (
    <p style={{ textAlign: 'center' }}>
      Some extra components passed into the body
    </p>
  ),
};
