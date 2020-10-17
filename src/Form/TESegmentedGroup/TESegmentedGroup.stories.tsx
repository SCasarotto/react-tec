import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TESegmentedGroup, TESegmentedGroupProps } from './TESegmentedGroup'

export default {
	title: 'Form/TESegmentedGroup',
	component: TESegmentedGroup,
	argTypes: {},
} as Meta

const Template: Story<TESegmentedGroupProps> = (args) => <TESegmentedGroup {...args} />

export const Default = Template.bind({})
Default.args = {}
