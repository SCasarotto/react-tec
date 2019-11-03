import React from 'react'

import { Textarea } from './styledComponents'

export interface TETextareaProps
	extends React.DetailedHTMLProps<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	//TODO: Fix this. styled-components is weird with refs
	ref?: any
}
export const TETextarea: React.FC<TETextareaProps> = (props) => {
	const { className = '', ...rest } = props
	return <Textarea className={`TETextarea ${className}`} {...rest} />
}
