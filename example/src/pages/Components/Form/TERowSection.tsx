import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TERowSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TERow"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Form/TERow/TERow.js"
			/>
			<p>
				Form row component. <Code>TERow</Code> provides a simple way to
				layout form rows. Easily enabling multiple inputs or buttons on
				the same row.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'rowSize',
						type: 'string',
						note:
							'Defines the width of the row. Options: ["full", "half", "two-third", "third". "forth", "condensed"]',
					},
					{
						prop: 'last',
						type: 'boolean',
						note:
							'Removes right padding and adds it on the left for the last TERow in the row.',
					},
				]}
			/>
			<iframe
				src="https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTERowExample&module=%2Fsrc%2FForm%2FTERowExample.tsx"
				title="TERow"
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
