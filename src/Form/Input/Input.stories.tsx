import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from './Input';

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {},
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (e) => console.log(e.target.value),
};
