import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEFileManagerRow, TEFileManagerRowProps } from './TEFileManagerRow'

export default {
	title: 'Form/TEFileManagerRow',
	component: TEFileManagerRow,
	argTypes: {},
} as Meta

const Template: Story<TEFileManagerRowProps> = (args) => <TEFileManagerRow {...args} />

export const Default = Template.bind({})
Default.args = {}
