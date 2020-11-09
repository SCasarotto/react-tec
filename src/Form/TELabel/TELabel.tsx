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
/**
 *
 * A simple styling of an html `<label>`.
 *
 * Besides the props mentioned below, all props are passed right through to the label. Reference the [HTML documentation for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label).
 *
 */
export const TELabel = React.forwardRef<HTMLLabelElement, TELabelProps>((props, ref) => {
	const { children, required, className = '', ...rest } = props
	return (
		<Label className={`TELabel ${className}`} ref={ref} {...rest}>
			{children}
			{required ? ' *' : ''}
		</Label>
	)
})
