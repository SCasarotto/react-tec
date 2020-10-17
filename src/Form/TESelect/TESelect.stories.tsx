import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TESelect, TESelectProps } from './TESelect'

export default {
	title: 'Form/TESelect',
	component: TESelect,
	argTypes: {},
} as Meta

const Template: Story<TESelectProps<T>> = (args) => <TESelect {...args} />

export const Default = Template.bind({})
Default.args = {}
