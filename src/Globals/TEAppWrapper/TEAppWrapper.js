import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import TEScrollToTop from './../../Utility/TEScrollToTop'
import { TEThemeProvider } from './../TEThemeContext'
import { TEPopupProvider } from './../TEPopupContext'

const TEAppWrapper = (props) => {
	const { theme, globalStyles, children } = props

	return (
		<BrowserRouter>
			<TEScrollToTop>
				<TEThemeProvider theme={theme} globalStyles={globalStyles}>
					<TEPopupProvider>{children}</TEPopupProvider>
				</TEThemeProvider>
			</TEScrollToTop>
		</BrowserRouter>
	)
}

export default TEAppWrapper
