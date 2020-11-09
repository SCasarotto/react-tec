import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEDatetimeRow, TEDatetimeRowProps } from './TEDatetimeRow'

export default {
	title: 'Form/TEDatetimeRow',
	component: TEDatetimeRow,
	argTypes: {},
} as Meta

const Template: Story<TEDatetimeRowProps> = (args) => <TEDatetimeRow {...args} />

export const Default = Template.bind({})
Default.args = {
	labelForKey: 'SomeUniqueKey',
	title: 'Datetime Row',
}
