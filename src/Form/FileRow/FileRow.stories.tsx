import React from 'react';

import { Story, Meta } from '@storybook/react';

import { FileRow, FileRowProps } from './FileRow';

export default {
  title: 'Form/FileRow',
  component: FileRow,
  argTypes: {},
} as Meta;

const Template: Story<FileRowProps> = (args) => <FileRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'My FileRow',
  labelForKey: 'SomeUniqueKey2',
  onChange: (files) => console.log(files),
};
