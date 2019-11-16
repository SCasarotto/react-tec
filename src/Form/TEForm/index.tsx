import React from 'react'

import { Form } from './styledComponents'

export interface TEFormProps
	extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	//TODO: Fix this. styled-components is weird with refs
	ref?: any
}
export const TEForm: React.FC<TEFormProps> = (props) => {
	const { className = '', ...rest } = props
	return <Form className={`TEForm ${className}`} {...rest} />
}
