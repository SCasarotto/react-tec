//
//TE Version 0.3.0
//

import React from 'react'
//import PropTypes from 'prop-types'
import { matchPath } from 'react-router'

import { Li, Link, Title } from './styledComponents'

const TESideNavLink = (props) => {
	const { location, title, to, activePath } = props

	return (
		<Li>
			<Link
				isActive={matchPath(location.pathname, { path: activePath || to })}
				activeClassName="active"
				to={to}
			>
				<Title>{title}</Title>
			</Link>
		</Li>
	)
}

export default TESideNavLink
