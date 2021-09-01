import React from 'react';

import { Story, Meta } from '@storybook/react';

import { PanelTitle, PanelTitleProps } from './PanelTitle';

export default {
  title: 'Layout/PanelTitle',
  component: PanelTitle,
  argTypes: {},
} as Meta;

const Template: Story<PanelTitleProps> = (args) => <PanelTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  subtitle: 'Subtitle',
};

export const Components = Template.bind({});
Components.args = {
  leftComponent: <button>Some Button</button>,
  rightComponent: <input />,
};
