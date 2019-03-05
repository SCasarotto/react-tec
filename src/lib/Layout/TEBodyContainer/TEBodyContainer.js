import React from 'react'

import { BodyContainer } from './styledComponents'

const TEBodyContainer = (props) => {
	const { children, ...rest } = props
	return <BodyContainer {...rest}>{children}</BodyContainer>
}

TEBodyContainer.defaultProps = {
	sidebarWidth: 200,
}

export default TEBodyContainer
