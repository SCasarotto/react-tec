import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Label } from '../../Form/Label';
import {
  PopupMultiStepForm,
  PopupMultiStepFormProps,
} from './PopupMultiStepForm';

export default {
  title: 'Popup/PopupMultiStepForm',
  component: PopupMultiStepForm,
  argTypes: {},
} as Meta;

const Template: Story<PopupMultiStepFormProps> = (args) => (
  <PopupMultiStepForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  visible: true,
  onClose: () => console.log('onClose'),
  onSubmit: async () => console.log('MultiStepForm Submit'),
  stepData: [
    {
      title: 'Step210',
      component: (
        <div>
          <Label htmlFor='test' required disabled>
            Label
          </Label>
        </div>
      ),
    },
    {
      title: 'Step#3',
      component: (
        <div>
          <Label htmlFor='test' required disabled>
            S33
          </Label>
        </div>
      ),
    },
    {
      title: 'Step444',
      component: (
        <div>
          <Label htmlFor='test' required disabled>
            A4A4
          </Label>
        </div>
      ),
    },
  ],
};
