import React from 'react';

import { Story, Meta } from '@storybook/react';

import { DatetimeInput, DatetimeInputProps } from './DatetimeInput';

export default {
  title: 'Form/DatetimeInput',
  component: DatetimeInput,
  argTypes: {},
} as Meta;

const Template: Story<DatetimeInputProps> = (args) => (
  <DatetimeInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Time = Template.bind({});
Time.args = {
  timeFormat: 'h:mm aa',
  timeIntervals: 15,
  dateFormat: 'MMMM d, yyyy h:mm aa',
  showTimeSelect: true,
};

export const WithPortalButton = Template.bind({});
WithPortalButton.args = {
  timeFormat: 'h:mm aa',
  timeIntervals: 15,
  dateFormat: 'MMMM d, yyyy h:mm aa',
  showTimeSelect: true,
  withPortalButton: true,
};
