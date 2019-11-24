import React, { useContext } from 'react'

import { TETitleBar } from 'react-tec'

import { TitleBarContext, useSideBarActiveContext } from '../context'

import {
	SideNavbar,
	LogoWrapper,
	LogoLink,
	Logo,
	BodyContainer,
	LeftWrapper,
	SlideNavButton,
	SlideNavIcon,
	Title,
} from './styledComponents'

export const Layout: React.FC = (props) => {
	const { barTitle } = useContext(TitleBarContext)
	const { sideNavActive, setSideNavActive } = useSideBarActiveContext()
	const { children } = props

	return (
		<>
			<SideNavbar
				sideNavActive={sideNavActive}
				Header={
					<LogoWrapper>
						<LogoLink to='/'>
							<Logo
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png'
								alt='React TEC'
							/>
						</LogoLink>
					</LogoWrapper>
				}
				links={[
					{ title: 'Welcome', to: '/', exact: true },
					{ title: 'Get Started', to: '/get-started' },
					{ title: 'Components', to: '/components' },
				]}
			/>
			<BodyContainer sideNavActive={sideNavActive}>
				<TETitleBar
					leftComponent={
						<LeftWrapper>
							<SlideNavButton onClick={() => setSideNavActive((active) => !active)}>
								<SlideNavIcon />
							</SlideNavButton>
							<Title>{barTitle}</Title>
						</LeftWrapper>
					}
				/>
				{children}
			</BodyContainer>
		</>
	)
}
