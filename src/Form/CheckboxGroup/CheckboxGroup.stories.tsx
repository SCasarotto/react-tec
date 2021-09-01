import React from 'react';

import { Story, Meta } from '@storybook/react';

import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';

export default {
  title: 'Form/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {},
} as Meta;

const Template: Story<CheckboxGroupProps> = (args) => {
  return <CheckboxGroup {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  labelForKey: 'CheckboxGroup',
  title: 'CheckboxGroup',
  buttonArray: ['one', '2', 'hour'],
  onChange: (values) => console.log(values),
};
