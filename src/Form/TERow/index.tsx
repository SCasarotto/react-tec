import React from 'react'

import { Row } from './styledComponents'

export interface TERowCustomProps {
	rowSize?: string
	last?: boolean
}
export interface TERowProps
	extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		TERowCustomProps {
	//TODO: Fix this. styled-components is weird with refs
	ref?: any
}
export const TERow: React.FC<TERowProps> = (props) => {
	const { rowSize = 'full', last = false, className = '', ...rest } = props
	return <Row className={`TERow ${className}`} rowSize={rowSize} last={last} {...rest} />
}
