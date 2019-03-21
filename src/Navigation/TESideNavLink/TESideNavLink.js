//
//TE Version 0.3.0
//

import React from 'react'
//import PropTypes from 'prop-types'
import { matchPath } from 'react-router'

import { Li, Link, Title } from './styledComponents'

const TESideNavLink = (props) => {
	const { location, title, to, children, activePath, exact } = props

	return (
		<Li>
			<Link
				isActive={() => matchPath(location.pathname, { path: activePath || to, exact })}
				activeClassName="active"
				to={to}
				exact={exact}
			>
				{title && <Title>{title}</Title>}
				{children}
			</Link>
		</Li>
	)
}

TESideNavLink.defaultProps = {
	exact: false,
}

export default TESideNavLink
