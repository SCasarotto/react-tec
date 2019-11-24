import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TERadioButtonGroupSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TERadioButtonGroup'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TERadioButtonGroup/index.tsx'
			/>
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
						prop: 'rowSize',
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
			<iframe
				src='https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTERadioButtonGroupExample&module=%2Fsrc%2FForm%2FTERadioButtonGroupExample.tsx'
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title='TERadioButtonGroup'
				allow='geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb'
				sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
			/>
		</ComponentSection>
	)
}
