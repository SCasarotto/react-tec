import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEPopupMultiStepForm, TEPopupMultiStepFormProps } from './TEPopupMultiStepForm'

export default {
	title: 'Popup/TEPopupMultiStepForm',
	component: TEPopupMultiStepForm,
	argTypes: {},
} as Meta

const Template: Story<TEPopupMultiStepFormProps> = (args) => <TEPopupMultiStepForm {...args} />

export const Default = Template.bind({})
Default.args = {}
