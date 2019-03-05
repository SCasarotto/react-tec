import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import TESideNavLink from './../../Navigation/TESideNavLink'

import { Container, Logo, NavContainer, MainUl } from './styledComponents'

const TESideNavbar = (props) => {
	const { sidebarWidth, location, logo, links } = props
	return (
		<Container sidebarWidth={sidebarWidth}>
			{logo && (
				<Link to="/">
					<Logo src={logo} alt="brandmark" title="Rittal" />
				</Link>
			)}
			<NavContainer>
				<MainUl>
					{links &&
						links.map((link, index) => {
							const { title, activePath, to, children } = link
							return (
								<TESideNavLink
									key={index}
									to={to}
									activePath={activePath || to}
									location={location}
									title={title}
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

TESideNavbar.defaultProps = {
	sidebarWidth: 200,
}

export default withRouter(TESideNavbar)
