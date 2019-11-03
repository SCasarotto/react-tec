import React from 'react'

import { Label } from './styledComponents'

export interface TELabelCustomProps {
	required?: boolean
	disabled?: boolean
}
export interface TELabelProps
	extends React.DetailedHTMLProps<
			React.LabelHTMLAttributes<HTMLLabelElement>,
			HTMLLabelElement
		>,
		TELabelCustomProps {
	//TODO: Fix this. styled-components is weird with refs
	ref?: any
}

export const TELabel: React.FC<TELabelProps> = (props) => {
	const { children, required, className = '', ...rest } = props
	return (
		<Label className={`TELabel ${className}`} {...rest}>
			{children}
			{required ? ' *' : ''}
		</Label>
	)
}
