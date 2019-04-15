import React, { useState } from 'react'

import { TEDatetimeRow } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEDatetimeRowSection = () => {
	const [date, setDate] = useState()
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEDatetimeRow'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEDatetimeRow/TEDatetimeRow.js'
			/>
			<p>
				A form row with title and <Code>TEDatetimeInput</Code>. In additiona to the props
				below, reference all props for <Code>TEDatetimeInput</Code>.
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
				title='Basic'
				code={`<TEDatetimeRow
	title='My DatetimeRow'
	labelForKey='SomeUniqueKey'
	onChange={(date) => setDate}
	value={date}
/>`}
			>
				<TEDatetimeRow
					title='My DatetimeRow'
					labelForKey='SomeUniqueKey'
					onChange={(date) => setDate(date)}
					value={date}
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEDatetimeRowSection
