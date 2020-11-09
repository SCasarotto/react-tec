import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TESearchSelectRow, TESearchSelectRowProps } from './TESearchSelectRow'

export default {
	title: 'Form/TESearchSelectRow',
	component: TESearchSelectRow,
	argTypes: {},
} as Meta

const Template: Story<TESearchSelectRowProps> = (args) => <TESearchSelectRow {...args} />

export const Default = Template.bind({})
Default.args = {
	labelForKey: 'SomeUniqueKey123',
	title: 'My Search Select Row',
	options: ['value2', 'otherValue2', 'Click Me2!', 'No No Pick Me2!!!'],
	onChange: ({ option }: any) => console.log(option),
}
