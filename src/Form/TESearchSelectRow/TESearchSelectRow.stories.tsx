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
Default.args = {}
