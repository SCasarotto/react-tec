import 'react-app-polyfill/ie11'
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Thing } from '../.';

// const App = () => {
//   return (
//     <div>
//       <Thing />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './src/App'

import { TEAppWrapper } from 'react-tec'

import { TitleBarProvider } from './src/context/TitleBarContext'

// import './style.css'

const globalStyles = `
	html,
	body {
		margin: 0;
		padding: 0;
	}

	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

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
			<App />
		</TitleBarProvider>
	</TEAppWrapper>
)

ReactDOM.render(<Main />, document.getElementById('root'))
