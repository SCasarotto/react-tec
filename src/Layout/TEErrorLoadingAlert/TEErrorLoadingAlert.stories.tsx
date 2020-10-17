import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEErrorLoadingAlert, TEErrorLoadingAlertProps } from './TEErrorLoadingAlert'

export default {
	title: 'Layout/TEErrorLoadingAlert',
	component: TEErrorLoadingAlert,
	argTypes: {},
} as Meta

const Template: Story<TEErrorLoadingAlertProps> = (args) => <TEErrorLoadingAlert {...args} />

export const Default = Template.bind({})
Default.args = {}
