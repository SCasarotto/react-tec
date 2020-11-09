import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEPopupMultiStepForm, TEPopupMultiStepFormProps } from './TEPopupMultiStepForm'
import { TELabel } from '../../Form/TELabel'

export default {
	title: 'Popup/TEPopupMultiStepForm',
	component: TEPopupMultiStepForm,
	argTypes: {},
} as Meta

const Template: Story<TEPopupMultiStepFormProps> = (args) => <TEPopupMultiStepForm {...args} />

export const Default = Template.bind({})
Default.args = {
	visible: true,
	onClose: () => console.log('onClose'),
	onSubmit: async () => console.log('TEMultiStepForm Submit'),
	stepData: [
		{
			title: 'Step210',
			component: (
				<div>
					<TELabel htmlFor='test' required disabled>
						Label
					</TELabel>
				</div>
			),
		},
		{
			title: 'Step#3',
			component: (
				<div>
					<TELabel htmlFor='test' required disabled>
						S33
					</TELabel>
				</div>
			),
		},
		{
			title: 'Step444',
			component: (
				<div>
					<TELabel htmlFor='test' required disabled>
						A4A4
					</TELabel>
				</div>
			),
		},
	],
}
