import React from 'react';

import { Story, Meta } from '@storybook/react';

import { SideNavbar, SideNavbarProps } from './SideNavbar';

export default {
  title: 'Navigation/SideNavbar',
  component: SideNavbar,
  argTypes: {},
} as Meta;

const Template: Story<SideNavbarProps> = (args) => <SideNavbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
