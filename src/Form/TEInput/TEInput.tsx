import React from 'react'

import { Input } from './styledComponents'

export interface TEInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TEInput = React.forwardRef<HTMLInputElement, TEInputProps>((props, ref) => {
	const { className = '', ...rest } = props
	return <Input className={`TEInput ${className}`} ref={ref} {...rest} />
})
