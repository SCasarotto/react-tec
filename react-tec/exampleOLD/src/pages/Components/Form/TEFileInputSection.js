import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

const TEFileInputSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEFileInput'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEFileInput/TEFileInput.js'
			/>
			<p>
				A stylized <Code>{`<input type="file"/>`}</Code> with the ability to drag and drop
				and regex test file type. Outside of the props below, additional props are passed
				directly to the input so reference{' '}
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file'
					target='_blank'
					rel='noopener noreferrer'
				>
					HTML documentation for more information
				</a>
				.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'onChange',
						type: 'function',
						note: 'Function that receives the file(s) after selection',
					},
					{
						prop: 'pattern',
						type: 'RegExp',
						note:
							'A regular expression used to check the type of each file. Remember the pattern prop is only used to tell browsers what files they should suggest selecting. The pattern prop should be used for real input validation.',
					},
					{
						prop: 'placeholder',
						type: 'string',
						note:
							'String used for the text that is displayed before a file is selected. Default: "Choose a file..."',
					},
					{
						prop: 'hideClearButton',
						type: 'boolean',
						note: 'Used to hide the clear button.',
					},
				]}
			/>
			<iframe
				src='https://codesandbox.io/embed/3x3y8?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js'
				title='TEFileInput'
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

export default TEFileInputSection
