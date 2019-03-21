import React, { useState } from 'react'

import { TEDatetimeInput } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEDatetimeInputSection = () => {
	const [date, setDate] = useState('')
	return (
		<ComponentSection>
			<h2>TEDatetimeInput</h2>
			<p>
				<Code>TEDatetimeInput</Code> is simply a styled{' '}
				<a href="https://reactdatepicker.com/" target="_blank" rel="noopener noreferrer">
					React DatePicker
				</a>{' '}
				Component. A few props have been adjusted or defaulted.
			</p>
			<p>
				Note: Styling for this component is not handled the same way as most React TEC
				components. In order to style everything the React DatePicker css has been
				internallized in the React TEC global styles. In the future this may be adjusted to
				make styling easier and more consistent with other components.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'value',
						type: 'date or string or number',
						note:
							'Value of the currently selected datetime. Can be a Date object, a string or a epoch in milliseconds.',
					},
					{
						prop: 'placeholder',
						type: 'string',
						note:
							'String passed to the "placeholderText" prop of the DatePicker component. Naming purely for consistency with other React TEC components',
					},
					{
						prop: 'autoComplete',
						type: 'string',
						note:
							'Sets the HTML property to disable showing past entries since its not common you are typing into the input and the autocomplete can get in the way of the datepicker popup. *Default: "off"',
					},
				]}
			/>
			<ExampleBlock
				title="Basic"
				code={`<TEDatetimeInput value={date} onChange={(date) => setDate(date)} />`}
			>
				<TEDatetimeInput value={date} onChange={(date) => setDate(date)} />
			</ExampleBlock>
			<ExampleBlock
				title="Basic"
				code={`<TEDatetimeInput
	value={date}
	onChange={(date) => setDate(date.getTime())}
	timeFormat="h:mm aa"
	timeIntervals={15}
	dateFormat="MMMM d, yyyy h:mm aa"
	showTimeSelect
/>`}
			>
				<TEDatetimeInput
					value={date}
					onChange={(date) => setDate(date.getTime())}
					timeFormat="h:mm aa"
					timeIntervals={15}
					dateFormat="MMMM d, yyyy h:mm aa"
					showTimeSelect
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEDatetimeInputSection
