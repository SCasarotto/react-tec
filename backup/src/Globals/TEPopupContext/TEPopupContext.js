import React, { createContext, useReducer, useContext } from 'react'
import TEAlert from './../../Popup/TEAlert'
import TEConfirm from './../../Popup/TEConfirm'
import TENetworkActivity from './../../Popup/TENetworkActivity'

const initialState = {
	alertVisible: false,
	alertTitle: '',
	alertMessage: '',
	alertOnClick: undefined, //Gets Defaulted
	alertButtonTitle: 'Okay', //Gets Defaulted

	confirmTitle: '',
	confirmMessage: '',
	confirmVisible: false,
	confirmLeftOnClick: undefined, //Gets Defaulted
	confirmLeftTitle: 'Cancel',
	confirmRightOnClick: undefined, //Gets Defaulted
	confirmRightTitle: '',

	networkActivityVisible: false,
	networkMessage: '',
}

export const TEPopupContext = createContext()

let reducer = (state, action) => {
	switch (action.type) {
		case 'show_alert':
			return { ...state, alertVisible: true, ...action.payload }
		case 'hide_alert':
			return { ...state, alertVisible: false }
		case 'show_confirm':
			return { ...state, confirmVisible: true, ...action.payload }
		case 'hide_confirm':
			return { ...state, confirmVisible: false }
		case 'show_network_activity':
			return { ...state, networkActivityVisible: true, networkMessage: action.payload }
		case 'hide_network_activity':
			return { ...state, networkActivityVisible: false }
		default:
			return state
	}
}

export const TEPopupProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const {
		alertTitle,
		alertMessage,
		alertVisible,
		alertOnClick = () => dispatch({ type: 'hide_alert' }),
		alertButtonTitle = 'Okay',

		confirmTitle,
		confirmMessage,
		confirmLeftOnClick = () => dispatch({ type: 'hide_confirm' }),
		confirmLeftTitle,
		confirmRightOnClick = () => dispatch({ type: 'hide_confirm' }),
		confirmRightTitle,
		confirmVisible,

		networkActivityVisible,
		networkMessage,
	} = state

	return (
		<TEPopupContext.Provider value={{ state, dispatch }}>
			{props.children}
			<TEAlert
				visible={alertVisible}
				title={alertTitle}
				message={alertMessage}
				onClick={alertOnClick}
				buttonTitle={alertButtonTitle}
			/>
			<TEConfirm
				visible={confirmVisible}
				title={confirmTitle}
				message={confirmMessage}
				leftOnClick={confirmLeftOnClick}
				leftButtonTitle={confirmLeftTitle}
				rightOnClick={confirmRightOnClick}
				rightButtonTitle={confirmRightTitle}
			/>
			<TENetworkActivity visible={networkActivityVisible} message={networkMessage} />
		</TEPopupContext.Provider>
	)
}

export const useTEPopups = () => {
	const { dispatch } = useContext(TEPopupContext)

	//TEAlert
	const showAlert = ({ title, message, onClick, buttonTitle }) =>
		dispatch({
			type: 'show_alert',
			payload: {
				alertTitle: title,
				alertMessage: message,
				alertOnClick: onClick,
				alertButtonTitle: buttonTitle,
			},
		})
	const hideAlert = () => dispatch({ type: 'hide_alert' })

	//TEConfirm
	const showConfirm = ({ title, message, leftOnClick, leftTitle, rightOnClick, rightTitle }) =>
		dispatch({
			type: 'show_confirm',
			payload: {
				confirmTitle: title,
				confirmMessage: message,
				confirmLeftOnClick: leftOnClick,
				confirmLeftTitle: leftTitle,
				confirmRightOnClick: rightOnClick,
				confirmRightTitle: rightTitle,
			},
		})
	const hideConfirm = () => dispatch({ type: 'hide_confirm' })

	const showNetworkActivity = (message) =>
		dispatch({
			type: 'show_network_activity',
			payload: message,
		})
	const hideNetworkActivity = () => dispatch({ type: 'hide_network_activity' })

	return {
		showAlert,
		hideAlert,
		showConfirm,
		hideConfirm,
		showNetworkActivity,
		hideNetworkActivity,
	}
}
