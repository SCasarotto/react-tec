import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEPrivateRoute, TEPrivateRouteProps } from './TEPrivateRoute'

export default {
	title: 'Navigation/TEPrivateRoute',
	component: TEPrivateRoute,
	argTypes: {},
} as Meta

const Template: Story<TEPrivateRouteProps> = (args) => <TEPrivateRoute {...args} />

export const Default = Template.bind({})
Default.args = {}
