import React from 'react';

import { Story, Meta } from '@storybook/react';

import { PopupForm, PopupFormProps } from './PopupForm';

export default {
  title: 'Popup/PopupForm',
  component: PopupForm,
  argTypes: {},
} as Meta;

const Template: Story<PopupFormProps> = (args) => <PopupForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  onClose: () => console.log('onClose'),
  onSubmit: () => console.log('onSubmit'),
  children: <p style={{ textAlign: 'center' }}>Some form goes here!</p>,
};
