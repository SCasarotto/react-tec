import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  onClick: () => alert('Clicked!'),
};
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};
