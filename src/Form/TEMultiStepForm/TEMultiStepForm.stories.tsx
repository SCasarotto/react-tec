import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEMultiStepForm, TEMultiStepFormProps } from './TEMultiStepForm'
import { TEInput } from '../TEInput'

export default {
	title: 'Form/TEMultiStepForm',
	component: TEMultiStepForm,
	argTypes: {},
} as Meta

const Template: Story<TEMultiStepFormProps> = (args) => <TEMultiStepForm {...args} />

export const Default = Template.bind({})
Default.args = {
	onSubmit: () => {
		alert('Submitted!')
		return Promise.resolve()
	},
	stepData: [
		{
			title: 'Step 1',
			component: <TEInput onChange={(e) => console.log(e.target.value)} />,
			onNext: () => {
				console.log('Heading to step 2!')
				return Promise.resolve()
			},
		},
		{
			title: 'Step 22',
			component: <TEInput onChange={(e) => console.log(e.target.value)} />,
			onPrevious: () => {
				console.log('Heading back to step 1!')
				return Promise.resolve()
			},
			onNext: () => {
				console.log('Heading to step 3!')
				return Promise.resolve()
			},
		},
		{
			title: 'Step 333',
			component: <TEInput onChange={(e) => console.log(e.target.value)} />,
		},
	],
}
