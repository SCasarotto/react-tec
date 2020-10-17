import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEInputRow, TEInputRowProps } from './TEInputRow'

export default {
	title: 'Form/TEInputRow',
	component: TEInputRow,
	argTypes: {},
} as Meta

const Template: Story<TEInputRowProps> = (args) => <TEInputRow {...args} />

export const Default = Template.bind({})
Default.args = {}
