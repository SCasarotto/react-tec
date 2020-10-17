import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEAlert, TEAlertProps } from './TEAlert'

export default {
	title: 'Popup/TEAlert',
	component: TEAlert,
	argTypes: {},
} as Meta

const Template: Story<TEAlertProps> = (args) => <TEAlert {...args} />

export const Default = Template.bind({})
Default.args = {}
