import React from 'react'

import { TERadioButtonInput } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import ExampleBlock from './../../../components/ExampleBlock'

const TERadioButtonInputSection = () => {
	return (
		<ComponentSection>
			<h2>TERadioButtonInput</h2>
			<p>
				A simple checkbox component. <Code>TERadioButtonInput</Code> is simply a styled HTML{' '}
				<Code>{'<input type="radio">'}</Code>. All props are passed right through to the
				checkbox. Reference{' '}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio"
					target="_blank"
					rel="noopener noreferrer"
				>
					HTML documentation for more information
				</a>
				.
			</p>
			<ExampleBlock
				title="Basic"
				code={`<TERadioButtonInput
	onChange={(e) => console.log(e.target.value)}
	value="agreeToEmailSpam"
/>`}
			>
				<TERadioButtonInput
					onChange={(e) => console.log(e.target.value)}
					value="agreeToEmailSpam"
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TERadioButtonInputSection
