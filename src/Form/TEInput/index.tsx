import React from 'react'

import { Input } from './styledComponents'

export interface TEInputProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	ref?:
		| ((instance: HTMLInputElement | null) => void)
		| React.RefObject<HTMLInputElement>
		| null
		| undefined
}

export const TEInput: React.FC<TEInputProps> = React.forwardRef((props, ref) => {
	const { className = '', ...rest } = props
	return <Input className={`TEInput ${className}`} ref={ref} {...rest} />
})
