import React from 'react'

import { TENavLink } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import ExampleBlock from './../../../components/ExampleBlock'

const TENavLinkSection = () => {
	return (
		<ComponentSection>
			<h2>TENavLink</h2>
			<p>
				<Code>TENavLink</Code> is simply a wrapper around{' '}
				<a
					href="https://reacttraining.com/react-router/web/api/NavLink"
					target="_blank"
					rel="noopener noreferrer"
				>
					React Router Dom NavLink
				</a>
				.
			</p>
			<ExampleBlock
				title="Basic"
				code={`<TENavLink to="/" exact>
	Home
</TENavLink>`}
			>
				<TENavLink to="/" exact>
					Home
				</TENavLink>
			</ExampleBlock>
			<ExampleBlock
				title="Active"
				code={`<TENavLink to="/components/navigation">Navigation</TENavLink>`}
			>
				<TENavLink to="/components/navigation">Navigation</TENavLink>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TENavLinkSection
