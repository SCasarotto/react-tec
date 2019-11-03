import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TESideNavLinkSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TESideNavLink"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Navigation/TESideNavLink/TESideNavLink.js"
			/>
			<p>
				<Code>TESideNavLink</Code> is a stylized <Code>TENavLink</Code>{' '}
				built specifically for left navbars.
			</p>
			<p>
				Note: <Code>TESideNavLink</Code> is a <Code>TENavLink</Code>{' '}
				warpper in an <Code>li</Code>. So its best this component is
				placed inside of a <Code>ul</Code>.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'title',
						type: 'string',
						note: 'Title of the link',
					},
					{
						prop: 'activePath',
						type: 'string',
						note:
							'Active path can be used to distinguish from the "to" prop to determine when to display active styles. Defaults to the "to" prop.',
					},
					{
						prop: 'to',
						type: 'string',
						note: '"to" prop passed to the TENavLink',
					},
					{
						prop: 'exact',
						type: 'boolean',
						note:
							'"exact" prop pass to the TENavLink and used with the activePath style check.',
					},
					{
						prop: 'children',
						type: 'React Component',
						note:
							'Passed as the child of the component if you want to have something more than just a title in the link.',
					},
				]}
			/>
			<iframe
				src="https://codesandbox.io/embed/06h16?fontsize=12&module=%2Fsrc%2FExample.js"
				title="TESideNavLink"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
