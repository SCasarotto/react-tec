import React from 'react';

import { Story, Meta } from '@storybook/react';

import { ErrorLoadingAlert, ErrorLoadingAlertProps } from './ErrorLoadingAlert';

export default {
  title: 'Layout/ErrorLoadingAlert',
  component: ErrorLoadingAlert,
  argTypes: {},
} as Meta;

const Template: Story<ErrorLoadingAlertProps> = (args) => (
  <ErrorLoadingAlert {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Error Loading',
  message: 'There appears to be an error loading the data you requested.',
  onClick: () => alert('Button Clicked'),
  buttonTitle: 'Go Back',
};
