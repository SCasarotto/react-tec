//
//TE Version 0.3.0
//

import React from 'react'
import { NavLink } from 'react-router-dom'

// import styles from './styles'

const TENavLink = (props) => {
	const { children, ...rest } = props

	return <NavLink {...rest}>{children}</NavLink>
}

TENavLink.defaultProps = {
	activeClassName: 'active',
}

export default TENavLink
