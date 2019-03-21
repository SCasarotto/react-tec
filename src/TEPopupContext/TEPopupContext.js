import React, { createContext, useReducer } from 'react'

const initialState = {
	alertVisible: false,
	alertTitle: '',
	alertMessage: '',

	confirmTitle: '',
	confirmMessage: '',
	confirmVisible: false,
	confirmLeftOnClick: () => {},
	confirmLeftTitle: 'Cancel',
	confirmRightOnClick: () => {},
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
	return (
		<TEPopupContext.Provider value={{ state, dispatch }}>
			{props.children}
		</TEPopupContext.Provider>
	)
}
