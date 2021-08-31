import React from 'react';

import { Story, Meta } from '@storybook/react';

import { PhoneNumberInput, PhoneNumberInputProps } from './PhoneNumberInput';

export default {
  title: 'Form/PhoneNumberInput',
  component: PhoneNumberInput,
  argTypes: {},
} as Meta;

const Template: Story<PhoneNumberInputProps> = (args) => (
  <PhoneNumberInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onChange: (phoneNumber) => console.log(phoneNumber),
};
