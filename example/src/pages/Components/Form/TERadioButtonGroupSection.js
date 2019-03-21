import React, { useState } from 'react'

import { TERadioButtonGroup } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TERadioButtonGroupSection = () => {
	const [checkedValue, setCheckedValue] = useState('')
	return (
		<ComponentSection>
			<h2>TERadioButtonGroup</h2>
			<p>
				A component containing a <Code>TERow</Code>, a <Code>TELabel</Code>, and a group of{' '}
				<Code>TERadioInput</Code> cooresponding <Code>TELabel</Code>.
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
						note:
							'String used to pair TERadioInput and their associated TELabel. *Needs to unique to the current page to not cause conflicts with other inputs. *Required',
					},
					{
						prop: 'onChange',
						type: 'function',
						note:
							'Function that receives the onChange event from the TERadioInput. *Required',
					},
					{
						prop: 'checkedValue',
						type: 'string',
						note: 'An string used to determine if a radio button is checked *Required',
					},
					{
						prop: 'buttonArray',
						type: 'array',
						note:
							'This array can contain strings or objects and used to generate the group of TERadioInput and TELabel. For object values see the following props. *Required',
					},
					{
						prop: 'buttonArray[i].label',
						type: 'string',
						note: 'String used for the label associated to the TERadioInput.',
					},
					{
						prop: 'buttonArray[i].value',
						type: 'string',
						note: 'Value of TERadioInput',
					},
					{
						prop: 'buttonArray[i].key',
						type: 'string',
						note: 'Unique string used to pair the TELabel and TERadioInput.',
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
					{
						prop: 'rowSize',
						type: 'string',
						note:
							'Passed to each TERow that is wrapping each TERadioInput and TELabel.',
					},
				]}
			/>
			<ExampleBlock
				title="Basic"
				code={`<TERadioButtonGroup
	labelForKey="TERadioButtonGroup"
	title="My Radio Button Group"
	onChange={(e) => setCheckedValue(e.target.value)}
	checkedValue={checkedValue}
	buttonArray={['value1', 'valueTwo', 'OtherValue']}
/>`}
			>
				<TERadioButtonGroup
					labelForKey="TERadioButtonGroup"
					title="My Radio Button Group"
					onChange={(e) => setCheckedValue(e.target.value)}
					checkedValue={checkedValue}
					buttonArray={['value1', 'valueTwo', 'OtherValue']}
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TERadioButtonGroupSection
