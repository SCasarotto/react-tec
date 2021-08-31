import React from 'react';

import { Story, Meta } from '@storybook/react';

import { TextareaRow, TextareaRowProps } from './TextareaRow';

export default {
  title: 'Form/TextareaRow',
  component: TextareaRow,
  argTypes: {},
} as Meta;

const Template: Story<TextareaRowProps> = (args) => <TextareaRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'My Text Area',
  labelForKey: 'SomeUniqueKey42',
  onChange: (e) => console.log(e.target.value),
};
