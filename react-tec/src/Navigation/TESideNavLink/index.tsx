import React from 'react'
import { matchPath, useLocation } from 'react-router'

import { Li, Link, Title } from './styledComponents'

export interface TESideNavLinkProps {
	title: string
	to: string
	children?: React.ReactNode
	activePath?: string
	exact?: boolean
	className?: string
}
export const TESideNavLink: React.FC<TESideNavLinkProps> = (props) => {
	const location = useLocation()
	const {
		title,
		to,
		children,
		activePath,
		exact,
		className = '',
		...rest
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
				className="TESideNavLinkLink"
				{...rest}>
				{title && <Title className="TESideNavLinkTitle">{title}</Title>}
				{children}
			</Link>
		</Li>
	)
}

TESideNavLink.defaultProps = {
	exact: false,
}
