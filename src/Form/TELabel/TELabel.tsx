import React from 'react'

import { Label } from './styledComponents'

// TODO: See if these can be merged and not separate ... seems weird
export interface TELabelCustomProps {
	required?: boolean
	disabled?: boolean
}
export interface TELabelProps
	extends React.LabelHTMLAttributes<HTMLLabelElement>,
		TELabelCustomProps {}

export const TELabel = React.forwardRef<HTMLLabelElement, TELabelProps>((props, ref) => {
	const { children, required, className = '', ...rest } = props
	return (
		<Label className={`TELabel ${className}`} ref={ref} {...rest}>
			{children}
			{required ? ' *' : ''}
		</Label>
	)
})
