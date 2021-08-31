import React from 'react';

import { Story, Meta } from '@storybook/react';

import { SegmentedGroup, SegmentedGroupProps } from './SegmentedGroup';

export default {
  title: 'Form/SegmentedGroup',
  component: SegmentedGroup,
  argTypes: {},
} as Meta;

const Template: Story<SegmentedGroupProps> = (args) => (
  <SegmentedGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  labelForKey: 'SegmentedGroup',
  title: 'My Radio Button Group',
  onChange: (e) => console.log(e.target.value),
  buttonArray: ['value1', 'valueTwo', 'OtherValue'],
};

export const Inline = Template.bind({});
Inline.args = {
  labelForKey: 'SegmentedGroupInline',
  title: 'My Radio Button Group',
  onChange: (e) => console.log(e.target.value),
  buttonArray: ['value1', 'valueTwo', 'OtherValue'],
  inline: true,
};
