import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import { TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../context/TitleBarContext'

import Code from './../../components/Code'
import Codeblock from './../../components/Codeblock'

const GetStarted = (props) => {
	useBarTitle('Get Started')

	return (
		<Fragment>
			<Helmet
				title="React TEC | Get Started"
				description="React TEC is a component library used by 38th Street Studios LLC"
			/>
			<TEPanelWrapper wrapperHeight={80}>
				<TEPanel>
					<h2>Installation</h2>
					<p>The package can be installed via NPM:</p>
					<p>
						<Code>yarn add react-tec</Code> or{' '}
						<Code>npm install react-tec --save</Code>
					</p>
					<p>
						You will also need to install{' '}
						<a href="https://www.styled-components.com/">
							styled-components
						</a>
						,{' '}
						<a href="https://reacttraining.com/react-router/">
							react-route and react-router-dom
						</a>
						.
					</p>
					<p>
						<Code>
							yarn add styled-components react-router
							react-router-dom
						</Code>{' '}
						or{' '}
						<Code>
							npm install styled-components react-router
							react-router-dom --save
						</Code>
					</p>
					<h2>Hello World</h2>
					<p>
						Start by wrapping your app or where ever you plan to use
						React TEC components with <Code>TEThemeContext</Code> or{' '}
						<Code>TEAppWrapper</Code>. These components provide a
						base theme to all components and you will experience an
						error if you don't. I typically do this kind of wrapping
						in index.js. Usually something like:
					</p>
					<Codeblock>
						{`const Main = () => (
	<TEAppWrapper>
		<App />
	</TEAppWrapper>
)

ReactDOM.render(<Main />, document.getElementById('root'))`}
					</Codeblock>
					<p>
						From here you can now start to use the different React
						TEC <Link to="/components">components</Link>.
					</p>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default GetStarted
