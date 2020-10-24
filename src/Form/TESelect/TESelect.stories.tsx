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
Default.args = {}
