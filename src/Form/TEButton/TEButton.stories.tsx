import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEButton, TEButtonProps } from './TEButton'

export default {
	title: 'Form/TEButton',
	component: TEButton,
	argTypes: {
		children: { control: 'text' },
		disabled: { control: 'boolean' },
	},
} as Meta

const Template: Story<TEButtonProps> = (args) => <TEButton {...args} />

export const Default = Template.bind({})
Default.args = {
	children: 'Default',
	onClick: () => alert('Clicked!'),
}
export const Disabled = Template.bind({})
Disabled.args = {
	children: 'Disabled',
	disabled: true,
}
