import React from 'react'

import { Form } from './styledComponents'

export interface TEFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}
/**
 *
 * A simple form component. `TEForm` is simply a styled HTML `<form>`.
 *
 * All props are passed right through to the form. Reference [HTML documentation for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form).
 *
 */
export const TEForm = React.forwardRef<HTMLFormElement, TEFormProps>((props, ref) => {
	const { className = '', ...rest } = props
	return <Form className={`TEForm ${className}`} ref={ref} {...rest} />
})
