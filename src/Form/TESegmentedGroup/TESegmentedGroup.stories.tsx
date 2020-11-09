import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TESegmentedGroup, TESegmentedGroupProps } from './TESegmentedGroup'

export default {
	title: 'Form/TESegmentedGroup',
	component: TESegmentedGroup,
	argTypes: {},
} as Meta

const Template: Story<TESegmentedGroupProps> = (args) => <TESegmentedGroup {...args} />

export const Default = Template.bind({})
Default.args = {
	labelForKey: 'TESegmentedGroup',
	title: 'My Radio Button Group',
	onChange: (e) => console.log(e.target.value),
	buttonArray: ['value1', 'valueTwo', 'OtherValue'],
}

export const Inline = Template.bind({})
Inline.args = {
	labelForKey: 'TESegmentedGroupInline',
	title: 'My Radio Button Group',
	onChange: (e) => console.log(e.target.value),
	buttonArray: ['value1', 'valueTwo', 'OtherValue'],
	inline: true,
}
