import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TENetworkActivity, TENetworkActivityProps } from './TENetworkActivity'

export default {
	title: 'Popup/TENetworkActivity',
	component: TENetworkActivity,
	argTypes: {},
} as Meta

const Template: Story<TENetworkActivityProps> = (args) => <TENetworkActivity {...args} />

export const Default = Template.bind({})
Default.args = {
	message: 'Loading...',
	visible: true,
}
