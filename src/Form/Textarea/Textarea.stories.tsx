import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Textarea, TextareaProps } from './Textarea';

export default {
  title: 'Form/Textarea',
  component: Textarea,
  argTypes: {},
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (e) => console.log(e.target.value),
};
