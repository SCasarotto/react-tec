import React, { useState } from 'react'

import { TENetworkActivity, TEButton } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TENetworkActivitySection = () => {
	const [visible, setVisible] = useState(false)

	return (
		<ComponentSection>
			<h2>TENetworkActivity</h2>
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
			<ExampleBlock
				title="Basic"
				code={`<TENetworkActivity message="Loading..." visible={visible} />
<TEButton
	onClick={() => {
		setVisible(true)
		setTimeout(() => setVisible(false), 2000)
	}}
>
	Do some 2 second long process
</TEButton>`}
			>
				<TENetworkActivity message="Loading..." visible={visible} />
				<TEButton
					onClick={() => {
						setVisible(true)
						setTimeout(() => setVisible(false), 2000)
					}}
				>
					Do some 2 second long process
				</TEButton>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TENetworkActivitySection
