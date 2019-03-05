//
//TE Version 0.3.0
//

import React from 'react'
import { Link } from 'react-router-dom'

// import styles from './styles'

const TELink = (props) => {
	const { children, ...rest } = props
	return <Link {...rest}>{children}</Link>
}

export default TELink
