import React from 'react';

import { Story, Meta } from '@storybook/react';

import { PanelWrapper, PanelWrapperProps } from './PanelWrapper';

export default {
  title: 'Layout/PanelWrapper',
  component: PanelWrapper,
  argTypes: {},
} as Meta;

const Template: Story<PanelWrapperProps> = (args) => <PanelWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {};
