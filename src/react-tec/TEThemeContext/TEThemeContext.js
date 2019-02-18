import React, { createContext } from 'react'
import { ThemeProvider } from 'styled-components'

const TEThemeContext = createContext()

const initialTheme = {
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
}

const TEThemeProvider = (props) => {
	return (
		<ThemeProvider theme={{ ...initialTheme, ...props.theme }}>{props.children}</ThemeProvider>
	)
}

export { TEThemeProvider, TEThemeContext }
