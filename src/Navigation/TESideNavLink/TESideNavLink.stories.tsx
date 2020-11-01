import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TESideNavLink, TESideNavLinkProps } from './TESideNavLink'

export default {
	title: 'Navigation/TESideNavLink',
	component: TESideNavLink,
	argTypes: {},
} as Meta

const Template: Story<TESideNavLinkProps> = (args) => <TESideNavLink {...args} />

export const Default = Template.bind({})
Default.args = {
	to: '/somelink',
	title: 'some link',
}
