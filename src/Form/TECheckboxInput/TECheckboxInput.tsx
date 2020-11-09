import React from 'react'

import { Input } from './styledComponents'

export interface TECheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
/**
 *
 * A simply a styled HTML `<input type="checkbox">`.
 *
 * All props are passed right through to the checkbox. Reference [HTML documentation for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
 *
 */
export const TECheckboxInput = React.forwardRef<HTMLInputElement, TECheckboxInputProps>(
	(props, ref) => {
		const { className = '', ...rest } = props
		return (
			<Input className={`TECheckboxInput ${className}`} {...rest} ref={ref} type='checkbox' />
		)
	},
)
