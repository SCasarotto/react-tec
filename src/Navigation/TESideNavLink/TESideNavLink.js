import React from 'react'
//import PropTypes from 'prop-types'
import { matchPath, withRouter } from 'react-router'

import { Li, Link, Title } from './styledComponents'

const TESideNavLink = (props) => {
	const { location, title, to, children, activePath, exact, className } = props

	return (
		<Li className={className}>
			<Link
				isActive={() => matchPath(location.pathname, { path: activePath || to, exact })}
				activeClassName='active'
				to={to}
				exact={exact}
				className='TESideNavLinkLink'
			>
				{title && <Title className='TESideNavLinkTitle'>{title}</Title>}
				{children}
			</Link>
		</Li>
	)
}

TESideNavLink.defaultProps = {
	exact: false,
}

export default withRouter(TESideNavLink)
