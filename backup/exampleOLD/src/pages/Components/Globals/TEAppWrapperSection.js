import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import Codeblock from './../../../components/Codeblock'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

const TEAppWrapperSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEAppWrapper'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Globals/TEAppWrapper/TEAppWrapper.js'
			/>
			<p>
				<Code>TEAppWrapper</Code> is meant to be the single top level wrapping element you
				need. Having said that, it does contain a number of things.{' '}
				<Code>TEAppWrapper</Code> contain the following:
			</p>
			<Codeblock>
				{`<BrowserRouter>
	<TEScrollToTop>
		<TEThemeProvider theme={theme} globalStyles={globalStyles}>
			<TEPopupProvider>{children}</TEPopupProvider>
		</TEThemeProvider>
	</TEScrollToTop>
</BrowserRouter>`}
			</Codeblock>
			<p>
				Here <Code>BrowserRouter</Code> comes from{' '}
				<a
					href='https://reacttraining.com/react-router/web/api/BrowserRouter'
					target='_blank'
					rel='noopener noreferrer'
				>
					react-router-com
				</a>
				. For all other components, please view thier given documentation page.
			</p>
			<p>
				As for props, the only props <Code>TEAppWrapper</Code> accepts are those that{' '}
				<Code>TEThemeProvider</Code> accepts.
			</p>
			<p>
				<Code>TEAppWrapper</Code> is implemented like the following in this project:
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'sidebarWidth',
						type: 'number',
						note:
							'Number used to determine width and left margin. Should use the same number used in TESideNavbar. Default: 200',
					},
				]}
			/>
			<Codeblock>
				{`const Main = () => (
	<TEAppWrapper globalStyles={globalStyles}>
		<App />
	</TEAppWrapper>
)

ReactDOM.render(<Main />, document.getElementById('root'))`}
			</Codeblock>
		</ComponentSection>
	)
}

export default TEAppWrapperSection
