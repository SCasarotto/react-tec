import React from 'react'

import { Input } from './styledComponents'

export interface TERadioButtonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
/**
 *
 * A simple checkbox component. `TERadioButtonInput` is simply a styled HTML `<input type="radio">`.
 *
 * All props are passed right through to the radiobutton. Reference [HTML documentation for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio).
 *
 */
export const TERadioButtonInput = React.forwardRef<HTMLInputElement, TERadioButtonInputProps>(
	(props, ref) => {
		const { className = '', ...rest } = props
		return (
			<Input className={`TERadioButtonInput ${className}`} ref={ref} {...rest} type='radio' />
		)
	},
)
