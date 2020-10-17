import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TERadioButtonInput, TERadioButtonInputProps } from './TERadioButtonInput'

export default {
	title: 'Form/TERadioButtonInput',
	component: TERadioButtonInput,
	argTypes: {},
} as Meta

const Template: Story<TERadioButtonInputProps> = (args) => <TERadioButtonInput {...args} />

export const Default = Template.bind({})
Default.args = {}
