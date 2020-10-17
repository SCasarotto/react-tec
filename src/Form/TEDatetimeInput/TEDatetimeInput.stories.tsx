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
