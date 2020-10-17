import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TECheckboxInput, TECheckboxInputProps } from './TECheckboxInput'

export default {
	title: 'Form/TECheckboxInput',
	component: TECheckboxInput,
	argTypes: {},
} as Meta

const Template: Story<TECheckboxInputProps> = (args) => <TECheckboxInput {...args} />

export const Default = Template.bind({})
Default.args = {
	value: 'soemValue',
}
