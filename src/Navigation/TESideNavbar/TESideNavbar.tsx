import React from 'react'
import { Link } from 'react-router-dom'

import { TESideNavLink, TESideNavLinkProps } from '../TESideNavLink'

import { Container, Logo, NavContainer, MainUl } from './styledComponents'

export interface TESideNavbarProps {
	sidebarWidth?: number
	Header?: React.ReactNode
	Footer?: React.ReactNode
	logo?: string
	links?: TESideNavLinkProps[]
	className?: string
}
/**
 *
 * TESideNavbar is the sidebar component you see to the left of this page.
 *
 */
export const TESideNavbar: React.FC<TESideNavbarProps> = (props) => {
	const { sidebarWidth = 200, logo, Header, links, className = '', Footer } = props
	return (
		<Container sidebarWidth={sidebarWidth} className={`TESideNavbar ${className}`}>
			{Header}
			{logo && !Header && (
				<Link to='/' className='TESideNavbarLogoLink'>
					<Logo src={logo} alt='logo' className='TESideNavbarLogo' />
				</Link>
			)}
			<NavContainer className='TESideNavbarNavContainer'>
				<MainUl className='TESideNavbarMainUl'>
					{links &&
						links.map((link, index) => {
							const { title, activePath, to, children, exact } = link
							return (
								<TESideNavLink
									key={index}
									to={to}
									activePath={activePath || to}
									title={title}
									exact={exact}
									className='TESideNavbarNavLink'
								>
									{children}
								</TESideNavLink>
							)
						})}
				</MainUl>
			</NavContainer>
			{Footer}
		</Container>
	)
}
