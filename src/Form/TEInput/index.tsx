import React from 'react'

import { Input } from './styledComponents'

export interface TEInputProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	//TODO: Fix this. styled-components is weird with refs
	ref?: any
}

export const TEInput: React.FC<TEInputProps> = (props) => {
	const { className = '', ...rest } = props
	return <Input className={`TEInput ${className}`} {...rest} />
}
