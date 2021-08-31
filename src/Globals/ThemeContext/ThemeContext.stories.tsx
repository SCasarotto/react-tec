import React from 'react';

import { Story, Meta } from '@storybook/react';

import { ThemeProvider, ThemeProviderProps } from './ThemeContext';

export default {
  title: 'Globals/ThemeContext',
  component: ThemeProvider,
  argTypes: {},
} as Meta;

const Template: Story<ThemeProviderProps> = (args) => (
  <ThemeProvider {...args} />
);

export const Default = Template.bind({});
Default.args = {};
