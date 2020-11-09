import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TESelect } from './TESelect'

export default {
	title: 'Form/TESelect',
	component: TESelect,
	argTypes: {},
} as Meta

// TODO: Determine if types can be done better
const Template: Story = (args) => <TESelect {...args} />

export const Default = Template.bind({})
Default.args = {
	onChange: (value: any) => console.log(value),
	options: [
		{ label: 'value1', value: 'value1' },
		{ label: 'otherValue', value: 'otherValue' },
		{ label: 'Click Me!', value: 'Click Me!' },
		{ label: 'No No Pick Me!!!', value: 'No No Pick Me!!!' },
	],
}

export const Multi = Template.bind({})
Multi.args = {
	onChange: (value: any) => console.log(value),
	options: [
		{ label: 'value1', value: 'value1' },
		{ label: 'otherValue', value: 'otherValue' },
		{ label: 'Click Me!', value: 'Click Me!' },
		{ label: 'No No Pick Me!!!', value: 'No No Pick Me!!!' },
	],
	isMulti: true,
}
