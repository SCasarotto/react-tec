import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TESearchSelectInput } from './TESearchSelectInput'

export default {
	title: 'Form/TESearchSelectInput',
	component: TESearchSelectInput,
	argTypes: {},
} as Meta

const Template: Story = (args) => <TESearchSelectInput {...args} />

export const Default = Template.bind({})
Default.args = {
	onChange: ({ option }: any) => console.log(option),
	options: ['value1', 'otherValue', 'Click Me!', 'No No Pick Me!!!'],
}

export const Multi = Template.bind({})
Multi.args = {
	type: 'multi',
	onChange: ({ option }: any) => console.log(option),
	options: ['value2', 'otherValue2', 'Click Me2!', 'No No Pick Me2!!!'],
	value: [],
}
