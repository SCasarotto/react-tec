import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'

export const TEButtonSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEButton"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEButton/TEButton.js"
			/>
			<p>
				A simple button component. <Code>TEButton</Code> is simply a
				styled HTML <Code>{'<button>'}</Code>. All props are passed
				right through to the button. Reference{' '}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
					target="_blank"
					rel="noopener noreferrer">
					HTML documentation for more information
				</a>
				.
			</p>
			<p>
				Note: The button's <Code>type</Code> is defaulted to{' '}
				<Code>'button'</Code> instead of normal HTML where it is
				defaulted to <Code>'submit'</Code>.
			</p>
			<iframe
				src="https://codesandbox.io/embed/reacttec-tebutton-zknhh?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js"
				title="TEButton"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
