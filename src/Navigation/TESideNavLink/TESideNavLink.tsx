import React, { ReactNode } from 'react'
import { matchPath, useLocation } from 'react-router'

import { Li, Link, Title } from './styledComponents'

export interface TESideNavLinkProps {
	title?: string
	to: string
	activePath?: string
	exact?: boolean
	className?: string
	children?: ReactNode
}
/**
 *
 * TESideNavLink is a stylized `TENavLink` built specifically for left navbars.
 *
 * Note: `TESideNavLink` is a `TENavLink` warpper in an `li`. So its best this component is placed inside of a `ul`.
 *
 */
export const TESideNavLink: React.FC<TESideNavLinkProps> = (props) => {
	const location = useLocation()
	const { title, to, children, activePath, exact, className = '', ...rest } = props

	return (
		<Li className={`TESideNavLink ${className}`}>
			<Link
				isActive={() =>
					!!matchPath(location.pathname, {
						path: activePath || to,
						exact,
					})
				}
				activeClassName='active'
				to={to}
				exact={exact}
				className='TESideNavLinkLink'
				{...rest}
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
