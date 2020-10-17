import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEInput, TEInputProps } from './TEInput'

export default {
	title: 'Form/TEInput',
	component: TEInput,
	argTypes: {},
} as Meta

const Template: Story<TEInputProps> = (args) => <TEInput {...args} />

export const Default = Template.bind({})
Default.args = {}
