import React from 'react'

import { Container } from './styledComponents'

export interface TEPanelWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}
export const TEPanelWrapper: React.FC<TEPanelWrapperProps> = (props) => {
	const { className = '', ...rest } = props
	return <Container className={`TEPanelWrapper ${className}`} {...rest} />
}
