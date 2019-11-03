import React from 'react'
import {
	BrowserRouter,
	RouteComponentProps,
	useLocation,
} from 'react-router-dom'

import { useScrollTop } from '../../Utility/useScrollTop'
import { TEThemeProvider, TEThemeProviderProps } from '../TEThemeContext'
import { TEPopupProvider, TEPopupProviderProps } from '../TEPopupContext'
interface TEAppWrapperProps
	extends TEThemeProviderProps,
		TEPopupProviderProps,
		RouteComponentProps {}

const TEAppWrapperContent: React.FC<TEAppWrapperProps> = (props) => {
	const { theme, globalStyles, children } = props
	const location = useLocation()
	useScrollTop(location)

	return (
		<TEThemeProvider theme={theme} globalStyles={globalStyles}>
			<TEPopupProvider>{children}</TEPopupProvider>
		</TEThemeProvider>
	)
}

export const TEAppWrapper: React.FC<TEAppWrapperProps> = (props) => {
	return (
		<BrowserRouter>
			<TEAppWrapperContent {...props} />
		</BrowserRouter>
	)
}
