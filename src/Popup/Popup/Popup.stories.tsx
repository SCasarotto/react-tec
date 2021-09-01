import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Popup, PopupProps } from './Popup';

export default {
  title: 'Popup/Popup',
  component: Popup,
  argTypes: {},
} as Meta;

const Template: Story<PopupProps> = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  children: <h1 style={{ textAlign: 'center' }}>Some Title</h1>,
};
