import React, { useState } from 'react'

import { TEPopup, TEButton } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEPopupSection = () => {
	const [visible, setVisible] = useState(false)

	return (
		<ComponentSection>
			<h2>TEPopup</h2>
			<p>
				<Code>TEPopup</Code> simple popup component.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'visible',
						type: 'bool',
						note: 'Sets whether the popup is visible or hidden. Default: false',
					},
				]}
			/>
			<ExampleBlock
				title="Basic"
				code={`<TEPopup visible={visible}>
	<h1 style={{ textAlign: 'center' }}>Some Title</h1>
	<TEButton onClick={() => setVisible(false)}>Close Button</TEButton>
</TEPopup>
<TEButton onClick={() => setVisible(true)}>View TEPopup</TEButton>`}
			>
				<TEPopup visible={visible}>
					<h1 style={{ textAlign: 'center' }}>Some Title</h1>
					<TEButton onClick={() => setVisible(false)}>Close Button</TEButton>
				</TEPopup>
				<TEButton onClick={() => setVisible(true)}>View TEPopup</TEButton>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEPopupSection