import React from 'react'

import { Input } from './styledComponents'

export interface TECheckboxInputProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	//TODO: Fix this. styled-components is weird with refs
	ref?: any
}
export const TECheckboxInput: React.FC<TECheckboxInputProps> = (props) => {
	const { className = '', ...rest } = props
	return <Input className={`TECheckboxInput ${className}`} {...rest} type='checkbox' />
}
