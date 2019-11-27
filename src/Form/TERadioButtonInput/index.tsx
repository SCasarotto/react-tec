import React from 'react'

import { Input } from './styledComponents'

export interface TERadioButtonInputProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	ref?:
		| ((instance: HTMLInputElement | null) => void)
		| React.RefObject<HTMLInputElement>
		| null
		| undefined
}
export const TERadioButtonInput: React.FC<TERadioButtonInputProps> = React.forwardRef(
	(props, ref) => {
		const { className = '', ...rest } = props
		return (
			<Input className={`TERadioButtonInput ${className}`} ref={ref} {...rest} type='radio' />
		)
	},
)
