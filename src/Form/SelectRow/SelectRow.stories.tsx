import React from 'react';

import { Story, Meta } from '@storybook/react';

import { SelectRow } from './SelectRow';

export default {
  title: 'Form/SelectRow',
  component: SelectRow,
  argTypes: {},
} as Meta;

// TODO: Determine if types can be done better
const Template: Story = (args) => <SelectRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelForKey: 'SomeUniqueKey123',
  title: 'My Search Select Row',
  options: [
    { label: 'value1', value: 'value1' },
    { label: 'otherValue', value: 'otherValue' },
    { label: 'Click Me!', value: 'Click Me!' },
    { label: 'No No Pick Me!!!', value: 'No No Pick Me!!!' },
  ],
  onChange: (value: any) => console.log(value),
};
