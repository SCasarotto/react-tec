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
Default.args = {}
