//
//TE Version 0.3.0
//

import React from 'react'

import { Container } from './styledComponents'

const TEPannelWrapper = (props) => {
	const { className, children } = props
	return <Container className={className}>{children}</Container>
}

export default TEPannelWrapper
