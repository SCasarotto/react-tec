import React from 'react'

import { TEForm, TEButton } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import ExampleBlock from './../../../components/ExampleBlock'

const TEFormSection = () => {
	return (
		<ComponentSection>
			<h2>TEForm</h2>
			<p>
				A simple button component. <Code>TEForm</Code> is simply a styled HTML{' '}
				<Code>{'<form>'}</Code>. All props are passed right through to the form. Reference{' '}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
					target="_blank"
					rel="noopener noreferrer"
				>
					HTML documentation for more information
				</a>
				.
			</p>
			<ExampleBlock
				title="Basic"
				code={`<TEForm
	onSubmit={(e) => {
		e.preventDefault()
		alert('Submitted!')
	}}
>
	<TEButton type="submit">Submit</TEButton>
</TEForm>`}
			>
				<TEForm
					onSubmit={(e) => {
						e.preventDefault()
						alert('Submitted!')
					}}
				>
					<TEButton type="submit">Submit</TEButton>
				</TEForm>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEFormSection
