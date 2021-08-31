import React from 'react';

import { Story, Meta } from '@storybook/react';

import { CheckboxInput, CheckboxInputProps } from './CheckboxInput';

export default {
  title: 'Form/CheckboxInput',
  component: CheckboxInput,
  argTypes: {},
} as Meta;

const Template: Story<CheckboxInputProps> = (args) => (
  <CheckboxInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onChange: (e) => console.log(e.target.value),
  value: 'agreeToEmailSpam',
};
