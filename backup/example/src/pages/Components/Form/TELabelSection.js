import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

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
			<iframe
				src='https://codesandbox.io/embed/lw2y6?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js'
				title='TELabel'
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

export default TELabelSection