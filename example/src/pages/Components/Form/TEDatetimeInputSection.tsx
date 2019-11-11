import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TEDatetimeInputSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEDatetimeInput"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEDatetimeInput/TEDatetimeInput.js"
			/>
			<p>
				<Code>TEDatetimeInput</Code> is simply a styled{' '}
				<a
					href="https://reactdatepicker.com/"
					target="_blank"
					rel="noopener noreferrer">
					React Datepicker
				</a>{' '}
				Component. A few props have been adjusted or defaulted.
			</p>
			<p>
				Note: Styling for this component is not handled the same way as
				most React TEC components. In order to style everything the
				React DatePicker css has been internallized in the React TEC
				global styles. In the future this may be adjusted to make
				styling easier and more consistent with other components.
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
					{
						prop: 'withTEPortal',
						type: 'boolean',
						note:
							'This prop provides similar functionality to the normal withPortal provided by React Datepicker however this uses a TEButton instead of the normal input. This is a customized component similar to React Datepicker\'s "withPortal inline Example". The primary reason this was created was to aviod the input focus that occured with their example. See examples below',
					},
				]}
			/>
			<iframe
				src="https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTEDatetimeInputExample&module=%2Fsrc%2FForm%2FTEDatetimeInputExample.tsx"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title="TEDatetimeInput"
				allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
