import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Input } from '../Input';
import { FormRow, FormRowProps } from './FormRow';

export default {
  title: 'Form/Row',
  component: FormRow,
  argTypes: {},
} as Meta;

const Template: Story<FormRowProps> = (args) => <FormRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Input onChange={(e) => console.log(e.target.value)} />,
};

export const Sizes = () => (
  <>
    <FormRow>
      <Input onChange={(e) => console.log(e.target.value)} />
    </FormRow>
    <FormRow rowSize='half'>
      <Input onChange={(e) => console.log(e.target.value)} />
    </FormRow>
    <FormRow rowSize='half' last>
      <Input onChange={(e) => console.log(e.target.value)} />
    </FormRow>
    <FormRow rowSize='two-third'>
      <Input onChange={(e) => console.log(e.target.value)} />
    </FormRow>
    <FormRow rowSize='third' last>
      <Input onChange={(e) => console.log(e.target.value)} />
    </FormRow>
    <FormRow rowSize='half'>
      <Input onChange={(e) => console.log(e.target.value)} />
    </FormRow>
    <FormRow rowSize='forth'>
      <Input onChange={(e) => console.log(e.target.value)} />
    </FormRow>
    <FormRow rowSize='forth' last>
      <Input onChange={(e) => console.log(e.target.value)} />
    </FormRow>
    <FormRow rowSize='condensed'>
      <Input onChange={(e) => console.log(e.target.value)} />
    </FormRow>
    <FormRow rowSize='condensed'>
      <Input onChange={(e) => console.log(e.target.value)} />
    </FormRow>
    <FormRow rowSize='condensed' last>
      <Input onChange={(e) => console.log(e.target.value)} />
    </FormRow>
  </>
);
