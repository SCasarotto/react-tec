import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TESideNavbar, TESideNavbarProps } from './TESideNavbar'

export default {
	title: 'Navigation/TESideNavbar',
	component: TESideNavbar,
	argTypes: {},
} as Meta

const Template: Story<TESideNavbarProps> = (args) => <TESideNavbar {...args} />

export const Default = Template.bind({})
Default.args = {}
