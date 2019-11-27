import React from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Manager } from 'react-popper'

import { useScrollTop } from '../../Utility/useScrollTop'
import { TEThemeProvider, TEThemeProviderProps } from '../TEThemeContext'
import { TEPopupProvider } from '../TEPopupContext'
interface TEAppWrapperProps extends TEThemeProviderProps {}

const TEAppWrapperContent: React.FC<TEAppWrapperProps> = (props) => {
	const { theme, globalStyles, children } = props
	const location = useLocation()
	useScrollTop(location)

	return (
		<TEThemeProvider theme={theme} globalStyles={globalStyles}>
			<TEPopupProvider>
				<Manager>{children}</Manager>
			</TEPopupProvider>
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
