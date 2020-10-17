import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEImageRow, TEImageRowProps } from './TEImageRow'

export default {
	title: 'Form/TEImageRow',
	component: TEImageRow,
	argTypes: {},
} as Meta

const Template: Story<TEImageRowProps> = (args) => <TEImageRow {...args} />

export const Default = Template.bind({})
Default.args = {}
