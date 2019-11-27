import React from 'react'

import { Input } from './styledComponents'

export interface TECheckboxInputProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	ref?:
		| ((instance: HTMLInputElement | null) => void)
		| React.RefObject<HTMLInputElement>
		| null
		| undefined
	// ref?: any
}
export const TECheckboxInput: React.FC<TECheckboxInputProps> = React.forwardRef((props, ref) => {
	const { className = '', ...rest } = props
	return <Input className={`TECheckboxInput ${className}`} {...rest} ref={ref} type='checkbox' />
})
