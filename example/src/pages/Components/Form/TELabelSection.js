import React from 'react'

import { TELabel } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TELabelSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TELabel'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TELabel/TELabel.js'
			/>
			<p>
				A simple styling of an html <Code>{'<label>'}</Code>. Besides the props mentioned
				below, all props are passed right through to the input. Reference the{' '}
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label'
					target='_blank'
					rel='noopener noreferrer'
				>
					HTML documentation for more information.
				</a>
				.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'htmlFor',
						type: 'string',
						note:
							'This is a standard React/HTML prop replacing "for" but thought it was worth mentioned because of how much React TEC uses it.',
					},
					{
						prop: 'required',
						type: 'boolean',
						note: 'Add an asterisk to the end of the label.',
					},
					{
						prop: 'disabled',
						type: 'boolean',
						note: 'Used to adjust styles.',
					},
				]}
			/>
			<ExampleBlock title='Basic' code={`<TELabel>Some Label</TELabel>`}>
				<TELabel>Some Label</TELabel>
			</ExampleBlock>
			<ExampleBlock title='Required' code={`<TELabel required>Some Label</TELabel>`}>
				<TELabel required>Some Label</TELabel>
			</ExampleBlock>
			<ExampleBlock title='Disabled' code={`<TELabel disabled>Some Label</TELabel>`}>
				<TELabel disabled>Some Label</TELabel>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TELabelSection
