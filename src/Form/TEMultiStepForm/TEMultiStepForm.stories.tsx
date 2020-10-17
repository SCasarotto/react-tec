import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEMultiStepForm, TEMultiStepFormProps } from './TEMultiStepForm'

export default {
	title: 'Form/TEMultiStepForm',
	component: TEMultiStepForm,
	argTypes: {},
} as Meta

const Template: Story<TEMultiStepFormProps> = (args) => <TEMultiStepForm {...args} />

export const Default = Template.bind({})
Default.args = {}
