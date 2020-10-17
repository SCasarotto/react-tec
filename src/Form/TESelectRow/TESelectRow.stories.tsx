import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TESelectRow, TESelectRowProps } from './TESelectRow'

export default {
	title: 'Form/TESelectRow',
	component: TESelectRow,
	argTypes: {},
} as Meta

const Template: Story<TESelectRowProps<T>> = (args) => <TESelectRow {...args} />

export const Default = Template.bind({})
Default.args = {}
