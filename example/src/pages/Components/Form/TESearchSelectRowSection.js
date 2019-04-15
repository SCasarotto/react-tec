import React, { useState } from 'react'

import { TESearchSelectRow } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TESearchSelectRowSection = () => {
	const [value, setValue] = useState()
	return (
		<ComponentSection>
			<ComponentTitle
				title='TESearchSelectRow'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TESearchSelectRow/TESearchSelectRow.js'
			/>
			<p>
				A form row with title and <Code>TESearchSelectInput</Code>. In additiona to the
				props below, reference all props for <Code>TESearchSelectInput</Code>.
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
						note: 'String used to pair the TELabel to the TESearchSelectInput',
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
				title='Basic'
				code={`<TESearchSelectRow
	title="My Search Select Row"
	labelForKey="SomeUniqueKey123"
	options={['value2', 'otherValue2', 'Click Me2!', 'No No Pick Me2!!!']}
	onChange={({option}) => setValue(option)}
	value={value}
/>`}
			>
				<TESearchSelectRow
					title='My Search Select Row'
					labelForKey='SomeUniqueKey123'
					options={['value2', 'otherValue2', 'Click Me2!', 'No No Pick Me2!!!']}
					onChange={({ option }) => setValue(option)}
					value={value}
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TESearchSelectRowSection
