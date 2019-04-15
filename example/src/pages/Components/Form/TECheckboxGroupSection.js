import React, { useState } from 'react'

import { TECheckboxGroup } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TECheckboxGroupSection = () => {
	const [checkedValues, setCheckedValues] = useState([])
	return (
		<ComponentSection>
			<ComponentTitle
				title='TECheckboxGroup'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TECheckboxGroup/TECheckboxGroup.js'
			/>
			<p>A form row with title and group of checkboxes and cooresponding labels.</p>
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
							'String used to pair checkboxes and their associated labels. *Needs to unique to the current page to not cause conflicts with other inputs. *Required',
					},
					{
						prop: 'onChange',
						type: 'function',
						note:
							'Function that receives an array of checked values. This is computed by adding or removing the the checkbox value from the checkedValues prop. *Required',
					},
					{
						prop: 'checkedValues',
						type: 'array',
						note:
							'An array of strings that map to the values of the checkboxes. Used to determine if a checkbox is checked and used to compute the onChange return value *Required',
					},
					{
						prop: 'buttonArray',
						type: 'array',
						note:
							'This array can contain strings or objects and used to generate the group of checkboxes. For object values see the following props. *Required',
					},
					{
						prop: 'buttonArray[i].label',
						type: 'string',
						note: 'String used for the label associated to the checkbox.',
					},
					{
						prop: 'buttonArray[i].value',
						type: 'string',
						note: 'Value of checkbox',
					},
					{
						prop: 'buttonArray[i].key',
						type: 'string',
						note: 'Unique string used to pair the label and checkbox.',
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
						note: 'Passed to each TERow that is wrapping each checkbox and label.',
					},
					{
						prop: 'scrolling',
						type: 'boolean',
						note:
							'Used to affect styles. Wraps the input in a scollable view. Useful when there are a very large number of checkboxes. However, if there are a large number of checkboxes one should look into TESearchSelectRow type="multi".',
					},
				]}
			/>
			<ExampleBlock
				title='Basic'
				code={`<TECheckboxGroup
	labelForKey="TECheckboxGroup"
	title="My Checkbox Group"
	onChange={(checkedValues) => setCheckedValues(checkedValues)}
	checkedValues={checkedValues}
	buttonArray={['value1', 'valueTwo', 'OtherValue']}
/>`}
			>
				<TECheckboxGroup
					labelForKey='TECheckboxGroup'
					title='My Checkbox Group'
					onChange={(checkedValues) => setCheckedValues(checkedValues)}
					checkedValues={checkedValues}
					buttonArray={['value1', 'valueTwo', 'OtherValue']}
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TECheckboxGroupSection
