import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEPanel, TEPanelProps } from './TEPanel'

export default {
	title: 'Layout/TEPanel',
	component: TEPanel,
	argTypes: {},
} as Meta

const Template: Story<TEPanelProps> = (args) => <TEPanel {...args} />

export const Default = Template.bind({})
Default.args = {}
