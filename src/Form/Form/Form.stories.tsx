import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Button } from '../Button';
import { Form, FormProps } from './Form';

export default {
  title: 'Form/Form',
  component: Form,
  argTypes: {},
} as Meta;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Button type='submit'>Submit</Button>,
  onSubmit: (e) => {
    e.preventDefault();
    alert('Submitted!');
  },
};
