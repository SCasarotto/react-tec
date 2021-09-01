import React from 'react';

import { Story, Meta } from '@storybook/react';

import { RadioButtonInput, RadioButtonInputProps } from './RadioButtonInput';

export default {
  title: 'Form/RadioButtonInput',
  component: RadioButtonInput,
  argTypes: {},
} as Meta;

const Template: Story<RadioButtonInputProps> = (args) => (
  <RadioButtonInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onChange: (e) => console.log(e.target.value),
  value: 'agreeToEmailSpam',
};
