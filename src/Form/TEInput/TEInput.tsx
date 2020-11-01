import React from 'react'

import { Input } from './styledComponents'

export interface TEInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
/**
 *
 * TEInput is a simple styled `<input>`.
 *
 * All props are passed right through to the input. Reference the [HTML documentation for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
 *
 */
export const TEInput = React.forwardRef<HTMLInputElement, TEInputProps>((props, ref) => {
	const { className = '', ...rest } = props
	return <Input className={`TEInput ${className}`} ref={ref} {...rest} />
})
