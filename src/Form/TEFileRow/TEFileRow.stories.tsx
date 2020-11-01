import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEFileRow, TEFileRowProps } from './TEFileRow'

export default {
	title: 'Form/TEFileRow',
	component: TEFileRow,
	argTypes: {},
} as Meta

const Template: Story<TEFileRowProps> = (args) => <TEFileRow {...args} />

export const Default = Template.bind({})
Default.args = {
	labelForKey: 'fileRow',
	title: 'File Row',
}
