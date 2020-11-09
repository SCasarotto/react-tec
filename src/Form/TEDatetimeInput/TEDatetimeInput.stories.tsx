import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEDatetimeInput, TEDatetimeInputProps } from './TEDatetimeInput'

export default {
	title: 'Form/TEDatetimeInput',
	component: TEDatetimeInput,
	argTypes: {},
} as Meta

const Template: Story<TEDatetimeInputProps> = (args) => <TEDatetimeInput {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Time = Template.bind({})
Time.args = {
	timeFormat: 'h:mm aa',
	timeIntervals: 15,
	dateFormat: 'MMMM d, yyyy h:mm aa',
	showTimeSelect: true,
}

export const WithPortalButton = Template.bind({})
WithPortalButton.args = {
	timeFormat: 'h:mm aa',
	timeIntervals: 15,
	dateFormat: 'MMMM d, yyyy h:mm aa',
	showTimeSelect: true,
	withPortalButton: true,
}
