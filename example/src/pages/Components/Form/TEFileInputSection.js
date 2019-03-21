import React from 'react'

import { TEFileInput } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEFileInputSection = () => {
	return (
		<ComponentSection>
			<h2>TEFileInput</h2>
			<p>
				A stylized <Code>{`<input type="file"/>`}</Code> with the ability to drag and drop
				and regex test file type. Outside of the props below, additional props are passed
				directly to the input so reference{' '}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file"
					target="_blank"
					rel="noopener noreferrer"
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
				]}
			/>
			<ExampleBlock
				title="Basic"
				code={`<TEFileInput onChamge={(files) => console.log(files)}/>`}
			>
				<TEFileInput onChange={(files) => console.log(files)} />
			</ExampleBlock>
			<ExampleBlock
				title="Multiple Images"
				code={`<TEFileInput
	onChange={(files) => console.log(files)}
	accept="image/*"
	pattern={/image-*/}
	multiple
/>`}
			>
				<TEFileInput
					onChange={(files) => console.log(files)}
					accept="image/*"
					pattern={/image-*/}
					multiple
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEFileInputSection
