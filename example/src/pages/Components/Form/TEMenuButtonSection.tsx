import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { ComponentSection } from '../../../components/ComponentSection'
import { Code } from '../../../components/Code'

export const TEMenuButtonSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEMenuButton'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEMenuButton/index.tsx'
			/>
			<p>
				TEMenuButton is a simple dropdown component. This component relies primarily on{' '}
				<a
					href='https://github.com/popperjs/react-popper'
					target='_blank'
					rel='noopener noreferrer'
				>
					React Popper
				</a>{' '}
				Component. All the props and types are the same besides having added{' '}
				<Code>hideMenu</Code> function to the data that is returned to the children. Please
				note that in order for this component to function, the app must be wrapped by{' '}
				<Code>TEAppWrapper</Code> because it contains the <Code>Manager</Code> wrapping
				component required by Popper.
			</p>
			<iframe
				src='https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTEMenuButtonExample&module=%2Fsrc%2FForm%2FTEMenuButtonExample.tsx'
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title='TEMenuButton'
				allow='geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb'
				sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
			/>
		</ComponentSection>
	)
}
