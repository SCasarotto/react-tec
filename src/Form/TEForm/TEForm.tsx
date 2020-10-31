import React from 'react'

import { Form } from './styledComponents'

export interface TEFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}
export const TEForm = React.forwardRef<HTMLFormElement, TEFormProps>((props, ref) => {
	const { className = '', ...rest } = props
	return <Form className={`TEForm ${className}`} ref={ref} {...rest} />
})
