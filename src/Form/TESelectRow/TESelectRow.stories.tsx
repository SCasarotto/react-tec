import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TESelectRow } from './TESelectRow'

export default {
	title: 'Form/TESelectRow',
	component: TESelectRow,
	argTypes: {},
} as Meta

// TODO: Determine if types can be done better
const Template: Story = (args) => <TESelectRow {...args} />

export const Default = Template.bind({})
Default.args = {
	labelForKey: 'SomeUniqueKey123',
	title: 'My Search Select Row',
	options: [
		{ label: 'value1', value: 'value1' },
		{ label: 'otherValue', value: 'otherValue' },
		{ label: 'Click Me!', value: 'Click Me!' },
		{ label: 'No No Pick Me!!!', value: 'No No Pick Me!!!' },
	],
	onChange: (value: any) => console.log(value),
}
