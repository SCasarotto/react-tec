import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import Codeblock from './../../../components/Codeblock'
import ComponentSection from './../../../components/ComponentSection'

const TEPopupContextSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEPopupContext, TEPopupProvider & useTEPopups'
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
			<iframe
				src='https://codesandbox.io/embed/fzd72?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js'
				title='TEPopupContext & TEPopupProvider'
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
			/>
			<p>
				In addition, <Code>useTEPopups</Code> is a nice helper hook that provides easy to
				use funtions instead of the dispatch types. The below example is identical to the
				one above but uses the <Code>useTEPopups</Code> hook.
			</p>
			<iframe
				src='https://codesandbox.io/embed/fol5p?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js'
				title='useTEPopups'
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

export default TEPopupContextSection
