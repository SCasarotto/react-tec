import React from 'react'

import { TESideNavLink } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TESideNavLinkSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TESideNavLink'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Navigation/TESideNavLink/TESideNavLink.js'
			/>
			<p>
				<Code>TESideNavLink</Code> is a stylized <Code>TENavLink</Code> built specifically
				for left navbars.
			</p>
			<p>
				Note: <Code>TESideNavLink</Code> is a <Code>TENavLink</Code> warpper in an{' '}
				<Code>li</Code>. So its best this component is placed inside of a <Code>ul</Code>.
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
			<ExampleBlock
				title='Basic'
				code={`<ul>
	<TESideNavLink to="/" title="Home" exact />
	<TESideNavLink to="/components/globals" title="Globals" />
	<TESideNavLink to="/components/layout" title="Layout" />
	<TESideNavLink to="/components/navigation" title="Navigation" />
	<TESideNavLink to="/components/form" title="Form" />
	<TESideNavLink to="/components/popup" title="Popup" />
	<TESideNavLink
		to="/components/utility"
		activePath="/components"
		title="Utility"
	/>
</ul>`}
			>
				<ul>
					<TESideNavLink to='/' title='Home' exact />
					<TESideNavLink to='/components/globals' title='Globals' />
					<TESideNavLink to='/components/layout' title='Layout' />
					<TESideNavLink to='/components/navigation' title='Navigation' />
					<TESideNavLink to='/components/form' title='Form' />
					<TESideNavLink to='/components/popup' title='Popup' />
					<TESideNavLink
						to='/components/utility'
						activePath='/components'
						title='Utility'
					/>
				</ul>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TESideNavLinkSection
