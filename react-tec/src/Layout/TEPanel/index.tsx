import React from 'react'

import { TEPanelTitle, TEPanelTitleProps } from '../TEPanelTitle'

import { Container } from './styledComponents'

//Extending div handles className and Children but feels weird here because I don't spead the remained of the props
export interface TEPanelProps extends TEPanelTitleProps {
	//TODO: Fix this. styled-components is weird with refs
	ref?: any
	size?: string
}
export const TEPanel: React.FC<TEPanelProps> = (props) => {
	const {
		size = 'full',
		className = '',
		title,
		leftComponent,
		subtitle,
		rightComponent,
		children,
	} = props
	return (
		<Container className={`TEPanel ${className}`} size={size}>
			{(title || leftComponent || subtitle || rightComponent) && (
				<TEPanelTitle
					title={title}
					leftComponent={leftComponent}
					subtitle={subtitle}
					rightComponent={rightComponent}
					className="TEPanelTitleBar"
				/>
			)}
			{children}
		</Container>
	)
}
