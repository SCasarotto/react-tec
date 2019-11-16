import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { Codeblock } from '../../../components/Codeblock'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TESideNavbarSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TESideNavbar"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Navigation/TESideNavbar/TESideNavbar.js"
			/>
			<p>
				<Code>TESideNavbar</Code> is the sidebar component you see to
				the left of this page. Below is the code for the left nav.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'sidebarWidth',
						type: 'number',
						note:
							'Number of pixels wide the bar is. This is important because TEBodyContainer should be provided the same number so they do not overlap. Default: 200',
					},
					{
						prop: 'Header',
						type: 'React Component',
						note:
							'A Component that replaces the default image. This is best used to place a more customized logo or general header component. If this prop is used the logo will not be displayed.',
					},
					{
						prop: 'logo',
						type: 'string',
						note: 'The src of the top <img>.',
					},
					{
						prop: 'links',
						type: 'array',
						note:
							'Array of links to be displayed. See following props',
					},
					{
						prop: 'links.title',
						type: 'string',
						note: 'Title of the link',
					},
					{
						prop: 'links.activePath',
						type: 'string',
						note:
							'Active path can be used to distinguish from the "to" prop to determine when to display active styles. Defaults to the "to" prop.',
					},
					{
						prop: 'links.to',
						type: 'string',
						note: '"to" prop passed to the TENavLink',
					},
					{
						prop: 'links.exact',
						type: 'boolean',
						note:
							'"exact" prop pass to the TENavLink and used with the activePath style check.',
					},
					{
						prop: 'links.children',
						type: 'React Component',
						note:
							'Passed as the child of the component if you want to have something more than just a title in the link.',
					},
				]}
			/>
			<Codeblock>
				{`<TESideNavbar
	logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
	links={[
		{ title: 'Welcome', to: '/', exact: true },
		{ title: 'Get Started', to: '/get-started' },
		{ title: 'Components', to: '/components' },
	]}
/>`}
			</Codeblock>
		</ComponentSection>
	)
}
