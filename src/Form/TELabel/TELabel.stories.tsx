import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TELabel, TELabelProps } from './TELabel'

export default {
	title: 'Form/TELabel',
	component: TELabel,
	argTypes: {},
} as Meta

const Template: Story<TELabelProps> = (args) => <TELabel {...args} />

export const Default = Template.bind({})
Default.args = {
	children: 'Default',
}

export const Required = Template.bind({})
Required.args = {
	children: 'Required',
	required: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
	children: 'Disabled',
	disabled: true,
}
