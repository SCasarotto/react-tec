import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'

export const TEInputSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEInput"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEInput/TEInput.js"
			/>
			<p>
				TEInput is a simple styled <Code>{'<input>'}</Code>. All props
				are passed right through to the input. Reference the{' '}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
					target="_blank"
					rel="noopener noreferrer">
					HTML documentation for more information.
				</a>
				.
			</p>
			<iframe
				src="https://codesandbox.io/embed/vw94k?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js"
				title="TEInput"
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
