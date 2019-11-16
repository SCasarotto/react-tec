import React, { Fragment, useContext } from 'react'

import { TESideNavbar, TEBodyContainer, TETitleBar } from 'react-tec'

import { TitleBarContext } from './context/TitleBarContext'

export const Layout: React.FC = (props) => {
	const { barTitle } = useContext(TitleBarContext)
	const { children } = props
	return (
		<Fragment>
			<TESideNavbar
				logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
				links={[
					{ title: 'Welcome', to: '/', exact: true },
					{ title: 'Get Started', to: '/get-started' },
					{ title: 'Components', to: '/components' },
				]}
			/>
			<TEBodyContainer>
				<TETitleBar title={barTitle} />
				{children}
			</TEBodyContainer>
		</Fragment>
	)
}
