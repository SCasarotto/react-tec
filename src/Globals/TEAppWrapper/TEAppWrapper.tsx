import React from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Manager } from 'react-popper'

import { useScrollTop } from '../../Utility/useScrollTop'
import { TEThemeProvider, TEThemeProviderProps } from '../TEThemeContext'
import { TEPopupProvider } from '../TEPopupContext'

export interface TEAppWrapperProps extends TEThemeProviderProps {}
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

/**
 *
 * TEAppWrapper is meant to be the single top level wrapping element you need. Having said that, it does contain a number of things. `TEAppWrapper` contain the following:
 *
 * ```
 * <BrowserRouter>
 * 	<TEScrollToTop>
 * 		<TEThemeProvider theme={theme} globalStyles={globalStyles}>
 *			<TEPopupProvider>{children}</TEPopupProvider>
 *		</TEThemeProvider>
 * 	</TEScrollToTop>
 * </BrowserRouter>
 * ```
 *
 * Here `BrowserRouter` comes from [react-router-dom](https://reacttraining.com/react-router/web/api/BrowserRouter). For all other components, please view thier given documentation page.
 *
 * As for props, the only props `TEAppWrapper` accepts are those that `TEThemeProvider` accepts.
 *
 * `TEAppWrapper` is implemented like the following in this project:
 *
 * ```
 * const Main = () => (
 * 	<TEAppWrapper globalStyles={globalStyles}>
 *		<App />
 * 	</TEAppWrapper>
 * )
 * ReactDOM.render(<Main />, document.getElementById('root'))
 * ```
 *
 */
export const TEAppWrapper: React.FC<TEAppWrapperProps> = (props) => {
	return (
		<BrowserRouter>
			<TEAppWrapperContent {...props} />
		</BrowserRouter>
	)
}
