import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

const TENetworkActivitySection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TENetworkActivity'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Popup/TENetworkActivity/TENetworkActivity.js'
			/>
			<p>
				<Code>TENetworkActivity</Code> is an overlay to indicate some network request or
				long running process is taking place.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'visible',
						type: 'bool',
						note: 'Sets whether the popup is visible or hidden. Default: false',
					},
					{
						prop: 'message',
						type: 'string',
						note: 'Network activity message.',
					},
				]}
			/>
			<iframe
				src='https://codesandbox.io/embed/icwr7?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js'
				title='TENetworkActivity'
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

export default TENetworkActivitySection
