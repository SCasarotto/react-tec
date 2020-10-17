import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TESpinner, TESpinnerProps } from './TESpinner'

export default {
	title: 'Layout/TESpinner',
	component: TESpinner,
	argTypes: {},
} as Meta

const Template: Story<TESpinnerProps> = (args) => <TESpinner {...args} />

export const Default = Template.bind({})
Default.args = {}
