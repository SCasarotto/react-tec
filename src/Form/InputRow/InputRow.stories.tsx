import React from 'react';

import { Story, Meta } from '@storybook/react';

import { InputRow, InputRowProps } from './InputRow';

export default {
  title: 'Form/InputRow',
  component: InputRow,
  argTypes: {},
} as Meta;

const Template: Story<InputRowProps> = (args) => <InputRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'My Input',
  labelForKey: 'SomeUniqueKey42',
  onChange: (e) => console.log(e.target.value),
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  labelForKey: 'SomeUniqueKey666',
  title: 'My Number Input',
  onChange: (e) => console.log(e.target.value),
};
