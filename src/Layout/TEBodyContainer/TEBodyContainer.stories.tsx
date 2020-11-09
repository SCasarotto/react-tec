import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEBodyContainer, TEBodyContainerProps } from './TEBodyContainer'

export default {
	title: 'Layout/TEBodyContainer',
	component: TEBodyContainer,
	argTypes: {},
} as Meta

const Template: Story<TEBodyContainerProps> = (args) => <TEBodyContainer {...args} />

export const Default = Template.bind({})
Default.args = {}
