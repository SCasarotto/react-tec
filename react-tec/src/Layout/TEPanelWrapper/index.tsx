import React from 'react'

import { Container } from './styledComponents'

export interface TEPanelWrapperProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	//TODO: Fix this. styled-components is weird with refs
	ref?: any
}
const TEPanelWrapper: React.FC<TEPanelWrapperProps> = (props) => {
	const { className = '', ...rest } = props
	return <Container className={`TEPanelWrapper ${className}`} {...rest} />
}

export default TEPanelWrapper
