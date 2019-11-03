import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

const TESpinnerSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TESpinner'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Layout/TESpinner/TESpinner.js'
			/>
			<p>
				<Code>TESpinner</Code> is the greatest loading spinner of all time.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'size',
						type: 'string',
						note:
							'Defines the size and number of rings of the spinner. Options: ["small", "medium", "large"] Default: "medium"',
					},
					{
						prop: 'innerColor',
						type: 'string (HEX)',
						note: 'Defines the inner most run color. Default: #ffffff',
					},
					{
						prop: 'OuterColor',
						type: 'string (HEX)',
						note: 'Defines the outer most run color. Default: theme.primary',
					},
				]}
			/>
			<iframe
				src='https://codesandbox.io/embed/bnjkt?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js'
				title='TESpinner'
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
			/>
		</ComponentSection>
	)
}

export default TESpinnerSection
