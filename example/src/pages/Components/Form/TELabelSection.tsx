import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TELabelSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TELabel"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Form/TELabel/TELabel.js"
			/>
			<p>
				A simple styling of an html <Code>{'<label>'}</Code>. Besides
				the props mentioned below, all props are passed right through to
				the input. Reference the{' '}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label"
					target="_blank"
					rel="noopener noreferrer">
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
			<iframe
				src="https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTELabelExample&module=%2Fsrc%2FForm%2FTELabelExample.tsx"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title="TELabel"
				allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
