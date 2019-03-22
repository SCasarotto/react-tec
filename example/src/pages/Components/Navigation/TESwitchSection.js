import React from 'react'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'

const TESwitchSection = () => {
	return (
		<ComponentSection>
			<h2>TESwitch</h2>
			<p>
				<Code>TESwitch</Code> is simply a wrapper around{' '}
				<a
					href="https://reacttraining.com/react-router/web/api/Switch"
					target="_blank"
					rel="noopener noreferrer"
				>
					React Router Dom Switch
				</a>
				.
			</p>
		</ComponentSection>
	)
}

export default TESwitchSection
