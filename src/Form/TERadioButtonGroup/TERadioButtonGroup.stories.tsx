import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TERadioButtonGroup, TERadioButtonGroupProps } from './TERadioButtonGroup'

export default {
	title: 'Form/TERadioButtonGroup',
	component: TERadioButtonGroup,
	argTypes: {},
} as Meta

const Template: Story<TERadioButtonGroupProps> = (args) => <TERadioButtonGroup {...args} />

export const Default = Template.bind({})
Default.args = {}
