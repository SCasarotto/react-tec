import React from 'react'

import { Textarea } from './styledComponents'

export interface TETextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
/**
 *
 * TETextarea is a simple styled `<textarea>`.
 *
 * All props are passed right through to the input. Reference the [HTML documentation for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).
 *
 */
export const TETextarea = React.forwardRef<HTMLTextAreaElement, TETextareaProps>((props, ref) => {
	const { className = '', ...rest } = props
	return <Textarea className={`TETextarea ${className}`} ref={ref} {...rest} />
})
