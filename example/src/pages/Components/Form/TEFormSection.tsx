import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'

export const TEFormSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEForm"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEForm/TEForm.js"
			/>
			<p>
				A simple form component. <Code>TEForm</Code> is simply a styled
				HTML <Code>{'<form>'}</Code>. All props are passed right through
				to the form. Reference{' '}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
					target="_blank"
					rel="noopener noreferrer">
					HTML documentation for more information
				</a>
				.
			</p>
			<iframe
				src="https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTEFormExample&module=%2Fsrc%2FForm%2FTEFormExample.tsx"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title="TEForm"
				allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
