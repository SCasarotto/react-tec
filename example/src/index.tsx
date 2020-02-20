import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import * as serviceWorker from './serviceWorker'

import { TEAppWrapper } from 'react-tec'

import { TitleBarProvider, SideBarActiveProvider } from './context'

import './index.css'

const globalStyles = `
	html,
	body {
		margin: 0;
		padding: 0;
	}

	* {
		font-family: 'Open Sans', sans-serif;
	}

	h1, h2, h3, h4, h5, h6 {
		margin-top: 0px;
	}
`

const Main = () => (
	<TEAppWrapper globalStyles={globalStyles}>
		<TitleBarProvider>
			<SideBarActiveProvider>
				<App />
			</SideBarActiveProvider>
		</TitleBarProvider>
	</TEAppWrapper>
)

ReactDOM.render(<Main />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
