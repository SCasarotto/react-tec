import React from 'react'

import { TEInputRow } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEInputRowSection = () => {
	return (
		<ComponentSection>
			<h2>TEInputRow</h2>
			<p>
				A component containing a <Code>TERow</Code>, a <Code>TELabel</Code> and either a{' '}
				<Code>TEInput</Code> or a <Code>TETextarea</Code>. In addition to the props below,
				reference all props for <Code>TEInput</Code> or <Code>TETextarea</Code>.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'type',
						type: 'string',
						note:
							'Normally passed directly to the TEInput except for when it is "textarea". In that case a TETextarea is used.',
					},
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
				code={`<TEInputRow
	title="My Input"
	labelForKey="SomeUniqueKey42"
	onChange={(e) => console.log(e.target.value)}
/>`}
			>
				<TEInputRow
					title="My Input"
					labelForKey="SomeUniqueKey42"
					onChange={(e) => console.log(e.target.value)}
				/>
			</ExampleBlock>
			<ExampleBlock
				title="Textarea"
				code={`<TEInputRow
	type="textarea"
	title="My Textarea"
	labelForKey="SomeUniqueKey666"
	onChange={(e) => console.log(e.target.value)}
/>`}
			>
				<TEInputRow
					type="textarea"
					title="My Textarea"
					labelForKey="SomeUniqueKey666"
					onChange={(e) => console.log(e.target.value)}
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEInputRowSection
