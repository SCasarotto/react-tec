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

export const Many = () => (
	<>
		<ul>
			<TESideNavLink to='/TESideNavLinkExample' title='Home' exact />
			<TESideNavLink to='/TESideNavLinkExample/components/globals' title='Globals' />
			<TESideNavLink to='/TESideNavLinkExample/components/layout' title='Layout' />
			<TESideNavLink to='/TESideNavLinkExample/components/navigation' title='Navigation' />
			<TESideNavLink to='/TESideNavLinkExample/components/form' title='Form' />
			<TESideNavLink to='/TESideNavLinkExample/components/popup' title='Popup' />
			<TESideNavLink
				to='/TESideNavLinkExample/components/utility'
				activePath='/TESideNavLinkExample/components'
				title='Utility *'
			/>
		</ul>
		<p style={{ color: 'lightgrey' }}>* active path example</p>
	</>
)
