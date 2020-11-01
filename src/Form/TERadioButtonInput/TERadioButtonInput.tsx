import React from 'react'

import { Input } from './styledComponents'

export interface TERadioButtonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const TERadioButtonInput = React.forwardRef<HTMLInputElement, TERadioButtonInputProps>(
	(props, ref) => {
		const { className = '', ...rest } = props
		return (
			<Input className={`TERadioButtonInput ${className}`} ref={ref} {...rest} type='radio' />
		)
	},
)
