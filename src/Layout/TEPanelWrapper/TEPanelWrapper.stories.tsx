import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEPanelWrapper, TEPanelWrapperProps } from './TEPanelWrapper'

export default {
	title: 'Layout/TEPanelWrapper',
	component: TEPanelWrapper,
	argTypes: {},
} as Meta

const Template: Story<TEPanelWrapperProps> = (args) => <TEPanelWrapper {...args} />

export const Default = Template.bind({})
Default.args = {}
