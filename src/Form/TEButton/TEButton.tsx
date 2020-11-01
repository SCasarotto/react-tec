import React from 'react'

import { Button } from './styledComponents'

export interface TEButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
/**
 *
 * A styled HTML `<button>`.
 *
 * All props are passed right through to the button. Reference [HTML documentation for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).
 *
 * Note: The button's `type` is defaulted to `'button'` instead of normal HTML where it is defaulted to `'submit'`.
 *
 */
export const TEButton = React.forwardRef<HTMLButtonElement, TEButtonProps>((props, ref) => {
	const { className = '', type = 'button', ...rest } = props
	return <Button className={`TEButton ${className}`} type={type} ref={ref} {...rest} />
})
