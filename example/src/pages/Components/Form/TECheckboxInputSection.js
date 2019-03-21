import React from 'react'

import { TECheckboxInput } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import ExampleBlock from './../../../components/ExampleBlock'

const TECheckboxInputSection = () => {
	return (
		<ComponentSection>
			<h2>TECheckboxInput</h2>
			<p>
				A simple checkbox component. <Code>TECheckboxInput</Code> is simply a styled HTML{' '}
				<Code>{'<input type="checkbox">'}</Code>. All props are passed right through to the
				checkbox. Reference{' '}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox"
					target="_blank"
					rel="noopener noreferrer"
				>
					HTML documentation for more information
				</a>
				.
			</p>
			<ExampleBlock
				title="Basic"
				code={`<TECheckboxInput
	onChange={(e) => console.log(e.target.value)}
	value="agreeToEmailSpam"
/>`}
			>
				<TECheckboxInput
					onChange={(e) => console.log(e.target.value)}
					value="agreeToEmailSpam"
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TECheckboxInputSection
