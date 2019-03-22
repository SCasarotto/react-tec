import React from 'react'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'

const TERouteSection = () => {
	return (
		<ComponentSection>
			<h2>TERoute</h2>
			<p>
				<Code>TERoute</Code> is simply a wrapper around{' '}
				<a
					href="https://reacttraining.com/react-router/web/api/Route"
					target="_blank"
					rel="noopener noreferrer"
				>
					React Router Dom Route
				</a>
				.
			</p>
		</ComponentSection>
	)
}

export default TERouteSection
