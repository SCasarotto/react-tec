import React from 'react'

import { TEFileRow } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEFileRowSection = () => {
	return (
		<ComponentSection>
			<h2>TEFileRow</h2>
			<p>
				A form row with title and <Code>TEFileRow</Code>. In additiona to the props below,
				reference all props for <Code>TEFileRow</Code>.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'title',
						type: 'string',
						note: 'Title passed to the inner TELabel',
					},
					{
						prop: 'labelForKey',
						type: 'string',
						note: 'String used to pair the TELabel to the TEDatetimeInput',
					},
					{
						prop: 'size',
						type: 'string',
						note: 'Passed to the wrapping TERow',
					},
					{
						prop: 'last',
						type: 'boolean',
						note: 'Passed to the wrapping TERow',
					},
					{
						prop: 'required',
						type: 'boolean',
						note:
							'Passed to the required HTML attribute as well as used to add an asterisk to the end of the title.',
					},
					{
						prop: 'disabled',
						type: 'boolean',
						note:
							'Passed to the required HTML disabled as well as used to adjust styles.',
					},
				]}
			/>
			<ExampleBlock
				title="Basic"
				code={`<TEFileRow
	title="My FileRow"
	labelForKey="SomeUniqueKey2"
	onChange={(files) => console.log(files)}
/>`}
			>
				<TEFileRow
					title="My FileRow"
					labelForKey="SomeUniqueKey2"
					onChange={(files) => console.log(files)}
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEFileRowSection
