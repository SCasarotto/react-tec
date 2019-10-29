import React from 'react'

import { Container } from './styledComponents'

const TEPannelWrapper = (props) => {
	const { className = '', ...rest } = props
	return <Container className={`TEPanelWrapper ${className}`} {...rest} />
}

export default TEPannelWrapper
