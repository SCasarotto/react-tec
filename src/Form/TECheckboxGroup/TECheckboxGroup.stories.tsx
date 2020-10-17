import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TECheckboxGroup, TECheckboxGroupProps } from './TECheckboxGroup'

export default {
	title: 'Form/TECheckboxGroup',
	component: TECheckboxGroup,
	argTypes: {},
} as Meta

const Template: Story<TECheckboxGroupProps> = (args) => <TECheckboxGroup {...args} />

export const Default = Template.bind({})
Default.args = {
	labelForKey: 'TECheckboxGroup',
	title: 'TECheckboxGroup',
	buttonArray: ['one', '2', 'hour'],
}
