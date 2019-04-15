import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import Codeblock from './../../../components/Codeblock'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

const TESubNavbarSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TESubNavbar'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Navigation/TESubNavbar/TESubNavbar.js'
			/>
			<p>
				<Code>TESubNavbar</Code> is the navigational bar just under to top{' '}
				<Code>TETitleBar</Code>. Below is the code for the top subnav.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'links',
						type: 'array',
						note:
							'Array of links to be displayed. Fill array objects with any props you want passed to a TENavLink',
					},
					{
						prop: 'rightComponent',
						type: 'React Component',
						note: 'A component placed to the right of the links.',
					},
				]}
			/>
			<Codeblock>
				{`<TESubNavbar
	links={[
		{ children: 'Globals', to: '/components/globals' },
		{ children: 'Layout', to: '/components/layout' },
		{ children: 'Navigation', to: '/components/navigation' },
		{ children: 'Form', to: '/components/form' },
		{ children: 'Popup', to: '/components/popup' },
		{ children: 'Utility', to: '/components/utility' },
	]}
/>`}
			</Codeblock>
		</ComponentSection>
	)
}

export default TESubNavbarSection
