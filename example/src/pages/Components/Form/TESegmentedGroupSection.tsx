import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TESegmentedGroupSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TESegmentedGroup"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Form/TESegmentedGroup/TESegmentedGroup.js"
			/>
			<p>
				<Code>TESegmentedGroup</Code> is a stylized{' '}
				<Code>TERadioButtonGroup</Code>. This component mimics the style
				of iOS's Segmented Controls.
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
						note:
							'An string used to determine if a radio button is checked *Required',
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
						note:
							'String used for the label associated to the TERadioInput.',
					},
					{
						prop: 'buttonArray[i].value',
						type: 'string',
						note: 'Value of TERadioInput',
					},
					{
						prop: 'buttonArray[i].key',
						type: 'string',
						note:
							'Unique string used to pair the TELabel and TERadioInput.',
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
						prop: 'inline',
						type: 'bool',
						note:
							'Places the options to the right of the TELabel instead of below.',
					},
				]}
			/>
			<iframe
				src="https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTESegmentedGroupExample&module=%2Fsrc%2FForm%2FTESegmentedGroupExample.tsx"
				title="TESegmentedGroup"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
