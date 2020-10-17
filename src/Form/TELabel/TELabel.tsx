import React from 'react'

import { Label } from './styledComponents'

export interface TELabelCustomProps {
	required?: boolean
	disabled?: boolean
}
export interface TELabelProps
	extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
		TELabelCustomProps {
	ref?:
		| ((instance: HTMLLabelElement | null) => void)
		| React.RefObject<HTMLLabelElement>
		| null
		| undefined
}

export const TELabel: React.FC<TELabelProps> = React.forwardRef((props, ref) => {
	const { children, required, className = '', ...rest } = props
	return (
		<Label className={`TELabel ${className}`} ref={ref} {...rest}>
			{children}
			{required ? ' *' : ''}
		</Label>
	)
})
