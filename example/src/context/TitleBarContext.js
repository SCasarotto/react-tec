import React, { createContext, useState, useEffect, useContext } from 'react'

export const TitleBarContext = createContext()

export const TitleBarProvider = (props) => {
	const [barTitle, setBarTitle] = useState('')
	return (
		<TitleBarContext.Provider value={{ barTitle, setBarTitle }}>
			{props.children}
		</TitleBarContext.Provider>
	)
}

export const useBarTitle = (title = '', resetValue = '') => {
	const { setBarTitle } = useContext(TitleBarContext)
	useEffect(() => {
		setBarTitle(title)
		return () => setBarTitle(resetValue)
	}, [title])
}
