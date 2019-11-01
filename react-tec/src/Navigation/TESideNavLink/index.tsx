import React from 'react'
import { matchPath, withRouter } from 'react-router'
import { RouteComponentProps } from 'react-router-dom'

import { Li, Link, Title } from './styledComponents'

export interface TESideNavLinkProps extends RouteComponentProps {
	title: string
	to: string
	children?: React.ReactNode
	activePath?: string
	exact?: boolean
	className?: string
}
const TESideNavLink: React.FC<TESideNavLinkProps> = (props) => {
	const {
		location,
		title,
		to,
		children,
		activePath,
		exact,
		className = '',
	} = props

	return (
		<Li className={`TESideNavLink ${className}`}>
			<Link
				isActive={() =>
					!!matchPath(location.pathname, {
						path: activePath || to,
						exact,
					})
				}
				activeClassName="active"
				to={to}
				exact={exact}
				className="TESideNavLinkLink">
				{title && <Title className="TESideNavLinkTitle">{title}</Title>}
				{children}
			</Link>
		</Li>
	)
}

TESideNavLink.defaultProps = {
	exact: false,
}

export default withRouter(TESideNavLink)
