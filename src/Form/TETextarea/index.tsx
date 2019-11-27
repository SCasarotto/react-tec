import React from 'react'

import { Textarea } from './styledComponents'

export interface TETextareaProps
	extends React.DetailedHTMLProps<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	ref?:
		| ((instance: HTMLTextAreaElement | null) => void)
		| React.RefObject<HTMLTextAreaElement>
		| null
		| undefined
}
export const TETextarea: React.FC<TETextareaProps> = React.forwardRef((props, ref) => {
	const { className = '', ...rest } = props
	return <Textarea className={`TETextarea ${className}`} ref={ref} {...rest} />
})
