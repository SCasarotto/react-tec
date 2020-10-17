import React from 'react'

import { Input } from './styledComponents'

export interface TECheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const TECheckboxInput = React.forwardRef<HTMLInputElement, TECheckboxInputProps>(
	(props, ref) => {
		const { className = '', ...rest } = props
		return (
			<Input className={`TECheckboxInput ${className}`} {...rest} ref={ref} type='checkbox' />
		)
	},
)
