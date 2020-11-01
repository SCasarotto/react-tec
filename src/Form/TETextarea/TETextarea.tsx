import React from 'react'

import { Textarea } from './styledComponents'

export interface TETextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const TETextarea = React.forwardRef<HTMLTextAreaElement, TETextareaProps>((props, ref) => {
	const { className = '', ...rest } = props
	return <Textarea className={`TETextarea ${className}`} ref={ref} {...rest} />
})
