import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'

const TETextareaSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TETextarea'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TETextarea/TETextarea.js'
			/>
			<p>
				TETextarea is a simple styled <Code>{'<textarea>'}</Code>. All props are passed
				right through to the input. Reference the{' '}
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea'
					target='_blank'
					rel='noopener noreferrer'
				>
					HTML documentation for more information.
				</a>
				.
			</p>
			<iframe
				src='https://codesandbox.io/embed/i6ywb?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js'
				title='TETextarea'
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
			/>
		</ComponentSection>
	)
}

export default TETextareaSection
