import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TERow, TERowProps } from './TERow'

export default {
	title: 'Form/TERow',
	component: TERow,
	argTypes: {},
} as Meta

const Template: Story<TERowProps> = (args) => <TERow {...args} />

export const Default = Template.bind({})
Default.args = {}
