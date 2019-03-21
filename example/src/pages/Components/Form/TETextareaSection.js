import React from 'react'

import { TETextarea } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import ExampleBlock from './../../../components/ExampleBlock'

const TETextareaSection = () => {
	return (
		<ComponentSection>
			<h2>TETextarea</h2>
			<p>
				TETextarea is a simple styled <Code>{'<textarea>'}</Code>. All props are passed
				right through to the input. Reference the{' '}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"
					target="_blank"
					rel="noopener noreferrer"
				>
					HTML documentation for more information.
				</a>
				.
			</p>
			<ExampleBlock
				title="Basic"
				code={`<TETextarea onChange={(e) => console.log(e.target.value)} />`}
			>
				<TETextarea onChange={(e) => console.log(e.target.value)} />
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TETextareaSection
