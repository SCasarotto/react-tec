import React from 'react';

import { Story, Meta } from '@storybook/react';

import { TitleBar, TitleBarProps } from './TitleBar';

export default {
  title: 'Layout/TitleBar',
  component: TitleBar,
  argTypes: {},
} as Meta;

const Template: Story<TitleBarProps> = (args) => <TitleBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Some title',
};
