import React from 'react'

import { Input } from './styledComponents'

export interface TEInputProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	//TODO: Fix this. styled-components is weird with refs
	ref?: any
}

export const TEInput: React.FC<TEInputProps> = (props) => {
	const { type = 'text', disabled = false, className = '', ...rest } = props
	return <Input type={type} disabled={disabled} className={`TEInput ${className}`} {...rest} />
}
