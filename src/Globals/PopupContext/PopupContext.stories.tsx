import React from 'react';

import { Story, Meta } from '@storybook/react';

import { PopupProvider } from './PopupContext';

export default {
  title: 'Globals/PopupContext',
  component: PopupProvider,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <PopupProvider {...args} />;

export const Default = Template.bind({});
Default.args = {};
