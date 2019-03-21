import React from 'react'

import { TEInput } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import ExampleBlock from './../../../components/ExampleBlock'

const TEInputSection = () => {
	return (
		<ComponentSection>
			<h2>TEInput</h2>
			<p>
				TEInput is a simple styled <Code>{'<input>'}</Code>. All props are passed right
				through to the input. Reference the{' '}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
					target="_blank"
					rel="noopener noreferrer"
				>
					HTML documentation for more information.
				</a>
				.
			</p>
			<ExampleBlock
				title="Basic"
				code={`<TEInput onChange={(e) => console.log(e.target.value)} />`}
			>
				<TEInput onChange={(e) => console.log(e.target.value)} />
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEInputSection
