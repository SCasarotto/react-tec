import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Input } from '../Input';
import { MultiStepForm, MultiStepFormProps } from './MultiStepForm';

export default {
  title: 'Form/MultiStepForm',
  component: MultiStepForm,
  argTypes: {},
} as Meta;

const Template: Story<MultiStepFormProps> = (args) => (
  <MultiStepForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onSubmit: () => {
    alert('Submitted!');
    return Promise.resolve();
  },
  stepData: [
    {
      title: 'Step 1',
      component: <Input onChange={(e) => console.log(e.target.value)} />,
      onNext: () => {
        console.log('Heading to step 2!');
        return Promise.resolve();
      },
    },
    {
      title: 'Step 22',
      component: <Input onChange={(e) => console.log(e.target.value)} />,
      onPrevious: () => {
        console.log('Heading back to step 1!');
        return Promise.resolve();
      },
      onNext: () => {
        console.log('Heading to step 3!');
        return Promise.resolve();
      },
    },
    {
      title: 'Step 333',
      component: <Input onChange={(e) => console.log(e.target.value)} />,
    },
  ],
};
