import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEForm, TEFormProps } from './TEForm'

export default {
	title: 'Form/TEForm',
	component: TEForm,
	argTypes: {},
} as Meta

const Template: Story<TEFormProps> = (args) => <TEForm {...args} />

export const Default = Template.bind({})
Default.args = {}
