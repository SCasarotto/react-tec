import React from 'react'

import { BodyContainer } from './styledComponents'

export interface TEBodyContainerProps
	extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	//TODO: Fix this. styled-components is weird with refs
	ref?: any
	sidebarWidth?: number
}
export const TEBodyContainer: React.FC<TEBodyContainerProps> = (props) => {
	const { className = '', ...rest } = props
	return <BodyContainer className={`TEBodyContainer ${className}`} {...rest} />
}

//TODO: Not if love with this. It might be a good idea to find a better way while also introducing some default responsiveness
TEBodyContainer.defaultProps = {
	sidebarWidth: 200,
}
