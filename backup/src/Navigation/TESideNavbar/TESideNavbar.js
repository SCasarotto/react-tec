import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import TESideNavLink from './../TESideNavLink'

import { Container, Logo, NavContainer, MainUl } from './styledComponents'

const TESideNavbar = (props) => {
	const { sidebarWidth, logo, Header, links, className = '' } = props
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
		</Container>
	)
}

TESideNavbar.propTypes = {
	sidebarWidth: PropTypes.number,
	logo: PropTypes.string,
	Header: PropTypes.node,
	links: PropTypes.array,
}

TESideNavbar.defaultProps = {
	sidebarWidth: 200,
}

export default TESideNavbar
