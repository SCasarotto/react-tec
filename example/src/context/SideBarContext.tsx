import React, { createContext, useState, useContext } from 'react'

interface ContextProps {
	sideNavActive: boolean
	setSideNavActive: React.Dispatch<React.SetStateAction<boolean>>
}
export const SideBarActiveContext = createContext<ContextProps>({
	sideNavActive: false,
	setSideNavActive: () => {},
})

export const SideBarActiveProvider: React.FC = (props) => {
	const [sideNavActive, setSideNavActive] = useState(true)

	return (
		<SideBarActiveContext.Provider
			value={{
				sideNavActive,
				setSideNavActive,
			}}
		>
			{props.children}
		</SideBarActiveContext.Provider>
	)
}

export const useSideBarActiveContext = () => {
	return useContext(SideBarActiveContext)
}
