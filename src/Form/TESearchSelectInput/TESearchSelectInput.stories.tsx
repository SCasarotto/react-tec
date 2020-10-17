import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TESearchSelectInput } from './TESearchSelectInput'

export default {
	title: 'Form/TESearchSelectInput',
	component: TESearchSelectInput,
	argTypes: {},
} as Meta

const Template: Story<any> = (args) => <TESearchSelectInput {...args} />

export const Default = Template.bind({})
Default.args = {}
