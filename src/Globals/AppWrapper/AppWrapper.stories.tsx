import React from 'react';

import { Story, Meta } from '@storybook/react';

import { AppWrapper, AppWrapperProps } from './AppWrapper';

export default {
  title: 'Globals/AppWrapper',
  component: AppWrapper,
  argTypes: {},
} as Meta;

const Template: Story<AppWrapperProps> = (args) => <AppWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {};
