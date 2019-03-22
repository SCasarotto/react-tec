import React from 'react'

import { TELink } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import ExampleBlock from './../../../components/ExampleBlock'

const TELinkSection = () => {
	return (
		<ComponentSection>
			<h2>TELink</h2>
			<p>
				<Code>TELink</Code> is simply a wrapper around{' '}
				<a
					href="https://reacttraining.com/react-router/web/api/Link"
					target="_blank"
					rel="noopener noreferrer"
				>
					React Router Dom Link
				</a>
				.
			</p>
			<ExampleBlock title="Basic" code={`<TELink to="/">Go Home</TELink>`}>
				<TELink to="/">Go Home</TELink>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TELinkSection
