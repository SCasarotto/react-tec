import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import TESideNavLink from './../TESideNavLink'

import { Container, Logo, NavContainer, MainUl } from './styledComponents'

const TESideNavbar = (props) => {
	const { sidebarWidth, location, logo, links, className } = props
	return (
		<Container sidebarWidth={sidebarWidth} className={className}>
			{logo && (
				<Link to="/">
					<Logo src={logo} alt="brandmark" title="Rittal" />
				</Link>
			)}
			<NavContainer>
				<MainUl>
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
	links: PropTypes.array,
}

TESideNavbar.defaultProps = {
	sidebarWidth: 200,
}

export default TESideNavbar
