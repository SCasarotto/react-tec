import React, { useContext } from 'react'

import { TEPopupContext, TEButton } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import Codeblock from './../../../components/Codeblock'
import ComponentSection from './../../../components/ComponentSection'
import ExampleBlock from './../../../components/ExampleBlock'

const TEPopupContextSection = () => {
	const { dispatch } = useContext(TEPopupContext)
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEPopupContext & TEPopupProvider'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Globals/TEPopupContext/TEPopupContext.js'
			/>
			<p>
				<Code>TEPopupContext</Code> and <Code>TEPopupProvider</Code> are used to globally
				show <Code>TEAlert</Code>, <Code>TEConfirm</Code> and <Code>TENetworkActivity</Code>
				. Below are details and examples to dispatch the different actions.
			</p>
			<p>
				The examples below are interacting with the <Code>TEAppWrapper</Code> which contains
				a <Code>TEPopupProvider</Code> of this site. However, you can also set it up as
				follows:
			</p>
			<Codeblock>{`<TEPopupProvider><App/></TEPopupProvider>`}</Codeblock>
			<p>
				And then access it through the <Code>TEPopupContext</Code> via the many different
				ways of access a context. In this example I use <Code>useContext</Code> as follows:
			</p>
			<Codeblock>{`const { dispatch } = useContext(TEPopupContext)`}</Codeblock>
			<ExampleBlock
				title='TEAlert'
				code={`
<TEButton
	onClick={() =>
		dispatch({
			type: 'show_alert',
			payload: {
				alertTitle: 'Alert Title From Context',
				alertMessage:
					'This is a message for my alert coming from TEPopupContext',
				//alertButtonTitle: 'Okay' //These are the default values
				//alertOnClick: () => dispatch({ type: 'hide_confirm' }), //These are the default values

			},
		})
	}
>
	Show Alert From Context
</TEButton>`}
			>
				<TEButton
					onClick={() =>
						dispatch({
							type: 'show_alert',
							payload: {
								alertTitle: 'Alert Title From Context',
								alertMessage:
									'This is a message for my alert coming from TEPopupContext',
								//alertButtonTitle: 'Okay' //These are the default values
								//alertOnClick: () => dispatch({ type: 'hide_confirm' }), //These are the default values
							},
						})
					}
				>
					Show Alert From Context
				</TEButton>
			</ExampleBlock>
			<ExampleBlock
				title='TEConfirm'
				code={`
<TEButton
	onClick={() =>
		dispatch({
			type: 'show_confirm',
			payload: {
				confirmTitle: 'Confirm Title From Context',
				confirmMessage: 'Confirm Message From Context',
				//confirmLeftOnClick: () => dispatch({ type: 'hide_confirm' }), //These are the default values
				confirmLeftTitle: 'Cancel',
				//confirmRightOnClick: () => dispatch({ type: 'hide_confirm' }), //These are the default values
				confirmRightTitle: 'Confirm',
			},
		})
	}
>
	Show Confirm From Context
</TEButton>`}
			>
				<TEButton
					onClick={() =>
						dispatch({
							type: 'show_confirm',
							payload: {
								confirmTitle: 'Confirm Title From Context',
								confirmMessage: 'Confirm Message From Context',
								//confirmLeftOnClick: () => dispatch({ type: 'hide_confirm' }), //These are the default values
								confirmLeftTitle: 'Cancel',
								//confirmRightOnClick: () => dispatch({ type: 'hide_confirm' }), //These are the default values
								confirmRightTitle: 'Confirm',
							},
						})
					}
				>
					Show Confirm From Context
				</TEButton>
			</ExampleBlock>
			<ExampleBlock
				title='TENetworkActivity'
				code={`<TEButton
	onClick={() => {
		dispatch({
			type: 'show_network_activity',
			payload: 'Loading From Context...',
		})
		setTimeout(() => dispatch({ type: 'hide_network_activity' }), 1000)
	}}
>
	Show Network Activity From Context
</TEButton>`}
			>
				<TEButton
					onClick={() => {
						dispatch({
							type: 'show_network_activity',
							payload: 'Loading From Context...',
						})
						setTimeout(() => dispatch({ type: 'hide_network_activity' }), 1000)
					}}
				>
					Show Network Activity From Context
				</TEButton>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEPopupContextSection
