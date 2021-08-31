import React from 'react';

import { Story, Meta } from '@storybook/react';

import { FileInput, FileInputProps } from './FileInput';

export default {
  title: 'Form/FileInput',
  component: FileInput,
  argTypes: {},
} as Meta;

const Template: Story<FileInputProps> = (args) => <FileInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (files) => console.log(files),
};

export const Multiple = Template.bind({});
Default.args = {
  onChange: (files) => console.log(files),
  accept: 'image/*',
  filePattern: /image-*/,
  multiple: true,
};
