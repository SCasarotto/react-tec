import React from 'react';

import { Story, Meta } from '@storybook/react';

import { SubNavbar, SubNavbarProps } from './SubNavbar';

export default {
  title: 'Navigation/SubNavbar',
  component: SubNavbar,
  argTypes: {},
} as Meta;

const Template: Story<SubNavbarProps> = (args) => <SubNavbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
