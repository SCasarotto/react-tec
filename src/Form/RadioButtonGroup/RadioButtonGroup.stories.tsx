import React from 'react';

import { Story, Meta } from '@storybook/react';

import { RadioButtonGroup, RadioButtonGroupProps } from './RadioButtonGroup';

export default {
  title: 'Form/RadioButtonGroup',
  component: RadioButtonGroup,
  argTypes: {},
} as Meta;

const Template: Story<RadioButtonGroupProps> = (args) => (
  <RadioButtonGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  labelForKey: 'RadioButtonGroup',
  title: 'My Radio Button Group',
  onChange: (e) => console.log(e.target.value),
  buttonArray: ['value1', 'valueTwo', 'OtherValue'],
};
