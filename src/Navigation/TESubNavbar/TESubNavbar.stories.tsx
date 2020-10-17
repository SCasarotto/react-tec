import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TESubNavbar, TESubNavbarProps } from './TESubNavbar'

export default {
	title: 'Navigation/TESubNavbar',
	component: TESubNavbar,
	argTypes: {},
} as Meta

const Template: Story<TESubNavbarProps> = (args) => <TESubNavbar {...args} />

export const Default = Template.bind({})
Default.args = {}
