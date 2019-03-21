import React, { Fragment, useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import TEScrollToTop from './../Utility/TEScrollToTop'
import { TEThemeProvider } from './../TEThemeContext'
import { TEPopupProvider, TEPopupContext } from './../TEPopupContext'
import TEAlert from './../Popup/TEAlert'
import TEConfirm from './../Popup/TEConfirm'
import TENetworkActivity from './../Popup/TENetworkActivity'

const Popups = (props) => {
	const { state, dispatch } = useContext(TEPopupContext)

	return (
		<Fragment>
			{props.children}
			<TEAlert
				title={state.alertTitle}
				message={state.alertMessage}
				onClick={() => dispatch({ type: 'hide_alert' })}
				visible={state.alertVisible}
			/>
			<TEConfirm
				title={state.confirmTitle}
				message={state.confirmMessage}
				leftOnClick={state.confirmLeftOnClick}
				leftButtonTitle={state.confirmLeftTitle}
				rightOnClick={state.confirmRightOnClick}
				rightButtonTitle={state.confirmRightTitle}
				visible={state.confirmVisible}
			/>
			<TENetworkActivity
				visible={state.networkActivityVisible}
				message={state.networkMessage}
			/>
		</Fragment>
	)
}

const TEAppWrapper = (props) => {
	const { theme, children } = props

	return (
		<Router>
			<TEScrollToTop>
				<TEThemeProvider theme={theme}>
					<TEPopupProvider>
						<Popups>{children}</Popups>
					</TEPopupProvider>
				</TEThemeProvider>
			</TEScrollToTop>
		</Router>
	)
}

export default TEAppWrapper
