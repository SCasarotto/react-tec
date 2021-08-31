import React from 'react';

import { Story, Meta } from '@storybook/react';

import { PhoneNumberRow, PhoneNumberRowProps } from './PhoneNumberRow';

export default {
  title: 'Form/PhoneNumberRow',
  component: PhoneNumberRow,
  argTypes: {},
} as Meta;

const Template: Story<PhoneNumberRowProps> = (args) => (
  <PhoneNumberRow {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'My Phone Number Input',
  labelForKey: 'SomeUniqueKey42',
  onChange: (phoneNumber) => console.log(phoneNumber),
};
