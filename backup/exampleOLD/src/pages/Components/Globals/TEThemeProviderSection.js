import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import Codeblock from './../../../components/Codeblock'
import ComponentSection from './../../../components/ComponentSection'

const TEThemeProviderSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEThemeProvider'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Globals/TEThemeContext/TEThemeContext.js'
			/>
			<p>
				<Code>TEThemeProvider</Code> is required to wrap any React TEC components because it
				sets up the styled-components theme used by all of them. Theming in React TEC is not
				fully flusuhed out but you can adjust some properties. By passing an object to prop{' '}
				<Code>theme</Code> you can overwrite these values.
			</p>
			<Codeblock>
				{`const initialTheme = {
	white: '#FFFFFF',
	lightestGray: '#F7F7F7',
	lighterGray: '#F4F4F4',
	lightGray: '#E5E5E5',
	gray: '#C5C5C5',
	darkGray: '#A4A4A4',
	darkerGray: '#5E5E5E',
	black: '#39444C',

	primary: '#007CC3',
	secondary: '#4ADEC2',

	shadowBottom: 'rgba(0, 0, 0, 0.1) 0px 15px 15px -15px, rgba(0, 0, 0, 0.05) 0px 5px 5px -5px',
	shadowTop: 'rgba(0, 0, 0, 0.1) 0px -15px 15px -15px, rgba(0, 0, 0, 0.05) 0px -5px 5px -5px',
	shadowRight: 'rgba(0, 0, 0, 0.1) 15px 0px 15px -15px, rgba(0, 0, 0, 0.05) 5px 0px 5px -5px',
	shadowCenter: 'rgba(0, 0, 0, 0.1) 0px 0px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px',
}`}
			</Codeblock>
			<p>This is done by:</p>
			<Codeblock>
				{`const theme = {
	primary: '#4adec2'
}

const Main = () => (
	<TEThemeProvider theme={theme}>
		<App />
	</TEThemeProvider>
)
`}
			</Codeblock>
			<p>
				In addition to theme properties, you can add styles to the styled-components
				globalStyles. This can be done like the following:
			</p>
			<Codeblock>
				{`const globalStyles = \`
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
\`

const Main = () => (
	<TEThemeProvider globalStyles={globalStyles}>
		<App />
	</TEThemeProvider>
)`}
			</Codeblock>
			<p>
				These additional styles will be placed at the bottom of the global styles allowing
				you to overwrite any above.
			</p>
		</ComponentSection>
	)
}

export default TEThemeProviderSection
