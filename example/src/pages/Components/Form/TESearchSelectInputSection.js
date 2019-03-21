import React, { useState } from 'react'

import { TESearchSelectInput } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TESearchSelectInputSection = () => {
	const [singleValue, setSingleValue] = useState('')
	const [multiValue, setMultiValue] = useState([])
	return (
		<ComponentSection>
			<h2>TESearchSelectInput</h2>
			<p>
				<Code>TESearchSelectInput</Code> is simply a styled{' '}
				<a
					href="https://github.com/selvagsz/react-power-select"
					target="_blank"
					rel="noopener noreferrer"
				>
					React Power Select
				</a>{' '}
				Component. A few props have been adjusted or defaulted.
			</p>
			<p>
				Note: Styling for this component is not handled the same way as most React TEC
				components. In order to style everything the React Power Select css has been
				internallized in the React TEC global styles. In the future this may be adjusted to
				make styling easier and more consistent with other components.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'type',
						type: 'string',
						note:
							'String used to indicate whether you would like to be able to select multiple options vs just a single one. Options: ["single", "multi"]. "single" maps to React Power Select component "PowerSelect" where "multi" maps to React Power Select component "PowerSelectMultiple". Reference those docs accordingly',
					},
					{
						prop: 'value',
						type: 'string or object or array',
						note:
							'This maps the React Power Select prop of "selected" for increased React TEC consistency.',
					},
					{
						prop: 'searchEnabled',
						type: 'bool',
						note: 'Defaulted to true',
					},
				]}
			/>
			<ExampleBlock
				title="Single"
				code={`<TESearchSelectInput
	onChange={({option}) => console.log(option)}
	options={['value1', 'otherValue', 'Click Me!', 'No No Pick Me!!!']}
/>`}
			>
				<TESearchSelectInput
					onChange={({ option }) => {
						console.log(option)
						setSingleValue(option)
					}}
					options={['value1', 'otherValue', 'Click Me!', 'No No Pick Me!!!']}
					value={singleValue}
				/>
			</ExampleBlock>
			<ExampleBlock
				title="Multi"
				code={`<TESearchSelectInput
	type="multi"
	onChange={({ options }) => {
		console.log(options)
		setMultiValue(options)
	}}
	options={['value2', 'otherValue2', 'Click Me2!', 'No No Pick Me2!!!']}
	value={multiValue}
/>`}
			>
				<TESearchSelectInput
					type="multi"
					onChange={({ options }) => {
						console.log(options)
						setMultiValue(options)
					}}
					options={['value2', 'otherValue2', 'Click Me2!', 'No No Pick Me2!!!']}
					value={multiValue}
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TESearchSelectInputSection
