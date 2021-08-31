import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Label, LabelProps } from './Label';

export default {
  title: 'Form/Label',
  component: Label,
  argTypes: {},
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Required = Template.bind({});
Required.args = {
  children: 'Required',
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};
