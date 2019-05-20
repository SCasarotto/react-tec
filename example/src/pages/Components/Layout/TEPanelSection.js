import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

const TEPanelSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEPanel'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Layout/TEPanel/TEPanel.js'
			/>
			<p>
				<Code>TEPanel</Code> simple containing element containing a{' '}
				<Code>TEPanelTitle</Code>. Is expected to be used as a child of{' '}
				<Code>TEPanelWrapper</Code>. In addition to the props below, view{' '}
				<Code>TEPanelTitle</Code> for additional props.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'size',
						type: 'string',
						note:
							'Used to place multiple panels in a row. Options: ["full", "two-third" , "half", "third"]',
					},
				]}
			/>
			<iframe
				src='https://codesandbox.io/embed/gqpd8?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js'
				title='TEPanel'
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

export default TEPanelSection
