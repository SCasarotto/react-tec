import React from 'react';

import { Story, Meta } from '@storybook/react';

import { DatetimeRow, DatetimeRowProps } from './DatetimeRow';

export default {
  title: 'Form/DatetimeRow',
  component: DatetimeRow,
  argTypes: {},
} as Meta;

const Template: Story<DatetimeRowProps> = (args) => <DatetimeRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelForKey: 'SomeUniqueKey',
  title: 'Datetime Row',
};
