import React from 'react';

import { Story, Meta } from '@storybook/react';

import { BodyContainer, BodyContainerProps } from './BodyContainer';

export default {
  title: 'Layout/BodyContainer',
  component: BodyContainer,
  argTypes: {},
} as Meta;

const Template: Story<BodyContainerProps> = (args) => (
  <BodyContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {};
