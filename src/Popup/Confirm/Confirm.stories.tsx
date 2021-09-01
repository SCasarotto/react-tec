import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Confirm, ConfirmProps } from './Confirm';

export default {
  title: 'Popup/Confirm',
  component: Confirm,
  argTypes: {},
} as Meta;

const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Confirm!',
  message: 'Are you super sure?',
  visible: true,
  leftOnClick: () => console.log('left'),
  leftButtonTitle: 'No',
  rightOnClick: () => console.log('right'),
  rightButtonTitle: 'Yes',
};
