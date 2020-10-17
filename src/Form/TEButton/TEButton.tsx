import React from 'react'

import { Button } from './styledComponents'

export interface TEButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const TEButton = React.forwardRef<HTMLButtonElement, TEButtonProps>((props, ref) => {
	const { className = '', type = 'button', ...rest } = props
	return <Button className={`TEButton ${className}`} type={type} ref={ref} {...rest} />
})
