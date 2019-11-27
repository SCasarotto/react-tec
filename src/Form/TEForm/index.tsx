import React from 'react'

import { Form } from './styledComponents'

export interface TEFormProps
	extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	ref?:
		| ((instance: HTMLFormElement | null) => void)
		| React.RefObject<HTMLFormElement>
		| null
		| undefined
}
export const TEForm: React.FC<TEFormProps> = React.forwardRef((props, ref) => {
	const { className = '', ...rest } = props
	return <Form className={`TEForm ${className}`} ref={ref} {...rest} />
})
